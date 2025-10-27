"use client";
import React, { useEffect, useState } from "react";
import "./style.css";
import Image from "next/image";
import { HiArrowLongRight } from "react-icons/hi2";
import { services1 } from "../../../data/Services";
import Link from "next/link";
import { motion } from "framer-motion";
import { useAppContext } from "@/context";
function OurServices1Cards() {
  const [cardsData, setCardsData] = useState(null);
  const { setLoaderToggel } = useAppContext();

  useEffect(() => {
    setCardsData(services1);
  }, []);
  return (
    <div className="our-services-1-cards-container w-full flex items-start justify-between 922px:flex-wrap 922px:justify-center 922px:gap-y-8 922px:gap-[4%] 400px:flex-col 400px:items-center 400px:justify-center 400px:gap-6 overflow-hidden">
      {cardsData &&
        cardsData.map((data, ind) => {
          return (
            <motion.div
              initial={{ y: "18%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
              }}
              viewport={{ once: true }}
              key={ind}
              className="card-div-of-our-services-1-cards-container w-32% flex flex-col items-center justify-center bg-white  group relative overflow-hidden 922px:w-48%  400px:min-h-0 400px:w-full 400px:gap-2 pb-8"
            >
              <Image
                width={100}
                height={100}
                priority={true}
                src="/BeB-Pattern Set/BeB-Pattern Set/Pattern/polygon-corner-shape.png"
                alt="icon"
                className="polygon-corner-shape-img-of-card-div-of-our-services-1-cards-container w-1/3 absolute opacity-0 left-0 top-0 group-hover:opacity-100 transition-all duration-500 ease-in-out 1004px:w-1/4"
              />
              <div className="img-div-of-card-div-of-our-services-1-cards-container w-24 flex items-center justify-center relative h-24 bg-color_blue_light group-hover:bg-color_orange_light transition-all duration-500 ease-in-out my-7 1004px:h-20 1004px:w-20 792px:w-16 792px:h-16">
                <Image
                  width={100}
                  height={100}
                  priority={true}
                  src={data.iconSvg}
                  alt="icon"
                  className=" w-16 absolute 1004px:w-12 792px:w-10"
                />
              </div>
              <h4 className="w-88% text-h4 font-h4 bricolage_grotesque_head text-center 1004px:text-h5 1004px:leading-h5 792px:text-p1 leading-6 mb-4">
                {data._h4}
              </h4>
              <p className="w-88% text-center text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3 leading-5">
                {data._p1}
              </p>
              {/* <Link
                href={`/info/${"home"}-${"service_info"}-${ind + 1} `}
                onClick={() => setLoaderToggel(true)}
              >
                <span className="my-4 flex items-center justify-center gap-2 cursor-pointer text-color_blue hover:text-color_orange">
                  <b className="text-p1 font-p1 bricolage_grotesque_head 1004px:text-p2 792px:text-p3">
                    {data._span}
                  </b>
                  <b className="text-h3 font-h3 1004px:text-h4 792px:text-h5new">
                    <HiArrowLongRight />
                  </b>
                </span>
              </Link> */}
            </motion.div>
          );
        })}
    </div>
  );
}

export default OurServices1Cards;
