import React from 'react';
import { NavTab } from '../types/portfolio.ts';
import { 
  Home,
  User, 
  Wrench, 
  Briefcase, 
  Rocket, 
  Eye, 
  Award, 
  GraduationCap, 
  FileText, 
  Mail 
} from 'lucide-react';

interface NavbarProps {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange }) => {
  const navItems: { id: NavTab; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'HOME', icon: <Home className="w-3.5 h-3.5" /> },
    { id: 'about', label: 'ABOUT', icon: <User className="w-3.5 h-3.5" /> },
    { id: 'skills', label: 'SKILLS', icon: <Wrench className="w-3.5 h-3.5" /> },
    { id: 'experience', label: 'EXPERIENCE', icon: <Briefcase className="w-3.5 h-3.5" /> },
    { id: 'projects', label: 'PROJECTS', icon: <Rocket className="w-3.5 h-3.5" /> },
    { id: 'ai_vision', label: 'AI & COMPUTER VISION', icon: <Eye className="w-3.5 h-3.5" /> },
    { id: 'achievements', label: 'ACHIEVEMENTS', icon: <Award className="w-3.5 h-3.5" /> },
    { id: 'education', label: 'EDUCATION', icon: <GraduationCap className="w-3.5 h-3.5" /> },
    { id: 'resume', label: 'RESUME', icon: <FileText className="w-3.5 h-3.5" /> },
    { id: 'contact', label: 'CONTACT', icon: <Mail className="w-3.5 h-3.5" /> },
  ];

  return (
    <nav className="w-full bg-[#1e1e1f]/95 backdrop-blur-md border border-[#383838] rounded-2xl sm:rounded-3xl p-1.5 shadow-xl sticky top-2 sm:top-4 z-40">
      <div className="overflow-x-auto no-scrollbar scroll-smooth">
        <ul className="flex items-center gap-1 text-[11px] sm:text-xs font-medium min-w-max px-1 py-0.5">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <li key={item.id} className="shrink-0">
                <button
                  onClick={() => onTabChange(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#2b2b2c] text-amber-400 border border-amber-400/30 shadow-md font-semibold'
                      : 'text-zinc-400 hover:text-zinc-100 hover:bg-[#2b2b2c]/60'
                  }`}
                >
                  <span className={isActive ? 'text-amber-400' : 'text-zinc-400'}>
                    {item.icon}
                  </span>
                  <span className="tracking-wide">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
