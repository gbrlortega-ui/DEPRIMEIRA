
import React from 'react';
import { SummaryModule } from '../types';

const specialtyModules: SummaryModule[] = [
  { id: '1', title: 'Módulos - Clínica Médica', description: 'Cardio, Nefro, Gastro e muito mais filtrado para as bancas de SP.', price: 0, oldPrice: 0, icon: 'medical_services', color: 'bg-red-500/10' },
  { id: '2', title: 'Módulos - Pediatria', description: 'Puericultura, Neonatologia e Urgências Pediátricas essenciais.', price: 0, oldPrice: 0, icon: 'child_care', color: 'bg-blue-500/10' },
  { id: '3', title: 'Módulos - Ginecologia e Obstetrícia', description: 'Obstetrícia e Ginecologia esquematizadas para provas reais.', price: 0, oldPrice: 0, icon: 'pregnant_woman', color: 'bg-pink-500/10' },
  { id: '4', title: 'Módulos - Cirurgia', description: 'Trauma, Abdome Agudo e Cirurgia Geral direta ao ponto.', price: 0, oldPrice: 0, icon: 'content_cut', color: 'bg-green-500/10' },
  { id: '5', title: 'Módulos - Saúde Coletiva', description: 'SUS, Epidemiologia e Ética Médica sem enrolação.', price: 0, oldPrice: 0, icon: 'poll', color: 'bg-purple-500/10' },
  { id: '6', title: 'Combo COMPLETO 2025', description: 'Todos os ebooks de todas as especialidades em um único pacote promocional.', price: 0, oldPrice: 0, icon: 'auto_stories', color: 'bg-secondary/10' },
];

