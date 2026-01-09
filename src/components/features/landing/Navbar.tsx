"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  ShoppingCart, 
  Heart, 
  User, 
  Menu, 
  X,
  Phone,
  Instagram,
  Facebook
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#", active: true },
    { name: "Perros", href: "#", hasDropdown: true },
    { name: "Gatos", href: "#", hasDropdown: true },
    { name: "Ofertas", href: "#" },
    { name: "Servicios", href: "#" },
    { name: "Blog", href: "#" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex flex-col items-center">
      
      {/* --- LEVEL 1: Top Utility Bar --- */}
      {/* Hides on scroll for a cleaner look, or stays fixed if preferred. Let's keep it but make it smaller or transparent on scroll. 
          Actually, for a "Next Level" look, let's keep it visible but very clean. 
      */}
      <div className={`w-full transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className={`text-2xl md:text-3xl font-extrabold tracking-tight transition-colors duration-300 ${isScrolled ? 'text-[var(--primary)]' : 'text-white'}`}>
              Pet<span className={isScrolled ? "text-gray-800" : "text-white/90"}>Season</span>
            </span>
          </div>

          {/* Search Bar (Desktop) */}
          <div className="hidden md:flex flex-1 max-w-md mx-8 relative group">
            <input 
              type="text" 
              placeholder="Buscar productos..." 
              className={`w-full px-6 py-2.5 rounded-full outline-none transition-all duration-300 ${
                isScrolled 
                  ? 'bg-gray-100 focus:bg-white border border-transparent focus:border-[var(--primary)] text-gray-800 placeholder:text-gray-500' 
                  : 'bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder:text-white/70 focus:bg-white/30'
              }`}
            />
            <Search className={`absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${isScrolled ? 'text-gray-400 group-hover:text-[var(--primary)]' : 'text-white/70'}`} />
          </div>

          {/* Right Actions (Socials + Contact) */}
          <div className="hidden md:flex items-center gap-4">
             <div className={`flex gap-3 pr-4 border-r ${isScrolled ? 'border-gray-200' : 'border-white/20'}`}>
                <a href="#" className={`hover:scale-110 transition-transform ${isScrolled ? 'text-gray-600 hover:text-[var(--primary)]' : 'text-white hover:text-white/80'}`}><Instagram className="w-5 h-5" /></a>
                <a href="#" className={`hover:scale-110 transition-transform ${isScrolled ? 'text-gray-600 hover:text-[var(--primary)]' : 'text-white hover:text-white/80'}`}><Facebook className="w-5 h-5" /></a>
             </div>
             <div className={`flex items-center gap-2 text-sm font-medium ${isScrolled ? 'text-gray-600' : 'text-white'}`}>
                <Phone className="w-4 h-4" />
                <span>+1 234 567 890</span>
             </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className={isScrolled ? "text-gray-800" : "text-white"} /> : <Menu className={isScrolled ? "text-gray-800" : "text-white"} />}
          </button>
        </div>
      </div>

      {/* --- LEVEL 2: Floating Navigation Pill --- */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className={`hidden md:flex items-center gap-1 p-1.5 rounded-full mt-2 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-lg border border-gray-100 translate-y-0' 
            : 'bg-white/95 backdrop-blur-md shadow-2xl translate-y-2'
        }`}
      >
        {/* Nav Links */}
        <div className="flex items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`relative px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  link.active 
                    ? 'bg-[var(--primary)] text-white shadow-md' 
                    : 'text-gray-600 hover:bg-gray-100 hover:text-[var(--primary)]'
                }`}
              >
                {link.name}
                {link.hasDropdown && (
                  <span className="ml-1 text-[10px] align-top">▼</span>
                )}
              </a>
            ))}
        </div>

        {/* Divider */}
        <div className="w-px h-6 bg-gray-200 mx-2"></div>

        {/* User Actions */}
        <div className="flex items-center gap-1 pr-1">
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-red-50 hover:text-red-500 text-gray-600 transition-colors">
            <Heart className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-blue-50 hover:text-blue-500 text-gray-600 transition-colors">
            <User className="w-5 h-5" />
          </Button>
          <Button size="md" className="rounded-full bg-[var(--accent)] hover:brightness-110 text-white font-bold px-6 shadow-md hover:shadow-lg transition-all ml-1 flex items-center gap-2">
            <ShoppingCart className="w-4 h-4" />
            <span>Carrito</span>
          </Button>
        </div>
      </motion.div>

      {/* --- Mobile Menu Overlay --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-white z-40 overflow-hidden flex flex-col pt-4 px-4 shadow-xl"
            style={{top: "60px"}} // Approximate height of top bar
          >
             <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                    <a key={link.name} href={link.href} className="text-lg font-bold text-gray-800 py-3 border-b border-gray-50">
                        {link.name}
                    </a>
                ))}
             </div>
             <div className="mt-8 grid grid-cols-2 gap-4">
                 <Button variant="outline" className="w-full justify-start gap-2 h-12">
                     <Heart className="w-5 h-5" /> Favoritos
                 </Button>
                 <Button variant="outline" className="w-full justify-start gap-2 h-12">
                     <User className="w-5 h-5" /> Perfil
                 </Button>
             </div>
             <Button className="w-full mt-4 bg-[var(--primary)] text-white h-12 text-lg font-bold shadow-lg">
                 Ver Carrito
             </Button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
