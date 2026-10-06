import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import SectionLabel from "../components/SectionLabel";

const process = [
  {
    number: "01",
    title: "UNDERSTAND",
    description:
      "I start by understanding the problem, the users, and what the product actually needs to achieve.",
  },
  {
    number: "02",
    title: "BUILD",
    description:
      "I break the idea into smaller parts and turn them into working interfaces, features, and systems.",
  },
  {
    number: "03",
    title: "CONNECT",
    description:
      "I connect the frontend, backend, APIs, and database so everything works together as one system.",
  },
  {
    number: "04",
    title: "ITERATE",
    description:
      "I test, debug, refine, and improve the product based on what works, what breaks, and what can be better.",
  },
];

export default function HowIWork() {
  const root = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".work-process__item",
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: root.current,
            start: "top 75%",
          },
        },
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={root} className="section how-i-work">
      <SectionLabel number="05">HOW I WORK</SectionLabel>

      <div className="how-i-work__intro">
        <h2 data-reveal>
          FROM IDEA
          <br />
          TO <span>WORKING SYSTEM.</span>
        </h2>

        <p>
          I like keeping the process simple: understand the problem, build the
          right solution, connect the pieces, and keep improving.
        </p>
      </div>

      <div className="work-process">
        {process.map((item) => (
          <div className="work-process__item" key={item.number}>
            <span className="work-process__number mono">{item.number}</span>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

            <span className="work-process__arrow">↗</span>
          </div>
        ))}
      </div>
    </section>
  );
}
