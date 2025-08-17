import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Currency Converter - Real-Time Exchange Rates",
  description:
    "A modern and responsive currency converter built with Next.js 15, Tailwind CSS, and shadcn/ui. Convert global currencies instantly and track your last 5 conversions.",
  keywords: [
    "currency converter",
    "exchange rates",
    "Next.js",
    "Tailwind CSS",
    "real-time conversion",
    "shadcn",
  ],
  authors: [{ name: "Mohd Uzair" }],
  creator: "Mohd Uzair",
  publisher: "Mohd Uzair",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Currency Converter App",
    description:
      "Convert currencies in real-time with a modern UI built using Next.js, Tailwind, and shadcn/ui.",
    url: "https://currency-converter-blond-rho-23.vercel.app",
    siteName: "Currency Converter",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Currency Converter Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Currency Converter App",
    description:
      "Real-time global currency converter with modern UI, built by Mohd Uzair.",
    creator: "@TheUzair4",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}