

function onLoad() {
    let books = localStorage.getItem('books');
    if (books) {GbooksList = JSON.parse(books);} 
    updateBooksCounter(books? JSON.parse(books) : []);
    renderPagination(Gpages);
    updateCurrentPage(1);
}


