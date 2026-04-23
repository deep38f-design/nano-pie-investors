export default function VendorDetailScreen({
  vendorId,
  onNavigate
}: {
  vendorId: number;
  onNavigate: (screen: string, vendorId?: number) => void;
}) {
  const vendor = {
    name: "Ramesh Groceries",
    description: "Local grocery shop needs funds to stock up for the upcoming festival season. High demand expected.",
    needed: 5000,
    raised: 3200,
  };

  const progress = (vendor.raised / vendor.needed) * 100;

  return (
    <div className="flex flex-col h-full">
      <div className="border-b-2 border-black p-4 flex items-center gap-4">
        <button onClick={() => onNavigate('home')} className="text-xl">←</button>
        <div className="text-xl">Vendor Details</div>
      </div>

      <div className="flex-1 overflow-auto p-6 space-y-6">
        <div className="text-2xl">{vendor.name}</div>

        <div className="space-y-2">
          <div className="text-xs text-gray-600">Description</div>
          <div className="text-sm">{vendor.description}</div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between">
            <div className="text-xs text-gray-600">Total needed</div>
            <div>₹{vendor.needed}</div>
          </div>
          <div className="flex justify-between">
            <div className="text-xs text-gray-600">Amount raised</div>
            <div>₹{vendor.raised}</div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="h-1 bg-gray-300 relative">
            <div
              className="h-full bg-black absolute left-0 top-0"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-xs text-gray-600">{Math.round(progress)}% funded</div>
        </div>

        <button
          onClick={() => onNavigate('invest', vendorId)}
          className="w-full border-2 border-black py-3"
        >
          Invest ₹
        </button>
      </div>
    </div>
  );
}
