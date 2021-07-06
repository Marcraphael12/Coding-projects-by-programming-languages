
function Library (title, author, pages, read) {
  this.title = title || 'Book title',
  this.author = author || 'author name',
  this.pages = pages || 'Number of pages',
  this.read = read || 'Readed or not?'
}

let lbr = new Library()

// the form element
const form = document.createElement('form')

// all form's inputs
let ttl = lbr.title = document.createElement('input')
let ath = lbr.author = document.createElement('input')
let pgs = lbr.pages = document.createElement('input')
let rd = lbr.read = document.createElement('input')

// add inputs and styling form
form.appendChild(ttl, ath, pgs, rd)
form.style.display = 'flex';
form.style.flexDirection = 'column';
form.style.width = '100px';
form.style.height = '250px';

