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
                <span>Rate: </span>
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
        <div class="grid-item" id="price">${book.price.toFixed(2)} $</div>
        <div class="grid-item">
            <button onclick="selectBook(${index})">Read</button>
            <button onclick="updateBook(${book.id})">Update</button>
            <button onclick="deleteBook(${book.id})">🗑</button>
        </div>
    `;
}

// פונקציה לרינדור רשימת ספרים
function renderBooksList(books) {
    let gridHTML = '';
    
    books.forEach((book,index) => {
        gridHTML += renderBook(book, index);
    });
    
    // הכנסת ה-HTML לתוך אלמנט שמכיל את הגריד בדף
    document.querySelector('.book-list-grid').innerHTML += gridHTML;
}


function decreaseCounter(index) {
    if (Gcounter <= 1) return;
    Gcounter--;
    renderCounter(index);
}

function increaseCounter(index) {
    Gcounter++;
    renderCounter(index);
}

function renderCounter(index)
{
    document.querySelector('#counter').textContent = Gcounter;
    let books = localStorage.getItem('books');
    let book = JSON.parse(books)[index-1];
    document.querySelector('.sider-price').textContent = `Price: ${(Gcounter * book.price)} $`;
}

