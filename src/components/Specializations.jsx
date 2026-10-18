import React from 'react';
import { Layers, Brain, Server, Layout, ArrowRight, Sparkles } from 'lucide-react';
import { specializationsData } from '../data/portfolioData';

export default function Specializations() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="w-6 h-6 text-sky-400" />;
      case 'Brain':
        return <Brain className="w-6 h-6 text-purple-400" />;
      case 'Server':
        return <Server className="w-6 h-6 text-emerald-400" />;
      case 'Layout':
        return <Layout className="w-6 h-6 text-indigo-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-sky-400" />;
    }
  };

  const getBorderColor = (color) => {
    switch (color) {
      case 'sky':
        return 'group-hover:border-sky-500/40 group-hover:shadow-sky-500/10';
      case 'indigo':
        return 'group-hover:border-purple-500/40 group-hover:shadow-purple-500/10';
      case 'emerald':
        return 'group-hover:border-emerald-500/40 group-hover:shadow-emerald-500/10';
      case 'violet':
        return 'group-hover:border-indigo-500/40 group-hover:shadow-indigo-500/10';
      default:
        return 'group-hover:border-sky-500/40';
    }
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-[2px] bg-sky-400" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
              04 &middot; Core Competencies
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            What I Build
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl">
            Architecting end-to-end applications from responsive user interfaces to resilient backend APIs and AI model integrations.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specializationsData.map((spec, index) => (
            <div
              key={index}
              className={`group p-6 rounded-2xl bg-[#0c121e] border border-white/[0.08] ${getBorderColor(spec.color)} transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between`}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-800/90 border border-white/5 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  {getIcon(spec.icon)}
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight mb-2.5">
                  {spec.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {spec.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-500 group-hover:text-slate-300 transition-colors">
                <span>Production Focus</span>
                <span className="text-sky-400">0{index + 1}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
