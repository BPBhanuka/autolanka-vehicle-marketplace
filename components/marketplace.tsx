"use client";

import Link from "next/link";
import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { ArrowRight, Bike, CarFront, Heart, MapPin, Menu, Search, SlidersHorizontal, Truck, X } from "lucide-react";
import { categories, money, vehicles, type Vehicle } from "@/lib/data";
import { getSavedVehicleIds, saveVehicleIds, savedVehiclesChangeEvent } from "@/lib/saved";

const locations = ["All Sri Lanka", "Colombo", "Gampaha", "Kandy", "Galle", "Negombo", "Matara", "Kurunegala", "Panadura"];
const vehiclePhotos = ["https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=900&q=80&fit=crop","https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=900&q=80&fit=crop","https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=900&q=80&fit=crop","https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=900&q=80&fit=crop","https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=80&fit=crop","https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=900&q=80&fit=crop","https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=900&q=80&fit=crop","https://images.unsplash.com/photo-1502877338535-766e1452684a?w=900&q=80&fit=crop"];

function vehiclePhotoStyle(index: number): CSSProperties {
  const url = vehiclePhotos[index] ?? vehiclePhotos[0];
  return { backgroundImage: `url("${url}")` };
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="site-header"><div className="container nav-wrap">
      <Link href="/" className="brand" onClick={() => setMenuOpen(false)}><span className="brand-mark"><CarFront size={22} /></span><span>Auto<span>Lanka</span><small>FIND YOUR NEXT RIDE</small></span></Link>
      <button className="mobile-menu" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} aria-controls="primary-navigation">{menuOpen ? <X /> : <Menu />}</button>
      <nav id="primary-navigation" className={menuOpen ? "nav-links show" : "nav-links"} aria-label="Primary navigation" onClick={() => setMenuOpen(false)}>
        <Link href="/">Home</Link><Link href="/vehicles">Browse Vehicles</Link><Link href="/vehicles?category=Cars">Cars</Link><Link href="/vehicles?category=Vans">Vans</Link><Link href="/vehicles?category=Motorcycles">Motorcycles</Link><Link href="/about">About Us</Link><Link href="/contact">Contact</Link>
      </nav>
      <div className="nav-actions"><Link href="/saved" className="icon-link" aria-label="Saved vehicles"><Heart size={19} /></Link><Link href="/sell" className="btn btn-primary nav-sell">Sell your vehicle</Link></div>
    </div></header>
  );
}

export function Footer() {
  return <footer className="footer"><div className="container footer-grid">
    <div><Link href="/" className="brand footer-brand"><span className="brand-mark"><CarFront size={22} /></span><span>Auto<span>Lanka</span><small>FIND YOUR NEXT RIDE</small></span></Link><p>Your next journey starts with the right vehicle.</p></div>
    <div><b>Explore</b><Link href="/vehicles">Browse vehicles</Link><Link href="/vehicles?category=Cars">Cars</Link><Link href="/vehicles?category=Vans">Vans</Link><Link href="/vehicles?category=Motorcycles">Motorcycles</Link></div>
    <div><b>For sellers</b><Link href="/sell">Sell your vehicle</Link><Link href="/saved">Saved vehicles</Link><Link href="/contact">Contact us</Link></div>
    <div><b>AutoLanka</b><Link href="/about">About us</Link><Link href="/contact">Help & support</Link><span>Sri Lanka</span></div>
  </div><div className="container footer-bottom">© 2026 AutoLanka. All rights reserved.</div></footer>;
}

export function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const [saved, setSaved] = useState(false);
  useEffect(() => {
    const sync = () => setSaved(getSavedVehicleIds().includes(vehicle.id));
    sync();
    window.addEventListener(savedVehiclesChangeEvent, sync);
    window.addEventListener("storage", sync);
    return () => { window.removeEventListener(savedVehiclesChangeEvent, sync); window.removeEventListener("storage", sync); };
  }, [vehicle.id]);
  const toggleSaved = () => {
    const ids = getSavedVehicleIds();
    const next = ids.includes(vehicle.id) ? ids.filter((id) => id !== vehicle.id) : [...ids, vehicle.id];
    if (saveVehicleIds(next)) setSaved(next.includes(vehicle.id));
  };
  return <article className="vehicle-card">
    <Link href={`/vehicles/${vehicle.id}`} className="vehicle-image" aria-label={`View ${vehicle.title} details`}>
      <span className="vehicle-photo" role="img" aria-label={vehicle.imageAlt} style={vehiclePhotoStyle(vehicle.imageIndex)} />
      <span className="image-badge">{vehicle.featured ? "Featured" : vehicle.category}</span>
    </Link>
    <button className={saved ? "save-btn saved" : "save-btn"} type="button" onClick={toggleSaved} aria-label={saved ? `Remove ${vehicle.title} from saved vehicles` : `Save ${vehicle.title}`} aria-pressed={saved}><Heart size={18} fill={saved ? "currentColor" : "none"} /></button>
    <div className="vehicle-info"><Link href={`/vehicles/${vehicle.id}`} className="vehicle-title">{vehicle.title}</Link>
      <div className="vehicle-meta">{vehicle.year} <span>•</span> {vehicle.mileage.toLocaleString("en-LK")} km <span>•</span> {vehicle.fuel}</div>
      <div className="vehicle-price">{money(vehicle.price)}</div>
      <div className="vehicle-bottom"><span><MapPin size={13} />{vehicle.location}</span><Link href={`/vehicles/${vehicle.id}`}>View details <ArrowRight size={13} /></Link></div>
    </div>
  </article>;
}

