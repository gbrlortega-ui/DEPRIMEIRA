
import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import QuizEngine from './components/QuizEngine';
import CategoryModal from './components/CategoryModal';
import SummaryPage from './components/SummaryPage';
import { Question, Specialty } from './types';
import { allQuestions } from './data/questions';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'quiz' | 'summaries'>('home');
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentAmount, setCurrentAmount] = useState(20);

  const openCategorySelector = (amount: number) => {
    setCurrentAmount(amount);
    setIsModalOpen(true);
  };

  const startQuiz = (category: Specialty | 'Geral') => {
    let filtered = [...allQuestions];
    
    if (category !== 'Geral') {
      filtered = allQuestions.filter(q => q.specialty === category);
    }

    const shuffled = filtered.sort(() => 0.5 - Math.random());
    setQuizQuestions(shuffled.slice(0, currentAmount));
    
    setIsModalOpen(false);
    setView('quiz');
    window.scrollTo(0, 0);
  };

  const handleFinishQuiz = () => {
    setView('home');
    window.scrollTo(0, 0);
  };

  const handleViewSummaries = () => {
    setView('summaries');
    window.scrollTo(0, 0);
  };

  const handleGoBack = () => {
    setView('home');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen">
      {view === 'home' && (
        <>
          <LandingPage onStartQuiz={openCategorySelector} onViewSummaries={handleViewSummaries} />
          <CategoryModal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
            onSelect={startQuiz} 
          />
        </>
      )}
      
      {view === 'quiz' && (
        <QuizEngine 
          questions={quizQuestions} 
          onFinish={handleFinishQuiz} 
          onGoToSummaries={handleViewSummaries}
        />
      )}

      {view === 'summaries' && (
        <SummaryPage onBack={handleGoBack} />
      )}
    </div>
  );
};

export default App;
