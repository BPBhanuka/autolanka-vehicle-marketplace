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

// Vehicle photos are illustrative AI-generated sample images, not photographs of verified listings.
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
    imageAlt: "Illustrative white compact hatchback for the Toyota Aqua S sample listing",
    featured: true,
    condition: "Used",
    engine: "1,500 cc",
    description: "Sample listing description for a compact hybrid hatchback. Vehicle condition, service history and specifications have not been independently verified.",
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
    imageAlt: "Illustrative white compact SUV for the Toyota Raize Z sample listing",
    featured: true,
    condition: "Used",
    engine: "1,000 cc",
    description: "Sample listing description for a compact SUV. Vehicle condition, service history and specifications have not been independently verified.",
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
    imageAlt: "Illustrative white automatic scooter for the Honda Dio sample listing",
    featured: true,
    condition: "Used",
    engine: "110 cc",
    description: "Sample listing description for an automatic scooter. Vehicle condition, service history and specifications have not been independently verified.",
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
    imageAlt: "Illustrative clean white compact passenger van for the Suzuki Every sample listing",
    featured: true,
    condition: "Used",
    engine: "660 cc",
    description: "Sample listing description for a compact passenger van. Vehicle condition, service history and specifications have not been independently verified.",
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
    imageAlt: "Illustrative white compact hatchback for the Honda Fit GP5 sample listing",
    condition: "Used",
    engine: "1,500 cc",
    description: "Sample listing description for a compact hybrid hatchback. Vehicle condition, service history and specifications have not been independently verified.",
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
    imageAlt: "Illustrative black commuter motorcycle for the Yamaha FZ sample listing",
    condition: "Used",
    engine: "150 cc",
    description: "Sample listing description for a commuter motorcycle. Vehicle condition, service history and specifications have not been independently verified.",
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
    imageAlt: "Illustrative white passenger van for the Nissan Caravan sample listing",
    condition: "Used",
    engine: "2,500 cc",
    description: "Sample listing description for a passenger van. Vehicle condition, service history and specifications have not been independently verified.",
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
    imageAlt: "Illustrative white tall compact hatchback for the Suzuki Wagon R sample listing",
    condition: "Used",
    engine: "660 cc",
    description: "Sample listing description for a compact city car. Vehicle condition, service history and specifications have not been independently verified.",
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

const spritePositions = [
  "0% 0%",
  "100% 0%",
  "0% 33.3333%",
  "100% 33.3333%",
  "0% 66.6667%",
  "100% 66.6667%",
  "0% 100%",
  "100% 100%"
];

export function getVehicleImagePosition(index: number): string {
  return spritePositions[index] ?? "0% 0%";
}

export const money = (amount: number) =>
  `Rs. ${new Intl.NumberFormat("en-LK", { maximumFractionDigits: 0 }).format(amount)}`;
