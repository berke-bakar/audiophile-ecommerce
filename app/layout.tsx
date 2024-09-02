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
import NotificationProvider from "@/context/NotificationProvider";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "AudioPhile - Where music, love & technology meets",
  description: "A demo e-commerce app of an audio systems company store",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryResults = await Promise.all([getSiteSettings(), getCategories()]);
  const siteSettings = queryResults[0][0];
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
        <NotificationProvider>
          <CartProvider>
            <Navbar
              logo={siteSettings.logoImage}
              icon={CartSvg}
              optionsInfo={queryResults[1]}
              optionsPrefix="category"
            />
            {children}
          </CartProvider>
          <AboutUs
            imageUrl={siteSettings.aboutUsImage}
            className="xl:max-w-[1110px] md:max-w-[689px] max-w-[327px] mx-auto xl:mb-[160px] mb-[96px]"
          >
            <div className="xl:max-w-[41.5%] flex flex-col gap-[32px] text-center xl:text-start">
              <PortableText
                value={siteSettings.content!}
                components={{
                  marks: {
                    colored: ({ children }) => (
                      <span className="text-primary-dark">{children}</span>
                    ),
                  },
                  block: {
                    h2: ({ children }) => (
                      <h2 className="text-pretty md:text-[40px] text-[28px]">
                        {children}
                      </h2>
                    ),
                    normal: ({ children }) => (
                      <p className="opacity-50 text-balance">{children}</p>
                    ),
                  },
                }}
              />
            </div>
          </AboutUs>
          <Footer
            logo={siteSettings.logoImage}
            options={["Home", ...categoryNames]}
            optionsPrefix="category"
            socialLinks={siteSettings.socialLink}
          >
            {siteSettings.footerText}
          </Footer>
        </NotificationProvider>
        <Analytics />
      </body>
    </html>
  );
}
