// "use client";
// import React, { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";
// import { testimonials2 } from "../../../data/Testimonials";
// import Image from "next/image";
// import "./style.css";
// import "swiper/css";
// import "swiper/css/pagination";
// import { motion } from "framer-motion";
// import { PiQuotesFill } from "react-icons/pi";
// function ClientsTestimonials1Cards() {
//   const [slideData, setSlideData] = useState(null);
//   useEffect(() => {
//     setSlideData(testimonials2);
//   }, []);
//   return (
//     <motion.div
//       initial={{ y: "18%", opacity: 0 }}
//       whileInView={{ y: 0, opacity: 1 }}
//       transition={{
//         duration: 0.5,
//       }}
//       viewport={{ once: true }}
//       className=" testimonial-swiper-container"
//     >
//       <Swiper
//         modules={[Pagination]}
//         loop={true}
//         slidesPerView={1}
//         pagination={{ clickable: true }}
//         spaceBetween={25}
//       >
//         {slideData &&
//           slideData.map((data, ind) => {
//             return (
//               <SwiperSlide key={ind}>
//                 <span className="bricolage_grotesque_head text-center font-h2 text-h1 leading-none 1004px:text-h2 792px:text-h3">
//                 <PiQuotesFill />
//                 </span>
//                 <p className="public_sans_body text-center text-p1 font-p1 text-color_gray_dark 1004px:text-p2 792px:text-p3 662px:text-justify">
//                   {data._p}
//                 </p>
//                 <Image
//                   width={100}
//                   height={100}
//                   priority={true}
//                   alt="dp"
//                   className=" w-20 h-20 rounded-50% 792px:w-16 792px:h-16"
//                   src={data._dp}
//                 />
//                 <h5 className="bricolage_grotesque_head text-center text-h5 font-h5 leading-none 1004px:text-p1 792px:text-p2">
//                   {data._name}
//                 </h5>
//                 {/* <span className="public_sans_body text-center text-p1 font-p1 text-color_gray leading-none 1004px:text-p2 792px:text-p3">
//                   {data._role}
//                 </span> */}
//               </SwiperSlide>
//             );
//           })}
//       </Swiper>
//     </motion.div>
//   );
// }

// export default ClientsTestimonials1Cards;
