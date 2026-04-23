import React, { useState } from 'react';
import { useParams, useNavigate } from "react-router";
import { ChevronLeft } from "lucide-react";
import { VENDORS } from "../data/vendors";

export const InvestInput = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [amount, setAmount] = useState("1000");
  const vendor = VENDORS.find(v => v.id === id);

  if (!vendor) return <div className="p-6">Vendor not found</div>;

  const handleKeypadPress = (val: string) => {
    if (val === 'back') {
      setAmount(prev => prev.length > 1 ? prev.slice(0, -1) : "0");
    } else if (val === '.') {
      if (!amount.includes('.')) setAmount(prev => prev + ".");
    } else {
      setAmount(prev => prev === "0" ? val : prev + val);
    }
  };

  const numAmount = parseFloat(amount) || 0;
  const expectedReturn = Math.floor(numAmount * 1.12);

  return (
    <div className="bg-white min-h-screen font-['Outfit'] pb-80">
      {/* Header */}
      <div className="px-6 py-4 flex items-center justify-between sticky top-0 bg-white z-10 border-b border-gray-50">
        <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-[#FF5B04] font-bold">
          <ChevronLeft size={20} />
          <span>Back</span>
        </button>
        <span className="text-[14px] font-bold text-gray-400">Step 1 of 3</span>
      </div>

      <div className="px-6 pt-6">
        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mb-6">
          <div className="w-8 h-1.5 bg-[#FF5B04] rounded-full" />
          <div className="w-8 h-1.5 bg-gray-100 rounded-full" />
          <div className="w-8 h-1.5 bg-gray-100 rounded-full" />
        </div>

        <p className="text-center text-[15px] font-bold text-gray-500 mb-4">Investing in {vendor.name}</p>

        <div className="text-center mb-2">
          <span className="text-[48px] font-bold text-[#16232B]">₹{numAmount.toLocaleString()}</span>
        </div>
        <p className="text-center text-[13px] font-bold text-gray-400 mb-8">Min ₹500 · Max ₹25,000</p>

        {/* Preset Buttons */}
        <div className="grid grid-cols-3 gap-2 mb-8">
          {["500", "1000", "2000", "5000", "10000", "Custom"].map((preset) => (
            <button 
              key={preset}
              onClick={() => preset !== 'Custom' && setAmount(preset)}
              className={`py-3.5 rounded-[16px] text-[15px] font-bold transition-all border ${
                amount === preset 
                  ? 'bg-[#FFF1EB] text-[#FF5B04] border-[#FF5B04]' 
                  : 'bg-white text-[#16232B] border-gray-100 shadow-sm'
              }`}
            >
              {preset === 'Custom' ? 'Custom' : `₹${preset}`}
            </button>
          ))}
        </div>

        {/* Summary Card */}
        <div className="bg-[#FAF9F5] rounded-[24px] p-6 mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[14px] font-medium text-gray-500">You invest</span>
            <span className="text-[16px] font-bold text-[#16232B]">₹{numAmount.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-[14px] font-medium text-gray-500">You get back</span>
            <span className="text-[16px] font-bold text-[#FF5B04]">₹{expectedReturn.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center pt-2 border-t border-gray-100">
            <span className="text-[14px] font-medium text-gray-500">Return</span>
            <span className="text-[16px] font-bold text-[#FF5B04]">+₹{(expectedReturn - numAmount).toLocaleString()} in 6 months</span>
          </div>
        </div>

        <button 
          onClick={() => navigate(`/investor/payment/${id}?amount=${amount}`)}
          className="w-full bg-[#16232B] text-white py-5 rounded-[24px] text-[17px] font-bold active:scale-[0.98] transition-all shadow-xl shadow-black/10"
        >
          Continue
        </button>
      </div>

      {/* Custom Keypad */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100">
        <div className="max-w-[400px] mx-auto grid grid-cols-3">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, '.', 0, 'back'].map((key, i) => (
            <button
              key={i}
              onClick={() => handleKeypadPress(key.toString())}
              className="h-16 flex items-center justify-center text-[22px] font-medium text-[#16232B] active:bg-gray-50 transition-colors border-r border-b border-gray-100 last:border-r-0"
            >
              {key === 'back' ? '←' : key}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};