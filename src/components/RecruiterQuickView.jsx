import React, { useState } from 'react';
import {
  Briefcase,
  Check,
  Copy,
  ExternalLink,
  FileText,
  Github,
  Linkedin,
  Mail,
  Phone,
  Code2,
  Cloud,
  Layers,
  ArrowRight
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function RecruiterQuickView({ onOpenResume }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-16">
      <div className="rounded-2xl bg-gradient-to-r from-[#0d1424] via-[#0f172a] to-[#0d1424] border border-sky-500/20 shadow-xl p-5 sm:p-6 backdrop-blur-md">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          
          {/* Left summary info */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold uppercase tracking-wider bg-sky-500/20 text-sky-300 border border-sky-500/30">
                Recruiter Fast-Track
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Key Credentials at a Glance
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-1.5 font-medium">
                <span className="text-slate-400 font-normal">Candidate:</span>
                <span className="text-white font-semibold">Abhishek Gupta</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-slate-400 font-normal">Target:</span>
                <span className="text-sky-300 font-medium">Software Engineering / Full-Stack</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-slate-400 font-normal">Location:</span>
                <span className="text-slate-200">Ghaziabad, India</span>
              </div>
            </div>

            {/* Quick Proof Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-mono">
              <span className="px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 border border-white/5 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-sky-400" />
                2 Deployed Apps
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 border border-white/5 flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                250+ LeetCode DSA
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 border border-white/5 flex items-center gap-1.5">
                <Cloud className="w-3.5 h-3.5 text-amber-400" />
                AWS Cloud Practitioner
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 border border-white/5 flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
                Frontend Intern (Codveda)
              </span>
            </div>
          </div>

          {/* Right Action buttons */}
          <div className="flex flex-wrap items-center gap-2.5 shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-white/[0.08]">
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-slate-500 transition-colors"
              title="Copy email to clipboard"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
              <span>{copiedEmail ? 'Email Copied!' : 'Copy Email'}</span>
            </button>

            <button
              onClick={copyPhone}
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-slate-500 transition-colors"
              title="Copy phone number"
            >
              {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Phone className="w-3.5 h-3.5 text-slate-400" />}
              <span>{copiedPhone ? 'Phone Copied!' : 'Copy Phone'}</span>
            </button>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-white shadow-md shadow-sky-500/20 transition-all"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </button>

            <button
              onClick={scrollToProjects}
              className="inline-flex items-center gap-1 text-xs font-medium px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            >
              <span>Projects</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
