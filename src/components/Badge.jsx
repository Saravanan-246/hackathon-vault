import React from 'react';

export default function Badge({ 
  children, 
  variant = 'outline', 
  label = null, 
  icon: Icon = null, 
  className = '' 
}) {
  // Clean flex layout with truncation support to prevent layout overflow
  const baseStyles = "inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md text-[10px] sm:text-xs font-mono font-semibold tracking-wide transition-all duration-200 select-none whitespace-nowrap shrink-0 max-w-full";

  const variants = {
    // Solid Crimson Red Badge
    red: "bg-red-600 text-white border border-red-500 shadow-2xs hover:bg-red-700",
    
    // Score / Highlight Badge (Soft Red Tint)
    score: "bg-red-50 text-red-700 border border-red-200 shadow-2xs hover:border-red-300",
    
    // Clean White Outline Badge
    outline: "bg-white text-slate-800 border border-slate-200/90 shadow-2xs hover:border-slate-300 hover:bg-slate-50",
    
    // Subtle Muted Badge
    ghost: "bg-slate-100 text-slate-600 border border-slate-200/80 hover:text-slate-900"
  };

  // Inherit icon color dynamically based on badge variant
  const iconColors = {
    red: "text-white",
    score: "text-red-600",
    outline: "text-slate-500",
    ghost: "text-slate-500"
  };

  return (
    <span className={`${baseStyles} ${variants[variant] || variants.outline} ${className}`}>
      {Icon && (
        <Icon className={`w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0 ${iconColors[variant] || 'text-slate-500'}`} />
      )}
      
      {label && (
        <span className="opacity-75 text-[9px] sm:text-[10px] tracking-wider shrink-0 font-medium">
          {label}:
        </span>
      )}
      
      <span className="font-bold tracking-tight truncate max-w-[150px] sm:max-w-none">
        {children}
      </span>
    </span>
  );
}