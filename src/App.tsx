import { Hero } from './components/Hero';
import { AboutMeena } from './components/AboutMeena';
import { JourneySection } from './components/JourneySection';

export function App() {
  return (
    <div className="min-h-screen bg-[#0C0A10] text-white flex flex-col font-sans selection:bg-purple-900 selection:text-purple-200">
      <main className="flex-1">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: About Meena */}
        <AboutMeena />

        {/* Section 3: The Journey */}
        <JourneySection />

        {/* Section Anchor Targets for Later Sections */}
        <div id="portfolio" tabIndex={-1} aria-hidden="true" />
        <div id="ideas" tabIndex={-1} aria-hidden="true" />
        <div id="principles" tabIndex={-1} aria-hidden="true" />
        <div id="next-chapter" tabIndex={-1} aria-hidden="true" />
        <div id="contact" tabIndex={-1} aria-hidden="true" />
      </main>
    </div>
  );
}

export default App;
