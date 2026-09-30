import React, { useState } from 'react';
import { 
  Trophy, 
  Award, 
  Rocket, 
  Code2, 
  Plane, 
  Layers, 
  Users, 
  Sparkles, 
  Star, 
  CheckCircle2, 
  Play, 
  ExternalLink,
  Shield,
  ChevronRight,
  Flame,
  Globe2
} from 'lucide-react';
import { ACHIEVEMENTS, ACHIEVEMENT_HIGHLIGHTS } from '../../data/aerospaceData.ts';
import { AstraNovaGameModal } from '../modals/AstraNovaGameModal.tsx';

export const AchievementsTab: React.FC = () => {
  const [isGameModalOpen, setIsGameModalOpen] = useState<boolean>(false);

  const renderIcon = (type: string) => {
    switch (type) {
      case 'space':
        return <Globe2 className="w-5 h-5 text-cyan-400" />;
      case 'trophy':
        return <Trophy className="w-5 h-5 text-amber-400 fill-amber-400/20" />;
      case 'rocket':
        return <Rocket className="w-5 h-5 text-orange-400" />;
      case 'code':
        return <Code2 className="w-5 h-5 text-purple-400" />;
      case 'plane':
        return <Plane className="w-5 h-5 text-emerald-400" />;
      case 'cad':
        return <Layers className="w-5 h-5 text-sky-400" />;
      case 'users':
        return <Users className="w-5 h-5 text-pink-400" />;
      default:
        return <Award className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <article className="space-y-8 animate-fadeIn">
      {/* Header */}
      <header className="border-b border-[#383838] pb-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
          <span>Achievements & Competitions</span>
          <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse"></span>
        </h2>
        <p className="text-xs text-zinc-400 mt-1">
          State-Level Congress, Hackathons, 1st Place Competitions, Aerospace Aeromodel Flight & CAD Milestones
        </p>
      </header>

      {/* Achievement Highlights Marquee / Ticker Bar */}
      <section className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-[#1e1e1f] to-amber-500/5 border border-amber-500/30 shadow-xl">
        <div className="flex items-center gap-2 mb-2.5">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <h3 className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
            Achievement Highlights
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {ACHIEVEMENT_HIGHLIGHTS.map((hl, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#2b2b2c] border border-amber-400/20 text-xs font-medium text-zinc-200 hover:border-amber-400/50 hover:text-amber-300 transition-colors shadow-sm"
            >
              <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
              <span>{hl}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Flagship Highlight Cards: YASSC 2026 & Dream2Reality 1st Place */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* YASSC 2026 Card */}
        <div className="p-6 rounded-3xl bg-gradient-to-br from-[#1c2237] via-[#1a1b24] to-[#16161a] border-2 border-cyan-500/40 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-44 h-44 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col h-full justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-cyan-400/20 text-cyan-300 border border-cyan-400/40 font-mono">
                  <Globe2 className="w-3.5 h-3.5 text-cyan-400" />
                  Regional Level → State Level
                </span>
                <span className="text-[10px] font-mono text-zinc-400 bg-black/40 px-2 py-0.5 rounded border border-zinc-700">
                  YASSC 2026
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-black text-white group-hover:text-cyan-300 transition-colors">
                Youth Astronomy & Space Science Congress (YASSC) 2026
              </h3>

              <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
                Selected for the prestigious <strong>State-Level Congress</strong> through competitive regional rounds. Participated in astronomy and space-science technical sessions and project presentations.
              </p>

              {/* Game Feature Callout */}
              <div className="mt-3.5 p-3.5 rounded-2xl bg-cyan-950/40 border border-cyan-500/30">
                <div className="flex items-center gap-2 text-xs font-bold text-cyan-300 mb-1">
                  <Rocket className="w-4 h-4 text-cyan-400" />
                  <span>ASTRA NOVA: MISSION HORIZON</span>
                </div>
                <p className="text-[11px] text-zinc-300">
                  Interactive aerospace-themed game developed for the YASSC Game Competition, simulating space hazard evasion and orbital insertion.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setIsGameModalOpen(true)}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-zinc-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-zinc-950" />
                <span>Play ASTRA NOVA: MISSION HORIZON (Game Demo)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Dream2Reality 1st Place Card */}
        <div className="p-6 rounded-3xl bg-gradient-to-br from-[#2a2415] via-[#1f1e1b] to-[#18181a] border-2 border-amber-500/40 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-44 h-44 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col h-full justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-amber-400/20 text-amber-300 border border-amber-400/40 font-mono">
                  <Trophy className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  1st Place – Institutional Level
                </span>
                <span className="text-[10px] font-mono text-amber-400/90 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/30">
                  Advanced to Regional Level
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-black text-white group-hover:text-amber-300 transition-colors">
                Dream2Reality – Idea Competition
              </h3>

              <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
                Secured <strong>1st Place</strong> at the Institutional Level and advanced to the Regional-Level Competition for innovative aerospace engineering conceptualization.
              </p>

              {/* Organization & CSR Callout */}
              <div className="mt-3.5 p-3 rounded-2xl bg-[#2b2b2c] border border-[#383838] space-y-1.5 text-xs">
                <span className="text-[10px] font-mono uppercase text-zinc-400 block">
                  Organizing Bodies & CSR Partners:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-zinc-800 text-amber-300 font-mono text-[10px] border border-zinc-700">
                    PSG-STEP Coimbatore
                  </span>
                  <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-200 font-mono text-[10px] border border-zinc-700">
                    Atlas Copco
                  </span>
                  <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-200 font-mono text-[10px] border border-zinc-700">
                    Trident
                  </span>
                  <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 font-mono text-[10px] border border-zinc-700">
                    Dept of Aerospace Engineering & Periyar TBI, PMIST
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Selected for Regional Level Presentation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive List of All Competitions & Achievements */}
      <section className="space-y-4">
        <h3 className="text-sm font-semibold tracking-wider uppercase text-zinc-400 flex items-center gap-2">
          <Award className="w-4 h-4 text-amber-400" />
          <span>Detailed Competitions & Technical Accomplishments</span>
        </h3>

        <div className="grid grid-cols-1 gap-4">
          {ACHIEVEMENTS.map((item) => {
            return (
              <div
                key={item.id}
                className="p-5 sm:p-6 rounded-2xl bg-[#1e1e1f] border border-[#383838] hover:border-amber-400/40 transition-all shadow-xl group"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  {/* Left: Icon and Title Info */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-[#2b2b2c] border border-[#383838] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-md">
                      {renderIcon(item.iconType)}
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                          {item.title}
                        </h4>
                        {item.level && (
                          <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800">
                            {item.level}
                          </span>
                        )}
                      </div>

                      {item.subtitle && (
                        <p className="text-xs text-amber-400/90 font-medium">
                          {item.subtitle}
                        </p>
                      )}

                      {item.organization && (
                        <p className="text-[11px] font-mono text-zinc-400">
                          {item.organization}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Right: Badge */}
                  <div className="shrink-0 self-start sm:self-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-400/10 text-amber-400 border border-amber-400/30 font-mono">
                      <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                      <span>{item.badgeText}</span>
                    </span>
                  </div>
                </div>

                {/* Key Points Bullet List */}
                <div className="mt-4 pt-3 border-t border-[#2b2b2c]">
                  <ul className="space-y-2">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Interactive Button for YASSC Game if applicable */}
                  {item.hasGameDemo && (
                    <div className="mt-3.5">
                      <button
                        onClick={() => setIsGameModalOpen(true)}
                        className="px-4 py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer"
                      >
                        <Play className="w-3.5 h-3.5 fill-cyan-400 text-cyan-400" />
                        <span>Launch Astra Nova Game Simulator</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Astra Nova Game Modal */}
      <AstraNovaGameModal
        isOpen={isGameModalOpen}
        onClose={() => setIsGameModalOpen(false)}
      />
    </article>
  );
};
