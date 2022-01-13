let myLibrary = [];
const newBookForm = document.forms["new-book-form"];
const libraryIndexTable = document.getElementById("library-index-table");
const libraryIndexTableBody =
  libraryIndexTable.getElementsByTagName("tbody")[0];

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
  if (!newBookData.get("bookName")) return false; // Hook in here to add a "must have name" flash notice
  newBook = new Book(
    newBookData.get("bookName"),
    newBookData.get("authName"),
    newBookData.get("pageCount")
  );
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  populateTableWithBooks();
}
function resetTable() {
  libraryIndexTableBody.innerHTML = "";
}

function populateTableWithBooks() {
  resetTable();
  for (let i = 0; i < myLibrary.length; i++) {
    let newRow = libraryIndexTableBody.insertRow(i);
    newRow.dataset.index = i;
    newRow.insertCell(0).innerHTML = myLibrary[i].title;
    newRow.insertCell(1).innerHTML = myLibrary[i].author || "N/A";
    newRow.insertCell(2).innerHTML = myLibrary[i].pageCount || "N/A";
    addReadButton(newRow, i);
    addDeleteButton(newRow, i);
  }
}

function addReadButton(newRow, i) {
  readCell = newRow.insertCell(3);
  readCell.innerHTML = `<button type="button">${
    myLibrary[i].haveRead ? "Has been read!" : "Hasn't been read"
  }</button>`;
  readCell.addEventListener("click", (target) => {
    let book = myLibrary[i];
    book.haveRead = book.haveRead ? false : true;
    target.srcElement.innerHTML = book.haveRead
      ? "Has been read!"
      : "Hasn't been read";
  });
}

function addDeleteButton(newRow, i) {
  deleteCell = newRow.insertCell(4);
  deleteCell.innerHTML = `<button type="button">Remove Book</button>`;
  deleteCell.addEventListener("click", () => {
    myLibrary.splice(i, 1);
    populateTableWithBooks();
  });
}

document
  .getElementById("submit-new-book")
  .addEventListener("click", newLibraryBook);
