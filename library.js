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

const book1 = new Book(
  "Green Eggs and Ham",
  "Dr.Suess",
  "50 pages",
  "not read yet"
);

addBookToLibrary(book1);

console.log(myLibrary);
