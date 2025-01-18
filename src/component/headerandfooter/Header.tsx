import { useState, useEffect } from "react";
import "./Header.css";
import { FaRegUser, FaOpencart, FaBell } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import logo from "../../images/logo.png";
import { SEARCH_DATA } from "../../store/books/ActionType";
import { convertToBase64 } from "../../helper/Misc";

const Header = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm) {
        dispatch({ type: SEARCH_DATA, payload: convertToBase64(searchTerm) });
      }
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, dispatch]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="header">
      <div className="container-overflow">
        <div className="header-div">
          <Link to="/homepage">
            <div className="logo">
              <img
                src={logo}
                alt="Book Haven Logo"
                width="90px"
                height="70px"
              />
            </div>
          </Link>
          <div className="list-div">
            <ul>
              <li>
                <Link to="/homepage">Home</Link>
              </li>
              <li>
                <Link to="/books">Books</Link>
              </li>
              <li>
                <Link to="/categories">Categories</Link>
              </li>
              <li>
                <Link to="/deals">Deals</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="search-bar">
            <div className="search-bar-div">
              <input
                onChange={handleSearchChange}
                className="form-control"
                placeholder="Search books, authors, ISBN"
                type="search"
                value={searchTerm}
                aria-label="Search books"
              />
            </div>
          </div>
          <div className="icons-div">
            <div className="notification-icon" title="notification">
              <FaBell />
              <span className="notification-count counter-div">5</span>
            </div>
            <div className="wishlist in-icons" title="wishlist">
              <LuShoppingBag />
              <span className="wishlist-count counter-div">2</span>
            </div>
            <div className="profile-icon">
              <FaRegUser />
              <div className="profile-div">
                <div className="profile">Abhishek Sahani</div>
                <Link to="/profile">
                  <div className="profile-dropdown">Profile</div>
                </Link>
                <Link to="/orders">
                  <div className="profile-dropdown">Orders</div>
                </Link>
                <Link to="/settings">
                  <div>Settings</div>
                </Link>
                <div className="logout">Logout</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
