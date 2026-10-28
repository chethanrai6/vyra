import React from 'react';
import { X, Check, Clock, Target, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ServiceItem } from '../types';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onBookService }) => {
  return (
    <AnimatePresence>
      {service && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-xs"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative bg-[#FAF7F2] w-full max-w-2xl rounded-3xl shadow-2xl border border-[#E8D7CA] overflow-hidden text-left z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with image banner */}
            <div className="relative h-48 sm:h-56 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171513] via-[#171513]/40 to-transparent" />

              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md text-white hover:bg-black/70 flex items-center justify-center transition-colors border border-white/20 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </motion.button>

              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-[10px] uppercase tracking-widest font-semibold text-[#E8D7CA]">
                  Service Package
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white">
                  {service.title}
                </h3>
              </div>
            </div>

            {/* Content body */}
            <div className="p-6 sm:p-8 space-y-6">
              <p className="text-sm sm:text-base text-[#5A4035] leading-relaxed">
                {service.description}
              </p>

              {/* Quick specs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-[#F3EAE2] border border-[#E8D7CA]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FAF7F2] text-[#B9826B] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-[#5A4035]/70 block">
                      Turnaround
                    </span>
                    <span className="text-xs font-semibold text-[#171513]">
                      {service.timeline}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FAF7F2] text-[#B9826B] flex items-center justify-center shrink-0">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-[#5A4035]/70 block">
                      Best Suited For
                    </span>
                    <span className="text-xs font-semibold text-[#171513] truncate max-w-[180px] block">
                      {service.bestFor}
                    </span>
                  </div>
                </div>
              </div>

              {/* Included Deliverables */}
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#171513] mb-3">
                  What's Included:
                </h4>
                <div className="space-y-2.5">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5A4035]">
                      <div className="w-4 h-4 rounded-full bg-[#B9826B]/20 text-[#B9826B] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action button */}
              <div className="pt-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    onClose();
                    onBookService(service.title);
                  }}
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-[#171513] hover:bg-[#2A2320] text-[#FAF7F2] text-sm font-medium py-3.5 rounded-full transition-shadow duration-200 shadow-md hover:shadow-xl cursor-pointer"
                >
                  <span>Inquire About {service.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
