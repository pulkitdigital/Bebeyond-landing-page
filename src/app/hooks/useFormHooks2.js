"use client";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
const useFormHooks2 = () => {
  const formRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [unSubmitted, setUnSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    number: "",
    message: "",
  });
  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    emailjs.init("pllyPdLW_bfpmcfVP");
    emailjs
      .sendForm("service_ofya16q", "template_exfvewk", formRef.current)
      .then(
        () => {
          setFormData({
            fname: "",
            lname: "",
            email: "",
            number: "",
            message: "",
          });
          //   setSubmitted(true);
          //   setTimeout(() => {
          //     setSubmitted(false);
          //   }, 1600);
          alert("Form Submitted");
        },
        (error) => {
          console.error("FAILED...", error.text);
          //   setUnSubmitted(true);
          //   setTimeout(() => {
          //     setUnSubmitted(false);
          //   }, 1600);
        }
      );
  }
  return {
    unSubmitted,
    submitted,
    formRef,
    formData,
    handleSubmit,
    handleFormData,
  };
};
export { useFormHooks2 };
