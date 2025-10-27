"use client";
import Header from "@/app/components/header";
import React from "react";
import OurServices1 from "../components/our_services1";
import OurProjects1 from "../components/our_projects1";
import ClientsTestimonials1 from "../components/clients_testimonials1";
import WhyChoose1 from "../components/why_choose1";
import WhyWorkWithUs1 from "../components/why_work_with_us";
// import OurTeamMember1 from "../components/our_team_member1";
// import OurBlogs1 from "../components/our_blogs1";
import ContactUs1 from "../components/contact_us1"; 
import { useAppContext } from "@/context";
import { useEffect } from "react";
import Loader from "../components/loader";
import OurProcess from "../components/our_process";
// import Events from "../components/events";
import  Map from "../components/map1";
import ComparisonSection from "../components/comparison";
import Pricing from "../components/pricing";

function Home() {
  const { setLoaderToggel2, loaderToggel2 } = useAppContext();

  useEffect(() => {
    setTimeout(() => {
      setLoaderToggel2(false);
    }, 2000);
  }, []);

  return loaderToggel2 ? (
    <Loader />
  ) : (
    <>
      <Header />
      <OurServices1 />
      <WhyChoose1
        _p="pt-[85px] pb-40"
        _mW_p="1004px:pt-[75px] 1004px:pb-32"
        _mW_p2="900px:pt-[65px] 900px:pb-28"
        _mW_p3="792px:pt-[55px] 900px:pb-24"
        _mW_p4="538px:pt-[35px] 900px:pb-32"
        _d="flex"
      />
      <WhyWorkWithUs1 />
      <OurProcess/>
      <OurProjects1 />
      <ClientsTestimonials1 />
      <ComparisonSection/>
      <Pricing/>
      <Map/>
      {/* <OurTeamMember1 _pb1="pb-16" />
      <OurBlogs1 /> */}
      <ContactUs1 _d="hidden" _d2="absolute" _pt="pt-20" _mW_pt="792px:pt-14" />
      {/* <Events/> */}
       
    </>
  );
}

export default Home;
