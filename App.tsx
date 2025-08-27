import React, { useState, useCallback } from 'react';
import { WORKSHOP_STEPS } from './constants';
import Header from './components/Header';
import ProgressBar from './components/ProgressBar';
import DvdnBoard from './components/DvdnBoard';
import WorkshopStep from './components/WorkshopStep';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const handleNextStep = useCallback(() => {
    setCurrentStepIndex(prev => Math.min(prev + 1, WORKSHOP_STEPS.length - 1));
  }, []);

  const handlePrevStep = useCallback(() => {
    setCurrentStepIndex(prev => Math.max(prev - 1, 0));
  }, []);

  const handleGoHome = useCallback(() => {
    setCurrentStepIndex(0);
  }, []);

  const currentStepData = WORKSHOP_STEPS[currentStepIndex];
  const isFirstStep = currentStepIndex === 0;
  const isLastStep = currentStepIndex === WORKSHOP_STEPS.length - 1;

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800">
      <Header onGoHome={handleGoHome} />
      
      <main className="flex-grow container mx-auto px-4 py-8 flex flex-col gap-8">
        <ProgressBar currentStep={currentStepIndex} totalSteps={WORKSHOP_STEPS.length} />
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 flex-grow">
          <div className="lg:col-span-2">
            <DvdnBoard boardCategory={currentStepData.boardCategory} />
          </div>
          <div className="lg:col-span-3">
            <WorkshopStep stepData={currentStepData} key={currentStepData.id} />
          </div>
        </div>
      </main>
      
      <Footer
        onPrev={handlePrevStep}
        onNext={handleNextStep}
        isFirstStep={isFirstStep}
        isLastStep={isLastStep}
      />
    </div>
  );
};

export default App;