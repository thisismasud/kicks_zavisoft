import Header from "@/components/common/Header/Header";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kicks - Your Ultimate Sneaker Destination",
  description: "Discover the latest and greatest in sneaker culture at Kicks. From exclusive drops to timeless classics, we bring you the best in footwear fashion. Step up your style game with our curated collection of sneakers",
};

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.variable} antialiased px-4 lg:px-0`}
      >
        <div className="max-w-330 mx-auto">
            <Header />
        </div>
        {children}
      </body>
    </html>
  );
}
