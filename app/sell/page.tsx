"use client";
import Image from "next/image";
import {useEffect,useRef,useState,type ChangeEvent,type FormEvent} from "react";
import {Camera,CheckCircle2,ChevronRight,ImagePlus} from "lucide-react";
import {money} from "@/lib/data";
const MAX_PHOTOS=8,MAX_SIZE=5*1024*1024,CURRENT_YEAR=new Date().getFullYear();
export default function SellPage(){
 const [submitted,setSubmitted]=useState(false);const [photos,setPhotos]=useState<File[]>([]);const [urls,setUrls]=useState<string[]>([]);const [error,setError]=useState("");const [preview,setPreview]=useState<{title:string;year:string;price:string;district:string;seller:string}|null>(null);const urlsRef=useRef<string[]>([]);
 useEffect(()=>()=>urlsRef.current.forEach((url)=>URL.revokeObjectURL(url)),[]);
 const changePhotos=(e:ChangeEvent<HTMLInputElement>)=>{
  const files=Array.from(e.currentTarget.files??[]);
  if(files.length>MAX_PHOTOS){setError(`Choose up to ${MAX_PHOTOS} photos.`);e.currentTarget.value="";return;}
  if(files.some(f=>!["image/jpeg","image/png","image/webp"].includes(f.type))){setError("Choose JPG, PNG or WEBP images only.");e.currentTarget.value="";return;}
  if(files.some(f=>f.size>MAX_SIZE)){setError("Each image must be 5 MB or smaller.");e.currentTarget.value="";return;}
  urlsRef.current.forEach((url)=>URL.revokeObjectURL(url));const next=files.map((file)=>URL.createObjectURL(file));urlsRef.current=next;setPhotos(files);setUrls(next);setError("");
 };
 const submit=(e:FormEvent<HTMLFormElement>)=>{e.preventDefault();const d=new FormData(e.currentTarget);const price=Number(d.get("price"));if(!Number.isFinite(price)||price<=0)return;setPreview({title:`${d.get("make")} ${d.get("model")}`,year:String(d.get("year")),price:money(price),district:String(d.get("district")),seller:String(d.get("sellerName"))});setSubmitted(true);};
 return <section className="page-section container narrow"><div className="page-heading"><span className="eyebrow">FOR PRIVATE & BUSINESS SELLERS</span><h1>Sell your vehicle</h1><p>Create a detailed vehicle listing and prepare it for buyers.</p></div>
 {submitted&&preview?<div className="success-card listing-preview-card"><CheckCircle2 size={42}/><h2>Your listing preview is ready</h2><div className="listing-preview-summary"><b>{preview.year} {preview.title}</b><strong>{preview.price}</strong><span>{preview.seller} · {preview.district}, Sri Lanka · {photos.length} photo(s) selected</span></div><p>Review your vehicle details and photos before publishing. Online listing submission will be available when seller services are connected.</p><button className="btn btn-primary" type="button" onClick={()=>setSubmitted(false)}>Back to form</button></div>:<form className="form-card" onSubmit={submit}>
 <div className="form-step"><b>01</b><span>Vehicle details</span><i/><b>02</b><span>Photos</span><i/><b>03</b><span>Seller information</span></div><h2>Vehicle information</h2><div className="form-grid">
 <label>Vehicle category *<select name="category" required defaultValue=""><option value="" disabled>Select category</option>{["Cars","SUVs","Vans","Motorcycles","Three Wheelers","Trucks"].map(x=><option key={x}>{x}</option>)}</select></label>
 <label>Condition *<select name="condition" required defaultValue=""><option value="" disabled>Select condition</option><option>Brand new</option><option>Used</option></select></label>
 <label>Make *<input name="make" required placeholder="e.g. Toyota"/></label><label>Model *<input name="model" required placeholder="e.g. Aqua S"/></label>
 <label>Manufacturing year *<input name="year" required type="number" min="1980" max={CURRENT_YEAR} placeholder={String(CURRENT_YEAR)}/></label><label>Price (LKR) *<input name="price" required type="number" min="1" step="1" placeholder="Enter asking price"/></label>
 <label>Mileage (km)<input name="mileage" type="number" min="0" step="1" placeholder="Enter mileage"/></label>
 <label>Fuel type<select name="fuel" defaultValue=""><option value="">Select fuel type</option>{["Petrol","Diesel","Hybrid","Electric"].map(x=><option key={x}>{x}</option>)}</select></label>
 <label>Transmission<select name="transmission" defaultValue=""><option value="">Select transmission</option>{["Automatic","Manual","Tiptronic"].map(x=><option key={x}>{x}</option>)}</select></label>
 <label>Engine capacity<input name="engine" placeholder="e.g. 1500 cc"/></label>
 <label className="span-2">Vehicle description *<textarea name="description" required rows={5} placeholder="Describe condition, service history and key features..."/></label>
 <label className="span-2">Vehicle photos (up to 8)<div className="upload-box"><Camera size={24}/><b>Choose vehicle photos</b><span>JPG, PNG or WEBP · Up to 8 images · 5 MB each</span><input name="photos" type="file" accept="image/jpeg,image/png,image/webp" multiple onChange={changePhotos} aria-label="Choose up to eight vehicle photos"/>{photos.length>0&&<small>{photos.length} photo(s) selected</small>}</div></label>
 {error&&<p className="form-error span-2" role="alert">{error}</p>}
 {urls.length>0&&<div className="photo-preview-grid span-2" aria-label="Selected photo previews">{urls.map((url,i)=><div className="photo-preview" key={url}><Image src={url} alt={`Selected vehicle photo ${i+1}`} fill unoptimized sizes="120px"/><span>{photos[i]?.name}</span></div>)}</div>}
 </div><h2 className="form-subheading">Seller information</h2><div className="form-grid">
 <label>Your name *<input name="sellerName" required placeholder="Full name"/></label><label>Phone number *<input name="sellerPhone" required type="tel" placeholder="+94 7X XXX XXXX"/></label><label>Email address<input name="sellerEmail" type="email" placeholder="you@example.com"/></label>
 <label>District *<select name="district" required defaultValue=""><option value="" disabled>Select district</option>{["Colombo","Gampaha","Kalutara","Kandy","Galle","Matara","Jaffna","Kurunegala","Anuradhapura","Other"].map(x=><option key={x}>{x}</option>)}</select></label>
 </div><div className="form-actions"><span>Fields marked * are required.</span><button className="btn btn-primary" type="submit">Preview listing <ChevronRight size={16}/></button></div></form>}
 <div className="demo-notice"><ImagePlus size={16}/><span>Photos are previewed in your browser. Online listing publication and secure image storage will be available when seller services are connected.</span></div></section>;
}
