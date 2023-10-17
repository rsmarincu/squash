import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Squash Kings Sibiu",
  description: "Cea mai noua sala de squash din Sibiu",
  icons: {
    icon: {
      url: "/favicon.png",
      type: "image/png",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} `}>
      <body className={"flex justify-center bg-squash-dark"}>{children}</body>
    </html>
  );
}
