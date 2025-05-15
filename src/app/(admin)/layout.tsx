"use client"

import { Geist, Geist_Mono } from "next/font/google";
import '@/app/(admin)/adminGlobal.css'
import AdminHeader from "./partial/header";
import "@/app/(marketing)/lib/fontawesome";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootAdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <AdminHeader />
        {children}
      </body>
    </html>
  );
}
