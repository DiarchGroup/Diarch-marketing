"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");

  const items = [
    {
      title: "Eco Grocery Kraft Bag",
      category: "grocery",
      image: "/paper_bag_grocery.png",
      tag: "100% Recyclable Kraft",
    },
    {
      title: "Luxury Matte Boutique Bag",
      category: "retail",
      image: "/paper_bag_retail.png",
      tag: "Gold Foil Embossed",
    },
    {
      title: "Gourmet Takeout Carrier",
      category: "restaurant",
      image: "/paper_bag_restaurant.png",
      tag: "Grease-Resistant Base",
    },
  ];

  const filters = [
    { name: "Show All", value: "all" },
    { name: "Grocery & Marts", value: "grocery" },
    { name: "Retail & Apparel", value: "retail" },
    { name: "Dining & Delivery", value: "restaurant" },
  ];

  const filteredItems =
    activeFilter === "all"
      ? items
      : items.filter((item) => item.category === activeFilter);

  return (
    <div className="relative min-h-screen bg-[#050505] pt-32 pb-20">
      <div className="container mx-auto px-6 relative z-10">
        {/* Page Header */}
        <div className="text-center mb-24">
          <Reveal>
            <p className="text-[#FF4500] uppercase tracking-[0.4em] text-[10px] mb-6 font-medium font-mono">
              Product Catalog
            </p>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 font-outfit">
              Mockup <br />
              <span className="text-white/20 italic">Gallery.</span>
            </h1>
            <p className="text-gray-400 text-lg font-light leading-relaxed max-w-2xl mx-auto">
              Browse realistic mockups displaying how B2B custom branded paper bags can enhance local offline marketing.
            </p>
          </Reveal>
        </div>

        {/* Filter Controls */}
        <Reveal className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeFilter === filter.value
                  ? "bg-[#FF4500] text-black hover:scale-105"
                  : "bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {filter.name}
            </button>
          ))}
        </Reveal>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-32">
          {filteredItems.map((item, idx) => (
            <Reveal
              key={idx}
              delay={idx * 100}
              className="group cursor-pointer"
            >
              <div className="aspect-square rounded-3xl overflow-hidden border border-white/5 group-hover:border-white/25 transition-all duration-500 bg-[#0f0f0f] relative shadow-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-[9px] uppercase tracking-widest text-[#FF4500] font-bold font-mono">
                    {item.tag}
                  </span>
                  <h3 className="text-lg font-bold font-outfit text-white mt-1">
                    {item.title}
                  </h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Specs Table Link */}
        <Reveal className="text-center p-12 rounded-3xl bg-[#0a0a0a] border border-white/5 max-w-4xl mx-auto">
          <h3 className="text-2xl font-outfit font-bold mb-4">Need a custom mockup with your own logo?</h3>
          <p className="text-gray-400 text-sm max-w-lg mx-auto mb-8 font-light">
            Send us your corporate branding files in vector format (.AI, .EPS, or high-res .PNG). Our design team will compile 3D digital mockups of your bags for free.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest bg-white text-black hover:scale-105 hover:bg-gray-100 transition-all duration-300"
          >
            Request Free Digital Mockup
          </a>
        </Reveal>
      </div>
    </div>
  );
}
