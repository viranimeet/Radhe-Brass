import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import "./Loader.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/products');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Header />
      {loading ? (
        <div className="loader-container flex justify-center items-center h-screen">
          <div className="loader">
            <div className="loader__bar"></div>
            <div className="loader__bar"></div>
            <div className="loader__bar"></div>
            <div className="loader__bar"></div>
            <div className="loader__bar"></div>
            <div className="loader__ball"></div>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-3xl font-bold text-center mt-8 mb-4">All Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
            {products.map(product => (
              <div key={product._id} className="max-w-md shadow-md rounded-md overflow-hidden h-full">
                <img src={product.product_image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-sm text-gray-600 mt-2">{product.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <p className="text-lg font-semibold">{product.price}</p>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Available</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
