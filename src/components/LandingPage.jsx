import React, { useState } from 'react';

export default function LandingPage({ onExplore }) {
  const [isExiting, setIsExiting] = useState(false);

  const handleExploreClick = () => {
    setIsExiting(true);
    // Wait for the split animation to finish before triggering the page swap
    setTimeout(() => {
      onExplore();
    }, 700); 
  };

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 overflow-hidden flex flex-col justify-between selection:bg-red-100 selection:text-red-900">
      
      {/* Subtle Background Glow & Tech Dots (Fades out on exit) */}
      <div className={`absolute inset-0 transition-opacity duration-700 ${isExiting ? 'opacity-0' : 'opacity-100'}`}>
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />
        <div className="absolute top-[10%] left-[20%] w-[400px] h-[400px] bg-red-400/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-rose-400/10 blur-[150px] rounded-full pointer-events-none" />
      </div>

      {/* TOP HALF: Hero Content (Animates UP on click) */}
      <main 
        className={`relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 max-w-5xl mx-auto pt-20 pb-10 transition-all duration-700 ease-in-out ${
          isExiting ? '-translate-y-[100vh] opacity-0 scale-95' : 'translate-y-0 opacity-100 scale-100'
        }`}
      >
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-200 bg-white text-red-700 text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-8 shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
          Next-Gen Hackathon Hub
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 mb-6 leading-[1.1]">
          Welcome to <br />
          <span className="text-red-600">
            Hackathon Vault
          </span>
        </h1>

        {/* Subtitle Description */}
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed font-medium">
          Your central dynamic portal for domain problem statements, team allocations, leadership insights, and real-time project challenges.
        </p>

        {/* Call to Action Button */}
        <button
          onClick={handleExploreClick}
          className="px-10 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-2xl shadow-lg shadow-red-600/20 hover:shadow-red-600/30 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer text-lg"
        >
          Explore Dashboard
        </button>
      </main>

      {/* BOTTOM HALF: Cards & Footer (Animates DOWN on click) */}
      <div 
        className={`relative z-10 w-full transition-all duration-700 ease-in-out ${
          isExiting ? 'translate-y-[100vh] opacity-0 scale-95' : 'translate-y-0 opacity-100 scale-100'
        }`}
      >
        {/* High-Contrast White Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 w-full max-w-6xl mx-auto px-4 sm:px-6 mb-12 text-left">
          
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-red-200 transition-all duration-300">
            <div className="text-3xl font-black text-red-100 mb-4 font-mono tracking-tighter">
              <span className="text-red-600">01</span>.
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Team Allocation</h3>
            <p className="text-sm text-slate-500 font-medium leading-relaxed">
              Organized team structures with clear leader assignments and explicit domain mapping.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-red-200 transition-all duration-300">
            <div className="text-3xl font-black text-red-100 mb-4 font-mono tracking-tighter">
              <span className="text-red-600">02</span>.
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Problem Statements</h3>
            <p className="text-sm text-slate-500 font-medium leading-relaxed">
              Curated track challenges across multiple tech domains fully prepared for execution.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-red-200 transition-all duration-300">
            <div className="text-3xl font-black text-red-100 mb-4 font-mono tracking-tighter">
              <span className="text-red-600">03</span>.
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Real-Time Sync</h3>
            <p className="text-sm text-slate-500 font-medium leading-relaxed">
              Direct query handling and ultra-fast data retrieval for seamless navigation.
            </p>
          </div>

        </div>

        {/* Footer */}
        <footer className="text-center py-6 text-slate-400 text-xs font-medium border-t border-slate-200/80 bg-white">
          © {new Date().getFullYear()} Hackathon Vault. Engineered for high performance.
        </footer>
      </div>

    </div>
  );
}