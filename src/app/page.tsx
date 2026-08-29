import Link from "next/link";
import Image from "next/image";
import { ArrowRight, TrendingUp, ShoppingBag, Leaf, Shield, Navigation, Globe, Layers } from "lucide-react";
import HeroClock from "@/components/HeroClock";
import Reveal from "@/components/Reveal";
import ParallaxCard from "@/components/ParallaxCard";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#050505] overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 bg-[#050505]">
        {/* Hero Background */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <div className="absolute top-0 left-0 w-full h-full">
            <Image
              src="/hero_bg.jpg"
              alt="Custom Paper Bag Manufacturing Showcase"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center brightness-[0.4] grayscale-[15%]"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/90 via-transparent to-[#050505] z-10"></div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 relative z-20 text-center flex flex-col items-center justify-center h-full">
          <div id="hero-content-wrapper" className="max-w-4xl mx-auto">
            <Reveal>
              <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold leading-[0.95] tracking-tight mb-8 text-white/90 font-outfit">
                Advertise Sustainability. <br />
                <span className="text-[#FF4500]">Carry Influence.</span>
              </h1>
              <p
                className="max-w-2xl mx-auto text-lg md:text-xl lg:text-2xl font-light text-[#ffe0e0] mt-6 tracking-wide"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                Turn every package into a high-visibility mobile billboard. Custom branded paper bag advertising designed for modern retail, e-commerce, and delivery brands.
              </p>
            </Reveal>

            <Reveal delay={200} className="flex flex-col items-center gap-6 mt-12">
              <div className="relative group cursor-pointer">
                <div className="absolute inset-0 bg-[#FF4500]/25 blur-xl rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                <Link
                  href="/contact"
                  className="relative border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-3 rounded-full flex items-center gap-3 text-xs md:text-sm text-white/95 uppercase tracking-widest hover:bg-white/15 transition-all duration-300"
                >
                  Request A Custom Mockup
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* Time Clock */}
              <HeroClock />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. Company Introduction (About) Section */}
      <section id="about" className="py-40 relative overflow-hidden bg-[#050505]">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/[0.015] to-transparent pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal>
              <p className="text-[#FF4500] uppercase tracking-[0.4em] text-[10px] mb-8 font-medium font-mono">
                The Packaging Revolution
              </p>
              <h2 className="text-5xl md:text-7xl leading-[0.9] font-outfit mb-12">
                Elegance is <br />
                <span className="text-white/20 font-bold">Refusal.</span>
              </h2>
              <div className="text-lg text-gray-400 leading-relaxed max-w-lg font-light space-y-6">
                <p>
                  We refuse plastics. We refuse low-impact advertising. Diarch Marketing is your premium B2B strategic partner, helping brands transition away from generic, eco-harmful packaging toward custom-designed paper bag marketing ecosystems.
                </p>
                <p>
                  Our advanced print technology enables quick-commerce platforms, delivery brands, and high-street fashion brands to treat their delivery bags as premium, high-impact media spaces. From heavy GSM luxury Kraft paper to sustainable loop-handle bags, we handle end-to-end design, manufacturing, and logistics.
                </p>
              </div>
              <div className="mt-10">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-white hover:text-[#FF4500] transition-colors"
                >
                  Our Full Story <ArrowRight size={14} />
                </Link>
              </div>
            </Reveal>

            <div className="relative">
              <Reveal delay={200}>
                <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 group shadow-2xl">
                  <Image
                    src="/about_image.jpg"
                    alt="Sustainable Manufacturing Quality"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                  />
                </div>
                {/* Floating stat card */}
                <div className="absolute -bottom-8 -left-8 bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl hidden md:block shadow-2xl">
                  <span className="block text-4xl font-outfit font-bold text-[#FF4500] mb-2">
                    50M+
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-white/40 font-mono">
                    Bags Distributed Globally
                  </span>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Key Benefits Section */}
      <section id="benefits" className="py-40 relative overflow-hidden bg-[#050505]">
        <div className="container mx-auto px-6 relative z-10">
          <Reveal className="mb-32 text-center">
            <h2 className="text-5xl md:text-7xl font-outfit">
              Why Paper Bag <br />
              <span className="italic text-[#FF4500]">Advertising?</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Card 1 - Red (Mobile Billboard) */}
            <ParallaxCard direction="down">
              <Reveal>
                <div className="bg-[#FF4500] rounded-3xl p-8 md:p-12 aspect-[4/5] flex flex-col justify-between shadow-2xl hover:shadow-[0_20px_50px_rgba(255,69,0,0.3)] transition-all duration-500 group cursor-pointer">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                      <TrendingUp className="text-black" size={24} />
                    </div>
                    <span className="text-black font-semibold text-sm border border-black/20 px-3 py-1 rounded-full">
                      01
                    </span>
                  </div>

                  <div>
                    <h3 className="text-3xl md:text-4xl text-black mb-4 leading-none tracking-tight font-outfit font-bold">
                      Mobile <br /> Billboard Effect
                    </h3>
                    <p className="text-black/85 text-base leading-snug">
                      Your customers walk through crowds, malls, and streets, displaying your brand logo. It is offline marketing that achieves high organic impressions at a fraction of standard advertising costs.
                    </p>
                  </div>
                  <div className="w-full h-px bg-black/10 mt-8"></div>
                </div>
              </Reveal>
            </ParallaxCard>

            {/* Card 2 - Black (Premium Design) */}
            <ParallaxCard direction="up" className="md:mt-24">
              <Reveal delay={150}>
                <div className="bg-[#111] border border-white/10 rounded-3xl p-8 md:p-12 aspect-[4/5] flex flex-col justify-between shadow-2xl group cursor-pointer hover:border-white/30 transition-all duration-500">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <ShoppingBag className="text-white" size={24} />
                    </div>
                    <span className="text-white/50 font-medium text-sm border border-white/10 px-3 py-1 rounded-full font-mono">
                      02
                    </span>
                  </div>

                  <div>
                    <h3 className="text-3xl md:text-4xl text-white mb-4 leading-none tracking-tight font-outfit">
                      Luxurious <br /> Finishes
                    </h3>
                    <p className="text-gray-400 text-base leading-snug">
                      Stand out with premium options like matte UV coatings, gold foil hot stamping, custom cotton handles, and heavy GSM virgin Kraft paper. Make unboxing a premium retail experience.
                    </p>
                  </div>
                  <div className="w-full h-px bg-white/10 mt-8"></div>
                </div>
              </Reveal>
            </ParallaxCard>

            {/* Card 3 - Gold (Sustainability) */}
            <ParallaxCard direction="down" className="mt-8 md:mt-[-24px]">
              <Reveal delay={250}>
                <div className="bg-[#D4AF37] rounded-3xl p-8 md:p-12 aspect-[4/5] flex flex-col justify-between shadow-2xl hover:shadow-[0_20px_50px_rgba(212,175,55,0.3)] transition-all duration-500 group cursor-pointer">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                      <Leaf className="text-black" size={24} />
                    </div>
                    <span className="text-black font-semibold text-sm border border-black/20 px-3 py-1 rounded-full">
                      03
                    </span>
                  </div>

                  <div>
                    <h3 className="text-3xl md:text-4xl text-black mb-4 leading-none tracking-tight font-outfit font-bold">
                      Eco-Friendly & <br /> Regulatory Approved
                    </h3>
                    <p className="text-black/85 text-base leading-snug">
                      100% biodegradable and recyclable. Align your brand with corporate social responsibility (CSR) while staying fully compliant with regional single-use plastic ban policies.
                    </p>
                  </div>
                  <div className="w-full h-px bg-black/10 mt-8"></div>
                </div>
              </Reveal>
            </ParallaxCard>

            {/* Card 4 - Dark Grey (B2B Scalability) */}
            <ParallaxCard direction="up" className="mt-8">
              <Reveal delay={350}>
                <div className="bg-[#1a1a1a] border border-white/5 rounded-3xl p-8 md:p-12 aspect-[4/5] flex flex-col justify-between shadow-2xl group cursor-pointer hover:border-white/20 transition-all duration-500">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Shield className="text-white" size={24} />
                    </div>
                    <span className="text-white/50 font-medium text-sm border border-white/10 px-3 py-1 rounded-full font-mono">
                      04
                    </span>
                  </div>

                  <div>
                    <h3 className="text-3xl md:text-4xl text-white mb-4 leading-none tracking-tight font-outfit">
                      Industrial Scale & <br /> Reliability
                    </h3>
                    <p className="text-gray-400 text-base leading-snug">
                      Operating state-of-the-art automatic bag-making plants. We support bulk runs of hundreds of thousands of bags per month, delivering consistent print alignment and structural durability.
                    </p>
                  </div>
                  <div className="w-full h-px bg-white/10 mt-8"></div>
                </div>
              </Reveal>
            </ParallaxCard>
          </div>
        </div>

        {/* Background Radial Pattern */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-5 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #FF4500 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        ></div>
      </section>

      {/* 4. Ecosystem Packaging Division Section */}
      <section id="ecosystem" className="py-32 relative bg-[#050505]">
        <div className="container mx-auto px-6">
          <Reveal className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl lg:text-6xl leading-tight text-white/90 mb-12 font-outfit">
              Our packaging ecosystem extends across specialized verticals,
            </h2>
            <p className="text-xl md:text-2xl text-gray-500 leading-relaxed font-light font-sans">
              each dedicated to a distinct domain of sustainable bag manufacturing and distribution.
            </p>
          </Reveal>

          <div className="mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Division 1: Diarch Go */}
            <Reveal delay={200} className="flex flex-col items-center gap-8">
              <div className="w-full group">
                <div className="cursor-pointer transition-all duration-500 opacity-80 group-hover:opacity-100 group-hover:scale-105 mb-8">
                  <div className="w-48 h-24 overflow-hidden rounded-xl bg-[#0a0a0a] border border-white/5 flex items-center justify-center p-4 mx-auto relative group-hover:border-white/20 transition-colors">
                    <div className="absolute inset-0 bg-white/5 blur-[25px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div
                      className="w-full h-full relative z-10"
                      style={{
                        backgroundImage: "url('/diarchgo.png')",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                    ></div>
                  </div>
                </div>
                <div className="bg-[#0f0f0f] border border-white/5 p-6 rounded-2xl w-full text-left group-hover:translate-y-[-8px] group-hover:border-white/10 group-hover:shadow-[0_15px_40px_rgba(0,0,0,0.5)] transition-all duration-500">
                  <div className="flex items-center gap-3 mb-4">
                    <Navigation className="text-[#FF4500]" size={16} />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-mono">
                      Quick-Commerce Bags
                    </span>
                  </div>
                  <p className="text-[13px] text-gray-500 leading-relaxed font-light">
                    High-volume supply of flat and loop-handle food delivery bags optimized for quick commerce platforms.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Division 2: Diarch International */}
            <Reveal delay={300} className="flex flex-col items-center gap-8">
              <div className="w-full group">
                <div className="cursor-pointer transition-all duration-500 opacity-80 group-hover:opacity-100 group-hover:scale-105 mb-8">
                  <div className="w-48 h-24 overflow-hidden rounded-xl bg-[#0a0a0a] border border-white/5 flex items-center justify-center p-4 mx-auto relative group-hover:border-white/20 transition-colors">
                    <div className="absolute inset-0 bg-white/5 blur-[25px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div
                      className="w-full h-full relative z-10"
                      style={{
                        backgroundImage: "url('/diarch_international.png')",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                    ></div>
                  </div>
                </div>
                <div className="bg-[#0f0f0f] border border-white/5 p-6 rounded-2xl w-full text-left group-hover:translate-y-[-8px] group-hover:border-white/10 group-hover:shadow-[0_15px_40px_rgba(0,0,0,0.5)] transition-all duration-500">
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className="text-[#FF4500]" size={16} />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-mono">
                      Global Export Division
                    </span>
                  </div>
                  <p className="text-[13px] text-gray-500 leading-relaxed font-light">
                    Exporting high-quality eco-friendly packaging, shopping carriers, and luxury paper bags to retailers across North America, Europe, and the UAE.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Division 3: Diarch Retail Packs */}
            <Reveal delay={400} className="flex flex-col items-center gap-8">
              <div className="w-full group">
                <div className="cursor-pointer transition-all duration-500 opacity-80 group-hover:opacity-100 group-hover:scale-105 mb-8">
                  <div className="w-48 h-24 overflow-hidden rounded-xl bg-[#0a0a0a] border border-white/5 flex items-center justify-center p-4 mx-auto relative group-hover:border-white/20 transition-colors">
                    <div className="absolute inset-0 bg-white/5 blur-[25px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div
                      className="w-full h-full relative z-10"
                      style={{
                        backgroundImage: "url('/diarch_homes.png')", // keep existing image key from original folder but re-brand it
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                    ></div>
                  </div>
                </div>
                <div className="bg-[#0f0f0f] border border-white/5 p-6 rounded-2xl w-full text-left group-hover:translate-y-[-8px] group-hover:border-white/10 group-hover:shadow-[0_15px_40px_rgba(0,0,0,0.5)] transition-all duration-500">
                  <div className="flex items-center gap-3 mb-4">
                    <ShoppingBag className="text-[#FF4500]" size={16} />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-mono">
                      Boutique & Retail Packs
                    </span>
                  </div>
                  <p className="text-[13px] text-gray-500 leading-relaxed font-light">
                    Specialized premium boutique packaging, custom luxury carriers, clothing brand paper bags, and promotional cosmetics packaging.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Division 4: Diarch Group */}
            <Reveal delay={500} className="flex flex-col items-center gap-8">
              <div className="w-full group">
                <div className="cursor-pointer transition-all duration-500 opacity-80 group-hover:opacity-100 group-hover:scale-105 mb-8">
                  <div className="w-48 h-24 overflow-hidden rounded-xl bg-[#0a0a0a] border border-white/5 flex items-center justify-center p-4 mx-auto relative group-hover:border-white/20 transition-colors">
                    <div className="absolute inset-0 bg-white/5 blur-[25px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div
                      className="w-full h-full relative z-10"
                      style={{
                        backgroundImage: "url('/diarch_group.png')",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                    ></div>
                  </div>
                </div>
                <div className="bg-[#0f0f0f] border border-white/5 p-6 rounded-2xl w-full text-left group-hover:translate-y-[-8px] group-hover:border-white/10 group-hover:shadow-[0_15px_40px_rgba(0,0,0,0.5)] transition-all duration-500">
                  <div className="flex items-center gap-3 mb-4">
                    <Layers className="text-[#FF4500]" size={16} />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-mono">
                      Sustainability Parent
                    </span>
                  </div>
                  <p className="text-[13px] text-gray-500 leading-relaxed font-light">
                    Strategic oversight and infrastructure support powering the technological scale of all our eco-friendly packaging divisions.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. Direct Mockup Spotlight (Visual Hook) */}
      <section className="py-24 bg-[#0a0a0a] border-y border-white/5">
        <div className="container mx-auto px-6">
          <Reveal className="mb-16 text-center">
            <h3 className="text-3xl md:text-5xl font-outfit mb-4">Our Branded Packaging in the Wild</h3>
            <p className="text-gray-400 font-light max-w-xl mx-auto">
              Realistic mockups displaying how Diarch partners with retail, grocery, and dining brands to elevate their offline marketing.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Bag 1 */}
            <Reveal delay={100} className="group cursor-pointer">
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500 bg-[#0f0f0f]">
                <Image
                  src="/paper_bag_grocery.png"
                  alt="Grocery Eco Paper Bag"
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h4 className="text-lg font-outfit mt-4 mb-1">Eco Grocery Bag</h4>
              <p className="text-xs text-gray-500 uppercase tracking-widest font-mono">Grocery & Takeout</p>
            </Reveal>

            {/* Bag 2 */}
            <Reveal delay={200} className="group cursor-pointer">
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500 bg-[#0f0f0f]">
                <Image
                  src="/paper_bag_retail.png"
                  alt="Fashion Boutique Gold Foil Paper Bag"
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h4 className="text-lg font-outfit mt-4 mb-1">Luxury Retail Bag</h4>
              <p className="text-xs text-gray-500 uppercase tracking-widest font-mono">Boutique & Cosmetics</p>
            </Reveal>

            {/* Bag 3 */}
            <Reveal delay={300} className="group cursor-pointer">
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500 bg-[#0f0f0f]">
                <Image
                  src="/paper_bag_restaurant.png"
                  alt="White Delivery Bag"
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h4 className="text-lg font-outfit mt-4 mb-1">Gourmet Delivery Bag</h4>
              <p className="text-xs text-gray-500 uppercase tracking-widest font-mono">Restaurants & Delivery</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. Action-Inquiry Banner CTA */}
      <section className="py-32 relative overflow-hidden bg-[#050505]">
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <Reveal>
            <p className="text-[#FF4500] uppercase tracking-[0.4em] text-[10px] mb-8 font-medium font-mono">
              Ready to Upgrade?
            </p>
            <h2 className="text-4xl md:text-7xl font-outfit mb-8 leading-tight">
              Let&apos;s build your <br />
              <span className="text-white/20 font-bold">mobile billboard.</span>
            </h2>
            <p className="text-gray-400 font-light max-w-xl mx-auto text-base md:text-lg mb-12">
              Get in touch with our packaging design strategists today. We will design and construct customized, eco-friendly mockups for your business for free.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FF4500] to-[#FF8C00] text-black hover:scale-105 px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 shadow-[0_20px_50px_rgba(255,69,0,0.3)] btn-glow"
            >
              Start Your Inquiry
              <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
