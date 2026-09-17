import React, { useState } from 'react';
import { VanDungData } from '../../types';
import { Target, Lightbulb, CheckCircle2, ChevronDown, ChevronUp, ArrowRight, HeartHandshake, Check, AlertCircle } from 'lucide-react';
import { triggerSuccessFx } from '../../utils/audioAndFx';

interface Props {
  data: VanDungData;
  isTeacherMode: boolean;
  hasNextPeriod?: boolean;
  onNextPhase?: () => void;
}

export const VanDungView: React.FC<Props> = ({
  data,
  isTeacherMode,
  hasNextPeriod,
  onNextPhase
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(isTeacherMode);

  const situation = data.scenario || data.situation || '';
  const questionText = data.question || data.task || '';

  const handleSelect = (idx: number, isOptimal: boolean) => {
    setSelectedOption(idx);
    if (isOptimal) {
      triggerSuccessFx();
    }
  };

  return (
    <div className="space-y-6">
      {/* Header banner */}
      <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-rose-600 rounded-3xl p-6 sm:p-8 text-white shadow-lg relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-44 h-44 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-widest bg-black/20 text-orange-100 w-fit px-3 py-1 rounded-full backdrop-blur-xs mb-3">
          <Target size={14} />
          <span>Giai đoạn 6: Vận dụng vào đời sống thực tế</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight">{data.title}</h2>
      </div>

      {/* Main card */}
      <div className="bg-white rounded-3xl border border-orange-100 p-6 sm:p-8 shadow-sm space-y-6">
        {/* Situation / Scenario */}
        {situation && (
          <div className="p-6 rounded-2xl bg-orange-50/70 border border-orange-200">
            <div className="text-xs font-bold uppercase tracking-wider text-orange-950 mb-2 flex items-center gap-2">
              <HeartHandshake size={18} className="text-orange-600" />
              Tình huống đời sống thực tế (SGK)
            </div>
            <p className="text-slate-800 text-lg font-bold leading-relaxed">
              "{situation}"
            </p>
          </div>
        )}

        {/* Task / Guiding question */}
        {questionText && (
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              Nhiệm vụ vận dụng & Lựa chọn hành vi phù hợp
            </div>
            <div className="text-slate-900 text-base font-semibold leading-relaxed">
              {questionText}
            </div>
          </div>
        )}

        {/* Interactive Dilemma Options (if available) */}
        {data.options && data.options.length > 0 && (
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">
              Em chọn cách giải quyết nào?
            </h4>
            <div className="grid grid-cols-1 gap-3">
              {data.options.map((opt, idx) => {
                const isSelected = selectedOption === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => handleSelect(idx, opt.isOptimal)}
                    className={`p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                      isSelected
                        ? opt.isOptimal
                          ? 'border-emerald-500 bg-emerald-50/70 shadow-sm'
                          : 'border-rose-400 bg-rose-50/70'
                        : 'border-slate-200 bg-white hover:border-orange-300 hover:bg-orange-50/20'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={`w-7 h-7 rounded-xl font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 ${
                          isSelected
                            ? opt.isOptimal
                              ? 'bg-emerald-600 text-white'
                              : 'bg-rose-500 text-white'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {opt.label || String.fromCharCode(65 + idx)}
                      </span>
                      <div className="flex-1">
                        <p className="text-slate-900 font-semibold text-base leading-snug">
                          {opt.text}
                        </p>

                        {/* Formative Feedback when chosen */}
                        {isSelected && (
                          <div
                            className={`mt-3 p-3.5 rounded-xl text-sm font-medium animate-fadeIn flex items-start gap-2.5 ${
                              opt.isOptimal
                                ? 'bg-emerald-100/70 text-emerald-900'
                                : 'bg-rose-100/70 text-rose-900'
                            }`}
                          >
                            {opt.isOptimal ? (
                              <Check size={18} className="text-emerald-700 shrink-0 mt-0.5" />
                            ) : (
                              <AlertCircle size={18} className="text-rose-700 shrink-0 mt-0.5" />
                            )}
                            <span>{opt.feedback}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Teacher explanation / guidance */}
        {(data.teacherExplanation || data.guidance) && (
          <div className="p-6 rounded-2xl bg-amber-50/80 border border-amber-200">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-950">
                <Lightbulb size={16} className="text-amber-600" />
                Gợi ý & Hướng dẫn sư phạm (SGK)
              </div>
              <button
                onClick={() => setShowExplanation(!showExplanation)}
                className="inline-flex items-center gap-1 text-xs font-bold text-amber-900 bg-white px-2.5 py-1 rounded-lg border border-amber-300 shadow-2xs hover:bg-amber-100 cursor-pointer"
              >
                {showExplanation ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                {showExplanation ? 'Thu gọn' : 'Xem lời giải'}
              </button>
            </div>

            {showExplanation && (
              <div className="text-slate-800 text-base leading-relaxed animate-fadeIn mt-3 pt-3 border-t border-amber-200">
                {data.teacherExplanation || data.guidance}
              </div>
            )}
          </div>
        )}

        {/* Next step button */}
        {onNextPhase && (
          <div className="pt-4 border-t border-slate-100 flex justify-end">
            <button
              onClick={onNextPhase}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm bg-orange-600 hover:bg-orange-700 text-white shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <span>{hasNextPeriod ? 'Chuyển sang Tiết tiếp theo' : 'Hoàn thành tiết học'}</span>
              <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
