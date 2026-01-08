
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
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-black transition-all flex items-center justify-center gap-2 shadow-glow-gold hover:-translate-y-1 active:scale-95 text-lg uppercase italic tracking-tighter"
              >
                <span className="material-icons-round animate-bounce">auto_stories</span>
                Quero Ver o Material Premium
              </button>
            </div>
          </div>
          <div className="lg:w-2/5 relative">
            <div className="relative bg-gradient-to-br from-primary to-blue-600 rounded-3xl p-8 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 border-4 border-white dark:border-slate-800">
              <div className="absolute -top-6 -right-6 bg-secondary text-white w-20 h-20 rounded-full flex items-center justify-center font-black text-xl shadow-lg rotate-12 z-20 animate-pulse">
                NOVO
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
                <div onClick={onViewSummaries} className="bg-white text-primary rounded-xl p-4 font-black text-center shadow-lg transform scale-105 cursor-pointer hover:bg-slate-50 transition-colors uppercase tracking-tighter">
                  Ver Conteúdo 2025
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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24" id="catalogo">
        <div className="text-center mb-20 relative">
          <div className="absolute inset-x-0 -top-12 flex justify-center opacity-10">
            <span className="text-9xl font-black uppercase tracking-tighter text-primary">PREMIUM</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tighter italic">Ebooks de Elite</h2>
          <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium">O material que os aprovados escondem. Conteúdo 100% estratégico e atualizado para as provas de 2025.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {specialtyModules.map((m) => {
            const isCombo = m.id === '6';
            return (
              <div 
                key={m.id} 
                onClick={onViewSummaries}
                className={`group cursor-pointer rounded-[2.5rem] p-8 border transition-all duration-500 flex flex-col justify-between h-[420px] relative overflow-hidden ${
                  isCombo 
                    ? 'bg-slate-900 dark:bg-primary border-transparent shadow-2xl scale-[1.03] lg:scale-[1.08] z-20' 
                    : 'bg-surface-light dark:bg-surface-dark border-slate-100 dark:border-slate-800 shadow-soft hover:shadow-2xl hover:-translate-y-3'
                }`}
              >
                {isCombo && (
                  <>
                    <div className="absolute top-0 right-0 bg-secondary text-white text-xs font-black px-6 py-2 rounded-bl-3xl z-30 uppercase shadow-lg">🔥 Recomendado</div>
                    <div className="absolute -bottom-10 -right-10 text-white/5 transform rotate-12">
                      <span className="material-icons-round text-[200px]">diamond</span>
                    </div>
                  </>
                )}
                
                <div>
                  <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-8 transition-all duration-500 shadow-lg ${
                    isCombo 
                      ? 'bg-white/20 group-hover:scale-110 group-hover:rotate-6' 
                      : 'bg-primary/10 group-hover:bg-primary group-hover:scale-110 group-hover:-rotate-6'
                  }`}>
                    <span className={`material-icons-round text-4xl transition-all duration-500 ${
                      isCombo ? 'text-white' : 'text-primary group-hover:text-white'
                    }`}>{m.icon}</span>
                  </div>
                  
                  <h3 className={`text-2xl font-black mb-4 leading-tight uppercase tracking-tight ${
                    isCombo ? 'text-white' : 'text-slate-900 dark:text-white group-hover:text-primary'
                  }`}>
                    {m.title}
                  </h3>
                  
                  <p className={`text-base mb-6 leading-relaxed font-medium ${
                    isCombo ? 'text-blue-100/80' : 'text-slate-500 dark:text-slate-400'
                  }`}>
                    {m.description}
                  </p>
                </div>

                <div className={`mt-auto pt-6 border-t flex items-center justify-between ${
                  isCombo ? 'border-white/10' : 'border-slate-100 dark:border-slate-800'
                }`}>
                  <div className="flex flex-col">
                    <span className={`text-[11px] font-black uppercase tracking-widest mb-1 ${
                      isCombo ? 'text-white/60' : 'text-slate-400'
                    }`}>Status 2025</span>
                    <span className={`text-xl font-black uppercase italic ${
                      isCombo ? 'text-secondary' : 'text-primary'
                    }`}>Em Breve</span>
                  </div>
                  
                  <div className={`size-12 rounded-2xl flex items-center justify-center transition-all ${
                    isCombo ? 'bg-white text-primary' : 'bg-slate-900 text-white group-hover:bg-primary'
                  }`}>
                    <span className="material-icons-round">chevron_right</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center">
          <button 
            onClick={onViewSummaries}
            className="group relative inline-flex items-center justify-center gap-4 bg-gradient-to-r from-primary to-blue-600 text-white px-16 py-6 rounded-[2rem] font-black text-2xl transition-all shadow-glow hover:shadow-2xl hover:-translate-y-2 active:scale-95 uppercase tracking-tighter italic"
          >
            <span className="material-icons-round text-3xl">rocket_launch</span>
            Acessar Catálogo Completo
            <span className="material-icons-round text-3xl group-hover:translate-x-2 transition-transform">arrow_forward</span>
          </button>
        </div>
      </main>

      {/* Testimonials */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-24 border-y border-slate-200 dark:border-slate-800" id="depoimentos">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block">Histórias de Sucesso</span>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tighter italic">Quem usou, passou.</h2>
            <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium">Junte-se aos aprovados que usaram a nossa base estratégica para vencer a concorrência.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                name: "DRa. Amanda",
                role: "Residente Pediatria USP",
                text: "O material é mto tpop! Consegui revisar Cardio inteira num fds e gabaritei a área na prova do SUS. Se vc quer passar, esse é le caminho!",
                initials: "AM",
                color: "bg-blue-500"
              },
              {
                name: "DR. Lucas",
                role: "Residente Clínica UNIFESP",
                text: "Melhor custo-benefício disparado. Materiais diretos, sem aquela enrolação teórica chata. Foco total em acertar questão no padrão SP, recomendo dms!",
                initials: "LU",
                color: "bg-red-500"
              },
              {
                name: "DRa. Mari",
                role: "Residente G.O. UNESP",
                text: "As questões comentadas da UNESP no simulado salvam d+! Ajudam vc a entender a pegada da banca de verdade. Mto tpop msm!",
                initials: "MA",
                color: "bg-pink-500"
              }
            ].map((test, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 p-10 rounded-[3rem] relative shadow-xl border border-slate-100 dark:border-slate-700 group hover:-translate-y-2 transition-all duration-500">
                <div className="absolute -top-6 left-10 size-16 bg-slate-900 text-white rounded-3xl flex items-center justify-center shadow-lg group-hover:bg-primary transition-colors">
                  <span className="material-icons-round text-3xl">format_quote</span>
                </div>
                
                <div className="flex items-center gap-1 text-amber-400 mb-8 mt-4">
                  {[1,2,3,4,5].map(star => <span key={star} className="material-icons-round text-lg">star</span>)}
                </div>
                
                <p className="text-slate-700 dark:text-slate-300 font-bold italic mb-10 text-lg leading-relaxed">"{test.text}"</p>
                
                <div className="flex items-center gap-5 pt-8 border-t border-slate-100 dark:border-slate-700">
                  <div className={`size-14 rounded-2xl ${test.color} flex items-center justify-center font-black text-white text-xl shadow-lg shadow-inherit/30`}>
                    {test.initials}
                  </div>
                  <div>
                    <p className="font-black text-slate-900 dark:text-white text-base uppercase tracking-tight">{test.name}</p>
                    <p className="text-[11px] text-primary uppercase font-black tracking-widest">{test.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col items-center gap-2 text-white mb-8">
            <div className="flex items-center gap-3">
              <div className="size-12 bg-primary rounded-2xl flex items-center justify-center">
                <span className="material-icons-round text-3xl">menu_book</span>
              </div>
              <span className="font-black text-3xl uppercase tracking-tighter italic">DEPRIMEIRA!</span>
            </div>
            <p className="text-base max-w-sm mx-auto mt-4 font-medium">A plataforma estratégica definitiva para aprovação em Residência Médica em São Paulo.</p>
          </div>
          
          <div className="text-center text-[11px] pt-12 border-t border-white/5 uppercase tracking-[0.3em] font-black opacity-30">
            © 2024 DEPRIMEIRA! - TODOS OS DIREITOS RESERVADOS.
          </div>
        </div>
      </footer>

      {/* Float Dark Mode */}
      <button 
        aria-label="Toggle Theme" 
        className="fixed bottom-8 right-8 bg-slate-900 dark:bg-white text-white dark:text-slate-900 size-14 rounded-3xl shadow-2xl z-50 hover:scale-110 transition-all border-4 border-white/10 dark:border-slate-200 flex items-center justify-center" 
        onClick={() => document.documentElement.classList.toggle('dark')}
      >
        <span className="material-icons-round text-2xl dark:hidden">dark_mode</span>
        <span className="material-icons-round text-2xl hidden dark:block">light_mode</span>
      </button>
    </div>
  );
};

export default LandingPage;
