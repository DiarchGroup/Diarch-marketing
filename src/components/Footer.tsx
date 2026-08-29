import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const sections = {
    solutions: [
      { name: "Custom Branded Bags", href: "/services" },
      { name: "Retail Solutions", href: "/services" },
      { name: "Restaurant Bags", href: "/services" },
      { name: "Eco Campaigns", href: "/services" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Industries Served", href: "/industries" },
      { name: "Success Stories", href: "/portfolio" },
      { name: "Why Paper Bags", href: "/why-paper-bags" },
    ],
    resources: [
      { name: "Mockup Gallery", href: "/gallery" },
      { name: "Insights Blog", href: "/blog" },
      { name: "Contact & Inquiries", href: "/contact" },
    ],
  };

  return (
    <footer className="py-20 border-t border-white/5 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-8 h-8 rounded-lg overflow-hidden border border-white/10 group-hover:border-white/20 transition-colors">
                <Image
                  src="/logo.png"
                  alt="Diarch Marketing Logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
              <span
                className="text-lg font-semibold tracking-tighter text-white"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Diarch Marketing
              </span>
            </Link>
            <p className="text-gray-500 text-sm max-w-sm leading-relaxed mb-6 font-light">
              Pioneering custom-branded paper bag advertising and eco-friendly packaging solution ecosystems for retail, e-commerce, food delivery, and FMCG brands.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="https://www.instagram.com/diarchmarketing" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
              <a href="https://twitter.com/diarchmarketing" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a>
              <a href="https://www.linkedin.com/company/diarchmarketing" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>

          {/* Solution Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#FF4500] font-semibold mb-6 font-mono">Solutions</h4>
            <div className="flex flex-col gap-3">
              {sections.solutions.map((item) => (
                <Link key={item.name} href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/50 font-semibold mb-6 font-mono">Company</h4>
            <div className="flex flex-col gap-3">
              {sections.company.map((item) => (
                <Link key={item.name} href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/50 font-semibold mb-6 font-mono">Resources</h4>
            <div className="flex flex-col gap-3">
              {sections.resources.map((item) => (
                <Link key={item.name} href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Massive Background Typography and Copyright */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 pt-10 border-t border-white/5">
          <div className="w-full lg:w-auto">
            <h2 className="text-[10vw] leading-[0.8] tracking-tighter text-white/[0.03] font-bold select-none pointer-events-none uppercase font-outfit">
              DIARCH GROUP.
            </h2>
          </div>
          <p className="text-xs text-gray-600 font-light whitespace-nowrap">
            &copy; {new Date().getFullYear()} Diarch Marketing. All rights reserved.
          </p>
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#FF4500] blur-[180px] opacity-[0.03] pointer-events-none"></div>
    </footer>
  );
}
