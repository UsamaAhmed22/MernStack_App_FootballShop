import React, { useState } from 'react';
import './ProductForm.css'; // Import the custom CSS file
import axios from 'axios';

function ProductForm() {
  const [product, setProduct] = useState({ name: "", description: "", price: "", category: "" });

  const producthandler = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const insertproduct = async (e) => {
    try {
      const response = await axios.post("http://localhost:5000/addproduct", product);
      console.log(response.data);
      setProduct({ name: "", description: "", price: "", category: "" });
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  return (
    <div className="product-form-container">
      <div className="product-form">
        <h2 className="text-center">Add Product</h2>
        <div className="mb-3 mt-4">
          <input type="text" className="form-control" name="name" value={product.name} onChange={producthandler} placeholder="Enter Product Name" />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" name="description" value={product.description} onChange={producthandler} placeholder="Enter Product Description" />
        </div>
        <div className="mb-3">
          <input type="number" className="form-control" name="price" value={product.price} onChange={producthandler} placeholder="Enter Product Price" />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" name="category" value={product.category} onChange={producthandler} placeholder="Enter Product Category" />
        </div>
        <div className="text-center">
          <button className="btn btn-success" onClick={insertproduct} type="submit">Add Product</button>
        </div>
      </div>
    </div>
  );
}

export default ProductForm;
