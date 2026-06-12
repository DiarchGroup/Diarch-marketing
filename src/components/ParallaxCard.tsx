"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ParallaxCardProps {
  children: ReactNode;
  direction: "up" | "down";
  className?: string;
  multiplier?: number;
}

export default function ParallaxCard({
  children,
  direction,
  className = "",
  multiplier = 0.05,
}: ParallaxCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const scrolled = window.scrollY;
      const offset = scrolled * multiplier * (direction === "up" ? -1 : 1);
      ref.current.style.transform = `translateY(${offset}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once initially
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [direction, multiplier]);

  return (
    <div ref={ref} className={`transition-transform duration-100 ease-out ${className}`}>
      {children}
    </div>
  );
}
