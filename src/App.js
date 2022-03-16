import React,{Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './BookList'
import { Route, Routes, Link } from 'react-router-dom'
import SearchBooks from './SearchBooks'
class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    booksSearch: []
  }

  componentDidMount(){
    BooksAPI.getAll()
    .then((books) => {
      this.setState(() => ({
          books
      }))
      console.log('books', books)
    })
  }
  searchOfbooks(event){
    if (event.length === 0) {
      return this.setState({
        booksSearch: [],
        
      });
    }
    else{
      BooksAPI.search(event)
      .then((booksSearch) => {
       
          this.setState(() => ({
            booksSearch
          }))
          
    
        console.log('filter', booksSearch)
      })
    }

  }

  updateShelf = async (book, shelf) => {
    try {
      await BooksAPI.update(book, shelf);
      this.setState(({ books }) => {
        let updatedbooks = books.filter(({ id }) => id !== book.id);
        if (shelf !== 'none')
          updatedbooks = updatedbooks.concat({ ...book, shelf });
        return { books: updatedbooks };
      });
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <div className="app">
 
       
            <Routes>
         <Route exact path='/' element={
            <BookList
              books={this.state.books}
              onUpdateShelf={this.updateShelf}
               />
        } />
          <Route exact path='/search' element={
            <SearchBooks
            booksSearch={this.state.booksSearch}
            onSearchOfbooks={(booksSearch) => this.searchOfbooks(booksSearch)}
            onUpdateShelf={this.updateShelf}
               />
        } />
        </Routes>
            <div className="open-search">
              <Link
          
          to='/search'>
            <button>Add a book</button>
        </Link>
            </div>
          </div>
        
    )
  }
}

export default BooksApp
