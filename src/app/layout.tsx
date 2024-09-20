import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./reset.sass";
import "./globals.sass";
import { Promo } from "./components/layout/promo";
import { Footer } from "./components/layout/footer";
import { Analytics } from "@analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kopyl Oleh – AI engineer",
  description: "I train and integrate AI models and tools",
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
        {children}
        <Promo />
        <Footer />
      </body>
    </html>
  );
}
