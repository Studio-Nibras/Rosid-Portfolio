import React from "react";
import SectionLabel from "../components/SectionLabel";
export default function BeyondCode() {
  return (
    <section className="section beyond">
      <SectionLabel number="04">BEYOND CODE</SectionLabel>
      <div className="metrics">
        <div>
          <strong>50+</strong>
          <span>MEMBERS</span>
        </div>
        <div>
          <strong>7</strong>
          <span>DIVISIONS</span>
        </div>
        <div>
          <strong>10+</strong>
          <span>EVENTS</span>
        </div>
      </div>
      <p className="beyond__copy" data-reveal>
        Building things isn't only about writing code. I've also learned through
        organizing people, leading projects, and working with teams.
      </p>
    </section>
  );
}
