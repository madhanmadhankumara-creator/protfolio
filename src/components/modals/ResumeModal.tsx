import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  Copy, 
  Check, 
  Mail, 
  MapPin, 
  Phone, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Wrench, 
  Layers, 
  Compass, 
  Plane
} from 'lucide-react';
import { 
  PERSONAL_INFO, 
  CAREER_OBJECTIVE, 
  EDUCATION_DATA, 
  INTERNSHIPS, 
  FEATURED_PROJECTS, 
  SKILL_CATEGORIES, 
  ACHIEVEMENTS 
} from '../../data/aerospaceData.ts';
import profileImg from '../../assets/profile.jpeg';
import { generateResumePdf, downloadResumePdf } from '../../utils/generateResumePdf.ts';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textCV = `
${PERSONAL_INFO.name}
${PERSONAL_INFO.title}
Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone}
Location: ${PERSONAL_INFO.location}

CAREER OBJECTIVE:
${CAREER_OBJECTIVE}

EDUCATION:
${EDUCATION_DATA.map(edu => `• ${edu.degree} - ${edu.institution} (${edu.period})\n  Score: ${edu.score}\n  ${edu.description}`).join('\n\n')}

INTERNSHIP EXPERIENCE:
${INTERNSHIPS.map(exp => `• ${exp.title} - ${exp.organization} (${exp.period})\n  ${exp.description}\n  Highlights:\n${exp.highlights.map(h => `    - ${h}`).join('\n')}\n  Skills: ${exp.skills.join(', ')}`).join('\n\n')}

FEATURED PROJECTS:
${FEATURED_PROJECTS.map(p => `• ${p.title} (${p.categoryLabel})\n  ${p.summary}\n  Tech: ${p.technologies.join(', ')}`).join('\n\n')}

TECHNICAL SKILLS:
${SKILL_CATEGORIES.map(cat => `• ${cat.title}: ${cat.skills.map(s => s.name).join(', ')}`).join('\n')}

ACHIEVEMENTS:
${ACHIEVEMENTS.map(a => `• ${a.title}: ${a.description}`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(textCV);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#1e1e1f] border border-[#383838] rounded-3xl shadow-2xl p-5 sm:p-10 text-zinc-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Actions Bar */}
        <div className="flex items-center justify-between pb-5 border-b border-[#383838] mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse"></span>
            <span className="text-xs uppercase font-mono tracking-wider text-zinc-400">
              Curriculum Vitae · {PERSONAL_INFO.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => downloadResumePdf()}
              className="px-3.5 py-1.5 rounded-xl text-xs bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 flex items-center gap-1.5 font-bold transition-all shadow-md cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              title="Download official PDF file"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-xl text-xs bg-[#2b2b2c] hover:bg-[#383838] border border-[#383838] text-zinc-200 flex items-center gap-1.5 font-medium transition-colors cursor-pointer"
              title="Print using browser dialog"
            >
              <Printer className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              onClick={handleCopyText}
              className="px-3 py-1.5 rounded-xl text-xs font-medium bg-[#2b2b2c] hover:bg-[#383838] border border-[#383838] text-zinc-200 flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Copy plain text CV"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
            </button>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-xl bg-[#2b2b2c] border border-[#383838] flex items-center justify-center text-zinc-400 hover:text-white hover:border-amber-400/50 transition-colors ml-1 cursor-pointer"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Header Profile */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#383838] pb-6">
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm font-semibold text-amber-400">
              {PERSONAL_INFO.title}
            </p>

            <div className="flex flex-wrap gap-y-2 gap-x-5 text-xs text-zinc-300 pt-1 font-mono">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                {PERSONAL_INFO.email}
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                {PERSONAL_INFO.phone}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                {PERSONAL_INFO.location}
              </span>
            </div>
          </div>

          <div className="shrink-0 self-start sm:self-center">
            <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-amber-400/40 bg-zinc-900 shadow-md">
              <img
                src={profileImg || '/profile.jpeg'}
                alt={PERSONAL_INFO.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Career Objective */}
        <div className="mt-6">
          <h2 className="text-xs font-mono uppercase tracking-widest text-amber-400 pb-1 border-b border-[#383838] mb-2 flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5" />
            <span>Career Objective</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            {CAREER_OBJECTIVE}
          </p>
        </div>

        {/* Education */}
        <div className="mt-6">
          <h2 className="text-xs font-mono uppercase tracking-widest text-amber-400 pb-1 border-b border-[#383838] mb-3 flex items-center gap-1.5">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Education</span>
          </h2>
          <div className="space-y-4">
            {EDUCATION_DATA.map((edu, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-[#2b2b2c] border border-[#383838] space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                  <h3 className="font-bold text-white text-sm">
                    {edu.degree} {edu.specialization && `(${edu.specialization})`}
                  </h3>
                  <span className="font-mono text-amber-400">{edu.period}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-zinc-400">
                  <span>{edu.institution}, {edu.location}</span>
                  <span className="text-emerald-400 font-mono font-medium">{edu.score}</span>
                </div>
                <p className="text-xs text-zinc-300 pt-1">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Internships */}
        <div className="mt-6">
          <h2 className="text-xs font-mono uppercase tracking-widest text-amber-400 pb-1 border-b border-[#383838] mb-3 flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Internship Experience</span>
          </h2>
          <div className="space-y-4">
            {INTERNSHIPS.map((exp, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#2b2b2c] border border-[#383838] space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                  <h3 className="font-bold text-white text-sm">
                    {exp.title} <span className="text-amber-400 font-normal">@ {exp.organization}</span>
                  </h3>
                  <span className="font-mono text-zinc-400">{exp.period}</span>
                </div>
                <p className="text-xs text-zinc-300">
                  {exp.description}
                </p>
                <ul className="list-disc list-inside space-y-1 text-xs text-zinc-400 pl-1">
                  {exp.highlights.map((h, hIdx) => (
                    <li key={hIdx}>{h}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1 pt-1">
                  {exp.skills.map((s, sIdx) => (
                    <span key={sIdx} className="text-[10px] bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded border border-zinc-700 font-mono">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mt-6">
          <h2 className="text-xs font-mono uppercase tracking-widest text-amber-400 pb-1 border-b border-[#383838] mb-3 flex items-center gap-1.5">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Skills</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div key={idx} className="p-3 bg-[#2b2b2c] rounded-xl border border-[#383838]">
                <span className="font-bold text-amber-400 block mb-1.5">{cat.title}</span>
                <p className="text-zinc-300 leading-relaxed">
                  {cat.skills.map(s => s.name).join(' · ')}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements & Competitions */}
        <div className="mt-6">
          <div className="flex items-center justify-between pb-1 border-b border-[#383838] mb-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-amber-400 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5" />
              <span>Achievements & Competitions</span>
            </h2>
            <span className="text-[10px] font-mono text-zinc-400">
              State Level · 1st Place · Space Hackathon
            </span>
          </div>

          <div className="space-y-3">
            {ACHIEVEMENTS.map((a, idx) => (
              <div key={idx} className="p-3 bg-[#2b2b2c] rounded-xl border border-[#383838] space-y-1 text-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <strong className="text-white text-xs sm:text-sm">{a.title}</strong>
                    {a.level && (
                      <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/70 px-1.5 py-0.5 rounded border border-cyan-800">
                        {a.level}
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] font-mono text-amber-400 font-semibold shrink-0">
                    {a.badgeText}
                  </span>
                </div>

                {a.organization && (
                  <p className="text-[11px] text-zinc-400 font-mono">
                    {a.organization}
                  </p>
                )}

                <ul className="list-disc list-inside space-y-0.5 text-zinc-300 pl-1 text-[11px] sm:text-xs">
                  {a.points.map((pt, pIdx) => (
                    <li key={pIdx}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-[#383838] text-center text-xs text-zinc-500 font-mono">
          Madhankumar A · Aerospace Engineering × UAV × AI × Computer Vision × CAD × IoT
        </div>
      </div>
    </div>
  );
};
