// פונקציה לרינדור פרטי ספר בסיידבר
function renderBookDetailsToSidebar(book, index) {
    const sidebar = document.querySelector('.sidebar');
    Gcounter = 1;
    if (book) {
        sidebar.innerHTML = `
            <h3 class="sidbar-title">${book.title}</h3>
            <div class="book-section">
            <div class="image-div">
            <img src="${book.image}" alt="${book.title}" class="book-image">
            </div>
            <div class="book-info">
            <p class="sider-price"><p class="sider-price-in">${Gdictionary[Glanguage]["price"]}:</p> ${book.price.toFixed(2)} $</p>
            <div class="amount-section">
                <span>${Gdictionary[Glanguage]["amount"]}: </span>
                <button class="sider-button" onclick="decreaseCounter(${book.id},${index})">-</button>
                <span id="counter">${Gcounter}</span>
                <button class="sider-button" onclick="increaseCounter(${book.id},${index})">+</button>
            </div>
            </div>
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
        <div class="grid-item title-item" onclick="selectBook(${index})">${book.title}</div>
        <div class="grid-item" id="bookPrice">${book.price.toFixed(2)} $</div>
        <div class="grid-item">
            <button class="grid-button read" onclick="selectBook(${index})">Read</button>
            <button class="grid-button update" onclick="openForm('${Gupdate}', ${getRelativendex(index)})">Update</button>
            <button class="grid-button delete" onclick="deleteBook(${index})">🗑</button>
        </div>
    `;
}

// פונקציה לרינדור רשימת ספרים
function renderBooksList(books) {
    let gridHTML = `<div class="grid-header">${Gdictionary[Glanguage]['id']}</div>
                    <div class="grid-header" onclick="toggleSortByTitle()">${Gdictionary[Glanguage]['title']+(GsortByTitle ? "▲" : "▼")}</div>
                    <div class="grid-header" onclick="toggleSortByPrice()">${Gdictionary[Glanguage]['price']+(GsortByPrice ? "▲" : "▼")}</div>
                    <div class="grid-header">${Gdictionary[Glanguage]['action']}</div>`;

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
    <h2>-------------------</h2>
    <form id="bookForm" onsubmit="${mode === Gadd ? "addBook(event)" : `updateBook(event, ${bookIndex})`}">
        <label for="id">${Gdictionary[Glanguage]["bookId"]}:</label>
        <input type="number" id="id" value="${book ? book.id : 0}" placeholder="Book id" required>

        <label for="title">${Gdictionary[Glanguage]["title"]}:</label>
        <input type="text" id="title" value="${book ? book.title : ""}" placeholder="Title" required>

        <label for="price">${Gdictionary[Glanguage]["price"]}:</label>
        <input type="number" step="0.01" id="price" value="${book ? book.price.toFixed(2) : 0}" placeholder="Price" required>

        <label for="image">${Gdictionary[Glanguage]["imageUrl"]}:</label>
        <input type="url" id="image" value="${book ? book.image : ""}" placeholedr="Image URL" required>

        <button type="submit" class="submit-button">${mode} Book</button>
    </form>
`;
    document.querySelector('.form-container').innerHTML = formHTML;
}


function renderLanguages(){
    document.getElementsByClassName('ruler-button')[0].innerHTML = Gdictionary[Glanguage]['newBook'];
    document.getElementsByClassName('ruler-button')[1].innerHTML = Gdictionary[Glanguage]['loadData'];
    document.getElementsByClassName('grid-header')[0].innerHTML = Gdictionary[Glanguage]['id'];
    document.getElementsByClassName('grid-header')[1].innerHTML = Gdictionary[Glanguage]['title']+(GsortByTitle ? "▲" : "▼");
    document.getElementsByClassName('grid-header')[2].innerHTML = Gdictionary[Glanguage]['price']+(GsortByPrice ? "▲" : "▼");
    document.getElementsByClassName('grid-header')[3].innerHTML = Gdictionary[Glanguage]['action'];
    document.getElementsByClassName('move-page-button')[0].innerHTML = Gdictionary[Glanguage]['previousPage'];
    document.getElementsByClassName('move-page-button')[1].innerHTML = Gdictionary[Glanguage]['nextPage'];
    let sider = document.getElementsByClassName('sider-price-in')[0];
    if(sider) sider.innerHTML = Gdictionary[Glanguage]['price']+(':');
    document.getElementsByTagName('span')[0].innerHTML = Gdictionary[Glanguage]['amount'];

    const language = Glanguage;
    console.log(language);
    const body = document.body;
    const bookListSection = document.querySelector('.main-content');
    const bookDetailsSection = document.querySelector('.sidebar');
    if (language === 'he') {
        
        body.setAttribute('dir', 'rtl');
        body.style.direction = 'rtl';
        bookDetailsSection.style.float = 'left';
        bookListSection.style.float = 'right';

    } else {
        body.setAttribute('dir', 'ltr');
        body.style.direction = 'ltr';
        bookDetailsSection.style.float = 'right';
        bookListSection.style.float = 'left';
    }
}

