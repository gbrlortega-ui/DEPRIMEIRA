
import React, { useState } from 'react';

interface SummaryItem {
  id: string;
  title: string;
  price: number;
  icon: string;
  pages: number;
  features: string[];
  isCombo?: boolean;
  link?: string;
}

interface CategoryGroup {
  id: string;
  label: string;
  icon: string;
  items: SummaryItem[];
  comboPrice: number;
  comboLink?: string;
}

const summaryCategories: CategoryGroup[] = [
  {
    id: 'cardiologia',
    label: 'Cardiologia',
    icon: 'favorite',
    comboPrice: 0,
    items: [
      { id: 'cardio1', title: 'Cardiologia de Alta Performance', price: 0, icon: 'bolt', pages: 150, features: ['Arritmias', 'SCA', 'IC'], link: undefined }
    ]
  },
  {
    id: 'cirurgia',
    label: 'Cirurgia',
    icon: 'content_cut',
    comboPrice: 0,
    items: [
      { id: 'ciru1', title: 'Cirurgia Geral e Trauma', price: 0, icon: 'healing', pages: 120, features: ['Abdome Agudo', 'Trauma', 'Pré-operatório'], link: undefined }
    ]
  },
  {
    id: 'endocrinologia',
    label: 'Endocrinologia',
    icon: 'monitor_weight',
    comboPrice: 0,
    items: [
      { id: 'endo1', title: 'Endocrinologia para Residência', price: 0, icon: 'bloodtype', pages: 100, features: ['Diabetes', 'Tireoide', 'Adrenal'], link: undefined }
    ]
  },
  {
    id: 'gastroenterologia',
    label: 'Gastroenterologia e Hepatologia',
    icon: 'restaurant_menu',
    comboPrice: 0,
    items: [
      { id: 'gastro1', title: 'Gastro e Hepato Esquematizada', price: 0, icon: 'medication', pages: 110, features: ['Hepatites', 'DII', 'HDA'], link: undefined }
    ]
  },
  {
    id: 'go',
    label: 'Ginecologia e Obstetricia',
    icon: 'pregnant_woman',
    comboPrice: 0,
    items: [
      { id: 'go1', title: 'GO de Ponta a Ponta', price: 0, icon: 'female', pages: 140, features: ['Obstetrícia', 'Ginecologia', 'Mastologia'], link: undefined }
    ]
  },
  {
    id: 'hematologia',
    label: 'Hematologia',
    icon: 'bloodtype',
    comboPrice: 0,
    items: [
      { id: 'hemato1', title: 'Hematologia Clínica', price: 0, icon: 'science', pages: 90, features: ['Anemias', 'Leucemias', 'Linfomas'], link: undefined }
    ]
  },
  {
    id: 'imunologia',
    label: 'Imunologia',
    icon: 'biotech',
    comboPrice: 0,
    items: [
      { id: 'imuno1', title: 'Imunologia Básica e Clínica', price: 0, icon: 'shield', pages: 85, features: ['Hipersensibilidade', 'Autoimunidade', 'Imunodeficiências'], link: undefined }
    ]
  },
  {
    id: 'infectologia',
    label: 'Infectologia',
    icon: 'coronavirus',
    comboPrice: 0,
    items: [
      { id: 'infec1', title: 'Infectologia Geral', price: 0, icon: 'bug_report', pages: 95, features: ['Antibioticoterapia', 'HIV', 'Arboviroses'], link: undefined }
    ]
  },
  {
    id: 'nefrologia',
    label: 'Nefrologia',
    icon: 'water_drop',
    comboPrice: 0,
    items: [
      { id: 'nefro1', title: 'Nefrologia Prática', price: 0, icon: 'opacity', pages: 105, features: ['IRA e DRC', 'Distúrbios Hidroeletrolíticos', 'Glomerulopatias'], link: undefined }
    ]
  },
  {
    id: 'neurologia',
    label: 'Neurologia',
    icon: 'psychology',
    comboPrice: 0,
    items: [
      { id: 'neuro1', title: 'Neurologia Estratégica', price: 0, icon: 'brain', pages: 115, features: ['AVC', 'Cefaleias', 'Demências'], link: undefined }
    ]
  },
  {
    id: 'oncologia',
    label: 'Oncologia',
    icon: 'medication_liquid',
    comboPrice: 0,
    items: [
      { id: 'onco1', title: 'Princípios de Oncologia', price: 0, icon: 'clinical_notes', pages: 80, features: ['Rastreamento', 'Estadiamento', 'Emergências Oncológicas'], link: undefined }
    ]
  },
  {
    id: 'pediatria',
    label: 'Pediatria',
    icon: 'child_care',
    comboPrice: 0,
    items: [
      { id: 'ped1', title: 'Pediatria para Residência', price: 0, icon: 'child_friendly', pages: 130, features: ['Puericultura', 'Neonatologia', 'Emergências Pediátricas'], link: undefined }
    ]
  },
  {
    id: 'pneumologia',
    label: 'Pneumologia',
    icon: 'air',
    comboPrice: 0,
    items: [
      { id: 'pneumo1', title: 'Pneumologia Dominada', price: 0, icon: 'lungs', pages: 100, features: ['Asma e DPOC', 'Pneumonias', 'TEP'], link: undefined }
    ]
  },
  {
    id: 'preventiva',
    label: 'Saúde coletiva',
    icon: 'poll',
    comboPrice: 0,
    items: [
      { id: 'prev1', title: 'Preventiva e SUS', price: 0, icon: 'analytics', pages: 90, features: ['Epidemiologia', 'SUS', 'Ética Médica'], link: undefined }
    ]
  }
];

