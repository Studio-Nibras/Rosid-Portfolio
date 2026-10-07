import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__inner">
        <span className="mono">09 — CONTACT</span>

        <h2>
          LET'S BUILD
          <br />
          SOMETHING
          <br />
          <span>GOOD.</span>
          <br />
          TOGETHER. ↗
        </h2>

        <p>Have an idea, project, or opportunity?</p>

        <div className="contact__actions">
          <a href="mailto:rosidhakimudin@gmail.com?subject=Let's%20Work%20Together">
            EMAIL ME →
          </a>

          <a
            href="https://wa.me/6281918438674?text=Hi%20Rosid%2C%20I%20found%20your%20portfolio."
            target="_blank"
            rel="noopener noreferrer"
          >
            WHATSAPP ME →
          </a>
        </div>
      </div>
    </section>
  );
}
