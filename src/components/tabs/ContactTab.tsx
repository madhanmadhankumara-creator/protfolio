import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  Copy, 
  Check, 
  ExternalLink,
  MessageSquare,
  Sparkles,
  Plane
} from 'lucide-react';
import { PERSONAL_INFO } from '../../data/aerospaceData.ts';

export const ContactTab: React.FC = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullname || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ fullname: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 700);
  };

  return (
    <article className="space-y-8 animate-fadeIn">
      {/* Header */}
      <header className="border-b border-[#383838] pb-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
          <span>Let's Connect</span>
          <span className="h-2 w-2 rounded-full bg-amber-400"></span>
        </h2>
        <p className="text-xs text-zinc-400 mt-1">
          Open for inquiries, UAV aerospace projects, research collaborations, and engineering discussions
        </p>
      </header>

      {/* Intro Banner (From Section 20 of prompt) */}
      <section className="p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-[#1e1e1f] to-[#1e1e1f] border border-amber-500/30">
        <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>Professional Collaboration</span>
        </div>
        <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed max-w-3xl">
          I am always interested in connecting with people working in <span className="text-amber-400 font-medium">aerospace engineering</span>,{' '}
          <span className="text-amber-400 font-medium">UAVs</span>,{' '}
          <span className="text-purple-400 font-medium">AI</span>,{' '}
          <span className="text-cyan-400 font-medium">CAD</span>,{' '}
          <span className="text-emerald-400 font-medium">robotics</span> and emerging technologies.
        </p>
      </section>

      {/* Main Grid: Direct Contacts & Dispatch Form */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Contact Info Cards (2 cols) */}
        <div className="lg:col-span-2 space-y-4">
          {/* Profile Identity Card */}
          <div className="p-5 rounded-2xl bg-[#1e1e1f] border border-[#383838] space-y-3">
            <div>
              <h3 className="text-base font-bold text-white">{PERSONAL_INFO.name}</h3>
              <p className="text-xs text-amber-400 font-medium">{PERSONAL_INFO.title}</p>
              <p className="text-[11px] text-zinc-400 mt-0.5">{PERSONAL_INFO.institution}</p>
            </div>
          </div>

          {/* Email Card */}
          <div className="p-5 rounded-2xl bg-[#1e1e1f] border border-[#383838] flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-[#2b2b2c] border border-[#383838] flex items-center justify-center text-amber-400 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider block">Email</span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-xs text-white hover:text-amber-400 transition-colors truncate block"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>
            <button
              onClick={handleCopyEmail}
              className="p-2 rounded-lg bg-[#2b2b2c] hover:bg-zinc-700 text-zinc-300 hover:text-amber-400 transition-colors shrink-0 cursor-pointer"
              title="Copy Email"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Phone Card */}
          <div className="p-5 rounded-2xl bg-[#1e1e1f] border border-[#383838] flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-[#2b2b2c] border border-[#383838] flex items-center justify-center text-amber-400 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider block">Phone</span>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="text-xs text-white hover:text-amber-400 transition-colors font-mono block"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>
            </div>
            <button
              onClick={handleCopyPhone}
              className="p-2 rounded-lg bg-[#2b2b2c] hover:bg-zinc-700 text-zinc-300 hover:text-amber-400 transition-colors shrink-0 cursor-pointer"
              title="Copy Phone"
            >
              {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Location Card */}
          <div className="p-5 rounded-2xl bg-[#1e1e1f] border border-[#383838] flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#2b2b2c] border border-[#383838] flex items-center justify-center text-amber-400 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider block">Location</span>
              <p className="text-xs text-white leading-relaxed">{PERSONAL_INFO.location}</p>
            </div>
          </div>

          {/* Links: LinkedIn, GitHub, Email */}
          <div className="p-5 rounded-2xl bg-[#1e1e1f] border border-[#383838]">
            <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider block mb-3">Links & Profiles</span>
            <div className="flex flex-col gap-2 text-xs">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-[#2b2b2c] border border-[#383838] text-zinc-200 hover:text-amber-400 hover:border-amber-400/40 transition-colors"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-[#2b2b2c] border border-[#383838] text-zinc-200 hover:text-amber-400 hover:border-amber-400/40 transition-colors"
              >
                <span>GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center justify-between p-2.5 rounded-xl bg-[#2b2b2c] border border-[#383838] text-zinc-200 hover:text-amber-400 hover:border-amber-400/40 transition-colors"
              >
                <span>Direct Mail</span>
                <Mail className="w-3.5 h-3.5 text-zinc-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form (3 cols) */}
        <div className="lg:col-span-3">
          <section className="p-6 sm:p-7 rounded-3xl bg-[#1e1e1f] border border-[#383838] shadow-2xl relative">
            <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-amber-400" />
              <span>Send a Message</span>
            </h3>
            <p className="text-xs text-zinc-400 mb-6">
              Have an engineering project, UAV prototype, or inquiry? Leave a message below.
            </p>

            {isSubmitted && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-3">
                <CheckCircle className="w-5 h-5 shrink-0" />
                <span>Thank you! Your message has been prepared. I will respond to your email promptly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-semibold uppercase text-zinc-400 tracking-wider">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.fullname}
                    onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
                    className="w-full bg-[#2b2b2c] border border-[#383838] rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-semibold uppercase text-zinc-400 tracking-wider">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#2b2b2c] border border-[#383838] rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-semibold uppercase text-zinc-400 tracking-wider">
                  Subject / Area of Interest
                </label>
                <input
                  type="text"
                  placeholder="e.g. UAV Aeromodel Project / CAD Modeling / CV Pipeline"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-[#2b2b2c] border border-[#383838] rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-semibold uppercase text-zinc-400 tracking-wider">
                  Your Message *
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Describe your project, inquiry, or engineering collaboration..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#2b2b2c] border border-[#383838] rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-500/15 transition-all hover:scale-[1.01] active:scale-[0.98] cursor-pointer disabled:opacity-50"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
              </button>
            </form>
          </section>
        </div>
      </div>
    </article>
  );
};
