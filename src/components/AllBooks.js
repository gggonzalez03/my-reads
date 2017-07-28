import React from 'react'
import { Link } from 'react-router-dom'

import BookShelf from './BookShelf'

const AllBooks = ({books}) => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        <BookShelf
          bookShelfTitle={"Currently Reading"}
          books={books.filter((book) => book.shelf == "currentlyReading")}
        />
        <BookShelf
          bookShelfTitle={"Want To Read"}
          books={books.filter((book) => book.shelf == "wantToRead")}
        />
        <BookShelf
          bookShelfTitle={"Read"}
          books={books.filter((book) => book.shelf == "read")}
        />
      </div>
    </div>
    <div className="open-search">
      <Link to='/addbook'>Add a book</Link>
    </div>
  </div>
)

export default AllBooks