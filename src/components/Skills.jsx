import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code,
  Layout,
  Server,
  Database,
  Wrench,
  Cpu,
  Sparkles,
  Layers,
  ArrowUpRight
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

  // Primary highlight tech stack pills with proficiency indicators
  const featuredStack = [
    { name: 'React.js', role: 'Frontend Architecture' },
    { name: 'Node.js', role: 'Backend Runtime' },
    { name: 'Express.js', role: 'RESTful APIs' },
    { name: 'MongoDB', role: 'NoSQL Document Store' },
    { name: 'Google Gemini', role: 'Generative AI Integration' },
    { name: 'Tailwind CSS', role: 'Modern UI Styling' },
  ];

  return (
    <section id="skills" className="py-20 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
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

        {/* Featured Tech Stack Orbit Bar */}
        <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-[#FFFFFF]/80 dark:bg-[#1D1D1A]/80 backdrop-blur-md border border-[#E7E3D8] dark:border-[#34332E] shadow-2xs">
          <div className="flex items-center gap-2 mb-3">
            <Layers className="w-4 h-4 text-[#C49A2C] dark:text-[#D4AF37]" />
            <span className="text-xs font-mono font-semibold text-[#171717] dark:text-[#F5F3EA] uppercase tracking-wider">
              Core Engineering Specialization
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {featuredStack.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -3, scale: 1.02 }}
                className="p-3 rounded-xl bg-[#FAFAF8] dark:bg-[#23231F] border border-[#E7E3D8] dark:border-[#34332E] hover:border-[#C49A2C] dark:hover:border-[#D4AF37] transition-all group"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-[#171717] dark:text-[#F5F3EA] group-hover:text-[#C49A2C] dark:group-hover:text-[#D4AF37] transition-colors">
                    {item.name}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C49A2C] dark:bg-[#D4AF37] opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-[10px] font-mono text-[#66645F] dark:text-[#B7B4AA] truncate">
                  {item.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Filter Tabs with Animated Framer Motion Layout Pill */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 no-scrollbar relative">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveCategory(cat.key)}
                className={`relative px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-colors duration-200 cursor-pointer ${
                  isActive
                    ? 'text-[#FAFAF8] dark:text-[#171717] font-semibold'
                    : 'text-[#66645F] dark:text-[#B7B4AA] hover:text-[#171717] dark:hover:text-[#F5F3EA]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillsTab"
                    className="absolute inset-0 rounded-full bg-[#171717] dark:bg-[#F5F3EA] shadow-sm z-0"
                    transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Categories Grid with Animated Layout Transitions */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredEntries.map(([key, group], idx) => (
              <motion.div
                key={key}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -15 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                whileHover={{ y: -4 }}
                className="p-5 sm:p-6 rounded-2xl bg-[#FFFFFF] dark:bg-[#1D1D1A] border border-[#E7E3D8] dark:border-[#34332E] hover:border-[#C49A2C] dark:hover:border-[#D4AF37] transition-all duration-200 shadow-2xs hover:shadow-lg flex flex-col justify-between group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#E7E3D8] dark:border-[#34332E]">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-[#FAFAF8] dark:bg-[#23231F] border border-[#E7E3D8] dark:border-[#34332E] group-hover:border-[#C49A2C]/50 dark:group-hover:border-[#D4AF37]/50 transition-colors">
                        {getCategoryIcon(key)}
                      </div>
                      <h3 className="text-sm font-bold text-[#171717] dark:text-[#F5F3EA]">
                        {group.category}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono text-[#66645F] dark:text-[#B7B4AA] bg-[#FAFAF8] dark:bg-[#23231F] px-2 py-0.5 rounded-full border border-[#E7E3D8] dark:border-[#34332E]">
                      {group.skills.length} skills
                    </span>
                  </div>

                  {/* Theme-Aware Skill Pills with Zero-Gravity Hover Physics */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {group.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.06, y: -2 }}
                        whileTap={{ scale: 0.96 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                        className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-150 cursor-default select-none
                          bg-[#F4E8C1] dark:bg-[#29281F]
                          text-[#171717] dark:text-[#F5F3EA]
                          border border-[#E7E3D8] dark:border-[#34332E]
                          hover:border-[#C49A2C] dark:hover:border-[#D4AF37] hover:shadow-[0_0_12px_rgba(212,175,55,0.2)]"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
