import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom';
import SearchBookList from './SearchBookList';
import BookList from './BookList';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: true,
    shelfs: [
      { 
        title: 'Currently Reading',
        books: [{
          imageURL:'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api',
          title: 'To Kill a Mockingbird',
          authors: 'Harper Lee'
        },
        {
          imageURL:'http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api',
          title: 'Ender\'s Game',
          authors: 'Orson Scott Card'
        }]
      },
      {
        title: 'Read',
        books: [{
          imageURL:'http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api',
          title: 'The Hobbit',
          authors: 'J.R.R. Tolkien'
        }]
      }
    ]
  }

  componentDidMount() {
    //get all bootks
    this.setState({books: []})
  }

  render() {
    return (
      <div className="app">
             <Route path="/search" render={() => (
                <SearchBookList />
            )} />
             <Route exact path="/" render={(history) => (
                <BookList shelfs={this.state.shelfs} />
            )} />
      </div>
    )
  }
}

export default BooksApp
