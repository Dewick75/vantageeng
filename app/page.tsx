"use client";

import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/sections/Hero";
import { Usp } from "../components/sections/Usp";
import { UniquePosition } from "../components/sections/UniquePosition";
import { BentoServices } from "../components/sections/BentoServices";
import { ClientJourney } from "../components/sections/ClientJourney";
import { Testimonials } from "../components/sections/Testimonials";
import { Footer } from "../components/sections/Footer";
import { QuoteDialog } from "../components/QuoteDialog";

export default function Home() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState("");

  const handleOpenQuote = (serviceName?: string) => {
    if (serviceName) {
      setPreselectedService(serviceName);
    } else {
      setPreselectedService("");
    }
    setIsQuoteOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteOpen(false);
    setPreselectedService("");
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-on-background antialiased">
      {/* Dynamic Navigation Header */}
      <Navbar onRequestQuote={() => handleOpenQuote()} />

      {/* Main Page Contents */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenQuote={() => handleOpenQuote()} />

        {/* USP / Core Statistics Section */}
        <Usp />

        {/* Unique Market Position Section */}
        <UniquePosition />

        {/* Bento Grid Services Showcase */}
        <BentoServices onOpenQuote={(name) => handleOpenQuote(name)} />

        {/* Compounding Client Journey Lifecycle */}
        <ClientJourney />

        {/* Testimonials Review Slider */}
        <Testimonials />
      </main>

      {/* Premium Footer Section */}
      <Footer onOpenQuote={() => handleOpenQuote()} />

      {/* Quote / Consultation Form Dialog */}
      <QuoteDialog
        isOpen={isQuoteOpen}
        onClose={handleCloseQuote}
        preselectedDivision={preselectedService}
      />
    </div>
  );
}
