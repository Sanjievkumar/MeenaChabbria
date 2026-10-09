import React from 'react';
import { ArrowRight } from 'lucide-react';

export const FeaturedIn: React.FC = () => {
  return (
    <div className="w-full border-t border-[#E3DDD3] bg-[#FAF8F5]/80 py-6">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-6">
          
          {/* Label */}
          <div className="flex items-center gap-3 min-w-[160px]">
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#6B21A8]">
              FEATURED IN
            </span>
            <div className="h-[1px] w-12 bg-[#D0C7B7]"></div>
          </div>

          {/* Logos Grid */}
          <div className="flex-1 flex flex-wrap items-center justify-between gap-8 md:gap-12 px-2">
            
            {/* Times of India */}
            <div className="flex items-center justify-center grayscale hover:grayscale-0 opacity-85 hover:opacity-100 transition-all">
              <img 
                src="/images/logo_toi.png" 
                alt="The Times of India" 
                className="h-7 sm:h-9 object-contain"
                onError={(e) => {
                  // Fallback styled text if image loading fails
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<span class="font-serif font-bold text-sm text-[#18151D] tracking-wider uppercase">THE TIMES OF INDIA</span>';
                }}
              />
            </div>

            <div className="hidden md:block h-8 w-[1px] bg-[#E3DDD3]"></div>

            {/* The Hindu */}
            <div className="flex items-center justify-center grayscale hover:grayscale-0 opacity-85 hover:opacity-100 transition-all">
              <img 
                src="/images/logo_hindu.png" 
                alt="The Hindu" 
                className="h-7 sm:h-9 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<span class="font-serif font-bold text-sm text-[#18151D] tracking-wider uppercase">THE HINDU</span>';
                }}
              />
            </div>

            <div className="hidden md:block h-8 w-[1px] bg-[#E3DDD3]"></div>

            {/* Deccan Chronicle */}
            <div className="flex items-center justify-center grayscale hover:grayscale-0 opacity-85 hover:opacity-100 transition-all">
              <img 
                src="/images/logo_deccan.png" 
                alt="Deccan Chronicle" 
                className="h-6 sm:h-8 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<span class="font-serif font-bold text-sm text-[#18151D] tracking-wider uppercase">Deccan Chronicle</span>';
                }}
              />
            </div>

            <div className="hidden md:block h-8 w-[1px] bg-[#E3DDD3]"></div>

            {/* UCLA Alumni */}
            <div className="flex items-center justify-center grayscale hover:grayscale-0 opacity-85 hover:opacity-100 transition-all">
              <img 
                src="/images/logo_ucla.png" 
                alt="UCLA Alumni" 
                className="h-6 sm:h-8 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<span class="font-sans font-bold text-sm text-[#18151D] tracking-wider"><span class="bg-black text-white px-1 mr-1">UCLA</span> Alumni</span>';
                }}
              />
            </div>

          </div>

          {/* Circle Action Button */}
          <div className="flex justify-end">
            <button 
              aria-label="View press features"
              className="w-10 h-10 rounded-full border border-[#B3A694] flex items-center justify-center hover:bg-[#4C1D95] hover:text-white hover:border-[#4C1D95] transition-all text-[#3D3745] group"
            >
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
