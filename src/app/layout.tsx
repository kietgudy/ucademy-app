import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/common/ThemeProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
        </head>
        <body className={manrope.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <ToastContainer
            autoClose={2000}
            bodyClassName="text-sm font-medium"
            position="top-right"
            />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
