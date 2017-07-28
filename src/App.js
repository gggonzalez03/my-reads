import React from 'react'
import { Route } from 'react-router-dom'
import AddBook from './components/AddBook'
import AllBooks from './components/AllBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount = () => {
    BooksAPI.getAll().then((books) => {
      console.log(books);
      this.setState({books});
    })
  };

  render() {
    return (
      <div className="app">
        <Route exact
          path='/'          
          render={() => (<AllBooks books={this.state.books}/>)}
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
