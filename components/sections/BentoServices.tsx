"use client";

import React from "react";
import Link from "next/link";

interface BentoServicesProps {
  onOpenQuote: (serviceName?: string) => void;
}

export function BentoServices({ onOpenQuote }: BentoServicesProps) {
  return (
    <section id="portfolio" className="py-20 md:py-28 px-6 md:px-margin-desktop max-w-container-max mx-auto select-none">
      {/* Title block */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6 text-left">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-vantage-blue bg-vantage-blue/10 px-3 py-1.5 rounded-full">
            Capabilities
          </span>
          <h2 className="font-bold text-2xl md:text-4xl text-charcoal-text dark:text-white mt-4 tracking-tight">
            Precision Engineering Solutions
          </h2>
        </div>
        <p className="max-w-md text-xs md:text-sm text-on-surface-variant dark:text-white/60 leading-relaxed">
          Explore our diverse engineering ecosystem, spanning high-voltage power networks, advanced automation logic, and custom-programmed smart facilities.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="bento-grid">
        {/* Box 1: Electrical */}
        <Link
          href="/services/electrical"
          className="col-span-12 md:col-span-4 bg-white dark:bg-vantage-navy p-8 rounded-2xl border border-outline-variant/30 dark:border-white/10 flex flex-col justify-between group hover:border-vantage-blue hover:shadow-xl dark:hover:border-vantage-blue transition-all duration-300 cursor-pointer min-h-[250px] text-left"
        >
          <div>
            <span className="material-symbols-outlined text-4xl text-vantage-blue mb-6 bg-vantage-blue/10 p-2.5 rounded-xl">
              bolt
            </span>
            <h3 className="font-bold text-lg text-charcoal-text dark:text-white mb-2">
              Electrical Services
            </h3>
            <p className="text-xs text-on-surface-variant dark:text-white/60 leading-relaxed">
              High-tension grid wiring, distribution panels, and heavy industrial power audits.
            </p>
          </div>
          <span className="material-symbols-outlined self-end mt-4 text-vantage-blue opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
            arrow_outward
          </span>
        </Link>

        {/* Box 2: Industrial Automation (colspan 8) */}
        <Link
          href="/services/automation"
          className="col-span-12 md:col-span-8 relative rounded-2xl overflow-hidden h-[300px] sm:h-[350px] group cursor-pointer shadow-md block"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-vantage-navy/90 via-vantage-navy/40 to-transparent z-10"></div>
          
          <img
            alt="Industrial Automation"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBr5JTE3VqyiGmlGQVOjN0hJx8gxNpttm8Ra-kwENfsX4z6ks6Cbxs-KJ-r7GB0MPXDrbo9yN2oEjxko2y3LQ09PQofEDDSWEOXxpXR5SsIgeihscLUExa56Qe9GfcRNK5s9zUXSObAX6M8M8aAR6331OUOnsINktsG3P7Qo-mhz5ZJduwSi79OweKXhmzzqniku2HKBiwKdj8CDKazsZTfa1aQm0piS7Zt5hWGA2h1s7zKjeY1KRIt_BKlmSriJkddVobiO-3q0iE"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              const fallback = document.getElementById("bento-fallback");
              if (fallback) fallback.style.display = "flex";
            }}
          />

          {/* Fallback styling for bento image */}
          <div
            id="bento-fallback"
            className="hidden absolute inset-0 bg-gradient-to-br from-vantage-navy to-vantage-blue flex-col justify-center p-10 text-left text-white"
          >
            <span className="material-symbols-outlined text-5xl mb-4 text-teal-400">
              precision_manufacturing
            </span>
          </div>

          <div className="absolute bottom-0 left-0 p-8 sm:p-10 text-white text-left z-20">
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] bg-vantage-blue text-white px-2.5 py-1 rounded mb-3 inline-block">
              Highly Demanded
            </span>
            <h3 className="font-bold text-xl sm:text-2xl mb-2">
              Industrial Automation &amp; PLC
            </h3>
            <p className="text-xs text-white/70 max-w-md leading-relaxed">
              Streamlining heavy assembly lines with robust programmable logic controller wiring, motor tuning, and SCADA screens.
            </p>
          </div>
          
          <span className="absolute top-6 right-6 material-symbols-outlined text-white/60 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all z-20 text-2xl">
            arrow_outward
          </span>
        </Link>

        {/* Box 3: Home Automation */}
        <Link
          href="/services/home"
          className="col-span-12 md:col-span-4 bg-surface-container-low dark:bg-vantage-navy/40 p-8 rounded-2xl flex flex-col justify-between group hover:bg-vantage-blue hover:text-white dark:hover:bg-vantage-blue transition-all duration-300 cursor-pointer min-h-[250px] text-left"
        >
          <div>
            <span className="material-symbols-outlined text-4xl text-vantage-blue group-hover:text-white bg-white dark:bg-vantage-navy p-2.5 rounded-xl mb-6 shadow-sm">
              home_iot_device
            </span>
            <h3 className="font-bold text-lg text-charcoal-text dark:text-white group-hover:text-white mb-2">
              Home Automation
            </h3>
            <p className="text-xs text-on-surface-variant dark:text-white/60 group-hover:text-white/80 leading-relaxed">
              Smart living spaces with centrally managed ambient lighting, climate control, and home theater grids.
            </p>
          </div>
          <span className="material-symbols-outlined self-end mt-4 text-on-surface-variant group-hover:text-white opacity-40 group-hover:opacity-100 transition-opacity">
            sensors
          </span>
        </Link>

        {/* Box 4: Guardian IoT */}
        <Link
          href="/services/iot"
          className="col-span-12 md:col-span-4 bg-on-secondary-fixed text-white p-8 rounded-2xl flex flex-col justify-between min-h-[250px] text-left relative overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-vantage-blue/20 rounded-full blur-2xl group-hover:bg-vantage-blue/30 transition-all"></div>
          <div>
            <div className="bg-vantage-blue text-white text-[9px] uppercase font-bold tracking-[0.2em] px-2.5 py-1 inline-block mb-6 rounded">
              Proprietary Tech
            </div>
            <h3 className="font-bold text-lg mb-2">
              IoT (Guardian) System
            </h3>
            <p className="text-xs text-white/60 leading-relaxed">
              Our custom telemetry modules for real-time electrical panel tracking, predictive alerts, and power statistics.
            </p>
          </div>
          <button className="text-vantage-blue dark:text-teal-300 border-b border-vantage-blue/30 group-hover:border-vantage-blue dark:group-hover:border-teal-300 self-start pb-1 text-xs font-bold mt-6 transition-colors">
            Explore Guardian Platform
          </button>
        </Link>

        {/* Box 5: Panel Fabrication */}
        <Link
          href="/services/panel"
          className="col-span-12 md:col-span-4 bg-white dark:bg-vantage-navy p-8 rounded-2xl border border-outline-variant/30 dark:border-white/10 flex flex-col justify-between group hover:border-vantage-blue hover:shadow-xl dark:hover:border-vantage-blue transition-all duration-300 cursor-pointer min-h-[250px] text-left"
        >
          <div>
            <span className="material-symbols-outlined text-4xl text-vantage-blue mb-6 bg-vantage-blue/10 p-2.5 rounded-xl">
              developer_board
            </span>
            <h3 className="font-bold text-lg text-charcoal-text dark:text-white mb-2">
              Panel Fabrication
            </h3>
            <p className="text-xs text-on-surface-variant dark:text-white/60 leading-relaxed">
              In-house metal welding, wiring, and assembly of heavy industrial AMF boards and power consoles.
            </p>
          </div>
          <span className="material-symbols-outlined self-end mt-4 text-vantage-blue opacity-40 group-hover:opacity-100 transition-opacity">
            precision_manufacturing
          </span>
        </Link>

        {/* Box 6: CCTV & Security */}
        <Link
          href="/services/cctv"
          className="col-span-12 md:col-span-6 bg-surface-container-high dark:bg-vantage-navy/50 p-8 rounded-2xl flex gap-5 items-start group hover:border-vantage-blue border border-transparent transition-all duration-300 cursor-pointer text-left"
        >
          <div className="bg-white dark:bg-vantage-navy p-3 rounded-xl shadow-sm text-vantage-blue flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-3xl">videocam</span>
          </div>
          <div>
            <h3 className="font-bold text-lg text-charcoal-text dark:text-white mb-1">
              CCTV &amp; AI Security
            </h3>
            <p className="text-xs text-on-surface-variant dark:text-white/70 leading-relaxed">
              Unified surveillance cameras featuring custom smart event notifications, thermal scanning, and facial detection grids.
            </p>
            <span className="inline-flex items-center gap-1.5 text-vantage-blue text-xs font-bold mt-4 opacity-0 group-hover:opacity-100 transition-all">
              Book Security Assessment
              <span className="material-symbols-outlined text-xs">arrow_forward</span>
            </span>
          </div>
        </Link>

        {/* Box 7: Maintenance */}
        <Link
          href="/services/maintenance"
          className="col-span-12 md:col-span-6 bg-secondary-container dark:bg-vantage-navy/35 p-8 rounded-2xl flex gap-5 items-start group hover:border-vantage-blue border border-transparent transition-all duration-300 cursor-pointer text-left"
        >
          <div className="bg-white dark:bg-vantage-navy p-3 rounded-xl shadow-sm text-vantage-blue flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-3xl">build</span>
          </div>
          <div>
            <h3 className="font-bold text-lg text-vantage-navy dark:text-white mb-1">
              Preventative Maintenance
            </h3>
            <p className="text-xs text-on-secondary-container dark:text-white/70 leading-relaxed">
              Proactive thermal inspections, electrical recalibration checks, and 24/7 technical team SLAs for operational security.
            </p>
            <span className="inline-flex items-center gap-1.5 text-vantage-blue text-xs font-bold mt-4 opacity-0 group-hover:opacity-100 transition-all">
              Request Maintenance SLA
              <span className="material-symbols-outlined text-xs">arrow_forward</span>
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
