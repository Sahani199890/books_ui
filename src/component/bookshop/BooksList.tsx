import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ONLINE_BOOKS_LIST } from "../../store/books/ActionType";
import { Link } from "react-router-dom";
import "./booksList.css";

const BooksList = () => {
  document.title = "books shop";
  const dispatch = useDispatch();

  const booksList = useSelector((state: any) => state.booksReducer.response);
  console.log(booksList);

  useEffect(() => {
    dispatch({ type: ONLINE_BOOKS_LIST });
  }, [dispatch]);

  return (
    <div className="container">
      <div className="row">
        {booksList && booksList.length > 0 ? (
          booksList.map((book: any, index: number) => (
            <div key={index} className="col-md-3 card-div py-2">
              <Link to={`/book-detail?id=${book.book_id}`}>
                <div className="card">
                  <div className="homepage-image">
                    <img
                      src={book.bookImage}
                      alt={book.title}
                      className="card-img-top"
                      loading="lazy"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{book.title}</h5>
                    <p className="card-text">{book.author}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <h1>No Books Found</h1>
        )}
      </div>
    </div>
  );
};

export default BooksList;
