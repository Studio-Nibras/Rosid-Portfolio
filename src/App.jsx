import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import Navbar from "./components/Navbar";
import Preloader from "./sections/Preloader";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import HowIWork from "./sections/HowIWork";
import BeyondCode from "./sections/BeyondCode";
import Skills from "./sections/Skills";
import Exploring from "./sections/Exploring";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import NotFound from "./sections/NotFound";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const appRef = useRef(null);
  const [isNotFound, setIsNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const currentPath = window.location.pathname;

    if (currentPath !== "/" && currentPath !== "/index.html") {
      setIsNotFound(true);
    } else {
      setIsNotFound(false);
    }
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1500);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    const raf = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 32, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          },
        );
      });
    }, appRef);

    return () => ctx.revert();
  }, []);

  if (isNotFound) {
    return <NotFound />;
  }

  return (
    <>
      <Preloader isHidden={!isLoading} />
      <div
        ref={appRef}
        className={isLoading ? "app-shell app-shell--loading" : "app-shell"}
      >
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <HowIWork />
          <Skills />
          <Exploring />
          <BeyondCode />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
