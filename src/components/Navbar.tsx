import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

      const sections = ['home', 'what-we-create', 'services', 'why-vyra', 'industries'];
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

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'what-we-create', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'work', label: 'Work' }
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/90 backdrop-blur-md py-3 shadow-[0_4px_20px_rgba(23,21,19,0.04)] border-b border-[#E8D7CA]/60'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Wordmark */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToSection('home')}
            className="group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B9826B] rounded-sm cursor-pointer"
          >
            <div className="flex items-center gap-1">
              <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-wider text-[#171513]">
                VYRA
              </span>
              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="text-[#B9826B] text-xs font-serif -mt-2 inline-block"
              >
                ✦
              </motion.span>
            </div>
            <div className="text-[9px] uppercase tracking-[0.28em] text-[#5A4035]/80 font-sans font-medium pl-0.5 -mt-0.5">
              UGC Studio
            </div>
          </motion.button>

          {/* Desktop Navigation Links with animated active indicator */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-4 p-1 rounded-full bg-[#FAF7F2]/60 border border-[#E8D7CA]/40 backdrop-blur-xs">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-medium tracking-wide relative px-4 py-1.5 rounded-full transition-colors focus:outline-none cursor-pointer ${
                  activeSection === link.id
                    ? 'text-[#171513]'
                    : 'text-[#5A4035]/80 hover:text-[#171513]'
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                {activeSection === link.id && (
                  <motion.div
                    layoutId="nav-active-pill"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="absolute inset-0 bg-[#E8D7CA]/50 rounded-full"
                  />
                )}
              </button>
            ))}

            <button
              onClick={onOpenContact}
              className="text-sm font-medium tracking-wide text-[#5A4035]/80 hover:text-[#171513] transition-colors relative px-4 py-1.5 rounded-full focus:outline-none cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Desktop Right CTA Button */}
          <div className="hidden md:flex items-center">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpenContact}
              className="group inline-flex items-center gap-2.5 bg-[#171513] hover:bg-[#2A2320] text-[#FAF7F2] text-xs sm:text-[13px] font-medium px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
            >
              <span>Let's Collaborate</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenContact}
              className="text-xs bg-[#171513] text-[#FAF7F2] px-3.5 py-1.5 rounded-full font-medium active:scale-95 transition-transform"
            >
              Collaborate
            </button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#171513] hover:text-[#B9826B] focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-[#FAF7F2] border-b border-[#E8D7CA] px-6 py-6 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col gap-4 text-left">
              {navLinks.map((link, idx) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => scrollToSection(link.id)}
                  className="text-base font-medium text-[#171513] hover:text-[#B9826B] py-1 border-b border-[#E8D7CA]/40 text-left"
                >
                  {link.label}
                </motion.button>
              ))}

              <motion.button
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="text-base font-medium text-[#171513] hover:text-[#B9826B] py-1 border-b border-[#E8D7CA]/40 text-left"
              >
                Contact
              </motion.button>

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
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
