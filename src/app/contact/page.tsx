"use client";

import React, { useState } from "react";
import { Mail, MapPin, ChevronDown, Check, ArrowRight, ExternalLink } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function Contact() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLabel, setSelectedLabel] = useState("Select packaging type");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const options = [
    { value: "custom-branded", label: "Custom Branded Bags" },
    { value: "retail-packaging", label: "Retail & Boutique Solutions" },
    { value: "restaurant-bags", label: "Restaurant & Delivery Carriers" },
    { value: "corporate-promo", label: "Corporate Event Bags" },
    { value: "eco-advertising", label: "Sustainable Ads / QR Integration" },
    { value: "other", label: "Other Inquiries" },
  ];

  const handleSelect = (val: string, label: string) => {
    setSelectedCategory(val);
    setSelectedLabel(label);
    setDropdownOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
    }, 1500);
  };

  return (
    <main className="min-h-screen pt-40 pb-20 flex flex-col items-center justify-center relative overflow-hidden bg-[#050505] text-white">
      {/* Background glow overlay */}
      <div className="bg-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Reveal>
            <p className="text-[#FF4500] uppercase tracking-[0.4em] text-[10px] mb-6 font-medium font-mono">
              Inquiry Desk
            </p>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 font-outfit">
              Ready to start <br />
              <span className="text-white/20 italic">The Journey?</span>
            </h1>
            <p className="text-gray-500 text-lg font-light leading-relaxed max-w-2xl mx-auto">
              Tell us about your brand and bulk bag packaging requirements. Our packaging design team will review details and reach out within 24 hours.
            </p>
          </Reveal>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto mb-20">
          {/* Form Side */}
          <div className="lg:col-span-7">
            <Reveal className="relative group">
              <div className="glass-card neon-glow-border p-8 md:p-12 rounded-[16px] relative z-10 transition-all duration-500 hover:translate-y-[-4px]">
                <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {/* Full Name */}
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-white/30 ml-1 font-semibold font-mono">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        required
                        className="w-full h-12 bg-transparent border border-white/5 rounded-2xl px-5 text-white font-light placeholder:text-white/20 outline-none transition-all duration-500 input-glow hover:border-white/10"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-white/30 ml-1 font-semibold font-mono">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        required
                        className="w-full h-12 bg-transparent border border-white/5 rounded-2xl px-5 text-white font-light placeholder:text-white/20 outline-none transition-all duration-500 input-glow hover:border-white/10"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-white/30 ml-1 font-semibold font-mono">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="Enter your phone number"
                        className="w-full h-12 bg-transparent border border-white/5 rounded-2xl px-5 text-white font-light placeholder:text-white/20 outline-none transition-all duration-500 input-glow hover:border-white/10"
                      />
                    </div>

                    {/* Company */}
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-white/30 ml-1 font-semibold font-mono">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your company name"
                        className="w-full h-12 bg-transparent border border-white/5 rounded-2xl px-5 text-white font-light placeholder:text-white/20 outline-none transition-all duration-500 input-glow hover:border-white/10"
                      />
                    </div>
                  </div>

                  {/* Dropdown (Category) */}
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-white/30 ml-1 font-semibold font-mono">
                      Packaging Category
                    </label>
                    <div className="relative">
                      <div
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="w-full h-12 bg-transparent border border-white/5 rounded-2xl px-5 flex items-center justify-between text-white/40 font-light cursor-pointer transition-all duration-500 input-glow hover:border-white/10 select-none"
                      >
                        <span className={selectedCategory ? "text-white" : "text-white/40"}>
                          {selectedLabel}
                        </span>
                        <ChevronDown
                          size={16}
                          className={`text-white/25 transition-transform duration-300 ${
                            dropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </div>

                      {/* Dropdown Menu */}
                      {dropdownOpen && (
                        <div className="absolute top-full left-0 w-full mt-2 bg-[#0a0a0a]/95 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden z-50 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                          <div className="p-2 space-y-1">
                            {options.map((opt) => (
                              <div
                                key={opt.value}
                                onClick={() => handleSelect(opt.value, opt.label)}
                                className="px-4 py-3 rounded-xl cursor-pointer hover:bg-white/5 text-sm text-gray-400 hover:text-white transition-colors"
                              >
                                {opt.label}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-white/30 ml-1 font-semibold font-mono">
                      Your Requirements
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="e.g. Dimensions, Quantity, Handles type, Print colors, GSM specifications..."
                      className="w-full bg-transparent border border-white/5 rounded-2xl px-5 py-4 text-white font-light placeholder:text-white/20 outline-none transition-all duration-500 resize-none input-glow hover:border-white/10"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-glow h-12 px-12 bg-gradient-to-r from-[#FF4500] to-[#FF2D00] text-black font-bold rounded-full hover:scale-105 transition-all duration-500 uppercase tracking-[0.2em] text-[10px] flex items-center gap-3 cursor-pointer"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </form>

                {/* Success state overlay */}
                {isSent && (
                  <div className="absolute inset-0 bg-[#0a0a0a]/98 backdrop-blur-md z-20 flex flex-col items-center justify-center text-center p-10 rounded-[16px]">
                    <div className="w-20 h-20 rounded-full bg-[#FF4500]/10 flex items-center justify-center mb-8 border border-[#FF4500]/20">
                      <Check className="text-4xl text-[#FF4500]" />
                    </div>
                    <h3 className="text-3xl font-outfit font-bold mb-4 tracking-tighter">Sent!</h3>
                    <p className="text-gray-400 mb-10 max-w-sm mx-auto">
                      Thank you. One of our packaging design specialists will compile details and contact you within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSent(false)}
                      className="px-8 py-3 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                    >
                      Send Another Message
                    </button>
                  </div>
                )}
              </div>
            </Reveal>
          </div>

          {/* Details & Map Side */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <Reveal delay={100} className="space-y-6">
              {/* Email Card */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-[#FF4500]/30 hover:bg-white/[0.08] transition-all duration-500 shadow-xl flex flex-row items-center gap-4">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-[#FF4500]/10 flex items-center justify-center text-[#FF4500]">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="block text-[8px] uppercase tracking-[0.2em] text-white/30 font-semibold font-mono mb-1">
                    Email Inquiries
                  </span>
                  <a
                    href="mailto:info@diarchmarketing.com"
                    className="block text-sm text-white hover:text-[#FF4500] transition-colors font-outfit break-all"
                  >
                    info@diarchmarketing.com
                  </a>
                </div>
              </div>

              {/* Visit Card */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-[#FF4500]/30 hover:bg-white/[0.08] transition-all duration-500 shadow-xl flex flex-row items-center gap-4">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-[#FF4500]/10 flex items-center justify-center text-[#FF4500]">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="block text-[8px] uppercase tracking-[0.2em] text-white/30 font-semibold font-mono mb-1">
                    Headquarters
                  </span>
                  <p className="text-sm text-gray-300 font-outfit">Boring Road, Patna, Bihar, India</p>
                </div>
              </div>
            </Reveal>

            {/* Map Frame Card */}
            <Reveal delay={200} className="w-full flex-grow">
              <a
                href="https://www.google.com/maps/place/Diarch+Group/@25.6154708,85.1160558,19.64z"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative overflow-hidden rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 shadow-2xl h-[280px] lg:h-full min-h-[250px] group"
              >
                <div className="absolute inset-0 bg-[#0a0a0a]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.985!2d85.1161!3d25.6160!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed597506a64473%3A0xf66db7448ec4adfb!2sDiarch%20Group!5e0!3m2!1sen!2sin!4v1714241514000!5m2!1sen!2sin"
                    className="w-full h-full border-0 opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                    style={{
                      filter: "invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)",
                    }}
                    allowFullScreen={false}
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent p-8 flex flex-col justify-end pointer-events-none">
                  <h4 className="text-white text-lg font-outfit font-bold mb-1">Our Headquarters</h4>
                  <p className="text-white/60 text-xs font-light leading-relaxed">
                    Boring Road, Patna, Bihar, India
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-[#FF4500] text-xs uppercase tracking-[0.2em] font-bold">
                    Get Directions
                    <ExternalLink size={14} />
                  </div>
                </div>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </main>
  );
}
