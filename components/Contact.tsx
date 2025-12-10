import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle, Loader2, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    fax: '' // Honeypot field
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [emailError, setEmailError] = useState<string | null>(null);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot Check: If the hidden 'fax' field is filled, it's a bot.
    // We simulate success to confuse the bot, but don't send anything.
    if (formData.fax) {
        setStatus('success');
        setTimeout(() => {
            setFormData({ name: '', email: '', phone: '', subject: '', message: '', fax: '' });
            setStatus('idle');
        }, 1500);
        return;
    }

    if (!validateEmail(formData.email)) {
        setEmailError('Por favor, introduzca una dirección de correo válida.');
        return;
    }

    setStatus('sending');
    
    // Simulating asynchronous API call
    setTimeout(() => {
      setStatus('success');
      // We don't auto-reset to 'idle' anymore, we let the user choose to send another message
      // But we do clear the data in the background
      setFormData({ name: '', email: '', phone: '', subject: '', message: '', fax: '' });
      setEmailError(null);
    }, 1500);
  };

  const handleReset = () => {
    setStatus('idle');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));

    if (e.target.name === 'email') {
        setEmailError(null);
    }
  };

  return (
    <section id="contacto" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300 border-t border-slate-100 dark:border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column: Context & Info */}
            <div className="space-y-8 animate-fade-in-left">
                <div>
                    <span className="text-brand-gold font-bold tracking-[0.2em] text-xs uppercase mb-2 block">
                        Contacto Directo
                    </span>
                    <h2 className="font-serif text-4xl text-brand-navy dark:text-slate-100 mb-6 leading-tight">
                        Comencemos una <br/>Conversación
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-light">
                        Estoy disponible para asesorías presenciales y consultas virtuales. Si busca excelencia jurídica, seguridad notarial y una visión estratégica para sus asuntos, no dude en contactarme.
                    </p>
                </div>

                <div className="space-y-8 pt-6">
                    <div className="flex items-start gap-5 group">
                        <div className="p-4 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-full text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all duration-300 shadow-sm">
                            <Mail className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-serif text-brand-navy dark:text-slate-200 font-bold text-lg mb-1">Correo Electrónico</h4>
                            <a href="mailto:contacto@mdc-legal.com" className="text-slate-600 dark:text-slate-400 hover:text-brand-gold transition-colors block">
                                contacto@mdc-legal.com
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start gap-5 group">
                         <div className="p-4 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-full text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all duration-300 shadow-sm">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-serif text-brand-navy dark:text-slate-200 font-bold text-lg mb-1">Ubicación</h4>
                            <p className="text-slate-600 dark:text-slate-400">
                                Buenos Aires | Corrientes | Mendoza
                            </p>
                            <span className="text-xs text-slate-500 italic mt-1 block">Disponibilidad para traslados nacionales.</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column: Interactive Form or Success View */}
            <div className="bg-slate-50 dark:bg-slate-900 p-8 md:p-10 rounded-sm border border-slate-100 dark:border-slate-800 shadow-lg animate-fade-in-right relative overflow-hidden min-h-[600px] flex flex-col justify-center">
                {/* Decorative top border */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-navy via-brand-gold to-brand-navy"></div>
                
                {status === 'success' ? (
                    <div className="flex flex-col items-center justify-center text-center animate-fade-in-up">
                        <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6 text-green-600 dark:text-green-400 shadow-sm">
                           <CheckCircle className="w-10 h-10" />
                        </div>
                        <h3 className="font-serif text-3xl text-brand-navy dark:text-slate-100 mb-4">¡Mensaje Enviado!</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-xs mx-auto text-lg">
                           Gracias por su consulta. He recibido su mensaje correctamente y me pondré en contacto con usted a la brevedad.
                        </p>
                        <button 
                           onClick={handleReset}
                           className="px-8 py-3 bg-brand-navy dark:bg-slate-800 text-white border border-transparent hover:bg-brand-gold hover:text-white transition-all duration-300 rounded-sm uppercase tracking-widest text-xs font-bold"
                        >
                           Enviar nueva consulta
                        </button>
                    </div>
                ) : (
                    <>
                        <h3 className="font-serif text-2xl text-brand-navy dark:text-slate-100 mb-6">Envíe su Consulta</h3>
                        
                        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                            {/* Honeypot Field - Hidden from humans, visible to bots */}
                            <div className="hidden">
                                <label htmlFor="fax">Fax (Do not fill)</label>
                                <input 
                                    type="text" 
                                    id="fax" 
                                    name="fax" 
                                    value={formData.fax} 
                                    onChange={handleChange} 
                                    tabIndex={-1} 
                                    autoComplete="off"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-xs font-bold text-brand-navy dark:text-slate-300 uppercase tracking-wider">Nombre Completo</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        name="name" 
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-brand-navy dark:text-slate-100 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all duration-300 placeholder:text-slate-400/70 rounded-sm hover:border-brand-gold/50 hover:shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700/50"
                                        placeholder="Su nombre"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-xs font-bold text-brand-navy dark:text-slate-300 uppercase tracking-wider">Teléfono (Opcional)</label>
                                    <div className="relative">
                                        <input 
                                            type="tel" 
                                            id="phone" 
                                            name="phone" 
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 pl-10 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-brand-navy dark:text-slate-100 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all duration-300 placeholder:text-slate-400/70 rounded-sm hover:border-brand-gold/50 hover:shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700/50"
                                            placeholder="+54 9 ..."
                                        />
                                        <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-xs font-bold text-brand-navy dark:text-slate-300 uppercase tracking-wider">Email de Contacto</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 bg-white dark:bg-slate-800 border ${emailError ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-slate-700 focus:border-brand-gold focus:ring-brand-gold'} text-brand-navy dark:text-slate-100 focus:ring-1 outline-none transition-all duration-300 placeholder:text-slate-400/70 rounded-sm hover:border-brand-gold/50 hover:shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700/50`}
                                    placeholder="correo@ejemplo.com"
                                />
                                {emailError && <p className="text-red-500 text-xs mt-1 animate-fade-in-up">{emailError}</p>}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-xs font-bold text-brand-navy dark:text-slate-300 uppercase tracking-wider">Servicio de Interés</label>
                                <div className="relative">
                                    <select 
                                        id="subject" 
                                        name="subject" 
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-brand-navy dark:text-slate-100 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all duration-300 appearance-none cursor-pointer rounded-sm hover:border-brand-gold/50 hover:shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700/50"
                                    >
                                        <option value="" disabled>Seleccione una opción</option>
                                        <option value="Asesoría Notarial">Asesoría Notarial</option>
                                        <option value="Consultoría Corporativa">Consultoría Corporativa</option>
                                        <option value="Planificación Sucesoria">Planificación Sucesoria</option>
                                        <option value="Asesoría Gubernamental">Asesoría Gubernamental</option>
                                        <option value="Otro">Otro</option>
                                    </select>
                                    {/* Custom Arrow */}
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-brand-navy dark:text-slate-400">
                                        <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-xs font-bold text-brand-navy dark:text-slate-300 uppercase tracking-wider">Mensaje</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    rows={4}
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-brand-navy dark:text-slate-100 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all duration-300 placeholder:text-slate-400/70 resize-none rounded-sm hover:border-brand-gold/50 hover:shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700/50"
                                    placeholder="Describa brevemente cómo puedo ayudarle..."
                                ></textarea>
                            </div>

                            <button 
                                type="submit" 
                                disabled={status !== 'idle'}
                                className={`w-full py-4 px-6 text-white uppercase tracking-[0.2em] font-bold text-sm transition-all duration-300 flex items-center justify-center gap-3 shadow-md hover:shadow-xl rounded-sm active:scale-95
                                    ${status === 'sending' ? 'bg-slate-700 cursor-wait opacity-90' : 'bg-slate-900 dark:bg-brand-gold dark:text-brand-navy hover:bg-brand-navy dark:hover:bg-white border border-transparent hover:-translate-y-1 hover:scale-[1.02]'}
                                `}
                            >
                                {status === 'idle' && (
                                    <>
                                        Enviar Mensaje <Send className="w-4 h-4" />
                                    </>
                                )}
                                {status === 'sending' && (
                                    <>
                                        Procesando... <Loader2 className="w-4 h-4 animate-spin" />
                                    </>
                                )}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;