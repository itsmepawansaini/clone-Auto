/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { ChevronRight, Check, Phone } from "lucide-react";
import "../../assets/css/pricing.css";
import "../../assets/css/cta.css";
import { getPackages } from "../../utils/api/packageApi"; 

import ExperiencedStaff from "../../assets/images/experienced-staff.webp";
import QualityProducts from "../../assets/images/quality-staff.webp";

const Offering = () => {
  // State for API data
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch plans from API on mount
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        setLoading(true);
        const data = await getPackages(); // Fetches from http://168.231.116.54:8000/plan/
        setPackages(data);
      } catch (error) {
        console.error("Failed to load plans", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPlans();
  }, []);

  return (
    <>
      {/* Breadcrumb */}
      <div className="pbmit-title-bar-wrapper">
        <div className="container mx-auto px-4">
          <div className="pbmit-title-bar-content">
            <div className="pbmit-title-bar-content-inner">
              <div className="pbmit-tbar">
                <div className="pbmit-tbar-inner container mx-auto px-4">
                  <h1 className="pbmit-tbar-title text-3xl font-bold">Our Services</h1>
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
                    <span className="post-root post post-post current-item">Our Services</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <section className="pricing-two-bg section-xl">
        <div className="lg:container mx-auto lg:px-4 px-2">
          <div className="lg:flex gap-15">
            <div className="w-full xl:w-1/3">
              <div className="pbmit-heading-subheading animation-style2">
                <h4 className="pbmit-subtitle"> Pricing Table </h4>
                <h2 className="pbmit-title">
                  The best <span className="pbmit-global-color">pricing</span> to help you!
                </h2>
                <div className="pbmit-heading-desc">
                  We use the most reliable methods to locate issues and correct
                  them to ensure your car is in top condition also check the
                  lights and system
                </div>
              </div>
            </div>
      
            <div className="w-full xl:w-2/3">
              <div className="pbminfotech-ele-ptable-style-3">
                <div className="pbmit-ptable-cols flex flex-wrap">
                  {loading ? (
                    <div className="w-full text-center py-10 font-bold uppercase tracking-widest">
                        Loading Services...
                    </div>
                  ) : (
                    packages.map((item) => (
                      <div
                        key={item._id || item.name}
                        className={`pbmit-ptable-col w-full md:w-1/2 lg:w-1/3 ${
                          item.name === "Standard Service Package" ? "pbmit-pricing-table-featured-col" : ""
                        }`}
                      >
                        <div className="pbmit-pricing-table-box">
                          <div className="pbmit-feature-wrap">
                            {item.name === "Standard Service Package" && <div className="pbmit-ptablebox-featured-w" />}
                          </div>
                          
                          <div className="pbmit-pricing-table-inner">
                            <div className="pbmit-head-wrap">
                              <h3 className="pbminfotech-ptable-heading">{item.name}</h3>
                              <div className="pbmit-price-wrapper">
                                <div className="pbmit-ptable-price-w">
                                  <div className="pbminfotech-ptable-symbol">TZS</div>
                                  <div className="pbminfotech-ptable-price">
                                    {Number(item.price).toLocaleString()}
                                  </div>
                                </div>
                              </div>
                            </div>
        
                            <div className="pbmit-ptable-lines">
                              {item.features && item.features.map((feature, index) => (
                                <div key={index} className="pbmit-ptable-line">
                                  <Check
                                    className="ti-check inline mr-2"
                                    size={22}
                                    strokeWidth={1.5}
                                  />
                                  {feature}
                                </div>
                              ))}
                              {item.note && (
                                <div className="pbmit-ptable-recommendation mt-4 inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                                  {item.note}
                                </div>
                              )}
                            </div>
                          </div>
        
                          <div className="pbmit-price-btn">
                            <a href="#" className="pbmit-button">
                              <span className="pbmit-button-text">Book Now</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* Features */}
      <section className="section">
        <div className="row pt-4 lg:flex gap-x-8 lg:container mx-auto">
          <div className="col-md-6 col-xl-4 w-full md:w-1/2 xl:w-1/3 px-4 mb-6">
            <div className="pbmit-ihbox-style-1">
              <div className="pbmit-ihbox-headingicon items-start space-x-4">
                <div className="pbmit-ihbox-icon">
                  <div className="pbmit-ihbox-icon-wrapper pbmit-icon-type-icon text-4xl text-blue-600">
                    <i className="pbmit-karsfix-icon pbmit-karsfix-icon-worker" />
                  </div>
                </div>
                <div className="pbmit-ihbox-contents">
                  <h2 className="pbmit-element-title text-lg font-semibold mb-2">Skilled technicians</h2>
                  <div className="pbmit-heading-desc text-gray-600 text-sm">
                    We had technical knowledge and physical abilities, important to practice and learn Mechanics
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4 w-full md:w-1/2 xl:w-1/3 px-4 mb-6">
            <div className="pbmit-ihbox-style-1">
              <div className="pbmit-ihbox-headingicon items-start space-x-4">
                <div className="pbmit-ihbox-icon">
                  <div className="pbmit-ihbox-icon-wrapper pbmit-icon-type-icon text-4xl text-blue-600">
                    <i className="pbmit-karsfix-icon pbmit-karsfix-icon-nut" />
                  </div>
                </div>
                <div className="pbmit-ihbox-contents">
                  <h2 className="pbmit-element-title text-lg font-semibold mb-2">Best quality parts</h2>
                  <div className="pbmit-heading-desc text-gray-600 text-sm">
                    Choosing the right equipment for your auto can spell the difference between other service
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4 w-full md:w-1/2 xl:w-1/3 px-4 mb-6">
            <div className="pbmit-ihbox-style-1">
              <div className="pbmit-ihbox-headingicon items-start space-x-4">
                <div className="pbmit-ihbox-icon">
                  <div className="pbmit-ihbox-icon-wrapper pbmit-icon-type-icon text-4xl text-blue-600">
                    <i className="pbmit-karsfix-icon pbmit-karsfix-icon-car-lifter" />
                  </div>
                </div>
                <div className="pbmit-ihbox-contents">
                  <h2 className="pbmit-element-title text-lg font-semibold mb-2">Quality Equipment</h2>
                  <div className="pbmit-heading-desc text-gray-600 text-sm">
                    Our experienced technicians arrive equipped with the necessary tools and expertise for 24/7
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-xl">
        <div className="lg:container px-2 mx-auto lg:flex lg:flex-wrap items-center">
          <div className="w-full md:w-7/12">
            <div className="pbmit-heading-subheading animation-style2">
              <h4 className="pbmit-subtitle"> Our Services </h4>
              <h2 className="pbmit-title">
                We offer a <span className="pbmit-global-color">wide range</span> of <br /> car services
              </h2>
            </div>
          </div>
          <div className="w-full md:w-5/12 text-right"></div>
        </div>
        <div className="lg:container mx-auto px-4">
          <div className="pbmit-element-posts-wrapper row flex flex-wrap -mx-4">
            <article className="pbmit-service-style-1 col-md-4 w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="pbminfotech-post-item bg-white rounded-lg shadow-md overflow-hidden">
                <div className="pbmit-box-content-wrap">
                  <div className="pbmit-service-image-wrapper relative">
                    <div className="pbmit-featured-img-wrapper">
                      <div className="pbmit-featured-wrapper">
                        <img src={ExperiencedStaff} className="w-full h-auto object-cover" alt="" />
                      </div>
                    </div>
                    <a className="pbmit-link absolute inset-0" href="service-details.html" />
                  </div>
                  <div className="pbmit-content-box p-4">
                    <div className="pbminfotech-box-number text-gray-400 text-xl font-bold">01</div>
                    <div className="pbmit-serv-cat text-sm text-blue-600 my-2">
                      <a href="services.html" rel="tag">
                        Accessories
                      </a>
                    </div>
                    <h3 className="pbmit-service-title text-lg font-semibold mb-2">
                      <a href="service-details.html" className="hover:text-blue-600">
                        Tyre Services
                      </a>
                    </h3>
                    <div className="pbmit-service-description text-gray-600 text-sm">
                      <p>
                        Rotation, balancing, alignment, and new tyres
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article className="pbmit-service-style-1 col-md-4 w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="pbminfotech-post-item bg-white rounded-lg shadow-md overflow-hidden">
                <div className="pbmit-box-content-wrap">
                  <div className="pbmit-service-image-wrapper relative">
                    <div className="pbmit-featured-img-wrapper">
                      <div className="pbmit-featured-wrapper">
                        <img src={ExperiencedStaff} className="w-full h-auto object-cover" alt="" />
                      </div>
                    </div>

                    <a className="pbmit-link absolute inset-0" href="service-details.html" />
                  </div>
                  <div className="pbmit-content-box p-4">
                    <div className="pbminfotech-box-number text-gray-400 text-xl font-bold">02</div>
                    <div className="pbmit-serv-cat text-sm text-blue-600 my-2">
                      <a href="services.html" rel="tag">
                        Maintenance
                      </a>
                    </div>
                    <h3 className="pbmit-service-title text-lg font-semibold mb-2">
                      <a href="service-details.html" className="hover:text-blue-600">
                        Air Conditioning
                      </a>
                    </h3>
                    <div className="pbmit-service-description text-gray-600 text-sm">
                      <p>
                        Comfort in every drive.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article className="pbmit-service-style-1 col-md-4 w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="pbminfotech-post-item bg-white rounded-lg shadow-md overflow-hidden">
                <div className="pbmit-box-content-wrap">
                  <div className="pbmit-service-image-wrapper relative">
                    <div className="pbmit-featured-img-wrapper">
                      <div className="pbmit-featured-wrapper">
                        <img src={QualityProducts} className="w-full h-auto object-cover" alt="" />
                      </div>
                    </div>

                    <a className="pbmit-link absolute inset-0" href="service-details.html" />
                  </div>
                  <div className="pbmit-content-box p-4">
                    <div className="pbminfotech-box-number text-gray-400 text-xl font-bold">03</div>
                    <div className="pbmit-serv-cat text-sm text-blue-600 my-2">
                      <a href="services.html" rel="tag">
                        Repair
                      </a>
                    </div>
                    <h3 className="pbmit-service-title text-lg font-semibold mb-2">
                      <a href="service-details.html" className="hover:text-blue-600">
                        Oil Change & Lubrication
                      </a>
                    </h3>
                    <div className="pbmit-service-description text-gray-600 text-sm">
                      <p>
                        Keep your engine smooth and efficient.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article className="pbmit-service-style-1 col-md-4 w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="pbminfotech-post-item bg-white rounded-lg shadow-md overflow-hidden">
                <div className="pbmit-box-content-wrap">
                  <div className="pbmit-service-image-wrapper relative">
                    <div className="pbmit-featured-img-wrapper">
                      <div className="pbmit-featured-wrapper">
                        <img src={QualityProducts} className="w-full h-auto object-cover" alt="" />
                      </div>
                    </div>

                    <a className="pbmit-link absolute inset-0" href="service-details.html" />
                  </div>
                  <div className="pbmit-content-box p-4">
                    <div className="pbminfotech-box-number text-gray-400 text-xl font-bold">03</div>
                    <div className="pbmit-serv-cat text-sm text-blue-600 my-2">
                      <a href="services.html" rel="tag">
                        Repair
                      </a>
                    </div>
                    <h3 className="pbmit-service-title text-lg font-semibold mb-2">
                      <a href="service-details.html" className="hover:text-blue-600">
                        Transmission Services
                      </a>
                    </h3>
                    <div className="pbmit-service-description text-gray-600 text-sm">
                      <p>
                        From fluid changes to overhauls.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article className="pbmit-service-style-1 col-md-4 w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="pbminfotech-post-item bg-white rounded-lg shadow-md overflow-hidden">
                <div className="pbmit-box-content-wrap">
                  <div className="pbmit-service-image-wrapper relative">
                    <div className="pbmit-featured-img-wrapper">
                      <div className="pbmit-featured-wrapper">
                        <img src={QualityProducts} className="w-full h-auto object-cover" alt="" />
                      </div>
                    </div>

                    <a className="pbmit-link absolute inset-0" href="service-details.html" />
                  </div>
                  <div className="pbmit-content-box p-4">
                    <div className="pbminfotech-box-number text-gray-400 text-xl font-bold">03</div>
                    <div className="pbmit-serv-cat text-sm text-blue-600 my-2">
                      <a href="services.html" rel="tag">
                        Repair
                      </a>
                    </div>
                    <h3 className="pbmit-service-title text-lg font-semibold mb-2">
                      <a href="service-details.html" className="hover:text-blue-600">
                        Brake Services
                      </a>
                    </h3>
                    <div className="pbmit-service-description text-gray-600 text-sm">
                      <p>
                        Inspections, replacements, and safety checks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <article className="pbmit-service-style-1 col-md-4 w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="pbminfotech-post-item bg-white rounded-lg shadow-md overflow-hidden">
                <div className="pbmit-box-content-wrap">
                  <div className="pbmit-service-image-wrapper relative">
                    <div className="pbmit-featured-img-wrapper">
                      <div className="pbmit-featured-wrapper">
                        <img src={QualityProducts} className="w-full h-auto object-cover" alt="" />
                      </div>
                    </div>

                    <a className="pbmit-link absolute inset-0" href="service-details.html" />
                  </div>
                  <div className="pbmit-content-box p-4">
                    <div className="pbminfotech-box-number text-gray-400 text-xl font-bold">03</div>
                    <div className="pbmit-serv-cat text-sm text-blue-600 my-2">
                      <a href="services.html" rel="tag">
                        Repair
                      </a>
                    </div>
                    <h3 className="pbmit-service-title text-lg font-semibold mb-2">
                      <a href="service-details.html" className="hover:text-blue-600">
                        Suspension & Steering Repairs
                      </a>
                    </h3>
                    <div className="pbmit-service-description text-gray-600 text-sm">
                      <p>
                       For a smooth and safe ride.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article className="pbmit-service-style-1 col-md-4 w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="pbminfotech-post-item bg-white rounded-lg shadow-md overflow-hidden">
                <div className="pbmit-box-content-wrap">
                  <div className="pbmit-service-image-wrapper relative">
                    <div className="pbmit-featured-img-wrapper">
                      <div className="pbmit-featured-wrapper">
                        <img src={QualityProducts} className="w-full h-auto object-cover" alt="" />
                      </div>
                    </div>

                    <a className="pbmit-link absolute inset-0" href="service-details.html" />
                  </div>
                  <div className="pbmit-content-box p-4">
                    <div className="pbminfotech-box-number text-gray-400 text-xl font-bold">03</div>
                    <div className="pbmit-serv-cat text-sm text-blue-600 my-2">
                      <a href="services.html" rel="tag">
                        Repair
                      </a>
                    </div>
                    <h3 className="pbmit-service-title text-lg font-semibold mb-2">
                      <a href="service-details.html" className="hover:text-blue-600">
                        Battery Testing & Replacement
                      </a>
                    </h3>
                    <div className="pbmit-service-description text-gray-600 text-sm">
                      <p>
                       Reliable power for every start.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article className="pbmit-service-style-1 col-md-4 w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="pbminfotech-post-item bg-white rounded-lg shadow-md overflow-hidden">
                <div className="pbmit-box-content-wrap">
                  <div className="pbmit-service-image-wrapper relative">
                    <div className="pbmit-featured-img-wrapper">
                      <div className="pbmit-featured-wrapper">
                        <img src={QualityProducts} className="w-full h-auto object-cover" alt="" />
                      </div>
                    </div>

                    <a className="pbmit-link absolute inset-0" href="service-details.html" />
                  </div>
                  <div className="pbmit-content-box p-4">
                    <div className="pbminfotech-box-number text-gray-400 text-xl font-bold">03</div>
                    <div className="pbmit-serv-cat text-sm text-blue-600 my-2">
                      <a href="services.html" rel="tag">
                        Repair
                      </a>
                    </div>
                    <h3 className="pbmit-service-title text-lg font-semibold mb-2">
                      <a href="service-details.html" className="hover:text-blue-600">
                        Engine Diagnostics
                      </a>
                    </h3>
                    <div className="pbmit-service-description text-gray-600 text-sm">
                      <p>
                        Accurate fault detection and professional
repairs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Cta */}
      <section className="lg:mb-40 mb-20">
        <div className="container mx-auto px-0 xl:px-3">
          <div className="appointment-two-bg bg-blue-600 p-6 rounded-lg">
            <div className="row flex flex-wrap -mx-4 items-center">
              <div className="col-md-12 col-xl-8 w-full xl:w-2/3 px-4 mb-6 xl:mb-0">
                <div className="pbmit-heading-subheading white-text mb-3 animation-style4">
                  <h4 className="pbmit-subtitle text-white text-lg mb-2">Limited Period Offer</h4>
                  <h2 className="pbmit-title text-white text-3xl font-bold">
                   Book your service today and drive with confidence!                  </h2>
                </div>
                <a
                  className="pbmit-btn pbmit-btn-hover-white inline-flex items-center mt-4 px-6 py-3 border border-white text-white font-medium rounded hover:bg-white hover:text-blue-600"
                  href="contact-us.html">
                  <span className="pbmit-button-content-wrapper flex items-center">
                    <span className="pbmit-button-icon mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22.76" height="22.76" viewBox="0 0 22.76 22.76">
                        <title>black-arrow</title>
                        <path
                          d="M22.34,1A14.67,14.67,0,0,1,12,5.3,14.6,14.6,0,0,1,6.08,4.06,14.68,14.68,0,0,1,1.59,1"
                          transform="translate(-0.29 -0.29)"
                          fill="none"
                          stroke="#000"
                          strokeWidth={2}
                        />
                        <path
                          d="M22.34,1a14.67,14.67,0,0,0,0,20.75"
                          transform="translate(-0.29 -0.29)"
                          fill="none"
                          stroke="#000"
                          strokeWidth={2}
                        />
                        <path
                          d="M22.34,1,1,22.34"
                          transform="translate(-0.29 -0.29)"
                          fill="none"
                          stroke="#000"
                          strokeWidth={2}
                        />
                      </svg>
                    </span>
                    <span className="pbmit-button-text">Book Appointment</span>
                  </span>
                </a>
              </div>
              <div className="col-md-12 col-xl-4 w-full xl:w-1/3 px-4">
                <div className="ihbox-style-area e-transform">
                  <div className="pbmit-ihbox-style-7 bg-white p-4 rounded-lg shadow-md">
                    <div className="pbmit-ihbox-box flex items-center">
                      <div className="pbmit-icon-wrapper mr-4">
                        <div className="pbmit-ihbox-icon">
                          <div className="pbmit-ihbox-icon-wrapper pbmit-icon-type-icon text-3xl text-blue-600">
                            <i className="pbmit-karsfix-icon pbmit-karsfix-icon-telephone" />
                          </div>
                        </div>
                      </div>
                      <h2 className="pbmit-element-title text-lg font-semibold">
                        <a href="tel:+125-8845-5421" className="flex items-center text-gray-800 hover:text-blue-600">
                          <span className="pbmit-button-text mr-2">+125-8845-5421</span>
                          <span className="pbmit-button-icon-wrapper">
                            <span className="pbmit-button-icon">
                              <i className="pbmit-base-icon-black-arrow-1" />
                            </span>
                          </span>
                        </a>
                      </h2>
                    </div>
                    <div className="pbmit-content-wrap mt-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Offering;