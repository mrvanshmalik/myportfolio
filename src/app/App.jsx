// import ScrollTopButton from "../components/ui/ScrollTopButton";

// import { useEffect } from "react";
// import { seo } from "./seo";

// import Navbar from "../components/layout/Navbar";
// import Footer from "../components/layout/Footer";

// import Hero from "../sections/Hero";
// import About from "../sections/About";
// import Skills from "../sections/Skills";
// import Projects from "../sections/Projects";
// import Experience from "../sections/Experience";
// import Education from "../sections/Education";
// import Certifications from "../sections/Certifications";
// import Contact from "../sections/Contact";

// export default function App() {
//   useEffect(() => {
//     document.title = seo.title;

//     const setMeta = (name, content) => {
//       let tag = document.querySelector(`meta[name="${name}"]`);
//       if (!tag) {
//         tag = document.createElement("meta");
//         tag.setAttribute("name", name);
//         document.head.appendChild(tag);
//       }
//       tag.setAttribute("content", content);
//     };

//     setMeta("description", seo.description);
//   }, []);

//   return (
//     <div className="min-h-screen bg-base-bg text-base-text">
//       {/* Premium animated background */}
//       <div className="pointer-events-none fixed inset-0 -z-10">
//         <div className="absolute -top-40 left-1/2 h-130 w-130 -translate-x-1/2 rounded-full bg-brand-primary/15 blur-3xl" />
//         <div className="absolute -right-45 top-[18%] h-140 w-140 rounded-full bg-brand-secondary/10 blur-3xl" />
//         <div className="absolute -bottom-50 -left-40 h-140 w-140 rounded-full bg-brand-glow/10 blur-3xl" />
//       </div>

//       <Navbar />

//       <main className="relative">
//         <Hero />
//         <About />
//         <Skills />
//         <Projects />
//         <Experience />
//         <Education />
//         <Certifications />
//         <Contact />
//       </main>

//       <Footer />
//       <ScrollTopButton />
//     </div>
//   );
// }






import ScrollTopButton from "../components/ui/ScrollTopButton";
import { useEffect } from "react";
import Lenis from "lenis";
import { seo } from "./seo";

import Background from "../components/layout/Background";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Experience from "../sections/Experience";
import Education from "../sections/Education";
import Certifications from "../sections/Certifications";
import Contact from "../sections/Contact";

export default function App() {
  // SEO meta
  useEffect(() => {
    document.title = seo.title;

    const setMeta = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setMeta("description", seo.description);

    // OG
    const setProp = (property, content) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setProp("og:title", seo.title);
    setProp("og:description", seo.description);
    setProp("og:image", seo.ogImage);
  }, []);

  // Smooth scroll (Lenis)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      smoothTouch: false,
    });

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-dvh">
      <Background />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <ScrollTopButton />
    </div>
  );
}
