import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Layers, 
  Plane, 
  Box, 
  Cpu, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { INTERNSHIPS } from '../../data/aerospaceData.ts';

export const ExperienceTab: React.FC = () => {
  return (
    <article className="space-y-8 animate-fadeIn">
      {/* Header */}
      <header className="border-b border-[#383838] pb-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
          <span>Internship Experience</span>
          <span className="h-2 w-2 rounded-full bg-amber-400"></span>
        </h2>
        <p className="text-xs text-zinc-400 mt-1">
          Hands-on aerospace training, CAD drafting, aeromodel flight engineering & embedded systems
        </p>
      </header>

      {/* Overview Banner */}
      <section className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-[#1e1e1f] to-[#1e1e1f] border border-amber-500/30">
        <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>Industry & Lab Trajectory</span>
        </div>
        <p className="text-xs text-zinc-300 leading-relaxed">
          Applied academic theory in real-world aerospace, CAD, and electronics environments — spanning UAV pilot training, aeromodel structural fabrication, precision blueprint generation with GD&T, and embedded IoT automation.
        </p>
      </section>

      {/* Experience Timeline */}
      <div className="relative pl-6 sm:pl-8 border-l border-[#383838] space-y-10 ml-2 sm:ml-4">
        {INTERNSHIPS.map((internship, index) => {
          const getDomainBadge = () => {
            if (internship.organization.includes('Vimanna')) {
              return (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-amber-400/15 text-amber-400 border border-amber-400/30">
                  <Plane className="w-3 h-3" /> Aerospace & Aeromodels
                </span>
              );
            }
            if (internship.organization.includes('CAD')) {
              return (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-cyan-400/15 text-cyan-400 border border-cyan-400/30">
                  <Box className="w-3 h-3" /> CAD & Blueprint Drafting
                </span>
              );
            }
            return (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-emerald-400/15 text-emerald-400 border border-emerald-400/30">
                <Cpu className="w-3 h-3" /> IoT & Embedded Automation
              </span>
            );
          };

          return (
            <div key={index} className="relative group">
              {/* Timeline indicator bullet */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#1e1e1f] border-2 border-amber-400 flex items-center justify-center group-hover:scale-125 transition-transform shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              </div>

              {/* Card Container */}
              <div className="p-6 rounded-2xl bg-[#1e1e1f] border border-[#383838] hover:border-amber-400/40 transition-all shadow-xl space-y-4">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                        {internship.title}
                      </h3>
                      <span className="text-sm font-semibold text-amber-400">
                        @ {internship.organization}
                      </span>
                    </div>
                    {internship.domain && (
                      <p className="text-xs text-zinc-400 font-mono">
                        Domain: {internship.domain}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col sm:items-end gap-1.5">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 bg-[#2b2b2c] px-3 py-1 rounded-lg border border-[#383838] w-fit">
                      <Calendar className="w-3.5 h-3.5 text-amber-400" />
                      {internship.period}
                    </span>
                    {getDomainBadge()}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {internship.description}
                </p>

                {/* Key Work Bullet Highlights */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                    Key Work & Responsibilities
                  </h4>
                  <ul className="space-y-2 text-xs text-zinc-300">
                    {internship.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills used */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#2b2b2c]">
                  {internship.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] bg-[#2b2b2c] text-zinc-300 border border-[#383838] font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
};
