import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin } from "lucide-react";
import { money, vehicles } from "@/lib/data";

const photos = ["https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=900&q=80&fit=crop","https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=900&q=80&fit=crop","https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=900&q=80&fit=crop","https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=900&q=80&fit=crop","https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=80&fit=crop","https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=900&q=80&fit=crop","https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=900&q=80&fit=crop","https://images.unsplash.com/photo-1502877338535-766e1452684a?w=900&q=80&fit=crop"];

export function generateStaticParams() {
  return vehicles.map((vehicle) => ({ id: vehicle.id }));
}

export default async function VehicleDetails({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const vehicle = vehicles.find((item) => item.id === id);
  if (!vehicle) notFound();

  const photo = photos[vehicle.imageIndex] ?? photos[0];

  return (
    <section className="page-section container">
      <Link href="/vehicles" className="back-link">
        <ArrowLeft size={15} /> Back to vehicles
      </Link>

      <div className="detail-layout">
        <div>
          <div className="detail-main-image">
            <span
              className="vehicle-photo"
              role="img"
              aria-label={vehicle.imageAlt}
              style={{ backgroundImage: `url("${photo}")` }}
            />
          </div>

          <div className="detail-panel">
            <h2>Vehicle description</h2>
            <p>{vehicle.description}</p>
          </div>

          <div className="detail-panel">
            <h2>Specifications</h2>
            <div className="spec-grid">
              {[
                ["Year", vehicle.year],
                ["Mileage", `${vehicle.mileage.toLocaleString("en-LK")} km`],
                ["Fuel type", vehicle.fuel],
                ["Transmission", vehicle.transmission],
                ["Engine", vehicle.engine],
                ["Condition", vehicle.condition]
              ].map(([label, value]) => (
                <div className="spec-item" key={String(label)}>
                  <small>{label}</small>
                  <b>{value}</b>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="detail-sidebar">
          <span className="image-badge inline-badge">
            {vehicle.featured ? "Featured" : vehicle.category}
          </span>
          <h1>{vehicle.year} {vehicle.title}</h1>
          <p className="detail-location">
            <MapPin size={15} /> {vehicle.location}, Sri Lanka
          </p>
          <div className="detail-price">{money(vehicle.price)}</div>

          <div className="detail-panel seller-panel">
            <h3>Seller information</h3>
            <b>Demo seller</b>
            <small>Seller contact details are not available for this listing.</small>
            <Link href="/contact" className="btn btn-outline full-btn">
              View contact page
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
