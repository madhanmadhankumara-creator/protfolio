import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award, 
  BookOpen, 
  CheckCircle2, 
  Plane,
  Sparkles
} from 'lucide-react';
import { EDUCATION_DATA } from '../../data/aerospaceData.ts';

export const EducationTab: React.FC = () => {
  return (
    <article className="space-y-8 animate-fadeIn">
      {/* Header */}
      <header className="border-b border-[#383838] pb-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
          <span>Education</span>
          <span className="h-2 w-2 rounded-full bg-amber-400"></span>
        </h2>
        <p className="text-xs text-zinc-400 mt-1">
          Academic Foundations in Aerospace Engineering, UAV Specialization & Physical Sciences
        </p>
      </header>

      {/* Degree Cards */}
      <div className="space-y-6">
        {EDUCATION_DATA.map((edu, idx) => (
          <div
            key={idx}
            className="p-6 sm:p-7 rounded-3xl bg-[#1e1e1f] border border-[#383838] hover:border-amber-400/40 transition-all shadow-xl space-y-4"
          >
            {/* Top row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {edu.degree}
                  </h3>
                  <div className="flex items-center gap-2 flex-wrap mt-0.5">
                    <span className="text-sm font-semibold text-amber-400">
                      {edu.institution}
                    </span>
                    <span className="text-xs text-zinc-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-zinc-500" />
                      {edu.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Score Badge & Period */}
              <div className="flex flex-col sm:items-end gap-1.5 self-start sm:self-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-mono font-bold bg-amber-400/15 text-amber-300 border border-amber-400/30">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  {edu.score}
                </span>
                <span className="text-xs text-zinc-400 font-mono flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-zinc-500" />
                  {edu.period}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {edu.description}
            </p>

            {/* Academic Highlights */}
            {edu.highlights && edu.highlights.length > 0 && (
              <div className="space-y-2 pt-3 border-t border-[#2b2b2c]">
                <h4 className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                  Curriculum Highlights & Hands-on Work
                </h4>
                <ul className="space-y-1.5 text-xs text-zinc-300">
                  {edu.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </article>
  );
};
