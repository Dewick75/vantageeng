"use client";

import React from "react";

interface UspItem {
  number: string;
  label: string;
  description: string;
}

const stats: UspItem[] = [
  {
    number: "12+",
    label: "Years Expertise",
    description: "Configuring power and logic platforms."
  },
  {
    number: "450+",
    label: "Projects Done",
    description: "Industrial grid connections & factory setups."
  },
  {
    number: "07",
    label: "Core Divisions",
    description: "Multidisciplined synergy under one roof."
  },
  {
    number: "24/7",
    label: "Expert Support",
    description: "Structured preventative zero-downtime SLA."
  }
];

export function Usp() {
  return (
    <section id="expertise" className="bg-surface-container-lowest dark:bg-vantage-navy/30 py-16 md:py-24 border-y border-outline-variant/20 select-none">
      <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop text-center">
        {/* Title Group */}
        <div className="max-w-3xl mx-auto mb-16 animate-onScroll">
          <div className="inline-block text-[10px] font-bold text-vantage-blue uppercase tracking-widest bg-vantage-blue/10 px-3.5 py-1.5 rounded-full mb-4">
            Unified Synergy
          </div>
          <h2 className="font-bold text-2xl md:text-[38px] md:leading-[46px] text-charcoal-text dark:text-white mb-6 tracking-tight">
            Sri Lanka's Most Comprehensive Integrated Engineering Partner
          </h2>
          <p className="text-xs md:text-sm text-on-surface-variant dark:text-white/70 leading-relaxed max-w-2xl mx-auto">
            Our multidisciplined approach combines seven core divisions to create a seamless synergy between infrastructure and intelligence. From industrial scale power systems to bespoke IoT solutions, we unify technology.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8 text-left border-t border-outline-variant/10 pt-12">
          {stats.map((item, index) => (
            <div
              key={index}
              className="p-6 md:p-8 border-l-2 border-vantage-blue/20 hover:border-vantage-blue transition-all duration-300 group hover:bg-surface-container-low dark:hover:bg-vantage-navy/40 rounded-r-xl"
            >
              <h4 className="font-extrabold text-3xl md:text-5xl text-vantage-blue mb-2.5 transition-transform duration-300 group-hover:scale-105 select-none">
                {item.number}
              </h4>
              <p className="text-xs font-bold text-charcoal-text dark:text-white uppercase tracking-wider mb-2.5">
                {item.label}
              </p>
              <p className="text-[11px] leading-relaxed text-on-surface-variant dark:text-white/50 font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
