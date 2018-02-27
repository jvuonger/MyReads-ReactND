import React, { Component } from 'react'
import BookItem from './BookItem.js'

class BookShelf extends Component {
    render() {
        const { books, handleBookShelfChange } = this.props
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{ this.props.title }</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        { books.map( book => (
                          <BookItem
                            key={book.id}
                            book={book}
                            handleBookShelfChange={newShelf => handleBookShelfChange(book, newShelf)} />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf