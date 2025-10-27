"use client";
import React from "react";
import "./style.css";
function Map1() {
  return (
    <main className=" w-full flex items-center justify-center">
      <div className="map-1-container w-full flex items-center justify-center">
        <div className="map-1 w-full flex items-center justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.660953392036!2d81.82821707349432!3d25.44959632143487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399acbfcbcc86ddf%3A0x893ef748aa070a51!2sBeBeyond%20Digital%20Solutions!5e0!3m2!1sen!2sin!4v1739387451223!5m2!1sen!2sin"
            className=" w-full h-340px 1004px:h-250px"
          ></iframe>
        </div>
      </div>
    </main>
  );
}

export default Map1;