import axios from "axios";
import { useEffect, useState } from "react";
import ProductsGrid from "../components/ProductsGrid";
import CategorySelector from "../components/CategorySelector";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");

  const getProducts = async (category) => {
    const res = await axios.get(`https://fakestoreapi.com/products${category}`);
    setProducts(res.data);
  };

  useEffect(() => {
    getProducts(category);
  }, [category]);

  return (
    <div>
      <CategorySelector category={category} setCategory={setCategory} />
      <ProductsGrid products={products} />
    </div>
  );
};

export default ProductsPage;
