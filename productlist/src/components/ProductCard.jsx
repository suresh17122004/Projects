import React from "react";
import "./ProductCard.css"; // ✅ Correct

/**
 * Displays a single product card.
 * Props: { id, name, price, category }
 */
export default function ProductCard({ product }) {
  const { name, price, category } = product;

  return (
    <article className="product-card">
      <h3 className="title">{name}</h3>
      <p className="category">{category}</p>
      <p className="price">₹{price.toLocaleString()}</p>
    </article>
  );
}
