import React from 'react'
import { Link } from 'react-router-dom'

import BookShelf from './BookShelf'

const AllBooks = ({books, changeBookShelf}) => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        <BookShelf
          bookShelfTitle={"Currently Reading"}
          books={books.filter((book) => book.shelf === "currentlyReading")}
          changeBookShelf={changeBookShelf}
        />
        <BookShelf
          bookShelfTitle={"Want To Read"}
          books={books.filter((book) => book.shelf === "wantToRead")}
          changeBookShelf={changeBookShelf}
        />
        <BookShelf
          bookShelfTitle={"Read"}
          books={books.filter((book) => book.shelf === "read")}
          changeBookShelf={changeBookShelf}
        />
      </div>
    </div>
    <div className="open-search">
      <Link to='/addbook'>Add a book</Link>
    </div>
  </div>
)

export default AllBooks