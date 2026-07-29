import React from 'react';
import { ShieldCheck, Users, Sparkles } from 'lucide-react';

export default function LeaderCard({ leaderName, role, assignedCount, domains, members = [] }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs space-y-4">
      
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 text-red-600 flex items-center justify-center font-bold text-lg shadow-2xs">
            {leaderName?.charAt(0) || 'T'}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-bold text-slate-900 tracking-tight">{leaderName}</h1>
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/80 px-2 py-0.5 rounded-md">
                <ShieldCheck className="w-3 h-3" />
                Team Lead
              </span>
            </div>
            <p className="text-xs font-medium text-slate-500">{role}</p>
          </div>
        </div>

        {/* Total Assigned Counter Badge */}
        <div className="flex items-center gap-2 self-start sm:self-center bg-slate-50 border border-slate-200 px-3.5 py-1.5 rounded-xl">
          <Sparkles className="w-4 h-4 text-red-600" />
          <span className="text-xs font-semibold text-slate-600">Assigned Problems:</span>
          <span className="text-xs font-mono font-bold text-slate-900 bg-white border border-slate-200 px-2 py-0.5 rounded-md">
            {assignedCount}
          </span>
        </div>
      </div>

      {/* 6 Team Members List */}
      {members.length > 0 && (
        <div className="space-y-2">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 uppercase tracking-wider">
            <Users className="w-3.5 h-3.5 text-slate-400" />
            <span>Team Members ({members.length})</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {members.map((member, idx) => (
              <span
                key={idx}
                className={`text-xs font-medium px-3 py-1 rounded-lg border transition-all ${
                  idx === 0
                    ? 'bg-red-50 text-red-700 border-red-200/80 font-semibold'
                    : 'bg-slate-50 text-slate-700 border-slate-200/80'
                }`}
              >
                {member}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Focus Domains Tags */}
      <div className="flex flex-wrap items-center gap-2 pt-1">
        <span className="text-[11px] font-mono text-slate-400 uppercase">Focus Tags:</span>
        {domains?.map((d, i) => (
          <span key={i} className="text-xs font-mono font-semibold text-slate-600 bg-slate-100 border border-slate-200/80 px-2.5 py-0.5 rounded-md">
            {d}
          </span>
        ))}
      </div>
    </div>
  );
}