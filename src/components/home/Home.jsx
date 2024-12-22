import React from 'react'
import './Home.css'
import {assets} from "../../assets/assets"

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="home-info">
          <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
          <p>
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button>Shop Now</button>
          <div className="info">
            <div className="brands">
              <h1>200+</h1>
              <p>International Brands</p>
            </div>
            <div className="hr"></div>
            <div className="products">
              <h1>2,000+</h1>
              <p>High-Quality Products</p>
            </div>
            <div className="hr"></div>
            <div className="customers">
              <h1>30,000+</h1>
              <p>Happy Customers</p>
            </div>
          </div>
          
        </div>
        <div className="home-img">
            <img className='img' src={assets.home_img} alt="" />
            <img className='img1' src={assets.vector} alt="" />
            <img className='img2' src={assets.vector} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home
