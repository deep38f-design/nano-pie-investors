const investments = [
  {
    id: 1,
    vendor: "Ramesh Groceries",
    amount: 500,
    status: "Ongoing",
    update: "Stock purchased"
  },
  {
    id: 2,
    vendor: "Priya Tailoring",
    amount: 300,
    status: "Returned",
    update: "Investment returned with 5% return"
  },
  {
    id: 3,
    vendor: "Kumar Chai Stall",
    amount: 200,
    status: "Ongoing",
    update: "Sales ongoing"
  },
];

export default function InvestmentsScreen({ onNavigate }: { onNavigate: (screen: string, investmentId?: number) => void }) {
  return (
    <div className="flex flex-col h-full">
      <div className="border-b-2 border-black p-4 flex items-center gap-4">
        <button onClick={() => onNavigate('home')} className="text-xl">←</button>
        <div className="text-xl">My Investments</div>
      </div>

      <div className="flex-1 overflow-auto p-4 space-y-3">
        {investments.map((investment) => (
          <div
            key={investment.id}
            className="border-2 border-black p-4 space-y-2 cursor-pointer"
            onClick={() => onNavigate('updates', investment.id)}
          >
            <div>{investment.vendor}</div>
            <div className="text-sm">₹{investment.amount}</div>
            <div className="flex items-center gap-2">
              <div className="text-xs border border-black px-2 py-1">{investment.status}</div>
            </div>
            <div className="text-xs text-gray-600">{investment.update}</div>
          </div>
        ))}
      </div>

      <div className="border-t-2 border-black p-4 flex justify-around">
        <div
          className="flex flex-col items-center gap-1 cursor-pointer"
          onClick={() => onNavigate('home')}
        >
          <div className="w-6 h-6 border-2 border-black"></div>
          <div className="text-xs">Home</div>
        </div>
        <div className="flex flex-col items-center gap-1">
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
