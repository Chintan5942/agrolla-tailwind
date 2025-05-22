"use client";

export default function Contact() {
  return (
    <>
      <div className="bg-gray-50 font-[Poppins] flex flex-col items-center gap-8">
        <div className="text-center flex flex-col gap-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Get In <span className="text-green-700">Touch</span>
          </h1>
          <h5 className="text-gray-600 font-semibold max-w-xl text-base md:text-lg mx-auto">
            Have questions about our services or products? Contact us today and
            our team will be happy to assist you.
          </h5>
        </div>

        <div className="flex flex-col lg:flex-row gap-x-10 gap-y-10 w-full max-w-screen-xl">
          {/* Left Form */}
          <div className="w-full lg:w-1/2 bg-white rounded-xl shadow-lg flex justify-center items-center h-[765px]">
            <div className="flex flex-col gap-6 w-[90%] max-w-[500px]">
              <form className="flex flex-col gap-8">
                <div className="flex flex-col gap-1">
                  <label className="text-gray-700 font-semibold">
                    Your Name
                  </label>
                  <div className="border-2 border-gray-300 rounded-md flex items-center h-12">
                    <input
                      type="text"
                      placeholder="   Enter Your name"
                      className="w-full h-full text-base outline-none bg-transparent pl-3"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-gray-700 font-semibold">
                    Email Address
                  </label>
                  <div className="border-2 border-gray-300 rounded-md flex items-center h-12">
                    <input
                      type="text"
                      placeholder="   Enter Your email"
                      className="w-full h-full text-base outline-none bg-transparent pl-3"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-gray-700 font-semibold">
                    Phone Number
                  </label>
                  <div className="border-2 border-gray-300 rounded-md flex items-center h-12">
                    <input
                      type="text"
                      placeholder="   Enter Your phone number"
                      className="w-full h-full text-base outline-none bg-transparent pl-3"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-gray-700 font-semibold">
                    Service Interested In
                  </label>
                  <select className="w-full bg-gray-100 font-semibold border-2 border-gray-300 rounded-md h-12 pl-3">
                    <option value=""> Select a service</option>
                    <option value=""> Service1</option>
                    <option value=""> Service2</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-gray-700 font-semibold">
                    Your Message
                  </label>
                  <textarea
                    placeholder="   Enter your message"
                    className="w-full h-32 border-2 border-gray-300 rounded-md text-base outline-none bg-transparent pl-3 pt-2 resize-none"
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
                  className="w-full bg-green-700 text-white h-12 rounded-md text-lg font-semibold hover:bg-green-800 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Right Contact Info */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            {/* Address Section */}
            <div className="bg-white rounded-xl shadow-lg h-[425px] flex flex-col justify-center ">
              <div className="w-[90%] max-w-[500px] lg:relative lg:left-5 ">
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
                        +91 9977333388 <br /> +91 9977333388
                      </p>
                    </div>
                  </div>
                  <br />
                  <div className="flex items-center gap-4">
                    <img src="/mail.svg" className="h-12" alt="Mail Icon" />
                    <div className="flex flex-col gap-1">
                      <p className="font-bold text-gray-900">Email Address</p>
                      <p className="text-gray-700">
                        info@agrolla.in <br /> support@agrolla.in
                      </p>
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
            <div className="bg-white rounded-xl shadow-lg h-[300px] flex items-center justify-center">
              <div className="w-[100%] max-w-[620px] h-[100%]">
                <iframe
                  src="https://www.google.com/maps/embed?...your coordinates here..."
                  className="w-full h-full rounded-lg border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
