import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { id: "home", link: "Home" },
    { id: "about", link: "About" },
    { id: "portfolio", link: "Portfolio" },
    { id: "experience", link: "Experience" },
    { id: "contact", link: "Contact" },
  ];

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark py-3 shadow-lg">
      <div className="container">
        
          <span
            className="navbar-brand fw-bold text-uppercase text-warning"
            style={{
              fontFamily: "Kaushan Script, cursive",
              fontSize: "2rem",
              letterSpacing: "1px",
              marginRight: "0.25rem",
            }}
          >
            𝓐𝓑𝓓𝓘
          </span>
        
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNav}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </button>
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {links.map(({ id, link }) => (
              <li key={id} className="nav-item">
                <Link
                  className="nav-link text-capitalize fw-medium position-relative fs-5"
                  to={id}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;