import React from 'react';
import { Github, Linkedin, Code2, Mail, FileText, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-[#E7E3D8] dark:border-[#34332E] bg-[#FAFAF8] dark:bg-[#0F0F0E] text-[#171717] dark:text-[#F5F3EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#E7E3D8] dark:border-[#34332E]">
          
          {/* Left: Branding & Role */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-[#F4E8C1] dark:bg-[#29281F] border border-[#E7E3D8] dark:border-[#34332E] flex items-center justify-center font-mono font-bold text-[#C49A2C] dark:text-[#D4AF37] text-xs">
                AG
              </div>
              <span className="text-base font-bold tracking-tight text-[#171717] dark:text-[#F5F3EA]">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs font-mono text-[#66645F] dark:text-[#B7B4AA] mt-1">
              Full-Stack Developer
            </p>
          </div>

          {/* Center: Essential Links (Requirement #25) */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-[#66645F] dark:text-[#B7B4AA] hover:text-[#171717] dark:hover:text-[#F5F3EA] bg-[#FFFFFF] dark:bg-[#1D1D1A] border border-[#E7E3D8] dark:border-[#34332E] hover:border-[#C49A2C] dark:hover:border-[#D4AF37] transition-colors"
              title="GitHub"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-[#66645F] dark:text-[#B7B4AA] hover:text-[#C49A2C] dark:hover:text-[#D4AF37] bg-[#FFFFFF] dark:bg-[#1D1D1A] border border-[#E7E3D8] dark:border-[#34332E] hover:border-[#C49A2C] dark:hover:border-[#D4AF37] transition-colors"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-[#66645F] dark:text-[#B7B4AA] hover:text-[#CE8946] bg-[#FFFFFF] dark:bg-[#1D1D1A] border border-[#E7E3D8] dark:border-[#34332E] hover:border-[#CE8946] transition-colors"
              title="LeetCode"
              aria-label="LeetCode"
            >
              <Code2 className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-xl text-[#66645F] dark:text-[#B7B4AA] hover:text-[#C49A2C] dark:hover:text-[#D4AF37] bg-[#FFFFFF] dark:bg-[#1D1D1A] border border-[#E7E3D8] dark:border-[#34332E] hover:border-[#C49A2C] dark:hover:border-[#D4AF37] transition-colors"
              title="Email"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={onOpenResume}
              className="p-2 rounded-xl text-[#66645F] dark:text-[#B7B4AA] hover:text-[#C49A2C] dark:hover:text-[#D4AF37] bg-[#FFFFFF] dark:bg-[#1D1D1A] border border-[#E7E3D8] dark:border-[#34332E] hover:border-[#C49A2C] dark:hover:border-[#D4AF37] transition-colors cursor-pointer"
              title="Resume Preview"
              aria-label="Resume Preview"
            >
              <FileText className="w-4 h-4" />
            </button>
          </div>

          {/* Right: Back to Top */}
          <div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#66645F] dark:text-[#B7B4AA] hover:text-[#171717] dark:hover:text-[#F5F3EA] transition-colors p-2 rounded-lg hover:bg-[#E7E3D8]/50 dark:hover:bg-[#1D1D1A] cursor-pointer"
              aria-label="Scroll to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Minimal Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#66645F] dark:text-[#B7B4AA] gap-2 text-center sm:text-left">
          <div>
            &copy; 2026 Abhishek Gupta
          </div>
          <div className="text-[11px]">
            Designed for Engineering Recruiters &bull; Light + Dark Mode
          </div>
        </div>

      </div>
    </footer>
  );
}
