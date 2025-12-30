
import React, { useState, useEffect } from 'react';
import { Question } from '../types';

interface QuizEngineProps {
  questions: Question[];
  onFinish: () => void;
  onGoToSummaries: () => void;
}

const QuizEngine: React.FC<QuizEngineProps> = ({ questions, onFinish, onGoToSummaries }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null));
  const [showExplanation, setShowExplanation] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = questions[currentIndex];
  const isAnswered = answers[currentIndex] !== null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentIndex, showResults]);

  const handleAnswer = (optionIndex: number) => {
    if (isAnswered) return;
    const newAnswers = [...answers];
    newAnswers[currentIndex] = optionIndex;
    setAnswers(newAnswers);
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowExplanation(answers[currentIndex + 1] !== null);
    } else {
      setShowResults(true);
    }
  };

  const prevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowExplanation(answers[currentIndex - 1] !== null);
    }
  };

  const correctAnswersCount = answers.filter((a, i) => a !== null && a === questions[i].correctAnswer).length;
  const answeredCount = answers.filter(a => a !== null).length;
  const progressPercentage = Math.round((answeredCount / questions.length) * 100);
  const scorePercentage = Math.round((correctAnswersCount / questions.length) * 100);

  const cutOffScores = [
    { name: 'Dermatologia', score: '928.95' },
    { name: 'Clínica Médica', score: '897.00' },
    { name: 'Otorrino', score: '848.00' },
    { name: 'Oftalmologia', score: '852.00' },
    { name: 'Psiquiatria', score: '866.00' },
    { name: 'Anestesiologia', score: '840.00' },
    { name: 'Cirurgia Geral', score: '836.50' },
    { name: 'Ortopedia', score: '798.00' },
  ];

  if (showResults) {
    return (
      <div className="min-h-screen bg-background-light dark:bg-background-dark flex flex-col items-center justify-center p-4 sm:p-6 font-display">
        <div className="max-w-2xl w-full bg-surface-light dark:bg-surface-dark rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden animate-in zoom-in-95 duration-500">
          <div className="bg-primary p-8 text-center text-white">
            <div className="size-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-md">
              <span className="material-icons-round text-4xl">workspace_premium</span>
            </div>
            <h2 className="text-3xl font-black uppercase tracking-tighter text-white">Simulado Finalizado!</h2>
            <p className="opacity-80 font-medium">Confira seu desempenho abaixo</p>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl text-center border border-slate-100 dark:border-slate-800">
                <span className="block text-4xl font-black text-primary mb-1">{correctAnswersCount}/{questions.length}</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Acertos Totais</span>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl text-center border border-slate-100 dark:border-slate-800">
                <span className="block text-4xl font-black text-secondary mb-1">{scorePercentage}%</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Aproveitamento</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/10 dark:to-orange-900/10 border-2 border-amber-200 dark:border-amber-800/50 p-6 rounded-2xl mb-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:scale-110 transition-transform">
                <span className="material-icons-round text-6xl text-amber-600">lightbulb</span>
              </div>
              <div className="relative z-10">
                <h3 className="text-amber-800 dark:text-amber-400 font-black text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
                  <span className="material-icons-round text-base">trending_up</span>
                  Dica de Especialista
                </h3>
                <p className="text-slate-700 dark:text-slate-300 font-bold leading-relaxed">
                  Aumente a quantidade de acertos em <span className="text-secondary">até 20%</span> com resumos direto ao ponto. Estude de maneira inteligente: foque em absorver conteúdos estratégicos que são mais cobrados em provas de residência.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button 
                onClick={onGoToSummaries}
                className="w-full bg-secondary hover:bg-secondary-hover text-white py-5 rounded-2xl font-black text-lg shadow-glow-gold transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3 uppercase tracking-tighter"
              >
                <span className="material-icons-round">auto_stories</span>
                Ver Resumos Premium
              </button>
              <button 
                onClick={onFinish}
                className="w-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 py-4 rounded-2xl font-bold transition-all hover:bg-slate-200 dark:hover:bg-slate-700 active:scale-95"
              >
                Voltar ao Início
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark flex flex-col font-display transition-colors duration-300">
      <header className="bg-surface-light dark:bg-surface-dark border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between relative">
          <div className="flex-1 hidden md:flex items-center">
            <div className="flex flex-col">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Progresso</span>
              <div className="flex items-center gap-2">
                <div className="w-20 h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-primary transition-all duration-500" style={{ width: `${progressPercentage}%` }} />
                </div>
                <span className="text-[10px] font-black text-slate-700 dark:text-slate-200">{progressPercentage}%</span>
              </div>
            </div>
          </div>
          <div className="flex-1 md:hidden"></div>

          <div className="flex items-center gap-2 text-primary absolute left-1/2 -translate-x-1/2">
            <span className="material-icons-round text-3xl">menu_book</span>
            <h1 className="text-xl font-black tracking-tighter uppercase">DEPRIMEIRA!</h1>
          </div>
          
          <div className="flex-1 flex justify-end">
            <button 
              onClick={onFinish}
              className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 active:scale-95"
            >
              <span className="material-icons-round text-sm">exit_to_app</span>
              <span className="hidden sm:inline">Sair</span>
            </button>
          </div>
        </div>
      </header>

      <div className="flex-1 flex flex-col md:flex-row max-w-7xl mx-auto w-full">
        <aside className="w-full md:w-80 bg-surface-light dark:bg-surface-dark md:border-r border-b md:border-b-0 border-slate-200 dark:border-slate-700 p-6 md:h-[calc(100vh-64px)] md:sticky md:top-16 overflow-y-auto space-y-6">
          <div>
            <h3 className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-4">Navegação</h3>
            <div className="grid grid-cols-5 gap-2">
              {questions.map((_, i) => {
                const hasAnswered = answers[i] !== null;
                const isCorrect = answers[i] === questions[i].correctAnswer;
                let baseStyle = "w-full aspect-square rounded-xl text-xs font-black flex items-center justify-center transition-all border-2 ";
                if (i === currentIndex) baseStyle += "border-primary bg-primary/5 text-primary scale-105 shadow-md";
                else if (hasAnswered) baseStyle += isCorrect ? "bg-green-500 border-green-500 text-white shadow-lg" : "bg-red-500 border-red-500 text-white shadow-lg";
                else baseStyle += "bg-slate-50 dark:bg-slate-800 border-transparent text-slate-400 dark:text-slate-600";

                return (
                  <button key={i} onClick={() => setCurrentIndex(i)} className={baseStyle}>
                    {i + 1}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-4 border border-blue-100 dark:border-blue-800/50">
            <div className="flex items-center gap-2 text-primary mb-2">
              <span className="material-icons-round text-lg">info</span>
              <span className="text-xs font-bold uppercase tracking-wider">Status</span>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-slate-500">Respondidas</span>
                <span className="font-bold text-slate-700 dark:text-slate-300">{answeredCount}/{questions.length}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-500">Acertos</span>
                <span className="font-bold text-green-600">{correctAnswersCount}</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-4 border border-slate-100 dark:border-slate-700/50">
            <div className="flex items-center gap-2 text-secondary mb-4">
              <span className="material-icons-round text-lg">military_tech</span>
              <span className="text-xs font-black uppercase tracking-wider">Notas de Corte ENARE</span>
            </div>
            <div className="space-y-1">
              <div className="grid grid-cols-2 text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2 px-1">
                <span>Especialidade</span>
                <span className="text-right">Média 24</span>
              </div>
              {cutOffScores.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center py-1.5 px-1 border-b border-slate-100 dark:border-slate-700/30 last:border-0 hover:bg-white dark:hover:bg-slate-700/30 rounded-lg transition-colors">
                  <span className="text-[10px] font-bold text-slate-600 dark:text-slate-300">{item.name}</span>
                  <span className="text-[10px] font-black text-primary bg-primary/5 px-2 py-0.5 rounded-md">~{item.score}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>

        <main className="flex-1 p-4 sm:p-8">
          <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-primary/20">
                {currentQuestion.institution}
              </span>
              <span className="bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-3 py-1 rounded-full text-[10px] font-bold">
                PROVA {currentQuestion.year}
              </span>
              <span className="bg-secondary/10 text-secondary-hover dark:text-secondary px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-secondary/20">
                {currentQuestion.specialty}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-tight mb-8">
              {currentQuestion.text}
            </h2>

            <div className="space-y-3 mb-10">
              {currentQuestion.options.map((option, i) => {
                const isCorrectOption = i === currentQuestion.correctAnswer;
                const isSelectedOption = i === answers[currentIndex];
                let style = "border-slate-200 dark:border-slate-700 bg-surface-light dark:bg-surface-dark hover:border-primary/50";
                if (isAnswered) {
                  if (isCorrectOption) style = "border-green-500 bg-green-50 dark:bg-green-900/20";
                  else if (isSelectedOption) style = "border-red-500 bg-red-50 dark:bg-red-900/20";
                  else style = "opacity-40 border-slate-100 dark:border-slate-800";
                }

                return (
                  <button key={i} disabled={isAnswered} onClick={() => handleAnswer(i)} className={`group w-full text-left p-4 sm:p-5 border-2 rounded-2xl transition-all flex gap-4 items-center ${style}`}>
                    <div className={`size-8 shrink-0 rounded-lg flex items-center justify-center font-black ${isAnswered && isCorrectOption ? "bg-green-500 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-500"}`}>
                      {String.fromCharCode(65 + i)}
                    </div>
                    <span className="text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-200">{option}</span>
                  </button>
                );
              })}
            </div>

            {showExplanation && (
              <div className="bg-primary/5 dark:bg-primary/10 border-l-4 border-primary p-6 rounded-r-2xl mb-10 animate-in slide-in-from-top-4">
                <div className="flex items-center gap-2 text-primary font-black uppercase text-[10px] mb-3 tracking-widest">Comentário</div>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed font-medium">{currentQuestion.explanation}</p>
              </div>
            )}

            <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800">
              <button onClick={prevQuestion} disabled={currentIndex === 0} className="flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-slate-500 disabled:opacity-30">
                <span className="material-icons-round">arrow_back</span>
                <span>Anterior</span>
              </button>
              <div className="text-xs font-bold text-slate-400">Questão {currentIndex + 1}/{questions.length}</div>
              <button onClick={nextQuestion} className={`flex items-center gap-2 px-6 py-2 rounded-xl font-bold transition-all shadow-lg ${currentIndex === questions.length - 1 && isAnswered ? "bg-secondary text-white" : "bg-primary text-white"}`}>
                <span>{currentIndex === questions.length - 1 ? 'Finalizar' : 'Próxima'}</span>
                <span className="material-icons-round">arrow_forward</span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default QuizEngine;
