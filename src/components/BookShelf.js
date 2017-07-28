import React from 'react'
import { Link } from 'react-router-dom'

import Book from './Book'

const BookShelf = ({ bookShelfTitle, books }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{bookShelfTitle}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map((book) => (
          <li key={book.id}>
            <Book
              bookTitle={book.title}
              bookAuthors={book.authors[0]}
              bookCoverURL={book.imageLinks.smallThumbnail}
            />
          </li>
        ))}
      </ol>
    </div>
  </div>
)

export default BookShelf