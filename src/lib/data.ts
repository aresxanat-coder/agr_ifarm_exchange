export type Category =
  | "crop-residue"
  | "animal-waste"
  | "forestry"
  | "food-waste"
  | "biochar"
  | "compost";

export interface Product {
  id: string;
  title: string;
  category: Category;
  pricePerTon: number;
  unit: string;
  description: string;
  location: string;
  availableTons: number;
  imageUrl: string;
  sellerName: string;
  sellerRating: number;
  createdAt: string;
  tags: string[];
}

export interface CategoryInfo {
  id: Category;
  label: string;
  icon: string;
  description: string;
  color: string;
  imageUrl: string;
}

export const categories: CategoryInfo[] = [
  {
    id: "crop-residue",
    label: "Crop Residue",
    icon: "Wheat",
    description: "Straw, stalks, and husks from grain harvests",
    color: "#eab308",
    imageUrl: "https://images.pexels.com/photos/38891102/pexels-photo-38891102.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
  {
    id: "animal-waste",
    label: "Animal Waste",
    icon: "Rabbit",
    description: "Manure and byproducts from livestock operations",
    color: "#8b5cf6",
    imageUrl: "https://images.pexels.com/photos/6130382/pexels-photo-6130382.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
  {
    id: "forestry",
    label: "Forestry Biomass",
    icon: "TreePine",
    description: "Wood chips, sawdust, and forest thinnings",
    color: "#16a34a",
    imageUrl: "https://images.pexels.com/photos/15301660/pexels-photo-15301660.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
  {
    id: "food-waste",
    label: "Food Waste",
    icon: "Apple",
    description: "Organic byproducts from food processing",
    color: "#ef4444",
    imageUrl: "https://images.pexels.com/photos/13553998/pexels-photo-13553998.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
  {
    id: "biochar",
    label: "Biochar",
    icon: "Flame",
    description: "Carbon-rich charcoal for soil enhancement",
    color: "#1e293b",
    imageUrl: "https://images.pexels.com/photos/6474843/pexels-photo-6474843.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
  {
    id: "compost",
    label: "Compost",
    icon: "Sprout",
    description: "Decomposed organic matter for soil fertility",
    color: "#84cc16",
    imageUrl: "https://images.pexels.com/photos/26150409/pexels-photo-26150409.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
];

export const products: Product[] = [
  {
    id: "p1",
    title: "Premium Wheat Straw Bales",
    category: "crop-residue",
    pricePerTon: 85,
    unit: "ton",
    description: "High-quality wheat straw bales, ideal for livestock bedding, mushroom cultivation, and biochar production. Clean, dry, and stored under cover. Sourced from a 200-acre farm using regenerative practices.",
    location: "Spokane Valley, WA",
    availableTons: 120,
    imageUrl: "https://images.pexels.com/photos/38891102/pexels-photo-38891102.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    sellerName: "Green Valley Farms",
    sellerRating: 4.8,
    createdAt: "2026-10-20T10:00:00Z",
    tags: ["organic", "regenerative", "bedding", "biochar-feedstock"],
  },
  {
    id: "p2",
    title: "Corn Stalk Biomass",
    category: "crop-residue",
    pricePerTon: 45,
    unit: "ton",
    description: "Post-harvest corn stalks suitable for composting, anaerobic digestion, and biofuel production. Chopped and ready for transport. Approximately 15% moisture content.",
    location: "Elgin, MN",
    availableTons: 300,
    imageUrl: "https://images.pexels.com/photos/13553998/pexels-photo-13553998.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    sellerName: "Midwest Bio Partners",
    sellerRating: 4.6,
    createdAt: "2026-10-18T08:30:00Z",
    tags: ["biofuel", "digestion", "compost-feedstock"],
  },
  {
    id: "p3",
    title: "Aged Dairy Manure",
    category: "animal-waste",
    pricePerTon: 35,
    unit: "ton",
    description: "Well-composted dairy manure with excellent NPK profile (1.5-1.0-1.5). Aged 6 months, weed-seed-free. Perfect for soil amendment and organic farming operations.",
    location: "Tulare County, CA",
    availableTons: 500,
    imageUrl: "https://images.pexels.com/photos/6130382/pexels-photo-6130382.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    sellerName: "Sunrise Dairy Co.",
    sellerRating: 4.9,
    createdAt: "2026-10-15T14:00:00Z",
    tags: ["composted", "npk", "soil-amendment", "organic"],
  },
  {
    id: "p4",
    title: "Hardwood Wood Chips",
    category: "forestry",
    pricePerTon: 65,
    unit: "ton",
    description: "Premium hardwood chips from sustainable forest thinning operations. Mixed oak and maple. Consistent 1-inch chip size, ideal for mulch, biochar production, and biomass energy.",
    location: "Burlington, VT",
    availableTons: 200,
    imageUrl: "https://images.pexels.com/photos/15301660/pexels-photo-15301660.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    sellerName: "Green Mountain Forestry",
    sellerRating: 4.7,
    createdAt: "2026-10-22T09:00:00Z",
    tags: ["hardwood", "mulch", "biochar-feedstock", "sustainable"],
  },
  {
    id: "p5",
    title: "Rice Husk Bulk Supply",
    category: "crop-residue",
    pricePerTon: 28,
    unit: "ton",
    description: "Clean rice husks available in bulk. High silica content makes them excellent for biochar production, composting, and as a biofuel feedstock. Consistent supply year-round.",
    location: "Sacramento Valley, CA",
    availableTons: 800,
    imageUrl: "https://images.pexels.com/photos/38389252/pexels-photo-38389252.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    sellerName: "Golden Grain Rice",
    sellerRating: 4.5,
    createdAt: "2026-10-25T11:00:00Z",
    tags: ["silica", "biofuel", "biochar-feedstock", "year-round"],
  },
  {
    id: "p6",
    title: "Certified Biochar — Fine Grade",
    category: "biochar",
    pricePerTon: 320,
    unit: "ton",
    description: "IBI-certified biochar produced from hardwood at 550°C. Fine grade (<2mm), high surface area (>400 m²/g). Ideal for soil carbon sequestration, water retention, and microbial habitat enhancement.",
    location: "Portland, OR",
    availableTons: 50,
    imageUrl: "https://images.pexels.com/photos/6474843/pexels-photo-6474843.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    sellerName: "Pacific Biochar Works",
    sellerRating: 5.0,
    createdAt: "2026-10-28T10:00:00Z",
    tags: ["ibi-certified", "carbon-sequestration", "soil-health", "premium"],
  },
  {
    id: "p7",
    title: "Food Processing Organic Waste",
    category: "food-waste",
    pricePerTon: 18,
    unit: "ton",
    description: "Mixed organic waste from a fruit processing facility. Primarily apple pomace and citrus peels. High sugar content — excellent for anaerobic digestion and composting operations.",
    location: "Wenatchee, WA",
    availableTons: 150,
    imageUrl: "https://images.pexels.com/photos/13553998/pexels-photo-13553998.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    sellerName: "Orchard Fresh Processing",
    sellerRating: 4.4,
    createdAt: "2026-10-26T13:00:00Z",
    tags: ["high-sugar", "digestion", "compost-feedstock"],
  },
  {
    id: "p8",
    title: "Premium Vermicompost",
    category: "compost",
    pricePerTon: 180,
    unit: "ton",
    description: "Worm-castings vermicompost with rich microbial diversity. pH 7.2, excellent water retention. Screened to 1/4 inch. Boosts plant growth, disease resistance, and soil structure.",
    location: "Austin, TX",
    availableTons: 40,
    imageUrl: "https://images.pexels.com/photos/26150409/pexels-photo-26150409.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    sellerName: "Lone Star Worm Farm",
    sellerRating: 4.9,
    createdAt: "2026-10-27T15:00:00Z",
    tags: ["worm-castings", "microbial", "soil-health", "premium"],
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: Category): Product[] {
  return products.filter((p) => p.category === category);
}
