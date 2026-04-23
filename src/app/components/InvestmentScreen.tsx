import { useState } from "react";

export default function InvestmentScreen({
  vendorId,
  onNavigate
}: {
  vendorId: number;
  onNavigate: (screen: string, amount?: number) => void;
}) {
  const [amount, setAmount] = useState("");

  return (
    <div className="flex flex-col h-full">
      <div className="border-b-2 border-black p-4 flex items-center gap-4">
        <button onClick={() => onNavigate('vendor', vendorId)} className="text-xl">←</button>
        <div className="text-xl">Invest</div>
      </div>

      <div className="flex-1 p-6 space-y-8">
        <div className="space-y-2">
          <div className="text-sm text-gray-600">Enter amount</div>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border-2 border-black p-3"
            placeholder="Enter amount"
          />
          <div className="text-xs text-gray-600">₹100 – ₹1000</div>
        </div>

        <div className="border-2 border-gray-400 p-4">
          <div className="text-sm">Pay via UPI</div>
        </div>

        <button
          onClick={() => onNavigate('confirmation', parseInt(amount) || 0)}
          className="w-full border-2 border-black py-3"
          disabled={!amount}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
