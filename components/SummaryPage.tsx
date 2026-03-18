import React from 'react';

interface SummaryItem {
  id: string;
  title: string;
  icon: string;
  topics: number | string;
  oldPrice: string;
  newPrice: string;
  discount: string;
  link?: string;
}

const ebooks: SummaryItem[] = [
  { id: '1', title: 'Cardiologia', icon: 'favorite', topics: 89, oldPrice: '59,90', newPrice: '39,90', discount: '30% OFF', link: 'https://pay.hotmart.com/J103774720L' },
  { id: '2', title: 'Cirurgia', icon: 'content_cut', topics: 78, oldPrice: '59,90', newPrice: '39,90', discount: '30% OFF', link: 'https://pay.hotmart.com/X103849705O' },
  { id: '3', title: 'Dermatologia', icon: 'face', topics: 53, oldPrice: '59,90', newPrice: '39,90', discount: '30% OFF', link: 'https://pay.hotmart.com/B104113666T' },
  { id: '4', title: 'Endocrinologia', icon: 'monitor_weight', topics: 87, oldPrice: '59,90', newPrice: '39,90', discount: '30% OFF', link: 'https://pay.hotmart.com/F103910167I' },
  { id: '5', title: 'Gastroenterologia e Hepatologia', icon: 'restaurant_menu', topics: 78, oldPrice: '59,90', newPrice: '39,90', discount: '30% OFF', link: 'https://pay.hotmart.com/J104056637M' },
  { id: '6', title: 'Ginecologia', icon: 'female', topics: 56, oldPrice: '59,90', newPrice: '39,90', discount: '30% OFF', link: 'https://pay.hotmart.com/H104094833I' },
  { id: '7', title: 'Hematologia', icon: 'bloodtype', topics: 62, oldPrice: '59,90', newPrice: '39,90', discount: '30% OFF', link: 'https://pay.hotmart.com/L104180683A' },
  { id: '8', title: 'Imunologia', icon: 'biotech', topics: 65, oldPrice: '59,90', newPrice: '39,90', discount: '30% OFF', link: 'https://pay.hotmart.com/N104252224G' },
  { id: '9', title: 'Infectologia', icon: 'coronavirus', topics: 92, oldPrice: '59,90', newPrice: '39,90', discount: '30% OFF', link: 'https://pay.hotmart.com/Q103775241W' },
  { id: '10', title: 'Nefrologia', icon: 'water_drop', topics: 87, oldPrice: '59,90', newPrice: '39,90', discount: '30% OFF' },
  { id: '11', title: 'Neurologia', icon: 'psychology', topics: 74, oldPrice: '59,90', newPrice: '39,90', discount: '30% OFF' },
  { id: '12', title: 'Obstetricia', icon: 'pregnant_woman', topics: 54, oldPrice: '59,90', newPrice: '39,90', discount: '30% OFF' },
  { id: '13', title: 'Oncologia', icon: 'medication_liquid', topics: 75, oldPrice: '59,90', newPrice: '39,90', discount: '30% OFF' },
  { id: '14', title: 'Pediatria', icon: 'child_care', topics: 87, oldPrice: '59,90', newPrice: '39,90', discount: '30% OFF' },
  { id: '15', title: 'Pneumologia', icon: 'air', topics: 87, oldPrice: '59,90', newPrice: '39,90', discount: '30% OFF' },
  { id: '16', title: 'Reumatologia', icon: 'accessibility_new', topics: 51, oldPrice: '59,90', newPrice: '39,90', discount: '30% OFF' },
  { id: '17', title: 'Saúde Coletiva', icon: 'poll', topics: 95, oldPrice: '59,90', newPrice: '39,90', discount: '30% OFF' },
  { id: '18', title: 'Urologia', icon: 'water_damage', topics: 65, oldPrice: '59,90', newPrice: '39,90', discount: '30% OFF' },
  { id: '19', title: 'KIT COMPLETO DEPRIMEIRA!', icon: 'diamond', topics: '1300+', oldPrice: '1078,90', newPrice: '399,90', discount: '60% OFF' },
];
const sortedEbooks = [...ebooks].sort((a, b) => {
  if (a.id === '19') return -1;
  if (b.id === '19') return 1;
  return a.title.localeCompare(b.title);
});

interface SummaryPageProps {
  onBack: () => void;
  onViewDetails: (id: string) => void;
}

