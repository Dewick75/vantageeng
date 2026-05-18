"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Navbar } from "../../../components/Navbar";
import { Footer } from "../../../components/sections/Footer";
import { QuoteDialog } from "../../../components/QuoteDialog";
import { servicesData, SubService } from "../../../data/servicesData";

export default function ServiceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const serviceId = typeof params?.id === "string" ? params.id : "automation";

  // State for Quote Dialog
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState("");

  const handleOpenQuote = (serviceName?: string) => {
    if (serviceName) {
      setPreselectedService(serviceName);
    } else {
      setPreselectedService(serviceData.title);
    }
    setIsQuoteOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteOpen(false);
    setPreselectedService("");
  };

  // Find the active service data
  const serviceData = servicesData[serviceId];

  // Fallback if service doesn't exist
  if (!serviceData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-on-background px-6 text-center">
        <h1 className="text-4xl font-extrabold mb-4 text-vantage-navy dark:text-white">Service Not Found</h1>
        <p className="text-on-surface-variant dark:text-white/60 mb-8 max-w-md">
          The requested service division does not exist or has been relocated.
        </p>
        <button
          onClick={() => router.push("/")}
          className="bg-vantage-blue text-white px-6 py-3 rounded-full font-bold text-xs hover:scale-105 active:scale-95 transition-transform"
        >
          Return to Landing Page
        </button>
      </div>
    );
  }

  // Interactive Detailed Breakdown state: defaults to the first sub-service solution
  const [activeSolutionIndex, setActiveSolutionIndex] = useState(0);

  // Fallback check to avoid out of bounds
  const activeSolution = serviceData.specializedSolutions[activeSolutionIndex] || serviceData.specializedSolutions[0];

  // Brochure download micro-animation state
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadBrochure = () => {
    if (isDownloading || downloadSuccess) return;
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-on-background antialiased transition-colors duration-300">
      {/* Navigation Bar */}
      <Navbar onRequestQuote={() => handleOpenQuote()} />

      {/* Dynamic Hero Section */}
      <header className="relative h-[65vh] min-h-[500px] flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10"></div>
          <img
            alt={serviceData.title}
            className="w-full h-full object-cover scale-105 animate-pulse-slow"
            src={serviceData.heroImage}
          />
        </div>
        <div className="relative z-20 px-6 md:px-margin-desktop max-w-container-max mx-auto w-full">
          <div className="max-w-2xl animate-fadeIn">
            <span className="inline-block px-3 py-1 bg-vantage-blue/20 backdrop-blur-md text-vantage-blue dark:text-sky-350 border border-vantage-blue/30 rounded-full font-bold text-xs uppercase tracking-wider mb-6">
              {serviceData.badge}
            </span>
            <h1 className="font-extrabold text-3xl md:text-5xl text-white mb-6 leading-tight tracking-tight">
              {serviceData.title}
            </h1>
            <p className="text-sm md:text-base text-silver-accent mb-8 leading-relaxed max-w-lg">
              {serviceData.description}
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => {
                  const targetSection = document.getElementById("solutions");
                  targetSection?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-white text-vantage-navy px-6 py-3 rounded-full font-bold text-xs flex items-center gap-2 hover:bg-silver-accent active:scale-95 transition-all shadow-lg cursor-pointer"
              >
                View Technical Solutions
                <span className="material-symbols-outlined text-[16px] animate-bounce-slow">
                  arrow_downward
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Solutions Bento Grid Section */}
      <section id="solutions" className="py-20 px-6 md:px-margin-desktop max-w-container-max mx-auto w-full scroll-mt-16">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 animate-fadeIn">
          <div>
            <h2 className="font-extrabold text-2xl md:text-4xl text-vantage-navy dark:text-white mb-4">
              {serviceData.subTitle}
            </h2>
            <div className="h-1 w-24 bg-vantage-blue rounded-full"></div>
          </div>
          <p className="text-xs md:text-sm text-on-surface-variant dark:text-white/60 max-w-md leading-relaxed">
            {serviceData.subTitleDescription}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 animate-fadeIn">
          {serviceData.specializedSolutions.map((solution, index) => {
            const isActive = index === activeSolutionIndex;
            return (
              <div
                key={index}
                onClick={() => setActiveSolutionIndex(index)}
                className={`relative p-8 rounded-2xl flex flex-col justify-between border transition-all duration-350 cursor-pointer overflow-hidden group ${
                  solution.spanClass
                } ${
                  solution.isDark
                    ? "bg-vantage-navy text-white border-white/5 shadow-xl hover:bg-black"
                    : isActive
                    ? "bg-vantage-blue/5 dark:bg-vantage-blue/15 border-vantage-blue dark:border-vantage-blue/60 shadow-lg"
                    : "bg-surface-container-low dark:bg-vantage-navy/30 hover:bg-vantage-blue/5 dark:hover:bg-vantage-blue/10 border-outline-variant/15 hover:border-vantage-blue/30 text-on-secondary-fixed dark:text-white"
                }`}
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span
                      className={`material-symbols-outlined text-4xl transition-transform duration-300 group-hover:scale-110 ${
                        solution.isDark ? "text-vantage-blue" : "text-vantage-blue dark:text-sky-400"
                      }`}
                    >
                      {solution.icon}
                    </span>
                    {isActive && (
                      <span className="bg-vantage-blue text-white text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full">
                        Active View
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-lg md:text-xl mb-4 leading-snug">
                    {solution.title}
                  </h3>
                  <p
                    className={`text-xs leading-relaxed max-w-md ${
                      solution.isDark
                        ? "text-white/80"
                        : "text-on-surface-variant dark:text-white/70"
                    }`}
                  >
                    {solution.description}
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-2 font-bold text-xs uppercase tracking-wider group-hover:text-vantage-blue transition-colors">
                  <span className={`${solution.isDark ? "text-vantage-blue" : "text-vantage-navy dark:text-white"}`}>
                    Explore Capabilities
                  </span>
                  <span className="material-symbols-outlined text-[16px] transition-transform duration-300 group-hover:translate-x-1.5">
                    trending_flat
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Detailed Service Breakdown */}
      <section className="bg-surface-container-low dark:bg-vantage-navy/20 py-20 border-y border-outline-variant/15 transition-colors duration-300">
        <div className="px-6 md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left panel - Premium image wrapper */}
          <div className="relative rounded-2xl overflow-hidden h-[300px] md:h-[450px] shadow-2xl group animate-fadeIn">
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
            <img
              alt={activeSolution.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              src={serviceData.breakdownImage}
            />
            {/* Float verified badge */}
            <div className="absolute bottom-6 left-6 right-6 glass-card p-5 rounded-xl border border-white/20 z-20 shadow-xl transition-all duration-300 group-hover:translate-y-[-4px]">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-vantage-blue rounded-full flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-[20px] font-bold">verified</span>
                </div>
                <div>
                  <p className="text-[10px] text-on-surface-variant dark:text-white/60 uppercase tracking-widest font-semibold">
                    Quality Standard
                  </p>
                  <p className="text-xs md:text-sm font-bold text-vantage-navy dark:text-white">
                    {serviceData.qualityStandard}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right panel - Capability detail list */}
          <div className="md:pl-6 animate-fadeIn">
            <span className="text-[10px] text-vantage-blue uppercase font-bold tracking-widest mb-3 inline-block">
              Interactive Focus Area
            </span>
            <h2 className="font-extrabold text-2xl md:text-4xl text-vantage-navy dark:text-white mb-6 leading-tight">
              {activeSolution.title}
            </h2>
            <p className="text-xs md:text-sm text-on-surface-variant dark:text-white/70 mb-8 leading-relaxed">
              We deliver industrial-strength implementation for {activeSolution.title.toLowerCase()}.
              Our solutions prioritize baseline safety parameters and operational reliability under high-load cycles.
            </p>

            {/* Checklist */}
            <div className="space-y-5 mb-10">
              {serviceData.capabilities.map((cap, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-vantage-blue/10 dark:bg-vantage-blue/20 flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                    <span className="material-symbols-outlined text-vantage-blue text-[20px] font-bold">
                      check_circle
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xs md:text-sm text-vantage-navy dark:text-white">
                      {cap.title}
                    </h4>
                    <p className="text-[11px] md:text-xs text-on-surface-variant dark:text-white/60 leading-relaxed mt-1">
                      {cap.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Dynamic metrics indicators */}
            <div className="grid grid-cols-2 gap-4">
              {serviceData.metrics.map((metric, i) => (
                <div
                  key={i}
                  className="p-5 bg-white dark:bg-vantage-navy/60 rounded-xl border border-outline-variant/15 text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <p className="font-extrabold text-2xl md:text-3xl text-vantage-blue">
                    {metric.value}
                  </p>
                  <p className="text-[10px] md:text-xs font-bold text-on-surface-variant dark:text-white/60 uppercase tracking-wider mt-1">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services & Specifications Catalog */}
      {serviceData.detailedCatalog && serviceData.detailedCatalog.length > 0 && (
        <section className="py-20 px-6 md:px-margin-desktop max-w-container-max mx-auto w-full border-b border-outline-variant/15 select-none">
          <div className="mb-16 text-center animate-fadeIn">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-vantage-blue bg-vantage-blue/10 px-3.5 py-1.5 rounded-full inline-block mb-4">
              Catalog &amp; Specifications
            </span>
            <h2 className="font-extrabold text-2xl md:text-4xl text-vantage-navy dark:text-white mb-4">
              Comprehensive Service Capabilities
            </h2>
            <div className="h-1 w-24 bg-vantage-blue rounded-full mx-auto mb-6"></div>
            <p className="text-xs md:text-sm text-on-surface-variant dark:text-white/60 max-w-2xl mx-auto leading-relaxed">
              Vantage operates with full ISO quality standard adherence. Review our exhaustive list of technical solutions, hardware brands, and operational process phases below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start animate-fadeIn">
            {serviceData.detailedCatalog.map((category, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-vantage-navy/40 border border-outline-variant/20 dark:border-white/15 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-outline-variant/15 dark:border-white/5">
                  <span className="material-symbols-outlined text-vantage-blue text-2xl font-bold">
                    integration_instructions
                  </span>
                  <h3 className="font-bold text-base md:text-lg text-vantage-navy dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {category.items.map((item, itemIdx) => {
                    const parts = item.split(": ");
                    const hasColon = parts.length > 1;
                    return (
                      <li key={itemIdx} className="flex items-start gap-3 text-xs text-on-surface-variant dark:text-white/85 leading-relaxed">
                        <span className="material-symbols-outlined text-vantage-blue text-[18px] shrink-0 font-bold mt-0.5">
                          check_circle_outline
                        </span>
                        <span>
                          {hasColon ? (
                            <>
                              <strong className="font-bold text-vantage-navy dark:text-white">{parts[0]}:</strong>{" "}
                              {parts.slice(1).join(": ")}
                            </>
                          ) : (
                            item
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Promos CTA Section */}
      <section className="py-20 px-6 md:px-margin-desktop text-center max-w-4xl mx-auto w-full animate-fadeIn">
        <h2 className="font-extrabold text-2xl md:text-4xl text-vantage-navy dark:text-white mb-6 tracking-tight leading-tight">
          {serviceData.ctaTitle}
        </h2>
        <p className="text-xs md:text-sm text-on-surface-variant dark:text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
          {serviceData.ctaDescription}
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button
            onClick={() => handleOpenQuote()}
            className="w-full sm:w-auto bg-vantage-navy dark:bg-white text-white dark:text-vantage-navy px-8 py-4 rounded-full font-bold text-xs flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-xl cursor-pointer"
          >
            Request a Custom Consultation
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
          <button
            onClick={handleDownloadBrochure}
            className={`w-full sm:w-auto border border-outline-variant text-on-secondary-fixed dark:text-white px-8 py-4 rounded-full font-bold text-xs flex items-center justify-center gap-2 hover:bg-surface-container active:scale-95 transition-all cursor-pointer ${
              downloadSuccess ? "border-green-500 text-green-500 bg-green-50/10" : ""
            }`}
          >
            {isDownloading ? (
              <>
                <span className="animate-spin h-4 w-4 border-2 border-vantage-blue border-t-transparent rounded-full"></span>
                Downloading Spec Sheet...
              </>
            ) : downloadSuccess ? (
              <>
                <span className="material-symbols-outlined text-[18px]">check</span>
                Brochure Downloaded!
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-[18px]">download</span>
                Download Brochure
              </>
            )}
          </button>
        </div>
      </section>

      {/* Shared Footer Section */}
      <Footer onOpenQuote={() => handleOpenQuote()} />

      {/* Quote dialog */}
      <QuoteDialog
        isOpen={isQuoteOpen}
        onClose={handleCloseQuote}
        preselectedDivision={preselectedService}
      />
    </div>
  );
}
