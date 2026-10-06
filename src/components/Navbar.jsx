import React from "react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <a className="nav__logo" href="#top" aria-label="Rosid home">
        Rosid Hakimudin
      </a>
      <nav aria-label="Primary navigation">
        <a href="#work">WORK</a>
        <a href="#about">ABOUT</a>
        <a href="#contact">CONTACT</a>
      </nav>
      <a
        className="nav__arrow"
        href="mailto:hello@rosidhakimudin.dev"
        aria-label="Email Rosid"
      >
        ↗
      </a>
    </header>
  );
}
