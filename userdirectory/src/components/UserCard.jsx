import React from "react";
import "./UserCard.css";

/**
 * Renders an individual user.
 * Props: { id, name, email, role }
 */
export default function UserCard({ user }) {
  const { name, email, role } = user;

  /* Choose a badge colour & optional action based on role */
  const roleStyles = {
    admin:  { badge: "badge-admin",  action: "Manage Users" },
    editor: { badge: "badge-editor", action: "Edit Content" },
    viewer: { badge: "badge-viewer", action: "View Profile" }
  };

  const { badge, action } = roleStyles[role] ?? roleStyles.viewer;

  return (
    <div className="card">
      <div className="header">
        <h3>{name}</h3>
        <span className={`badge ${badge}`}>{role}</span>
      </div>

      <p className="email">{email}</p>

      {/* Conditional rendering: show the button only for non‑viewers */}
      {role !== "viewer" && (
        <button className="action-btn" onClick={() => alert(`${action} clicked for ${name}`)}>
          {action}
        </button>
      )}
    </div>
  );
}
