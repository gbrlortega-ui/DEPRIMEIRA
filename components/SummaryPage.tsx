
import React from 'react';
import { ebookDescriptions } from '../data/ebooks-descriptions';

interface SummaryItem {
  id: string;
  title: string;
  icon: string;
  topics: number;
}

const ebooks: SummaryItem[] = [
  { id: '1', title: 'Cardiologia', icon: 'favorite', topics: 89 },
  { id: '2', title: 'Cirurgia', icon: 'content_cut', topics: 78 },
  { id: '3', title: 'Endocrinologia', icon: 'monitor_weight', topics: 87 },
  { id: '4', title: 'Gastroenterologia e Hepatologia', icon: 'restaurant_menu', topics: 78 },
  { id: '5', title: 'Ginecologia e Obstetricia', icon: 'pregnant_woman', topics: 80 },
  { id: '6', title: 'Hematologia', icon: 'bloodtype', topics: 62 },
  { id: '7', title: 'Imunologia', icon: 'biotech', topics: 65 },
  { id: '8', title: 'Infectologia', icon: 'coronavirus', topics: 92 },
  { id: '9', title: 'Nefrologia', icon: 'water_drop', topics: 87 },
  { id: '10', title: 'Neurologia', icon: 'psychology', topics: 74 },
  { id: '11', title: 'Oncologia', icon: 'medication_liquid', topics: 75 },
  { id: '12', title: 'Pediatria', icon: 'child_care', topics: 87 },
  { id: '13', title: 'Pneumologia', icon: 'air', topics: 87 },
  { id: '14', title: 'Saúde coletiva', icon: 'poll', topics: 95 },
].sort((a, b) => a.title.localeCompare(b.title));

interface SummaryPageProps {
  onBack: () => void;
}

