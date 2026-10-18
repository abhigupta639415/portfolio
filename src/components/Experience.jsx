import React from 'react';
import {
  Briefcase,
  Calendar,
  Building2,
  Code2,
  CheckCircle2,
  Eye,
  FileCheck,
  MapPin,
  Shield
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience({ onOpenCertificate }) {
  const getCompanyLogo = (expId, company) => {
    if (expId === 'mlsa-experience' || company.includes('MLSA')) {
      return (
        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#CE8946] p-[1.5px] shadow-sm shrink-0">
          <div className="w-full h-full bg-[#FFFFFF] rounded-[9px] flex items-center justify-center p-1">
            {/* Microsoft Learn Student Ambassador Shield Emblem in Golden Taupe */}
            <svg viewBox="0 0 32 32" className="w-6 h-6 text-[#CE8946]" fill="currentColor">
              <path d="M16 2L4 6v9c0 8.5 5.5 14 12 15 6.5-1 12-6.5 12-15V6L16 2z" fill="#D4AF37" opacity="0.25" />
              <path d="M16 4.2L6 7.5v7.5c0 7.2 4.5 11.8 10 12.8 5.5-1 10-5.6 10-12.8V7.5L16 4.2z" fill="none" stroke="#CE8946" strokeWidth="1.5" />
              <circle cx="16" cy="11.5" r="2.5" fill="#CE8946" />
              <path d="M12 19.5c0-2.2 1.8-3.5 4-3.5s4 1.3 4 3.5" fill="none" stroke="#CE8946" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      );
    }

    // Codveda emblem
    return (
      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#BDB76B] p-[1.5px] shadow-sm shrink-0">
        <div className="w-full h-full bg-[#FFFFFF] rounded-[9px] flex items-center justify-center font-mono font-bold text-xs text-[#171717]">
          CV
        </div>
      </div>
    );
  };

  return (
    <section id="experience" className="py-20 relative bg-[#FDFBD4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-[2px] bg-[#D4AF37]" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#CE8946]">
              02 &middot; Career
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#171717]">
            Work Experience
          </h2>
          <p className="text-sm sm:text-base text-[#5F5B50] mt-2 max-w-xl">
            Hands-on professional engineering internships delivering production frontend architectures, full-stack web applications, and collaborative Git workflows.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-[#D4AF37] ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-12">
          {experienceData.map((exp, index) => (
            <div key={exp.id || index} className="relative group">
              
              {/* Timeline Marker */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-2 w-4 h-4 rounded-full bg-[#FFFFFF] border-2 border-[#D4AF37] group-hover:bg-[#CE8946] group-hover:border-[#CE8946] transition-colors shadow-sm" />

              <div className="p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] border border-[#BDB76B]/35 hover:border-[#D4AF37] transition-all duration-300 shadow-card-soft hover:shadow-card-hover">
                
                {/* Header info */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-5">
                  <div className="flex items-start gap-3.5">
                    {getCompanyLogo(exp.id, exp.company)}
                    
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h3 className="text-xl sm:text-2xl font-bold text-[#171717] tracking-tight">
                          {exp.position}
                        </h3>
                        <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-[#FDFBD4] text-[#171717] border border-[#BDB76B]">
                          {exp.employmentType || 'Internship'}
                        </span>
                        {exp.certificate && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-[#D4AF37]/15 text-[#171717] border border-[#D4AF37]/40">
                            <FileCheck className="w-3.5 h-3.5 text-[#CE8946]" />
                            <span>Certificate Available</span>
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2 text-[#5F5B50] font-medium text-sm sm:text-base mt-1">
                        <Building2 className="w-4 h-4 text-[#CE8946]" />
                        <span className="font-bold text-[#CE8946]">{exp.company}</span>
                        <span className="text-[#BDB76B]">&middot;</span>
                        <span className="text-xs sm:text-sm text-[#5F5B50]">
                          {exp.employmentType || 'Internship'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Date & Location Badges */}
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#5F5B50]">
                    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FDFBD4] border border-[#BDB76B]/40 font-bold text-[#171717]">
                      <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                      {exp.duration} {exp.durationLabel && `\u00B7 ${exp.durationLabel}`}
                    </span>
                    {exp.location && (
                      <span className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#FFFFFF] border border-[#BDB76B]/30 text-[#5F5B50]">
                        <MapPin className="w-3 h-3 text-[#CE8946]" />
                        {exp.location} {exp.workMode && `\u00B7 ${exp.workMode}`}
                      </span>
                    )}
                  </div>
                </div>

                {/* Program note if present */}
                {exp.programNote && (
                  <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FDFBD4] border border-[#BDB76B] text-xs font-mono text-[#CE8946] font-bold">
                    <Shield className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{exp.programNote}</span>
                  </div>
                )}

                {/* Role Description */}
                <p className="text-[#24221D] text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {exp.description}
                </p>

                {/* Quantified Achievements */}
                <div className="space-y-3 mb-6">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#5F5B50] font-bold">
                    Key Contributions & Impact:
                  </div>
                  {exp.achievements.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1 w-4 h-4 rounded-full bg-[#D4AF37]/20 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#CE8946]" />
                      </div>
                      <p className="text-sm text-[#24221D] leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Bottom Bar: Technologies & View Certificate Action */}
                <div className="pt-4 border-t border-[#BDB76B]/25 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-mono text-[#5F5B50] flex items-center gap-1 font-semibold">
                      <Code2 className="w-3.5 h-3.5 text-[#CE8946]" />
                      Stack:
                    </span>
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-[#FDFBD4] border border-[#BDB76B] text-xs font-mono text-[#24221D]"
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
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#D4AF37] hover:bg-[#CE8946] text-[#171717] hover:text-white text-xs font-bold font-mono transition-all self-start sm:self-auto shrink-0 shadow-sm"
                    >
                      <Eye className="w-3.5 h-3.5" />
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
