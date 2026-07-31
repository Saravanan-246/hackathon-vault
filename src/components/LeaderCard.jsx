import React from 'react';
import { ShieldCheck, Users, Sparkles, Tag, Crown } from 'lucide-react';

export default function LeaderCard({ 
  leaderName, 
  role, 
  assignedCount = 0, 
  domains = [], 
  members = [] 
}) {
  // Extract clean initials (e.g., "Saravanan T" -> "ST" or "S")
  const initials = leaderName
    ? leaderName
        .split(' ')
        .filter(Boolean)
        .map((n) => n[0])
        .slice(0, 2)
        .join('')
        .toUpperCase()
    : 'TL';

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-2xs hover:shadow-md transition-all duration-300 space-y-5">
      
      {/* Header Row: Leader Profile & Stats Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
        
        {/* Profile Avatar & Metadata */}
        <div className="flex items-center gap-3.5">
          {/* Avatar Icon */}
          <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-red-500 to-red-600 text-white flex items-center justify-center font-mono font-bold text-base shadow-md shadow-red-500/20 shrink-0">
            {initials}
          </div>

          <div className="space-y-0.5">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-lg font-bold text-slate-900 tracking-tight leading-none">
                {leaderName || 'Team Leader'}
              </h2>

              <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/80 px-2 py-0.5 rounded-md uppercase tracking-wider">
                <ShieldCheck className="w-3 h-3 text-emerald-600 shrink-0" />
                Team Lead
              </span>
            </div>

            <p className="text-xs font-medium text-slate-500">
              {role || 'Engineering Lead'}
            </p>
          </div>
        </div>

        {/* Total Assigned Counter Badge */}
        <div className="flex items-center gap-2.5 self-start sm:self-center bg-slate-50 border border-slate-200/80 px-3.5 py-1.5 rounded-xl shadow-2xs">
          <Sparkles className="w-4 h-4 text-red-600 shrink-0" />
          <span className="text-xs font-medium text-slate-600">Assigned Problems:</span>
          <span className="text-xs font-mono font-bold text-slate-900 bg-white border border-slate-200 px-2.5 py-0.5 rounded-md shadow-2xs">
            {assignedCount}
          </span>
        </div>
      </div>

      {/* Team Roster Grid */}
      {members.length > 0 && (
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider">
              <Users className="w-3.5 h-3.5 text-slate-400" />
              <span>Team Roster ({members.length})</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {members.map((member, idx) => {
              const isLead = idx === 0 || member.toLowerCase().includes('(lead)');
              return (
                <span
                  key={idx}
                  className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-xl border transition-all ${
                    isLead
                      ? 'bg-red-50/80 text-red-700 border-red-200/90 font-semibold shadow-2xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200/70 hover:bg-slate-100/80'
                  }`}
                >
                  {isLead && <Crown className="w-3 h-3 text-red-600 shrink-0" />}
                  <span>{member}</span>
                </span>
              );
            })}
          </div>
        </div>
      )}

      {/* Focus Domains Tags */}
      {domains.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100/80">
          <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400 uppercase tracking-wider">
            <Tag className="w-3 h-3 text-slate-400" />
            <span>Focus Domains:</span>
          </span>

          {domains.map((d, i) => (
            <span 
              key={i} 
              className="text-xs font-mono font-semibold text-slate-700 bg-slate-100/80 border border-slate-200/80 px-2.5 py-0.5 rounded-lg hover:bg-slate-200/60 transition-colors"
            >
              {d}
            </span>
          ))}
        </div>
      )}

    </div>
  );
}