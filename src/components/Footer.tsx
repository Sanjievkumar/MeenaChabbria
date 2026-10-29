import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const footerNavLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'JOURNEY', href: '#journey' },
    { name: 'IDEAS', href: '#ideas' },
    { name: 'PRINCIPLES', href: '#principles' },
    { name: 'NEXT CHAPTER', href: '#next-chapter' },
  ];

  return (
    <footer className="bg-[#0D0914] text-purple-200/80 border-t border-purple-900/40 py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1440px] mx-auto flex flex-col space-y-8">
        
        {/* Top Footer Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-8 border-b border-purple-900/30">
          
          {/* Brand Name */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="font-serif-title font-bold text-xl sm:text-2xl tracking-wider text-white hover:text-purple-300 transition-colors"
            >
              MEENA CHHABBRIA
            </a>
          </div>

          {/* Section Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[11px] font-bold tracking-[0.2em]">
            {footerNavLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-purple-300/80 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Official Website Link */}
          <div>
            <a
              href="https://meenachabbria.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold tracking-wider text-purple-300 hover:text-white transition-colors inline-flex items-center gap-1.5"
            >
              <span>meenachabbria.com</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};
