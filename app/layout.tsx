import type { Metadata } from "next";

import "./globals.css";
import localFont from "next/font/local";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

const gilroy = localFont({
  src: [
    {
      path: "../public/assets/fonts/Gilroy-Regular.woff2",
      weight: "400",
    },
    {
      path: "../public/assets/fonts/Gilroy-Medium.woff2",
      weight: "500",
    },
    {
      path: "../public/assets/fonts/Gilroy-Semibold.woff2",
      weight: "600",
    },
    {
      path: "../public/assets/fonts/Gilroy-Bold.woff2",
      weight: "700",
    },
  ],
});

export const metadata: Metadata = {
  title: "Mansu",
  description:
    "Mansu provides tailored consultancy services to help businesses grow and thrive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={gilroy.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
