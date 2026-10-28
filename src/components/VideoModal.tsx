import React, { useState, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, ArrowRight, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { VideoItem } from '../types';

interface VideoModalProps {
  video: VideoItem | null;
  onClose: () => void;
  onRequestStyle: (styleName: string) => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ video, onClose, onRequestStyle }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(25);

  useEffect(() => {
    if (!video) return;
    setIsPlaying(true);
    setProgress(15);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (!isPlaying) return prev;
        if (prev >= 100) return 0;
        return prev + 1.5;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [video, isPlaying]);

  return (
    <AnimatePresence>
      {video && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative bg-[#171513] text-[#FAF7F2] w-full max-w-3xl rounded-3xl shadow-2xl border border-[#5A4035]/60 overflow-hidden text-left z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Header */}
            <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#B9826B] animate-pulse" />
                <h3 className="font-serif text-lg sm:text-xl font-medium tracking-wide">
                  {video.title} • <span className="text-white/60 text-sm font-sans">{video.category}</span>
                </h3>
              </div>

              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Player Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              
              {/* Simulated Video Preview Viewport */}
              <div className="md:col-span-7 relative bg-black aspect-[9/14] sm:aspect-[9/13] flex items-center justify-center overflow-hidden">
                <img
                  src={video.image}
                  alt={video.title}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    isPlaying ? 'scale-105' : 'scale-100 filter brightness-90'
                  }`}
                />

                {/* Play/Pause overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-16 h-16 rounded-full bg-[#FAF7F2]/90 backdrop-blur-md text-[#171513] flex items-center justify-center shadow-2xl cursor-pointer"
                  >
                    {isPlaying ? (
                      <Pause className="w-6 h-6 fill-[#171513]" />
                    ) : (
                      <Play className="w-6 h-6 fill-[#171513] ml-1" />
                    )}
                  </motion.button>
                </div>

                {/* Bottom Scrim & Control Bar */}
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                  {/* Scrub Bar */}
                  <div
                    className="w-full h-1.5 bg-white/20 rounded-full mb-3 cursor-pointer overflow-hidden relative"
                    onClick={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const pos = (e.clientX - rect.left) / rect.width;
                      setProgress(pos * 100);
                    }}
                  >
                    <div
                      className="h-full bg-[#B9826B] rounded-full transition-all duration-150"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  {/* Controls */}
                  <div className="flex items-center justify-between text-xs font-mono text-white/80">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="hover:text-white cursor-pointer"
                      >
                        {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                      </button>
                      <button
                        onClick={() => setProgress(0)}
                        className="hover:text-white cursor-pointer"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => setIsMuted(!isMuted)}
                        className="hover:text-white cursor-pointer"
                      >
                        {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                      </button>
                      <span>
                        {Math.floor((progress / 100) * 30)}s / {video.duration}
                      </span>
                    </div>

                    <div className="text-[10px] tracking-widest uppercase bg-white/10 px-2 py-0.5 rounded">
                      4K 60FPS UGC
                    </div>
                  </div>
                </div>
              </div>

              {/* Video Metadata & Inquire Column */}
              <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-[#1D1A18]">
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-[#B9826B] block mb-2">
                    Production Details
                  </span>

                  <h4 className="font-serif text-2xl font-medium text-[#FAF7F2] mb-1">
                    {video.title}
                  </h4>

                  <p className="text-xs text-[#E8D7CA]/70 font-sans mb-4">
                    {video.creator}
                  </p>

                  <p className="text-xs sm:text-sm text-[#FAF7F2]/80 leading-relaxed font-sans mb-6">
                    {video.description}
                  </p>

                  <div className="mb-6">
                    <span className="text-[11px] uppercase tracking-wider text-white/50 block mb-2 font-mono">
                      Concept Tags
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {video.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 text-[#E8D7CA] border border-white/10 font-sans"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => {
                      onClose();
                      onRequestStyle(video.title);
                    }}
                    className="w-full inline-flex items-center justify-center gap-2.5 bg-[#FAF7F2] hover:bg-white text-[#171513] text-xs font-semibold py-3.5 rounded-full transition-all duration-200 shadow-md cursor-pointer"
                  >
                    <span>Request This Content Style</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.button>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
