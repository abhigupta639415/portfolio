import React from 'react';
import { GraduationCap, Calendar, BookOpen, MapPin, Award } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-[2px] bg-sky-400" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
              03 &middot; Education
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Academic Background
          </h2>
        </div>

        {/* Education Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0c121e] border border-white/[0.08] hover:border-indigo-500/30 transition-all duration-300 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
            
            {/* Degree and Institution */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-xs font-mono">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Undergraduate Degree</span>
              </div>

              <h3 className="text-2xl font-bold text-white tracking-tight">
                {educationData.degree}
              </h3>

              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
                <span className="font-semibold text-slate-200">
                  {educationData.institution}
                </span>
                <span className="text-slate-500">&bull;</span>
                <span className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <Calendar className="w-3.5 h-3.5 text-sky-400" />
                  {educationData.duration}
                </span>
              </div>
            </div>

            {/* Status indicator */}
            <div className="shrink-0">
              <span className="px-3 py-1.5 rounded-lg bg-slate-800/80 text-emerald-400 text-xs font-mono font-medium border border-emerald-500/20 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Active Student &middot; In Progress
              </span>
            </div>

          </div>

          {/* Relevant Coursework */}
          <div className="mt-8 pt-6 border-t border-white/[0.08]">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
              <BookOpen className="w-3.5 h-3.5 text-sky-400" />
              <span>Relevant Computer Science Coursework:</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {educationData.coursework.map((course, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 border border-white/[0.06] text-xs font-medium text-slate-300 hover:text-white hover:border-slate-600 transition-colors"
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
