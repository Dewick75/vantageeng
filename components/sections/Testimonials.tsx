"use client";

import React, { useState } from "react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  tags: string[];
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Eng. Lalith Wijewardene",
    role: "Director of Infrastructure Operations",
    company: "Heavy Manufacturing Facility, Colombo",
    quote: "Vantage delivered our 400A switchboard panel fabrication and delta PLC automation exactly within schedule. Their integration caused zero factory downtime and the cabling neatness matches international standards.",
    rating: 5,
    tags: ["Panel Fabrication", "Industrial Automation"],
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTxY0Vj-3vVpWwN3tW6Zp-Xy4m7O6V5f5U9u4T3_3tW6Zp-Xy4m7O6V5f5U9u4T3_3tW6Zp-Xy"
  },
  {
    name: "Shantha De Silva",
    role: "Chief Technology Officer",
    company: "Luxury Commercial Tower, Galle",
    quote: "Our spatial smart controls integration is flawless. By unifying HVAC load curves, central lighting pathways, and biometric gates, Vantage reduced our commercial building energy utilization footprint by 28%. Highly recommended.",
    rating: 5,
    tags: ["Home Automation", "IoT & Energy"],
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTxY0Vj-3vVpWwN3tW6Zp-Xy4m7O6V5f5U9u4T3_3tW6Zp-Xy4m7O6V5f5U9u4T3_3tW6Zp-Xy"
  },
  {
    name: "Mrs. Ruwani Perera",
    role: "Operations Lead",
    company: "Regional Cold-Storage Warehouse",
    quote: "Guardian telemetry system has completely removed temperature monitoring anxieties. The remote sensors notify our dispatchers instantly via SMS whenever a minor phase imbalance occurs, protecting millions in assets.",
    rating: 5,
    tags: ["IoT & Energy", "CCTV & Security"],
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTxY0Vj-3vVpWwN3tW6Zp-Xy4m7O6V5f5U9u4T3_3tW6Zp-Xy4m7O6V5f5U9u4T3_3tW6Zp-Xy"
  }
];

export function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="py-20 md:py-28 bg-surface dark:bg-vantage-navy/20 select-none text-left border-b border-outline-variant/10">
      <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left panel: Info */}
          <div className="lg:col-span-5 text-left">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-vantage-blue bg-vantage-blue/10 px-3.5 py-1.5 rounded-full inline-block mb-4">
              Testimonials
            </span>
            <h2 className="font-bold text-2xl md:text-4xl text-charcoal-text dark:text-white mb-6 tracking-tight">
              What Our Engineering Partners Say
            </h2>
            <p className="text-xs md:text-sm text-on-surface-variant dark:text-white/60 leading-relaxed mb-8">
              We design long-term partnerships built on absolute quality, safety standards, and reliable operation SLAs. Hear from facility leaders across Sri Lanka.
            </p>

            {/* Testimonial Nav Dots */}
            <div className="flex gap-2.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                    i === activeIdx ? "bg-vantage-blue w-8" : "bg-outline-variant/40 hover:bg-outline-variant"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right panel: Active Card */}
          <div className="lg:col-span-7 bg-white dark:bg-vantage-navy rounded-2xl border border-outline-variant/30 p-8 shadow-xl relative min-h-[280px] flex flex-col justify-between overflow-hidden animate-fadeIn">
            {/* Quote watermark icon */}
            <span className="absolute right-6 top-4 material-symbols-outlined text-8xl text-outline-variant/10 pointer-events-none select-none font-bold">
              format_quote
            </span>

            <div>
              {/* Rating stars */}
              <div className="flex gap-1 mb-6 text-yellow-500">
                {Array.from({ length: testimonials[activeIdx].rating }).map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                ))}
              </div>

              {/* Quote text */}
              <p className="text-sm md:text-base text-charcoal-text dark:text-white italic leading-relaxed mb-6 font-normal">
                "{testimonials[activeIdx].quote}"
              </p>
            </div>

            {/* User Info footer */}
            <div className="flex items-center justify-between border-t border-outline-variant/10 pt-5 mt-4">
              <div className="flex items-center gap-3.5 text-left">
                {/* Fallback avatar block */}
                <div className="w-10 h-10 rounded-full bg-vantage-blue/15 flex items-center justify-center font-bold text-xs text-vantage-blue uppercase">
                  {testimonials[activeIdx].name.split(" ")[1]?.substring(0, 2) || "VE"}
                </div>
                <div>
                  <h4 className="font-bold text-xs text-charcoal-text dark:text-white">
                    {testimonials[activeIdx].name}
                  </h4>
                  <p className="text-[10px] text-on-surface-variant dark:text-white/50 font-normal">
                    {testimonials[activeIdx].role}, <span className="font-semibold text-vantage-blue">{testimonials[activeIdx].company}</span>
                  </p>
                </div>
              </div>

              <div className="hidden sm:flex gap-1.5 shrink-0">
                {testimonials[activeIdx].tags.map((tag) => (
                  <span key={tag} className="bg-surface-container-low border border-outline-variant/20 dark:bg-white/5 text-[9px] font-bold text-on-surface-variant dark:text-white/60 px-2.5 py-1 rounded-full uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
