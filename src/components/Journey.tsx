import React from 'react';
import { motion } from 'framer-motion';

interface JourneyStep {
  number: string;
  title: string;
  description: string;
}

const journeySteps: JourneyStep[] = [
  {
    number: '01',
    title: 'CHILDHOOD',
    description: "A Sindhi refugee colony. Her father's tailoring business.",
  },
  {
    number: '02',
    title: 'FIRST SALE',
    description: 'Reject T-shirts, sold door to door.',
  },
  {
    number: '03',
    title: 'FIRST JOB',
    description: 'Preschool, caregiving and teaching.',
  },
  {
    number: '04',
    title: 'SHIAMAK DAVAR',
    description: 'Telecaller to running the South Zone business.',
  },
  {
    number: '05',
    title: 'INOX',
    description: 'Marketing. The entry into cinema.',
  },
  {
    number: '06',
    title: 'PVR CINEMAS',
    description: 'Fifteen years. Sales, alliances and partnerships. South India and Sri Lanka.',
  },
  {
    number: '07',
    title: 'OWN VENTURES',
    description: 'Shero Mindset founded. Unstoppable published, 2023.',
  },
  {
    number: '08',
    title: 'NOW',
    description: 'Color Pencil, ma.ai and Allu Cinemas.',
  },
];

export const Journey: React.FC = () => {
  return (
    <section 
      id="journey" 
      className="relative bg-[#140E1E] text-white py-20 sm:py-28 overflow-hidden border-t border-[#2A1F3D]"
    >
      {/* Background Subtle Gradient & Grid Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.08),transparent_60%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.06),transparent_60%)] pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header Row matching Mockup Page 3 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[#2C2142] gap-4">
          
          {/* Left: Indicator & Main Title */}
          <div className="flex items-baseline gap-4">
            <span className="text-xs font-mono text-[#A78BFA] tracking-widest font-bold">03</span>
            <h2 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white">
              The Journey
            </h2>
          </div>

          {/* Right: Subtitle / Tagline */}
          <div className="text-left md:text-right">
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.25em] text-[#9CA3AF] uppercase">
              FROM SELLING REJECT T-SHIRTS TO BUILDING BRANDS
            </span>
          </div>

        </div>

        {/* 8-Step Timeline Grid (4 cols x 2 rows on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 pt-12">
          {journeySteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.07 }}
              className="relative pt-5 pb-6 px-4 flex flex-col justify-between group transition-all duration-300 rounded-sm border-t border-[#33274A] hover:bg-[#1F172E]/90 hover:border-[#8B5CF6]/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]"
            >
              {/* Top border line indicator */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#33274A] group-hover:bg-[#A78BFA] transition-colors duration-300"></div>

              <div className="space-y-4">
                {/* Step Number & Vertical Accent Bar */}
                <div className="space-y-2">
                  <span className="text-sm font-mono tracking-widest block font-bold text-[#A78BFA] group-hover:text-[#C4B5FD] transition-colors duration-300">
                    {step.number}
                  </span>
                  <div className="w-[2px] h-4 bg-[#6D28D9] group-hover:bg-[#A78BFA] transition-colors duration-300"></div>
                </div>

                {/* Step Title */}
                <h3 className="text-base sm:text-lg font-bold tracking-wider uppercase text-white group-hover:text-[#D8B4FE] transition-colors duration-300">
                  {step.title}
                </h3>

                {/* Step Description Copy */}
                <p className="text-xs sm:text-sm text-[#9CA3AF] group-hover:text-[#E5E7EB] leading-relaxed font-sans font-normal transition-colors duration-300">
                  {step.description}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
};
