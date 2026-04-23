export default function ConfirmationScreen({
  amount,
  onNavigate
}: {
  amount: number;
  onNavigate: (screen: string) => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 gap-8">
      <div className="text-center space-y-6">
        <div className="text-2xl">Investment Successful</div>

        <div className="border-2 border-black p-6 space-y-3">
          <div className="space-y-1">
            <div className="text-xs text-gray-600">Vendor</div>
            <div>Ramesh Groceries</div>
          </div>
          <div className="space-y-1">
            <div className="text-xs text-gray-600">Amount invested</div>
            <div>₹{amount}</div>
          </div>
        </div>
      </div>

      <button
        onClick={() => onNavigate('home')}
        className="border-2 border-black px-12 py-3"
      >
        Back to Home
      </button>
    </div>
  );
}
