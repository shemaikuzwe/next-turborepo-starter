import type { Metadata } from "next";
import localFont from "next/font/local";
import "@next-starter/ui/globals.css"
import { Toaster } from "@next-starter/ui/components/sonner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Admin",
  description: "Next-starter admin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
