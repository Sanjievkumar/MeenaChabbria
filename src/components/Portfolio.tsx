import React from 'react';
import { motion } from 'framer-motion';

export const Portfolio: React.FC = () => {
  return (
    <section 
      id="portfolio" 
      className="relative bg-[#F7F5F0] bg-dot-pattern py-20 sm:py-28 border-t border-[#E3DDD3] overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Row matching Mockup Page 4 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Indicator "04" */}
          <div className="hidden lg:flex lg:col-span-1 flex-col items-start pt-2 border-r border-[#E3DDD3] pr-4 self-stretch justify-start">
            <span className="text-[12px] font-mono text-[#6B21A8] tracking-widest font-bold">04</span>
            <div className="w-[1px] h-32 bg-[#E3DDD3] mt-4"></div>
          </div>

          {/* Section Title & Subtitle */}
          <div className="lg:col-span-11 flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#E3DDD3]">
            <div className="flex items-baseline gap-4">
              <h2 className="font-serif-title text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-[#18151D]">
                The <span className="text-[#5B21B6] font-semibold">Portfolio</span>
              </h2>
            </div>
            <div>
              <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.25em] text-[#6B5E77] uppercase">
                WHAT I'M BUILDING NOW
              </span>
            </div>
          </div>

        </div>

        {/* Portfolio Cards Composition */}
        <div className="space-y-6">
          
          {/* TOP ROW: 3 Equal Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1: COLOR PENCIL */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative bg-[#FAF8F5] border border-[#DCD5C9] p-6 sm:p-8 flex flex-col justify-between group hover:border-[#9333EA]/40 hover:shadow-xl transition-all duration-300 min-h-[300px]"
            >
              {/* Corner tick mark accents */}
              <div className="absolute top-2 left-2 text-[10px] text-[#A89F91] font-mono">+</div>
              <div className="absolute top-2 right-2 text-[10px] text-[#A89F91] font-mono">+</div>

              <div className="space-y-3 z-10">
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#6B21A8] uppercase block">
                  CHIEF EXECUTIVE OFFICER
                </span>
                <h3 className="font-serif-title text-3xl sm:text-4xl font-bold tracking-tight text-[#18151D]">
                  COLOR PENCIL
                </h3>
                <p className="text-xs sm:text-sm text-[#524A5C] leading-relaxed max-w-[220px]">
                  Children's edutainment. Micro-dramas, animation and AI-led formats, built for global distribution.
                </p>
              </div>

              {/* Illustration graphic right side */}
              <div className="absolute bottom-4 right-4 w-36 h-36 flex items-center justify-center opacity-90 group-hover:scale-105 transition-transform duration-300">
                <img 
                  src="/images/portfolio_color_pencil.png" 
                  alt="Color Pencil Illustration" 
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </motion.div>

            {/* Card 2: ma.ai */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative bg-[#FAF8F5] border border-[#DCD5C9] p-6 sm:p-8 flex flex-col justify-between group hover:border-[#9333EA]/40 hover:shadow-xl transition-all duration-300 min-h-[300px]"
            >
              <div className="absolute top-2 left-2 text-[10px] text-[#A89F91] font-mono">+</div>
              <div className="absolute top-2 right-2 text-[10px] text-[#A89F91] font-mono">+</div>

              <div className="space-y-3 z-10">
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#6B21A8] uppercase block">
                  FOUNDER
                </span>
                <h3 className="font-serif-title text-3xl sm:text-4xl font-bold tracking-tight text-[#18151D]">
                  ma.ai
                </h3>
                <p className="text-xs sm:text-sm text-[#524A5C] leading-relaxed max-w-[220px]">
                  AI-led products and applications. Building in the category she is still learning, on purpose.
                </p>
              </div>

              <div className="absolute bottom-4 right-4 w-36 h-36 flex items-center justify-center opacity-90 group-hover:scale-105 transition-transform duration-300">
                <img 
                  src="/images/portfolio_ma_ai.png" 
                  alt="ma.ai Illustration" 
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </motion.div>

            {/* Card 3: ALLU CINEMAS */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative bg-[#FAF8F5] border border-[#DCD5C9] p-6 sm:p-8 flex flex-col justify-between group hover:border-[#9333EA]/40 hover:shadow-xl transition-all duration-300 min-h-[300px]"
            >
              <div className="absolute top-2 left-2 text-[10px] text-[#A89F91] font-mono">+</div>
              <div className="absolute top-2 right-2 text-[10px] text-[#A89F91] font-mono">+</div>

              <div className="space-y-3 z-10">
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#6B21A8] uppercase block">
                  FRACTIONAL CMO
                </span>
                <h3 className="font-serif-title text-3xl sm:text-4xl font-bold tracking-tight text-[#18151D]">
                  ALLU CINEMAS
                </h3>
                <p className="text-xs sm:text-sm text-[#524A5C] leading-relaxed max-w-[220px]">
                  Cinema, brand and advertising. Partnerships and talent, managing A-listers.
                </p>
              </div>

              <div className="absolute bottom-4 right-4 w-36 h-36 flex items-center justify-center opacity-90 group-hover:scale-105 transition-transform duration-300">
                <img 
                  src="/images/portfolio_allu_cinemas.png" 
                  alt="Allu Cinemas Illustration" 
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </motion.div>

          </div>

          {/* BOTTOM ROW: 2 Asymmetric Columns (Card 4 & Card 5) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Card 4: UNSTOPPABLE, AND WHAT FOLLOWS IT (Col Span 7) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-7 relative bg-[#FAF8F5] border border-[#DCD5C9] p-6 sm:p-8 flex flex-col justify-between group hover:border-[#9333EA]/40 hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-2 left-2 text-[10px] text-[#A89F91] font-mono">+</div>
              <div className="absolute top-2 right-2 text-[10px] text-[#A89F91] font-mono">+</div>

              <div className="space-y-4">
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#6B21A8] uppercase block">
                  AUTHOR AND PRODUCER
                </span>
                <h3 className="font-serif-title text-3xl sm:text-4xl font-bold tracking-tight text-[#18151D]">
                  UNSTOPPABLE, AND WHAT FOLLOWS IT
                </h3>
              </div>

              {/* 2 Sub-sections with vertical divider line */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#E3DDD3]/60 mt-6 items-center">
                
                {/* Sub-section 1: Book */}
                <div className="flex items-center gap-4">
                  <div className="w-24 h-24 flex-shrink-0 flex items-center justify-center">
                    <img 
                      src="/images/portfolio_unstoppable_book.png" 
                      alt="Unstoppable Book" 
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  <p className="text-xs text-[#524A5C] leading-relaxed">
                    Unstoppable, published 2023. A second book in progress.
                  </p>
                </div>

                {/* Sub-section 2: Production Camera */}
                <div className="flex items-center gap-4 sm:border-l sm:border-[#E3DDD3] sm:pl-6">
                  <div className="w-24 h-24 flex-shrink-0 flex items-center justify-center">
                    <img 
                      src="/images/portfolio_camera.png" 
                      alt="Production Camera" 
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  <p className="text-xs text-[#524A5C] leading-relaxed">
                    Production work that takes the same material to screen.
                  </p>
                </div>

              </div>

            </motion.div>

            {/* Card 5: SHERO MINDSET (Col Span 5) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-5 relative bg-[#FAF8F5] border border-[#DCD5C9] p-6 sm:p-8 flex flex-col justify-between group hover:border-[#9333EA]/40 hover:shadow-xl transition-all duration-300 min-h-[280px]"
            >
              <div className="absolute top-2 left-2 text-[10px] text-[#A89F91] font-mono">+</div>
              <div className="absolute top-2 right-2 text-[10px] text-[#A89F91] font-mono">+</div>

              <div className="space-y-3 z-10">
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#6B21A8] uppercase block">
                  FOUNDER
                </span>
                <h3 className="font-serif-title text-3xl sm:text-4xl font-bold tracking-tight text-[#18151D]">
                  SHERO MINDSET
                </h3>
                <div className="h-[1px] w-12 bg-[#DCD5C9] my-2"></div>
                <p className="text-xs sm:text-sm text-[#524A5C] leading-relaxed max-w-[200px]">
                  Women, career identity, leadership and self-development.
                </p>
              </div>

              <div className="absolute bottom-4 right-4 w-40 h-40 flex items-center justify-center opacity-90 group-hover:scale-105 transition-transform duration-300">
                <img 
                  src="/images/portfolio_shero_mindset.png" 
                  alt="Shero Mindset Silhouette" 
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
