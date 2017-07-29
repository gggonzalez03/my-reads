import React from 'react'
import BookShelfChanger from './BookShelfChanger';

const Book = ({ bookTitle, bookAuthors, bookCoverURL, shelf }) => (
  <div className="book">
    <div className="book-top">
      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${bookCoverURL}")` }}></div>
      <BookShelfChanger shelf={shelf}/>
    </div>
    <div className="book-title">{bookTitle}</div>
    <div className="book-authors">
      {bookAuthors.map((author, index) => `${author}${index===bookAuthors.length-1 ? "" : ", "}`)}
    </div>
  </div>
)

export default Book