import React from "react";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import Logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <>
      <footer className="site-footer pbmit-bg-color-blackish">
        <div className="pbmit-footer-big-area">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center">
              <div className="w-full xl:w-1/3">
                <div className="pbmit-footer-logo">
                  <img src={Logo} alt="Logo" />
                </div>
              </div>
              <div className="w-full xl:w-2/3">
                <form>
                  <div className="pbmit-footer-newsletter">
                    <h3 className="pbmit-footer-news-title">
                      Subscribe to Our <br />
                      Newsletter
                    </h3>
                    <div className="pbmit-news-wrap lg:flex">
                      <input
                        type="email"
                        className="form-control border border-gray-300 rounded px-4 py-2 w-full"
                        name="EMAIL"
                        placeholder="Enter Your Email Address"
                      />
                      <button className="pbmit-btn ml-2">
                        <span className="pbmit-button-content-wrapper flex items-center">
                          <span className="pbmit-button-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22.76"
                              height="22.76"
                              viewBox="0 0 22.76 22.76">
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
                          <span className="pbmit-button-text ml-2">Subscribe Now</span>
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="pbmit-footer-widget-area">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="pbmit-footer-widget-col-1 w-full md:w-3/9">
                <div className="widget">
                  <div className="textwidget">
                    <ul className="pbmit-social-links flex gap-x-2">
                      <li className="pbmit-social-li pbmit-social-facebook">
                        <a title="Facebook" href="#" target="_blank" rel="noopener">
                          <Facebook size={20} strokeWidth={1.5} />
                        </a>
                      </li>
                      <li className="pbmit-social-li pbmit-social-twitter">
                        <a title="Twitter" href="#" target="_blank" rel="noopener">
                          <Twitter size={20} strokeWidth={1.5} />
                        </a>
                      </li>
                      <li className="pbmit-social-li pbmit-social-instagram">
                        <a title="Instagram" href="#" target="_blank" rel="noopener">
                          <Instagram size={20} strokeWidth={1.5} />
                        </a>
                      </li>
                      <li className="pbmit-social-li pbmit-social-youtube">
                        <a title="Youtube" href="#" target="_blank" rel="noopener">
                          <Youtube size={20} strokeWidth={1.5} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="pbmit-footer-widget-col-2 w-full md:w-2/9">
                <div className="widget pbmit-two-column-menu">
                  <h2 className="widget-title">Useful Link</h2>
                  <div className="textwidget">
                    <ul>
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="/packages">Packages</a>
                      </li>
                      <li>
                        <a href="/about">About</a>
                      </li>
                      <li>
                        <a href="/contact">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="pbmit-footer-widget-col-3 w-full md:w-2/9">
                <div className="widget widget_text">
                  <h2 className="widget-title">Working Time</h2>
                  <div className="pbmit-timelist-wrapper">
                    <ul className="pbmit-timelist-list">
                      <li>
                        <span className="pbmit-timelist-time">Mon - Fri: 9.00am - 8.00pm</span>
                      </li>
                      <li>
                        <span className="pbmit-timelist-time">Saturday: 10.00am - 6.00pm</span>
                      </li>
                      <li>
                        <span className="pbmit-timelist-time">Sunday: 10.00am - 4.00pm</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="pbmit-footer-widget-col-4 w-full md:w-2/9">
                <aside className="widget">
                  <h2 className="widget-title">Say Hello</h2>
                  <div className="pbmit-contact-widget-lines">
                    <div className="pbmit-contact-widget-line pbmit-contact-widget-phone">+255 761 586 464</div>
                    <div className="pbmit-contact-widget-line pbmit-contact-widget-email">
                      <a href="mailto:info@autowrench.co.tz" className="__cf_email__">
                        info@autowrench.co.tz
                      </a>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
        <div className="pbmit-footer-text-area">
          <div className="container mx-auto px-4">
            <div className="pbmit-footer-text-inner">
              <div className="flex flex-wrap">
                <div className="w-full">
                  <div className="pbmit-footer-copyright-text-area">
                    {" "}
                    Copyright © 2025 <a href="/">Auto Wrench</a>, All Rights Reserved.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
