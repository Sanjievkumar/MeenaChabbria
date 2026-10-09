import React from 'react';
import { motion } from 'framer-motion';

export const Introduction: React.FC = () => {
  return (
    <section id="about" className="relative bg-[#F7F5F0] py-16 sm:py-24 border-t border-[#E3DDD3] overflow-hidden text-[#18151D]">
      
      {/* Soft Lavender Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-100/25 rounded-full blur-3xl pointer-events-none -z-0"></div>

      {/* Far Right Marble Margin Accent Strip */}
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-purple-200/30 via-purple-100/20 to-transparent pointer-events-none -z-0 border-l border-[#E3DDD3]/40"></div>

      {/* Left Bottom Translucent Lavender Block */}
      <div className="absolute left-0 bottom-12 w-24 sm:w-32 h-44 bg-[#D8C7F5]/40 pointer-events-none -z-0"></div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Top Content Row: Left Bio & Right Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
          
          {/* Left Vertical Section Marker "02" */}
          <div className="hidden lg:flex lg:col-span-1 flex-col items-start pt-2 border-r border-[#E3DDD3] pr-4 self-stretch justify-start">
            <span className="text-[12px] font-mono text-[#4C1D95] tracking-widest font-bold">02</span>
            <div className="w-[1px] h-32 bg-[#E3DDD3] mt-4"></div>
          </div>

          {/* Left Main Bio Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-7 z-10 lg:pr-4"
          >
            {/* Tagline Subhead */}
            <div className="flex items-center gap-3">
              <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.25em] text-[#4C1D95] uppercase">
                INTRODUCTION
              </span>
              <div className="h-[1px] w-20 bg-[#C4BAAA]"></div>
            </div>

            {/* Headline "Who Is Meena?" */}
            <h2 className="font-serif-title text-[54px] sm:text-[72px] lg:text-[88px] leading-[0.92] tracking-tight font-medium text-[#18151D]">
              Who Is <br />
              <span className="text-[#4C1D95] font-semibold">Meena?</span>
            </h2>

            {/* Paragraph 1 - Lead Bio */}
            <p className="text-lg sm:text-xl font-normal leading-relaxed text-[#2C2735] tracking-tight max-w-xl">
              I am a business and brand leader who has spent the last 21+ years building across cinema, sales, marketing, partnerships and entrepreneurship.
            </p>

            <div className="h-[1px] bg-[#E3DDD3]/70 max-w-xl"></div>

            {/* Paragraph 2 - Supporting Bio */}
            <p className="text-xs sm:text-sm font-normal leading-relaxed text-[#524A5C] max-w-xl">
              I've worked inside one of India's largest cinema businesses, built relationships with hundreds of brands, created my own ventures, written a book, reinvented my career and repeatedly walked into industries where I had to learn everything from scratch.
            </p>

            {/* Quote Block with Thin Purple Left Vertical Rule */}
            <div className="border-l-[2px] border-[#4C1D95] pl-6 py-2 my-4">
              <p className="font-serif-title text-xl sm:text-2xl lg:text-2xl text-[#4C1D95] font-medium leading-snug">
                I don't believe in staying relevant. <br />
                I believe in staying curious.
              </p>
            </div>

          </motion.div>

          {/* Right Section Portrait & Translucent Layered Composition */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end self-center mt-8 lg:mt-0 min-h-[460px]"
          >
            {/* Translucent Lavender Underlay Rectangles matching Intro mockup */}
            <div className="absolute -left-12 top-10 w-28 h-80 bg-[#D8C7F5]/45 pointer-events-none -z-0"></div>
            <div className="absolute right-8 -bottom-4 w-28 h-28 bg-[#C4A7F5]/40 pointer-events-none -z-0"></div>

            {/* Magenta Blazer Solo Portrait Container displaying intro_portrait.png */}
            <div className="relative z-10 w-full max-w-[440px] aspect-[4/5] p-2 bg-[#EFECE6] border border-[#D5CDBF] shadow-2xl overflow-hidden group">
              <div className="w-full h-full relative overflow-hidden bg-stone-200">
                <img 
                  src="/images/intro_portrait.png" 
                  alt="Meena Chhabbria - Magenta Blazer Solo Portrait" 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "/images/intro_meena.png";
                  }}
                />
                
                {/* Soft ambient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>

          </motion.div>

        </div>

        {/* Bottom Full-Width 3-Column Statistics Row matching Intro Mockup */}
        <div className="mt-14 pt-8 pb-4 border-t border-b border-[#E3DDD3] grid grid-cols-1 sm:grid-cols-3 gap-8 items-center">
          
          {/* Stat 1 */}
          <div className="flex items-center gap-5">
            <span className="font-serif-title text-6xl sm:text-7xl lg:text-8xl font-medium text-[#4C1D95] leading-none shrink-0">
              21+
            </span>
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-[#4A4354] uppercase leading-relaxed">
              YEARS BUILDING
            </span>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-5 sm:border-l sm:border-[#E3DDD3] sm:pl-8">
            <span className="font-serif-title text-6xl sm:text-7xl lg:text-8xl font-medium text-[#4C1D95] leading-none shrink-0">
              272
            </span>
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-[#4A4354] uppercase leading-relaxed max-w-[200px]">
              SCREENS ACROSS 44 CINEMAS, FIVE STATES AND SRI LANKA
            </span>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center gap-5 sm:border-l sm:border-[#E3DDD3] sm:pl-8">
            <span className="font-serif-title text-6xl sm:text-7xl lg:text-8xl font-medium text-[#4C1D95] leading-none shrink-0">
              500+
            </span>
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-[#4A4354] uppercase leading-relaxed max-w-[180px]">
              BRANDS AND PARTNERSHIPS
            </span>
          </div>

        </div>

      </div>

    </section>
  );
};
