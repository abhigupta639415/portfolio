import React from 'react';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-16 relative bg-[#FDFBD4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-[2px] bg-[#D4AF37]" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#CE8946]">
              03 &middot; Education
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#171717]">
            Academic Background
          </h2>
        </div>

        {/* Education Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] border border-[#BDB76B]/35 hover:border-[#D4AF37] transition-all duration-300 shadow-card-soft hover:shadow-card-hover">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
            
            {/* Degree and Institution */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDFBD4] text-[#CE8946] border border-[#BDB76B] text-xs font-mono font-bold">
                <GraduationCap className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Undergraduate Degree</span>
              </div>

              <h3 className="text-2xl font-bold text-[#171717] tracking-tight">
                {educationData.degree}
              </h3>

              <div className="flex flex-wrap items-center gap-4 text-sm text-[#5F5B50]">
                <span className="font-bold text-[#CE8946] text-base">
                  {educationData.institution}
                </span>
                <span className="text-[#BDB76B]">&bull;</span>
                <span className="flex items-center gap-1.5 text-xs font-mono text-[#5F5B50] font-semibold">
                  <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                  {educationData.duration}
                </span>
              </div>
            </div>

            {/* Status indicator */}
            <div className="shrink-0">
              <span className="px-3 py-1.5 rounded-xl bg-[#FDFBD4] text-[#171717] text-xs font-mono font-bold border border-[#BDB76B] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#CE8946]" />
                Batch 2023–2027 &middot; In Progress
              </span>
            </div>

          </div>

          {/* Relevant Coursework */}
          <div className="mt-8 pt-6 border-t border-[#BDB76B]/25">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#5F5B50] font-bold mb-3">
              <BookOpen className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Relevant Computer Science Coursework:</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {educationData.coursework.map((course, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-[#FDFBD4] border border-[#BDB76B] text-xs font-semibold text-[#24221D] hover:border-[#D4AF37] transition-colors"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
