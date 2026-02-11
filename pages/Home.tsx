import React from 'react';
import { ArrowRight, Globe, TrendingUp, Users, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/SEO';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { WHATSAPP_MESSAGES } from '../types';

interface HomeProps {
  onNavigate: (path: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <>
      <SEO 
        title="Marketing para Psicólogas no Exterior | OFS Digital"
        description="Agência especializada em captar pacientes brasileiras no exterior para psicólogas que já atendem online."
      />

      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/1080')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-teal-900/50 border border-teal-500/30 text-teal-400 text-sm font-semibold mb-6">
              Especialistas em Marketing Internacional
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              OFS Digital: Marketing Internacional para Psicólogas
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
              Ajudamos psicólogas que já atendem online a captar pacientes brasileiras no exterior com previsibilidade e estratégia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onNavigate('/metodo-psi-na-gringa')}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-slate-900 font-bold hover:bg-slate-100 transition-colors"
              >
                Conheça o Método
                <ArrowRight className="ml-2" size={20} />
              </button>
              <WhatsAppButton 
                message={WHATSAPP_MESSAGES.home} 
                variant="primary"
                className="!bg-teal-600 hover:!bg-teal-700 !text-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why International */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">A Maior Oportunidade para Psicólogas</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Existem milhões de brasileiras morando fora que preferem ser atendidas em português.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-12 h-12 text-teal-600" />,
                title: "Mercado em Expansão",
                description: "Crescimento acelerado da comunidade brasileira em países como EUA, Portugal e Reino Unido."
              },
              {
                icon: <TrendingUp className="w-12 h-12 text-teal-600" />,
                title: "Ticket Médio Maior",
                description: "Valorize sua hora clínica atendendo pacientes que ganham em moedas fortes."
              },
              {
                icon: <Users className="w-12 h-12 text-teal-600" />,
                title: "Fidelização",
                description: "Brasileiras no exterior buscam conexão cultural e tendem a manter a terapia por mais tempo."
              }
            ].map((feature, idx) => (
              <div key={idx} className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Method Teaser */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Método Psi na Gringa</h2>
            <p className="text-lg text-slate-300 mb-8">
              Desenvolvemos uma metodologia proprietária em 4 fases para garantir que você tenha uma agenda previsível com pacientes internacionais.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Posicionamento Global",
                "Tráfego Segmentado por País",
                "Funil de Conversão Estratégico",
                "Escala Previsível"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-teal-400" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <button 
              onClick={() => onNavigate('/metodo-psi-na-gringa')}
              className="inline-flex items-center text-teal-400 font-bold hover:text-teal-300"
            >
              Ver detalhes do método <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
          <div className="flex-1">
             <div className="relative">
                <div className="absolute inset-0 bg-teal-500 blur-3xl opacity-20 rounded-full"></div>
                <img 
                  src="https://picsum.photos/600/400?grayscale" 
                  alt="Estratégia Digital" 
                  className="relative rounded-2xl shadow-2xl border border-slate-700"
                />
             </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-teal-600 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronta para expandir sua atuação?
          </h2>
          <p className="text-teal-100 text-xl mb-10 max-w-2xl mx-auto">
            Fale com nossa equipe e descubra se o seu perfil se encaixa na nossa estratégia internacional.
          </p>
          <WhatsAppButton 
            message={WHATSAPP_MESSAGES.home} 
            variant="secondary"
            label="Falar com a OFS Digital no WhatsApp"
          />
        </div>
      </section>
    </>
  );
};