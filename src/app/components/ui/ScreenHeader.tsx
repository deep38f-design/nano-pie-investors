import React from 'react';
import { ChevronLeft, User } from 'lucide-react';
import { useNavigate, Link } from 'react-router';

interface ScreenHeaderProps {
  showBack?: boolean;
  title?: string;
}

export const ScreenHeader: React.FC<ScreenHeaderProps> = ({ showBack = false, title }) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-3">
        {showBack && (
          <button 
            onClick={() => navigate(-1)} 
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft size={24} className="text-[#16232B]" />
          </button>
        )}
        <Link to="/investor" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#16232B] rounded-lg flex items-center justify-center">
            <span className="text-white font-black text-sm">NP</span>
          </div>
        </Link>
        {title && <h2 className="text-[18px] font-bold text-[#16232B] tracking-tight">{title}</h2>}
      </div>

      <div className="flex items-center gap-4">
        <Link to="/investor/profile">
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200 overflow-hidden">
            <User size={20} className="text-gray-400" />
          </div>
        </Link>
      </div>
    </div>
  );
};
