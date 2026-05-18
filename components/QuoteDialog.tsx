"use client";

import React, { useState } from "react";

interface QuoteDialogProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedDivision?: string;
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  division: string;
  budget: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  division?: string;
}

const divisions = [
  "Electrical Services",
  "Industrial Automation & PLC",
  "Home Automation",
  "IoT & Energy Intelligence",
  "Panel Fabrication",
  "CCTV & Surveillance",
  "Maintenance Contracts"
];

const budgetRanges = [
  "Under $5,000",
  "$5,000 - $20,000",
  "$20,000 - $50,000",
  "$50,000+"
];

export function QuoteDialog({ isOpen, onClose, preselectedDivision }: QuoteDialogProps) {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    division: "",
    budget: "",
    message: ""
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  React.useEffect(() => {
    if (isOpen) {
      setForm((prev) => ({
        ...prev,
        division: preselectedDivision || ""
      }));
    }
  }, [isOpen, preselectedDivision]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const selectDivision = (val: string) => {
    setForm((prev) => ({ ...prev, division: val }));
    if (errors.division) {
      setErrors((prev) => ({ ...prev, division: undefined }));
    }
  };

  const selectBudget = (val: string) => {
    setForm((prev) => ({ ...prev, budget: val }));
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "Full name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    }
    if (!form.division) {
      newErrors.division = "Please select a service division.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset form
      setForm({
        name: "",
        email: "",
        phone: "",
        division: "",
        budget: "",
        message: ""
      });
      // Close success automatically after 3.5s
      setTimeout(() => {
        setSubmitSuccess(false);
        onClose();
      }, 3500);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Dark backdrop overlay */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300 animate-fadeIn"
        onClick={() => {
          if (!isSubmitting) onClose();
        }}
      />

      {/* Modal Dialog Body */}
      <div className="bg-white dark:bg-vantage-navy w-full max-w-lg rounded-2xl shadow-2xl border border-outline-variant/30 overflow-hidden relative z-10 animate-scaleUp max-h-[90vh] flex flex-col">
        {/* Close Button */}
        {!submitSuccess && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-on-surface-variant hover:text-vantage-blue dark:text-white/60 dark:hover:text-white p-1 rounded-full hover:bg-surface-container transition-all"
            aria-label="Close dialog"
            disabled={isSubmitting}
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        )}

        {submitSuccess ? (
          /* Animated Success State */
          <div className="p-10 flex flex-col items-center justify-center text-center flex-1 min-h-[400px]">
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center mb-6 animate-bounce">
              <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-5xl font-bold">
                done_all
              </span>
            </div>
            <h3 className="font-bold text-2xl text-charcoal-text dark:text-white mb-2 leading-tight">
              Inquiry Sent Successfully!
            </h3>
            <p className="text-sm text-on-surface-variant dark:text-white/70 max-w-sm">
              Thank you for reaching out. Our engineering consultation team will review your specifications and contact you within 24 hours.
            </p>
            <div className="mt-8 flex gap-2 items-center text-vantage-blue text-xs font-semibold animate-pulse">
              <span className="w-2 h-2 bg-vantage-blue rounded-full animate-ping"></span>
              Closing consultation window...
            </div>
          </div>
        ) : (
          /* Dialog Form Content */
          <>
            <div className="p-6 border-b border-outline-variant/10 text-left bg-surface-container-low dark:bg-vantage-navy/50">
              <h3 className="font-bold text-lg text-vantage-navy dark:text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-vantage-blue font-bold">
                  engineering
                </span>
                Request Engineering Quote
              </h3>
              <p className="text-xs text-on-surface-variant dark:text-white/60 mt-1">
                Share your requirements to book a free professional consultation with our team.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="p-6 overflow-y-auto flex-1 space-y-5 text-left"
            >
              {/* Name field */}
              <div>
                <label className="block text-[11px] font-bold text-vantage-navy dark:text-white/80 uppercase tracking-wider mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Priyantha Silva"
                  className={`w-full px-4 py-2.5 rounded-lg border bg-surface/50 text-xs focus:outline-none focus:ring-1 focus:ring-vantage-blue transition-all ${
                    errors.name
                      ? "border-red-500 focus:border-red-500"
                      : "border-outline-variant/50 focus:border-vantage-blue"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-[10px] mt-1 flex items-center gap-1 font-medium">
                    <span className="material-symbols-outlined text-xs">error</span>
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Contact Information (Email & Phone grid) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-vantage-navy dark:text-white/80 uppercase tracking-wider mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className={`w-full px-4 py-2.5 rounded-lg border bg-surface/50 text-xs focus:outline-none focus:ring-1 focus:ring-vantage-blue transition-all ${
                      errors.email
                        ? "border-red-500 focus:border-red-500"
                        : "border-outline-variant/50 focus:border-vantage-blue"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-[10px] mt-1 flex items-center gap-1 font-medium">
                      <span className="material-symbols-outlined text-xs">error</span>
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-vantage-navy dark:text-white/80 uppercase tracking-wider mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+94 77 123 4567"
                    className={`w-full px-4 py-2.5 rounded-lg border bg-surface/50 text-xs focus:outline-none focus:ring-1 focus:ring-vantage-blue transition-all ${
                      errors.phone
                        ? "border-red-500 focus:border-red-500"
                        : "border-outline-variant/50 focus:border-vantage-blue"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-[10px] mt-1 flex items-center gap-1 font-medium">
                      <span className="material-symbols-outlined text-xs">error</span>
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Service Divisions Choice Chips */}
              <div>
                <label className="block text-[11px] font-bold text-vantage-navy dark:text-white/80 uppercase tracking-wider mb-2">
                  Select Division <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {divisions.map((div) => {
                    const isSelected = form.division === div;
                    return (
                      <button
                        key={div}
                        type="button"
                        onClick={() => selectDivision(div)}
                        className={`px-3 py-1.5 rounded-full text-[10px] font-semibold border transition-all ${
                          isSelected
                            ? "bg-vantage-blue/15 border-vantage-blue text-vantage-blue"
                            : "bg-surface-container-low border-outline-variant/40 text-on-surface-variant hover:border-vantage-blue hover:text-vantage-blue"
                        }`}
                      >
                        {div}
                      </button>
                    );
                  })}
                </div>
                {errors.division && (
                  <p className="text-red-500 text-[10px] mt-2 flex items-center gap-1 font-medium">
                    <span className="material-symbols-outlined text-xs">error</span>
                    {errors.division}
                  </p>
                )}
              </div>

              {/* Project Budget Choice Chips */}
              <div>
                <label className="block text-[11px] font-bold text-vantage-navy dark:text-white/80 uppercase tracking-wider mb-2">
                  Estimated Budget
                </label>
                <div className="flex flex-wrap gap-2">
                  {budgetRanges.map((range) => {
                    const isSelected = form.budget === range;
                    return (
                      <button
                        key={range}
                        type="button"
                        onClick={() => selectBudget(range)}
                        className={`px-3.5 py-1.5 rounded-full text-[10px] font-semibold border transition-all ${
                          isSelected
                            ? "bg-primary-container text-white border-primary"
                            : "bg-surface-container-low border-outline-variant/40 text-on-surface-variant hover:border-primary hover:text-primary"
                        }`}
                      >
                        {range}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Message field */}
              <div>
                <label className="block text-[11px] font-bold text-vantage-navy dark:text-white/80 uppercase tracking-wider mb-1.5">
                  Project Outline
                </label>
                <textarea
                  name="message"
                  rows={3}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Outline your layout needs, equipment scope, or support SLA specs..."
                  className="w-full px-4 py-2.5 rounded-lg border border-outline-variant/50 bg-surface/50 text-xs focus:outline-none focus:ring-1 focus:ring-vantage-blue focus:border-vantage-blue transition-all resize-none"
                />
              </div>

              {/* Submit panel */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-vantage-blue text-white py-3 rounded-full font-bold text-xs hover:bg-vantage-blue/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 shadow-lg shadow-vantage-blue/20"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
                      Validating Specs...
                    </>
                  ) : (
                    <>
                      Submit Specifications
                      <span className="material-symbols-outlined text-[16px]">
                        arrow_forward
                      </span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
