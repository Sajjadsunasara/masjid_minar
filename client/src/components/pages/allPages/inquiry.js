import React from "react";
import { NavLink } from "react-router-dom";

const Inquiry = () => {
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
          <form>
            <div className="py-14 px-6 sm:px-16 lg:px-24">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base/7 font-semibold text-gray-900">
                  Personal Information
                </h2>
                <p className="mt-1 text-sm/6 text-gray-600">
                  Use a permanent address where you can receive mail.
                </p>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      for="first-name"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      First name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autocomplete="given-name"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      for="last-name"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Last name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autocomplete="family-name"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      for="email"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autocomplete="email"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      for="mobile-number"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Mobile Number
                    </label>
                    <div className="mt-2">
                      <input
                        id="mobile-number"
                        name="mobile-number"
                        type="mobile-number"
                        autocomplete="mobile-number"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      for="Inquiry-Purpose"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Inquiry Purpose
                    </label>
                    <div className="mt-2 grid grid-cols-1">
                      <select
                        id="Inquiry-Purpose"
                        name="Inquiry-Purpose"
                        autocomplete="Inquiry-Purpose"
                        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      >
                        <option>Select Inquiry Purpose</option>
                        <option>Minar</option>
                        <option>Dealer</option>
                        <option>Distributor</option>
                        <option>Tender</option>
                        <option>Export/Import</option>
                        <option>Other</option>
                      </select>
                      <svg
                        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      for="country"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Country
                    </label>
                    <div className="mt-2 grid grid-cols-1">
                      <select
                        id="country"
                        name="country"
                        autocomplete="country-name"
                        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>India</option>
                        <option>Mexico</option>
                      </select>
                      <svg
                        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      for="street-address"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Street address
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="street-address"
                        id="street-address"
                        autocomplete="street-address"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2 sm:col-start-1">
                    <label
                      for="city"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      City
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="city"
                        id="city"
                        autocomplete="address-level2"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      for="region"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      State / Province
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="region"
                        id="region"
                        autocomplete="address-level1"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      for="postal-code"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      ZIP / Postal code
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autocomplete="postal-code"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  className="text-sm/6 font-semibold text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
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

export default Inquiry;
