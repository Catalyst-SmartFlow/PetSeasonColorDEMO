"use client";

import { Facebook, Instagram, Twitter, Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="w-full mt-24">
      {/* Wave Transition - Stacked on top */}
      <div className="w-full h-[100px] overflow-hidden leading-[0] rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-full fill-[var(--text-main)] opacity-100">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
      
      {/* Main Footer Content - Solid Background */}
      <div className="bg-[var(--text-main)] text-[var(--surface)]/80 pt-8 pb-12">
        <div className="container mx-auto px-4 relative z-10">
        
        {/* Top Section: Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Brand Column */}
            <div className="space-y-6">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-[var(--primary)] rounded-full flex items-center justify-center text-[var(--surface)]">
                         {/* Simple Logo Icon */}
                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 5.172C10 5.172 19.657 8.657 19.657 18.657C19.657 18.657 20.314 5.657 10 2C10 2 0.686 5.657 0.686 18.657C0.686 18.657 0.686 8.657 10 5.172Z"/></svg>
                    </div>
                    <span className="text-2xl font-bold text-[var(--surface)]">PetSeason</span>
                </div>
                <p className="leading-relaxed">
                    Hacemos que la vida de tu mascota sea más colorida y feliz. Productos premium con un estilo único para cada temporada.
                </p>
                <div className="flex gap-4">
                    <SocialIcon icon={<Facebook size={18} />} />
                    <SocialIcon icon={<Instagram size={18} />} />
                    <SocialIcon icon={<Twitter size={18} />} />
                </div>
            </div>

            {/* Links Column */}
            <div>
                <h4 className="text-[var(--surface)] font-bold text-lg mb-6">Explorar</h4>
                <ul className="space-y-4">
                    <FooterLink>Tienda</FooterLink>
                    <FooterLink>Ofertas</FooterLink>
                    <FooterLink>Nuevos Arribos</FooterLink>
                    <FooterLink>Blog de Mascotas</FooterLink>
                </ul>
            </div>

            {/* Support Column */}
            <div>
                <h4 className="text-[var(--surface)] font-bold text-lg mb-6">Ayuda</h4>
                <ul className="space-y-4">
                    <FooterLink>Envíos y Devoluciones</FooterLink>
                    <FooterLink>Preguntas Frecuentes</FooterLink>
                    <FooterLink>Rastrea tu Orden</FooterLink>
                    <FooterLink>Contáctanos</FooterLink>
                </ul>
            </div>

            {/* Newsletter Column */}
            <div>
                <h4 className="text-[var(--surface)] font-bold text-lg mb-6">Suscríbete</h4>
                <p className="mb-6 text-sm">Recibe las últimas noticias y códigos de descuento exclusivos.</p>
                <div className="space-y-3">
                    <input 
                        type="email" 
                        placeholder="Tu correo electrónico" 
                        className="w-full h-12 px-4 rounded-xl bg-[var(--surface)]/10 border border-[var(--surface)]/10 focus:border-[var(--primary)] outline-none text-[var(--surface)] placeholder-[var(--surface)]/50 transition-colors"
                    />
                    <Button className="w-full bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-[var(--surface)] font-bold h-12 rounded-xl">
                        Suscribirse <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </div>
            </div>

        </div>

        <div className="border-t border-[var(--surface)]/10 pt-8 pb-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>&copy; {new Date().getFullYear()} PetSeason. Todos los derechos reservados.</p>
            <div className="flex gap-6">
                <a href="#" className="hover:text-[var(--primary)] transition-colors">Privacidad</a>
                <a href="#" className="hover:text-[var(--primary)] transition-colors">Términos</a>
            </div>
        </div>
        
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
    return (
        <a href="#" className="w-10 h-10 rounded-full bg-[var(--surface)]/10 flex items-center justify-center hover:bg-[var(--primary)] hover:text-[var(--surface)] transition-all duration-300">
            {icon}
        </a>
    )
}

function FooterLink({ children }: { children: React.ReactNode }) {
    return (
        <li>
            <a href="#" className="hover:text-[var(--primary)] hover:translate-x-1 inline-block transition-all duration-300">
                {children}
            </a>
        </li>
    )
}
