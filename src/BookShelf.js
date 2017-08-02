import React, { Component } from 'react'
import BookItem from './BookItem';
import PropTypes from 'prop-types';

class BookShelf extends Component {
	static propTypes = {
	   title: PropTypes.string.isRequired,
	   books: PropTypes.array.isRequired
	}

	render() {
		return (
			 <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.title}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    	{this.props.books.map( (book) => (
                    		<li>
                    			<BookItem book={book} />
                    		</li>
                    	))}
                    </ol>
                  </div>
                </div>
			)
	}
}

export default BookShelf