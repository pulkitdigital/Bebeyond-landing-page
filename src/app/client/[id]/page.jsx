"use client";
import React, { useEffect, useMemo, useState } from "react";
import { useAppContext } from "@/context";
import { brands2 } from "@/app/data/Brands";
import Header4 from "@/app/components/header4";
import "./style.css";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";
import Image from "next/image";
import AboutBrand1 from "@/app/components/about_client1";
function BrandInfo({ params }) {
  const { setLoaderToggel } = useAppContext();
  const paramData = useMemo(
    () => (params ? params.id.split("-") : ["home", "brand"]),
    [params]
  );
  const [infoData, setInfoData] = useState(null);
  useEffect(() => {
    setInfoData(
      brands2.filter((data) => {
        return data.pathname === paramData[1];
      })
    );
    setTimeout(() => {
      setLoaderToggel(false);
    }, 2000);
  }, []);
  return (
    <>
      <Header4 _dynamic1={paramData[0]} _dynamic2="brand_info" />
      <AboutBrand1 _brandName={infoData && infoData[0].brandName} _para={infoData && infoData[0].para} />
      <main
        id="all-projects"
        className=" w-full flex items-center justify-center bg-color_creame"
      >
        <div className="our-projects-3-container max-w-1600px w-full flex items-center justify-center relative">
          <div className="our-projects-3 w-88% flex items-center justify-center flex-col pt-16 pb-32 gap-7 792px:pb-24">
            <motion.div
              initial={{ y: "50%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
              }}
              viewport={{ once: true }}
              className="h2-div-for-our-projects-3 text-center"
            >
              <span className="span-for-h2-div-for-our-projects-3"></span>
              <h2 className=" bricolage_grotesque_head text-p1 font-p1 text-transparent bg-clip-text bg-color_linear_for_h2 792px:text-p2">
                {infoData && "Our Works"}
              </h2>
            </motion.div>
            <motion.h3
              initial={{ y: "50%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
              }}
              viewport={{ once: true }}
              className=" bricolage_grotesque_head text-h2 font-h2 text-center leading-h2 relative 1004px:text-h3 1004px:leading-h3 792px:text-h4"
            >
              Market-leading digital
              <br className=" 320px:hidden" />
              expertise at your fingertips!
            </motion.h3>
            <div className="our-projects-3-cards-container w-full flex items-start justify-center gap-x-[2%] flex-wrap gap-y-7 922px:flex-wrap 922px:justify-center 922px:gap-y-8 922px:gap-[4%] 400px:flex-col 400px:items-center 400px:justify-center 400px:gap-6">
              {infoData &&
                infoData[0].ourWorks.map((data, ind) => {
                  return (
                    <motion.div
                      initial={{ opacity: 0, y: "18%" }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                      }}
                      viewport={{ once: true }}
                      key={ind}
                      className="card-div-of-our-projects-3-cards-container w-32% flex flex-col items-start justify-start bg-white  group relative overflow-hidden 922px:w-48% 1238px:min-h-[520px] 1164px:min-h-[550px] 1004px:min-h-0 544px:min-h-[400px] 526px:min-h-0 400px:w-full 400px:gap-2"
                    >
                      <div className="curve-line-div-for-card-div-of-our-projects-3-cards-container min-h-20 min-w-20 border-2 border-color_orange absolute rounded-50% opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out 792px:min-w-16 792px:min-h-16"></div>
                      <Image
                        width={500}
                        height={250}
                        priority={true}
                        src={data._img}
                        alt="img"
                        className=" min-h-64 1004px:min-h-56 792px:min-h-48"
                      />
                      <p className="p-of-card-div-of-our-projects-3-cards-container mx-4 text-h5 font-h5 text-color_orange bricolage_grotesque_head mt-7 mb-2 1004px:mt-4 1004px:text-p1 792px:text-p2">
                        {data._p2}
                      </p>
                      <h4 className=" mx-4 text-h4 font-h4 bricolage_grotesque_head 1004px:text-h5  792px:text-p1">
                        {data._h4}
                      </h4>
                      <p className=" mx-4 text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3">
                        {data._p3}
                      </p>
                      <Link
                        onClick={() => setLoaderToggel(true)}
                        className=" 1238px:absolute 1238px:-bottom-1 1004px:static 544px:absolute 526px:static"
                        href={`/info/${"brand"}-${"project_info"}-${ind + 1}-${
                          infoData[0].pathname
                        }`}
                      >
                        <span className=" mb-4 mt-2 mx-4 flex items-center justify-start gap-2 cursor-pointer text-color_blue hover:text-color_orange">
                          <b className=" text-p1 font-p1 bricolage_grotesque_head 1004px:text-p2 792px:text-p3">
                            {data._span}
                          </b>
                          <b className=" text-h3 font-h3 1004px:text-h4 792px:text-h5new">
                            <HiArrowLongRight />
                          </b>
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default BrandInfo;
