// Define Book class
class Book {
    constructor(title, author, pages, read) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.read = read;
    }
}

// Sample books
const myLibrary = [
    new Book("The Hobbit", "J.R.R. Tolkien", 295, true),
    new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 223, true),
    new Book("Pride and Prejudice", "Jane Austen", 279, false),
    new Book("To Kill a Mockingbird", "Harper Lee", 324, true),
    // Add more books here
    new Book("The Lord of the Rings", "J.R.R. Tolkien", 1178, true),
    new Book("The Chronicles of Narnia", "C.S. Lewis", 767, true),
    new Book("A Game of Thrones", "George R.R. Martin", 694, true),
    new Book("Dune", "Frank Herbert", 412, true),
    new Book("1984", "George Orwell", 328, false),
    new Book("Brave New World", "Aldous Huxley", 311, true),
    new Book("The Hitchhiker's Guide to the Galaxy", "Douglas Adams", 193, true),
    new Book("The Martian", "Andy Weir", 369, true),
    new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, true),
    new Book("The Catcher in the Rye", "J.D. Salinger", 277, true),
    new Book("The Shining", "Stephen King", 447, true),
    new Book("The Hunger Games", "Suzanne Collins", 374, true),
    new Book("The Handmaid's Tale", "Margaret Atwood", 311, true),
    new Book("The Da Vinci Code", "Dan Brown", 454, true),
    new Book("The Girl with the Dragon Tattoo", "Stieg Larsson", 465, true),
    new Book("The Alchemist", "Paulo Coelho", 197, true)
];

// Function to toggle read status
function toggleReadStatus(index) {
    myLibrary[index].read = !myLibrary[index].read;
    displayBooks();
}

// Function to remove book
function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

// Function to display books
function displayBooks() {
    const bookContainer = document.getElementById("book-container");
    bookContainer.innerHTML = "";

    myLibrary.forEach((book, index) => {
        const card = document.createElement("div");
        card.classList.add("book-card");

        const title = document.createElement("h2");
        title.textContent = book.title;

        const author = document.createElement("p");
        author.textContent = `Author: ${book.author}`;

        const pages = document.createElement("p");
        pages.textContent = `Pages: ${book.pages}`;

        const readButton = document.createElement("button");
        readButton.textContent = book.read ? "Read" : "Unread";
        readButton.addEventListener("click", () => toggleReadStatus(index));

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-button");
        removeButton.addEventListener("click", () => removeBook(index));

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(readButton);
        card.appendChild(removeButton);

        bookContainer.appendChild(card);
    });
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;

    myLibrary.push(new Book(title, author, pages, read));
    displayBooks();

    // Close the modal
    const modal = document.getElementById("new-book-form");
    modal.style.display = "none";
}

// Event listener for form submission
const form = document.getElementById("book-form");
form.addEventListener("submit", handleFormSubmit);

// Event listener for opening the modal
const newBookBtn = document.getElementById("new-book-btn");
const modal = document.getElementById("new-book-form");
const closeBtn = document.querySelector(".close");

newBookBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Display existing books
displayBooks();