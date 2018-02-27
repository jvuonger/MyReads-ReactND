import React from 'react'
import { Link, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookSearch from './BookSearch';
import BookShelf from './BookShelf';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  addOrUpdateBookItemShelf(book, newShelf) {
    let books = this.state.books
    let bookIndex = books.findIndex(prevBook => prevBook.id === book.id)

    if(bookIndex > -1) {
      books[bookIndex].shelf = newShelf
    } else {
      book.shelf = newShelf
      books.push(book)
    }

    BooksAPI.update(book, newShelf).then(() =>
      this.setState({books: books})
    )
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) =>
      this.setState({books})
    )
  }

  render() {
    const { books } = this.state

    let currentlyReadingBooks = books.filter(book => book.shelf === "currentlyReading")
    let wantToReadBooks = books.filter((book) => book.shelf === "wantToRead")
    let readBooks = books.filter((book) => book.shelf === "read")

    return (
      <div className="app">  
        <Route exact path="/" render={() =>
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf
                  title="Currently Reading"
                  books={currentlyReadingBooks}
                  handleBookShelfChange={(book, newShelf) => this.addOrUpdateBookItemShelf(book, newShelf)}
                />
                <BookShelf
                  title="Want to Read"
                  books={wantToReadBooks}
                  handleBookShelfChange={(book, newShelf) => this.addOrUpdateBookItemShelf(book, newShelf)}
                />
                <BookShelf
                  title="Read"
                  books={readBooks}
                  handleBookShelfChange={(book, newShelf) => this.addOrUpdateBookItemShelf(book, newShelf)}
                />
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        }/>

        <Route path="/search" render={() =>
          <BookSearch 
            booksOnShelf={books}
            handleBookShelfChange={(book, newShelf) => this.addOrUpdateBookItemShelf(book, newShelf)}
          />
        }/>
      </div>
    )
  }
}

export default BooksApp
