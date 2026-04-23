import React, { useState } from 'react';
import { ChevronLeft, Check } from "lucide-react";
import { useParams, useNavigate, useSearchParams } from "react-router";
import { VENDORS } from "../data/vendors";

const PAYMENT_METHODS = [
  { id: 'gpay', name: 'Google Pay', handle: 'rahul@okicici', icon: 'UPI' },
  { id: 'phonepe', name: 'PhonePe', handle: '', icon: 'PB' },
  { id: 'card', name: 'Credit card', handle: '', icon: 'CC' },
];

export const Payment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const amount = searchParams.get("amount") || "1000";
  const vendor = VENDORS.find(v => v.id === id);
  const [selectedMethod, setSelectedMethod] = useState('gpay');

  if (!vendor) return <div className="p-6">Vendor not found</div>;

  const numAmount = parseFloat(amount) || 0;
  const expectedReturn = Math.floor(numAmount * 1.12);

  return (
    <div className="bg-white min-h-screen font-['Outfit'] pb-32">
      {/* Header */}
      <div className="px-6 py-4 flex items-center justify-between sticky top-0 bg-white z-10 border-b border-gray-50">
        <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-[#FF5B04] font-bold">
          <ChevronLeft size={20} />
          <span>Back</span>
        </button>
        <span className="text-[14px] font-bold text-gray-400">Step 2 of 3</span>
      </div>

      <div className="px-6 pt-6">
        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mb-8">
          <div className="w-8 h-1.5 bg-[#FF5B04] rounded-full" />
          <div className="w-8 h-1.5 bg-[#FF5B04] rounded-full" />
          <div className="w-8 h-1.5 bg-gray-100 rounded-full" />
        </div>

        <h1 className="text-[24px] font-bold text-[#16232B] mb-8">Review your investment</h1>

        {/* Review Table */}
        <div className="space-y-6 mb-12">
          <div className="flex justify-between items-center pb-1 border-b border-gray-50">
            <span className="text-[15px] font-medium text-gray-400">Vendor</span>
            <span className="text-[16px] font-bold text-[#16232B]">{vendor.name}</span>
          </div>
          <div className="flex justify-between items-center pb-1 border-b border-gray-50">
            <span className="text-[15px] font-medium text-gray-400">Amount</span>
            <span className="text-[16px] font-bold text-[#16232B]">₹{numAmount.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center pb-1 border-b border-gray-50">
            <span className="text-[15px] font-medium text-gray-400">Return type</span>
            <span className="text-[16px] font-bold text-[#16232B]">Profit share</span>
          </div>
          <div className="flex justify-between items-center pb-1 border-b border-gray-50">
            <span className="text-[15px] font-medium text-gray-400">Expected return</span>
            <span className="text-[16px] font-bold text-[#FF5B04]">₹{expectedReturn.toLocaleString()} in 6 mo</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[15px] font-medium text-gray-400">Duration</span>
            <span className="text-[16px] font-bold text-[#16232B]">6 months</span>
          </div>
        </div>

        {/* Payment Methods */}
        <p className="text-[15px] font-bold text-[#16232B] mb-4">Pay with</p>
        <div className="space-y-3">
          {PAYMENT_METHODS.map((method) => (
            <button
              key={method.id}
              onClick={() => setSelectedMethod(method.id)}
              className={`w-full flex items-center justify-between p-4 rounded-[20px] transition-all ${
                selectedMethod === method.id 
                  ? 'bg-[#FAF9F5] border border-[#FAF9F5]' 
                  : 'bg-white border border-gray-100'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-[13px] font-bold shadow-sm ${
                  method.id === 'gpay' ? 'bg-blue-50 text-blue-600' : 
                  method.id === 'phonepe' ? 'bg-orange-50 text-orange-600' : 'bg-blue-100/50 text-blue-700'
                }`}>
                  {method.icon}
                </div>
                <div className="text-left">
                  <p className="text-[16px] font-bold text-[#16232B]">{method.name}</p>
                  {method.handle && <p className="text-[13px] font-medium text-gray-400">{method.handle}</p>}
                </div>
              </div>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                selectedMethod === method.id ? 'bg-[#FF5B04] border-[#FF5B04]' : 'border-gray-200'
              }`}>
                {selectedMethod === method.id && <Check size={14} className="text-white" />}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Sticky Bottom Pay Button */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[400px] p-6 bg-white/80 backdrop-blur-md border-t border-gray-50 z-50">
        <button
          onClick={() => navigate("/investor/success")}
          className="w-full bg-[#16232B] text-white py-5 rounded-[24px] text-[17px] font-bold active:scale-[0.98] transition-all shadow-xl shadow-black/10"
        >
          Pay ₹{numAmount.toLocaleString()}
        </button>
      </div>
    </div>
  );
};