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
            <div className="relative w-64 h-80 overflow-hidden ring-4 ring-blue-500/30 dark:ring-blue-500/50 rounded-[50%/35%] shadow-xl">
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
      <section id="timeline" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent dark:via-blue-500/10"></div>
        <div className="relative">
          <h2 className="text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Minha Jornada
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-16 max-w-2xl mx-auto">
            Uma linha do tempo da minha evolução profissional e acadêmica
          </p>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {/* Card 1 - Início dos Estudos */}
              <div className="group relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <div className="mt-4">
                  <div className="inline-block px-3 py-1 bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold mb-3">
                    Janeiro 2024
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Início dos Estudos
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Início da graduação em Análise e Desenvolvimento de Sistemas na Gran Faculdade
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>

              {/* Card 2 - Desenvolvimento Web */}
              <div className="group relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <div className="mt-4">
                  <div className="inline-block px-3 py-1 bg-purple-500/20 text-purple-600 dark:text-purple-400 rounded-full text-sm font-semibold mb-3">
                    Junho 2024
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Desenvolvimento Web Avançado
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Curso de PHP, Laravel e Vue.JS na Udemy - aprofundamento em tecnologias web modernas
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-purple-600 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>

              {/* Card 3 - Análise de Dados */}
              <div className="group relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <div className="mt-4">
                  <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold mb-3">
                    Dezembro 2024
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Análise de Dados com Python
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Workshop da INFINITY SCHOOL - Visual Art Creative Center
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>

              {/* Card 4 - Full Stack */}
              <div className="group relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">4</span>
                </div>
                <div className="mt-4">
                  <div className="inline-block px-3 py-1 bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold mb-3">
                    2024 - Presente
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Desenvolvimento Full Stack
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Desenvolvimento de aplicações web com Python/FastAPI e Next.js, criando soluções completas
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-700 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>

              {/* Card 5 - Criador de Conteúdo */}
              <div className="group relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">5</span>
                </div>
                <div className="mt-4">
                  <div className="inline-block px-3 py-1 bg-purple-500/20 text-purple-600 dark:text-purple-400 rounded-full text-sm font-semibold mb-3">
                    2025 - Presente
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Criador de Conteúdo
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Compartilhando conhecimento sobre desenvolvimento web e tecnologia através do meu blog
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>

              {/* Card 6 - Formação */}
              <div className="group relative bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-blue-500/30 dark:border-blue-400/30 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <div className="mt-4">
                  <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold mb-3">
                    2026
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Formação Acadêmica
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Previsão de conclusão da graduação em Análise e Desenvolvimento de Sistemas
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Projetos Section */}
      <section id="projetos" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Projetos
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Uma seleção dos meus projetos mais recentes, demonstrando minha experiência em desenvolvimento web e soluções digitais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Projeto 0 - Blog */}
            <div className="group relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
              <div className="relative h-56 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <svg className="w-20 h-20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  <h3 className="text-2xl font-bold">Itallo Guedes</h3>
                  <p className="text-blue-100">Blog de Tecnologia</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="flex gap-3 px-6 pt-4 pb-0">
                <span className="px-3 py-1 text-sm bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-full">Blog</span>
                <span className="px-3 py-1 text-sm bg-purple-500/20 text-purple-600 dark:text-purple-400 rounded-full">Conteúdo</span>
              </div>
              <div className="p-6 pt-4">
                <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">Itallo Guedes Blog</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Meu blog pessoal onde compartilho conhecimentos sobre desenvolvimento web, tecnologia e programação.
                </p>
                <div className="flex items-center justify-between">
                  <Link
                    href="https://www.italloguedes.blog"
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
                    target="_blank"
                  >
                    <span>Visitar Blog</span>
                    <svg
                      className="w-4 h-4"
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

            {/* Projeto 1 - Site da Psicóloga */}
            <div className="group relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
              <div className="relative h-56">
                <Image
                  src="/neirilane.jpg"
                  alt="Site da Dra. Neirilane"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="flex gap-3 px-6 pt-4 pb-0">
                <span className="px-3 py-1 text-sm bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-full">Next.js</span>
                <span className="px-3 py-1 text-sm bg-purple-500/20 text-purple-600 dark:text-purple-400 rounded-full">Tailwind</span>
              </div>
              <div className="p-6 pt-4">
                <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">Site da Dra. Neirilane Aragão</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Site profissional para psicóloga com informações sobre serviços, agendamento e contato.
                </p>
                <div className="flex items-center justify-between">
                  <Link
                    href="https://neirilanearagao.com.br/"
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
                    target="_blank"
                  >
                    <span>Visitar Projeto</span>
                    <svg
                      className="w-4 h-4"
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
            <div className="group relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
              <div className="relative h-56">
                <Image
                  src="/allcessorios.jpg"
                  alt="Loja Allcessorios"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="flex gap-3 px-6 pt-4 pb-0">
                <span className="px-3 py-1 text-sm bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-full">WordPress</span>
                <span className="px-3 py-1 text-sm bg-purple-500/20 text-purple-600 dark:text-purple-400 rounded-full">WooCommerce</span>
              </div>
              <div className="p-6 pt-4">
                <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">Allcessorios</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  E-commerce desenvolvido em WordPress para venda de acessórios.
                </p>
                <div className="flex items-center justify-between">
                  <Link
                    href="https://www.allcessorios.com"
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
                    target="_blank"
                  >
                    <span>Visitar Projeto</span>
                    <svg
                      className="w-4 h-4"
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
            <div className="group relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
              <div className="relative h-56">
                <Image
                  src="/telegram-bot.jpg"
                  alt="Bots de Telegram"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="flex gap-3 px-6 pt-4 pb-0">
                <span className="px-3 py-1 text-sm bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-full">Python</span>
                <span className="px-3 py-1 text-sm bg-purple-500/20 text-purple-600 dark:text-purple-400 rounded-full">Telegram API</span>
              </div>
              <div className="p-6 pt-4">
                <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">Bots de Telegram</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Desenvolvimento de bots automatizados para Telegram usando Python.
                </p>
                <div className="flex items-center justify-between">
                  <Link
                    href="https://github.com/italloguedes"
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
                    target="_blank"
                  >
                    <span>Ver no GitHub</span>
                    <svg
                      className="w-4 h-4"
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
            <div className="group relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
              <div className="relative h-56">
                <Image
                  src="/fastapi-study.jpg"
                  alt="Plano de Estudos FastAPI"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="flex gap-3 px-6 pt-4 pb-0">
                <span className="px-3 py-1 text-sm bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-full">FastAPI</span>
                <span className="px-3 py-1 text-sm bg-purple-500/20 text-purple-600 dark:text-purple-400 rounded-full">Python</span>
              </div>
              <div className="p-6 pt-4">
                <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">Plano de Estudos FastAPI</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Plataforma educacional desenvolvida com FastAPI para guiar desenvolvedores no aprendizado do framework.
                </p>
                <div className="flex items-center justify-between">
                  <Link
                    href="https://dsyjlebb.manus.space/"
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
                    target="_blank"
                  >
                    <span>Visitar Projeto</span>
                    <svg
                      className="w-4 h-4"
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

            {/* Projeto 5 - Tia Su - Natação Infantil */}
            <div className="group relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
              <div className="relative h-56">
                <Image
                  src="/tiasu.png"
                  alt="Tia Su - Natação Infantil"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="flex gap-3 px-6 pt-4 pb-0">
                <span className="px-3 py-1 text-sm bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-full">Next.js</span>
                <span className="px-3 py-1 text-sm bg-purple-500/20 text-purple-600 dark:text-purple-400 rounded-full">Tailwind</span>
              </div>
              <div className="p-6 pt-4">
                <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">Tia Su - Natação Infantil</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Site institucional para aulas de natação infantil, com foco em confiança e segurança.
                </p>
                <div className="flex items-center justify-between">
                  <Link
                    href="https://tiasu.vercel.app/"
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
                    target="_blank"
                  >
                    <span>Visitar Projeto</span>
                    <svg
                      className="w-4 h-4"
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

            {/* Projeto 6 - Dashboards Administrativos */}
            <div className="group relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
              <div className="relative h-56">
                <Image
                  src="/gestao.png"
                  alt="Dashboards Administrativos"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="flex gap-3 px-6 pt-4 pb-0">
                <span className="px-3 py-1 text-sm bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-full">Next.js</span>
                <span className="px-3 py-1 text-sm bg-purple-500/20 text-purple-600 dark:text-purple-400 rounded-full">Admin</span>
              </div>
              <div className="p-6 pt-4">
                <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">Criação de Dashboards Administrativos</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Interfaces administrativas com gráficos e KPIs para acompanhamento financeiro e operacional.
                </p>
                <div className="flex items-center justify-between">
                  <Link
                    href="#contato"
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
                  >
                    <span>Solicitar Demonstração</span>
                    <svg
                      className="w-4 h-4"
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
        </div>
      </section>
    </div>
  );
}
