'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const solutions = [
  {
    title: "Sistema de Gestão Hospitalar",
    description: "Solução completa para gestão hospitalar, incluindo prontuário eletrônico, gestão de leitos, farmácia e muito mais.",
    features: [
      "Prontuário Eletrônico do Paciente (PEP)",
      "Gestão de Leitos e Internações",
      "Controle de Medicamentos e Farmácia",
      "Faturamento e Gestão Financeira",
      "Integração com Laboratórios",
      "Gestão de Escalas Médicas"
    ]
  },
  {
    title: "Clínica Digital",
    description: "Plataforma especializada para clínicas médicas, com foco em agendamento, atendimento e gestão de pacientes.",
    features: [
      "Agendamento Online",
      "Prontuário Digital",
      "Gestão de Convênios",
      "Prescrição Eletrônica",
      "App para Pacientes",
      "Relatórios Gerenciais"
    ]
  },
  {
    title: "Telemedicina",
    description: "Solução completa para atendimento remoto, permitindo consultas online seguras e eficientes.",
    features: [
      "Videochamadas Seguras",
      "Chat Médico-Paciente",
      "Prescrição Digital",
      "Compartilhamento de Exames",
      "Agendamento Online",
      "Prontuário Integrado"
    ]
  }
];

export default function Solutions() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-orange-600 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 right-0">
            <svg
              viewBox="0 0 1440 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
              preserveAspectRatio="none"
            >
              <path
                d="M0 200V100C360 20 720 180 1440 100V200H0Z"
                className="fill-gray-50"
              />
            </svg>
          </div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl font-bold text-white sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Nossas Soluções
          </motion.h1>
          <motion.p
            className="mt-4 text-xl text-orange-50 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Tecnologia avançada para uma gestão eficiente da saúde
          </motion.p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <ul className="space-y-3">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="flex-shrink-0 h-6 w-6 text-orange-600">
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="ml-3 text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Integração Completa</h2>
            <p className="text-gray-600 text-lg mb-6">
              Nossas soluções são desenvolvidas para se integrarem perfeitamente com os principais
              sistemas e padrões do mercado, garantindo uma transição suave e operação eficiente.
            </p>
            <p className="text-gray-600 text-lg">
              Oferecemos suporte técnico especializado e treinamento completo para sua equipe,
              assegurando o máximo aproveitamento de nossas soluções.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Pronto para transformar sua gestão?
            </h2>
            <p className="text-xl text-orange-50 mb-8">
              Entre em contato conosco e descubra como nossas soluções podem ajudar sua instituição.
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-lg text-orange-600 bg-white hover:bg-orange-50 transition-colors"
            >
              Fale Conosco
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 