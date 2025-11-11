'use client';

import { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { FaComments, FaTimes } from 'react-icons/fa';
import { IoMdSend } from 'react-icons/io';

interface Message {
  text: string;
  isUser: boolean;
}

const WELCOME_MESSAGE = "Olá! Sou o assistente virtual do Itallo. Como posso ajudar você hoje?";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: WELCOME_MESSAGE, isUser: false }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = inputMessage.trim();
    setMessages(prev => [...prev, { text: userMessage, isUser: true }]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || '');
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

      const OUT_OF_CONTEXT_MESSAGE = "Desculpe, mas só posso responder sobre assuntos profissionais relacionados ao Itallo Guedes, como seus projetos, tecnologias, experiência profissional e serviços de desenvolvimento. Se tiver alguma dúvida sobre esses temas ou quiser entrar em contato, ficarei feliz em ajudar!";

      const prompt = `Você é um assistente virtual profissional do Itallo Guedes. Sua função é responder APENAS sobre assuntos profissionais relacionados ao Itallo Guedes.

INFORMAÇÕES PROFISSIONAIS DO ITALLO GUEDES:

Nome: Itallo Guedes
Profissão: Desenvolvedor Full Stack

Formação:
- Graduação em Análise e Desenvolvimento de Sistemas na Gran Faculdade
- Início: Janeiro 2024
- Previsão de conclusão: 2026
- Workshop de Análise de Dados com Python (Dezembro 2024) - INFINITY SCHOOL
- Curso de PHP, Laravel e Vue.js (Junho 2024) - Udemy

Tecnologias e Habilidades:
- Python/FastAPI
- Next.js
- PHP
- Laravel
- Vue.js
- WordPress
- WooCommerce
- Telegram API (desenvolvimento de bots)

Projetos Desenvolvidos:
1. Site da Dra. Neirilane Aragão - Site profissional para psicóloga (Next.js, Tailwind)
2. Allcessorios - E-commerce desenvolvido em WordPress com WooCommerce
3. Bots de Telegram - Desenvolvimento de bots automatizados usando Python
4. Plano de Estudos FastAPI - Plataforma educacional desenvolvida com FastAPI
5. Tia Su - Natação Infantil - Site institucional para aulas de natação (Next.js, Tailwind)
6. Dashboards Administrativos - Interfaces administrativas com gráficos e KPIs

Missão Profissional:
Transformar ideias em soluções digitais que impulsionem negócios. Desenvolvimento de aplicações web modernas e eficientes que resolvem problemas reais e agregam valor aos empreendimentos.

CONTATOS DO ITALLO GUEDES:
- WhatsApp: +55 85 99435-8083 (https://wa.me/5585994358083)
- Instagram: @italloguedes (https://instagram.com/italloguedes)
- GitHub: italloguedes (https://github.com/italloguedes)
- LinkedIn: italloguedes (https://linkedin.com/in/italloguedes)

REGRAS IMPORTANTES:
1. Você DEVE responder apenas sobre assuntos profissionais do Itallo Guedes (projetos, tecnologias, experiência, serviços de desenvolvimento, formação, contatos).
2. Se a pergunta do usuário NÃO estiver relacionada aos assuntos profissionais do Itallo Guedes, você DEVE responder EXATAMENTE com esta mensagem: "${OUT_OF_CONTEXT_MESSAGE}"
3. Seja amigável, profissional e conciso nas respostas.
4. Quando perguntado sobre contatos, forneça todas as informações de contato listadas acima.
5. Se tiver dúvida se a pergunta está no contexto profissional, responda com a mensagem padrão.

Pergunta do usuário: ${userMessage}

Analise cuidadosamente se a pergunta está relacionada aos assuntos profissionais do Itallo Guedes. Se não estiver, responda APENAS com a mensagem padrão definida acima.`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      let botMessage = response.text().trim();

      // Verificação adicional: se a resposta contém a mensagem padrão ou parece estar fora do contexto
      const outOfContextKeywords = ['desculpe', 'não posso', 'fora do contexto', 'assuntos profissionais'];
      const isOutOfContext = outOfContextKeywords.some(keyword => 
        botMessage.toLowerCase().includes(keyword.toLowerCase())
      ) && !botMessage.toLowerCase().includes('itallo');

      // Se detectar que está fora do contexto mas não retornou a mensagem exata, substituir
      if (isOutOfContext && !botMessage.includes(OUT_OF_CONTEXT_MESSAGE)) {
        botMessage = OUT_OF_CONTEXT_MESSAGE;
      }

      setMessages(prev => [...prev, { text: botMessage, isUser: false }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { 
        text: 'Desculpe, ocorreu um erro ao processar sua mensagem. Por favor, verifique sua chave API do Gemini e tente novamente.', 
        isUser: false 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all duration-300"
      >
        {isOpen ? <FaTimes size={24} /> : <FaComments size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-96 h-[500px] bg-white dark:bg-gray-800 rounded-lg shadow-xl flex flex-col">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg">
            <h3 className="text-lg font-semibold">Assistente Virtual</h3>
          </div>

          {/* Messages Container */}
          <div
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto p-4 space-y-4"
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isUser
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-3 rounded-lg">
                  Digitando...
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="border-t dark:border-gray-600 p-4">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Digite sua mensagem..."
                className="flex-1 p-2 border dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-600 dark:bg-gray-700 dark:text-gray-200"
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 transition-colors duration-300 disabled:opacity-50"
              >
                <IoMdSend size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 