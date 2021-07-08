
function Library (title, author, pages, read) {
  this.title = title || 'Book title',
  this.author = author || 'author name',
  this.pages = pages || 'Number of pages',
  this.read = read || 'Readed or not?'
}

const lbr = new Library()

// the form element
const form = document.createElement('form')

// all form's inputs
const ttl = lbr.title = document.createElement('input')
const ath = lbr.author = document.createElement('input')
const pgs = lbr.pages = document.createElement('input')
pgs.setAttribute('type', 'number')
const rd = lbr.read = document.createElement('input')
rd.setAttribute('type', 'range')

const btn = document.querySelector('.btn')

// add inputs and styling form
form.appendChild(ttl)
form.appendChild(ath)
form.appendChild(pgs)
form.appendChild(rd)
form.style.display = 'flex'
form.style.flexDirection = 'column'
form.style.width = '200px'
form.style.height = '150px'
document.getElementById('main').insertBefore(form, btn)