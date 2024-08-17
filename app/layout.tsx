import type { Metadata } from "next";
import "./globals.css";
import CartSvg from "@/public/assets/icon-cart.svg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import { getSiteSettings } from "@/sanity/lib/site-settings-query";
import { getCategories } from "@/sanity/lib/category-query";

export const metadata: Metadata = {
  title: "AudioPhile - Where music, love & technology meets",
  description: "A demo e-commerce app of a audio systems company store",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryResults = await Promise.all([getSiteSettings(), getCategories()]);
  const siteSettings = queryResults[0];
  const categoryNames = queryResults[1].map((val) => val.name);
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
          logo={siteSettings[0].logoImage}
          icon={CartSvg}
          options={["Home", ...categoryNames]}
        />
        {children}
        <Footer
          logo={siteSettings[0].logoImage}
          options={["Home", ...categoryNames]}
          socialLinks={siteSettings[0].socialLink}
        >
          {siteSettings[0].footerText}
        </Footer>
      </body>
    </html>
  );
}
