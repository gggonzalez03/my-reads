import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from '../BooksAPI'

class AddBook extends Component {

  state = {
    query: '',
    showingBooks: null
  }

  updateQuery = (query) => {
    this.setState({ query })
    this.search(query)
  }

  search = (query) => {
    if(query)
      BooksAPI.search(query, 5).then((searchedBooks) => {
        if(searchedBooks && !searchedBooks.error)
          this.mergeBooks(searchedBooks, this.props.currentBooks)
      })
    else 
      this.setState({showingBooks: null})
  }

  mergeBooks = (searchedBooks, currentBooks) => {
    const currentBooksIds = currentBooks.map((cb) => cb.id)

    let merged = searchedBooks.map((sb) => {
      if(currentBooksIds.includes(sb.id))
        sb = currentBooks.filter((cb) => cb.id === sb.id)[0]
      else 
        sb.shelf = "none"

      return sb
    })

    this.setState({showingBooks:merged})
  }

  render() {
    const { query, showingBooks } = this.state
    const { changeBookShelf } = this.props

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            {/* 
                      NOTES: The search from BooksAPI is limited to a particular set of search terms.
                      You can find these search terms here:
                      https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                      
                      However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                      you don't find a specific author or title. Every search is limited by search terms.
                    */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(e) => {this.updateQuery(e.target.value)}}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
              {
                showingBooks ? showingBooks.map((book) => (<li key={book.id}><Book book={book} changeBookShelf={changeBookShelf}/></li>)) : ''
              }
          </ol>
        </div>
      </div>
    )
  }

}

export default AddBook