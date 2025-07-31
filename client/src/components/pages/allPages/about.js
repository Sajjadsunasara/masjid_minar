import React from "react";
import heroImage from "../../images/quick-contact-bg.jpeg";
import aboutcompanyImage from "../../images/about-company-bg.png"
import { NavLink } from "react-router-dom";
const About = () => {
  return (
    <body>
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
                <NavLink
                to="/about"
                className="block px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-100"
                >
                ABOUT-US
                </NavLink>
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
                <NavLink
                to="/contact"
                className="block px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-100"
                >
                CONTACT-US
                </NavLink>
            </div>
            </div>
        </header>

      <main>
        <section>
          <div
            style={{ backgroundImage: `url(${heroImage})` }}
            className=" bg-cover bg-center bg-black bg-opacity-70 bg-blend-overlay py-24 px-6 sm:px-16 lg:px-24 flex flex-wrap justify-between items-center"
          >
            <div className="lg:w-7/12">
              <h3 className="text-white text-5xl font-bold">
                FIND YOUR HIGH - QUALITY MINAR
              </h3>
              <p className="text-white text-lg mt-5">
                <a className="text-[#2ea3f2]" href="">
                  Harmain Precast Industries
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
              <button className="bg-[#F0E033] hover:bg-[#facc15] mt-6 px-6 py-2 font-bold rounded">
                BROWSE PRODUCTS
              </button>
            </div>
            <div className="bg-[#19615D] text-white lg:w-1/3 mt-7 lg:mt-0 p-7">
              <h5 className="text-2xl font-semibold">Quick Contact!</h5>
              <p className="mt-4">Call: (+91)9881290998</p>
              <a href="">Email: dauvahanif786@gmail.com</a>
              <p>
                Visit: Western Express Highway Vasai (East)– 401208 Mumbai
                (Maharashtra)
              </p>
              <button className="bg-[#F0E033] hover:bg-[#facc15] mt-5 px-6 py-2 font-semibold rounded text-black">
                Register for Free
              </button>
            </div>
          </div>
        </section>

        <section>
          <div  style={{ backgroundImage: `url(${aboutcompanyImage})` }} className=" bg-cover py-16 px-6 sm:px-16 lg:px-24 flex flex-wrap justify-between items-center">
            <div className="lg:w-[30%] bg-[#E7E7E7] p-6 text-center rounded-lg shadow shadow-gray-500">
              <i className="fa-solid fa-mosque text-4xl"></i>
              <h5 className="mt-7 text-lg font-bold">ABOUT HARMAIN TRADERS</h5>
              <p className="mt-4 text-[#666666]">
                <a className="text-[#2ea3f2]" href="">
                  Harmain Precast Industries
                </a>
                Products is one of the renowned manufacturers of
                <a className="text-[#2ea3f2]" href="">
                  ready made RCC Minars for masjids
                </a>
                across entire India.
              </p>
              <button className="bg-[#F0E033] hover:bg-[#facc15] mt-7 px-6 py-2 font-semibold rounded ">
                LISTINGS
              </button>
            </div>
            <div className="lg:w-[30%] bg-[#E7E7E7] p-6 mt-5 lg:mt-0 text-center rounded-lg shadow shadow-gray-500">
              <i className="fa-solid fa-place-of-worship text-4xl"></i>
              <h5 className="mt-7 text-lg font-bold">COMPANY PROFILE</h5>
              <p className="mt-4 text-[#666666]">
                <a className="text-[#2ea3f2]" href="">
                  Harmain Precast Industries
                </a>
                is largest
                <a className="text-[#2ea3f2]" href="">
                  RCC Minar Products
                </a>
                ,
                <a className="text-[#2ea3f2]" href="">
                  RCC Jali For Masjids
                </a>
                ,
                <a className="text-[#2ea3f2]" href="">
                  Masjids Boundary wall Manufacturer
                </a>
                , Supplier and Stockiest in India.
              </p>
              <button className="bg-[#F0E033] hover:bg-[#facc15] mt-7 px-6 py-2 font-semibold rounded ">
                LISTINGS
              </button>
            </div>
            <div className="lg:w-[30%] bg-[#E7E7E7] p-6 mt-5 lg:mt-0 text-center rounded-lg shadow shadow-gray-500">
              <i className="fa-solid fa-web-awesome text-4xl"></i>
              <h5 className="mt-7 text-lg font-bold">QUALITY ASSURANCE</h5>
              <p className="mt-4 text-[#666666]">
                Being An
                <a className="text-[#2ea3f2]" href="">
                  ISO Certified Company
                </a>
                ; We Have Developed A Total Quality Management Where We Keep
                Watching On Every Aspect…
              </p>
              <button className="bg-[#F0E033] hover:bg-[#facc15] mt-7 px-6 py-2 font-semibold rounded ">
                MORE INFO
              </button>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-[#F3F7F7] py-16 px-6 sm:px-16 lg:px-24 flex flex-wrap gap-4 justify-center items-center">
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
        </section>

        <section>
          <div className="py-16 px-6 sm:px-16 lg:px-24 flex flex-wrap justify-between items-center">
            <div className="lg:w-[47%]">
              <img
                src={require("../../images/manufacturing.jpg")}
                alt="manufacturing unit"
              />
            </div>
            <div className="lg:w-[47%] mt-6 lg:mt-0">
              <h3 className="text-4xl text-center font-medium">
                Harmain Precast Industries Manufacturing Unit
              </h3>
              <p className="mt-5">
                We have our own
                <a className="text-[#2ea3f2]" href="">
                  RCC Minar
                </a>
                manufacturing unit in Vasai (EAST) MAHARASHTRA. Harmain Precast
                Industries. Cement Product having its presence in
                <a className="text-[#2ea3f2]" href="">
                  RCC Minar
                </a>
                construction and concrete minar product manufacturing was
                established in 1983 by concrete technologists with a mission to
                provide environment friendly, good quality
                <a className="text-[#2ea3f2]" href="">
                  RCC Minar
                </a>
                & RCC construction services and concrete products in large
                quantity to the construction industry to ensure timely
                completion of project.
              </p>
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
    </body>
  );
};

export default About;
