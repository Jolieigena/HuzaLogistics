import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "e-Logistics | Huzalabs",
  description:
    "End-to-end supply chain visibility — shipment tracking, fleet coordination, and warehouse management for goods on the move.",
  icons: {
    icon: "/favicon.ico",
  },
};

import { LayoutWrapper } from "@/components/LayoutWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} font-sans bg-white text-slate-900`}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
