import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import "../../css/categoryProduct.css";

const CategoryProduct = () => {
  const { category_id } = useParams();
  const [products, setProducts] = useState([]);

  const fetchProductsByCategory = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/category-product/${category_id}`
      );
      setProducts(response.data.results);
    } catch (error) {
      console.error("Error fetching products:", error.message);
    }
  };

  useEffect(() => {
    fetchProductsByCategory();
  }, [category_id]);

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
          className="mx-auto flex items-center justify-between py-5 px-6 sm:px-16 lg:px-24 bg-[#C8CBCF]"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <NavLink to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-12 w-auto rounded"
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

      <div className="product-page">
        <div className="products">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <h2>{product.product_title}</h2>
              <img
                src={`../uploads/${product.product_image}`}
                alt={product.product_title}
                className="product-image"
              />
              <p>{product.prodct_description}</p>
              <p>Price: ${product.product_price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryProduct;
