import React from 'react';
import { Info, ArrowRight } from "lucide-react";
import { useParams, useNavigate, useSearchParams } from "react-router";
import { VENDORS } from "../data/vendors";
import { ScreenHeader } from "../components/ui/ScreenHeader";

export const Confirmation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const amount = searchParams.get("amount") || "0";
  const vendor = VENDORS.find(v => v.id === id);

  if (!vendor) return <div className="p-6">Vendor not found</div>;

  const handleProceed = () => {
    navigate(`/investor/payment/${id}?amount=${amount}`);
  };

  const numAmount = parseFloat(amount);
  const expectedReturn = Math.floor(numAmount * 1.12);

  return (
    <div className="bg-white min-h-screen font-['Outfit']">
      <ScreenHeader showBack />

      <div className="px-6 pt-6">
        <header className="mb-10">
          <h1 className="text-[28px] font-bold text-[#16232B] tracking-tight">Review</h1>
          <p className="text-[15px] text-gray-500 font-medium">Verify your investment details</p>
        </header>

        <div className="bg-[#F8FAFB] rounded-[32px] p-6 mb-8 border border-gray-100">
          <div className="space-y-6">
            <div className="flex justify-between items-center pb-4 border-b border-gray-200/50">
              <span className="text-[14px] font-bold text-gray-400 uppercase tracking-widest">Business</span>
              <span className="text-[17px] font-bold text-[#16232B]">{vendor.name}</span>
            </div>
            
            <div className="flex justify-between items-center pb-4 border-b border-gray-200/50">
              <span className="text-[14px] font-bold text-gray-400 uppercase tracking-widest">Investment</span>
              <span className="text-[20px] font-bold text-[#16232B]">₹{numAmount.toLocaleString()}</span>
            </div>

            <div className="flex justify-between items-center pb-4 border-b border-gray-200/50">
              <span className="text-[14px] font-bold text-gray-400 uppercase tracking-widest">Target ROI</span>
              <span className="text-[17px] font-bold text-[#00C853]">{vendor.returns}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-[14px] font-bold text-gray-400 uppercase tracking-widest">Expected Return</span>
              <span className="text-[20px] font-bold text-[#FF5B04]">₹{expectedReturn.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="p-5 bg-blue-50 rounded-[20px] flex gap-4 mb-10 border border-blue-100">
          <Info className="text-blue-500 flex-shrink-0" size={20} />
          <p className="text-[13px] font-medium text-blue-600/80 leading-relaxed">
            Funds will be held securely and released only when the target is reached.
          </p>
        </div>
      </div>

      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[400px] p-6 bg-white/80 backdrop-blur-md border-t border-gray-100">
        <button
          onClick={handleProceed}
          className="w-full bg-[#16232B] text-white py-5 rounded-[24px] text-[17px] font-bold shadow-xl shadow-black/10 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          <span>Confirm & Pay</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};
