"use client";

import React, { useState } from "react";

interface JourneyStep {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  icon: string;
  duration: string;
  deliverables: string[];
  longDescription: string;
}

const steps: JourneyStep[] = [
  {
    id: "site_audit",
    num: "01",
    title: "Site Audit",
    subtitle: "Infrastructure Assessment",
    icon: "analytics",
    duration: "1 - 3 Days",
    deliverables: ["Full load balancing calculation sheet", "Thermal scanner hot-spot audit report", "Power quality disruption logs"],
    longDescription: "Our engineers perform physical inspections of your facility's power systems, taking electrical thermal scans, auditing voltage drops, measuring current distributions, and determining capacity guidelines."
  },
  {
    id: "system_design",
    num: "02",
    title: "System Design",
    subtitle: "Blueprint & Prototyping",
    icon: "architecture",
    duration: "1 - 2 Weeks",
    deliverables: ["CAD multi-line drawings & schematics", "BIM 3D modeling spatial matches", "Component Bill of Materials (BOM)"],
    longDescription: "Utilizing highly precise CAD and modern 3D BIM modeling platforms, our division compiles complete line schematics, panel visual overlays, wire routing blueprints, and safety specifications."
  },
  {
    id: "core_wiring",
    num: "03",
    title: "Core Wiring",
    subtitle: "Infrastructure Foundation",
    icon: "layers",
    duration: "2 - 4 Weeks",
    deliverables: ["Heavy cabling trays & trunk paths", "Main grid connection approvals", "Grounding & lighting shielding system"],
    longDescription: "Laying the structural power foundation by mounting high-voltage electrical cable trays, routing armored lines, installing ground rods, and constructing core breaker panel frames."
  },
  {
    id: "fabrication",
    num: "04",
    title: "Panel Fabrication",
    subtitle: "Custom Control Consoles",
    icon: "precision_manufacturing",
    duration: "1 - 3 Weeks",
    deliverables: ["IP-rated switchboard boxes", "Busbar structural layouts", "Pre-delivery testing certificates"],
    longDescription: "In our local workshop facility, we cut sheetmetal, apply high-quality powder coating, bolt heavy copper busbars, and assemble custom AMF panels and MCC modules with strict labelling."
  },
  {
    id: "automation",
    num: "05",
    title: "PLC Programming",
    subtitle: "Logic & Interface Control",
    icon: "terminal",
    duration: "1 - 2 Weeks",
    deliverables: ["Structured PLC source code backup", "HMI diagnostic touch panels", "SCADA dashboard database logs"],
    longDescription: "Writing robust control software, compiling logic loops on Siemens or Delta PLCs, organizing emergency stop networks, and designing touch panel control screens."
  },
  {
    id: "iot_integration",
    num: "06",
    title: "IoT Integration",
    subtitle: "Guardian Dashboard Telemetry",
    icon: "cloud_sync",
    duration: "3 - 5 Days",
    deliverables: ["Proprietary Guardian IoT integration", "SMS & Email alert profiles", "Telemetry dashboard login credentials"],
    longDescription: "Installing custom Guardian telemetry nodes inside your panels, bridging sensor readings over local networks, and connecting the real-time analytics panel for energy tracking."
  },
  {
    id: "commissioning",
    num: "07",
    title: "Commissioning",
    subtitle: "Stress Testing & Verification",
    icon: "fact_check",
    duration: "2 - 5 Days",
    deliverables: ["Standard commissioning log sheets", "Official electrical certification safety pass", "Operatives basic training handbook"],
    longDescription: "Applying full voltage stresses, executing simulated failure scenarios, performing thermal calibration checks, and certifying standard operation safety matching ISO guidelines."
  },
  {
    id: "maintenance",
    num: "08",
    title: "Maintenance SLA",
    subtitle: "Lifetime Operative Support",
    icon: "support_agent",
    duration: "Ongoing",
    deliverables: ["Routine preventive diagnostic checks", "24/7 technical call dispatch", "Thermal panel inspection logs"],
    longDescription: "Providing preventive checkups, routine component checkups, thermal imaging, and 24/7 technical response availability to guarantee zero factory downtime."
  }
];

export function IntegratedJourney() {
  const [activeStep, setActiveStep] = useState<string>("site_audit");

  const currentStep = steps.find((s) => s.id === activeStep) || steps[0];

  return (
    <section className="py-20 md:py-28 bg-on-background text-white select-none overflow-hidden text-left">
      <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
        {/* Title */}
        <div className="mb-20 text-center animate-fadeIn">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-vantage-blue bg-white/10 px-3.5 py-1.5 rounded-full inline-block mb-4">
            Workflow System
          </span>
          <h2 className="font-bold text-2xl md:text-4xl mb-4 tracking-tight">
            The Integrated Journey
          </h2>
          <p className="text-white/60 text-xs md:text-sm max-w-2xl mx-auto leading-relaxed">
            From initial blueprint audit to ongoing technical maintenance, our unified workflow ensures every subsystem coordinates with maximum accuracy and safety.
          </p>
        </div>

        {/* Dynamic Layout Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Steps List (left side) */}
          <div className="lg:col-span-5 flex flex-col justify-start gap-3">
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
              {steps.map((step) => {
                const isActive = step.id === activeStep;
                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(step.id)}
                    className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                      isActive
                        ? "bg-vantage-blue border-l-4 border-white pl-3 text-white shadow-xl shadow-vantage-blue/20"
                        : "bg-white/5 hover:bg-white/10 text-white/70 hover:text-white"
                    }`}
                  >
                    <span className="font-extrabold text-sm opacity-50 font-montserrat">
                      {step.num}
                    </span>
                    <span className={`material-symbols-outlined text-xl ${isActive ? "text-white" : "text-vantage-blue"}`}>
                      {step.icon}
                    </span>
                    <span className="text-xs font-bold font-montserrat tracking-tight truncate">
                      {step.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Step Display Panel (right side) */}
          <div className="lg:col-span-7 bg-white/5 rounded-2xl border border-white/10 p-6 md:p-8 flex flex-col justify-between relative overflow-hidden text-left shadow-2xl">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-vantage-blue/10 rounded-full blur-3xl"></div>
            
            <div className="animate-fadeIn">
              <div className="flex justify-between items-start border-b border-white/10 pb-6 mb-6 gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-vantage-blue/20 border border-vantage-blue/30 rounded-xl flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-vantage-blue text-3xl font-bold">
                      {currentStep.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg md:text-xl text-white">
                      Step {currentStep.num}: {currentStep.title}
                    </h3>
                    <p className="text-xs text-vantage-blue font-semibold">
                      {currentStep.subtitle}
                    </p>
                  </div>
                </div>
                <div className="bg-white/10 border border-white/20 px-3.5 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase shrink-0 text-teal-400">
                  {currentStep.duration}
                </div>
              </div>

              <p className="text-xs md:text-sm text-white/70 leading-relaxed mb-8">
                {currentStep.longDescription}
              </p>

              <div>
                <h4 className="text-[10px] text-white uppercase font-bold tracking-widest mb-4">
                  Phase Deliverables
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {currentStep.deliverables.map((del, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-white/95 text-xs"
                    >
                      <span className="material-symbols-outlined text-vantage-blue text-[18px] shrink-0 font-bold">
                        done
                      </span>
                      <span className="leading-tight">{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-white/40 text-[10px] tracking-wide flex justify-between items-center">
              <span>Vantage Precision Workflow Standard</span>
              <span className="flex items-center gap-1 text-vantage-blue">
                Step {currentStep.num} of 08
                <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
