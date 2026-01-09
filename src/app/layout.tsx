import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "The Chameleon Pet Shop",
  description: "A dynamic theming demo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen font-sans antialiased")}>
        {children}
      </body>
    </html>
  );
}
