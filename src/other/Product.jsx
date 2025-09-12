"use client";

import { useState, useEffect } from "react";
import { products } from "./Productdata";
import Footer from "./Footer";
import "../other/Product.css";

const ProductShowcase = () => {
  const [filteredProducts, setFilteredProducts] = useState([...products]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      applyFilters();
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchTerm, selectedCategory, sortBy]);

  const applyFilters = () => {
    const filtered = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    switch (sortBy) {
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
    }

    setFilteredProducts(filtered);
  };

  const handleBuyClick = (productName) => {
    showNotification(`Added "${productName}" to cart! 🛒`);
  };

  const showNotification = (message) => {
    const notification = document.createElement("div");
    notification.className = "notification";
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 1rem 2rem;
      border-radius: 10px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.2);
      z-index: 1000;
      animation: slideInRight 0.3s ease-out;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.animation = "slideOutRight 0.3s ease-out";
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  };

  const getCategoryName = (category) => {
    const categoryNames = {
      food: "Food & Nutrition",
      toys: "Toys & Entertainment",
      grooming: "Grooming Essentials",
      bedding: "Bedding & Apparel",
      supplements: "Health Supplements",
    };
    return categoryNames[category] || category;
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <div className="productmain">
        <section className="product-showcase">
          <div className="container">
            <div className="section-header">
              <h1 className="main-title">
                <span className="title-word" id="premium">
                  Premium
                </span>
                <span className="title-word">Pet</span>
                <span className="title-word" id="product">
                  Products
                </span>
              </h1>
              <p className="section-subtitle">
                Discover our curated collection of high-quality products
                designed to keep your furry friends happy and healthy
              </p>
            </div>

            <div className="controls-section">
              <div className="search-container">
                <input
                  type="text"
                  id="searchInput"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>
              <br></br>
              <div className="filters-container">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="filter-select"
                >
                  <option value="all">All Categories</option>
                  <option value="food">Food & Nutrition</option>
                  <option value="toys">Toys & Entertainment</option>
                  <option value="grooming">Grooming Essentials</option>
                  <option value="bedding">Bedding & Apparel</option>
                  <option value="supplements">Health Supplements</option>
                </select>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="sort-select"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
            <br></br>
            <div className="products-grid">
              {filteredProducts.length === 0 ? (
                <div className="no-products">
                  <h3>No products found</h3>
                  <p>Try adjusting your search or filter criteria</p>
                </div>
              ) : (
                filteredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="product-card"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="product-image"
                    />
                    <div className="product-category">
                      {getCategoryName(product.category)}
                    </div>
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    <div className="product-footer">
                      <span className="product-price">${product.price}</span>
                      <button
                        className="buy-btn"
                        onClick={() => handleBuyClick(product.name)}
                      >
                        🛒 Buy Now
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductShowcase;
