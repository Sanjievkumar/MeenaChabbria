import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { Journey } from './components/Journey';
import { Portfolio } from './components/Portfolio';
import { Ideas } from './components/Ideas';
import { Principles } from './components/Principles';
import { NextChapter } from './components/NextChapter';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const [activeSection, setActiveSection] = useState('about');

  // Active nav tracking on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      const aboutSection = document.getElementById('about');
      const journeySection = document.getElementById('journey');
      const portfolioSection = document.getElementById('portfolio');
      const ideasSection = document.getElementById('ideas');
      const principlesSection = document.getElementById('principles');
      const nextChapterSection = document.getElementById('next-chapter');
      const contactSection = document.getElementById('contact');

      if (contactSection && scrollPosition >= contactSection.offsetTop) {
        setActiveSection('contact');
      } else if (nextChapterSection && scrollPosition >= nextChapterSection.offsetTop) {
        setActiveSection('next-chapter');
      } else if (principlesSection && scrollPosition >= principlesSection.offsetTop) {
        setActiveSection('principles');
      } else if (ideasSection && scrollPosition >= ideasSection.offsetTop) {
        setActiveSection('ideas');
      } else if (portfolioSection && scrollPosition >= portfolioSection.offsetTop) {
        setActiveSection('portfolio');
      } else if (journeySection && scrollPosition >= journeySection.offsetTop) {
        setActiveSection('journey');
      } else if (aboutSection && scrollPosition >= aboutSection.offsetTop) {
        setActiveSection('about');
      } else {
        setActiveSection('about');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#18151D] flex flex-col font-sans selection:bg-purple-200 selection:text-purple-900">
      {/* Navigation Header */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Stage 1 Section 01: Hero */}
        <Hero />

        {/* Stage 1 Section 02: Introduction / Who is Meena */}
        <Introduction />

        {/* Stage 2 Section 03: The Journey */}
        <Journey />

        {/* Stage 3 Section 04: The Portfolio */}
        <Portfolio />

        {/* Stage 4 Section 05: The Ideas */}
        <Ideas />

        {/* Stage 5 Section 06: The Principles */}
        <Principles />

        {/* Stage 6 Section 07: The Next Chapter */}
        <NextChapter />

        {/* Stage 7 Section 08: Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
