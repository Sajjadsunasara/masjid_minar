import React, { useEffect, useState } from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import { MainDashboard } from "./main-dashboard";
import { NavLink } from "react-router-dom";
import "../css/product.css";
import axios from "axios";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [editProduct, setEditProduct] = useState({
    id: "",
    product_title: "",
    product_image: "",
    prodct_description: "",
    product_price: "",
  });
  const [showModal, setShowModal] = useState(false);

  const fetchProduct = () => {
    axios
      .get("http://localhost:4000/get-product")
      .then((response) => {
        setProduct(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  const handleEdit = (id) => {
    const productToEdit = product.find((product) => product.id === id);
    if (productToEdit) {
      setEditProduct(productToEdit);
      setShowModal(true);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setEditProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileUpdate = (e) => {
    setEditProduct((prod) => ({
      ...prod,
      product_image: e.target.files[0],
    }));
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("product_title", editProduct.product_title);
    formData.append("product_image", editProduct.product_image);
    formData.append("prodct_description", editProduct.prodct_description);
    formData.append("product_price", editProduct.product_price);

    try {
      await axios.put(
        `http://localhost:4000/update-product/${editProduct.id}`,
        editProduct,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Product updated successfully!");
      setEditProduct({
        id: "",
        product_title: "",
        product_image: "",
        prodct_description: "",
        product_price: "",
      });
      fetchProduct();
      setShowModal(false);
    } catch (error) {
      console.error("Error updating product:", error.message);
      alert("Error updating product.");
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    console.log(id)
    
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:4000/delete-product/${id}`);
        alert("Product deleted successfully!");
        fetchProduct();
      } catch (error) {
        console.error("Error deleting product:", error.message);
        alert("Failed to delete product. Please try again.");
      }
    }
  };
  

  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <MainDashboard>
          <div className="section">
            <h1>
              All Products
              <NavLink to="/addproduct">
                <i className="add-product-icon fa-solid fa-circle-plus"></i>
              </NavLink>
            </h1>
            <table className="product-table">
              <thead className="table-header">
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Image</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Options</th>
                </tr>
              </thead>
              <tbody>
                {product.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.product_title}</td>
                    <td>
                      <img
                        src={`./uploads/${item.product_image}`}
                        alt={item.product_title}
                        className="product-image"
                      />
                    </td>
                    <td>{item.prodct_description}</td>
                    <td>{item.product_price}</td>
                    <td>{item.category_id}</td>
                    <td>
                      <button
                        onClick={() => handleEdit(item.id)}
                        className="btn-edit"
                      >
                        Edit
                      </button>
                      <button
                        className="btn-delete"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {showModal && editProduct && (
            <div className="modal">
              <div className="modal-content">
                <h1 className="edit-title">Edit Product</h1>
                <form onSubmit={handleEditSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="product_title">Product title:</label>
                      <input
                        type="text"
                        id="product_title"
                        name="product_title"
                        placeholder="Enter product_title..."
                        value={editProduct.product_title}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="product_image">Product Image:</label>
                      <input
                        style={{ padding: "17.8px" }}
                        type="file"
                        id="product_image"
                        name="product_image"
                        placeholder="Enter Made in..."
                        onChange={handleFileUpdate}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="prodct_description">
                        Prodct Description:
                      </label>
                      <input
                        type="text"
                        id="prodct_description"
                        name="prodct_description"
                        placeholder="Enter prodct_description..."
                        value={editProduct.prodct_description}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="product_price">Product Price:</label>
                      <input
                        type="number"
                        id="product_price"
                        name="product_price"
                        placeholder="Enter product_Price..."
                        value={editProduct.product_price}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-actions">
                    <button type="submit" className="btn-update">
                      Update Product
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
                      className="btn-cancel"
                    >
                      Cancel Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </MainDashboard>
      </div>
    </>
  );
};

export default Product;
