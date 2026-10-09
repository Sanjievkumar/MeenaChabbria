import React from 'react';
import { motion } from 'framer-motion';
import { 
  Flag, 
  Lightbulb, 
  BarChart3, 
  Gem, 
  Tv, 
  Calendar, 
  Mic, 
  GraduationCap, 
  Users 
} from 'lucide-react';

export const Ideas: React.FC = () => {
  return (
    <section 
      id="ideas" 
      className="relative bg-[#F7F5F0] bg-marble-texture py-20 sm:py-28 border-t border-[#E3DDD3] overflow-hidden"
    >
      {/* Subtle purple background decorative accent blocks matching mockup edges */}
      <div className="absolute left-0 top-1/4 w-12 h-96 bg-[#D8C7F5]/25 pointer-events-none -z-0"></div>
      <div className="absolute right-0 top-12 w-16 h-80 bg-[#E9DCFF]/35 pointer-events-none -z-0"></div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 1. SECTION HEADER (05 | The Ideas | INTELLECTUAL PROPERTY) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
          
          {/* Vertical "05" Marker */}
          <div className="hidden lg:flex lg:col-span-1 flex-col items-start pt-2 border-r border-[#E3DDD3] pr-4 self-stretch justify-start">
            <span className="text-[12px] font-mono text-[#6B21A8] tracking-widest font-bold">05</span>
            <div className="w-[1px] h-28 bg-[#E3DDD3] mt-3"></div>
          </div>

          {/* Title Row with Horizontal Divider & Right Aligned INTELLECTUAL PROPERTY */}
          <div className="lg:col-span-11 flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#E3DDD3]">
            <div className="flex items-center gap-6 flex-1">
              <h2 className="font-serif-title text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-[#18151D] whitespace-nowrap">
                The <span className="text-[#5B21B6] font-semibold">Ideas</span>
              </h2>
              <div className="hidden md:block h-[1px] flex-1 bg-[#D0C7B7] mt-4"></div>
            </div>

            <div>
              <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.25em] text-[#6B5E77] uppercase whitespace-nowrap">
                INTELLECTUAL PROPERTY
              </span>
            </div>
          </div>

        </div>

        {/* 2. THREE MAIN CONTENT CARDS (BALANCED HORIZONTAL COMPOSITION) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-14">
          
          {/* CARD 01: Shero Mindset (Framework) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-[#FAF8F5] border border-[#DCD5C9] p-6 sm:p-8 flex flex-col justify-between group hover:border-[#9333EA]/40 hover:shadow-xl transition-all duration-300 min-h-[440px]"
          >
            {/* Card Content Split: HTML Text Left + Seamless 3D Artwork Right */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-start relative mb-4">
              
              {/* Left HTML Text Block */}
              <div className="sm:col-span-7 space-y-3 z-10">
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#6B21A8] uppercase block">
                  FRAMEWORK
                </span>
                
                <h3 className="font-serif-title text-3xl sm:text-4xl font-bold tracking-tight text-[#18151D]">
                  Shero<br />Mindset
                </h3>

                <div className="w-12 h-[1px] bg-[#C4BAAA]"></div>

                <p className="text-xs sm:text-sm text-[#524A5C] leading-relaxed">
                  A proprietary philosophy on women, identity, career and leadership.
                </p>
              </div>

              {/* Right Seamless Artwork (No Border Box, No Text) */}
              <div className="sm:col-span-5 flex items-center justify-end h-full pt-1">
                <div className="w-full max-w-[210px] h-56 sm:h-64 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/images/shero_seamless.png" 
                    alt="Shero Mindset Seamless Editorial Artwork" 
                    className="w-full h-full object-contain object-right-center drop-shadow-sm"
                  />
                </div>
              </div>

            </div>

            {/* Bottom 4 Framework Component Pillars */}
            <div className="grid grid-cols-4 gap-1 pt-5 border-t border-[#E3DDD3] text-center">
              
              <div className="space-y-1 flex flex-col items-center">
                <Flag className="w-4 h-4 text-[#6B21A8]" />
                <span className="text-[9px] font-bold tracking-wider text-[#3D3745] uppercase block leading-tight">
                  COURAGE
                </span>
              </div>

              <div className="space-y-1 flex flex-col items-center border-l border-[#E3DDD3] pl-1">
                <Lightbulb className="w-4 h-4 text-[#6B21A8]" />
                <span className="text-[9px] font-bold tracking-wider text-[#3D3745] uppercase block leading-tight">
                  POSITIVE THINKING
                </span>
              </div>

              <div className="space-y-1 flex flex-col items-center border-l border-[#E3DDD3] pl-1">
                <BarChart3 className="w-4 h-4 text-[#6B21A8]" />
                <span className="text-[9px] font-bold tracking-wider text-[#3D3745] uppercase block leading-tight">
                  STRENGTHS
                </span>
              </div>

              <div className="space-y-1 flex flex-col items-center border-l border-[#E3DDD3] pl-1">
                <Gem className="w-4 h-4 text-[#6B21A8]" />
                <span className="text-[9px] font-bold tracking-wider text-[#3D3745] uppercase block leading-tight">
                  PERSONAL BRAND IDENTITY
                </span>
              </div>

            </div>
          </motion.div>

          {/* CARD 02: Unstoppable (Dark Luxury Theme Feature Card) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative bg-[#160E24] text-white border border-[#32234B] p-6 sm:p-8 flex flex-col justify-between group hover:border-[#8B5CF6]/60 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all duration-300 min-h-[440px]"
          >
            <div className="relative space-y-4 flex-1 flex flex-col justify-between">
              
              {/* Upper HTML Text Content */}
              <div className="space-y-3 z-10 max-w-[280px]">
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#C4B5FD] uppercase block">
                  BOOK, 2023
                </span>

                <h3 className="font-serif-title text-3xl sm:text-4xl font-bold tracking-tight text-white">
                  Unstoppable
                </h3>

                <div className="w-12 h-[1px] bg-[#4C3B66]"></div>

                <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed">
                  From a refugee-colony upbringing through early jobs, marriage and motherhood to a career built in sales and cinema.
                </p>
              </div>

              {/* Lower-Right Seamless Book Artwork (Authentic Title, No Invented Text) */}
              <div className="w-full flex justify-end pt-2">
                <div className="w-full max-w-[250px] h-48 sm:h-56 flex items-end justify-end group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/images/unstoppable_seamless.png" 
                    alt="Unstoppable Book Artwork" 
                    className="w-full h-full object-contain object-bottom-right"
                  />
                </div>
              </div>

            </div>

            {/* Bottom Footer Label */}
            <div className="pt-5 border-t border-[#2C1F42] mt-3">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#A78BFA] uppercase block">
                LAUNCHED AT PVR JUHU, MUMBAI
              </span>
            </div>
          </motion.div>

          {/* CARD 03: The Sun, The Moon and The Star (In Progress) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative bg-[#FAF8F5] border border-[#DCD5C9] p-6 sm:p-8 flex flex-col justify-between group hover:border-[#9333EA]/40 hover:shadow-xl transition-all duration-300 min-h-[440px]"
          >
            <div className="relative space-y-4 flex-1 flex flex-col justify-between">
              
              {/* Upper HTML Text Content */}
              <div className="space-y-3 z-10 max-w-[280px]">
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#6B21A8] uppercase block">
                  IN PROGRESS
                </span>

                <h3 className="font-serif-title text-3xl sm:text-4xl font-bold tracking-tight text-[#18151D]">
                  The Sun, The<br />
                  Moon and The Star
                </h3>

                <div className="w-12 h-[1px] bg-[#C4BAAA]"></div>

                <p className="text-xs sm:text-sm text-[#524A5C] leading-relaxed">
                  A story about ambition, friendship, betrayal, power and rebuilding.
                </p>
              </div>

              {/* Lower-Right Seamless Cinema Artwork (No Border Box, No Text) */}
              <div className="w-full flex justify-end pt-2">
                <div className="w-full max-w-[250px] h-48 sm:h-56 flex items-end justify-end group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/images/sun_moon_star_seamless.png" 
                    alt="The Sun, The Moon and The Star Cinema Artwork" 
                    className="w-full h-full object-contain object-bottom-right"
                  />
                </div>
              </div>

            </div>

            {/* Bottom Footer Label */}
            <div className="pt-5 border-t border-[#E3DDD3] mt-3">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#3D3745] uppercase block">
                BOOK AND SCREEN
              </span>
            </div>
          </motion.div>

        </div>

        {/* 3. BOTTOM STRIP: WHERE THE WORK HAS TRAVELLED */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#FAF8F5] border border-[#DCD5C9] p-5 flex flex-col lg:flex-row items-center justify-between gap-6"
        >
          {/* Left Tagline */}
          <div className="flex items-center gap-3 min-w-[240px]">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#6B21A8] uppercase">
              WHERE THE WORK HAS TRAVELLED
            </span>
          </div>

          {/* 5 Travelled Outlets Grid */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-5 gap-4 w-full">
            
            {/* Item 1: MEDIA */}
            <div className="flex items-center justify-center gap-2 py-2 border-r border-[#E3DDD3] last:border-r-0">
              <Tv className="w-4 h-4 text-[#6B21A8]" />
              <span className="text-[11px] font-bold tracking-widest text-[#3D3745] uppercase">
                MEDIA
              </span>
            </div>

            {/* Item 2: EVENTS */}
            <div className="flex items-center justify-center gap-2 py-2 border-r border-[#E3DDD3] last:border-r-0">
              <Calendar className="w-4 h-4 text-[#6B21A8]" />
              <span className="text-[11px] font-bold tracking-widest text-[#3D3745] uppercase">
                EVENTS
              </span>
            </div>

            {/* Item 3: PODCASTS */}
            <div className="flex items-center justify-center gap-2 py-2 border-r border-[#E3DDD3] last:border-r-0">
              <Mic className="w-4 h-4 text-[#6B21A8]" />
              <span className="text-[11px] font-bold tracking-widest text-[#3D3745] uppercase">
                PODCASTS
              </span>
            </div>

            {/* Item 4: UNIVERSITIES */}
            <div className="flex items-center justify-center gap-2 py-2 border-r border-[#E3DDD3] last:border-r-0">
              <GraduationCap className="w-4 h-4 text-[#6B21A8]" />
              <span className="text-[11px] font-bold tracking-widest text-[#3D3745] uppercase">
                UNIVERSITIES
              </span>
            </div>

            {/* Item 5: PANELS */}
            <div className="flex items-center justify-center gap-2 py-2">
              <Users className="w-4 h-4 text-[#6B21A8]" />
              <span className="text-[11px] font-bold tracking-widest text-[#3D3745] uppercase">
                PANELS
              </span>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
