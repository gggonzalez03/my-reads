import React, { Component } from 'react'
import StarRating from './StarRating'
import HoverBubble from './HoverBubble'
import BookShelfChanger from './BookShelfChanger';

class Book extends Component {
  state = {
    bookBubble: false
  }

  showBookBubble = (e) => {
    // This is called to keep the original clientX and clientY
    // values that were passed in this function
    e.persist()
    var eventCurrentTarget = e.currentTarget
    this.setState((state) => ({
      bookBubble: !state.bookBubble,
      eventCurrentTarget: eventCurrentTarget
    }))
  }

  // Props are changed here because the book does not have
  // to re-render when the ratings change as it will initialize the
  // book bubble to be hidden
  onSelectRating = (rating) => {
    this.props.book.userRating = rating
  }

  onClearRating = () => {
    this.props.book.userRating = 0
  }

  render() {

    const { book, changeBookShelf } = this.props
    const { bookBubble, eventCurrentTarget } = this.state

    return (
      <div className="book" onMouseEnter={this.showBookBubble} onMouseLeave={this.showBookBubble}>
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.smallThumbnail && book.imageLinks.smallThumbnail}")` }}>
            {bookBubble &&
              <HoverBubble eventCurrentTarget={eventCurrentTarget} width={50} maxHeight={40}>
                <div className="book-bubble-header">
                  <h3 className="book-bubble-title" >{book.title}</h3>
                  <span className="book-bubble-authors">
                    {book.authors && book.authors.map((author, index) => `${author}${index === book.authors.length - 1 ? "" : ", "}`)}
                  </span>
                </div>
                <div className="book-bubble-content">
                  <div className="book-bubble-rating">
                    <StarRating
                      initialSelectedRating={book.userRating}
                      onSelectRating={this.onSelectRating}
                      onClearRating={this.onClearRating}/>
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