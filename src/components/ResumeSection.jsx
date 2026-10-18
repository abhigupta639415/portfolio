import React from 'react';
import { FileText, Download, Eye, Sparkles, CheckCircle2 } from 'lucide-react';
import { resumeData, personalInfo } from '../data/portfolioData';

export default function ResumeSection({ onOpenResume }) {
  const handleDirectDownload = () => {
    const link = document.createElement('a');
    link.href = personalInfo.resumePdfUrl;
    link.download = 'Abhishek_Gupta_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-gradient-to-br from-[#0e1626] via-[#101b33] to-[#0d1424] border border-sky-500/20 p-8 sm:p-12 shadow-2xl overflow-hidden text-center">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-mono text-sky-300 mb-6">
              <FileText className="w-3.5 h-3.5" />
              <span>Recruiter-Ready Document</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              {resumeData.heading}
            </h2>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              {resumeData.text}
            </p>

            {/* Key items included in resume */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono text-slate-400 mb-9">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                2 Internships (Codveda & MLSA)
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                2 Deployed Projects
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                250+ DSA Problems
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                AWS & Cisco Certified
              </span>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={handleDirectDownload}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-sky-500/25 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                <span>{resumeData.ctaText}</span>
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-200 hover:text-white font-medium text-sm border border-slate-700 transition-colors"
              >
                <Eye className="w-4 h-4 text-sky-400" />
                <span>Preview Resume in Browser</span>
              </button>
            </div>

            <p className="text-xs text-slate-500 mt-5 font-mono">
              Formatted according to standard Software Engineer recruiter guidelines
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
