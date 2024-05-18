import React from "react";
import ProductCard from "./ProductCard";
import styles from "./ProductsGrid.modules.css";

const ProductsGrid = ({ products }) => {
  return (
    <div className="grid">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default ProductsGrid;
