"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, X, Plus, Check, PaintBucket, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PaletteData {
  id: string;
  name: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    [key: string]: string;
  };
}

interface PaletteDrawerProps {
  palettes: PaletteData[];
  currentPalette: PaletteData;
  onSelect: (palette: PaletteData) => void;
}

export function PaletteDrawer({ palettes, currentPalette, onSelect }: PaletteDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'all' | 'favorites'>('all');

  const toggleFavorite = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(favId => favId !== id)
        : [...prev, id]
    );
  };

  const filteredPalettes = activeTab === 'all' 
    ? palettes 
    : palettes.filter(p => favorites.includes(p.id));

  return (
    <>
       {/* Floating Trigger Button (Bottom Left) */}
       <motion.button
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}
         onClick={() => setIsOpen(true)}
         className="fixed bottom-8 left-8 z-40 bg-white text-gray-800 p-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 hover:shadow-2xl transition-all group"
         title="Cambiar Paleta de Colores"
       >
         <Palette className="w-6 h-6 group-hover:text-[#2CB5A0] transition-colors" />
         <span className="sr-only">Abrir Paletas</span>
       </motion.button>

       {/* Drawer Overlay */}
       {/* Backdrop */}
       <AnimatePresence>
         {isOpen && (
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             onClick={() => setIsOpen(false)}
             className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60]"
           />
         )}
       </AnimatePresence>

       {/* Sidebar (Left) - Always mounted to preserve scroll */}
       <motion.div
         initial={{ x: "-100%" }}
         animate={{ x: isOpen ? 0 : "-100%" }}
         transition={{ type: "spring", damping: 25, stiffness: 300 }}
         className="fixed top-0 left-0 h-full w-[380px] bg-[#FAF9F6] z-[70] shadow-2xl overflow-y-auto"
       >
                {/* Header */}
                <div className="p-6 pb-2 flex items-center justify-between sticky top-0 bg-[#FAF9F6] z-30">
                   <div>
                     <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">Estilos</h2>
                     <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">Selecciona tu vibra</p>
                   </div>
                   <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="rounded-full hover:bg-gray-200">
                     <X className="w-5 h-5 text-gray-500" />
                   </Button>
                </div>

                {/* Tabs */}
                <div className="px-6 mb-6 sticky top-[88px] bg-[#FAF9F6] z-30 pb-4">
                  <div className="flex p-1 bg-gray-100 rounded-xl">
                    <button
                      onClick={() => setActiveTab('all')}
                      className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
                        activeTab === 'all' 
                          ? 'bg-white text-gray-900 shadow-sm' 
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      Mis Estilos
                    </button>
                    <button
                      onClick={() => setActiveTab('favorites')}
                      className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all flex items-center justify-center gap-2 ${
                        activeTab === 'favorites' 
                          ? 'bg-white text-rose-500 shadow-sm' 
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      <span>Favoritos</span>
                      {favorites.length > 0 && (
                        <span className="bg-rose-100 text-rose-600 text-[10px] px-1.5 py-0.5 rounded-full">
                          {favorites.length}
                        </span>
                      )}
                    </button>
                  </div>
                </div>

                {/* Main Content */}
                <div className="px-6 pb-20">
                   {/* Palettes List */}
                   <div className="flex flex-col gap-4">
                      {filteredPalettes.length === 0 ? (
                        <div className="text-center py-10 opacity-50">
                          {activeTab === 'favorites' ? (
                            <>
                              <Heart className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                              <p className="text-sm text-gray-500">No tienes favoritos aún</p>
                            </>
                          ) : (
                            <p className="text-sm text-gray-500">No se encontraron paletas</p>
                          )}
                        </div>
                      ) : (
                        filteredPalettes.map((p) => {
                          const isActive = currentPalette.id === p.id;
                          const isFavorite = favorites.includes(p.id);
                          const colors = [p.colors.primary, p.colors.secondary, p.colors.accent, p.colors.background, p.colors.text];

                          return (
                            <motion.div 
                              key={p.id}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => onSelect(p)}
                              className={`cursor-pointer group relative overflow-hidden rounded-2xl border-2 transition-all duration-300 p-1 ${
                                isActive 
                                  ? 'border-[#2CB5A0] bg-white shadow-xl' 
                                  : 'border-transparent bg-white shadow-sm hover:shadow-md'
                              }`}
                            >
                               <div className="p-4 bg-gray-50/50 rounded-xl relative">
                                  <div className="absolute top-3 right-3 flex gap-2 z-20">
                                    {/* Favorite Button */}
                                    <button
                                      onClick={(e) => toggleFavorite(e, p.id)}
                                      className={`p-2 rounded-full transition-all duration-200 shadow-sm ${
                                        isFavorite 
                                          ? 'bg-rose-100 text-rose-500 hover:bg-rose-200' 
                                          : 'bg-gray-200 text-gray-500 hover:text-gray-700 hover:bg-gray-300 border border-transparent'
                                      }`}
                                      title={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
                                    >
                                      <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
                                    </button>
                                    
                                    {/* Active Check */}
                                    {isActive && (
                                       <div className="bg-[#2CB5A0] text-white p-1 rounded-full shadow-sm">
                                           <Check className="w-3 h-3" />
                                       </div>
                                    )}
                                  </div>

                                  {/* Color Circles Row */}
                                  <div className="flex items-center justify-center gap-[-8px] mb-4 mt-2">
                                     {colors.map((c, i) => (
                                       <div 
                                         key={i} 
                                         className="w-10 h-10 rounded-full border-2 border-white shadow-sm z-10 transition-transform hover:-translate-y-1 hover:z-20" 
                                         style={{ 
                                            backgroundColor: c, 
                                            marginLeft: i > 0 ? '-12px' : '0' 
                                         }}
                                       />
                                     ))}
                                  </div>

                                  {/* Name */}
                                  <div className="text-center">
                                     <span className={`text-sm font-bold uppercase tracking-widest ${isActive ? 'text-gray-900' : 'text-gray-500 group-hover:text-gray-700'}`}>
                                       {p.name}
                                     </span>
                                  </div>
                               </div>
                            </motion.div>
                          );
                      })
                      )}
                   </div>
                </div>

             </motion.div>
    </>
  );
}
