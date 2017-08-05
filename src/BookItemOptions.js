import React, { Component } from 'react'

class BookItemOptions extends Component {
  state = {
    shelf : ''
  }
  componentDidMount() {
    this.setState({shelf: this.props.book.shelf})
  }

  render() {
     return ( <div className={ (this.props.mode === '+') ? 'book-shelf-added' : 'book-shelf-changer'}>
                  <select value={this.state.shelf} onChange={(e) => { 
                    this.setState({shelf: e.target.value})
                    if (this.props.onChangeBookShelf) this.props.onChangeBookShelf(this.props.book, e.target.value) 
                    if (this.props.onAddBookToShelf) this.props.onAddBookToShelf(this.props.book, e.target.value) 
                  }}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>)
  }
}

export default BookItemOptions
