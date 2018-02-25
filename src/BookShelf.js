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
                        { books.map( book => (
                          <BookShelfItem
                            bookCoverUrl={book.bookCoverUrl}
                            title={book.title} 
                            authors={book.authors} />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf