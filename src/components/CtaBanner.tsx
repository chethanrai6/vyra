import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface CtaBannerProps {
  onOpenContact: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenContact }) => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#FAF7F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cinematic Dark Banner Container with Subtle Parallax Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-r from-[#2B1B14] via-[#38241C] to-[#432C22] shadow-[0_28px_65px_rgba(43,27,20,0.3)] border border-[#5A4035]/40"
        >
          
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 text-left z-10">
              <motion.span
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#E8D7CA]/80 block mb-4"
              >
                Start Your Next Campaign
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="font-serif text-3xl sm:text-5xl lg:text-[56px] leading-[1.08] text-[#FAF7F2] font-medium mb-6"
              >
                Let's Create Something<br />
                <span className="font-serif italic font-normal text-[#E8D7CA]">People Remember.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="font-sans text-[#E8D7CA]/90 text-base sm:text-lg leading-relaxed max-w-xl font-normal mb-8 sm:mb-10"
              >
                Bring your brand to life with authentic, engaging and high-quality UGC content that connects with your audience.
              </motion.p>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenContact}
                className="group inline-flex items-center gap-3 bg-[#FAF7F2] hover:bg-white text-[#171513] text-sm sm:text-[15px] font-medium px-8 py-4 rounded-full transition-shadow duration-200 shadow-md hover:shadow-2xl cursor-pointer"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 text-[#171513]" />
              </motion.button>
            </div>

            {/* Right Blended Photographic Column with Gentle Zoom */}
            <div className="lg:col-span-5 relative h-72 sm:h-96 lg:h-full min-h-[380px] overflow-hidden group">
              <motion.img
                animate={{
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                src="/images/cta-banner.jpg"
                alt="Radiant beauty model with dewy skin in warm ambient studio light"
                className="w-full h-full object-cover object-[center_20%] opacity-90 transition-transform duration-700"
                loading="lazy"
              />

              {/* Seamless horizontal gradient blend into the dark brown background */}
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#2B1B14] via-[#2B1B14]/40 to-transparent pointer-events-none" />
              
              {/* Subtle top & bottom edge softening */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#2B1B14]/30 via-transparent to-[#2B1B14]/40 pointer-events-none" />
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
