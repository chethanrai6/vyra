import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

interface HeroProps {
  onOpenContact: () => void;
  onViewWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onViewWork }) => {
  // Interactive 3D mouse parallax on the hero image
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-200, 200], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-200, 200], [-6, 6]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section id="home" className="pt-28 sm:pt-36 pb-12 sm:pb-16 lg:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Typography & CTAs with staggered reveal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            
            {/* Small Top Tagline */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-4 sm:mb-5"
            >
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-[#B9826B]">
                UGC Content Creation Studio
              </span>
            </motion.div>

            {/* Editorial Main Heading with line reveals */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-[68px] leading-[1.08] tracking-[-0.01em] text-[#171513] font-medium mb-6">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="block"
              >
                Content
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="block"
              >
                That Connects
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="text-[#B9826B] font-serif italic font-normal block"
              >
                Brands to People.
              </motion.span>
            </h1>

            {/* Supporting Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="font-sans text-[#5A4035] text-base sm:text-lg leading-relaxed max-w-xl font-normal mb-8 sm:mb-10"
            >
              We create authentic, engaging and high-quality UGC content for skincare, beauty, fashion and lifestyle brands that inspires, builds trust and drives real engagement.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="flex flex-wrap items-center gap-4 mb-10 sm:mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenContact}
                className="group inline-flex items-center gap-3 bg-[#171513] hover:bg-[#2A2320] text-[#FAF7F2] text-sm font-medium px-7 py-3.5 rounded-full transition-shadow duration-200 shadow-md hover:shadow-xl cursor-pointer"
              >
                <span>Work With Us</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={onViewWork}
                className="group inline-flex items-center gap-2.5 bg-[#F3EAE2] hover:bg-[#E8D7CA] text-[#171513] border border-[#E8D7CA] text-sm font-medium px-6 py-3.5 rounded-full transition-colors duration-200 cursor-pointer shadow-xs hover:shadow-md"
              >
                <span>View Our Work</span>
                <div className="w-5 h-5 rounded-full bg-[#171513] text-[#FAF7F2] flex items-center justify-center transition-transform duration-300 group-hover:scale-115">
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                </div>
              </motion.button>
            </motion.div>

            {/* Bottom Category Separator Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="pt-4 border-t border-[#E8D7CA]/80"
            >
              <div className="flex flex-wrap items-center gap-y-2 text-xs sm:text-[13px] tracking-wide text-[#5A4035]/90 font-medium">
                {['Skincare', 'Beauty', 'Fashion', 'Lifestyle', 'Product Content'].map((cat, idx) => (
                  <React.Fragment key={cat}>
                    <motion.span
                      whileHover={{ color: '#B9826B', y: -1 }}
                      className="transition-colors cursor-default"
                    >
                      {cat}
                    </motion.span>
                    {idx < 4 && (
                      <span className="mx-2.5 sm:mx-3 text-[#B9826B]/50 font-light select-none">|</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: Hero Portrait Photograph with 3D Tilt & Floating Script */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{ perspective: 1000 }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              
              {/* Subtle warm ambient glow behind image with breathing pulse */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.6, 0.8, 0.6]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -inset-4 bg-gradient-to-tr from-[#E8D7CA]/50 to-[#B9826B]/25 rounded-[2.5rem] filter blur-xl -z-10"
              />

              {/* Main Rounded Image Container with Interactive Tilt */}
              <motion.div
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                className="relative rounded-[2rem] overflow-hidden aspect-[4/5] sm:aspect-[3.8/5] shadow-[0_24px_55px_rgba(90,64,53,0.15)] border border-[#E8D7CA]/80 bg-[#F3EAE2] group"
              >
                <img
                  src="/images/hero-model.jpg"
                  alt="Editorial UGC creator smiling with natural glowing skin in cream knit sweater"
                  className="w-full h-full object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-106"
                  loading="eager"
                />

                {/* Subtle soft vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#171513]/35 via-transparent to-transparent pointer-events-none" />

                {/* Handwritten Floating Script in Top Right with Gentle Float */}
                <motion.div
                  animate={{
                    y: [0, -6, 0],
                    rotate: [-4, -2, -4]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                  className="absolute top-6 right-6 sm:top-8 sm:right-8 text-right z-10 pointer-events-none select-none"
                >
                  <div className="font-script text-3xl sm:text-4xl text-[#FAF7F2] font-semibold leading-tight drop-shadow-[0_2px_8px_rgba(23,21,19,0.7)]">
                    Authentic<br />
                    Creative<br />
                    <span className="text-[#FAF7F2] underline decoration-[#B9826B]/80 decoration-2 underline-offset-4">Impactful</span>
                  </div>
                </motion.div>

                {/* Small creator watermark / studio badge */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10"
                >
                  <div className="bg-[#FAF7F2]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#FAF7F2]/60 shadow-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#B9826B] animate-ping" />
                    <span className="text-[11px] font-sans font-medium tracking-wide text-[#171513]">
                      Editorial Quality UGC
                    </span>
                  </div>
                </motion.div>

              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
