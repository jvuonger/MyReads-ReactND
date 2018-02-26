import React, { Component } from 'react'
import BookShelfItem from './BookShelfItem.js'

class BookShelf extends Component {
    render() {
        const { books } = this.props
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{ this.props.title }</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        { books.map( (book, index) => (
                          <BookShelfItem
                            key={index}
                            bookCoverUrl={book.bookCoverUrl}
                            title={book.title} 
                            authors={book.authors}
                            shelf={book.shelf} />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf