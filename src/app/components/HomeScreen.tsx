const vendors = [
  { id: 1, name: "Ramesh Groceries", needed: 5000, purpose: "Need stock for festival season" },
  { id: 2, name: "Priya Tailoring", needed: 3000, purpose: "New sewing machine" },
  { id: 3, name: "Kumar Chai Stall", needed: 2000, purpose: "Equipment repair" },
  { id: 4, name: "Lakshmi Flowers", needed: 4000, purpose: "Expand inventory" },
];

export default function HomeScreen({ onNavigate }: { onNavigate: (screen: string, vendorId?: number) => void }) {
  return (
    <div className="flex flex-col h-full">
      <div className="border-b-2 border-black p-4">
        <div className="text-sm">Hello</div>
      </div>

      <div className="flex-1 overflow-auto p-4 space-y-3">
        {vendors.map((vendor) => (
          <div
            key={vendor.id}
            className="border-2 border-black p-4 space-y-2 cursor-pointer"
            onClick={() => onNavigate('vendor', vendor.id)}
          >
            <div>{vendor.name}</div>
            <div className="text-sm">₹{vendor.needed}</div>
            <div className="text-xs text-gray-600">{vendor.purpose}</div>
            <div className="text-xs mt-2">View</div>
          </div>
        ))}
      </div>

      <div className="border-t-2 border-black p-4 flex justify-around">
        <div className="flex flex-col items-center gap-1">
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
        <div
          className="flex flex-col items-center gap-1 cursor-pointer"
          onClick={() => onNavigate('profile')}
        >
          <div className="w-6 h-6 border-2 border-black"></div>
          <div className="text-xs">Profile</div>
        </div>
      </div>
    </div>
  );
}
