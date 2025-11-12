import React, { useState } from 'react';
import { sendEmail } from '../utils/emailService';
import { ArrowRight } from 'lucide-react';

export default function DynamicForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await sendEmail({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: 'Service Inquiry', // Static subject or you can set it dynamically
        message: formData.message,
        service: formData.service, // Send service value as well
      });

      if (result.success) {
        // alert(result.message);
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {/* Full Name */}
      <div className="mb-3 lg:mb-3">
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Full Name *"
          className="w-full px-3 py-2 lg:py-2.5 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-xs text-white placeholder-white/60 focus:outline-none focus:ring-1 focus:ring-white/50 focus:bg-white/25 focus:border-transparent transition-all"
        />
      </div>

      {/* Email Address */}
      <div className="mb-3 lg:mb-3">
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Email Address *"
          className="w-full px-3 py-2 lg:py-2.5 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-xs text-white placeholder-white/60 focus:outline-none focus:ring-1 focus:ring-white/50 focus:bg-white/25 focus:border-transparent transition-all"
        />
      </div>

      {/* Phone Number */}
      <div className="mb-3 lg:mb-3">
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="w-full px-3 py-2 lg:py-2.5 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-xs text-white placeholder-white/60 focus:outline-none focus:ring-1 focus:ring-white/50 focus:bg-white/25 focus:border-transparent transition-all"
        />
      </div>

      {/* Service Selection */}
      <div className="mb-3 lg:mb-3">
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 lg:py-2.5 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-xs text-white focus:outline-none focus:ring-1 focus:ring-white/50 focus:bg-white/25 focus:border-transparent transition-all appearance-none cursor-pointer"
          style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10'%3E%3Cpath fill='%23ffffff' d='M5 7L1 3h8z'/%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition:
                    "right 0.75rem center",
            }}
        >
          <option value="" className="bg-[#1a1f5c] text-white">Select a Service</option>
          <option value="Full Cycle Accounting" className="bg-[#1a1f5c] text-white">Full Cycle Accounting</option>
          <option value="Tax Filing" className="bg-[#1a1f5c] text-white">Tax Filing</option>
          <option value="Bookkeeping" className="bg-[#1a1f5c] text-white">Bookkeeping</option>
          <option value="Fractional CFO" className="bg-[#1a1f5c] text-white">Fractional CFO</option>
          <option value="Payroll Management" className="bg-[#1a1f5c] text-white">Payroll Management</option>
          <option value="Tax Advisory" className="bg-[#1a1f5c] text-white">Tax Advisory</option>
          <option value="Other Services" className="bg-[#1a1f5c] text-white">Other Services</option>
        </select>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="mb-3 lg:mb-3 w-full bg-white text-[#1a1f5c] py-2 lg:py-2.5 rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group flex items-center justify-center gap-1.5 text-[11px] lg:text-xs mt-2 lg:mt-3 touch-manipulation"
        >
        <span>{isSubmitting ? 'Sending...' : 'Get Free Consultation'}</span>
        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Trust Indicators */}
       <div className="pt-2 lg:pt-2.5 border-t border-white/20">
        <div className="flex items-center justify-center gap-2 text-[10px] lg:text-xs text-white/70 flex-wrap">
            <div className="flex items-center gap-1">
            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
            <span>No Obligation</span>
            </div>
            <div className="flex items-center gap-1">
            <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
            <span>Free Consultation</span>
            </div>
        </div>
        </div>

    </form>
  );
}
