import React from 'react'
import "./Customer.css"
import { assets } from '../../assets/assets'
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Customer = () => {
  return (
    <div className="customer">
      <div className="customer-heading">

        <h1>OUR HAPPY CUSTOMERS</h1>
      </div>
      <div className="customer-container">
        <Swiper
          Pagination={{
            type: "fraction",
          }}
          Navigation={true}
          Autoplay={{
            delay: 200,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Navigation, Autoplay]}
        >
          <SwiperSlide style={{display: "flex", justifyContent: "space-between", padding: '10px 100px'}}>
            <div className="container">
              <div className="customer-info">
                <img src={assets.star5} alt="" />
                <div>
                  <h2>Sarah M.</h2>
                  <img src={assets.ptchka} alt="" />
                </div>
                <p>
                  "I'm blown away by the quality and style of the clothes I
                  received from Shop.co. From casual wear to elegant dresses,
                  every piece I've bought has exceeded my expectations.”
                </p>
              </div>
            </div>
            <div className="container">
              <div className="customer-info">
                <img src={assets.star5} alt="" />
                <div>
                  <h2>Alex K.</h2>
                  <img src={assets.ptchka} alt="" />
                </div>
                <p>
                  "Finding clothes that align with my personal style used to be
                  a challenge until I discovered Shop.co. The range of options
                  they offer is truly remarkable, catering to a variety of
                  tastes and occasions.”
                </p>
              </div>
            </div>
            <div className="container">
              <div className="customer-info">
                <img src={assets.star5} alt="" />
                <div>
                  <h2>James L.</h2>
                  <img src={assets.ptchka} alt="" />
                </div>
                <p>
                  "As someone who's always on the lookout for unique fashion
                  pieces, I'm thrilled to have stumbled upon Shop.co. The
                  selection of clothes is not only diverse but also on-point
                  with the latest trends.”
                </p>
              </div>
            </div>
          </SwiperSlide>
                    <SwiperSlide style={{display: "flex", justifyContent: "space-between", padding: '10px 100px'}}>
            <div className="container">
              <div className="customer-info">
                <img src={assets.star5} alt="" />
                <div>
                  <h2>Sarah M.</h2>
                  <img src={assets.ptchka} alt="" />
                </div>
                <p>
                  "I'm blown away by the quality and style of the clothes I
                  received from Shop.co. From casual wear to elegant dresses,
                  every piece I've bought has exceeded my expectations.”
                </p>
              </div>
            </div>
            <div className="container">
              <div className="customer-info">
                <img src={assets.star5} alt="" />
                <div>
                  <h2>Alex K.</h2>
                  <img src={assets.ptchka} alt="" />
                </div>
                <p>
                  "Finding clothes that align with my personal style used to be
                  a challenge until I discovered Shop.co. The range of options
                  they offer is truly remarkable, catering to a variety of
                  tastes and occasions.”
                </p>
              </div>
            </div>
            <div className="container">
              <div className="customer-info">
                <img src={assets.star5} alt="" />
                <div>
                  <h2>James L.</h2>
                  <img src={assets.ptchka} alt="" />
                </div>
                <p>
                  "As someone who's always on the lookout for unique fashion
                  pieces, I'm thrilled to have stumbled upon Shop.co. The
                  selection of clothes is not only diverse but also on-point
                  with the latest trends.”
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Customer
