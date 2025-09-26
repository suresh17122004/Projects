import React from "react";
import "./CategoryFilter.css";    
/**
 * Renders selectable category buttons.
 * Props:
 *   categories : [String]
 *   active     : String | "All"
 *   onSelect   : Function
 */
export default function CategoryFilter({ categories, active, onSelect }) {
  return (
    <div className="filter-bar">
      {["All", ...categories].map((cat) => (
        <button
          key={cat}
          className={`filter-btn ${active === cat ? "active" : ""}`}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
