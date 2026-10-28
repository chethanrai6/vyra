import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { ProductScene3D } from './ProductScene3D';

interface HeroProps {
  onOpenContact: (serviceName?: string) => void;
  onViewWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onViewWork }) => {
  return (
    <section id="home" className="pt-28 sm:pt-36 pb-12 sm:pb-16 lg:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            
            {/* Small Top Tagline */}
            <div className="inline-flex items-center gap-2 mb-4 sm:mb-5">
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-[#B9826B]">
                UGC Content Creation Studio
              </span>
            </div>

            {/* Editorial Main Heading */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-[68px] leading-[1.08] tracking-[-0.01em] text-[#171513] font-medium mb-6">
              Content<br />
              That Connects<br />
              <span className="text-[#B9826B] font-serif italic font-normal">Brands to People.</span>
            </h1>

            {/* Supporting Description */}
            <p className="font-sans text-[#5A4035] text-base sm:text-lg leading-relaxed max-w-xl font-normal mb-8 sm:mb-10">
              We create authentic, engaging and high-quality UGC content for skincare, beauty, fashion and lifestyle brands that inspires, builds trust and drives real engagement.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 sm:mb-12">
              <button
                onClick={() => onOpenContact()}
                className="group inline-flex items-center gap-3 bg-[#171513] hover:bg-[#2A2320] text-[#FAF7F2] text-sm font-medium px-7 py-3.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 cursor-pointer"
              >
                <span>Work With Us</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onViewWork}
                className="group inline-flex items-center gap-2.5 bg-[#F3EAE2] hover:bg-[#E8D7CA] text-[#171513] border border-[#E8D7CA] text-sm font-medium px-6 py-3.5 rounded-full transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <span>View Our Work</span>
                <div className="w-5 h-5 rounded-full bg-[#171513] text-[#FAF7F2] flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                </div>
              </button>
            </div>

            {/* Bottom Category Separator Bar */}
            <div className="pt-4 border-t border-[#E8D7CA]/80">
              <div className="flex flex-wrap items-center gap-y-2 text-xs sm:text-[13px] tracking-wide text-[#5A4035]/90 font-medium">
                <span className="hover:text-[#B9826B] transition-colors cursor-default">Skincare</span>
                <span className="mx-2.5 sm:mx-3 text-[#B9826B]/50 font-light">|</span>
                <span className="hover:text-[#B9826B] transition-colors cursor-default">Beauty</span>
                <span className="mx-2.5 sm:mx-3 text-[#B9826B]/50 font-light">|</span>
                <span className="hover:text-[#B9826B] transition-colors cursor-default">Fashion</span>
                <span className="mx-2.5 sm:mx-3 text-[#B9826B]/50 font-light">|</span>
                <span className="hover:text-[#B9826B] transition-colors cursor-default">Lifestyle</span>
                <span className="mx-2.5 sm:mx-3 text-[#B9826B]/50 font-light">|</span>
                <span className="hover:text-[#B9826B] transition-colors cursor-default">Product Content</span>
              </div>
            </div>

          </div>

          {/* Right Column: Cinematic Blender-Style 3D Product Universe */}
          <div className="lg:col-span-6 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Subtle warm champagne glow behind 3D container */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#E8D7CA]/50 via-[#B9826B]/20 to-[#FAF5EE]/30 rounded-[3rem] filter blur-2xl opacity-75 -z-10" />

              {/* 3D Product Universe Component */}
              <ProductScene3D
                onProductClick={(productName) => onOpenContact(`${productName} UGC Campaign`)}
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
