'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Service {
  id: string;
  name: string;
  price: number;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    id: 'blog',
    name: 'Blog',
    price: 200,
    description: 'Site de conteúdo com gestão de artigos',
    icon: '📝'
  },
  {
    id: 'dashboard',
    name: 'Dashboard',
    price: 400,
    description: 'Painel administrativo com gráficos e KPIs',
    icon: '📊'
  },
  {
    id: 'portfolio',
    name: 'Portfólio',
    price: 150,
    description: 'Site para apresentar seus trabalhos',
    icon: '💼'
  },
  {
    id: 'landing',
    name: 'Landing Page',
    price: 200,
    description: 'Página de vendas ou captura de leads',
    icon: '🎯'
  }
];

export default function BudgetCalculator() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (serviceId: string) => {
    if (selectedServices.includes(serviceId)) {
      setSelectedServices(selectedServices.filter(id => id !== serviceId));
    } else {
      setSelectedServices([...selectedServices, serviceId]);
    }
  };

  const calculateTotal = () => {
    return services
      .filter(service => selectedServices.includes(service.id))
      .reduce((total, service) => total + service.price, 0);
  };

  const getSelectedServicesText = () => {
    const selected = services.filter(service => selectedServices.includes(service.id));
    if (selected.length === 0) return '';

    const servicesList = selected.map(s => `${s.name} (R$ ${s.price})`).join(', ');
    const total = calculateTotal();
    return `Olá! Gostaria de solicitar um orçamento para: ${servicesList}. Total: R$ ${total},00`;
  };

  const whatsappLink = selectedServices.length > 0
    ? `https://wa.me/5585994358083?text=${encodeURIComponent(getSelectedServicesText())}`
    : '#';

  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {services.map((service) => {
          const isSelected = selectedServices.includes(service.id);
          return (
            <button
              key={service.id}
              onClick={() => toggleService(service.id)}
              className={`relative p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                isSelected
                  ? 'border-blue-500 bg-blue-500/10 dark:bg-blue-500/20 shadow-lg scale-[1.02]'
                  : 'border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 hover:border-gray-300 dark:hover:border-gray-600'
              }`}
            >
              {isSelected && (
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}

              <div className="flex items-start gap-4">
                <div className="text-4xl">{service.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      R$ {service.price}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">,00</span>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {selectedServices.length > 0 && (
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border-2 border-blue-500/30 dark:border-blue-400/30">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                Total do Orçamento
              </p>
              <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                R$ {calculateTotal()},00
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                {selectedServices.length} {selectedServices.length === 1 ? 'serviço selecionado' : 'serviços selecionados'}
              </p>
            </div>

            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 justify-center"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>Solicitar Orçamento via WhatsApp</span>
            </Link>
          </div>
        </div>
      )}

      {selectedServices.length === 0 && (
        <div className="text-center p-12 bg-gray-100/50 dark:bg-gray-800/30 rounded-2xl border border-gray-200 dark:border-gray-700">
          <svg className="w-16 h-16 mx-auto mb-4 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
          <p className="text-gray-600 dark:text-gray-300">
            Selecione os serviços que você precisa para calcular o orçamento
          </p>
        </div>
      )}
    </div>
  );
}
