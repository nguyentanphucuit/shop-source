import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ProgressBarProvider from "./components/ProgressBar";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MetaGun 2.0",
  description: "MetaGun - Chơi là mê",
  keywords:
    "metagun, gunny gold, gunny cuong hoa hên xui, gunny 3.0, gunny 3.4, gunny 3.6, gunny 2012, gunny huan chuong ,gunny free, ddtank, ddtank private, gunny private, gunny lậu, gunny private, gunny miễn phí, gunny đầy đủ tính năng, gunny phó bản chuẩn zing, gunny có doanh chiến, gunny có guild chiến, gunny có tranh bá chí tôn, gunny có pet tôn ngộ không, gunny miễn phí pet tôn ngộ không, gunny, gunny lau, gunny lau moi nhat, gunny phien ban moi, gunny moi nhat, gunny dai chien 7 thanh pho, gunny lau full xu, gunnyfullxu, gunny lau co pet ton ngo khong, gunny lau mien phi pet ton ngo khong, pet ton ngo khong gunny, free pet ton ngo khong, gunny full xu, gunny cay quoc, gunny day du tinh nang, gunny full pho ban, gunny pho ban chuan, gunny pho ban do ngon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <Header /> */}
      <body className={inter.className}>
        <Navbar />
        <Suspense>
          <ProgressBarProvider>{children}</ProgressBarProvider>
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
