import React, { useState } from 'react';
import { ImageSelectExercise } from '../../types';
import { CheckCircle2, XCircle, Eye, RotateCcw, HelpCircle, Clock, Watch, Hourglass, Car, Phone, Lightbulb } from 'lucide-react';
import { playCelebration, sfx } from '../../utils/audioAndFx';

interface Props {
  exercise: ImageSelectExercise;
  isTeacherMode: boolean;
}

export const ImageSelectActivity: React.FC<Props> = ({ exercise, isTeacherMode }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const getIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Watch':
        return <Watch size={32} className="text-sky-600" />;
      case 'Clock':
        return <Clock size={32} className="text-amber-600" />;
      case 'Hourglass':
        return <Hourglass size={32} className="text-purple-600" />;
      case 'Car':
        return <Car size={32} className="text-emerald-600" />;
      case 'Phone':
        return <Phone size={32} className="text-rose-600" />;
      default:
        return <Lightbulb size={32} className="text-amber-500" />;
    }
  };

  const handleSelect = (id: string, isCorrect: boolean) => {
    setSelectedId(id);
    setShowResult(true);

    if (isCorrect) {
      sfx.playCorrect();
      playCelebration();
    } else {
      sfx.playWrong();
    }
  };

  const handleReset = () => {
    setSelectedId(null);
    setShowResult(false);
  };

  const correctOption = exercise.options.find((o) => o.isCorrect);

  return (
    <div className="bg-white rounded-2xl border border-sky-100 shadow-sm p-6 my-4">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <span className="bg-sky-100 text-sky-800 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
          Quan sát hình ảnh
        </span>
        <div className="flex items-center gap-2">
          {isTeacherMode && correctOption && (
            <span className="inline-flex items-center gap-1 text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200 px-2.5 py-1 rounded-lg">
              <Eye size={13} />
              Đáp án: {correctOption.label}
            </span>
          )}
          <button
            onClick={handleReset}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
            title="Làm lại"
          >
            <RotateCcw size={15} />
          </button>
        </div>
      </div>

      <div className="text-base font-bold text-slate-900 mb-6 flex items-start gap-2.5">
        <HelpCircle className="text-sky-600 shrink-0 mt-0.5" size={20} />
        <span>{exercise.question}</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {exercise.options.map((opt) => {
          const isSelected = selectedId === opt.id;
          let cardStyle =
            'border-slate-200 bg-slate-50/70 hover:border-sky-300 hover:bg-white text-slate-800';

          if (showResult) {
            if (opt.isCorrect) {
              cardStyle = 'border-emerald-500 bg-emerald-50/80 text-emerald-950 font-bold ring-2 ring-emerald-200';
            } else if (isSelected) {
              cardStyle = 'border-rose-500 bg-rose-50/80 text-rose-950 font-bold';
            }
          }

          return (
            <button
              key={opt.id}
              onClick={() => handleSelect(opt.id, opt.isCorrect)}
              className={`p-5 rounded-2xl border-2 transition-all flex flex-col items-center text-center gap-3 cursor-pointer ${cardStyle}`}
            >
              <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                {getIcon(opt.iconName)}
              </div>
              <span className="font-semibold text-sm leading-snug">{opt.label}</span>

              {showResult && (
                <div className="mt-1 flex items-center gap-1.5 text-xs">
                  {opt.isCorrect ? (
                    <span className="text-emerald-700 font-bold flex items-center gap-1">
                      <CheckCircle2 size={16} /> Chính xác
                    </span>
                  ) : isSelected ? (
                    <span className="text-rose-600 font-bold flex items-center gap-1">
                      <XCircle size={16} /> Chưa đúng
                    </span>
                  ) : null}
                </div>
              )}
            </button>
          );
        })}
      </div>

      {showResult && selectedId && (
        <div className="mt-5 p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm">
          {exercise.options.find((o) => o.id === selectedId)?.reason && (
            <div>
              <strong>Giải thích: </strong>
              {exercise.options.find((o) => o.id === selectedId)?.reason}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
