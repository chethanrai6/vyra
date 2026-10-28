import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
  onOpenTerms: (title: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact, onOpenTerms }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#FAF7F2] border-t border-[#E8D7CA] pt-16 sm:pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#E8D7CA]/80 text-left">
          
          {/* Column 1: Brand Wordmark & Mission (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1 mb-1">
                <span className="font-serif text-3xl font-semibold tracking-wider text-[#171513]">
                  VYRA
                </span>
                <span className="text-[#B9826B] text-sm font-serif -mt-2">✦</span>
              </div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-[#5A4035]/80 font-sans font-medium pl-0.5 mb-6">
                UGC Studio
              </div>

              <p className="font-sans text-[#5A4035] text-sm leading-relaxed max-w-sm mb-6">
                Creative UGC content for skincare, beauty, fashion and lifestyle brands.
              </p>
            </div>

            <div className="text-xs text-[#5A4035]/70">
              Authentic • Editorial • Converting
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-[#171513] mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-[#5A4035]">
              <li>
                <button
                  onClick={() => scrollTo('home')}
                  className="hover:text-[#B9826B] transition-colors focus:outline-none"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('what-we-create')}
                  className="hover:text-[#B9826B] transition-colors focus:outline-none"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('services')}
                  className="hover:text-[#B9826B] transition-colors focus:outline-none"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('work')}
                  className="hover:text-[#B9826B] transition-colors focus:outline-none"
                >
                  Work
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-[#B9826B] transition-colors focus:outline-none"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Services (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-[#171513] mb-5">
              Our Services
            </h4>
            <ul className="space-y-3 text-sm text-[#5A4035]">
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-[#B9826B] transition-colors text-left">
                  Skincare UGC
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-[#B9826B] transition-colors text-left">
                  Beauty UGC
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-[#B9826B] transition-colors text-left">
                  Fashion UGC
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-[#B9826B] transition-colors text-left">
                  Lifestyle UGC
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-[#B9826B] transition-colors text-left">
                  Product Demos
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-[#B9826B] transition-colors text-left">
                  Short-Form Ads
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-[#B9826B] transition-colors text-left">
                  Product Photography
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Let's Connect (3 cols) */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-[#171513] mb-4">
                Let's Connect
              </h4>
              <p className="font-sans text-[#5A4035] text-sm leading-relaxed mb-6">
                Let's create something amazing together.
              </p>

              {/* Social Icons (Instagram, TikTok, YouTube, Pinterest) */}
              <div className="flex items-center gap-3 mb-6">
                {/* Instagram */}
                <button
                  type="button"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-[#F3EAE2] hover:bg-[#E8D7CA] text-[#171513] flex items-center justify-center transition-colors border border-[#E8D7CA]"
                >
                  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </button>

                {/* TikTok (SVG) */}
                <button
                  type="button"
                  aria-label="TikTok"
                  className="w-9 h-9 rounded-full bg-[#F3EAE2] hover:bg-[#E8D7CA] text-[#171513] flex items-center justify-center transition-colors border border-[#E8D7CA]"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </button>

                {/* YouTube */}
                <button
                  type="button"
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-full bg-[#F3EAE2] hover:bg-[#E8D7CA] text-[#171513] flex items-center justify-center transition-colors border border-[#E8D7CA]"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </button>

                {/* Pinterest (SVG) */}
                <button
                  type="button"
                  aria-label="Pinterest"
                  className="w-9 h-9 rounded-full bg-[#F3EAE2] hover:bg-[#E8D7CA] text-[#171513] flex items-center justify-center transition-colors border border-[#E8D7CA]"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0a12 12 0 0 0-4.37 23.18c-.06-.98-.12-2.5.02-3.58l1.04-4.42s-.26-.52-.26-1.3c0-1.22.71-2.13 1.59-2.13.75 0 1.11.56 1.11 1.24 0 .75-.48 1.88-.73 2.93-.21.88.44 1.6 1.31 1.6 1.57 0 2.78-1.66 2.78-4.05 0-2.12-1.52-3.6-3.7-3.6-2.52 0-4 1.89-4 3.84 0 .76.29 1.58.66 2.02.07.09.08.17.06.26-.07.28-.22.88-.25.99-.04.18-.14.22-.32.13-1.2-.56-1.95-2.31-1.95-3.72 0-3.03 2.2-5.81 6.35-5.81 3.33 0 5.92 2.37 5.92 5.55 0 3.31-2.09 5.98-4.99 5.98-.97 0-1.89-.51-2.2-1.11l-.6 2.29c-.22.84-.81 1.9-1.21 2.54A11.97 11.97 0 0 0 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Contact Us Button */}
            <div>
              <button
                onClick={onOpenContact}
                className="group inline-flex items-center gap-2.5 bg-[#FAF7F2] hover:bg-[#F3EAE2] text-[#171513] border border-[#E8D7CA] text-xs font-medium px-5 py-2.5 rounded-full transition-all duration-200 shadow-xs hover:shadow-sm cursor-pointer"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5A4035]/80">
          <div>
            © 2026 VYRA. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenTerms('Privacy Policy')}
              className="hover:text-[#171513] transition-colors underline-offset-4 hover:underline cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenTerms('Terms of Service')}
              className="hover:text-[#171513] transition-colors underline-offset-4 hover:underline cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
