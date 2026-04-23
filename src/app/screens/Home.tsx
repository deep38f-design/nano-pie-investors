import { ArrowRight, User } from "lucide-react";
import { VENDORS } from "../data/vendors";
import { Link, useNavigate } from "react-router";
import { VendorCard } from "../components/ui/VendorCard";

const CATEGORIES = ["All", "Groceries", "Bakery", "Crafts", "Food"];

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#E4EEF0] min-h-screen font-['Outfit'] pb-24">
      {/* Header */}
      <header className="px-6 py-4 flex justify-between items-center bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-gray-50">
        <Link to="/investor" className="flex items-center gap-2">
          <img src="/logo.png" alt="nanopie" className="h-10 w-auto" />
        </Link>
        <Link to="/investor/notifications" className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center bg-white shadow-sm">
           <User size={20} className="text-[#16232B]" />
        </Link>
      </header>
      
      <div className="px-6">
        {/* Welcome Section */}
        <div className="my-8">
          <h1 className="text-[28px] font-bold text-[#16232B] tracking-tight leading-tight">Invest Local</h1>
          <p className="text-[17px] text-gray-400 font-medium tracking-tight">Discover verified opportunities near you</p>
        </div>

        {/* Featured Spotlight */}
        <section className="mb-10">
          <Link to={`/investor/vendors/${VENDORS[0].id}`}>
            <div className="relative w-full aspect-[16/9] rounded-[32px] overflow-hidden group shadow-sm border border-gray-100">
              <img 
                src={VENDORS[0].image} 
                alt={VENDORS[0].name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute top-4 left-4">
                <div className="px-3 py-1.5 bg-[#FF5B04] rounded-xl shadow-lg">
                  <span className="text-[11px] font-bold text-white uppercase tracking-widest">Spotlight</span>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div className="flex-1">
                  <h3 className="text-[24px] font-bold text-white leading-tight mb-1">{VENDORS[0].name}</h3>
                  <p className="text-white/80 text-[15px] font-medium">{VENDORS[0].businessType} · {VENDORS[0].returns}</p>
                </div>
                <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-[#16232B] shadow-xl">
                  <ArrowRight size={22} />
                </div>
              </div>
            </div>
          </Link>
        </section>

        {/* Categories Bar */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {CATEGORIES.map((cat, i) => (
            <button 
              key={cat}
              className={`px-6 py-2.5 rounded-full text-[15px] font-bold transition-all whitespace-nowrap ${
                i === 0 
                  ? 'bg-[#16232B] text-white border border-[#16232B]' 
                  : 'bg-white text-gray-500 border border-gray-100 shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Recommended List */}
        <section className="mb-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[22px] font-bold text-[#16232B] tracking-tight">Recommended</h2>
            <Link to="/investor/vendors" className="text-[#FF5B04] text-[15px] font-bold">See all</Link>
          </div>

          <div className="flex flex-col gap-2">
            {VENDORS.slice(0, 3).map((vendor) => (
              <VendorCard
                key={vendor.id}
                {...vendor}
                category={vendor.businessType}
                investorsCount={vendor.investors}
                onClick={() => navigate(`/investor/vendors/${vendor.id}`)}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};