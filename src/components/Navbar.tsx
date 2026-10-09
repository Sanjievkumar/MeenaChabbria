import React from 'react';
import { ArrowRight } from 'lucide-react';

interface NavbarProps {
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection = 'about' }) => {
  const navLinks = [
    { name: 'ABOUT', href: '#about', id: 'about' },
    { name: 'JOURNEY', href: '#journey', id: 'journey' },
    { name: 'PORTFOLIO', href: '#portfolio', id: 'portfolio' },
    { name: 'IDEAS', href: '#ideas', id: 'ideas' },
    { name: 'PRINCIPLES', href: '#principles', id: 'principles' },
    { name: 'NEXT CHAPTER', href: '#next-chapter', id: 'next-chapter' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#F7F5F0]/95 backdrop-blur-md border-b border-[#E3DDD3]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo & Accent Line */}
        <div className="flex items-center gap-4 min-w-[260px]">
          <a href="#" className="font-serif-title font-bold text-xl sm:text-2xl tracking-wider text-[#18151D] hover:opacity-80 transition-opacity">
            MEENA CHHABBRIA
          </a>
          <div className="hidden md:block h-[1px] w-16 bg-[#C4BAAA]"></div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[11px] xl:text-[12px] font-semibold tracking-[0.2em] transition-colors py-1 relative ${
                activeSection === link.id
                  ? 'text-[#4C1D95]'
                  : 'text-[#4A4453] hover:text-[#18151D]'
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#4C1D95]"></span>
              )}
            </a>
          ))}
        </nav>

        {/* Contact CTA Button */}
        <div className="flex items-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#170E2B] text-white text-[11px] sm:text-[12px] font-medium tracking-[0.18em] px-5 py-3 rounded-none hover:bg-[#321B59] transition-all group shadow-sm"
          >
            <span>CONTACT</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>

      {/* Mobile nav bar indicator */}
      <div className="lg:hidden flex overflow-x-auto py-2.5 px-4 bg-[#EFECE5] border-t border-[#E3DDD3] gap-4 scrollbar-none text-[10px] font-semibold tracking-wider">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="whitespace-nowrap text-[#575060] hover:text-[#18151D]"
          >
            {link.name}
          </a>
        ))}
      </div>
    </header>
  );
};
