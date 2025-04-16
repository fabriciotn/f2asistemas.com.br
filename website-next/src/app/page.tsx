'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Particles from '@/components/Particles';

const features = [
  {
    title: "Gestão de Prontuários",
    description: "Sistema completo para gerenciamento de prontuários eletrônicos, facilitando o acesso às informações dos pacientes e melhorando a qualidade do atendimento.",
  },
  {
    title: "Agendamento Online",
    description: "Plataforma intuitiva para agendamento de consultas e exames, reduzindo filas de espera e otimizando o tempo dos profissionais de saúde.",
  },
  {
    title: "Gestão Financeira",
    description: "Ferramentas para controle financeiro, faturamento e gestão de convênios, garantindo maior eficiência e transparência nas operações.",
  },
  {
    title: "Análise de Dados",
    description: "Dashboard com indicadores de desempenho e relatórios personalizados para tomada de decisões baseadas em dados.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex flex-col items-center justify-center bg-orange-600 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Particles */}
          <Particles />
          {/* Curved Bottom */}
          <div className="absolute bottom-0 left-0 right-0">
            <div className="relative">
              <svg
                viewBox="0 0 1440 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto"
                preserveAspectRatio="none"
                style={{ transform: 'scale(1.1)' }}
              >
                <path
                  d="M0 200V100C360 20 720 180 1440 100V200H0Z"
                  className="fill-gray-50"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="inline-block px-4 py-1 mb-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm text-white/90 font-medium">
              Plataforma de Gestão em Saúde
            </span>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Transformando a{' '}
            <span className="bg-gradient-to-r from-orange-200 to-orange-100 bg-clip-text text-transparent">
              gestão da saúde
            </span>
          </motion.h1>

          <motion.p 
            className="text-lg text-orange-50 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Soluções tecnológicas inovadoras para otimizar processos, melhorar a eficiência e garantir a qualidade do atendimento em instituições de saúde.
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href="/contato"
              className="group inline-flex items-center px-8 py-4 text-lg font-medium rounded-lg text-orange-600 bg-white hover:bg-orange-50 transition-colors"
            >
              Solicitar Demonstração
              <svg 
                className="ml-2 w-5 h-5 transform transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/solucoes"
              className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-lg text-white border-2 border-white hover:bg-white/10 backdrop-blur-sm transition-colors"
            >
              Conhecer Soluções
            </Link>
          </motion.div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
        `}</style>
      </section>
      
      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Nossas Soluções
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
              Tecnologia avançada para transformar a gestão da saúde
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white overflow-hidden shadow-lg rounded-xl border border-gray-100 hover:border-orange-200 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="px-6 py-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-orange-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Pronto para transformar sua gestão?</span>
            <span className="block text-orange-100">Solicite uma demonstração hoje mesmo.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/contato"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-orange-600 bg-white hover:bg-orange-50"
              >
                Fale Conosco
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
