import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function Industries() {
  const industries = [
    {
      title: "Grocery & Supermarkets",
      image: "/paper_bag_grocery.png",
      description: "High-volume, wide-bottom Kraft carriers with reinforced bases engineered for delivery riders and heavy staples.",
      spec: "80-120 GSM, flat handles, wide gussets.",
    },
    {
      title: "Fashion & Retail Boutique",
      image: "/paper_bag_retail.png",
      description: "Sophisticated shopping carriers with twisted handles, silk ropes, or gold foil hot stamps that elevate shop unboxings.",
      spec: "120-200 GSM, twisted cord handles, spot UV.",
    },
    {
      title: "Restaurants & Takeout Food",
      image: "/paper_bag_restaurant.png",
      description: "Grease-barrier lined bags with square bottoms designed to keep food delivery containers flat and tip-resistant.",
      spec: "FDA food-grade, 70-100 GSM, flat handles.",
    },
    {
      title: "Boutiques & Cosmetics",
      image: "/paper_bag_boutique.png",
      description: "Elegant, small-format paper bags featuring satin ribbon closures designed for premium gifts and cosmetics lines.",
      spec: "180-250 GSM, ribbon closures, soft lamination.",
    },
    {
      title: "Corporate & Trade Shows",
      image: "/paper_bag_corporate.png",
      description: "Heavy-duty branding giveaway bags designed to distribute corporate brochures and marketing items at events.",
      spec: "120 GSM, twisted paper handles, 2-sided print.",
    },
    {
      title: "FMCG Brand Campaigns",
      image: "/paper_bag_fmcg.png",
      description: "High-volume contract manufacturing for nationwide product launches, promotional sample sets, and activations.",
      spec: "90-130 GSM, customizable sizes & prints.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#050505] pt-32 pb-20">
      <div className="container mx-auto px-6 relative z-10">
        {/* Page Header */}
        <div className="text-center mb-20">
          <Reveal>
            <p className="text-[#FF4500] uppercase tracking-[0.4em] text-[10px] mb-6 font-medium font-mono">
              Market Segments
            </p>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 font-outfit">
              Industries We Serve.
            </h1>
            <p className="text-gray-400 text-lg font-light max-w-xl mx-auto">
              Custom-engineered paper carriers optimized for specific retail, delivery, and marketing models.
            </p>
          </Reveal>
        </div>

        {/* Pictorial Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-32">
          {industries.map((ind, idx) => (
            <Reveal
              key={idx}
              delay={idx * 50}
              className="group rounded-3xl bg-[#0a0a0a] border border-white/5 overflow-hidden hover:border-[#FF4500]/25 transition-all duration-500 hover:translate-y-[-4px] flex flex-col shadow-lg"
            >
              {/* Picture Header */}
              <div className="aspect-[16/10] overflow-hidden border-b border-white/5 relative bg-[#050505]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ind.image}
                  alt={ind.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content body */}
              <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold font-outfit text-white mb-2 group-hover:text-[#FF4500] transition-colors">
                    {ind.title}
                  </h3>
                  <p className="text-gray-400 font-light text-xs leading-relaxed mb-6">
                    {ind.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <span className="block text-[8px] uppercase tracking-wider text-white/35 font-mono mb-1">
                    Standard Config:
                  </span>
                  <span className="text-xs text-[#D4AF37] font-light font-mono">{ind.spec}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Action Link CTA */}
        <Reveal className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-white/10 max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-outfit font-bold mb-3">View Real Impact Studies</h3>
          <p className="text-gray-400 text-xs max-w-md mx-auto mb-6 font-light">
            Review detailed case study data highlighting conversion increases and leakage complaints reductions from actual brand integrations.
          </p>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 bg-white text-black hover:scale-105 hover:bg-gray-100 px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300"
          >
            Explore Portfolio
            <ArrowRight size={12} />
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
