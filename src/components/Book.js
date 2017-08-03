import React, { Component } from 'react'
import BookBubble from './BookBubble'
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
            {bookBubble ? <BookBubble book={book}/> : ''}
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