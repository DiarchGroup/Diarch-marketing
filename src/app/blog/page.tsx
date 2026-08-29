import Image from "next/image";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function Blog() {
  const posts = [
    {
      title: "The Mobile Billboard: Why Brands are Moving Offline for Packaging",
      excerpt: "With rising digital CPCs and ad blockers cutting marketing reach, brands are turning packaging runs into offline campaigns. Discover how paper bag advertising scales local visibility.",
      author: "Saurabh Kumar",
      date: "June 10, 2026",
      readTime: "5 min read",
      category: "Offline Branding",
      slug: "mobile-billboard-packaging",
      image: "/paper_bag_grocery.png",
    },
    {
      title: "Choosing the Right Paper Weight: GSM Guide for Retail Bags",
      excerpt: "Understanding Grams per Square Meter (GSM) is key to durability. Read our complete guide to selecting paper weights for luxury apparel, heavy groceries, and takeaway meals.",
      author: "Abhinandan Kr Singh",
      date: "May 28, 2026",
      readTime: "4 min read",
      category: "Technical Guide",
      slug: "choosing-paper-weight-gsm",
      image: "/paper_bag_retail.png",
    },
    {
      title: "Designing for Print: How to Make Your Brand Logo Stand Out on Kraft Paper",
      excerpt: "Printing on porous Kraft paper behaves differently than digital screens. Learn best practices for color contrast, watermark logos, and handle alignments for high-impact print runs.",
      author: "Saurabh Kumar",
      date: "May 15, 2026",
      readTime: "6 min read",
      category: "Packaging Design",
      slug: "designing-print-kraft-paper",
      image: "/paper_bag_restaurant.png",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#050505] pt-32 pb-20">
      <div className="container mx-auto px-6 relative z-10">
        {/* Page Header */}
        <div className="text-center mb-24">
          <Reveal>
            <p className="text-[#FF4500] uppercase tracking-[0.4em] text-[10px] mb-6 font-medium font-mono">
              Insights & News
            </p>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 font-outfit">
              Diarch <br />
              <span className="text-white/20 italic">Blog.</span>
            </h1>
            <p className="text-gray-400 text-lg font-light leading-relaxed max-w-2xl mx-auto">
              Branding strategies, unboxing psychology, sustainable packaging updates, and design tips for B2B marketers.
            </p>
          </Reveal>
        </div>

        {/* Blog Post List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-32">
          {posts.map((post, idx) => (
            <Reveal
              key={idx}
              delay={idx * 100}
              className="group flex flex-col justify-between bg-[#0a0a0a] border border-white/5 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500 shadow-lg"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden bg-[#0f0f0f] relative border-b border-white/5">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-[#FF4500] text-black px-3 py-1 rounded-full">
                    <span className="text-[9px] uppercase tracking-widest font-bold font-mono">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-4 text-[10px] text-gray-500 font-mono mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-outfit text-white mb-4 leading-snug group-hover:text-[#FF4500] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 font-light text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-8 pt-0 border-t border-white/5 mt-auto flex items-center justify-between">
                <div className="flex items-center gap-2 text-[10px] text-gray-500 font-mono">
                  <User size={12} /> By {post.author}
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest text-[#FF4500] font-bold group-hover:translate-x-1 transition-transform">
                  Read Article <ArrowRight size={12} />
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Subscribe CTA */}
        <Reveal className="text-center p-12 rounded-3xl bg-gradient-to-r from-white/5 to-transparent border border-white/10 max-w-4xl mx-auto">
          <h3 className="text-2xl font-outfit font-bold mb-4">Subscribe to our newsletter</h3>
          <p className="text-gray-400 text-sm max-w-md mx-auto mb-8 font-light">
            Receive updates about sustainable packaging policy regulations, retail design trends, and campaign suggestions directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto justify-center">
            <input
              type="email"
              placeholder="Enter your corporate email"
              className="bg-transparent border border-white/10 rounded-full px-6 py-3 text-sm text-white focus:border-[#FF4500] outline-none transition-colors w-full sm:max-w-xs"
            />
            <button className="bg-white text-black hover:scale-105 font-bold text-xs uppercase tracking-widest px-8 py-3 rounded-full transition-transform">
              Subscribe
            </button>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
