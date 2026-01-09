"use client";

import Image from 'next/image';
import React from 'react';

interface HeroProps {
  primaryColor: string;
}

export default function Hero({ primaryColor }: HeroProps) {
  return (
    <section 
        className="relative w-full min-h-[600px] flex items-center overflow-hidden pt-20 pb-20 md:pt-24 md:pb-24 lg:pt-32"
        style={{ backgroundColor: primaryColor }}
    >
       {/* Organic Background Shape/Cutout - Integrating the image */}
       {/* This white/light shape sits behind the text or curves around the image */}
       <div 
        className="absolute top-0 right-0 w-[70%] h-full z-0 hidden lg:block"
        style={{
            background: 'radial-gradient(circle at 70% 50%, rgba(255,255,255,0.1) 0%, transparent 60%)',
        }}
       />
       
       {/* SVG Wave/Curve masking the transition if needed, or just a decorative blob behind the dog */}
       <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
        
        {/* Left Content - Image (Now on Left as per reference style) */}
        <div className="relative flex justify-center lg:justify-start items-center order-2 lg:order-1 mt-12 lg:mt-0">
             {/* Decorative Blob specifically for the dog to "pop" out of */}
            <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] md:w-[450px] md:h-[450px] bg-white rounded-full mix-blend-overlay opacity-20 filter blur-sm"
                style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }} // Organic blob shape
            />
            
            {/* The Dog Image - Larger and interacting with the space */}
            <div className="relative w-[350px] h-[350px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] transform lg:-translate-x-10">
                 <Image
                    src="/images/hero_dog.png"
                    alt="Happy Dog"
                    fill
                    className="object-contain drop-shadow-2xl z-10"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                 />
            </div>
        </div>

        {/* Right Content - Text (Now on Right as per reference style) */}
        <div className="text-white space-y-6 order-1 lg:order-2 text-center lg:text-right">
            <div className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-sm font-extrabold tracking-wider uppercase mb-2"> 
                MUNDO MÁGICO DE LA MASCOTA
            </div>
            
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
             Cada mes <br className="hidden lg:block" />
             realizamos nuestra <br className="hidden lg:block" />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-yellow-300 drop-shadow-sm">
                JORNADA DE ADOPCIONES!
             </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 font-medium max-w-xl ml-auto mr-auto lg:mr-0">
            Trabajando con las fundaciones para buscarle hogar a los animalitos de la calle.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end pt-6">
             <button className="px-8 py-4 bg-white text-[var(--primary)] text-lg font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Conoce más
             </button>
             <button className="px-8 py-4 bg-orange-500 text-white text-lg font-bold rounded-full shadow-xl hover:bg-orange-600 hover:shadow-2xl hover:scale-105 transition-all duration-300 ring-4 ring-orange-400/30">
                ¡Dona ahora!
             </button>
          </div>
          
           <div className="pt-8 flex flex-col items-center lg:items-end">
            <p className="font-bold text-sm opacity-80 mb-3 uppercase tracking-widest">Síguenos en nuestras redes</p>
            <div className="flex gap-4">
                <div className="w-12 h-12 bg-white text-[var(--primary)] rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 transition shadow-lg font-bold text-xl">
                    IG
                </div>
                <div className="w-12 h-12 bg-white text-[var(--primary)] rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 transition shadow-lg font-bold text-xl">
                     FB
                </div>
            </div>
           </div>
        </div>
      </div>
      
       {/* Decorative Elements mimicking the reference style */}
       <div className="absolute top-10 right-10 w-24 h-24 bg-orange-400 rounded-full blur-2xl opacity-40 animate-pulse" />
       <div className="absolute bottom-20 left-10 w-32 h-32 bg-yellow-300 rounded-full blur-3xl opacity-30" />
    </section>
  );
}
