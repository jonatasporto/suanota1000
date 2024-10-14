import React, {Suspense} from 'react';
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import GoogleTagManage from "@/components/googleTagManage";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sua nota 1000",
  description: "Um guia prático para redação nota 1000.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="Pt-Br"> 
    
     {/* <Suspense fallback={null}> */}
        <GoogleTagManage />
      {/* </Suspense>            */}
      <body      
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}      
      >
        testando
        {children}
      </body>      
    </html>
  );
}
