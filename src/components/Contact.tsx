"use client";

import { useState } from "react";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "software-role",
    message: "",
  });

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("phaloneguemkam@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("+491781348626");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate submission delay and open mail client fallback
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      const subjectLine = encodeURIComponent(
        `Inquiry [${formData.subject}] from ${formData.name}`
      );
      const bodyContent = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:phaloneguemkam@gmail.com?subject=${subjectLine}&body=${bodyContent}`;
    }, 600);
  };

  return (
    <section
      className="glass-card rounded-3xl p-6 sm:p-10 border border-white shadow-2xl relative overflow-hidden"
      data-purpose="contact-form"
      id="contact"
    >
      {/* Decorative background glass orb */}
      <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-gradient-to-tr from-indigo-300/40 via-blue-200/30 to-white/70 blur-2xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative z-10">
        {/* Contact Left Column */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
              Let&apos;s Connect
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              Have a project or engineering role in mind?
            </h2>
            <p className="text-sm text-slate-600 mt-3 leading-relaxed font-normal">
              I am open to full-time Software Developer / Full-Stack Engineer opportunities in Germany (NRW / hybrid / remote). Let&apos;s talk about building impactful digital solutions together.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            {/* Email Item */}
            <div className="flex items-center justify-between p-3 rounded-2xl bg-white/60 hover:bg-white border border-white/80 transition-all text-xs group">
              <a
                href="mailto:phaloneguemkam@gmail.com"
                className="flex items-center gap-3.5 flex-1 min-w-0"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold shrink-0">
                  @
                </div>
                <div className="truncate">
                  <p className="text-slate-400 font-medium text-[11px]">Direct Email</p>
                  <p className="text-slate-800 font-semibold truncate">phaloneguemkam@gmail.com</p>
                </div>
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-2.5 py-1 text-[11px] font-medium text-slate-500 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors ml-2 shrink-0"
                title="Copy Email"
              >
                {copiedEmail ? "Copied! ✓" : "Copy"}
              </button>
            </div>

            {/* Phone Item */}
            <div className="flex items-center justify-between p-3 rounded-2xl bg-white/60 hover:bg-white border border-white/80 transition-all text-xs group">
              <a href="tel:+491781348626" className="flex items-center gap-3.5 flex-1 min-w-0">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className="truncate">
                  <p className="text-slate-400 font-medium text-[11px]">Phone / Mobile</p>
                  <p className="text-slate-800 font-semibold truncate">+49 178 1348626</p>
                </div>
              </a>
              <button
                type="button"
                onClick={handleCopyPhone}
                className="px-2.5 py-1 text-[11px] font-medium text-slate-500 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors ml-2 shrink-0"
                title="Copy Phone"
              >
                {copiedPhone ? "Copied! ✓" : "Copy"}
              </button>
            </div>

            {/* Location Item */}
            <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/60 border border-white/80 text-xs">
              <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                  <path
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div>
                <p className="text-slate-400 font-medium text-[11px]">Location</p>
                <p className="text-slate-800 font-semibold">Dortmund, North Rhine-Westphalia, Germany</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Right Column */}
        <div className="lg:col-span-7">
          {submitted ? (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500 text-white flex items-center justify-center text-xl font-bold">
                ✓
              </div>
              <h3 className="text-lg font-bold text-emerald-900">Message Ready!</h3>
              <p className="text-xs text-emerald-700 max-w-md mx-auto">
                Thank you, {formData.name || "friend"}! Your message was prepared. If your email client didn&apos;t automatically launch, you can directly reach me at{" "}
                <a href="mailto:phaloneguemkam@gmail.com" className="font-bold underline">
                  phaloneguemkam@gmail.com
                </a>.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-3 px-4 py-2 text-xs font-semibold text-emerald-800 bg-white rounded-xl border border-emerald-300 hover:bg-emerald-100 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" data-purpose="inquiry-form">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name Input */}
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-slate-700" htmlFor="contact-name">
                    Your Name
                  </label>
                  <input
                    className="w-full text-xs rounded-xl bg-white/70 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 px-3.5 py-3 shadow-sm transition outline-none"
                    id="contact-name"
                    placeholder="e.g. Dr. Alex Weber"
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                {/* Email Input */}
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-slate-700" htmlFor="contact-email">
                    Your Email
                  </label>
                  <input
                    className="w-full text-xs rounded-xl bg-white/70 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 px-3.5 py-3 shadow-sm transition outline-none"
                    id="contact-email"
                    placeholder="alex.weber@company.de"
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              {/* Subject / Inquiry Topic */}
              <div className="space-y-1">
                <label className="block text-xs font-semibold text-slate-700" htmlFor="contact-subject">
                  Inquiry Type / Role
                </label>
                <select
                  className="w-full text-xs rounded-xl bg-white/70 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 px-3.5 py-3 shadow-sm transition outline-none"
                  id="contact-subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                >
                  <option value="software-role">Full-Time Software Engineer Role (Spring / React / Python)</option>
                  <option value="freelance">Freelance Web / Full-Stack Project</option>
                  <option value="consulting">AI &amp; Distributed System Consultation</option>
                  <option value="other">General Tech Inquiry &amp; Networking</option>
                </select>
              </div>

              {/* Message Input */}
              <div className="space-y-1">
                <label className="block text-xs font-semibold text-slate-700" htmlFor="contact-message">
                  Your Message
                </label>
                <textarea
                  className="w-full text-xs rounded-xl bg-white/70 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 px-3.5 py-3 shadow-sm transition outline-none"
                  id="contact-message"
                  placeholder="Tell me about your team, tech stack, or engineering project..."
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 disabled:opacity-75 rounded-xl px-6 py-3.5 transition-all shadow-md group cursor-pointer"
                >
                  <span>{loading ? "Processing..." : "Send Message"}</span>
                  <span className="inline-block transition-transform group-hover:translate-x-1" aria-hidden="true">
                    ↗
                  </span>
                </button>
              </div>
              <p className="text-[11px] text-center text-slate-400">
                Direct response usually within 24 hours. Privacy assured.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
