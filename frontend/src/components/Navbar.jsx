import React from "react";
import "../App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo" onClick={() => window.location.reload()}>
        Assistify
      </div>
    </nav>
  );
};

export default Navbar;