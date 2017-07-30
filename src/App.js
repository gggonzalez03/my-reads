import React from 'react'
import { Route } from 'react-router-dom'
import AddBook from './components/AddBook'
import AllBooks from './components/AllBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  changeBookShelf = (book, newShelf) => {
    BooksAPI.update(book, newShelf)
    book.shelf = newShelf
    this.setState((state) => ({
      books: [...state.books.filter((b) => book.id !== b.id), book]
    }))
  }

  componentDidMount = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({books});
    })
  };

  render() {
    return (
      <div className="app">
        <Route exact
          path='/'          
          render={() => (
            <AllBooks
              books={this.state.books}
              changeBookShelf={this.changeBookShelf}
            />
          )}
        />
        <Route exact
          path='/addbook'          
          render={() => (<AddBook/>)}
        />
      </div>
    )
  }
}

export default BooksApp
