import React from 'react';

export default function Badge({ 
  children, 
  variant = 'outline', 
  label = null, 
  icon: Icon = null, 
  className = '' 
}) {
  // Mobile-first flex layout with tight gaps and whitespace-nowrap to prevent ugly wrapping
  const baseStyles = "inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md text-[10px] sm:text-xs font-mono font-semibold tracking-wide transition-all duration-200 select-none whitespace-nowrap shrink-0 max-w-full";

  const variants = {
    // High-impact Red Accent Badge
    red: "bg-red-600 text-white border border-red-500 shadow-sm shadow-red-200/80 hover:bg-red-700",
    
    // Score Badge (Crisp White + Crimson Highlights)
    score: "bg-red-50/90 text-red-700 border border-red-200 shadow-sm hover:border-red-300",
    
    // Clean White Card Badge
    outline: "bg-white text-slate-800 border border-slate-200/90 shadow-sm hover:border-slate-300 hover:bg-slate-50",
    
    // Subtle Muted Badge
    ghost: "bg-slate-100/80 text-slate-600 border border-slate-200/60 hover:text-slate-900"
  };

  return (
    <span className={`${baseStyles} ${variants[variant] || variants.outline} ${className}`}>
      {Icon && (
        <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-red-600 shrink-0" />
      )}
      
      {label && (
        <span className="text-slate-500 uppercase text-[9px] sm:text-[10px] tracking-wider shrink-0">
          {label}:
        </span>
      )}
      
      <span className="font-bold tracking-tight truncate max-w-[150px] sm:max-w-none">
        {children}
      </span>
    </span>
  );
}