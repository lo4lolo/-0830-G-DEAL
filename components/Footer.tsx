import React from 'react';

interface FooterProps {
  onPrev: () => void;
  onNext: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}

const Footer: React.FC<FooterProps> = ({ onPrev, onNext, isFirstStep, isLastStep }) => {
  const buttonBaseClasses = "px-6 py-3 rounded-lg font-bold text-lg transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow-md disabled:shadow-none";
  const prevButtonClasses = "bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed";
  const nextButtonClasses = "bg-green-600 text-white hover:bg-green-700 disabled:bg-green-300 disabled:cursor-not-allowed";

  return (
    <footer className="bg-white/80 backdrop-blur-sm border-t border-slate-200 sticky bottom-0">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center mb-3">
            <div className="flex-grow">
              <p className="text-xs text-slate-500 leading-relaxed max-w-2xl">
                'DVDM은 KOOFA에서 등록된 질문 프레임 도구입니다. G-DEAL을 위해 하는교사가 도구로 사용하며, 해당 질문 프레임은 쿠퍼실리테이션그룹 구기욱 대표가 개발하였으며, 사용 시 출처 표기가 필요합니다.'
              </p>
            </div>
            <div className="flex gap-4 flex-shrink-0">
              <button
                onClick={onPrev}
                disabled={isFirstStep}
                className={`${buttonBaseClasses} ${prevButtonClasses}`}
              >
                이전
              </button>
              <button
                onClick={onNext}
                disabled={isLastStep}
                className={`${buttonBaseClasses} ${nextButtonClasses}`}
              >
                다음
              </button>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;