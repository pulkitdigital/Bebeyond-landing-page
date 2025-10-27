// import React from "react";
// import "./style.css";
// import Image from "next/image";
// // import ClientsTestimonials1Cards from "./clients_testimonials1_cards";
// import { motion } from "framer-motion";
// function ClientsTestimonials1() {
//   return (
//     <main className=" w-full flex items-center justify-center relative">
//       <div className="clients-testimonials-1-container max-w-1600px w-full flex items-center justify-center relative">
//         <Image
//           width={100}
//           height={100}
//           priority={true}
//           src="/BeB-Pattern Set/BeB-Pattern Set/Pattern/map-pattern.png"
//           className=" absolute w-1/2 left-0 top-0"
//           alt="Map Pattern Image"
//         />
//         <Image
//           width={100}
//           height={100}
//           priority={true}
//           src="/BeB-Pattern Set/BeB-Pattern Set/Pattern/map-pattern.png"
//           className=" absolute w-1/2 right-0 top-0"
//           alt="Map Pattern Image"
//         />
//         <Image
//           width={100}
//           height={100}
//           priority={true}
//           src="/BeB-Pattern Set/BeB-Pattern Set/Pattern/map-pattern.png"
//           className=" absolute w-1/2 bottom-0 left-0"
//           alt="Map Pattern Image"
//         />
//         <Image
//           width={100}
//           height={100}
//           priority={true}
//           src="/BeB-Pattern Set/BeB-Pattern Set/Pattern/map-pattern.png"
//           className=" absolute w-1/2 bottom-0 right-0"
//           alt="Map Pattern Image"
//         />

