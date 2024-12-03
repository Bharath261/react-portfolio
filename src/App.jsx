import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import TechnologiesDA from "./components/TechnologiesDA";
import ProjectsDA from "./components/ProjectsDA";
import "./styles.css"

const App = () => {
  const [profile, setProfile] = useState("frontend");

  return (
    <div className="overflow-x-hidden text-neutral-300 antiliased selection:pg-cyan-300 selection:text-cyan-900">
      {/* Background */}
      <div className="fixed top-0 -z-10 h-full w-screen bg-neutral-950"></div>
      <div className="inherit top-0 z-[-2] min-h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        {/* Content */}
        <div className="container mx-auto px-4">
          <Navbar profile={profile} setProfile={setProfile} />
          <Hero profile={profile} />
          <About profile={profile} />
          <div className="overflow-hidden max-w-full">
            {profile === "frontend" ? <Technologies /> : <TechnologiesDA />}
          </div>
          <div className="overflow-hidden max-w-full">
            {profile === "frontend" ? <Projects /> : <ProjectsDA />}
          </div>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default App;
