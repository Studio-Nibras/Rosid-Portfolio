import React from "react";
import SectionLabel from "../components/SectionLabel";
const topics = ["GSAP", "NODE.JS", "VUE", "REACT NATIVE"];
export default function Exploring() {
  return (
    <section className="section exploring">
      <SectionLabel number="07">CURRENTLY EXPLORING</SectionLabel>
      <div className="exploring-list">
        {topics.map((topic, i) => (
          <div className="exploring-item" key={topic}>
            <span>{topic}</span>
            <span className="mono">0{i + 1}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
