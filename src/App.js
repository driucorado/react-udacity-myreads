import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom';
import SearchBookList from './SearchBookList';
import BookList from './BookList';

//variable that has all the english translation o every id that it is in the system
const wording = {shelfs : {currentlyReading: 'Currently Reading', wantToRead: 'Want to Read', read: 'Read' }}

class BooksApp extends Component {
  state = {
    shelfs: {},
    bookIds: {},
    query: ''
  }

  componentDidMount() {
    //get all bootks
    BooksAPI.getAll().then((books) => {
      let dataBooks = {}
      let bookIds = {}
      books.forEach((book) => {
        dataBooks[book.shelf] = dataBooks[book.shelf] || [];
        dataBooks[book.shelf].push(book)
        bookIds[book.id] = true;
      })
      this.setState((state) => {
        state.shelfs = dataBooks;
        state.bookIds = bookIds;
        return state;
      })
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

  checkIdBook = (id) => {
    return this.state.bookIds.hasOwnProperty(id);
  }

  addBookToShelf = (book, shelf) => {
      console.log(shelf)
      console.log(book)
      book.shelf = shelf
      this.setState((state) => (
        state.shelfs[shelf].push(book)
      ))
  }

  changeBookShelf = (book, newShelf) => {
    console.log(newShelf)
    console.log(book)
    this.setState((state) => {
        state.shelfs[book.shelf] = state.shelfs[book.shelf].filter((bookFilter) => (bookFilter.id !== book.id))
        book.shelf = newShelf;
        if (newShelf !== 'none')
          state.shelfs[newShelf].push(book)
        return state;
    })
  }




  render() {
    return (
      <div className="app">
             <Route path="/add" render={() => (
                <SearchBookList 
                onAddBookToShelf={this.addBookToShelf} onCheckBookId={this.checkIdBook}/>
            )} />
             <Route exact path="/" render={(history) => (
                <BookList 
                shelfs={this.state.shelfs} 
                onChangeBookShelf={this.changeBookShelf} 
                wording={wording} />
            )} />
      </div>
    )
  }
}

export default BooksApp
