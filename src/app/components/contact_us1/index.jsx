// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import { LuMail, LuPhone, LuSend, LuMapPin } from "react-icons/lu";



// export default function ContactUs() {
//     const CYAN = "#219EBC";
//     const ORANGE = "#FB8500";

//     return (
//         <main className="w-full flex items-center justify-center relative overflow-hidden">
//             <div className="clients-testimonials-1-container max-w-1600px w-full flex items-center justify-center relative">
//                 <div className="clients-testimonials-1 w-88% flex flex-col items-center py-14 gap-5 relative z-10">
//                     {/* TOP (keep your styling) */}
//                     <div className="top-div-of-clients-testimonials-1 w-full flex flex-col items-center justify-center gap-1">
//                         <motion.div
//                             initial={{ opacity: 0, y: "50%" }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.5 }}
//                             viewport={{ once: true }}
//                             className="h2-div-for-clients-testimonials-1 text-center mb-4"
//                         >
//                             <span className="span-for-h2-div-for-clients-testimonials-1"></span>
//                             <h2 className="bricolage_grotesque_head text-p1 font-p1 text-transparent bg-clip-text bg-color_linear_for_h2 792px:text-p2">
//                                 ContactUs
//                             </h2>
//                         </motion.div>
//                         {/* <motion.h3
//                             initial={{ y: "50%", opacity: 0 }}
//                             whileInView={{ y: 0, opacity: 1 }}
//                             transition={{ duration: 0.5 }}
//                             viewport={{ once: true }}
//                             className="bricolage_grotesque_head text-h2 font-h2 text-center leading-h2 1004px:text-h3 792px:text-h4 leading-4"
//                         >
//                             Website Packages That Fit Your Stage
//                         </motion.h3>
//                         <motion.h3
//                             initial={{ y: "50%", opacity: 0 }}
//                             whileInView={{ y: 0, opacity: 1 }}
//                             transition={{ duration: 0.5 }}
//                             viewport={{ once: true }}
//                             className="public_sans_body text-p1 font-p1 text-color_gray max-w-3xl 1004px:text-p2 792px:text-p3 text-center"
//                         >
//                             Transparent ContactUs with everything you need to launch fast and grow
//                             confidently.
//                         </motion.h3> */}
//                     </div>

//                     <div className="w-88% grid grid-cols-1 lg:grid-cols-2 gap-8 py-4">

//                         {/* LEFT: Heading + quick actions */}
//                         <div className="flex flex-col gap-6">
//                             <motion.h3
//                                 initial={{ y: "50%", opacity: 0 }}
//                                 whileInView={{ y: 0, opacity: 1 }}
//                                 transition={{ duration: 0.5 }}
//                                 viewport={{ once: true }}
//                                 className="bricolage_grotesque_head text-h2 font-h2 leading-h2 1004px:text-h3 1004px:leading-h3 792px:text-h4"
//                             >
//                                 Get Started with <br className="400px:hidden" /> BeBeyond
//                             </motion.h3>

//                             <p className="public_sans_body text-p1 font-p1 text-color_gray 1004px:text-p2 792px:text-p3">
//                                 Let’s turn your vision into a high-performing digital experience.
//                             </p>

//                             {/* Address row */}
//                             {/* Address row */}
//                             <div className="flex items-start gap-3 bg-[#F3F3F3] rounded-xl px-3 py-3 border border-[#E5E7EB]">
//                                 <span
//                                     className="inline-flex h-9 w-9 items-center justify-center rounded-lg"
//                                     style={{ background: `${CYAN}15`, color: CYAN }}
//                                 >
//                                     <LuMapPin size={18} />
//                                 </span>

//                                 <div className="public_sans_body text-p2 font-p2 text-[#111827] flex-1 leading-relaxed">
//                                     Chamber 6, 4th Floor, Sangam Place <br />
//                                     (Opposite K K Sales), Civil Lines, <br />
//                                     Prayagraj, Uttar Pradesh – 211001
//                                 </div>

