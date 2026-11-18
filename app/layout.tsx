import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "@/components/marketplace";
export const metadata: Metadata = { title: "AutoLanka | Find your next ride", description: "Browse cars, SUVs, vans and motorcycles across Sri Lanka." };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/><main>{children}</main><Footer/></body></html>}
