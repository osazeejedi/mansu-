"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const TrustedPartners = () => {
  const swiperBreakpoints = {
    350: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  };

  return (
    <div className="bg-primary text-white">
      <div className="py-6">
        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          loop={true}
          breakpoints={swiperBreakpoints}
          speed={10000}
          autoplay={{
            delay: 0,
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <h4 className="font-medium md:text-xl">
              Trusted by <span className="font-bold">3000 customers</span>
            </h4>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/images/home/partners/techstars.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/images/home/partners/techstars.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/images/home/partners/techstars.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/images/home/partners/techstars.png" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default TrustedPartners;
