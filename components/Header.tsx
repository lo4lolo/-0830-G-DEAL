import React from 'react';
import { HomeIcon } from './Icons';

interface HeaderProps {
  onGoHome: () => void;
}

const Header: React.FC<HeaderProps> = ({ onGoHome }) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img 
            src="https://folio.itt.link/attachfiles/upload/board/SITE_000000000000001/323/BBSMSTR_000003234647/FILE_000000005988802_1" 
            alt="G-DEAL Logo"
            className="h-10"
          />
          <div>
            <h1 className="text-xl font-bold text-slate-800">G-DEAL 커뮤니티 워크숍: DVDM 프레임</h1>
            <p className="text-sm text-slate-500">교사 커뮤니티 성장을 위한 디지털 퍼실리테이터</p>
          </div>
        </div>
        <button
          onClick={onGoHome}
          className="p-2 rounded-full text-slate-600 hover:bg-slate-100 hover:text-green-600 transition-colors"
          aria-label="처음으로 돌아가기"
        >
          <HomeIcon />
        </button>
      </div>
    </header>
  );
};

export default Header;