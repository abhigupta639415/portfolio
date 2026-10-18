import React, { useState } from 'react';
import {
  Briefcase,
  Check,
  Copy,
  FileText,
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
      <div className="rounded-2xl bg-[#FFFFFF] border border-[#BDB76B]/40 shadow-card-soft p-5 sm:p-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          
          {/* Left summary info */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider bg-[#D4AF37]/20 text-[#171717] border border-[#D4AF37]/40">
                Recruiter Fast-Track
              </span>
              <span className="text-xs text-[#5F5B50] font-mono">
                Key Credentials at a Glance
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-[#24221D]">
              <div className="flex items-center gap-1.5 font-medium">
                <span className="text-[#5F5B50] font-normal">Candidate:</span>
                <span className="text-[#171717] font-bold">Abhishek Gupta</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[#5F5B50] font-normal">Target:</span>
                <span className="text-[#CE8946] font-semibold">Software Engineering / Full-Stack</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[#5F5B50] font-normal">Location:</span>
                <span className="text-[#24221D]">Ghaziabad, India</span>
              </div>
            </div>

            {/* Quick Proof Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-mono">
              <span className="px-2.5 py-1 rounded-md bg-[#FDFBD4] text-[#24221D] border border-[#BDB76B]/40 flex items-center gap-1.5 font-medium">
                <Layers className="w-3.5 h-3.5 text-[#CE8946]" />
                2 Deployed Apps
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#FDFBD4] text-[#24221D] border border-[#BDB76B]/40 flex items-center gap-1.5 font-medium">
                <Code2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                250+ LeetCode DSA
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#FDFBD4] text-[#24221D] border border-[#BDB76B]/40 flex items-center gap-1.5 font-medium">
                <Cloud className="w-3.5 h-3.5 text-[#CE8946]" />
                AWS Cloud Practitioner
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#FDFBD4] text-[#24221D] border border-[#BDB76B]/40 flex items-center gap-1.5 font-medium">
                <Briefcase className="w-3.5 h-3.5 text-[#D4AF37]" />
                2 Internships (Codveda & MLSA)
              </span>
            </div>
          </div>

          {/* Right Action buttons */}
          <div className="flex flex-wrap items-center gap-2.5 shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-[#BDB76B]/30">
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-xl bg-[#FDFBD4] hover:bg-[#BDB76B]/30 text-[#171717] border border-[#BDB76B] transition-colors"
              title="Copy email to clipboard"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#CE8946]" /> : <Copy className="w-3.5 h-3.5 text-[#5F5B50]" />}
              <span>{copiedEmail ? 'Email Copied!' : 'Copy Email'}</span>
            </button>

            <button
              onClick={copyPhone}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-xl bg-[#FDFBD4] hover:bg-[#BDB76B]/30 text-[#171717] border border-[#BDB76B] transition-colors"
              title="Copy phone number"
            >
              {copiedPhone ? <Check className="w-3.5 h-3.5 text-[#CE8946]" /> : <Phone className="w-3.5 h-3.5 text-[#5F5B50]" />}
              <span>{copiedPhone ? 'Phone Copied!' : 'Copy Phone'}</span>
            </button>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-xl bg-[#D4AF37] hover:bg-[#CE8946] text-[#171717] hover:text-white shadow-sm transition-all"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </button>

            <button
              onClick={scrollToProjects}
              className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-2 rounded-xl bg-transparent hover:bg-[#FDFBD4] text-[#24221D] border border-transparent hover:border-[#BDB76B] transition-colors"
            >
              <span>Projects</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#5F5B50]" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
