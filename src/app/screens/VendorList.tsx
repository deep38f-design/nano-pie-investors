import React, { useState } from 'react';
import { Search } from "lucide-react";
import { VENDORS } from "../data/vendors";
import { Link, useNavigate } from "react-router";
import { VendorCard } from "../components/ui/VendorCard";

const CATEGORIES = ["All", "Food & cafe", "Retail", "Services", "Tech"];

export const VendorList = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const navigate = useNavigate();

  const featuredVendor = VENDORS.find(v => v.id === 'meena');
  const otherVendors = VENDORS.filter(v => v.id !== 'meena');

  return (
    <div className="bg-[#FBFBFB] min-h-screen font-['Outfit'] pb-24">
      {/* Custom Header */}
      <div className="px-6 py-6 flex items-center justify-between">
        <div>
          <h1 className="text-[28px] font-bold text-[#16232B] tracking-tight">Explore</h1>
          <p className="text-[15px] text-gray-400 font-medium tracking-tight">{VENDORS.length} vendors near you</p>
        </div>
        <button className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-[#16232B] border border-gray-100/50">
          <Search size={22} />
        </button>
      </div>

      <div className="px-6">
        {/* Filter Pills */}
        <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar mb-6">
          {CATEGORIES.map((cat) => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-[15px] font-bold transition-all whitespace-nowrap border ${
                activeCategory === cat 
                  ? 'bg-[#16232B] text-white border-[#16232B]' 
                  : 'bg-white text-gray-500 border-gray-100 shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Card */}
        {featuredVendor && activeCategory === "All" && (
          <VendorCard
            featured
            {...featuredVendor}
            category={featuredVendor.businessType}
            investorsCount={featuredVendor.investors}
            onClick={() => navigate(`/investor/vendors/${featuredVendor.id}`)}
          />
        )}

        {/* Other Vendors */}
        <div className="flex flex-col gap-2 font-['Outfit']">
          {otherVendors
            .filter(v => activeCategory === "All" || v.businessType === activeCategory)
            .map((vendor) => (
              <VendorCard
                key={vendor.id}
                {...vendor}
                category={vendor.businessType}
                investorsCount={vendor.investors}
                onClick={() => navigate(`/investor/vendors/${vendor.id}`)}
              />
            ))}
        </div>

      </div>
    </div>
  );
};