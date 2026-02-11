import React from 'react';
import { MessageSquare, Mail, HelpCircle } from 'lucide-react';
import { SEO } from '../components/SEO';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { WHATSAPP_MESSAGES } from '../types';

export const Contact: React.FC = () => {
  return (
    <>
      <SEO 
        title="Contato | OFS Digital"
        description="Fale com a OFS Digital no WhatsApp e aplique o Método Psi na Gringa."
      />

      <section className="py-20 bg-slate-50 min-h-[80vh] flex items-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Fale com a OFS Digital</h1>
            <p className="text-lg text-slate-600">
              Estamos prontos para analisar o seu momento atual e traçar um plano de crescimento internacional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:border-teal-200 transition-colors">
              <div className="bg-emerald-100 p-4 rounded-full text-emerald-600 mb-6">
                <MessageSquare size={32} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">WhatsApp</h2>
              <p className="text-slate-500 mb-8">Canal exclusivo para agendamento de análises estratégicas.</p>
              <WhatsAppButton message={WHATSAPP_MESSAGES.contact} fullWidth />
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:border-teal-200 transition-colors">
              <div className="bg-blue-100 p-4 rounded-full text-blue-600 mb-6">
                <Mail size={32} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Email</h2>
              <p className="text-slate-500 mb-8">Para parcerias, fornecedores ou dúvidas gerais.</p>
              <a 
                href="mailto:contato@ofsdigital.com.br"
                className="w-full inline-flex items-center justify-center gap-2 font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 py-3 rounded-lg transition-colors"
              >
                contato@ofsdigital.com.br
              </a>
            </div>
          </div>

          <div className="mt-16">
             <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
               <HelpCircle className="text-teal-600" /> Perguntas Rápidas
             </h3>
             <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-2">Preciso falar inglês fluente?</h4>
                  <p className="text-slate-600 text-sm">Não. Nosso foco é conectar você com brasileiras que moram fora e preferem atendimento em português.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200">
                   <h4 className="font-bold text-slate-900 mb-2">Quanto tempo demora para ter resultado?</h4>
                   <p className="text-slate-600 text-sm">Depende do investimento e nicho, mas geralmente em 30 a 60 dias o funil já está rodando e gerando agendamentos.</p>
                </div>
             </div>
          </div>
        </div>
      </section>
    </>
  );
};