import React from 'react'
import { Link } from 'react-router-dom'

const Book = ({ bookTitle, bookAuthors, bookCoverURL }) => (
  <div className="book">
    <div className="book-top">
      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${bookCoverURL}")` }}></div>
      <div className="book-shelf-changer">
        <select>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    </div>
    <div className="book-title">{bookTitle}</div>
    <div className="book-authors">
      {bookAuthors.map((author, index) => `${author}${index==bookAuthors.length-1 ? "" : ", "}`)}
    </div>
  </div>
)

export default Book