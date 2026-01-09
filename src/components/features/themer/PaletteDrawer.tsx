"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, X, Plus, Check, PaintBucket } from "lucide-react";
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
  // We can accept a ReactNode for the "Add Color" logic (AdobeColorImport) 
  // or a handler if we want to separate it. For now, let's allow passing children 
  // which can be the hidden/visible import component.
  children?: React.ReactNode; 
}

export function PaletteDrawer({ palettes, currentPalette, onSelect, children }: PaletteDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);

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
       <AnimatePresence>
         {isOpen && (
           <>
             {/* Backdrop */}
             <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               onClick={() => setIsOpen(false)}
               className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60]"
             />

             {/* Sidebar (Left) */}
             <motion.div
               initial={{ x: "-100%" }}
               animate={{ x: 0 }}
               exit={{ x: "-100%" }}
               transition={{ type: "spring", damping: 25, stiffness: 300 }}
               className="fixed top-0 left-0 h-full w-[380px] bg-[#FAF9F6] z-[70] shadow-2xl overflow-y-auto"
             >
                {/* Header */}
                <div className="p-6 pb-4 flex items-center justify-between sticky top-0 bg-[#FAF9F6]/95 backdrop-blur z-10">
                   <div>
                     <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">Estilos</h2>
                     <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">Selecciona tu vibra</p>
                   </div>
                   <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="rounded-full hover:bg-gray-200">
                     <X className="w-5 h-5 text-gray-500" />
                   </Button>
                </div>

                {/* Main Content */}
                <div className="px-6 pb-20">
                    
                    {/* "Add Color" Section - Passing the AdobeColorImport as children or creating a visual button for it */}
                    {children && (
                        <div className="mb-8">
                             {/* Wrapper to make the passed component look integrated if needed, 
                                 or assuming children is the AdobeColorImport component 
                              */}
                             {children}
                        </div>
                    )}
                    
                    {/* Visual Separator */}
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-px bg-gray-200 flex-1"></div>
                        <span className="text-xs text-gray-400 font-bold uppercase">Mis Paletas</span>
                        <div className="h-px bg-gray-200 flex-1"></div>
                    </div>

                   {/* Palettes List */}
                   <div className="flex flex-col gap-4">
                      {palettes.map((p) => {
                          const isActive = currentPalette.id === p.id;
                          const colors = [p.colors.primary, p.colors.secondary, p.colors.accent, p.colors.background, p.colors.text];

                          return (
                            <motion.div 
                              key={p.id}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => {
                                  onSelect(p);
                                  // Optional: close on select? User might want to browse. Let's keep open.
                              }}
                              className={`cursor-pointer group relative overflow-hidden rounded-2xl border-2 transition-all duration-300 p-1 ${
                                isActive 
                                  ? 'border-[#2CB5A0] bg-white shadow-xl' 
                                  : 'border-transparent bg-white shadow-sm hover:shadow-md'
                              }`}
                            >
                               <div className="p-4 bg-gray-50/50 rounded-xl relative">
                                  {/* Active Check */}
                                  {isActive && (
                                     <div className="absolute top-3 right-3 bg-[#2CB5A0] text-white p-1 rounded-full shadow-sm">
                                         <Check className="w-3 h-3" />
                                     </div>
                                  )}

                                  {/* Color Circles Row */}
                                  <div className="flex items-center justify-center gap-[-8px] mb-4">
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
                      })}
                   </div>
                </div>

             </motion.div>
           </>
         )}
       </AnimatePresence>
    </>
  );
}
