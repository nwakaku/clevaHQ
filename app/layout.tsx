// @ts-ignore
/* eslint-disable */
import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { mulish } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/cleva.svg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          mulish.className
        )}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col bg-cover bg-center h-screen">
            {/* Video background */}
            <video
              autoPlay
              loop
              muted
              className="absolute top-0 left-0 w-full h-full object-cover">
              <source src="https://res.cloudinary.com/ddxcd04ok/video/upload/v1734002999/Bouncing_Ball_ClevaHQ_Website_Background_an7fek.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Gradient overlay: 4/5 transparent, 1/5 black */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 via-transparent via-[80%]" />

            {/* Optional overlay for additional darkening */}
            <div className="absolute inset-0 bg-black opacity-50" />

            <Navbar />
            <main className="container mx-auto max-w-7xl px-6 flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
