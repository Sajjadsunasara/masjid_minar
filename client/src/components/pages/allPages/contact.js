import React from "react";
import heroImage from "../../images/social-media-section-bg.jpg";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <header className="bg-white sticky top-0">
        <section>
          <div className="hidden bg-[#19615D] text-white py-2 px-6 sm:px-16 lg:px-24 lg:flex flex-wrap justify-between items-center">
            <div className="flex gap-3 items-center">
              <img
                className="h-6 w-auto bg-[#EDE031] rounded-md"
                src={require("../../images/Harmain-Traders-logo-.png")}
                alt=""
              />
              <p>HARMAIN PRECAST INDUSTRIES</p>
            </div>
            <div className="flex gap-3 items-center">
              <i className="fa-solid fa-phone text-[#EDE031] text-xl"></i>
              <p>
                Sales Inquiry : +91 9881290998 / <br /> +91 9860836033 / +91
                9960577866
              </p>
            </div>
            <div className="flex gap-3 items-center xl:mt-0 mt-2">
              <i className="fa-solid fa-envelope-open-text text-[#EDE031] text-xl"></i>
              <p>Contact Email : dauvahanif786@gmail.com</p>
            </div>
          </div>
        </section>

        <nav
          className="mx-auto flex items-center justify-between py-5 px-6 sm:px-16 lg:px-24"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <NavLink to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-12 w-auto"
                src={require("../../images/HARMAIN-MINAR-LOGO.jpg")}
                alt=""
              />
            </NavLink>
          </div>

          <div className="flex lg:hidden">
            <button
              id="mobile-menu-button"
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
            <NavLink
              to="/about"
              className="text-sm/6 font-semibold text-gray-900"
            >
              ABOUT-US
            </NavLink>
            <NavLink to="/" className="text-sm/6 font-semibold text-gray-900">
              WORK GALLERY
            </NavLink>
            <div className="relative group">
              <NavLink to="/category">
                <button
                  id="products-button"
                  type="button"
                  className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900"
                >
                  PRODUCTS
                  <svg
                    className="w-5 h-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </NavLink>
              <div className="hidden group-hover:block absolute left-0 top-full mt-2 w-64 rounded-lg bg-white shadow-lg">
                <div className="p-4">
                  <a
                    href="#"
                    className="block p-2 text-sm font-semibold text-gray-900 hover:bg-gray-100"
                  >
                    MINAR
                  </a>
                  <a
                    href="#"
                    className="block p-2 text-sm font-semibold text-gray-900 hover:bg-gray-100"
                  >
                    GUMBAD
                  </a>
                  <a
                    href="#"
                    className="block p-2 text-sm font-semibold text-gray-900 hover:bg-gray-100"
                  >
                    MINAR GALLERY
                  </a>
                  <a
                    href="#"
                    className="block p-2 text-sm font-semibold text-gray-900 hover:bg-gray-100"
                  >
                    PARAPET JALI
                  </a>
                  <a
                    href="#"
                    className="block p-2 text-sm font-semibold text-gray-900 hover:bg-gray-100"
                  >
                    MARBLE MIMBER & WUZU STAND
                  </a>
                  <a
                    href="#"
                    className="block p-2 text-sm font-semibold text-gray-900 hover:bg-gray-100"
                  >
                    RCC MIMBER
                  </a>
                  <a
                    href="#"
                    className="block p-2 text-sm font-semibold text-gray-900 hover:bg-gray-100"
                  >
                    MUSALLA TILES
                  </a>
                </div>
              </div>
            </div>
            <NavLink
              to="/inquiry"
              className="text-sm/6 font-semibold text-gray-900"
            >
              INQUIRY
            </NavLink>
            <NavLink
              to="/contact"
              className="text-sm/6 font-semibold text-gray-900"
            >
              CONTACT-US
            </NavLink>
          </div>
        </nav>

        <div
          id="mobile-menu"
          className="hidden lg:hidden fixed inset-0 z-10 w-full bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src={require("../../images/HARMAIN-MINAR-LOGO.jpg")}
                alt=""
              />
            </a>
            <button
              id="close-menu-button"
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6">
            <a
              href="#"
              className="block px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-100"
            >
              ABOUT-US
            </a>
            <NavLink
              to="/"
              className="block px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-100"
            >
              WORK GALLERY
            </NavLink>

            <div>
              <button
                id="mobile-products-button"
                type="button"
                className="w-full px-3 py-2 flex items-center gap-x-1 text-left text-base font-semibold text-gray-900 hover:bg-gray-100"
              >
                PRODUCTS
                <svg
                  className="w-5 h-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              <div
                id="mobile-products-dropdown"
                className="hidden mt-2 space-y-1"
              >
                <a
                  href="#"
                  className="block px-6 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100"
                >
                  MINAR
                </a>
                <a
                  href="#"
                  className="block px-6 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100"
                >
                  GUMBAD
                </a>
                <a
                  href="#"
                  className="block px-6 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100"
                >
                  MINAR GALLERY
                </a>
                <a
                  href="#"
                  className="block px-6 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100"
                >
                  PARAPET JALI
                </a>
                <a
                  href="#"
                  className="block px-6 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100"
                >
                  MARBLE MIMBER & WUZU STAND
                </a>
                <a
                  href="#"
                  className="block px-6 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100"
                >
                  RCC MIMBER
                </a>
                <a
                  href="#"
                  className="block px-6 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100"
                >
                  MUSALLA TILES
                </a>
              </div>
            </div>
            <a
              href="#"
              className="block px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-100"
            >
              CONTACT-US
            </a>
          </div>
        </div>
      </header>

      <main>
        <section>
          <div className="bg-[#F3F7F7]">
            <div className="py-16 px-6 sm:px-16 lg:px-24 text-center">
              <h3 className="text-4xl font-bold">Harmain Traders</h3>
              <p className="text-[#666666] text-lg mt-8">
                <a className="text-[#2ea3f2]" href="">
                  Harmain Traders
                </a>
                is a Leading Manufacturer of
                <a className="text-[#2ea3f2]" href="">
                  All types of RCC Ready made masjid Minar
                </a>
                ,
                <a className="text-[#2ea3f2]" href="">
                  Masjid Gumbad
                </a>
                ,
                <a className="text-[#2ea3f2]" href="">
                  Masjid Mimbar
                </a>
                ,
                <a className="text-[#2ea3f2]" href="">
                  Mehrab (Qibla)
                </a>
                and Masjid Elevation Items, Etc.
              </p>
            </div>

            <div className="-mb-28 px-6 sm:px-16 lg:px-24 flex flex-wrap gap-4 justify-center items-center">
              <div className="lg:w-2/5">
                <img
                  className="rounded-lg shadow-lg"
                  src={require("../../images/stock.jpg")}
                  alt="stock side image"
                />
              </div>

              <div
                style={{ borderTop: "11px solid green" }}
                className="lg:w-2/5 h-[250px] bg-white md:px-9 px-4 xl:py-12 lg:py-2 py-10 rounded-lg shadow-lg mt-[30px] border-t-[11px] border-green-500"
              >

                <div className="flex items-center gap-5">
                  <i className="fa-solid fa-location-dot text-2xl"></i>
                  <p className="font-semibold text-[21px] w-4/3 leading-6">
                    Western Express Highway Vasai East – 401208 Mumbai
                    (Maharashtra-India)
                  </p>
                </div>
                <div className="flex items-center gap-5 mt-5">
                  <i className="fa-solid fa-phone text-2xl"></i>
                  <p className="font-semibold text-[21px] w-4/3 leading-6">
                    9881290998/9860836033
                  </p>
                </div>
                <div className="flex items-center gap-5 mt-5">
                  <i className="fa-solid fa-envelope-open-text text-2xl"></i>
                  <p className="font-semibold text-[21px] w-4/3 leading-6">
                    dauvahanif786@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div
            style={{ backgroundImage: `url(${heroImage})` }}
            className=" bg-cover pt-44 pb-16 px-6 sm:px-16 lg:px-24 text-center"
          >
            <h3 className="text-3xl text-white font-bold">Connect With Us</h3>
            <p className="text-[#EDEDED] mt-5">
              Harmain Masjid Minar is a Leading Brand in manufacturing of RCC
              Products and Construction Services it is a product of Harmain
              Traders. Connect us and Follow Us for Reguler Update about Aman
              Minar
            </p>
            <div className="mt-5 text-white space-x-1">
              <a
                href="https://facebook.com"
                target="_blank"
                aria-label="Facebook"
              >
                <i className="fa-brands fa-facebook-f text-2xl py-1 w-10 rounded bg-[#3B5998]"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                aria-label="Twitter"
              >
                <i className="fa-brands fa-twitter text-2xl py-1 w-10 rounded bg-[#000000]"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram text-2xl py-1 w-10 rounded bg-[#EA2C59]"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                aria-label="linkedin"
              >
                <i className="fa-brands fa-linkedin-in text-2xl py-1 w-10 rounded bg-[#007BB6]"></i>
              </a>
              <a
                href="https://web.whatsapp.com"
                target="_blank"
                aria-label="whatsapp"
              >
                <i className="fa-brands fa-whatsapp text-2xl py-1 w-10 rounded bg-[#25D366]"></i>
              </a>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-[#F3F7F7] py-16 px-6 sm:px-16 lg:px-24 flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7524.9181125697405!2d72.87587!3d19.435765!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a98315f7224b%3A0x3cad3abca0691728!2sHARMAIN%20PRECAST%20INDUSTRIES%20-%20Readymade%20Masjid%20Minar%2C%20RCC%20Masjid%20Minar!5e0!3m2!1sen!2sin!4v1733462181514!5m2!1sen!2sin"
                className="w-full h-64 sm:h-80 lg:h-[450px] shadow-lg"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="lg:w-1/2">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSekQ2L5Tw0a_7CpNY0ImiRqejyMUrKkVowiMLG4uPmuP6KjSw/viewform?embedded=true"
                className="w-full h-64 sm:h-80 lg:h-[450px]"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <section>
          <div className="bg-[#F3F7F7] py-12 px-6 sm:px-16 lg:px-24 sm:flex flex-wrap justify-between">
            <div className="lg:w-1/4 flex gap-5">
              <div className="text-[#F0E033]">
                <i className="fa-solid fa-phone text-2xl py-1 w-10 text-center rounded bg-[#19615D]"></i>
              </div>
              <div>
                <h5 className="text-xl font-bold">Contact Number</h5>
                <p className="font-medium">
                  +91 98812 90998 (India) <br />
                  +91 98608 36033 (India)
                </p>
              </div>
            </div>

            <div className="lg:w-1/4 mt-5 sm:mt-0 flex gap-5">
              <div className="text-[#F0E033]">
                <i className="fa-solid fa-envelope-open-text text-2xl py-1 w-10 text-center rounded bg-[#19615D]"></i>
              </div>
              <div>
                <h5 className="text-xl font-bold">Email Address</h5>
                <p className="font-medium">dauvahanif786@gmail.com</p>
              </div>
            </div>

            <div className="lg:w-1/4 mt-5 lg:mt-0 flex gap-5">
              <div className="text-[#F0E033]">
                <i className="fa-solid fa-location-dot text-2xl py-1 w-10 text-center rounded bg-[#19615D]"></i>
              </div>
              <div>
                <h5 className="text-xl font-bold">Location</h5>
                <p className="font-medium">
                  Western Express Highway Vasai East – 401208 Mumbai
                  (Maharashtra-India)
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="w-full h-auto bg-[#E7EFEE] py-6 px-6 sm:px-16 lg:px-24 block sm:flex flex-wrap justify-between">
            <p className="text-[#666666] font-medium">
              © Copyright 2022 Harmain Precast Industries. All Rights Reserved
            </p>
            <p className="text-[#666666] font-medium mt-5 lg:mt-0">
              Developed by – Valudas Tech Park
            </p>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Contact;
