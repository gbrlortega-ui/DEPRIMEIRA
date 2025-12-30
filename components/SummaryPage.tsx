
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
    id: 'clinica',
    label: 'Clínica Médica',
    icon: 'medical_services',
    comboPrice: 399.90,
    comboLink: 'https://pay.hotmart.com/J103588277O',
    items: [
      { id: 'c1', title: 'Cardiologia para Residência Médica', price: 99.90, icon: 'favorite', pages: 157, features: ['Manejo de Arritmias', 'Síndromes Coronarianas Agudas', 'Insuficiência Cardíaca'], link: 'https://pay.hotmart.com/R103484302U' },
      { id: 'c2', title: 'Pneumologia para Residência Médica', price: 99.90, icon: 'air', pages: 110, features: ['Asma e DPOC', 'Pneumonia e Tuberculose', 'Insuficiência Respiratória e Gasometria'], link: 'https://pay.hotmart.com/R103588234Q' },
      { id: 'c3', title: 'Endocrinologia para Residência Médica', price: 99.90, icon: 'monitor_weight', pages: 101, features: ['Diabetes Mellitus', 'Distúrbios da Tireoide', 'Obesidade e Síndrome Metabólica'], link: 'https://pay.hotmart.com/E103588085Q' },
      { id: 'c4', title: 'Nefrologia para Residência Médica', price: 99.90, icon: 'water_drop', pages: 100, features: ['Lesão Renal Aguda e DRC', 'Distúrbios Hidroeletrolíticos', 'Ácido–Base e Gasometria'], link: 'https://pay.hotmart.com/D103588204W' },
      { id: 'c5', title: 'Gastroenterologia e Hepatologia para Residência Médica', price: 99.90, icon: 'restaurant_menu', pages: 92, features: ['Hemorragia Digestiva', 'Pancreatite Aguda e Doença Péptica', 'Cirrose e Complicações'], link: 'https://pay.hotmart.com/E103588134K' },
      { id: 'c6', title: 'Infectologia para Residência Médica', price: 99.90, icon: 'coronavirus', pages: 55, features: ['Sepse e Choque Séptico', 'HIV, Sífilis e Arboviroses', 'Uso Racional de Antibióticos'], link: 'https://pay.hotmart.com/Y103588162M' },
    ]
  },
  {
    id: 'pediatria',
    label: 'Pediatria',
    icon: 'child_care',
    comboPrice: 129.90,
    comboLink: 'https://pay.hotmart.com/T103588710Q',
    items: [
      { id: 'p1', title: 'Neonatologia para Residência Médica', price: 39.90, icon: 'child_friendly', pages: 30, features: ['Reanimação Neonatal', 'Sepse e Icterícia Neonatal', 'Triagens Neonatais'], link: 'https://pay.hotmart.com/H103588553D' },
      { id: 'p2', title: 'Crescimento e Desenvolvimento para Residência Médica', price: 39.90, icon: 'trending_up', pages: 26, features: ['Marcos do Desenvolvimento', 'Curvas de Crescimento', 'Puberdade Normal e Precoce'], link: 'https://pay.hotmart.com/Q103588521S' },
      { id: 'p3', title: 'Infectologia Pediátrica para Residência Médica', price: 39.90, icon: 'coronavirus', pages: 30, features: ['Calendário Vacinal', 'Infecções Comuns da Infância', 'Meningite e Sepse Pediátrica'], link: 'https://pay.hotmart.com/S103588534F' },
      { id: 'p4', title: 'Urgência e Emergência Pediátrica para Residência Médica', price: 39.90, icon: 'emergency', pages: 30, features: ['Desidratação e Reposição', 'Crise Asmática', 'Choque e PCR Pediátrica'], link: 'https://pay.hotmart.com/G103588680V' },
      { id: 'p5', title: 'Sistema Respiratório Pediátrico para Residência Médica', price: 39.90, icon: 'air', pages: 30, features: ['Asma', 'Bronquiolite', 'Pneumonia'], link: 'https://pay.hotmart.com/O103588614L' },
      { id: 'p6', title: 'Cardiopediatria para Residência Médica', price: 39.90, icon: 'favorite', pages: 30, features: ['Cardiopatias Congênitas', 'Sopros Cardíacos', 'Insuficiência Cardíaca Infantil'], link: 'https://pay.hotmart.com/O103588588Y' },
      { id: 'p7', title: 'Nutrição Pediátrica para Residência Médica', price: 39.90, icon: 'set_meal', pages: 30, features: ['Desnutrição e Obesidade Infantil', 'Anemia Ferropriva', 'Suplementações'], link: 'https://pay.hotmart.com/C103588576U' },
      { id: 'p8', title: 'Temas Transversais em Pediatria para Residência Médica', price: 39.90, icon: 'psychology', pages: 30, features: ['Maus-Tratos e Violência Infantil', 'Febre sem Foco', 'Dor Abdominal Aguda'], link: 'https://pay.hotmart.com/C103588629N' },
    ]
  },
  {
    id: 'go',
    label: 'Gineco e Obstetrícia',
    icon: 'pregnant_woman',
    comboPrice: 69.90,
    comboLink: 'https://pay.hotmart.com/G103589056W',
    items: [
      { id: 'o1', title: 'Obstetrícia para Residência Médica', price: 39.90, icon: 'pregnant_woman', pages: 50, features: ['Síndromes Hipertensivas da Gestação', 'Diabetes na Gestação', 'Hemorragias Obstétricas'], link: 'https://pay.hotmart.com/B103589041D' },
      { id: 'g1', title: 'Ginecologia para Residência Médica', price: 39.90, icon: 'female', pages: 50, features: ['Sangramento Uterino Anormal', 'ISTs', 'Câncer de Colo e Mama'], link: 'https://pay.hotmart.com/F103589024U' },
    ]
  },
  {
    id: 'cirurgia',
    label: 'Cirurgia',
    icon: 'content_cut',
    comboPrice: 89.90,
    comboLink: 'https://pay.hotmart.com/M103589643A',
    items: [
      { id: 's1', title: 'Abdome Agudo para Residência Médica', price: 39.90, icon: 'healing', pages: 35, features: ['Apendicite e Colecistite', 'Obstrução Intestinal', 'Perfuração e Peritonite'], link: 'https://pay.hotmart.com/Y103589550Q' },
      { id: 's2', title: 'Trauma para Residência Médica', price: 39.90, icon: 'emergency_share', pages: 35, features: ['ABCDE do Trauma', 'Trauma Abdominal', 'TCE e Choque'], link: 'https://pay.hotmart.com/G103589589H' },
      { id: 's3', title: 'Cirurgia Geral para Residência Médica', price: 39.90, icon: 'medical_information', pages: 35, features: ['Hérnias', 'Neoplasias Gastrointestinais', 'Infecções Cirúrgicas'], link: 'https://pay.hotmart.com/J103589612H' },
      { id: 's4', title: 'Perioperatório para Residência Médica', price: 39.90, icon: 'assignment', pages: 30, features: ['Avaliação Pré-Operatória', 'Profilaxias', 'Complicações Pós-Operatórias'], link: 'https://pay.hotmart.com/W103589624U' },
    ]
  },
  {
    id: 'saude_coletiva',
    label: 'Saúde Coletiva',
    icon: 'poll',
    comboPrice: 24.90,
    comboLink: 'https://pay.hotmart.com/M103592499K',
    items: [
      { id: 'sc1', title: 'SUS e Atenção Primária para Residência Médica', price: 9.90, icon: 'account_balance', pages: 20, features: ['Princípios do SUS', 'Atenção Primária e ESF', 'Redes de Atenção'], link: 'https://pay.hotmart.com/B103592349M' },
      { id: 'sc2', title: 'Epidemiologia e Vigilância em Saúde para Residência Médica', price: 9.90, icon: 'analytics', pages: 10, features: ['Medidas Epidemiológicas', 'Testes Diagnósticos', 'Tipos de Estudo'], link: 'https://pay.hotmart.com/C103592376N' },
      { id: 'sc3', title: 'Vigilância em Saúde para Residência Médica', price: 9.90, icon: 'biotech', pages: 10, features: ['Doenças de Notificação Compulsória', 'Investigação de Surtos', 'Vigilância Sanitária e Ambiental'], link: 'https://pay.hotmart.com/L103592390K' },
      { id: 'sc4', title: 'Políticas Públicas de Saúde para Residência Médica', price: 9.90, icon: 'groups', pages: 10, features: ['Saúde da Mulher', 'Saúde da Criança', 'Saúde do Idoso'], link: 'https://pay.hotmart.com/D103592410M' },
      { id: 'sc5', title: 'Ética para Residência Médica', price: 9.90, icon: 'gavel', pages: 10, features: ['Princípios Bioéticos', 'Sigilo Médico', 'Consentimento Informado'], link: 'https://pay.hotmart.com/G103592425I' },
    ]
  }
];

