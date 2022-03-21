import React,{Component} from "react";
import { Link } from 'react-router-dom'

class SearchBooks extends Component {
    state = {
        query: ''
      }
      updateQuery = (query) => {
        this.setState(() => ({
          query: query.trim()
        }))
      }
  
    getBookShelf = (bookSearch) => {
        let bookShelfName = 'none'
        this.props.booksList.forEach( book => {
            if (book.id===bookSearch.id) {
                bookShelfName=book.shelf
            }
        });
        return bookShelfName;
    }
    render(){
        const { booksSearch , onSearchOfbooks, onUpdateShelf} = this.props

        return(
            <div className="search-books">
            <div className="search-books-bar">
               
              <Link
          
              to='/'
              className="close-search">
              
            </Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */
                
                }
                <input 
                type="text" 
                placeholder="Search by title or author" 
                onChange={(event) => onSearchOfbooks(event.target.value)}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {booksSearch.length >= 0
                 ? (booksSearch.map((books) => (
                   <li key={books.id}>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${books.imageLinks !== undefined ? books.imageLinks.smallThumbnail : books.thumbnail})` }}></div>
                            <div className="book-shelf-changer">
                              <select onChange={(event) => onUpdateShelf(books,event.target.value.toString())} value={this.getBookShelf(books)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{books.title}</div>
                          <div className="book-authors">{books.authors}</div>
                        </div>
                      </li>
                  )))
                  :(<h1>No Results</h1>)
                 
                }
                </ol>
            </div>
          </div>
        )
    }
}

export default SearchBooks