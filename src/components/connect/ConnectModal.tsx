'use client';

import React, { useEffect, useState } from 'react';
import { X, Mail, Copy, CheckCircle2, MessageSquare, ExternalLink, Download, Send } from 'lucide-react';
import { profileData } from '@/data/profile';
import { Button } from '@/components/ui/Button';

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConnectModal: React.FC<ConnectModalProps> = ({ isOpen, onClose }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:${profileData.email}?subject=${encodeURIComponent(
      `Inquiry from ${name}`
    )}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#080b11]/85 backdrop-blur-2xl transition-opacity"
      />

      {/* Modal Dialog (No border stroke, clean dark surface) */}
      <div className="relative w-full max-w-lg bg-[#0b0f17] rounded-3xl shadow-2xl shadow-black/70 p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-6">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <h3 className="text-xl font-bold text-slate-100 tracking-tight">
              Get in Touch with Bibek
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Connect & CV Options */}
        <div className="space-y-3 mb-6">
          {/* Download CV Banner */}
          <a
            href="/Bibek_Kumar_Sah_Resume.pdf"
            download="Bibek_Kumar_Sah_Resume.pdf"
            className="w-full bg-emerald-500/10 rounded-2xl p-4 flex items-center justify-between hover:bg-emerald-500/20 transition-colors group"
          >
            <div className="flex items-center gap-3.5">
              <div className="p-2.5 rounded-full bg-emerald-500 text-slate-950">
                <Download className="w-4 h-4 stroke-[2.5]" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-emerald-400">Download Official CV</div>
                <div className="text-[11px] text-slate-400">Bibek_Kumar_Sah_Resume.pdf</div>
              </div>
            </div>
            <span className="text-xs font-mono text-emerald-400 font-bold group-hover:translate-x-0.5 transition-transform">
              PDF ▹
            </span>
          </a>

          {/* Email 1-click copy */}
          <div className="bg-[#080b11]/80 rounded-2xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3.5">
              <div className="p-2.5 rounded-full bg-slate-800 text-slate-300">
                <Mail className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <div className="text-[11px] text-slate-400 uppercase font-mono">Direct Email</div>
                <div className="text-sm font-semibold text-slate-200">{profileData.email}</div>
              </div>
            </div>
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
            >
              {copiedEmail ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* WhatsApp Direct link */}
          <div className="bg-[#080b11]/80 rounded-2xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3.5">
              <div className="p-2.5 rounded-full bg-slate-800 text-slate-300">
                <MessageSquare className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <div className="text-[11px] text-slate-400 uppercase font-mono">WhatsApp</div>
                <div className="text-sm font-semibold text-slate-200">+977 98629-67315</div>
              </div>
            </div>
            <a
              href="https://wa.me/9779862967315"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs px-4 py-2 rounded-full bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-colors"
            >
              <span>Chat</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Social Profiles */}
          <div className="grid grid-cols-2 gap-2.5 pt-1">
            <a
              href="https://linkedin.com/in/erbibeksah"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-[#080b11]/80 flex items-center justify-between text-xs font-medium text-slate-300 hover:text-white hover:bg-[#151c2d] transition-colors"
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
            </a>
            <a
              href="https://github.com/erbibeksah"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-[#080b11]/80 flex items-center justify-between text-xs font-medium text-slate-300 hover:text-white hover:bg-[#151c2d] transition-colors"
            >
              <span>GitHub</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
            </a>
          </div>
        </div>

        {/* Quick Message Form */}
        <div className="pt-4">
          <div className="text-xs uppercase text-slate-400 tracking-wider font-semibold mb-3">
            Send Quick Note
          </div>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-2 gap-2.5">
              <input
                type="text"
                required
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#080b11] text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
              />
              <input
                type="email"
                required
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#080b11] text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
              />
            </div>
            <textarea
              required
              rows={3}
              placeholder="How can we collaborate?..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-[#080b11] text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 resize-none"
            />
            <Button type="submit" variant="primary" size="sm" className="w-full">
              <span>Send Message</span>
              <Send className="w-3 h-3" />
            </Button>
            {submitted && (
              <div className="text-[11px] font-mono text-emerald-400 text-center font-medium">
                ✓ Message window opened in your email!
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
