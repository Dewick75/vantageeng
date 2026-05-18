"use client";

import React, { useState, useEffect } from "react";

interface FooterProps {
  onOpenQuote: () => void;
}

export function Footer({ onOpenQuote }: FooterProps) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Load initial theme from DOM classes
  useEffect(() => {
    if (typeof window !== "undefined") {
      const isDark = document.documentElement.classList.contains("dark");
      setTheme(isDark ? "dark" : "light");
    }
  }, []);

  const toggleTheme = () => {
    if (typeof window !== "undefined") {
      const root = document.documentElement;
      if (theme === "light") {
        root.classList.remove("light");
        root.classList.add("dark");
        setTheme("dark");
      } else {
        root.classList.remove("dark");
        root.classList.add("light");
        setTheme("light");
      }
    }
  };

  return (
    <footer id="about" className="bg-on-secondary-fixed text-white py-16 md:py-24 select-none relative overflow-hidden text-left">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-vantage-blue/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 gap-x-8 pb-16 border-b border-white/10">
          {/* Brand Panel */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <a href="#" className="flex items-center gap-3">
              <div className="bg-vantage-blue p-2 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-2xl font-bold">view_cozy</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold tracking-tight text-lg text-white leading-tight">
                  Vantage
                </span>
                <span className="text-[10px] tracking-widest text-vantage-blue font-bold uppercase -mt-0.5">
                  Engineering
                </span>
              </div>
            </a>
            <p className="text-xs text-white/60 leading-relaxed max-w-sm">
              Sri Lanka's leading integrator of high-tension power grids, modular sheetmetal fabrication, automated logic networks, and custom telemetry sensors.
            </p>

            {/* Theme Toggle Button */}
            <div className="flex items-center gap-2.5 mt-2">
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 text-xs font-semibold rounded-full transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm">
                  {theme === "light" ? "dark_mode" : "light_mode"}
                </span>
                <span>Switch to {theme === "light" ? "Dark Mode" : "Light Mode"}</span>
              </button>
            </div>
          </div>

          {/* Core Divisions Shortcuts */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-teal-400 mb-6">
              Our Core Divisions
            </h4>
            <ul className="space-y-3.5 text-xs text-white/70">
              <li>
                <a href="#portfolio" className="hover:text-vantage-blue transition-colors">
                  Electrical Power & Grid
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-vantage-blue transition-colors">
                  Industrial Automation & PLC
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-vantage-blue transition-colors">
                  Bespoke Smart Homes
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-vantage-blue transition-colors">
                  Guardian Telemetry IoT
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-vantage-blue transition-colors">
                  IP-Rated Panel Fabrication
                </a>
              </li>
            </ul>
          </div>

          {/* Links & Company */}
          <div className="md:col-span-2">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-teal-400 mb-6">
              Company
            </h4>
            <ul className="space-y-3.5 text-xs text-white/70">
              <li>
                <a href="#expertise" className="hover:text-vantage-blue transition-colors">
                  Core Expertise
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-vantage-blue transition-colors">
                  Featured Case Studies
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-vantage-blue transition-colors">
                  About Vantage
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenQuote();
                  }}
                  href="#"
                  className="hover:text-vantage-blue transition-colors font-bold text-white"
                >
                  Consulting Request
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div id="contact" className="md:col-span-3 flex flex-col gap-6">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-teal-400 mb-2">
              Office HQ
            </h4>
            <div className="flex gap-3 text-xs items-start text-white/70">
              <span className="material-symbols-outlined text-vantage-blue">pin_drop</span>
              <p className="leading-relaxed">
                No. 128, Galle Road,
                <br />
                Colombo 03, Sri Lanka
              </p>
            </div>
            <div className="flex gap-3 text-xs items-center text-white/70">
              <span className="material-symbols-outlined text-vantage-blue font-bold">call</span>
              <span>+94 11 234 5678</span>
            </div>
            <div className="flex gap-3 text-xs items-center text-white/70">
              <span className="material-symbols-outlined text-vantage-blue font-bold">mail</span>
              <span>contact@vantageeng.com</span>
            </div>
          </div>
        </div>

        {/* Lower Footer */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-6 text-[10px] text-white/40">
          <p>&copy; {new Date().getFullYear()} Vantage Engineering (Pvt) Ltd. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </a>
            <a href="#" className="hover:text-white transition-colors">
              ISO Certificates
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
