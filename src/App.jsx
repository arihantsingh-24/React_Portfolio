import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Project from "./components/Project";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-600 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full"></div>
      <div className="fixed top-0 left-0 h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] z-[-2]"></div>{" "}
      <div className="container mx-auto px-8 ">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Project />
        <Contact />
      </div>
    </div>
  );
};

export default App;