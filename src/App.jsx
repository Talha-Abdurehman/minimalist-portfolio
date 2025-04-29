import { useEffect, useRef, useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Navigation from "./components/Navigation";

export default function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.01, rootMargin: "-20% 0px -60% 0px" }
    );

    const sections = [homeRef.current, aboutRef.current];
    sections.forEach((section) => section && observer.observe(section));

    return () => {
      sections.forEach((section) => section && observer.unobserve(section));
    };
  }, []);

  return (
    <div className="bg-amber-50">
      <Navigation activeSection={activeSection} />
      <section id="home" ref={homeRef}>
        <Home />
      </section>
      <section id="about" ref={aboutRef}>
        <About />
      </section>
    </div>
  );
}
