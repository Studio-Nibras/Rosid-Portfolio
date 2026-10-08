import React, { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = "";
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`navbar ${scrolled ? "navbar--scrolled" : ""} ${
        menuOpen ? "navbar--open" : ""
      }`}
    >
      <a href="#top" className="navbar__logo" onClick={closeMenu}>
        ROSID HAKIMUDIN
      </a>

      <nav className="navbar__desktop">
        <a href="#about" onClick={closeMenu}>
          ABOUT
        </a>
        <a href="#work" onClick={closeMenu}>
          WORK
        </a>
        <a href="#contact" onClick={closeMenu}>
          CONTACT
        </a>
      </nav>

      <button
        className={`navbar__toggle ${menuOpen ? "is-open" : ""}`}
        onClick={toggleMenu}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
      </button>

      <nav className={`navbar__mobile ${menuOpen ? "is-open" : ""}`}>
        <a href="#about" onClick={closeMenu}>
          <span>01</span>
          ABOUT
        </a>

        <a href="#work" onClick={closeMenu}>
          <span>02</span>
          WORK
        </a>

        <a href="#contact" onClick={closeMenu}>
          <span>03</span>
          CONTACT
        </a>
      </nav>
    </header>
  );
}
