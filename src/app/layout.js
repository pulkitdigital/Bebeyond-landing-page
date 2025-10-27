// import { Bricolage_Grotesque, Public_Sans } from "next/font/google";
// import "./globals.css";
// import Navbar from "./components/navbar";
// import Footer from "./components/footer";
// import { AppWrapper } from "@/context";

// const bricolage_grotesque_init = Bricolage_Grotesque({
//   subsets: ["latin"],
//   variable: "--font-bricolage-grotesque",
//   display: "swap",
// });
// const public_sans_init = Public_Sans({
//   subsets: ["latin"],
//   variable: "--font-public-sans",
//   display: "swap",
// });

// export const metadata = {
//   title: "Be Beyond : Best Digital Marketing Agency | SEO | DEVELOPMENT | BRANDING",
//   description:
//     "At BeBeyond Digital Solutions, we empower businesses with innovative strategies and 360-degree solutions, minimizing efforts while maximizing results, driving online and offline growth in today's evolving digital landscape.",
//   keywords:
//     "digital marketing, social media marketing, SEO, web development, app development, branding, seo, agency",
//   url: "https://bebeyond.digital",
//   image: "/be_beyond_logo.png",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${bricolage_grotesque_init.variable} ${public_sans_init.variable} mt-[88px] sm:mt-[78px] xs:mt-[68px]`}
//       >
//         <AppWrapper>
//           {/* Meta Tags */}
//           <head>
//             <title>{metadata.title}</title>
//             <meta name="description" content={metadata.description} />
//             <meta name="keywords" content={metadata.keywords} />
//             <meta name="publisher" content="Be Beyond Digital Solutions" />
//             <meta name="author" content="Be Beyond Digital Solutions" />
//             <meta name="robots" content="index, follow" />
//             <meta name="viewport" content="width=device-width, initial-scale=1" />
//             <link rel="canonical" href={metadata.url} />
//             <link rel="icon" href="/favicon.ico" />

//             {/* Open Graph / Facebook */}
//             <meta property="og:type" content="website" />
//             <meta property="og:url" content={metadata.url} />
//             <meta property="og:title" content={metadata.title} />
//             <meta property="og:description" content={metadata.description} />
//             <meta property="og:image" content={metadata.image} />

//             {/* Twitter */}
//             <meta name="twitter:card" content="summary_large_image" />
//             <meta name="twitter:title" content={metadata.title} />
//             <meta name="twitter:description" content={metadata.description} />
//             <meta name="twitter:image" content={metadata.image} />

//             {/* Structured Data (JSON-LD) */}
//             <script
//               type="application/ld+json"
//               dangerouslySetInnerHTML={{
//                 __html: JSON.stringify({
//                   "@context": "https://schema.org",
//                   "@type": "Organization",
//                   name: "Be Beyond Digital Solutions",
//                   url: metadata.url,
//                   logo: "/be_beyond_logo.png",
//                   sameAs: [
//                     "https://www.facebook.com/profile.php",
//                     "https://www.linkedin.com/company/be-beyond-digital-solutions",
//                     "https://www.instagram.com/bebeyonddigitalsolutions/",
//                     "https://wa.me/919918671867",
//                   ],
//                 }),
//               }}
//             />
//           </head>
//           <Navbar />
//           {children}
//           <Footer />
//         </AppWrapper>
//       </body>
//     </html>
//   );
// }



// app/layout.jsx
import { Bricolage_Grotesque, Public_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { AppWrapper } from "@/context";
import Script from "next/script";

const bricolage_grotesque_init = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage-grotesque",
  display: "swap",
});

const public_sans_init = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  display: "swap",
});

export const metadata = {
  title: "Be Beyond : Best Digital Marketing Agency | SEO | DEVELOPMENT | BRANDING",
  description:
    "At BeBeyond Digital Solutions, we empower businesses with innovative strategies and 360-degree solutions, minimizing efforts while maximizing results, driving online and offline growth in today's evolving digital landscape.",
  keywords:
    "digital marketing, social media marketing, SEO, web development, app development, branding, seo, agency",
  authors: [{ name: "Be Beyond Digital Solutions" }],
  publisher: "Be Beyond Digital Solutions",
  robots: "index, follow",
  alternates: {
    canonical: "https://bebeyond.digital",
  },
  openGraph: {
    type: "website",
    url: "https://bebeyond.digital",
    title: "Be Beyond : Best Digital Marketing Agency | SEO | DEVELOPMENT | BRANDING",
    description:
      "At BeBeyond Digital Solutions, we empower businesses with innovative strategies and 360-degree solutions, minimizing efforts while maximizing results, driving online and offline growth in today's evolving digital landscape.",
    images: [
      {
        url: "/be_beyond_logo.png",
        width: 1200,
        height: 630,
        alt: "Be Beyond Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Be Beyond : Best Digital Marketing Agency | SEO | DEVELOPMENT | BRANDING",
    description:
      "At BeBeyond Digital Solutions, we empower businesses with innovative strategies and 360-degree solutions, minimizing efforts while maximizing results, driving online and offline growth in today's evolving digital landscape.",
    images: ["/be_beyond_logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Be Beyond Digital Solutions",
    url: "https://bebeyond.digital",
    logo: "https://bebeyond.digital/be_beyond_logo.png",
    sameAs: [
      "https://www.facebook.com/profile.php",
      "https://www.linkedin.com/company/be-beyond-digital-solutions",
      "https://www.instagram.com/bebeyonddigitalsolutions/",
      "https://wa.me/919918671867",
    ],
    description:
      "At BeBeyond Digital Solutions, we empower businesses with innovative strategies and 360-degree solutions, minimizing efforts while maximizing results, driving online and offline growth in today's evolving digital landscape.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9918671867",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  };

  return (
    <html lang="en">
      <head>
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body
        className={`${bricolage_grotesque_init.variable} ${public_sans_init.variable} mt-[88px] sm:mt-[78px] xs:mt-[68px]`}
        suppressHydrationWarning={true}  // ✅ Grammarly warning fix
      >
        <AppWrapper>
          <Navbar />
          {children}
          <Footer />
        </AppWrapper>
      </body>
    </html>
  );
}
