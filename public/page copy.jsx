import "@/app/about/about.css";
import Footer from "@/Components/Footer";
export default function About() {
  return (
    <>
      {/* Navbar */}
      <div className="navbar">
        <div className="navsection">
          <img src="/logo.png" alt="Agrolla" className="logo" />
          <div className="navlinks">
            <a href="/">Home</a>
            <a href="/product">Products</a>
            <a href="/about" style={{ color: "#2E7D32" }}>
              About us
            </a>
            <a href="/contact">Contact</a>
          </div>
          <button className="bt1">Get Quote</button>
        </div>
      </div>
      {/* Hero Section  */}
      <div className="herosection">
        <div className="titles">
          <p className="h1">Nurturing Quality, Cultivating Trust</p>
          <p className="h6">
            Discover the story behind Agrolla Impex, a distinguished One Star
            Export House and leading manufacturer of premium agricultural
            products.
          </p>
          <div className="btns">
            <button className="btn1">Our Story</button>
            <button className="btn2">Contact Us</button>
          </div>
        </div>
      </div>
      {/* section1  */}
      <div className="section1">
        <div className="who">
          <p className="title">Who We Are</p>
          <p className="semititle">
            Agrolla Impex is a distinguished One Star Export House and a leading
            manufacturer and exporter of peanuts, oilseeds, grains, and pulses.
          </p>
          <div className="detail">
            <div className="desc">
              <p className="description">
                Headquartered in Gujarat, India, we take immense pride in our
                fully integrated operations, ensuring uncompromised quality,
                consistency, and reliability in every shipment.
              </p>
              <p className="description">
                Our strategic location allows us to stay directly connected with
                farmers, enabling real-time communication and strict quality
                oversight right from the cultivation phase. This hands-on
                approach ensures that our products meet stringent global food
                safety and quality standards, making us a preferred supplier
                across international markets.
              </p>
              <div className="quality">
                <div className="quality1">
                  <img src="/state.svg" alt="" />
                  <div className="txt">
                    <p className="tit">State-of-the-Art Processing</p>
                    <p className="des">
                      Equipped with cutting-edge technology to maintain purity,
                      freshness, and nutritional value.
                    </p>
                  </div>
                </div>
                <div className="quality1">
                  <img src="/quality.svg" alt="" />
                  <div className="txt">
                    <p className="tit">Quality Control</p>
                    <p className="des">
                      Every batch undergoes rigorous testing to meet the highest
                      international benchmarks.
                    </p>
                  </div>
                </div>
                <div className="quality1">
                  <img src="/sustain.svg" alt="" />
                  <div className="txt">
                    <p className="tit">Sustainable Sourcing</p>
                    <p className="des">
                      Partnering with trusted farmers to maintain transparency
                      and environmental responsibility.
                    </p>
                  </div>
                </div>
                <div className="quality1">
                  <img src="/global.svg" alt="" />
                  <div className="txt">
                    <p className="tit">Global Distribution</p>
                    <p className="des">
                      Serving bulk buyers, food manufacturers, wholesalers, and
                      retailers worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="img">
              <img src="/aboutSection1.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* section2  */}
      <div className="section2">
        <div className="mission">
          <div className="mission1">
            <img src="/mission.svg" alt="" className="missionImg" />
            <p className="missionTitle">Our Mission</p>
            <ul className="ul">
              <li>
                <p className="listTitle">Uncompromised Quality</p>
                <p className="listDesc">Uncompromised Quality</p>
              </li>
              <li>
                <p className="listTitle">Expanding Global Reach</p>
                <p className="listDesc">
                  Strengthening our presence in key international markets with
                  seamless trade operations.
                </p>
              </li>
              <li>
                <p className="listTitle">Sustainability & Ethical Sourcing</p>
                <p className="listDesc">
                  Empowering farmers and promoting environmentally responsible
                  agricultural practices.
                </p>
              </li>
              <li>
                <p className="listTitle">Innovation & Growth</p>
                <p className="listDesc">
                  Investing in modern technology and continuous improvement to
                  adapt to evolving market needs.
                </p>
              </li>
              <li>
                <p className="listTitle">Client Success</p>
                <p className="listDesc">
                  Building long-term partnerships by offering customized
                  solutions and exceptional service.
                </p>
              </li>
            </ul>
          </div>
          <div className="mission1">
            <img src="/vision.svg" alt="" className="missionImg" />
            <p className="missionTitle">Our Vision</p>
            <p className="visionTitle">
              To be a globally recognized leader in agro exports, setting
              industry benchmarks in quality, innovation, and sustainable trade
              practices.
            </p>
            <img src="/visionimg.jpg" alt="" className="visionImg" />
            <p className="visionsentence">
              "At Agrolla Impex, we don't just export agro products—we deliver
              trust, excellence, and a commitment to quality in every shipment."
            </p>
          </div>
        </div>
      </div>
      {/* Section3  */}
      <div className="section3">
        <div className="values">
          <p className="title">Our Values</p>
          <p className="semititle">
            At Agrolla Impex, our foundation is built on principles that define
            our commitment to excellence, integrity, and customer satisfaction.{" "}
          </p>
          <div className="valueContainer">
            <div className="value1">
              <img src="/uncompromie.svg" alt="" className="valueImg" />
              <p className="valueTitle">Uncompromising Quality</p>
              <p className="valueDesc">
                We adhere to the strictest international food safety standards,
                ensuring that every product we supply is pure, fresh, and meets
                global regulatory requirements.
              </p>
            </div>
            <div className="value1">
              <img src="/integrety.svg" alt="" className="valueImg" />
              <p className="valueTitle">Integrity & Transparency</p>
              <p className="valueDesc">
                We believe in honest business practices, maintaining full
                transparency in our sourcing, processing, and export operations.
                Our clients trust us for ethical dealings and fair trade.
              </p>
            </div>
            <div className="value1">
              <img src="/centric.svg" alt="" className="valueImg" />
              <p className="valueTitle">Farmer-Centric Approach</p>
              <p className="valueDesc">
                Our close collaboration with farmers ensures fair compensation
                and access to best agricultural practices. We maintain
                traceability and sustainability from farm to market.
              </p>
            </div>
            <div className="value1">
              <img src="/innovation.svg" alt="" className="valueImg" />
              <p className="valueTitle">Innovation & Excellence</p>
              <p className="valueDesc">
                We continuously invest in advanced processing technology and
                innovative techniques to enhance product quality and efficiency,
                meeting the dynamic needs of the global agro-market.
              </p>
            </div>
            <div className="value1">
              <img src="/customer.svg" alt="" className="valueImg" />
              <p className="valueTitle">Customer Commitment</p>
              <p className="valueDesc">
                Customer satisfaction is at the heart of everything we do. We
                provide tailored solutions, timely deliveries, and unmatched
                service quality, building long-term partnerships.
              </p>
            </div>
            <div className="value1">
              <img src="/Perspective.svg" alt="" className="valueImg" />
              <p className="valueTitle">Global Perspective</p>
              <p className="valueDesc">
                With an international outlook, we understand diverse market
                needs and cultural preferences, adapting our products and
                services to meet global demands while maintaining local
                relevance.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Section4 */}
      <div className="section4">
        <div className="qualityProcess">
          <p className="title">Our Quality Assurance Process</p>
          <p className="semititle">
            We follow a rigorous quality control process to ensure that every
            product meets international standards.
          </p>
          <div className="process">
            <div className="proceessLine">
              <div className="processImgContainer">
                <img src="/process1.svg" alt="" className="processImg" />
                <div className="connectingLine"></div>
              </div>
              <div className="statement">
                <p className="statementTitle">Sourcing & Selection</p>
                <p className="statementSemititle">
                  We carefully select farmers and suppliers who follow
                  sustainable and ethical farming practices. Our agronomists
                  regularly visit farms to ensure quality standards are
                  maintained from the cultivation stage.
                </p>
                <div className="bookmarkContainer">
                  <img src="/bookmark.svg" alt="" />
                  <p className="bookmarkStatement">
                    Direct farmer relationships for traceability and quality
                    control
                  </p>
                </div>
              </div>
            </div>
            <div className="proceessLine">
              <div className="processImgContainer">
                <img src="/process2.svg" alt="" className="processImg" />
                <div className="connectingLine"></div>
              </div>
              <div className="statement">
                <p className="statementTitle">Raw Material Inspection</p>
                <p className="statementSemititle">
                  All incoming raw materials undergo thorough inspection for
                  physical properties, moisture content, and potential
                  contaminants. Only materials meeting our strict criteria
                  proceed to processing.
                </p>
                <div className="bookmarkContainer">
                  <img src="/bookmark.svg" alt="" />
                  <p className="bookmarkStatement">
                    Advanced testing equipment for accurate quality assessment
                  </p>
                </div>
              </div>
            </div>
            <div className="proceessLine">
              <div className="processImgContainer">
                <img src="/process3.svg" alt="" className="processImg" />
                <div className="connectingLine"></div>
              </div>
              <div className="statement">
                <p className="statementTitle">Processing & Cleaning</p>
                <p className="statementSemititle">
                  Our state-of-the-art processing facilities use advanced
                  technology for cleaning, sorting, grading, and packaging.
                  Every step is monitored to maintain product integrity and
                  quality.
                </p>
                <div className="bookmarkContainer">
                  <img src="/bookmark.svg" alt="" />
                  <p className="bookmarkStatement">
                    ISO-certified processing facilities with HACCP
                    implementation
                  </p>
                </div>
              </div>
            </div>
            <div className="proceessLine">
              <div className="processImgContainer">
                <img src="/process4.svg" alt="" className="processImg" />
                <div className="connectingLine"></div>
              </div>
              <div className="statement">
                <p className="statementTitle">Laboratory Testing</p>
                <p className="statementSemititle">
                  Our in-house laboratory conducts comprehensive tests for
                  physical, chemical, and microbiological parameters. We also
                  work with accredited third-party labs for additional
                  verification.
                </p>
                <div className="bookmarkContainer">
                  <img src="/bookmark.svg" alt="" />
                  <p className="bookmarkStatement">
                    Comprehensive testing for aflatoxins, pesticide residues,
                    and more
                  </p>
                </div>
              </div>
            </div>
            <div className="proceessLine">
              <div className="processImgContainer">
                <img src="/process5.svg" alt="" className="processImg" />
              </div>
              <div className="statement">
                <p className="statementTitle">
                  Final Inspection & Certification
                </p>
                <p className="statementSemititle">
                  Before shipping, all products undergo final inspection and
                  receive necessary certifications. Our quality assurance team
                  ensures compliance with destination country requirements.
                </p>
                <div className="bookmarkContainer">
                  <img src="/bookmark.svg" alt="" />
                  <p className="bookmarkStatement">
                    Documentation and certification aligned with global
                    standards
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="Certificate">Our Certifications</p>
        <div className="company">
          <img src="/cer1.png" alt="" />
          <img src="/cer2.png" alt="" />
          <img src="/cer3.png" alt="" />
          <img src="/cer4.png" alt="" />
          <img src="/cer5.png" alt="" />
        </div>
      </div>
      {/* Section5 */}
      <div className="section5">
        <div className="team">
          <p className="title">Meet Our Leadership Team</p>
          <p className="semititle">
            Our experienced team brings decades of expertise in agriculture,
            international trade, and quality management.
          </p>
          <div className="teamMember">
            <div className="members">
              <img src="/member1.png" alt="" className="memberImg" />
              <p className="memberName">Rajesh Patel</p>
              <p className="memberPosition">Founder & CEO</p>
              <p className="about">
                With 25+ years in agro-exports, Rajesh leads our global vision
                and strategic partnerships.
              </p>
            </div>
            <div className="members">
              <img src="/member2.png" alt="" className="memberImg" />
              <p className="memberName">Priya Sharma</p>
              <p className="memberPosition">Chief Operations Officer</p>
              <p className="about">
                Priya oversees all operational aspects, ensuring efficiency and
                excellence in our processing facilities.
              </p>
            </div>
            <div className="members">
              <img src="/member3.jpg" alt="" className="memberImg" />
              <p className="memberName">Vikram Mehta</p>
              <p className="memberPosition">Global Sales Director</p>
              <p className="about">
                Vikram leads our international sales team, developing new
                markets and strengthening client relationships.
              </p>
            </div>
            <div className="members">
              <div className="memberImg">
                <img src="/member4.jpg" alt="" />
              </div>
              <p className="memberName">Dr. Anand Kumar</p>
              <p className="memberPosition">Quality Assurance Head</p>
              <p className="about">
                With a PhD in Food Science, Dr. Kumar ensures our products meet
                the highest quality and safety standards.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Section6 */}
      <div className="section6">
        <div className="getTouch">
          <p className="title">Get in Touch</p>
          <p className="semititle">
            Have questions about our products or services? We'd love to hear
            from you.
          </p>
          <div className="getInTouch">
            <div className="contactInfo">
              <div className="addressDetail">
                <p className="formTitle">Contact Information</p>
                <div className="locations">
                  <div className="location">
                    <div className="locationImg">
                      <img src="/location.svg" alt="" />
                    </div>
                    <div className="aboutDetail">
                      <p className="head">Headquarters</p>
                      <p className="loca">
                        BM Square-1, Rajlaxmi Park, <br />
                        Junagadh
                      </p>
                    </div>
                  </div>
                  <div className="location">
                    <div className="locationImg">
                      <img src="/call.svg" alt="" />
                    </div>
                    <div className="aboutDetail">
                      <p className="head">Phone</p>
                      <p className="loca">
                        +91 79 2345 6789
                        <br />
                        +1 (800) 123-4567 (International)
                      </p>
                    </div>
                  </div>
                  <div className="location">
                    <div className="locationImg">
                      <img src="/mail.svg" alt="" />
                    </div>
                    <div className="aboutDetail">
                      <p className="head">Email</p>
                      <p className="loca">
                        info@agrollaimpex.com
                        <br />
                        exports@agrollaimpex.com
                      </p>
                    </div>
                  </div>
                  <div className="location">
                    <div className="locationImg">
                      <img src="/clock.svg" alt="" />
                    </div>
                    <div className="aboutDetail">
                      <p className="head">Business Hours</p>
                      <p className="loca">
                        Monday - Friday: 9:00 AM - 6:00 PM IST
                        <br />
                        Saturday: 9:00 AM - 1:00 PM IST
                      </p>
                    </div>
                  </div>
                </div> <br />
                <div className="socialIcon">
                  <p className="socialTitle">Connect With Us</p>
                  <img src="/linkedin.svg" alt="" />
                  <img src="/twitter.svg" alt="" />
                  <img src="/facebook.svg" alt="" />
                  <img src="/instagram.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="sentMessage">
              <p className="formTitle">Send Us a Message</p>
              <form action="">
                <div className="nameEmail">
                  <div className="name">
                    <label htmlFor="">Your Name</label> <br />
                    <input type="text" />
                  </div>
                  <div className="name">
                    <label htmlFor="">Email Address</label> <br />
                    <input type="text" />
                  </div>
                </div>
                <div className="nameEmail">
                  <div className="name">
                    <label htmlFor="">Company Name</label> <br />
                    <input type="text" />
                  </div>
                  <div className="name">
                    <label htmlFor="">Subject</label> <br />
                    <input type="text" />
                  </div>
                </div>
                <label htmlFor="">Your Message</label> <br />
                <textarea></textarea> <br />
                <button className="formBtn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Section7 */}
      <div className="section7">
        <div className="global">
          <p className="title">Our Global Presence</p>
          <p className="semititle">
            We export premium agricultural products to over 30 countries across
            5 continents.
          </p>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d-122.4194154846816!3d37.77492977975971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f0e2c5b1%3A0x4c8b8b6e8f8b8b8b!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sus!4v1681234567890!5m2!1sen!2sus"
              width="1504px"
              height="400px"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="eager"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      {/* Section8 */}
      <div className="section8">
        <div className="partner">
          <p className="title">Ready to Partner with Agrolla Impex?</p>
          <p className="semititle2">
            Join our global network of satisfied customers and experience the
            premium quality and service that sets us <br />
            apart.
          </p>
          <div className="btnGroup">
            <button id="btn1">Contact Us Today</button>
            <button id="btn2">Request a Quote </button>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="section9">
        <Footer/>
      </div>
    </>
  );
}
