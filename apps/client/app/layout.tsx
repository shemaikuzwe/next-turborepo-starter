import type { Metadata } from "next";
import localFont from "next/font/local";
import "@next-starter/ui/globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "SaaSify - The Complete SaaS Solution",
  description: "Transform your business with our powerful SaaS platform. Get started with flexible pricing plans and enterprise-grade features.",
};
// If you want to make all pages dynamic
//export const dynamic="force-dynamic"
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
