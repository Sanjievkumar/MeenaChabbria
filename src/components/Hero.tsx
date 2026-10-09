import React from 'react';
import { motion } from 'framer-motion';
import { FeaturedIn } from './FeaturedIn';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative bg-[#F7F5F0] min-h-[calc(100vh-80px)] flex flex-col justify-between overflow-hidden text-[#18151D]">
      
      {/* Background Soft Purple Lighting & Decorative Panel Accents */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-purple-100/25 rounded-full blur-3xl pointer-events-none -z-0"></div>
      
      {/* Far Right Marble Margin Accent Strip */}
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-purple-200/30 via-purple-100/20 to-transparent pointer-events-none -z-0 border-l border-[#E3DDD3]/40"></div>
      
      {/* Bottom Left Translucent Lavender Block */}
      <div className="absolute left-0 bottom-0 w-28 sm:w-36 h-36 sm:h-44 bg-[#C0A6F2]/30 pointer-events-none -z-0"></div>

      {/* Main Container Grid matching Hero mockup */}
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-12 pt-6 pb-10 flex-1 flex flex-col justify-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
          
          {/* Left Vertical Section Marker "01" */}
          <div className="hidden lg:flex lg:col-span-1 flex-col items-start pt-2 border-r border-[#E3DDD3] pr-4 self-stretch justify-start">
            <span className="text-[12px] font-mono text-[#4C1D95] tracking-widest font-bold">01</span>
            <div className="w-[1px] h-32 bg-[#E3DDD3] mt-4"></div>
          </div>

          {/* Hero Left Main Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 z-10 space-y-6 lg:pr-4"
          >
            {/* Tagline Badge */}
            <div className="flex items-center gap-3">
              <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.25em] text-[#4C1D95] uppercase">
                PERSONAL PORTFOLIO
              </span>
              <div className="h-[1px] w-20 bg-[#C4BAAA]"></div>
            </div>

            {/* Giant Title MEENA CHHABBRIA */}
            <div className="relative pt-1">
              <h1 className="font-serif-title font-medium text-[62px] sm:text-[84px] lg:text-[104px] xl:text-[118px] leading-[0.86] tracking-tight text-[#141118]">
                MEENA<br />
                CHHABBRIA
              </h1>
            </div>

            {/* Sub-headline with Purple Italic "Purpose" */}
            <p className="font-serif-title text-2xl sm:text-3xl lg:text-4xl leading-snug text-[#2C2735] max-w-xl pt-1">
              Great Brands Are Built on People,{' '}
              <span className="text-[#4C1D95] italic font-normal">Purpose</span> & Persistence.
            </p>

            {/* Stat Callout Badge: 21+ */}
            <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 border-t border-[#E3DDD3]">
              <span className="font-serif-title text-6xl sm:text-7xl lg:text-8xl font-semibold text-[#4C1D95] leading-none">
                21+
              </span>
              <div className="hidden sm:block h-14 w-[2px] bg-[#4C1D95]/40"></div>
              <p className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] text-[#4A4354] uppercase leading-relaxed max-w-xs">
                YEARS BUILDING ACROSS CINEMA, ENTERTAINMENT AND EDUTAINMENT
              </p>
            </div>
          </motion.div>

          {/* Hero Center-Right B&W Seated Photo Composition */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-4 relative flex justify-center lg:justify-end min-h-[460px]"
          >
            {/* Left Translucent Lavender Vertical Block */}
            <div className="absolute -left-10 top-0 bottom-0 w-28 sm:w-36 bg-[#D8C7F5]/45 pointer-events-none -z-0"></div>

            {/* Seated B&W Portrait Frame displaying hero_portrait.png */}
            <div className="relative z-10 w-full max-w-[420px] lg:max-w-[460px] aspect-[4/5] p-2 bg-[#EFECE6] border border-[#D5CDBF] shadow-2xl overflow-hidden group">
              <div className="w-full h-full relative overflow-hidden bg-stone-200">
                <img 
                  src="/images/hero_portrait.png" 
                  alt="Meena Chhabbria - Seated B&W Portrait" 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "/images/hero_meena.png";
                  }}
                />
                
                {/* Ambient lighting overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
          </motion.div>

          {/* Hero Far-Right Vertical Typography & Circular Badge Column */}
          <div className="hidden lg:flex lg:col-span-1 flex-col justify-between items-end self-stretch py-4 pl-4 border-l border-[#E3DDD3]/60 relative z-10">
            
            {/* Cursive handwritten rotated text "People Purpose Persistence." */}
            <div className="relative h-64 flex items-center justify-center">
              <div className="font-script-title text-3xl xl:text-4xl text-[#4C1D95] font-bold whitespace-nowrap transform -rotate-90 origin-center tracking-wide">
                People Purpose Persistence.
              </div>
            </div>

            {/* Vertical list and italic statement */}
            <div className="space-y-4 text-right">
              <div className="space-y-1 text-[10px] font-bold tracking-[0.25em] text-[#6B5E77] uppercase">
                <p>CINEMA</p>
                <p>ENTERTAINMENT</p>
                <p>EDUTAINMENT</p>
              </div>

              <div className="pt-2 text-[12px] font-serif italic text-[#4A4354] leading-tight">
                Ideas.<br />
                People.<br />
                Progress.
              </div>

              {/* Circular Badge "THE BODY OF WORK" */}
              <div className="pt-4 flex justify-end">
                <div className="w-16 h-16 rounded-full border border-[#8C7A9C] flex flex-col items-center justify-center p-1 text-center relative group cursor-pointer hover:border-[#4C1D95] transition-colors">
                  <span className="text-[7px] font-bold tracking-widest text-[#4C1D95] uppercase">THE BODY</span>
                  <div className="w-6 h-[1px] bg-[#4C1D95] my-0.5 transform -rotate-45"></div>
                  <span className="text-[7px] font-bold tracking-widest text-[#4C1D95] uppercase">OF WORK</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Featured In Logos Bar at Bottom */}
      <FeaturedIn />

    </section>
  );
};
