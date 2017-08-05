import React, { Component } from 'react'
import BookItemOptions from './BookItemOptions';
import PropTypes from 'prop-types';


class BookItem extends Component {
  static propTypes = {
   book: PropTypes.object.isRequired
  }

  render() {
     return (<div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("'+this.props.book.imageLinks.smallThumbnail+'")' }}></div>
                 <BookItemOptions mode={this.props.mode} onChangeBookShelf={this.props.onChangeBookShelf} book={this.props.book} onAddBookToShelf={(this.props.onAddBookToShelf) ? this.props.onAddBookToShelf : null}  />
              </div>
              <div className="book-title">{this.props.book.title}</div>
              <div className="book-authors">{this.props.book.authors}</div>
            </div>)
  }
}

export default BookItem
