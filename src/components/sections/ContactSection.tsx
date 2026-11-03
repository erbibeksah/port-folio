'use client';

import React, { useState } from 'react';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { profileData } from '@/data/profile';
import { Button } from '@/components/ui/Button';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  Download,
  MessageSquare,
  Loader2,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    _gotcha: '', // Forminit honeypot field to block bots
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const forminitEndpoint =
    profileData.forminitEndpoint ||
    (profileData.forminitId
      ? profileData.forminitId.startsWith('http')
        ? profileData.forminitId
        : `https://forminit.com/f/${profileData.forminitId}`
      : null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // If bot filled the honeypot, silent drop
    if (formData._gotcha) {
      setStatus('success');
      setStatusMessage('Message sent successfully!');
      return;
    }

    // If Forminit endpoint or form ID is configured, dispatch directly via Forminit API
    if (forminitEndpoint) {
      setIsSubmitting(true);
      setStatus('idle');
      try {
        const payload = new FormData();
        payload.append('fi-sender-fullName', formData.name);
        payload.append('fi-sender-email', formData.email);
        payload.append('fi-text-subject', formData.subject);
        payload.append('fi-text-message', formData.message);
        payload.append('name', formData.name);
        payload.append('email', formData.email);
        payload.append('subject', formData.subject);
        payload.append('message', formData.message);

        const response = await fetch(forminitEndpoint, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
          },
          body: payload,
        });

        if (response.ok) {
          setStatus('success');
          setStatusMessage('Thank you! Your message has been delivered directly to my inbox. I will reply shortly.');
          setFormData({ name: '', email: '', subject: '', message: '', _gotcha: '' });
        } else {
          throw new Error('Forminit submission failed');
        }
      } catch (err) {
        setStatus('error');
        setStatusMessage('Could not reach Forminit. You can send directly via your email client below.');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Fallback to mailto when Forminit endpoint is not yet provided
      const mailtoUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(
        formData.subject || 'Portfolio Inquiry'
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
      setStatus('success');
      setStatusMessage('Email client opened. Thank you for reaching out!');
    }
  };

  const handleManualEmailFallback = () => {
    const mailtoUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry'
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <SectionContainer
      id="contact"
      badge="Contact"
      title="Let's Start a Conversation"
      subtitle="Whether you have an engineering role, a software consulting need, or an application security inquiry—feel free to reach out directly."
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Info & Download CV (5 cols) - Border strokes removed */}
        <div className="lg:col-span-5 space-y-4">
          {/* Download CV Callout */}
          <div className="bg-[#0b0f17] rounded-2xl p-6 shadow-2xl shadow-black/40">
            <div className="flex items-center gap-3.5 mb-3">
              <div className="p-3 rounded-full bg-emerald-500 text-slate-950">
                <Download className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <div className="text-xs font-semibold text-emerald-400">Download Official Resume</div>
                <div className="text-sm font-bold text-slate-100">Bibek Kumar Sah (CV)</div>
              </div>
            </div>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Comprehensive 2-page resume covering experience at Darvilab, Version Systems, and certifications.
            </p>
            <a
              href="/Bibek_Kumar_Sah_Resume.pdf"
              download="Bibek_Kumar_Sah_Resume.pdf"
              className="inline-flex items-center justify-center w-full gap-2 px-5 py-3 rounded-full bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-400 transition-colors shadow-md shadow-emerald-500/20 active:scale-95"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>Download PDF Resume</span>
            </a>
          </div>

          {/* Email card with 1-click copy */}
          <div className="bg-[#0b0f17] rounded-2xl p-5 hover:bg-[#0e141f] transition-colors shadow-xl shadow-black/30">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-full bg-slate-800 text-emerald-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase font-mono">Email Address</div>
                  <div className="text-sm sm:text-base font-bold text-slate-100">
                    {profileData.email}
                  </div>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            {copied && (
              <div className="text-[11px] font-mono text-emerald-400 mt-1 pl-12">
                ✓ Email copied to clipboard!
              </div>
            )}
          </div>

          {/* Phone & WhatsApp */}
          <div className="bg-[#0b0f17] rounded-2xl p-5 hover:bg-[#0e141f] transition-colors flex items-center justify-between shadow-xl shadow-black/30">
            <div className="flex items-center gap-3.5">
              <div className="p-3 rounded-full bg-slate-800 text-cyan-400">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs text-slate-400 uppercase font-mono">Phone</div>
                <a
                  href={`tel:${profileData.phone}`}
                  className="text-sm sm:text-base font-bold text-slate-100 hover:text-cyan-400 transition-colors font-mono"
                >
                  {profileData.phone}
                </a>
              </div>
            </div>
            <a
              href="https://wa.me/9779862967315"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 transition-colors flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Location */}
          <div className="bg-[#0b0f17] rounded-2xl p-5 hover:bg-[#0e141f] transition-colors flex items-center gap-3.5 shadow-xl shadow-black/30">
            <div className="p-3 rounded-full bg-slate-800 text-amber-400">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs text-slate-400 uppercase font-mono">Location</div>
              <div className="text-sm font-bold text-slate-100">
                {profileData.location} <span className="text-slate-500 font-normal">({profileData.permanentLocation})</span>
              </div>
            </div>
          </div>
        </div>

        {/* Message Form (7 cols) - Border strokes removed */}
        <div className="lg:col-span-7 bg-[#0b0f17] rounded-3xl p-6 sm:p-9 shadow-2xl shadow-black/40">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-slate-100 tracking-tight">Send a Message</h3>
            <span className="px-3 py-1 rounded-full text-[11px] font-mono text-emerald-400 bg-emerald-950/40 font-semibold">
              {forminitEndpoint ? 'Connected via Forminit' : 'Direct Dispatch'}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 mb-6">
            Fill out the form below to reach out directly to Bibek&apos;s primary inbox.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Honeypot field (hidden from users, traps automated bots) */}
            <input
              type="text"
              name="_gotcha"
              tabIndex={-1}
              autoComplete="off"
              value={formData._gotcha}
              onChange={(e) => setFormData({ ...formData, _gotcha: e.target.value })}
              className="hidden"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-slate-300 font-semibold mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-[#080b11] text-slate-100 placeholder-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-300 font-semibold mb-1.5">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#080b11] text-slate-100 placeholder-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-slate-300 font-semibold mb-1.5">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Software Engineering Inquiry / Collaboration"
                className="w-full px-4 py-3 rounded-xl bg-[#080b11] text-slate-100 placeholder-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs text-slate-300 font-semibold mb-1.5">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Hi Bibek, we'd like to discuss an opportunity..."
                className="w-full px-4 py-3 rounded-xl bg-[#080b11] text-slate-100 placeholder-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all resize-none"
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              size="md"
              disabled={isSubmitting}
              className="w-full sm:w-auto"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Sending via Forminit...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </Button>

            {status === 'success' && (
              <div className="p-3.5 rounded-xl bg-emerald-500/10 text-emerald-400 text-xs font-medium flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>{statusMessage}</span>
              </div>
            )}

            {status === 'error' && (
              <div className="p-3.5 rounded-xl bg-rose-500/10 text-rose-300 text-xs font-medium space-y-2">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                  <span>{statusMessage}</span>
                </div>
                <button
                  type="button"
                  onClick={handleManualEmailFallback}
                  className="inline-flex items-center gap-1.5 text-xs text-emerald-400 underline hover:text-emerald-300 font-semibold"
                >
                  <span>Click here to open email client</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </SectionContainer>
  );
};
