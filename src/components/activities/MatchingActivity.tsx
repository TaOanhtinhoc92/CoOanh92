import React, { useState } from 'react';
import { MatchingExercise } from '../../types';
import { Check, RotateCcw, Eye, Sparkles } from 'lucide-react';
import { playCelebration, sfx } from '../../utils/audioAndFx';

interface Props {
  exercise: MatchingExercise;
  isTeacherMode: boolean;
}

export const MatchingActivity: React.FC<Props> = ({ exercise, isTeacherMode }) => {
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [userPairs, setUserPairs] = useState<{ [leftId: string]: string }>({});
  const [showResult, setShowResult] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const colors = [
    'border-blue-500 bg-blue-50 text-blue-900',
    'border-emerald-500 bg-emerald-50 text-emerald-900',
    'border-amber-500 bg-amber-50 text-amber-900',
    'border-purple-500 bg-purple-50 text-purple-900',
    'border-rose-500 bg-rose-50 text-rose-900'
  ];

  const handleLeftClick = (id: string) => {
    if (showAnswer) return;
    setSelectedLeft(id);
  };

  const handleRightClick = (rightId: string) => {
    if (showAnswer) return;
    if (!selectedLeft) return;

    const newPairs = { ...userPairs, [selectedLeft]: rightId };
    setUserPairs(newPairs);
    setSelectedLeft(null);

    // If all are paired, evaluate
    if (Object.keys(newPairs).length === exercise.leftItems.length) {
      checkAll(newPairs);
    }
  };

  const checkAll = (pairsToCheck = userPairs) => {
    setShowResult(true);
    let allCorrect = true;
    for (const pair of exercise.correctPairs) {
      if (pairsToCheck[pair.leftId] !== pair.rightId) {
        allCorrect = false;
        break;
      }
    }
    if (allCorrect && Object.keys(pairsToCheck).length === exercise.leftItems.length) {
      sfx.playCorrect();
      playCelebration();
    } else {
      sfx.playWrong();
    }
  };

  const handleReset = () => {
    setUserPairs({});
    setSelectedLeft(null);
    setShowResult(false);
    setShowAnswer(false);
  };

  const handleToggleAnswer = () => {
    if (!showAnswer) {
      const answers: { [k: string]: string } = {};
      exercise.correctPairs.forEach((p) => {
        answers[p.leftId] = p.rightId;
      });
      setUserPairs(answers);
      setShowAnswer(true);
      setShowResult(true);
    } else {
      handleReset();
    }
  };

  // Helper to get pairing badge index
  const getPairIndex = (leftId: string) => {
    const keys = Object.keys(userPairs);
    const idx = keys.indexOf(leftId);
    return idx >= 0 ? idx : -1;
  };

  const getRightPairKey = (rightId: string) => {
    return Object.keys(userPairs).find((lId) => userPairs[lId] === rightId);
  };

  const isPairCorrect = (leftId: string) => {
    const target = exercise.correctPairs.find((p) => p.leftId === leftId);
    return target && userPairs[leftId] === target.rightId;
  };

  return (
    <div className="bg-white rounded-2xl border border-sky-100 shadow-sm p-6 my-4">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <span className="bg-sky-100 text-sky-800 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
            Bài tập nối cột
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
        * Hướng dẫn: Nhấp chuột chọn 1 mục ở Cột A, sau đó nhấp vào mục tương ứng ở Cột B để nối.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        {/* Left Column */}
        <div className="space-y-3">
          <div className="text-xs font-bold text-sky-700 uppercase tracking-wide px-1">
            Cột A: Thông tin / Đối tượng
          </div>
          {exercise.leftItems.map((item, index) => {
            const isSelected = selectedLeft === item.id;
            const pairIdx = getPairIndex(item.id);
            const isPaired = pairIdx !== -1;
            const pairedColor = isPaired ? colors[pairIdx % colors.length] : '';

            return (
              <div
                key={item.id}
                onClick={() => handleLeftClick(item.id)}
                className={`p-4 rounded-xl border-2 transition-all cursor-pointer flex items-center justify-between gap-3 ${
                  isSelected
                    ? 'border-sky-500 bg-sky-50 ring-2 ring-sky-200 shadow-md scale-[1.01]'
                    : isPaired
                    ? pairedColor
                    : 'border-slate-200 bg-slate-50/70 hover:border-sky-300 hover:bg-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-white border border-slate-300 font-bold text-xs flex items-center justify-center text-slate-700 shadow-xs">
                    {index + 1}
                  </span>
                  <span className="font-semibold text-slate-800 text-base">{item.text}</span>
                </div>

                {isPaired && (
                  <div className="flex items-center gap-1.5">
                    {showResult && (
                      <span
                        className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                          isPairCorrect(item.id)
                            ? 'bg-emerald-100 text-emerald-700'
                            : 'bg-rose-100 text-rose-700'
                        }`}
                      >
                        {isPairCorrect(item.id) ? 'Đúng' : 'Chưa đúng'}
                      </span>
                    )}
                    <span className="w-6 h-6 rounded-full bg-sky-600 text-white text-xs font-bold flex items-center justify-center">
                      {pairIdx + 1}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Column */}
        <div className="space-y-3">
          <div className="text-xs font-bold text-sky-700 uppercase tracking-wide px-1">
            Cột B: Đặc điểm / Vai trò / Chức năng
          </div>
          {exercise.rightItems.map((item, index) => {
            const pairedLeftKey = getRightPairKey(item.id);
            const pairIdx = pairedLeftKey ? getPairIndex(pairedLeftKey) : -1;
            const isPaired = pairIdx !== -1;
            const pairedColor = isPaired ? colors[pairIdx % colors.length] : '';

            return (
              <div
                key={item.id}
                onClick={() => handleRightClick(item.id)}
                className={`p-4 rounded-xl border-2 transition-all cursor-pointer flex items-center justify-between gap-3 ${
                  selectedLeft
                    ? 'border-sky-300 bg-sky-50/50 hover:bg-sky-100/70 hover:border-sky-500 animate-pulse'
                    : isPaired
                    ? pairedColor
                    : 'border-slate-200 bg-slate-50/70 hover:border-sky-300 hover:bg-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-white border border-slate-300 font-bold text-xs flex items-center justify-center text-slate-700 shadow-xs">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="text-slate-800 text-base leading-snug">{item.text}</span>
                </div>

                {isPaired && (
                  <span className="w-6 h-6 rounded-full bg-sky-600 text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {pairIdx + 1}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Evaluation Bar */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between flex-wrap gap-3">
        <div className="text-sm font-medium text-slate-600">
          Đã ghép:{' '}
          <strong className="text-sky-600">
            {Object.keys(userPairs).length}/{exercise.leftItems.length}
          </strong>{' '}
          cặp
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => checkAll()}
            disabled={Object.keys(userPairs).length === 0}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm shadow-sm transition-all ${
              Object.keys(userPairs).length > 0
                ? 'bg-sky-600 hover:bg-sky-700 text-white hover:shadow-md cursor-pointer'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            <Check size={18} />
            Kiểm tra kết quả
          </button>
        </div>
      </div>

      {showResult && (
        <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="text-amber-500" size={20} />
            <span className="text-sm font-semibold text-slate-800">
              {exercise.correctPairs.every((p) => userPairs[p.leftId] === p.rightId)
                ? '🎉 Tuyệt vời! Bạn đã ghép đúng toàn bộ các cặp theo SGK!'
                : 'Hãy kiểm tra lại các cặp có nhãn màu đỏ chưa chính xác nhé!'}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
