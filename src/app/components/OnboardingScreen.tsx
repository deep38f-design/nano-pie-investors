export default function OnboardingScreen({ onNavigate }: { onNavigate: (screen: string) => void }) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 gap-12">
      <div className="text-center text-sm">Invest in local businesses</div>

      <button
        onClick={() => onNavigate('home')}
        className="border-2 border-black px-16 py-3"
      >
        Start
      </button>
    </div>
  );
}
