import React from 'react';

interface BalanceArcProps {
  balance: string;
  subtext: string;
}

export const BalanceArc: React.FC<BalanceArcProps> = ({ balance, subtext }) => {
  return (
    <div className="relative w-full aspect-square max-w-[280px] mx-auto flex items-center justify-center p-8">
      {/* Background Arc */}
      <svg className="absolute inset-0 w-full h-full -rotate-90 transform" viewBox="0 0 100 50">
         <path
            d="M 10 50 A 40 40 0 0 1 90 50"
            fill="none"
            stroke="var(--secondary)"
            strokeWidth="8"
            strokeLinecap="round"
            className="opacity-20"
         />
         {/* Progress Arc */}
         <path
            d="M 10 50 A 40 40 0 0 1 70 20"
            fill="none"
            stroke="url(#arcGradient)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray="125"
            strokeDashoffset="0"
         />
         <defs>
            <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
               <stop offset="0%" stopColor="var(--secondary)" />
               <stop offset="100%" stopColor="#00C853" />
            </linearGradient>
         </defs>
      </svg>
      
      <div className="text-center z-10 pt-4">
        <p className="text-muted-foreground text-sm font-medium mb-1 uppercase tracking-wider">Balance</p>
        <h1 className="text-3xl font-medium text-foreground tracking-tight">{balance}</h1>
        <p className="text-muted-foreground/60 text-xs mt-2">{subtext}</p>
      </div>
    </div>
  );
};
