import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookSearch from './BookSearch';
import BookShelf from './BookShelf';

class BooksApp extends React.Component {
  state = {
    books: [],
    showSearchPage: false
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

    // TODO: Look into this: update returns {currentlyReading: Array(1), wantToRead: Array(3), read: Array(3)}
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
        {this.state.showSearchPage ? (
          <BookSearch 
            booksOnShelf={books}
            handleCloseSearch={() => this.setState({ showSearchPage: false })}
            handleBookShelfChange={(book, newShelf) => this.addOrUpdateBookItemShelf(book, newShelf)}
          />
        ) : (
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
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
