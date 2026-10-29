import React from 'react';

export const PathSection: React.FC = () => {
  return (
    <section
      id="path"
      className="w-full bg-[#FAF8F5] flex flex-col items-center justify-center py-8 lg:py-12 border-t border-[#EAE4D9]/70 relative"
    >
      {/* Anchor targets for navigation */}
      <div id="portfolio" className="absolute -top-20" tabIndex={-1} aria-hidden="true" />
      <div id="ideas" className="absolute -top-20" tabIndex={-1} aria-hidden="true" />
      <div className="w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 flex justify-center">
        <img
          src="/images/section4.png"
          alt="The Path - From Selling Reject T-Shirts to Building Brands"
          className="w-full max-w-[1360px] h-auto object-contain block mx-auto rounded-sm shadow-sm"
        />
      </div>
    </section>
  );
};
