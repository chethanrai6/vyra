import React from 'react';
import { Sparkles, Shirt, Droplets, Coffee, Video, Camera, ArrowUpRight } from 'lucide-react';
import { SERVICES_LIST } from '../data/content';
import type { ServiceItem } from '../types';

interface ServicesGridProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-4 h-4 text-[#B9826B]" />;
      case 'Shirt':
        return <Shirt className="w-4 h-4 text-[#B9826B]" />;
      case 'Droplets':
        return <Droplets className="w-4 h-4 text-[#B9826B]" />;
      case 'Coffee':
        return <Coffee className="w-4 h-4 text-[#B9826B]" />;
      case 'Video':
        return <Video className="w-4 h-4 text-[#B9826B]" />;
      case 'Camera':
        return <Camera className="w-4 h-4 text-[#B9826B]" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#B9826B]" />;
    }
  };

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Services Grid (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service)}
              className="group relative bg-[#F8F3ED] hover:bg-[#F3EAE2] rounded-3xl p-5 sm:p-6 border border-[#E8D7CA]/80 transition-all duration-300 hover:shadow-lg flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Wide Photographic Image at the Top */}
                <div className="rounded-2xl overflow-hidden aspect-[16/10] mb-5 bg-[#E8D7CA]/40 relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-106"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#171513]/5 group-hover:bg-transparent transition-colors duration-300" />
                </div>

                {/* Category Icon Badge */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#E8D7CA] flex items-center justify-center shadow-xs">
                    {getIcon(service.icon)}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-[#5A4035]/70">
                    Content Service
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#171513] mb-2.5 group-hover:text-[#B9826B] transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="font-sans text-[#5A4035] text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Bottom Card Footer: Details Link & Small Circular Arrow Button */}
              <div className="pt-4 border-t border-[#E8D7CA]/60 flex items-center justify-between">
                <span className="text-xs font-medium text-[#5A4035]/80 group-hover:text-[#171513] transition-colors">
                  View deliverables
                </span>

                <div className="w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#E8D7CA] text-[#171513] flex items-center justify-center transition-all duration-300 group-hover:bg-[#171513] group-hover:text-[#FAF7F2] group-hover:border-[#171513]">
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
