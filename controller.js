// פונקציה לטעינת נתונים ל-localStorage
function loadData() {
    localStorage.setItem('books', JSON.stringify(Gbooks));
    console.log("Books loaded into localStorage.");
}

// פונקציה להוספת ספר חדש ל-localStorage
function addBook(event) {
    event.preventDefault(); 
    const title = document.getElementById('title').value;
    const price = document.getElementById('price').value;
    const image = document.getElementById('image').value;

    const booksInStorage = JSON.parse(localStorage.getItem('books')) || [];

    const newBook = {
        id: booksInStorage.length + 1,
        title,
        price: parseFloat(price),
        image
    };

    booksInStorage.push(newBook);
    localStorage.setItem('books', JSON.stringify(booksInStorage));

    closeForm();
    console.log("Book added:", newBook);
}


function selectBook(index) {
    let books = localStorage.getItem('books');
    let book = JSON.parse(books)[index];
    renderBookDetailsToSidebar(book, index);
}