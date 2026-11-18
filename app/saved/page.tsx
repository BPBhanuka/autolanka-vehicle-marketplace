"use client";
import { useEffect, useState } from "react";
import { VehicleCard } from "@/components/marketplace";
import { vehicles } from "@/lib/data";
export default function SavedPage(){const [ids,setIds]=useState<string[]>([]);useEffect(()=>{const read=()=>setIds(JSON.parse(localStorage.getItem("autolanka-saved")||"[]"));read();window.addEventListener("saved-change",read);return()=>window.removeEventListener("saved-change",read)},[]);const saved=vehicles.filter(v=>ids.includes(v.id));return <section className="page-section container"><div className="page-heading"><span className="eyebrow">YOUR SHORTLIST</span><h1>Saved vehicles</h1><p>Keep the vehicles you are interested in close at hand.</p></div>{saved.length?<div className="vehicle-grid">{saved.map(v=><VehicleCard key={v.id} vehicle={v}/>)}</div>:<div className="empty-state"><h3>No saved vehicles yet</h3><p>Tap the heart on any vehicle card to save it here.</p></div>}</section>}
