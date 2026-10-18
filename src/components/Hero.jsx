import React from 'react';
import {
  ArrowDown,
  FileText,
  Mail,
  Github,
  Linkedin,
  Code2,
  CheckCircle2,
  Terminal,
  ExternalLink,
  Sparkles,
  Layers,
  Database,
  Cloud
} from 'lucide-react';
import { personalInfo, heroData } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden"
    >
      {/* Background radial glow & geometric grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] pointer-events-none opacity-40" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-sky-500/10 via-indigo-500/10 to-transparent blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline, Bio & Action Buttons */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 shadow-inner mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-medium text-slate-300">
                Available for Software Engineering Roles & Internships
              </span>
            </div>

            {/* Main Greeting & Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4">
              <span className="block text-slate-300 font-medium text-2xl sm:text-3xl mb-1">
                Hi, I'm
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-300 to-indigo-300">
                Abhishek Gupta.
              </span>
            </h1>

            {/* Professional Headline */}
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-200 mb-5 leading-snug">
              {heroData.headline}
            </h2>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed mb-8 max-w-2xl font-normal">
              {heroData.supportingText}
            </p>

            {/* Credibility Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-xl mb-9">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#0d131f]/80 border border-white/[0.07] hover:border-sky-500/30 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-sky-500/15 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white font-mono">2 Apps</div>
                  <div className="text-xs text-slate-400">Deployed Full-Stack</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#0d131f]/80 border border-white/[0.07] hover:border-indigo-500/30 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/15 flex items-center justify-center shrink-0">
                  <Code2 className="w-4 h-4 text-indigo-400" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white font-mono">250+ Solved</div>
                  <div className="text-xs text-slate-400">LeetCode DSA</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#0d131f]/80 border border-white/[0.07] hover:border-amber-500/30 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-amber-500/15 flex items-center justify-center shrink-0">
                  <Cloud className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white font-mono">AWS Certified</div>
                  <div className="text-xs text-slate-400">Cloud Practitioner</div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-9">
              {/* Primary CTA */}
              <button
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              {/* Secondary CTA */}
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#0d131f] hover:bg-[#131b2e] border border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white font-semibold text-sm transition-all duration-200 shadow-sm"
              >
                <FileText className="w-4 h-4 text-sky-400" />
                <span>Download Resume</span>
              </button>

              {/* Third CTA */}
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-300 hover:text-white font-medium text-sm transition-colors"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Icons & Direct Links */}
            <div className="flex items-center gap-3 pt-4 border-t border-white/[0.08] w-full max-w-xl">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                Connect:
              </span>
              
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900/90 border border-white/[0.08] text-slate-400 hover:text-white hover:border-slate-600 hover:bg-slate-800 transition-all"
                aria-label="GitHub Profile (opens in new tab)"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900/90 border border-white/[0.08] text-slate-400 hover:text-sky-400 hover:border-sky-500/40 hover:bg-slate-800 transition-all"
                aria-label="LinkedIn Profile (opens in new tab)"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900/90 border border-white/[0.08] text-slate-400 hover:text-amber-400 hover:border-amber-500/40 hover:bg-slate-800 transition-all"
                aria-label="LeetCode Profile (opens in new tab)"
              >
                <Code2 className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-lg bg-slate-900/90 border border-white/[0.08] text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-slate-800 transition-all"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <span className="text-xs font-mono text-slate-400 ml-auto flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                Ghaziabad, India
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Code Architecture Card */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl bg-[#0c111d] border border-white/[0.1] shadow-2xl overflow-hidden group">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#090d16] border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                  <Terminal className="w-3.5 h-3.5 text-sky-400" />
                  <span>abhishek.config.ts</span>
                </div>
                <div className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  READY
                </div>
              </div>

              {/* Code Content */}
              <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-slate-300">
                <div className="text-slate-500">// Software Engineer Candidate Specification</div>
                <div className="mt-1">
                  <span className="text-sky-400">const</span>{' '}
                  <span className="text-indigo-300">engineer</span>:{' '}
                  <span className="text-amber-300">FullStackDeveloper</span> = {'{'}
                </div>
                
                <div className="pl-4">
                  <span className="text-slate-400">name:</span>{' '}
                  <span className="text-emerald-300">"Abhishek Gupta"</span>,
                </div>

                <div className="pl-4">
                  <span className="text-slate-400">education:</span> {'{'}
                </div>
                <div className="pl-8">
                  <span className="text-slate-400">degree:</span>{' '}
                  <span className="text-emerald-300">"B.Tech CSE (2023-2027)"</span>,
                </div>
                <div className="pl-8">
                  <span className="text-slate-400">institution:</span>{' '}
                  <span className="text-emerald-300">"KIET Group of Institutions"</span>
                </div>
                <div className="pl-4">{'}'},</div>

                <div className="pl-4">
                  <span className="text-slate-400">coreStack:</span> [
                  <span className="text-sky-300">"React"</span>,{' '}
                  <span className="text-sky-300">"Node.js"</span>,{' '}
                  <span className="text-sky-300">"Express"</span>,{' '}
                  <span className="text-sky-300">"MongoDB"</span>
                  ],
                </div>

                <div className="pl-4">
                  <span className="text-slate-400">aiIntegration:</span> [
                  <span className="text-purple-300">"OpenAI GPT"</span>,{' '}
                  <span className="text-purple-300">"Gemini Vision"</span>
                  ],
                </div>

                <div className="pl-4">
                  <span className="text-slate-400">problemSolving:</span>{' '}
                  <span className="text-amber-400">"250+ LeetCode Solved"</span>,
                </div>

                <div className="pl-4">
                  <span className="text-slate-400">cloudCert:</span>{' '}
                  <span className="text-emerald-400">"AWS Certified Cloud Practitioner"</span>,
                </div>

                <div className="pl-4">
                  <span className="text-slate-400">status:</span>{' '}
                  <span className="text-emerald-300 font-bold">"Open to Opportunities"</span>
                </div>

                <div>{'}'};</div>

                <div className="mt-4 pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 text-sky-400 font-medium">
                    <Sparkles className="w-3.5 h-3.5" />
                    Production Ready Code
                  </span>
                  <span className="text-slate-500">MERN + AI Stack</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
