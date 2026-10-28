import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
  onViewWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onViewWork }) => {
  return (
    <section id="home" className="pt-28 sm:pt-36 pb-12 sm:pb-16 lg:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
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
                onClick={onOpenContact}
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

          {/* Right Column: Hero Portrait Photograph with Handwritten Note */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Subtle warm glow behind image */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#E8D7CA]/40 to-[#B9826B]/20 rounded-[2.5rem] filter blur-xl opacity-70 -z-10" />

              {/* Main Rounded Image Container */}
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] sm:aspect-[3.8/5] shadow-[0_20px_50px_rgba(90,64,53,0.12)] border border-[#E8D7CA]/80 bg-[#F3EAE2]">
                <img
                  src="/images/hero-model.jpg"
                  alt="Editorial UGC creator smiling with natural glowing skin in cream knit sweater"
                  className="w-full h-full object-cover object-[center_20%] transition-transform duration-700 hover:scale-105"
                  loading="eager"
                />

                {/* Subtle soft vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#171513]/30 via-transparent to-transparent pointer-events-none" />

                {/* Handwritten Floating Script in Top Right */}
                <div className="absolute top-6 right-6 sm:top-8 sm:right-8 text-right z-10 pointer-events-none select-none">
                  <div className="font-script text-3xl sm:text-4xl text-[#FAF7F2] font-semibold leading-tight drop-shadow-[0_2px_8px_rgba(23,21,19,0.7)] rotate-[-4deg]">
                    Authentic<br />
                    Creative<br />
                    <span className="text-[#FAF7F2] underline decoration-[#B9826B]/80 decoration-2 underline-offset-4">Impactful</span>
                  </div>
                </div>

                {/* Small subtle creator watermark / studio badge */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10">
                  <div className="bg-[#FAF7F2]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#FAF7F2]/50 shadow-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#B9826B] animate-pulse" />
                    <span className="text-[11px] font-sans font-medium tracking-wide text-[#171513]">
                      Editorial Quality UGC
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
