"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { CTASection } from "@/components/ui/cta-section";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col relative`}
      >
        {/* Background decorative elements */}
        <div className="fixed top-20 left-0 w-64 h-64 rounded-full bg-[rgb(97,224,0)]/5 -translate-x-1/2 z-0"></div>
        <div className="fixed top-1/3 right-0 w-96 h-96 rounded-full bg-[rgb(0,218,222)]/5 translate-x-1/3 z-0"></div>
        <div className="fixed bottom-40 left-1/4 w-72 h-72 rounded-full bg-[rgb(97,224,0)]/5 -translate-x-1/2 z-0"></div>
        
        {/* Subtle grid pattern */}
        <div className="fixed inset-0 bg-grid-pattern opacity-[0.05] z-0"></div>
        
        <Navbar />
        <div className="flex-grow relative z-10">
          {children}
        </div>
        <CTASection />
        <Footer />
      </body>
    </html>
  );
}
