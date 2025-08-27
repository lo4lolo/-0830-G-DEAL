import React from 'react';
import type { WorkshopStepData } from '../types';
import Timer from './Timer';
import { ListIcon, QuestionIcon } from './Icons';

interface WorkshopStepProps {
  stepData: WorkshopStepData;
}

const WorkshopStep: React.FC<WorkshopStepProps> = ({ stepData }) => {
  const { title, duration, description, details, questions } = stepData;

  return (
    <div className="bg-white p-6 rounded-xl shadow h-full flex flex-col">
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-6 pb-6 border-b border-slate-200">
        <div className="flex-grow">
          <p className="text-base font-semibold text-green-600">{title.split(':')[0]}: {stepData.shortTitle}</p>
          <h2 className="text-4xl font-bold text-slate-800 tracking-tight">{title.split(':')[1]}</h2>
        </div>
        {duration > 0 && <Timer durationInMinutes={duration} />}
      </div>

      <div className="overflow-y-auto flex-grow pr-2">
        <p className="text-slate-600 mb-6 leading-relaxed">{description}</p>
        
        <div className="mb-6">
          <h3 className="text-lg font-bold text-slate-700 mb-3 flex items-center gap-2">
            <ListIcon />
            상세 활동
          </h3>
          <ul className="space-y-2 list-inside">
            {details.map((detail, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">▪</span>
                <span className="text-slate-700">{detail}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
          <h3 className="text-lg font-bold text-amber-800 mb-3 flex items-center gap-2">
            <QuestionIcon />
            촉진 질문
          </h3>
          <ul className="space-y-2 list-inside">
            {questions.map((question, index) => (
              <li key={index} className="flex items-start">
                 <span className="text-amber-500 mr-2 mt-1">?</span>
                 <span className="text-amber-900 italic">{question}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkshopStep;