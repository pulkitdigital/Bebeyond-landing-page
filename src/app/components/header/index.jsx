"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import AutoType from "./auto_type";
import Image from "next/image";
function Header() {
  return (
    <header className=" w-full flex items-center justify-center ">
      <div className="header-container max-w-1600px w-full flex items-center justify-center relative">
        <div className="header w-88% flex items-center justify-between h-[640px] 900px:h-[580px] 792px:h-[510px] 690px:h-[440px] 608px:h-[410px] 502px:h-[430px] 500px:h-[380px]">
          <motion.div
            initial={{ x: "-18%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0,
            }}
            viewport={{ once: true }}
            className="left-div-of-header flex items-start justify-center flex-col gap-7 792px:gap-4 w-1/2 h-full 500px:w-full"
          >
            <div className="top-div-of-left-div-of-header flex items-center justify-start w-full">
              <h1 className="  bricolage_grotesque_head flex flex-col items-start justify-center w-full">
                <AutoType />
                <span className=" text-h2 font-h2 leading-h2 1004px:text-h3 1004px:leading-h3 792px:text-h4">
                  Build Websites That Drive Results
                </span>
              </h1>
            </div>
            <div className="bottom-div-of-left-div-of-header flex items-start justify-center w-full flex-col gap-4">
              <p className=" public_sans_body text-p1 font-p1 text-color_gray text-justify 1004px:text-p2 792px:text-p3">
                At BeBeyond Digital, we create Shopify and WordPress websites that blend stunning design with seamless functionality. From elegant portfolios to powerful e-commerce stores, our sites are fast, mobile-optimized, and conversion focused helping businesses attract, engage, and grow their audience with a strong digital presence that truly delivers measurable results.
              </p>
              <Link href="https://bebeyond.digital/">
                <button
                  className=" bricolage_grotesque_head font-h5 text-h5 bg-color_blue px-7 py-4 text-white 
                relative z-0 flex items-center justify-center overflow-hidden 1004px:text-p1 792px:text-p2 400px:px-3 400px:py-2 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5]      before:rounded-[100%] before:bg-color_orange before:transition-transform before:duration-700 hover:before:translate-x-[0%] hover:before:translate-y-[0%]
                active:scale-75 active:transition-all active:duration-700">
                  Visit Website
                </button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: "18%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0,
            }}
            viewport={{ once: true }}
            className="right-div-of-header flex items-end justify-end w-1/2 h-full relative 500px:hidden"
          >
            <div className=" w-[80%] h-full relative rounded-[50%] 1550px:w-[82%] 1500px:w-[86%] 1450px:w-[90%] 1370px:w-[94%] 1310px:w-[98%]">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                }}
                className=" w-20 h-20  absolute bottom-[16%] left-[7%] 1250px:left-0 1150px:bottom-[20%] 1150px:left-[-7%] 1090px:left-[-16%] 1004px:left-[-25%] 828px:w-16 828px:h-16 662px:w-14 662px:h-14 662px:bottom-[16%] 582px:bottom-[10%]"
              >
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [0, "7%", 0] }}
                  transition={{
                    duration: 3,
                    delay: 2,

                    repeat: Infinity,
                  }}
                  className=" w-full h-full "
                >
                  {" "}
                  <Image
                    width={100}
                    height={100}
                    priority={true}
                    className=" w-full h-[81%] "
                    alt="img"
                    src="/BeB_Icon Set/BeB_Icon Set/Set/Cutomer Review.svg"
                  />
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.75,
                }}
                className=" w-20 h-20 absolute bottom-[53%] left-0 1250px:bottom-[50%] 1150px:bottom-[64%] 828px:w-16 828px:h-16 700px:bottom-[52%] 662px:w-14 662px:h-14 662px:bottom-[52%] 662px:left-[-7%]"
              >
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [0, "-7%", 0] }}
                  transition={{
                    duration: 3,
                    delay: 2,

                    repeat: Infinity,
                  }}
                  className=" w-full h-full  "
                >
                  {" "}
                  <Image
                    width={100}
                    height={100}
                    priority={true}
                    className=" w-full h-full"
                    alt="img"
                    src="/BeB_Icon Set/BeB_Icon Set/Values/Impact.svg"
                  />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 1,
                }}
                className=" w-20 h-20  absolute top-[0%] left-[23%] 1250px:left-[18%] 1250px:top-[7%] 1200px:left-[16%] 1150px:left-[58%] 1150px:top-0 828px:w-16 828px:h-16 700px:top-[16%] 700px:left-[52%] 662px:w-14 662px:h-14"
              >
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [0, "7%", 0] }}
                  transition={{
                    duration: 3,
                    delay: 2,

                    repeat: Infinity,
                  }}
                  className=" w-full h-full "
                >
                  <Image
                    width={100}
                    height={100}
                    priority={true}
                    className=" w-full h-[92%]"
                    alt="img"
                    src="/BeB_Icon Set/BeB_Icon Set/Values/Innovation.svg"
                  />
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 1.25,
                }}
                className=" w-20 h-20  absolute top-[7%] right-[16%] 1250px:right-[20%] 1150px:right-[-7%] 1150px:top-[34%] 1004px:top-[43%] 1004px:right-[-10%] 828px:w-16 828px:h-16 662px:w-14 662px:h-14"
              >
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [0, "-7%", 0] }}
                  transition={{
                    duration: 3,
                    delay: 2,

                    repeat: Infinity,
                  }}
                  className=" w-full h-full "
                >
                  <Image
                    width={100}
                    height={100}
                    priority={true}
                    className=" w-full h-[92%]"
                    alt="img"
                    src="/BeB_Icon Set/BeB_Icon Set/Values/Integrity.svg"
                  />
                </motion.div>
              </motion.div>
            </div>
            <Image
              width={500}
              height={1000}
              priority={true}
              alt="img"
              className="w-[430px] right-0 bottom-0 absolute 556px:h-full"
              src="/header-1-img-2.png"
            />
          </motion.div>
        </div>
      </div>
    </header>
  );
}

export default Header;
