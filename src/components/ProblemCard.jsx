import React from 'react';
import { 
  ChevronDown, 
  FileText, 
  AlertTriangle, 
  Cpu, 
  ShieldCheck,
  UserCheck
} from 'lucide-react';
import Badge from './Badge';

/**
 * ProblemCard Component
 * Displays problem specifications, audit findings, root causes,
 * lead researcher attribution, and engineering feasibility.
 */
export default function ProblemCard({ 
  problem, 
  isExpanded = false, 
  onToggle 
}) {
  const { 
    id, 
    title, 
    dept, 
    leadResearcher = 'Saravanan T',
    evidence, 
    workflow, 
    rootCause, 
    failedTech, 
    affected, 
    techOpportunity, 
    feasibility, 
    scores = {} 
  } = problem;

  return (
    <div 
      className={`rounded-2xl transition-all duration-300 overflow-hidden ${
        isExpanded 
          ? 'glass-panel-active ring-1 ring-red-600/30 shadow-lg shadow-red-100/50' 
          : 'glass-panel hover:border-slate-300'
      }`}
    >
      {/* Header Bar */}
      <div 
        onClick={onToggle}
        className="p-4 sm:p-5 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-3 select-none hover:bg-slate-50/60 transition-colors"
      >
        <div className="space-y-1.5 flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-md text-[10px] sm:text-[11px] font-mono font-bold bg-red-600 text-white border border-red-500 shadow-xs">
              Problem #{id}
            </span>

            <span className="text-xs text-slate-500 font-mono truncate max-w-xs sm:max-w-md font-medium">
              {dept}
            </span>

            {leadResearcher && (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-red-700 bg-red-50 border border-red-200/80 px-2 py-0.5 rounded-md">
                <UserCheck className="w-3 h-3 text-red-600" />
                {leadResearcher}
              </span>
            )}
          </div>

          <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900 leading-snug">
            {title}
          </h3>
        </div>

        {/* Quick Metric Badges */}
        <div className="flex items-center justify-between md:justify-end gap-3 border-t md:border-t-0 border-slate-100 pt-2.5 md:pt-0 shrink-0">
          <div className="flex items-center gap-2">
            <Badge variant="score" label="Impact">
              {scores.impact || 0}/10
            </Badge>
            <Badge variant="outline" label="Tech">
              {scores.techDepth || 0}/10
            </Badge>
          </div>

          <div className={`p-1.5 rounded-lg text-slate-400 transition-transform duration-300 ${
            isExpanded ? 'rotate-180 text-red-600' : ''
          }`}>
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Expanded Details */}
      {isExpanded && (
        <div className="p-4 sm:p-6 pt-0 border-t border-slate-100 space-y-4 text-xs sm:text-sm text-slate-700 bg-white/50">
          
          {/* Score Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 my-3 p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-center font-mono">
            <div className="p-1">
              <div className="text-[10px] text-slate-500 font-bold uppercase">Originality</div>
              <div className="font-extrabold text-slate-900 text-sm">{scores.originality}/10</div>
            </div>
            <div className="p-1 border-l border-slate-200">
              <div className="text-[10px] text-slate-500 font-bold uppercase">Public Impact</div>
              <div className="font-extrabold text-red-600 text-sm">{scores.impact}/10</div>
            </div>
            <div className="p-1 border-l border-slate-200">
              <div className="text-[10px] text-slate-500 font-bold uppercase">Tech Depth</div>
              <div className="font-extrabold text-slate-900 text-sm">{scores.techDepth}/10</div>
            </div>
            <div className="p-1 border-l border-slate-200">
              <div className="text-[10px] text-slate-500 font-bold uppercase">Innovation</div>
              <div className="font-extrabold text-slate-900 text-sm">{scores.innovation}/10</div>
            </div>
            <div className="p-1 border-l border-slate-200 col-span-2 sm:col-span-1 border-t sm:border-t-0 pt-2 sm:pt-1">
              <div className="text-[10px] text-slate-500 font-bold uppercase">Feasibility</div>
              <div className="font-extrabold text-emerald-600 text-sm">{scores.feasibility}/10</div>
            </div>
          </div>

          {/* Findings & Failures */}
          <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
            <div className="bg-red-50/50 p-4 rounded-xl border border-red-200/80 space-y-1.5">
              <h4 className="font-extrabold text-red-700 flex items-center gap-2 uppercase tracking-wider text-[11px] sm:text-xs">
                <FileText className="w-4 h-4 text-red-600 shrink-0" />
                Official Evidence & Audit Findings
              </h4>
              <p className="text-slate-700 leading-relaxed text-xs">
                {evidence}
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
              <h4 className="font-extrabold text-slate-800 flex items-center gap-2 uppercase tracking-wider text-[11px] sm:text-xs">
                <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
                Why Current Systems Fail
              </h4>
              <p className="text-slate-700 leading-relaxed text-xs">
                {failedTech}
              </p>
            </div>
          </div>

          {/* Workflow & Root Cause */}
          <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
            <div className="p-3.5 bg-slate-50/80 rounded-xl border border-slate-200 space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase text-slate-500">Current Workflow:</span>
              <p className="text-slate-800 text-xs font-medium leading-relaxed">{workflow}</p>
            </div>

            <div className="p-3.5 bg-slate-50/80 rounded-xl border border-slate-200 space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase text-slate-500">Root Cause Failure:</span>
              <p className="text-slate-800 text-xs font-medium leading-relaxed">{rootCause}</p>
            </div>
          </div>

          {/* Engineering Solution */}
          <div className="bg-slate-900 text-white p-4.5 rounded-xl border border-slate-800 space-y-3 shadow-md">
            <div>
              <h4 className="font-extrabold text-red-400 flex items-center gap-2 uppercase tracking-wider text-[11px] sm:text-xs mb-1.5">
                <Cpu className="w-4 h-4 text-red-500 shrink-0" />
                Engineering & Architecture Opportunity
              </h4>
              <p className="text-slate-200 leading-relaxed text-xs font-sans">
                {techOpportunity}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs text-slate-300">
                  <strong className="text-white">Prototype Feasibility:</strong> {feasibility}
                </span>
              </div>
              
              <span className="text-[10px] font-mono text-slate-300 bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700 self-start sm:self-auto">
                Targeted Impact: {affected}
              </span>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}