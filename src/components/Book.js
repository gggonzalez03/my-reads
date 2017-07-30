import React from 'react'
import BookShelfChanger from './BookShelfChanger';
import { DragDropContainer } from 'react-drag-drop-container';

const Book = ({ book, changeBookShelf }) => (
  <DragDropContainer
    targetKey="book"
    dragData={{book:book}}
    returnToBase={true}
  >
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.smallThumbnail && book.imageLinks.smallThumbnail}")` }}></div>
        <BookShelfChanger
          book={book}
          changeBookShelf={changeBookShelf}
        />
      </div>
      <div className="book-title">{book.title && book.title}</div>
      <div className="book-authors">
        {book.authors && book.authors.map((author, index) => `${author}${index===book.authors.length-1 ? "" : ", "}`)}
      </div>
    </div>
  </DragDropContainer>
)

export default Book