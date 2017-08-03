import React from 'react'
import MdStar from 'react-icons/lib/md/star';
import MdStarBorder from 'react-icons/lib/md/star-border';

const BookBubble = ({book}) => (
  <div className="speech-bubble">
    <div className="book-bubble-header">
      <h3 className="book-bubble-title" >{book.title}</h3>
      <span className="book-bubble-authors">name name, name name</span>
    </div>
    <div className="book-bubble-content">
      <div className="book-bubble-rating">
        <MdStar/>
        <MdStarBorder/>
        <MdStarBorder/>
        <MdStarBorder/>
        <MdStarBorder/>
      </div>
      <p className="book-bubble-desc">{book.description}</p>
    </div>
  </div>
)

export default BookBubble