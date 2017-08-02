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
                {this.props.shelfs.map( (shelf, index) => (
                	<BookShelf key={`shelf_${index}`} title={shelf.title} books={shelf.books} />
                ))}
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
