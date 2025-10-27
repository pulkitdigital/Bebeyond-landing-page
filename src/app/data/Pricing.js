// data/Pricing.js

import { LuSparkles, LuShieldCheck, LuFlower2 } from "react-icons/lu";

export const PRICING_PLANS = [
  {
    title: "Basic",
    price: 50000,
    icon: <LuSparkles size={28} />,
    featured: false,
    features: [
      { label: "Website Design", included: true },
      { label: "Premium UI/UX Experience", included: true },
      { label: "Domain Setup", included: true },
      { label: "Payment Getway Set Up", included: true },
      { label: "Upto 3 pages", included: true },
      { label: "Basic Support", included: true },
      { label: "Live Chat", included: true },
      { label: "SEO", included: true },
      { label: "Advanced Apps", included: false },
      { label: "Advanced Analytics", included: false },
    ],
    cta: { label: "Choose Basic", href: "/contact" },
  },
  {
    title: "Pro",
    price: 75000,
    icon: <LuShieldCheck size={28} />,
    featured: true, // highlighted with gradient border
    features: [
      { label: "Website Design", included: true },
      { label: "Premium UI/UX Experience", included: true },
      { label: "Domain Setup", included: true },
      { label: "Payment Getway Set Up", included: true },
      { label: "Upto 7 pages", included: true },
      { label: "Basic Support", included: true },
      { label: "Live Chat", included: true },
      { label: "SEO", included: true },
      { label: "Advanced Apps", included: false },
      { label: "Advanced Analytics", included: false },
    ],
    cta: { label: "Choose Pro", href: "/contact" },
  },
  {
    title: "Business",
    price: 90000,
    icon: <LuFlower2 size={28} />,
    featured: false,
    features: [
      { label: "Website Design", included: true },
      { label: "Premium UI/UX Experience", included: true },
      { label: "Domain Setup", included: true },
      { label: "Payment Getway Set Up", included: true },
      { label: "Upto 10 pages", included: true },
      { label: "Basic Support", included: true },
      { label: "Live Chat", included: true },
      { label: "SEO", included: true },
      { label: "Advanced Apps", included: true },
      { label: "Advanced Analytics", included: true },
    ],
    cta: { label: "Choose Business", href: "/contact" },
  },
];
