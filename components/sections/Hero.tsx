"use client";

import React from "react";

interface HeroProps {
  onOpenQuote: () => void;
}

export function Hero({ onOpenQuote }: HeroProps) {
  return (
    <section className="px-6 md:px-margin-desktop py-12 md:py-24 max-w-container-max mx-auto select-none overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center pt-16 md:pt-20">
        {/* Left Column: Text Content */}
        <div className="lg:col-span-6 text-left relative z-10 animate-slideLeft">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-surface-container-low dark:bg-vantage-navy/60 rounded-full mb-6 border border-outline-variant/20 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-vantage-blue animate-pulse"></span>
            <span className="font-semibold text-[10px] tracking-widest text-vantage-blue uppercase font-montserrat">
              Innovation in Motion
            </span>
          </div>

          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[54px] lg:leading-[64px] text-charcoal-text dark:text-white tracking-tight mb-6">
            Engineering the Future of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-vantage-blue to-teal-500 font-extrabold">
              Integrated Systems
            </span>
          </h1>

          <p className="text-sm md:text-base text-on-surface-variant dark:text-white/70 mb-10 max-w-lg leading-relaxed">
            We deliver high-precision engineering solutions across Sri Lanka, merging advanced automation with structural integrity for commercial and industrial excellence.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={onOpenQuote}
              className="bg-vantage-blue text-white px-8 py-4 rounded-full font-bold text-xs flex items-center gap-2 hover:bg-vantage-blue/95 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-vantage-blue/20 cursor-pointer"
            >
              Get a Free Consultation
              <span className="material-symbols-outlined text-[16px]">bolt</span>
            </button>
            <a
              href="#portfolio"
              className="border border-outline-variant/60 dark:border-white/20 dark:text-white px-8 py-4 rounded-full font-bold text-xs flex items-center gap-2 hover:bg-surface-container-low dark:hover:bg-white/5 active:scale-95 transition-all cursor-pointer"
            >
              View Case Studies
              <span className="material-symbols-outlined text-[16px]">play_circle</span>
            </a>
          </div>
        </div>

        {/* Right Column: Visual Component */}
        <div className="lg:col-span-6 mt-12 lg:mt-0 relative animate-slideRight flex justify-center">
          {/* Main Visual Frame */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-outline-variant/30 w-full max-w-[500px] h-[360px] md:h-[420px] transition-transform duration-700 hover:rotate-1 hover:scale-[1.01]">
            <div className="absolute inset-0 bg-gradient-to-tr from-vantage-navy/40 to-transparent z-10"></div>
            {/* Background Decorative Grid */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#007BFF_1px,transparent_1px)] [background-size:16px_16px]"></div>
            
            <img
              alt="Engineering Systems"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPtxZWR0Y0s-AtUgnK7XhzHh8iClxz0kxhBf3cKRdR8uBVpkGeTw1b1kT4qwpEQaqOMnGU5Du6V270eHxboa5PvpiQrpmotu3mrB8jV4CA57FiI1IR-FJM9Y11_zTL55UJ6kwwYvbQuD8pZQAe3VUFHW2NGgy7K6mhrbweMtv08CZWJm4seUnG2uSuxg2LXMRmwJOW1DdMrarkovzcoQiU0aMzkZrBlDI0DsGlT_6uzO66ODcw4BrURzhC8PeUBkh7KghAvXy8i4c"
              onError={(e) => {
                // Set fallback gradient if source image fails to load
                e.currentTarget.style.display = "none";
                const fallback = document.getElementById("hero-fallback");
                if (fallback) fallback.style.display = "flex";
              }}
            />

            {/* Fallback styling */}
            <div
              id="hero-fallback"
              className="hidden absolute inset-0 bg-gradient-to-br from-vantage-navy to-vantage-blue flex-col items-center justify-center p-8 text-center text-white"
            >
              <span className="material-symbols-outlined text-6xl animate-pulse mb-4 text-teal-400">
                precision_manufacturing
              </span>
              <h3 className="font-bold text-lg">Precision Integration Panels</h3>
              <p className="text-xs text-white/70 max-w-xs mt-2">
                High-tension sub-systems configured under strict international guidelines.
              </p>
            </div>
          </div>

          {/* Floating Verified ISO Badge Card */}
          <div className="absolute bottom-4 -left-4 md:-left-8 glass-card p-5 rounded-xl border border-outline-variant/30 shadow-xl max-w-[280px] text-left animate-bounceSlow hidden sm:block">
            <div className="flex items-center gap-2.5 mb-2">
              <span
                className="material-symbols-outlined text-vantage-blue text-2xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified
              </span>
              <span className="font-bold text-xs text-vantage-navy dark:text-white uppercase tracking-wider">
                Certified Quality
              </span>
            </div>
            <p className="text-[10px] leading-relaxed text-on-surface-variant dark:text-white/70">
              ISO 9001:2015 Standards verified in every integrated system we assemble.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
