import React from 'react'
import BookShelfChanger from './BookShelfChanger';

const Book = ({ book, changeBookShelf }) => (
  <div className="book">
    <div className="book-top">
      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.smallThumbnail}")` }}></div>
      <BookShelfChanger
        book={book}
        changeBookShelf={changeBookShelf}
      />
    </div>
    <div className="book-title">{book.title}</div>
    <div className="book-authors">
      {book.authors.map((author, index) => `${author}${index===book.authors.length-1 ? "" : ", "}`)}
    </div>
  </div>
)

export default Book