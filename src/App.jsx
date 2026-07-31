import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import Header from './components/Header';
import LeaderCard from './components/LeaderCard';
import DomainSection from './components/DomainSection';
import { getDomainsData, allQuestions } from './data/connect';
import teamsData from './data/teamsData.json';
import { Users, ChevronDown, ShieldCheck, Clock } from 'lucide-react';

export default function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [domainsData] = useState(() => getDomainsData());
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTeamId, setActiveTeamId] = useState(teamsData[0]?.id || 1);
  const [expandedProblemId, setExpandedProblemId] = useState(null);

  // Active Team Details
  const currentTeam = teamsData.find((t) => t.id === Number(activeTeamId)) || teamsData[0];

  // Helper to count non-placeholder problems for each team
  const getTeamProblemCount = (teamLeader) => {
    return allQuestions.filter((p) => {
      if (!p.leadResearcher || p.title === "Coming Soon") return false;
      return p.leadResearcher.toLowerCase() === teamLeader.toLowerCase();
    }).length;
  };

  // Filter problems based on active team & search term
  const filteredDomains = domainsData
    .map((domain) => {
      let teamProblems = domain.problems.filter((p) => {
        if (!p.leadResearcher) return currentTeam.id === 1;
        return p.leadResearcher.toLowerCase() === currentTeam.leader.toLowerCase();
      });

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        teamProblems = teamProblems.filter(
          (p) =>
            p.title?.toLowerCase().includes(q) ||
            p.dept?.toLowerCase().includes(q) ||
            p.evidence?.toLowerCase().includes(q) ||
            String(p.id).toLowerCase().includes(q)
        );
      }

      return { ...domain, problems: teamProblems };
    })
    .filter((d) => d.problems.length > 0);

  const activeCount = filteredDomains.reduce((acc, curr) => acc + curr.problems.length, 0);

  // Render Landing Page first
  if (showLanding) {
    return <LandingPage onExplore={() => setShowLanding(false)} />;
  }

  return (
    <div className="min-h-screen bg-slate-50/60 font-sans antialiased text-slate-900 selection:bg-red-500 selection:text-white">
      {/* Global Navigation Header */}
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        totalCount={activeCount}
        onBackToHome={() => setShowLanding(true)}
      />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        
        {/* TEAM SELECTOR CONTAINER */}
        <section className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs space-y-4 transition-all">
          <div className="flex items-center justify-between pb-1 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-red-50 text-red-600 border border-red-100">
                <Users className="w-4 h-4" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                Team Allocation Console
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200/60">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>{teamsData.length} Teams Enrolled</span>
            </div>
          </div>

          {/* Mobile View: Form Select Box */}
          <div className="block sm:hidden">
            <div className="relative">
              <select
                value={activeTeamId}
                onChange={(e) => setActiveTeamId(Number(e.target.value))}
                className="w-full bg-slate-50 text-slate-900 font-semibold text-xs p-3.5 pr-10 rounded-xl border border-slate-200 focus:border-red-500 focus:bg-white outline-none appearance-none transition-all cursor-pointer"
              >
                {teamsData.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.name} — {t.leader} ({getTeamProblemCount(t.leader)} Problems)
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3.5 top-4 pointer-events-none" />
            </div>
          </div>

          {/* Tablet & Desktop View: Clean Segmented Tabs */}
          <div className="hidden sm:flex flex-wrap items-center gap-2">
            {teamsData.map((t) => {
              const isSelected = activeTeamId === t.id;
              const count = getTeamProblemCount(t.leader);

              return (
                <button
                  key={t.id}
                  onClick={() => setActiveTeamId(t.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all border flex items-center gap-2.5 cursor-pointer ${
                    isSelected
                      ? 'bg-red-50 text-red-700 border-red-300 shadow-2xs'
                      : 'bg-slate-50/80 text-slate-600 border-slate-200/80 hover:bg-slate-100 hover:border-slate-300'
                  }`}
                >
                  <span>{t.name}</span>
                  <span className="text-[11px] opacity-70 font-normal">({t.leader})</span>
                  <span className={`px-2 py-0.5 rounded-md text-[10px] font-mono font-bold ${
                    isSelected ? 'bg-red-100 text-red-800' : 'bg-slate-200/80 text-slate-600'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* ACTIVE TEAM PROFILE SUMMARY CARD */}
        <LeaderCard
          leaderName={currentTeam.leader}
          role={currentTeam.role}
          assignedCount={activeCount}
          domains={currentTeam.domains}
          members={currentTeam.members}
          isSelected={true}
          onSelect={() => {}}
        />

        {/* VAULT SECTION HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 border-t border-slate-200/60">
          <div>
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              Research & Failure Vault
            </h2>
            <p className="text-xs text-slate-500 font-medium">
              Categorized evidence and problem statements for <span className="font-semibold text-slate-800">{currentTeam.name}</span>
            </p>
          </div>

          {searchQuery && (
            <span className="text-xs font-mono text-slate-700 bg-slate-100 border border-slate-200 px-3 py-1 rounded-lg">
              Query: "{searchQuery}"
            </span>
          )}
        </div>

        {/* PROBLEM DOMAIN ACCORDIONS OR CLEAN COMING SOON STATE */}
        {filteredDomains.length > 0 ? (
          <div className="space-y-4">
            {filteredDomains.map((domain, idx) => (
              <DomainSection
                key={domain.title}
                domainTitle={domain.title}
                problems={domain.problems}
                expandedProblemId={expandedProblemId}
                onToggleProblem={(id) => setExpandedProblemId((prev) => (prev === id ? null : id))}
                defaultOpen={idx === 0}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white p-10 text-center rounded-2xl border border-slate-200/80 shadow-2xs space-y-3">
            <div className="p-3 bg-red-50 rounded-full w-fit mx-auto border border-red-100 text-red-500">
              <Clock className="w-6 h-6 animate-pulse" />
            </div>
            <div className="space-y-1">
              <p className="text-slate-900 text-sm font-bold tracking-tight">Coming Soon</p>
              <p className="text-slate-500 text-xs font-mono">
                Problem statements for {currentTeam.name} are currently under compilation.
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}