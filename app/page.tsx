import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CategoryTiles, SearchPanel, VehicleCard } from "@/components/marketplace";
import { vehicles } from "@/lib/data";

export default function Home(){return <>
  <section className="hero-wrap"><div className="container hero">
    <Image src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1800&q=90&fit=crop" alt="Sports car on a scenic road" fill priority sizes="100vw"/>
    <div className="hero-shade"/><div className="hero-content"><span className="eyebrow light">SRI LANKA'S VEHICLE MARKETPLACE</span><h1>Find your next<br/>ride with confidence.</h1><p>Explore cars, vans and motorcycles from sellers across Sri Lanka.</p><div className="hero-buttons"><Link href="/vehicles" className="btn btn-primary">Browse vehicles <ArrowRight size={16}/></Link><Link href="/sell" className="btn btn-white">Sell your vehicle</Link></div></div><SearchPanel/>
  </div></section>
  <section className="section container"><div className="section-heading"><div><span className="eyebrow">BROWSE BY TYPE</span><h2>Find the right vehicle</h2><p>Explore popular vehicle categories.</p></div><Link className="view-all" href="/vehicles">View all vehicles <ArrowRight size={15}/></Link></div><CategoryTiles/></section>
  <section className="section container"><div className="section-heading"><div><span className="eyebrow">HANDPICKED FOR YOU</span><h2>Featured vehicles</h2><p>Explore a selection of vehicles worth a closer look.</p></div><Link className="view-all" href="/vehicles">Browse all vehicles <ArrowRight size={15}/></Link></div><div className="vehicle-grid">{vehicles.filter(v=>v.featured).map(v=><VehicleCard key={v.id} vehicle={v}/>)}</div></section>
  <section className="container seller-banner"><div><span className="eyebrow light">READY FOR A NEW OWNER?</span><h2>Your next chapter starts<br/>with a great listing.</h2><p>Create a vehicle listing and connect with interested buyers.</p></div><Link href="/sell" className="btn btn-primary">List your vehicle <ArrowRight size={16}/></Link><small>Simple · Clear · Seller-focused</small></section>
  <section className="section container"><div className="section-heading"><div><span className="eyebrow">A BETTER WAY TO BUY</span><h2>Marketplace made simple</h2><p>Everything you need to find and compare vehicles.</p></div></div><div className="benefit-grid">{[{n:"01",t:"Wide selection",d:"Cars, vans and bikes in one place."},{n:"02",t:"Smart discovery",d:"Filter vehicles by budget, year and location."},{n:"03",t:"Compare options",d:"Review prices and key specifications."},{n:"04",t:"Direct contact",d:"Find useful details to help plan your next conversation."}].map(x=><div className="benefit-card" key={x.n}><span>{x.n}</span><b>{x.t}</b><p>{x.d}</p></div>)}</div></section>
</>;}
