import React, { useState } from 'react';
import { TrueFalseExercise } from '../../types';
import { Check, X, Eye, RotateCcw } from 'lucide-react';
import { playCelebration, sfx } from '../../utils/audioAndFx';

interface Props {
  exercise: TrueFalseExercise;
  isTeacherMode: boolean;
}

export const TrueFalseActivity: React.FC<Props> = ({ exercise, isTeacherMode }) => {
  const [userChoice, setUserChoice] = useState<boolean | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleSelect = (choice: boolean) => {
    setUserChoice(choice);
    setShowExplanation(true);
    if (choice === exercise.isCorrect) {
      sfx.playCorrect();
      playCelebration();
    } else {
      sfx.playWrong();
    }
  };

  const handleReset = () => {
    setUserChoice(null);
    setShowExplanation(false);
  };

  return (
    <div className="bg-white rounded-2xl border border-sky-100 shadow-sm p-6 my-4">
      <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
        <span className="bg-purple-100 text-purple-800 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
          Câu hỏi Đúng / Sai
        </span>
        <div className="flex items-center gap-2">
          {isTeacherMode && (
            <span className="inline-flex items-center gap-1 text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200 px-2.5 py-1 rounded-lg">
              <Eye size={13} />
              Đáp án chuẩn: {exercise.isCorrect ? 'ĐÚNG' : 'SAI'}
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

      <div className="text-base font-bold text-slate-800 mb-5 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
        "{exercise.statement}"
      </div>

      <div className="grid grid-cols-2 gap-4 max-w-md">
        <button
          onClick={() => handleSelect(true)}
          className={`py-3 px-5 rounded-xl font-extrabold text-sm flex items-center justify-center gap-2 border-2 transition-all cursor-pointer ${
            userChoice === true
              ? exercise.isCorrect
                ? 'bg-emerald-600 border-emerald-600 text-white shadow-md'
                : 'bg-rose-600 border-rose-600 text-white shadow-md'
              : 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100 hover:border-emerald-300'
          }`}
        >
          <Check size={18} />
          ĐÚNG
        </button>

        <button
          onClick={() => handleSelect(false)}
          className={`py-3 px-5 rounded-xl font-extrabold text-sm flex items-center justify-center gap-2 border-2 transition-all cursor-pointer ${
            userChoice === false
              ? !exercise.isCorrect
                ? 'bg-emerald-600 border-emerald-600 text-white shadow-md'
                : 'bg-rose-600 border-rose-600 text-white shadow-md'
              : 'bg-rose-50 text-rose-800 border-rose-200 hover:bg-rose-100 hover:border-rose-300'
          }`}
        >
          <X size={18} />
          SAI
        </button>
      </div>

      {showExplanation && (
        <div
          className={`mt-4 p-4 rounded-xl border text-sm leading-relaxed transition-all ${
            userChoice === exercise.isCorrect
              ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
              : 'bg-rose-50 border-rose-200 text-rose-900'
          }`}
        >
          <div className="font-bold mb-1">
            {userChoice === exercise.isCorrect
              ? '🎉 Chúc mừng bạn đã chọn chính xác!'
              : 'Chưa chính xác rồi!'}
          </div>
          <div>{exercise.explanation}</div>
        </div>
      )}
    </div>
  );
};
