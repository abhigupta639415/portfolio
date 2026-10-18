import React, { useState } from 'react';
import {
  Code,
  Layout,
  Server,
  Database,
  ShieldCheck,
  Brain,
  Wrench,
  Sparkles,
  Check
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { key: 'all', label: 'All Categories' },
    { key: 'languages', label: 'Languages', icon: <Code className="w-4 h-4 text-sky-400" /> },
    { key: 'frontend', label: 'Frontend', icon: <Layout className="w-4 h-4 text-blue-400" /> },
    { key: 'backend', label: 'Backend', icon: <Server className="w-4 h-4 text-emerald-400" /> },
    { key: 'database', label: 'Database', icon: <Database className="w-4 h-4 text-teal-400" /> },
    { key: 'authSecurity', label: 'Auth & Security', icon: <ShieldCheck className="w-4 h-4 text-amber-400" /> },
    { key: 'aiIntegration', label: 'AI Integration', icon: <Brain className="w-4 h-4 text-purple-400" /> },
    { key: 'toolsPlatforms', label: 'Tools & Platforms', icon: <Wrench className="w-4 h-4 text-slate-400" /> },
  ];

  const categoryEntries = Object.entries(skillsData);

  const filteredEntries = activeCategory === 'all'
    ? categoryEntries
    : categoryEntries.filter(([key]) => key === activeCategory);

  const getCategoryIcon = (key) => {
    switch (key) {
      case 'languages':
        return <Code className="w-5 h-5 text-sky-400" />;
      case 'frontend':
        return <Layout className="w-5 h-5 text-blue-400" />;
      case 'backend':
        return <Server className="w-5 h-5 text-emerald-400" />;
      case 'database':
        return <Database className="w-5 h-5 text-teal-400" />;
      case 'authSecurity':
        return <ShieldCheck className="w-5 h-5 text-amber-400" />;
      case 'aiIntegration':
        return <Brain className="w-5 h-5 text-purple-400" />;
      case 'toolsPlatforms':
        return <Wrench className="w-5 h-5 text-indigo-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-[2px] bg-sky-400" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
              06 &middot; Technical Stack
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Technical Skills
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl">
            Strictly focused on demonstrated expertise in modern full-stack development, algorithms, cloud services, and AI APIs.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 ${
                activeCategory === cat.key
                  ? 'bg-sky-500 text-white font-semibold shadow-md shadow-sky-500/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-white/5'
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEntries.map(([key, group]) => (
            <div
              key={key}
              className="p-6 rounded-2xl bg-[#0c121e] border border-white/[0.08] hover:border-sky-500/30 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/[0.06]">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-slate-800/90 border border-white/5 flex items-center justify-center">
                      {getCategoryIcon(key)}
                    </div>
                    <h3 className="font-bold text-white text-base tracking-tight">
                      {group.category}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">
                    {group.skills.length} skills
                  </span>
                </div>

                {/* Skills list */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-white/[0.07] text-xs font-mono text-slate-200 hover:text-sky-300 hover:border-sky-500/40 hover:bg-slate-800 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400/80" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-white/[0.04] text-[11px] font-mono text-slate-500">
                Verified in live projects & practice
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
