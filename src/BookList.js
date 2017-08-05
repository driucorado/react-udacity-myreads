import React, { Component } from 'react'
import BookShelf from './BookShelf';
import { Link } from 'react-router-dom';


class BookList extends Component {
  render() {
     return (
     	  <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
              	{Object.keys(this.props.shelfs).map((shelfId) => {
              		let books = this.props.shelfs[shelfId]
              		//replace titles for shelf
              		let title = this.props.wording.shelfs[shelfId] 
					return <BookShelf onChangeBookShelf={this.props.onChangeBookShelf} key={`shelf_${shelfId}`} title={title} books={books} />
              	})}
              </div>
            </div>
            <div className="open-search">
              <Link to="/add" className="add-contact" >Add Book</Link>
            </div>
          </div>
         )
  }
}

export default BookList