//         <div className="clients-testimonials-1 w-88% flex items-center justify-start flex-col py-16 gap-7">
//           <div className="top-div-of-clients-testimonials-1 w-full flex items-center justify-center flex-col gap-7">
//             <motion.div
//               initial={{ opacity: 0, y: "50%" }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.5,
//               }}
//               viewport={{ once: true }}
//               className="h2-div-for-clients-testimonials-1 text-center"
//             >
//               <span className="span-for-h2-div-for-clients-testimonials-1"></span>
//               <h2 className=" bricolage_grotesque_head text-p1 font-p1 text-transparent bg-clip-text bg-color_linear_for_h2 792px:text-p2">
//                 Clients Testimonial
//               </h2>
//             </motion.div>
//             <motion.h3
//               initial={{ y: "50%", opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               transition={{
//                 duration: 0.5,
//               }}
//               viewport={{ once: true }}
//               className=" bricolage_grotesque_head text-h2 font-h2 text-center leading-h2 1004px:text-h3 1004px:leading-h3 792px:text-h4"
//             >
//               What Our Customers Tell About <br className=" 400px:hidden" />
//               Our Service!{" "}
//             </motion.h3>
//           </div>
//           <div className="bottom-div-of-clients-testimonials-1 w-full flex items-center justify-between 400px:relative ">
//             <Image
//               width={100}
//               height={100}
//               priority={true}
//               src="/BeB-Pattern Set/BeB-Pattern Set/Pattern/map-pattern.png"
//               className=" absolute w-3/4 left-0 -top-[25%] hidden 400px:block"
//               alt="Map Pattern Image"
//             />
//             <Image
//               width={100}
//               height={100}
//               priority={true}
//               src="/BeB-Pattern Set/BeB-Pattern Set/Pattern/map-pattern.png"
//               className=" absolute w-3/4 right-0 -top-[25%] hidden 400px:block"
//               alt="Map Pattern Image"
//             />
//             <Image
//               width={100}
//               height={100}
//               priority={true}
//               src="/BeB-Pattern Set/BeB-Pattern Set/Pattern/map-pattern.png"
//               className=" absolute w-3/4 hidden 400px:block"
//               alt="Map Pattern Image"
//             />
//             <Image
//               width={100}
//               height={100}
//               priority={true}
//               src="/BeB-Pattern Set/BeB-Pattern Set/Pattern/map-pattern.png"
//               className=" absolute w-3/4 -bottom-[25%] left-0 hidden 400px:block"
//               alt="Map Pattern Image"
//             />
//             <Image
//               width={100}
//               height={100}
//               priority={true}
//               src="/BeB-Pattern Set/BeB-Pattern Set/Pattern/map-pattern.png"
//               className=" absolute w-3/4 -bottom-[25%] right-0 hidden 400px:block"
//               alt="Map Pattern Image"
//             />
//             <motion.div
//               initial={{ x: "-18%", opacity: 0 }}
//               whileInView={{ x: 0, opacity: 1 }}
//               transition={{
//                 duration: 0.5,
//               }}
//               viewport={{ once: true }}
//               className="left-div-of-bottom-div-of-clients-testimonials-1 flex items-center justify-center relative w-1/4 h-500px 792px:w-[27%] 792px:h-[400px] 400px:hidden"
//             >
//               <Image
//                 width={100}
//                 height={100}
//                 priority={true}
//                 alt="Img"
//                 src="/testimonial_img_1.jpg"
//                 className=" h-71% w-48%  absolute left-0 rounded-top-left-50"
//               />
//               <Image
//                 width={100}
//                 height={100}
//                 priority={true}
//                 alt="Img"
//                 src="/testimonial_img_2.jpg"
//                 className=" h-25% w-48% absolute right-0 top-0 rounded-top-right-50"
//               />
//               <Image
//                 width={100}
//                 height={100}
//                 priority={true}
//                 alt="Img"
//                 src="/testimonial_img_3.jpg"
//                 className=" h-71% w-48% absolute right-0 bottom-0"
//               />
//             </motion.div>
//             <ClientsTestimonials1Cards />
//             <motion.div
//               initial={{ x: "18%", opacity: 0 }}
//               whileInView={{ x: 0, opacity: 1 }}
//               transition={{
//                 duration: 0.5,
//               }}
//               viewport={{ once: true }}
//               className="right-div-of-bottom-div-of-clients-testimonials-1 flex items-center justify-center relative w-1/4 h-500px 792px:w-[27%] 792px:h-[400px] 400px:hidden"
//             >
//               <Image
//                 width={100}
//                 height={100}
//                 priority={true}
//                 alt="Img"
//                 src="/testimonial_img_1.jpg"
//                 className=" h-71% w-48%  absolute left-0 top-0"
//               />
//               <Image
//                 width={100}
//                 height={100}
//                 priority={true}
//                 alt="Img"
//                 src="/testimonial_img_2.jpg"
//                 className=" h-25%  w-48% absolute left-0 bottom-0 rounded-bottom-left-50"
//               />
//               <Image
//                 width={100}
//                 height={100}
//                 priority={true}
//                 alt="Img"
//                 src="/testimonial_img_3.jpg"
//                 className=" h-71% w-48% absolute right-0 rounded-top-right-50"
//               />
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

// export default ClientsTestimonials1;


"use client";
import React from "react";
import "./style.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { LuTrendingUp, LuSparkles, LuBarChart3 } from "react-icons/lu";
import { PiQuotesFill } from "react-icons/pi";
import { testimonials2 } from "./../../data/Testimonials";

const CYAN = "#219EBC";
const CYAN_TINT = "#E6F5FA";
const ORANGE = "#FB8500";
const ORANGE_TINT = "#FFF3E5";

const StatCard = ({ value, label, tone = "cyan", IconCmp }) => {
  const isCyan = tone === "cyan";
  const bg = isCyan ? CYAN_TINT : ORANGE_TINT;
  const stroke = isCyan ? CYAN : ORANGE;

  return (
    <div
      className="rounded-2xl border flex flex-col justify-between h-full p-5 md:p-6"
      style={{ backgroundColor: bg, borderColor: `${stroke}22` }}
    >
      <div>
        <h4 className="bricolage_grotesque_head text-h2 font-h2 leading-none" style={{ color: "#0F172A" }}>
          {value}
        </h4>
        <p className="public_sans_body text-p2 font-p2 mt-1" style={{ color: "#475569" }}>
          {label}
        </p>
      </div>
      <div className="mt-6 inline-flex items-center">
        <span
          className="inline-flex items-center justify-center rounded-2xl"
          style={{
            width: 40, height: 40,
            background: isCyan ? `${CYAN}12` : `${ORANGE}12`,
            border: `1px solid ${isCyan ? CYAN : ORANGE}33`,
            color: isCyan ? CYAN : ORANGE,
          }}
        >
          {IconCmp ? <IconCmp size={32} /> : <LuTrendingUp size={32} />}
        </span>
      </div>
    </div>
  );
};

