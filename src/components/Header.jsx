import React from 'react';
import { Search, Layers, X } from 'lucide-react';

/**
 * Super Clean & Minimal Header
 * Fast, lightweight, and mobile-friendly.
 */
export default function Header({ 
  searchQuery, 
  setSearchQuery, 
  totalCount = 0 
}) {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-2xs">
      <div className="max-w-6xl mx-auto px-3.5 sm:px-6 py-2.5 flex items-center justify-between gap-3">
        
        {/* Simple Brand */}
        <h1 className="text-sm sm:text-lg font-black text-slate-900 tracking-tight uppercase shrink-0">
          Hackathon<span className="text-red-600">Vault</span>
        </h1>

        {/* Clean Pill Search Bar */}
        <div className="flex-1 max-w-xs sm:max-w-md">
          <div className="relative flex items-center">
            <Search className="absolute left-3.5 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search problems, leads, IDs..."
              className="w-full bg-slate-100/80 border border-slate-200/90 rounded-full pl-9 pr-9 py-2 text-xs text-slate-900 placeholder-slate-400 focus:bg-white focus:border-red-500 focus:ring-2 focus:ring-red-500/10 transition-all outline-none"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 text-slate-400 hover:text-slate-700 p-1 rounded-full hover:bg-slate-200/70 transition-all cursor-pointer"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Clean Vault Count Pill */}
        <div className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 border border-slate-200/80 rounded-full text-xs font-mono">
          <Layers className="w-3.5 h-3.5 text-red-600" />
          <span className="text-slate-500 hidden sm:inline">Vault:</span>
          <span className="text-slate-900 font-bold">{totalCount}</span>
        </div>

      </div>
    </header>
  );
}