import React from 'react';
import {
  Lightbulb,
  GraduationCap,
  PenTool,
  Mic,
  Palette,
  Users,
  Calendar,
  Briefcase,
  Landmark,
  Mail,
  Phone,
  Globe,
  ArrowRight
} from 'lucide-react';

interface FocusArea {
  title: string;
  subtitle: string;
  icon: React.ElementType;
}

const focusAreas: FocusArea[] = [
  {
    title: 'BUILDING',
    subtitle: 'New ventures',
    icon: Lightbulb,
  },
  {
    title: 'LEARNING',
    subtitle: 'New industries',
    icon: GraduationCap,
  },
  {
    title: 'WRITING',
    subtitle: 'The next book',
    icon: PenTool,
  },
  {
    title: 'SPEAKING',
    subtitle: 'New rooms',
    icon: Mic,
  },
  {
    title: 'CREATING',
    subtitle: 'New ideas',
    icon: Palette,
  },
  {
    title: 'PARTNERING',
    subtitle: 'With people building interesting things',
    icon: Users,
  },
];

interface RoomOpportunity {
  label: string;
  icon: React.ElementType;
}

const roomOpportunities: RoomOpportunity[] = [
  { label: 'PODCASTS', icon: Mic },
  { label: 'KEYNOTES', icon: Users },
  { label: 'PANELS', icon: Calendar },
  { label: 'CORPORATE SESSIONS', icon: Briefcase },
  { label: 'UNIVERSITIES', icon: Landmark },
];

export const NextChapter: React.FC = () => {
  return (
    <section id="next-chapter" className="py-16 sm:py-20 bg-[#F7F5F0] relative overflow-hidden text-[#18151D]">
      {/* Background Soft Purple Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-100/30 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-200/20 rounded-full blur-3xl pointer-events-none -z-0"></div>

      {/* Left Purple Margin Accent Stripe */}
      <div className="absolute left-0 top-0 bottom-0 w-2 sm:w-3 bg-purple-200/40"></div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-12 lg:mb-14">
          <div className="flex items-baseline gap-4 sm:gap-6">
            <span className="font-mono text-sm sm:text-base font-bold text-[#4C1D95]">07</span>
            <h2 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-normal text-[#18151D] tracking-tight">
              The <span className="text-[#4C1D95]">Next Chapter</span>
            </h2>
          </div>
          
          <div className="hidden md:flex flex-1 items-center mx-8">
            <div className="h-[1px] w-full bg-[#D6CEC0]"></div>
          </div>

          <div className="shrink-0">
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.25em] text-[#6B5E77] uppercase">
              WHAT'S NEXT
            </span>
          </div>
        </div>

        {/* Section Content Grid: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          
          {/* Left Column (Career Statement, 6 Focus Areas, Bring Me Into The Room) */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Career Statement */}
            <div className="max-w-2xl">
              <blockquote className="font-serif-title text-2xl sm:text-3xl lg:text-4xl text-[#18151D] leading-snug font-normal tracking-tight">
                "I'm not trying to repeat the career I've already built. I'm building{' '}
                <span className="italic text-[#4C1D95] font-serif-title">the next one.</span>"
              </blockquote>
            </div>

            {/* Six Current Focus Areas: 3-Column x 2-Row Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-b border-[#E3DDD3] py-8">
              {focusAreas.map((area, idx) => {
                const IconComponent = area.icon;
                return (
                  <div key={idx} className="flex flex-col items-start space-y-2.5 p-2">
                    <div className="w-11 h-11 rounded-full bg-[#E5D7FA] flex items-center justify-center shadow-sm">
                      <IconComponent className="w-5 h-5 text-[#4C1D95]" />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="font-bold text-xs sm:text-sm tracking-wider text-[#18151D] uppercase">
                        {area.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#6B5E77] font-medium">
                        {area.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bring Me Into The Room Section */}
            <div className="space-y-6 pt-2">
              <div className="flex items-center gap-4">
                <h3 className="text-[#4C1D95] font-bold text-xs sm:text-sm tracking-[0.25em] uppercase shrink-0">
                  BRING ME INTO THE ROOM
                </h3>
                <div className="h-[1px] flex-1 bg-[#E3DDD3]"></div>
              </div>

              {/* 5 Opportunity Strip Items */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 py-4 border-y border-[#E3DDD3] text-center">
                {roomOpportunities.map((opp, idx) => {
                  const IconComponent = opp.icon;
                  return (
                    <div
                      key={idx}
                      className="flex flex-col items-center justify-center space-y-2 p-2 sm:border-r last:border-r-0 border-[#E3DDD3]"
                    >
                      <IconComponent className="w-5 h-5 text-[#4C1D95]" />
                      <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-[#18151D] uppercase">
                        {opp.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Layered Portrait Composition & Contact Panel */}
          <div className="lg:col-span-5 relative flex flex-col items-center lg:items-end min-h-[500px] pt-2">
            
            {/* Soft Semicircular Lavender Backdrop Graphic Accent */}
            <div className="absolute right-0 top-0 w-72 h-72 sm:w-88 sm:h-88 md:w-[400px] md:h-[400px] rounded-full bg-[#E5D7FA]/60 blur-sm pointer-events-none -z-0"></div>
            
            {/* Vertical Soft Lavender Arch Shadow Shape */}
            <div className="absolute right-10 top-0 w-44 h-80 bg-purple-200/30 rounded-t-full blur-md pointer-events-none -z-0"></div>

            {/* Portrait Image (Cutout integrated seamlessly onto cream background) */}
            <div className="relative z-10 w-full max-w-md lg:max-w-none flex justify-center lg:justify-end pr-0 lg:pr-4">
              <img
                src="/images/hero_meena_cutout_authentic.png"
                alt="Meena Chhabbria Portrait"
                className="w-auto h-[380px] sm:h-[440px] lg:h-[480px] object-contain drop-shadow-xl transform hover:scale-[1.02] transition-transform duration-500"
              />
            </div>

            {/* Dark Purple Contact Panel Overlay (Overlapping lower-right of portrait) */}
            <div className="w-full mt-[-60px] sm:mt-[-80px] lg:mt-[-90px] relative z-20 bg-[#180E29] text-white p-6 sm:p-8 rounded-xl shadow-2xl border border-purple-900/40">
              <h3 className="font-serif-title text-2xl sm:text-3xl font-normal leading-tight mb-6">
                Let's build something <br />
                <span className="italic text-purple-300 font-serif-title">worth remembering.</span>
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-purple-100 font-medium">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-purple-300 shrink-0" />
                  <span>Add email</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-purple-300 shrink-0" />
                  <span>Add phone</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-4 h-4 text-purple-300 shrink-0" />
                  <a href="https://meenachabbria.com" target="_blank" rel="noopener noreferrer" className="hover:underline text-purple-200">
                    meenachabbria.com
                  </a>
                </div>
              </div>

              {/* Action Circle Button (Functional link to #contact) */}
              <div className="absolute right-6 bottom-6">
                <a
                  href="#contact"
                  className="w-12 h-12 rounded-full border border-purple-400/50 flex items-center justify-center text-white hover:bg-purple-800/50 hover:scale-105 transition-all shadow-md group"
                  title="Contact Meena"
                >
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
