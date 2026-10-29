import { Hero } from './components/Hero';
import { AboutMeena } from './components/AboutMeena';
import { JourneySection } from './components/JourneySection';
import { PathSection } from './components/PathSection';
import { PrinciplesSection } from './components/PrinciplesSection';
import { NextChapterSection } from './components/NextChapterSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-[#0C0A10] text-white flex flex-col font-sans selection:bg-purple-900 selection:text-purple-200 scroll-smooth">
      <main className="flex-1">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: About Meena */}
        <AboutMeena />

        {/* Section 3: The Journey */}
        <JourneySection />

        {/* Section 4: The Path (Portfolio & Career Milestones) */}
        <PathSection />

        {/* Section 5: The Principles */}
        <PrinciplesSection />

        {/* Section 6: The Next Chapter */}
        <NextChapterSection />

        {/* Section 7: Contact & Engagement */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
