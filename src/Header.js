// rfce + tab
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  console.log(basket);
  return (
    <nav className="header">
      {/* logo on the left -> image of amazon*/}
      <Link to="/">
        <img
          className="header_logo"
          src="https://www.mabaya.com/wp-content/uploads/2019/10/amazon_PNG25.png"
          alt=""
        />
      </Link>

      {/* Search box */}
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>

      {/* 3 links  */}
      <div className="header_nav">
        {/* 1st link */}
        <Link to={!user && "/login"} className="header_link">
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionLineOne">Hello Guest</span>
            <span className="header_optionLineTwo">
              {user ? "Sign out" : "Sign In"}
            </span>
          </div>
        </Link>

        {/* 2nd link */}
        <Link to="/login" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Return</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
        </Link>

        {/* 3rd link */}
        <Link to="/login" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>
          </div>
        </Link>

        {/* 4th link */}
        {/* Basket icon with number */}
        <Link to="/checkout" className="header_link">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo header_basketCount">
              {basket?.length}
            </span>
            {/* Shopping basket icon */}
            {/* Number of items in the basket */}
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
