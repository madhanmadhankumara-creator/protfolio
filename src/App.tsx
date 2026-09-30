import React, { useState, useEffect } from 'react';
import { NavTab, ProjectItem } from './types/portfolio.ts';
import { Sidebar } from './components/Sidebar.tsx';
import { Navbar } from './components/Navbar.tsx';
import { HomeTab } from './components/tabs/HomeTab.tsx';
import { AboutTab } from './components/tabs/AboutTab.tsx';
import { SkillsTab } from './components/tabs/SkillsTab.tsx';
import { ExperienceTab } from './components/tabs/ExperienceTab.tsx';
import { ProjectsTab } from './components/tabs/ProjectsTab.tsx';
import { AIVisionTab } from './components/tabs/AIVisionTab.tsx';
import { AchievementsTab } from './components/tabs/AchievementsTab.tsx';
import { EducationTab } from './components/tabs/EducationTab.tsx';
import { ResumeTab } from './components/tabs/ResumeTab.tsx';
import { ContactTab } from './components/tabs/ContactTab.tsx';
import { ProjectModal } from './components/modals/ProjectModal.tsx';
import { ResumeModal } from './components/modals/ResumeModal.tsx';
import { PERSONAL_INFO } from './data/aerospaceData.ts';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
        setIsResumeOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] bg-aerospace-grid text-[#e0e0e0] py-6 sm:py-10 px-3 sm:px-6 lg:px-8 selection:bg-amber-400 selection:text-black">
      {/* Top Ambient Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-52 bg-amber-500/5 blur-[130px] pointer-events-none -z-10"></div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-5 sm:gap-7 items-start">
        {/* Left Sidebar Profile (vCard format) */}
        <Sidebar 
          onOpenResume={() => setIsResumeOpen(true)} 
          onNavigateContact={() => {
            setActiveTab('contact');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />

        {/* Right Main Content Area */}
        <div className="flex-1 w-full min-w-0 space-y-5">
          {/* Navigation Bar */}
          <header className="sticky top-3 sm:top-5 z-30">
            <Navbar 
              activeTab={activeTab} 
              onTabChange={(tab) => {
                setActiveTab(tab);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} 
            />
          </header>

          {/* Active Tab Main Card */}
          <main className="bg-[#1e1e1f] border border-[#383838] rounded-3xl p-5 sm:p-8 lg:p-9 shadow-2xl relative min-h-[620px]">
            {activeTab === 'home' && (
              <HomeTab
                onNavigate={(tab) => {
                  setActiveTab(tab);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onOpenResume={() => setIsResumeOpen(true)}
              />
            )}

            {activeTab === 'about' && <AboutTab />}

            {activeTab === 'skills' && <SkillsTab />}

            {activeTab === 'experience' && <ExperienceTab />}

            {activeTab === 'projects' && (
              <ProjectsTab onSelectProject={(p) => setSelectedProject(p)} />
            )}

            {activeTab === 'ai_vision' && <AIVisionTab />}

            {activeTab === 'achievements' && <AchievementsTab />}

            {activeTab === 'education' && <EducationTab />}

            {activeTab === 'resume' && (
              <ResumeTab onOpenResumeModal={() => setIsResumeOpen(true)} />
            )}

            {activeTab === 'contact' && <ContactTab />}
          </main>

          {/* Clean Subtle Aerospace Footer */}
          <footer className="text-center text-xs text-zinc-500 py-3 font-mono flex flex-col sm:flex-row items-center justify-between gap-2 px-3 border-t border-zinc-800/60">
            <span>
              {PERSONAL_INFO.name} · Aerospace Engineering × UAV × AI × Computer Vision × CAD × IoT
            </span>
            <span className="flex items-center gap-1.5 text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              All Systems Operational
            </span>
          </footer>
        </div>
      </div>

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
