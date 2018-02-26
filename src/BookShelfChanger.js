import React, { Component } from 'react'

class BookShelfChanger extends Component {
    render() {
        const { shelf } = this.props
        return (
            <div className="book-shelf-changer">
                <select>
                    <option value="none" disabled>Move to...</option>
                    <option 
                        value="currentlyReading" 
                        selected={shelf === "currentlyReading" && "selected"}>
                        Currently Reading
                    </option>
                    <option 
                        value="wantToRead" 
                        selected={shelf === "wantToRead" && "selected"}>
                        Want to Read
                    </option>
                    <option 
                        value="read" 
                        selected={shelf === "read" && "selected"}>
                        Read
                    </option>
                    <option 
                        value="none" 
                        selected={shelf === "none" && "selected"}>
                        None
                    </option>
                </select>
            </div>
        )
    }
}

export default BookShelfChanger