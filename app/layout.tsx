import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pixels Smart Platform",
  description: "AI-Powered CRM, Task Management & Client Portal",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#0A0A0A] text-[#E8E8E8] antialiased">{children}</body>
    </html>
  );
}
