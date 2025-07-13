import React from 'react';
import Profile from '../components/Profile';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <>
      <Profile />
      <About />
      <Skills />
      <Projects />
      <ContactSection />
    </>
  );
} 