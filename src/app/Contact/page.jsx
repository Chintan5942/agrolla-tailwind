"use client";
import { useEffect } from "react";
import UserDetail from "@/app/HomePage/UserDetail";
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

      // Close all other accordions
      $(".accordion-item").not($item).removeClass("active");
      $(".accordion-content").not($content).slideUp(300);
      $(".chevron").not($chevron).removeClass("transform rotate-180");

      // Toggle current accordion
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
      {/* Heading Section */}
      <div
        className="flex flex-col items-center justify-center text-center"
        style={{ minHeight: "200px" }}
        data-aos="fade-down"
      >
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
          Contact Us
        </h1>
        <p className="max-w-2xl text-sm text-gray-600 sm:text-base md:text-lg">
          We're here to help! Reach out to us through any of the channels below
          and we'll get back to you as soon as possible.
        </p>
      </div>

      {/* Contact Form and Info Section */}
      <div
        className="flex flex-col justify-center gap-20 lg:flex-row"
        style={{ minHeight: "1003px" }}
      >
        {/* Contact Form */}
        <div
          className="shadow-xl rounded-lg bg-white w-full max-w-[992px] lg:relative lg:top-18 lg:h-[869px] sm:h-[1000px]"
          data-aos="fade-right"
        >
          <div className="text-2xl font-semibold text-gray-900 w-[95%] left-[2.5%] relative">
            <div style={{ height: "24px" }}></div>
            <p className="text-lg">Send Us a Message</p>
            <div style={{ height: "24px" }}></div>
            <UserDetail />
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
              <img
                src="/location.svg"
                alt="Location"
                style={{ width: "40px", height: "40px" }}
              />
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
              <img
                src="/call.svg"
                alt="Phone"
                style={{ width: "40px", height: "40px" }}
              />
              <div>
                <p className="font-semibold text-gray-900">Phone</p>
                <p className="text-sm text-gray-700">
                  +917227021300 <br />
                  +917227021301 <br />
                  +917227021302
                </p>
              </div>
            </div>
            <div style={{ height: "24px" }}></div>

            {/* Hours */}
            <div className="flex items-center gap-4">
              <img
                src="/clock.svg"
                alt="Hours"
                style={{ width: "40px", height: "40px" }}
              />
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
              <img
                src="/facebook.svg"
                alt="Facebook"
                style={{ width: "40px", height: "40px" }}
              />
              <img
                src="/twitter.svg"
                alt="Twitter"
                style={{ width: "40px", height: "40px" }}
              />
              <a href="https://www.linkedin.com/company/agrolla-impex/">
                <img
                  src="/linkedin.svg"
                  alt="LinkedIn"
                  style={{ width: "40px", height: "40px" }}
                />
              </a>
              <a href="https://www.instagram.com/agrolla_impex?igsh=dmhqc3RjM2hzands&utm_source=qr">
                <img
                  src="/instagram.svg"
                  alt="Instagram"
                  style={{ width: "40px", height: "40px" }}
                />
              </a>
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
        <p className="max-w-2xl text-sm text-center w-[90%] text-gray-600 md:text-base">
          Find us at our main office location. We'd love to meet you in person
          and discuss how we can help with your agricultural needs.{" "}
        </p>
        <div style={{ height: "48px" }}></div>
        <div className="w-full max-w-[1504px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.679080469446!2d70.5131841!3d21.6351962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39581d483da8702f%3A0x45a9b999ee560a5d!2sAgrolla%20Impex!5e0!3m2!1sen!2sin!4v1719151673420!5m2!1sen!2sin"
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
          Find quick answers to common questions about contacting and working
          with us.
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
              className={`border border-gray-300 max-w-2xl w-[95%] relative left-[2.5%] rounded-lg shadow-lg accordion-item transition-all duration-300 hover:shadow-xl`}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div style={{ height: "24px" }}></div>
              <button className="accordion-title text-left text-lg font-semibold text-gray-800 w-[90%] left-6 relative hover:cursor-pointer flex justify-between items-center group">
                <span className="pr-4">{faq.title}</span>
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 transition-all duration-300 chevron group-hover:text-green-600 flex-shrink-0"
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

      {/* Custom Styles for FAQ Accordion */}
      <style jsx>{`
        .accordion-item.active {
          border-color: #16a34a !important;
          background-color: #f0fdf4 !important;
        }

        .accordion-item.active .accordion-title {
          color: #16a34a !important;
        }

        .accordion-item.active .chevron {
          color: #16a34a !important;
          transform: rotate(180deg) !important;
        }

        .accordion-item:hover {
          border-color: #16a34a;
        }

        .accordion-title:hover {
          color: #16a34a !important;
        }

        @media (max-width: 640px) {
          .chevron {
            width: 16px !important;
            height: 16px !important;
          }
        }
      `}</style>
    </div>
  );
}
