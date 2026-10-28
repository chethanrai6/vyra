import React from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { FEATURED_VIDEOS } from '../data/content';
import type { VideoItem } from '../types';

interface FeaturedStripProps {
  onSelectVideo: (video: VideoItem) => void;
}

export const FeaturedStrip: React.FC<FeaturedStripProps> = ({ onSelectVideo }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' as const }
    }
  };

  return (
    <section id="work" className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Strip Grid / Scroll Container with Staggered Viewport Entrance */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-5"
        >
          {FEATURED_VIDEOS.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelectVideo(item)}
              className="group relative cursor-pointer rounded-2xl overflow-hidden aspect-[3/4.2] shadow-sm hover:shadow-2xl transition-all duration-300 border border-[#E8D7CA]/70 bg-[#F3EAE2]"
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              {/* Gradient Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#171513]/85 via-[#171513]/25 to-transparent transition-opacity duration-300 group-hover:opacity-95" />

              {/* Play Button Overlay with Interactive Pulse */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FAF7F2]/90 backdrop-blur-sm text-[#171513] flex items-center justify-center shadow-md transition-colors duration-200 group-hover:bg-white"
                >
                  <Play className="w-3.5 h-3.5 fill-[#171513] ml-0.5 text-[#171513]" />
                </motion.div>
              </div>

              {/* Content at Bottom */}
              <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 z-10 text-left">
                <h3 className="font-sans font-medium text-white text-xs sm:text-sm tracking-wide mb-1 transition-colors group-hover:text-[#FAF7F2]">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] sm:text-[11px] font-mono text-[#FAF7F2]/75 font-medium tracking-wider">
                    {item.duration}
                  </span>
                  <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-white/20 text-[#FAF7F2]/90 backdrop-blur-xs font-sans">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Hover Highlight Ring */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#B9826B]/60 pointer-events-none transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
