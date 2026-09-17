import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, BellRing, Clock } from 'lucide-react';
import { sfx } from '../../utils/audioAndFx';

interface Props {
  initialMinutes?: number;
}

export const InteractiveTimer: React.FC<Props> = ({ initialMinutes = 3 }) => {
  const [totalSeconds, setTotalSeconds] = useState(initialMinutes * 60);
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            sfx.playTimerBell();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isRunning, timeLeft]);

  const handleSetPreset = (mins: number) => {
    setIsRunning(false);
    setTotalSeconds(mins * 60);
    setTimeLeft(mins * 60);
  };

  const toggleRunning = () => {
    if (timeLeft === 0) {
      setTimeLeft(totalSeconds);
    }
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(totalSeconds);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const progressPercent = totalSeconds > 0 ? (timeLeft / totalSeconds) * 100 : 0;

  return (
    <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-sm shrink-0">
          <Clock size={24} />
        </div>
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-amber-900">
            Bộ đếm giờ thảo luận nhóm
          </div>
          <div className="text-xs text-amber-700">
            Cài đặt thời gian và bấm Bắt đầu để cả lớp cùng quan sát
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 flex-wrap justify-center">
        {/* Preset chips */}
        <div className="flex gap-1.5 bg-white p-1 rounded-xl border border-amber-200">
          {[1, 2, 3, 5].map((m) => (
            <button
              key={m}
              onClick={() => handleSetPreset(m)}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                totalSeconds === m * 60
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'text-amber-900 hover:bg-amber-100'
              }`}
            >
              {m} phút
            </button>
          ))}
        </div>

        {/* Digital display */}
        <div
          className={`font-mono text-2xl sm:text-3xl font-black px-4 py-1.5 rounded-xl border tracking-widest ${
            timeLeft <= 10 && timeLeft > 0
              ? 'bg-rose-100 border-rose-300 text-rose-700 animate-pulse'
              : 'bg-white border-amber-200 text-amber-950'
          }`}
        >
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleRunning}
            className={`p-2.5 rounded-xl font-bold text-white shadow-sm transition-all flex items-center gap-1.5 cursor-pointer ${
              isRunning
                ? 'bg-amber-600 hover:bg-amber-700'
                : 'bg-emerald-600 hover:bg-emerald-700'
            }`}
            title={isRunning ? 'Tạm dừng' : 'Bắt đầu đếm'}
          >
            {isRunning ? <Pause size={18} /> : <Play size={18} />}
            <span className="text-xs">{isRunning ? 'Dừng' : 'Bắt đầu'}</span>
          </button>
          <button
            onClick={handleReset}
            className="p-2.5 rounded-xl bg-white border border-amber-200 text-amber-900 hover:bg-amber-100 transition-all cursor-pointer"
            title="Khôi phục"
          >
            <RotateCcw size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
