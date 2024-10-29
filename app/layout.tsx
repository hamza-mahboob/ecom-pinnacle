import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ThemeProvider } from "./MTailwind";
import { roboto, mr } from "@/components/ui/fonts";
import { Toaster } from "@/components/ui/toaster";

export const metadata = {
  title: "Ecom Pinnacle - Your Partner for E-commerce Success",
  description: "ECOM PINNACLE; your single source platform for ecommerce automation. The one place that provides YouTube, TikTok, Shopify, and Amazon automation services according to your needs.",
  keywords: [
    "Ecom Pinnacle",
    "Amazon wholesale",
    "Shopify setup",
    "TikTok store management",
    "YouTube automation",
    "e-commerce solutions",
    "product research",
    "online store optimization",
    'ecommerce marketing agency',
    'Ecommerce digital marketing agency',
    'Ecommerce agency uk',
    'Ecommerce website',
    'Ecommerce design ',
    'Ecommerce in London',
    'Ecommerce services',
    'Ecommerce email marketing agency',
    'Ecommerce services',
    'Service ecommerce',
    'Youtube automation',
    'Automated youtube channel',
    'What is youtube automation',
    'What is amazon poc',
    'What is ppc in amazon',
    'Amazon ppc advertising',
    'Amazon ppc  management',
    'Amazon marketing services'
  ],
  authors: [{ name: "Ecom Pinnacle" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Ecom Pinnacle - Your Partner for E-commerce Success",
    description: "Specializing in Amazon, Shopify, TikTok, and YouTube automation, Ecom Pinnacle provides the tools and support for your e-commerce business to thrive.",
    type: "website",
    url: "https://www.ecompinnacle.co.uk",
    images: [
      {
        url: "https://www.ecompinnacle.co.uk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ecom Pinnacle - E-commerce Setup and Management Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@EcomPinnacle",
    title: "Ecom Pinnacle - E-commerce Setup and Management Services",
    description: "Grow your e-commerce business with Ecom Pinnacle's professional Amazon, Shopify, TikTok, and YouTube automation services tailored to your needs.",
    images: ["https://www.ecompinnacle.co.uk/twitter-image.jpg"],
  },
};

// Separate viewport export
export const viewport = {
  width: "device-width",
  initialScale: 1,
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <ThemeProvider>
          <Header />
          {children}
          <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
