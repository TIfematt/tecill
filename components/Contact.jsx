"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  // success or failure messages
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    } else {
      tempErrors["fullname"] = false; // Reset the error state if it's now valid
    }

    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    } else {
      tempErrors["email"] = false;
    }

    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    } else {
      tempErrors["message"] = false;
    }

    setErrors({ ...tempErrors });
    return isValid;
  };

  //   Handling form submit

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setIsSending(!isSending);
      await fetch("/api/mail", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => {
          console.log(response);
          if (response.ok) {
            setEmail("");
            setFullname("");
            setMessage("");
            setIsSending(false);
          } else {
            // Error occurred while sending email
            throw new Error("Error sending email");
          }
        })
        .catch((error) => {
          console.log(error);
          setShowSuccessMessage(false);
          setShowFailureMessage(true);
          setIsSending(false);
          return;
        });

      setShowSuccessMessage(true);
      setShowFailureMessage(false);
    }
    console.log(fullname, email, message);
  };

  return (
    <section
      id="contact"
      className="bg-secondary mt-small md:mt-medium lg:mt-large flex flex-col md:flex-row justify-evenly py-8"
    >
      <motion.article
        initial={{ opacity: 0 }}
        whileInView={[{ opacity: 1 }, { x: [-40, 0] }]}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
        className="flex flex-col  gap-5"
      >
        <h3 className="text-primary text-base md:text-xl lg:text-2xl flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="103"
            height="16"
            viewBox="0 0 103 16"
            fill="none"
          >
            <path
              d="M102.038 8.70711C102.428 8.31658 102.428 7.68342 102.038 7.29289L95.6737 0.928932C95.2832 0.538408 94.65 0.538408 94.2595 0.928932C93.869 1.31946 93.869 1.95262 94.2595 2.34315L99.9164 8L94.2595 13.6569C93.869 14.0474 93.869 14.6805 94.2595 15.0711C94.65 15.4616 95.2832 15.4616 95.6737 15.0711L102.038 8.70711ZM0.330566 9H101.331V7H0.330566V9Z"
              fill="#140F78"
            />
          </svg>{" "}
          Get in Touch
        </h3>
        <h1 className="heading pr-4 md:p-0">Contact Us </h1>
        <p className="text p-4 md:p-0 max-w-max md:max-w-[21rem] lg:max-w-[27.4rem]">
          Contact us today for available listings and tailored experience
        </p>
      </motion.article>
      <form
        method="POST"
        onSubmit={handleSubmit}
        className="px-4 md:px-0 flex flex-col gap-7"
      >
        <h1 className="text-heading font-semibold text-lg md:text-base lg:text-lg">
          Send Us a Message
        </h1>
        <div className="relative flex flex-col gap-[1.25rem] max-w-max">
          <input
            type="text"
            required
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            placeholder="Enter Your Name Here"
            className="p-[1.125rem] bg-white w-[18rem] md:w-[21rem] lg:w-[27rem]"
          />
          {errors.fullname && (
            <p className="text-red-500 text-sm ">Please enter your name.</p>
          )}
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email Here"
            className="p-[1.125rem] bg-white w-[18rem] md:w-[21rem] lg:w-[27rem]"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">Please enter a valid email.</p>
          )}
          <textarea
            type="text"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter Your Message Here"
            className="p-[1.125rem] bg-white w-[18rem] h-[10.6rem] md:w-[21rem] lg:w-[27rem]"
          />
          {errors.message && (
            <p className="text-red-500 text-sm">Please enter your message.</p>
          )}
          {showSuccessMessage && (
            <p className="text-green-500 text-sm">Message sent successfully!</p>
          )}
          {showFailureMessage && (
            <p className="text-red-500 text-sm">
              Failed to send message. Please try again.
            </p>
          )}
          <button
            disabled={isSending}
            type="submit"
            className="bg-primary text-white p-4 md:max-w-max "
          >
            {isSending ? "Sending.." : "Send Message"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
