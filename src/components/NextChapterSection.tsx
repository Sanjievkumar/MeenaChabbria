import React from 'react';

export const NextChapterSection: React.FC = () => {
  return (
    <section
      id="next-chapter"
      className="w-full bg-[#FAF8F5] flex flex-col items-center justify-center py-8 lg:py-12 border-t border-[#EAE4D9]/70 relative"
    >
      <div className="w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 flex justify-center">
        <img
          src="/images/section6.png"
          alt="The Next Chapter - What's Next - Building the next one"
          className="w-full max-w-[1360px] h-auto object-contain block mx-auto rounded-sm shadow-sm"
        />
      </div>
    </section>
  );
};
