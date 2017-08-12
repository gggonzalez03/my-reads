import React from 'react'
import { Link } from 'react-router-dom'
import changeCase from 'change-case'

import BookShelf from './BookShelf'

const AllBooks = ({ books, changeBookShelf }) => {
  
  // Get distinct bookshelf titles that the books belong to
  const categories = [...new Set(books.map((book) => book.shelf))]

  return (<div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        {categories.map((category) => (
          <BookShelf
            key={category}
            bookShelfTitle={changeCase.sentenceCase(category)}
            books={books.filter((book) => book.shelf === category)}
            changeBookShelf={changeBookShelf}
          />
        ))}
      </div>
    </div>
    <div className="open-search">
      <Link to='/addbook'>Add a book</Link>
    </div>
  </div>)
}

export default AllBooks