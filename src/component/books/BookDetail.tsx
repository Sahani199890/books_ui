import { useDispatch, useSelector } from "react-redux";
import "./bookDetails.css";
import { useEffect } from "react";
import { GET_ONLINE_BOOK } from "../../store/books/ActionType";

export default function BookDetail() {
  document.title = "Book Detail";
  const dispatch = useDispatch();

  const urlParams = new URLSearchParams(window.location.search);
  const bookId = urlParams.get("id");

  useEffect(() => {
    dispatch({ type: GET_ONLINE_BOOK, payload: bookId });
  }, []);

  const response = useSelector((state: any) => state.booksReducer.response);
  console.log(response);

  return (
    <div className="container">
      {response && (
        <>
          <div className="book-details-container d-flex justify-content-between">
            <img src={response.bookImage} className="card-img-top" />
            <div className="px-4">
              <h1 className="mb-4">{response.title}</h1>
              <h3 className="mb-4">{response.author}</h3>
              <div className="mb-3">{response.bookDescription}</div>
              <h5>{response.price}</h5>
              <div className="d-flex gap-2">
                <button className="btn btn-primary">CART</button>
                <button className="btn btn-primary">BUY</button>
              </div>
            </div>
          </div>
          <div className="review mb-3">Reviews</div>
        </>
      )}
    </div>
  );
}
