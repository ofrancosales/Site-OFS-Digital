import React from 'react';
import { Target, BarChart3, Filter, Rocket, Check, X, Globe } from 'lucide-react';
import { SEO } from '../components/SEO';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { WHATSAPP_MESSAGES } from '../types';

export const Method: React.FC = () => {
  return (
    <>
      <SEO 
        title="Método Psi na Gringa | OFS Digital"
        description="Gestão completa de marketing internacional para psicólogas que atendem online e querem captar pacientes no exterior."
      />

      {/* Hero */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-teal-400 font-bold tracking-wider uppercase text-sm mb-4 block">Metodologia Exclusiva</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Método Psi na Gringa</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Uma estrutura completa de marketing internacional para psicólogas que já atendem online e desejam captar pacientes brasileiras no exterior.
          </p>
        </div>
      </section>

      {/* The 4 Phases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Como funciona na prática</h2>
            <p className="text-slate-600">Nosso processo estruturado em 4 pilares fundamentais.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target size={40} />,
                title: "1. Posicionamento",
                desc: "Adaptamos sua comunicação para conectar com a dor da imigrante brasileira."
              },
              {
                icon: <Globe size={40} />, // Changed to Globe for generic use since Icons is not imported as *
                title: "2. Tráfego Segmentado",
                desc: "Anúncios direcionados para países específicos (EUA, Europa, Canadá) filtrando público qualificado."
              },
              {
                icon: <Filter size={40} />,
                title: "3. Funil Estratégico",
                desc: "Páginas de alta conversão que filtram curiosos e entregam pacientes prontos para agendar."
              },
              {
                icon: <Rocket size={40} />,
                title: "4. Escala Previsível",
                desc: "Otimização contínua das campanhas para aumentar o volume de agendamentos mantendo o ROI."
              }
            ].map((step, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-100 relative group hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute top-0 right-0 p-4 text-6xl font-black text-slate-200 opacity-20 pointer-events-none">
                  0{i + 1}
                </div>
                <div className="text-teal-600 mb-4 bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm group-hover:bg-teal-600 group-hover:text-white transition-colors">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Filter - Crucial Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* For You */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-emerald-100">
              <h3 className="text-2xl font-bold text-emerald-900 mb-6 flex items-center gap-2">
                <Check className="text-emerald-500" /> 
                Para quem é essa estratégia
              </h3>
              <ul className="space-y-4">
                {[
                  "Psicólogas que já atendem online",
                  "Faturamento a partir de R$ 5.000/mês",
                  "Desejam expandir para o exterior",
                  "Dispostas a investir em tráfego pago"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 min-w-[20px]"><Check size={18} className="text-emerald-500" /></div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not For You */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-red-100 opacity-75 grayscale hover:grayscale-0 transition-all">
              <h3 className="text-2xl font-bold text-red-900 mb-6 flex items-center gap-2">
                <X className="text-red-500" /> 
                Para quem NÃO é
              </h3>
              <ul className="space-y-4">
                {[
                  "Estudantes ou recém-formadas",
                  "Quem não realiza atendimento online",
                  "Profissionais que buscam 'dicas grátis'",
                  "Quem não tem verba para anúncios"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 min-w-[20px]"><X size={18} className="text-red-500" /></div>
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Se você se encaixa no perfil, dê o próximo passo.
          </h2>
          <p className="text-slate-600 mb-10 text-lg">
            Agende uma análise estratégica e descubra o potencial de faturamento internacional da sua clínica.
          </p>
          <div className="flex justify-center">
            <WhatsAppButton 
              message={WHATSAPP_MESSAGES.method} 
              label="Quero aplicar o Método Psi na Gringa"
              className="py-4 px-8 text-lg"
              variant="primary"
            />
          </div>
        </div>
      </section>
    </>
  );
};