import React from "react";

const CategorySelector = ({ category, setCategory }) => {
  return (
    <div>
      <span>Category: </span>
      <select
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value="">All</option>
        <option value="/category/men's clothing">Men's clothing</option>
        <option value="/category/women's clothing">Women's clothing</option>
        <option value="/category/jewelery">Jewelery</option>
        <option value="/category/electronics">Electronics</option>
      </select>
    </div>
  );
};

export default CategorySelector;
