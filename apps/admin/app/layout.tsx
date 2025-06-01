import type { Metadata } from "next";
import localFont from "next/font/local";
import "@next-starter/ui/globals.css"
import { Toaster } from "@next-starter/ui/components/sonner";
import { SidebarProvider, SidebarTrigger } from "@next-starter/ui/components/sidebar";
import { Navbar } from "@/components/sidebar";

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
export const dynamic = "force-dynamic";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <SidebarProvider>
          <div className="flex h-screen ga-2 w-full">
            <Navbar />
            <main className="flex h-screen w-full">
              <SidebarTrigger className="h-5 w-5" />
              {children}
            </main>
          </div>
          <Toaster />
        </SidebarProvider>
      </body>
    </html>
  );
}
