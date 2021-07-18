const btn = document.querySelector('.btn')



/************************* Create the form's buttons ************************/
const div = document.createElement('div') // the form's buttons go inside this
div.setAttribute('style', '\
width: 100%;\
height: auto;\
box-schadow: 0 0 2px blue;\
display: flex;\
justify-content: space-between;')

function buttonStyle(btn) {
  btn.setAttribute('style', '\
  height: auto;\
  width: 45%;\
  font-weight: 800;\
  font-size: 20px;\
  border: none;\
  border-radius: 5px;\
  padding: 5px;')
}

/******************* Form's add button**********************/
let add = document.createElement('button')
buttonStyle(add)
add.setAttribute('type', 'submit')
add.style.background = '#00ff00'
add.innerHTML = 'add +'

/******************* Form's cancel button********************* */
let cancel = document.createElement('button')
buttonStyle(cancel)
cancel.setAttribute('type', 'reset')
cancel.style.background = 'rgb(255, 2, 2)'
cancel.innerHTML = 'reset all'

function Library (title, author, pages, read) {
  this.title = title || 'Book title',
  this.author = author || 'author name',
  this.pages = pages || 'Number of pages',
  this.read = read || 'Readed or not?'
}

/******** Library object ************/
const lbr = new Library()

function open() {
  /************** The Closing button **************/
  const closeBtn = document.createElement('button')
  closeBtn.innerHTML = 'Cancel changes x'
  closeBtn.setAttribute('style', '\
  height: 30px;\
  width: max-content;\
  display: flex;\
  align-items: center;\
  justify-content: center;\
  font-weight: 900;\
  font-size: 21.0098px;\
  line-height: 32px;\
  color: rgb(255, 2, 2);\
  background: none;\
  border: unset;\
  cursor: pointer;\
  align-self: flex-end;\
  margin-top: 20px;\
  margin-right: 50px')
  
  /************* Contain the form element ************/
  const contain = document.createElement('div') // the form goes inside this
  contain.setAttribute('style','\
  height: 100%;\
  width: 100%;\
  background: rgba(0, 0, 0, 0.8);\
  position: fixed; top: 0;\
  left: 0;\
  display: flex;\
  flex-direction: column;')
  
  /***************************** The form element ****************************/
  const form = document.createElement('form') // inputs go inside this
  
  function inputStyle(input) {
    
    /*************** Inputs: Style function for inputs *************/
    input.setAttribute('style', '\
    width: 100%;\
    height: 40px;\
    background: black;\
    font-weight: 800;\
    font-size: 14px;\
    padding: 5px;\
    border-radius: 5px;\
    border: none;\
    color: white;\
    border-bottom: 1px solid #f3ff00;\
    outline: none;')
    return input;
  }

  /***************** Form's input: title ***************/ 
  const ttl = lbr.title = document.createElement('input')
  inputStyle(ttl)
  ttl.setAttribute('placeholder', 'Enter the Book \'s Title')
  ttl.setAttribute('type', 'text')

   /***************** Form's input: author ***************/
  const ath = lbr.author = document.createElement('input')
  inputStyle(ath)
  ath.setAttribute('placeholder', 'Enter the Book \'s Author')
  ath.setAttribute('type', 'text')

   /***************** Form's input: pages ***************/
  const pgs = lbr.pages = document.createElement('input')
  pgs.setAttribute('type', 'number')
  pgs.setAttribute('min', '1')
  inputStyle(pgs)
  pgs.setAttribute('placeholder', 'Number of pages')
  parseInt(pgs)

   /***************** Form's input: read ***************/
  const rd = lbr.read = document.createElement('input')
  rd.setAttribute('type', 'range')
  rd.style.width = '50%'

  // Keep the form's buttons
  div.appendChild(cancel)
  div.appendChild(add)

  // add inputs and styling form
  form.appendChild(ttl)
  form.appendChild(ath)
  form.appendChild(pgs)
  form.appendChild(div)
  form.setAttribute('style', '\
  display: flex;\
  flex-direction: column;\
  width: 250px;\
  height: 300px;\
  padding: 0 10px;\
  box-shadow: 0 0 5px #00ff00;\
  justify-content: space-around;\
  background: black;\
  align-items: center;\
  margin: 150px auto 0 auto')

  contain.appendChild(closeBtn)
  contain.appendChild(form) // keep the form

  // finally add to the document
  const head = document.querySelector('#header')
  document.body.insertBefore(contain, head)

  function close() {
    document.body.removeChild(contain)

  }
  
  closeBtn.addEventListener('click', close)
}
btn.addEventListener('click', open)
