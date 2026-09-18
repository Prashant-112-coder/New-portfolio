"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setFeedback("Please fill out your name, email, and message.");
      return;
    }

    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      setStatus("error");
      setFeedback("Please provide a valid email address.");
      return;
    }

    setStatus("submitting");
    setFeedback("");

    // Simulate reliable dispatch & celebrate
    setTimeout(() => {
      setStatus("success");
      setFeedback(
        "Thank you! Your message has been prepared. You can also email me directly at Prashantikkalaki416@gmail.com."
      );

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.7 },
          colors: ["#06b6d4", "#6366f1", "#10b981", "#38bdf8"],
        });
      } catch (err) {
        // ignore confetti errors
      }

      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 900);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-xs font-mono text-slate-400 mb-1.5">
            Your Name <span className="text-cyan-400">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full rounded-xl glass-input px-4 py-3 text-sm placeholder:text-slate-600 focus:border-cyan-400 focus:outline-none"
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-xs font-mono text-slate-400 mb-1.5">
            Email Address <span className="text-cyan-400">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="w-full rounded-xl glass-input px-4 py-3 text-sm placeholder:text-slate-600 focus:border-cyan-400 focus:outline-none"
          />
        </div>
      </div>

      {/* Subject Field */}
      <div>
        <label htmlFor="subject" className="block text-xs font-mono text-slate-400 mb-1.5">
          Subject / Opportunity
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Software Engineering Role / Project Discussion"
          className="w-full rounded-xl glass-input px-4 py-3 text-sm placeholder:text-slate-600 focus:border-cyan-400 focus:outline-none"
        />
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-xs font-mono text-slate-400 mb-1.5">
          Message <span className="text-cyan-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Hi Prashant, I came across your portfolio and would like to connect regarding..."
          className="w-full rounded-xl glass-input px-4 py-3 text-sm placeholder:text-slate-600 focus:border-cyan-400 focus:outline-none resize-none"
        />
      </div>

      {/* Feedback Messages */}
      {status === "error" && (
        <div className="flex items-center gap-2 rounded-xl bg-red-500/10 border border-red-500/20 p-3 text-xs text-red-300">
          <AlertCircle className="h-4 w-4 shrink-0" />
          <span>{feedback}</span>
        </div>
      )}

      {status === "success" && (
        <div className="flex items-start gap-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-3 text-xs text-emerald-300">
          <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-emerald-400" />
          <span>{feedback}</span>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-98 disabled:opacity-50"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Sending Message...</span>
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            <span>Send Message</span>
          </>
        )}
      </button>
    </form>
  );
}
