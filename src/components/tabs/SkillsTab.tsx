import React, { useState } from 'react';
import { 
  Wrench, 
  Search, 
  Plane, 
  Box, 
  Code, 
  Eye, 
  Cpu, 
  FileSpreadsheet, 
  CheckCircle,
  Sparkles
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../../data/aerospaceData.ts';

export const SkillsTab: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredCategories = SKILL_CATEGORIES.map((category) => {
    const matchingSkills = category.skills.filter((skill) =>
      skill.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return {
      ...category,
      skills: matchingSkills
    };
  }).filter((category) => {
    if (selectedCategory !== 'all' && category.title !== selectedCategory) {
      return false;
    }
    return category.skills.length > 0;
  });

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Plane':
        return <Plane className="w-5 h-5 text-amber-400" />;
      case 'Box':
        return <Box className="w-5 h-5 text-cyan-400" />;
      case 'Code':
        return <Code className="w-5 h-5 text-purple-400" />;
      case 'Eye':
        return <Eye className="w-5 h-5 text-pink-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      default:
        return <Wrench className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <article className="space-y-8 animate-fadeIn">
      {/* Header */}
      <header className="border-b border-[#383838] pb-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
          <span>Technical Skills</span>
          <span className="h-2 w-2 rounded-full bg-amber-400"></span>
        </h2>
        <p className="text-xs text-zinc-400 mt-1">
          Aerospace & UAV Engineering, Parametric CAD, AI/Vision Pipelines & Embedded IoT Hardware
        </p>
      </header>

      {/* Flagship Skills Summary Banner */}
      <section className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-[#1e1e1f] to-[#1e1e1f] border border-amber-500/30">
        <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>Core Engineering Stack</span>
        </div>
        <p className="text-xs text-zinc-300 leading-relaxed">
          Primary competencies include <span className="text-amber-400 font-semibold">CATIA V5</span>,{' '}
          <span className="text-cyan-400 font-semibold">AutoCAD</span>,{' '}
          <span className="text-white font-semibold">Ansys (FEA/CFD)</span>,{' '}
          <span className="text-purple-400 font-semibold">Python</span>,{' '}
          <span className="text-white font-semibold">C</span>,{' '}
          <span className="text-amber-400 font-semibold">MATLAB & Simulink</span>,{' '}
          <span className="text-emerald-400 font-semibold">ESP32 & Arduino</span>,{' '}
          and <span className="text-pink-400 font-semibold">Multirotor / Fixed-Wing Aeromodel Prototyping & Flight Testing</span>.
        </p>
      </section>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 sm:pb-0">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium shrink-0 transition-colors cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-amber-400 text-zinc-950 font-semibold'
                : 'bg-[#1e1e1f] text-zinc-400 hover:text-white border border-[#383838]'
            }`}
          >
            All Disciplines
          </button>
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat.title)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium shrink-0 transition-colors cursor-pointer ${
                selectedCategory === cat.title
                  ? 'bg-amber-400 text-zinc-950 font-semibold'
                  : 'bg-[#1e1e1f] text-zinc-400 hover:text-white border border-[#383838]'
              }`}
            >
              {cat.title.split('&')[0]}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[200px]">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search skill (e.g., CATIA, OpenCV)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#1e1e1f] border border-[#383838] rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-colors"
          />
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredCategories.map((category, catIdx) => (
          <section
            key={catIdx}
            className="p-5 sm:p-6 rounded-2xl bg-[#1e1e1f] border border-[#383838] hover:border-zinc-600 transition-all flex flex-col justify-between shadow-xl"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#2b2b2c]">
                <div className="w-10 h-10 rounded-xl bg-[#2b2b2c] border border-[#383838] flex items-center justify-center shrink-0">
                  {getCategoryIcon(category.icon)}
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-white">
                    {category.title}
                  </h3>
                  <p className="text-[11px] text-zinc-400">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-3.5">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5">
                        <span className="font-medium text-zinc-200">
                          {skill.name}
                        </span>
                        {skill.highlight && (
                          <span className="px-1.5 py-0.2 rounded text-[9px] bg-amber-400/15 text-amber-400 border border-amber-400/30 font-mono">
                            Core
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] font-mono text-zinc-400">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-1.5 w-full bg-[#2b2b2c] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </article>
  );
};
