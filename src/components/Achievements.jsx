import React from 'react';
import { Cloud, Trophy, Terminal, Award, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export default function Achievements() {
  const getIcon = (icon) => {
    switch (icon) {
      case 'Cloud':
        return <Cloud className="w-6 h-6 text-amber-400" />;
      case 'Trophy':
        return <Trophy className="w-6 h-6 text-sky-400" />;
      case 'Terminal':
        return <Terminal className="w-6 h-6 text-indigo-400" />;
      default:
        return <Award className="w-6 h-6 text-sky-400" />;
    }
  };

  const getBadgeStyle = (icon) => {
    switch (icon) {
      case 'Cloud':
        return 'bg-amber-500/10 text-amber-300 border-amber-500/20';
      case 'Trophy':
        return 'bg-sky-500/10 text-sky-300 border-sky-500/20';
      case 'Terminal':
        return 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20';
      default:
        return 'bg-slate-800 text-slate-300 border-white/10';
    }
  };

  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-[2px] bg-sky-400" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
              08 &middot; Recognition
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Honors & Certifications
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl">
            Recognitions verifying technical diligence, competitive problem solving, and cloud architecture fundamentals.
          </p>
        </div>

        {/* 3 Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievementsData.map((item, index) => (
            <div
              key={index}
              className="p-6 sm:p-7 rounded-2xl bg-[#0c121e] border border-white/[0.08] hover:border-sky-500/30 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/90 border border-white/5 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(item.icon)}
                  </div>
                  <span className={`px-2.5 py-0.5 rounded text-xs font-mono font-semibold border ${getBadgeStyle(item.icon)}`}>
                    {item.badge}
                  </span>
                </div>

                <div className="text-xs font-mono text-slate-400 mb-1">
                  {item.type}
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight mb-3">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Credential</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
