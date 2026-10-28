import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LegalModalProps {
  title: string | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ title, onClose }) => {
  return (
    <AnimatePresence>
      {title && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative bg-[#FAF7F2] w-full max-w-xl rounded-3xl shadow-2xl border border-[#E8D7CA] overflow-hidden text-left z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 bg-[#F3EAE2] border-b border-[#E8D7CA] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#B9826B]" />
                <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#171513]">
                  {title}
                </h3>
              </div>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-[#FAF7F2] text-[#171513] hover:text-[#B9826B] flex items-center justify-center border border-[#E8D7CA] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </motion.button>
            </div>

            <div className="p-6 sm:p-8 space-y-4 text-xs sm:text-sm text-[#5A4035] leading-relaxed max-h-[60vh] overflow-y-auto">
              {title === 'Privacy Policy' ? (
                <>
                  <p>
                    At VYRA UGC Studio, we respect your privacy and are committed to protecting the confidentiality of your brand information and project specifications.
                  </p>
                  <h4 className="font-semibold text-[#171513] text-sm pt-2">1. Information We Collect</h4>
                  <p>
                    We only collect brand name, contact person details, email addresses, and project scope submitted through our collaboration forms.
                  </p>
                  <h4 className="font-semibold text-[#171513] text-sm pt-2">2. Usage Rights & Content Protection</h4>
                  <p>
                    All creative concepts, raw video footage, and final edits produced during client engagements are handled strictly under confidentiality agreements until public campaign launch.
                  </p>
                  <h4 className="font-semibold text-[#171513] text-sm pt-2">3. Third-Party Sharing</h4>
                  <p>
                    We do not sell, rent, or distribute client contact details or campaign assets to any external third parties.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Welcome to VYRA UGC Studio. By collaborating with our studio, you agree to standard commercial production terms and content licensing frameworks.
                  </p>
                  <h4 className="font-semibold text-[#171513] text-sm pt-2">1. Creative Production Scope</h4>
                  <p>
                    Production commences following mutual approval of the creative brief and product delivery. Deliverables include hook variations and format adaptations as defined in each service package.
                  </p>
                  <h4 className="font-semibold text-[#171513] text-sm pt-2">2. Revisions & Approvals</h4>
                  <p>
                    Each project package includes up to two rounds of edit revisions (audio adjustments, pacing, subtitle edits, and hook swaps).
                  </p>
                  <h4 className="font-semibold text-[#171513] text-sm pt-2">3. Commercial Usage Rights</h4>
                  <p>
                    Full commercial usage rights across digital paid and organic platforms (Meta, TikTok, YouTube, Website) are granted upon final project sign-off.
                  </p>
                </>
              )}
            </div>

            <div className="p-4 bg-[#F3EAE2] border-t border-[#E8D7CA] text-right">
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-full bg-[#171513] text-xs font-medium text-[#FAF7F2] hover:bg-[#2A2320] cursor-pointer"
              >
                I Understand
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
