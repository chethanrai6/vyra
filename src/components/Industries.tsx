import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { INDUSTRIES_LIST } from '../data/content';
import type { IndustryItem } from '../types';

interface IndustriesProps {
  onSelectIndustry: (industry: IndustryItem) => void;
}

export const Industries: React.FC<IndustriesProps> = ({ onSelectIndustry }) => {
  return (
    <section id="industries" className="py-16 sm:py-20 lg:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Split Title & Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-12 sm:mb-14">
          <div className="lg:col-span-7 text-left">
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-[#B9826B] block mb-3">
              Made For Brands Like Yours
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-[50px] leading-[1.14] text-[#171513] font-medium">
              Content for Every<br />
              <span className="font-serif italic font-normal text-[#5A4035]">Kind of Brand.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 text-left lg:text-right">
            <p className="font-sans text-[#5A4035] text-sm sm:text-base leading-relaxed lg:max-w-md ml-auto">
              We work with skincare, beauty, fashion, wellness and lifestyle brands to create content that fits their unique style, audience and goals.
            </p>
          </div>
        </div>

        {/* 4 Image Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {INDUSTRIES_LIST.map((industry) => (
            <div
              key={industry.id}
              onClick={() => onSelectIndustry(industry)}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4.2] shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E8D7CA]/70 bg-[#F3EAE2] cursor-pointer"
            >
              {/* Background Photo */}
              <img
                src={industry.image}
                alt={industry.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                loading="lazy"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#171513]/85 via-[#171513]/30 to-transparent transition-opacity duration-300 group-hover:opacity-95" />

              {/* Bottom Details */}
              <div className="absolute bottom-0 inset-x-0 p-5 flex items-center justify-between z-10">
                <div className="text-left">
                  <h3 className="font-serif text-lg sm:text-xl font-medium text-[#FAF7F2] tracking-wide group-hover:text-white transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-[11px] text-[#E8D7CA]/80 font-sans tracking-wide mt-0.5">
                    Tailored UGC Strategy
                  </p>
                </div>

                {/* Circular Arrow Button */}
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-[#FAF7F2] flex items-center justify-center shrink-0 border border-white/30 transition-all duration-300 group-hover:bg-[#FAF7F2] group-hover:text-[#171513] group-hover:scale-110">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Hover Highlight Ring */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#B9826B]/50 pointer-events-none transition-colors duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