//                                 <Link
//                                     href="https://maps.app.goo.gl/wdp75hHVMYMdVipt7"
//                                     target="_blank"
//                                     className="shrink-0 self-center"
//                                 >
//                                     <button
//                                         className="bricolage_grotesque_head font-h5 text-p2 bg-black px-3 py-1 text-white relative z-0 flex items-center justify-center overflow-hidden 1004px:text-p1 792px:text-p2 400px:px-3 400px:py-2 
//       transition-all duration-700 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%]
//       before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-color_white_light
//       before:transition-transform before:duration-700 hover:before:translate-x-[0%] hover:before:translate-y-[0%]
//       active:scale-75"
//                                     >
//                                         View Map
//                                     </button>
//                                 </Link>
//                             </div>



//                             {/* Email row */}
//                             <div className="flex items-center gap-3 bg-[#F3F3F3] rounded-xl px-3 py-3 border border-[#E5E7EB]">
//                                 <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg"
//                                     style={{ background: `${CYAN}15`, color: CYAN }}
//                                 >
//                                     <LuMail size={18} />
//                                 </span>
//                                 <span className="public_sans_body text-p2 font-p2 text-[#111827] flex-1 truncate">
//                                     info@bebeyond.digital
//                                 </span>
//                                 <Link href="mailto:info@bebeyond.digital" className="shrink-0">
//                                     <button className="w-full bricolage_grotesque_head font-h5 text-p2 bg-black px-3 py-1 text-white relative z-0 flex items-center justify-center overflow-hidden 1004px:text-p1 792px:text-p1 400px:px-3 400px:py-1 
//                                     transition-all duration-700 before:absolute before:inset-0 before:-z-10  before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5]  before:rounded-[100%] before:bg-color_white_light before:transition-transform before:duration-700 hover:before:translate-x-[0%] hover:before:translate-y-[0%] 
//                                     active:scale-75">
//                                         Email Us
//                                     </button>
//                                 </Link>
//                             </div>

//                             {/* Phone row */}
//                             <div className="flex items-center gap-3 bg-[#F3F3F3] rounded-xl px-3 py-3 border border-[#E5E7EB]">
//                                 <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg"
//                                     style={{ background: `${ORANGE}18`, color: ORANGE }}
//                                 >
//                                     <LuPhone size={18} />
//                                 </span>
//                                 <span className="public_sans_body text-p2 font-p2 text-[#111827] flex-1 truncate">
//                                     +91-9918671867
//                                 </span>
//                                 <Link href="tel:+919918671867" className="shrink-0">
//                                     <button className="w-full bricolage_grotesque_head font-h5 text-p2 bg-black px-3 py-1 text-white relative z-0 flex items-center justify-center overflow-hidden 1004px:text-p1 792px:text-p2 400px:px-3 400px:py-2 
//                                     transition-all duration-700 before:absolute before:inset-0 before:-z-10  before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5]  before:rounded-[100%] before:bg-color_white_light before:transition-transform before:duration-700 hover:before:translate-x-[0%] hover:before:translate-y-[0%] 
//                                     active:scale-75">
//                                         Call Us
//                                     </button>
//                                 </Link>
//                             </div>
//                         </div>

//                         {/* RIGHT: Form with gradient border */}
//                         <div
//                             // className="bg-white rounded-2xl p-5 md:p-6 "
//                             // style={{
//                             //     border: "1px solid linear-gradient(180deg, ${CYAN}, ${ORANGE})",
//                             //     backgroundImage: `linear-gradient(white, white), linear-gradient(180deg, ${CYAN}, ${ORANGE})`,
//                             //     backgroundOrigin: "border-box",
//                             //     backgroundClip: "content-box, border-box",
//                             // }}
//                             className="bg-white rounded-[18px] overflow-hidden"
//                             style={{
//                                 border: "4px solid transparent",
//                                 backgroundImage: `linear-gradient(white, white), linear-gradient(180deg, #219ebc, #fb8500)`,
//                                 backgroundOrigin: "border-box",
//                                 backgroundClip: "content-box, border-box",
//                             }}
//                         >
//                             <div className="p-6">
//                                 <h4 className="bricolage_grotesque_head text-h3 font-h5 mb-4">
//                                     Send us your Query
//                                 </h4>

