import type { Metadata } from "next";

import "./globals.css";
// app/layout.tsx or app/page.tsx
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import { ClerkProvider } from "@clerk/nextjs";

import { ToastProvider } from "@/components/providers/toaster-provider";
import { ConfettiProvider } from "@/components/providers/confetti-provider";

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
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ConfettiProvider />
          <ToastProvider />

          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
