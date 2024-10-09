

function onLoad() {
    renderBooksList(localStorage.getItem('books')? JSON.parse(localStorage.getItem('books')) : []);
}