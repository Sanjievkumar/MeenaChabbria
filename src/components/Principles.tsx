import React from 'react';
import {
  Laptop,
  Search,
  BookOpen,
  CalendarClock,
  Compass,
  Lightbulb,
  Users
} from 'lucide-react';

interface PrincipleItem {
  id: string;
  number: string;
  icon: React.ElementType;
  title: string;
  subtitle?: string;
}

const principlesList: PrincipleItem[] = [
  {
    id: '01',
    number: '01',
    icon: Laptop,
    title: 'WORK FOR YOUR SKILLS.',
    subtitle: 'NOT FOR APPROVAL.',
  },
  {
    id: '02',
    number: '02',
    icon: Search,
    title: "DON'T SUGARCOAT THE TRUTH",
    subtitle: 'UNTIL IT LOSES ITS PURPOSE.',
  },
  {
    id: '03',
    number: '03',
    icon: BookOpen,
    title: 'LEARN BEFORE YOU LEAD.',
  },
  {
    id: '04',
    number: '04',
    icon: CalendarClock,
    title: "DON'T CARRY YESTERDAY",
    subtitle: 'INTO TOMORROW.',
  },
  {
    id: '05',
    number: '05',
    icon: Compass,
    title: 'YOUR CAREER BELONGS TO YOU.',
  },
  {
    id: '06',
    number: '06',
    icon: Lightbulb,
    title: 'BE CLEAR. BE UNCOMPLICATED.',
  },
  {
    id: '07',
    number: '07',
    icon: Users,
    title: "YOU DON'T NEED EVERYONE",
    subtitle: 'TO LIKE YOU.',
  },
];

export const Principles: React.FC = () => {
  return (
    <section id="principles" className="py-16 sm:py-20 bg-[#F7F5F0] relative overflow-hidden text-[#18151D]">
      {/* Background Soft Purple Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-100/30 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-200/20 rounded-full blur-3xl pointer-events-none -z-0"></div>

      {/* Left Purple Margin Accent Stripe */}
      <div className="absolute left-0 top-0 bottom-0 w-2 sm:w-3 bg-purple-200/40"></div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-12 lg:mb-16">
          <div className="flex items-baseline gap-4 sm:gap-6">
            <span className="font-mono text-sm sm:text-base font-bold text-[#4C1D95]">06</span>
            <h2 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-normal text-[#18151D] tracking-tight">
              The <span className="text-[#4C1D95]">Principles</span>
            </h2>
          </div>
          
          <div className="hidden md:flex flex-1 items-center mx-8">
            <div className="h-[1px] w-full bg-[#D6CEC0]"></div>
          </div>

          <div className="shrink-0">
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.25em] text-[#6B5E77] uppercase">
              WHAT I BELIEVE
            </span>
          </div>
        </div>

        {/* Section Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: 7 Principles List */}
          <div className="lg:col-span-7 space-y-0 lg:pr-8 lg:border-r lg:border-[#E2DAD0]">
            {principlesList.map((principle) => {
              const IconComponent = principle.icon;
              return (
                <div
                  key={principle.id}
                  className="py-4 sm:py-5 border-b border-[#E3DDD3] flex items-center gap-4 sm:gap-6 group hover:bg-[#EFECE5]/40 transition-colors px-2 rounded-md"
                >
                  {/* Number */}
                  <span className="font-mono text-sm sm:text-base font-bold text-[#4C1D95] min-w-[24px]">
                    {principle.number}
                  </span>

                  {/* Vertical Divider */}
                  <div className="h-7 w-[1px] bg-[#D8CFBF] shrink-0"></div>

                  {/* Icon Badge */}
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#E5D7FA] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <IconComponent className="w-5 h-5 text-[#4C1D95]" />
                  </div>

                  {/* Principle Content */}
                  <div className="flex-1">
                    <h3 className="font-serif-title font-bold text-base sm:text-lg lg:text-xl tracking-wide text-[#18151D] leading-snug">
                      {principle.title}
                    </h3>
                    {principle.subtitle && (
                      <span className="block text-xs sm:text-sm font-semibold tracking-wider text-[#6B5E77] uppercase mt-0.5">
                        {principle.subtitle}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Beyond the Boardroom (Open Editorial Layout) */}
          <div className="lg:col-span-5 space-y-8 pl-0 lg:pl-6 relative">
            
            {/* Column Subheader */}
            <div>
              <h3 className="text-[#4C1D95] font-bold text-xs sm:text-sm tracking-[0.25em] uppercase">
                BEYOND THE BOARDROOM
              </h3>
              <div className="h-[1px] bg-[#E3DDD3] mt-3"></div>
            </div>

            {/* Stat Item 1: Books Owned */}
            <div className="relative py-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 min-h-[170px]">
              {/* Soft Lavender Background Circle Accent */}
              <div className="absolute right-2 top-1/2 -translate-y-1/2 w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-[#E5D7FA]/45 pointer-events-none -z-0"></div>

              <div className="relative z-10 space-y-1">
                <div className="font-serif-title text-5xl sm:text-6xl font-normal text-[#4C1D95] tracking-tight">
                  25,000+
                </div>
                <div className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#6B5E77] uppercase">
                  BOOKS OWNED
                </div>
              </div>

              <div className="relative z-10 w-full sm:w-60 md:w-64 h-40 sm:h-44 shrink-0 flex items-center justify-center">
                <img
                  src="/images/books_owned_isolated.png"
                  alt="Books owned illustration"
                  className="max-w-full max-h-full object-contain filter drop-shadow-md transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="h-[1px] bg-[#E3DDD3]"></div>

            {/* Stat Item 2: Pens Collected */}
            <div className="relative py-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 min-h-[170px]">
              {/* Soft Lavender Background Circle Accent */}
              <div className="absolute right-2 top-1/2 -translate-y-1/2 w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-[#E5D7FA]/45 pointer-events-none -z-0"></div>

              <div className="relative z-10 space-y-1">
                <div className="font-serif-title text-5xl sm:text-6xl font-normal text-[#4C1D95] tracking-tight">
                  10,000+
                </div>
                <div className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#6B5E77] uppercase">
                  PENS COLLECTED
                </div>
              </div>

              <div className="relative z-10 w-full sm:w-60 md:w-64 h-40 sm:h-44 shrink-0 flex items-center justify-center">
                <img
                  src="/images/pens_collected_isolated.png"
                  alt="Pens collected illustration"
                  className="max-w-full max-h-full object-contain filter drop-shadow-md transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="h-[1px] bg-[#E3DDD3]"></div>

            {/* Personal Details (No Bullets) */}
            <div className="pt-2 pb-2 space-y-3 relative z-10 overflow-visible">
              <p className="text-sm sm:text-base text-[#4A4453] font-medium leading-relaxed">
                One book a week, still.
              </p>
              <p className="text-sm sm:text-base text-[#4A4453] font-medium leading-relaxed">
                Learning Telugu.
              </p>
              <p className="text-sm sm:text-base text-[#4A4453] font-medium leading-relaxed">
                Cinema, and how it moves people.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
