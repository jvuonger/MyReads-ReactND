import React, { Component } from 'react'

class BookShelfChanger extends Component {
    render() {
        const { handleBookShelfChange, shelf } = this.props
        return (
            <div className="book-shelf-changer">
                <select value={shelf} onChange={e => handleBookShelfChange(e.target.value)}>
                    <option value="-1" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default BookShelfChanger