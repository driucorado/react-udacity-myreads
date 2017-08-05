import React, { Component } from 'react'
import BookShelf from './BookShelf';
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom';

class SearchBookList extends Component {
	state =  {query : '', books: []}

  updateQuery = (newQuery) => {
      //update query
      this.setState((state) => (state.query = newQuery.trim()))
      // if (newQuery.length > 3) {
        BooksAPI.search(newQuery.trim(), 10).then(books => {
          if (!books.hasOwnProperty("error")) {
            this.setState((state) => {
                  let filterBooks = books.filter((book) => (!this.props.onCheckBookId(book.id)))
                  state.books = filterBooks
                  return state
              })
          }
        })
      // }
      
  }

	render() {
		return (<div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to='/' >Close</Link>
              <div className="search-books-input-wrapper"> 
                {/* 
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                  
                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" value={this.state.query} onChange={(event) => this.updateQuery(event.target.value)} placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              	<BookShelf title="Results" books={this.state.books} mode="+" onAddBookToShelf={this.props.onAddBookToShelf}  />
              </ol>
            </div>
          </div>)
	}
}

export default SearchBookList;