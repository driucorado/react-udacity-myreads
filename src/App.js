import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom';
import SearchBookList from './SearchBookList';
import BookList from './BookList';

const wording = {shelfs : {currentlyReading: 'Currently Reading', wantToRead: 'Want to Read', read: 'Read' }}

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: true,
    shelfs: {}
  }

  componentDidMount() {
    //get all bootks
    BooksAPI.getAll().then((books) => {
      let dataBooks = {}
      books.forEach((book) => {
        dataBooks[book.shelf] = dataBooks[book.shelf] || [];
        dataBooks[book.shelf].push(book)
      })
      this.setState((state) => {
        state.shelfs = dataBooks;
        return state;
      })
      console.log(dataBooks)

      // books.map.map((book) => {
      //   dataBooks[book.shelf] = book
      //   return book;
      // })
      // console.log(dataBooks)
      // this.setState((state) => (
      //   state.shelfs.currentlyReading = books.map((books) => (books.shelf == "currentlyReading"))
      //   state.shelfs.wantToRead = books.map((books) => (books.shelf == "wantToRead"))
      //   state.shelfs.wantToRead = books.map((books) => (books.shelf == "read"))
      // ))
      // books.map((book) => (book.shelf = ''))
    });
  }

  addBookToShelf(book, shelf) {

  }



  render() {
    return (
      <div className="app">
             <Route path="/add" render={() => (
                <SearchBookList />
            )} />
             <Route exact path="/" render={(history) => (
                <BookList shelfs={this.state.shelfs} wording={wording} />
            )} />
      </div>
    )
  }
}

export default BooksApp
