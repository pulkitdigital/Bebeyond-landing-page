"use client";
import React from "react";
import OurServices1Cards from "./our_services1_cards";
import "./style.css";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
function OurServices1() {
  return (
    <main className=" w-full flex items-center justify-center bg-color_creame relative overflow-hidden">
      <Image
        width={100}
        height={100}
        priority={true}
        src="/BeB-Pattern Set/BeB-Pattern Set/Pattern/corner-pattern-1.png"
        className=" w-1/3 absolute right-0 top-0 opacity-25 662px:w-1/2 500px:w-3/4"
        alt="Corner Pattern 1"
      />
      <Image
        width={100}
        height={100}
        priority={true}
        src="/BeB-Pattern Set/BeB-Pattern Set/Pattern/corner-pattern-2.png"
        className=" w-1/3 absolute left-0 bottom-1/4 opacity-25 922px:bottom-1/3 662px:w-1/2 400px:bottom-[23%] 500px:w-3/4"
        alt="Corner Pattern 2"
      />
      <div className="bg-navy-div-for-main-of-our-services-1 absolute h-1/3 bg-color_navy w-full bottom-0 400px:h-[23%]"></div>
      <div className="our-services-1-container max-w-1600px w-full flex items-center justify-center relative">
        <div className="our-services-1 w-88% flex items-center justify-center flex-col gap-7 py-16 pb-2">
          <motion.div
            initial={{ opacity: 0, y: "50%" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
            }}
            viewport={{ once: true }}
            className="h2-div-for-our-services-1 text-center"
          >
            <span className="span-for-h2-div-for-our-services-1"></span>
            <h2 className=" bricolage_grotesque_head text-p1 font-p1 text-transparent bg-clip-text bg-color_linear_for_h2 792px:text-p2">
              Our Services
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
            <Image
              width={100}
              height={100}
              priority={true}
              src="/BeB-Pattern Set/BeB-Pattern Set/Pattern/arrow-img.png"
              className=" w-28 absolute -left-24 top-1/2 1004px:w-24 792px:w-20 456px:-left-6 330px:w-16 330px:top-1/3 330px:-left-4"
              alt="Arrow Image"
            />
            Fueling Digital Success with
            <br />
            Comprehensive Services
            {/* Start Your Digital Business
            <br />
            With Be Beyond! */}
          </motion.h3>
          <OurServices1Cards />
          <Link href="https://bebeyond.digital/services" className=" overflow-hidden">
            <motion.button
              initial={{ y: "50%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
              }}
              viewport={{ once: true }}
              className=" bricolage_grotesque_head font-h5 text-h5 bg-color_blue px-7 py-4 text-white
            relative z-0 flex items-center justify-center overflow-hidden 1004px:text-p1 792px:text-p2 400px:px-3 400px:py-2
            
            before:absolute before:inset-0
            before:-z-10 before:translate-x-[150%]
            before:translate-y-[150%] before:scale-[2.5]
            before:rounded-[100%] before:bg-color_orange
            before:transition-transform before:duration-700
            hover:before:translate-x-[0%]
            hover:before:translate-y-[0%]
            active:scale-75
            active:transition-all 
            active:duration-700 
            "
            >
              Explore All Services
            </motion.button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default OurServices1;
