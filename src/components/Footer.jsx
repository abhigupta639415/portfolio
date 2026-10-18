import React from 'react';
import { Github, Linkedin, Code2, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1F1D18] border-t border-taupe/30 py-12 relative text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-taupe/20">
          {/* Left: Branding & Role */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#24221D] border border-gold/50 flex items-center justify-center font-mono font-bold text-gold text-xs shadow-sm">
                AG
              </div>
              <span className="text-base font-bold text-cream tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs font-mono text-[#BDB76B] mt-1">
              {personalInfo.primaryTitle}
            </p>
          </div>

          {/* Center: Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#24221D] border border-taupe/30 text-cream/80 hover:text-white hover:border-gold transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#24221D] border border-taupe/30 text-cream/80 hover:text-gold hover:border-gold transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#24221D] border border-taupe/30 text-cream/80 hover:text-bronze hover:border-bronze transition-colors"
              aria-label="LeetCode Profile"
            >
              <Code2 className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-xl bg-[#24221D] border border-taupe/30 text-cream/80 hover:text-gold hover:border-gold transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Right: Scroll to top */}
          <div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-cream/70 hover:text-gold transition-colors p-2 rounded-lg hover:bg-[#24221D] cursor-pointer"
              aria-label="Scroll to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-cream/60 gap-2 text-center sm:text-left">
          <div>
            &copy; 2026 Abhishek Gupta. All rights reserved.
          </div>
          <div className="text-cream/50">
            Engineered with React & Tailwind CSS &middot; Recruiter Optimized &middot; Golden Taupe Palette
          </div>
        </div>

      </div>
    </footer>
  );
}
