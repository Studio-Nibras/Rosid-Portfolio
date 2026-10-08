import React from "react";
export default function Hero() {
  return (
    <section id="top" className="hero section-shell">
      <div className="hero__label mono">01 — INTRO</div>
      <div className="hero__content">
        <p className="hero__eyebrow" data-reveal>
          FULL-STACK DEVELOPER
          <br />
          JAVASCRIPT FOCUSED
        </p>
        <h1 data-reveal>
          HEY, I'M
          <br />
          <span>ROSID.</span>
        </h1>
        <div className="hero__role" data-reveal>
          FULL-STACK
          <br />
          <em>DEVELOPER.</em>
        </div>
      </div>
      <div className="hero__meta mono" data-reveal>
        <span>BASED IN SURAKARTA, INDONESIA</span>
        <span>BUILDING WITH JAVASCRIPT</span>
      </div>
      <div className="hero__orb" aria-hidden="true" />
      <a className="scroll-cue mono" href="#about">
        SCROLL ↓
      </a>
    </section>
  );
}
