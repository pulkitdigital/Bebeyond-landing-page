"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { brands2 } from "../../../data/Brands";
import Image from "next/image";
import "./style.css";
import "swiper/css";
import { useAppContext } from "@/context";
import Link from "next/link";
function ContactUs1BrandSlider({ _d }) {
  const { setLoaderToggel } = useAppContext();
  const [slideData, setSlideData] = useState(null);
  const [spaceBetween1, setSpaceBetween1] = useState(100);
  const [slidesPerView1, setSlidesPerView1] = useState(5);
  function handleSpaceBetween() {
    if (window.innerWidth < 467) {
      setSlidesPerView1(3);
      setSpaceBetween1(50);
    } else if (window.innerWidth < 540) {
      setSlidesPerView1(4);
      setSpaceBetween1(50);
    } else if (window.innerWidth < 664) {
      setSlidesPerView1(4);
      setSpaceBetween1(75);
    } else if (window.innerWidth < 793) {
      setSlidesPerView1(5);
      setSpaceBetween1(50);
    } else if (window.innerWidth < 1005) {
      setSlidesPerView1(5);
      setSpaceBetween1(75);
    } else if (window.innerWidth > 1004) {
      setSlidesPerView1(5);
      setSpaceBetween1(100);
    }
  }
  useEffect(() => {
    setSlideData(brands2);
    handleSpaceBetween();
    window.addEventListener("resize", handleSpaceBetween);
    return () => {
      window.addEventListener("resize", handleSpaceBetween);
    };
  }, []);

  return (
    <div
      className={` contact-us-1-brand-swiper ${_d} items-center justify-center w-full relative `}
    >
      <Swiper
        spaceBetween={spaceBetween1}
        loop={true}
        slidesPerView={slidesPerView1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {slideData &&
          slideData.map((data, ind) => {
            return (
              <SwiperSlide key={ind}>
                <Link
                  className=" w-full"
                  href={`/client/${"services"}-${data.pathname}`}
                  onClick={() => setLoaderToggel(true)}
                >
                  <Image
                    width={100}
                    height={100}
                    priority={true}
                    alt="dp"
                    className=" w-full hover:scale-90 transition-transform duration-200 ease-in-out"
                    src={data._img}
                  />
                </Link>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}

export default ContactUs1BrandSlider;
