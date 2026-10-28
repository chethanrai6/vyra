import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Play } from 'lucide-react';

interface HeroProps {
  onOpenContact: (serviceName?: string) => void;
  onViewWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onViewWork }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const heroRef = useRef<HTMLElement>(null);

  // Smooth mouse parallax tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-[90vh] lg:min-h-screen pt-28 sm:pt-36 pb-16 sm:pb-20 overflow-hidden flex items-center bg-[#FAF6F0]"
    >
      {/* Background with Ambient Radial Glows */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FAF6F0] via-[#FAF6F0]/95 to-[#F7ECE1]/80 pointer-events-none" />

      {/* Warm Ambient Rose-Gold Lighting Gradients */}
      <div
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#F5DFD0]/40 via-[#E8CAA4]/20 to-transparent rounded-full filter blur-3xl pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${mousePos.x * 25}px, ${mousePos.y * 25}px)`
        }}
      />
      <div
        className="absolute -top-20 right-0 w-[500px] h-[500px] bg-gradient-to-b from-[#FBF0E6] via-[#FAF6F0] to-transparent rounded-full filter blur-2xl pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* ======================================================== */}
          {/* LEFT COLUMN: Editorial Typography & Actions               */}
          {/* ======================================================== */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left z-20">
            
            {/* Top Tagline */}
            <div className="inline-flex items-center gap-2 mb-4 sm:mb-5">
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.24em] text-[#C0836B]">
                UGC Content Creation Studio
              </span>
            </div>

            {/* Editorial Main Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-[70px] leading-[1.08] tracking-[-0.01em] text-[#171513] font-medium mb-6">
              Content<br />
              That Connects<br />
              <span className="text-[#C0836B] font-serif italic font-normal">Brands to People.</span>
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
                className="group inline-flex items-center gap-2.5 bg-[#F4ECE4] hover:bg-[#ECE0D6] text-[#171513] border border-[#EADCCE] text-sm font-medium px-6 py-3.5 rounded-full transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <span>View Our Work</span>
                <div className="w-5 h-5 rounded-full bg-[#171513] text-[#FAF7F2] flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                </div>
              </button>
            </div>

            {/* Bottom Category Separator Bar */}
            <div className="pt-4 border-t border-[#EADCCE]/80">
              <div className="flex flex-wrap items-center gap-y-2 text-xs sm:text-[13px] tracking-wide text-[#5A4035]/90 font-medium">
                <span className="hover:text-[#C0836B] transition-colors cursor-default">Skincare</span>
                <span className="mx-2.5 sm:mx-3 text-[#C0836B]/50 font-light">|</span>
                <span className="hover:text-[#C0836B] transition-colors cursor-default">Beauty</span>
                <span className="mx-2.5 sm:mx-3 text-[#C0836B]/50 font-light">|</span>
                <span className="hover:text-[#C0836B] transition-colors cursor-default">Fashion</span>
                <span className="mx-2.5 sm:mx-3 text-[#C0836B]/50 font-light">|</span>
                <span className="hover:text-[#C0836B] transition-colors cursor-default">Lifestyle</span>
                <span className="mx-2.5 sm:mx-3 text-[#C0836B]/50 font-light">|</span>
                <span className="hover:text-[#C0836B] transition-colors cursor-default">Product Content</span>
              </div>
            </div>

          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: 3D Product Universe from Reference Image   */}
          {/* ======================================================== */}
          <div className="lg:col-span-6 relative mt-6 lg:mt-0 flex items-center justify-center">
            
            {/* Main Interactive Product Stage with Parallax */}
            <div
              className="relative w-full aspect-[4/3] sm:aspect-[16/12] max-w-2xl transition-transform duration-700 ease-out"
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x * 4}deg) rotateX(${-mousePos.y * 3}deg) translate3d(${mousePos.x * 12}px, ${mousePos.y * 8}px, 0)`
              }}
            >
              {/* High-Resolution 3D Render Image */}
              <img
                src="/images/hero-products-render.png"
                alt="VYRA 3D Cosmetic Product Composition featuring open Crème Jar on stone pedestal, glass Serum bottle with rose gold dropper, and balm tube with flowing ribbons"
                className={`w-full h-full object-contain filter drop-shadow-[0_25px_50px_rgba(90,64,53,0.18)] transition-all duration-300 ${
                  hoveredProduct ? 'brightness-105' : 'brightness-100'
                }`}
              />

              {/* Floating Interactive Hotspot: Nourishing Crème Jar (Foreground Stone) */}
              <div
                className="absolute left-[30%] bottom-[12%] z-30 group cursor-pointer"
                onMouseEnter={() => setHoveredProduct('jar')}
                onMouseLeave={() => setHoveredProduct(null)}
                onClick={() => onOpenContact('Nourishing Crème Jar')}
              >
                <div className="relative">
                  <span className="absolute -inset-1 rounded-full bg-[#C0836B]/40 animate-ping" />
                  <div className="w-6 h-6 rounded-full bg-[#FAF7F2] border border-[#C0836B] flex items-center justify-center shadow-md text-[#C0836B] hover:scale-110 transition-transform">
                    <span className="text-[10px] font-bold">✦</span>
                  </div>

                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-[#171513]/90 text-[#FAF7F2] text-[11px] whitespace-nowrap backdrop-blur-md border border-[#EADCCE]/40 shadow-xl opacity-0 group-hover:opacity-100 transition-all pointer-events-none -translate-y-1 group-hover:translate-y-0">
                    <span className="font-serif font-medium text-[#FAF7F2]">Nourishing Crème</span> • <span className="text-[#C0836B]">Inquire</span>
                  </div>
                </div>
              </div>

              {/* Floating Interactive Hotspot: Luminous Serum Bottle (Center-Right) */}
              <div
                className="absolute left-[54%] top-[34%] z-30 group cursor-pointer"
                onMouseEnter={() => setHoveredProduct('serum')}
                onMouseLeave={() => setHoveredProduct(null)}
                onClick={() => onOpenContact('Luminous Botanical Serum')}
              >
                <div className="relative">
                  <span className="absolute -inset-1 rounded-full bg-[#C0836B]/40 animate-ping delay-200" />
                  <div className="w-6 h-6 rounded-full bg-[#FAF7F2] border border-[#C0836B] flex items-center justify-center shadow-md text-[#C0836B] hover:scale-110 transition-transform">
                    <span className="text-[10px] font-bold">✦</span>
                  </div>

                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-[#171513]/90 text-[#FAF7F2] text-[11px] whitespace-nowrap backdrop-blur-md border border-[#EADCCE]/40 shadow-xl opacity-0 group-hover:opacity-100 transition-all pointer-events-none -translate-y-1 group-hover:translate-y-0">
                    <span className="font-serif font-medium text-[#FAF7F2]">Luminous Serum</span> • <span className="text-[#C0836B]">Inquire</span>
                  </div>
                </div>
              </div>

              {/* Floating Interactive Hotspot: Skincare Balm Tube (Far Right) */}
              <div
                className="absolute right-[12%] top-[45%] z-30 group cursor-pointer"
                onMouseEnter={() => setHoveredProduct('tube')}
                onMouseLeave={() => setHoveredProduct(null)}
                onClick={() => onOpenContact('Restorative Skin Balm Tube')}
              >
                <div className="relative">
                  <span className="absolute -inset-1 rounded-full bg-[#C0836B]/40 animate-ping delay-500" />
                  <div className="w-6 h-6 rounded-full bg-[#FAF7F2] border border-[#C0836B] flex items-center justify-center shadow-md text-[#C0836B] hover:scale-110 transition-transform">
                    <span className="text-[10px] font-bold">✦</span>
                  </div>

                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-[#171513]/90 text-[#FAF7F2] text-[11px] whitespace-nowrap backdrop-blur-md border border-[#EADCCE]/40 shadow-xl opacity-0 group-hover:opacity-100 transition-all pointer-events-none -translate-y-1 group-hover:translate-y-0">
                    <span className="font-serif font-medium text-[#FAF7F2]">Restorative Balm</span> • <span className="text-[#C0836B]">Inquire</span>
                  </div>
                </div>
              </div>

              {/* Floating Animated Crystal Glass Bubbles with Parallax */}
              <div
                className="absolute -top-4 left-[18%] w-14 h-14 rounded-full bg-gradient-to-tr from-white/40 via-white/10 to-transparent border border-white/60 shadow-[0_8px_32px_rgba(255,255,255,0.4)] backdrop-blur-[2px] pointer-events-none animate-bounce"
                style={{
                  animationDuration: '6s',
                  transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)`
                }}
              />
              <div
                className="absolute top-[48%] -left-6 w-10 h-10 rounded-full bg-gradient-to-tr from-white/40 via-white/10 to-transparent border border-white/60 shadow-sm backdrop-blur-[1px] pointer-events-none animate-pulse"
                style={{
                  animationDuration: '4.5s',
                  transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 15}px)`
                }}
              />
              <div
                className="absolute bottom-10 right-4 w-12 h-12 rounded-full bg-gradient-to-tr from-white/40 via-white/10 to-transparent border border-white/60 shadow-md backdrop-blur-[2px] pointer-events-none"
                style={{
                  transform: `translate(${mousePos.x * -14}px, ${mousePos.y * -14}px)`
                }}
              />

              {/* Floating 3D Studio Badge at bottom right */}
              <div className="absolute -bottom-6 right-6 hidden sm:flex items-center gap-2 bg-[#FAF6F0]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#EADCCE] shadow-sm pointer-events-none">
                <span className="w-2 h-2 rounded-full bg-[#C0836B] animate-pulse" />
                <span className="text-[11px] font-sans font-medium tracking-wide text-[#171513]">
                  {hoveredProduct ? `Active: ${hoveredProduct}` : '3D Cinematic Universe'}
                </span>
                <span className="text-[10px] text-[#5A4035]/70 border-l border-[#EADCCE] pl-2">
                  ✦ Click products to inspect
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
