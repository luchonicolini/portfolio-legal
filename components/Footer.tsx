import React from 'react';
import { Mail, MapPin, Linkedin, ArrowUp, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-navy text-slate-300 border-t-4 border-brand-gold">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          
          {/* Column 1: Identity & Brand */}
          <div className="space-y-6">
            <div>
              <span className="font-serif text-2xl text-white tracking-widest font-bold border-2 border-white px-2 py-1 inline-block">
                M.D.C.
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed font-light max-w-xs">
              Servicios notariales de excelencia, asesoría corporativa estratégica y consultoría gubernamental con más de 25 años de trayectoria.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-serif text-white text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-brand-gold"></span> Navegación
            </h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#inicio" className="hover:text-brand-gold transition-colors flex items-center gap-2">Inicio</a></li>
              <li><a href="#acerca" className="hover:text-brand-gold transition-colors flex items-center gap-2">Acerca de Mí</a></li>
              <li><a href="#experiencia" className="hover:text-brand-gold transition-colors flex items-center gap-2">Experiencia Profesional</a></li>
              <li><a href="#habilidades" className="hover:text-brand-gold transition-colors flex items-center gap-2">Servicios Clave</a></li>
              <li><a href="#contacto" className="hover:text-brand-gold transition-colors flex items-center gap-2">Contacto</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="font-serif text-white text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-brand-gold"></span> Contacto
            </h4>
            <ul className="space-y-4 text-sm font-light">
               <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-gold mt-1 shrink-0" />
                <span>Buenos Aires, Corrientes & Mendoza.<br/><span className="text-xs text-slate-500">Argentina.</span></span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-gold shrink-0" />
                <a href="mailto:contacto@mdc-legal.com" className="hover:text-white transition-colors">contacto@mdc-legal.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-gold shrink-0" />
                <span>+54 9 (Consultas por Web)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright */}
      <div className="border-t border-white/10 bg-slate-900/50">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} María de las Mercedes Díaz Colodrero. Todos los derechos reservados.</p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-brand-gold transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Aviso Legal</a>
            <button 
              onClick={scrollToTop} 
              className="flex items-center gap-1 hover:text-white transition-colors ml-4 uppercase tracking-wider font-bold"
            >
              Subir <ArrowUp size={12} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;