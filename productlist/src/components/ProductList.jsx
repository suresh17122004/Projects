import React from "react";
import ProductCard from "./ProductCard"; 
/**
 * Maps an array of product objects to ProductCard components.
 * Props: products : [{...}]
 */
export default function ProductList({ products }) {
  if (!products.length) return <p>No products in this category.</p>;

  return (
    <div className="product-container">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
