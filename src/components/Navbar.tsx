import React, { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'ABOUT', href: '#about', id: 'about' },
    { name: 'JOURNEY', href: '#journey', id: 'journey' },
    { name: 'IDEAS', href: '#ideas', id: 'ideas' },
    { name: 'PRINCIPLES', href: '#principles', id: 'principles' },
    { name: 'NEXT CHAPTER', href: '#next-chapter', id: 'next-chapter' },
  ];

  return (
    <header className="relative w-full z-40 shrink-0">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 h-16 lg:h-20 flex items-center justify-between">
        
        {/* Left: Brand Wordmark with Horizontal Rule Line */}
        <div className="flex items-center">
          <a
            href="#hero"
            className="font-serif tracking-[0.16em] font-medium text-base sm:text-lg text-white hover:text-purple-200 transition-colors uppercase whitespace-nowrap"
          >
            MEENA CHHABBRIA
          </a>
          <span className="hidden md:inline-block w-12 lg:w-16 h-[1px] bg-white/30 ml-4 lg:ml-5"></span>
        </div>

        {/* Center: Desktop Navigation Links (Clean, No Active Underline, Matching Reference) */}
        <nav className="hidden lg:flex items-center space-x-7 xl:space-x-9">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10.5px] xl:text-[11.5px] font-medium tracking-[0.2em] transition-colors py-1 uppercase whitespace-nowrap text-white/80 hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Contact CTA Button */}
        <div className="hidden sm:flex items-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-[#0C0A10] text-[10.5px] font-semibold tracking-[0.18em] px-4 lg:px-5 py-2 rounded-sm hover:bg-[#F3E8FF] hover:text-[#3B0764] transition-all group shadow-sm whitespace-nowrap"
          >
            <span>CONTACT</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-[#0C0A10]" />
          </a>
        </div>

        {/* Mobile / Tablet Menu Button */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="#contact"
            className="sm:hidden inline-flex items-center gap-1.5 bg-white text-[#0C0A10] text-[10px] font-semibold tracking-[0.15em] px-3 py-1.5 rounded-sm"
          >
            <span>CONTACT</span>
            <ArrowRight className="w-3 h-3 text-[#0C0A10]" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-white/80 hover:text-white transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full inset-x-0 bg-[#0C0A10]/98 backdrop-blur-xl border-b border-white/10 px-6 py-6 shadow-2xl z-50">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-medium tracking-[0.22em] text-white/80 hover:text-white hover:pl-2 transition-all uppercase py-1 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 w-full bg-white text-[#0C0A10] text-xs font-semibold tracking-[0.18em] py-3 rounded-sm hover:bg-purple-50 transition-colors"
              >
                <span>CONTACT</span>
                <ArrowRight className="w-4 h-4 text-[#0C0A10]" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
