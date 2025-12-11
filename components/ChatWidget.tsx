import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Bot } from 'lucide-react';
import { GoogleGenAI, Chat } from "@google/genai";

interface Message {
  role: 'user' | 'model';
  text: string;
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Bienvenido. Soy el asistente virtual de María de las Mercedes. ¿En qué puedo asesorarle hoy sobre nuestros servicios notariales o legales?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Ref to store the chat session instance
  const chatSessionRef = useRef<Chat | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // Initialize Chat Session
  useEffect(() => {
    if (isOpen && !chatSessionRef.current) {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

        const systemInstruction = `
          Eres el asistente virtual profesional de María de las Mercedes Díaz Colodrero (M.D.C.), una abogada senior y escribana con más de 25 años de trayectoria.
          
          TU PERFIL Y CONTEXTO:
          - María es Notaria Pública, Consejera Estratégica y Especialista en Asesoría Regulatoria.
          - Tiene experiencia como Par Evaluadora de la CONEAU, Asesora Gubernamental (Escribanía de Gobierno de Corrientes) y Docente Universitaria.
          - Servicios principales: Derecho Notarial (escrituras, contratos), Asesoría Corporativa (compliance), Planificación Sucesoria y Resolución de Conflictos.
          - Ubicación: Su base está en Don Torcuato, Provincia de Buenos Aires, con disponibilidad para gestiones en Corrientes y Mendoza.
          
          REGLAS DE INTERACCIÓN:
          1. Mantén un tono extremadamente formal, educado y profesional (trata al usuario de "Usted").
          2. Sé conciso y directo.
          3. Tu objetivo es informar sobre los servicios y la trayectoria de la abogada.
          4. IMPORTANTE: NO des asesoramiento legal específico sobre casos particulares. Si te preguntan por un caso personal (ej: "tengo un problema con una herencia..."), responde amablemente que para casos específicos es necesario agendar una consulta formal y sugiéreles usar el formulario de contacto o escribir a contacto@mdc-legal.com.
          5. Si te preguntan precios, indica que los honorarios se ajustan a la complejidad del asunto y requieren una evaluación previa.
          
          ESTILO:
          Usa un lenguaje jurídico pero accesible. Transmite confianza y seguridad.
        `;

        chatSessionRef.current = ai.chats.create({
          model: 'gemini-2.5-flash',
          config: {
            systemInstruction: systemInstruction,
          },
        });
      } catch (error) {
        console.error("Error initializing AI:", error);
      }
    }
  }, [isOpen]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !chatSessionRef.current) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const result = await chatSessionRef.current.sendMessageStream({ message: userMessage });

      let fullResponse = "";

      // Add a placeholder message for the model
      setMessages(prev => [...prev, { role: 'model', text: '' }]);

      for await (const chunk of result) {
        const chunkText = chunk.text;
        if (chunkText) {
          fullResponse += chunkText;
          // Update the last message (the model's message) with the accumulated text
          setMessages(prev => {
            const newMessages = [...prev];
            newMessages[newMessages.length - 1] = { role: 'model', text: fullResponse };
            return newMessages;
          });
        }
      }

    } catch (error) {
      console.error("Error sending message:", error);
      setMessages(prev => [...prev, { role: 'model', text: 'Disculpe, hubo un error técnico. Por favor intente más tarde o utilice el formulario de contacto.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center
          ${isOpen ? 'bg-slate-800 rotate-90' : 'bg-brand-gold hover:bg-brand-navy'}
          text-white
        `}
        aria-label="Abrir asistente virtual"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[90vw] md:w-96 h-[500px] max-h-[70vh] bg-white dark:bg-slate-900 rounded-lg shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col overflow-hidden animate-fade-in-up">

          {/* Header */}
          <div className="bg-brand-navy p-4 flex items-center gap-3 shadow-md">
            <div className="bg-white/10 p-2 rounded-full">
              <Bot size={20} className="text-brand-gold" />
            </div>
            <div>
              <h3 className="text-white font-serif font-bold text-sm tracking-wide">Asistente Virtual M.D.C.</h3>
              <span className="text-slate-300 text-xs flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                En línea
              </span>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-950/50 scroll-smooth">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm
                    ${msg.role === 'user'
                      ? 'bg-brand-navy text-white rounded-tr-none'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-100 dark:border-slate-700 rounded-tl-none'
                    }
                  `}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl rounded-tl-none border border-slate-100 dark:border-slate-700 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escriba su consulta..."
              className="flex-1 px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-sm focus:outline-none focus:border-brand-gold text-brand-navy dark:text-slate-100 placeholder:text-slate-400"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="p-2 bg-brand-gold text-white rounded-full hover:bg-brand-navy transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
            </button>
          </form>

          {/* Footer Disclaimer */}
          <div className="px-4 py-2 bg-slate-100 dark:bg-slate-950 text-[10px] text-center text-slate-400">
            Asistente con IA. No constituye asesoramiento legal vinculante.
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