interface LandingPageProps {
  onStartQuiz: (amount: number) => void;
  onViewSummaries: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStartQuiz, onViewSummaries }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleComingSoon = () => {
    alert('Os materiais 2025 estarão disponíveis em breve!');
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark scroll-smooth">
      {/* Urgency Banner */}
      <div className="bg-gradient-to-r from-red-600 to-red-500 text-white py-2 px-4 text-center text-sm font-bold tracking-wide relative overflow-hidden shrink-0">
        <div className="absolute inset-0 bg-white/10 transform -skew-x-12 translate-x-1/2"></div>
        <span className="relative z-10 flex items-center justify-center gap-2">
          <span className="material-icons-round text-base">timer</span>
          LANÇAMENTO EM BREVE: Cadastre-se para garantir o lote promocional 2025!
        </span>
      </div>

      {/* Navbar */}
      <header className="bg-surface-light dark:bg-surface-dark border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="w-32 hidden md:block"></div>
          
          <div className="flex items-center gap-2 text-primary">
            <span className="material-icons-round text-3xl">menu_book</span>
            <h1 className="text-xl font-black tracking-tighter uppercase">DEPRIMEIRA!</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => onStartQuiz(20)}
              className="bg-primary hover:bg-primary-hover text-white px-5 py-2 rounded-xl text-sm font-bold transition-all shadow-glow active:scale-95 whitespace-nowrap"
            >
              Simulado Grátis
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-surface-light dark:bg-surface-dark overflow-hidden border-b border-slate-200 dark:border-slate-700">
        <div className="absolute top-0 left-0 w-full h-full bg-blue-50/50 dark:bg-blue-900/10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10 text-center lg:text-left flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-3/5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-primary text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Metodologia de Aprovação 2025
            </div>
            <h1 className="text-4xl lg:text-7xl font-black text-slate-900 dark:text-white leading-tight">
              Passe na <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Residência Médica</span> sem fortuna.
            </h1>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0">
              USP, UNESP, SUS e Provas de Progresso. Estude com material direcionado, questões comentadas e ebooks de alto rendimento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button 
                onClick={() => onStartQuiz(40)}
                className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-bold shadow-glow text-lg transition-all hover:-translate-y-1 flex items-center justify-center gap-2 active:scale-95"
              >
                <span className="material-icons-round">play_arrow</span>
                Iniciar Simulado
              </button>
              <button 
                onClick={onViewSummaries}
                className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 px-8 py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 shadow-soft hover:-translate-y-1 active:scale-95"
              >
                Ver Catálogo de Ebooks
              </button>
            </div>
          </div>
          <div className="lg:w-2/5 relative">
            <div className="relative bg-gradient-to-br from-primary to-blue-600 rounded-3xl p-8 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 border-4 border-white dark:border-slate-800">
              <div className="absolute -top-6 -right-6 bg-secondary text-white w-20 h-20 rounded-full flex items-center justify-center font-black text-xl shadow-lg rotate-12 z-20">
                2025
              </div>
              <div className="space-y-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                  <div className="h-3 w-3/4 bg-white/50 rounded mb-2"></div>
                  <div className="h-2 w-full bg-white/20 rounded"></div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                  <div className="h-3 w-1/2 bg-white/50 rounded mb-2"></div>
                  <div className="h-10 w-full bg-green-500/40 rounded flex items-center justify-center text-white font-bold text-xs uppercase tracking-widest">
                    Aprovação Estratégica
                  </div>
                </div>
                <div className="bg-white text-primary rounded-xl p-4 font-black text-center shadow-lg transform scale-105 uppercase tracking-tighter">
                  Ebooks em Breve
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <div className="bg-slate-100 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center gap-2">
              <span className="material-icons-round text-primary text-3xl">quiz</span>
              <span className="text-4xl font-black text-slate-900 dark:text-white">500+</span>
              <span className="text-xs uppercase tracking-wider text-slate-500 font-bold">Questões Comentadas</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="material-icons-round text-primary text-3xl">school</span>
              <span className="text-4xl font-black text-slate-900 dark:text-white">850+</span>
              <span className="text-xs uppercase tracking-wider text-slate-500 font-bold">Aprovados em SP</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="material-icons-round text-primary text-3xl">trending_up</span>
              <span className="text-4xl font-black text-slate-900 dark:text-white">2025</span>
              <span className="text-xs uppercase tracking-wider text-slate-500 font-bold">Base Atualizada</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="material-icons-round text-primary text-3xl">verified</span>
              <span className="text-4xl font-black text-slate-900 dark:text-white">USP/SUS</span>
              <span className="text-xs uppercase tracking-wider text-slate-500 font-bold">Foco Máximo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Catalog Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" id="catalogo">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tighter">EBOOKS PREMIUM</h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">Material filtrado com o que realmente é cobrado nas provas mais concorridas. Lote 2025 indisponível no momento.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {specialtyModules.map((m) => {
            const isCombo = m.id === '6';
            return (
              <div key={m.id} className={`group rounded-3xl p-6 border transition-all duration-300 flex flex-col justify-between h-full relative overflow-hidden ${
                isCombo 
                  ? 'bg-gradient-to-br from-slate-900 to-slate-800 dark:from-primary dark:to-blue-700 border-transparent shadow-2xl text-white ring-4 ring-primary/20 scale-[1.02] lg:scale-[1.05]' 
                  : 'bg-surface-light dark:bg-surface-dark border-slate-100 dark:border-slate-700 shadow-soft hover:shadow-xl hover:-translate-y-2'
              }`}>
                {isCombo && <div className="absolute top-0 right-0 bg-secondary text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl z-20 uppercase animate-pulse shadow-sm">Nova Versão 2025</div>}
                <div>
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all ${
                    isCombo 
                      ? 'bg-white/10 group-hover:bg-white/20' 
                      : 'bg-blue-50 dark:bg-blue-900/30 group-hover:bg-primary'
                  }`}>
                    <span className={`material-icons-round text-3xl transition-all ${
                      isCombo ? 'text-white' : 'text-primary group-hover:text-white'
                    }`}>{m.icon}</span>
                  </div>
                  <h3 className={`text-xl font-bold mb-3 leading-tight uppercase tracking-tight ${
                    isCombo ? 'text-white' : 'text-slate-900 dark:text-white'
                  }`}>
                    {m.title}
                  </h3>
                  <p className={`text-sm mb-6 leading-relaxed ${
                    isCombo ? 'text-slate-300' : 'text-slate-500 dark:text-slate-400'
                  }`}>
                    {m.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                     <span className={`text-[10px] px-2 py-1 rounded font-bold uppercase ${
                       isCombo ? 'bg-white/10 text-white' : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                     }`}>EM BREVE</span>
                     <span className={`text-[10px] px-2 py-1 rounded font-bold uppercase ${
                       isCombo ? 'bg-white/10 text-white' : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                     }`}>UPDATE 2025</span>
                  </div>
                </div>
                <div className={`flex items-end justify-between border-t pt-5 mt-2 ${
                  isCombo ? 'border-white/10' : 'border-slate-100 dark:border-slate-700'
                }`}>
                  <div>
                    <p className={`text-[10px] mb-0.5 uppercase font-bold tracking-wide ${
                      isCombo ? 'text-slate-400' : 'text-slate-400'
                    }`}>Status do Material</p>
                    <div className="flex items-center gap-2">
                       <p className={`text-2xl font-black uppercase tracking-tighter ${isCombo ? 'text-secondary' : 'text-primary'}`}>Em Breve</p>
                    </div>
                  </div>
                  <button 
                    onClick={onViewSummaries}
                    className={`px-6 py-2.5 rounded-xl font-semibold shadow-lg transition-all hover:scale-105 active:scale-95 ${
                      isCombo 
                        ? 'bg-slate-700 text-white/50 cursor-not-allowed' 
                        : 'bg-primary hover:bg-primary-hover text-white shadow-blue-500/30'
                    }`}
                  >
                    Acessar
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center">
          <button 
            onClick={onViewSummaries}
            className="group relative inline-flex items-center justify-center gap-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-2 border-primary/20 hover:border-primary/50 px-12 py-5 rounded-2xl font-black text-xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-95 uppercase tracking-tighter"
          >
            <span className="material-icons-round text-primary text-2xl">visibility</span>
            Ver Catálogo 2025
            <span className="material-icons-round text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </div>
      </main>

      {/* Testimonials */}
      <section className="bg-white dark:bg-slate-800 py-24 border-t border-slate-200 dark:border-slate-700" id="depoimentos">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tighter">Quem usou, passou.</h2>
            <p className="text-lg text-slate-500 dark:text-slate-400">Junte-se aos aprovados que usaram a nossa base estratégica.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background-light dark:bg-slate-900/50 p-8 rounded-3xl relative shadow-soft">
              <span className="material-icons-round text-6xl text-blue-100 dark:text-blue-900/30 absolute -top-4 -left-2 transform -rotate-12">format_quote</span>
              <div className="flex items-center gap-1 text-yellow-400 mb-4">
                {[1,2,3,4,5].map(i => <span key={i} className="material-icons-round text-sm">star</span>)}
              </div>
              <p className="text-slate-700 dark:text-slate-300 italic mb-6 text-sm leading-relaxed">"Os ebooks de Clínica são surreais. Consegui revisar Cardiologia inteira em um final de semana e gabaritei a área na prova do SUS."</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-xs uppercase">AS</div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white text-sm">Dra. Amanda Silva</p>
                  <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Residente Pediatria</p>
                </div>
              </div>
            </div>
            <div className="bg-background-light dark:bg-slate-900/50 p-8 rounded-3xl relative shadow-soft">
              <span className="material-icons-round text-6xl text-blue-100 dark:text-blue-900/30 absolute -top-4 -left-2 transform -rotate-12">format_quote</span>
              <div className="flex items-center gap-1 text-yellow-400 mb-4">
                {[1,2,3,4,5].map(i => <span key={i} className="material-icons-round text-sm">star</span>)}
              </div>
              <p className="text-slate-700 dark:text-slate-300 italic mb-6 text-sm leading-relaxed">"O melhor custo-benefício disparado. Materiais diretos, sem enrolação teórica desnecessária. Foco total em acerto de questões."</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-xs uppercase">LF</div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white text-sm">Dr. Lucas Ferreira</p>
                  <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Residente Clínica Médica</p>
                </div>
              </div>
            </div>
            <div className="bg-background-light dark:bg-slate-900/50 p-8 rounded-3xl relative shadow-soft">
              <span className="material-icons-round text-6xl text-blue-100 dark:text-blue-900/30 absolute -top-4 -left-2 transform -rotate-12">format_quote</span>
              <div className="flex items-center gap-1 text-yellow-400 mb-4">
                {[1,2,3,4,5].map(i => <span key={i} className="material-icons-round text-sm">star</span>)}
              </div>
              <p className="text-slate-700 dark:text-slate-300 italic mb-6 text-sm leading-relaxed">"As questões comentadas da UNESP no simulado são o diferencial. Ajudam a entender a pegada da banca de verdade. Recomendo muito!"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-xs uppercase">MC</div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white text-sm">Dra. Mariana Costa</p>
                  <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Residente G.O.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col items-center gap-2 text-white mb-6">
            <div className="flex items-center gap-2">
              <span className="material-icons-round text-primary text-3xl">menu_book</span>
              <span className="font-black text-2xl uppercase tracking-tighter">DEPRIMEIRA!</span>
            </div>
            <p className="text-sm max-w-sm mx-auto">A plataforma estratégica de simulados e ebooks para Residência Médica focada no estado de São Paulo.</p>
          </div>
          <div className="text-center text-[10px] mt-16 pt-8 border-t border-slate-800 uppercase tracking-widest opacity-50">
            © 2024 DEPRIMEIRA! - TODOS OS DIREITOS RESERVADOS.
          </div>
        </div>
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

export default LandingPage;
