import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'what-we-create', 'services', 'why-vyra', 'industries', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/90 backdrop-blur-md py-3 shadow-[0_4px_20px_rgba(23,21,19,0.04)] border-b border-[#E8D7CA]/60'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Wordmark */}
          <button
            onClick={() => scrollToSection('home')}
            className="group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B9826B] rounded-sm cursor-pointer"
          >
            <div className="flex items-center gap-1">
              <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-wider text-[#171513]">
                VYRA
              </span>
              <span className="text-[#B9826B] text-xs font-serif -mt-2">✦</span>
            </div>
            <div className="text-[9px] uppercase tracking-[0.28em] text-[#5A4035]/80 font-sans font-medium pl-0.5 -mt-0.5">
              UGC Studio
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            <button
              onClick={() => scrollToSection('home')}
              className={`text-sm font-medium tracking-wide transition-colors relative py-1 focus:outline-none cursor-pointer ${
                activeSection === 'home'
                  ? 'text-[#171513]'
                  : 'text-[#5A4035]/80 hover:text-[#171513]'
              }`}
            >
              Home
              {activeSection === 'home' && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#B9826B] rounded-full" />
              )}
            </button>

            <button
              onClick={() => scrollToSection('what-we-create')}
              className={`text-sm font-medium tracking-wide transition-colors relative py-1 focus:outline-none cursor-pointer ${
                activeSection === 'what-we-create'
                  ? 'text-[#171513]'
                  : 'text-[#5A4035]/80 hover:text-[#171513]'
              }`}
            >
              About
              {activeSection === 'what-we-create' && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#B9826B] rounded-full" />
              )}
            </button>

            <button
              onClick={() => scrollToSection('services')}
              className={`text-sm font-medium tracking-wide transition-colors relative py-1 focus:outline-none cursor-pointer ${
                activeSection === 'services'
                  ? 'text-[#171513]'
                  : 'text-[#5A4035]/80 hover:text-[#171513]'
              }`}
            >
              Services
              {activeSection === 'services' && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#B9826B] rounded-full" />
              )}
            </button>

            <button
              onClick={() => scrollToSection('work')}
              className={`text-sm font-medium tracking-wide transition-colors relative py-1 focus:outline-none cursor-pointer ${
                activeSection === 'work'
                  ? 'text-[#171513]'
                  : 'text-[#5A4035]/80 hover:text-[#171513]'
              }`}
            >
              Work
              {activeSection === 'work' && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#B9826B] rounded-full" />
              )}
            </button>

            <button
              onClick={onOpenContact}
              className="text-sm font-medium tracking-wide text-[#5A4035]/80 hover:text-[#171513] transition-colors relative py-1 focus:outline-none cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Desktop Right CTA Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={onOpenContact}
              className="group inline-flex items-center gap-2.5 bg-[#171513] hover:bg-[#2A2320] text-[#FAF7F2] text-xs sm:text-[13px] font-medium px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 cursor-pointer"
            >
              <span>Let's Collaborate</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenContact}
              className="text-xs bg-[#171513] text-[#FAF7F2] px-3 py-1.5 rounded-full font-medium"
            >
              Collaborate
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#171513] hover:text-[#B9826B] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-[#E8D7CA] px-6 py-6 shadow-xl">
          <div className="flex flex-col gap-4 text-left">
            <button
              onClick={() => scrollToSection('home')}
              className="text-base font-medium text-[#171513] hover:text-[#B9826B] py-1 border-b border-[#E8D7CA]/40 text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('what-we-create')}
              className="text-base font-medium text-[#171513] hover:text-[#B9826B] py-1 border-b border-[#E8D7CA]/40 text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-base font-medium text-[#171513] hover:text-[#B9826B] py-1 border-b border-[#E8D7CA]/40 text-left"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="text-base font-medium text-[#171513] hover:text-[#B9826B] py-1 border-b border-[#E8D7CA]/40 text-left"
            >
              Work
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="text-base font-medium text-[#171513] hover:text-[#B9826B] py-1 border-b border-[#E8D7CA]/40 text-left"
            >
              Contact
            </button>

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#171513] text-[#FAF7F2] text-sm font-medium py-3 rounded-full"
              >
                <span>Let's Collaborate</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
