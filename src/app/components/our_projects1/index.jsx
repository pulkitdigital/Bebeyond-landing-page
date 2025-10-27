"use client";
import React from "react";
import "./style.css";
import OurProjects1Cards from "./our_projects1_cards";
import Link from "next/link";
import { motion } from "framer-motion";
function OurProjects1() {
  return (
    <main className=" w-full flex items-center justify-center bg-color_creame relative">
      <div className="our-projects-1-container max-w-1600px w-full flex items-center justify-center relative">
        <div className="our-projects-1 w-88% flex items-center justify-center flex-col py-16 gap-16 456px:gap-7">
          <div className="top-div-of-our-projects-1 w-full flex items-center justify-between 456px:flex-col 456px:gap-5">
            <div className="left-div-of-top-div-of-our-projects-1 flex flex-col items-start justify-center gap-4 456px:gap-6 456px:w-full 456px:items-center 456px:hidden">
              <motion.div
                initial={{ x: "-50%", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                }}
                viewport={{ once: true }}
                className="h2-div-for-our-projects-1 text-center"
              >
                <span className="span-for-h2-div-for-our-projects-1"></span>
                <h2 className=" bricolage_grotesque_head text-p1 font-p1 text-transparent bg-clip-text bg-color_linear_for_h2 792px:text-p2">
                  Our Case Studies
                </h2>
              </motion.div>
              <motion.h3
                initial={{ x: "-50%", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                }}
                viewport={{ once: true }}
                className=" bricolage_grotesque_head text-h2 font-h2 leading-h2 1004px:leading-h3 1004px:text-h3 792px:text-h4 456px:text-center"
              >
                Some of Our Recent Work
                {/* Market-leading digital
                <br />
                expertise at your fingertips! */}
              </motion.h3>
            </div>
            <div className="left-div-of-top-div-of-our-projects-1 hidden flex-col items-start justify-center gap-4 456px:gap-6 456px:w-full 456px:items-center 456px:flex">
              <motion.div
                initial={{ y: "50%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                }}
                viewport={{ once: true }}
                className="h2-div-for-our-projects-1 text-center"
              >
                <span className="span-for-h2-div-for-our-projects-1"></span>
                <h2 className=" bricolage_grotesque_head text-p1 font-p1 text-transparent bg-clip-text bg-color_linear_for_h2 792px:text-p2">
                  Our Projects
                </h2>
              </motion.div>
              <motion.h3
                initial={{ y: "50%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                }}
                viewport={{ once: true }}
                className=" bricolage_grotesque_head text-h2 font-h2 leading-h2 1004px:leading-h3 1004px:text-h3 792px:text-h4 456px:text-center"
              >
                Explore our Portfolio and see
                <br />
                the Be Beyond difference in action.
                {/* Market-leading digital
                <br />
                expertise at your fingertips! */}
              </motion.h3>
            </div>
            <Link href="https://bebeyond.digital/services#all-projects" className=" 456px:hidden">
              <motion.button
                initial={{ x: "50%", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                }}
                viewport={{ once: true }}
                className=" bricolage_grotesque_head font-h5 text-h5 bg-color_blue px-7 py-4 text-white
                relative z-0 flex items-center justify-center overflow-hidden 
                1004px:text-p1 792px:text-p2
                before:absolute before:inset-0
                before:-z-10 before:translate-x-[150%]
                before:translate-y-[150%] before:scale-[2.5]
                before:rounded-[100%] before:bg-color_orange
                before:transition-transform before:duration-700
                hover:before:translate-x-[0%]
                hover:before:translate-y-[0%]
                active:scale-75
                active:transition-all 
                active:duration-700"
              >
                View All Projects
              </motion.button>
            </Link>
          </div>
          <OurProjects1Cards />
          <Link
            href="/services#all-projects"
            className=" hidden items-center justify-center 456px:flex"
          >
            <motion.button
              initial={{ y: "50%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
              }}
              viewport={{ once: true }}
              className=" bricolage_grotesque_head font-h5 text-h5 bg-color_blue px-7 py-4 text-white
              relative z-0 flex items-center justify-center overflow-hidden 
               1004px:text-p1 792px:text-p2 400px:px-3 400px:py-2
                before:absolute before:inset-0
                before:-z-10 before:translate-x-[150%]
                before:translate-y-[150%] before:scale-[2.5]
                before:rounded-[100%] before:bg-color_orange
                before:transition-transform before:duration-700
                hover:before:translate-x-[0%]
                hover:before:translate-y-[0%]
                active:scale-75
                active:transition-all 
                active:duration-700"
            >
              View All Projects
            </motion.button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default OurProjects1;
