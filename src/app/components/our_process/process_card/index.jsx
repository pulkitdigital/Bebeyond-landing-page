import { ourProcess1 } from "@/app/data/OurProcess";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProcessCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: "18%" }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
      }}
      viewport={{ once: true }}
      className="our-process-1-cards-container w-full flex items-start justify-between relative"
    >
      {ourProcess1 &&
        ourProcess1.map((data, ind) => {
          return (
            <div
              key={ind}
              className={`group w-1/5 relative flex items-start justify-center px-2 pb-2  596px:w-[24%] 596px:px-1 426px:hidden`}
            >
              <div className=" relative w-full h-full">
                <div
                  className={` relative w-full h-full flex items-center justify-start flex-col gap-2`}
                >
                  <div className="  flex items-center justify-center flex-col w-full gap-8 500px:gap-4">
                    <div
                      className={`group-hover:bg-color_orange_light transition-all duration-500 ease-in-out  h-[140px] w-[140px] flex items-center justify-center bg-color_blue_light ${
                        data._h4 === "Steps for Success" ? "p-6" : "p-4"
                      }  ${
                        data._radius
                      } 1004px:h-[100px] 1004px:w-[100px] 792px:h-[80px] 792px:w-[80px]  ${
                        data._h4 === "Steps for Success"
                          ? "792px:p-4"
                          : "792px:p-3"
                      } `}
                    >
                      <Image
                        width={100}
                        height={100}
                        src={data._icon}
                        priority={true}
                        alt="icon"
                        className=" w-full h-full"
                      />
                    </div>
                    <h4 className=" w-full text-color_blue text-h4 font-h4 leading-h3 bricolage_grotesque_head text-center 1004px:text-h5 1004px:leading-h5 792px:text-p1">
                      {data._h4}
                    </h4>
                  </div>
                  <div className=" flex items-center justify-center flex-col w-full">
                    {" "}
                    <p className="w-full text-center text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3 leading-5">
                      {data._p}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      <div className=" w-[49%] hidden 426px:flex items-center justify-center flex-col gap-16">
        {ourProcess1 &&
          ourProcess1.map((data, ind) => {
            return ind % 2 === 0 || ind === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: "18%" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                }}
                viewport={{ once: true }}
                key={ind}
                className={`group relative flex items-start justify-center px-2 pb-2 w-full `}
              >
                <div className=" relative w-full h-full">
                  <div
                    className={` relative w-full h-full flex items-center justify-start flex-col gap-2`}
                  >
                    <div className="  flex items-center justify-center flex-col w-full gap-4">
                      <div
                        className={`group-hover:bg-color_orange_light transition-all duration-500 ease-in-out flex items-center justify-center bg-color_blue_light ${
                          data._radius
                        } h-[80px] w-[80px] ${
                          data._h4 === "Steps for Success" ? "p-4" : "p-3"
                        } `}
                      >
                        <Image
                          width={100}
                          height={100}
                          src={data._icon}
                          priority={true}
                          alt="icon"
                          className=" w-full h-full"
                        />
                      </div>
                      <h4 className=" w-full text-color_blue font-h4 bricolage_grotesque_head text-center leading-h5 text-p1">
                        {data._h4}
                      </h4>
                    </div>
                    <div className=" flex items-center justify-center flex-col w-full">
                      {" "}
                      <p className="w-full text-center font-p1 text-color_gray public_sans_body text-p3">
                        {data._p}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              ""
            );
          })}
      </div>
      <div className=" w-[49%] hidden 426px:flex items-center justify-center flex-col gap-16 mt-32">
        {ourProcess1 &&
          ourProcess1.map((data, ind) => {
            return ind % 2 !== 0 ? (
              <motion.div
                initial={{ opacity: 0, y: "18%" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                }}
                viewport={{ once: true }}
                key={ind}
                className={`group relative flex items-start justify-center px-2 pb-2 w-full `}
              >
                <div className=" relative w-full h-full">
                  <div
                    className={` relative w-full h-full flex items-center justify-start flex-col gap-2`}
                  >
                    <div className="  flex items-center justify-center flex-col w-full gap-4">
                      <div
                        className={`group-hover:bg-color_orange_light transition-all duration-500 ease-in-out flex items-center justify-center bg-color_blue_light ${
                          data._radius
                        } h-[80px] w-[80px] ${
                          data._h4 === "Steps for Success" ? "p-4" : "p-3"
                        } `}
                      >
                        <Image
                          width={100}
                          height={100}
                          src={data._icon}
                          priority={true}
                          alt="icon"
                          className=" w-full h-full"
                        />
                      </div>
                      <h4 className=" w-full text-color_blue font-h4 bricolage_grotesque_head text-center leading-h5 text-p1">
                        {data._h4}
                      </h4>
                    </div>
                    <div className=" flex items-center justify-center flex-col w-full">
                      {" "}
                      <p className="w-full text-center font-p1 text-color_gray public_sans_body text-p3">
                        {data._p}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              ""
            );
          })}
      </div>
    </motion.div>
  );
}
