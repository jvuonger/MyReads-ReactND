import React, { Component } from 'react'
import BookShelfChanger from './BookShelfChanger'

class BookItem extends Component {
    render() {
        const { book, handleBookShelfChange } = this.props
        let authors = (typeof book.authors !== 'undefined') ? book.authors.join(", ") : "";
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
                        <BookShelfChanger shelf={book.shelf} handleBookShelfChange={newShelf => handleBookShelfChange(newShelf)} />
                    </div>
                    <div className="book-title">{ book.title }</div>
                    <div className="book-authors">{ authors }</div>
                </div>
            </li>
        )
    }
}

export default BookItem