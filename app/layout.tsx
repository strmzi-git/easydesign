import "./globals.css";
import type { Metadata } from "next";
import { Quattrocento, Quattrocento_Sans, Raleway } from "next/font/google";

const quattrocento = Quattrocento({
  subsets: ["latin"],
  weight: ["400", "700"],
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
      <body className={quattrocento.className}>{children}</body>
    </html>
  );
}
