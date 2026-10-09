import React, { useState } from 'react';
import {
  Users,
  Calendar,
  MessageSquare,
  Mic,
  Briefcase,
  Landmark,
  Mail,
  Phone,
  Globe,
  ArrowUpRight,
  Check
} from 'lucide-react';

interface EngagementOpportunity {
  title: string;
  icon: React.ElementType;
}

const opportunities: EngagementOpportunity[] = [
  { title: 'KEYNOTES', icon: Users },
  { title: 'PANELS', icon: Calendar },
  { title: 'FIRESIDE CONVERSATIONS', icon: MessageSquare },
  { title: 'PODCASTS', icon: Mic },
  { title: 'CORPORATE SESSIONS', icon: Briefcase },
  { title: 'UNIVERSITIES', icon: Landmark },
];

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyWebsite = () => {
    navigator.clipboard.writeText('https://meenachabbria.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-[#140E1E] text-white relative overflow-hidden">
      {/* Background Soft Purple Lighting Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-800/15 rounded-full blur-3xl pointer-events-none -z-0"></div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-16 pb-8 border-b border-purple-900/40">
          <div className="space-y-2">
            <span className="font-mono text-xs sm:text-sm font-bold text-purple-400 tracking-wider">
              08 / GET IN TOUCH
            </span>
            <h2 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-tight">
              Let's build something <br className="hidden sm:inline" />
              <span className="italic text-purple-300 font-serif-title">worth remembering.</span>
            </h2>
          </div>

          <div>
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.25em] text-purple-300 uppercase">
              ENGAGEMENT & SPEAKING
            </span>
          </div>
        </div>

        {/* 6 Engagement Opportunities Grid */}
        <div className="mb-16">
          <div className="mb-6">
            <h3 className="text-xs sm:text-sm font-bold tracking-[0.2em] text-purple-300 uppercase">
              AVAILABLE FOR
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {opportunities.map((opp, idx) => {
              const IconComponent = opp.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#1C142B] p-6 rounded-xl border border-purple-900/40 hover:border-purple-500/50 hover:bg-[#231A36] transition-all flex flex-col items-center text-center space-y-4 group shadow-md"
                >
                  <div className="w-12 h-12 rounded-full bg-purple-950/80 border border-purple-800/60 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComponent className="w-5 h-5 text-purple-300" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold tracking-wider text-purple-100 uppercase leading-snug">
                    {opp.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact Info Card Block */}
        <div className="bg-[#1C142B] p-8 sm:p-10 rounded-2xl border border-purple-900/50 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-4 text-center md:text-left">
            <h3 className="font-serif-title text-2xl sm:text-3xl text-white font-normal">
              Direct Contact & Enquiries
            </h3>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm text-purple-200 font-medium">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-purple-400" />
                <span>Add email</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-purple-400" />
                <span>Add phone</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-purple-400" />
                <a
                  href="https://meenachabbria.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-300 hover:text-white underline underline-offset-4 transition-colors inline-flex items-center gap-1"
                >
                  meenachabbria.com
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          <div className="shrink-0">
            <button
              onClick={handleCopyWebsite}
              className="inline-flex items-center gap-2 bg-[#4C1D95] hover:bg-[#5B21B6] text-white text-xs font-bold tracking-[0.18em] px-6 py-4 rounded-lg transition-all shadow-md active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-green-300" />
                  <span>COPIED LINK</span>
                </>
              ) : (
                <>
                  <Globe className="w-4 h-4 text-purple-200" />
                  <span>SHARE WEBSITE</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
