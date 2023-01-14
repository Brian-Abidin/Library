const container = document.querySelector("#container");
const form = document.querySelector("form");
const read = document.querySelector("readBook");
const delete = document.querySelector("delete");

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// function displays most recent book added
function displayBook() {
  for (let i = myLibrary.length - 1; i < myLibrary.length; i += 1) {
    const book = myLibrary[i]; // storing myLibrary[i] properties inside book variable
    console.log(myLibrary[i]);
    const content = document.createElement("div");
    const delBook = document.createElement("button");
    const botBook = document.createElement("div");
    const readBook = document.createElement("button");
    delBook.classList.add("delBook");
    content.classList.add("bookdisplay");
    botBook.classList.add("botBook");
    readBook.classList.add("readBook");
    content.textContent = `${book.title}
    by ${book.author}
    ${book.pages}
    ${book.read}`;
    container.appendChild(content);
    content.appendChild(botBook);
    botBook.appendChild(delBook);
    botBook.appendChild(readBook);
  }
}

function changeRead(event) {}
function deleteBook(event){
  
}

function addBookToLibrary(event) {
  const booktitle = document.getElementById("booktitle").value;
  const bookauthor = document.getElementById("bookauthor").value;
  const bookpages = document.getElementById("bookpages").value;
  const bookread = document.getElementById("bookread").value;
  const book = new Book(booktitle, bookauthor, bookpages, bookread);
  myLibrary.push(book); // add book to myLibrary Array
  event.preventDefault();
  displayBook();
}

form.addEventListener("submit", addBookToLibrary);

/*
function samplesubmit(event) {
  console.log(myLibrary[0]);
  container.textContent = "Hello World!";
  event.preventDefault();
}

form.addEventListener("submit", samplesubmit);
*/

/*
- create a for loop that searches through the myLibrary array
and displays each book. (JS)
- create form asking for user input (HTML/CSS/JS)
- add userinput for title, author, pages, read for form (JS)
- create button on HTML to access open up form (HTML/CSS)
- on click form will open up to a set size card centered to 
the webpage (HTML/CSS/JS)
- create form submit button (HTML)
- on form submission, create new object for the book with the
properties of title, author, pages, read. (JS)
- on form submission, create a card 1/5 of screen, that has two 
layers. The card layer and a smaller centered card with the
book title, author and pages. (HTML / CSS)
- card layer has two buttons, one at top right corner and one
at top left corner. Top right button changes read/unread. Top
left deletes book from array. (HTML/CSS/JS)
- on click delete book button, remove book from array. (JS)
*/

/* SAMPLE BOOKS
const book1 = new Book( // turn this book into user input
  "Green Eggs and Ham",
  "Dr.Suess",
  "50 pages",
  "not read yet"
);

const book2 = new Book( // turn this book into user input
  "Harry Potter",
  "J.K. Rowling",
  "500 pages",
  "not read yet"
); */
