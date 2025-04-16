'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const values = [
  {
    title: "Inovação",
    description: "Buscamos constantemente novas tecnologias e soluções para melhorar a gestão da saúde."
  },
  {
    title: "Qualidade",
    description: "Comprometimento com a excelência em todos os nossos produtos e serviços."
  },
  {
    title: "Segurança",
    description: "Proteção e confidencialidade dos dados são prioridades em nossas soluções."
  },
  {
    title: "Eficiência",
    description: "Otimização de processos para maximizar resultados e reduzir custos."
  },
  {
    title: "Compromisso",
    description: "Dedicação total ao sucesso e satisfação de nossos clientes."
  }
];

export default function About() {
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
            Sobre a F2A Sistemas
          </motion.h1>
          <motion.p
            className="mt-4 text-xl text-orange-50 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Inovação e excelência em soluções de gestão para a área da saúde
          </motion.p>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossa História</h2>
              <p className="text-lg text-gray-600 mb-8">
                Desde nossa fundação, a F2A Sistemas tem se dedicado a desenvolver soluções tecnológicas inovadoras para o setor da saúde. Nossa jornada é marcada pelo compromisso com a excelência e a busca constante por inovação.
              </p>
              <p className="text-lg text-gray-600">
                Nosso objetivo é transformar a gestão da saúde através da tecnologia, proporcionando ferramentas eficientes e intuitivas que melhoram a qualidade do atendimento e otimizam os processos administrativos.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl font-bold text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Nossos Valores
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow border border-gray-100 hover:border-orange-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Nossa Equipe</h2>
            <p className="text-xl text-orange-50 mb-8">
              Uma equipe dedicada de profissionais apaixonados por tecnologia e saúde, trabalhando juntos para criar soluções que fazem a diferença.
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-lg text-orange-600 bg-white hover:bg-orange-50 transition-colors"
            >
              Faça Parte do Nosso Time
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 