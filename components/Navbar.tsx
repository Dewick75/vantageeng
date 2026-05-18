"use client";

import React, { useState } from "react";
import { useNavbar } from "../hooks/useNavbar";

interface NavbarProps {
  onRequestQuote: () => void;
}

interface DivisionData {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  capabilities: string[];
  link: string;
}

const divisions: DivisionData[] = [
  {
    id: "electrical",
    title: "Electrical Services",
    subtitle: "High-tension power & distribution",
    icon: "electric_bolt",
    description: "Providing high-tension grid connections, heavy industrial distribution grids, custom substation integrations, and thorough electrical safety audits following rigorous national standard codes.",
    capabilities: [
      "High & Low Voltage Grid Connections",
      "Substation Installation & Testing",
      "Power Factor Correction (PFC) Boards",
      "Commercial Fit-Outs & Load Balancing",
      "Emergency Generator & UPS Infrastructure"
    ],
    link: "/services/electrical"
  },
  {
    id: "automation",
    title: "Industrial Automation & PLC",
    subtitle: "Factory efficiency & control",
    icon: "settings_suggest",
    description: "We design, program, and commission advanced control systems for factories, hotels, and commercial facilities. Our solutions bridge the gap between hardware and operational intelligence.",
    capabilities: [
      "PLC System Design & Programming",
      "SCADA & HMI Development",
      "Motor Control Systems (VFD, Soft Starters)",
      "Robotic Cell Integration",
      "Power Quality Audits"
    ],
    link: "/services/automation"
  },
  {
    id: "home",
    title: "Home Automation",
    subtitle: "Smart residential integration",
    icon: "home_iot_device",
    description: "Transforming standard residences into unified smart spaces with central control over indoor/outdoor lighting, multi-room acoustics, climate controls, and high-security access gates.",
    capabilities: [
      "Bespoke Smart Lighting Control",
      "Multi-Room Audio & Cinema Integration",
      "Intelligent Thermostats & Ventilation",
      "Smart Locks & Intercom Infrastructure",
      "Aesthetic Wire Management & Concealing"
    ],
    link: "/services/home"
  },
  {
    id: "iot",
    title: "IoT & Energy Intelligence",
    subtitle: "Real-time asset monitoring",
    icon: "bolt",
    description: "Installing intelligent sensors to monitor industrial metrics, power quality, and remote site status, piping data to our proprietary analytics dashboard for zero-downtime operations.",
    capabilities: [
      "Guardian Custom Telemetry Modules",
      "Wireless Temperature & Load Sensors",
      "Real-time Peak Load Analytics",
      "Predictive Mechanical Failure Warnings",
      "Web Dashboard & Custom Notification Triggers"
    ],
    link: "/services/iot"
  },
  {
    id: "panel",
    title: "Panel Fabrication",
    subtitle: "Custom control consoles",
    icon: "developer_board",
    description: "State-of-the-art in-house metal fabrication and wiring of distribution boards, AMF panels, switchgears, and custom engineering panels matching strict IP ratings.",
    capabilities: [
      "Motor Control Center (MCC) Panels",
      "Automatic Mains Failure (AMF) Panels",
      "Custom Sheetmetal Precision Enclosures",
      "Busbar Chambers & Safety Shielding",
      "IP65 / IP66 Outdoor Grade Certification"
    ],
    link: "/services/panel"
  },
  {
    id: "cctv",
    title: "CCTV & Surveillance",
    subtitle: "Next-gen AI security",
    icon: "videocam",
    description: "Deploying high-definition cameras equipped with facial recognition, automatic license plate readers, thermal warning grids, and central cloud control channels.",
    capabilities: [
      "AI Facial & Event Alert System",
      "Centralized Multi-Site Monitoring Hubs",
      "Perimeter Laser Threat Detection",
      "Integrated Biometric Access Gating",
      "24/7 Redundant Power Backed Storage"
    ],
    link: "/services/cctv"
  },
  {
    id: "maintenance",
    title: "Maintenance Contracts",
    subtitle: "Zero-downtime support",
    icon: "build",
    description: "Structured preventive checks and emergency 24/7 service contracts backed by strict SLAs, minimizing downtime and securing heavy industrial machinery investment.",
    capabilities: [
      "Preventative Diagnostics Schedules",
      "Strict Response SLA Agreements",
      "24/7 Dispatch Team Availability",
      "Infrared Thermal Panel Inspections",
      "Component Gating & On-site Spare Buffer"
    ],
    link: "/services/maintenance"
  }
];

