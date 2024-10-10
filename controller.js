// פונקציה לטעינת נתונים ל-localStorage
function loadData() {
    localStorage.setItem('books', JSON.stringify(Gbooks));
    GbooksList = Gbooks;
    console.log("Books loaded into localStorage.");
    GbooksCounter = GbooksList.length;
    renderBooksList(getCurenntBooks());
    updatePages();
}

//book CRUD

//get book by index
function getBookByIndex(index) {
    return JSON.parse(localStorage.getItem('books'))[index];
}
// פונקציה להוספת ספר חדש ל-localStorage
function addBook(event) {
    event.preventDefault();
    const id = parseInt(document.getElementById('id').value);
    const title = document.getElementById('title').value;
    const price = document.getElementById('price').value;
    const image = document.getElementById('image').value;

    const booksInStorage = JSON.parse(localStorage.getItem('books')) || [];

    const newBook = {
        id,
        title,
        price: parseFloat(price),
        image
    };

    booksInStorage.push(newBook);
    GbooksList = booksInStorage;
    localStorage.setItem('books', JSON.stringify(booksInStorage));
    updateBooksCounter(GbooksList);
    renderBooksList(getCurenntBooks());
    updatePages();

    closeForm();
    console.log("Book added:", newBook);
}

function updateBook(event, index) {
    console.log("Update book:", index);
    event.preventDefault();
    const id = parseInt(document.getElementById('id').value);
    const title = document.getElementById('title').value;
    const priceInput = document.getElementById('price').value;
    const image = document.getElementById('image').value;

    // ודא שהמחיר הוא מספר תקין
    const price = priceInput ? parseFloat(priceInput) : 0;

    let books = JSON.parse(localStorage.getItem('books'));
    books[index] = {
        id,
        title,
        price: parseFloat(price),
        image
    };
    console.log(books[index]);
    GbooksList = books;
    localStorage.setItem('books', JSON.stringify(books));
    renderBooksList(getCurenntBooks());
    closeForm();
}

//function to delete book by index

function deleteBook(index) {
    index = getRelativendex(index);
    console.log("Delete book:", index);
    GbooksList.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(GbooksList));
    updateBooksCounter(GbooksList);
    renderBooksList(getCurenntBooks());
    updatePages();
    let page = GcurrentPage;
    if (Gpages < page) page === Gpages;//במידה ומחקנו את המוצר האחרון שהיה לבד בעמוד
    updateCurrentPage(page);
    console.log("Book deleted. page: " + page + " of " + Gpages);
}


function selectBook(index) {
    let books = localStorage.getItem('books');
    let book = JSON.parse(books)[index];
    renderBookDetailsToSidebar(book, index);
}

//pages
function updatePages() {
    Gpages = Math.ceil(GbooksCounter / 5);
    renderPagination(Gpages);
}

function updateCurrentPage(page) {
    GcurrentPage = page;
    renderBooksList(getCurenntBooks());
    renderPagination(Gpages);
}

function decreaseCurrentPage() {
    updateCurrentPage(GcurrentPage === 1 ? Gpages : GcurrentPage - 1);
}

function increaseCurrentPage() {
    updateCurrentPage(GcurrentPage === Gpages ? 1 : GcurrentPage + 1);
}

//counter
function decreaseCounter(index) {
    if (Gcounter <= 1) return;
    Gcounter--;
    renderCounter(index);
}

function increaseCounter(index) {
    Gcounter++;
    renderCounter(index);
}

function updateBooksCounter(books) {
    GbooksCounter = books.length;
    updatePages();
}

//other functions
function getRelativendex(index) {
    return (GcurrentPage - 1) * 5 + index;
}

function getCurenntBooks() {
    return GbooksList.slice((GcurrentPage - 1) * 5, GcurrentPage * 5);
}

//sorting functions

function sortBooksByPriceToUp() {
    GbooksList.sort((a, b) => b.price - a.price);
    renderBooksList(getCurenntBooks());
}

function sortBooksByPriceToDown() {
    GbooksList.sort((a, b) => a.price - b.price);
    renderBooksList(getCurenntBooks());
}

function sortBooksByTitleToUp() {
    GbooksList.sort((a, b) => {
        // מיון עם רגישות קלט (לא משנה אם האות גדולה או קטנה)
        return a.title.localeCompare(b.title, undefined, {
            sensitivity: 'base', // רגישות בסיסית - מתעלמת מהבדל בין אותיות גדולות לקטנות
            numeric: true, // מאפשר למיין מספרים (אם יש מספרים בכותרות)
            localeMatcher: 'best fit' // משתמש בשיטת ההתאמה הטובה ביותר
        });
    });
    renderBooksList(getCurenntBooks());
}

function sortBooksByTitleToLow() {
    GbooksList.sort((a, b) => {
        // מיון עם רגישות קלט (לא משנה אם האות גדולה או קטנה) בסדר הפוך
        return b.title.localeCompare(a.title, undefined, {
            sensitivity: 'base', // רגישות בסיסית - מתעלמת מהבדל בין אותיות גדולות לקטנות
            numeric: true,       // מאפשר למיין מספרים (אם יש מספרים בכותרות)
            localeMatcher: 'best fit' // משתמש בשיטת ההתאמה הטובה ביותר
        });
    });
    renderBooksList(getCurenntBooks());
}

//toggles

function toggleSortByPrice() {
    if (GsortByPrice) {
        sortBooksByPriceToDown();
    } else {
        sortBooksByPriceToUp();
    }
    GsortByPrice =!GsortByPrice;
    renderBooksList(getCurenntBooks());
}

function toggleSortByTitle() {
    if (GsortByTitle) {
        sortBooksByTitleToLow();
    } else {
        sortBooksByTitleToUp();
    }
    GsortByTitle =!GsortByTitle;
    renderBooksList(getCurenntBooks());
}

