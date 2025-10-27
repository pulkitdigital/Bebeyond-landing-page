"use client";
import Link from "next/link";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import Image from "next/image";
import { useAppContext } from "@/context";
import Loader from "../loader";
const Footer = () => {
  const { loaderToggel } = useAppContext();
  return (
    <>
      <footer className=" w-full flex items-center justify-center bg-color_navy ">
        <div className="footer-container max-w-1600px  w-full flex items-center justify-center relative h-[520px] 1004px:h-[400px] 538px:h-[500px] 446px:h-auto 446px:py-12 ">
          <Image
            width={500}
            height={250}
            priority={true}
            src="/BeB-Pattern Set/BeB-Pattern Set/Pattern/map-pattern-light.png"
            className=" absolute w-1/3 top-0 left-0"
            alt="Map Pattern Light Image"
          />
          <Image
            width={500}
            height={250}
            priority={true}
            src="/BeB-Pattern Set/BeB-Pattern Set/Pattern/map-pattern-light.png"
            className=" absolute w-1/3 right-0 bottom-0"
            alt="Map Pattern Light Image"
          />
          <Image
            width={500}
            height={250}
            priority={true}
            src="/BeB-Pattern Set/BeB-Pattern Set/Pattern/map-pattern-light.png"
            className=" absolute w-1/3"
            alt="Map Pattern Light Image"
          />
          <div className="footer w-88% flex items-start justify-between 446px:flex-col 446px:gap-8">
            <div className="about-div-of-footer flex flex-col items-start justify-start w-1/4 gap-4 z-[1] 446px:w-full 446px:gap-2">
              <h4 className=" text-white  text-h4 font-h4 bricolage_grotesque_head 1004px:text-h5new 792px:text-p1 446px:w-full 446px:text-center">
                About Be Beyond
              </h4>
              <p className=" text-color_gray public_sans_body text-p1 font-p1 text-justify 1004px:text-p2 792px:text-p3 446px:w-full">
              Be Beyond Digital Solutions: Partner with us to unlock your digital potential and achieve sustainable business growth. Go Beyond. Contact us.
              </p>
              <div className="social-icons-div-of-about-div-of-footer text-white public_sans_body text-h5 font-h5 flex  items-center justify-start gap-4 1004px:text-p1 446px:w-full 446px:justify-center">
                <Link
                  href="https://www.facebook.com/profile.php"
                  target="blank"
                >
                  <span className=" hover:text-blue-900">
                    <FaFacebookF />
                  </span>
                </Link>

                <Link
                  href="https://www.instagram.com/bebeyonddigitalsolutions/"
                  target="blank"
                >
                  <span className=" hover:text-pink-500">
                    <FaInstagram />
                  </span>
                </Link>
                <Link href="https://wa.me/919918671867" target="blank">
                  <span className=" hover:text-green-500">
                    <FaWhatsapp />
                  </span>
                </Link>
                <Link
                  href="https://www.linkedin.com/company/be-beyond-digital-solutions"
                  target="blank"
                >
                  <span className=" hover:text-blue-500">
                    <FaLinkedinIn />
                  </span>
                </Link>
              </div>
            </div>
            <div className="company-div-of-footer flex flex-col items-start justify-start gap-4 z-[1] 446px:w-full 446px:gap-2">
              <h4 className=" text-white  text-h4 font-h4 bricolage_grotesque_head 1004px:text-h5new 792px:text-p1 446px:w-full 446px:text-center">
                Company
              </h4>
              <ul className=" text-color_gray public_sans_body text-p1 font-p1 flex flex-col gap-2 items-start justify-center 1004px:text-p2 792px:text-p3  446px:w-full 446px:flex-row 446px:gap-4">
                <Link href="/services" className=" hover:underline">
                  {" "}
                  <li>Services</li>
                </Link>
                <Link href="/blog" className=" hover:underline">
                  <li>Blog</li>
                </Link>
                <Link href="/about" className=" hover:underline">
                  {" "}
                  <li>About</li>
                </Link>
                <Link href="/contact" className=" hover:underline">
                  {" "}
                  <li>Contact</li>
                </Link>
              </ul>
            </div>
            <div className="contact-div-of-footer flex flex-col items-start justify-start w-1/4 gap-4 z-[1] 446px:w-full 446px:gap-2">
              <h4 className=" text-white  text-h4 font-h4 bricolage_grotesque_head 1004px:text-h5new 792px:text-p1 446px:w-full 446px:text-center">
                Contact
              </h4>

              <ul className=" text-color_gray public_sans_body text-p1 w-full font-p1 flex flex-col gap-2 items-start justify-center text-justify 1004px:text-p2 792px:text-p3 446px:w-full 446px:gap-1">
                <Link
                  href="https://maps.app.goo.gl/Ho1RHwKr1gCLWqFx7"
                  target="blank"
                  className=" 446px:text-center 446px:w-full hover:underline"
                >
                  Chamber 6, 4th Floor, Sangam Place (Opposite K K Sales), Civil
                  Lines, Prayagraj, Uttar Pradesh - 211001
                </Link>
                <Link
                  href="mailto:info@bebeyond.digital"
                  className="446px:text-center 446px:w-full hover:underline"
                >
                  info@bebeyond
                  <br className=" hidden 576px:block 446px:hidden" />
                  .digital
                </Link>
                <li className=" 446px:text-center 446px:w-full">
                  <Link href="tel:+919918671867" className=" hover:underline">
                    +91 99 1867 1867
                  </Link>
                  <br />
                  <Link href="tel:+919026861110" className=" hover:underline">
                    +91 90 2686 1110
                  </Link>
                </li>
              </ul>
            </div>
            <div className="font-p1 text-color_gray  text-center hidden 446px:block text-p3 w-full">
              &#169; 2024 Be Beyond, All Rights Reserved. Design By Be Beyond
            </div>
          </div>
          <div className="copyright-div-of-footer absolute bottom-16 text-p1 font-p1 text-color_gray w-1/3 text-center 1004px:text-p2 792px:text-p3 538px:bottom-4 538px:w-full 446px:hidden">
            &#169; 2024 Be Beyond, All Rights Reserved. Design By Be Beyond
          </div>
        </div>
      </footer>
      {loaderToggel && <Loader />}
    </>
  );
};

export default Footer;
