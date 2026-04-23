import React from 'react';
import { ChevronLeft } from "lucide-react";
import { VENDORS } from "../data/vendors";
import { useParams, useNavigate, Link } from "react-router";

export const VendorDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const vendor = VENDORS.find(v => v.id === id);

  if (!vendor) return <div className="p-6 text-[#16232B]">Vendor not found</div>;

  const progress = Math.min((vendor.fundingRaised / vendor.fundingGoal) * 100, 100);
  const initials = vendor.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();

  return (
    <div className="bg-white min-h-screen pb-40 font-['Outfit'] relative">
      {/* Header */}
      <div className="px-6 py-4 flex items-center justify-between sticky top-0 bg-white z-10">
        <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-[#FF5B04] font-bold">
          <ChevronLeft size={20} />
          <span>Back</span>
        </button>
        <div className="px-4 py-1.5 bg-[#FFEEE6] rounded-full">
          <span className="text-[13px] font-bold text-[#FF5B04]">Explore</span>
        </div>
      </div>

      <div className="px-6 pt-6">
        {/* Avatar & Title */}
        <div className="flex items-start gap-4 mb-8">
          <div className="w-16 h-16 rounded-[20px] bg-[#FFEEE6] flex items-center justify-center text-[24px] font-bold text-[#FF5B04]">
            {initials}
          </div>
          <div className="flex-1">
            <h1 className="text-[28px] font-bold text-[#16232B] tracking-tight leading-tight mb-1">{vendor.name}</h1>
            <p className="text-[15px] font-medium text-gray-400">
              {vendor.location.split(',')[0]}, {vendor.location.split(',')[1]} · {vendor.businessType}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-[16px] text-gray-700 leading-relaxed font-normal mb-8">
          {vendor.description}
        </p>

        {/* Funding Stats */}
        <div className="flex items-baseline justify-between mb-2">
          <span className="text-[28px] font-bold text-[#16232B]">₹{vendor.fundingRaised.toLocaleString()}</span>
          <span className="text-[14px] font-bold text-[#FF5B04]">{Math.floor(progress)}% funded</span>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full h-2.5 bg-gray-50 rounded-full overflow-hidden mb-3">
          <div 
            className="h-full bg-[#FF5B04] rounded-full transition-all duration-1000" 
            style={{ width: `${progress}%` }} 
          />
        </div>

        {/* Sub Stats */}
        <div className="flex justify-between items-center mb-10">
          <span className="text-[14px] font-bold text-gray-400">of ₹{vendor.fundingGoal.toLocaleString()} goal</span>
          <span className="text-[14px] font-bold text-[#16232B]">14 days left</span>
        </div>

        {/* Return Banner */}
        <div className="bg-[#FFEEE6] rounded-[20px] p-5 mb-8 border border-[#FFEEE6]">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-2 h-2 rounded-full bg-[#FF5B04]" />
            <p className="text-[17px] font-bold text-[#7A2C0D]">
              Invest ₹{vendor.minInvestment} → get back ₹{Math.floor(vendor.minInvestment * 1.12)}
            </p>
          </div>
          <p className="text-[15px] font-medium text-[#7A2C0D] opacity-60 ml-5">
            Expected in 6 months · {vendor.returns}
          </p>
        </div>

        {/* Social Proof */}
        <div className="flex items-center gap-3 mb-12">
          <div className="flex -space-x-3">
            {['AR', 'PK', 'SN'].map((initial, i) => (
              <div 
                key={i} 
                className={`w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-[12px] font-bold text-white shadow-sm ${
                  i === 0 ? 'bg-blue-300' : i === 1 ? 'bg-green-300' : 'bg-pink-300'
                }`}
              >
                {initial}
              </div>
            ))}
            <div className="w-10 h-10 rounded-full border-2 border-white bg-orange-200 flex items-center justify-center text-[12px] font-bold text-[#075056] shadow-sm">
              +4
            </div>
          </div>
          <span className="text-[15px] font-bold text-gray-500">
            <span className="text-[#16232B]">{vendor.investors} investors</span> have backed this
          </span>
        </div>
      </div>

      {/* Sticky Bottom Actions */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[400px] p-6 bg-white/90 backdrop-blur-md border-t border-gray-50 z-50 flex flex-col gap-3">
        <Link to={`/investor/invest/${vendor.id}`}>
          <button className="w-full bg-white text-[#16232B] py-5 rounded-[24px] text-[17px] font-bold border border-gray-200 active:scale-[0.98] transition-all">
            Back this vendor
          </button>
        </Link>
        <button className="w-full bg-white text-[#16232B] py-5 rounded-[24px] text-[17px] font-bold border border-gray-200 active:scale-[0.98] transition-all">
          Save for later
        </button>
      </div>
    </div>
  );
};