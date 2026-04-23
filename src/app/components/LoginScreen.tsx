export default function LoginScreen({ onNavigate }: { onNavigate: (screen: string) => void }) {
  return (
    <div className="flex flex-col justify-center h-full px-8 gap-8">
      <div className="text-2xl">Login</div>

      <div className="space-y-4">
        <div className="space-y-2">
          <div className="text-sm text-gray-600">Phone number / Email</div>
          <div className="border-2 border-black p-3"></div>
        </div>

        <div className="space-y-2">
          <div className="text-sm text-gray-600">Password / OTP</div>
          <div className="border-2 border-black p-3"></div>
        </div>
      </div>

      <button
        onClick={() => onNavigate('onboarding')}
        className="border-2 border-black py-3"
      >
        Login
      </button>

      <div className="text-xs text-gray-600 text-center">New user? Sign up</div>
    </div>
  );
}
