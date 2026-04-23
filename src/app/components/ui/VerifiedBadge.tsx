import React from 'react';

interface VerifiedBadgeProps {
  className?: string;
}

export const VerifiedBadge: React.FC<VerifiedBadgeProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center justify-center bg-verified-green/10 text-verified-green p-1 rounded-full ${className}`}>
      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );
};
