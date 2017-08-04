import React, { Component } from 'react'
import MdStar from 'react-icons/lib/md/star';
import MdStarBorder from 'react-icons/lib/md/star-border';
import HoverBubble from './HoverBubble'
import BookShelfChanger from './BookShelfChanger';

class Book extends Component {
  state = {
    bookBubble: false
  }

  showBookBubble = () => {
    this.setState((state) => ({
      bookBubble: !state.bookBubble
    }))
  }

  render() {

    const { book, changeBookShelf } = this.props
    const { bookBubble } = this.state

    return (
      <div className="book" onMouseEnter={this.showBookBubble} onMouseLeave={this.showBookBubble}>
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.smallThumbnail && book.imageLinks.smallThumbnail}")` }}>
            {bookBubble && <HoverBubble>
                <div className="book-bubble-header">
                  <h3 className="book-bubble-title" >{book.title}</h3>
                  <span className="book-bubble-authors">
                    {book.authors && book.authors.map((author, index) => `${author}${index === book.authors.length - 1 ? "" : ", "}`)}
                  </span>
                </div>
                <div className="book-bubble-content">
                  <div className="book-bubble-rating">
                    <MdStar />
                    <MdStarBorder />
                    <MdStarBorder />
                    <MdStarBorder />
                    <MdStarBorder />
                  </div>
                  <p className="book-bubble-desc">{book.description}</p>
                </div>
              </HoverBubble>}
          </div>
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
    )
  }
  
}

export default Book