"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    id: 1,
    title: "Perros",
    subtitle: "Todo para tu mejor amigo",
    image: "/images/DogPopular.png",
    size: "col-span-1 md:col-span-2 row-span-2",
    themeColor: "bg-[var(--primary)]",
    textColor: "text-white",
    imgConfig: "justify-end items-end scale-125 translate-y-8" // Bigger dog, slight offset
  },
  {
    id: 2,
    title: "Gatos",
    subtitle: "Consentidos del hogar",
    image: "/images/CatPopular.png",
    size: "col-span-1 row-span-1",
    themeColor: "bg-[var(--secondary)]",
    textColor: "text-[var(--text-main)]",
    imgConfig: "justify-start items-end -translate-x-4 scale-110" // Cat on left
  },
  {
    id: 3,
    title: "Ofertas",
    subtitle: "Hasta 50% OFF",
    image: "/images/PromocionesPapular.png",
    size: "col-span-1 row-span-1",
    themeColor: "bg-[var(--accent)]",
    textColor: "text-white",
    imgConfig: "justify-end items-end"
  },
  {
    id: 4,
    title: "Nuevos",
    subtitle: "Colección Verano",
    image: "/images/NuevoPapular.png",
    size: "col-span-1 md:col-span-2 row-span-1",
    themeColor: "bg-white",
    textColor: "text-[var(--text-main)]",
    border: "border-2 border-[var(--primary)]",
    imgConfig: "justify-end items-end"
  }
];

export function CategoryBento() {
  return (
    <section className="py-20 px-4 container mx-auto">
       <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--text-main)] mb-4">Categorías Populares</h2>
            <p className="text-[var(--text-main)]/70 max-w-xl mx-auto">Explora nuestras secciones más visitadas. Cada una diseñada para hacer feliz a tu mascota.</p>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-3 md:grid-rows-2 gap-4 h-[800px] md:h-[600px]">
           {categories.map((cat, i) => (
               <motion.div 
                 key={cat.id}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: i * 0.1 }}
                 viewport={{ once: true }}
                 className={`relative rounded-[30px] p-8 overflow-hidden group cursor-pointer ${cat.size} ${cat.themeColor} ${cat.textColor} ${cat.border || ''} shadow-lg hover:shadow-2xl transition-all duration-500`}
               >
                   {/* Content */}
                   <div className="relative z-20 flex flex-col h-full justify-between pointer-events-none">
                       {/* Header stays top-left usually, unless constrained, but for Bento cards top-left is standard safe zone */}
                       <div className="max-w-[70%]"> 
                           <h3 className="text-2xl md:text-3xl font-bold mb-2">{cat.title}</h3>
                           <p className={`opacity-80 font-medium ${cat.textColor === 'text-white' ? 'text-white/80' : 'text-gray-600'}`}>{cat.subtitle}</p>
                       </div>
                       
                       {/* Button default bottom-left. For 'Gato' (Left Image), we might want to push it right? 
                           For now, keeping it standard. The image z-index is lower or parallel. 
                       */}
                       <div className={`flex items-center gap-2 font-bold group-hover:gap-4 transition-all ${cat.id === 2 ? 'self-end' : ''}`}> 
                           <span>Ver Más</span>
                           <div className={`p-1 rounded-full ${cat.textColor === 'text-white' ? 'bg-white/20' : 'bg-black/5'}`}>
                               <ArrowRight className="w-4 h-4" />
                           </div>
                       </div>
                   </div>

                   {/* Image Wrapper - Positioned by imgConfig */}
                   {/* We remove right-0/bottom-0 hard constraints and use flex container to position the image inside the w-full h-full absolute layer */}
                   <div className={`absolute inset-0 z-10 flex ${cat.imgConfig || 'justify-end items-end'} pointer-events-none`}>
                        <div className="relative w-[90%] h-[90%] transition-transform duration-500 group-hover:scale-105">
                             <Image 
                                src={cat.image}
                                alt={cat.title}
                                fill
                                className={`object-contain ${cat.id === 2 ? 'object-bottom-left' : 'object-bottom-right'}`}
                                unoptimized 
                            />
                        </div>
                   </div>

                   {/* Abstract Shapes */}
                   <div className={`absolute -bottom-10 -right-10 w-48 h-48 rounded-full blur-2xl opacity-50 mix-blend-overlay ${cat.id % 2 === 0 ? 'bg-white' : 'bg-black/10'}`}></div>
                   
                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 z-1 pointer-events-none"></div>
               </motion.div>
           ))}
       </div>
    </section>
  );
}
