import React from 'react';

export const PrinciplesSection: React.FC = () => {
  return (
    <section
      id="principles"
      className="w-full bg-[#FAF8F5] flex flex-col items-center justify-center py-8 lg:py-12 border-t border-[#EAE4D9]/70 relative"
    >
      <div className="w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 flex justify-center">
        <img
          src="/images/section5.png"
          alt="The Principles - Success is built on what you stand for."
          className="w-full max-w-[1360px] h-auto object-contain block mx-auto rounded-sm shadow-sm"
        />
      </div>
    </section>
  );
};
