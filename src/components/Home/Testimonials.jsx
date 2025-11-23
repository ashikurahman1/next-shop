'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaQuoteLeft } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

export default function Testimonials() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments?_limit=12')
      .then(res => res.json())
      .then(data => setReviews(data));
  }, []);

  return (
    <div className="my-15 lg:my-25">
      <div className="text-center mb-24">
        <h3 className="text-4xl font-bold mb-3 my-8 text-secondary">
          What our customers are saying
        </h3>
      </div>

      <Swiper
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        effect={'coverflow'}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1400: { slidesPerView: 4 },
        }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwipe"
      >
        {reviews.map(review => (
          <SwiperSlide key={review.id}>
            <div className="max-w-sm bg-base-100 shadow-lg rounded-xl p-6 border border-gray-200">
              <FaQuoteLeft className="text-primary text-2xl mb-4" />
              <p className="mb-4">{review.body}</p>

              <div className="border-t border-dashed border-gray-300 my-4"></div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary overflow-hidden">
                  <img
                    src={`https://i.pravatar.cc/150?u=${review.email}`}
                    alt={review.name}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{review.name}</h3>
                  <p className="text-sm text-gray-500">Happy Customer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
