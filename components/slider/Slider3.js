import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";

SwiperCore.use([Navigation]);

const Slider3 = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={{
          prevEl: ".custom_prev",
          nextEl: ".custom_next",
        }}
        className="custom-class"
      >
        <SwiperSlide>
          <img
            className="rounded"
            src="/assets/imgs/placeholders/mockup-1.png"
            alt="Prototype.NEXT Software Consulting Platform"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded"
            src="/assets/imgs/placeholders/mockup-2.png"
            alt="Prototype.NEXT Software Consulting Platform"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded"
            src="/assets/imgs/placeholders/mockup-3.png"
            alt="Prototype.NEXT Software Consulting Platform"
          />
        </SwiperSlide>
      </Swiper>

      {/* <div className="custom-nav">
                <button type="button" className="custom_prev">
                    Prev
                </button>
                <button type="button" className="custom_next">
                    Next
                </button>
            </div> */}
    </>
  );
};

export default Slider3;
