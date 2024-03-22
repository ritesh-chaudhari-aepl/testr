import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/pages/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Radha - The Great Rescue",
  description: "crowdfunding site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="../../fonts/Whitney-Sans-Font/whitney-semibold.otf"
          as="font"
          type="font/woff2"
          crossOrigin="true"
        />
        <link
          rel="preload"
          href="../../fonts/Whitney-Sans-Font/whitney.ttf"
          as="font"
          type="font/truetype"
          crossOrigin="true"
        />
        <link rel="preload" href="../pages/index.css" as="style" />
        <link rel="preload" href="./globals.css" as="style" />
        <link rel="preload" as="image" href="../assets/hero-bg.webp"></link>
        <link rel="preload" as="image" href="../assets/about.webp"></link>
        <link rel="preload" as="image" href="../assets/about-page.webp"></link>
        <link rel="preload" as="image" href="../assets/bg-blogs.webp"></link>
        <link rel="preload" as="image" href="../assets/footer-bg.png"></link>
        <link rel="preload" as="image" href="../assets/dusty.svg"></link>
        <link rel="preload" as="image" href="../assets/dusty1.svg"></link>
      </head>
      <Header />
      <body className={inter.className}>{children}</body>
      {/* <Footer /> */}
    </html>
  );
}
