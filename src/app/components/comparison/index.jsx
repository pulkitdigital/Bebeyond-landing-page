"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    PiMaskSadFill,     // left list icon (sad/mask)
    PiCheckBold,       // check glyph
} from "react-icons/pi";
// import "./style.css";

// theme
const PRIMARY = "#219EBC";
const ACCENT = "#FB8500";
const BG = "#f5f3ef";

// tiny gradient ring utility
const gradientRing = `linear-gradient(90deg, ${PRIMARY}, ${ACCENT})`;

function BulletNegative({ children }) {
    return (
        <li className="flex items-center gap-3 public_sans_body text-p2 font-p2 text-color_gray_dark">
            <span className="inline-flex items-center justify-center">
                <PiMaskSadFill className="text-[18px]" style={{ color: "#6B7280" }} />
            </span>
            {children}
        </li>
    );
}

function BulletPositive({ children }) {
    return (
        <li className="flex items-center gap-3 public_sans_body text-p2 font-p2 text-color_gray_dark">
            {/* dark badge with gradient ring */}
            <span
                className="inline-flex items-center justify-center rounded-full"
                style={{
                    width: 28,
                    height: 28,
                    background:
                        "radial-gradient(circle at 50% 50%, #0B0B0C 0%, #16181B 100%)",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                    border: "2px solid transparent",
                    backgroundImage: `linear-gradient(#0F1114, #0F1114), ${gradientRing}`,
                    backgroundOrigin: "border-box",
                    backgroundClip: "content-box, border-box",
                    color: "white",
                }}
                aria-hidden
            >
                <PiCheckBold size={14} />
            </span>
            {children}
        </li>
    );
}

export default function ComparisonSection() {
    const otherAgencies = [
    "Generic pre-built website layouts",
    "Unclear timelines and inconsistent communication",
    "Complex feedback and approval process",
    "Average visuals with limited creativity",
    "No strategic direction in design or content",
    "Minimal post-launch support or updates",
    "Limited SEO and technical optimization",
    "Outdated, non-responsive web designs",
    ];

    const beBeyondDigital = [
        "Custom design crafted for your brand identity",
        "Defined timelines and transparent project workflow",
        "Streamlined feedback system with quick revisions",
        "Premium visuals and conversion-focused UI/UX",
        "Strategy-led creative and content planning",
        "Dedicated post-launch maintenance and support",
        "SEO-optimized, performance-driven websites",
        "Modern, fully responsive mobile-first designs",
    ];


    return (
        <main className="w-full flex items-center justify-center relative bg-color_creame overflow-hidden">
            <div className="clients-testimonials-1-container max-w-1600px w-full flex items-center justify-center relative">
                {/* BG maps remain if you use them elsewhere; omitted here for a cleaner, tight layout */}

                <div className="clients-testimonials-1 w-88% flex flex-col items-center py-14 gap-5 relative z-10">
                    {/* TOP (unchanged) */}
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
                                Comparison
                            </h2>
                        </motion.div>
                        <motion.h3
                            initial={{ y: "50%", opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bricolage_grotesque_head text-h2 font-h2 text-center leading-h2 1004px:text-h3 792px:text-h4 leading-4"
                        >
                            What Sets BeBeyond Apart
                        </motion.h3>
                        <motion.h3
                            initial={{ y: "50%", opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="public_sans_body text-p1 font-p1 text-color_gray max-w-3xl 1004px:text-p2 792px:text-p3 text-center"
                        >
                            Discover how BeBeyond Digital outperforms other web agencies with tailored creativity, advanced functionality, and exceptional post-launch support.
                        </motion.h3>
                    </div>
                    
                    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mt-4 mb-4">
                        {/* VS pill (black) */}
                        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-[74px] z-20">
                            <div className="px-3 py-1 rounded-full bg-black text-white text-[12px] bricolage_grotesque_head tracking-wide shadow">
                                V/S
                            </div>
                        </div>

                        {/* connector dots (subtle) */}
                        <span
                            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-[112px] rounded-full"
                            style={{
                                width: 8,
                                height: 8,
                                background: "#fff",
                                border: "2px solid #D1D5DB",
                                zIndex: 10,
                                boxShadow: "0 0 0 2px #f5f3ef",
                            }}
                        />
                        <span
                            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-[132px] rounded-full"
                            style={{
                                width: 8,
                                height: 8,
                                background: "#fff",
                                border: "2px solid #D1D5DB",
                                zIndex: 10,
                                boxShadow: "0 0 0 2px #f5f3ef",
                            }}
                        />

                        {/* LEFT: Other Agencies */}
                        <div className="bg-white rounded-2xl border border-[#D4D4D8] overflow-hidden">
                            <div className="px-6 py-4 bg-[#EFEFEF] border-b border-[#D4D4D8]">
                                <h3 className="bricolage_grotesque_head text-h5 font-h5 text-black text-center">
                                    Other Agencies
                                </h3>
                            </div>
                            <ul className="p-6 flex flex-col gap-3">
                                {otherAgencies.map((t, i) => (
                                    <BulletNegative key={i}>{t}</BulletNegative>
                                ))}
                            </ul>
                        </div>

                        {/* RIGHT: Skyloom Studios (rounded gradient stroke) */}
                        <div
                            className="bg-white rounded-[18px] overflow-hidden"
                            style={{
                                border: "2px solid transparent",
                                backgroundImage: `linear-gradient(white, white), linear-gradient(180deg, #219ebc, #fb8500)`,
                                backgroundOrigin: "border-box",
                                backgroundClip: "content-box, border-box",
                            }}
                        >
                            <div className="px-6 py-4 bg-white border-b border-[#ECECEC]">
                                <h3 className="bricolage_grotesque_head text-h5 font-h5 text-[#FB8500] text-center">
                                    BeBeyond Digital Solution
                                </h3>
                            </div>
                            <ul className="p-6 flex flex-col gap-3">
                                {beBeyondDigital.map((t, i) => (
                                    <BulletPositive key={i}>{t}</BulletPositive>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <Link
                        href="https://bebeyond.digital/contact"
                        className=" items-center justify-center 456px:flex"
                    >
                        <motion.button
                            initial={{ y: "50%", opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 0.5,
                            }}
                            viewport={{ once: true }}
                            className=" bricolage_grotesque_head font-h5 text-h5 bg-black px-7 py-4 text-white
                                    relative z-0 flex items-center justify-center overflow-hidden 1004px:text-p1 792px:text-p2 400px:px-3 400px:py-2
                            transition-all duration-700
                            before:absolute before:inset-0
                            before:-z-10 before:translate-x-[150%]
                            before:translate-y-[150%] before:scale-[2.5]
                            before:rounded-[100%] before:bg-color_white_light
                            before:transition-transform before:duration-700
                            hover:before:translate-x-[0%]
                            hover:before:translate-y-[0%]
                            active:scale-75"
                        >
                            Get in Touch
                        </motion.button>
                    </Link>
                </div>
            </div>
        </main>
    );
}
