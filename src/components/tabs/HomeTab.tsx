import React from 'react';
import { 
  Rocket, 
  Download, 
  Mail, 
  Plane, 
  Eye, 
  Box, 
  Cpu, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Compass,
  Award
} from 'lucide-react';
import { PERSONAL_INFO, SHORT_STATS, CAREER_OBJECTIVE, ACHIEVEMENT_HIGHLIGHTS } from '../../data/aerospaceData.ts';
import { NavTab } from '../../types/portfolio.ts';
import { generateResumePdf, downloadResumePdf } from '../../utils/generateResumePdf.ts';

interface HomeTabProps {
  onNavigate: (tab: NavTab) => void;
  onOpenResume: () => void;
}

export const HomeTab: React.FC<HomeTabProps> = ({ onNavigate, onOpenResume }) => {
  return (
    <article className="space-y-8 animate-fadeIn">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1e1e1f] via-[#242426] to-[#1a1a1b] border border-[#383838] p-6 sm:p-10 shadow-2xl">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        {/* Glowing ambient orb */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl">
          {/* Top Aerospace Identity Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-medium mb-4">
            <Plane className="w-3.5 h-3.5 -rotate-45" />
            <span>Aerospace Engineering Undergraduate · UAV Specialization</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
            {PERSONAL_INFO.name}
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal mb-6">
            Aerospace Engineering student passionate about <span className="text-amber-400 font-medium">UAVs</span>,{' '}
            <span className="text-amber-400 font-medium">Aircraft Design</span>,{' '}
            <span className="text-cyan-400 font-medium">CAD Modelling</span>,{' '}
            <span className="text-purple-400 font-medium">Artificial Intelligence</span>,{' '}
            <span className="text-emerald-400 font-medium">Computer Vision</span>,{' '}
            <span className="text-amber-300 font-medium">IoT</span> and Autonomous Systems.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
            <button
              onClick={() => onNavigate('projects')}
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-semibold text-sm flex items-center gap-2 shadow-lg shadow-amber-500/10 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <Rocket className="w-4 h-4" />
              <span>View My Projects</span>
            </button>

            <button
              onClick={() => downloadResumePdf()}
              className="px-5 py-3 rounded-xl bg-[#2b2b2c] hover:bg-[#333335] text-zinc-200 hover:text-white border border-[#383838] font-medium text-sm flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              title="Download official PDF resume file"
            >
              <Download className="w-4 h-4 text-amber-400" />
              <span>Download Resume (PDF)</span>
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-3 rounded-xl bg-transparent hover:bg-zinc-800/60 text-zinc-300 hover:text-amber-300 border border-zinc-700/80 font-medium text-sm flex items-center gap-2 transition-all cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Me</span>
            </button>
          </div>
        </div>
      </section>

      {/* Short Stats Grid */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold tracking-wider uppercase text-zinc-400 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Short Stats & Highlights</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {SHORT_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-[#1e1e1f] border border-[#383838] hover:border-amber-400/40 transition-colors flex flex-col justify-between group"
            >
              <span className="text-[11px] text-zinc-400 font-medium">
                {stat.label}
              </span>
              <span className="text-sm sm:text-base font-bold text-white mt-1 group-hover:text-amber-400 transition-colors">
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Key Achievements & Competitions Banner */}
      <section 
        onClick={() => onNavigate('achievements')}
        className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-[#1e1e1f] to-amber-500/5 border border-amber-500/30 hover:border-amber-400/60 transition-all cursor-pointer shadow-xl group"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-400" />
            <h3 className="text-xs font-mono font-bold tracking-wider text-amber-400 uppercase">
              Achievement & Competition Highlights
            </h3>
          </div>
          <span className="text-xs text-amber-400 group-hover:translate-x-1 transition-transform flex items-center gap-1 font-medium">
            Explore All Awards & Competitions <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {ACHIEVEMENT_HIGHLIGHTS.map((hl, idx) => (
            <span
              key={idx}
              className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-[#2b2b2c] border border-amber-400/20 text-zinc-200 group-hover:border-amber-400/40 transition-colors flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              {hl}
            </span>
          ))}
        </div>
      </section>

      {/* Career Objective Banner */}
      <section className="p-6 rounded-2xl bg-[#1e1e1f] border border-[#383838] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
            <Compass className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide uppercase text-amber-400">
              Career Objective
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 mt-1 leading-relaxed max-w-2xl">
              {CAREER_OBJECTIVE}
            </p>
          </div>
        </div>
        <button
          onClick={() => onNavigate('about')}
          className="shrink-0 px-4 py-2 rounded-xl text-xs font-semibold bg-[#2b2b2c] hover:bg-amber-400 hover:text-zinc-950 text-zinc-200 border border-[#383838] flex items-center gap-1.5 transition-all cursor-pointer"
        >
          <span>Read Full Story</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </section>

      {/* Core Engineering Pillars */}
      <section>
        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <span>Core Engineering Disciplines</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Pillar 1: UAV & Aerodynamics */}
          <div 
            onClick={() => onNavigate('projects')}
            className="p-5 rounded-2xl bg-[#1e1e1f] border border-[#383838] hover:border-amber-400/40 transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                <Plane className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono text-zinc-400 group-hover:text-amber-400 flex items-center gap-1">
                Explore <ArrowRight className="w-3 h-3" />
              </span>
            </div>
            <h3 className="text-base font-semibold text-white group-hover:text-amber-400 transition-colors">
              UAV Systems & Aeromodel Design
            </h3>
            <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
              Fixed-wing aircraft and multirotor prototyping, airframe fabrication, aerodynamic stability analysis, and real-world flight testing.
            </p>
          </div>

          {/* Pillar 2: CAD & 3D Drafting */}
          <div 
            onClick={() => onNavigate('skills')}
            className="p-5 rounded-2xl bg-[#1e1e1f] border border-[#383838] hover:border-amber-400/40 transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                <Box className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono text-zinc-400 group-hover:text-amber-400 flex items-center gap-1">
                View CAD Stack <ArrowRight className="w-3 h-3" />
              </span>
            </div>
            <h3 className="text-base font-semibold text-white group-hover:text-amber-400 transition-colors">
              CAD & Engineering Drafting
            </h3>
            <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
              CATIA V5 and AutoCAD 2D/3D precision drafting, GD&T tolerancing, structural aerospace drawings, and rapid 3D printing prototyping.
            </p>
          </div>

          {/* Pillar 3: AI & Computer Vision */}
          <div 
            onClick={() => onNavigate('ai_vision')}
            className="p-5 rounded-2xl bg-[#1e1e1f] border border-[#383838] hover:border-amber-400/40 transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-purple-400/10 border border-purple-400/30 flex items-center justify-center text-purple-400">
                <Eye className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono text-zinc-400 group-hover:text-amber-400 flex items-center gap-1">
                9 CV Projects <ArrowRight className="w-3 h-3" />
              </span>
            </div>
            <h3 className="text-base font-semibold text-white group-hover:text-amber-400 transition-colors">
              AI & Computer Vision
            </h3>
            <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
              Single-pass drone 3D reconstruction, object detection, crowd analysis, driver safety monitoring, and camera-based Air Canvas drawing.
            </p>
          </div>

          {/* Pillar 4: Embedded & IoT */}
          <div 
            onClick={() => onNavigate('projects')}
            className="p-5 rounded-2xl bg-[#1e1e1f] border border-[#383838] hover:border-amber-400/40 transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono text-zinc-400 group-hover:text-amber-400 flex items-center gap-1">
                Inspect Hardware <ArrowRight className="w-3 h-3" />
              </span>
            </div>
            <h3 className="text-base font-semibold text-white group-hover:text-amber-400 transition-colors">
              IoT, Microcontrollers & Robotics
            </h3>
            <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
              ESP32 & Arduino automation, MEMS acoustic noise sensing, Wi-Fi camera surveillance rovers, and obstacle-avoiding mobile robotics.
            </p>
          </div>
        </div>
      </section>

      {/* Fast Trajectory Banner */}
      <section className="p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-zinc-900 to-zinc-900 border border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <div className="flex items-center gap-2 justify-center sm:justify-start text-xs font-semibold text-amber-400 uppercase tracking-wider">
            <Award className="w-4 h-4" />
            <span>Ready for Aerospace & UAV Engineering Collaborations</span>
          </div>
          <p className="text-xs text-zinc-300">
            Open for internships, research roles, and cutting-edge drone/AI engineering projects.
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => onNavigate('experience')}
            className="px-4 py-2 rounded-xl text-xs font-medium bg-[#2b2b2c] hover:bg-zinc-700 text-zinc-200 border border-[#383838] transition-colors cursor-pointer"
          >
            Internship History
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-amber-400 text-zinc-950 hover:bg-amber-300 transition-colors cursor-pointer"
          >
            Get In Touch
          </button>
        </div>
      </section>
    </article>
  );
};
