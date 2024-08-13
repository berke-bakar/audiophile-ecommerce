import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import LogoSvg from "@/public/assets/logo.svg";
import CartSvg from "@/public/assets/icon-cart.svg";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "AudioPhile - Where music, love & technology meets",
  description: "A demo e-commerce app of a audio systems company store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar
          logo={LogoSvg}
          icon={CartSvg}
          options={["Home", "Headphones", "Speakers", "Earphones"]}
          className="bg-black"
        />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
