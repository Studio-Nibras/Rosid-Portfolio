import React from "react";
import SectionLabel from "../components/SectionLabel";
export default function About() {
  return (
    <section id="about" className="section section--about">
      <SectionLabel number="02">ABOUT</SectionLabel>
      <div className="about-grid">
        <h2 data-reveal>
          I LIKE BUILDING
          <br />
          THINGS THAT
          <br />
          <span>ACTUALLY WORK.</span>
        </h2>
        <div className="about-copy" data-reveal>
          <p>
            I'm an Informatics student focused on becoming a full-stack
            developer, with a strong interest in the JavaScript ecosystem.
          </p>
          <p>
            Currently building with React, Next.js, Node.js and Express.js while
            learning how frontend applications connect with APIs, backend
            services and databases.
          </p>
        </div>
      </div>
    </section>
  );
}
