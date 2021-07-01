import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="d-flex justify-content-between p-3 align-items-center bg-light">
      <div className="logo">
        <h3><Link to="/"><i className="fas fa-user-md"></i> doctorvai</Link></h3>
      </div>
      <ul className="d-flex">
        <li>
          <Link to="/contact">contact</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
