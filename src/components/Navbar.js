import React from "react";
import { Link } from "react-router-dom";
import { useUserRole } from "../context/UserRoleContext";

const Navbar = () => {
  const { role } = useUserRole();

  return (
    <nav className="navbar">
      <h2>Course Management</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        {role === "instructor" && <Link to="/dashboard">Dashboard</Link>}
      </div>
    </nav>
  );
};

export default Navbar;
