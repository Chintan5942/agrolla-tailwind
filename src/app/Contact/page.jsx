"use client";
import { useEffect } from "react";
import Navbar from "@/app/HomePage/Navbar";
import Footer from "@/app/HomePage/Footer";
import $ from "jquery";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Page() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({ once: true });

    // jQuery Accordion
    $(".accordion-content").hide();

    $(".accordion-title").on("click", function () {
      const $item = $(this).closest(".accordion-item");
      const $content = $item.find(".accordion-content");
      const $chevron = $item.find(".chevron");
      $item.toggleClass("active");
      $content.slideToggle(300);
      $chevron.toggleClass("transform rotate-180");
    });

    return () => {
      $(".accordion-title").off("click");
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <Navbar />

      {/* Heading Section */}
      <div
        className="flex flex-col items-center justify-center text-center"
        style={{ minHeight: "200px" }}
        data-aos="fade-down"
      >
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
          Contact Us
        </h1>
        <p className="text-sm text-gray-600 sm:text-base md:text-lg">
          We're here to help! Reach out to us through any of the channels below and we'll get <br />
          back to you as soon as possible.
        </p>
      </div>

      {/* Contact Form and Info Section */}
      <div
        className="flex flex-col justify-center gap-20 lg:flex-row"
        style={{ minHeight: "1003px" }}
      >
        {/* Contact Form */}
        <div
          className="shadow-xl rounded-lg bg-white w-full max-w-[992px] lg:relative lg:top-20"
          style={{ height: "859px" }}
          data-aos="fade-right"
        >
          <div className="text-2xl font-semibold text-gray-900 w-[95%] lg:left-5 relative">
            <div style={{ height: "24px" }}></div>
            <p className="text-lg">Send Us a Message</p>
            <div style={{ height: "24px" }}></div>
            <form className="flex flex-col gap-5">
              <div className="flex flex-col gap-5 md:flex-row">
                <div className="flex flex-col flex-1 gap-2">
                  <label className="text-lg text-[#374151] font-medium">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    className="w-full border border-gray-300 rounded-md"
                    style={{ height: "48px", paddingLeft: "16px" }}
                  />
                </div>
                <div className="flex flex-col flex-1 gap-2">
                  <label className="text-lg text-[#374151] font-medium">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    className="w-full border border-gray-300 rounded-md"
                    style={{ height: "48px", paddingLeft: "16px" }}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-lg text-[#374151] font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full border border-gray-300 rounded-md"
                  style={{ height: "48px", paddingLeft: "16px" }}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-lg text-[#374151] font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full border border-gray-300 rounded-md"
                  style={{ height: "48px", paddingLeft: "16px" }}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-lg text-[#374151] font-medium">
                  Subject
                </label>
                <select
                  name="subject"
                  className="w-full text-lg text-gray-700 border border-gray-300 rounded-md"
                  style={{ height: "48px", paddingLeft: "16px" }}
                >
                  <option value="">Select a subject</option>
                  <option value="subject1">Subject-1</option>
                  <option value="subject2">Subject-2</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-lg text-[#374151] font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  className="w-full border border-gray-300 rounded-md"
                  style={{ height: "144px", padding: "8px 16px" }}
                ></textarea>
              </div>

              <div className="flex items-start gap-5">
                <input
                  type="checkbox"
                  id="privacy"
                  className="w-6 h-6 text-green-600"
                />
                <label
                  htmlFor="privacy"
                  className="text-lg font-medium text-gray-700"
                >
                  I agree to the processing of my personal data according to the
                  privacy policy
                </label>
              </div>

              <button
                type="submit"
                className="text-lg text-white bg-green-700 rounded-md hover:bg-green-800 w-50"
                style={{ height: "48px", padding: "0 24px" }}
              >
                Send Message
              </button>
              <div style={{ height: "48px" }}></div>
            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div
          className="bg-white shadow-xl rounded-lg flex flex-col w-full max-w-[480px] lg:relative lg:top-20"
          style={{ height: "509px" }}
          data-aos="fade-left"
        >
          <div className="w-[90%] left-5 relative">
            <div style={{ height: "24px" }}></div>
            <p className="text-lg font-semibold text-gray-900">
              Contact Information
            </p>
            <div style={{ height: "24px" }}></div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <img src="/location.svg" alt="Location" style={{ width: "40px", height: "40px" }} />
              <div>
                <p className="font-semibold text-gray-900">Main Office</p>
                <p className="text-sm text-gray-700">
                  BM Square-1, Rajlaxmi Park, Junagadh
                </p>
              </div>
            </div>
            <div style={{ height: "24px" }}></div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <img src="/call.svg" alt="Phone" style={{ width: "40px", height: "40px" }} />
              <div>
                <p className="font-semibold text-gray-900">Phone</p>
                <p className="text-sm text-gray-700">
                  Main: +1 (555) 123-4567 <br />
                  Toll-free: 1-800-AGROLLA
                </p>
              </div>
            </div>
            <div style={{ height: "24px" }}></div>

            {/* Hours */}
            <div className="flex items-center gap-4">
              <img src="/clock.svg" alt="Hours" style={{ width: "40px", height: "40px" }} />
              <div>
                <p className="font-semibold text-gray-900">Business Hours</p>
                <p className="text-sm text-gray-700">
                  Monday - Friday: 9:00 AM - 6:00 PM <br />
                  Saturday: 10:00 AM - 2:00 PM <br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            <div style={{ height: "24px" }}></div>
            <p className="font-semibold text-gray-900">Connect With Us</p>
            <div style={{ height: "24px" }}></div>

            {/* Socials */}
            <div className="flex gap-4">
              <img src="/facebook.svg" alt="Facebook" style={{ width: "40px", height: "40px" }} />
              <img src="/twitter.svg" alt="Twitter" style={{ width: "40px", height: "40px" }} />
              <img src="/linkedin.svg" alt="LinkedIn" style={{ width: "40px", height: "40px" }} />
              <img src="/instagram.svg" alt="Instagram" style={{ width: "40px", height: "40px" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="flex flex-col items-center bg-gray-50" data-aos="fade-up">
        <div style={{ height: "48px" }}></div>
        <p className="text-xl font-bold text-gray-900 md:text-2xl">
          Visit Our Office
        </p>
        <p className="max-w-xl text-sm text-center text-gray-600 md:text-base">
          Find us at our main office location. We'd love to meet you in person.
        </p>
        <div style={{ height: "48px" }}></div>
        <div className="w-full max-w-[1504px]">
          <iframe
            src="https://www.google.com/maps/embed"
            width="99%"
            height="400"
            style={{ border: 0 }}
            loading="eager"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div style={{ height: "48px" }}></div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="flex flex-col items-center" data-aos="fade-up">
        <div style={{ height: "48px" }}></div>
        <p className="text-2xl font-bold text-gray-900 md:text-3xl">
          Frequently Asked Questions
        </p>
        <p className="max-w-2xl text-sm font-semibold text-center text-gray-600 md:text-base">
          Find quick answers to common questions about contacting and working with us.
        </p>
        <div style={{ height: "24px" }}></div>

        <div className="flex flex-col w-full max-w-2xl gap-4">
          {[
            {
              title: "What is the typical response time for inquiries?",
              content:
                "We strive to respond to all inquiries within 24 business hours. For urgent matters, please call our main office directly.",
            },
            {
              title: "Do you offer on-site consultations?",
              content:
                "Yes, we provide on-site consultations for larger projects and implementations. Please contact our sales team to schedule a visit.",
            },
            {
              title: "How can I request a product demonstration?",
              content:
                "Product demonstrations can be scheduled through our sales team. Fill out the contact form above or call us directly to arrange a demo.",
            },
            {
              title: "What areas do you service?",
              content:
                "We provide services throughout the United States, with additional support available in select international locations.",
            },
          ].map((faq, idx) => (
            <div
              key={idx}
              className="border border-gray-300 rounded-lg shadow-lg accordion-item"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div style={{ height: "24px" }}></div>
              <button className="accordion-title text-left text-lg font-semibold text-gray-800 w-[90%] left-8 relative hover:cursor-pointer flex justify-between items-center">
                {faq.title}
                <svg
                  className="w-5 h-5 text-gray-500 transition-transform duration-300 chevron"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div style={{ height: "24px" }}></div>
              <p className="accordion-content text-sm text-gray-700 font-semibold w-[90%] left-8 relative">
                {faq.content}
              </p>
              <div style={{ height: "24px" }}></div>
            </div>
          ))}
        </div>
        <div style={{ height: "72px" }}></div>
      </div>

      <Footer />
    </div>
  );
}
