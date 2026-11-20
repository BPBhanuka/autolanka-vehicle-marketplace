export type Vehicle = {
  id: string;
  title: string;
  category: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuel: string;
  transmission: string;
  location: string;
  imageIndex: number;
  imageAlt: string;
  featured?: boolean;
  condition: string;
  engine: string;
  description: string;
  seller: string;
};

// Illustrative images and vehicle details are used for this frontend portfolio concept.
export const vehicles: Vehicle[] = [
  {
    id: "toyota-aqua-2017",
    title: "Toyota Aqua S",
    category: "Cars",
    make: "Toyota",
    model: "Aqua S",
    year: 2017,
    price: 8950000,
    mileage: 78000,
    fuel: "Hybrid",
    transmission: "Automatic",
    location: "Colombo 05",
    imageIndex: 0,
    imageAlt: "Illustrative white compact hatchback for the Toyota Aqua S listing",
    featured: true,
    condition: "Used",
    engine: "1,500 cc",
    description: "A compact hybrid hatchback with a practical cabin, easy city handling and an efficient everyday driving style. Its small footprint makes it a convenient option for navigating busy streets and fitting into tighter parking spaces.",
    seller: "Demo seller"
  },
  {
    id: "toyota-raize-2022",
    title: "Toyota Raize Z",
    category: "SUVs",
    make: "Toyota",
    model: "Raize Z",
    year: 2022,
    price: 15900000,
    mileage: 24500,
    fuel: "Petrol",
    transmission: "Automatic",
    location: "Gampaha",
    imageIndex: 1,
    imageAlt: "Illustrative white compact SUV for the Toyota Raize Z listing",
    featured: true,
    condition: "Used",
    engine: "1,000 cc",
    description: "A compact SUV with a raised driving position, versatile cabin and city-friendly dimensions. The practical layout makes it suitable for everyday journeys as well as relaxed weekend travel.",
    seller: "Demo seller"
  },
  {
    id: "honda-dio-2022",
    title: "Honda Dio",
    category: "Motorcycles",
    make: "Honda",
    model: "Dio",
    year: 2022,
    price: 585000,
    mileage: 8200,
    fuel: "Petrol",
    transmission: "Automatic",
    location: "Matara",
    imageIndex: 2,
    imageAlt: "Illustrative white automatic scooter for the Honda Dio listing",
    featured: true,
    condition: "Used",
    engine: "110 cc",
    description: "A lightweight automatic scooter designed for simple day-to-day commuting. Its step-through design and easy-to-manage size make short town journeys convenient.",
    seller: "Demo seller"
  },
  {
    id: "suzuki-every-2020",
    title: "Suzuki Every",
    category: "Vans",
    make: "Suzuki",
    model: "Every",
    year: 2020,
    price: 7250000,
    mileage: 49000,
    fuel: "Petrol",
    transmission: "Automatic",
    location: "Kandy",
    imageIndex: 3,
    imageAlt: "Illustrative clean white compact passenger van for the Suzuki Every listing",
    featured: true,
    condition: "Used",
    engine: "660 cc",
    description: "A compact passenger van with a tall cabin, sliding side doors and flexible interior space. Its practical shape is useful for family travel, town errands and carrying everyday cargo.",
    seller: "Demo seller"
  },
  {
    id: "honda-fit-2018",
    title: "Honda Fit GP5",
    category: "Cars",
    make: "Honda",
    model: "Fit GP5",
    year: 2018,
    price: 9650000,
    mileage: 62000,
    fuel: "Hybrid",
    transmission: "Automatic",
    location: "Negombo",
    imageIndex: 4,
    imageAlt: "Illustrative white compact hatchback for the Honda Fit GP5 listing",
    condition: "Used",
    engine: "1,500 cc",
    description: "A versatile hatchback with a flexible cabin layout and compact exterior dimensions. The hybrid powertrain makes it an appealing option for regular city and suburban driving.",
    seller: "Demo seller"
  },
  {
    id: "yamaha-fz-2021",
    title: "Yamaha FZ",
    category: "Motorcycles",
    make: "Yamaha",
    model: "FZ",
    year: 2021,
    price: 790000,
    mileage: 19000,
    fuel: "Petrol",
    transmission: "Manual",
    location: "Kurunegala",
    imageIndex: 5,
    imageAlt: "Illustrative black commuter motorcycle for the Yamaha FZ listing",
    condition: "Used",
    engine: "150 cc",
    description: "A street-style commuter motorcycle with an upright riding position and a purposeful design. It is suited to everyday rides around town and regular longer commutes.",
    seller: "Demo seller"
  },
  {
    id: "nissan-van-2019",
    title: "Nissan Caravan",
    category: "Vans",
    make: "Nissan",
    model: "Caravan",
    year: 2019,
    price: 12800000,
    mileage: 86000,
    fuel: "Diesel",
    transmission: "Automatic",
    location: "Kurunegala",
    imageIndex: 6,
    imageAlt: "Illustrative white passenger van for the Nissan Caravan listing",
    condition: "Used",
    engine: "2,500 cc",
    description: "A spacious passenger van with generous cabin room and a practical layout for group journeys. Its larger body style also offers flexibility for travel and business-related transport.",
    seller: "Demo seller"
  },
  {
    id: "suzuki-wagon-r-2021",
    title: "Suzuki Wagon R",
    category: "Cars",
    make: "Suzuki",
    model: "Wagon R",
    year: 2021,
    price: 6850000,
    mileage: 39000,
    fuel: "Hybrid",
    transmission: "Automatic",
    location: "Panadura",
    imageIndex: 7,
    imageAlt: "Illustrative white tall compact hatchback for the Suzuki Wagon R listing",
    condition: "Used",
    engine: "660 cc",
    description: "A tall, compact hatchback with a roomy feel inside and a small footprint outside. The upright design makes it a practical choice for city driving and everyday errands.",
    seller: "Demo seller"
  }
];

export const categories = [
  "All vehicles",
  "Cars",
  "SUVs",
  "Vans",
  "Motorcycles",
  "Three Wheelers",
  "Trucks"
];

export const money = (amount: number) =>
  `Rs. ${new Intl.NumberFormat("en-LK", { maximumFractionDigits: 0 }).format(amount)}`;
