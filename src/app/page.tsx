'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ChartBarIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Prontuário Eletrônico',
    description: 'Sistema completo e intuitivo para gestão de prontuários médicos, com foco em usabilidade e eficiência.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Gestão de Clínicas',
    description: 'Ferramentas integradas para administração de clínicas e consultórios, incluindo agendamento e faturamento.',
    icon: LockClosedIcon,
  },
  {
    name: 'Telemedicina',
    description: 'Plataforma segura para consultas online, com recursos de videoconferência e prescrição digital.',
    icon: ServerIcon,
  },
  {
    name: 'Análise de Dados',
    description: 'Dashboards e relatórios personalizados para tomada de decisões baseada em dados.',
    icon: ChartBarIcon,
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 pb-16 pt-14 sm:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Transforme a gestão da sua clínica com tecnologia
              </h1>
              <p className="mt-6 text-lg leading-8 text-blue-100">
                Soluções completas e integradas para gestão de saúde, prontuário eletrônico e telemedicina.
                Aumente a eficiência e qualidade do atendimento com nossas ferramentas.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/contato"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Agende uma demonstração
                </Link>
                <Link href="/solucoes" className="text-sm font-semibold leading-6 text-white">
                  Conheça nossas soluções <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            Tecnologia que transforma
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Tudo que você precisa para uma gestão eficiente
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Nossas soluções são desenvolvidas para otimizar processos e melhorar
            a experiência de profissionais de saúde e pacientes.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col"
              >
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>

      {/* CTA section */}
      <div className="relative isolate mt-32 px-6 py-32 sm:mt-56 sm:py-40 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Pronto para transformar sua gestão?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Entre em contato conosco e descubra como nossas soluções podem ajudar
            sua instituição a alcançar mais eficiência e qualidade no atendimento.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/contato"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Fale conosco
            </Link>
            <Link href="/sobre" className="text-sm font-semibold leading-6 text-gray-900">
              Conheça nossa história <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 