interface SummaryPageProps {
  onBack: () => void;
}

const SummaryPage: React.FC<SummaryPageProps> = ({ onBack }) => {
  const [activeCategory, setActiveCategory] = useState<string>('cardiologia');

  const selectedCategory = summaryCategories.find(c => c.id === activeCategory);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleComingSoon = () => {
    alert('Este material estará disponível em breve!');
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

          <button 
            onClick={() => scrollToSection('produtos')}
            className="hidden md:block bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity"
          >
            Ver Catálogo
          </button>
          <div className="w-8 md:hidden"></div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-surface-light dark:bg-surface-dark overflow-hidden border-b border-slate-200 dark:border-slate-700">
        <div className="absolute top-0 left-0 w-full h-full bg-blue-50/50 dark:bg-blue-900/10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 relative z-10 text-center lg:text-left flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-3/5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-primary text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              Materiais 2025 - Em Breve
            </div>
            <h1 className="text-4xl lg:text-6xl font-black text-slate-900 dark:text-white leading-tight">
              Ebooks de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Alto Rendimento</span>
            </h1>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0">
              Estude pelos temas que mais caem nas bancas de São Paulo (USP, UNESP, UNIFESP e SUS) com conteúdo filtrado por quem entende de prova.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              <button 
                onClick={() => scrollToSection('produtos')}
                className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-bold shadow-glow text-lg transition-all hover:-translate-y-1 flex items-center justify-center gap-2 active:scale-95"
              >
                <span className="material-icons-round">notification_add</span>
                Ver Lançamentos
              </button>
              <div className="flex items-center gap-2 text-slate-500 font-bold text-sm bg-slate-100 dark:bg-slate-800 px-4 py-4 rounded-xl">
                 <span className="material-icons-round text-amber-500">schedule</span>
                 Aguarde o lançamento
              </div>
            </div>
          </div>
          <div className="lg:w-2/5">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-700 rounded-3xl p-10 shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                  <span className="material-icons-round text-9xl text-white">diamond</span>
               </div>
               <div className="relative z-10">
                  <h3 className="text-white font-black text-2xl mb-2 uppercase italic tracking-tighter">Combo Completo</h3>
                  <p className="text-slate-400 text-sm mb-6">Todas as especialidades + Saúde Coletiva em um único pacote vitalício.</p>
                  <div className="text-white text-2xl font-black mb-1 tracking-tighter uppercase">Em Breve</div>
                  <div className="text-slate-500 font-bold mb-8">Novos materiais para 2025</div>
                  <button 
                    onClick={handleComingSoon}
                    className="w-full bg-slate-700 text-white/50 py-4 rounded-xl font-black text-xl cursor-not-allowed transition-all flex items-center justify-center gap-3"
                  >
                    <span className="material-icons-round">lock</span>
                    INDISPONÍVEL
                  </button>
               </div>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1" id="produtos">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <aside className="w-full lg:w-72 flex-shrink-0 space-y-3">
            <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider px-2 mb-4">Navegação Rápida</p>
            {summaryCategories.map(cat => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    scrollToSection('produtos');
                  }}
                  className={`w-full group flex items-center p-3 rounded-2xl transition-all relative overflow-hidden text-left ${
                    isActive 
                      ? 'bg-primary text-white shadow-glow transform scale-[1.02] ring-2 ring-primary ring-offset-2 dark:ring-offset-slate-900' 
                      : 'bg-surface-light dark:bg-surface-dark shadow-sm hover:shadow-md border border-transparent hover:border-slate-200 dark:hover:border-slate-600'
                  }`}
                >
                  {isActive && <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>}
                  <span className={`material-icons-round mr-3 text-xl relative z-10 ${isActive ? 'text-white' : 'text-slate-400 dark:text-slate-400 group-hover:text-primary'}`}>
                    {cat.icon}
                  </span>
                  <span className={`font-bold text-sm relative z-10 ${isActive ? 'text-white' : 'text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white'}`}>
                    {cat.label}
                  </span>
                  {isActive && <span className="material-icons-round absolute right-4 text-white/30 text-base">chevron_right</span>}
                </button>
              );
            })}
          </aside>

          {/* Main Products Grid */}
          <section className="flex-1">
            <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                  {selectedCategory?.label}
                </h2>
                <p className="text-slate-500 dark:text-slate-400 text-lg">Resumos esquematizados em PDF com foco total em aprovação.</p>
              </div>
            </div>

            {/* Category Combo Offer */}
            <div className="mb-10 bg-gradient-to-br from-primary/10 to-blue-500/10 dark:from-primary/20 dark:to-blue-600/20 border-2 border-primary/20 rounded-3xl p-8 relative overflow-hidden group">
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <div className="inline-block bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                    LANÇAMENTO EM BREVE
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-2">Combo {selectedCategory?.label}</h3>
                  <p className="text-slate-500 dark:text-slate-400 mb-6 max-w-md text-sm">Leve todos os ebooks da categoria <strong>{selectedCategory?.label}</strong> com as novas atualizações 2025.</p>
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-black text-primary uppercase tracking-tighter italic">Em Breve</span>
                  </div>
                </div>
                <div className="flex-shrink-0 w-full md:w-auto">
                  <button 
                    onClick={handleComingSoon}
                    className="w-full md:w-auto bg-slate-200 dark:bg-slate-700 text-slate-400 dark:text-slate-500 px-10 py-5 rounded-2xl font-black transition-all text-xl flex items-center justify-center gap-3 cursor-not-allowed uppercase tracking-tighter"
                  >
                    <span className="material-icons-round">lock</span>
                    Indisponível
                  </button>
                </div>
              </div>
            </div>

            {/* Individual Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {selectedCategory?.items.map(item => (
                <div key={item.id} className="group bg-surface-light dark:bg-surface-dark rounded-3xl p-6 border border-slate-100 dark:border-slate-700 shadow-soft transition-all duration-300 flex flex-col justify-between h-full relative overflow-hidden">
                  <div className="opacity-75">
                    <div className="w-14 h-14 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-6">
                      <span className="material-icons-round text-slate-400 text-2xl transition-colors">{item.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 leading-tight min-h-[3rem]">
                      {item.title}
                    </h3>
                    <ul className="space-y-2 mb-8 text-sm text-slate-400 dark:text-slate-500 font-medium">
                      {item.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="material-icons-round text-slate-300 text-lg">done_all</span>
                          {feat}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="flex items-center text-[10px] font-black text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md uppercase tracking-widest">
                        <span className="material-icons-round text-xs mr-1">menu_book</span>
                        {item.pages} pág.
                      </div>
                      <div className="flex items-center text-[10px] font-black text-amber-500 bg-amber-500/5 px-2 py-1 rounded-md uppercase tracking-widest">
                        <span className="material-icons-round text-xs mr-1">schedule</span>
                        EM BREVE
                      </div>
                    </div>
                  </div>
                  <div className="flex items-end justify-between border-t border-slate-50 dark:border-slate-800 pt-5 mt-auto">
                    <div>
                      <p className="text-[10px] text-slate-400 mb-0.5 uppercase font-bold tracking-wide">Status</p>
                      <div className="flex flex-col">
                        <p className="text-lg font-black text-slate-400 dark:text-slate-500 leading-none uppercase tracking-tighter">Em Breve</p>
                      </div>
                    </div>
                    <button 
                      onClick={handleComingSoon}
                      className="bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 px-6 py-3 rounded-xl font-black cursor-not-allowed flex items-center gap-2 text-sm uppercase"
                    >
                      Aguarde
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Guarantee Section */}
      <section className="bg-white dark:bg-slate-900 py-16 border-t border-slate-200 dark:border-slate-700">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10 bg-slate-50 dark:bg-slate-800 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-700">
             <div className="shrink-0">
               <span className="material-icons-round text-8xl text-primary">verified_user</span>
             </div>
             <div className="text-center md:text-left">
               <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tighter">Garantia Blindada DePrimeira!</h2>
               <p className="text-slate-500 dark:text-slate-400 mb-6 font-medium">
                 Todos os nossos lançamentos contam com 7 dias de garantia incondicional após a liberação do acesso. Seu risco é zero.
               </p>
               <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-300">
                    <span className="material-icons-round text-primary text-lg">security</span>
                    Pagamento 100% Seguro
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-300">
                    <span className="material-icons-round text-primary text-lg">mail</span>
                    Suporte VIP em 24h
                  </div>
               </div>
             </div>
          </div>
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
