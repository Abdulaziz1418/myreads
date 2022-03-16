import React,{Component} from "react";

class BookList extends Component {

    render(){
        const { books , onUpdateShelf} = this.props

        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {
                    books.map((books) => (
                      books.shelf === 'currentlyReading'?
                      (<li key={books.id}>
                      <div className="book">
                        <div className="book-top">
                          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${books.imageLinks.smallThumbnail})` }}></div>
                          <div className="book-shelf-changer">
                            <select onChange={(event) => onUpdateShelf(books,event.target.value)} value="currentlyReading">
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
                    ):false))}

                  </ol>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                  {
                    books.map((books) => (
                      books.shelf === 'wantToRead'?
                      (<li key={books.id}>
                      <div className="book">
                        <div className="book-top">
                          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${books.imageLinks.smallThumbnail})` }}></div>
                          <div className="book-shelf-changer">
                            <select onChange={(event) => onUpdateShelf(books,event.target.value)} value="wantToRead">
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
                    ):false))}
                  </ol>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                  {
                    books.map((books) => (
                      books.shelf === 'read'?
                      (<li key={books.id}>
                      <div className="book">
                        <div className="book-top">
                          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${books.imageLinks.smallThumbnail})` }}></div>
                          <div className="book-shelf-changer">
                            <select onChange={(event) => onUpdateShelf(books,event.target.value)} value="read">
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
                    ):false))}
                    
                  </ol>
                </div>
              </div>
            </div>
          </div>
          </div>
        )
    }
}

export default BookList