import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layouts/Sidebar";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ucademy App",
  description: "Nền tảng học lập trình trực tuyến hay nhất",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <div className="wrapper grid grid-cols-[300px,minmax(0,1fr)] h-screen">
          <Sidebar/>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
