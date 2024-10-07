

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import DishCard from '../../../components/cards/DishCard';


const PopularItemsCarousel = ({ data }) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={14}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          // disableOnInteraction: true,
        }}
        breakpoints={{
          765: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1050: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1124: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        loop={true}
        // centeredSlides={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper "
      >
        {
          data.map((item, index) => (
            <SwiperSlide key={index}> <DishCard item={item} /> </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}
export default PopularItemsCarousel
