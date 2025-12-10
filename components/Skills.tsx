import React from 'react';
import { ScrollText, Briefcase, FileSignature, Users, Landmark, Target } from 'lucide-react';

const skills = [
  { id: 1, title: 'Derecho Notarial', description: 'Escrituración y seguridad jurídica.', icon: ScrollText },
  { id: 2, title: 'Asesoría Corporativa', description: 'Compliance y contratos.', icon: Briefcase },
  { id: 3, title: 'Planificación Sucesoria', description: 'Protección de activos.', icon: FileSignature },
  { id: 4, title: 'Docencia Universitaria', description: 'Formación académica superior.', icon: Users },
  { id: 5, title: 'Gestión de Registros', description: 'Función fedataria pública.', icon: Landmark },
  { id: 6, title: 'Planeamiento Estratégico', description: 'Dirección y liderazgo.', icon: Target },
];

const Skills: React.FC = () => {
  return (
    <section id="habilidades" className="py-24 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-gold font-bold tracking-[0.2em] text-xs uppercase mb-2 block">
            Servicios & Habilidades
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-navy dark:text-slate-100 transition-colors">
            Expertise Profesional
          </h2>
          <div className="w-16 h-0.5 bg-brand-gold mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div 
              key={skill.id} 
              className="group p-6 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-brand-gold/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-start gap-4 cursor-default"
            >
              <div className="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-full border border-slate-100 dark:border-slate-600 group-hover:border-brand-gold group-hover:text-brand-gold transition-colors text-brand-navy dark:text-slate-200 shrink-0">
                <skill.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-lg text-brand-navy dark:text-slate-200 group-hover:text-slate-800 dark:group-hover:text-white transition-colors mb-1">
                  {skill.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;