const SummaryPage: React.FC<SummaryPageProps> = ({ onBack }) => {
  const handleComingSoon = () => {
    alert('Este material estará disponível em breve na versão 2025!');
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-sans transition-colors duration-300 min-h-screen text-slate-800 dark:text-slate-100 flex flex-col scroll-smooth">
      {/* Urgency Banner */}
      <div className="bg-gradient-to-r from-red-600 to-red-500 text-white py-2 px-4 text-center text-sm font-bold tracking-wide relative overflow-hidden shrink-0">
        <div className="absolute inset-0 bg-white/10 transform -skew-x-12 translate-x-1/2"></div>
        <span className="relative z-10 flex items-center justify-center gap-2">
          <span className="material-icons-round text-base">timer</span>
          LANÇAMENTO EM BREVE: Aguarde as novas atualizações 2025!
        </span>
      </div>

      {/* Header */}
      <header className="bg-surface-light dark:bg-surface-dark shadow-sm border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors group"
          >
            <span className="material-icons-round text-xl mr-1 group-hover:-translate-x-1 transition-transform">arrow_back</span>
            <span className="font-medium text-sm">Voltar</span>
          </button>
          
          <div className="flex items-center gap-2">
            <span className="material-icons-round text-primary text-2xl">menu_book</span>
            <span className="text-xl font-black tracking-tight text-primary uppercase">DEPRIMEIRA!</span>
          </div>

          <div className="w-8 md:w-32"></div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 w-full">
        {/* Combo Hero Section */}
        <div className="mb-12 bg-gradient-to-br from-slate-900 to-slate-800 dark:from-primary dark:to-blue-800 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <span className="material-icons-round text-9xl">diamond</span>
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left max-w-2xl">
              <div className="inline-block bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
                Lote Promocional 2025
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter uppercase italic">Combo Completo</h1>
              <p className="text-blue-100 text-lg md:text-xl font-medium mb-2">
                Todas as 14 especialidades em um único acesso vitalício.
              </p>
              <p className="text-white/60 text-sm mb-8">
                Material focado 100% nas bancas de São Paulo (USP, UNESP, UNIFESP, SUS).
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                 <div className="text-2xl font-black uppercase bg-white text-slate-900 px-6 py-2 rounded-xl shadow-lg">Preço em Breve</div>
                 <button 
                  onClick={handleComingSoon}
                  className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-2xl font-black text-xl shadow-glow-gold transition-all active:scale-95 flex items-center justify-center gap-3 uppercase tracking-tighter"
                >
                  <span className="material-icons-round">lock</span>
                  Adquirir Já
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Ebooks Grid */}
        <div className="text-center mb-10">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-widest mb-2">Catálogo Individual</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {ebooks.map((ebook) => (
            <div 
              key={ebook.id} 
              className="bg-surface-light dark:bg-surface-dark border border-slate-100 dark:border-slate-800 rounded-3xl p-6 shadow-soft hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors">
                    <span className="material-icons-round text-primary text-2xl group-hover:text-white transition-colors">{ebook.icon}</span>
                  </div>
                  
                  {/* Saiba Mais Botão com Tooltip nativo via CSS */}
                  <div className="relative group/tooltip">
                    <button className="p-2 text-slate-400 hover:text-primary transition-colors rounded-full hover:bg-slate-50 dark:hover:bg-slate-800">
                      <span className="material-icons-round text-xl">info</span>
                    </button>
                    <div className="absolute right-0 top-10 w-64 p-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-medium rounded-2xl shadow-2xl opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-300 z-50 border border-white/10 dark:border-slate-200">
                      <p className="leading-relaxed">
                        {ebookDescriptions[ebook.title] || "Descrição técnica do ebook sendo atualizada para a versão 2025."}
                      </p>
                      <div className="absolute -top-1.5 right-4 w-3 h-3 bg-slate-900 dark:bg-white transform rotate-45"></div>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4 leading-tight uppercase tracking-tight min-h-[3rem]">
                  {ebook.title}
                </h3>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center text-[10px] font-bold text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800/50 px-2.5 py-1 rounded-lg uppercase tracking-widest">
                    <span className="material-icons-round text-xs mr-1">list_alt</span>
                    {ebook.topics} temas
                  </div>
                  <div className="flex items-center text-[10px] font-black text-amber-600 bg-amber-50 dark:bg-amber-900/20 px-2.5 py-1 rounded-lg uppercase tracking-widest">
                    <span className="material-icons-round text-xs mr-1">schedule</span>
                    2025
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Valor</span>
                  <span className="text-lg font-black text-slate-400 dark:text-slate-500 uppercase italic tracking-tighter">Em Breve</span>
                </div>
                <button 
                  onClick={handleComingSoon}
                  className="bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-widest transition-all cursor-not-allowed flex items-center gap-2"
                >
                  <span className="material-icons-round text-sm">lock</span>
                  Aguarde
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Guarantee Section */}
      <section className="bg-white dark:bg-slate-900 py-16 border-t border-slate-200 dark:border-slate-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <span className="material-icons-round text-6xl text-primary mb-4">verified_user</span>
           <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tighter">Garantia Blindada DePrimeira!</h2>
           <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium">
             Todos os nossos lançamentos contam com 7 dias de garantia incondicional após a liberação do acesso. Seu risco é zero.
           </p>
        </div>
      </section>

      {/* Footer minimal */}
      <footer className="py-12 text-center bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
        <div className="flex items-center justify-center gap-2 mb-4">
            <span className="material-icons-round text-primary text-2xl">menu_book</span>
            <span className="text-lg font-black tracking-tight text-primary uppercase">DEPRIMEIRA!</span>
        </div>
        <p className="text-[10px] text-slate-400 uppercase tracking-widest px-4">
          © 2024 DEPRIMEIRA! - TODOS OS DIREITOS RESERVADOS. OS MATERIAIS SÃO PARA USO INDIVIDUAL E INTRANSFERÍVEL.
        </p>
      </footer>

      {/* Float Dark Mode */}
      <button 
        aria-label="Toggle Theme" 
        className="fixed bottom-6 right-6 bg-slate-900 dark:bg-white text-white dark:text-slate-900 p-3 rounded-full shadow-lg z-50 hover:scale-110 transition-transform" 
        onClick={() => document.documentElement.classList.toggle('dark')}
      >
        <span className="material-icons-round text-xl dark:hidden">dark_mode</span>
        <span className="material-icons-round text-xl hidden dark:block">light_mode</span>
      </button>
    </div>
  );
};

export default SummaryPage;
