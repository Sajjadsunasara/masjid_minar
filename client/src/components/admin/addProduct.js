import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/addProduct.css";
import Header from "./header";
import Sidebar from "./sidebar";
import { MainDashboard } from "./main-dashboard";
import axios from "axios";

const AddProduct = () => {
  const [insertCategory, setInsertCategory] = useState({
    product_title: "",
    category_id: "",
    product_image: null,
    prodct_description: "",
    product_price: "",
  });
  const [categoryData, setCategoryData] = useState([]);
  const getCategoryData = () => {
    axios
      .get("http://localhost:4000/categories")
      .then((response) => {
        setCategoryData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("product_title", insertCategory.product_title);
    formData.append("category_id", insertCategory.category_id);
    formData.append("product_image", insertCategory.product_image);
    formData.append("prodct_description", insertCategory.prodct_description);
    formData.append("product_price", insertCategory.product_price);

    try {
      await axios.post("http://localhost:4000/add-product", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Product added successfully!");
      setInsertCategory({
        product_title: "",
        product_image: null,
        prodct_description: "",
        product_price: "",
      });
    } catch (error) {
      console.error("Error adding product:", error.message);
      alert("Error adding product.");
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInsertCategory((prod) => ({
      ...prod,
      [name]: value,
    }));
  };

  const handleFile = (e) => {
    setInsertCategory((prod) => ({
      ...prod,
      product_image: e.target.files[0],
    }));
  };
  useEffect(() => {
    getCategoryData();
  }, []);

  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <MainDashboard>
          <div className="main_section">
            <h1>
              Add Category
              <NavLink to="/product">
                <i className="product-icon fa-brands fa-product-hunt"></i>
              </NavLink>
            </h1>

            <form
              className="add_product_form"
              onSubmit={handleSubmit}
              method="post"
            >
              <div className="form_group">
                <label htmlFor="product_title">Title :</label>
                <input
                  type="text"
                  id="product_title"
                  name="product_title"
                  placeholder="Enter Title..."
                  value={insertCategory.product_title}
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="form_group">
                <label htmlFor="product_image">Image:</label>
                <input
                  style={{ padding: "27px" }}
                  type="file"
                  id="product_image"
                  name="product_image"
                  placeholder="Choose Image File..."
                  onChange={handleFile}
                  required
                />
              </div>
              <div className="form_group">
                <label htmlFor="prodct_description">Description :</label>
                <input
                  type="text"
                  id="prodct_description"
                  name="prodct_description"
                  placeholder="Enter Description..."
                  value={insertCategory.prodct_description}
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="form_group">
                <label htmlFor="product_price">Price:</label>
                <input
                  type="number"
                  id="product_price"
                  name="product_price"
                  placeholder="Enter Price..."
                  value={insertCategory.product_price}
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="form_group">
                <label htmlFor="category_id">Category : </label>
                <select
                  id="category_id"
                  name="category_id"
                  onChange={handleInput}
                  required
                >
                  <option value="" disabled>Select Category</option>
                  {categoryData.map((categ) => (
                    <option value={categ.id}>{categ.title}</option>
                  ))}
                </select>
              </div>
              <div className="form_actions">
                <button type="submit">Add Category</button>
              </div>
            </form>
          </div>
        </MainDashboard>
      </div>
    </>
  );
};

export default AddProduct;
