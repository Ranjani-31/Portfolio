import { useState } from 'react'

import Nav from './components/Navbar'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactSection from './components/ContactSection';
import ContactForm from './components/ContactForm';
import AboutSection from "./components/AboutSection"
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Skills />
      <Projects />
      <ContactSection />
      <ContactForm />
      <Footer />
    </div>
  ); 
}

export default App
