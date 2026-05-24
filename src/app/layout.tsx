import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shepa Robert | Civil Engineer",
  description:
    "Portfolio of Shepa Robert — Civil Engineer (Structural design, architectural drawings, drafting)."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}

