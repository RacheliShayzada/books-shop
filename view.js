// פונקציה לרינדור פרטי ספר בסיידבר
function renderBookDetailsToSidebar(book, index) {
    const sidebar = document.querySelector('.sidebar');
    Gcounter = 1;
    if (book) {
        sidebar.innerHTML = `
            <h3>${book.title}</h3>
            <img src="${book.image}" alt="${book.title}" class="book-image">
            <p class="sider-price">Price: ${book.price.toFixed(2)} $</p>
            <div class="rate-section">
                <span>Amount: </span>
                <button class="sider-button" onclick="decreaseCounter(${book.id},${index})">-</button>
                <span id="counter">${Gcounter}</span>
                <button class="sider-button" onclick="increaseCounter(${book.id},${index})">+</button>
            </div>
        `;
    } else {
        sidebar.innerHTML = '<p>אין מה לראות כאן</p>';
    }
}

// פונקציה לרינדור ספר בודד
function renderBook(book, index) {
    return `
        <div class="grid-item">${book.id}</div>
        <div class="grid-item" onclick="selectBook(${index})">${book.title}</div>
        <div class="grid-item" id="bookPrice">${book.price.toFixed(2)} $</div>
        <div class="grid-item">
            <button onclick="selectBook(${index})">Read</button>
            <button onclick="openForm('${Gupdate}', ${getRelativendex(index)})">Update</button>
            <button onclick="deleteBook(${index})">🗑</button>
        </div>
    `;
}

// פונקציה לרינדור רשימת ספרים
function renderBooksList(books) {
    let gridHTML = `<div class="grid-header">Id</div>
                    <div class="grid-header" onclick="toggleSortByTitle()">Title ${GsortByTitle?"▲":"▼"}</div>
                    <div class="grid-header" onclick="toggleSortByPrice()">Price ${GsortByPrice?"▲":"▼"}</div>
                    <div class="grid-header">Action</div>`;

    books.forEach((book, index) => {
        gridHTML += renderBook(book, index);
    });

    // הכנסת ה-HTML לתוך אלמנט שמכיל את הגריד בדף
    document.querySelector('.book-list-grid').innerHTML = gridHTML;
}

function renderCounter(index) {
    document.querySelector('#counter').textContent = Gcounter;
    let books = localStorage.getItem('books');
    let book = JSON.parse(books)[index - 1];
    document.querySelector('.sider-price').textContent = `Price: ${(Gcounter * book.price)} $`;
}

//function to render the buttons of the pagges
function renderPagination(totalPages) {
    let paginationHTML = '';
    for (let i = 1; i <= totalPages; i++) {
        if (i === GcurrentPage)
            paginationHTML += `<button class="page-button active-page" onclick="updateCurrentPage(${i})">${i}</button>`;
        else
            paginationHTML += `<button class="page-button" onclick="updateCurrentPage(${i})">${i}</button>`;
    }
    document.querySelector('.pages-buttons').innerHTML = paginationHTML;
}

//function to render the form between adding and updating a book by string 'add' or 'update'
function renderForm(mode, bookIndex) {
    let book = getBookByIndex(bookIndex);
    let formHTML = `
    <h2>${mode} Book</h2>
    <form id="bookForm" onsubmit="${mode === Gadd ? "addBook(event)" : `updateBook(event, ${bookIndex})`}">
        <label for="id">Book id:</label>
        <input type="number" id="id" value="${book ? book.id : 0}" placeholder="Book id" required>

        <label for="title">Title:</label>
        <input type="text" id="title" value="${book ? book.title : ""}" placeholder="Title" required>

        <label for="price">Price:</label>
        <input type="number" step="0.01" id="price" value="${book ? book.price.toFixed(2) : 0}" placeholder="Price" required>

        <label for="image">Image URL:</label>
        <input type="url" id="image" value="${book ? book.image : ""}" placeholedr="Image URL" required>

        <button type="submit">${mode} Book</button>
    </form>
`;
    document.querySelector('.form-container').innerHTML = formHTML;
}


