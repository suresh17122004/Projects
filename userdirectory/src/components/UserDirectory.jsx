import React from "react";
import UserCard from "./UserCard";

/**
 * Receives an array of user objects as props and
 * maps them to UserCard components.
 */
export default function UserDirectory({ users }) {
  if (!users?.length) return <p>No users found.</p>;

  return (
    <section className="directory">
      {users.map((u) => (
        <UserCard key={u.id} user={u} />
      ))}
    </section>
  );
}
