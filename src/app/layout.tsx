import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./reset.sass";
import "./globals.sass";
import { Header } from "@components/header";

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
      <body className={inter.className}>
        <header className="header">
          <Header />
        </header>
        {children}
      </body>
    </html>
  );
}
