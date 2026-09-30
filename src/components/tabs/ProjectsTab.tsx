import React, { useState } from 'react';
import { 
  Rocket, 
  Plane, 
  Layers, 
  Eye, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { FEATURED_PROJECTS } from '../../data/aerospaceData.ts';
import { ProjectItem, ProjectFilter } from '../../types/portfolio.ts';

interface ProjectsTabProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsTab: React.FC<ProjectsTabProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('all');

  const filterButtons: { id: ProjectFilter; label: string; icon: React.ReactNode }[] = [
    { id: 'all', label: 'All Projects', icon: <Rocket className="w-3.5 h-3.5" /> },
    { id: 'uav_aero', label: 'UAV & Aerospace', icon: <Plane className="w-3.5 h-3.5" /> },
    { id: 'ai_cv', label: 'AI & Computer Vision', icon: <Eye className="w-3.5 h-3.5" /> },
    { id: 'cad', label: 'CAD & 3D Systems', icon: <Layers className="w-3.5 h-3.5" /> },
    { id: 'iot_robotics', label: 'IoT & Robotics', icon: <Cpu className="w-3.5 h-3.5" /> },
  ];

  const filteredProjects = FEATURED_PROJECTS.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  return (
    <article className="space-y-8 animate-fadeIn">
      {/* Header */}
      <header className="border-b border-[#383838] pb-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
          <span>Featured Projects</span>
          <span className="h-2 w-2 rounded-full bg-amber-400"></span>
        </h2>
        <p className="text-xs text-zinc-400 mt-1">
          UAV Airframes, Single-Pass 3D Vision, 2D-to-3D CAD Reconstruction, Solar AI & IoT Robotics
        </p>
      </header>

      {/* Filter Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
        {filterButtons.map((btn) => {
          const isActive = activeFilter === btn.id;
          return (
            <button
              key={btn.id}
              onClick={() => setActiveFilter(btn.id)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium transition-all shrink-0 cursor-pointer ${
                isActive
                  ? 'bg-amber-400 text-zinc-950 font-semibold shadow-md'
                  : 'bg-[#1e1e1f] text-zinc-400 hover:text-white border border-[#383838]'
              }`}
            >
              <span className={isActive ? 'text-zinc-950' : 'text-zinc-400'}>
                {btn.icon}
              </span>
              <span>{btn.label}</span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => onSelectProject(project)}
            className="p-6 rounded-2xl bg-[#1e1e1f] border border-[#383838] hover:border-amber-400/50 transition-all flex flex-col justify-between group cursor-pointer shadow-xl relative overflow-hidden"
          >
            {/* Ambient hover glow */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/15 transition-all pointer-events-none"></div>

            <div>
              {/* Category & Badge */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-amber-400/10 text-amber-400 border border-amber-400/20 font-mono">
                  {project.categoryLabel}
                </span>
                <span className="text-[10px] text-zinc-400 font-mono">
                  {project.badge}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
                {project.title}
              </h3>
              <p className="text-xs text-zinc-400 mt-1 line-clamp-1">
                {project.subtitle}
              </p>

              {/* Summary */}
              <p className="text-xs text-zinc-300 mt-3 leading-relaxed">
                {project.summary}
              </p>

              {/* Key Bullet Preview */}
              {project.keyHighlights && project.keyHighlights.length > 0 && (
                <div className="mt-3.5 space-y-1.5 pt-3 border-t border-[#2b2b2c]">
                  <p className="text-[11px] text-zinc-400 font-mono uppercase tracking-wider">
                    Core Capability:
                  </p>
                  <div className="flex items-start gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span className="line-clamp-2">{project.keyHighlights[0]}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Tech stack & Action */}
            <div className="mt-5 pt-3.5 border-t border-[#2b2b2c] flex flex-col gap-3">
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.slice(0, 4).map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded text-[10px] bg-[#2b2b2c] text-zinc-300 border border-[#383838] font-mono"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="px-2 py-0.5 rounded text-[10px] bg-[#2b2b2c] text-amber-400 border border-[#383838] font-mono">
                    +{project.technologies.length - 4} more
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between text-xs text-amber-400 font-semibold group-hover:text-amber-300">
                <span>Inspect Technical Brief</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};
