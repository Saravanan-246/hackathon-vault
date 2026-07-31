import React from 'react';
import { Search, Layers, X } from 'lucide-react';

/**
 * Clean & Substantial Header
 * Crisp White & Crimson Red with generous spacing.
 */
export default function Header({ 
  searchQuery, 
  setSearchQuery, 
  totalCount = 0 
}) {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 sm:py-4 flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <h1 className="text-base sm:text-xl font-black text-slate-900 tracking-tight shrink-0">
          Hackathon<span className="text-red-600">Vault</span>
        </h1>

        {/* Extended Pill Search Bar */}
        <div className="flex-1 max-w-sm sm:max-w-lg">
          <div className="relative flex items-center">
            <Search className="absolute left-4 w-4 h-4 text-slate-400 pointer-events-none" />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search problems, leads, IDs..."
              className="w-full bg-slate-100/90 border border-slate-200/90 rounded-full pl-10 pr-10 py-2.5 text-xs sm:text-sm font-medium text-slate-900 placeholder-slate-400 focus:bg-white focus:border-red-500 focus:ring-4 focus:ring-red-500/10 transition-all outline-none"
            />
            {searchQuery && (
              <button 
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 text-slate-400 hover:text-slate-700 p-1 rounded-full hover:bg-slate-200/70 transition-all cursor-pointer"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Vault Count Pill */}
        <div className="shrink-0 flex items-center gap-2 px-3.5 py-2 bg-slate-100/90 border border-slate-200/90 rounded-full text-xs sm:text-sm font-mono">
          <Layers className="w-4 h-4 text-red-600" />
          <span className="text-slate-500 hidden sm:inline font-sans font-medium">Vault:</span>
          <span className="text-slate-900 font-bold">{totalCount}</span>
        </div>

      </div>
    </header>
  );
}