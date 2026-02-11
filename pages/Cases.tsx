import React from 'react';
import { Quote } from 'lucide-react';
import { SEO } from '../components/SEO';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { WHATSAPP_MESSAGES } from '../types';

const cases = [
  {
    author: "Dra. Carolina M.",
    location: "São Paulo / Atendendo Europa",
    result: "Agenda lotada em 45 dias",
    description: "Carolina atendia apenas presencial. Iniciamos o Método com foco em Portugal e Reino Unido. Em menos de 2 meses, migrou 80% da agenda para online com pacientes em Euro.",
    tags: ["Transição Online", "Europa"]
  },
  {
    author: "Psi. Fernanda L.",
    location: "Minas Gerais / Atendendo EUA",
    result: "Aumento de 3x no faturamento",
    description: "Fernanda já atendia online, mas com ticket baixo. Posicionamos ela como especialista em ansiedade para expatriadas nos EUA. O ticket médio triplicou.",
    tags: ["Aumento de Ticket", "EUA"]
  },
  {
    author: "Dra. Beatriz S.",
    location: "Morando em Portugal",
    result: "Captação de pacientes locais",
    description: "Beatriz mudou-se para Portugal e precisava recompor a agenda. Criamos uma estratégia local focada na comunidade brasileira em Lisboa e Porto.",
    tags: ["Psicóloga no Exterior", "Recomeço"]
  }
];

export const Cases: React.FC = () => {
  return (
    <>
      <SEO 
        title="Cases | OFS Digital"
        description="Resultados de psicólogas que aplicaram a estratégia internacional da OFS Digital."
      />

      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">Cases e Resultados</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Histórias reais de psicólogas que transformaram suas carreiras atendendo brasileiras no exterior.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {cases.map((c, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className="mb-6 text-teal-600">
                  <Quote size={40} className="fill-teal-50 text-teal-500" />
                </div>
                <div className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {c.tags.map((tag, t) => (
                      <span key={t} className="text-xs font-semibold bg-slate-100 text-slate-600 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{c.result}</h3>
                  <p className="text-sm font-medium text-teal-600 mb-4">{c.location}</p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    "{c.description}"
                  </p>
                </div>
                <div className="pt-6 border-t border-slate-100">
                   <p className="font-bold text-slate-900">{c.author}</p>
                   <p className="text-xs text-slate-500">Parceira OFS Digital</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-teal-900 text-white py-20">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Quer construir o seu case de sucesso?</h2>
            <WhatsAppButton 
              message={WHATSAPP_MESSAGES.cases}
              label="Quero resultados semelhantes"
              variant="primary"
            />
         </div>
      </section>
    </>
  );
};