export function SearchPanel() {
  const [category,setCategory]=useState("All vehicles");
  const [location,setLocation]=useState("All Sri Lanka");
  return <form className="search-panel" action="/vehicles" method="get">
    <label>Category<select name="category" value={category} onChange={(e)=>setCategory(e.target.value)}>{categories.map((item)=><option key={item}>{item}</option>)}</select></label>
    <label>Make & model<input name="q" placeholder="Any make or model" /></label>
    <label>Location<select name="location" value={location} onChange={(e)=>setLocation(e.target.value)}>{locations.map((item)=><option key={item}>{item}</option>)}</select></label>
    <label>Min. price (LKR)<input name="min" type="number" min="0" step="1" placeholder="Rs. 0" /></label>
    <label>Max. price (LKR)<input name="max" type="number" min="0" step="1" placeholder="No limit" /></label>
    <button className="btn btn-primary" type="submit"><Search size={15}/> Search vehicles</button>
  </form>;
}

type BrowseClientProps={initialCategory?:string;initialQuery?:string;initialLocation?:string;initialMinPrice?:string;initialMaxPrice?:string};
export function BrowseClient({initialCategory="All vehicles",initialQuery="",initialLocation="All Sri Lanka",initialMinPrice="",initialMaxPrice=""}:BrowseClientProps) {
  const [category,setCategory]=useState(categories.includes(initialCategory)?initialCategory:"All vehicles");
  const [query,setQuery]=useState(initialQuery); const [location,setLocation]=useState(locations.includes(initialLocation)?initialLocation:"All Sri Lanka");
  const [sort,setSort]=useState("Recommended"); const [min,setMin]=useState(initialMinPrice); const [max,setMax]=useState(initialMaxPrice); const [filtersOpen,setFiltersOpen]=useState(false);
  const filteredVehicles=useMemo(()=>{
    let result=vehicles.filter((v)=>{
      const searchable=[v.title,v.make,v.model,v.category,v.fuel,v.location].join(" ").toLowerCase();
      const minValue=min.trim()===""?null:Number(min), maxValue=max.trim()===""?null:Number(max);
      return searchable.includes(query.trim().toLowerCase()) &&
        (category==="All vehicles"||v.category===category) &&
        (location==="All Sri Lanka"||v.location.toLowerCase().includes(location.toLowerCase())) &&
        (minValue===null||(Number.isFinite(minValue)&&v.price>=minValue)) &&
        (maxValue===null||(Number.isFinite(maxValue)&&v.price<=maxValue));
    });
    if(sort==="Price: Low to high") result=[...result].sort((a,b)=>a.price-b.price);
    if(sort==="Price: High to low") result=[...result].sort((a,b)=>b.price-a.price);
    if(sort==="Newest first") result=[...result].sort((a,b)=>b.year-a.year);
    return result;
  },[category,query,location,min,max,sort]);
  const clear=()=>{setCategory("All vehicles");setQuery("");setLocation("All Sri Lanka");setMin("");setMax("");setSort("Recommended");};
  return <>
    <div className="browse-toolbar"><div className="search-input"><Search size={17}/><input aria-label="Search make, model or keyword" value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search make, model or keyword"/></div>
      <button className="btn btn-outline filter-toggle" type="button" onClick={()=>setFiltersOpen((v)=>!v)} aria-expanded={filtersOpen}><SlidersHorizontal size={16}/> Filters</button>
      <select className="sort-select" aria-label="Sort vehicles" value={sort} onChange={(e)=>setSort(e.target.value)}><option>Recommended</option><option>Price: Low to high</option><option>Price: High to low</option><option>Newest first</option></select>
    </div>
    {filtersOpen&&<div className="filter-panel">
      <label>Vehicle type<select value={category} onChange={(e)=>setCategory(e.target.value)}>{categories.map((v)=><option key={v}>{v}</option>)}</select></label>
      <label>Location<select value={location} onChange={(e)=>setLocation(e.target.value)}>{locations.map((v)=><option key={v}>{v}</option>)}</select></label>
      <label>Min price (LKR)<input type="number" min="0" value={min} onChange={(e)=>setMin(e.target.value)} placeholder="0"/></label>
      <label>Max price (LKR)<input type="number" min="0" value={max} onChange={(e)=>setMax(e.target.value)} placeholder="No limit"/></label>
      <button className="text-button" type="button" onClick={clear}>Clear filters</button>
    </div>}
    <div className="results-line"><b>{filteredVehicles.length} vehicles found</b><span>Browse by make, category, location and budget</span></div>
    {filteredVehicles.length>0?<div className="vehicle-grid">{filteredVehicles.map((v)=><VehicleCard key={v.id} vehicle={v}/>)}</div>:<div className="empty-state"><CarFront size={36}/><h3>No vehicles found</h3><p>Try another keyword, category, location or price range.</p><button className="btn btn-outline" type="button" onClick={clear}>Reset search</button></div>}
  </>;
}

export function CategoryTiles() {
  const items=[{name:"Cars",icon:CarFront,count:"Sedans & hatchbacks"},{name:"SUVs",icon:Truck,count:"Family & city SUVs"},{name:"Vans",icon:Truck,count:"Passenger & cargo"},{name:"Motorcycles",icon:Bike,count:"Scooters & bikes"}];
  return <div className="category-grid">{items.map(({name,icon:Icon,count})=><Link href={`/vehicles?category=${encodeURIComponent(name)}`} key={name} className="category-tile"><span className="category-icon"><Icon size={24}/></span><span><b>{name}</b><small>{count}</small></span><ArrowRight size={16}/></Link>)}</div>;
}
