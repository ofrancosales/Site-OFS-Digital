import React from 'react';
import { Target, Heart, Award } from 'lucide-react';
import { SEO } from '../components/SEO';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { WHATSAPP_MESSAGES } from '../types';

export const About: React.FC = () => {
  return (
    <>
      <SEO 
        title="Sobre a OFS Digital"
        description="Especialistas em marketing internacional exclusivo para psicólogas brasileiras."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-slate-900 mb-6">Sobre a OFS Digital</h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-12">
              Não somos uma agência genérica. Somos especialistas em conectar psicólogas brasileiras com pacientes que vivem fora do país.
            </p>
            
            <div className="prose prose-lg text-slate-600 mb-12">
              <p>
                A OFS Digital nasceu da identificação de uma necessidade latente: <strong>milhões de brasileiras moram no exterior</strong> e sofrem com a barreira linguística e cultural na hora de cuidar da saúde mental.
              </p>
              <p>
                Ao mesmo tempo, psicólogas no Brasil buscam valorizar seu trabalho e encontrar pacientes comprometidos. Nossa missão é fazer essa ponte através de estratégias de marketing éticas, precisas e eficazes.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-teal-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-teal-600">
                  <Target size={28} />
                </div>
                <h3 className="font-bold text-slate-900">Foco Exclusivo</h3>
                <p className="text-sm text-slate-500 mt-2">100% focado em psicologia e internacionalização.</p>
              </div>
              <div className="text-center">
                <div className="bg-teal-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-teal-600">
                  <Heart size={28} />
                </div>
                <h3 className="font-bold text-slate-900">Ética Profissional</h3>
                <p className="text-sm text-slate-500 mt-2">Respeitamos as normas do CRP e a ética da profissão.</p>
              </div>
              <div className="text-center">
                <div className="bg-teal-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-teal-600">
                  <Award size={28} />
                </div>
                <h3 className="font-bold text-slate-900">Método Validado</h3>
                <p className="text-sm text-slate-500 mt-2">Processos testados com dezenas de profissionais.</p>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl text-center border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Vamos conversar?</h3>
              <p className="text-slate-600 mb-6">
                Descubra como podemos ajudar a escalar seu consultório online.
              </p>
              <WhatsAppButton message={WHATSAPP_MESSAGES.contact} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};