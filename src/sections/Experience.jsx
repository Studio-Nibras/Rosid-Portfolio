import React from "react";
import SectionLabel from "../components/SectionLabel";
const items = [
  [
    "2026",
    "STEMREACH 1.0",
    "Project Manager",
    "UNIBA Surakarta × UTP Malaysia Student Mobility Program ",
  ],
  ["2026", "HMIF", "Vice Chairman", "Informatics Student Association"],
  [
    "2026",
    "UKMI KYAI MOJO",
    "Head of Communication and Information Division",
    "Islamic Student Association",
  ],
  ["2025", "SOCHA", "Vice Chairman", "Futsal League Committee"],
];
export default function Experience() {
  return (
    <section className="section experience">
      <SectionLabel number="04">EXPERIENCE</SectionLabel>
      <div className="section-intro">
        <h2 data-reveal>
          WHERE I'VE
          <br />
          <span>BEEN BUILDING.</span>
        </h2>
      </div>
      <div className="timeline">
        {items.map(([year, title, role, org]) => (
          <article className="timeline__item" key={title}>
            <span className="timeline__year mono">{year}</span>
            <span className="timeline__dot" />
            <div>
              <h3>{title}</h3>
              <p>{role}</p>
              <small>{org}</small>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
