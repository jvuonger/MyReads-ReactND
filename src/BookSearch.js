import React, { Component } from 'react'
import BookSearchBar from './BookSearchBar'
import BookSearchResults from './BookSearchResults'
import * as BooksAPI from './BooksAPI'

class BookSearch extends Component {
    state = {
        books : []
    }

    searchBooks(query) {
        const {booksOnShelf} = this.props

        if(query === '') {
            this.setState({books:[]})
        } else {
            BooksAPI.search(query).then(books => {
                if (typeof(books) === 'undefined' || books.error === "empty query") 
                    return

                // Map to the correct shelf
                books.map(book => {
                    let bookIndex = booksOnShelf.findIndex(bookOnShelf => bookOnShelf.id === book.id)
                    if(bookIndex > -1) {
                        book.shelf = booksOnShelf[bookIndex].shelf
                    } else {
                        book.shelf = 'none'
                    }
                    return book
                })
                this.setState({books})
            })
        }
    }

    render() {
        const {handleCloseSearch, handleBookShelfChange} = this.props
        return (
            <div className="search-books">
                <BookSearchBar 
                    handleCloseSearch={handleCloseSearch} 
                    handleSearchQuery={(query) => this.searchBooks(query)} />
                <BookSearchResults 
                    books={this.state.books} 
                    handleBookShelfChange={(book, newShelf) => handleBookShelfChange(book, newShelf)} />
            </div>
        )
    }
}

export default BookSearch