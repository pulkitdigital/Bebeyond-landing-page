"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import React from "react";
import Typewriter from "typewriter-effect";
import "./style.css";
const AutoType = () => {
  const [typingStartCon, setTypingStartCon] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setTypingStartCon(true);
    }, 1000);
  }, []);
  return (
    <>
      <div className="flex items-center justify-center gap-3 text-7xl font-h1 1004px:text-6xl 792px:text-5xl 608px:text-4xl">
        <div className="constant-text text-color_blue flex items-center justify-center">
          <p>B</p>
          <motion.p
            initial={{ rotate: 0, x: 0 }}
            whileInView={{ rotate: -25, x: "-8%" }}
            transition={{
              duration: 0.25,
              delay: 0.65,
            }}
          >
            e
          </motion.p>
        </div>
        {typingStartCon && (
          <Typewriter
            options={{
              strings: ["Beyond", "Digital", "Dynamic"],
              autoStart: true,
              loop: true,
              delay: 70,
              pauseFor: 1600,
              cursor: "|",
              wrapperClassName: "typewriter-text text-color_orange",
              cursorClassName: "typewriter-cursor font-thin",
            }}
          />
        )}
      </div>
    </>
  );
};

export default AutoType;
