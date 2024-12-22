import React from 'react'
import './Design.css'
import { assets } from '../../assets/assets';

const Design = () => {
  return (
    <div className="design">
      <div className="design-container">
        <div className="design-heading">
          <h1>BROWSE BY DRESS STYLE</h1>
        </div>
        <div className="container">
          <div className="img1">
            <img  src={assets.designImg1} alt="" />
            <h2>Casual</h2>
          </div>
          <div className="img2">
            <img src={assets.designImg2} alt="" />
            <h2>Formal</h2>
          </div>
          <div className="img3">
            <img  src={assets.designImg3} alt="" />
            <h2>Party</h2>
          </div>
          <div className="img4">
            <img src={assets.designImg4} alt="" />
            <h2>Gym</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Design
