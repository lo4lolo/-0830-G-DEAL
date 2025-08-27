import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { PlayIcon, PauseIcon, ResetIcon, PlusIcon, MinusIcon } from './Icons';

interface TimerProps {
  durationInMinutes: number;
}

const Timer: React.FC<TimerProps> = ({ durationInMinutes }) => {
  const [duration, setDuration] = useState(durationInMinutes);
  const [initialSeconds, setInitialSeconds] = useState(duration * 60);
  const [secondsLeft, setSecondsLeft] = useState(duration * 60);
  const [isActive, setIsActive] = useState(false);
  
  // Update time when duration prop changes (e.g., navigating steps)
  useEffect(() => {
    setIsActive(false);
    setDuration(durationInMinutes);
    const newInitialSeconds = durationInMinutes * 60;
    setInitialSeconds(newInitialSeconds);
    setSecondsLeft(newInitialSeconds);
  }, [durationInMinutes]);

  useEffect(() => {
    let interval: number | null = null;
    if (isActive && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft(seconds => seconds - 1);
      }, 1000);
    } else if (secondsLeft === 0) {
       setIsActive(false);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, secondsLeft]);

  const toggle = useCallback(() => {
    if (secondsLeft > 0) {
      setIsActive(!isActive);
    }
  }, [isActive, secondsLeft]);

  const reset = useCallback(() => {
    setIsActive(false);
    setSecondsLeft(initialSeconds);
  }, [initialSeconds]);
  
  const adjustTime = useCallback((amount: number) => {
    if (isActive) return; // Don't adjust time while timer is running
    const newDuration = Math.max(1, duration + amount);
    setDuration(newDuration);
    const newInitialSeconds = newDuration * 60;
    setInitialSeconds(newInitialSeconds);
    setSecondsLeft(newInitialSeconds);
  }, [isActive, duration]);
  
  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const progress = useMemo(() => initialSeconds > 0 ? ((initialSeconds - secondsLeft) / initialSeconds) * 100 : 0, [secondsLeft, initialSeconds]);

  const buttonClass = "p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors";
  const primaryButtonClass = "p-3 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700";

  return (
    <div className="w-full flex-grow" style={{maxWidth: '500px'}}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-4xl font-bold font-mono text-slate-800 tracking-wider tabular-nums">
          {formatTime(secondsLeft)}
        </span>
        <div className="flex items-center gap-2">
          <button onClick={() => adjustTime(-1)} disabled={isActive} className={buttonClass} aria-label="시간 1분 줄이기">
            <MinusIcon />
          </button>
          <span className="font-semibold text-base text-slate-500 tabular-nums w-12 text-center">{duration}분</span>
          <button onClick={() => adjustTime(1)} disabled={isActive} className={buttonClass} aria-label="시간 1분 늘리기">
            <PlusIcon />
          </button>
          <div className="w-px h-6 bg-slate-200 mx-1"></div> {/* Separator */}
          <button onClick={toggle} className={primaryButtonClass} aria-label={isActive ? '타이머 일시정지' : '타이머 시작'}>
            {isActive ? <PauseIcon /> : <PlayIcon />}
          </button>
          <button onClick={reset} className={buttonClass} aria-label="타이머 초기화">
            <ResetIcon />
          </button>
        </div>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
          <div
              className="bg-gradient-to-r from-green-400 to-teal-500 h-3 rounded-full transition-all duration-500 ease-linear"
              style={{ width: `${progress}%` }}
          ></div>
      </div>
    </div>
  );
};

export default Timer;