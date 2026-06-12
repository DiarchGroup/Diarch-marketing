import Link from "next/link";
import { ArrowRight, Leaf, Shield, CheckCircle, Flame, Eye, DollarSign } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function WhyPaperBags() {
  const benefits = [
    {
      icon: <Eye className="text-[#FF4500]" size={24} />,
      title: "Hyper-Local Brand Visibility",
      description: "Unlike static billboards or digital banner ads that consumers filter out via 'ad-blindness', a customer carrying a beautifully printed paper shopping bag is a dynamic, moving endorsement. It places your brand logo directly into high-traffic urban locations.",
    },
    {
      icon: <DollarSign className="text-[#D4AF37]" size={24} />,
      title: "Cheapest Cost-Per-Impression (CPI)",
      description: "Compare $2.00 per click in online search advertising against a premium paper bag that costs pennies to manufacture but gets seen by thousands of people. It is a highly cost-effective offline B2B advertising channel.",
    },
    {
      icon: <Leaf className="text-white" size={24} />,
      title: "Eco-Friendly Brand Association",
      description: "Modern consumers are highly eco-conscious. Distributing products in fully biodegradable, recycled Kraft carriers positions your brand as a responsible environmental advocate, building deep emotional brand equity.",
    },
    {
      icon: <Shield className="text-[#FF4500]" size={24} />,
      title: "Compliance & Regulations",
      description: "With regional administrations banning single-use plastics worldwide, switching to paper bags keeps your operations fully compliant, avoiding heavy fines, legal issues, and negative public relations.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#050505] pt-32 pb-20">
      <div className="container mx-auto px-6 relative z-10">
        {/* Page Header */}
        <div className="text-center mb-24">
          <Reveal>
            <p className="text-[#FF4500] uppercase tracking-[0.4em] text-[10px] mb-6 font-medium font-mono">
              The Value Proposition
            </p>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 font-outfit">
              Why Paper Bag <br />
              <span className="text-white/20 italic">Advertising?</span>
            </h1>
            <p className="text-gray-400 text-lg font-light leading-relaxed max-w-2xl mx-auto">
              How changing your utility packaging into branded marketing carriers drives organic local reach and establishes eco-compliance.
            </p>
          </Reveal>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-32">
          {benefits.map((b, idx) => (
            <Reveal
              key={idx}
              delay={idx * 100}
              className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 flex gap-6"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                {b.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold font-outfit text-white mb-3">{b.title}</h3>
                <p className="text-gray-400 font-light text-sm leading-relaxed">{b.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Contrast Table (Paper vs Digital) */}
        <Reveal className="p-8 md:p-16 rounded-3xl bg-[#111] border border-white/5 max-w-4xl mx-auto mb-32">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-outfit font-bold mb-4">Paper Bags vs. Digital Marketing</h3>
            <p className="text-gray-400 font-light text-sm">A side-by-side performance breakdown for B2B brands.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-xs uppercase tracking-widest text-[#FF4500] font-mono">
                  <th className="pb-4">Metric</th>
                  <th className="pb-4">DiArch Branded Carriers</th>
                  <th className="pb-4">Online Ads (PPC/Display)</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-300 font-light divide-y divide-white/5">
                <tr>
                  <td className="py-4 font-bold text-white">Ad-Blocker Vulnerability</td>
                  <td className="py-4 text-[#D4AF37] font-semibold flex items-center gap-1.5"><CheckCircle size={14} /> 100% Immune</td>
                  <td className="py-4 text-red-400 flex items-center gap-1.5"><Flame size={14} /> High (blocked by 40%+ users)</td>
                </tr>
                <tr>
                  <td className="py-4 font-bold text-white">Ad Fatigue & Blindness</td>
                  <td className="py-4">Zero. Viewed as utility packaging</td>
                  <td className="py-4">High. Users actively ignore banners</td>
                </tr>
                <tr>
                  <td className="py-4 font-bold text-white">Cost-Per-Impression</td>
                  <td className="py-4 font-bold text-[#FF4500]">Extremely Low (&lt; $0.05 per bag)</td>
                  <td className="py-4">Rising CPCs ($0.80 - $3.50+ per click)</td>
                </tr>
                <tr>
                  <td className="py-4 font-bold text-white">Customer Association</td>
                  <td className="py-4">Tactile, premium physical unboxing</td>
                  <td className="py-4">Fleeting, easily forgotten digital pixels</td>
                </tr>
                <tr>
                  <td className="py-4 font-bold text-white">Ecological CSR Alignment</td>
                  <td className="py-4 font-semibold text-[#D4AF37]">High (100% biodegradable)</td>
                  <td className="py-4">Neutral / Not applicable</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal className="text-center p-12 rounded-3xl bg-gradient-to-r from-white/5 to-transparent border border-white/10 max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-outfit font-bold mb-4">Want to run a sustainable campaign?</h3>
          <p className="text-gray-400 text-sm max-w-lg mx-auto mb-8 font-light">
            Switching to paper bags helps protect our environment, ensures compliance, and boosts local brand visibility.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-white text-black hover:scale-105 hover:bg-gray-100 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300"
          >
            Get A Custom Layout Spec
            <ArrowRight size={14} />
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
