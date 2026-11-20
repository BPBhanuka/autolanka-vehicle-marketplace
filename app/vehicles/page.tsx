import { BrowseClient } from "@/components/marketplace";
type Params={category?:string;q?:string;location?:string;min?:string;max?:string};
export default async function VehiclesPage({searchParams}:{searchParams:Promise<Params>}){
 const p=await searchParams;
 return <section className="page-section container"><div className="page-heading"><span className="eyebrow">THE AUTOLANKA MARKETPLACE</span><h1>Explore vehicles</h1><p>Filter illustrative sample vehicles from this frontend concept.</p></div>
 <BrowseClient initialCategory={p.category||"All vehicles"} initialQuery={p.q||""} initialLocation={p.location||"All Sri Lanka"} initialMinPrice={p.min||""} initialMaxPrice={p.max||""}/></section>;
}
