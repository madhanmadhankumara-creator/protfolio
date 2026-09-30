import React, { useState, useRef, useEffect } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  ChevronDown,
  ChevronUp,
  Download,
  Copy,
  Check,
  Plane,
  Eye,
  Cpu,
  Layers,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/aerospaceData.ts';
import profileImg from '../assets/profile.jpeg';
import { generateResumePdf, downloadResumePdf } from '../utils/generateResumePdf.ts';

interface SidebarProps {
  onOpenResume: () => void;
  onNavigateContact?: () => void;
}

const PROFILE_PIC = profileImg || '/profile.jpeg';

export const Sidebar: React.FC<SidebarProps> = ({ onOpenResume, onNavigateContact }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <aside className="w-full lg:w-[310px] shrink-0 bg-[#1e1e1f] border border-[#383838] rounded-3xl p-6 lg:p-7 shadow-2xl relative transition-all duration-300">
      {/* Top Profile Summary */}
      <div className="flex flex-col items-center text-center">
        {/* Profile Picture */}
        <div className="relative mb-4 group">
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl overflow-hidden border-2 border-amber-400/40 bg-zinc-900 p-1 shadow-xl relative">
            <img
              src={PROFILE_PIC}
              alt={PERSONAL_INFO.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Active Status Badge */}
          <div
            className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full text-[10px] font-medium tracking-wide flex items-center gap-1.5 shadow-md border border-[#383838] bg-[#1e1e1f]/95 text-emerald-400 whitespace-nowrap z-10"
            title="Available for UAV & Aerospace Engineering Opportunities"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>UAV & CAD Active</span>
          </div>
        </div>

        {/* Name & Title */}
        <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-2">
          {PERSONAL_INFO.name}
        </h1>

        <div className="inline-block mt-2 px-3 py-1.5 bg-[#2b2b2c] border border-[#383838] rounded-xl text-xs font-medium text-amber-400 leading-snug">
          Aerospace Engineering Undergraduate
          <span className="block text-[11px] text-amber-300/80 font-mono mt-0.5">· UAV Specialization ·</span>
        </div>

        {/* Quick Tag pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mt-3">
          <span className="px-2 py-0.5 rounded-md text-[10px] bg-zinc-800/80 text-zinc-300 border border-zinc-700/60 flex items-center gap-1">
            <Plane className="w-3 h-3 text-amber-400" /> UAVs
          </span>
          <span className="px-2 py-0.5 rounded-md text-[10px] bg-zinc-800/80 text-zinc-300 border border-zinc-700/60 flex items-center gap-1">
            <Layers className="w-3 h-3 text-cyan-400" /> CAD
          </span>
          <span className="px-2 py-0.5 rounded-md text-[10px] bg-zinc-800/80 text-zinc-300 border border-zinc-700/60 flex items-center gap-1">
            <Eye className="w-3 h-3 text-purple-400" /> AI & CV
          </span>
          <span className="px-2 py-0.5 rounded-md text-[10px] bg-zinc-800/80 text-zinc-300 border border-zinc-700/60 flex items-center gap-1">
            <Cpu className="w-3 h-3 text-emerald-400" /> IoT
          </span>
        </div>
      </div>

      {/* Mobile Toggle Button (Classic vCard feature) */}
      <div className="lg:hidden mt-4 pt-4 border-t border-[#2b2b2c] flex justify-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 text-xs font-medium text-amber-400 hover:text-amber-300 transition-colors py-1.5 px-4 rounded-xl bg-[#2b2b2c] border border-[#383838]"
        >
          <span>{isOpen ? 'Hide Contacts' : 'Show Contacts'}</span>
          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {/* Expandable Contact Information & Credentials */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:block mt-6 transition-all duration-300`}>
        <div className="h-px bg-gradient-to-r from-transparent via-[#383838] to-transparent my-4"></div>

        {/* Contact List */}
        <ul className="space-y-3.5 text-xs">
          {/* Email */}
          <li className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#2b2b2c] border border-[#383838] flex items-center justify-center text-amber-400 shrink-0 shadow-sm">
              <Mail className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[10px] uppercase font-semibold text-zinc-400 tracking-wider block">
                Email
              </span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-zinc-200 hover:text-amber-400 transition-colors truncate block text-xs"
                  title={PERSONAL_INFO.email}
                >
                  {PERSONAL_INFO.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-1 text-zinc-400 hover:text-amber-400 transition-colors rounded shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </li>

          {/* Phone */}
          <li className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#2b2b2c] border border-[#383838] flex items-center justify-center text-amber-400 shrink-0 shadow-sm">
              <Phone className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[10px] uppercase font-semibold text-zinc-400 tracking-wider block">
                Phone
              </span>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="text-zinc-200 hover:text-amber-400 transition-colors mt-0.5 block text-xs font-mono"
              >
                {PERSONAL_INFO.phone}
              </a>
            </div>
          </li>

          {/* Location */}
          <li className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#2b2b2c] border border-[#383838] flex items-center justify-center text-amber-400 shrink-0 shadow-sm">
              <MapPin className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[10px] uppercase font-semibold text-zinc-400 tracking-wider block">
                Location
              </span>
              <address className="not-italic text-zinc-200 text-xs mt-0.5 leading-snug">
                {PERSONAL_INFO.location}
              </address>
            </div>
          </li>

          {/* Institution */}
          <li className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#2b2b2c] border border-[#383838] flex items-center justify-center text-amber-400 shrink-0 shadow-sm">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[10px] uppercase font-semibold text-zinc-400 tracking-wider block">
                Institution & CGPA
              </span>
              <p className="text-zinc-200 text-xs mt-0.5 leading-snug">
                PMIST, Thanjavur
              </p>
              <span className="inline-block mt-1 text-[11px] text-amber-300/90 font-mono bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                CGPA: {PERSONAL_INFO.cgpa}
              </span>
            </div>
          </li>
        </ul>

        <div className="h-px bg-gradient-to-r from-transparent via-[#383838] to-transparent my-5"></div>

        {/* Action Buttons: Download PDF & View Dossier */}
        <div className="space-y-2">
          <button
            onClick={() => downloadResumePdf()}
            className="w-full py-2.5 px-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-500/15 transition-all hover:scale-[1.01] active:scale-[0.98] cursor-pointer"
            title="Download official PDF resume file"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download PDF Resume</span>
          </button>

          <button
            onClick={onOpenResume}
            className="w-full py-2 px-4 bg-[#2b2b2c] hover:bg-[#333335] text-zinc-300 hover:text-white border border-[#383838] font-medium rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>View Dossier Online</span>
          </button>
        </div>

        {/* Social & Contact Links */}
        <div className="mt-4 flex items-center justify-center gap-2">
          {PERSONAL_INFO.email && (
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex-1 py-1.5 px-2 rounded-lg bg-[#2b2b2c] border border-[#383838] flex items-center justify-center gap-1.5 text-xs text-zinc-300 hover:text-amber-400 hover:border-amber-400/40 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          )}
          {onNavigateContact && (
            <button
              onClick={onNavigateContact}
              className="flex-1 py-1.5 px-2 rounded-lg bg-[#2b2b2c] border border-[#383838] flex items-center justify-center gap-1.5 text-xs text-zinc-300 hover:text-amber-400 hover:border-amber-400/40 transition-colors cursor-pointer"
            >
              <span>Contact Me</span>
              <ExternalLink className="w-3 h-3 text-zinc-400" />
            </button>
          )}
        </div>
      </div>
    </aside>
  );
};
