import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Navbar } from './Navbar';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen lg:h-screen lg:max-h-screen w-full bg-[#0C0A10] text-white flex flex-col justify-between overflow-hidden"
    >
      {/* 1. Full-width Authentic Hero Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-[62%_top] sm:bg-[63%_top] md:bg-[63%_15%] lg:bg-[62%_15%] xl:bg-[61%_18%] z-0"
        style={{
          backgroundImage: `url('/images/hero_bg_authentic.jpg')`,
        }}
        role="img"
        aria-label="Meena Chhabbria - Authentic Portrait"
      />

      {/* 2. Warm Multiply Layer: Neutralizes the white haze and restores the warm hotel interior */}
      <div 
        className="absolute inset-y-0 left-0 w-full md:w-[75%] lg:w-[65%] z-[1] pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, #16101A 0%, #1A121D 24%, #2E201B 40%, #4D3728 54%, #7E5F46 66%, #C4A788 78%, #FFFFFF 88%, #FFFFFF 100%)',
          mixBlendMode: 'multiply',
        }}
      />

      {/* 3. Directional Dark Gradient: Ensures high-contrast readability behind headline and text */}
      <div 
        className="absolute inset-y-0 left-0 w-full md:w-[62%] lg:w-[50%] z-[2] pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, rgba(12, 10, 16, 0.95) 0%, rgba(12, 10, 16, 0.88) 28%, rgba(12, 10, 16, 0.5) 50%, rgba(12, 10, 16, 0.1) 70%, transparent 82%)',
        }}
      />

      {/* Top vignette for superior nav contrast across bright chandelier */}
      <div 
        className="absolute top-0 inset-x-0 h-32 lg:h-36 z-[2] pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(12, 10, 16, 0.92) 0%, rgba(12, 10, 16, 0.70) 50%, rgba(12, 10, 16, 0.3) 80%, transparent 100%)',
        }}
      />

      {/* Subtle bottom vignette for statistics readability */}
      <div 
        className="absolute bottom-0 inset-x-0 h-28 z-[2] pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(12, 10, 16, 0.6) 0%, rgba(12, 10, 16, 0.15) 70%, transparent 100%)',
        }}
      />

      {/* 4. Top Navigation */}
      <Navbar activeSection="about" />

      {/* 5. Main Hero Content Area */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 w-full flex-1 flex flex-col justify-center py-4 lg:py-6">
        <div className="flex items-center justify-between w-full">
          
          {/* Left: Cohesive Editorial Content Block with Left Border Anchor */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative pl-5 sm:pl-6 border-l border-white/20 flex flex-col items-start max-w-[440px]"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-2.5 sm:mb-3">
              <span className="text-[9.5px] sm:text-[10px] font-semibold tracking-[0.22em] text-[#E4DDF2] uppercase whitespace-nowrap">
                BUSINESS LEADER · AUTHOR · SUCCESS COACH
              </span>
              <div className="hidden sm:block w-12 lg:w-20 h-[1px] bg-white/20 ml-1"></div>
            </div>

            {/* Three-Line Editorial Headline */}
            <h1 className="font-serif text-[44px] sm:text-[54px] md:text-[62px] lg:text-[66px] xl:text-[76px] leading-[0.88] tracking-tight font-medium text-white mb-3 sm:mb-3.5">
              <span className="block">People.</span>
              <span className="block">Purpose.</span>
              <span className="block font-normal italic text-[#D8B4FE]">Persistence.</span>
            </h1>

            {/* Supporting Paragraph (Compact Width, 4 Lines, Clear of Silhouette) */}
            <p className="text-[12.5px] sm:text-[13.5px] lg:text-[14px] leading-[1.58] text-[#D2CCE0] font-light tracking-wide max-w-[390px]">
              From humble beginnings to leadership in cinema and entertainment, my journey has been about turning challenges into opportunities — and creating a more equitable tomorrow for women.
            </p>

            {/* Mobile / Tablet Mission Panel Reflow */}
            <div className="lg:hidden mt-6 pt-4 border-t border-white/15 w-full max-w-[340px]">
              <span className="text-[9.5px] font-semibold tracking-[0.24em] text-[#F472B6] uppercase block mb-1">
                MY MISSION
              </span>
              <p className="font-serif italic text-base sm:text-lg leading-snug text-white">
                Creating opportunities for 100,000 women to learn, earn and lead.
              </p>
              <div className="w-8 h-[1.5px] bg-[#D8B4FE] mt-2.5"></div>
            </div>
          </motion.div>

          {/* Right Side: Narrow, Vertically Stacked Mission Panel on Far Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="hidden lg:flex flex-col items-start pl-5 xl:pl-6 border-l border-white/20 py-2 ml-auto mr-0 my-auto shrink-0"
          >
            <span className="text-[10px] xl:text-[10.5px] font-semibold tracking-[0.24em] text-[#F472B6] uppercase mb-2">
              MY MISSION
            </span>
            <p className="font-serif italic text-base lg:text-[18px] xl:text-[19px] leading-[1.28] text-white w-[130px]">
              Creating opportunities for 100,000 women to learn, earn and lead.
            </p>
            <div className="w-8 h-[1.5px] bg-[#D8B4FE] mt-3"></div>
          </motion.div>

        </div>
      </div>

      {/* 6. Aligned Four-Column Statistics Row & Bottom-Right Scroll Indicator */}
      <div className="relative z-10 w-full shrink-0">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 pb-6 sm:pb-8 lg:pb-10 pt-2 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          
          {/* Four Deliberate Columns with Consistent Dividers, Internal Padding, and Baseline Alignment */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-5 gap-x-0 w-full max-w-[760px] xl:max-w-[820px]">
            
            {/* Stat 1: 21+ */}
            <div className="border-l border-white/25 pl-4 sm:pl-5 lg:pl-6 flex flex-col justify-end">
              <div className="font-serif lining-nums text-2xl sm:text-3xl lg:text-[34px] font-medium text-white leading-none tracking-tight mb-1.5">
                21<span className="text-[#D8B4FE]">+</span>
              </div>
              <div className="text-[9px] sm:text-[9.5px] font-semibold tracking-[0.18em] text-[#C0B9D1] uppercase leading-snug whitespace-nowrap">
                YEARS OF EXPERIENCE
              </div>
            </div>

            {/* Stat 2: 272 */}
            <div className="border-l border-white/25 pl-4 sm:pl-5 lg:pl-6 flex flex-col justify-end">
              <div className="font-serif lining-nums text-2xl sm:text-3xl lg:text-[34px] font-medium text-white leading-none tracking-tight mb-1.5">
                272
              </div>
              <div className="text-[9px] sm:text-[9.5px] font-semibold tracking-[0.18em] text-[#C0B9D1] uppercase leading-snug">
                SCREENS ACROSS 5 STATES & SRI LANKA
              </div>
            </div>

            {/* Stat 3: 100,000 */}
            <div className="border-l border-white/25 pl-4 sm:pl-5 lg:pl-6 flex flex-col justify-end">
              <div className="font-serif lining-nums text-2xl sm:text-3xl lg:text-[34px] font-medium text-white leading-none tracking-tight mb-1.5">
                100,000
              </div>
              <div className="text-[9px] sm:text-[9.5px] font-semibold tracking-[0.18em] text-[#C0B9D1] uppercase leading-snug">
                WOMEN EMPOWERMENT MISSION
              </div>
            </div>

            {/* Stat 4: 500+ */}
            <div className="border-l border-white/25 pl-4 sm:pl-5 lg:pl-6 flex flex-col justify-end">
              <div className="font-serif lining-nums text-2xl sm:text-3xl lg:text-[34px] font-medium text-white leading-none tracking-tight mb-1.5">
                500<span className="text-[#D8B4FE]">+</span>
              </div>
              <div className="text-[9px] sm:text-[9.5px] font-semibold tracking-[0.18em] text-[#C0B9D1] uppercase leading-snug whitespace-nowrap">
                BRANDS & PARTNERSHIPS
              </div>
            </div>

          </div>

          {/* Subtle Scroll Indicator at Bottom-Right (Clear Separation from Statistics) */}
          <div className="hidden lg:flex flex-col items-center justify-center gap-1 shrink-0 text-center pl-8 mb-0.5">
            <a
              href="#about"
              aria-label="Scroll to explore"
              className="w-8 h-8 rounded-full border border-white/25 flex items-center justify-center text-white/70 hover:text-white hover:border-[#D8B4FE] transition-all group"
            >
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform text-[#D8B4FE]" />
            </a>
            <span className="text-[8px] font-semibold tracking-[0.2em] text-white/60 uppercase leading-tight block">
              SCROLL<br />TO EXPLORE
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
