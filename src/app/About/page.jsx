"use client";

import Navbar from "../HomePage/Navbar";

export default function About() {
  return (
    <>
      <div className="font-poppins">
        {/* Navbar */}
        <Navbar />
        
        {/* Hero Section */}
        <div className="w-full h-[1000px] bg-[url('/abouthero.png')] bg-cover bg-center flex items-center justify-baseline">
          <div className="flex flex-col items-center justify-start w-full max-w-[600px] gap-4 absolute top-[50%] left-[5%]">
            <h1 className="text-[48px] font-bold text-white leading-tight">Nurturing Quality, Cultivating Trust</h1>
            <p className="text-[18px] font-normal text-[#d3d3d3] text-start">Discover the story behind Agrolla Impex, a distinguished One Star Export House and leading manufacturer of premium agricultural products.</p>
            <div className="flex flex-row gap-4 w-full justify-start">
              <button className="h-[50px] w-[123px] bg-[#2E7D32] text-white text-[16px] font-semibold rounded-[8px]">Our Story</button>
              <button className="h-[50px] w-[123px] bg-white text-[#1f2937] text-[16px] font-semibold rounded-[8px]">Contact Us</button>
            </div>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="w-full flex flex-col items-center gap-16 md:gap-12 sm:gap-8 px-4">
          
          {/* Section 1 */}
          <section className="w-full max-w-[1536px] flex flex-col items-center gap-8"> <br /><br /><br />
            <h2 className="text-[30px] font-bold text-center">Who We Are</h2>
            <p className="w-full max-w-xl text-[18px] text-[#4b5563] text-center">Agrolla Impex is a distinguished One Star Export House and a leading manufacturer and exporter of peanuts, oilseeds, grains, and pulses.</p>
            
            <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-8">
              <div className="flex flex-col justify-center gap-6 max-w-[728px] w-full">
                <p className="text-[16px] font-semibold text-[#374151] leading-[24px]">Headquartered in Gujarat, India, we take immense pride in our fully integrated operations, ensuring uncompromised quality, consistency, and reliability in every shipment.</p>
                <p className="text-[16px] font-semibold text-[#374151] leading-[24px]">Our strategic location allows us to stay directly connected with farmers, enabling real-time communication and strict quality oversight right from the cultivation phase. This hands-on approach ensures that our products meet stringent global food safety and quality standards, making us a preferred supplier across international markets.</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  {/* Quality Items */}
                  {[
                    { icon: "/state.svg", title: "State-of-the-Art Processing", desc: "Equipped with cutting-edge technology to maintain purity, freshness, and nutritional value." },
                    { icon: "/quality.svg", title: "Quality Control", desc: "Every batch undergoes rigorous testing to meet the highest international benchmarks." },
                    { icon: "/sustain.svg", title: "Sustainable Sourcing", desc: "Partnering with trusted farmers to maintain transparency and environmental responsibility." },
                    { icon: "/global.svg", title: "Global Distribution", desc: "Serving bulk buyers, food manufacturers, wholesalers, and retailers worldwide." }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <img src={item.icon} alt="" className="w-12 h-12 mt-1" />
                      <div className="flex flex-col">
                        <p className="text-[16px] font-semibold text-[#111827]">{item.title}</p>
                        <p className="text-[14px] font-semibold text-[#4b5563]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <img src="/aboutSection1.jpg" alt="" className="w-full max-w-[728px] h-[613px] rounded-[8px] object-cover" />
            </div>
          </section>

          {/* Section 2 */}
          <section className="w-full bg-[#f9fafb] flex justify-center ">
            <div className="w-full max-w-[1536px] mx-auto flex flex-col lg:flex-row gap-8 ">
              {/* Mission Card */}
              <div className="w-full lg:w-1/2 rounded-[16px] bg-white p-8 shadow-lg">
                <img src="/mission.svg" alt="" className="w-16 h-16" />
                <h3 className="text-2xl font-bold mt-6 mb-6">Our Mission</h3>
                
                <ul className="space-y-4">
                  {[
                    { title: "Uncompromised Quality", desc: "Delivering premium agro products that exceed global quality expectations." },
                    { title: "Expanding Global Reach", desc: "Strengthening our presence in key international markets with seamless trade operations." },
                    { title: "Sustainability & Ethical Sourcing", desc: "Empowering farmers and promoting environmentally responsible agricultural practices." },
                    { title: "Innovation & Growth", desc: "Investing in modern technology and continuous improvement to adapt to evolving market needs." },
                    { title: "Client Success", desc: "Building long-term partnerships by offering customized solutions and exceptional service." }
                  ].map((item, index) => (
                    <li key={index} className="flex">
                      <span className="text-[#4caf50] text-xl gap-4">✓</span>
                      <div>
                        <p className="text-[16px] font-semibold text-[#111827]">{item.title}</p>
                        <p className="text-[14px] text-[#4b5563]">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Vision Card */}
              <div className="w-full lg:w-1/2 rounded-[16px] bg-white p-8 shadow-lg flex flex-col">
                <img src="/vision.svg" alt="" className="w-16 h-16" />
                <h3 className="text-2xl font-bold mt-6 mb-6">Our Vision</h3>
                
                <p className="text-lg font-medium mb-8">
                  To be a globally recognized leader in agro exports, setting
                  industry benchmarks in quality, innovation, and sustainable trade
                  practices.
                </p>
                
                <img 
                  src="/visionimg.jpg" 
                  alt="" 
                  className="w-full h-48 rounded-[16px] object-cover"
                />
                
                <p className="italic text-[#4b5563] mt-6 text-center">
                  "At Agrolla Impex, we don't just export agro products—we deliver
                  trust, excellence, and a commitment to quality in every shipment."
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="w-full max-w-[1536px] flex flex-col items-center gap-8 px-4">
            <h2 className="text-[30px] font-bold text-center">Our Values</h2>
            <p className="w-full max-w-2xl text-[18px] text-[#4b5563] text-center">
              At Agrolla Impex, our foundation is built on principles that define
              our commitment to excellence, integrity, and customer satisfaction.
            </p>
            
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Value Cards */}
              {[
                { icon: "/uncompromie.svg", title: "Uncompromising Quality", desc: "We adhere to the strictest international food safety standards, ensuring that every product we supply is pure, fresh, and meets global regulatory requirements." },
                { icon: "/integrety.svg", title: "Integrity & Transparency", desc: "We believe in honest business practices, maintaining full transparency in our sourcing, processing, and export operations. Our clients trust us for ethical dealings and fair trade." },
                { icon: "/centric.svg", title: "Farmer-Centric Approach", desc: "Our close collaboration with farmers ensures fair compensation and access to best agricultural practices. We maintain traceability and sustainability from farm to market." },
                { icon: "/innovation.svg", title: "Innovation & Excellence", desc: "We continuously invest in advanced processing technology and innovative techniques to enhance product quality and efficiency, meeting the dynamic needs of the global agro-market." },
                { icon: "/customer.svg", title: "Customer Commitment", desc: "Customer satisfaction is at the heart of everything we do. We provide tailored solutions, timely deliveries, and unmatched service quality, building long-term partnerships." },
                { icon: "/Perspective.svg", title: "Global Perspective", desc: "With an international outlook, we understand diverse market needs and cultural preferences, adapting our products and services to meet global demands while maintaining local relevance." }
              ].map((item, index) => (
                <div key={index} className="bg-[#f9fafb] rounded-[16px] p-6 shadow-sm hover:shadow-md transition-shadow">
                  <img src={item.icon} alt="" className="w-14 h-14" />
                  <h3 className="text-xl font-semibold mt-5">{item.title}</h3>
                  <p className="text-[#4b5563] mt-3">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4 */}
          <section className="w-full max-w-[1536px] flex flex-col items-center gap-8 px-4">
            <h2 className="text-[30px] font-bold text-center">Our Quality Assurance Process</h2>
            <p className="w-full max-w-2xl text-[18px] text-[#4b5563] text-center">
              We follow a rigorous quality control process to ensure that every
              product meets international standards.
            </p>
            
            <div className="w-full max-w-4xl space-y-8">
              {/* Process Items */}
              {[
                { 
                  icon: "/process1.svg", 
                  title: "Sourcing & Selection", 
                  desc: "We carefully select farmers and suppliers who follow sustainable and ethical farming practices. Our agronomists regularly visit farms to ensure quality standards are maintained from the cultivation stage.",
                  note: "Direct farmer relationships for traceability and quality control"
                },
                { 
                  icon: "/process2.svg", 
                  title: "Raw Material Inspection", 
                  desc: "All incoming raw materials undergo thorough inspection for physical properties, moisture content, and potential contaminants. Only materials meeting our strict criteria proceed to processing.",
                  note: "Advanced testing equipment for accurate quality assessment"
                },
                { 
                  icon: "/process3.svg", 
                  title: "Processing & Cleaning", 
                  desc: "Our state-of-the-art processing facilities use advanced technology for cleaning, sorting, grading, and packaging. Every step is monitored to maintain product integrity and quality.",
                  note: "ISO-certified processing facilities with HACCP implementation"
                },
                { 
                  icon: "/process4.svg", 
                  title: "Laboratory Testing", 
                  desc: "Our in-house laboratory conducts comprehensive tests for physical, chemical, and microbiological parameters. We also work with accredited third-party labs for additional verification.",
                  note: "Comprehensive testing for aflatoxins, pesticide residues, and more"
                },
                { 
                  icon: "/process5.svg", 
                  title: "Final Inspection & Certification", 
                  desc: "Before shipping, all products undergo final inspection and receive necessary certifications. Our quality assurance team ensures compliance with destination country requirements.",
                  note: "Documentation and certification aligned with global standards"
                }
              ].map((item, index) => (
                <div key={index} className="flex">
                  <div className="flex flex-col items-center mr-6">
                    <img src={item.icon} alt="" className="w-10" />
                    {index < 4 && <div className="w-[2px] h-full bg-gray-300 mt-4"></div>}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-[#4b5563] font-medium mt-2">{item.desc}</p>
                    
                    <div className="bg-[#f9fafb] rounded-[16px] p-4 mt-3 flex items-start">
                      <img src="/bookmark.svg" alt="" className="mt-1 mr-4" />
                      <p className="text-[#374151] font-medium">{item.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="w-full flex flex-col items-center gap-8 mt-12">
              <h3 className="text-2xl font-semibold text-center">Our Certifications</h3>
              <div className="w-full flex flex-wrap justify-evenly gap-6 md:gap-4 sm:gap-3">
                {[1, 2, 3, 4, 5].map((num) => (
                  <img 
                    key={num} 
                    src={`/cer${num}.png`} 
                    alt="" 
                    className="h-24 md:h-20 sm:h-16 object-contain"
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="w-full max-w-[1536px] flex flex-col items-center gap-8 px-4">
            <h2 className="text-[30px] font-bold text-center">Meet Our Leadership Team</h2>
            <p className="w-full max-w-2xl text-[18px] text-[#4b5563] text-center">
              Our experienced team brings decades of expertise in agriculture,
              international trade, and quality management.
            </p>
            
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Team Members */}
              {[
                { 
                  image: "/member1.png", 
                  name: "Rajesh Patel", 
                  position: "Founder & CEO", 
                  bio: "With 25+ years in agro-exports, Rajesh leads our global vision and strategic partnerships."
                },
                { 
                  image: "/member2.png", 
                  name: "Priya Sharma", 
                  position: "Chief Operations Officer", 
                  bio: "Priya oversees all operational aspects, ensuring efficiency and excellence in our processing facilities."
                },
                { 
                  image: "/member3.jpg", 
                  name: "Vikram Mehta", 
                  position: "Global Sales Director", 
                  bio: "Vikram leads our international sales team, developing new markets and strengthening client relationships."
                },
                { 
                  image: "/member4.jpg", 
                  name: "Dr. Anand Kumar", 
                  position: "Quality Assurance Head", 
                  bio: "With a PhD in Food Science, Dr. Kumar ensures our products meet the highest quality and safety standards."
                }
              ].map((member, index) => (
                <div key={index} className="rounded-[16px] shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xl font-semibold">{member.name}</p>
                    <p className="text-[#4caf50] font-medium mt-1">{member.position}</p>
                    <p className="text-[#4b5563] mt-3">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}