export function Navbar({ onRequestQuote }: NavbarProps) {
  const {
    isScrolled,
    isMobileMenuOpen,
    activeDivision,
    toggleMobileMenu,
    closeMobileMenu,
    setActiveDivision,
  } = useNavbar();

  // Find active division data
  const currentDivision = divisions.find((d) => d.id === activeDivision) || divisions[1];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled
            ? "bg-white/80 dark:bg-vantage-navy/80 backdrop-blur-md border-outline-variant/30 py-3 shadow-md"
            : "bg-transparent border-transparent py-5"
        }`}
      >
        <div className="flex justify-between items-center px-6 md:px-margin-desktop max-w-container-max mx-auto relative">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group select-none">
            <div className="bg-primary-container p-1.5 rounded-full group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-2xl font-bold">view_cozy</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-lg text-charcoal-text dark:text-white leading-tight">
                Vantage
              </span>
              <span className="text-[10px] tracking-widest text-vantage-blue font-bold uppercase -mt-0.5">
                Engineering
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {/* Services Mega Menu Trigger */}
            <div className="mega-menu-trigger group/trigger py-2 relative">
              <span className="font-semibold text-sm text-on-secondary-fixed-variant dark:text-white/80 hover:text-vantage-blue dark:hover:text-vantage-blue transition-colors cursor-pointer flex items-center gap-1">
                Services
                <span className="material-symbols-outlined text-[16px] group-hover/trigger:rotate-180 transition-transform duration-300">
                  expand_more
                </span>
              </span>

              {/* Mega Menu Container */}
              <div className="mega-menu absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[900px] pointer-events-none opacity-0 invisible group-hover/trigger:pointer-events-auto group-hover/trigger:opacity-100 group-hover/trigger:visible group-hover/trigger:translate-y-0 translate-y-3 transition-all duration-300">
                <div className="bg-white dark:bg-vantage-navy rounded-xl shadow-2xl border border-outline-variant/20 overflow-hidden flex min-h-[480px]">
                  {/* Left Panel - Subdivisions list */}
                  <div className="w-5/12 bg-surface-container-low dark:bg-vantage-navy/50 p-4 border-r border-outline-variant/10 overflow-y-auto max-h-[500px]">
                    <ul className="space-y-1">
                      {divisions.map((div) => {
                        const isActive = div.id === activeDivision;
                        return (
                          <li
                            key={div.id}
                            onMouseEnter={() => setActiveDivision(div.id)}
                            className="group/item"
                          >
                            <div
                              className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                                isActive
                                  ? "bg-vantage-blue/10 dark:bg-vantage-blue/20 border-l-4 border-vantage-blue pl-2"
                                  : "hover:bg-vantage-blue/5 dark:hover:bg-white/5 border-l-4 border-transparent"
                              }`}
                            >
                              <span
                                className={`material-symbols-outlined text-2xl transition-colors duration-200 ${
                                  isActive
                                    ? "text-vantage-blue"
                                    : "text-on-secondary-fixed-variant dark:text-white/60 group-hover/item:text-vantage-blue"
                                }`}
                              >
                                {div.icon}
                              </span>
                              <div className="text-left">
                                <p
                                  className={`text-xs font-bold transition-colors duration-200 ${
                                    isActive
                                      ? "text-vantage-blue"
                                      : "text-on-secondary-fixed dark:text-white group-hover/item:text-vantage-blue"
                                  }`}
                                >
                                  {div.title}
                                </p>
                                <p className="text-[10px] text-on-surface-variant dark:text-white/40 font-normal line-clamp-1">
                                  {div.subtitle}
                                </p>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Right Panel - Dynamic division display */}
                  <div className="w-7/12 p-8 flex flex-col justify-between bg-white dark:bg-vantage-navy text-left relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-vantage-blue/5 rounded-full blur-2xl"></div>
                    <div className="animate-fadeIn transition-all duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="material-symbols-outlined text-4xl text-vantage-blue bg-vantage-blue/10 p-2 rounded-xl">
                          {currentDivision.icon}
                        </span>
                        <div>
                          <h3 className="font-bold text-lg text-vantage-navy dark:text-white leading-tight">
                            {currentDivision.title}
                          </h3>
                          <p className="text-xs text-vantage-blue font-medium">
                            {currentDivision.subtitle}
                          </p>
                        </div>
                      </div>

                      <p className="text-xs text-on-surface-variant dark:text-white/70 mb-6 leading-relaxed">
                        {currentDivision.description}
                      </p>

                      <div>
                        <h4 className="text-[10px] text-vantage-navy dark:text-white uppercase font-bold tracking-widest mb-3">
                          Key Capabilities
                        </h4>
                        <ul className="grid grid-cols-1 gap-2.5">
                          {currentDivision.capabilities.map((cap, i) => (
                            <li
                              key={i}
                              className="flex items-center gap-2.5 text-on-surface dark:text-white/90 text-xs"
                            >
                              <span className="material-symbols-outlined text-vantage-blue text-[16px] font-bold">
                                check_circle
                              </span>
                              {cap}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <a
                      className="mt-6 inline-flex items-center gap-2 text-vantage-blue text-xs font-semibold hover:gap-4 transition-all self-start"
                      href={currentDivision.link}
                    >
                      Learn More About {currentDivision.title.split(" ")[0]}
                      <span className="material-symbols-outlined text-[16px]">
                        arrow_forward
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="/#expertise"
              className="font-semibold text-sm text-on-secondary-fixed-variant dark:text-white/80 hover:text-vantage-blue dark:hover:text-vantage-blue transition-colors"
            >
              Expertise
            </a>
            <a
              href="/#portfolio"
              className="font-semibold text-sm text-on-secondary-fixed-variant dark:text-white/80 hover:text-vantage-blue dark:hover:text-vantage-blue transition-colors"
            >
              Portfolio
            </a>
            <a
              href="/#about"
              className="font-semibold text-sm text-on-secondary-fixed-variant dark:text-white/80 hover:text-vantage-blue dark:hover:text-vantage-blue transition-colors"
            >
              About
            </a>
            <a
              href="/#contact"
              className="font-semibold text-sm text-on-secondary-fixed-variant dark:text-white/80 hover:text-vantage-blue dark:hover:text-vantage-blue transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Action button */}
          <div className="flex items-center gap-3">
            <button
              onClick={onRequestQuote}
              className="hidden md:inline-flex bg-vantage-blue text-white px-5 py-2 rounded-full font-semibold text-xs hover:bg-vantage-blue/90 active:scale-95 transition-all items-center gap-2 shadow-lg shadow-vantage-blue/20"
            >
              Request a Quote
              <span className="material-symbols-outlined text-[16px]">
                arrow_forward
              </span>
            </button>

            {/* Mobile Menu Icon Toggle */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden flex items-center justify-center p-2 text-on-surface dark:text-white rounded-lg hover:bg-surface-container transition-colors"
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-2xl">
                {isMobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMobileMenu}
      />

      {/* Mobile Drawer Content */}
      <div
        className={`fixed right-0 top-0 bottom-0 z-40 w-4/5 max-w-sm bg-white dark:bg-vantage-navy shadow-2xl border-l border-outline-variant/20 p-6 flex flex-col justify-between transform transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6 pt-16">
          <a
            href="/#expertise"
            onClick={closeMobileMenu}
            className="flex items-center justify-between p-2 rounded-lg text-sm font-semibold text-on-secondary-fixed dark:text-white hover:bg-surface-container transition-colors"
          >
            <span>Expertise</span>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
          </a>
          <a
            href="/#portfolio"
            onClick={closeMobileMenu}
            className="flex items-center justify-between p-2 rounded-lg text-sm font-semibold text-on-secondary-fixed dark:text-white hover:bg-surface-container transition-colors"
          >
            <span>Portfolio</span>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
          </a>
          <a
            href="/#about"
            onClick={closeMobileMenu}
            className="flex items-center justify-between p-2 rounded-lg text-sm font-semibold text-on-secondary-fixed dark:text-white hover:bg-surface-container transition-colors"
          >
            <span>About</span>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
          </a>
          <a
            href="/#contact"
            onClick={closeMobileMenu}
            className="flex items-center justify-between p-2 rounded-lg text-sm font-semibold text-on-secondary-fixed dark:text-white hover:bg-surface-container transition-colors"
          >
            <span>Contact</span>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
          </a>

          {/* Accordion for subdivisions inside mobile layout */}
          <div className="border-t border-outline-variant/20 pt-4 mt-2">
            <p className="text-[10px] text-vantage-blue font-bold uppercase tracking-widest px-2 mb-2">
              Our Core Divisions
            </p>
            <div className="grid grid-cols-1 gap-1 max-h-[220px] overflow-y-auto pr-1">
              {divisions.map((div) => (
                <a
                  key={div.id}
                  href={div.link}
                  onClick={closeMobileMenu}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-surface-container-low transition-colors"
                >
                  <span className="material-symbols-outlined text-vantage-blue text-lg">
                    {div.icon}
                  </span>
                  <span className="text-xs text-on-secondary-fixed dark:text-white/95">
                    {div.title}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            closeMobileMenu();
            onRequestQuote();
          }}
          className="w-full bg-vantage-blue text-white py-3.5 rounded-full font-bold text-xs hover:bg-vantage-blue/90 transition-all flex items-center justify-center gap-2 shadow-lg"
        >
          Request a Quote
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </button>
      </div>
    </>
  );
}
