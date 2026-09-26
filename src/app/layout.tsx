import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import AdSense from "@/components/AdSense";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "GarbaGo — Navratri Garba & Dandiya Events Near You",
    template: "%s | GarbaGo",
  },
  description:
    "Find Navratri garba and dandiya events in Mumbai, Pune, Ahmedabad, Surat, and nearby cities, with direct links to book tickets. Updated listings, free to browse.",
  openGraph: {
    type: "website",
    siteName: "GarbaGo",
  },
  verification: {
    google: "4ZQ6UiXjqcpa04DqtqrigWwrU3YWV-9QyLYnK2D_O0s",
  },
};

export const viewport: Viewport = {
  themeColor: "#350a41",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <AdSense />
      </head>
      <body className="min-h-full">
        <GoogleAnalytics />
        <div className="app-shell flex min-h-dvh flex-col">
          <Header />
          <main className="flex-1 pb-24">{children}</main>
          <Footer />
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
