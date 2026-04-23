import React from 'react';
import { ChevronLeft, Info, Activity, TrendingUp, DollarSign } from "lucide-react";
import { useParams, useNavigate } from "react-router";
import { VENDORS } from "../data/vendors";

export const InvestmentDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // In a real app, we'd fetch the specific investment data.
  // For now, we'll just show mock data for the selected vendor.
  const vendor = VENDORS.find(v => v.id === id) || VENDORS[0];

  return (
    <div className="bg-[#FFFFFF] min-h-screen px-5 pt-12 pb-8 font-['Outfit']">
      <header className="flex items-center gap-4 mb-10">
        <button onClick={() => navigate(-1)} className="w-10 h-10 border border-[#E4EEF0] rounded-full flex items-center justify-center text-[#16232B]">
          <ChevronLeft size={24} strokeWidth={1.5} />
        </button>
        <h1 className="text-[18px] text-[#16232B] truncate">{vendor.name} Tracking</h1>
      </header>

      <div className="space-y-12">
        {/* Investment Summary */}
        <section>
          <div className="flex items-baseline gap-2 mb-2">
            <h2 className="text-[28px] text-[#16232B] font-medium">₹564.50</h2>
            <span className="text-[14px] text-[#16232B] opacity-40">Current Value</span>
          </div>
          <p className="text-[14px] text-[#075056]">+₹64.50 (12.9%) since investment</p>
        </section>

        {/* 1px Dividers between sections */}
        <div className="h-[1px] bg-[#E4EEF0]" />

        {/* Stats Grid */}
        <section className="grid grid-cols-2 gap-y-8">
            <div>
                <p className="text-[12px] text-[#075056] uppercase tracking-wider mb-1">Invested</p>
                <p className="text-[16px] text-[#16232B]">₹500.00</p>
            </div>
            <div>
                <p className="text-[12px] text-[#075056] uppercase tracking-wider mb-1">Return Type</p>
                <p className="text-[16px] text-[#16232B]">Profit Share</p>
            </div>
            <div>
                <p className="text-[12px] text-[#075056] uppercase tracking-wider mb-1">Last Payout</p>
                <p className="text-[16px] text-[#16232B]">₹12.40</p>
            </div>
            <div>
                <p className="text-[12px] text-[#075056] uppercase tracking-wider mb-1">Date</p>
                <p className="text-[16px] text-[#16232B]">15 Mar 2024</p>
            </div>
        </section>

        <div className="h-[1px] bg-[#E4EEF0]" />

        {/* Business Performance */}
        <section>
          <h3 className="text-[16px] text-[#16232B] mb-6 flex items-center gap-2">
              <TrendingUp size={18} className="text-[#075056]" />
              Business Performance
          </h3>
          <div className="space-y-6">
              <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#16232B] mt-2 flex-shrink-0" />
                  <p className="text-[14px] text-[#16232B] opacity-80 leading-relaxed">
                      Revenue grew by 15% this month due to steady footfall and new menu additions.
                  </p>
              </div>
              <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#16232B] mt-2 flex-shrink-0" />
                  <p className="text-[14px] text-[#16232B] opacity-80 leading-relaxed">
                      Operational costs decreased by 5% following supplier renegotiations.
                  </p>
              </div>
          </div>
        </section>

        <div className="h-[1px] bg-[#E4EEF0]" />

        {/* Support */}
        <section className="pb-12">
            <button className="w-full border border-[#E4EEF0] py-4 rounded-[14px] text-[15px] text-[#16232B] mb-4">
                Message Business Owner
            </button>
            <button className="w-full text-[14px] text-[#075056] opacity-60">
                View Investment Terms
            </button>
        </section>
      </div>
    </div>
  );
};
