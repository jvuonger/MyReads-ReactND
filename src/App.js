import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf';

class BooksApp extends React.Component {
  state = {
    books: [],
    showSearchPage: false
  }

  changeBookItemShelf(book, newShelf) {
    let books = this.state.books
    let bookIndex = books.findIndex(prevBook => prevBook.id === book.id)
    books[bookIndex].shelf = newShelf

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

    let currentlyReadingBooks = (books
      .filter((book) => book.shelf === "currentlyReading")
      .map((book) => ({
        id: book.id,
        bookCoverUrl: book.imageLinks.thumbnail,
        title: book.title,
        authors: book.authors.join(", "),
        shelf: book.shelf
      }))
    )

    let wantToReadBooks = (books
      .filter((book) => book.shelf === "wantToRead")
      .map((book) => ({
        id: book.id,
        bookCoverUrl: book.imageLinks.thumbnail,
        title: book.title,
        authors: book.authors.join(", "),
        shelf: book.shelf
      }))
    )

    let readBooks = (books
      .filter((book) => book.shelf === "read")
      .map((book) => ({
        id: book.id,
        bookCoverUrl: book.imageLinks.thumbnail,
        title: book.title,
        authors: book.authors.join(", "),
        shelf: book.shelf
      }))
    )

    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
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
                  handleBookShelfChange={(book, newShelf) => this.changeBookItemShelf(book, newShelf)}
                />
                <BookShelf
                  title="Want to Read"
                  books={wantToReadBooks}
                  handleBookShelfChange={(book, newShelf) => this.changeBookItemShelf(book, newShelf)}
                />
                <BookShelf
                  title="Read"
                  books={readBooks}
                  handleBookShelfChange={(book, newShelf) => this.changeBookItemShelf(book, newShelf)}
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
