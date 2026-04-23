import React from 'react';

interface ActionButtonProps {
  label: string;
  variant?: 'approve' | 'reject' | 'outline';
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
}

export const ActionButton: React.FC<ActionButtonProps> = ({ 
  label, 
  variant = 'approve', 
  onClick, 
  className = "",
  icon 
}) => {
  const baseStyles = "flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-medium transition-all active:scale-95 text-sm";
  
  const variants = {
    approve: "bg-primary text-primary-foreground shadow-lg shadow-primary/20",
    reject: "bg-transparent border-2 border-cta-orange text-cta-orange",
    outline: "bg-transparent border border-border text-foreground"
  };

  return (
    <button 
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {icon}
      {label}
    </button>
  );
};
