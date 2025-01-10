"use client";
import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ce6a13b1-c09f-4773-9cb9-5f2bb9b55ec5");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        toast.success("تم الارسال بنجاح");
        console.log("Success", res);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
      console.error("Error:", error);
    }
  };
  return (
    <div id="contactus" className="py-16 ">
      <div className="flex flex-row md:flex-row items-center  rounded-lg border dark:border-muted flex-wrap">
        <div className="flex justify-start flex-col w-full md:w-1/2">
          <div className="flex flex-col justify-end  p-4">
            <h3 className="text-lg text-primary font-semibold">العنوان:</h3>
            <p className="text-muted-foreground">
            الرياض ،طريق المدينة الصناعية الثانية ، طريق 3189 311

            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3629.6033762477196!2d46.909175999999995!3d24.533803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDMyJzAxLjciTiA0NsKwNTQnMzMuMCJF!5e0!3m2!1sar!2s!4v1736525530262!5m2!1sar!2s"
            width="600"
            height="450"
            allowFullScreen={true}
            loading="lazy"
            className="w-full h-52 rounded-lg sm:h-80 md:h-[500px] rounded-s-lg md:rounded-e-none"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <form onSubmit={onSubmit} className="w-full md:w-1/2 p-8">
          <h2 className="text-4xl font-bold mb-10 text-[#1E2192]">اتصل بنا</h2>
          <div className="mb-5">
            <label htmlFor="name" className="sr-only">
              الأسم
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              name="name"
              type="text"
              placeholder="الاسم كامل"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="sr-only">
              البريد الإلكتروني
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              name="email"
              type="text"
              placeholder="قم بإرسال الايميل الخاص فيك"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="sr-only">
              الرسالة
            </label>
            <textarea
              className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              rows={5}
              name="message"
              placeholder="الرسالة "
              required
            ></textarea>
          </div>
          <br />
          <br />
          <button
            type="submit"
            className="w-full py-2 px-4 rounded-lg text-white bg-[#01A101] font-bold"
          >
            ارسال
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Contact;
