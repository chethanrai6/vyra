import React from 'react';
import { ArrowRight } from 'lucide-react';

interface WhatWeCreateProps {
  onExploreServices: () => void;
}

export const WhatWeCreate: React.FC<WhatWeCreateProps> = ({ onExploreServices }) => {
  return (
    <section id="what-we-create" className="py-16 sm:py-20 lg:py-24 bg-[#FAF6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-5 text-left order-2 lg:order-1">
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.24em] text-[#C0836B] block mb-4">
              What We Create
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-[54px] leading-[1.12] text-[#171513] font-medium mb-6">
              Content for<br />
              <span className="font-serif italic font-normal text-[#5A4035]">Every Brand Story.</span>
            </h2>

            <p className="font-sans text-[#5A4035] text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
              From scroll-stopping videos to aesthetic product photos, we create content that feels real, relatable and aligned with your brand.
            </p>

            <button
              onClick={onExploreServices}
              className="group inline-flex items-center gap-3 bg-[#FAF6F0] hover:bg-[#F7EFE8] text-[#171513] border border-[#EADCCE] text-sm font-medium px-6 py-3.5 rounded-full transition-all duration-200 active:scale-95 shadow-xs hover:shadow cursor-pointer"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 text-[#171513]" />
            </button>
          </div>

          {/* Right Editorial Lifestyle Photo with Handwritten Script */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative rounded-[2rem] overflow-hidden aspect-[16/10] sm:aspect-[16/9] shadow-[0_16px_40px_rgba(90,64,53,0.08)] border border-[#EADCCE]/90 bg-[#F7EFE8]">
              <img
                src="/images/what-we-create.jpg"
                alt="Woman applying skincare cream with aesthetic jar, glowing skin"
                className="w-full h-full object-cover object-[center_35%] transition-transform duration-700 hover:scale-103"
                loading="lazy"
              />

              {/* Soft overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#171513]/25 via-transparent to-transparent pointer-events-none" />

              {/* Handwritten Script Overlay on Right */}
              <div className="absolute top-6 right-6 sm:top-8 sm:right-10 text-right z-10 pointer-events-none select-none">
                <div className="font-script text-3xl sm:text-4xl text-[#FAF7F2] font-semibold leading-tight drop-shadow-[0_2px_8px_rgba(23,21,19,0.7)] rotate-[-3deg]">
                  Real Moments<br />
                  <span className="text-[#FAF7F2] underline decoration-[#C0836B]/80 decoration-2 underline-offset-4">Real Connection</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
