import React from "react";
import SectionLabel from "../components/SectionLabel";
const groups = [
  [
    "FRONTEND",
    ["React", "JavaScript", "HTML", "CSS", "Bootstrap", "Tailwind CSS"],
  ],
  ["BACKEND", ["Node.js", "Express.js", "Supabase", "MySQL"]],
  ["DESIGN", ["Figma", "UI Design", "Prototyping", "Design Systems"]],
  ["OPERATING SYSTEM", ["Windows 11", "Linux Mint"]],
  ["VERSION CONTROL", ["Git", "GitHub"]],
];
export default function Skills() {
  return (
    <section className="section skills">
      <SectionLabel number="05">TOOLS I WORK WITH</SectionLabel>
      {groups.map(([name, items]) => (
        <div className="skill-group" key={name}>
          <h3 className="mono">{name}</h3>
          <div>
            {items.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
