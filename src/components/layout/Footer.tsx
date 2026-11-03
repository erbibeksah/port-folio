import React from 'react';
import { profileData } from '@/data/profile';
import { Github, Linkedin, Mail, Phone, Download, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#05070c] py-12 text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pb-8">
          {/* Identity & Location */}
          <div>
            <div className="font-bold text-slate-100 text-base mb-2">
              {profileData.name}
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              Software Engineer specializing in the .NET ecosystem, application security (VAPT), and database optimization.
            </p>
            <div className="text-xs text-emerald-400 flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5" />
              <span>Kathmandu, Nepal (Permanent: Siraha, Nepal)</span>
            </div>
          </div>

          {/* Direct Channels */}
          <div>
            <div className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-3">
              Direct Contact
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={`mailto:${profileData.email}`}
                  className="hover:text-emerald-400 transition-colors flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-500" />
                  <span>{profileData.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profileData.phone}`}
                  className="hover:text-emerald-400 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-slate-500" />
                  <span>{profileData.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href="/Bibek_Kumar_Sah_Resume.pdf"
                  download="Bibek_Kumar_Sah_Resume.pdf"
                  className="text-emerald-400 hover:text-emerald-300 font-medium flex items-center gap-2"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download CV (PDF)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <div className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-3">
              Professional Profiles
            </div>
            <div className="flex items-center gap-3 mb-4">
              <a
                href="https://github.com/erbibeksah"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#0b0f17] flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#151c2e] transition-all shadow-md"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/erbibeksah"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#0b0f17] flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#151c2e] transition-all shadow-md"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            <div className="text-xs text-slate-500">

            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Bibek Kumar Sah. All rights reserved.
          </div>
          <div className="text-xs text-slate-400">
            www.erbibeksah.com.np
          </div>
        </div>
      </div>
    </footer>
  );
};
