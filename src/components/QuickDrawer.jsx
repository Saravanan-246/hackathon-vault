import React, { useState } from 'react';
import { X, PlusCircle, Sparkles, User, Target, FileText, Building2, AlertCircle, Lightbulb } from 'lucide-react';

export default function QuickDrawer({ isOpen, onClose, onSubmitQuestion }) {
  const [leadResearcher, setLeadResearcher] = useState('Saravanan T');
  const [domainTitle, setDomainTitle] = useState('Forensic Science & Law Enforcement');
  const [title, setTitle] = useState('');
  const [dept, setDept] = useState('');
  const [evidence, setEvidence] = useState('');
  const [techOpportunity, setTechOpportunity] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newQuestion = {
      id: `P-${Math.floor(100 + Math.random() * 900)}`,
      domainTitle,
      title,
      dept: dept || 'General Department',
      leadResearcher: leadResearcher || 'Saravanan T',
      evidence: evidence || 'Audit report pending verification.',
      failedTech: 'Legacy system bottlenecks and manual verification gaps.',
      techOpportunity: techOpportunity || 'Modern full-stack web architecture integration.',
      workflow: 'Manual paper/spreadsheet logging.',
      rootCause: 'Lack of real-time automated data validation.',
      feasibility: 'High (React + Node.js)',
      affected: 'Public Services',
      scores: { impact: 8, techDepth: 8, originality: 8, innovation: 8, feasibility: 8 }
    };

    onSubmitQuestion(newQuestion, domainTitle);
    setTitle('');
    setDept('');
    setEvidence('');
    setTechOpportunity('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300">
      {/* Drawer Container */}
      <div className="w-full sm:max-w-md md:max-w-lg bg-white h-full flex flex-col justify-between shadow-2xl transition-all duration-300 animate-in slide-in-from-right">
        
        {/* Sticky Google-Style Header */}
        <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-red-50 text-red-600 rounded-xl border border-red-100/80">
              <PlusCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 leading-tight">
                Add Problem Statement
              </h3>
              <p className="text-[11px] font-medium text-slate-500">
                Hack Vault Research Console
              </p>
            </div>
          </div>
          
          <button 
            onClick={onClose} 
            type="button"
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close Drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          <form id="drawer-form" onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
            
            {/* Student / Lead Researcher */}
            <div>
              <label className="flex items-center gap-1.5 font-bold text-slate-700 mb-1.5">
                <User className="w-3.5 h-3.5 text-slate-400" />
                <span>Student / Lead Researcher</span>
              </label>
              <input
                type="text"
                value={leadResearcher}
                onChange={(e) => setLeadResearcher(e.target.value)}
                placeholder="e.g. Saravanan T"
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-900 text-xs focus:bg-white focus:border-red-500 focus:ring-4 focus:ring-red-500/10 outline-none transition-all placeholder:text-slate-400"
                required
              />
            </div>

            {/* Target Domain */}
            <div>
              <label className="flex items-center gap-1.5 font-bold text-slate-700 mb-1.5">
                <Target className="w-3.5 h-3.5 text-slate-400" />
                <span>Target Domain</span>
              </label>
              <div className="relative">
                <select
                  value={domainTitle}
                  onChange={(e) => setDomainTitle(e.target.value)}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-900 text-xs focus:bg-white focus:border-red-500 focus:ring-4 focus:ring-red-500/10 outline-none transition-all cursor-pointer appearance-none pr-8"
                >
                  <option value="Forensic Science & Law Enforcement">Forensic Science & Law Enforcement</option>
                  <option value="AgriTech & Rural Solutions">AgriTech & Rural Solutions</option>
                  <option value="Smart Healthcare & Diagnostics">Smart Healthcare & Diagnostics</option>
                </select>
                <span className="absolute right-3.5 top-3.5 pointer-events-none text-slate-400 text-xs">▼</span>
              </div>
            </div>

            {/* Problem Title */}
            <div>
              <label className="flex items-center gap-1.5 font-bold text-slate-700 mb-1.5">
                <FileText className="w-3.5 h-3.5 text-slate-400" />
                <span>Problem Title</span>
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title of the bottleneck..."
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-900 text-xs focus:bg-white focus:border-red-500 focus:ring-4 focus:ring-red-500/10 outline-none transition-all placeholder:text-slate-400"
                required
              />
            </div>

            {/* Department / Agency */}
            <div>
              <label className="flex items-center gap-1.5 font-bold text-slate-700 mb-1.5">
                <Building2 className="w-3.5 h-3.5 text-slate-400" />
                <span>Department / Agency</span>
              </label>
              <input
                type="text"
                value={dept}
                onChange={(e) => setDept(e.target.value)}
                placeholder="e.g. Ministry of Home Affairs"
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-900 text-xs focus:bg-white focus:border-red-500 focus:ring-4 focus:ring-red-500/10 outline-none transition-all placeholder:text-slate-400"
              />
            </div>

            {/* Audit Findings & Evidence */}
            <div>
              <label className="flex items-center gap-1.5 font-bold text-slate-700 mb-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-slate-400" />
                <span>Audit Findings & Evidence</span>
              </label>
              <textarea
                value={evidence}
                onChange={(e) => setEvidence(e.target.value)}
                placeholder="CAG report details or official evidence..."
                rows={3}
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-900 text-xs focus:bg-white focus:border-red-500 focus:ring-4 focus:ring-red-500/10 outline-none transition-all placeholder:text-slate-400 resize-none"
              />
            </div>

            {/* Proposed Tech Solution */}
            <div>
              <label className="flex items-center gap-1.5 font-bold text-slate-700 mb-1.5">
                <Lightbulb className="w-3.5 h-3.5 text-slate-400" />
                <span>Proposed Tech Solution</span>
              </label>
              <textarea
                value={techOpportunity}
                onChange={(e) => setTechOpportunity(e.target.value)}
                placeholder="Architecture & stack details..."
                rows={3}
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-900 text-xs focus:bg-white focus:border-red-500 focus:ring-4 focus:ring-red-500/10 outline-none transition-all placeholder:text-slate-400 resize-none"
              />
            </div>

          </form>
        </div>

        {/* Sticky Action Footer */}
        <div className="sticky bottom-0 bg-white/90 backdrop-blur-md px-6 py-4 border-t border-slate-100 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl font-semibold text-slate-600 hover:bg-slate-100 text-xs transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            form="drawer-form"
            type="submit"
            className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-semibold text-xs rounded-xl shadow-md shadow-red-600/20 active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Add Statement</span>
          </button>
        </div>

      </div>
    </div>
  );
}