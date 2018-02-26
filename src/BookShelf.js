import React, { Component } from 'react'
import BookShelfItem from './BookShelfItem.js'

class BookShelf extends Component {
    render() {
        const { books, handleBookShelfChange } = this.props
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{ this.props.title }</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        { books.map( book => (
                          <BookShelfItem
                            key={book.id}
                            bookCoverUrl={book.bookCoverUrl}
                            title={book.title} 
                            authors={book.authors}
                            shelf={book.shelf}
                            handleBookShelfChange={newShelf => handleBookShelfChange(book, newShelf)} />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf