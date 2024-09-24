import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// TODO: Replace this with the fonts that designers provide.
const geistSans = localFont({
  src: "./fonts/Geist-Regular.woff",
  variable: "--font-geist-sans",
  weight: "400",
});

export const metadata: Metadata = {
  title: "WDB Template",
  description: "A template for WDB projects!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
