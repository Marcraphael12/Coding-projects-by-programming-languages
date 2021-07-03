let myLibrary = [];

function Book (title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read

  this.infos = function () {
    return ('The ' + title + ' by ' + author + ', ' + pages + ' pages ' + read)
  }
}

const reader = new Book('Birds', 'Marc', 100, 'already readed')
console.log(reader.infos())

function addBookToLibrary() {
  
}