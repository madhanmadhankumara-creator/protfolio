import React from 'react';
import { 
  Plane, 
  Box, 
  Eye, 
  Cpu, 
  Compass, 
  CheckCircle2, 
  Layers, 
  Target, 
  Lightbulb, 
  Wrench,
  Users,
  Clock,
  Sparkles
} from 'lucide-react';
import { 
  ABOUT_TEXTS, 
  CAREER_OBJECTIVE, 
  AREAS_OF_INTEREST, 
  PROFESSIONAL_COMPETENCIES, 
  SERVICES 
} from '../../data/aerospaceData.ts';

export const AboutTab: React.FC = () => {
  return (
    <article className="space-y-8 animate-fadeIn">
      {/* Title */}
      <header className="border-b border-[#383838] pb-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
          <span>About Me</span>
          <span className="h-2 w-2 rounded-full bg-amber-400"></span>
        </h2>
        <p className="text-xs text-zinc-400 mt-1">
          Aerospace Engineering Undergraduate · UAV Specialization · Periyar Maniammai Institute of Science & Technology
        </p>
      </header>

      {/* Main Bio Paragraphs */}
      <section className="bg-[#1e1e1f] border border-[#383838] rounded-2xl p-6 sm:p-7 space-y-4 shadow-xl">
        {ABOUT_TEXTS.map((paragraph, index) => (
          <p key={index} className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </section>

      {/* Career Objective */}
      <section className="bg-gradient-to-r from-amber-500/10 via-[#1e1e1f] to-[#1e1e1f] border border-amber-500/30 rounded-2xl p-6 shadow-xl relative overflow-hidden">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-400 shrink-0">
            <Compass className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
              <span>Career Objective</span>
            </h3>
            <p className="text-sm sm:text-base text-zinc-200 mt-2 leading-relaxed font-medium">
              "{CAREER_OBJECTIVE}"
            </p>
          </div>
        </div>
      </section>

      {/* What I'm Doing (Services / Focus Areas) */}
      <section>
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <span>What I'm Doing</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SERVICES.map((service) => {
            const getIcon = () => {
              switch (service.icon) {
                case 'Plane':
                  return <Plane className="w-5 h-5 text-amber-400" />;
                case 'Box':
                  return <Box className="w-5 h-5 text-cyan-400" />;
                case 'Eye':
                  return <Eye className="w-5 h-5 text-purple-400" />;
                case 'Cpu':
                  return <Cpu className="w-5 h-5 text-emerald-400" />;
                default:
                  return <Plane className="w-5 h-5 text-amber-400" />;
              }
            };

            return (
              <div
                key={service.id}
                className="p-5 rounded-2xl bg-[#1e1e1f] border border-[#383838] hover:border-amber-400/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#2b2b2c] border border-[#383838] flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                      {getIcon()}
                    </div>
                    <h4 className="text-sm font-semibold text-white group-hover:text-amber-400 transition-colors">
                      {service.title}
                    </h4>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-[#2b2b2c]">
                  {service.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md text-[10px] bg-[#2b2b2c] text-zinc-300 border border-[#383838]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Areas of Interest */}
      <section>
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <Target className="w-5 h-5 text-amber-400" />
          <span>Areas of Interest</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Aerospace */}
          <div className="p-5 rounded-2xl bg-[#1e1e1f] border border-[#383838]">
            <div className="flex items-center gap-2 mb-3 text-amber-400 font-semibold text-sm">
              <Plane className="w-4 h-4" />
              <h4>Aerospace</h4>
            </div>
            <ul className="space-y-2 text-xs text-zinc-300">
              {AREAS_OF_INTEREST.aerospace.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology */}
          <div className="p-5 rounded-2xl bg-[#1e1e1f] border border-[#383838]">
            <div className="flex items-center gap-2 mb-3 text-purple-400 font-semibold text-sm">
              <Eye className="w-4 h-4" />
              <h4>Technology</h4>
            </div>
            <ul className="space-y-2 text-xs text-zinc-300">
              {AREAS_OF_INTEREST.technology.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Engineering */}
          <div className="p-5 rounded-2xl bg-[#1e1e1f] border border-[#383838]">
            <div className="flex items-center gap-2 mb-3 text-cyan-400 font-semibold text-sm">
              <Box className="w-4 h-4" />
              <h4>Engineering</h4>
            </div>
            <ul className="space-y-2 text-xs text-zinc-300">
              {AREAS_OF_INTEREST.engineering.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Professional Competencies */}
      <section>
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-400" />
          <span>Professional Competencies</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {PROFESSIONAL_COMPETENCIES.map((comp, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-[#1e1e1f] border border-[#383838] flex flex-col justify-between"
            >
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{comp.name}</span>
              </div>
              <p className="text-[11px] text-zinc-400 mt-1.5">
                {comp.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
};
