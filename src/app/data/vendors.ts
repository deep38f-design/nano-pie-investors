export interface Vendor {
  id: string;
  name: string;
  businessType: string;
  image: string;
  fundingGoal: number;
  fundingRaised: number;
  minInvestment: number;
  returns: string;
  description: string;
  useCase: string;
  location: string;
  investors: number;
  tags?: string[];
}

export const VENDORS: Vendor[] = [
  {
    id: "meena",
    name: "Meena's Tiffin",
    businessType: "Food & cafe",
    image: "https://images.unsplash.com/photo-1547517023-7ca0c162f816?auto=format&fit=crop&q=80&w=1000",
    fundingGoal: 100000,
    fundingRaised: 82000,
    minInvestment: 500,
    returns: "12% p.a.",
    description: "Meena needs funds to add a second stove and expand lunch delivery to 3 new streets. She has 200+ loyal daily customers.",
    useCase: "Meena needs funds to add a second stove and expand lunch delivery to 3 new streets. She has 200+ loyal daily customers.",
    location: "Triplicane, Chennai",
    investors: 127,
    tags: ["🤝 Community Backed", "🔥 Filling Fast"]
  },
  {
    id: "sivakumar",
    name: "Sivakumar Textiles",
    businessType: "Retail",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=1000",
    fundingGoal: 200000,
    fundingRaised: 122000,
    minInvestment: 500,
    returns: "14% p.a.",
    description: "Quality textiles for over 20 years. Expanding inventory for festive seasons.",
    useCase: "Expanding inventory for festive seasons.",
    location: "T. Nagar, Chennai",
    investors: 85,
    tags: ["🔥 Trending", "🤝 Community Backed"]
  }
];

