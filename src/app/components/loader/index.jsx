"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
function Loader() {
  const [reRenderDiv, setReRenderDiv] = useState(true);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setReRenderDiv(false);
      setTimeout(() => {
        setReRenderDiv(true);
      }, 200);
    }, 1800);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className=" w-full flex items-center justify-center h-screen top-0 fixed z-[160] bg-white">
      <div className=" max-w-1600px w-full flex items-center justify-center ">
        <div className="w-88% flex items-center justify-center">
          {reRenderDiv && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{
                duration: 0.5,
                delay: 1.25,
              }}
              className="flex items-center justify-center flex-col bricolage_grotesque_head gap-2 overflow-hidden"
            >
              <div className="flex items-center justify-center gap-4 text-[72px] font-h1 leading-none overflow-hidden 1004px:text-[63px]  792px:text-[54px] 608px:text-[45px]">
                <motion.div
                  className=" text-color_orange"
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0,
                  }}
                >
                  Be
                </motion.div>
                <motion.div
                  className=" flex items-center justify-center text-color_blue"
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0,
                  }}
                >
                  <p>B</p>
                  <motion.p
                    initial={{ rotate: 0, x: 0 }}
                    animate={{ rotate: -18, x: "-7%" }}
                    transition={{
                      duration: 0.25,
                      delay: 0.5,
                    }}
                  >
                    e
                  </motion.p>
                  <p>yond</p>
                </motion.div>
              </div>
              <div className="text-[36px] font-h2 leading-none overflow-hidden 1004px:text-[27px] 792px:text-[18px]">
                <motion.p
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.25,
                    delay: 0.75,
                  }}
                >
                  Digital Solutions
                </motion.p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Loader;