interface SummaryPageProps {
  onBack: () => void;
}

const SummaryPage: React.FC<SummaryPageProps> = ({ onBack }) => {
  const [activeCategory, setActiveCategory] = useState<string>('clinica');

  const selectedCategory = summaryCategories.find(c => c.id === activeCategory);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePurchase = (link?: string) => {
    if (link) {
      window.open(link, '_blank');
    } else {
      alert('Link de compra em breve! Estamos finalizando os anúncios.');
    }
  };

  const handlePurchaseFull = () => {
    window.open('https://pay.hotmart.com/A103592656F', '_blank');
  };

  const formatPrice = (p: number) => p.toFixed(2).replace('.', ',');
  const calculateOldPrice = (p: number) => p / 0.7;

  return (
    <div className="bg-background-light dark:bg-background-dark font-sans transition-colors duration-300 min-h-screen text-slate-800 dark:text-slate-100 flex flex-col scroll-smooth">
      {/* Urgency Banner */}
      <div className="bg-gradient-to-r from-red-600 to-red-500 text-white py-2 px-4 text-center text-sm font-bold tracking-wide relative overflow-hidden shrink-0">
        <div className="absolute inset-0 bg-white/10 transform -skew-x-12 translate-x-1/2"></div>
        <span className="relative z-10 flex items-center justify-center gap-2">
          <span className="material-icons-round text-base">timer</span>
          OFERTA RELÂMPAGO: 30% OFF em todos os ebooks até as 23:59!
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
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Materiais 2025 Disponíveis
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
                <span className="material-icons-round">shopping_cart</span>
                Garantir meu Ebook
              </button>
              <div className="flex items-center gap-2 text-slate-500 font-bold text-sm bg-slate-100 dark:bg-slate-800 px-4 py-4 rounded-xl">
                 <span className="material-icons-round text-green-500">check_circle</span>
                 PDF com Acesso Imediato
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
                  <div className="text-white text-5xl font-black mb-1 tracking-tighter">R$ 499,90</div>
                  <div className="text-slate-500 line-through text-lg font-bold mb-8">R$ 714,14</div>
                  <button 
                    onClick={handlePurchaseFull}
                    className="w-full bg-secondary hover:bg-secondary-hover text-white py-4 rounded-xl font-black text-xl shadow-glow-gold transition-all active:scale-95 flex items-center justify-center gap-3"
                  >
                    <span className="material-icons-round">bolt</span>
                    EU QUERO TUDO
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
                  className={`w-full group flex items-center p-4 rounded-2xl transition-all relative overflow-hidden text-left ${
                    isActive 
                      ? 'bg-primary text-white shadow-glow transform scale-[1.02] ring-2 ring-primary ring-offset-2 dark:ring-offset-slate-900' 
                      : 'bg-surface-light dark:bg-surface-dark shadow-sm hover:shadow-md border border-transparent hover:border-slate-200 dark:hover:border-slate-600'
                  }`}
                >
                  {isActive && <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>}
                  <span className={`material-icons-round mr-3 text-2xl relative z-10 ${isActive ? 'text-white' : 'text-slate-400 dark:text-slate-400 group-hover:text-primary'}`}>
                    {cat.icon}
                  </span>
                  <span className={`font-bold relative z-10 ${isActive ? 'text-white' : 'text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white'}`}>
                    {cat.label}
                  </span>
                  {isActive && <span className="material-icons-round absolute right-4 text-white/30">chevron_right</span>}
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
                    RECOMENDADO PARA VOCÊ
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-2">Combo {selectedCategory?.label}</h3>
                  <p className="text-slate-500 dark:text-slate-400 mb-6 max-w-md text-sm">Leve todos os ebooks da categoria <strong>{selectedCategory?.label}</strong> com preço reduzido e bônus exclusivo de questões.</p>
                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-black text-primary">R$ {formatPrice(selectedCategory!.comboPrice)}</span>
                    <span className="text-slate-400 line-through font-bold">R$ {formatPrice(calculateOldPrice(selectedCategory!.comboPrice))}</span>
                  </div>
                </div>
                <div className="flex-shrink-0 w-full md:w-auto">
                  <button 
                    onClick={() => handlePurchase(selectedCategory?.comboLink)}
                    className="w-full md:w-auto bg-primary hover:bg-primary-hover text-white px-10 py-5 rounded-2xl font-black shadow-glow transition-all text-xl flex items-center justify-center gap-3 active:scale-95 uppercase tracking-tighter"
                  >
                    <span className="material-icons-round">shopping_bag</span>
                    Pegar este Combo
                  </button>
                </div>
              </div>
            </div>

            {/* Individual Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {selectedCategory?.items.map(item => (
                <div key={item.id} className="group bg-surface-light dark:bg-surface-dark rounded-3xl p-6 border border-slate-100 dark:border-slate-700 shadow-soft hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full relative overflow-hidden">
                  <div>
                    <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                      <span className="material-icons-round text-primary group-hover:text-white text-2xl transition-colors">{item.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 leading-tight min-h-[3rem]">
                      {item.title}
                    </h3>
                    <ul className="space-y-2 mb-8 text-sm text-slate-600 dark:text-slate-300 font-medium">
                      {item.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="material-icons-round text-green-500 text-lg">done_all</span>
                          {feat}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="flex items-center text-[10px] font-black text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700/50 px-2 py-1 rounded-md uppercase tracking-widest">
                        <span className="material-icons-round text-xs mr-1">menu_book</span>
                        {item.pages} pág.
                      </div>
                      <div className="flex items-center text-[10px] font-black text-primary bg-primary/5 px-2 py-1 rounded-md uppercase tracking-widest">
                        <span className="material-icons-round text-xs mr-1">new_releases</span>
                        ATUALIZADO
                      </div>
                    </div>
                  </div>
                  <div className="flex items-end justify-between border-t border-slate-50 dark:border-slate-800 pt-5 mt-auto">
                    <div>
                      <p className="text-[10px] text-slate-400 mb-0.5 uppercase font-bold tracking-wide">Valor do Ebook</p>
                      <div className="flex flex-col">
                        <span className="text-slate-400 line-through text-xs font-bold leading-none mb-1">R$ {formatPrice(calculateOldPrice(item.price))}</span>
                        <p className="text-2xl font-black text-slate-900 dark:text-white leading-none">R$ {formatPrice(item.price)}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => handlePurchase(item.link)}
                      className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-xl font-black shadow-lg transition-all hover:scale-105 active:scale-95 flex items-center gap-2 text-sm uppercase"
                    >
                      Adquirir
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
                 Você tem 7 dias para testar nossos materiais. Se não achar que eles valem 10x o valor investido, devolvemos seu dinheiro integralmente, sem perguntas chatas.
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
