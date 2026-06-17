import { useEffect, useRef } from "react";
import gsap from "gsap";
import CodeAnimation from "./code";
import "./index.css"
function HeroSection() {
    const heroRef = useRef();

useEffect(() => {
  gsap.from(heroRef.current.children, {
    y: 50,
    opacity: 1,
    duration: 1,
    stagger: 0.5
  });
}, []);
  return (
    <section id="home" className="hero">
      <div className="hero-content" ref={heroRef}>
        <p className="hero-tag">Full Stack Developer</p>

        <h1>
          Hi, I'm <span>Sivaranjani</span>
        </h1>

        <p className="hero-description">
          Building scalable web applications, crafting beautiful user
          experiences, and exploring modern technologies.
        </p>

        <div className="hero-buttons">
          <button>View Projects</button>
          <button className="secondary">Contact Me</button>
        </div>
      </div>
      <div className="hidden md:block">
      <CodeAnimation /></div>
    </section>
  );
}

export default HeroSection;