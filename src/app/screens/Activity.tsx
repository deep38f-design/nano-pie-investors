import React from 'react';
import { Bell, ShoppingBag, TrendingUp, User } from "lucide-react";

const ACTIVITIES = [
  { id: 1, type: 'payment', title: 'Investment Successful', desc: '₹500 invested in Meera\'s Bakery', time: '2h ago', icon: <ShoppingBag size={18} /> },
  { id: 2, type: 'growth', title: 'ROI Update', desc: 'Arjun\'s Farm is now 85% funded', time: '5h ago', icon: <TrendingUp size={18} /> },
  { id: 3, type: 'system', title: 'Profile Verified', desc: 'Your KYC was successfully processed', time: 'Yesterday', icon: <User size={18} /> },
];

export const Activity = () => {
  return (
    <div className="bg-white min-h-screen px-6 pt-6 font-['Outfit'] pb-24">
      <header className="mb-10">
        <h1 className="text-[28px] font-bold text-[#16232B] tracking-tight">Activity</h1>
        <p className="text-[15px] text-[#075056]/60 font-medium">Recent updates and alerts</p>
      </header>

      <div className="flex flex-col">
        {ACTIVITIES.map((activity) => (
          <div key={activity.id} className="py-5 flex items-start gap-4 border-b border-[#F1F4F6] last:border-0 active:opacity-60 transition-opacity">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${
              activity.type === 'payment' ? 'bg-[#FF5B04]/10 text-[#FF5B04] border-[#FF5B04]/10' :
              activity.type === 'growth' ? 'bg-[#00C853]/10 text-[#00C853] border-[#00C853]/10' :
              'bg-[#16232B]/5 text-[#16232B] border-[#16232B]/5'
            }`}>
              {activity.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start mb-0.5">
                <h3 className="text-[16px] font-bold text-[#16232B] leading-tight">{activity.title}</h3>
                <span className="text-[11px] font-bold text-[#16232B]/20 uppercase">{activity.time}</span>
              </div>
              <p className="text-[14px] font-medium text-[#16232B]/60 leading-snug">{activity.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
