import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/allPages/home";
import About from "./components/pages/allPages/about";
import Inquiry from "./components/pages/allPages/inquiry";
import Contact from "./components/pages/allPages/contact";
import Category from "./components/pages/allPages/category";
import CategoryProduct from "./components/pages/allPages/categoryProduct";

import Login from "./components/admin/login";
import PrivateRouter from "./components/admin/PrivateRouter";
import AddProduct from "./components/admin/addProduct";
import Dashboard from "./components/admin/dashboard";
import Product from "./components/admin/product";
import User from "./components/admin/user";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/inquiry" element={<Inquiry />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/category" element={<Category />} />
          <Route path="/login" element={<Login />} />
          <Route path="/categoryproduct/:category_id" element={<CategoryProduct />} />

          <Route
            path="/addproduct"
            element={
              <PrivateRouter>
                <AddProduct />
              </PrivateRouter>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRouter>
                <Dashboard />
              </PrivateRouter>
            }
          />
          <Route
            path="/product"
            element={
              <PrivateRouter>
                <Product />
              </PrivateRouter>
            }
          />
          <Route
            path="/user"
            element={
              <PrivateRouter>
                <User />
              </PrivateRouter>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
