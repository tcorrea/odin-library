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
        bookTR.innerHTML += `
            <td>${item.title}</td>
            <td>${item.author}</td>
            <td>${item.pages}</td>
            <td>${item.read}</td>
            <td>
                <button 
                    class="button is-danger is-inverted is-small remove"
                    value=${index}
                >
                    Delete
                </button>
            </td>
        `;

        // for (let index = 0; index < Object.keys(item).length; index++) {
        //     const bookTD = document.createElement("td");
        //     bookTD.innerText = item[Object.keys(item)[index]];
        //     bookTR.appendChild(bookTD);
        // }
        booksTable.appendChild(bookTR);
    });
    handlerEventListenerToRemove();
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
        title: "The Hobbit by J.R.R.",
        author: "Tolkien",
        pages: 295,
        read: false,
    });
    showBooks();
});
