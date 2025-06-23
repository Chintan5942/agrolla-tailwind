"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Form from "@/app/HomePage/UserDetail"

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <div
        className="bg-gray-50 font-[Poppins] flex flex-col items-center gap-12 overflow-hidden"
        data-aos="fade-up"
      >
        <div className="flex flex-col gap-4 text-center" data-aos="fade-down">
          <br />
          <br />
          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Get In <span className="text-green-700">Touch</span>
          </h1>
          <h5 className="max-w-2xl mx-auto text-sm font-semibold leading-relaxed text-center w-[90%]  relative left-[5%] text-gray-600  md:text-lg ">
            Have questions about our services or products? Contact us today and
            our team will be happy to assist you.
          </h5>
        </div>

        <div className="flex flex-col w-full max-w-screen-xl lg:flex-row gap-x-10 gap-y-10">
          {/* Left Form */}
          <div
            className="w-full lg:w-1/2 bg-white rounded-xl shadow-lg flex justify-center items-center h-[765px]"
            data-aos="fade-right"
          >
            <div className="flex flex-col gap-6 w-[90%] max-w-[500px]">
              <Form/>
            </div>
          </div>

          {/* Right Contact Info */}
          <div
            className="flex flex-col w-full gap-8 lg:w-1/2"
            data-aos="fade-left"
          >
            {/* Address Section */}
            <div
              className="bg-white rounded-xl shadow-lg h-[450px] flex flex-col justify-center"
              data-aos="zoom-in-up"
            >
              <div className="w-[90%] max-w-[500px] relative left-5 ">
                <p className="text-xl font-bold">Contact Information</p>
                <div className="gap-2">
                  <div className="flex items-center gap-4 ">
                    <img
                      src="/location.svg"
                      className="h-12"
                      alt="Location Icon"
                    />
                    <div className="flex flex-col gap-1">
                      <p className="font-bold text-gray-900">Our Location</p>
                      <p className="text-gray-700 w-[300px]">
                        BM Square-1, Rajlaxmi Park, Junagadh, Gujarat - 362001
                      </p>
                    </div>
                  </div>
                  <br />
                  <div className="flex items-center gap-3">
                    <img src="/call.svg" className="h-12" alt="Phone Icon" />
                    <div className="flex flex-col gap-1">
                      <p className="font-bold text-gray-900">Phone Number</p>
                      <p className="text-gray-700">
                        +91 7227021300 <br /> +91 7227021301 <br />
                        +91 7227021302
                      </p>
                    </div>
                  </div>
                  <br />
                  <div className="flex items-center gap-4">
                    <img src="/mail.svg" className="h-12" alt="Mail Icon" />
                    <div className="flex flex-col gap-1">
                      <p className="font-bold text-gray-900">Email Address</p>
                      <p className="text-gray-700">info@agrollaimpex.com</p>
                    </div>
                  </div>
                  <br />
                  <div className="flex items-center gap-4">
                    <img src="/time.svg" className="h-12" alt="Clock Icon" />
                    <div className="flex flex-col gap-1">
                      <p className="font-bold text-gray-900">Working Hours</p>
                      <p className="text-gray-700">
                        Monday - Friday: 9:00 AM - 6:00 PM <br /> Saturday: 9:00
                        AM - 1:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div
              className="bg-white rounded-xl shadow-lg h-[250px] flex items-center justify-center"
              data-aos="zoom-in"
            >
              <div className="w-[100%] max-w-[620px] h-[98%]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.679080469446!2d70.5131841!3d21.6351962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39581d483da8702f%3A0x45a9b999ee560a5d!2sAgrolla%20Impex!5e0!3m2!1sen!2sin!4v1719151673420!5m2!1sen!2sin"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </>
  );
}
