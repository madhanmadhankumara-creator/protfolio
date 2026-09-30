import React from 'react';
import { 
  FileText, 
  Download, 
  Printer, 
  ExternalLink, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Wrench, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { 
  PERSONAL_INFO, 
  CAREER_OBJECTIVE, 
  EDUCATION_DATA, 
  INTERNSHIPS, 
  ACHIEVEMENTS 
} from '../../data/aerospaceData.ts';
import { generateResumePdf, downloadResumePdf } from '../../utils/generateResumePdf.ts';

interface ResumeTabProps {
  onOpenResumeModal: () => void;
}

export const ResumeTab: React.FC<ResumeTabProps> = ({ onOpenResumeModal }) => {
  return (
    <article className="space-y-8 animate-fadeIn">
      {/* Header */}
      <header className="border-b border-[#383838] pb-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
          <span>Resume & Technical Dossier</span>
          <span className="h-2 w-2 rounded-full bg-amber-400"></span>
        </h2>
        <p className="text-xs text-zinc-400 mt-1">
          Full curriculum vitae covering education, aerospace internships, CAD drafting & AI/IoT projects
        </p>
      </header>

      {/* Prominent Resume Callout Banner (From Prompt Section 19) */}
      <section className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-amber-500/15 via-[#1e1e1f] to-[#1e1e1f] border border-amber-500/30 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-400/20 text-amber-300 border border-amber-400/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Want to know more about my work?</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Explore My Complete Engineering Resume
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Explore my resume to learn more about my education, internships, technical skills, projects and engineering experience.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => downloadResumePdf()}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-bold text-sm flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={onOpenResumeModal}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#2b2b2c] hover:bg-[#383838] border border-[#383838] text-zinc-200 hover:text-white font-medium text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              <span>View Dossier</span>
            </button>
          </div>
        </div>
      </section>

      {/* Structured CV Preview Cards */}
      <div className="space-y-6">
        {/* Education Preview */}
        <section className="p-6 rounded-2xl bg-[#1e1e1f] border border-[#383838] space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-[#2b2b2c]">
            <GraduationCap className="w-5 h-5 text-amber-400" />
            <h3 className="text-base font-bold text-white uppercase tracking-wider text-sm">
              Education
            </h3>
          </div>
          <div className="space-y-3">
            {EDUCATION_DATA.map((edu, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1">
                <div>
                  <span className="font-bold text-white text-sm block">{edu.degree}</span>
                  <span className="text-zinc-400">{edu.institution}, {edu.location}</span>
                </div>
                <div className="sm:text-right">
                  <span className="text-amber-400 font-mono font-semibold block">{edu.score}</span>
                  <span className="text-zinc-500 font-mono">{edu.period}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Preview */}
        <section className="p-6 rounded-2xl bg-[#1e1e1f] border border-[#383838] space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-[#2b2b2c]">
            <Briefcase className="w-5 h-5 text-amber-400" />
            <h3 className="text-base font-bold text-white uppercase tracking-wider text-sm">
              Internships
            </h3>
          </div>
          <div className="space-y-4">
            {INTERNSHIPS.map((exp, idx) => (
              <div key={idx} className="space-y-1 text-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-white">
                  <span>{exp.title} — {exp.organization}</span>
                  <span className="font-mono text-zinc-400 font-normal">{exp.period}</span>
                </div>
                <p className="text-zinc-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Achievements & Competitions */}
        <section className="p-6 rounded-2xl bg-[#1e1e1f] border border-[#383838] space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#2b2b2c]">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              <h3 className="text-base font-bold text-white uppercase tracking-wider text-sm">
                Achievements & Competitions
              </h3>
            </div>
            <span className="text-[11px] font-mono text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/30">
              State Level · 1st Place · Hackathons
            </span>
          </div>

          <div className="space-y-4">
            {ACHIEVEMENTS.map((a, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#2b2b2c] border border-[#383838] space-y-2 text-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-white text-sm">{a.title}</span>
                    {a.level && (
                      <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800">
                        {a.level}
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] font-mono text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/30 shrink-0 self-start sm:self-center">
                    {a.badgeText}
                  </span>
                </div>

                {a.organization && (
                  <p className="text-[11px] text-zinc-400 font-mono">
                    {a.organization}
                  </p>
                )}

                <ul className="space-y-1 pl-1 text-zinc-300">
                  {a.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
};
