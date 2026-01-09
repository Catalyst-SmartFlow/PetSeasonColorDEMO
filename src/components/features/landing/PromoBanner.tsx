import { motion } from "framer-motion";
import { Timer, PawPrint } from "lucide-react";
import { Button } from "@/components/ui/button";

// Deterministic paw positions to avoid hydration mismatch
const pawPositions = [
    { top: "10%", left: "5%", scale: 0.8, size: 120, delay: 0 },
    { top: "60%", left: "15%", scale: 1.1, size: 160, delay: 1.5 },
    { top: "20%", left: "80%", scale: 0.6, size: 100, delay: 3 },
    { top: "75%", left: "70%", scale: 0.9, size: 140, delay: 0.5 },
    { top: "40%", left: "90%", scale: 1.2, size: 180, delay: 2.2 },
    { top: "15%", left: "40%", scale: 0.7, size: 110, delay: 4 },
];

function PawPattern() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-30">
            {pawPositions.map((paw, i) => (
                <motion.div
                    key={i}
                    className="absolute text-white"
                    initial={{ opacity: 0, rotate: 0 }}
                    animate={{ 
                        opacity: [0.4, 0.9, 0.4], 
                        y: [0, -20, 0],
                        rotate: [0, 10, -10, 0]
                    }}
                    transition={{ 
                        duration: 5 + i, 
                        repeat: Infinity, 
                        delay: paw.delay,
                        ease: "easeInOut" 
                    }}
                    style={{
                        top: paw.top,
                        left: paw.left,
                        transform: `scale(${paw.scale})`
                    }}
                >
                    <PawPrint size={paw.size} />
                </motion.div>
            ))}
        </div>
    );
}

export function PromoBanner() {
  return (
    <section className="w-full py-20 px-4 relative overflow-hidden my-12">
        {/* Dynamic Gradient Background with Paw Pattern */}
        {/* Simplified directly to 2 colors as requested: from Primary to Secondary */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] opacity-95 transition-colors duration-500"></div>
        <PawPattern />
        
        {/* Grain Overlay for Texture */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIi8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAiIG9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')" }}></div>

        <div className="container mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
            
            <div className="text-center md:text-left max-w-2xl relative">
                {/* Decorative Paw Logo behind text? Maybe subtle */}
                
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-2 rounded-full mb-6 border border-white/10 shadow-lg">
                    <Timer className="w-5 h-5 text-yellow-300" />
                    <span className="text-sm font-bold uppercase tracking-wider text-white">Oferta Limitada</span>
                </div>
                
                <h2 className="text-5xl md:text-7xl font-black mb-6 leading-[1.1] drop-shadow-lg">
                    Hasta <span className="text-yellow-300 relative inline-block">
                        50% OFF
                        <svg className="absolute -bottom-2 w-full h-3 text-white" viewBox="0 0 100 10" preserveAspectRatio="none">
                             <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                        </svg>
                    </span> <br/>
                    en Alimentos
                </h2>
                
                <p className="text-xl md:text-2xl text-white/90 max-w-lg leading-relaxed font-medium">
                    Renueva su dieta con los mejores ingredientes naturales. <span className="text-yellow-200 font-bold">¡Solo por esta semana!</span>
                </p>
            </div>

            {/* Premium Countdown Card */}
            <motion.div 
               whileHover={{ y: -5 }}
               className="bg-white/95 backdrop-blur-xl text-[var(--text-main)] p-8 md:p-10 rounded-[2.5rem] shadow-2xl text-center min-w-[320px] relative overflow-hidden border border-white/50"
            >
                {/* Top Shine */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

                <div className="flex items-center justify-center gap-2 text-gray-400 font-bold uppercase mb-6 tracking-widest text-xs">
                    <PawPrint className="w-3 h-3 text-[var(--primary)]" />
                    Termina en
                    <PawPrint className="w-3 h-3 text-[var(--primary)]" />
                </div>

                <div className="flex items-center justify-center gap-4 text-5xl md:text-6xl font-black tabular-nums text-[var(--text-main)] mb-2">
                    <div className="flex flex-col items-center">
                        <span className="tracking-tighter">04</span>
                        <p className="text-[10px] text-gray-400 font-bold mt-1">HRS</p>
                    </div>
                    <span className="text-[var(--primary)] -mt-4">:</span>
                    <div className="flex flex-col items-center">
                        <span className="tracking-tighter">32</span>
                        <p className="text-[10px] text-gray-400 font-bold mt-1">MIN</p>
                    </div>
                    <span className="text-[var(--primary)] -mt-4">:</span>
                    <div className="flex flex-col items-center">
                        <span className="tracking-tighter text-[var(--accent)]">18</span>
                        <p className="text-[10px] text-gray-400 font-bold mt-1">SEG</p>
                    </div>
                </div>
                
                <Button className="w-full mt-8 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] hover:brightness-110 text-white font-extrabold h-14 rounded-2xl text-lg shadow-xl shadow-[var(--primary)]/20 transition-all duration-300">
                    ¡Lo Quiero! <PawPrint className="w-5 h-5 ml-2 fill-white/20" />
                </Button>
            </motion.div>

        </div>
    </section>
  );
}
