
import React from 'react';
import { Specialty } from '../types';

interface CategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (category: Specialty | 'Geral') => void;
}

const CategoryModal: React.FC<CategoryModalProps> = ({ isOpen, onClose, onSelect }) => {
  if (!isOpen) return null;

  const categories: { id: Specialty | 'Geral', label: string, icon: string, color: string }[] = [
    { id: 'Geral', label: 'Simulado Geral', icon: 'dynamic_feed', color: 'bg-primary' },
    { id: 'Pediatria', label: 'Pediatria', icon: 'child_care', color: 'bg-blue-500' },
    { id: 'Clinica', label: 'Clínica Médica', icon: 'stethoscope', color: 'bg-red-500' },
    { id: 'Cirurgia', label: 'Cirurgia Geral', icon: 'content_cut', color: 'bg-green-500' },
    { id: 'GO', label: 'Ginecologia e Obstetrícia', icon: 'pregnant_woman', color: 'bg-pink-500' },
    { id: 'Preventiva', label: 'Saúde Coletiva', icon: 'analytics', color: 'bg-purple-500' },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-[#1a2632] w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-black text-text-main dark:text-white">Escolha sua Prova</h2>
            <p className="text-sm text-text-secondary">Selecione o foco do seu simulado</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelect(cat.id)}
              className="group flex items-center gap-4 p-4 border-2 border-gray-100 dark:border-gray-800 rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all text-left"
            >
              <div className={`size-12 rounded-lg ${cat.color} flex items-center justify-center text-white shadow-lg shadow-inherit/20`}>
                <span className="material-symbols-outlined shrink-0">{cat.icon}</span>
              </div>
              <div className="min-w-0">
                <span className="block font-bold text-text-main dark:text-white group-hover:text-primary transition-colors truncate">
                  {cat.label}
                </span>
                <span className="text-xs text-text-secondary">
                  Questões reais comentadas
                </span>
              </div>
            </button>
          ))}
        </div>
        
        <div className="p-6 bg-gray-50 dark:bg-[#151f28] text-center">
          <p className="text-xs text-text-secondary">
            <span className="font-bold">Dica:</span> O Simulado Geral mistura questões de todas as áreas no padrão das grandes bancas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoryModal;
