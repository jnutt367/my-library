// Define the Book constructor function
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  
  // Array to store the books
  const myLibrary = [
    new Book("The Hobbit", "J.R.R. Tolkien", 295, true),
    new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 223, true),
    new Book("Pride and Prejudice", "Jane Austen", 279, false),
    new Book("To Kill a Mockingbird", "Harper Lee", 324, true),
    new Book("The Lord of the Rings", "J.R.R. Tolkien", 1178, true),
    new Book("Dune", "Frank Herbert", 412, true),
    new Book("A Game of Thrones", "George R.R. Martin", 694, true),
    new Book("Foundation", "Isaac Asimov", 244, true),
    new Book("The Chronicles of Narnia", "C.S. Lewis", 767, true),
    new Book("The Silmarillion", "J.R.R. Tolkien", 365, false),
    new Book("Brave New World", "Aldous Huxley", 311, true),
    new Book("1984", "George Orwell", 328, true),
    new Book("Neuromancer", "William Gibson", 271, true),
    new Book("The Left Hand of Darkness", "Ursula K. Le Guin", 304, true),
    new Book("The Bible", "Various", 1189, true),
    new Book("The Odyssey", "Homer", 384, true),
    new Book("The Iliad", "Homer", 683, true),
    new Book("Ben-Hur: A Tale of the Christ", "Lew Wallace", 556, true),
    new Book("The Ten Commandments", "Various", 20, true),
    new Book("The Book of Genesis", "Various", 50, true),

    // Add more initial books here
  ];
  
  // Function to display the books
  function displayBooks() {
    const bookContainer = document.getElementById("book-container");
    bookContainer.innerHTML = "";
  
    myLibrary.forEach((book, index) => {
      const bookCard = document.createElement("div");
      bookCard.classList.add("book-card");
  
      const titleElement = document.createElement("h2");
      titleElement.textContent = book.title;
  
      const authorElement = document.createElement("p");
      authorElement.textContent = `Author: ${book.author}`;
  
      const pagesElement = document.createElement("p");
      pagesElement.textContent = `Pages: ${book.pages}`;
  
      const readButton = document.createElement("button");
      readButton.textContent = book.read ? "Read" : "Unread";
      readButton.addEventListener("click", function() {
        book.read = !book.read;
        readButton.textContent = book.read ? "Read" : "Unread";
      });
  
      bookCard.appendChild(titleElement);
      bookCard.appendChild(authorElement);
      bookCard.appendChild(pagesElement);
      bookCard.appendChild(readButton);
  
      bookContainer.appendChild(bookCard);
    });
  }
  
  // Function to add a new book
  function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayBooks();
  }
  
  // Open modal for adding new book
  const newBookBtn = document.getElementById("new-book-btn");
  const modal = document.getElementById("new-book-form");
  const span = document.getElementsByClassName("close")[0];
  newBookBtn.onclick = function() {
    modal.style.display = "block";
  }
  span.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  
  // Form submission handler
  const bookForm = document.getElementById("book-form");
  bookForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;
    addBookToLibrary(title, author, pages, read);
    modal.style.display = "none";
  });
  
  // Display the initial books
  displayBooks();
  
  