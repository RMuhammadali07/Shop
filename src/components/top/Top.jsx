import React, { useState } from 'react'
import './Top.css'
import { newProducts, topProducts, takProducts } from "../../assets/assets";

const Top = () => {

    const [products, setProducts] = useState(false)
  
    const handleClickTrue = () => {
      setProducts(true)
    }

    const handleClickFalse = () => {
      setProducts(false);
    };

  return (
    <div className="top">
      <div className="top-heading">
        <h1>TOP PRODUCTS</h1>
      </div>
      <div className="top-container">
        {topProducts.map((product, index) => {
          return (
            <div key={index} className="container">
              <img className="img" src={product.img} alt="" />
              <h2 className="name">{product.name}</h2>
              <img className="star" src={product.star} alt="" />
              <div>
                <h1 className="price">${product.price}</h1>
                <h3 className={product.cheg === "" ? "chegTrue" : "chegFalse"}>
                  ${product.cheg}
                </h3>
                <p className={product.foiz === "" ? "foizTrue" : "foizFalse"}>
                  -{product.foiz}%
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <button className={products ? "btn2" : "btn"} onClick={handleClickTrue}>
        View All
      </button>

      {products === true && (
        <div className="new-container">
          {newProducts.map((product, index) => {
            return (
              <div key={index} className="container">
                <img className="img" src={product.img} alt="" />
                <h2 className="name">{product.name}</h2>
                <img className="star" src={product.star} alt="" />
                <div>
                  <h1 className="price">${product.price}</h1>
                  <h3
                    className={product.cheg === "" ? "chegTrue" : "chegFalse"}
                  >
                    ${product.cheg}
                  </h3>
                  <p className={product.foiz === "" ? "foizTrue" : "foizFalse"}>
                    -{product.foiz}%
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {products === true && (
        <div className="products-container">
          {takProducts.map((product, index) => {
            return (
              <div key={index} className="container">
                <img className="img" src={product.img} alt="" />
                <h2 className="name">{product.name}</h2>
                <img className="star" src={product.star} alt="" />
                <div>
                  <h1 className="price">${product.price}</h1>
                  <h3
                    className={product.cheg === "" ? "chegTrue" : "chegFalse"}
                  >
                    {" "}
                    ${product.cheg}{" "}
                  </h3>
                  <p className={product.foiz === "" ? "foizTrue" : "foizFalse"}>
                    {" "}
                    -{product.foiz}%{" "}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <button className={products ? "btn" : "btn2"} onClick={handleClickFalse}>
        Hide All
      </button>
    </div>
  );
}

export default Top
