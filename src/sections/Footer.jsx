import React from "react";
export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>Rosid Hakimudin</strong>
        <p>
          FULL-STACK DEVELOPER
          <br />
          JAVASCRIPT FOCUSED
        </p>
      </div>
      <div className="footer__links">
        <a href="#work">GITHUB ↗</a>
        <a href="#work">LINKEDIN ↗</a>
        <a href="mailto:hello@rosidhakimudin.dev">EMAIL ↗</a>
      </div>
      <div className="footer__bottom">
        <span>© 2026 ROSID HAKIMUDIN</span>
        <span>BUILT WITH REACT</span>
      </div>
    </footer>
  );
}
