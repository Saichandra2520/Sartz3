import React from 'react';
import './reviews.css';
import { Data } from './Data';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";



const Reviews = () => {
  return (
    <section className="reviews container section">
        <h2 className="section__title">Reviews</h2>
        <span className="section__subtitle">My Clients says....</span>

        <Swiper className="reviews__container"
        loop = {true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
        >
            {Data.map(({id,image,title,description}) => {
                return (
                    <SwiperSlide className="review__card" key={id}>
                        <img src={image} className="review__img" alt='i'/>

                        <h3 className="review__name">{title}</h3>
                        <p className="review__description">{description}</p>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </section>
  )
}

export default Reviews