import React from "react";
import styles from "./ProductCard.modules.css";

const ProductCard = ({ product }) => {
  const textTrim = (text) =>
    text.length >= 200 ? text.slice(0, 199).trim() + "..." : text;
  return (
    <div className="card">
      <span className="card-category">{product.category}</span>
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.title} className="card-image" />
      <p className="card-description">{textTrim(product.description)}</p>
      <span className="card-price">Price: {product.price}</span>
    </div>
  );
};

export default ProductCard;
