
const div = document.createElement('div')
div.setAttribute('style', 'width: 100%; height: auto; box-schadow: 0 0 2px blue; display: flex; justify-content: space-between;')

const btn = document.querySelector('.btn')

let add = document.createElement('button')
add.setAttribute('style', 'height: auto; width: max-content; background: rgba(66, 255, 0, 1); font-weight: 800; font-size: 20px; border: none; border-radius: 5px;')
add.innerHTML = 'add +'

let cancel = document.createElement('button')
cancel.setAttribute('style', 'height: auto; width: max-content; background: #FFF500; font-weight: 800; font-size: 20px; border: none; border-radius: 5px;')
cancel.innerHTML = 'cancel'


function Library (title, author, pages, read) {
  this.title = title || 'Book title',
  this.author = author || 'author name',
  this.pages = pages || 'Number of pages',
  this.read = read || 'Readed or not?'
}

const lbr = new Library()

function open() {
  // the form element
  const form = document.createElement('form')
  
  // all form's inputs
  const ttl = lbr.title = document.createElement('input')
  ttl.style.width = '50%'

  const ath = lbr.author = document.createElement('input')
  ath.style.width = '50%'

  const pgs = lbr.pages = document.createElement('input')
  pgs.setAttribute('type', 'number')
  pgs.setAttribute('min', '1')
  pgs.style.width = '50%'

  const rd = lbr.read = document.createElement('input')
  rd.setAttribute('type', 'range')
  rd.style.width = '50%'
  
  div.appendChild(cancel)
  div.appendChild(add)
  // add inputs and styling form
  form.appendChild(ttl)
  form.appendChild(ath)
  form.appendChild(pgs)
  form.appendChild(rd)
  form.appendChild(div)
  form.setAttribute('style', 'display: flex; flex-direction: column; width: 200px; height: 250px; box-shadow: 0 0 5px red;\
  justify-content: space-between; position: absolute; background: black; align-items: flex-end;')
  document.getElementById('main').insertBefore(form, btn)

}
btn.addEventListener('click', open)