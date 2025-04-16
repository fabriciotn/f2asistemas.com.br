'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ClientLogo from '@/components/ClientLogo';

const testimonials = [
  {
    name: "Dr. Carlos Silva",
    role: "Diretor Clínico",
    company: "Hospital São Lucas",
    content: "A implementação do sistema da F2A Sistemas transformou completamente nossa gestão hospitalar. A eficiência aumentou significativamente e nossos profissionais podem dedicar mais tempo ao que realmente importa: o cuidado com os pacientes."
  },
  {
    name: "Dra. Ana Paula Santos",
    role: "Proprietária",
    company: "Clínica Vida Saudável",
    content: "O sistema é intuitivo e completo. O suporte técnico é excelente e sempre disponível para ajudar. Recomendo fortemente para clínicas que buscam modernizar sua gestão."
  },
  {
    name: "Roberto Oliveira",
    role: "Gestor Administrativo",
    company: "Centro Médico Santa Maria",
    content: "A solução da F2A Sistemas nos ajudou a reduzir custos operacionais e melhorar a qualidade do atendimento. O retorno sobre o investimento foi muito além das nossas expectativas."
  }
];

const caseStudies = [
  {
    title: "Hospital São Lucas",
    description: "Redução de 40% no tempo de atendimento e melhoria significativa na gestão de leitos.",
    link: "#"
  },
  {
    title: "Clínica Vida Saudável",
    description: "Aumento de 60% na eficiência do agendamento e redução de faltas em consultas.",
    link: "#"
  },
  {
    title: "Centro Médico Santa Maria",
    description: "Otimização do faturamento e redução de 30% nos custos operacionais.",
    link: "#"
  }
];

export default function ClientsPage() {
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
            Nossos Clientes
          </motion.h1>
          <motion.p
            className="mt-4 text-xl text-orange-50 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Conheça as instituições que confiam em nossas soluções para uma gestão mais eficiente e organizada.
          </motion.p>
        </div>
      </section>

      {/* Logos dos Clientes */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossos Clientes</h2>
            <p className="text-lg text-gray-600">
              Empresas que confiam em nossas soluções para transformar sua gestão
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <ClientLogo
              name="Hospital São Lucas"
              logo="/images/clients/sao-lucas.svg"
            />
            <ClientLogo
              name="Clínica Saúde Total"
              logo="/images/clients/saude-total.svg"
            />
            <ClientLogo
              name="Laboratório Diagnóstico"
              logo="/images/clients/diagnostico.svg"
            />
            <ClientLogo
              name="Centro Médico Esperança"
              logo="/images/clients/esperanca.svg"
            />
            <ClientLogo
              name="Hospital Santa Maria"
              logo="/images/clients/santa-maria.svg"
            />
            <ClientLogo
              name="Clínica Bem Estar"
              logo="/images/clients/bem-estar.svg"
            />
            <ClientLogo
              name="Laboratório Análise"
              logo="/images/clients/analise.svg"
            />
            <ClientLogo
              name="Centro Médico Vida"
              logo="/images/clients/vida.svg"
            />
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Histórias reais de transformação e sucesso com nossas soluções
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center">
                    <span className="text-orange-600 text-xl font-bold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <div className="flex text-orange-500">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Casos de Sucesso</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Resultados reais de nossos clientes
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <a
                    href={study.link}
                    className="text-orange-600 hover:text-orange-700 font-medium inline-flex items-center"
                  >
                    Ler mais
                    <svg
                      className="ml-1 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
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
              Pronto para transformar a gestão da sua instituição?
            </h2>
            <p className="text-xl text-orange-50 mb-8">
              Junte-se a centenas de instituições que já estão transformando sua gestão com nossas soluções.
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-lg text-orange-600 bg-white hover:bg-orange-50 transition-colors"
            >
              Solicitar Demonstração
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 