const SummaryPage: React.FC<SummaryPageProps> = ({ onBack, onViewDetails }) => {
  const handlePurchase = (link?: string) => {
    if (link) {
      window.open(link, '_blank');
    } else {
      // No action if it's "Em Breve"
      return;
    }
  };

  const kitCompleto = ebooks.find(e => e.id === '19');

  return (
    <div className="bg-background-light dark:bg-background-dark font-sans transition-colors duration-300 min-h-screen text-slate-800 dark:text-slate-100 flex flex-col scroll-smooth">
      <header className="bg-surface-light dark:bg-surface-dark shadow-sm border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button onClick={onBack} className="flex items-center text-slate-500 hover:text-primary group transition-colors">
            <span className="material-icons-round text-xl mr-1 group-hover:-translate-x-1 transition-transform">arrow_back</span>
            <span className="font-bold text-sm uppercase tracking-wider">Voltar</span>
          </button>
          <div className="flex items-center gap-2">
            <span className="material-icons-round text-primary text-2xl">menu_book</span>
            <span className="text-xl font-black tracking-tight text-primary uppercase italic">DEPRIMEIRA!</span>
          </div>
          <div className="w-8"></div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 w-full">
        {kitCompleto && (
          <div className="mb-12 bg-gradient-to-br from-slate-900 to-slate-800 dark:from-primary dark:to-blue-800 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden text-white border-4 border-amber-400/30">
            <div className="absolute top-0 right-0 p-4 opacity-10"><span className="material-icons-round text-9xl">diamond</span></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left max-w-2xl">
                <div className="inline-block bg-amber-500 text-white text-[10px] font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest shadow-lg">OFERTA ÚNICA: 60% OFF</div>
                <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter uppercase italic">Kit Completo</h1>
                <p className="text-blue-100 text-lg md:text-xl font-medium mb-8">Mais de 1300 temas das 18 especialidades em um único acesso.</p>
                <div className="flex flex-col sm:flex-row items-center gap-6">
                   <div className="flex flex-col">
                     <span className="text-xs text-white/50 line-through">De R$ {kitCompleto.oldPrice}</span>
                     <span className="text-4xl font-black text-amber-400">R$ {kitCompleto.newPrice}</span>
                   </div>
                   <div className="flex flex-wrap gap-3">
                     <button onClick={() => onViewDetails('19')} className="bg-white/10 hover:bg-white/20 text-white px-6 py-4 rounded-2xl font-black text-lg transition-all active:scale-95 flex items-center justify-center gap-2 uppercase tracking-tighter border border-white/20">
                      <span className="material-icons-round">visibility</span>
                      Saiba Mais
                    </button>
                    <button 
                      onClick={() => handlePurchase(kitCompleto.link)} 
                      disabled={!kitCompleto.link}
                      className={`px-8 py-4 rounded-2xl font-black text-lg transition-all active:scale-95 flex items-center justify-center gap-2 uppercase tracking-tighter ${
                        kitCompleto.link 
                          ? 'bg-amber-500 hover:bg-amber-600 text-white shadow-glow-gold' 
                          : 'bg-slate-700 text-slate-400 cursor-not-allowed'
                      }`}
                    >
                      <span className="material-icons-round">{kitCompleto.link ? 'shopping_cart' : 'timer'}</span>
                      {kitCompleto.link ? 'Adquira Já' : 'Em Breve'}
                    </button>
                   </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedEbooks.filter(e => e.id !== '19').map((ebook) => (
            <div key={ebook.id} className="bg-surface-light dark:bg-surface-dark border border-slate-100 dark:border-slate-800 rounded-3xl p-6 shadow-soft hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors">
                    <span className="material-icons-round text-primary text-2xl group-hover:text-white transition-colors">{ebook.icon}</span>
                  </div>
                  <button onClick={() => onViewDetails(ebook.id)} className="p-2 text-slate-400 hover:text-primary transition-colors"><span className="material-icons-round text-xl">info</span></button>
                </div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2 leading-tight uppercase tracking-tight min-h-[3rem]">{ebook.title}</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  <div className="text-[9px] font-bold text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-lg uppercase tracking-widest">{ebook.topics} temas</div>
                  <div className="text-[9px] font-black text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-lg uppercase tracking-widest">{ebook.discount}</div>
                </div>
              </div>
              <div className="pt-6 border-t border-slate-50 dark:border-slate-800 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 line-through">De R$ {ebook.oldPrice}</span>
                    <span className="text-xl font-black text-primary italic">R$ {ebook.newPrice}</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button onClick={() => onViewDetails(ebook.id)} className="w-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-1.5">
                    <span className="material-icons-round text-sm">visibility</span>
                    Saiba Mais
                  </button>
                  <button 
                    onClick={() => handlePurchase(ebook.link)} 
                    disabled={!ebook.link}
                    className={`w-full py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-1.5 ${
                      ebook.link 
                        ? 'bg-primary hover:bg-primary-hover text-white shadow-glow' 
                        : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                    }`}
                  >
                    <span className="material-icons-round text-sm">{ebook.link ? 'shopping_cart' : 'timer'}</span>
                    {ebook.link ? 'Adquira Já' : 'Em Breve'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default SummaryPage;