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
    const originalOverflow = document.body.style.overflow;

    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalOverflow;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
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
        Rosid Hakimudin
      </a>

      <nav className="navbar__desktop">
        <a href="#work">WORK</a>
        <a href="#about">ABOUT</a>
        <a href="#contact">CONTACT</a>
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
        <a href="#work" onClick={closeMenu}>
          <span>01</span>
          WORK
        </a>

        <a href="#about" onClick={closeMenu}>
          <span>02</span>
          ABOUT
        </a>

        <a href="#contact" onClick={closeMenu}>
          <span>03</span>
          CONTACT
        </a>
      </nav>
    </header>
  );
}
