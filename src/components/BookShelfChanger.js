import React from 'react';

const BookShelfChanger = ({book, changeBookShelf}) => (
  <div className="book-shelf-changer">
    <select defaultValue={book.shelf} onChange={(e) => changeBookShelf(book, e.target.value)}>
      <option value="none" disabled>Move to...</option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  </div>
)

export default BookShelfChanger;