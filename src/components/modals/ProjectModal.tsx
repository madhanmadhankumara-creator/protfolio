import React from 'react';
import { ProjectItem } from '../../types/portfolio.ts';
import { 
  X, 
  CheckCircle2, 
  Wrench, 
  Cpu, 
  Layers, 
  Plane, 
  Target, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-[#1e1e1f] border border-[#383838] rounded-3xl shadow-2xl p-5 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-xl bg-[#2b2b2c] border border-[#383838] flex items-center justify-center text-zinc-400 hover:text-white hover:border-amber-400/50 transition-colors z-10 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Tag & Title */}
        <div className="pr-10">
          <div className="flex items-center gap-2 text-xs text-amber-400 font-mono tracking-wider mb-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span>{project.categoryLabel.toUpperCase()} · PROJECT BRIEF</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {project.title}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Badge & Status Strip */}
        <div className="flex items-center gap-2 mt-4">
          <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-amber-400/10 text-amber-400 border border-amber-400/30">
            {project.badge}
          </span>
          {project.status && (
            <span className="px-3 py-1 rounded-lg text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              {project.status}
            </span>
          )}
        </div>

        {/* Technical Overview */}
        <div className="mt-6 space-y-2 bg-[#2b2b2c]/60 border border-[#383838] rounded-2xl p-4 sm:p-5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" />
            <span>Project Overview & Concept</span>
          </h3>
          <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">
            {project.fullDescription}
          </p>
        </div>

        {/* Areas / Features */}
        {project.areas && project.areas.length > 0 && (
          <div className="mt-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2.5 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-amber-400" />
              <span>Engineering Domains & Subsystems</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.areas.map((area, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-[#2b2b2c] border border-[#383838] text-xs text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Features if specified */}
        {project.features && project.features.length > 0 && (
          <div className="mt-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2.5 flex items-center gap-1.5">
              <Target className="w-4 h-4 text-cyan-400" />
              <span>Core Features & Modules</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-[#2b2b2c] border border-[#383838] text-xs text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Hardware components if present */}
        {project.hardware && project.hardware.length > 0 && (
          <div className="mt-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2.5 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-emerald-400" />
              <span>Embedded Hardware & Components</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.hardware.map((hw, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-[#2b2b2c] border border-[#383838] rounded-lg text-xs font-mono text-emerald-300"
                >
                  {hw}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Key Highlights */}
        <div className="mt-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2.5 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span>Key Engineering Highlights</span>
          </h3>
          <ul className="space-y-2">
            {project.keyHighlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                <ArrowRight className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-1" />
                <span className="leading-relaxed">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Applications */}
        {project.applications && project.applications.length > 0 && (
          <div className="mt-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-1.5">
              <Plane className="w-4 h-4 text-amber-400" />
              <span>Real-World Applications</span>
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.applications.map((app, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-amber-400/10 border border-amber-400/20 text-amber-300 rounded-lg text-xs"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Technologies Stack */}
        <div className="mt-6 pt-5 border-t border-[#383838]">
          <h3 className="text-xs font-semibold uppercase text-zinc-400 tracking-wider mb-2 flex items-center gap-1.5">
            <Wrench className="w-3.5 h-3.5 text-zinc-400" />
            <span>Tools, Libraries & Technologies</span>
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tool, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 bg-[#2b2b2c] border border-[#383838] rounded-lg text-xs font-mono text-zinc-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
