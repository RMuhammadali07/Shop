import React from 'react'
import './Brend.css'
import {assets} from "../../assets/assets"

const Brend = () => {
  return (
    <div className="brend">
      <img src={assets.versace} alt="" />
      <img src={assets.zara} alt="" />
      <img src={assets.gucci} alt="" />
      <img src={assets.prada} alt="" />
      <img src={assets.calvin} alt="" />
    </div>
  );
}

export default Brend
