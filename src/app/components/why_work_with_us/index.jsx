"use client";
import React from "react";
import "./style.css";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
function WhyWorkWithUs1() {
  return (
    <main className="main-of-why-work-with-us-1 w-full flex items-center justify-center relative">
      <div className="div-for-bg-light-black-of-main-of-why-work-with-us-1 absolute w-full h-full"></div>
      <div className="why-work-with-us-1-container max-w-1600px w-full flex items-center justify-center relative">
        <div className="why-work-with-us-1 w-88% flex items-center justify-center flex-col h-500px gap-4 relative 792px:h-[430px] 662px:h-[450px] 662px:gap-0 466px:h-[500px] 404px:h-[580px] 306px:justify-end">
          <motion.div
            initial={{ x: "-18%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
            }}
            viewport={{ once: true }}
            className="professional-agency-div-of-why-work-with-us-1 absolute left-0 w-48% bg-color_orange flex items-center justify-center p-6 -top-20 gap-4 rounded-sm  z-0  1004px:p-4 1004px:-top-16 792px:-top-12 662px:p-2 662px:-top-14 596px:flex-col 596px:gap-2 556px:-top-16 538px:-top-24"
          >
            <div className="left-div-of-professional-agency-div-of-why-work-with-us-1 w-40 h-20 flex items-center justify-center bg-white rounded-lg 1004px:w-32 1004px:h-14 596px:w-1/4 400px:w-1/2 400px:py-1">
              <Image
                width={100}
                height={100}
                priority={true}
                className=" h-full w-auto"
                src="/BeB_Icon Set/BeB_Icon Set/Set/Target.svg"
                alt="Unique Method Icon"
              />
            </div>
            <div className="right-div-of-professional-agency-div-of-why-work-with-us-1 596px:flex 596px:items-center 596px:justify-center 596px:flex-col 596px:w-full ">
              <h5 className=" text-white text-h4 font-h4 bricolage_grotesque_head 1004px:text-h5new 792px:text-h5 596px:w-full 596px:text-center">
                Professional <br className=" hidden 466px:block 380px:hidden" />
                Agency
              </h5>
              <p className=" public_sans_body font-p1 text-p1 text-white 1004px:text-p2 792px:text-p3 596px:w-full 596px:text-justify">
              Certified experts in Shopify and WordPress creating visually stunning, high-performance websites that elevate your brand identity and deliver measurable digital growth.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: "18%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
            }}
            viewport={{ once: true }}
            className="unique-methods-div-of-why-work-with-us-1 absolute right-0 w-48% bg-color_blue flex items-center justify-center p-6 -top-20 gap-4 rounded-sm  z-0  1004px:p-4 1004px:-top-16 792px:-top-12 662px:p-2 662px:-top-14 596px:flex-col 596px:gap-2 556px:-top-16 538px:-top-24"
          >
            <div className="left-div-of-unique-methods-div-of-why-work-with-us-1 w-40 h-20 flex items-center justify-center bg-white rounded-lg 1004px:w-32 1004px:h-14 596px:w-1/4 400px:w-1/2 400px:py-1">
              <Image
                width={100}
                height={100}
                priority={true}
                className=" h-full w-auto"
                src="/BeB_Icon Set/BeB_Icon Set/Set/Target.svg"
                alt="Unique Method Icon"
              />
            </div>
            <div className="right-div-of-unique-methods-div-of-why-work-with-us-1 596px:flex 596px:items-center 596px:justify-center 596px:flex-col 596px:w-full">
              <h5 className=" text-white text-h4 font-h4 bricolage_grotesque_head 1004px:text-h5new 792px:text-h5 596px:w-full 596px:text-center">
                Proven  <br className=" hidden 466px:block 380px:hidden" />
                Process
              </h5>
              <p className=" public_sans_body font-p1 text-p1 text-white 1004px:text-p2 792px:text-p3 596px:w-full 596px:text-justify">
              From concept to launch, every project is executed with precision, creativity, and strategy ensuring your website performs, scales, and converts effectively.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: "50%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
            }}
            viewport={{ once: true }}
            className="h2-div-for-why-work-with-us-1 text-center mb-2"
          >
            <span className="span-for-h2-div-for-why-work-with-us-1"></span>
            <h2 className=" bricolage_grotesque_head text-p1 font-p1 text-transparent bg-clip-text bg-color_linear_for_h2 792px:text-p2">
              Work With Us!
            </h2>
          </motion.div>
          <motion.h3
            initial={{ y: "50%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
            }}
            viewport={{ once: true }}
            className=" text-white bricolage_grotesque_head text-h2 font-h2 text-center leading-h2 relative 1004px:leading-h3 1004px:text-h3 792px:text-h4"
          >
            BeBeyond Is Ready to Elevate 
            <br />
            Your Business Online
          </motion.h3>
          <motion.p
            initial={{ y: "50%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
            }}
            viewport={{ once: true }}
            className=" text-p1 font-p1 text-gray-300 text-center public_sans_body 1004px:text-p2 792px:text-p3 662px:mt-2"
          >
            We help brands build powerful digital foundations through stunning, performance-driven websites designed to <br/> enhance credibility, attract customers, and accelerate long-term growth.
          </motion.p>
          <motion.div
            initial={{ y: "50%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
            }}
            viewport={{ once: true }}
            className="button-div-for-why-work-with-us-1 mt-7 flex items-center justify-center gap-4 662px:mt-4 306px:mb-[95px]"
          >
            <Link href="https://bebeyond.digital/contact">
              <button
                className=" bricolage_grotesque_head font-h5 text-h5 bg-color_orange px-7 py-4 text-white
              relative z-0 flex items-center justify-center overflow-hidden 1004px:text-p1 792px:text-p2 400px:px-3 400px:py-2
       transition-all duration-700
       before:absolute before:inset-0
       before:-z-10 before:translate-x-[150%]
       before:translate-y-[150%] before:scale-[2.5]
       before:rounded-[100%] before:bg-color_white_light
       before:transition-transform before:duration-700
       hover:before:translate-x-[0%]
       hover:before:translate-y-[0%]
       active:scale-75
       "
              >
                Get In Touch
              </button>
            </Link>
            <Link href="https://bebeyond.digital/services">
              <button
                className=" bricolage_grotesque_head font-h5 text-h5 bg-color_blue px-7 py-4 text-white
              relative z-0 flex items-center justify-center overflow-hidden 1004px:text-p1 792px:text-p2 400px:px-3 400px:py-2
              transition-all duration-700
              before:absolute before:inset-0
              before:-z-10 before:translate-x-[150%]
              before:translate-y-[150%] before:scale-[2.5]
              before:rounded-[100%] before:bg-color_white_light
              before:transition-transform before:duration-700
              hover:before:translate-x-[0%]
              hover:before:translate-y-[0%]
              active:scale-75
              "
              >
                View Our Work
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

export default WhyWorkWithUs1;
