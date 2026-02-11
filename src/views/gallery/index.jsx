import React from "react";
import { ChevronRight, Check, Phone } from "lucide-react";
import "../../assets/css/pricing.css";
import "../../assets/css/cta.css";

import ExperiencedStaff from "../../assets/images/experienced-staff.webp";
import QualityProducts from "../../assets/images/quality-staff.webp";
import BatteryReplacement from "../../assets/images/battery-replacement.webp";
import { FaUserAlt, FaCog, FaCarAlt } from "react-icons/fa";

const Gallery = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="pbmit-title-bar-wrapper">
        <div className="container mx-auto px-4">
          <div className="pbmit-title-bar-content">
            <div className="pbmit-title-bar-content-inner">
              <div className="pbmit-tbar">
                <div className="pbmit-tbar-inner container mx-auto px-4">
                  <h1 className="pbmit-tbar-title text-3xl font-bold">
                    Our Workshop
                  </h1>
                </div>
              </div>
              <div className="pbmit-breadcrumb">
                <div className="pbmit-breadcrumb-inner ">
                  <span>
                    <a
                      title=""
                      href="#"
                      className="home text-blue-600 hover:underline"
                    >
                      <span>Auto Wrench</span>
                    </a>
                  </span>
                  <span className="sep">
                    <ChevronRight
                      className="pbmit-base-icon-angle-right inline mx-2"
                      size={18}
                    />
                  </span>
                  <span>
                    <span className="post-root post post-post current-item">
                      Our Workshop
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

   {/* Our Garage Highlights */}
<section className="section">
  <div className="row pt-4 lg:flex gap-x-8 lg:container mx-auto">

    {/* Expert Mechanics */}
    <div className="col-md-6 col-xl-4 w-full md:w-1/2 xl:w-1/3 px-4 mb-6">
      <div className="pbmit-ihbox-style-1">
        <div className="pbmit-ihbox-headingicon items-start space-x-4">
          <div className="pbmit-ihbox-icon">
            <div className="pbmit-ihbox-icon-wrapper pbmit-icon-type-icon text-4xl text-blue-600">
              <FaUserAlt className="pbmit-karsfix-icon pbmit-karsfix-icon-worker" />
            </div>
          </div>
          <div className="pbmit-ihbox-contents">
            <h2 className="pbmit-element-title text-lg font-semibold mb-2">
              Expert Mechanics
            </h2>
            <div className="pbmit-heading-desc text-gray-600 text-sm">
              Our garage is staffed with highly trained professionals who
              diagnose and repair vehicles quickly, accurately, and reliably.
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Genuine Parts */}
    <div className="col-md-6 col-xl-4 w-full md:w-1/2 xl:w-1/3 px-4 mb-6">
      <div className="pbmit-ihbox-style-1">
        <div className="pbmit-ihbox-headingicon items-start space-x-4">
          <div className="pbmit-ihbox-icon">
            <div className="pbmit-ihbox-icon-wrapper pbmit-icon-type-icon text-4xl text-blue-600">
              <FaCog className="pbmit-karsfix-icon pbmit-karsfix-icon-nut" />
            </div>
          </div>
          <div className="pbmit-ihbox-contents">
            <h2 className="pbmit-element-title text-lg font-semibold mb-2">
              Genuine Parts
            </h2>
            <div className="pbmit-heading-desc text-gray-600 text-sm">
              We use only approved and high-quality spare parts to ensure long
              life, safety, and peak performance for your vehicle.
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Modern Equipment */}
    <div className="col-md-6 col-xl-4 w-full md:w-1/2 xl:w-1/3 px-4 mb-6">
      <div className="pbmit-ihbox-style-1">
        <div className="pbmit-ihbox-headingicon items-start space-x-4">
          <div className="pbmit-ihbox-icon">
            <div className="pbmit-ihbox-icon-wrapper pbmit-icon-type-icon text-4xl text-blue-600">
              <FaCarAlt className="pbmit-karsfix-icon pbmit-karsfix-icon-car-lifter" />
            </div>
          </div>
          <div className="pbmit-ihbox-contents">
            <h2 className="pbmit-element-title text-lg font-semibold mb-2">
              Advanced Equipment
            </h2>
            <div className="pbmit-heading-desc text-gray-600 text-sm">
              Our garage is fully equipped with modern tools and diagnostic
              systems to handle all types of servicing and complex repairs.
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>


      {/* Garage */}
    <section className="section-xl">
  <div className="lg:container px-2 mx-auto lg:flex lg:flex-wrap items-center">
    <div className="w-full md:w-7/12">
      <div className="pbmit-heading-subheading animation-style2">
        <h4 className="pbmit-subtitle"> Our Garage </h4>
        <h2 className="pbmit-title">
          Trusted <span className="pbmit-global-color">auto care</span> <br />
          under one roof
        </h2>
      </div>
    </div>
    <div className="w-full md:w-5/12 text-right"></div>
  </div>

  <div className="lg:container mx-auto px-4">
    <div className="pbmit-element-posts-wrapper row flex flex-wrap -mx-4">

      {/* Tyre Services */}
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
              <div className="pbmit-serv-cat text-sm text-blue-600 my-2">Wheels & Tyres</div>
              <h3 className="pbmit-service-title text-lg font-semibold mb-2">
                Tyre Services
              </h3>
              <div className="pbmit-service-description text-gray-600 text-sm">
                Professional tyre replacement, balancing, rotation, and pressure checks for a safer and smoother drive.
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Battery */}
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
              <div className="pbminfotech-box-number text-gray-400 text-xl font-bold">02</div>
              <div className="pbmit-serv-cat text-sm text-blue-600 my-2">Electrical</div>
              <h3 className="pbmit-service-title text-lg font-semibold mb-2">
                Battery Testing & Replacement
              </h3>
              <div className="pbmit-service-description text-gray-600 text-sm">
                Complete battery testing, charging, and replacement to keep your car starting reliably every time.
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Diagnostics */}
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
              <div className="pbmit-serv-cat text-sm text-blue-600 my-2">Diagnostics</div>
              <h3 className="pbmit-service-title text-lg font-semibold mb-2">
                Engine Diagnostics
              </h3>
              <div className="pbmit-service-description text-gray-600 text-sm">
                Advanced computer diagnostics to quickly identify engine and system issues before they become costly.
              </div>
            </div>
          </div>
        </div>
      </article>

    </div>
  </div>
