function Book (title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.infos = function () {
    return ('The ' + title + ' by ' + author + ', ' + pages + ' pages, ' + read)
  }
}

const reader = new Book('Birds', 'Marc', 100, 'already readed')
console.log(reader.infos())

const button = document.querySelector('.btn')
button.style.width = 'min-content'
button.style.height = 'auto'
button.style.background = 'unset'
button.style.fontSize = '80px'
button.style.fontWeight = '500'
button.style.padding = '0 0'
button.style.margin = '50px auto auto 50px'
button.style.color = 'white'
button.style.border = 'none'
