import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class BookSearchBar extends Component {
    render() {
        const {handleSearchQuery} = this.props
        return (
            <div className="search-books-bar">
                <Link to="/" className="close-search">Close</Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" onChange={(e) => handleSearchQuery(e.target.value)}/>
                </div>
            </div>
        )
    }
}

export default BookSearchBar