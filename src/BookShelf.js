import React, { Component } from 'react'
import BookItem from './BookItem';
import PropTypes from 'prop-types';

class BookShelf extends Component {
	static propTypes = {
	   title: PropTypes.string.isRequired,
	   books: PropTypes.array.isRequired
	}
	/*
	{"title":"Best Android Apps","subtitle":"The Guide for Discriminating Downloaders","authors":["Mike Hendrickson","Brian Sawyer"],"publisher":"\"O'Reilly Media, Inc.\"","publishedDate":"2010-04-27","description":"Contains descriptions of over two hundred recommended applications and games for android/mobile devices, including apps for business, communication, lifestyle, entertainment, utility/tool, and reference.","industryIdentifiers":[{"type":"ISBN_13","identifier":"9781449382551"},{"type":"ISBN_10","identifier":"144938255X"}],"readingModes":{"text":false,"image":false},"pageCount":240,"printType":"BOOK","categories":["Computers"],"averageRating":4,"ratingsCount":3,"maturityRating":"NOT_MATURE","allowAnonLogging":false,"contentVersion":"preview-1.0.0","imageLinks":{"smallThumbnail":"http://books.google.com/books/content?id=bUybAgAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api","thumbnail":"http://books.google.com/books/content?id=bUybAgAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"},"language":"en","previewLink":"http://books.google.com/books?id=bUybAgAAQBAJ&dq=android&hl=&cd=1&source=gbs_api","infoLink":"http://books.google.com/books?id=bUybAgAAQBAJ&dq=android&hl=&source=gbs_api","canonicalVolumeLink":"https://books.google.com/books/about/Best_Android_Apps.html?hl=&id=bUybAgAAQBAJ","id":"bUybAgAAQBAJ","shelf":"read"}
	*/
	render() {
		return (
			 <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.title}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    	{this.props.books.map( (book, index) => (
                    		<li key={index}>
                    			<BookItem book={book} 
                    			mode={this.props.mode} 
                    			onAddBookToShelf={this.props.onAddBookToShelf ? this.props.onAddBookToShelf : null}  
								onChangeBookShelf={this.props.onChangeBookShelf ? this.props.onChangeBookShelf : null}
                    			/>
                    		</li>
                    	))}
                    </ol>
                  </div>
                </div>
			)
	}
}

export default BookShelf