import React, { useState } from 'react';
import {
  Code,
  Layout,
  Server,
  Database,
  Wrench,
  Cpu,
  Sparkles
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { key: 'all', label: 'All Categories' },
    { key: 'languages', label: 'Languages', icon: <Code className="w-4 h-4 text-[#D4AF37]" /> },
    { key: 'frontend', label: 'Frontend', icon: <Layout className="w-4 h-4 text-[#CE8946]" /> },
    { key: 'backend', label: 'Backend', icon: <Server className="w-4 h-4 text-[#BDB76B]" /> },
    { key: 'database', label: 'Database', icon: <Database className="w-4 h-4 text-[#D4AF37]" /> },
    { key: 'tools', label: 'Tools', icon: <Wrench className="w-4 h-4 text-[#CE8946]" /> },
    { key: 'core', label: 'Core', icon: <Cpu className="w-4 h-4 text-[#BDB76B]" /> },
  ];

  const categoryEntries = Object.entries(skillsData);

  const filteredEntries = activeCategory === 'all'
    ? categoryEntries
    : categoryEntries.filter(([key]) => key === activeCategory);

  const getCategoryIcon = (key) => {
    switch (key) {
      case 'languages':
        return <Code className="w-5 h-5 text-[#D4AF37]" />;
      case 'frontend':
        return <Layout className="w-5 h-5 text-[#CE8946]" />;
      case 'backend':
        return <Server className="w-5 h-5 text-[#BDB76B]" />;
      case 'database':
        return <Database className="w-5 h-5 text-[#D4AF37]" />;
      case 'tools':
        return <Wrench className="w-5 h-5 text-[#CE8946]" />;
      case 'core':
        return <Cpu className="w-5 h-5 text-[#D4AF37]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-[#FDFBD4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-[2px] bg-[#D4AF37]" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#CE8946]">
              06 &middot; Technical Stack
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#171717]">
            Technical Skills
          </h2>
          <p className="text-sm sm:text-base text-[#5F5B50] mt-2 max-w-xl">
            Strictly focused on demonstrated expertise in modern full-stack development, algorithms, cloud services, and AI APIs.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 ${
                activeCategory === cat.key
                  ? 'bg-[#D4AF37] text-[#171717] shadow-sm'
                  : 'bg-[#FFFFFF] text-[#5F5B50] hover:text-[#171717] hover:bg-[#FDFBD4] border border-[#BDB76B]/40'
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
              className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#BDB76B]/35 hover:border-[#D4AF37] transition-all duration-300 shadow-card-soft hover:shadow-card-hover flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#BDB76B]/25">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FDFBD4] border border-[#BDB76B]/35 flex items-center justify-center">
                      {getCategoryIcon(key)}
                    </div>
                    <h3 className="font-extrabold text-[#171717] text-base tracking-tight">
                      {group.category}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-[#5F5B50] font-semibold">
                    {group.skills.length} skills
                  </span>
                </div>

                {/* Minimal Skill Pills (Background: #FDFBD4, Border: #BDB76B, Text: #24221D, Hover: #D4AF37) */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FDFBD4] border border-[#BDB76B] text-xs font-mono font-semibold text-[#24221D] hover:border-[#D4AF37] hover:bg-[#D4AF37]/20 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#CE8946]" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[#BDB76B]/20 text-[11px] font-mono text-[#5F5B50]">
                Verified in live projects & practice
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
