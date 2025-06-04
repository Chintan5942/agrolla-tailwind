"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <> 
    <div className="bg-gray-50 font-[Poppins] flex flex-col items-center gap-12 overflow-hidden" data-aos="fade-up">
      <div className="flex flex-col gap-4 text-center" data-aos="fade-down">
        <br /><br />
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
        <div className="w-full lg:w-1/2 bg-white rounded-xl shadow-lg flex justify-center items-center h-[765px]" data-aos="fade-right">
          <div className="flex flex-col gap-6 w-[90%] max-w-[500px]">
            <form className="flex flex-col gap-8">
              <div className="flex flex-col gap-1">
                <label className="font-semibold text-gray-700">Your Name</label>
                <div className="flex items-center h-12 border-2 border-gray-300 rounded-md">
                  <input
                    type="text"
                    placeholder="   Enter Your name"
                    className="w-full h-full pl-3 text-base bg-transparent outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-semibold text-gray-700">
                  Email Address
                </label>
                <div className="flex items-center h-12 border-2 border-gray-300 rounded-md">
                  <input
                    type="text"
                    placeholder="   Enter Your email"
                    className="w-full h-full pl-3 text-base bg-transparent outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-semibold text-gray-700">
                  Phone Number
                </label>
                <div className="flex items-center h-12 border-2 border-gray-300 rounded-md">
                  <input
                    type="text"
                    placeholder="   Enter Your phone number"
                    className="w-full h-full pl-3 text-base bg-transparent outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-semibold text-gray-700">
                  Service Interested In
                </label>
                <select className="w-full h-12 pl-3 font-semibold bg-gray-100 border-2 border-gray-300 rounded-md">
                  <option value=""> Select a service</option>
                  <option value=""> Service1</option>
                  <option value=""> Service2</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-semibold text-gray-700">
                  Your Message
                </label>
                <textarea
                  placeholder="   Enter your message"
                  className="w-full h-32 pt-2 pl-3 text-base bg-transparent border-2 border-gray-300 rounded-md outline-none resize-none"
                ></textarea>
              </div>

              <div className="flex items-start gap-2">
                <input type="checkbox" id="cb1" className="w-5 h-5 mt-1" />
                <label htmlFor="cb1" className="text-sm text-gray-700">
                  I agree to the terms and privacy policy
                </label>
              </div>

              <button
                type="submit"
                className="w-full h-12 text-lg font-semibold text-white transition bg-green-700 rounded-md hover:bg-green-800"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Right Contact Info */}
 <div className="flex flex-col w-full gap-8 lg:w-1/2" data-aos="fade-left">
  {/* Address Section */}
  <div className="bg-white rounded-xl shadow-lg h-[425px] flex flex-col justify-center" data-aos="zoom-in-up">
    <div className="w-[90%] max-w-[500px] relative left-5 ">
      <p className="text-xl font-bold">Contact Information</p>
      <div className="gap-2">
        <div className="flex items-center gap-4 ">
          <img src="/location.svg" className="h-12" alt="Location Icon" />
          <div className="flex flex-col gap-1">
            <p className="font-bold text-gray-900">Our Location</p>
            <p className="text-gray-700 w-[300px]">BM Square-1, Rajlaxmi Park, Junagadh, Gujarat - 362001</p>
          </div>
        </div>
        <br />
        <div className="flex items-center gap-3">
          <img src="/call.svg" className="h-12" alt="Phone Icon" />
          <div className="flex flex-col gap-1">
            <p className="font-bold text-gray-900">Phone Number</p>
            <p className="text-gray-700">+91 9977333388 <br /> +91 9977333388</p>
          </div>
        </div>
        <br />
        <div className="flex items-center gap-4">
          <img src="/mail.svg" className="h-12" alt="Mail Icon" />
          <div className="flex flex-col gap-1">
            <p className="font-bold text-gray-900">Email Address</p>
            <p className="text-gray-700">info@agrolla.in <br /> support@agrolla.in</p>
          </div>
        </div>
        <br />
        <div className="flex items-center gap-4">
          <img src="/time.svg" className="h-12" alt="Clock Icon" />
          <div className="flex flex-col gap-1">
            <p className="font-bold text-gray-900">Working Hours</p>
            <p className="text-gray-700">
              Monday - Friday: 9:00 AM - 6:00 PM <br /> Saturday: 9:00 AM - 1:00 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Map Section */}
  <div className="bg-white rounded-xl shadow-lg h-[300px] flex items-center justify-center" data-aos="zoom-in">
    <div className="w-[100%] max-w-[620px] h-[100%]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d-122.4194154846816!3d37.77492977975971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f0e2c5b1%3A0x4c8b8b6e8f8b8b8b!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sus!4v1681234567890!5m2!1sen!2sus"
        className="w-full h-full border-0 rounded-lg"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</div>
      </div>
      <br /><br />
    </div></>
  );
}
