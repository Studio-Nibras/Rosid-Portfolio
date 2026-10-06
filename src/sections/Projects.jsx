import React from "react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLabel from "../components/SectionLabel";
import { projects } from "../data/projects";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const root = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      mm.add("(min-width: 769px)", () => {
        const cards = gsap.utils.toArray(".project-card");

        cards.forEach((card) => {
          gsap.to(card.querySelector(".project-card__visual"), {
            yPercent: -5,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        });
      });
    }, root);

    return () => {
      ctx.revert();
      mm.revert();
    };
  }, []);

  return (
    <section id="work" ref={root} className="section projects">
      <SectionLabel number="03">SELECTED WORKS</SectionLabel>

      <div className="section-intro">
        <h2 data-reveal>
          A FEW THINGS
          <br />
          I'VE <span>BUILT.</span>
        </h2>
      </div>

      <div className="project-stack">
        {projects.map((project, i) => (
          <article
            className="project-card"
            key={project.title}
            style={{ zIndex: i + 1 }}
          >
            <div className="project-card__visual">
              <div className="mock-browser">
                <div className="mock-browser__bar">
                  <i />
                  <i />
                  <i />
                  <span>{project.title.toLowerCase()}.dev</span>
                </div>

                <div className="mock-browser__body">
                  <strong>{project.title}</strong>
                  <small>{project.category}</small>
                </div>
              </div>
            </div>

            <div className="project-card__info">
              <span className="mono">{project.number} / 03</span>

              <div className="project-card__main">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>

              <div className="project-card__meta mono">
                <span>{project.year}</span>
                <span>{project.role}</span>
                <span>{project.tech.join(" · ")}</span>
                <span className="project-link">VIEW PROJECT ↗</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
