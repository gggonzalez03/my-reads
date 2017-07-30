import React from 'react'
import { DropTarget } from 'react-drag-drop-container';
import camelCase from 'camelcase'
import Book from './Book'

const BookShelf = ({ bookShelfTitle, books, changeBookShelf }) => (
  <DropTarget
    targetKey="book"
    onHit={(e) => (changeBookShelf(e.dragData.book, camelCase(bookShelfTitle)))}
  >
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
  </DropTarget>
)

export default BookShelf