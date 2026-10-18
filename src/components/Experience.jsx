import React from 'react';
import {
  Briefcase,
  Calendar,
  Building2,
  Code2,
  CheckCircle2,
  Award,
  ExternalLink,
  Eye,
  FileCheck,
  MapPin,
  Laptop,
  GitPullRequest,
  Shield
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience({ onOpenCertificate }) {
  const getCompanyLogo = (expId, company) => {
    if (expId === 'mlsa-experience' || company.includes('MLSA')) {
      return (
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-sky-500 to-indigo-700 p-[1.5px] shadow-md shadow-blue-500/20 shrink-0">
          <div className="w-full h-full bg-[#0d1527] rounded-[10px] flex items-center justify-center p-1">
            {/* Stylized Microsoft Learn Student Ambassador Shield Emblem */}
            <svg viewBox="0 0 32 32" className="w-6 h-6 text-sky-400" fill="currentColor">
              <path d="M16 2L4 6v9c0 8.5 5.5 14 12 15 6.5-1 12-6.5 12-15V6L16 2z" fill="#0284c7" opacity="0.25" />
              <path d="M16 4.2L6 7.5v7.5c0 7.2 4.5 11.8 10 12.8 5.5-1 10-5.6 10-12.8V7.5L16 4.2z" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
              {/* Ambassador glyph */}
              <circle cx="16" cy="11.5" r="2.5" fill="#38bdf8" />
              <path d="M12 19.5c0-2.2 1.8-3.5 4-3.5s4 1.3 4 3.5" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      );
    }

    // Default Codveda emblem
    return (
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 p-[1.5px] shadow-md shadow-sky-500/20 shrink-0">
        <div className="w-full h-full bg-[#0d1527] rounded-[10px] flex items-center justify-center font-mono font-bold text-xs text-sky-400">
          CV
        </div>
      </div>
    );
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-[2px] bg-sky-400" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
              02 &middot; Career
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Work Experience
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl">
            Hands-on professional engineering internships delivering production frontend architectures, full-stack web applications, and collaborative Git workflows.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-12">
          {experienceData.map((exp, index) => (
            <div key={exp.id || index} className="relative group">
              
              {/* Timeline Marker */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-sky-400 group-hover:bg-sky-400 transition-colors shadow-glow-sm" />

              <div className="p-6 sm:p-8 rounded-2xl bg-[#0c121e] border border-white/[0.08] hover:border-sky-500/30 transition-all duration-300 shadow-xl">
                
                {/* Header info */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-5">
                  <div className="flex items-start gap-3.5">
                    {getCompanyLogo(exp.id, exp.company)}
                    
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                          {exp.position}
                        </h3>
                        <span className="px-2.5 py-0.5 rounded text-xs font-mono font-semibold bg-sky-500/10 text-sky-300 border border-sky-500/20">
                          {exp.employmentType || 'Internship'}
                        </span>
                        {exp.certificate && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            <FileCheck className="w-3.5 h-3.5" />
                            <span>Certificate Available</span>
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2 text-slate-300 font-medium text-sm sm:text-base mt-1">
                        <Building2 className="w-4 h-4 text-sky-400" />
                        <span className="font-semibold text-white">{exp.company}</span>
                        <span className="text-slate-500">&middot;</span>
                        <span className="text-xs sm:text-sm text-slate-400">
                          {exp.employmentType || 'Internship'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Date & Location Badges */}
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-white/5 font-semibold text-slate-200">
                      <Calendar className="w-3.5 h-3.5 text-sky-400" />
                      {exp.duration} {exp.durationLabel && `\u00B7 ${exp.durationLabel}`}
                    </span>
                    {exp.location && (
                      <span className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-900/60 border border-white/5 text-slate-400">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        {exp.location} {exp.workMode && `\u00B7 ${exp.workMode}`}
                      </span>
                    )}
                  </div>
                </div>

                {/* Program note if present (e.g. 100-hour Full Stack Web Development Internship) */}
                {exp.programNote && (
                  <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-sky-300 font-medium">
                    <Shield className="w-3.5 h-3.5 text-sky-400" />
                    <span>{exp.programNote}</span>
                  </div>
                )}

                {/* Role Description */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {exp.description}
                </p>

                {/* Quantified Achievements */}
                <div className="space-y-3 mb-6">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    Key Contributions & Impact:
                  </div>
                  {exp.achievements.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1 w-4 h-4 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Bottom Bar: Technologies & View Certificate Action */}
                <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                      <Code2 className="w-3.5 h-3.5" />
                      Stack:
                    </span>
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-slate-800/80 text-xs font-mono text-sky-200 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Certificate Button */}
                  {exp.certificate && (
                    <button
                      type="button"
                      onClick={() => onOpenCertificate && onOpenCertificate(exp.certificate)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 hover:text-white border border-sky-400/30 text-xs font-semibold font-mono transition-all self-start sm:self-auto shrink-0 shadow-sm"
                    >
                      <Eye className="w-3.5 h-3.5 text-sky-400" />
                      <span>View Certificate</span>
                    </button>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
