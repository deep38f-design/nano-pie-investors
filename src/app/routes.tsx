import { createBrowserRouter, Outlet, Navigate, Link, useLocation } from "react-router";
import { Home } from "./screens/Home";
import { VendorList } from "./screens/VendorList";
import { VendorDetail } from "./screens/VendorDetail";
import { InvestInput } from "./screens/InvestInput";
import { Payment } from "./screens/Payment";
import { Success } from "./screens/Success";
import { Tracking } from "./screens/Tracking";
import { Profile } from "./screens/Profile";
import { Confirmation } from "./screens/Confirmation";
import { AIAssistant } from "./screens/AIAssistant";
import { InvestmentDetail } from "./screens/InvestmentDetail";
import { Activity as ActivityScreen } from "./screens/Activity";
import { BottomNav } from "./components/layout/BottomNav";
import { Toaster } from "sonner";

const Layout = () => {
  const location = useLocation();
  const hideNav = location.pathname.includes('/invest/') || 
                  location.pathname.includes('/payment/') || 
                  location.pathname.includes('/success');

  return (
    <div className="min-h-screen bg-[#F8FAFB] text-foreground font-['Outfit'] pb-24 overflow-x-hidden flex justify-center">
      <div className="w-full max-w-[400px] relative min-h-screen bg-white shadow-[0_0_50px_rgba(0,0,0,0.02)]">
        <main className="relative">
          <Outlet />
        </main>

        {!hideNav && <BottomNav />}
        <Toaster position="top-center" richColors />
      </div>
    </div>
  );
};



const Logo = ({ className }: { className?: string }) => (
  <img src="/logo.png" alt="nanopie" className={className} />
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/investor" replace />,
  },
  {
    path: "/investor",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "ai", element: <AIAssistant /> },
      { path: "vendors", element: <VendorList /> },
      { path: "vendors/:id", element: <VendorDetail /> },
      { path: "invest/:id", element: <InvestInput /> },
      { path: "confirm/:id", element: <Confirmation /> },
      { path: "payment/:id", element: <Payment /> },
      { path: "success", element: <Success /> },
      { path: "tracking", element: <Tracking /> },
      { path: "notifications", element: <ActivityScreen /> },
      { path: "profile", element: <Profile /> },
    ],
  },
  {
    path: "/profile",
    element: <Navigate to="/investor/profile" replace />,
  },
]);
