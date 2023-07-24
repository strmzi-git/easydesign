import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import Header from "./components/Header";

const inter = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Easy Design",
  description: "Easily find ind your next landing page template",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
