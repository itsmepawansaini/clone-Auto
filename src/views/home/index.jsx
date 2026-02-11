import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Check,
  Quote,
  Car,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Modal from "../../components/Modal";
import "swiper/css";
import "swiper/css/navigation";
import "../../assets/css/process.css";
import "../../assets/css/counter.css";
import "../../assets/css/service.css";
import "../../assets/css/pricing.css";
import "../../assets/css/about.css";
import "../../assets/css/testimonials.css";

import Maintenance from "../../assets/images/maintenance.webp";
import ExperiencedStaff from "../../assets/images/experienced-staff.webp";
import QualityProducts from "../../assets/images/quality-staff.webp";
import ModernEquipment from "../../assets/images/modern-equipment.webp";
import ArianaGreen from "../../assets/images/ariana-green.webp";
import AdelineWood from "../../assets/images/adeline-wood.webp";
import EvangelineLee from "../../assets/images/evangeline-lee.webp";
import TestimonialBg from "../../assets/images/testimonial-bg.webp";
import Hero from "../../assets/images/hero.png";
import HeroLight from "../../assets/images/hero-light2.png";
const Home = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const testimonialPrevRef = useRef(null);
  const testimonialNextRef = useRef(null);

  const slides = [
    {
      id: 1,
      number: "01",
      category: "Accessories",
      title: "Tyre Services",
      img: Maintenance,
      iconClass: "pbmit-karsfix-icon-repair",
      link: "service-details.html",
      catLink: "services.html",
    },
    {
      id: 2,
      number: "02",
      category: "Maintenance",
      title: "Air Conditioning",
      img: Maintenance,
      iconClass: "pbmit-karsfix-icon-tyre",
      link: "service-details.html",
      catLink: "services.html",
    },
    {
      id: 3,
      number: "03",
      category: "Maintenance",
      title: "Oil Change & Lubrication",
      img: Maintenance,
      iconClass: "pbmit-karsfix-icon-tyre",
      link: "service-details.html",
      catLink: "services.html",
    },
    {
      id: 4,
      number: "04",
      category: "Maintenance",
      title: "Transmission Services",
      img: Maintenance,
      iconClass: "pbmit-karsfix-icon-tyre",
      link: "service-details.html",
      catLink: "services.html",
    },
    {
      id: 5,
      number: "05",
      category: "Maintenance",
      title: "Brake Services",
      img: Maintenance,
      iconClass: "pbmit-karsfix-icon-tyre",
      link: "service-details.html",
      catLink: "services.html",
    },
    {
      id: 6,
      number: "06",
      category: "Maintenance",
      title: "Suspension & Steering Repairs",
      img: Maintenance,
      iconClass: "pbmit-karsfix-icon-tyre",
      link: "service-details.html",
      catLink: "services.html",
    },
    {
      id: 7,
      number: "05",
      category: "Maintenance",
      title: "Engine Diagnostics & Repairs",
      img: Maintenance,
      iconClass: "pbmit-karsfix-icon-tyre",
      link: "service-details.html",
      catLink: "services.html",
    },
    {
      id: 8,
      number: "06",
      category: "Maintenance",
      title: "General Vehicle Inspections",
      img: Maintenance,
      iconClass: "pbmit-karsfix-icon-tyre",
      link: "service-details.html",
      catLink: "services.html",
    },
  ];

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
 const pricingData = [
  {
    id: 1,
    title: "Basic Care Package",
    price: "120,000",
    features: [
      "Oil & filter change",
      "Battery check",
      "Tyre pressure & rotation",
      "Brake inspection"
    ],
    recommendation: "Recommended every 3000 to 5000 km.",
    isFeatured: false,
  },
  {
    id: 2,
    title: "Standard Service Package",
    price: "150,000",
    features: [
      "All Basic Care inclusions",
      "Engine diagnostics",
      "Suspension & steering check",
      "Air filter replacement"
    ],
    recommendation: "Recommended every 10,000 km",
    isFeatured: true, // This triggers the 'featured' CSS classes
  },
  {
    id: 3,
    title: "Comprehensive Service Package",
    price: "200,000",
    features: [
      "All Standard inclusions",
      "AC & heating inspection",
      "Exhaust system check",
      "Full safety inspection"
    ],
    recommendation: "Recommended every 20,000 km or before long trips",
    isFeatured: false,
  },
];

  return (
    <>
      {/* Hero */}
      <section className="bg-black section-xl heros">
        <div className="lg:flex lg:px-18 px-2 md:flex-row items-center md:justify-between gap-x-15">
          <div className="md:w-1/2 text-center md:text-left">
            <div className="pbmit-heading-subheading animation-style4">
              <h4 className="pbmit-subtitle"> Auto Wrench </h4>
              <h2 className="pbmit-title pb-4 hero-title">
                Welcome to Auto Wrench Ltd – Your Trusted Garage in Kigamboni.
              </h2>
              <p className="pbmit-text-editor hero-des">
                At Auto Wrench Ltd, we keep your car running safely, smoothly,
                and reliably. From quick routine maintenance to full mechanical
                repairs, our expert team in Ungindoni, Kigamboni is here to
                provide professional, affordable, and honest auto care
              </p>
            </div>

            <div className="flex justify-center md:justify-start gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="pbmit-btn inline-flex items-center cursor-pointer"
              >
                <span className="pbmit-button-content-wrapper flex items-center">
                  <span className="pbmit-button-text">Book Appointment</span>
                </span>
              </button>
            </div>
          </div>

         <div className="w-full md:w-1/2 mb-8 md:mb-0">
  <div className="relative group">
    {/* Normal image */}
    <img
      src={Hero}
      alt="Hero"
      className="w-full h-auto rounded-lg shadow-lg transition-opacity duration-300 group-hover:opacity-0"
    />

    {/* Hover image */}
    <img
      src={HeroLight}
      alt="Hero Light"
      className="w-full h-auto rounded-lg shadow-lg absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    />
  </div>
</div>
        </div>
      </section>
 
      {/* Why choose us */}
      <section className="section-xl about-sec-two">
        <div className="lg:container mx-auto lg:px-4 px-2 pbmit-col-stretched-yes pbmit-col-left">
          <div className="flex gap-x-20 whychoose">
            <div className="w-full xl:w-1/2 relative">
              <div className="pbmit-col-stretched-left">
                <div className="ihbox-style-area">
                  <div className="pbmit-ihbox-style-3">
                    <div className="pbmit-ihbox-headingicon">
                      <div className="pbmit-ihbox-wrap">
                        <div className="pbmit-ihbox-icon">
                          <div className="pbmit-ihbox-icon-wrapper pbmit-icon-type-icon">
                            <Car
                              strokeWidth={1}
                              size={45}
                              className="pbmit-karsfix-icon pbmit-karsfix-icon-automobile"
                            />
                          </div>
                        </div>
                        <div className="pbmit-ihbox-contents">
                          <h2 className="pbmit-element-title">
                            15 Years of <br /> Experience
                          </h2>
                        </div>
                      </div>

                      <div className="pbmit-sticky-corner pbmit-bottom-left-corner">
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 29 30"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M30 30V0C30 16 16 30 0 30H30Z"></path>
                        </svg>
                      </div>

                      <div className="pbmit-sticky-corner pbmit-top-right-corner">
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 29 30"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M30 30V0C30 16 16 30 0 30H30Z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full xl:w-1/2">
              <div className="about-two-content">
                <div className="pbmit-heading-subheading animation-style2">
                  <h4 className="pbmit-subtitle">Why choose us?</h4>
                  <h2 className="pbmit-title">
                    The <span className="pbmit-global-color">story</span> behind
                    service workshop
                  </h2>
                  <div className="pbmit-heading-desc">
                    We experiencing unusual vibration or poor handling while
                    driving or have low type threads and other problems, it’s
                    time to get your car tires checked. Maintaining and
                    repairing electric cars is slightly different
                  </div>
                </div>

                <div className="flex flex-wrap -mx-2">
                  <div className="w-full md:w-1/2 px-2">
                    <div className="pbmit-ihbox-style-4">
                      <div className="pbmit-ihbox-headingicon">
                        <div className="pbmit-ihbox-icon">
                          <div className="pbmit-ihbox-icon-wrapper pbmit-icon-type-icon">
                            <Car
                              strokeWidth={0.5}
                              size={45}
                              className="pbmit-karsfix-icon pbmit-karsfix-icon-automobile"
                            />
                          </div>
                        </div>
                        <div className="pbmit-ihbox-contents">
                          <h2 className="pbmit-element-title">
                            Skilled technicians
                          </h2>
                          <div className="pbmit-heading-desc">
                            We had technical knowledge and physical abilities,
                            practice and learn Mechanics
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-1/2 px-2 pt-4 md:pt-0">
                    <div className="pbmit-ihbox-style-4">
                      <div className="pbmit-ihbox-headingicon">
                        <div className="pbmit-ihbox-icon">
                          <div className="pbmit-ihbox-icon-wrapper pbmit-icon-type-icon">
                            <Car
                              strokeWidth={0.5}
                              size={45}
                              className="pbmit-karsfix-icon pbmit-karsfix-icon-automobile"
                            />
                          </div>
                        </div>
                        <div className="pbmit-ihbox-contents">
                          <h2 className="pbmit-element-title">
                            Best quality parts
                          </h2>
                          <div className="pbmit-heading-desc">
                            Choosing the right part for your auto can spell the
                            difference service
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a className="pbmit-btn mt-5 inline-block" href="/about">
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
                          strokeWidth="2"
                        />
                        <path
                          d="M22.34,1a14.67,14.67,0,0,0,0,20.75"
                          transform="translate(-0.29 -0.29)"
                          fill="none"
                          stroke="#000"
                          strokeWidth="2"
                        />
                        <path
                          d="M22.34,1,1,22.34"
                          transform="translate(-0.29 -0.29)"
                          fill="none"
                          stroke="#000"
                          strokeWidth="2"
                        />
                      </svg>
                    </span>
                    <span className="pbmit-button-text">Know More</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
     <section className="section-xl overflow-hidden">
  <div className="lg:container mx-auto lg:px-4 px-2">

    <div className="flex flex-col xl:flex-row gap-6 xl:gap-10 mb-10">
      <div className="w-full xl:w-1/2">
        <div className="pbmit-heading-subheading animation-style4 text-left">
          <h4 className="pbmit-subtitle"> About Us </h4>
          <h2 className="text-[28px] md:text-[40px] font-bold leading-tight">
            Top-quality craftsmanship with hands-on care tried and true.
          </h2>
        </div>
      </div>
      <div className="w-full xl:w-1/2">
        <p className="pbmit-text-editor text-[15px] leading-relaxed opacity-80 mb-4">
<b>At Auto Wrench Ltd,</b> we are more than just an auto garage – we are your trusted car
care partner in Ungindoni, Kigamboni. With a team of skilled mechanics and
technicians, we specialize in keeping your vehicle safe, reliable, and performing at
its best.        </p>
        <p className="pbmit-text-editor text-[15px] leading-relaxed opacity-80">
Our mission is to provide top-quality automotive services with honesty,
transparency, and a customer-first approach. Whether it’s a quick oil change, a
complex engine repair, or a complete vehicle inspection, we handle every job with
precision and care.        </p>
      </div>
    </div>

    <div className="flex flex-wrap lg:flex-nowrap pbmit-column-three gap-6">
      
      {/* Box 1 */}
      <article className="pbmit-static-box-style-1 w-full md:w-[calc(50%-12px)] lg:w-1/3">
        <div className="pbminfotech-post-item">
          <div className="pbmit-img-wrapper relative group overflow-hidden rounded-[30px]">
            <img src={ExperiencedStaff} alt="Experienced Staff" className="w-full h-auto transition-transform duration-500 group-hover:scale-105" />
            <div className="pbmit-title-wrapper absolute bottom-0 left-0 right-0 p-5 bg-white mx-auto w-fit rounded-t-[25px]">
              <div className="pbmit-title-inner">
                <h2 className="pbmit-staticbox-title text-[18px] font-bold">
                  <a href="#" className="flex items-center gap-2">
                    <span className="pbmit-button-text"> Experienced Staff </span>
                    <i className="pbmit-base-icon-black-arrow-1 text-[12px]" />
                  </a>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Box 2 */}
      <article className="pbmit-static-box-style-1 w-full md:w-[calc(50%-12px)] lg:w-1/3">
        <div className="pbminfotech-post-item">
          <div className="pbmit-img-wrapper relative group overflow-hidden rounded-[30px]">
            <img src={QualityProducts} alt="Quality Products" className="w-full h-auto transition-transform duration-500 group-hover:scale-105" />
            <div className="pbmit-title-wrapper absolute bottom-0 left-0 right-0 p-5 bg-white mx-auto w-fit rounded-t-[25px]">
              <div className="pbmit-title-inner">
                <h2 className="pbmit-staticbox-title text-[18px] font-bold">
                  <a href="#" className="flex items-center gap-2">
                    <span className="pbmit-button-text"> Quality Products </span>
                    <i className="pbmit-base-icon-black-arrow-1 text-[12px]" />
                  </a>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Box 3 */}
      <article className="pbmit-static-box-style-1 w-full md:w-full lg:w-1/3">
        <div className="pbminfotech-post-item">
          <div className="pbmit-img-wrapper relative group overflow-hidden rounded-[30px]">
            <img src={ModernEquipment} alt="Modern Equipment" className="w-full h-auto transition-transform duration-500 group-hover:scale-105" />
            <div className="pbmit-title-wrapper absolute bottom-0 left-0 right-0 p-5 bg-white mx-auto w-fit rounded-t-[25px]">
              <div className="pbmit-title-inner">
                <h2 className="pbmit-staticbox-title text-[18px] font-bold">
                  <a href="#" className="flex items-center gap-2">
                    <span className="pbmit-button-text"> Modern Equipment </span>
                    <i className="pbmit-base-icon-black-arrow-1 text-[12px]" />
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

      {/* Our Services */}
      <section className="section-lg-1 max-w-full overflow-hidden">
        <div className="lg:container px-2 pbmit-col-stretched-yes pbmit-col-right lg:px-4 mx-auto">
          {/* Heading Row */}
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-7/12">
              <div className="pbmit-heading-subheading animation-style2">
                <h4 className="pbmit-subtitle"> Our Services </h4>
                <h2 className="pbmit-title">
                  We offer a{" "}
                  <span className="pbmit-global-color">wide range</span> of{" "}
                  <br />
                  car services
                </h2>
              </div>
            </div>

            <div className="w-full md:w-5/12 text-right">
              <div className="service-two-swiper-arrow swiper-btn-custom gap-x-2.5 inline-flex flex-row-reverse border border-[#151313] rounded-4xl py-3 px-1 items-center">
                <button
                  ref={nextRef}
                  aria-label="Next"
                  className="swiper-button-next-custom cursor-pointer pr-3"
                >
                  <ChevronRight strokeWidth={1.5} className="text-[#151313]" />
                </button>

                <span className="w-px h-5 bg-gray-300" />

                <button
                  ref={prevRef}
                  aria-label="Prev"
                  className="swiper-button-prev-custom cursor-pointer pl-3"
                >
                  <ChevronLeft strokeWidth={1.5} className="text-[#151313]" />
                </button>
              </div>
            </div>
          </div>

          {/* Slider + stretched area */}
          <div className="pbmit-col-stretched-right mr-[-60px]">
            <Swiper
              modules={[Navigation, Autoplay]}
              loop={true}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              slidesPerView={3.6}
              spaceBetween={40}
              breakpoints={{
                320: { slidesPerView: 1.05, spaceBetween: 16 },
                640: { slidesPerView: 1.6, spaceBetween: 20 },
                768: { slidesPerView: 2.2, spaceBetween: 24 },
                1024: { slidesPerView: 3.2, spaceBetween: 32 },
                1280: { slidesPerView: 3.6, spaceBetween: 40 },
              }}
            >
              {slides.map((s) => (
                <SwiperSlide key={s.id}>
                  <article className="pbmit-service-style-2">
                    <div className="pbminfotech-post-item">
                      <div className="pbminfotech-box-content">
                        <div className="pbmit-service-image-wrapper relative">
                          <div className="pbmit-featured-img-wrapper">
                            <div className="pbmit-featured-wrapper">
                              <img
                                src={s.img}
                                className="w-full h-auto"
                                alt={s.title}
                              />
                            </div>
                          </div>

                          <div className="pbmit-service-btn-wrapper">
                            <a
                              className="pbmit-service-btn"
                              href={s.link}
                              title={s.title}
                            >
                              <span className="pbmit-button-icon">
                                <ChevronRight />
                              </span>
                            </a>
                          </div>

                          <a
                            className="pbmit-link"
                            href={s.link}
                            aria-hidden="true"
                          />
                        </div>

                        <div className="pbmit-service-icon">
                          <i className={`pbmit-karsfix-icon ${s.iconClass}`} />
                        </div>

                        <div className="pbmit-content-box">
                          <div className="pbminfotech-box-number">
                            {s.number}
                          </div>
                          <div className="pbmit-serv-cat">
                            <a href={s.catLink} rel="tag">
                              {s.category}
                            </a>
                          </div>
                          <h3 className="pbmit-service-title">
                            <a href={s.link}>{s.title}</a>
                          </h3>
                          <div className="pbmit-service-description">
                            <p>
                              Some routine car care tasks can be done at home,
                              while others may require a trained technician or
                              mechanic
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Button aligned properly */}
          {/* CTA text + centered button */}
          <div className="lg:container mx-auto px-4 mt-10 text-center">
            <p className="text-gray-700 text-base mb-4">
              Book your service today and drive with confidence!
            </p>

            <div className="flex justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="pbmit-btn inline-flex items-center cursor-pointer"
              >
                <span className="pbmit-button-content-wrapper flex items-center">
                  <span className="pbmit-button-text">
                    Book an Appointment now
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

{/* Pricing */}
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
            {pricingData.map((item) => (
              <div
                key={item.id}
                className={`pbmit-ptable-col w-full md:w-1/2 lg:w-1/3 ${
                  item.isFeatured ? "pbmit-pricing-table-featured-col" : ""
                }`}
              >
                <div className="pbmit-pricing-table-box">
                  <div className="pbmit-feature-wrap">
                    {/* Only show featured ribbon/wrapper if isFeatured is true */}
                    {item.isFeatured && <div className="pbmit-ptablebox-featured-w" />}
                  </div>
                  
                  <div className="pbmit-pricing-table-inner">
                    <div className="pbmit-head-wrap">
                      <h3 className="pbminfotech-ptable-heading">{item.title}</h3>
                      <div className="pbmit-price-wrapper">
                        <div className="pbmit-ptable-price-w">
                          <div className="pbminfotech-ptable-symbol">TZS</div>
                          <div className="pbminfotech-ptable-price">{item.price}</div>
                        </div>
                      </div>
                    </div>

                    <div className="pbmit-ptable-lines">
                      {item.features.map((feature, index) => (
                        <div key={index} className="pbmit-ptable-line">
                          <Check
                            className="ti-check inline mr-2"
                            size={22}
                            strokeWidth={1.5}
                          />
                          {feature}
                        </div>
                      ))}
                      <div className="pbmit-ptable-recommendation mt-4 inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                            {/* Recommended every 5,000 km */}
                            {item.recommendation}
                          </div>
                      {/* <h6 className={item.isFeatured ? "text-sp" : ""}>
                        {item.recommendation}
                      </h6> */}
                    </div>
                  </div>

                  <div className="pbmit-price-btn">
                    <a href="#" className="pbmit-button">
                      <span className="pbmit-button-text">Book Now</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* How It Works */}
      <section className="section-xl ihbox-three-bg pbmit-bg-color-light">
        <div className="lg:container mx-auto lg:px-2 px-2">
          <div className="pbmit-heading-subheading text-center animation-style2">
            <h4 className="pbmit-subtitle"> How it Works </h4>
            <h2 className="pbmit-title">
              Get amazing car service in <br /> 4 simple{" "}
              <span className="pbmit-global-color">steps</span>
            </h2>
          </div>
          <div className="flex flex-wrap -mx-4 lg:px-4">
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
        <div className="lg:container px-2 mx-auto lg:px-4">
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

      <Modal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  onSubmit={(data) => {
    setIsModalOpen(false);
    // setUserInfo(data);
    
    navigate("/packages"); 
  }}
/>
    </>
  );
};

export default Home;
