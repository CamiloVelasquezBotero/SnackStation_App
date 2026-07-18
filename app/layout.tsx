import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Config of google fonts
const font = Inter({
  subsets: ['latin'],
  weight: ['400', '700', '900']
})

export const metadata: Metadata = {
  title: "SnackStation",
  description: "Station for your snacks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // We put the font in the html
      className={`${font.className} bg-gray-100 antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
