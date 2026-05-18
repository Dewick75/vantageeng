"use client";

import React from "react";
import Link from "next/link";

interface PositionItem {
  icon: string;
  title: string;
  description: string;
  href: string;
}

const positionItems: PositionItem[] = [
  {
    icon: "electrical_services",
    title: "Traditional Wiring & Panel Fabrication",
    description: "The reliable foundation every project begins with. Professional CEB-compliant grade setups.",
    href: "/services/electrical",
  },
  {
    icon: "precision_manufacturing",
    title: "PLC Programming & Industrial Automation",
    description: "Advanced logic control interfaces for any machine, pump, conveyor, or manufacturing line.",
    href: "/services/automation",
  },
  {
    icon: "home_iot_device",
    title: "Home Automation & Smart Living Systems",
    description: "Modern unified ambient lighting, climate control, and comfort intelligence for luxury homes.",
    href: "/services/home",
  },
  {
    icon: "notifications_active",
    title: "IoT Energy Monitoring & WhatsApp Alerts",
    description: "Real-time consumption visibility, outage notifications, and automated bill forecasting.",
    href: "/services/iot",
  },
  {
    icon: "videocam",
    title: "CCTV & Surveillance Systems",
    description: "Professional high-definition IP cameras equipped with smart facial detection and cloud redundancy.",
    href: "/services/cctv",
  },
  {
    icon: "currency_exchange",
    title: "Guardian Subscription Platform",
    description: "Continuous telemetry alerts and bill auditing independent of traditional project pipelines.",
    href: "/services/iot",
  },
  {
    icon: "receipt_long",
    title: "Long-Term Maintenance Contracts",
    description: "Predictive thermal scanning checks and guaranteed SLA dispatches for compounding operational safety.",
    href: "/services/maintenance",
  },
];

export function UniquePosition() {
  return (
    <section className="bg-surface-container-low dark:bg-vantage-navy/10 py-20 md:py-28 border-b border-outline-variant/15 select-none text-left">
      <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Header text */}
          <div className="lg:col-span-6 animate-fadeIn">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-vantage-blue bg-vantage-blue/10 px-3.5 py-1.5 rounded-full inline-block mb-4">
              Market Hegemony
            </span>
            <h2 className="font-extrabold text-2xl md:text-4xl text-vantage-navy dark:text-white mb-6 leading-tight tracking-tight">
              Our Unique Market Position
            </h2>
            <p className="text-xs md:text-sm text-on-surface-variant dark:text-white/60 leading-relaxed max-w-xl">
              No other company in Sri Lanka currently delivers all seven foundational engineering and automation capabilities under a single integrated brand and management structure.
            </p>
          </div>

          {/* Highlight card */}
          <div className="lg:col-span-6 bg-vantage-navy text-white p-8 rounded-2xl border border-white/5 shadow-xl relative overflow-hidden animate-fadeIn">
            <div className="absolute top-0 right-0 w-32 h-32 bg-vantage-blue/15 rounded-full blur-2xl"></div>
            <h3 className="font-bold text-lg mb-4 text-vantage-blue">
              The Multi-Division Synergy
            </h3>
            <p className="text-xs text-white/80 leading-relaxed">
              &ldquo;Our multi-division model allows a single client relationship to generate value across multiple service categories simultaneously - creating deep retention, upsell pathways, and a recurring revenue base that competitors cannot replicate.&rdquo;
            </p>
          </div>
        </div>

        {/* Dynamic Position Card List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fadeIn">
          {positionItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="bg-white dark:bg-vantage-navy/35 border border-outline-variant/20 dark:border-white/10 p-6 rounded-2xl flex flex-col justify-between hover:border-vantage-blue dark:hover:border-vantage-blue shadow-sm hover:shadow-md transition-all duration-300 group min-h-[220px]"
            >
              <div>
                <div className="w-10 h-10 bg-vantage-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                  <span className="material-symbols-outlined text-vantage-blue font-bold text-xl">
                    {item.icon}
                  </span>
                </div>
                <h4 className="font-bold text-xs md:text-sm text-vantage-navy dark:text-white mb-2 leading-tight">
                  {item.title}
                </h4>
                <p className="text-[11px] text-on-surface-variant dark:text-white/60 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
              
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-vantage-blue uppercase tracking-widest mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                Learn Division
                <span className="material-symbols-outlined text-[12px]">arrow_forward</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
