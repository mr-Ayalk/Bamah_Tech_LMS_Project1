import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// import "@uploadthing/react/styles.css";

import "./globals.css";
// app/layout.tsx or app/page.tsx



import {
  ClerkProvider,
} from '@clerk/nextjs'
import Header from "@/components/header/header";
import { ToastProvider } from "@/components/providers/toaster-provider";
import { ConfettiProvider } from "@/components/providers/confetti-provider";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fortune Tutorial LMS App",
  description: "Developed by Bamah Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <ClerkProvider  >
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ConfettiProvider/>
       <ToastProvider/>
       
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
