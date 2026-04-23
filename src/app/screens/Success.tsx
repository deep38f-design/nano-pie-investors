import React, { useEffect } from 'react';
import { Check } from "lucide-react";
import { Link } from "react-router";
import confetti from "canvas-confetti";

export const Success = () => {
  useEffect(() => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#16232B", "#FF5B04", "#00C853"]
    });
  }, []);

  return (
    <div className="bg-white min-h-screen font-['Outfit'] pb-12 flex flex-col items-center">
      <div className="w-full px-6 py-12 flex flex-col items-center">
        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mb-12">
          <div className="w-8 h-1.5 bg-[#FF5B04] rounded-full" />
          <div className="w-8 h-1.5 bg-[#FF5B04] rounded-full" />
          <div className="w-8 h-1.5 bg-[#FF5B04] rounded-full" />
        </div>

        {/* Success Icon */}
        <div className="w-24 h-24 rounded-full bg-[#FFEEE6] flex items-center justify-center mb-8">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
            <Check size={32} className="text-[#FF5B04]" strokeWidth={3} />
          </div>
        </div>

        <h1 className="text-[32px] font-bold text-[#16232B] mb-3 text-center">You're in!</h1>
        <p className="text-[17px] text-gray-500 text-center leading-relaxed mb-10 px-4">
          Your ₹1,000 is now backing Meena's Tiffin. You'll receive updates as she grows.
        </p>

        {/* Summary Card */}
        <div className="w-full bg-[#FAF9F5] rounded-[24px] p-6 mb-8">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-[15px] font-medium text-gray-400">Invested</span>
              <span className="text-[16px] font-bold text-[#16232B]">₹1,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[15px] font-medium text-gray-400">Expected return</span>
              <span className="text-[16px] font-bold text-[#FF5B04]">₹1,120</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[15px] font-medium text-gray-400">Return date</span>
              <span className="text-[16px] font-bold text-[#16232B]">Oct 2025</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[15px] font-medium text-gray-400">Ref ID</span>
              <span className="text-[13px] font-bold text-gray-400">INV-20250423-7821</span>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="flex items-center gap-3 mb-12">
          <div className="flex -space-x-3">
            <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-300 flex items-center justify-center text-[10px] font-bold text-white shadow-sm">AR</div>
            <div className="w-8 h-8 rounded-full border-2 border-white bg-green-300 flex items-center justify-center text-[10px] font-bold text-white shadow-sm">PK</div>
            <div className="w-8 h-8 rounded-full border-2 border-white bg-pink-300 flex items-center justify-center text-[10px] font-bold text-white shadow-sm">SN</div>
          </div>
          <span className="text-[15px] font-bold text-gray-500">
            You joined <span className="text-[#16232B]">127 others</span> backing Meena
          </span>
        </div>

        {/* Action Buttons */}
        <div className="w-full space-y-3">
          <Link to="/investor/tracking" className="block">
            <button className="w-full bg-white text-[#16232B] py-5 rounded-[24px] text-[17px] font-bold border border-gray-200 active:scale-[0.98] transition-all">
              View in portfolio
            </button>
          </Link>
          <Link to="/investor/vendors" className="block">
            <button className="w-full bg-white text-[#16232B] py-5 rounded-[24px] text-[17px] font-bold border border-gray-200 active:scale-[0.98] transition-all">
              Explore more vendors
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};