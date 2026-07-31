import React from 'react';
import { 
  ChevronDown, 
  FileText, 
  AlertTriangle, 
  Cpu, 
  ShieldCheck,
  UserCheck,
  Building2,
  Sparkles
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
      className={`rounded-2xl transition-all duration-300 overflow-hidden border ${
        isExpanded 
          ? 'bg-white border-red-500/40 ring-4 ring-red-500/5 shadow-xl shadow-red-950/5' 
          : 'bg-white/90 border-slate-200/80 hover:border-slate-300 hover:bg-white shadow-2xs'
      }`}
    >
      {/* Header Bar */}
      <div 
        onClick={onToggle}
        className="p-4 sm:p-5 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-3 select-none hover:bg-slate-50/70 transition-colors"
      >
        <div className="space-y-2 flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            {/* ID Badge */}
            <span className="px-2.5 py-0.5 rounded-lg text-[10px] sm:text-[11px] font-mono font-bold bg-red-600 text-white shadow-xs tracking-wide">
              #{id}
            </span>

            {/* Department */}
            {dept && (
              <span className="inline-flex items-center gap-1 text-xs text-slate-500 font-medium truncate max-w-xs sm:max-w-md">
                <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span className="truncate">{dept}</span>
              </span>
            )}

            {/* Lead Researcher Tag */}
            {leadResearcher && (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-red-700 bg-red-50 border border-red-200/80 px-2.5 py-0.5 rounded-lg">
                <UserCheck className="w-3 h-3 text-red-600" />
                <span>{leadResearcher}</span>
              </span>
            )}
          </div>

          {/* Problem Title */}
          <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900 leading-snug tracking-tight">
            {title}
          </h3>
        </div>

        {/* Quick Metric Badges & Toggle */}
        <div className="flex items-center justify-between md:justify-end gap-3 border-t md:border-t-0 border-slate-100 pt-3 md:pt-0 shrink-0">
          <div className="flex items-center gap-2">
            <Badge variant="score" label="Impact">
              {scores.impact || 0}/10
            </Badge>
            <Badge variant="outline" label="Tech">
              {scores.techDepth || 0}/10
            </Badge>
          </div>

          <div 
            className={`p-1.5 rounded-xl text-slate-400 bg-slate-50 border border-slate-200/60 transition-all duration-300 ${
              isExpanded ? 'rotate-180 text-red-600 bg-red-50 border-red-200' : 'hover:text-slate-600'
            }`}
          >
            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
        </div>
      </div>

      {/* Smooth Accordion Body */}
      <div 
        className={`grid transition-all duration-300 ease-in-out ${
          isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-4 sm:p-6 pt-2 border-t border-slate-100 space-y-4 text-xs sm:text-sm text-slate-700 bg-slate-50/30">
            
            {/* Score Grid (Google-Style Cards) */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 my-2 p-3 bg-white rounded-xl border border-slate-200/80 text-center font-mono shadow-2xs">
              <div className="p-1.5">
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Originality</div>
                <div className="font-extrabold text-slate-900 text-sm sm:text-base mt-0.5">{scores.originality || 0}/10</div>
              </div>
              <div className="p-1.5 border-l border-slate-100">
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Public Impact</div>
                <div className="font-extrabold text-red-600 text-sm sm:text-base mt-0.5">{scores.impact || 0}/10</div>
              </div>
              <div className="p-1.5 border-l border-slate-100">
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Tech Depth</div>
                <div className="font-extrabold text-slate-900 text-sm sm:text-base mt-0.5">{scores.techDepth || 0}/10</div>
              </div>
              <div className="p-1.5 border-l border-slate-100">
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Innovation</div>
                <div className="font-extrabold text-slate-900 text-sm sm:text-base mt-0.5">{scores.innovation || 0}/10</div>
              </div>
              <div className="p-1.5 border-l border-slate-100 col-span-2 sm:col-span-1 border-t sm:border-t-0 pt-2 sm:pt-1.5">
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Feasibility</div>
                <div className="font-extrabold text-emerald-600 text-sm sm:text-base mt-0.5">{scores.feasibility || 0}/10</div>
              </div>
            </div>

            {/* Audit Findings & System Failures */}
            <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-red-50/60 p-4 rounded-xl border border-red-200/70 space-y-2">
                <h4 className="font-bold text-red-800 flex items-center gap-2 uppercase tracking-wider text-[11px] sm:text-xs">
                  <FileText className="w-4 h-4 text-red-600 shrink-0" />
                  Official Evidence & Audit Findings
                </h4>
                <p className="text-slate-700 leading-relaxed text-xs">
                  {evidence || 'Official documentation pending initial intake verification.'}
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200/90 space-y-2 shadow-2xs">
                <h4 className="font-bold text-slate-800 flex items-center gap-2 uppercase tracking-wider text-[11px] sm:text-xs">
                  <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />
                  Why Current Systems Fail
                </h4>
                <p className="text-slate-700 leading-relaxed text-xs">
                  {failedTech || 'Legacy procedures fail under high volume due to bottlenecked data validation.'}
                </p>
              </div>
            </div>

            {/* Workflow & Root Cause Breakdown */}
            <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
              <div className="p-3.5 bg-white rounded-xl border border-slate-200/80 space-y-1 shadow-2xs">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">Current Workflow</span>
                <p className="text-slate-800 text-xs font-medium leading-relaxed">
                  {workflow || 'Manual paper or fragmented spreadsheet recording.'}
                </p>
              </div>

              <div className="p-3.5 bg-white rounded-xl border border-slate-200/80 space-y-1 shadow-2xs">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">Root Cause Failure</span>
                <p className="text-slate-800 text-xs font-medium leading-relaxed">
                  {rootCause || 'Absence of centralized real-time API integrations.'}
                </p>
              </div>
            </div>

            {/* Engineering & Tech Solution */}
            <div className="bg-slate-950 text-white p-5 rounded-2xl border border-slate-800 space-y-4 shadow-md">
              <div>
                <h4 className="font-bold text-red-400 flex items-center gap-2 uppercase tracking-wider text-[11px] sm:text-xs mb-2">
                  <Cpu className="w-4 h-4 text-red-500 shrink-0" />
                  Engineering & Architecture Opportunity
                </h4>
                <p className="text-slate-300 leading-relaxed text-xs font-sans">
                  {techOpportunity || 'Full-stack Web Architecture with real-time syncing and microservice verification.'}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-xs text-slate-300">
                    <strong className="text-white font-semibold">Prototype Feasibility:</strong> {feasibility || 'High'}
                  </span>
                </div>
                
                {affected && (
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-slate-300 bg-slate-900 px-3 py-1 rounded-lg border border-slate-800 self-start sm:self-auto">
                    <Sparkles className="w-3 h-3 text-red-400" />
                    <span>Targeted Impact: {affected}</span>
                  </span>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}