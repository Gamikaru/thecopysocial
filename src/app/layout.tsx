import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "@/styles/global/globals.css";
import MainLayout from "@/components/layout/MainLayout";

// Define fonts
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "The Copy Social - Ashley Rudolph | Professional Copywriter",
  description: "Elevate your brand with compelling copy that converts. Professional copywriting services for websites, launches, emails, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
