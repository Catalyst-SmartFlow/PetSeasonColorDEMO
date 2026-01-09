"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Heart, Facebook, Instagram } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[var(--primary)] text-[var(--text-screen)] min-h-screen md:min-h-[800px] flex items-center pt-28 md:pt-48 pb-20 transition-colors duration-500">
      
      {/* Background Subtle Pattern/Blobs */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 pointer-events-none"
      >
           {/* Organic shape behind dog - Adjusted for better mobile centering */ }
           <div className="absolute w-[350px] h-[350px] md:w-[750px] md:h-[750px] left-1/2 -translate-x-1/2 top-10 md:translate-x-12 md:translate-y-16 bg-[var(--secondary)] rounded-full mix-blend-screen opacity-50 blur-3xl animate-pulse"></div>
           <div className="absolute w-[320px] h-[320px] md:w-[720px] md:h-[720px] left-1/2 -translate-x-1/2 top-14 md:translate-x-8 md:translate-y-12 bg-white/10 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] backdrop-blur-sm shadow-xl"></div>
      </motion.div>

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-8 items-center relative z-10">
        
        {/* Left: Image (Visual Focus) */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative h-[350px] md:h-[600px] flex items-center justify-center order-first lg:order-first mt-8 md:mt-0"
        >
           <Image 
             src="/images/pet_hero.png"
             alt="Happy Dog waiting for adoption"
             width={1000}
             height={1000}
             className="object-contain relative z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-500 w-[300px] md:w-[600px] lg:w-[900px] max-w-full lg:max-w-none translate-x-0 translate-y-0 lg:translate-x-8 lg:translate-y-16"
             priority
           />
           
           {/* Gradient Mask to hide bottom cut */}
           <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[var(--primary)] via-[var(--primary)]/80 to-transparent z-20 md:hidden"></div>

           {/* Floating Badge */}
           <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -bottom-4 right-4 md:bottom-20 md:right-20 z-30 bg-white text-[var(--primary)] py-2 px-4 rounded-full shadow-lg font-bold flex items-center gap-2 text-sm md:text-base"
           >
              <Heart className="w-4 h-4 md:w-5 md:h-5 fill-current" />
              <span>Adopta amor</span>
           </motion.div>
        </motion.div>

        {/* Right: Text Content */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 text-center lg:text-right flex flex-col items-center lg:items-end"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold text-sm uppercase tracking-wider shadow-sm">
            Pet Shop Premium
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-none tracking-tight">
            Todo lo que <br/>
            <span className="font-normal block text-2xl md:text-4xl mt-2 mb-1">tu mascota ama,</span>
            EN UN SOLO <br/>
            LUGAR!
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 max-w-lg font-medium leading-relaxed">
            Encuentra la mejor selección de alimentos, juguetes y accesorios para consentir a tu mejor amigo. Calidad y amor en cada producto.
          </p>

          <div className="flex items-center gap-4 pt-4">
            <Button size="lg" className="bg-white text-[var(--primary)] hover:bg-gray-100 font-bold text-lg px-8 rounded-full shadow-lg hover:shadow-xl transition-all">
              Ver Productos
            </Button>
            
            <div className="flex gap-3 pl-4 border-l border-white/30">
               <span className="text-sm font-semibold uppercase tracking-widest opacity-80 self-center hidden md:block">Síguenos:</span>
               <a href="#" className="p-2 bg-white/20 rounded-full hover:bg-white hover:text-[var(--primary)] transition-colors">
                 <Instagram className="w-5 h-5" />
               </a>
               <a href="#" className="p-2 bg-white/20 rounded-full hover:bg-white hover:text-[var(--primary)] transition-colors">
                 <Facebook className="w-5 h-5" />
               </a>
            </div>
          </div>
        </motion.div>

      </div>
      
      {/* Wave Separator at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
        <svg className="relative block w-[calc(100%+1.3px)] h-[50px] rotate-180" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>

    </section>
  );
}
