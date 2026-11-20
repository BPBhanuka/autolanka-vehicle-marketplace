"use client";
import {useState,type FormEvent} from "react";
import {Mail,MapPin,Phone,CheckCircle2} from "lucide-react";
export default function Contact(){
 const [sent,setSent]=useState(false);
 const submit=(event:FormEvent<HTMLFormElement>)=>{event.preventDefault();setSent(true);};
 return <section className="page-section container"><div className="page-heading"><span className="eyebrow">WE ARE HERE TO HELP</span><h1>Let's talk vehicles.</h1><p>Questions about this AutoLanka frontend concept? Explore the sample contact form.</p></div>
 <div className="contact-layout"><form className="form-card" onSubmit={submit}><h2>Send us a message</h2>{sent?<div className="inline-success" role="status"><CheckCircle2/><span>Form validation completed. This demo does not send or store messages; no message has been delivered.</span></div>:<>
 <div className="form-grid"><label>Your name *<input name="name" required placeholder="Enter your name"/></label><label>Email address *<input name="email" type="email" required placeholder="you@example.com"/></label>
 <label className="span-2">Subject *<select name="subject" required defaultValue=""><option value="" disabled>Choose a topic</option><option>Buying a vehicle</option><option>Selling a vehicle</option><option>Technical support</option><option>Other</option></select></label>
 <label className="span-2">Message *<textarea name="message" rows={6} required placeholder="Tell us how we can help..."/></label></div><button className="btn btn-primary" type="submit">Validate message</button></>}</form>
 <aside className="contact-info"><h2>Contact information</h2><div><Mail/><span><small>EMAIL</small><b>Not configured in this demo</b></span></div><div><Phone/><span><small>PHONE</small><b>Not configured in this demo</b></span></div><div><MapPin/><span><small>LOCATION</small><b>Sri Lanka</b></span></div><p>This page demonstrates the contact interface only. Add a verified business email, phone number and backend delivery service before production use.</p></aside></div></section>;
}
