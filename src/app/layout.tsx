import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL('https://pet-season-color-demo.vercel.app/'),
  title: "The Chameleon Pet Shop",
  description: "A dynamic theming demo.",
  openGraph: {
    title: "The Chameleon Pet Shop",
    description: "A dynamic theming demo showcasing vibrant colors and pets.",
    url: 'https://pet-season-color-demo.vercel.app/',
    siteName: 'The Chameleon Pet Shop',
    images: [
      {
        url: '/images/OpenGraph.png',
        width: 1200,
        height: 630,
        alt: 'The Chameleon Pet Shop Hero Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "The Chameleon Pet Shop",
    description: "A dynamic theming demo.",
    images: ['/images/OpenGraph.png'],
  },
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
