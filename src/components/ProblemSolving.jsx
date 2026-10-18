import React from 'react';
import {
  Code2,
  ExternalLink,
  Terminal,
  Binary,
  Layers,
  Sparkles,
  CheckCircle2,
  GitBranch,
  Cpu
} from 'lucide-react';
import { problemSolvingData } from '../data/portfolioData';

export default function ProblemSolving() {
  return (
    <section id="problem-solving" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-[2px] bg-sky-400" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
              07 &middot; Algorithms & DSA
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between w-full gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                {problemSolvingData.heading}
              </h2>
              <p className="text-base text-sky-300 font-mono mt-1 font-semibold">
                {problemSolvingData.summary}
              </p>
            </div>

            <a
              href={problemSolvingData.leetcodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs sm:text-sm shadow-md shadow-amber-500/20 transition-all shrink-0"
            >
              <Code2 className="w-4 h-4" />
              <span>View My LeetCode</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Highlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
          
          {/* Left summary card */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#0c121e] border border-white/[0.08] shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                Core Competence
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                Data Structures & Algorithms
              </span>
            </div>

            <div className="text-4xl sm:text-5xl font-extrabold text-white font-mono tracking-tight mb-2">
              250+
            </div>
            <div className="text-sm font-semibold text-slate-200 mb-4">
              Algorithmic Problems Solved
            </div>
            
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              Continuous focus on optimal time and space complexity, scalable data structures, recursion trees, and dynamic programming state transitions.
            </p>

            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Platform: LeetCode</span>
              <span className="text-emerald-400 font-semibold">Verified Problem Practice</span>
            </div>
          </div>

          {/* Right algorithmic snippet terminal card */}
          <div className="lg:col-span-7 rounded-2xl bg-[#090d16] border border-white/[0.08] p-5 shadow-2xl font-mono text-xs">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-3 text-slate-400">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-amber-400" />
                <span>dsa_approach.cpp</span>
              </div>
              <span className="text-[11px] text-slate-500">C++ / JavaScript</span>
            </div>

            <div className="space-y-1 text-slate-300 leading-relaxed overflow-x-auto">
              <div className="text-slate-500">// Problem Solving Strategy & Complexity Mindset</div>
              <div>
                <span className="text-sky-400">class</span> <span className="text-amber-300">Solution</span> {'{'}
              </div>
              <div className="pl-4">
                <span className="text-sky-400">public</span>:
              </div>
              <div className="pl-6">
                <span className="text-slate-400">// Systematic breakdown: Edge cases &rarr; Invariant formulation &rarr; Optimal Time/Space</span>
              </div>
              <div className="pl-6">
                <span className="text-indigo-400">bool</span> <span className="text-emerald-300">solveProblem</span>(vector&lt;<span className="text-indigo-400">int</span>&gt;& nums) {'{'}
              </div>
              <div className="pl-10 text-slate-400">
                <span className="text-purple-400">int</span> left = 0, right = nums.size() - 1;
              </div>
              <div className="pl-10 text-slate-400">
                <span className="text-purple-400">while</span> (left &lt;= right) {'{'}
              </div>
              <div className="pl-14 text-emerald-300">
                <span className="text-purple-400">int</span> mid = left + (right - left) / 2;
              </div>
              <div className="pl-14 text-slate-400">
                <span className="text-slate-500">// O(log N) optimal logarithmic convergence</span>
              </div>
              <div className="pl-10 text-slate-400">{'}'}</div>
              <div className="pl-10">
                <span className="text-purple-400">return</span> <span className="text-sky-400">true</span>;
              </div>
              <div className="pl-6">{'}'}</div>
              <div>{'};'}</div>
            </div>
          </div>

        </div>

        {/* 8 Topics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {problemSolvingData.topics.map((topic, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-[#0c121e] border border-white/[0.06] hover:border-amber-500/30 transition-all duration-200"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <Binary className="w-4 h-4 text-amber-400" />
                <h4 className="text-sm font-bold text-white font-mono">
                  {topic.name}
                </h4>
              </div>
              <p className="text-[11px] text-slate-400 leading-snug">
                {topic.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
