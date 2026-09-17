import React, { useState } from 'react';
import { ThaoLuanData } from '../../types';
import {
  Users,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Lock,
  Unlock,
  ChevronDown,
  ChevronUp,
  BookmarkCheck,
  Eye,
  EyeOff
} from 'lucide-react';
import { InteractiveTimer } from '../activities/InteractiveTimer';

interface Props {
  data: ThaoLuanData;
  isTeacherMode: boolean;
  onNextPhase?: () => void;
}

export const ThaoLuanView: React.FC<Props> = ({ data, isTeacherMode, onNextPhase }) => {
  const title = data.title || data.topic || 'Thảo luận nhóm';
  const taskText = data.groupTask || data.question || '';
  const prompts = data.guidingPrompts || data.guidingHints || [];
  const duration = data.durationMinutes || data.timeMinutes || 3;

  // States for toggling hints and conclusion
  const [showSuggestedHints, setShowSuggestedHints] = useState<boolean>(false);
  const [showConclusion, setShowConclusion] = useState<boolean>(false);

  return (
    <div className="space-y-6">
      {/* Header banner */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 rounded-3xl p-6 sm:p-8 text-white shadow-lg relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-44 h-44 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-widest bg-black/20 text-emerald-100 w-fit px-3 py-1 rounded-full backdrop-blur-xs mb-3">
          <Users size={14} />
          <span>Giai đoạn 3: Thảo luận & Hợp tác nhóm</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">{title}</h2>
          <span className="bg-white/20 text-white text-xs font-bold px-3.5 py-1.5 rounded-full border border-white/30 self-start sm:self-auto backdrop-blur-xs">
            {data.groupSize || 'Nhóm 4 học sinh'}
          </span>
        </div>
      </div>

      {/* Embedded interactive timer */}
      <InteractiveTimer initialMinutes={duration} />

      {/* Main card */}
      <div className="bg-white rounded-3xl border border-emerald-100 p-6 sm:p-8 shadow-sm space-y-6">
        {/* Discussion Question / Task */}
        <div className="p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-2">
            Nhiệm vụ thảo luận của nhóm (SGK)
          </div>
          <div className="text-lg sm:text-xl font-black text-emerald-950 leading-snug">
            "{taskText}"
          </div>
        </div>

        {/* Guiding Hints / Prompts for Students */}
        {prompts.length > 0 && (
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 px-1 flex items-center gap-2">
              <Lightbulb size={16} className="text-amber-500" />
              Gợi ý định hướng thảo luận cho các nhóm
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {prompts.map((hint, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm flex items-start gap-2.5"
                >
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{hint}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* GỢI Ý BÁO CÁO (ẨN MẶC ĐỊNH, GIÁO VIÊN BẬT KHI CẦN ĐỊNH HƯỚNG) */}
        {data.suggestedHints && data.suggestedHints.length > 0 && (
          <div className="pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-emerald-600" />
                  <span>Gợi ý câu trả lời & Định hướng báo cáo</span>
                </span>
                {!showSuggestedHints && (
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    Đang ẩn
                  </span>
                )}
              </div>

              <button
                onClick={() => setShowSuggestedHints(!showSuggestedHints)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                  showSuggestedHints
                    ? 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200'
                    : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border-emerald-300'
                }`}
              >
                {showSuggestedHints ? <EyeOff size={14} /> : <Eye size={14} />}
                <span>{showSuggestedHints ? 'Thu gọn gợi ý' : '💡 Xem gợi ý định hướng báo cáo'}</span>
              </button>
            </div>

            {showSuggestedHints && (
              <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200 animate-fadeIn">
                <ul className="space-y-2">
                  {data.suggestedHints.map((sh, idx) => (
                    <li key={idx} className="text-slate-800 text-sm flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>{sh}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* KẾT LUẬN HOẠT ĐỘNG (CÓ NÚT BẤM NỔI BẬT ĐỂ GIÁO VIÊN BẬT KHI DẠY TỚI ĐÓ) */}
        {data.conclusion && (
          <div className="pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles size={16} className="text-teal-600" />
                  <span>Kết luận hoạt động thảo luận</span>
                </span>
                {!showConclusion && (
                  <span className="text-[11px] font-semibold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200">
                    Đang ẩn để giáo viên mở khi dạy tới
                  </span>
                )}
              </div>

              {/* Nút bấm nổi bật */}
              <button
                onClick={() => setShowConclusion(!showConclusion)}
                className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-black transition-all cursor-pointer shadow-md border ${
                  showConclusion
                    ? 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200'
                    : 'bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-700 text-white border-teal-700 hover:from-teal-700 hover:to-emerald-700 shadow-teal-200 ring-2 ring-teal-300/60 active:scale-95'
                }`}
              >
                {showConclusion ? <ChevronUp size={16} /> : <Sparkles size={16} />}
                <span>
                  {showConclusion
                    ? 'Ẩn kết luận hoạt động'
                    : '🎯 Bấm để hiện Kết luận hoạt động (sau khi các nhóm báo cáo)'}
                </span>
              </button>
            </div>

            {!showConclusion ? (
              <div
                onClick={() => setShowConclusion(true)}
                className="p-4 rounded-2xl border border-dashed border-teal-300 bg-teal-50/40 hover:bg-teal-50/80 transition-all cursor-pointer flex items-center justify-between gap-3 text-xs text-teal-900"
              >
                <div className="flex items-center gap-2.5">
                  <Lock size={16} className="text-teal-600 shrink-0" />
                  <span className="font-medium">
                    Kết luận hoạt động đang được ẩn. Sau khi các nhóm hoàn thành thảo luận và đại diện báo cáo trước lớp, giáo viên bấm nút trên để mở kết luận chốt lại hoạt động.
                  </span>
                </div>
                <span className="font-bold underline shrink-0 text-teal-700">Mở kết luận</span>
              </div>
            ) : (
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-teal-950 via-emerald-950 to-teal-900 text-white shadow-lg border border-teal-700 relative overflow-hidden animate-fadeIn space-y-3">
                <div className="absolute right-0 top-0 translate-x-6 -translate-y-6 w-36 h-36 bg-white/10 rounded-full blur-xl pointer-events-none" />

                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-amber-300 font-black text-xs uppercase tracking-widest">
                    <Sparkles size={16} />
                    <span>Giáo viên chốt & Kết luận hoạt động</span>
                  </div>
                  <button
                    onClick={() => setShowConclusion(false)}
                    className="text-xs text-teal-200 hover:text-white font-medium cursor-pointer"
                  >
                    Thu gọn
                  </button>
                </div>

                <div className="text-white text-base sm:text-lg font-bold leading-relaxed pt-1">
                  {data.conclusion}
                </div>

                <div className="pt-3 border-t border-teal-700/60 flex items-center justify-between text-xs text-teal-200">
                  <span className="flex items-center gap-1.5">
                    <BookmarkCheck size={14} className="text-amber-400" />
                    Cả lớp lắng nghe, ghi nhận ý kiến và thống nhất kết quả hoạt động.
                  </span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Teacher's pedagogical note */}
        {isTeacherMode && (
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900">
            <strong>Mẹo quản lý lớp học:</strong> Chia nhóm theo bàn 4 học sinh; cử 1 nhóm trưởng điều hành, 1 thư ký ghi chép bảng phụ hoặc giấy A3. Khi hết giờ, mời đại diện 2 nhóm báo cáo, các nhóm còn lại nhận xét bổ sung.
          </div>
        )}

        {/* Next step button */}
        {onNextPhase && (
          <div className="pt-4 border-t border-slate-100 flex justify-end">
            <button
              onClick={onNextPhase}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <span>Chuyển sang Luyện tập</span>
              <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
