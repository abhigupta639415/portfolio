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
  Sparkles,
  Cloud,
  Layers
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
      className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center bg-[#FDFBD4] overflow-hidden"
    >
      {/* Subtle abstract geometric elements in #BDB76B, #D4AF37, #CE8946 */}
      <div className="absolute top-12 left-10 w-72 h-72 rounded-full bg-[#BDB76B]/15 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 rounded-full bg-[#D4AF37]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-64 h-64 rounded-full bg-[#CE8946]/10 blur-2xl pointer-events-none" />

      {/* Decorative hairline grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(189, 183, 107, 0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(189, 183, 107, 0.35) 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline, Bio & Action Buttons */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#BDB76B]/40 shadow-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CE8946] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
              </span>
              <span className="text-xs font-mono font-semibold text-[#24221D]">
                Available for Software Engineering Roles & Internships
              </span>
            </div>

            {/* Main Greeting & Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#171717] mb-4">
              <span className="block text-[#5F5B50] font-medium text-2xl sm:text-3xl mb-1">
                Hi, I'm
              </span>
              <span className="text-[#D4AF37] underline decoration-[#CE8946]/40 underline-offset-8">
                Abhishek Gupta.
              </span>
            </h1>

            {/* Professional Headline */}
            <h2 className="text-xl sm:text-2xl font-bold text-[#24221D] mb-5 leading-snug">
              <span className="text-[#CE8946]">Full-Stack Developer</span> building scalable web applications with modern technologies and AI.
            </h2>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#5F5B50] leading-relaxed mb-8 max-w-2xl font-normal">
              {heroData.supportingText}
            </p>

            {/* Credibility Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-xl mb-9">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FFFFFF] border border-[#BDB76B]/35 shadow-sm hover:border-[#D4AF37] transition-colors">
                <div className="w-9 h-9 rounded-lg bg-[#FDFBD4] border border-[#BDB76B]/40 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-[#CE8946]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#171717] font-mono">2 Apps</div>
                  <div className="text-xs text-[#5F5B50]">Deployed Full-Stack</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FFFFFF] border border-[#BDB76B]/35 shadow-sm hover:border-[#D4AF37] transition-colors">
                <div className="w-9 h-9 rounded-lg bg-[#FDFBD4] border border-[#BDB76B]/40 flex items-center justify-center shrink-0">
                  <Code2 className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#171717] font-mono">250+ Solved</div>
                  <div className="text-xs text-[#5F5B50]">LeetCode DSA</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FFFFFF] border border-[#BDB76B]/35 shadow-sm hover:border-[#D4AF37] transition-colors">
                <div className="w-9 h-9 rounded-lg bg-[#FDFBD4] border border-[#BDB76B]/40 flex items-center justify-center shrink-0">
                  <Cloud className="w-4 h-4 text-[#CE8946]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#171717] font-mono">AWS Certified</div>
                  <div className="text-xs text-[#5F5B50]">Cloud Practitioner</div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-9">
              {/* Primary CTA */}
              <button
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#D4AF37] hover:bg-[#CE8946] text-[#171717] hover:text-white font-bold text-sm shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              {/* Secondary CTA */}
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#FFFFFF] hover:bg-[#BDB76B]/20 border border-[#BDB76B] text-[#24221D] font-bold text-sm transition-all duration-200 shadow-sm"
              >
                <FileText className="w-4 h-4 text-[#CE8946]" />
                <span>Download Resume</span>
              </button>

              {/* Third CTA */}
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-transparent hover:bg-[#FFFFFF] border border-[#BDB76B] text-[#24221D] font-semibold text-sm transition-colors"
              >
                <Mail className="w-4 h-4 text-[#5F5B50]" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Icons & Direct Links */}
            <div className="flex items-center gap-3 pt-4 border-t border-[#BDB76B]/35 w-full max-w-xl">
              <span className="text-xs font-mono text-[#5F5B50] uppercase tracking-wider font-semibold">
                Connect:
              </span>
              
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-[#FFFFFF] border border-[#BDB76B]/40 text-[#24221D] hover:text-[#CE8946] hover:border-[#D4AF37] transition-all shadow-sm"
                aria-label="GitHub Profile (opens in new tab)"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-[#FFFFFF] border border-[#BDB76B]/40 text-[#24221D] hover:text-[#CE8946] hover:border-[#D4AF37] transition-all shadow-sm"
                aria-label="LinkedIn Profile (opens in new tab)"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-[#FFFFFF] border border-[#BDB76B]/40 text-[#24221D] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all shadow-sm"
                aria-label="LeetCode Profile (opens in new tab)"
              >
                <Code2 className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-xl bg-[#FFFFFF] border border-[#BDB76B]/40 text-[#24221D] hover:text-[#CE8946] hover:border-[#D4AF37] transition-all shadow-sm"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <span className="text-xs font-mono text-[#5F5B50] ml-auto flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
                Ghaziabad, India
              </span>
            </div>

          </div>

          {/* Right Column: Editorial Dark Architecture Card for Contrast */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl bg-[#24221D] border border-[#BDB76B]/40 shadow-2xl overflow-hidden group">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#1B1915] border-b border-[#BDB76B]/25">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#CE8946]/80" />
                  <div className="w-3 h-3 rounded-full bg-[#D4AF37]/80" />
                  <div className="w-3 h-3 rounded-full bg-[#BDB76B]/80" />
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#FDFBD4]/70">
                  <Terminal className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>abhishek.config.ts</span>
                </div>
                <div className="text-[10px] font-mono text-[#D4AF37] bg-[#D4AF37]/15 px-2 py-0.5 rounded border border-[#D4AF37]/30">
                  VERIFIED
                </div>
              </div>

              {/* Code Content */}
              <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-[#FDFBD4]">
                <div className="text-[#BDB76B]">// Software Engineer Candidate Specification</div>
                <div className="mt-1">
                  <span className="text-[#D4AF37]">const</span>{' '}
                  <span className="text-[#CE8946]">engineer</span>:{' '}
                  <span className="text-[#FDFBD4] font-semibold">FullStackDeveloper</span> = {'{'}
                </div>
                
                <div className="pl-4">
                  <span className="text-[#BDB76B]">name:</span>{' '}
                  <span className="text-[#FDFBD4]">"Abhishek Gupta"</span>,
                </div>

                <div className="pl-4">
                  <span className="text-[#BDB76B]">education:</span> {'{'}
                </div>
                <div className="pl-8">
                  <span className="text-[#BDB76B]">degree:</span>{' '}
                  <span className="text-[#FDFBD4]">"B.Tech CSE (2023-2027)"</span>,
                </div>
                <div className="pl-8">
                  <span className="text-[#BDB76B]">institution:</span>{' '}
                  <span className="text-[#FDFBD4]">"KIET Group of Institutions"</span>
                </div>
                <div className="pl-4">{'}'},</div>

                <div className="pl-4">
                  <span className="text-[#BDB76B]">coreStack:</span> [
                  <span className="text-[#D4AF37]">"React"</span>,{' '}
                  <span className="text-[#D4AF37]">"Node.js"</span>,{' '}
                  <span className="text-[#D4AF37]">"Express"</span>,{' '}
                  <span className="text-[#D4AF37]">"MongoDB"</span>
                  ],
                </div>

                <div className="pl-4">
                  <span className="text-[#BDB76B]">aiIntegration:</span> [
                  <span className="text-[#CE8946]">"OpenAI GPT"</span>,{' '}
                  <span className="text-[#CE8946]">"Gemini Vision"</span>
                  ],
                </div>

                <div className="pl-4">
                  <span className="text-[#BDB76B]">internships:</span>{' '}
                  <span className="text-[#D4AF37]">"Codveda & MLSA KIET"</span>,
                </div>

                <div className="pl-4">
                  <span className="text-[#BDB76B]">problemSolving:</span>{' '}
                  <span className="text-[#D4AF37]">"250+ LeetCode Solved"</span>,
                </div>

                <div className="pl-4">
                  <span className="text-[#BDB76B]">certifications:</span>{' '}
                  <span className="text-[#CE8946]">"AWS Cloud Practitioner, Cisco"</span>,
                </div>

                <div className="pl-4">
                  <span className="text-[#BDB76B]">status:</span>{' '}
                  <span className="text-[#D4AF37] font-bold">"Open to Opportunities"</span>
                </div>

                <div>{'}'};</div>

                <div className="mt-4 pt-3 border-t border-[#BDB76B]/25 flex items-center justify-between text-xs text-[#FDFBD4]/70">
                  <span className="flex items-center gap-1.5 text-[#D4AF37] font-medium">
                    <Sparkles className="w-3.5 h-3.5" />
                    Production Ready Code
                  </span>
                  <span className="text-[#BDB76B]">MERN + AI Stack</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