</section>


      {/* Team */}
     <section className="section-xl">
  <div className="lg:container px-2 mx-auto lg:flex lg:flex-wrap items-center">
    <div className="w-full md:w-7/12">
      <div className="pbmit-heading-subheading animation-style2">
        <h4 className="pbmit-subtitle"> Our Team </h4>
        <h2 className="pbmit-title">
          Meet our <span className="pbmit-global-color">expert</span> <br />
          technicians & specialists
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
              <a className="pbmit-link absolute inset-0" href="#" />
            </div>
            <div className="pbmit-content-box p-4">
              <div className="pbminfotech-box-number text-gray-400 text-xl font-bold">01</div>
              <div className="pbmit-serv-cat text-sm text-blue-600 my-2">Lead Mechanic</div>
              <h3 className="pbmit-service-title text-lg font-semibold mb-2">
                Senior Technician
              </h3>
              <div className="pbmit-service-description text-gray-600 text-sm">
                Over 10 years of experience in engine diagnostics, mechanical repairs, and customer service excellence.
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
              <a className="pbmit-link absolute inset-0" href="#" />
            </div>
            <div className="pbmit-content-box p-4">
              <div className="pbminfotech-box-number text-gray-400 text-xl font-bold">02</div>
              <div className="pbmit-serv-cat text-sm text-blue-600 my-2">AC Specialist</div>
              <h3 className="pbmit-service-title text-lg font-semibold mb-2">
                Climate Control Expert
              </h3>
              <div className="pbmit-service-description text-gray-600 text-sm">
                Specializes in air conditioning systems, cooling performance, and full climate diagnostics.
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
              <a className="pbmit-link absolute inset-0" href="#" />
            </div>
            <div className="pbmit-content-box p-4">
              <div className="pbminfotech-box-number text-gray-400 text-xl font-bold">03</div>
              <div className="pbmit-serv-cat text-sm text-blue-600 my-2">Engine Specialist</div>
              <h3 className="pbmit-service-title text-lg font-semibold mb-2">
                Engine & Oil Expert
              </h3>
              <div className="pbmit-service-description text-gray-600 text-sm">
                Expert in engine servicing, oil systems, and preventive maintenance for long-lasting performance.
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</section>

    </>
  );
};

export default Gallery;
