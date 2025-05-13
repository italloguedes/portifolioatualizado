import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[80vh] text-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 blur-3xl"></div>
        <div className="relative flex flex-col items-center justify-center">
          <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
            <div className="relative w-48 h-48 rounded-full overflow-hidden ring-4 ring-blue-500/30 dark:ring-blue-500/50">
              <Image
                src="/profile.jpg"
                alt="Foto de perfil"
                fill
                className="object-cover"
                priority
              />
            </div>
            <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Ola, eu sou Itallo Guedes
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            I build smart web apps that solve real problems — fast, clean, and with purpose.
          </p>
          <div className="flex gap-4">
            <Link
              href="#projetos"
              className="group relative px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              <span className="relative z-10">Ver Projetos</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              href="https://wa.me/5585994358083"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
            >
              Fale comigo
            </Link>
          </div>
        </div>
      </section>

      {/* Missão Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-purple-500/5"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Minha Missão
          </h2>
          <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Transformar ideias em soluções digitais que impulsionem seu negócio.
              Com experiência em desenvolvimento full stack, crio aplicações web modernas
              e eficientes que resolvem problemas reais e agregam valor ao seu empreendimento.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-gray-100/50 dark:bg-gray-700/30 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">Soluções Personalizadas</h3>
                <p className="text-gray-600 dark:text-gray-300">Desenvolvimento sob medida para suas necessidades específicas</p>
              </div>
              <div className="p-4 bg-gray-100/50 dark:bg-gray-700/30 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-2">Tecnologias Modernas</h3>
                <p className="text-gray-600 dark:text-gray-300">Utilização das mais recentes tecnologias do mercado</p>
              </div>
              <div className="p-4 bg-gray-100/50 dark:bg-gray-700/30 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">Resultados Reais</h3>
                <p className="text-gray-600 dark:text-gray-300">Foco em entregar valor e resultados para seu negócio</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
          Minha Jornada
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700"></div>
            
            <div className="relative mb-12">
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">Início dos Estudos</h3>
                  <p className="text-gray-600 dark:text-gray-300">Janeiro 2024</p>
                  <p className="mt-2">Início da graduação em Análise e Desenvolvimento de Sistemas na Gran Faculdade</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
            </div>

            <div className="relative mb-12">
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full"></div>
                <div className="w-1/2 pl-8">
                  <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400">Análise de Dados com Python</h3>
                  <p className="text-gray-600 dark:text-gray-300">Dezembro 2024</p>
                  <p className="mt-2">Workshop da INFINITY SCHOOL - Visual Art Creative Center</p>
                </div>
              </div>
            </div>

            <div className="relative mb-12">
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">Desenvolvimento Web Avançado</h3>
                  <p className="text-gray-600 dark:text-gray-300">Junho 2024</p>
                  <p className="mt-2">Curso de PHP, Laravel e Vue.JS na Udemy</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
            </div>

            <div className="relative mb-12">
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full"></div>
                <div className="w-1/2 pl-8">
                  <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400">Desenvolvimento Full Stack</h3>
                  <p className="text-gray-600 dark:text-gray-300">2024 - Presente</p>
                  <p className="mt-2">Desenvolvimento de aplicações web com Python/FastAPI e Next.js</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">Formação</h3>
                  <p className="text-gray-600 dark:text-gray-300">2026</p>
                  <p className="mt-2">Previsão de conclusão da graduação</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos Section */}
      <section id="projetos" className="py-20">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
          Projetos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Projeto 1 - Site da Psicóloga */}
          <div className="group bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
            <div className="relative h-48">
              <Image
                src="/neirilane.jpg"
                alt="Site da Dra. Neirilane"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">Site da Dra. Neirilane Aragão</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Site profissional para psicóloga com informações sobre serviços, agendamento e contato.
              </p>
              <div className="flex gap-4">
                <Link
                  href="https://neirilanearagao.com.br/"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
                  target="_blank"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Projeto 2 - Loja Allcessorios */}
          <div className="group bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
            <div className="relative h-48">
              <Image
                src="/allcessorios.jpg"
                alt="Loja Allcessorios"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">Allcessorios</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                E-commerce desenvolvido em WordPress para venda de acessórios.
              </p>
              <div className="flex gap-4">
                <Link
                  href="https://www.allcessorios.com"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
                  target="_blank"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Projeto 3 - Bots de Telegram */}
          <div className="group bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
            <div className="relative h-48">
              <Image
                src="/telegram-bot.jpg"
                alt="Bots de Telegram"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">Bots de Telegram</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Desenvolvimento de bots automatizados para Telegram usando Python.
              </p>
              <div className="flex gap-4">
                <Link
                  href="https://github.com/italloguedes"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
                  target="_blank"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Projeto 4 - Plano de Estudos FastAPI */}
          <div className="group bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
            <div className="relative h-48">
              <Image
                src="/fastapi-study.jpg"
                alt="Plano de Estudos FastAPI"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">Plano de Estudos FastAPI</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Plataforma educacional desenvolvida com FastAPI para guiar desenvolvedores no aprendizado do framework.
              </p>
              <div className="flex gap-4">
                <Link
                  href="https://ffxggatj.manus.space/"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
                  target="_blank"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
