export default function ProfileScreen({ onNavigate }: { onNavigate: (screen: string) => void }) {
  return (
    <div className="flex flex-col h-full">
      <div className="border-b-2 border-black p-4">
        <div className="text-xl">Profile</div>
      </div>

      <div className="flex-1 overflow-auto p-6 space-y-6">
        <div className="space-y-4">
          <div className="space-y-1">
            <div className="text-xs text-gray-600">Name</div>
            <div>Rajesh Kumar</div>
          </div>
          <div className="space-y-1">
            <div className="text-xs text-gray-600">Phone number</div>
            <div>+91 98765 43210</div>
          </div>
        </div>

        <div className="border-t-2 border-gray-400 pt-6 space-y-3">
          <div
            className="border-2 border-black p-3 cursor-pointer"
            onClick={() => onNavigate('investments')}
          >
            My Investments
          </div>
          <div className="border-2 border-black p-3">Settings</div>
          <div
            className="border-2 border-black p-3 cursor-pointer"
            onClick={() => onNavigate('login')}
          >
            Logout
          </div>
        </div>
      </div>

      <div className="border-t-2 border-black p-4 flex justify-around">
        <div
          className="flex flex-col items-center gap-1 cursor-pointer"
          onClick={() => onNavigate('home')}
        >
          <div className="w-6 h-6 border-2 border-black"></div>
          <div className="text-xs">Home</div>
        </div>
        <div
          className="flex flex-col items-center gap-1 cursor-pointer"
          onClick={() => onNavigate('investments')}
        >
          <div className="w-6 h-6 border-2 border-black"></div>
          <div className="text-xs">Investments</div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="w-6 h-6 border-2 border-black"></div>
          <div className="text-xs">Profile</div>
        </div>
      </div>
    </div>
  );
}
