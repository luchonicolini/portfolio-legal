import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LegalModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[60] transition-opacity"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 flex items-center justify-center z-[70] p-4 pointer-events-none"
                    >
                        <div className="bg-white dark:bg-slate-900 w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-sm shadow-2xl border border-slate-200 dark:border-slate-700 pointer-events-auto flex flex-col">

                            {/* Header */}
                            <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
                                <div className="flex items-center gap-3">
                                    <ShieldCheck className="text-brand-gold w-6 h-6" />
                                    <h3 className="font-serif text-xl text-brand-navy dark:text-slate-100">Aviso Legal y Privacidad</h3>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="text-slate-400 hover:text-brand-navy dark:hover:text-white transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-8 space-y-6 text-slate-600 dark:text-slate-300 text-sm leading-relaxed overflow-y-auto">
                                <p>
                                    <strong>1. Responsable del Sitio:</strong><br />
                                    Este sitio web es propiedad y está gestionado por María de las Mercedes Díaz Colodrero, con domicilio profesional en Don Torcuato, Buenos Aires, Argentina.
                                </p>

                                <p>
                                    <strong>2. Propiedad Intelectual:</strong><br />
                                    Todos los contenidos de este sitio (textos, imágenes, diseño, logotipos y publicaciones) están protegidos por derechos de propiedad intelectual. Queda prohibida su reproducción, distribución o modificación sin autorización expresa.
                                </p>

                                <p>
                                    <strong>3. Protección de Datos Personales:</strong><br />
                                    Los datos que los usuarios faciliten a través del formulario de contacto serán tratados con estricta confidencialidad y utilizados exclusivamente para responder a sus consultas. No se cederán a terceros salvo obligación legal. Cumplimos con lo dispuesto en la Ley 25.326 de Protección de Datos Personales.
                                </p>

                                <p>
                                    <strong>4. Limitación de Responsabilidad:</strong><br />
                                    La información contenida en este sitio tiene carácter meramente informativo y no constituye asesoramiento legal vinculante. La relación profesional cliente-abogado/notario solo se perfecciona mediante la contratación formal de servicios.
                                </p>
                            </div>

                            {/* Footer */}
                            <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex justify-end">
                                <button
                                    onClick={onClose}
                                    className="px-6 py-2 bg-brand-navy text-white text-xs uppercase tracking-widest font-bold hover:bg-brand-gold transition-colors rounded-sm"
                                >
                                    Entendido
                                </button>
                            </div>

                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default LegalModal;
