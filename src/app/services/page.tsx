import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Leaf } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function Services() {
  const servicesList = [
    {
      title: "Custom Branded Paper Bags",
      tagline: "Eco-carriers customized to represent your brand identity.",
      image: "/paper_bag_grocery.png",
      description: "Custom dimensions, premium Kraft paper, and organic water-based ink printing designed to match your exact brand color palette.",
      features: ["Custom widths & gussets", "Twisted or flat paper handles", "Supports up to 12kg load capacity"],
    },
    {
      title: "Luxury Boutique Shopping Carriers",
      tagline: "High-end bags tailored for luxury retail and cosmetics.",
      image: "/paper_bag_retail.png",
      description: "Thick GSM specialty card stock, soft-touch matte lamination, braided silk rope handles, and elegant gold/silver foil hot stamping.",
      features: ["150-250 GSM luxury board", "Foil embossing & spot UV gloss", "Braided cotton or satin handles"],
    },
    {
      title: "Restaurant & QSR Delivery Bags",
      tagline: "FDA-compliant grease-resistant food-safe packaging.",
      image: "/paper_bag_restaurant.png",
      description: "Wide rectangular flat-bottom gussets that keep delivery containers upright and prevent food tipping during transit.",
      features: ["FDA grease-barrier liners", "Reinforced flat-fold handles", "Wide-base layout (anti-tip)"],
    },
    {
      title: "Corporate Promotional Event Packaging",
      tagline: "Make an impression at corporate conferences and trade shows.",
      image: "/paper_bag_corporate.png",
      description: "High-quality graphic presentation bags designed to hold booklets, gifts, and promotional items, extending your reach during events.",
      features: ["Dual-sided event branding", "Fast turnaround for high volume", "Rigid baseboard support"],
    },
    {
      title: "Interactive Offline Ads & QR Integration",
      tagline: "Merge physical packaging with tracking metrics.",
      image: "/paper_bag_fmcg.png",
      description: "Integrated high-contrast QR codes and promotional coupons printed directly on the side gussets, driving customers to online deals.",
      features: ["Trackable custom QR codes", "Co-branded campaign spaces", "Optimized print scanning contrast"],
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#050505] pt-32 pb-20">
      <div className="container mx-auto px-6 relative z-10">
        {/* Page Header */}
        <div className="text-center mb-20">
          <Reveal>
            <p className="text-[#FF4500] uppercase tracking-[0.4em] text-[10px] mb-6 font-medium font-mono">
              Our Capabilities
            </p>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 font-outfit">
              B2B Services.
            </h1>
            <p className="text-gray-400 text-lg font-light max-w-xl mx-auto">
              Precision manufacturing configurations, heavy GSM weights, and specialized B2B printing finishes.
            </p>
          </Reveal>
        </div>

        {/* Pictorial Services list */}
        <div className="space-y-20 max-w-5xl mx-auto mb-32">
          {servicesList.map((service, idx) => (
            <Reveal
              key={idx}
              delay={idx * 50}
              className="p-6 md:p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-white/10 transition-all duration-500 shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Visual Image */}
                <div className={`lg:col-span-5 ${idx % 2 === 1 ? "lg:order-last" : ""}`}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 shadow-md bg-[#050505]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-7 space-y-4">
                  <span className="text-[10px] uppercase tracking-widest text-[#FF4500] font-semibold font-mono">
                    {service.tagline}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-outfit font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 font-light text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-4">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2">
                        <Leaf className="text-[#D4AF37] shrink-0" size={12} />
                        <span className="text-xs text-gray-300 font-light">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Technical Specification Blueprint */}
        <Reveal className="p-8 md:p-12 rounded-3xl bg-[#111] border border-white/5 max-w-5xl mx-auto mb-24">
          <div className="text-center mb-10">
            <h3 className="text-xl md:text-2xl font-outfit font-bold text-white mb-2">Technical Specs</h3>
            <p className="text-gray-400 font-light text-xs">Structural metrics and customization guidelines.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/5 text-center">
              <span className="block text-[10px] uppercase tracking-widest text-[#FF4500] font-mono mb-2">Paper Weight</span>
              <p className="text-sm text-gray-300 font-light">70 - 300 GSM Kraft & Art Board</p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/5 text-center">
              <span className="block text-[10px] uppercase tracking-widest text-white/50 font-mono mb-2">Handle Styles</span>
              <p className="text-sm text-gray-300 font-light">Flat, Twisted, Satin & Ribbon</p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/5 text-center">
              <span className="block text-[10px] uppercase tracking-widest text-[#D4AF37] font-mono mb-2">Print Finish</span>
              <p className="text-sm text-gray-300 font-light">Organic Ink, Spot UV & Foil Stamping</p>
            </div>
          </div>
        </Reveal>

        {/* CTA Banner */}
        <Reveal className="text-center p-10 rounded-3xl bg-gradient-to-br from-[#FF4500]/10 to-transparent border border-[#FF4500]/20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-outfit font-bold mb-3">Consult on Custom Dimensions</h3>
          <p className="text-gray-400 text-xs max-w-md mx-auto mb-6 font-light">
            Share your custom artwork and bag specs for a free layout draft and manufacturing quote.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#FF4500] text-black hover:scale-105 px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300"
          >
            Start Packaging Consultation
            <ArrowRight size={12} />
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
