import React from "react";
import { ChevronRight, Mail, MapPin, Briefcase } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  // JSON data for your existing card design
  const contactInfo = [
    {
      id: "mail",
      title: "Mail Us 24/7",
      detail: "info@autowrench.co.tz",
      icon: <Mail size={28} strokeWidth={1.5} />,
      iconClass: "text-blue-600"
    },
    {
      id: "location",
      title: "Our Location",
      detail: "Kibada Road, 15118 Dar es-Salaam, Tanzania",
      icon: <MapPin size={28} strokeWidth={1.5} />,
      iconClass: "text-blue-600"
    },
    {
      id: "call",
      title: "Call US 24/7",
      detail: (
        <>
          Phone: +255 761 586 464 <br />
          Phone: +255 767 888 566
        </>
      ),
      icon: <FaWhatsapp size={28} />,
      iconClass: "text-green-500",
      hasWhatsapp: true
    },
    {
      id: "hours",
      title: "Working Days",
      detail: (
        <>
          Mon - Fri: 9.00am - 8.00pm<br />
          Saturday: 10.00am - 6.00pm<br />
          Sunday: 10.00am - 4.00pm
        </>
      ),
      icon: <Briefcase size={28} strokeWidth={1.5} />,
      iconClass: "text-blue-600"
    }
  ];

  return (
    <>
      <div className="pbmit-title-bar-wrapper">
        <div className="container mx-auto px-4">
          <div className="pbmit-title-bar-content">
            <div className="pbmit-title-bar-content-inner">
              <div className="pbmit-tbar">
                <div className="pbmit-tbar-inner container mx-auto px-4">
                  <h1 className="pbmit-tbar-title text-3xl font-bold">Contact Us</h1>
                </div>
              </div>
              <div className="pbmit-breadcrumb">
                <div className="pbmit-breadcrumb-inner ">
                  <span>
                    <a title="" href="#" className="home text-blue-600 hover:underline">
                      <span>Auto Wrench</span>
                    </a>
                  </span>
                  <span className="sep">
                    <ChevronRight className="pbmit-base-icon-angle-right inline mx-2" size={18} />
                  </span>
                  <span>
                    <span className="post-root post post-post current-item">Contact Us</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section-lg">
        <div className="lg:container mx-auto lg:px-4 px-2">
          <div className="row pbminfotech-gap-40px flex flex-wrap -mx-4">
            {contactInfo.map((item) => (
              <article key={item.id} className="pbmit-miconheading-style-10 w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
                <div className="pbmit-ihbox-style-10">
                  <div className="pbmit-ihbox-headingicon">
                    <div className="pbmit-ihbox-wrap items-center md:items-start">
                      <div className="pbmit-ihbox-contents flex-1">
                        <h2 className="pbmit-element-title text-xl font-semibold mb-2">{item.title}</h2>
                        <div className="pbmit-heading-desc text-gray-600">
                          {item.detail}
                        </div>
                      </div>
                      <div className="pbmit-ihbox-icon mt-4 md:mt-0">
                        <div className={`pbmit-ihbox-icon-wrapper ${item.iconClass}`}>
                          {item.icon}
                        </div>
                      </div>
                    </div>
                    <div className="pbmit-btn-wrap mt-4">
                      <div className="pbmit-ihbox-btn">
                        <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                          <span className="pbmit-button-text mr-2">Read More</span>
                          <span className="pbmit-button-icon-wrapper">
                            <span className="pbmit-button-icon">
                              <i className="pbmit-base-icon-black-arrow-1" />
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-lgb">
        <div className="lg:container mx-auto lg:px-4 px-2">
          <div className="row g-0 flex flex-wrap -mx-4">
            <div className="col-md-12 col-xl-5 w-full xl:w-5/12 relative px-4">
              <div className="contact-us-left-area">
                <div className="pbmit-heading-subheading animation-style4">
                  <h4 className="pbmit-subtitle text-blue-600 mb-2">Get in touch</h4>
                  <h2 className="pbmit-title text-3xl font-bold mb-4">Happy to answer all your questions</h2>
                  <div className="pbmit-heading-desc text-gray-600">
                    We carefully screen all of our cleaners, so you can rest assured that your home would receive the
                    absolute highest quality of service providing. 
                  </div>
                </div>
                <div className="tween-style mt-6">
                  <div className="pbmit-tween-effect-style-1">
                    <div className="pbmit-tween-effect">
                      <img src="images/bg/about-img-02.webp" className="w-full h-auto rounded-lg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-xl-7 w-full xl:w-7/12 px-4 mt-8 xl:mt-0">
              <div className="contact-form-rightbox pbmit-bg-color-light p-18 rounded-4xl shadow-md">
                <div className="pbmit-heading animation-style2 mb-4 mt-2">
                  <h3 className="pbmit-title text-2xl font-semibold">Send a message to staff</h3>
                </div>
                <p className="py-3 text-gray-700">
                  Your email address will not be published. Required fields are marked *
                </p>
                <form className="contact-form pb-5">
                  <div className="row flex flex-wrap -mx-2">
                    <div className="col-md-6 w-full md:w-1/2 px-2 mb-4">
                      <input type="text" className="form-control w-full border border-gray-300 rounded-4xl p-4" placeholder="Your Name" required />
                    </div>
                    <div className="col-md-6 w-full md:w-1/2 px-2 mb-4">
                      <input type="email" className="form-control w-full border border-gray-300 rounded-4xl p-4" placeholder="Your Email" required />
                    </div>
                    <div className="col-md-6 w-full md:w-1/2 px-2 mb-4">
                      <input type="tel" className="form-control w-full border border-gray-300 rounded-4xl p-4" placeholder="Your Phone" required />
                    </div>
                    <div className="col-md-6 w-full md:w-1/2 px-2 mb-4">
                      <input type="text" className="form-control w-full border border-gray-300 rounded-4xl p-4" placeholder="Subject" required />
                    </div>
                    <div className="col-md-12 w-full px-2 mb-4">
                      <textarea rows={5} className="form-control w-full border border-gray-300 rounded-4xl p-4" placeholder="Message" required />
                    </div>
                  </div>
                  <button className="pbmit-btn mt-4 inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700">
                    <span className="pbmit-button-text">Get Cost Estimate</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="iframe-section section-lgb pbmit-extend-animation w-full">
        <div className="w-full p-0">
          <iframe
            className="w-[95%] rounded-3xl mx-auto h-[450px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.12345!2d39.3498817!3d-6.8678335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTInMDQuMiJTIDM5wrAyMCc1OS42IkU!5e0!3m2!1sen!2stz!4v1700000000000"
            title="Auto Wrench Garage Location"
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
};

export default Contact;