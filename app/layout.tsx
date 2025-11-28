import { Geist, Geist_Mono, Jost } from "next/font/google";
import "./globals.css";
import {metadata} from "@/lib/data/metadata";
import BackToTop from "@/components/shared/BackToTop";
import Footer from "@/components/layout/Footer";
import BottomNavigation from "@/components/layout/BottomNavigation";

export { metadata };


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});



const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jost.variable} relative antialiased`}
      >
        {children}
        <BackToTop />
        <Footer/>
        <BottomNavigation/>
      </body>
    </html>
  );
}
