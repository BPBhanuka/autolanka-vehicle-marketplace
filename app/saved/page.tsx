"use client";
import {useEffect,useState} from "react";
import Link from "next/link";
import {VehicleCard} from "@/components/marketplace";
import {vehicles} from "@/lib/data";
import {getSavedVehicleIds,savedVehiclesChangeEvent} from "@/lib/saved";
export default function SavedPage(){
 const [ids,setIds]=useState<string[]>([]);
 useEffect(()=>{const sync=()=>setIds(getSavedVehicleIds());sync();window.addEventListener(savedVehiclesChangeEvent,sync);window.addEventListener("storage",sync);return()=>{window.removeEventListener(savedVehiclesChangeEvent,sync);window.removeEventListener("storage",sync);};},[]);
 const saved=vehicles.filter(v=>ids.includes(v.id));
 return <section className="page-section container"><div className="page-heading"><span className="eyebrow">YOUR SHORTLIST</span><h1>Saved vehicles</h1><p>Keep your favourite vehicles close at hand.</p></div>
 {saved.length?<div className="vehicle-grid">{saved.map(v=><VehicleCard key={v.id} vehicle={v}/>)}</div>:<div className="empty-state"><h3>No saved vehicles yet</h3><p>Select the heart on any vehicle card to add it to your shortlist.</p><Link href="/vehicles" className="btn btn-primary">Browse vehicles</Link></div>}</section>;
}
