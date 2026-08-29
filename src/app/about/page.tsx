import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Leaf, Factory } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function About() {
  const stats = [
    { number: "10+", label: "Years in B2B Production" },
    { number: "50M+", label: "Bags Distributed" },
    { number: "250+", label: "Enterprise Brands Partnered" },
    { number: "100%", label: "Recyclable Materials" },
  ];

  const leadership = [
    {
      name: "Ranjan Kumar Ojha",
      title: "Founder & CEO",
      image: "/ceo.png",
      bio: "Pioneer in B2B packaging and sustainability. Ranjan founded Diarch to revolutionize offline media space by turning everyday packaging into highly visible marketing channels.",
    },
    {
      name: "Abhinandan Kr Singh",
      title: "General Manager",
      image: "/gm.png",
      bio: "Operations veteran managing our automatic manufacturing plants and supply chain logistics. Ensures top-tier structural strength, GSM consistency, and zero distribution latency.",
    },
    {
      name: "Saurabh Kumar",
      title: "Packaging Design Director",
      image: "/dmm.png",
      bio: "Expert designer who bridges branding and physical product lines. Saurabh collaborates with clients to design logos, handles, paper weights, and layout finishes that pop.",
    },
    {
      name: "Gyanshree",
      title: "Head of HR & Relations",
      image: "/hr.png",
      bio: "Cultivates talent and corporate relations. Gyanshree oversees client success programs, corporate partnerships, and CSR integration for brands adopting our eco-carriers.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#050505] pt-32 pb-20">
      <div className="container mx-auto px-6 relative z-10">
        {/* Page Header */}
        <div className="text-center mb-24">
          <Reveal>
            <p className="text-[#FF4500] uppercase tracking-[0.4em] text-[10px] mb-6 font-medium font-mono">
              Who We Are
            </p>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 font-outfit">
              Moving Offline for <br />
              <span className="text-white/20 italic">Maximum Influence.</span>
            </h1>
            <p className="text-gray-400 text-lg font-light leading-relaxed max-w-2xl mx-auto">
              Diarch Marketing is an industrial-scale manufacturer specializing in custom-branded, eco-friendly paper bags that double as high-visibility mobile advertising carriers.
            </p>
          </Reveal>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-40">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-outfit mb-8">The Diarch Transition</h2>
            <div className="text-gray-400 font-light leading-relaxed space-y-6">
              <p>
                Founded as a digital marketing innovator, Diarch Marketing recognized a growing market blindspot: digital fatigue. As online ads became more saturated and expensive, physical touchpoints remained highly engaging. At the same time, global environmental policies shifted away from single-use plastics.
              </p>
              <p>
                We saw an opportunity to bridge the gap. By designing premium, strong, custom-branded paper bags, we transformed utility packaging into a high-visibility, eco-friendly marketing channel.
              </p>
              <p>
                Today, Diarch operates high-capacity automatic paper bag manufacturing facilities. We supply bulk custom packaging to hyper-local delivery services, retail chains, dining sectors, and corporate conferences, turning packaging into a powerful brand asset.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200} className="relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/about_image.jpg"
                alt="Automatic Bag Making Plants"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-[#FF4500] text-black px-8 py-6 rounded-2xl hidden md:block shadow-2xl">
              <span className="block text-3xl font-bold font-outfit">100%</span>
              <span className="text-[10px] uppercase tracking-wider font-semibold">Plastic-Free Supply</span>
            </div>
          </Reveal>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-40 border-y border-white/5 py-16">
          {stats.map((stat, idx) => (
            <Reveal key={idx} delay={idx * 100} className="text-center">
              <span className="block text-4xl md:text-5xl font-bold font-outfit text-[#FF4500] mb-2">{stat.number}</span>
              <span className="text-[11px] uppercase tracking-wider text-gray-500 font-mono">{stat.label}</span>
            </Reveal>
          ))}
        </div>

        {/* Mission, Vision, and Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-40">
          <Reveal className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/5">
            <div className="w-12 h-12 rounded-xl bg-[#FF4500]/10 flex items-center justify-center text-[#FF4500] mb-6">
              <Leaf size={24} />
            </div>
            <h3 className="text-xl font-bold font-outfit mb-4 text-white">Our Mission</h3>
            <p className="text-gray-400 font-light text-sm leading-relaxed">
              To eliminate non-biodegradable packaging from commercial supply chains by offering premium, custom branded paper bag alternatives that elevate brand visibility organically.
            </p>
          </Reveal>

          <Reveal delay={100} className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/5">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white mb-6">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-bold font-outfit mb-4 text-white">Our Vision</h3>
            <p className="text-gray-400 font-light text-sm leading-relaxed">
              To become the global gold standard in custom sustainable packaging, enabling retailers and delivery networks to turn every customer delivery run into an offline advertisement.
            </p>
          </Reveal>

          <Reveal delay={200} className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/5">
            <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-6">
              <Factory size={24} />
            </div>
            <h3 className="text-xl font-bold font-outfit mb-4 text-white">B2B Manufacturing Quality</h3>
            <p className="text-gray-400 font-light text-sm leading-relaxed">
              We operate advanced automatic bag makers, delivering precise gusset forming, high load-bearing capacity handles, and uniform eco-friendly water-based ink print alignment.
            </p>
          </Reveal>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <Reveal className="mb-16">
            <p className="text-[#FF4500] uppercase tracking-[0.4em] text-[10px] mb-4 font-medium font-mono">The Collective</p>
            <h2 className="text-4xl md:text-6xl font-outfit">
              Our Leadership <span className="text-white/20 font-bold">Team.</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((member, idx) => (
              <Reveal key={idx} delay={idx * 100} className="group">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 relative border border-white/5">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <div className="flex gap-4 text-lg">
                      <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="LinkedIn">
                        <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                      <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="Twitter">
                        <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-outfit font-bold mb-1 text-white/95">{member.name}</h3>
                <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-medium mb-3 font-mono">{member.title}</p>
                <p className="text-xs text-gray-400 font-light leading-relaxed">{member.bio}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Reveal className="text-center mt-32 p-12 rounded-3xl bg-gradient-to-r from-white/5 to-transparent border border-white/10 max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-outfit font-bold mb-4">Want to consult on custom sizes?</h3>
          <p className="text-gray-400 text-sm max-w-lg mx-auto mb-8 font-light">
            Our experts can guide you on paper GSM weight, hand options, and printing methodologies tailored to your B2B model.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-white text-black hover:scale-105 hover:bg-gray-100 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300"
          >
            Connect With Our team
            <ArrowRight size={14} />
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
