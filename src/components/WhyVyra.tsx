import React from 'react';
import { HeartHandshake, Smartphone, Compass, Sparkles, Users } from 'lucide-react';
import { motion } from 'framer-motion';
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const }
    }
  };

  return (
    <section id="why-vyra" className="py-16 sm:py-20 lg:py-24 bg-[#FAF7F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Photo with Overlay Script */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-[2rem] overflow-hidden aspect-[3.8/5] sm:aspect-[4/5] shadow-[0_24px_55px_rgba(90,64,53,0.12)] border border-[#E8D7CA]/80 bg-[#F3EAE2] group">
              <img
                src="/images/why-vyra.jpg"
                alt="Editorial portrait of woman holding delicate flowers in warm sunlight"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-106"
                loading="lazy"
              />

              {/* Subtle dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#171513]/40 via-[#171513]/10 to-transparent pointer-events-none" />

              {/* Handwritten Script Overlay with Floating Animation */}
              <motion.div
                animate={{
                  y: [0, -6, 0],
                  rotate: [-4, -2, -4]
                }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="absolute top-8 left-8 sm:top-10 sm:left-10 text-left z-10 pointer-events-none select-none"
              >
                <div className="font-script text-3xl sm:text-4xl lg:text-5xl text-[#FAF7F2] font-semibold leading-tight drop-shadow-[0_2px_10px_rgba(23,21,19,0.7)]">
                  More Than<br />
                  <span className="text-[#FAF7F2] underline decoration-[#B9826B]/80 decoration-2 underline-offset-6">Just Content</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Benefits List with Staggered Entrance */}
          <div className="lg:col-span-7 text-left lg:pl-4">
            
            {/* Small Label */}
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-[#B9826B] block mb-4"
            >
              Why VYRA
            </motion.span>

            {/* Editorial Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-serif text-3xl sm:text-5xl lg:text-[52px] leading-[1.12] text-[#171513] font-medium mb-10"
            >
              Thoughtful Content.<br />
              <span className="font-serif italic font-normal text-[#5A4035]">Stronger Brand Connections.</span>
            </motion.h2>

            {/* 5 Benefits List */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="space-y-6 sm:space-y-7"
            >
              {WHY_VYRA_POINTS.map((point) => (
                <motion.div
                  key={point.number}
                  variants={itemVariants}
                  className="group flex items-start gap-4 sm:gap-5"
                >
                  {/* Terracotta Circular Icon Tint with Bounce on Hover */}
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    className="w-11 h-11 rounded-full bg-[#F3EAE2] border border-[#E8D7CA] flex items-center justify-center shrink-0 transition-colors duration-200 group-hover:bg-[#E8D7CA]/70"
                  >
                    {getIcon(point.icon)}
                  </motion.div>

                  {/* Text */}
                  <div>
                    <h3 className="font-sans text-base sm:text-lg font-semibold text-[#171513] mb-1 group-hover:text-[#B9826B] transition-colors">
                      {point.title}
                    </h3>
                    <p className="font-sans text-[#5A4035] text-sm sm:text-[15px] leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
