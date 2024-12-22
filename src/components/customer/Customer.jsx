import React from 'react'
import { assets } from '../../assets/assets'
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Customer = () => {
  return (
    <div>
      <Swiper Pagination={{
            type : 'fraction',

        }}
        Navigation={true}
        Autoplay={{
            delay: 200,
            disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        >

            <SwiperSlide>
                
            </SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Customer
