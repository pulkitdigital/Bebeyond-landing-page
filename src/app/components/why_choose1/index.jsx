import React from "react";
import "./style.css";
import WhyChoose1Counter from "./why_choose1_counter";
import WhyChoose1Content from "./why_choose1_content";
import Image from "next/image";
import WhyChoose1BrandSlider from "./why_choose1_brand_swiper";
import { motion } from "framer-motion";

function WhyChoose1({ _p, _d, _mW_p, _mW_p2, _mW_p3, _mW_p4 }) {
  return (
    <main className=" w-full flex items-center justify-center relative overflow-hidden bg-color_navy">
      <div className="why-choose-1-container max-w-1600px w-full flex items-center justify-center relative">
        <Image
          width={500}
          height={100}
          priority={true}
          src="/BeB-Pattern Set/BeB-Pattern Set/Pattern/map-pattern-light.png"
          className=" absolute w-1/2 top-0 left-0"
          alt="Map Pattern Light Image"
        />
        <Image
          width={500}
          height={100}
          priority={true}
          src="/BeB-Pattern Set/BeB-Pattern Set/Pattern/map-pattern-light.png"
          className=" absolute w-1/2 top-0 right-0"
          alt="Map Pattern Light Image"
        />
        <Image
          width={500}
          height={100}
          priority={true}
          src="/BeB-Pattern Set/BeB-Pattern Set/Pattern/map-pattern-light.png"
          className=" absolute w-1/2 bottom-0 left-0"
          alt="Map Pattern Light Image"
        />

        <div className="why-choose-1 w-88% flex items-center justify-start flex-col pt-16">
          <div className="top-div-of-why-choose-1 w-full flex items-center justify-center flex-col gap-7">
            <motion.div
              initial={{ opacity: 0, y: "50%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
              }}
              viewport={{ once: true }}
              className="h2-div-for-why-choose-1 text-center"
            >
              <span className="span-for-h2-div-for-why-choose-1"></span>
              <h2 className=" bricolage_grotesque_head text-p1 font-p1 text-transparent bg-clip-text bg-color_linear_for_h2 792px:text-p2">
                Why Choose Us!
              </h2>
            </motion.div>
            <motion.h3
              initial={{ y: "50%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
              }}
              viewport={{ once: true }}
              className=" bricolage_grotesque_head text-h2 font-h2 text-center leading-h2 text-white 1004px:text-h3 792px:text-h4 792px:leading-h3 pb-4"
            >
              We Build Digital Experiences{" "}
              <br className=" block 444px:hidden" />
              That Add Real Value to Your Business
            </motion.h3>
          </div>
          <div className="bottom-div-of-why-choose-1 w-full flex items-center justify-center relative h-[400px] mt-28 1004px:mt-0 662px:flex-col 662px:h-auto">
            <div className="left-div-of-bottom-div-of-why-choose-1 w-48% flex items-center justify-center absolute left-0 bottom-0 662px:static 662px:w-full 662px:my-6">
              <WhyChoose1Counter />
            </div>
            <div className="right-div-of-bottom-div-of-why-choose-1 w-48% flex items-center justify-center absolute right-0 bottom-0 662px:w-full 662px:static">
              <WhyChoose1Content />
            </div>
          </div>
          <WhyChoose1BrandSlider
            _p={_p}
            _d={_d}
            _mW_p={_mW_p}
            _mW_p2={_mW_p2}
            _mW_p3={_mW_p3}
            _mW_p4={_mW_p4}
          />
        </div>
      </div>
    </main>
  );
}

export default WhyChoose1;
