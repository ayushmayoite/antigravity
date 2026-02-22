import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AdvancedBot } from "@/components/bot/AdvancedBot";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "One and Only Furniture | Premium Office Solutions",
  description:
    "Experience the pinnacle of workspace design with One and Only Furniture. Premium office furniture solutions for modern workspaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-white selection:bg-primary selection:text-white">
        <Header />
        {children}
        <Footer />
        <AdvancedBot />
      </body>
    </html>
  );
}
