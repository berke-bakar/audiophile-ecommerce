import type { Metadata } from "next";
import "./globals.css";
import CartSvg from "@/public/assets/icon-cart.svg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import { getSiteSettings } from "@/sanity/lib/site-settings-query";
import { getCategories } from "@/sanity/lib/category-query";
import AboutUs from "@/components/sections/AboutUs";
import { PortableText } from "@portabletext/react";
import CartProvider from "@/context/CartProvider";

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
        <CartProvider>
          <Navbar
            logo={siteSettings[0].logoImage}
            icon={CartSvg}
            options={["Home", ...categoryNames]}
            optionsPrefix="category"
            checkoutLink={"/checkout"}
          />
          {children}
        </CartProvider>
        <AboutUs
          imageUrl={siteSettings[0].aboutUsImage}
          className="xl:max-w-[1110px] mx-auto xl:mb-[160px]"
        >
          <div className="max-w-[41.5%] flex flex-col gap-[32px]">
            <PortableText
              value={siteSettings[0].content!}
              components={{
                marks: {
                  colored: ({ children }) => (
                    <span className="text-primary-dark">{children}</span>
                  ),
                },
              }}
            />
          </div>
        </AboutUs>
        <Footer
          logo={siteSettings[0].logoImage}
          options={["Home", ...categoryNames]}
          optionsPrefix="category"
          socialLinks={siteSettings[0].socialLink}
        >
          {siteSettings[0].footerText}
        </Footer>
      </body>
    </html>
  );
}
