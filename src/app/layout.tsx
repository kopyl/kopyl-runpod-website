import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./reset.sass";
import "./globals.sass";
import { Header } from "@/app/components/layout/header";
import { Promo } from "./components/layout/promo";
import { Footer } from "./components/layout/footer";
import { Analytics } from "@analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kopyl Oleh – RunPod dev",
  description: "I train and deploy AI to RunPod",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ position: "relative" }}>
        <Analytics />
        <Header />
        {children}
        <Promo />
        <Footer />
      </body>
    </html>
  );
}
