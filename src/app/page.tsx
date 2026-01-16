"use client";

import { useState } from 'react';
import { Hero } from "@/components/features/landing/Hero"; 
import palettes from '@/data/palettes.json';
import { ProductGrid } from "@/components/features/landing/ProductGrid"; // Import grid
import { Marquee } from "@/components/features/landing/Marquee";
import { Navbar } from "@/components/features/landing/Navbar";
import { CategoryBento } from "@/components/features/landing/CategoryBento";
import { PromoBanner } from "@/components/features/landing/PromoBanner";
import { PaletteDrawer } from "@/components/features/themer/PaletteDrawer";
import { Footer } from "@/components/features/landing/Footer";

export default function Home() {
  // Ensure palettes has data to avoid crash
  const initialPalette = (palettes && palettes.length > 0) ? palettes[0] : {
    id: 'default',
    name: 'Default',
    colors: { primary: '#29b3af', secondary: '#f4a261', accent: '#e76f51', background: '#ffffff', text: '#264653' }
  };
  
  const [currentPalette, setCurrentPalette] = useState(initialPalette);

  if (!currentPalette || !currentPalette.colors) {
      return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <main 
      className="min-h-screen transition-colors duration-500"
      style={{
        // keeping these for other components that might use them
        '--primary': currentPalette.colors.primary,
        '--secondary': currentPalette.colors.secondary,
        '--accent': currentPalette.colors.accent,
        '--surface': currentPalette.colors.background,
        '--text-main': currentPalette.colors.text,
        '--text-screen': '#ffffff', // Assuming screen text is always white for now/primary dependent
        backgroundColor: currentPalette.colors.background,
        color: currentPalette.colors.text,
      } as React.CSSProperties}
    >
      <Navbar />
      
      <PaletteDrawer 
        palettes={palettes} 
        currentPalette={currentPalette} 
        onSelect={setCurrentPalette}
      />

      <Hero />
      <Marquee />
      
      {/* New Visual Sections */}
      <CategoryBento />
      <PromoBanner />
      
      <ProductGrid />
      
      <Footer />
    </main>
  );
}
