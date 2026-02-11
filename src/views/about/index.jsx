import React, { useRef } from "react";
import { ChevronRight, ChevronLeft, Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import ExperiencedStaff from "../../assets/images/experienced-staff.webp";
import QualityProducts from "../../assets/images/quality-staff.webp";
import ModernEquipment from "../../assets/images/modern-equipment.webp";
import ArianaGreen from "../../assets/images/ariana-green.webp";
import AdelineWood from "../../assets/images/adeline-wood.webp";
import EvangelineLee from "../../assets/images/evangeline-lee.webp";
import TestimonialBg from "../../assets/images/testimonial-bg.webp";

const About = () => {
  const testimonialPrevRef = useRef(null);
  const testimonialNextRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Evangeline Lee",
      role: "Satisfied Client",
      text: "I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!",
      img: EvangelineLee,
    },
    {
      id: 2,
      name: "Adeline Wood",
      role: "Customer",
      text: "I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!",
      img: AdelineWood,
    },
    {
      id: 3,
      name: "Ariana Green",
      role: "Manager",
      text: "I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!",
      img: ArianaGreen,
    },
  ];
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
                    About Us
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
                      About Us
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Us */}
      <section className="section-xl">
        <div className="lg:container mx-auto lg:px-4 px-2">
          <div className="flex flex-wrap">
            <div className="w-full xl:w-1/2">
              <div className="pbmit-heading-subheading animation-style4">
                <h4 className="pbmit-subtitle"> About Us </h4>
                <h2 className="pbmit-title">
                  Top-quality craftsmanship with hands-on care tried and true.
                </h2>
              </div>
            </div>
            <div className="w-full xl:w-1/2">
              <p className="pbmit-text-editor">
                <b>At Auto Wrench Ltd,</b> we are more than just an auto garage
                – we are your trusted car care partner in Ungindoni, Kigamboni.
                With a team of skilled mechanics and technicians, we specialize
                in keeping your vehicle safe, reliable, and performing at its
                best.
              </p>
              <p className="pbmit-text-editor">
                Our mission is to provide top-quality automotive services with
                honesty, transparency, and a customer-first approach. Whether
                it’s a quick oil change, a complex engine repair, or a complete
                vehicle inspection, we handle every job with precision and care.
              </p>
              <p className="pbmit-text-editor">
                We pride ourselves on combining modern diagnostic tools with
                hands-on expertise to deliver solutions you can rely on. At Auto
                Wrench Ltd, your car is not just another job – it’s part of your
                everyday life, and we’re here to keep it running smoothly.
              </p>
            </div>
          </div>
          <div className="lg:flex pbmit-column-three gap-x-6">
            <article className="pbmit-static-box-style-1 w-full md:w-1/3">
              <div className="pbminfotech-post-item">
                <div className="pbmit-img-wrapper">
                  <img src={ExperiencedStaff} alt="" />
                  <div className="pbmit-title-wrapper">
                    <div className="pbmit-title-inner">
                      <h2 className="pbmit-staticbox-title">
                        <a href="#">
                          <span className="pbmit-button-text">
                            {" "}
                            Experienced Staff{" "}
                          </span>
                          <span className="pbmit-button-icon-wrapper">
                            <span className="pbmit-button-icon">
                              <i className="pbmit-base-icon-black-arrow-1" />
                            </span>
                          </span>
                        </a>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article className="pbmit-static-box-style-1 w-full md:w-1/3">
              <div className="pbminfotech-post-item">
                <div className="pbmit-img-wrapper">
                  <img src={QualityProducts} alt="" />
                  <div className="pbmit-title-wrapper">
                    <div className="pbmit-title-inner">
                      <h2 className="pbmit-staticbox-title">
                        <a href="#">
                          <span className="pbmit-button-text">
                            {" "}
                            Quality Products{" "}
                          </span>
                          <span className="pbmit-button-icon-wrapper">
                            <span className="pbmit-button-icon">
                              <i className="pbmit-base-icon-black-arrow-1" />
                            </span>
                          </span>
                        </a>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article className="pbmit-static-box-style-1 w-full md:w-1/3">
              <div className="pbminfotech-post-item">
                <div className="pbmit-img-wrapper">
                  <img src={ModernEquipment} alt="" />
                  <div className="pbmit-title-wrapper">
                    <div className="pbmit-title-inner">
                      <h2 className="pbmit-staticbox-title">
                        <a href="#">
                          <span className="pbmit-button-text">
                            {" "}
                            Modern Equipment{" "}
                          </span>
                          <span className="pbmit-button-icon-wrapper">
                            <span className="pbmit-button-icon">
                              <i className="pbmit-base-icon-black-arrow-1" />
                            </span>
                          </span>
                        </a>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section>
        <div className="pbmit-entry-content container mx-auto lg:mb-35 mb-20">
          <div className="pbmit-service_content px-2">
            <div className="pbmit-heading animation-style2">
              <h3 className="pbmit-title mb-3 text-2xl font-semibold">
                General Type Problems Service of Car
              </h3>
            </div>
            <p className="pbmit-firstletter mb-4">
              we have an efficient and experienced team that works diligently to
              ensure your car is in top condition. also check the lights and
              electrical system and other wear and tear parts in every{" "}
              <strong>
                <u>periodic maintenance service of the car.</u>
              </strong>{" "}
              We also have pickup and drop facilities for car servicing one of
              the best ways to identify any issues that may turn into major ones
              if left unchecked.
            </p>
            <p className="mb-6">
              Like any other parts in your car, the batteries also need to be{" "}
              <strong>
                <u>tested during car services to ensure</u>
              </strong>{" "}
              it performs optimally and lasts longer. Over time, your car
              battery can deteriorate and the car engine may have trouble
              starting up We can help restore clarity to old headlights or
              replace them if they have turned color Equipped with the latest
              technology and experienced technicians. If you’re experiencing
              unusual vibration or poor handling while driving or have low tyre
              threads and other problems, it’s time to get your car tires
              checked.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:gap-x-10 gap-x-5 mt-15 px-2">
            <img src={ExperiencedStaff} className="w-full rounded-2xl" />
            <img src={QualityProducts} className="w-full rounded-2xl" />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-xl ihbox-three-bg pbmit-bg-color-light">
        <div className="lg:container mx-auto lg:px-4 px-2">
          <div className="pbmit-heading-subheading text-center animation-style2">
            <h4 className="pbmit-subtitle"> How it Works </h4>
            <h2 className="pbmit-title">
              Get amazing car service in <br /> 4 simple{" "}
              <span className="pbmit-global-color">steps</span>
            </h2>
          </div>
          <div className="flex flex-wrap -mx-4">
            <article className="pbmit-miconheading-style-6 w-full sm:w-1/2 lg:w-1/4 px-4">
              <div className="pbmit-ihbox-style-6">
                <div className="pbmit-ihbox-headingicon">
                  <div className="pbmit-ihbox-wrap">
                    <div className="pbmit-ihbox-contents">
                      <h2 className="pbmit-element-title">Set schedule</h2>
                      <div className="pbmit-heading-desc">
                        You can book a car servicing directly from our website
                        or by calling or WhatsApp
                      </div>
                    </div>
                    <div className="pbmit-ihbox-icon">
                      <div className="pbmit-ihbox-icon-wrapper pbmit-icon-type-icon">
                        <i className="pbmit-karsfix-icon pbmit-karsfix-icon-events" />
                      </div>
                    </div>
                  </div>
                  <div className="pbmit-content-number">
                    <div className="pbmit-wrap-number">
                      <div className="pbmit-ihbox-box-number">01</div>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <article className="pbmit-miconheading-style-6 w-full sm:w-1/2 lg:w-1/4 px-4">
              <div className="pbmit-ihbox-style-6">
                <div className="pbmit-ihbox-headingicon">
                  <div className="pbmit-ihbox-wrap">
                    <div className="pbmit-ihbox-contents">
                      <h2 className="pbmit-element-title">Select Service</h2>
                      <div className="pbmit-heading-desc">
                        Choose Your Service From Our Wide Range Of Offerings
                        with affordable service price
                      </div>
                    </div>
                    <div className="pbmit-ihbox-icon">
                      <div className="pbmit-ihbox-icon-wrapper pbmit-icon-type-icon">
                        <i className="pbmit-karsfix-icon pbmit-karsfix-icon-report" />
                      </div>
                    </div>
                  </div>
                  <div className="pbmit-content-number">
                    <div className="pbmit-wrap-number">
                      <div className="pbmit-ihbox-box-number">02</div>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <article className="pbmit-miconheading-style-6 w-full sm:w-1/2 lg:w-1/4 px-4">
              <div className="pbmit-ihbox-style-6">
                <div className="pbmit-ihbox-headingicon">
                  <div className="pbmit-ihbox-wrap">
                    <div className="pbmit-ihbox-contents">
                      <h2 className="pbmit-element-title">Get things done</h2>
                      <div className="pbmit-heading-desc">
                        Will keep up the performance, increase the lifespan of
                        batteries and even save maintenance
                      </div>
                    </div>
                    <div className="pbmit-ihbox-icon">
                      <div className="pbmit-ihbox-icon-wrapper pbmit-icon-type-icon">
                        <i className="pbmit-karsfix-icon pbmit-karsfix-icon-repair" />
                      </div>
                    </div>
                  </div>
                  <div className="pbmit-content-number">
                    <div className="pbmit-wrap-number">
                      <div className="pbmit-ihbox-box-number">03</div>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <article className="pbmit-miconheading-style-6 w-full sm:w-1/2 lg:w-1/4 px-4">
              <div className="pbmit-ihbox-style-6">
                <div className="pbmit-ihbox-headingicon">
                  <div className="pbmit-ihbox-wrap">
                    <div className="pbmit-ihbox-contents">
                      <h2 className="pbmit-element-title">Get your car</h2>
                      <div className="pbmit-heading-desc">
                        We offer pick-up and drop-off facility for your car, so
                        you can continue with your schedule!
                      </div>
                    </div>
                    <div className="pbmit-ihbox-icon">
                      <div className="pbmit-ihbox-icon-wrapper pbmit-icon-type-icon">
                        <i className="pbmit-karsfix-icon pbmit-karsfix-icon-car-key" />
                      </div>
                    </div>
                  </div>
                  <div className="pbmit-content-number">
                    <div className="pbmit-wrap-number">
                      <div className="pbmit-ihbox-box-number">04</div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-lg">
        <div className="lg:container mx-auto lg:px-4 px-2">
          <div className="testimonial-three-area">
            <div className="flex flex-wrap items-center mb-6">
              <div className="tween-effect-style">
                <div className="pbmit-tween-effect-style-1">
                  <div className="pbmit-tween-effect">
                    <img src={TestimonialBg} className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-2/3 lg:w-7/12">
                <div className="pbmit-heading-subheading animation-style2">
                  <h4 className="pbmit-subtitle"> Testimonials </h4>
                  <h2 className="pbmit-title">
                    <span className="pbmit-global-color">Trusted</span> by
                    thousands of <br /> people & companies.
                  </h2>
                </div>
              </div>
              <div className="w-full md:w-1/3 lg:w-5/12 text-right">
                <div className="testimonial-swiper-arrow swiper-btn-custom gap-x-2.5 inline-flex flex-row-reverse border border-[#151313] rounded-4xl py-3 px-1 items-center">
                  <button
                    ref={testimonialPrevRef}
                    className="swiper-button-next-custom cursor-pointer pr-3"
                  >
                    <ChevronRight
                      strokeWidth={1.5}
                      className="text-[#151313]"
                    />
                  </button>
                  <span className="w-px h-5 bg-gray-300" />
                  <button
                    ref={testimonialNextRef}
                    className="swiper-button-prev-custom cursor-pointer pl-3"
                  >
                    <ChevronLeft strokeWidth={1.5} className="text-[#151313]" />
                  </button>
                </div>
              </div>
            </div>

            <Swiper
              modules={[Navigation, Autoplay]}
              loop={true}
              navigation={{
                prevEl: testimonialPrevRef.current,
                nextEl: testimonialNextRef.current,
              }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = testimonialPrevRef.current;
                swiper.params.navigation.nextEl = testimonialNextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              slidesPerView={2}
              spaceBetween={45}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 16 },
                640: { slidesPerView: 1.2, spaceBetween: 20 },
                768: { slidesPerView: 1.5, spaceBetween: 24 },
                1024: { slidesPerView: 2, spaceBetween: 32 },
              }}
            >
              {testimonials.map((t) => (
                <SwiperSlide key={t.id}>
                  <article className="pbmit-testimonial-style-2">
                    <div className="pbminfotech-post-item">
                      <div className="pbminfotech-box-desc">
                        <Quote size={50} className="text-[#b4aa12]" />
                        <blockquote className="pbminfotech-testimonial-text">
                          <p>{t.text}</p>
                        </blockquote>
                      </div>
                      <div className="pbmit-auther-content">
                        <h3 className="pbminfotech-box-title">{t.name}</h3>
                        <div className="pbminfotech-testimonial-detail">
                          {t.role}
                        </div>
                      </div>
                      <div className="pbmit-featured-img-wrapper">
                        <div className="pbmit-featured-wrapper">
                          <img
                            src={t.img}
                            className="w-full h-auto"
                            alt={t.name}
                          />
                        </div>
                      </div>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
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
                  <h4 className="pbmit-subtitle text-white text-lg mb-2">
                    Limited Period Offer
                  </h4>
                  <h2 className="pbmit-title text-white text-3xl font-bold">
                   Book your service today and drive with confidence!
                  </h2>
                </div>
                <a
                  className="pbmit-btn pbmit-btn-hover-white inline-flex items-center mt-4 px-6 py-3 border border-white text-white font-medium rounded hover:bg-white hover:text-blue-600"
                  href="contact-us.html"
                >
                  <span className="pbmit-button-content-wrapper flex items-center">
                    <span className="pbmit-button-icon mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22.76"
                        height="22.76"
                        viewBox="0 0 22.76 22.76"
                      >
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
                        <a
                          href="tel:+125-8845-5421"
                          className="flex items-center text-gray-800 hover:text-blue-600"
                        >
                          <span className="pbmit-button-text mr-2">
                            +125-8845-5421
                          </span>
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

export default About;
