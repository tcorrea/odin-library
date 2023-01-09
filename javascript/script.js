let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

function showBooks() {
    const booksTable = document.querySelector(".books");

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
addBookToLibrary("The Hobbit by J.R.R.", "Tolkien", 295, false);
showBooks();
