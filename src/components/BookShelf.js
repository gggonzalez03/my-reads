import React from 'react'

import Book from './Book'

const BookShelf = ({ bookShelfTitle, books, changeBookShelf }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{bookShelfTitle}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map((book) => (
          <li key={book.id}>
            <Book
              book={book}
              changeBookShelf={changeBookShelf}
            />
          </li>
        ))}
      </ol>
    </div>
  </div>
)

export default BookShelf