import React, { useState } from 'react';
import { ChevronDown, FolderGit2 } from 'lucide-react';
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

  // Calculate average impact score for domain metric
  const avgImpact = (
    problems.reduce((acc, curr) => acc + (curr.scores?.impact || 0), 0) / (problems.length || 1)
  ).toFixed(1);

  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden transition-all duration-200 shadow-sm hover:shadow-md">
      
      {/* Domain Header / Accordion Bar */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="p-3.5 sm:p-5 bg-white border-b border-slate-100 cursor-pointer flex items-center justify-between gap-3 select-none hover:bg-slate-50/80 transition-colors"
      >
        {/* Left Side: Folder Icon & Domain Title */}
        <div className="flex items-start sm:items-center gap-3 min-w-0">
          <div className="p-2 sm:p-2.5 bg-red-50 border border-red-200/80 rounded-xl text-red-600 shrink-0 mt-0.5 sm:mt-0">
            <FolderGit2 className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-sm sm:text-base font-extrabold text-slate-900 tracking-tight truncate">
                {domainTitle}
              </h2>
              
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-slate-100 text-slate-700 border border-slate-200 shrink-0">
                {problems.length} {problems.length === 1 ? 'Problem' : 'Problems'}
              </span>
            </div>
            
            <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 line-clamp-1">
              Verified government failure points & evidence logs
            </p>
          </div>
        </div>

        {/* Right Side: Score Metric & Expand Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          
          {/* Domain Score Pill (Visible on all screens) */}
          <div className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 bg-red-50/80 border border-red-200/60 rounded-lg text-[11px] sm:text-xs font-mono">
            <span className="text-slate-500 hidden sm:inline">Avg Impact:</span>
            <span className="text-red-600 font-extrabold">{avgImpact}/10</span>
          </div>

          <button 
            type="button" 
            aria-label="Toggle section" 
            className="p-1 sm:p-1.5 text-slate-400 hover:text-slate-700 rounded-lg transition-colors"
          >
            <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-red-600' : ''}`} />
          </button>
        </div>
      </div>

      {/* Domain Problems Grid */}
      {isOpen && (
        <div className="p-3 sm:p-5 space-y-3 sm:space-y-4 bg-slate-50/50">
          {problems.map((problem) => (
            <ProblemCard
              key={problem.id}
              problem={problem}
              isExpanded={expandedProblemId === problem.id}
              onToggle={() => onToggleProblem(problem.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}