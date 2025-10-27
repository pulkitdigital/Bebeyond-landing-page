"use client";
import React, { useState } from "react";
import "./style.css";
import { motion } from "framer-motion";
import { useFormHooks } from "../../../hooks/useFormHooks";

function ContactUs1Form() {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   number: "",
  //   email: "",
  //   message: "",
  // });
  // let _name, _value;
  // function handleFormData(e) {
  //   _name = e.target.name;
  //   _value = e.target.value;
  //   setFormData({ ...formData, [_name]: _value });
  // }
  // function handleFormSubmit(e) {
  //   e.preventDefault();
  //   console.log(formData);
  //   setFormData({ name: "", number: "", email: "", message: "" });
  // }
  const { formRef, formData, handleSubmit, handleFormData } = useFormHooks();
  return (
    <motion.div
      initial={{ x: "18%", opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
        delay: 0,
      }}
      viewport={{ once: true }}
      className="right-div-of-second-div-of-top-div-of-contact-us-1  flex items-center p-10 h-full w-1/2 justify-center bg-color_creame absolute right-0 1100px:bottom-0 1004px:w-[45%] 900px:py-5 900px:px-7 792px:px-5 792px:py-3 538px:w-[55%] 500px:w-full"
    >
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className=" gap-5 flex flex-col items-start justify-between h-full w-full 792px:gap-3"
      >
        <h3 className=" font-h3 leading-h3 text-h3 bricolage_grotesque_head 1004px:text-h4 1004px:leading-h4 792px:text-h5new">
          Let&apos;s Talk
        </h3>
        <input
          className=" w-full p-4 public_sans_body text-p1 font-p1 text-color_gray focus:outline-none 1004px:text-p2 1004px:p-2 792px:text-p3 792px:p-1"
          type="text"
          placeholder="Name"
          value={formData.name}
          name="name"
          onChange={handleFormData}
          required
        />
        <input
          className=" w-full p-4 public_sans_body text-p1 font-p1 text-color_gray focus:outline-none 1004px:text-p2 1004px:p-2 792px:text-p3 792px:p-1"
          type="text"
          placeholder="Number"
          value={formData.number}
          name="number"
          onChange={handleFormData}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className=" w-full p-4 public_sans_body text-p1 font-p1 text-color_gray focus:outline-none 1004px:text-p2 1004px:p-2 792px:text-p3 792px:p-1"
          value={formData.email}
          name="email"
          onChange={handleFormData}
          required
        />
        <textarea
          rows={10}
          placeholder="Message"
          className=" resize-none w-full p-4 public_sans_body text-p1 font-p1 text-color_gray focus:outline-none 1004px:text-p2 1004px:p-2 792px:text-p3 792px:p-1"
          value={formData.message}
          name="message"
          onChange={handleFormData}
        ></textarea>

        <button
          type="submit"
          className=" bricolage_grotesque_head font-h5 text-h5 bg-color_blue px-7 py-4 text-white 
        relative z-0 flex items-center justify-center overflow-hidden 1004px:text-p1 792px:text-p2 400px:px-3 400px:py-2
       transition-all duration-700
        before:absolute before:inset-0
        before:-z-10 before:translate-x-[150%]
        before:translate-y-[150%] before:scale-[2.5]
        before:rounded-[100%] before:bg-color_white_light
        before:transition-transform before:duration-700
        hover:before:translate-x-[0%]
        hover:before:translate-y-[0%]
        active:scale-75
              "
        >
          Send Message
        </button>
      </form>
    </motion.div>
  );
}

export default ContactUs1Form;
