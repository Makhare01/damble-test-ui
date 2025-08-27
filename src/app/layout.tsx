import { AppSidebar } from "@/components/app-sidebar";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { SidebarProvider } from "@/components/ui/sidebar";
import type { Metadata } from "next";
import { Manrope, Orbitron } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Damble",
  description: "Damble",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${orbitron.className} ${manrope.variable} antialiased`}
      >
        <SidebarProvider>
          <AppSidebar />
          <main className="flex-1 flex flex-col">
            <Navigation />
            <div className="flex-1 p-[60px]">{children}</div>
            <Footer />
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
