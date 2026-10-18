import React from 'react';
import { Github, Linkedin, Code2, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05080e] border-t border-white/[0.08] py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          {/* Left: Branding & Role */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#0d131f] border border-sky-500/40 flex items-center justify-center font-mono font-bold text-sky-400 text-xs">
                AG
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs font-mono text-slate-400 mt-1">
              {personalInfo.primaryTitle}
            </p>
          </div>

          {/* Center: Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-white/5 text-slate-400 hover:text-white hover:border-slate-600 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-white/5 text-slate-400 hover:text-sky-400 hover:border-sky-500/40 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-white/5 text-slate-400 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
              aria-label="LeetCode Profile"
            >
              <Code2 className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-xl bg-slate-900 border border-white/5 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Right: Scroll to top */}
          <div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-sky-300 transition-colors p-2 rounded-lg hover:bg-slate-900"
              aria-label="Scroll to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-2 text-center sm:text-left">
          <div>
            &copy; 2026 Abhishek Gupta. All rights reserved.
          </div>
          <div className="text-slate-600">
            Engineered with React & Tailwind CSS &middot; Recruiter Optimized
          </div>
        </div>

      </div>
    </footer>
  );
}
