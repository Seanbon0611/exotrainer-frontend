import React from "react";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "../../node_modules/swiper/swiper-bundle.css";
import "swiper/components/pagination/pagination.scss";
import "swiper/swiper.scss";
SwiperCore.use([Pagination]);
const LandingPage = () => {
  return (
    <div className="grid justify-center grid-cols-1 pt-16 text-center">
      <div className="flex justify-center">
        <div className="flex items-center justify-center w-4/5 bg-white h-72">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div className="flex flex-col items-center justify-center">
                <img
                  className="flex justify-center w-52 h-60"
                  src="https://exotrainer.s3-us-west-1.amazonaws.com/slide1.png"
                  alt="text1"
                />
                <span className="text-xl font-bold text-gray-900">
                  Take your business to the next level
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center justify-center">
                <img
                  className="flex justify-center w-52 h-60"
                  src="https://exotrainer.s3-us-west-1.amazonaws.com/slide2.png"
                  alt="text2"
                />
                <span className="pb-3 text-xl font-bold text-gray-900">
                  Easily manage client information & progress
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center justify-center">
                <img
                  className="flex justify-center w-52 h-60"
                  src="https://exotrainer.s3-us-west-1.amazonaws.com/slide3.png"
                  alt="text3"
                />
                <span className="pb-4 text-xl font-bold text-gray-900">
                  Track individual sessions, groups & payment for organizational
                  nirvana.
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center justify-center">
                <img
                  className="flex justify-center w-52 h-60"
                  src="https://exotrainer.s3-us-west-1.amazonaws.com/slide4.png"
                  alt="text4"
                />
              </div>
              <span className="pb-4 text-xl font-bold text-gray-900">
                Schedule everything in app, from the gym, home or anywhere else.
              </span>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <p className="pt-16">Signing up only takes a few minutes</p>
      <div className="flex-col">
        <div className="py-2">
          <button className="w-11/12 py-1 border border-gray-900 rounded-3xl">
            <Link to="/signup">Get Started</Link>
          </button>
        </div>
        <button className="w-11/12 py-1 text-white bg-gray-900 border rounded-3xl">
          <Link to="/login">Sign in</Link>
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
