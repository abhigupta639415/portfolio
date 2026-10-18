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
  FileCheck
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience({ onOpenCertificate }) {
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
            Hands-on professional software engineering experience delivering real-world UI components and responsive workflows.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-10">
          {experienceData.map((exp, index) => (
            <div key={index} className="relative group">
              
              {/* Timeline Marker */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-sky-400 group-hover:bg-sky-400 transition-colors shadow-glow-sm" />

              <div className="p-6 sm:p-8 rounded-2xl bg-[#0c121e] border border-white/[0.08] hover:border-sky-500/30 transition-all duration-300 shadow-xl">
                
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {exp.position}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded text-xs font-mono font-semibold bg-sky-500/10 text-sky-300 border border-sky-500/20">
                        Internship
                      </span>
                      {exp.certificate && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          <FileCheck className="w-3.5 h-3.5" />
                          <span>Certificate Available</span>
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-slate-300 font-medium text-base mt-1">
                      <Building2 className="w-4 h-4 text-sky-400" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-white/5">
                      <Calendar className="w-3.5 h-3.5 text-sky-400" />
                      {exp.duration}
                    </span>
                  </div>
                </div>

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
                <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
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

                  {/* View Certificate Button for Codveda */}
                  {exp.certificate && (
                    <button
                      type="button"
                      onClick={() => onOpenCertificate && onOpenCertificate(exp.certificate)}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 hover:text-white border border-sky-400/30 text-xs font-semibold font-mono transition-all self-start sm:self-auto shrink-0"
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