//                                 <form className="space-y-4">
//                                     {/* Name */}
//                                     <div>
//                                         <label className="public_sans_body text-p3 font-p3 text-[#111827]">Name</label>
//                                         <input
//                                             type="text"
//                                             placeholder="Enter your name"
//                                             className="mt-1 w-full rounded-md border border-[#E5E7EB] bg-[#F5F6F7] px-3 py-2 outline-none focus:border-[#CBD5E1]"
//                                         />
//                                     </div>

//                                     {/* Contact */}
//                                     <div>
//                                         <label className="public_sans_body text-p3 font-p3 text-[#111827]">Contact No.</label>
//                                         <input
//                                             type="tel"
//                                             placeholder="Enter your phone number"
//                                             className="mt-1 w-full rounded-md border border-[#E5E7EB] bg-[#F5F6F7] px-3 py-2 outline-none focus:border-[#CBD5E1]"
//                                         />
//                                     </div>

//                                     {/* Email */}
//                                     <div>
//                                         <label className="public_sans_body text-p3 font-p3 text-[#111827]">E-Mail</label>
//                                         <input
//                                             type="email"
//                                             placeholder="Enter your email"
//                                             className="mt-1 w-full rounded-md border border-[#E5E7EB] bg-[#F5F6F7] px-3 py-2 outline-none focus:border-[#CBD5E1]"
//                                         />
//                                     </div>

//                                     {/* Need help with */}
//                                     <div>
//                                         <label className="public_sans_body text-p3 font-p3 text-[#111827]">Need Help With</label>
//                                         <select
//                                             className="mt-1 w-full rounded-md border border-[#E5E7EB] bg-[#F5F6F7] px-3 py-2 outline-none focus:border-[#CBD5E1]"
//                                             defaultValue=""
//                                         >
//                                             <option value="" disabled>
//                                                 Select…
//                                             </option>
//                                             <option value="website">Website Design</option>
//                                             <option value="branding">Branding</option>
//                                             <option value="uiux">UI/UX</option>
//                                             <option value="content">Content & Strategy</option>
//                                         </select>
//                                     </div>

//                                     {/* Submit */}
//                                     <button
//                                         type="submit"
//                                         className="mt-3 bricolage_grotesque_head font-h5 text-p2 bg-black px-5 py-3 text-white inline-flex items-center gap-2 text-white relative z-0 flex items-center justify-center overflow-hidden 1004px:text-p1 792px:text-p2 400px:px-3 400px:py-2 
//               transition-all duration-700 before:absolute before:inset-0 before:-z-10  before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5]  before:rounded-[100%] before:bg-color_white_light before:transition-transform before:duration-700 hover:before:translate-x-[0%] hover:before:translate-y-[0%] 
//               active:scale-75"
//                                     >
//                                         <LuSend size={18} />
//                                         Send Your Message
//                                     </button>
//                                 </form>
//                             </div>

//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </main>
//     );
// }






"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { LuMail, LuPhone, LuSend, LuMapPin } from "react-icons/lu";

