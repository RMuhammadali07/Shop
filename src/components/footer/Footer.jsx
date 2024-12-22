import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <footer>
      <div className="container1">
        <div className="footer-logo">
          <h1>SHOP.CO</h1>
          <p>
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
        </div>
        <div className="company">
          <h4>COMPANY</h4>
          <p>About</p>
          <p>Features</p>
          <p>Works</p>
          <p>Career</p>
        </div>
        <div className="help">
          <h4>HELP</h4>
          <p>Customer Support</p>
          <p>Delivery Details</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div className="faq">
          <h4>FAQ</h4>
          <p>Account</p>
          <p>Manage Deliveries</p>
          <p>Orders</p>
          <p>Payments</p>
        </div>
        <div className="resources">
          <h4>Resources</h4>
          <p>Free eBooks</p>
          <p>Development Tutorial</p>
          <p>How to - Blog</p>
          <p>Youtube Playlist</p>
        </div>
      </div>
      <hr />
      <div className="container2 footer-bottom">
        <p>Shop.co © 2000-2023, All Rights Reserved</p>
        <div className="carta">
          <img src={assets.carta1} alt="" />
          <img src={assets.carta2} alt="" />
          <img src={assets.carta3} alt="" />
          <img src={assets.carta4} alt="" />
          <img src={assets.carta5} alt="" />
        </div>
      </div>
    </footer>
  );
}

export default Footer
