import React from 'react';
import { EbookSalesContent } from '../types';

interface EbookSalesPageProps {
  content: EbookSalesContent;
  onBack: () => void;
}

const EbookSalesPage: React.FC<EbookSalesPageProps> = ({ content, onBack }) => {
  if (!content) return null;

  const handlePurchase = () => {
    if (!content.isAvailable) {
      return;
    }
    if (content.hotmartLink) {
      window.open(content.hotmartLink, '_blank');
    } else {
      alert('Este material estará disponível em breve!');
    }
  };

  // Organiza o syllabus em grupos se houver títulos em CAIXA ALTA
  const organizedSyllabus: { title: string; items: string[] }[] = [];
  let currentGroup: { title: string; items: string[] } | null = null;

  content.syllabus.forEach((item) => {
    if (item === item.toUpperCase() && item.length > 5 && !item.includes('(')) {
      if (currentGroup) organizedSyllabus.push(currentGroup);
      currentGroup = { title: item, items: [] };
    } else {
      if (!currentGroup) currentGroup = { title: 'Conteúdo Geral', items: [] };
      currentGroup.items.push(item);
    }
  });
  if (currentGroup) organizedSyllabus.push(currentGroup);

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen font-display flex flex-col transition-colors duration-300">
      <header className="bg-white dark:bg-surface-dark border-b border-slate-200 dark:border-slate-700 h-16 flex items-center px-4 sm:px-8 sticky top-0 z-50">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors group">
          <span className="material-icons-round group-hover:-translate-x-1 transition-transform">arrow_back</span>
          <span className="font-bold text-sm uppercase tracking-wider">Voltar ao Catálogo</span>
        </button>
      </header>

      <main className="max-w-6xl mx-auto w-full p-4 sm:p-8 space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-6 pt-8 animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="size-24 bg-primary/10 rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 shadow-soft ring-8 ring-primary/5">
            <span className="material-icons-round text-primary text-5xl">{content.icon}</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] mb-4">
             <span className="material-icons-round text-xs">verified</span>
             Ebook Premium 2025
          </div>
          <h1 className="text-5xl sm:text-7xl font-black text-slate-900 dark:text-white leading-tight tracking-tighter uppercase italic">
            {content.title}
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 font-medium max-w-3xl mx-auto leading-relaxed">
            {content.tagline}
          </p>
        </section>

        {/* Benefits Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {content.benefits.map((benefit, i) => (
            <div key={i} className="bg-white dark:bg-surface-dark p-5 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-soft flex items-start gap-3">
              <div className="size-8 rounded-xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center shrink-0">
                <span className="material-icons-round text-green-500 text-sm">auto_awesome</span>
              </div>
              <p className="text-slate-700 dark:text-slate-200 font-bold text-xs leading-tight">{benefit}</p>
            </div>
          ))}
        </section>

        {/* Purchase & Description Box */}
        <section className="bg-slate-900 rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <span className="material-icons-round text-[200px]">{content.icon}</span>
          </div>
          
          <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl font-black uppercase tracking-tight italic">Por que este material?</h2>
              <p className="text-blue-100/80 leading-relaxed text-lg font-medium">
                {content.description}
              </p>
              <div className="flex flex-wrap gap-3">
                 <div className="bg-white/10 px-4 py-2 rounded-xl flex items-center gap-2 border border-white/10">
                   <span className="material-icons-round text-amber-400 text-sm">star</span>
                   <span className="text-xs font-black uppercase">Foco USP/SUS-SP</span>
                 </div>
                 <div className="bg-white/10 px-4 py-2 rounded-xl flex items-center gap-2 border border-white/10">
                   <span className="material-icons-round text-amber-400 text-sm">update</span>
                   <span className="text-xs font-black uppercase">Atualizado SBC 2024</span>
                 </div>
              </div>
            </div>
            
            <div className="w-full lg:w-80 bg-white rounded-[2.5rem] p-8 text-center shadow-xl">
              <div className="mb-6">
                <span className="text-slate-400 line-through text-sm">De R$ {content.oldPrice}</span>
                <div className="text-5xl font-black text-primary tracking-tighter italic">R$ {content.newPrice}</div>
                <div className="inline-block bg-green-100 text-green-600 font-black text-[10px] uppercase px-3 py-1 rounded-full mt-2 tracking-widest">{content.discount}</div>
              </div>
              <button 
                onClick={handlePurchase}
                disabled={!content.isAvailable}
                className={`w-full py-5 rounded-2xl font-black text-lg shadow-glow transition-all flex items-center justify-center gap-3 uppercase tracking-tighter italic mb-4 ${
                  content.isAvailable 
                    ? 'bg-primary hover:bg-primary-hover text-white hover:-translate-y-1 active:scale-95' 
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
                <span className="material-icons-round">{content.isAvailable ? 'shopping_cart' : 'timer'}</span>
                {content.isAvailable ? 'Garantir Acesso' : 'Em Breve'}
              </button>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest flex items-center justify-center gap-1">
                <span className="material-icons-round text-xs">verified_user</span>
                Pagamento Seguro via Hotmart
              </p>
            </div>
          </div>
        </section>

        {/* Organized Syllabus Section */}
        <section className="space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">O que você vai dominar</h2>
            <p className="text-slate-500 font-medium">{content.topicsCount} temas estrategicamente selecionados</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {organizedSyllabus.map((module, idx) => (
              <div key={idx} className="bg-white dark:bg-surface-dark rounded-[2.5rem] p-8 border border-slate-100 dark:border-slate-800 shadow-soft group hover:shadow-xl transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className="size-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-glow">
                    <span className="material-icons-round text-base">bookmark</span>
                  </div>
                  <h3 className="font-black text-slate-900 dark:text-white uppercase text-sm tracking-widest leading-tight">
                    {module.title}
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {module.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 group/item">
                      <span className="material-icons-round text-primary/30 text-xs mt-0.5 group-hover/item:text-primary transition-colors">circle</span>
                      <span className="text-slate-600 dark:text-slate-400 text-sm font-medium leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-slate-50 dark:bg-slate-900/50 py-16 rounded-[4rem] text-center border border-slate-100 dark:border-slate-800">
           <div className="max-w-2xl mx-auto px-4 space-y-8">
             <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">Sua vaga na residência começa com a base certa.</h2>
             <button 
                onClick={handlePurchase}
                disabled={!content.isAvailable}
                className={`inline-flex px-12 py-6 rounded-3xl font-black text-2xl shadow-2xl transition-all items-center justify-center gap-4 uppercase tracking-tighter italic ${
                  content.isAvailable 
                    ? 'bg-slate-900 hover:bg-black text-white hover:-translate-y-1 active:scale-95' 
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
                <span className="material-icons-round text-3xl">{content.isAvailable ? 'local_fire_department' : 'timer'}</span>
                {content.isAvailable ? 'Começar a Estudar Agora' : 'Em Breve'}
              </button>
           </div>
        </section>
      </main>
      
      <footer className="bg-slate-950 py-16 mt-24">
        <div className="max-w-6xl mx-auto px-8 flex flex-col items-center">
          <div className="flex items-center gap-3 text-white mb-8">
            <div className="size-10 bg-primary rounded-xl flex items-center justify-center shadow-glow">
              <span className="material-icons-round text-xl">menu_book</span>
            </div>
            <span className="font-black text-2xl uppercase tracking-tighter italic">DEPRIMEIRA!</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full text-center text-slate-500 mb-12 py-12 border-y border-white/5">
             <div className="space-y-2">
               <span className="material-icons-round text-primary">verified</span>
               <p className="text-xs font-bold uppercase tracking-widest text-slate-300">Garantia 7 Dias</p>
               <p className="text-[10px]">Risco zero para sua compra.</p>
             </div>
             <div className="space-y-2">
               <span className="material-icons-round text-primary">bolt</span>
               <p className="text-xs font-bold uppercase tracking-widest text-slate-300">Acesso Imediato</p>
               <p className="text-[10px]">Liberação automática via e-mail.</p>
             </div>
             <div className="space-y-2">
               <span className="material-icons-round text-primary">smartphone</span>
               <p className="text-xs font-bold uppercase tracking-widest text-slate-300">Formato PDF</p>
               <p className="text-[10px]">Otimizado para todos os dispositivos.</p>
             </div>
          </div>
          <p className="text-[10px] text-slate-700 uppercase tracking-[0.4em] font-black">© 2024 DEPRIMEIRA! - TODOS OS DIREITOS RESERVADOS.</p>
        </div>
      </footer>
    </div>
  );
};

export default EbookSalesPage;