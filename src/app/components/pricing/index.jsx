"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { LuCheck, LuX } from "react-icons/lu";
import { PRICING_PLANS } from "../../data/Pricing"; // <-- data here

const CYAN = "#219EBC";
const ORANGE = "#FB8500";

const Card = ({ plan, idx }) => {
    const isFeatured = !!plan.featured;

    return (
        <motion.div
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.08 * idx, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className={`rounded-2xl overflow-hidden border ${isFeatured ? "shadow-md" : ""
                }`}
            style={{
                borderColor: isFeatured ? "transparent" : "#E5E7EB",
                backgroundImage: isFeatured
                    ? `linear-gradient(white,white),linear-gradient(180deg, ${CYAN}, ${ORANGE})`
                    : "none",
                backgroundOrigin: isFeatured ? "border-box" : undefined,
                backgroundClip: isFeatured ? "content-box, border-box" : undefined,
            }}
        >
            {/* header */}
            <div className="bg-white px-6 py-5">
                <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full"
                        style={{ background: `${CYAN}15`, color: CYAN }}>
                        {plan.icon}
                    </span>
                    <span className="public_sans_body text-p1 font-p1 text-[#111827]">
                        {plan.title}
                    </span>
                </div>
                <div className="mt-2 bricolage_grotesque_head text-[32px] leading-none">
                    ₹{plan.price.toLocaleString("en-IN")}
                </div>
            </div>

            {/* body */}
            <div className="bg-[#EFEDEB] px-6 py-5">
                <ul className="space-y-3">
                    {plan.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <span
                                className={`mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full border ${f.included ? "border-[#A7F3D0] bg-[#ECFDF5]" : "border-[#FECACA] bg-[#FEF2F2]"
                                    }`}
                                style={{
                                    color: f.included ? "#059669" : "#DC2626",
                                }}
                            >
                                {f.included ? <LuCheck size={14} /> : <LuX size={14} />}
                            </span>
                            <span className="public_sans_body text-p2 font-p2 text-[#374151]">
                                {f.label}
                            </span>
                        </li>
                    ))}
                </ul>

                {plan.cta && (
          <Link href={plan.cta.href} className="block mt-6">
            <button
              className="w-full bricolage_grotesque_head font-h5 text-h5 bg-black px-7 py-4 text-white relative z-0 flex items-center justify-center overflow-hidden 1004px:text-p1 792px:text-p2 400px:px-3 400px:py-2 
              transition-all duration-700 before:absolute before:inset-0 before:-z-10  before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5]  before:rounded-[100%] before:bg-color_white_light before:transition-transform before:duration-700 hover:before:translate-x-[0%] hover:before:translate-y-[0%] 
              active:scale-75"
              style={{
                background: isFeatured ? "#219ebc" : "#000000",
              }}
            >
              {plan.cta.label}
            </button>
          </Link>
        //   <Link
        //                 href="https://bebeyond.digital/contact"
        //                 className=" items-center justify-center 456px:flex"
        //             >
        //                 <motion.button
        //                     initial={{ y: "50%", opacity: 0 }}
        //                     whileInView={{ y: 0, opacity: 1 }}
        //                     transition={{
        //                         duration: 0.5,
        //                     }}
        //                     viewport={{ once: true }}
        //                     className=" bricolage_grotesque_head font-h5 text-h5 bg-black px-7 py-4 text-white
        //                             relative z-0 flex items-center justify-center overflow-hidden 1004px:text-p1 792px:text-p2 400px:px-3 400px:py-2
        //                     transition-all duration-700
        //                     before:absolute before:inset-0
        //                     before:-z-10 before:translate-x-[150%]
        //                     before:translate-y-[150%] before:scale-[2.5]
        //                     before:rounded-[100%] before:bg-color_white_light
        //                     before:transition-transform before:duration-700
        //                     hover:before:translate-x-[0%]
        //                     hover:before:translate-y-[0%]
        //                     active:scale-75" 
        //                 >
        //                     Get in Touch
        //                 </motion.button>
        //             </Link>
                )}
            </div>
        </motion.div>
    );
};

export default function Pricing() {
    return (
        <main className="w-full flex items-center justify-center relative overflow-hidden">
            <div className="clients-testimonials-1-container max-w-1600px w-full flex items-center justify-center relative">
                <div className="clients-testimonials-1 w-88% flex flex-col items-center py-14 gap-5 relative z-10">
                    {/* TOP (keep your styling) */}
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
                                Pricing
                            </h2>
                        </motion.div>
                        <motion.h3
                            initial={{ y: "50%", opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bricolage_grotesque_head text-h2 font-h2 text-center leading-h2 1004px:text-h3 792px:text-h4 leading-4"
                        >
                            Website Packages That Fit Your Stage
                        </motion.h3>
                        <motion.h3
                            initial={{ y: "50%", opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="public_sans_body text-p1 font-p1 text-color_gray max-w-3xl 1004px:text-p2 792px:text-p3 text-center"
                        >
                            Transparent pricing with everything you need to launch fast and grow
                            confidently.
                        </motion.h3>
                    </div>

                    {/* GRID */}
                    <motion.div
                        className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 lg:gap-7 mt-2"
                        initial={{ opacity: 0, scale: 0.97 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.45 }}
                        viewport={{ once: true }}
                    >
                        {PRICING_PLANS.map((plan, i) => (
                            <Card key={plan.title} plan={plan} idx={i} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