export default function ContactUs() {
  const CYAN = "#219EBC";
  const ORANGE = "#FB8500";

  // ===== Animations =====
  const leftCol = {
    hidden: { x: -30, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.55, ease: "easeOut", when: "beforeChildren", staggerChildren: 0.12 },
    },
  };
  const leftItem = {
    hidden: { y: 12, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.45, ease: "easeOut" } },
  };
  const rightCard = {
    hidden: { x: 30, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.55, ease: "easeOut" } },
  };

  return (
    <main className="w-full flex items-center justify-center relative overflow-hidden">
      <div className="clients-testimonials-1-container max-w-1600px w-full flex items-center justify-center relative">
        <div className="clients-testimonials-1 w-88% flex flex-col items-center py-14 gap-5 relative z-10">
          {/* Heading (your style) */}
          <div className="top-div-of-clients-testimonials-1 w-full flex flex-col items-center justify-center gap-1">
            <motion.div
              initial={{ opacity: 0, y: "50%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="h2-div-for-clients-testimonials-1 text-center mb-4"
            >
              <span className="span-for-h2-div-for-clients-testimonials-1"></span>
              <h2 className="bricolage_grotesque_head text-p1 font-p1 text-transparent bg-clip-text bg-color_linear_for_h2 792px:text-p2">
                ContactUs
              </h2>
            </motion.div>
          </div>

          <div className="w-88% grid grid-cols-1 lg:grid-cols-2 gap-8 py-4">
            {/* LEFT: Heading + quick actions (staggered in) */}
            <motion.div
              variants={leftCol}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              className="flex flex-col gap-6"
            >
              <motion.h3
                variants={leftItem}
                className="bricolage_grotesque_head text-h2 font-h2 leading-h2 1004px:text-h3 1004px:leading-h3 792px:text-h4"
              >
                Get Started with <br className="400px:hidden" /> BeBeyond
              </motion.h3>

              <motion.p
                variants={leftItem}
                className="public_sans_body text-p1 font-p1 text-color_gray 1004px:text-p2 792px:text-p3"
              >
                Let’s turn your vision into a high-performing digital experience.
              </motion.p>

              {/* Address row */}
              <motion.div
                variants={leftItem}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                className="flex items-start gap-3 bg-[#F3F3F3] rounded-xl px-3 py-3 border border-[#E5E7EB]"
              >
                <span
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg"
                  style={{ background: `${CYAN}15`, color: CYAN }}
                >
                  <LuMapPin size={18} />
                </span>

                <div className="public_sans_body text-p2 font-p2 text-[#111827] flex-1 leading-relaxed">
                  Chamber 6, 4th Floor, Sangam Place <br />
                  (Opposite K K Sales), Civil Lines, <br />
                  Prayagraj, Uttar Pradesh – 211001
                </div>

                <Link
                  href="https://maps.app.goo.gl/wdp75hHVMYMdVipt7"
                  target="_blank"
                  className="shrink-0 self-center"
                >
                  <button
                    className="bricolage_grotesque_head font-h5 text-p2 bg-black px-3 py-1 text-white relative z-0 flex items-center justify-center overflow-hidden 1004px:text-p1 792px:text-p2 400px:px-3 400px:py-2 
                    transition-all duration-700 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%]
                    before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-color_white_light
                    before:transition-transform before:duration-700 hover:before:translate-x-[0%] hover:before:translate-y-[0%]
                    active:scale-75"
                  >
                    View Map
                  </button>
                </Link>
              </motion.div>

              {/* Email row */}
              <motion.div
                variants={leftItem}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                className="flex items-center gap-3 bg-[#F3F3F3] rounded-xl px-3 py-3 border border-[#E5E7EB]"
              >
                <span
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg"
                  style={{ background: `${CYAN}15`, color: CYAN }}
                >
                  <LuMail size={18} />
                </span>
                <span className="public_sans_body text-p2 font-p2 text-[#111827] flex-1 truncate">
                  info@bebeyond.digital
                </span>
                <Link href="mailto:info@bebeyond.digital" className="shrink-0">
                  <button className="w-full bricolage_grotesque_head font-h5 text-p2 bg-black px-3 py-1 text-white relative z-0 flex items-center justify-center overflow-hidden 1004px:text-p1 792px:text-p1 400px:px-3 400px:py-1 
                  transition-all duration-700 before:absolute before:inset-0 before:-z-10  before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5]  before:rounded-[100%] before:bg-color_white_light before:transition-transform before:duration-700 hover:before:translate-x-[0%] hover:before:translate-y-[0%] 
                  active:scale-75">
                    Email Us
                  </button>
                </Link>
              </motion.div>

              {/* Phone row */}
              <motion.div
                variants={leftItem}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                className="flex items-center gap-3 bg-[#F3F3F3] rounded-xl px-3 py-3 border border-[#E5E7EB]"
              >
                <span
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg"
                  style={{ background: `${ORANGE}18`, color: ORANGE }}
                >
                  <LuPhone size={18} />
                </span>
                <span className="public_sans_body text-p2 font-p2 text-[#111827] flex-1 truncate">
                  +91-9918671867
                </span>
                <Link href="tel:+919918671867" className="shrink-0">
                  <button className="w-full bricolage_grotesque_head font-h5 text-p2 bg-black px-3 py-1 text-white relative z-0 flex items-center justify-center overflow-hidden 1004px:text-p1 792px:text-p2 400px:px-3 400px:py-2 
                  transition-all duration-700 before:absolute before:inset-0 before:-z-10  before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5]  before:rounded-[100%] before:bg-color_white_light before:transition-transform before:duration-700 hover:before:translate-x-[0%] hover:before:translate-y-[0%] 
                  active:scale-75">
                    Call Us
                  </button>
                </Link>
              </motion.div>
            </motion.div>

            {/* RIGHT: Form with gradient border (slides from right) */}
            <motion.div
              variants={rightCard}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "0px 0px -60px 0px" }}
              className="bg-white rounded-[18px] overflow-hidden"
              style={{
                border: "4px solid transparent",
                backgroundImage: `linear-gradient(white, white), linear-gradient(180deg, #219ebc, #fb8500)`,
                backgroundOrigin: "border-box",
                backgroundClip: "content-box, border-box",
              }}
            >
              <div className="p-6">
                <h4 className="bricolage_grotesque_head text-h3 font-h5 mb-4">
                  Send us your Query
                </h4>

                <form className="space-y-4">
                  <div>
                    <label className="public_sans_body text-p3 font-p3 text-[#111827]">Name</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="mt-1 w-full rounded-md border border-[#E5E7EB] bg-[#F5F6F7] px-3 py-2 outline-none focus:border-[#CBD5E1]"
                    />
                  </div>

                  <div>
                    <label className="public_sans_body text-p3 font-p3 text-[#111827]">Contact No.</label>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      className="mt-1 w-full rounded-md border border-[#E5E7EB] bg-[#F5F6F7] px-3 py-2 outline-none focus:border-[#CBD5E1]"
                    />
                  </div>

                  <div>
                    <label className="public_sans_body text-p3 font-p3 text-[#111827]">E-Mail</label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="mt-1 w-full rounded-md border border-[#E5E7EB] bg-[#F5F6F7] px-3 py-2 outline-none focus:border-[#CBD5E1]"
                    />
                  </div>

                  <div>
                    <label className="public_sans_body text-p3 font-p3 text-[#111827]">Need Help With</label>
                    <select
                      className="mt-1 w-full rounded-md border border-[#E5E7EB] bg-[#F5F6F7] px-3 py-2 outline-none focus:border-[#CBD5E1]"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select…
                      </option>
                      <option value="website">Website Design</option>
                      <option value="branding">Branding</option>
                      <option value="uiux">UI/UX</option>
                      <option value="content">Content & Strategy</option>
                    </select>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-3 bricolage_grotesque_head font-h5 text-p2 bg-black px-5 py-3 text-white inline-flex items-center gap-2 relative z-0 overflow-hidden 1004px:text-p1 792px:text-p2 400px:px-3 400px:py-2 
                    transition-all duration-700 before:absolute before:inset-0 before:-z-10  before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5]  before:rounded-[100%] before:bg-color_white_light before:transition-transform before:duration-700 hover:before:translate-x-[0%] hover:before:translate-y-[0%]"
                  >
                    <LuSend size={18} />
                    Send Your Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
