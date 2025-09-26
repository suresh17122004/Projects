import React, { useState } from "react";
import { users as initialUsers } from "./data/users";
import UserDirectory from "./components/UserDirectory";

/**
 * Root component — owns the user list and can
 * pass it downward via props.
 */
export default function App() {
  const [users] = useState(initialUsers); // ready for future CRUD

  return (
    <div className="container">
      <h1>Dynamic User Directory</h1>
      <UserDirectory users={users} />
    </div>
  );
}
