import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/userspage/Login";
import Register from "./component/userspage/Register";
import Header from "./component/headerandfooter/Header";
import Footer from "./component/headerandfooter/Footer";
import Homepage from "./component/homepage/Homepage";
import BookDetail from "./component/books/BookDetail";
import BooksList from "./component/bookshop/BooksList";
import Contact from "./component/contact/Contact";
// import IndexData from "./component/homepage/IndexData";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/books" element={<BooksList />} />
        <Route path="/book-detail?" element={<BookDetail />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/contact" element={<IndexData />} /> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
