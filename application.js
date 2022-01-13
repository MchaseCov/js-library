let myLibrary = [];
const newBookForm = document.forms["new-book-form"];
const libraryIndexTable = document.getElementById("library-index-table");

class Book {
  constructor(title, author, pageCount) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.haveRead = false;
    addBookToLibrary(this);
  }
}

function newLibraryBook() {
  let newBookData = new FormData(newBookForm);
  if (!newBookData.get("bookName")) return false;
  newBook = new Book(
    newBookData.get("bookName"),
    newBookData.get("authName"),
    newBookData.get("pageCount")
  );
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  resetTable();
  populateTableWithBooks();
}
function resetTable() {
  while (libraryIndexTable.rows.length > 0) {
    libraryIndexTable.deleteRow(0);
  }
}

function populateTableWithBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    let newRow = libraryIndexTable.insertRow(i);
    newRow.insertCell(0).innerHTML = myLibrary[i].title;
    newRow.insertCell(1).innerHTML = myLibrary[i].author || "N/A";
    newRow.insertCell(2).innerHTML = myLibrary[i].pageCount || "N/A";
    newRow.insertCell(3).innerHTML = myLibrary[i].haveRead
      ? "Has been read"
      : "Unread";
  }
}

document
  .getElementById("submit-new-book")
  .addEventListener("click", newLibraryBook);
