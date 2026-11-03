'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import {
  Search,
  Download,
  Mail,
  Github,
  Linkedin,
  Terminal,
  Layers,
  Briefcase,
  Compass,
  Zap,
  X,
  ArrowRight,
} from 'lucide-react';
import { profileData } from '@/data/profile';

interface CommandItem {
  id: string;
  title: string;
  category: 'Navigation' | 'Actions' | 'Socials';
  icon: React.ReactNode;
  shortcut?: string;
  action: () => void;
}

export const CommandPalette: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    const handleCustomOpen = () => setIsOpen(true);

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('open-command-palette', handleCustomOpen);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('open-command-palette', handleCustomOpen);
    };
  }, []);

  const commands: CommandItem[] = useMemo(
    () => [
      {
        id: 'cv',
        title: 'Download Official Resume (PDF)',
        category: 'Actions',
        icon: <Download className="w-4 h-4 text-emerald-400" />,
        shortcut: '↵',
        action: () => {
          const a = document.createElement('a');
          a.href = '/Bibek_Kumar_Sah_Resume.pdf';
          a.download = 'Bibek_Kumar_Sah_Resume.pdf';
          a.click();
          setIsOpen(false);
        },
      },
      {
        id: 'email',
        title: `Copy Email (${profileData.email})`,
        category: 'Actions',
        icon: <Mail className="w-4 h-4 text-emerald-400" />,
        shortcut: 'Copy',
        action: () => {
          navigator.clipboard.writeText(profileData.email);
          alert('Email copied to clipboard!');
          setIsOpen(false);
        },
      },
      {
        id: 'projects',
        title: 'Go to Featured Projects',
        category: 'Navigation',
        icon: <Layers className="w-4 h-4 text-cyan-400" />,
        action: () => {
          router.push('/#projects');
          setIsOpen(false);
        },
      },
      {
        id: 'experience',
        title: 'Go to Work Experience & Timeline',
        category: 'Navigation',
        icon: <Briefcase className="w-4 h-4 text-emerald-400" />,
        action: () => {
          router.push('/#experience');
          setIsOpen(false);
        },
      },
      {
        id: 'console',
        title: 'Interactive System Architecture Console',
        category: 'Navigation',
        icon: <Terminal className="w-4 h-4 text-amber-400" />,
        action: () => {
          router.push('/#console');
          setIsOpen(false);
        },
      },
      {
        id: 'about',
        title: 'About & Culture Philosophy',
        category: 'Navigation',
        icon: <Compass className="w-4 h-4 text-purple-400" />,
        action: () => {
          router.push('/#about');
          setIsOpen(false);
        },
      },
      {
        id: 'contact',
        title: 'Send a Message / Contact',
        category: 'Navigation',
        icon: <Mail className="w-4 h-4 text-rose-400" />,
        action: () => {
          router.push('/#contact');
          setIsOpen(false);
        },
      },
      {
        id: 'github',
        title: 'View GitHub Profile (erbibeksah)',
        category: 'Socials',
        icon: <Github className="w-4 h-4 text-slate-300" />,
        shortcut: '↗',
        action: () => {
          window.open('https://github.com/erbibeksah', '_blank');
          setIsOpen(false);
        },
      },
      {
        id: 'linkedin',
        title: 'View LinkedIn Profile (in/erbibeksah)',
        category: 'Socials',
        icon: <Linkedin className="w-4 h-4 text-blue-400" />,
        shortcut: '↗',
        action: () => {
          window.open('https://linkedin.com/in/erbibeksah', '_blank');
          setIsOpen(false);
        },
      },
    ],
    [router]
  );

  const filteredCommands = useMemo(() => {
    if (!query.trim()) return commands;
    return commands.filter((cmd) =>
      cmd.title.toLowerCase().includes(query.toLowerCase()) ||
      cmd.category.toLowerCase().includes(query.toLowerCase())
    );
  }, [commands, query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredCommands[selectedIndex]) {
        filteredCommands[selectedIndex].action();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className="fixed inset-0 bg-[#080b11]/80 backdrop-blur-xl transition-opacity"
      />

      {/* Palette Window */}
      <div className="relative w-full max-w-xl bg-[#0b0f17] rounded-3xl shadow-2xl shadow-black/80 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Search bar */}
        <div className="flex items-center px-5 py-4 gap-3">
          <Search className="w-5 h-5 text-emerald-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Search commands, projects, actions... (or press Esc to close)"
            className="w-full bg-transparent text-sm text-slate-100 placeholder-slate-500 focus:outline-none"
          />
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 rounded-full text-slate-500 hover:text-slate-300"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-1">
          {filteredCommands.length === 0 ? (
            <div className="py-8 text-center text-xs text-slate-500">
              No matching commands found.
            </div>
          ) : (
            filteredCommands.map((cmd, idx) => (
              <div
                key={cmd.id}
                onClick={cmd.action}
                onMouseEnter={() => setSelectedIndex(idx)}
                className={`flex items-center justify-between px-4 py-3 rounded-2xl cursor-pointer transition-colors ${
                  idx === selectedIndex
                    ? 'bg-emerald-500/15 text-emerald-300 font-semibold'
                    : 'text-slate-300 hover:bg-[#141b2b]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-slate-800/80 shrink-0">
                    {cmd.icon}
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-medium">{cmd.title}</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">
                      {cmd.category}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {cmd.shortcut && (
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-slate-800/80 text-slate-400">
                      {cmd.shortcut}
                    </span>
                  )}
                  {idx === selectedIndex && (
                    <ArrowRight className="w-4 h-4 text-emerald-400" />
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-5 py-3 bg-[#080b11]/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>Esc Close</span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-400">
            <Zap className="w-3 h-3" />
            <span>Bibek Command Center</span>
          </div>
        </div>
      </div>
    </div>
  );
};

