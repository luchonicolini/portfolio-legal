import React from 'react';
import { BookOpen, ScrollText, PenTool } from 'lucide-react';
import { motion } from 'framer-motion';

const publications = [
    {
        id: 1,
        title: "Registración de Buques y Aeronaves",
        type: "Ensayo Jurídico",
        year: "1995 (Actualizado 2010)",
        publisher: "Revista Notarial de la Provincia de Corrientes",
        description: "Análisis técnico y normativo sobre la inscripción y regulación dominial de buques y aeronaves, un referente en derecho registral especializado.",
        icon: BookOpen
    },
    {
        id: 2,
        title: "Fábulas y Leyendas Guaraníes",
        type: "Investigación Histórica-Cultural",
        year: "1992 - Actualidad",
        publisher: "Revistas 'Argentina Señorío y Esplendor' & 'Rumbos'",
        description: "Serie de artículos de divulgación sobre el acervo cultural del litoral, rescatando mitos, historias y el patrimonio intangible de la región.",
        icon: ScrollText
    },
    {
        id: 3,
        title: "El Catastro y la Ley 17.801",
        type: "Publicación Técnica",
        year: "Varios Períodos",
        publisher: "Jornadas Notariales",
        description: "Estudios sobre la dinámica registral, calificación de documentos y la interacción entre el catastro territorial y la seguridad jurídica inmobiliaria.",
        icon: PenTool
    }
];

const Publications: React.FC = () => {
    return (
        <section className="py-24 bg-brand-cream/20 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 relative overflow-hidden">
            <div className="container mx-auto px-6">

                <div className="text-center mb-16">
                    <span className="text-brand-gold font-bold tracking-[0.2em] text-xs uppercase mb-2 block">
                        Producción Intelectual
                    </span>
                    <h2 className="font-serif text-3xl md:text-4xl text-brand-navy dark:text-slate-100 mb-6 transition-colors">
                        Publicaciones & Ensayos
                    </h2>
                    <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                        Aportes al pensamiento jurídico y cultural, reflejando el compromiso con la excelencia académica y la identidad regional.
                    </p>
                    <div className="w-16 h-0.5 bg-brand-gold mx-auto mt-8"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {publications.map((pub, index) => (
                        <motion.div
                            key={pub.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-8 rounded-sm hover:shadow-xl hover:border-brand-gold/50 transition-all duration-300 relative flex flex-col"
                        >
                            {/* Decorative corner */}
                            <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                                <div className="absolute top-0 right-0 w-[200%] h-[200%] bg-brand-cream dark:bg-slate-700 origin-bottom-left rotate-45 translate-x-1/2 -translate-y-1/2 group-hover:bg-brand-gold transition-colors duration-300"></div>
                            </div>

                            <div className="mb-6 text-brand-navy dark:text-slate-200 group-hover:text-brand-gold transition-colors">
                                <pub.icon className="w-8 h-8" strokeWidth={1.5} />
                            </div>

                            <div className="mb-4">
                                <span className="text-xs font-bold text-brand-gold uppercase tracking-wider mb-2 block">
                                    {pub.type}
                                </span>
                                <h3 className="font-serif text-xl text-brand-navy dark:text-slate-100 leading-tight group-hover:underline decoration-brand-gold underline-offset-4 decoration-1 transition-all">
                                    {pub.title}
                                </h3>
                            </div>

                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                                {pub.description}
                            </p>

                            <div className="pt-6 border-t border-slate-100 dark:border-slate-700 mt-auto">
                                <div className="flex flex-col gap-1 text-xs text-slate-500 dark:text-slate-500 font-medium">
                                    <span className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                                        {pub.publisher}
                                    </span>
                                    <span className="pl-3.5 italic opacity-80">{pub.year}</span>
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Publications;
