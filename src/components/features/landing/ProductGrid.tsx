"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, ShoppingCart, Heart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Happy Dog Premium Food",
    category: "Perros",
    rating: 4.9,
    reviews: 128,
    price: "$29.99",
    oldPrice: "$35.00",
    image: "/images/product_food.png",
    badge: "Best Seller",
    badgeColor: "bg-yellow-400 text-yellow-900"
  },
  {
    id: 2,
    name: "Purrfect Cat Toys Set",
    category: "Gatos",
    rating: 4.8,
    reviews: 85,
    price: "$19.50",
    image: "/images/product_toy.png",
    badge: "Trending",
    badgeColor: "bg-purple-100 text-purple-600"
  },
  {
    id: 3,
    name: "Summer Vibes Collection",
    category: "Accesorios",
    rating: 5.0,
    reviews: 42,
    price: "$45.00",
    oldPrice: "$55.00",
    image: "/images/NuevoPapular.png",
    badge: "New Arrival",
    badgeColor: "bg-[var(--accent)] text-white"
  }
];

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
                <Star 
                    key={star} 
                    className={`w-3 h-3 ${star <= Math.round(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} 
                />
            ))}
        </div>
    );
}

export function ProductGrid() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[var(--surface)] opacity-50 -z-10"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--primary)] text-[var(--primary)] rounded-full mix-blend-multiply filter blur-[100px] opacity-5 translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-2">
            <span className="text-[var(--primary)] font-bold uppercase tracking-widest text-sm">Nuestros Favoritos</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--text-main)]">Populares de la Temporada</h2>
            <div className="w-24 h-1 bg-[var(--accent)] mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p, i) => (
                <motion.div 
                    key={p.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="group relative bg-white rounded-3xl p-4 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-transparent hover:border-[var(--primary)]/20"
                >
                    {/* Badge */}
                    {p.badge && (
                        <div className={`absolute top-6 left-6 z-20 px-3 py-1 rounded-full text-xs font-bold shadow-sm ${p.badgeColor}`}>
                            {p.badge}
                        </div>
                    )}
                    
                    {/* Wishlist Button */}
                    <button className="absolute top-6 right-6 z-20 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-gray-400 hover:text-red-500 hover:scale-110 transition-all">
                        <Heart className="w-5 h-5" />
                    </button>

                    {/* Image Container with Padding Fix */}
                    <div className="relative h-[300px] w-full bg-gray-50 rounded-2xl mb-6 overflow-hidden flex items-center justify-center group-hover:bg-[var(--surface)] transition-colors duration-500 p-8">
                        <motion.div 
                            className="relative w-full h-full"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <Image 
                                src={p.image} 
                                alt={p.name}
                                fill
                                className="object-contain drop-shadow-xl"
                                unoptimized
                            />
                        </motion.div>
                        
                        {/* Quick View Overlay (Desktop) */}
                        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none md:pointer-events-auto">
                             <Button className="translate-y-10 group-hover:translate-y-0 transition-transform duration-300 bg-white text-gray-900 hover:bg-[var(--primary)] hover:text-white rounded-full px-6 shadow-lg font-bold gap-2">
                                <Eye className="w-4 h-4" /> Vista Rápida
                             </Button>
                        </div>
                    </div>

                    {/* Info */}
                    <div className="px-2 pb-2">
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-xs font-bold text-gray-400 uppercase">{p.category}</span>
                            <div className="flex items-center gap-1">
                                <StarRating rating={p.rating} />
                                <span className="text-xs text-gray-400 font-medium">({p.reviews})</span>
                            </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-[var(--text-main)] mb-3 group-hover:text-[var(--primary)] transition-colors line-clamp-1">{p.name}</h3>
                        
                        <div className="flex items-center justify-between mt-4">
                            <div className="flex flex-col">
                                {p.oldPrice && (
                                    <span className="text-sm text-gray-400 line-through font-medium">{p.oldPrice}</span>
                                )}
                                <span className="text-2xl font-extrabold text-[var(--text-main)]">{p.price}</span>
                            </div>
                            
                            <Button 
                                size="icon" 
                                className="w-12 h-12 rounded-full bg-[var(--primary)] text-white hover:brightness-110 shadow-lg hover:shadow-[var(--primary)]/50 transition-all duration-300 group-hover:scale-110"
                            >
                                <ShoppingCart className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
