import React, { useState } from 'react';
import { X, CheckCircle, Send, AlertCircle } from 'lucide-react';
import type { ContactFormData } from '../types';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledService?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  prefilledService = 'Skincare & Beauty'
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    brandName: '',
    email: '',
    serviceInterest: prefilledService,
    budget: '$1,000 - $3,000',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your name';
    if (!formData.brandName.trim()) newErrors.brandName = 'Please enter your brand name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please share a brief summary of your project (min 10 characters)';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      brandName: '',
      email: '',
      serviceInterest: 'Skincare & Beauty',
      budget: '$1,000 - $3,000',
      message: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div
        className="relative bg-[#FAF6F0] w-full max-w-2xl rounded-3xl shadow-2xl border border-[#EADCCE] overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-6 sm:p-8 bg-[#F7EFE8] border-b border-[#EADCCE] flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs uppercase tracking-[0.24em] font-semibold text-[#C0836B]">
                Let's Collaborate
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#171513]">
              Start Your Campaign
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#5A4035] mt-1">
              Tell us about your brand goals. We usually reply within 24 hours.
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#FAF6F0] text-[#171513] hover:text-[#C0836B] hover:bg-white flex items-center justify-center transition-colors border border-[#EADCCE] cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="py-8 text-center">
              <div className="w-16 h-16 bg-[#F7EFE8] text-[#C0836B] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#EADCCE]">
                <CheckCircle className="w-8 h-8 text-[#C0836B]" />
              </div>
              <h4 className="font-serif text-2xl font-semibold text-[#171513] mb-2">
                Inquiry Received
              </h4>
              <p className="font-sans text-sm text-[#5A4035] max-w-md mx-auto mb-6 leading-relaxed">
                Thank you, <span className="font-semibold text-[#171513]">{formData.fullName}</span>! We’ve logged your request for <span className="font-semibold text-[#171513]">{formData.brandName}</span>. Our team will review your creative requirements and contact you at <span className="font-semibold text-[#171513]">{formData.email}</span>.
              </p>

              <div className="p-4 rounded-xl bg-[#F7EFE8]/70 border border-[#EADCCE] text-xs text-[#5A4035] max-w-md mx-auto mb-6 text-left">
                <span className="font-semibold text-[#171513] block mb-1">Backend Integration Note:</span>
                This frontend form is fully validated and ready to connect to your preferred endpoint (e.g. Formspree, Resend, or your custom server).
              </div>

              <div className="flex justify-center gap-3">
                <button
                  onClick={resetForm}
                  className="px-5 py-2.5 rounded-full border border-[#EADCCE] text-xs font-medium text-[#171513] hover:bg-[#F7EFE8] cursor-pointer"
                >
                  Send Another Inquiry
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full bg-[#171513] text-xs font-medium text-[#FAF7F2] hover:bg-[#2A2320] cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#171513] uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Sophia Loren"
                    className={`w-full px-4 py-2.5 rounded-xl bg-white border ${
                      errors.fullName ? 'border-red-400' : 'border-[#EADCCE]'
                    } focus:outline-none focus:ring-2 focus:ring-[#C0836B] text-sm text-[#171513]`}
                  />
                  {errors.fullName && (
                    <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#171513] uppercase tracking-wider mb-1.5">
                    Brand Name *
                  </label>
                  <input
                    type="text"
                    value={formData.brandName}
                    onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                    placeholder="e.g. Glow Botanics"
                    className={`w-full px-4 py-2.5 rounded-xl bg-white border ${
                      errors.brandName ? 'border-red-400' : 'border-[#EADCCE]'
                    } focus:outline-none focus:ring-2 focus:ring-[#C0836B] text-sm text-[#171513]`}
                  />
                  {errors.brandName && (
                    <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.brandName}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#171513] uppercase tracking-wider mb-1.5">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sophia@brand.com"
                    className={`w-full px-4 py-2.5 rounded-xl bg-white border ${
                      errors.email ? 'border-red-400' : 'border-[#EADCCE]'
                    } focus:outline-none focus:ring-2 focus:ring-[#C0836B] text-sm text-[#171513]`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#171513] uppercase tracking-wider mb-1.5">
                    Primary Service Interest
                  </label>
                  <select
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#EADCCE] focus:outline-none focus:ring-2 focus:ring-[#C0836B] text-sm text-[#171513]"
                  >
                    <option value="Skincare & Beauty">Skincare & Beauty</option>
                    <option value="Fashion & Styling">Fashion & Styling</option>
                    <option value="Product Demonstrations">Product Demonstrations</option>
                    <option value="Lifestyle & Everyday Use">Lifestyle & Everyday Use</option>
                    <option value="Short-Form Video Ads">Short-Form Video Ads</option>
                    <option value="Product Photography">Product Photography</option>
                    <option value="Full Campaign Bundle">Full Campaign Bundle</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#171513] uppercase tracking-wider mb-1.5">
                  Estimated Campaign Budget
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['Under $1,000', '$1,000 - $3,000', '$3,000 - $7,000', '$7,000+'].map((tier) => (
                    <button
                      type="button"
                      key={tier}
                      onClick={() => setFormData({ ...formData, budget: tier })}
                      className={`py-2 px-3 rounded-lg text-xs font-medium border text-center transition-colors cursor-pointer ${
                        formData.budget === tier
                          ? 'bg-[#171513] text-[#FAF7F2] border-[#171513]'
                          : 'bg-white text-[#5A4035] border-[#EADCCE] hover:bg-[#F7EFE8]'
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#171513] uppercase tracking-wider mb-1.5">
                  Project Details & Goals *
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share a brief overview of your product, target launch date, or specific deliverables needed..."
                  className={`w-full px-4 py-2.5 rounded-xl bg-white border ${
                    errors.message ? 'border-red-400' : 'border-[#EADCCE]'
                  } focus:outline-none focus:ring-2 focus:ring-[#C0836B] text-sm text-[#171513]`}
                />
                {errors.message && (
                  <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.message}
                  </p>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-[#171513] hover:bg-[#2A2320] text-[#FAF7F2] text-sm font-medium py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-75 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-[#FAF7F2] border-t-transparent rounded-full animate-spin" />
                      <span>Submitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Project Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
