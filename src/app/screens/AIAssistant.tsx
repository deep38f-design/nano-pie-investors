import React from 'react';
import { Mic, Shield, Wallet, ListChecks, ChevronLeft, Search } from "lucide-react";
import { useNavigate } from "react-router";

export const AIAssistant = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#FFFFFF] min-h-screen px-5 pt-12 pb-24 font-['Outfit'] flex flex-col">
      <header className="flex justify-between items-center mb-10">
        <button onClick={() => navigate(-1)} className="w-10 h-10 border border-[#E4EEF0] rounded-full flex items-center justify-center text-[#16232B]">
          <ChevronLeft size={24} strokeWidth={1.5} />
        </button>
        <div className="w-10 h-10 rounded-full bg-[#E4EEF0] flex items-center justify-center text-[#16232B] font-medium">
            JD
        </div>
      </header>

      <div className="flex-1">
        <h1 className="text-[28px] text-[#16232B] font-medium leading-tight mb-4">
            How can I help with your investments today?
        </h1>
        <p className="text-[15px] text-[#075056] mb-12">
            Ask me about your portfolio, new opportunities, or business updates.
        </p>

        <div className="space-y-4">
            <SuggestionButton icon={<Search size={18} />} label="Find high-return bakery shops" />
            <SuggestionButton icon={<Wallet size={18} />} label="Show my next payout date" />
            <SuggestionButton icon={<ListChecks size={18} />} label="Compare dairy farm returns" />
        </div>
      </div>

      <div className="mt-auto">
        <div className="flex items-center gap-4 p-4 border border-[#E4EEF0] rounded-[24px] bg-[#F9FAFB]">
            <input 
                type="text" 
                placeholder="Type your question..." 
                className="flex-1 bg-transparent border-none outline-none text-[15px] text-[#16232B] placeholder:text-[#075056]/40"
            />
            <button className="w-12 h-12 rounded-full bg-[#16232B] flex items-center justify-center text-[#FFFFFF]">
                <Mic size={20} />
            </button>
        </div>
      </div>
    </div>
  );
};

const SuggestionButton = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
    <button className="w-full flex items-center gap-3 p-4 border border-[#E4EEF0] rounded-[16px] text-[14px] text-[#16232B] hover:bg-[#F9FAFB] transition-all">
        <div className="text-[#075056] opacity-60">{icon}</div>
        <span>{label}</span>
    </button>
);
