import React from "react";
import "@/App.css";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Proof from "@/components/Proof";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import NoiseOverlay from "@/components/NoiseOverlay";
import CustomCursor from "@/components/CustomCursor";
import { Toaster } from "sonner";

function App() {
  return (
    <div className="App">
      <NoiseOverlay />
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Proof />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <Toaster position="bottom-right" theme="dark" richColors />
    </div>
  );
}

export default App;
