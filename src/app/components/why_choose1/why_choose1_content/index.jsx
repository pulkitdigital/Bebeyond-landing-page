"use client";
import React, { useState } from "react";
import "./style.css";
import { FaRegHandPointRight } from "react-icons/fa6";
import Image from "next/image";
import CountUp from "react-countup";
import { delay, motion } from "framer-motion";
function WhyChoose1Content() {
  const bottomDataContent = [
    {
      l1: "Custom UI/UX that strengthens your brand presence",
      l2: "Mobile-first responsive layouts with engaging visuals",
      l3: "Smooth user navigation for better on-site experience",
      l4: "Conversion-focused layouts with premium aesthetics",
      percName1: "User Experience Score",
      percVal1: 92,
      percName2: "Design Consistency",
      percVal2: 88,
    },
    {
      l1: "Scalable Shopify & WordPress builds optimized for performance",
      l2: "Secure backend, clean code, and reliable integrations",
      l3: "Payment gateways, CRM, and automation tools built-in",
      l4: "SEO-friendly, mobile-optimized architecture",
      percName1: "Website Load Speed",
      percVal1: 90,
      percName2: "Integration Success Rate",
      percVal2: 96,
    },
    {
      l1: "Speed & SEO improvements for higher visibility",
      l2: "Conversion tracking & audience analytics setup",
      l3: "Regular updates, backups, and performance tuning",
      l4: "Continuous data-driven growth improvements",
      percName1: "Conversion Boost",
      percVal1: 84,
      percName2: "Client Retention Rate",
      percVal2: 78,
    },
  ];
  const [startCount, setStartCount] = useState(true);
  const [counterVal, setCounterVal] = useState({
    counterVal1: 0,
    counterVal2: 0,
  });
  const [handleClickData, setHandleClickData] = useState({
    integrityTextColor: "bg-color_orange",
    integrityBgColor: "text-white",
    objectiveBgColor: "bg-white",
    objectiveTextColor: "text-black",
    excellenceBgColor: "bg-white",
    excellenceTextColor: "text-black",
  });
  const [bottomData, setBottomData] = useState([
    { _img: "/design_img.jpg", _display: "flex" },
    { _img: "/tech_app_img.jpg", _display: "hidden" },
    { _img: "/branding_img.jpg", _display: "hidden" },
  ]);
  function changeContentOnClick(param) {
    if (param === "INNOVATION") {
      setStartCount(false);
      setHandleClickData({
        integrityTextColor: "bg-color_orange",
        integrityBgColor: "text-white",
        objectiveBgColor: "bg-white",
        objectiveTextColor: "text-black",
        excellenceBgColor: "bg-white",
        excellenceTextColor: "text-black",
      });
      setBottomData([
        { _img: "/design_img.jpg", _display: "flex" },
        { _img: "/tech_app_img.jpg", _display: "hidden" },
        { _img: "/branding_img.jpg", _display: "hidden" },
      ]);
      setCounterVal({ counterVal1: 0, counterVal2: 0 });
      setStartCount(true);
    } else if (param === "COLLABORATION") {
      setStartCount(false);
      setHandleClickData({
        integrityBgColor: "bg-white",
        integrityTextColor: "text-black",
        objectiveBgColor: "bg-color_orange",
        objectiveTextColor: "text-white",
        excellenceBgColor: "bg-white",
        excellenceTextColor: "text-black",
      });

      setBottomData([
        { _img: "/design_img.jpg", _display: "hidden" },
        { _img: "/tech_app_img.jpg", _display: "flex" },
        { _img: "/branding_img.jpg", _display: "hidden" },
      ]);
      setCounterVal({ counterVal1: 1, counterVal2: 1 });
      setStartCount(true);
    } else if (param === "ADAPTABILITY") {
      setStartCount(false);
      setHandleClickData({
        integrityTextColor: "text-black",
        integrityBgColor: "bg-white",
        objectiveBgColor: "bg-white",
        objectiveTextColor: "text-black",
        excellenceBgColor: "bg-color_orange",
        excellenceTextColor: "text-white",
      });

      setBottomData([
        { _img: "/design_img.jpg", _display: "hidden" },
        { _img: "/tech_app_img.jpg", _display: "hidden" },
        { _img: "/branding_img.jpg", _display: "flex" },
      ]);
      setCounterVal({ counterVal1: 2, counterVal2: 2 });
      setStartCount(true);
    } else {
      return;
    }
  }
  return (
    <motion.div
      initial={{ y: "18%", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
        delay: 0,
      }}
      viewport={{ once: true }}
      className=" why-choose-1-content-container w-full  flex justify-center items-center bg-white py-7 pl-7 relative rounded-tl-3xl 1004px:py-4 1004px:pl-4 662px:rounded-tr-3xl 662px:pr-4"
    >
      <div className="div-for-full-width-bg-white-of-why-choose-1-content-container absolute bg-white w-screen h-full left-full 662px:hidden"></div>
      <div className="why-choose-1-content flex flex-col items-center justify-center w-full">
        <div className="top-div-of-why-choose-1-content flex items-end justify-between w-full border-b-2 border-color_orange 792px:border-b">
          <span
            className={`${
              handleClickData.integrityBgColor +
              " " +
              handleClickData.integrityTextColor
            } cursor-pointer text-p1 font-p1 public_sans_body w-1/3 text-center py-2 1004px:text-p2 792px:text-p3`}
            onClick={() => changeContentOnClick("INNOVATION")}
          >
            Design
          </span>
          <span
            className={`${
              handleClickData.objectiveBgColor +
              " " +
              handleClickData.objectiveTextColor
            } cursor-pointer text-p1 font-p1 public_sans_body w-1/3 text-center py-2 1004px:text-p2 792px:text-p3`}
            onClick={() => changeContentOnClick("COLLABORATION")}
          >
            Development
          </span>
          <span
            className={`${
              handleClickData.excellenceBgColor +
              " " +
              handleClickData.excellenceTextColor
            } cursor-pointer text-p1 font-p1 public_sans_body w-1/3 text-center py-2 1004px:text-p2 792px:text-p3`}
            onClick={() => changeContentOnClick("ADAPTABILITY")}
          >
            Optimization
          </span>
        </div>
        {bottomData &&
          bottomData.map((data, ind) => {
            return (
              <div
                key={ind}
                className={`bottom-div-of-why-choose-1-content w-full ${data._display} flex-col items-start justify-center gap-7 mt-4`}
              >
                <div className="content-div-of-bottom-div-of-why-choose-1-content w-full flex items-center justify-start 802px:items-start 792px:items-center">
                  <Image
                    width={250}
                    height={100}
                    priority={true}
                    alt="img"
                    className=" w-1/2 802px:w-48% 802px:h-32 792px:h-28"
                    src={data._img}
                  />
                  <ul className=" w-1/2 flex items-start justify-center flex-col pl-7 gap-4 font-p1 text-p1 public_sans_body text-color_gray 1004px:text-p2 802px:w-[52%] 802px:pl-2 792px:text-p3">
                    <li className=" flex items-center justify-start gap-2">
                      <span className=" text-h5 font-h5 text-color_orange 1004px:text-p1 792px:text-p2">
                        <FaRegHandPointRight />
                      </span>
                      <span className="leading-6">{bottomDataContent[ind].l1}</span>
                    </li>
                    <li className=" flex items-center justify-start gap-2">
                      <span className=" text-h5 font-h5 text-color_orange 1004px:text-p1 792px:text-p2">
                        <FaRegHandPointRight />
                      </span>
                      <span>{bottomDataContent[ind].l2}</span>
                    </li>
                    <li className=" flex items-center justify-start gap-2">
                      <span className=" text-h5 font-h5 text-color_orange 1004px:text-p1 792px:text-p2">
                        <FaRegHandPointRight />
                      </span>
                      <span>{bottomDataContent[ind].l3}</span>
                    </li>
                    <li className=" flex items-center justify-start gap-2">
                      <span className=" text-h5 font-h5 text-color_orange 1004px:text-p1 792px:text-p2">
                        <FaRegHandPointRight />
                      </span>
                      <span>{bottomDataContent[ind].l4}</span>
                    </li>
                  </ul>
                </div>
                <div className="line-graph-div-of-bottom-div-of-why-choose-1-content w-full flex flex-col items-start justify-center gap-7">
                  <span className=" w-[95%] text-h5 font-h5 bricolage_grotesque_head pb-4 relative 1004px:text-p1 1004px:pb-2 792px:text-p2 792px:pb-1">
                  {bottomDataContent[ind].percName1}{" "}
                    {startCount && (
                      <CountUp
                        start={counterVal.counterVal1}
                        end={bottomDataContent[ind].percVal1}
                        duration={2}
                        suffix="%"
                        separator=""
                      />
                    )}
                  </span>
                  <span className=" w-[85%] text-h5 font-h5 bricolage_grotesque_head pb-4 relative 1004px:text-p1 1004px:pb-2 792px:text-p2 792px:pb-1">
                  {bottomDataContent[ind].percName2}{" "}
                    {startCount && (
                      <CountUp
                        start={counterVal.counterVal2}
                        end={bottomDataContent[ind].percVal2}
                        duration={2}
                        suffix="%"
                        separator=""
                      />
                    )}
                  </span>
                </div>
              </div>
            );
          })}
      </div>
    </motion.div>
  );
}

export default WhyChoose1Content;
