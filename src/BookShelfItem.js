import React, { Component } from 'react'
import BookShelfChanger from './BookShelfChanger'

class BookShelfItem extends Component {
    render() {
        const { title, authors, bookCoverUrl, shelf, handleBookShelfChange } = this.props
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${bookCoverUrl}")` }}></div>
                        <BookShelfChanger shelf={shelf} handleBookShelfChange={newShelf => handleBookShelfChange(newShelf)} />
                    </div>
                    <div className="book-title">{ title }</div>
                    <div className="book-authors">{ authors }</div>
                </div>
            </li>
        )
    }
}

export default BookShelfItem