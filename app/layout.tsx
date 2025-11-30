import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CV Maker - Create Your Professional Resume",
  description: "Create and customize your professional CV/Resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
