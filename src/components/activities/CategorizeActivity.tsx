import React, { useState } from 'react';
import { CategorizeExercise } from '../../types';
import { Check, RotateCcw, Eye, Sparkles, FolderCheck } from 'lucide-react';
import { playCelebration, sfx } from '../../utils/audioAndFx';

interface Props {
  exercise: CategorizeExercise;
  isTeacherMode: boolean;
}

export const CategorizeActivity: React.FC<Props> = ({ exercise, isTeacherMode }) => {
  const [itemAssignments, setItemAssignments] = useState<{ [itemId: string]: string }>({});
  const [showResult, setShowResult] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleAssign = (itemId: string, categoryId: string) => {
    if (showAnswer) return;
    setItemAssignments((prev) => ({
      ...prev,
      [itemId]: categoryId
    }));
    setShowResult(false);
  };

  const handleCheck = () => {
    setShowResult(true);
    let allCorrect = true;
    for (const item of exercise.items) {
      if (itemAssignments[item.id] !== item.correctCategoryId) {
        allCorrect = false;
        break;
      }
    }
    if (allCorrect && Object.keys(itemAssignments).length === exercise.items.length) {
      sfx.playCorrect();
      playCelebration();
    } else {
      sfx.playWrong();
    }
  };

  const handleReset = () => {
    setItemAssignments({});
    setShowResult(false);
    setShowAnswer(false);
  };

  const handleToggleAnswer = () => {
    if (!showAnswer) {
      const answers: { [k: string]: string } = {};
      exercise.items.forEach((item) => {
        answers[item.id] = item.correctCategoryId;
      });
      setItemAssignments(answers);
      setShowAnswer(true);
      setShowResult(true);
    } else {
      handleReset();
    }
  };

  const categoryColors = [
    { bg: 'bg-blue-50/70', border: 'border-blue-200', text: 'text-blue-900', badge: 'bg-blue-600' },
    { bg: 'bg-emerald-50/70', border: 'border-emerald-200', text: 'text-emerald-900', badge: 'bg-emerald-600' },
    { bg: 'bg-purple-50/70', border: 'border-purple-200', text: 'text-purple-900', badge: 'bg-purple-600' }
  ];

  return (
    <div className="bg-white rounded-2xl border border-sky-100 shadow-sm p-6 my-4">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
            Phân loại nhóm
          </span>
          <h4 className="text-lg font-bold text-slate-800">{exercise.instruction}</h4>
        </div>
        <div className="flex items-center gap-2">
          {isTeacherMode && (
            <button
              onClick={handleToggleAnswer}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200 hover:bg-amber-100 transition-colors"
            >
              <Eye size={14} />
              {showAnswer ? 'Ẩn đáp án' : 'Hiện đáp án giáo viên'}
            </button>
          )}
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
          >
            <RotateCcw size={14} />
            Làm lại
          </button>
        </div>
      </div>

      <p className="text-sm text-slate-500 mb-6 italic">
        * Nhấp chọn nhóm thích hợp cho từng nội dung bên dưới.
      </p>

      {/* Items list to categorize */}
      <div className="space-y-4 mb-6">
        {exercise.items.map((item, index) => {
          const currentCat = itemAssignments[item.id];
          const isCorrect = showResult && currentCat === item.correctCategoryId;
          const isWrong = showResult && currentCat && currentCat !== item.correctCategoryId;

          return (
            <div
              key={item.id}
              className={`p-4 rounded-xl border-2 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                isCorrect
                  ? 'border-emerald-400 bg-emerald-50/50'
                  : isWrong
                  ? 'border-rose-300 bg-rose-50/50'
                  : 'border-slate-200 bg-slate-50/70 hover:bg-white'
              }`}
            >
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-slate-200 text-slate-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {index + 1}
                </span>
                <span className="font-semibold text-slate-800 text-base">{item.text}</span>
              </div>

              {/* Category options buttons */}
              <div className="flex items-center gap-2 flex-wrap shrink-0">
                {exercise.categories.map((cat, catIdx) => {
                  const isSelected = currentCat === cat.id;
                  const colorScheme = categoryColors[catIdx % categoryColors.length];

                  return (
                    <button
                      key={cat.id}
                      onClick={() => handleAssign(item.id, cat.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                        isSelected
                          ? `${colorScheme.badge} text-white shadow-xs scale-105`
                          : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-400'
                      }`}
                    >
                      <FolderCheck size={14} />
                      {cat.name}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between flex-wrap gap-3">
        <div className="text-sm text-slate-600 font-medium">
          Đã phân loại:{' '}
          <strong className="text-emerald-600">
            {Object.keys(itemAssignments).length}/{exercise.items.length}
          </strong>{' '}
          mục
        </div>
        <button
          onClick={handleCheck}
          disabled={Object.keys(itemAssignments).length === 0}
          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm shadow-sm transition-all ${
            Object.keys(itemAssignments).length > 0
              ? 'bg-emerald-600 hover:bg-emerald-700 text-white hover:shadow-md cursor-pointer'
              : 'bg-slate-200 text-slate-400 cursor-not-allowed'
          }`}
        >
          <Check size={18} />
          Kiểm tra phân loại
        </button>
      </div>

      {showResult && (
        <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="text-amber-500" size={20} />
            <span className="text-sm font-semibold text-slate-800">
              {exercise.items.every((it) => itemAssignments[it.id] === it.correctCategoryId)
                ? '🎉 Tuyệt vời! Bạn đã phân loại hoàn toàn chính xác theo nội dung SGK!'
                : 'Có mục phân loại chưa đúng, hãy xem lại các dòng có viền đỏ nhé!'}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
