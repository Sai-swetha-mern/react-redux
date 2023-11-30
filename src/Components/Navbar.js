import React from "react";
import { Link } from "react-router-dom";

const NavbarPage = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
        <div className="container-fluid">

          <Link className="navbar-brand" to="/Product">
            SHOPPING CART
          </Link>
        </div>

        <div className="collapse navbar-collapse p-2" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/Product">
                PRODUCTS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <span className="material-icons-outlined">CART</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavbarPage;
