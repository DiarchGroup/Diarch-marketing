import Link from "next/link";
import { ArrowRight, BarChart3, Users, Leaf, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function Portfolio() {
  const caseStudies = [
    {
      title: "Zesty Bites Cloud Kitchens",
      category: "Food Delivery & takeaway",
      metric: "45% Spill Reduction & Zero Tears",
      description: "Zesty Bites, a national cloud kitchen group, was experiencing high customer complaints due to thin plastic carriers tearing or food containers tipping over in transit on food delivery apps. DiArch engineered a grease-resistant white Kraft bag with an extra-wide rectangular bottom base (anti-tip) and flat-glued handles.",
      results: [
        "Transitioned 100% of packaging to fully biodegradable paper",
        "45% reduction in delivery leakage complaints",
        "Estimated 1.2M brand impressions per month from delivery riders walking down urban streets",
      ],
      tags: ["FDA Food-Safe", "90 GSM White Kraft", "Anti-Tip Bottom"],
      image: "/paper_bag_restaurant.png",
    },
    {
      title: "Aura Boutique Luxury Retail",
      category: "Fashion & Luxury",
      metric: "30% Increase in Instagram Mentions",
      description: "Aura Boutique wanted their physical shopping packaging to match the high-end luxury feel of their fashion boutique products. DiArch manufactured an ultra-premium matte black carrier using 220 GSM specialty board, featuring gold-leaf foil embossed branding and heavy-gauge silk braided rope handles.",
      results: [
        "Premium touchpoint that consumers frequently reuse as daily tote bags",
        "30% boost in customer unboxing photos and tags on social channels",
        "Re-engineered baseboards to support heavy boots and luxury items",
      ],
      tags: ["220 GSM Specialty Board", "Gold Foil Embossed", "Braided Silk Handles"],
      image: "/paper_bag_retail.png",
    },
    {
      title: "EcoCart Hyper-Local Grocery",
      category: "Grocery & Supermarket",
      metric: "100% Plastic-Ban Compliance",
      description: "EcoCart, a hyper-local grocery platform, needed a robust, high-volume carrier to handle heavy grocery delivery runs (heavy glass bottles, vegetables, canned products) while complying with regional plastic ban regulations. DiArch supplied high-load capacity 130 GSM brown Kraft paper bags with reinforced twisted handles.",
      results: [
        "100% regulatory compliance achieved across all delivery hubs",
        "Bags certified to support up to 12kg of grocery products",
        "Branded QR codes on the sides drove 15,000 coupon scans in the first month",
      ],
      tags: ["130 GSM Brown Kraft", "Twisted Paper Cord", "Reinforced Baseboards"],
      image: "/paper_bag_grocery.png",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#050505] pt-32 pb-20">
      <div className="container mx-auto px-6 relative z-10">
        {/* Page Header */}
        <div className="text-center mb-24">
          <Reveal>
            <p className="text-[#FF4500] uppercase tracking-[0.4em] text-[10px] mb-6 font-medium font-mono">
              Case Studies
            </p>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 font-outfit">
              Client Success <br />
              <span className="text-white/20 italic">Stories.</span>
            </h1>
            <p className="text-gray-400 text-lg font-light leading-relaxed max-w-2xl mx-auto">
              Real metrics, packaging performance, and local marketing ROI achieved by brands deploying DiArch paper carrier lines.
            </p>
          </Reveal>
        </div>

        {/* Case Studies List */}
        <div className="space-y-24 max-w-5xl mx-auto mb-32">
          {caseStudies.map((cs, idx) => (
            <Reveal
              key={idx}
              delay={idx * 100}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
              {/* Image Side */}
              <div className={`lg:col-span-5 ${idx % 2 === 1 ? "lg:order-last" : ""}`}>
                <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 group shadow-2xl relative bg-[#0a0a0a]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cs.image}
                    alt={cs.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full">
                    <span className="text-[10px] uppercase tracking-widest text-[#FF4500] font-semibold font-mono">
                      {cs.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 text-[#D4AF37] font-semibold text-sm mb-4 font-outfit">
                  <BarChart3 size={18} />
                  <span>{cs.metric}</span>
                </div>
                <h3 className="text-3xl font-bold font-outfit text-white mb-6">
                  {cs.title}
                </h3>
                <p className="text-gray-400 font-light text-base leading-relaxed mb-6">
                  {cs.description}
                </p>

                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl mb-6">
                  <h4 className="text-xs uppercase tracking-widest text-white/50 font-semibold mb-4 font-mono">
                    Key Outcomes:
                  </h4>
                  <ul className="text-sm text-gray-300 space-y-2 font-light">
                    {cs.results.map((r, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5">
                        <Leaf className="text-[#FF4500] shrink-0 mt-1" size={12} />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cs.tags.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] uppercase tracking-wider bg-white/5 text-gray-400 border border-white/10 px-3 py-1 rounded-full font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Global Impact Dashboard */}
        <Reveal className="bg-[#111] border border-white/5 p-8 md:p-16 rounded-3xl max-w-5xl mx-auto mb-32">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-4xl font-outfit font-bold mb-4">The Mobile Billboard Impact</h3>
            <p className="text-gray-400 font-light text-sm max-w-md mx-auto">
              How paper bag branding compares to traditional digital PPC and billboard advertising models.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
              <div className="w-10 h-10 rounded-full bg-[#FF4500]/10 flex items-center justify-center text-[#FF4500] mx-auto mb-4">
                <Users size={20} />
              </div>
              <h4 className="text-3xl font-bold font-outfit text-white mb-2">1,500+</h4>
              <p className="text-xs uppercase tracking-wider text-gray-500 font-mono mb-2">Impressions Per Bag</p>
              <p className="text-xs text-gray-400 font-light">Average foot-traffic impressions generated by a shopper carrying a bag through urban areas.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mx-auto mb-4">
                <BarChart3 size={20} />
              </div>
              <h4 className="text-3xl font-bold font-outfit text-white mb-2">&lt; $0.05</h4>
              <p className="text-xs uppercase tracking-wider text-gray-500 font-mono mb-2">Cost-Per-Impression (CPI)</p>
              <p className="text-xs text-gray-400 font-light">Far cheaper than online banner ads or search CPC, with higher tactile brand association.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white mx-auto mb-4">
                <Sparkles size={20} />
              </div>
              <h4 className="text-3xl font-bold font-outfit text-white mb-2">3.5x</h4>
              <p className="text-xs uppercase tracking-wider text-gray-500 font-mono mb-2">Customer Brand Recall</p>
              <p className="text-xs text-gray-400 font-light">Tactile B2B packaging increases buyer emotional trust compared to standard plastic wrapping.</p>
            </div>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal className="text-center p-12 rounded-3xl bg-gradient-to-r from-white/5 to-transparent border border-white/10 max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-outfit font-bold mb-4">Want to run a co-branded campaign?</h3>
          <p className="text-gray-400 text-sm max-w-lg mx-auto mb-8 font-light">
            We help brands partner with local retail and grocery networks to print co-branded advertising designs. Talk to our campaign team.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-white text-black hover:scale-105 hover:bg-gray-100 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300"
          >
            Start Campaign Inquiry
            <ArrowRight size={14} />
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