const QuoteCard = ({ quote, author, role, avatar }) => (
  <div className="rounded-2xl border p-5 md:p-6 bg-white h-full" style={{ borderColor: "#E5E7EB" }}>
    <span className="inline-flex text-h4" style={{ color: "#94A3B8" }}>
      <PiQuotesFill />
    </span>
    <p className="public_sans_body text-p1 font-p1 mt-2" style={{ color: "#334155" }}>
      {quote}
    </p>
    <div className="mt-5 flex items-center gap-3">
      <Image src={avatar} alt={author} width={48} height={48} className="w-12 h-12 rounded-50% object-cover" />
      <div className="min-w-0">
        <h6 className="bricolage_grotesque_head text-p1 font-p1 leading-none">{author}</h6>
        {role ? (
          <p className="public_sans_body text-p3 font-p3 mt-1 truncate" style={{ color: "#64748B" }}>
            {role}
          </p>
        ) : null}
      </div>
    </div>
  </div>
);

// Desktop placement map (12-col grid)
// 1: stat 2X (cols 1-3) | 2: stat 5X (cols 4-6) | 3: quote (cols 7-12)
// 4: quote (cols 1-6)   | 5: quote (cols 7-12)
// 6: stat 5X (cols 1-3) | 7: quote (cols 4-9)  | 8: stat 3X (cols 10-12)
const layoutLg = [
  "lg:col-span-3 lg:col-start-1",
  "lg:col-span-3 lg:col-start-4",
  "lg:col-span-6 lg:col-start-7",
  "lg:col-span-6 lg:col-start-1",
  "lg:col-span-6 lg:col-start-7",
  "lg:col-span-3 lg:col-start-1",
  "lg:col-span-6 lg:col-start-4",
  "lg:col-span-3 lg:col-start-10",
];

function ClientsTestimonials1() {
  return (
    <main className="w-full flex items-center justify-center relative overflow-hidden">
      <div className="clients-testimonials-1-container max-w-1600px w-full flex items-center justify-center relative">
        {/* BG maps remain if you use them elsewhere; omitted here for a cleaner, tight layout */}

        <div className="clients-testimonials-1 w-88% flex flex-col items-center py-14 gap-5 relative z-10">
          {/* TOP (unchanged) */}
          <div className="top-div-of-clients-testimonials-1 w-full flex flex-col items-center justify-center gap-5">
            <motion.div
              initial={{ opacity: 0, y: "50%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="h2-div-for-clients-testimonials-1 text-center"
            >
              <span className="span-for-h2-div-for-clients-testimonials-1"></span>
              <h2 className="bricolage_grotesque_head text-p1 font-p1 text-transparent bg-clip-text bg-color_linear_for_h2 792px:text-p2">
                Clients Testimonial
              </h2>
            </motion.div>
            <motion.h3
              initial={{ y: "50%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bricolage_grotesque_head text-h2 font-h2 text-center leading-h2 1004px:text-h3 792px:text-h4"
            >
              What Our Customers Tell About <br className="400px:hidden" />
              Our Service!
            </motion.h3>
          </div>

          {/* GRID: 1 col (mobile), 2 col (md), 12-col custom (lg) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            viewport={{ once: true }}
            className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-[10px] md:gap-[14px] lg:gap-4"
          >
            {testimonials2.map((item, idx) => {
              const IconCmp =
                item.icon === "sparkles" ? LuSparkles :
                item.icon === "bars"     ? LuBarChart3 :
                                            LuTrendingUp;

              const lgPos = layoutLg[idx] || "lg:col-span-4"; // safe default

              if (item.type === "stat") {
                return (
                  <div key={idx} className={` ${lgPos}`}>
                    <StatCard value={item.value} label={item.label} tone={item.tone} IconCmp={IconCmp} />
                  </div>
                );
              }
              return (
                <div key={idx} className={` ${lgPos}`}>
                  <QuoteCard quote={item._p} author={item._name} role={item._role} avatar={item._dp} />
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </main>
  );
}

export default ClientsTestimonials1;
