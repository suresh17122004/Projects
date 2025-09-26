import React, { useState } from "react";
import { products as initialProducts } from "./data/products";
import CategoryFilter from "./components/CategoryFilter";
import ProductList from "./components/ProductList";

/**
 * Root component – holds state for the selected category.
 */
export default function App() {
  const [category, setCategory] = useState("All");

  // Derive unique categories and filtered products
  const categories = [...new Set(initialProducts.map((p) => p.category))];
  const visible =
    category === "All"
      ? initialProducts
      : initialProducts.filter((p) => p.category === category);

  return (
    <div className="wrapper">
      <h1>Product List</h1>

      <CategoryFilter
        categories={categories}
        active={category}
        onSelect={setCategory}
      />

      <ProductList products={visible} />
    </div>
  );
}
