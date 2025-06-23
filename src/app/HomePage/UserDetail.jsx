"use client";

import { useState } from "react";
import axios from "axios";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const accessKey = "e71bffe4-22d8-48d3-90a2-bca8e5b58547";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      alert("Name is required");
      return false;
    }
    if (!formData.number.trim()) {
      alert("Phone number is required");
      return false;
    }
    if (!/^\d{10}$/.test(formData.number)) {
      alert("Enter a valid 10-digit phone number");
      return false;
    }
    if (!formData.email.trim()) {
      alert("Email is required");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert("Enter a valid email address");
      return false;
    }
    if (!formData.subject.trim()) {
      alert("Subject is required");
      return false;
    }
    if (!formData.message.trim()) {
      alert("Message cannot be empty");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      const response = await axios.post("https://api.web3forms.com/submit", {
        ...formData,
        access_key: accessKey,
      });

      if (response.data.success) {
        alert("Message sent successfully!");
        setFormData({ name: "", number: "", email: "", subject: "", message: "" });
      } else {
        alert("Something went wrong. Try again!");
      }
    } catch (error) {
      alert("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-4 py-12 md:px-8 lg:px-16">
      <div className="p-6 mx-auto bg-white sm:p-8">
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block mb-1 text-lg font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full h-12 px-4 text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>
<br />
          <div>
            <label htmlFor="number" className="block mb-1 text-lg font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              name="number"
              value={formData.number}
              onChange={handleChange}
              className="w-full h-12 px-4 text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>
<br />
          <div>
            <label htmlFor="email" className="block mb-1 text-lg font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-12 px-4 text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>
<br />
          <div>
            <label htmlFor="subject" className="block mb-1 text-lg font-medium text-gray-700">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full h-12 px-4 text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>
          <br />
          <div>
            <label htmlFor="message" className="block mb-1 text-lg font-medium text-gray-700">
              Your Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-3 text-xl border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-1 focus:ring-gray-400"
            ></textarea>
          </div>
<br />
          <button
            type="submit"
            disabled={loading}
            className="w-40 py-3 font-medium text-white transition duration-200 bg-[#2E7D32] rounded-md text-lg h-[50px] px-4 "
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
        <br />
      </div>
    </div>
  );
};

export default ContactUs;
