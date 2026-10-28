import React from 'react';
import { HeartHandshake, Smartphone, Compass, Sparkles, Users } from 'lucide-react';
import { WHY_VYRA_POINTS } from '../data/content';

export const WhyVyra: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-[#B9826B]" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-[#B9826B]" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#B9826B]" />;
      case 'Sparkle':
        return <Sparkles className="w-5 h-5 text-[#B9826B]" />;
      case 'Users':
        return <Users className="w-5 h-5 text-[#B9826B]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#B9826B]" />;
    }
  };

  return (
    <section id="why-vyra" className="py-16 sm:py-20 lg:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Photo with Overlay Script */}
          <div className="lg:col-span-5">
            <div className="relative rounded-[2rem] overflow-hidden aspect-[3.8/5] sm:aspect-[4/5] shadow-[0_20px_50px_rgba(90,64,53,0.1)] border border-[#E8D7CA]/80 bg-[#F3EAE2]">
              <img
                src="/images/why-vyra.jpg"
                alt="Editorial portrait of woman holding delicate flowers in warm sunlight"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-104"
                loading="lazy"
              />

              {/* Subtle dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#171513]/40 via-[#171513]/10 to-transparent pointer-events-none" />

              {/* Handwritten Script Overlay */}
              <div className="absolute top-8 left-8 sm:top-10 sm:left-10 text-left z-10 pointer-events-none select-none">
                <div className="font-script text-3xl sm:text-4xl lg:text-5xl text-[#FAF7F2] font-semibold leading-tight drop-shadow-[0_2px_10px_rgba(23,21,19,0.7)] rotate-[-4deg]">
                  More Than<br />
                  <span className="text-[#FAF7F2] underline decoration-[#B9826B]/80 decoration-2 underline-offset-6">Just Content</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Benefits List */}
          <div className="lg:col-span-7 text-left lg:pl-4">
            
            {/* Small Label */}
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-[#B9826B] block mb-4">
              Why VYRA
            </span>

            {/* Editorial Heading */}
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-[52px] leading-[1.12] text-[#171513] font-medium mb-10">
              Thoughtful Content.<br />
              <span className="font-serif italic font-normal text-[#5A4035]">Stronger Brand Connections.</span>
            </h2>

            {/* 5 Benefits List */}
            <div className="space-y-6 sm:space-y-7">
              {WHY_VYRA_POINTS.map((point) => (
                <div key={point.number} className="group flex items-start gap-4 sm:gap-5">
                  {/* Terracotta Circular Icon Tint */}
                  <div className="w-11 h-11 rounded-full bg-[#F3EAE2] border border-[#E8D7CA] flex items-center justify-center shrink-0 transition-colors duration-200 group-hover:bg-[#E8D7CA]/60">
                    {getIcon(point.icon)}
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="font-sans text-base sm:text-lg font-semibold text-[#171513] mb-1 group-hover:text-[#B9826B] transition-colors">
                      {point.title}
                    </h3>
                    <p className="font-sans text-[#5A4035] text-sm sm:text-[15px] leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
