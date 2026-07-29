import React, { useState } from 'react';
import { X, PlusCircle } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/40 backdrop-blur-xs">
      <div className="w-full max-w-lg bg-white h-full p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b pb-4">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <PlusCircle className="w-5 h-5 text-red-600" />
              Add Student Problem Statement
            </h3>
            <button onClick={onClose} className="p-1 rounded-lg text-slate-400 hover:text-slate-700">
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Student / Lead Researcher</label>
              <input
                type="text"
                value={leadResearcher}
                onChange={(e) => setLeadResearcher(e.target.value)}
                placeholder="e.g. Saravanan T or Student Name"
                className="w-full p-2.5 rounded-lg border border-slate-200 focus:ring-2 focus:ring-red-600 outline-none"
                required
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Target Domain</label>
              <select
                value={domainTitle}
                onChange={(e) => setDomainTitle(e.target.value)}
                className="w-full p-2.5 rounded-lg border border-slate-200 focus:ring-2 focus:ring-red-600 outline-none bg-white"
              >
                <option value="Forensic Science & Law Enforcement">Forensic Science & Law Enforcement</option>
                <option value="AgriTech & Rural Solutions">AgriTech & Rural Solutions</option>
                <option value="Smart Healthcare & Diagnostics">Smart Healthcare & Diagnostics</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Problem Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title of the bottleneck..."
                className="w-full p-2.5 rounded-lg border border-slate-200 focus:ring-2 focus:ring-red-600 outline-none"
                required
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Department / Agency</label>
              <input
                type="text"
                value={dept}
                onChange={(e) => setDept(e.target.value)}
                placeholder="e.g. Ministry of Home Affairs"
                className="w-full p-2.5 rounded-lg border border-slate-200 focus:ring-2 focus:ring-red-600 outline-none"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Audit Findings & Evidence</label>
              <textarea
                value={evidence}
                onChange={(e) => setEvidence(e.target.value)}
                placeholder="CAG report details or official evidence..."
                rows={3}
                className="w-full p-2.5 rounded-lg border border-slate-200 focus:ring-2 focus:ring-red-600 outline-none"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Proposed Tech Solution</label>
              <textarea
                value={techOpportunity}
                onChange={(e) => setTechOpportunity(e.target.value)}
                placeholder="Architecture & stack details..."
                rows={3}
                className="w-full p-2.5 rounded-lg border border-slate-200 focus:ring-2 focus:ring-red-600 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-md transition-colors"
            >
              Add Problem Statement
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}