"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

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
      <div className="py-4">
        <Swiper
          // spaceBetween={10}
          slidesPerView={4}
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
            <img
              className="h-8"
              alt="fincra-logo"
              src="/assets/images/home/partners/fincra-logo.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-8"
              src="/assets/images/home/partners/BetKing.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-8"
              src="/assets/images/home/partners/decadent_logo.jpeg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-8"
              src="/assets/images/home/partners/oapay_logo.jpeg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/images/home/partners/oa_logo.svg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default TrustedPartners;
