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
        <a
          href="https://github.com/Studio-Nibras "
          target="_blank"
          rel="noopener noreferrer"
        >
          GITHUB ↗
        </a>
        <a
          href="https://www.linkedin.com/in/rosid-hakimudin-213a52329/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BU6E%2Fr2cfTFKAtUXOu6AK2g%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          LINKEDIN ↗
        </a>
        <a
          href="https://www.instagram.com/rosidhakimudin?stkn=MTd1Nnd0MWl0bHpnMg=="
          target="_blank"
          rel="noopener noreferrer"
        >
          INSTAGRAM ↗
        </a>
      </div>
      <div className="footer__bottom">
        <span>© 2026 ROSID HAKIMUDIN</span>
        <span>BUILT WITH REACT</span>
      </div>
    </footer>
  );
}
