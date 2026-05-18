"use client";

import React, { useState } from "react";
import Link from "next/link";

interface JourneyItem {
  number: string;
  divisionNum: string;
  service: string;
  division: string;
  icon: string;
  description: string;
  badge: string;
  href: string;
}

const journeyItems: JourneyItem[] = [
  {
    number: "01",
    divisionNum: "Division 01",
    service: "Factory Wiring for New Manufacturing Plant",
    division: "Electrical Services",
    icon: "electrical_services",
    description: "Our licensed electrical crews establish high-amperage cables, structured trays, and compliant grids.",
    badge: "Foundation",
    href: "/services/electrical",
  },
  {
    number: "02",
    divisionNum: "Division 02",
    service: "PLC System Designed & Programmed",
    division: "Industrial Automation",
    icon: "precision_manufacturing",
    description: "Chartered control specialists map software logic loops, safety shutdowns, and interactive touch screens.",
    badge: "Intelligence",
    href: "/services/automation",
  },
  {
    number: "03",
    divisionNum: "Division 05",
    service: "MCC & Control Panels Fabricated & Delivered",
    division: "Panel Fabrication",
    icon: "developer_board",
    description: "In-house sheetmetal experts build custom control panels with printable markers and detailed circuit books.",
    badge: "Hardware",
    href: "/services/panel",
  },
  {
    number: "04",
    divisionNum: "Division 04",
    service: "Guardian IoT Monitors Energy Across Circuits",
    division: "IoT & Energy Intelligence",
    icon: "sensors",
    description: "Wireless split-core clamps track peak kVA demand, harmonics, and appliance level metrics.",
    badge: "Telemetry",
    href: "/services/iot",
  },
  {
    number: "05",
    divisionNum: "Division 04",
    service: "Monthly Guardian Subscription Activated",
    division: "Recurring Revenue",
    icon: "payments",
    description: "Automatic monthly PDF reports, billing forecast models, and active load monitoring rules start.",
    badge: "Optimization",
    href: "/services/iot",
  },
  {
    number: "06",
    divisionNum: "Division 06",
    service: "CCTV System Installed Across Factory & Entrances",
    division: "AI-Powered Security",
    icon: "videocam",
    description: "4K dome and bullet IP cameras equipped with active line-crossing warnings protect perimeters.",
    badge: "Protection",
    href: "/services/cctv",
  },
  {
    number: "07",
    divisionNum: "Division 03",
    service: "Directors' Offices Fitted with Smart Tech",
    division: "Home & Office Automation",
    icon: "home_iot_device",
    description: "Intelligent AC thermostats, motorized light curtains, and voice control screens unify convenience.",
    badge: "Smart Control",
    href: "/services/home",
  },
  {
    number: "08",
    divisionNum: "Division 07",
    service: "Annual PLC, Panel & Electrical Maintenance Signed",
    division: "Maintenance Contracts",
    icon: "receipt_long",
    description: "Compounding quarterly thermal diagnostics and binding 4-hour technical SLA windows begin.",
    badge: "Lifetime SLA",
    href: "/services/maintenance",
  },
];

export function ClientJourney() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="bg-on-background text-white py-20 md:py-28 select-none text-left relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-vantage-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop relative z-10">
        {/* Title */}
        <div className="mb-20 text-center animate-fadeIn">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-vantage-blue bg-white/10 px-3.5 py-1.5 rounded-full inline-block mb-4">
            Ecosystem Lifecycle
          </span>
          <h2 className="font-extrabold text-2xl md:text-4xl text-white mb-4 tracking-tight">
            Integrated Client Journey
          </h2>
          <p className="text-white/60 text-xs md:text-sm max-w-2xl mx-auto leading-relaxed">
            See how a single corporate relationship creates simultaneous, compound value across all seven engineering divisions - securing deep operational retention and predictable uptime.
          </p>
        </div>

        {/* Stepper Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Timeline List (left side) */}
          <div className="lg:col-span-5 flex flex-col justify-start gap-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {journeyItems.map((item, idx) => {
                const isActive = idx === activeStep;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                      isActive
                        ? "bg-vantage-blue border-l-4 border-white pl-3 text-white shadow-xl shadow-vantage-blue/20"
                        : "bg-white/5 hover:bg-white/10 text-white/70 hover:text-white"
                    }`}
                  >
                    <span className="font-extrabold text-sm opacity-50">
                      {item.number}
                    </span>
                    <span className={`material-symbols-outlined text-xl ${isActive ? "text-white" : "text-vantage-blue"}`}>
                      {item.icon}
                    </span>
                    <div className="text-left truncate">
                      <span className="text-[10px] block opacity-60 font-medium font-montserrat uppercase tracking-wider">
                        {item.divisionNum}
                      </span>
                      <span className="text-xs font-bold font-montserrat tracking-tight block truncate">
                        {item.division}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Stepper Detail View (right side) */}
          <div className="lg:col-span-7 bg-white/5 rounded-2xl border border-white/10 p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-48 h-48 bg-vantage-blue/15 rounded-full blur-3xl"></div>
            
            <div className="animate-fadeIn">
              <div className="flex justify-between items-start border-b border-white/10 pb-6 mb-6 gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-vantage-blue/20 border border-vantage-blue/30 rounded-xl flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-vantage-blue text-3xl font-bold">
                      {journeyItems[activeStep].icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg md:text-xl text-white font-montserrat tracking-tight">
                      Step {journeyItems[activeStep].number}: {journeyItems[activeStep].division}
                    </h3>
                    <p className="text-xs text-vantage-blue font-semibold uppercase tracking-wider mt-1">
                      {journeyItems[activeStep].divisionNum}
                    </p>
                  </div>
                </div>
                <div className="bg-white/10 border border-white/20 px-3 py-1 rounded-full text-[9px] font-bold tracking-wider uppercase shrink-0 text-teal-400">
                  {journeyItems[activeStep].badge}
                </div>
              </div>

              <div className="mb-8">
                <p className="text-xs text-teal-400 font-bold uppercase tracking-widest mb-2.5">
                  Service Milestone
                </p>
                <h4 className="font-bold text-base md:text-lg text-white leading-snug">
                  {journeyItems[activeStep].service}
                </h4>
              </div>

              <p className="text-xs md:text-sm text-white/70 leading-relaxed">
                {journeyItems[activeStep].description}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-white/40 text-[10px] tracking-wide flex justify-between items-center">
              <span>Vantage Compounding Value Journey</span>
              <Link
                href={journeyItems[activeStep].href}
                className="flex items-center gap-1 text-vantage-blue hover:text-white font-bold transition-colors cursor-pointer"
              >
                Explore Division Specs
                <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
