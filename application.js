let myLibrary = [];

function Book(title, author, pageCount, haveRead) {
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.haveRead = haveRead;
}

Book.prototype.info = function () {
  console.log(this.title, this.author, this.pageCount, this.haveRead);
};

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const theHobbit = new Book("The Hobbit", "Tolkein", 295, false);

theHobbit.info();
addBookToLibrary(theHobbit);
console.log(myLibrary);
