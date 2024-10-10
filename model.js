let Gbooks = [
    { id: 1, title: "The Great Gatsby", price: 10.99, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/800px-The_Great_Gatsby_Cover_1925_Retouched.jpg" },
    { id: 2, title: "To Kill a Mockingbird", price: 8.99, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/800px-The_Great_Gatsby_Cover_1925_Retouched.jpg" },
    { id: 3, title: "1984", price: 12.99, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/800px-The_Great_Gatsby_Cover_1925_Retouched.jpg" },
    { id: 4, title: "Pride and Prejudice", price: 9.99, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/800px-The_Great_Gatsby_Cover_1925_Retouched.jpg" },
    { id: 5, title: "The Catcher in the Rye", price: 11.99, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/800px-The_Great_Gatsby_Cover_1925_Retouched.jpg" },
    { id: 6, title: "Moby Dick", price: 14.99, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/800px-The_Great_Gatsby_Cover_1925_Retouched.jpg" },
    { id: 7, title: "War and Peace", price: 19.99, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/800px-The_Great_Gatsby_Cover_1925_Retouched.jpg" },
    { id: 8, title: "The Odyssey", price: 13.99, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/800px-The_Great_Gatsby_Cover_1925_Retouched.jpg" },
    { id: 9, title: "The Brothers Karamazov", price: 15.99, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/800px-The_Great_Gatsby_Cover_1925_Retouched.jpg" },
    { id: 10, title: "Crime and Punishment", price: 10.99, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/800px-The_Great_Gatsby_Cover_1925_Retouched.jpg" },
    { id: 11, title: "The Picture of Dorian Gray", price: 7.99, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/800px-The_Great_Gatsby_Cover_1925_Retouched.jpg" },
    { id: 12, title: "Jane Eyre", price: 9.49, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/800px-The_Great_Gatsby_Cover_1925_Retouched.jpg" },
    { id: 13, title: "Brave New World", price: 11.49, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/800px-The_Great_Gatsby_Cover_1925_Retouched.jpg" },
    { id: 14, title: "Fahrenheit 451", price: 8.49, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/800px-The_Great_Gatsby_Cover_1925_Retouched.jpg" },
    { id: 15, title: "Wuthering Heights", price: 10.49, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/800px-The_Great_Gatsby_Cover_1925_Retouched.jpg" },
    { id: 16, title: "The Alchemist", price: 12.49, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/800px-The_Great_Gatsby_Cover_1925_Retouched.jpg" },
    { id: 17, title: "The Hitchhiker's Guide to the Galaxy", price: 9.99, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/800px-The_Great_Gatsby_Cover_1925_Retouched.jpg" },
    { id: 18, title: "Little Women", price: 8.99, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/800px-The_Great_Gatsby_Cover_1925_Retouched.jpg" },
    { id: 19, title: "The Grapes of Wrath", price: 13.99, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/800px-The_Great_Gatsby_Cover_1925_Retouched.jpg" },
    { id: 20, title: "The Bell Jar", price: 11.99, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/800px-The_Great_Gatsby_Cover_1925_Retouched.jpg" }
];


var GbooksList;
var Gcounter = 0;
var GbooksCounter;
var Gpages;
var GcurrentPage;

var Gadd = 'Add';
var Gupdate = 'Update';

var GsortByPrice = 0;
var GsortByTitle = 0;

var Glanguage = 'en';


const Gdictionary = {
    en: {
        newBook: "+ New Book",
        loadData: "Load Data",
        id: "Id",
        title: "Title",
        price: "Price",
        action: "Action",
        read: "Read",
        update: "Update",
        book: "Book",
        bookId: "Book Id",
        imageUrl: "Image URL",
        previousPage: "⭠ Prev",
        nextPage: "Next ⭢",
        amount: "Amount",
    },
    he: {
        newBook: "+ ספר חדש",
        loadData: "טען נתונים",
        id: "מזהה",
        title: "כותרת",
        price: "מחיר",
        action: "פעולה",
        read: "קרא",
        update: "עדכן",
        book: "ספר",
        bookId: "מזהה ספר",
        imageUrl: "כתובת תמונה",
        previousPage: "⭢הקודם",
        nextPage: "הבא ⭠ ",
        amount: "כמות",
    }
};
