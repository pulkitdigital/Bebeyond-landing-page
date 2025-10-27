"use client";
import React, { useEffect, useState } from "react";
import "./style.css";
import Image from "next/image";
import { HiArrowLongRight } from "react-icons/hi2";
import { projects1 } from "../../../data/Projects";
import Link from "next/link";
import { motion } from "framer-motion";
import { useAppContext } from "@/context";
function OurProjects1Cards() {
  const {  setLoaderToggel } = useAppContext();
  const [cardsData, setCardsData] = useState(null);
  useEffect(() => {
    setCardsData(projects1);
  }, []);

  return (
    <div className="our-projects-1-cards-container w-full flex items-start justify-between 922px:flex-wrap 922px:justify-center 922px:gap-y-8 922px:gap-[4%] 400px:flex-col 400px:items-center 400px:justify-center 400px:gap-6">
      {cardsData &&
        cardsData.map((data, ind) => {
          return (
            <motion.div
              initial={{ opacity: 0, y: "18%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .50,
              }}
              viewport={{ once: true }}
              key={ind}
              className={`card-div-of-our-projects-1-cards-container w-32% flex flex-col items-start justify-start bg-white  group relative overflow-hidden h-[530px] 922px:w-48% 1238px:h-[550px] 1004px:h-[480px] 922px:h-[440px] 792px:h-[390px] 610px:h-[410px] 502px:h-[440px] 456px:h-[480px] 400px:h-[400px] 306px:h-[420px] 400px:w-full 400px:gap-2`}
            >
              <div className="curve-line-div-for-card-div-of-our-projects-1-cards-container min-h-20 min-w-20 border-2 border-color_orange absolute rounded-50% opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out 792px:min-w-16 792px:min-h-16"></div>
              <Image
              
              width={250}
              height={100}
                priority={true}
                src={data._img}
                alt="img"
                className=" w-full min-h-64 1004px:min-h-56 792px:min-h-48"
              />
              <p className=" mx-4 text-h5 font-h5 text-color_orange bricolage_grotesque_head mt-7 1004px:mt-4 1004px:text-p1 792px:text-p2">
                {data._p2}
              </p>
              <h4 className=" mx-4 text-h4 font-h4 bricolage_grotesque_head 1004px:text-h5 792px:text-p1 leading-none my-2">
                {data._h4}
              </h4>
              <p className=" mx-4 text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3 400px:text-justify">
                {data._p3}
              </p>
              {/* <Link
              onClick={()=>setLoaderToggel(true)}
                className=" absolute -bottom-1"
                href={`/info/${"home"}-${"project_info"}-${ind + 1}`}
              >
                <span className=" mb-4 mt-2 mx-4 flex items-center justify-start gap-2 cursor-pointer text-color_blue hover:text-color_orange">
                  <b className=" text-p1 font-p1 bricolage_grotesque_head 1004px:text-p2 792px:text-p3">
                    {data._span}
                  </b>
                  <b className=" text-h3 font-h3 1004px:text-h4 792px:text-h5new">
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

export default OurProjects1Cards;
