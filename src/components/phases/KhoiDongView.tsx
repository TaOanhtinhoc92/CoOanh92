import React, { useState } from 'react';
import { KhoiDongPhase } from '../../types';
import {
  Sparkles,
  HelpCircle,
  CheckCircle2,
  MessageSquareQuote,
  ArrowRight,
  Volume2,
  Lock,
  Unlock,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { playCelebration, sfx } from '../../utils/audioAndFx';

interface Props {
  data: KhoiDongPhase;
  onNextPhase?: () => void;
}

export const KhoiDongView: React.FC<Props> = ({ data, onNextPhase }) => {
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [showLeadIn, setShowLeadIn] = useState(false);

  const handleSelect = (idx: number) => {
    setSelectedOpt(idx);
    setAnswered(true);
    if (data.correctAnswer !== undefined && idx === data.correctAnswer) {
      sfx.playCorrect();
      playCelebration();
    } else {
      sfx.playWrong();
    }
  };

  return (
    <div className="space-y-6">
      {/* Header banner */}
      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 rounded-3xl p-6 sm:p-8 text-white shadow-lg relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-44 h-44 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-widest bg-black/20 text-amber-100 w-fit px-3 py-1 rounded-full backdrop-blur-xs mb-3">
          <Sparkles size={14} />
          <span>Giai đoạn 1: Khởi động & Tạo hứng thú</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight">{data.title}</h2>
      </div>

      {/* Main card */}
      <div className="bg-white rounded-3xl border border-amber-100 p-6 sm:p-8 shadow-sm space-y-6">
        {data.situation && (
          <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 flex items-start gap-3.5">
            <MessageSquareQuote className="text-amber-600 shrink-0 mt-0.5" size={24} />
            <div>
              <div className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-1">
                Tình huống mở đầu (SGK)
              </div>
              <p className="text-slate-800 text-base leading-relaxed italic">
                "{data.situation}"
              </p>
            </div>
          </div>
        )}

        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 shadow-xs font-bold">
            <HelpCircle size={22} />
          </div>
          <div className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
            {data.question}
          </div>
        </div>

        {data.options && data.options.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {data.options.map((opt, idx) => {
              const isSelected = selectedOpt === idx;
              const isCorrect = data.correctAnswer !== undefined && idx === data.correctAnswer;

              let cardStyle =
                'border-slate-200 bg-slate-50/80 hover:bg-white hover:border-amber-400 text-slate-800';

              if (answered) {
                if (isCorrect) {
                  cardStyle =
                    'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold ring-2 ring-emerald-200';
                } else if (isSelected) {
                  cardStyle = 'border-rose-400 bg-rose-50 text-rose-950';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  className={`p-4 rounded-2xl border-2 text-left transition-all flex items-center justify-between gap-3 cursor-pointer shadow-xs ${cardStyle}`}
                >
                  <span className="text-base font-semibold">{opt}</span>
                  {answered && isCorrect && (
                    <CheckCircle2 className="text-emerald-600 shrink-0" size={22} />
                  )}
                </button>
              );
            })}
          </div>
        )}

        {answered && data.explanation && (
          <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 animate-fadeIn">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">
              Phản hồi & Lời giải câu đố
            </div>
            <div className="text-slate-800 text-base leading-relaxed">{data.explanation}</div>
          </div>
        )}

        {/* LỜI DẪN VÀO BÀI (CÓ NÚT BẤM NỔI BẬT ĐỂ GIÁO VIÊN MỞ KHI DẠY TỚI) */}
        {data.leadIn && (
          <div className="pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between flex-wrap gap-3 mb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles size={15} className="text-sky-600" />
                  <span>Lời dẫn chuyển tiếp vào bài học mới</span>
                </span>
                {!showLeadIn && (
                  <span className="text-[11px] font-semibold text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-200">
                    Đang ẩn để giáo viên mở khi dạy tới
                  </span>
                )}
              </div>

              {/* Nút bấm nổi bật */}
              <button
                onClick={() => setShowLeadIn(!showLeadIn)}
                className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-black transition-all cursor-pointer shadow-md border ${
                  showLeadIn
                    ? 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200'
                    : 'bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 text-white border-sky-700 hover:from-sky-700 hover:to-indigo-700 shadow-sky-200 ring-2 ring-sky-300/60 active:scale-95'
                }`}
              >
                {showLeadIn ? <ChevronUp size={16} /> : <Volume2 size={16} />}
                <span>
                  {showLeadIn
                    ? 'Ẩn lời dẫn vào bài'
                    : '📢 Bấm để mở Lời dẫn vào bài (khi dạy tới)'}
                </span>
              </button>
            </div>

            {!showLeadIn ? (
              <div
                onClick={() => setShowLeadIn(true)}
                className="p-4 rounded-2xl border border-dashed border-sky-300 bg-sky-50/40 hover:bg-sky-50/80 transition-all cursor-pointer flex items-center justify-between gap-3 text-xs text-sky-900"
              >
                <div className="flex items-center gap-2.5">
                  <Lock size={16} className="text-sky-600 shrink-0" />
                  <span className="font-medium">
                    Lời dẫn vào bài đang được ẩn. Sau khi hoàn thành phần câu đố khởi động, giáo viên bấm nút trên để mở lời dẫn chuyển tiếp vào bài học.
                  </span>
                </div>
                <span className="font-bold underline shrink-0 text-sky-700">Mở lời dẫn</span>
              </div>
            ) : (
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-sky-50 via-blue-50/70 to-indigo-50/60 border-2 border-sky-300 text-slate-900 text-base leading-relaxed animate-fadeIn shadow-sm space-y-3">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                    <MessageSquareQuote size={22} />
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-black text-sky-900 uppercase tracking-wider flex items-center gap-1.5">
                        <Unlock size={14} className="text-sky-600" />
                        <span>Lời dẫn của giáo viên vào bài mới (SGK):</span>
                      </div>
                      <button
                        onClick={() => setShowLeadIn(false)}
                        className="text-xs text-slate-500 hover:text-slate-800 font-medium cursor-pointer"
                      >
                        Thu gọn
                      </button>
                    </div>
                    <p className="text-slate-900 font-bold text-base sm:text-lg leading-relaxed pt-1">
                      "{data.leadIn}"
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Nút chuyển tiếp */}
        {onNextPhase && (
          <div className="pt-2 border-t border-slate-100 flex justify-end">
            <button
              onClick={onNextPhase}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm bg-amber-600 hover:bg-amber-700 text-white shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <span>Chuyển sang Khám phá</span>
              <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
