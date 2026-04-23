import React from 'react';

interface VendorCardProps {
  id?: string;
  name: string;
  category: string;
  location: string;
  useCase: string;
  fundingRaised: number;
  fundingGoal: number;
  returns: string;
  image: string;
  investorsCount: number;
  minInvestment: number;
  tags?: string[];
  featured?: boolean;
  onClick?: () => void;
}

export const VendorCard: React.FC<VendorCardProps> = ({
  name,
  category,
  location,
  useCase,
  image,
  fundingRaised,
  fundingGoal,
  minInvestment,
  investorsCount,
  tags = [],
  featured = false,
  onClick,
}) => {
  const progress = Math.min((fundingRaised / fundingGoal) * 100, 100);

  const raisedLabel =
    fundingRaised >= 1000
      ? `₹${(fundingRaised / 1000).toFixed(0)}K`
      : `₹${fundingRaised.toLocaleString()}`;

  const goalLabel =
    fundingGoal >= 1000
      ? `₹${(fundingGoal / 1000).toFixed(0)}K`
      : `₹${fundingGoal.toLocaleString()}`;

  if (featured) {
    return (
      <div
        onClick={onClick}
        className="bg-[#FFF1EB] rounded-[24px] p-6 mb-6 cursor-pointer active:scale-[0.98] transition-all"
      >
        <p className="text-[11px] font-bold text-[#FF5B04] uppercase tracking-widest mb-2">
          Featured
        </p>
        <h3 className="text-[20px] font-bold text-[#16232B] mb-1">
          {name} — {location.split(',')[0]}
        </h3>
        <p className="text-[14px] font-medium text-[#7A2C0D] opacity-80">
          {Math.floor(progress)}% funded · 14 days left · ₹{minInvestment} min
        </p>
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-[24px] overflow-hidden border border-gray-100 mb-5 cursor-pointer active:scale-[0.98] transition-all shadow-sm"
    >
      {/* Hero Image */}
      <div className="w-full h-40 relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Card Body */}
      <div className="p-5">
        {/* Vendor Name */}
        <h3 className="text-[18px] font-bold text-[#16232B] leading-tight mb-1">
          {name}
        </h3>

        {/* Category · Location */}
        <p className="text-[14px] font-medium text-gray-400 mb-3">
          {category} · {location.split(',')[0]}
        </p>

        {/* Use Case description */}
        <p className="text-[14px] font-medium text-gray-500 leading-relaxed mb-4">
          {useCase}
        </p>

        {/* Progress Bar */}
        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mb-2">
          <div
            className="h-full bg-[#FF5B04] rounded-full transition-all duration-700"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Funding Stats Row */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-[14px] font-bold text-[#16232B]">
            {raisedLabel}{' '}
            <span className="font-medium text-gray-400">/ {goalLabel}</span>
          </span>
          <span className="text-[14px] font-bold text-[#FF5B04]">
            {Math.floor(progress)}%
          </span>
        </div>

        {/* Investors count */}
        <p className="text-[13px] font-medium text-gray-400 mb-4">
          {investorsCount} investors joined
        </p>

        {/* Tags Row */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1.5 bg-[#FFF1EB] rounded-full text-[12px] font-bold text-[#FF5B04]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* CTA Button */}
        <button className="w-full py-3.5 bg-[#16232B] text-white rounded-2xl text-[15px] font-bold active:scale-[0.97] transition-all">
          Back this Vendor
        </button>

        {/* Min investment hint */}
        <p className="text-center text-[12px] font-medium text-gray-400 mt-2">
          Start from ₹{minInvestment}
        </p>
      </div>
    </div>
  );
};
