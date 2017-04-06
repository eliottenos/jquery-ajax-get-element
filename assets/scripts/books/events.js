'use strict'

const booksApi = require('./api.js')
const booksUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

// get in the habit of naming your handlers, it eases debugging.
//
// also, follow a convention for handlers. here, I name my handler
// beginning with 'on' to denote that it is done when the GET /books
// button is clicked
const onGetBooks = function (event) {
  event.preventDefault()

  booksApi.index()
  .then(booksUi.onSuccess)
  .catch(booksUi.onError)
}

const onGetBook = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('Here is the data:')
  console.log(data)
  const book = data.book

  if (book.id.length !== 0) {
    console.warn('Please provide a book id!')
  }
}

module.exports = {
  onGetBooks,
  onGetBook
}
