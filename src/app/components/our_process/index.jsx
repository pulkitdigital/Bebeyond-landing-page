import React from "react";
import "./style.css";
import { motion } from "framer-motion";
import ProcessCard from "./process_card";
function OurProcess() {
  return (
    <main className=" w-full flex items-center justify-center relative">
      <div className="our-process-1-container max-w-1600px w-full flex items-center justify-center relative">
        <div className="our-process-1 w-88% flex items-center justify-center flex-col py-16 gap-7">
          <motion.div
            initial={{ opacity: 0, y: "50%" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
            }}
            viewport={{ once: true }}
            className="h2-div-for-our-process-1 text-center"
          >
            <span className="span-for-h2-div-for-our-process-1"></span>
            <h2 className=" bricolage_grotesque_head text-p1 font-p1 text-transparent bg-clip-text bg-color_linear_for_h2 792px:text-p2">
              Our Process
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
          >A Simple Process. Powerful Results.</motion.h3>
          {/* <motion.p
            initial={{ y: "50%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
            }}
            viewport={{ once: true }}
            className=" public_sans_body w-full text-center font-p1 text-p1 text-color_gray 1004px:text-p2 792px:text-p3"
          >
            We collaborate closely with you to achieve your unique digital goals. Here's how
          </motion.p> */}
          <ProcessCard />
        </div>
      </div>
    </main>
  );
}

export default OurProcess;
