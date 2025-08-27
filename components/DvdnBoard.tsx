import React from 'react';

interface DvdnBoardProps {
  boardCategory: 'intro' | 'D1' | 'V' | 'D2' | 'M' | 'outro';
}

const BoardCell: React.FC<{ title: string; subtitle: string; isActive: boolean }> = ({ title, subtitle, isActive }) => {
  const activeClasses = 'bg-green-100 border-green-500 scale-105 shadow-lg';
  const inactiveClasses = 'bg-white border-slate-200';

  return (
    <div className={`flex flex-col justify-center items-center p-6 rounded-xl border-2 transition-all duration-300 ${isActive ? activeClasses : inactiveClasses}`}>
      <h3 className="text-5xl font-extrabold text-green-600">{title}</h3>
      <p className="text-slate-600 font-semibold mt-1">{subtitle}</p>
    </div>
  );
};

const DvdnBoard: React.FC<DvdnBoardProps> = ({ boardCategory }) => {
  if (boardCategory === 'intro' || boardCategory === 'outro') {
    return (
      <div className="bg-white p-6 rounded-xl shadow h-full flex flex-col justify-center items-center text-center">
        <h3 className="text-2xl font-bold text-slate-700">
          {boardCategory === 'intro' ? "워크숍 준비 단계" : "결과 공유 및 마무리"}
        </h3>
        <p className="text-slate-500 mt-2">
          {boardCategory === 'intro' ? "본격적인 활동에 앞서 워크숍의 전체 그림을 확인합니다." : "논의된 결과를 정리하고 다음 단계를 준비합니다."}
        </p>
      </div>
    );
  }

  return (
    <div className="p-4 bg-slate-200 rounded-xl shadow-inner h-full">
      <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
        <BoardCell title="D" subtitle="정의하기" isActive={boardCategory === 'D1'} />
        <BoardCell title="V" subtitle="가치찾기" isActive={boardCategory === 'V'} />
        <BoardCell title="D" subtitle="난관탐색" isActive={boardCategory === 'D2'} />
        <BoardCell title="M" subtitle="해법찾기" isActive={boardCategory === 'M'} />
      </div>
    </div>
  );
};

export default DvdnBoard;