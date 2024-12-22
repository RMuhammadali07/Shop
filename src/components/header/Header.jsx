import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <h1>
          <Link to="/">SHOP.CO</Link>
        </h1>
      </div>
      <nav>
        <ul>
          <li>shop</li>
          <li>On Sale</li>
          <li>New Arrivals</li>
          <li>Brands</li>
        </ul>
      </nav>
      <div className="search">
        <label>
          <img className="search1" src={assets.search} alt="" />
          <input type="text" placeholder="Search for products..." />
        </label>
      </div>
      <div className="cart-user">
        <img className="search2" src={assets.search2} alt="" />
        <img src={assets.header_cart} alt="" />
        <img src={assets.header_user} alt="" />
      </div>
    </div>
  );
}

export default Header
