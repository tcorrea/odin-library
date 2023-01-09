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

function removeBook(index) {
    myLibrary.splice(index, 1); // 2nd parameter means remove one item only
    showBooks();
}

function showBooks() {
    const booksTable = document.querySelector(".books");
    // Clearing element
    booksTable.innerHTML = "";

    myLibrary.map((item, index) => {
        const bookTR = document.createElement("tr");
        // const bookTD = document.createElement("td");
        const readMessage = item.read ? "Read" : "Not Read";
        const readBtnColor = item.read ? "success" : "dark";
        bookTR.innerHTML += `
            <td>${item.title}</td>
            <td>${item.author}</td>
            <td>${item.pages}</td>
            <td>
                <button 
                    class="button is-${readBtnColor} is-small toggle-read"
                    value=${index}
                >
                    ${readMessage}
                </button>
            </td>
            <td>
                <button
                    class="button is-danger is-inverted is-small remove"
                    value=${index}
                >
                <span class="icon">
                    <i class="fa-solid fa-trash"></i>
                </span>
                    
                </button>
            </td>
        `;
        booksTable.appendChild(bookTR);
    });
    handlerEventListenerToRemove();
    handlerEventListenerToToggleRead();
}

function handlerEventListenerToRemove() {
    [...document.querySelectorAll(".remove")].map((item) => {
        item.addEventListener(
            "click",
            (event) => {
                removeBook(~~event.target.value);
            },
            { once: true }
        );
    });
}

function handlerEventListenerToToggleRead() {
    [...document.querySelectorAll(".toggle-read")].map((item) => {
        item.addEventListener(
            "click",
            (event) => {
                toggleRead(~~event.target.value);
            },
            { once: true }
        );
    });
}

function toggleRead(index) {
    myLibrary[index].read = !myLibrary[index].read;
    showBooks();
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
    addBookToLibrary({
        title: "The Hunger Games",
        author: "Suzanne Collins",
        pages: 374,
        read: true,
    });
    showBooks();
});
