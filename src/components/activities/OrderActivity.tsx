import React, { useState } from 'react';
import { OrderExercise } from '../../types';
import { ArrowUp, ArrowDown, Check, RotateCcw, Eye, Sparkles, GripVertical } from 'lucide-react';
import { playCelebration, sfx } from '../../utils/audioAndFx';

interface Props {
  exercise: OrderExercise;
  isTeacherMode: boolean;
}

export const OrderActivity: React.FC<Props> = ({ exercise, isTeacherMode }) => {
  const [items, setItems] = useState(() => {
    // Shuffle slightly initially if already sorted
    return [...exercise.items];
  });
  const [showResult, setShowResult] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const moveItem = (index: number, direction: 'up' | 'down') => {
    if (showAnswer) return;
    const newItems = [...items];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= newItems.length) return;

    const temp = newItems[index];
    newItems[index] = newItems[targetIndex];
    newItems[targetIndex] = temp;

    setItems(newItems);
    setShowResult(false);
  };

  const handleCheck = () => {
    setShowResult(true);
    const userOrder = items.map((i) => i.id);
    const correct = JSON.stringify(userOrder) === JSON.stringify(exercise.correctOrder);
    setIsCorrect(correct);

    if (correct) {
      sfx.playCorrect();
      playCelebration();
    } else {
      sfx.playWrong();
    }
  };

  const handleReset = () => {
    setItems([...exercise.items]);
    setShowResult(false);
    setShowAnswer(false);
    setIsCorrect(false);
  };

  const handleToggleAnswer = () => {
    if (!showAnswer) {
      const sorted = [...exercise.items].sort((a, b) => {
        return exercise.correctOrder.indexOf(a.id) - exercise.correctOrder.indexOf(b.id);
      });
      setItems(sorted);
      setShowAnswer(true);
      setShowResult(true);
      setIsCorrect(true);
    } else {
      handleReset();
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-sky-100 shadow-sm p-6 my-4">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
            Sắp xếp quy trình
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
              {showAnswer ? 'Ẩn đáp án' : 'Hiện đáp án chuẩn SGK'}
            </button>
          )}
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
          >
            <RotateCcw size={14} />
            Khôi phục ban đầu
          </button>
        </div>
      </div>

      <p className="text-sm text-slate-500 mb-5 italic">
        * Dùng các nút mũi tên Lên / Xuống để di chuyển các bước về đúng trình tự chuẩn.
      </p>

      <div className="space-y-3">
        {items.map((item, index) => {
          const isAtCorrectPos = showResult && exercise.correctOrder[index] === item.id;
          return (
            <div
              key={item.id}
              className={`p-4 rounded-xl border-2 transition-all flex items-center justify-between gap-4 ${
                showResult
                  ? isAtCorrectPos
                    ? 'border-emerald-400 bg-emerald-50/60'
                    : 'border-rose-300 bg-rose-50/60'
                  : 'border-slate-200 bg-slate-50/80 hover:bg-white hover:border-slate-300'
              }`}
            >
              <div className="flex items-center gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-sky-600 text-white font-extrabold text-sm flex items-center justify-center shrink-0 shadow-xs">
                  {index + 1}
                </div>
                <GripVertical className="text-slate-400 shrink-0 hidden sm:block" size={18} />
                <span className="text-base font-semibold text-slate-800 leading-snug">{item.text}</span>
              </div>

              <div className="flex items-center gap-1 shrink-0">
                <button
                  onClick={() => moveItem(index, 'up')}
                  disabled={index === 0}
                  className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none text-slate-700 shadow-xs"
                  title="Di chuyển lên"
                >
                  <ArrowUp size={16} />
                </button>
                <button
                  onClick={() => moveItem(index, 'down')}
                  disabled={index === items.length - 1}
                  className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none text-slate-700 shadow-xs"
                  title="Di chuyển xuống"
                >
                  <ArrowDown size={16} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Action footer */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between flex-wrap gap-3">
        <div className="text-xs text-slate-500">
          Tổng số bước:{' '}
          <strong className="text-slate-700 font-bold">{exercise.correctOrder.length} bước</strong>
        </div>
        <button
          onClick={handleCheck}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm bg-sky-600 hover:bg-sky-700 text-white shadow-sm hover:shadow-md transition-all cursor-pointer"
        >
          <Check size={18} />
          Kiểm tra thứ tự
        </button>
      </div>

      {showResult && (
        <div
          className={`mt-4 p-4 rounded-xl border flex items-center justify-between ${
            isCorrect ? 'bg-emerald-50 border-emerald-200' : 'bg-rose-50 border-rose-200'
          }`}
        >
          <div className="flex items-center gap-2">
            <Sparkles className={isCorrect ? 'text-emerald-600' : 'text-rose-500'} size={20} />
            <span
              className={`text-sm font-semibold ${
                isCorrect ? 'text-emerald-900' : 'text-rose-900'
              }`}
            >
              {isCorrect
                ? '🎉 Chính xác! Bạn đã sắp xếp đúng quy trình chuẩn theo SGK!'
                : 'Thứ tự chưa hoàn toàn chính xác, hãy hoán đổi các vị trí có màu đỏ nhé!'}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
