const container = document.querySelector("#container");

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  // on form submit object.create(book) with the proper properties
  myLibrary.push(book); // add book to myLibrary Array
}

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
);

addBookToLibrary(book1); // do this automatically have a connection with book
addBookToLibrary(book2);

for (let i = 0; i < myLibrary.length; i += 1) {
  const book = myLibrary[i]; // storing myLibrary[i] properties inside book variable
  console.log(myLibrary[i]);
  const content = document.createElement("div");
  content.style.backgroundColor = "blue";
  content.style.border = "1px solid black";
  // display each book in html
  content.textContent = `${book.title} 
    by ${book.author}
    ${book.pages} 
    The book is ${book.read}`;
  container.appendChild(content);
}

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
