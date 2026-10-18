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
    { key: 'all', label: 'All Technologies' },
    { key: 'languages', label: 'Languages' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'database', label: 'Database' },
    { key: 'core', label: 'Core CS' },
    { key: 'tools', label: 'Tools' },
    { key: 'ai', label: 'AI / APIs' },
  ];

  const categoryEntries = Object.entries(skillsData);

  const filteredEntries = activeCategory === 'all'
    ? categoryEntries
    : categoryEntries.filter(([key]) => key === activeCategory);

  const getCategoryIcon = (key) => {
    switch (key) {
      case 'languages':
        return <Code className="w-4 h-4 text-[#C49A2C] dark:text-[#D4AF37]" />;
      case 'frontend':
        return <Layout className="w-4 h-4 text-[#CE8946]" />;
      case 'backend':
        return <Server className="w-4 h-4 text-[#C49A2C] dark:text-[#D4AF37]" />;
      case 'database':
        return <Database className="w-4 h-4 text-[#CE8946]" />;
      case 'core':
        return <Cpu className="w-4 h-4 text-[#C49A2C] dark:text-[#D4AF37]" />;
      case 'tools':
        return <Wrench className="w-4 h-4 text-[#CE8946]" />;
      case 'ai':
        return <Sparkles className="w-4 h-4 text-[#C49A2C] dark:text-[#D4AF37]" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#C49A2C] dark:text-[#D4AF37]" />;
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10 sm:mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-[2px] bg-[#C49A2C] dark:bg-[#D4AF37]" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C49A2C] dark:text-[#D4AF37]">
              04 &middot; Technical Stack
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#171717] dark:text-[#F5F3EA]">
            Skills & Competencies
          </h2>
          <p className="text-sm sm:text-base text-[#66645F] dark:text-[#B7B4AA] mt-2 max-w-xl">
            Categorized technical capabilities across modern full-stack development, algorithms, cloud services, and AI APIs.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setActiveCategory(cat.key)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-150 cursor-pointer ${
                activeCategory === cat.key
                  ? 'bg-[#171717] text-[#FAFAF8] dark:bg-[#F5F3EA] dark:text-[#171717] font-semibold shadow-2xs'
                  : 'bg-[#FFFFFF] dark:bg-[#1D1D1A] text-[#66645F] dark:text-[#B7B4AA] hover:text-[#171717] dark:hover:text-[#F5F3EA] border border-[#E7E3D8] dark:border-[#34332E]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredEntries.map(([key, group]) => (
            <div
              key={key}
              className="p-5 sm:p-6 rounded-2xl bg-[#FFFFFF] dark:bg-[#1D1D1A] border border-[#E7E3D8] dark:border-[#34332E] hover:border-[#C49A2C] dark:hover:border-[#D4AF37] transition-all duration-200 shadow-2xs hover:shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#E7E3D8] dark:border-[#34332E]">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-[#FAFAF8] dark:bg-[#23231F] border border-[#E7E3D8] dark:border-[#34332E]">
                      {getCategoryIcon(key)}
                    </div>
                    <h3 className="text-sm font-bold text-[#171717] dark:text-[#F5F3EA]">
                      {group.category}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-[#66645F] dark:text-[#B7B4AA]">
                    {group.skills.length} skills
                  </span>
                </div>

                {/* Theme-Aware Skill Pills (Requirement #23) */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-150 cursor-default
                        bg-[#F4E8C1] dark:bg-[#29281F]
                        text-[#171717] dark:text-[#F5F3EA]
                        border border-[#E7E3D8] dark:border-[#34332E]
                        hover:border-[#C49A2C] dark:hover:border-[#D4AF37] hover:scale-102"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
