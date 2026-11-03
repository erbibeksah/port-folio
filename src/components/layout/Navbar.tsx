'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Download, Terminal } from 'lucide-react';
import { profileData } from '@/data/profile';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Lab', href: '#console' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080b11]/75 backdrop-blur-2xl shadow-xl shadow-black/25 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-mono font-bold group-hover:scale-105 group-hover:bg-emerald-500/20 transition-all">
            <Terminal className="w-4 h-4" />
          </div>
          <div>
            <div className="text-slate-100 font-bold text-sm sm:text-base tracking-tight group-hover:text-emerald-400 transition-colors">
              {profileData.name}
            </div>
            <div className="text-[11px] text-slate-400 font-medium">
              Software Engineer • Kathmandu
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-emerald-400 transition-colors py-1"
            >
              {link.label}
            </a>
          ))}

          {/* Command Palette Trigger */}
          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event('open-command-palette'))}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0f1420] text-slate-300 hover:text-emerald-400 hover:bg-[#151c2e] transition-colors text-xs font-mono"
            title="Search & Quick Actions (⌘K)"
          >
            <span className="text-[11px] text-slate-400">⌘K</span>
          </button>

          {/* Rounded-full Download CV Button */}
          <a
            href="/Bibek_Kumar_Sah_Resume.pdf"
            download="Bibek_Kumar_Sah_Resume.pdf"
            className="inline-flex items-center gap-2 text-xs font-bold px-5 py-2.5 rounded-full bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-all shadow-md shadow-emerald-500/20 active:scale-95"
          >
            <Download className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Download CV</span>
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white rounded-full bg-slate-900/60 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer with glassmorphism */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#080b11]/95 backdrop-blur-3xl px-6 pt-4 pb-8 shadow-2xl">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-300 hover:text-emerald-400 py-2.5"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3">
              <a
                href="/Bibek_Kumar_Sah_Resume.pdf"
                download="Bibek_Kumar_Sah_Resume.pdf"
                className="inline-flex items-center justify-center w-full gap-2 text-xs font-bold px-5 py-3 rounded-full bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-all"
              >
                <Download className="w-4 h-4 stroke-[2.5]" />
                <span>Download CV (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
