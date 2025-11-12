import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNav from "@/components/top-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paulo Díaz — Product & UX for Growth",
  description: "I reimagine stalled products into lovable, high-retention experiences.",
  metadataBase: new URL("https://example.com"), // replace when you deploy
  openGraph: {
    title: "Paulo Díaz — Product & UX",
    description: "Creator economy, PLG, design systems, React/Next.",
    type: "website",
    url: "https://example.com",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        
        <TopNav />
  
        {children}</body>
    </html>
  );
}
