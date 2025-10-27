"use client";
import React, { useEffect, useState } from "react";
import { PiPhoneCall } from "react-icons/pi";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import Image from "next/image";
import "./style.css";
import { usePathname } from "next/navigation";
function Navbar() {
  const pathName = usePathname();
  const [navCon, setNavCon] = useState("-top-[130vh]");
  const [navBgColor, setNavBgColor] = useState("bg-white");
  const [navOpt] = useState([
    // { opt: "Home", navPath: "/" },
    // { opt: "Services", navPath: "/services" },
    // { opt: "Blog", navPath: "/blog" },
    // { opt: "About", navPath: "/about" },
    // { opt: "Contact", navPath: "/contact" },
  ]);
  // useEffect(() => {
  //   function handleNavBgColor() {
  //     if (window.scrollY > 40) {
  //       setNavBgColor("bg-white");
  //     } else {
  //       setNavBgColor(pathName !== "/" ? "bg-white" : "bg-transparent");
  //     }
  //   }
  //   handleNavBgColor();
  //   window.addEventListener("scroll", handleNavBgColor);
  //   return () => {
  //     window.removeEventListener("scroll", handleNavBgColor);
  //   };
  // }, []);
  // useEffect(() => {
  //   setNavBgColor(pathName !== "/" && "bg-white");
  // }, [pathName]);
  return (
    <>
      <nav
        className={` z-50 w-full flex items-center justify-center fixed top-0 bricolage_grotesque_head  ${navBgColor}`}
      >
        <div className="navbar-container max-w-1600px w-full flex items-center justify-center relative">
          <div
            className={`navbar-2 w-screen hidden items-center justify-center h-[108vh] fixed ${navCon} 828px:flex transition-all duration-500 ease-in-out bg-white`}
          >
            <div className="  max-w-1600px w-full h-full flex items-center justify-center relative">
              <div>
                <div className=" new-navbar-of-navbar-2 w-88% h-full flex items-center justify-start  flex-col gap-14 absolute top-0 left-[6%] right-[6%]">
                  <span
                    className=" absolute right-0 top-8 text-h4 538px:top-7 400px:top-6"
                    onClick={() => setNavCon("-top-[130vh]")}
                  >
                    <RxCross1 />
                  </span>
                  <div className="options-div-of-navbar flex items-center justify-center mt-[19%] flex-col gap-7 text-p1 font-p1 1004px:text-p2">
                    {navOpt &&
                      navOpt.map((data, i) => {
                        const isActive = pathName === data.navPath;
                        return (
                          <Link
                            onClick={() =>
                              setTimeout(() => {
                                setNavCon("-top-[130vh]");
                              }, 750)
                            }
                            className={` link-of-options-div-of-navbar ${
                              isActive ? "active" : ""
                            }`}
                            key={i}
                            href={data.navPath}
                          >
                            <span>{data.opt}</span>
                          </Link>
                        );
                      })}
                  </div>
                  <div className="call-us-div-of-navbar flex items-center justify-center flex-col z-10 gap-2 absolute top-[79%]">
                    <div className="icon-div-of-call-us-div text-4xl text-color_orange 1004px:text-3xl flex items-center justify-center gap-2">
                      <PiPhoneCall />
                      <span className=" text-p2 text-color_blue font-h1 1004px:text-p3">
                        Let&#39;s Chat
                      </span>
                    </div>
                    <div className="text-and-number-div-of-call-us-div flex items-center justify-center leading-4">
                      <Link
                        href="tel:+919918671867"
                        id="tel-9918671867"
                        className=" text-p1  font-p1 1004px:text-p2 "
                      >
                        +91 99 1867 1867
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar w-88% flex items-center justify-between h-88px 538px:h-[78px] 400px:h-[68px]">
            <div className="logo-div-of-navbar flex items-center justify-center">
              <Link href="/">
                <Image
                  width={100}
                  height={100}
                  priority={true}
                  src="/be_beyond_logo.png"
                  alt="be beyond logo"
                  className=" w-180px 1004px:w-40 828px:w-32 400px:w-24"
                />
              </Link>
            </div>
            <div className="options-div-of-navbar flex items-center justify-center gap-7 text-p1 font-p1 1004px:text-p2  828px:hidden">
              {navOpt &&
                navOpt.map((data, i) => {
                  const isActive = pathName === data.navPath;
                  return (
                    <Link
                      className={` link-of-options-div-of-navbar ${
                        isActive ? "active" : ""
                      }`}
                      key={i}
                      href={data.navPath}
                    >
                      <span>{data.opt}</span>
                    </Link>
                  );
                })}
            </div>
            <div className="call-us-div-of-navbar flex items-center justify-center gap-2 828px:hidden">
              <div className="icon-div-of-call-us-div text-4xl text-color_orange 1004px:text-3xl">
                <PiPhoneCall />
              </div>
              <div className="text-and-number-div-of-call-us-div flex items-start justify-center flex-col leading-4 gap-2">
                <span className=" text-p2 text-color_blue font-h1 1004px:text-p3">
                  Let&#39;s Chat
                </span>
                <Link
                  href="tel:+919918671867"
                  id="tel-9918671867"
                  className=" text-p1  font-p1 1004px:text-p2 "
                >
                  +91 99 1867 1867
                </Link>
              </div>
            </div>
            <span
              className=" hidden 828px:flex text-h4"
              onClick={() => setNavCon("top-0")}
            >
              <RxHamburgerMenu />
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
