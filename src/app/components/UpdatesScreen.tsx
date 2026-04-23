const updates = [
  { id: 1, title: "Money received", date: "Apr 5, 2026" },
  { id: 2, title: "Inventory purchased", date: "Apr 6, 2026" },
  { id: 3, title: "Business update", date: "Apr 8, 2026", detail: "Festival sales going strong. Stock moving fast." },
];

export default function UpdatesScreen({ onNavigate }: { onNavigate: (screen: string) => void }) {
  return (
    <div className="flex flex-col h-full">
      <div className="border-b-2 border-black p-4 flex items-center gap-4">
        <button onClick={() => onNavigate('investments')} className="text-xl">←</button>
        <div className="text-xl">Updates</div>
      </div>

      <div className="flex-1 overflow-auto p-6">
        <div className="space-y-6">
          {updates.map((update, index) => (
            <div key={update.id} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 border-2 border-black bg-white" />
                {index < updates.length - 1 && (
                  <div className="w-0.5 h-full bg-gray-400 mt-2" />
                )}
              </div>
              <div className="flex-1 pb-6">
                <div className="text-sm">{update.title}</div>
                <div className="text-xs text-gray-600 mt-1">{update.date}</div>
                {update.detail && (
                  <div className="text-xs mt-2">{update.detail}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
