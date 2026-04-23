import React from 'react';
import { NavLink } from "react-router";
import { Home, Search, Activity, Bell } from "lucide-react";

export const BottomNav = () => {
  const navItems = [
    { to: "/investor", icon: <Home size={22} />, label: "Home" },
    { to: "/investor/vendors", icon: <Search size={22} />, label: "Explore" },
    { to: "/investor/tracking", icon: <Activity size={22} />, label: "Portfolio" },
    { to: "/investor/notifications", icon: <Bell size={22} />, label: "Activity" },
  ];

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[400px] bg-white border-t border-[#F1F4F6] px-4 py-2 pb-8 flex justify-around items-center z-50">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.to === "/investor"}
          className={({ isActive }) => 
            `flex flex-col items-center gap-1 transition-all duration-200 ${
              isActive ? "text-[#FF5B04] stroke-[3]" : "text-[#16232B]/30 hover:text-[#16232B]/60"
            }`
          }
        >
          <div className="p-1">
            {React.cloneElement(item.icon as any, { 
              strokeWidth: 2.5
            })}
          </div>
          <span className="text-[10px] font-medium tracking-tight">{item.label}</span>
        </NavLink>
      ))}
    </div>
  );
};
