"use-client";
import "@/CSS/Section8.css";
import { useState } from "react";
export default function Section8() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    agreed: false,
  });

  const [status, setStatus] =
    (useState < "idle") | "loading" | "success" | ("error" > "idle");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "e71bffe4-22d8-48d3-90a2-bca8e5b58547",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        }),
      });

      const result = await res.json();

      if (result.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
          agreed: false,
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };
  return (
    <>
      <div className="section8">
        <h1>
          Get In <span style={{ color: "#2E7D32" }}>Touch</span>
        </h1>
        <h5>
          Have questions about our services or products? Contact us today and
          our team will be happy to assist you.
        </h5>
        <div className="sec8-1">
          <div className="form">
            <form onSubmit={handleSubmit}>
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />

              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />

              <label>Phone Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />

              <label>Service Interested In</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">Select a service</option>
                <option value="Service1">Service1</option>
                <option value="Service2">Service2</option>
              </select>

              <label>Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
              />

              <label>
                <input
                  type="checkbox"
                  name="agreed"
                  checked={formData.agreed}
                  onChange={handleChange}
                />
                I agree to the terms and privacy policy
              </label>

              <button
                type="submit"
                className="send"
                disabled={!formData.agreed || status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-green-600">Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className="text-red-600">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
          <div className="right">
            <div className="address">
              <p className="info">Contact Information</p>
              <div className="contact1">
                <img src="/location.svg" alt="" />
                <p className="locate">Our Location</p>
                <p className="infoName">
                  BM Square-1, Rajlaxmi Park, Junagadh, Gujarat - 362001
                </p>
              </div>
              <div className="contact1">
                <img src="/call.svg" alt="" />
                <p className="locate">Phone Number</p>
                <p className="infoName">
                  +91 9977333388 <br />
                  +91 9977333388
                </p>
              </div>
              <div className="contact1">
                <img src="/mail.svg" alt="" />
                <p className="locate">Email Address</p>
                <p className="infoName">
                  info@agrolla.in <br />
                  support@agrolla.in
                </p>
              </div>
              <div className="contact1">
                <img src="/time.svg" alt="" />
                <p className="locate">Working Hours</p>
                <p className="infoName">
                  Monday - Friday: 9:00 AM - 6:00 PM Saturday: 9:00 AM - 1:00 PM
                </p>
              </div>
            </div>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.679080469446!2d70.5131841!3d21.6351962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39581d483da8702f%3A0x45a9b999ee560a5d!2sAgrolla%20Impex!5e0!3m2!1sen!2sin!4v1719151673420!5m2!1sen!2sin"
                width="720px"
                height="256px"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="eager"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
