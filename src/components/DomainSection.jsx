import React, { useState } from 'react';
import { ChevronDown, FolderGit2, Flame } from 'lucide-react';
import ProblemCard from './ProblemCard';

/**
 * DomainSection Component
 * Crisp White + Crimson Red style optimized for mobile & desktop screens.
 */
export default function DomainSection({ 
  domainTitle, 
  problems = [], 
  expandedProblemId, 
  onToggleProblem,
  defaultOpen = true 
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  // Calculate average impact score for domain metric safely
  const avgImpact = problems.length > 0
    ? (problems.reduce((acc, curr) => acc + (curr.scores?.impact || 0), 0) / problems.length).toFixed(1)
    : '0.0';

  return (
    <div className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden transition-all duration-300 shadow-xs hover:shadow-md">
      
      {/* Domain Header / Accordion Bar */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="p-3.5 sm:p-5 bg-white border-b border-slate-100 cursor-pointer flex items-center justify-between gap-3 select-none hover:bg-slate-50/80 transition-colors"
      >
        {/* Left Side: Folder Icon & Domain Title */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="p-2 sm:p-2.5 bg-red-50 border border-red-100 rounded-xl text-red-600 shrink-0 shadow-xs">
            <FolderGit2 className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-sm sm:text-base font-extrabold text-slate-900 tracking-tight truncate">
                {domainTitle}
              </h2>
              
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-slate-100/90 text-slate-700 border border-slate-200/80 shrink-0">
                {problems.length} {problems.length === 1 ? 'Problem' : 'Problems'}
              </span>
            </div>
            
            <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 line-clamp-1 font-medium">
              Verified government failure points & evidence logs
            </p>
          </div>
        </div>

        {/* Right Side: Score Metric & Expand Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          
          {/* Domain Score Pill */}
          <div className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 bg-red-50/90 border border-red-200/70 rounded-xl text-[11px] sm:text-xs font-mono shadow-xs">
            <Flame className="w-3.5 h-3.5 text-red-600 shrink-0" />
            <span className="text-slate-500 hidden sm:inline font-sans font-medium">Avg Impact:</span>
            <span className="text-red-700 font-extrabold font-mono">{avgImpact}/10</span>
          </div>

          <button 
            type="button" 
            aria-label="Toggle section" 
            className="p-1 sm:p-1.5 text-slate-400 hover:text-slate-700 rounded-xl transition-colors cursor-pointer"
          >
            <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-red-600' : ''}`} />
          </button>
        </div>
      </div>

      {/* Smooth Accordion Body for Domain Problems Grid */}
      <div 
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-3 sm:p-5 space-y-3 sm:space-y-4 bg-slate-50/60 border-t border-slate-100">
            {problems.map((problem) => (
              <ProblemCard
                key={problem.id}
                problem={problem}
                isExpanded={expandedProblemId === problem.id}
                onToggle={() => onToggleProblem(problem.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}