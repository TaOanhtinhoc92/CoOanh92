import React, { useState } from 'react';
import { MultipleChoiceExercise } from '../../types';
import { CheckCircle2, XCircle, Eye, RotateCcw, HelpCircle } from 'lucide-react';
import { playCelebration, sfx } from '../../utils/audioAndFx';

interface Props {
  exercise: MultipleChoiceExercise;
  isTeacherMode: boolean;
}

export const McqActivity: React.FC<Props> = ({ exercise, isTeacherMode }) => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleChoose = (idx: number) => {
    setSelectedIdx(idx);
    setShowResult(true);

    if (idx === exercise.correctAnswer) {
      sfx.playCorrect();
      playCelebration();
    } else {
      sfx.playWrong();
    }
  };

  const handleReset = () => {
    setSelectedIdx(null);
    setShowResult(false);
  };

  return (
    <div className="bg-white rounded-2xl border border-sky-100 shadow-sm p-6 my-4">
      <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
            Trắc nghiệm kiến thức
          </span>
        </div>
        <div className="flex items-center gap-2">
          {isTeacherMode && (
            <span className="inline-flex items-center gap-1 text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200 px-2.5 py-1 rounded-lg">
              <Eye size={13} />
              Đáp án đúng: {String.fromCharCode(65 + exercise.correctAnswer)}
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

      <div className="text-base font-bold text-slate-900 mb-5 leading-snug flex items-start gap-2.5">
        <HelpCircle className="text-sky-600 shrink-0 mt-0.5" size={20} />
        <span>{exercise.question}</span>
      </div>

      <div className="space-y-2.5">
        {exercise.options.map((opt, idx) => {
          const isSelected = selectedIdx === idx;
          const isCorrect = idx === exercise.correctAnswer;

          let btnStyle =
            'border-slate-200 bg-slate-50/70 text-slate-800 hover:bg-white hover:border-sky-300';
          if (showResult) {
            if (isCorrect) {
              btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold ring-2 ring-emerald-200';
            } else if (isSelected) {
              btnStyle = 'border-rose-500 bg-rose-50 text-rose-950 font-bold';
            }
          }

          return (
            <button
              key={idx}
              onClick={() => handleChoose(idx)}
              className={`w-full p-4 rounded-xl border-2 text-left transition-all flex items-center justify-between gap-3 cursor-pointer ${btnStyle}`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 border ${
                    showResult && isCorrect
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : showResult && isSelected
                      ? 'bg-rose-600 text-white border-rose-600'
                      : 'bg-white text-slate-700 border-slate-300'
                  }`}
                >
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className="text-sm md:text-base leading-snug">{opt}</span>
              </div>

              {showResult && (
                <div>
                  {isCorrect ? (
                    <CheckCircle2 className="text-emerald-600 shrink-0" size={20} />
                  ) : isSelected ? (
                    <XCircle className="text-rose-500 shrink-0" size={20} />
                  ) : null}
                </div>
              )}
            </button>
          );
        })}
      </div>

      {showResult && (
        <div
          className={`mt-4 p-4 rounded-xl border text-sm leading-relaxed ${
            selectedIdx === exercise.correctAnswer
              ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
              : 'bg-amber-50 border-amber-200 text-amber-900'
          }`}
        >
          <div className="font-bold mb-1">
            {selectedIdx === exercise.correctAnswer
              ? '🎉 Rất chính xác!'
              : '💡 Giải thích đáp án đúng theo SGK:'}
          </div>
          <div>{exercise.explanation}</div>
        </div>
      )}
    </div>
  );
};
