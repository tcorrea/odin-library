let myLibrary = [];

function Book({ title, author, pages, read }) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(bookObj) {
    const book = new Book(bookObj);
    myLibrary.push(book);
}

function showBooks() {
    const booksTable = document.querySelector(".books");
    // Clearing element
    booksTable.innerHTML = "";

    myLibrary.map((item) => {
        const bookTR = document.createElement("tr");

        for (let index = 0; index < Object.keys(item).length; index++) {
            const bookTD = document.createElement("td");
            bookTD.innerText = item[Object.keys(item)[index]];
            bookTR.appendChild(bookTD);
        }
        booksTable.appendChild(bookTR);
    });
}

const form = document.getElementById("book-form");

form.addEventListener("submit", (event) => {
    // stop form submission
    event.preventDefault();
    const title = form.elements["title"].value;
    const author = form.elements["author"].value;
    // const pages = parseInt(form.elements["pages"].value);
    const pages = ~~form.elements["pages"].value;
    const read = form.elements["read"].value == "0" ? false : true;
    addBookToLibrary({ title, author, pages, read });
    showBooks();
});

document.addEventListener("DOMContentLoaded", function() {
    addBookToLibrary({
        title: "The Hobbit by J.R.R.",
        author: "Tolkien",
        pages: 295,
        read: false,
    });
    showBooks();
});
