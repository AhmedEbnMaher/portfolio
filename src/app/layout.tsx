import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahmed Maher Portfolio",
  description:
    "This App is Ahmed Maher protfolio ,Ahmed Maher cv , all Ahmed Maher Work ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
