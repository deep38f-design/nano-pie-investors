import { TrendingUp, Calendar, ArrowUpRight, ShieldCheck, Wallet } from "lucide-react";
import { Link } from "react-router";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import { ScreenHeader } from "../components/ui/ScreenHeader";

const DATA = [
  { name: "Jan", value: 3400 },
  { name: "Feb", value: 3600 },
  { name: "Mar", value: 3500 },
  { name: "Apr", value: 3800 },
  { name: "May", value: 4100 },
  { name: "Jun", value: 4250 },
];

const PORTFOLIO_DATA = [
  { id: 1, vendor: "Meera's Artisan Bakery", amount: 500, returns: "+₹56", status: "Growing" },
  { id: 2, vendor: "Arjun's Organic Farm", amount: 1000, returns: "+₹120", status: "Active" },
  { id: 3, vendor: "The Chai Hub", amount: 250, returns: "+₹38", status: "Growing" },
];

export const Tracking = () => {
  return (
    <div className="bg-[#E4EEF0] min-h-screen font-['Outfit'] pb-24">
      <ScreenHeader title="Portfolio" />

      <div className="px-6">
        <header className="my-6">
          <h1 className="text-[28px] font-bold text-[#16232B] tracking-tight">Investment Hub</h1>
          <p className="text-[15px] text-gray-500 font-medium">Track your local wealth growth</p>
        </header>

        {/* Hero Card: Total Value */}
        <div className="relative mb-8 overflow-hidden rounded-[32px] bg-[#16232B] p-8 shadow-sm">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF5B04]/10 blur-[80px] rounded-full -mr-20 -mt-20" />
          <div className="relative z-10">
            <p className="text-[13px] font-bold text-white/30 uppercase tracking-widest mb-2">Total Value</p>
            <div className="flex items-baseline gap-3 mb-6">
              <h2 className="text-[40px] font-bold text-white tracking-tight">₹4,250.00</h2>
              <div className="flex items-center gap-1 text-[#00C853] font-bold text-[14px]">
                <TrendingUp size={16} />
                <span>+12.5%</span>
              </div>
            </div>
            
            <div className="h-20 w-full opacity-50">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={DATA}>
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#FF5B04" 
                    strokeWidth={3}
                    fill="transparent" 
                    animationDuration={1500}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Invested & Realized inside hero */}
            <div className="flex gap-6 mt-5 pt-5 border-t border-white/10">
              <div className="flex-1">
                <p className="text-[11px] font-bold text-white/30 uppercase tracking-widest mb-1">Invested</p>
                <p className="text-[20px] font-bold text-white">₹3,750</p>
              </div>
              <div className="w-px bg-white/10" />
              <div className="flex-1">
                <p className="text-[11px] font-bold text-white/30 uppercase tracking-widest mb-1">Realized</p>
                <p className="text-[20px] font-bold text-[#00C853]">₹500</p>
              </div>
            </div>
          </div>
        </div>

        {/* Investment List */}
        <section className="mb-10 bg-white rounded-[32px] p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
              <h3 className="text-[20px] font-bold text-[#16232B] tracking-tight">Active Holdings</h3>
              <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center">
                  <Wallet size={16} className="text-gray-400" />
              </div>
          </div>

          <div className="divide-y divide-gray-50">
              {PORTFOLIO_DATA.map((item) => (
                  <Link to={`/investor/tracking/${item.id}`} key={item.id} className="py-5 block active:bg-gray-50 transition-all">
                      <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center text-[#16232B] font-bold">
                              {item.vendor[0]}
                            </div>
                            <div>
                                <p className="text-[16px] font-bold text-[#16232B] leading-tight mb-1">{item.vendor}</p>
                                <div className={`inline-flex items-center px-2 py-0.5 rounded-lg text-[10px] font-bold uppercase tracking-tight ${
                                  item.status === 'Growing' ? 'bg-green-50 text-green-600' : 'bg-blue-50 text-blue-600'
                                }`}>
                                  {item.status}
                                </div>
                            </div>
                          </div>
                          <div className="text-right">
                              <p className="text-[17px] font-bold text-[#16232B] mb-1">₹{item.amount}</p>
                              <p className="text-[13px] font-bold text-green-500 leading-none">{item.returns}</p>
                          </div>
                      </div>
                  </Link>
              ))}
          </div>
        </section>

        {/* Milestone Banner */}
        <section className="mb-12 p-6 bg-white rounded-[32px] shadow-sm border border-white flex items-center justify-between">
          <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600">
                  <Calendar size={24} />
              </div>
              <div>
                  <p className="text-[15px] font-bold text-[#16232B] leading-tight">Next Payout</p>
                  <p className="text-[13px] text-gray-400 font-medium">15 July • ₹124.00</p>
              </div>
          </div>
          <ArrowUpRight size={20} className="text-gray-300" />
        </section>
      </div>
    </div>
  );
};