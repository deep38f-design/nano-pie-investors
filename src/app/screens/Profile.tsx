import { ChevronRight, LogOut, Wallet, Bell, Shield, HelpCircle, Info, Award, Crown } from "lucide-react";
import { useNavigate } from "react-router";
import { ScreenHeader } from "../components/ui/ScreenHeader";

export const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#E4EEF0] min-h-screen font-['Outfit'] pb-24">
      <ScreenHeader showBack title="Profile" />

      <div className="px-6 pt-8">
        <section className="mb-12 text-center group">
          <div className="relative mx-auto w-28 h-28 mb-6">
            <div className="absolute inset-0 bg-orange-400 blur-2xl opacity-10 group-hover:opacity-20 transition-opacity" />
            <div className="relative w-28 h-28 rounded-[40px] overflow-hidden border-4 border-white shadow-xl">
               <img 
                 src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200" 
                 alt="Profile" 
                 className="w-full h-full object-cover"
               />
            </div>
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#16232B] rounded-2xl flex items-center justify-center text-white border-4 border-white shadow-lg">
              <Crown size={18} />
            </div>
          </div>
          
          <div>
            <h2 className="text-[28px] font-bold text-[#16232B] tracking-tight">John Doe</h2>
            <div className="flex items-center justify-center gap-2 mt-1">
               <span className="text-[14px] font-bold text-gray-400 uppercase tracking-widest leading-none">Silver Member</span>
               <div className="w-1 h-1 rounded-full bg-gray-200" />
               <div className="flex items-center gap-1">
                  <Award size={14} className="text-[#FF5B04]" />
                  <span className="text-[14px] font-bold text-[#FF5B04] uppercase tracking-widest leading-none">Verified</span>
               </div>
            </div>
          </div>
        </section>

        <div className="space-y-6">
          <section>
            <div className="bg-white rounded-[32px] shadow-sm border border-white overflow-hidden">
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest px-8 pt-8 mb-2 leading-none">Account & Finance</p>
              <div className="divide-y divide-gray-50">
                <ProfileItem icon={<Wallet size={20} />} label="Wallet & Payouts" />
                <ProfileItem icon={<Bell size={20} />} label="Notifications" />
                <ProfileItem icon={<Shield size={20} />} label="Security & Privacy" />
              </div>
            </div>
          </section>

          <section>
            <div className="bg-white rounded-[32px] shadow-sm border border-white overflow-hidden">
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest px-8 pt-8 mb-2 leading-none">General</p>
              <div className="divide-y divide-gray-50">
                <ProfileItem icon={<HelpCircle size={20} />} label="Help Center" />
                <ProfileItem icon={<Info size={20} />} label="About Nano Pie" />
              </div>
            </div>
          </section>

          <section className="pt-4">
            <button className="w-full flex items-center justify-center gap-3 px-6 py-5 bg-white rounded-[24px] text-red-500 font-bold active:scale-95 transition-all border border-white shadow-sm">
              <LogOut size={20} />
              <span className="text-[17px]">Sign Out</span>
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

const ProfileItem = ({ icon, label }: { icon: React.ReactNode; label: string }) => {
  return (
    <button className="w-full flex items-center justify-between px-8 py-5 hover:bg-gray-50 transition-all group active:bg-gray-100">
      <div className="flex items-center gap-4 text-[#16232B]">
        <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors border border-gray-100/50">{icon}</div>
        <span className="text-[17px] font-bold tracking-tight">{label}</span>
      </div>
      <ChevronRight size={20} className="text-gray-200" />
    </button>
  );
};