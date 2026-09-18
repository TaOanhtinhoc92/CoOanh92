import React, { useState } from 'react';
import { KhamPhaItem, KhamPhaPhase } from '../../types';
import {
  Compass,
  BookOpen,
  Lightbulb,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  HelpCircle,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  GraduationCap,
  Sparkles,
  BookmarkCheck,
  CheckCircle2
} from 'lucide-react';
import { TimelineVisualizer } from '../activities/TimelineVisualizer';
import { ItemMediaAttachment } from '../activities/ItemMediaAttachment';

interface Props {
  data: KhamPhaItem[] | KhamPhaPhase | any;
  periodId: string;
  periodTitle?: string;
  focusContent?: string;
  isTeacherMode?: boolean;
  onNextPhase?: () => void;
}

export const KhamPhaView: React.FC<Props> = ({
  data,
  periodId,
  periodTitle,
  focusContent,
  isTeacherMode,
  onNextPhase
}) => {
  const isLesson2Period2 = periodId === 'tiet-3' || periodId === 'tiet-4';

  // State: Default hints to FALSE (hidden) so students must think first!
  const [openHints, setOpenHints] = useState<{ [key: string]: boolean }>({});
  // State: Default teacher conclusions to FALSE (hidden) until teacher reveals it!
  const [openConclusions, setOpenConclusions] = useState<{ [key: string]: boolean }>({});
  // State: Fallback conclusion
  const [showSingleConclusion, setShowSingleConclusion] = useState<boolean>(false);
  // State: Overall summary (hidden by default or openable)
  const [showSummary, setShowSummary] = useState<boolean>(false);

  const toggleHint = (key: string) => {
    setOpenHints((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleConclusion = (key: string) => {
    setOpenConclusions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const isArray = Array.isArray(data);
  const items: KhamPhaItem[] = isArray ? data : [];

  // Bulk actions for teachers
  const handleShowAllHints = () => {
    const updated: { [key: string]: boolean } = {};
    items.forEach((item) => {
      updated[item.id] = true;
    });
    setOpenHints(updated);
  };

  const handleHideAllHints = () => {
    setOpenHints({});
  };

  const handleShowAllConclusions = () => {
    const updated: { [key: string]: boolean } = {};
    items.forEach((item) => {
      updated[item.id] = true;
    });
    setOpenConclusions(updated);
  };

  const handleHideAllConclusions = () => {
    setOpenConclusions({});
  };

  const allHintsOpen = items.length > 0 && items.every((item) => openHints[item.id]);
  const allConclusionsOpen = items.length > 0 && items.every((item) => openConclusions[item.id]);

  return (
    <div className="space-y-6">
      {/* Header banner */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 rounded-3xl p-6 sm:p-8 text-white shadow-lg relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-44 h-44 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-widest bg-black/20 text-sky-100 w-fit px-3 py-1 rounded-full backdrop-blur-xs mb-3">
          <Compass size={14} />
          <span>Giai đoạn 2: Khám phá kiến thức mới (SGK)</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
          {isArray ? `Khám phá kiến thức trọng tâm (${items.length} nội dung)` : (data?.title || 'Khám phá kiến thức')}
        </h2>
        {focusContent && (
          <p className="mt-2 text-sky-100 text-sm sm:text-base max-w-3xl leading-relaxed">
            🎯 <strong>Trọng tâm:</strong> {focusContent}
          </p>
        )}
      </div>

      {/* Teacher pedagogical toolbar */}
      <div className="bg-white rounded-2xl border border-blue-200/80 p-4 shadow-2xs flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
          <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 animate-pulse" />
          <span>
            Gợi ý & Chốt kiến thức mặc định ẩn — Bấm nút mở từng phần khi dạy tới
          </span>
        </div>

        <div className="flex items-center flex-wrap gap-2">
          {/* Gợi ý bulk toggle */}
          {allHintsOpen ? (
            <button
              onClick={handleHideAllHints}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all cursor-pointer border border-slate-300"
            >
              <Lock size={14} />
              <span>Ẩn tất cả gợi ý</span>
            </button>
          ) : (
            <button
              onClick={handleShowAllHints}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-50 hover:bg-amber-100 text-amber-800 transition-all cursor-pointer border border-amber-300"
            >
              <Eye size={14} />
              <span>Hiện tất cả gợi ý</span>
            </button>
          )}

          {/* Chốt kiến thức bulk toggle */}
          {allConclusionsOpen ? (
            <button
              onClick={handleHideAllConclusions}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all cursor-pointer border border-slate-300"
            >
              <Lock size={14} />
              <span>Ẩn tất cả chốt kiến thức</span>
            </button>
          ) : (
            <button
              onClick={handleShowAllConclusions}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-indigo-50 hover:bg-indigo-100 text-indigo-700 transition-all cursor-pointer border border-indigo-200"
            >
              <GraduationCap size={14} />
              <span>Hiện tất cả chốt kiến thức</span>
            </button>
          )}
        </div>
      </div>

      {/* Embedded Timeline for Lesson 2 (Inventors) */}
      {isLesson2Period2 && <TimelineVisualizer />}

      {/* Main Exploration Activities List */}
      {isArray && (
        <div className="space-y-6">
          {items.map((item, index) => {
            const isHintOpen = !!openHints[item.id];
            const isConclusionOpen = !!openConclusions[item.id];

            return (
              <div
                key={item.id || index}
                className="bg-white rounded-3xl border border-blue-100 p-6 sm:p-8 shadow-sm space-y-6 transition-all"
              >
                {/* Activity Header */}
                <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-xl bg-blue-600 text-white font-black text-sm flex items-center justify-center shrink-0 shadow-xs">
                      {index + 1}
                    </span>
                    <h3 className="text-xl font-black text-slate-900 leading-snug">
                      {item.title}
                    </h3>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 shrink-0">
                    Mục {index + 1}/{items.length}
                  </span>
                </div>

                {/* Student Task */}
                <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200">
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-900 uppercase tracking-wider mb-2">
                    <BookOpen size={16} />
                    <span>Nhiệm vụ học sinh (SGK)</span>
                  </div>
                  <p className="text-slate-800 text-base font-semibold leading-relaxed">
                    {item.task}
                  </p>
                </div>

                {/* Context if available */}
                {item.context && (
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700 italic">
                    📌 <strong>Tình huống SGK:</strong> {item.context}
                  </div>
                )}

                {/* Hình ảnh / Video / Link quan sát cho nội dung này */}
                <ItemMediaAttachment
                  periodId={periodId}
                  itemId={item.id}
                  itemTitle={item.title}
                  itemTask={item.task}
                />

                {/* Guiding Questions for Thinking & Discussion */}
                {item.guidingQuestions && item.guidingQuestions.length > 0 && (
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-slate-600 uppercase tracking-wider px-1 flex items-center gap-1.5">
                        <HelpCircle size={15} className="text-sky-600" />
                        <span>Câu hỏi định hướng suy nghĩ & thảo luận</span>
                      </h4>
                      <span className="text-xs font-medium text-slate-500 italic">
                        (Học sinh suy nghĩ và phát biểu trước khi xem gợi ý)
                      </span>
                    </div>
                    <div className="grid grid-cols-1 gap-2.5">
                      {item.guidingQuestions.map((q, qIdx) => (
                        <div
                          key={qIdx}
                          className="p-4 rounded-xl bg-slate-50/90 border border-slate-200/90 flex items-start gap-3 hover:bg-white hover:border-blue-300 transition-all text-sm sm:text-base font-medium text-slate-800"
                        >
                          <span className="w-6 h-6 rounded-lg bg-sky-100 text-sky-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                            {qIdx + 1}
                          </span>
                          <span className="leading-snug">{q}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 1. GỢI Ý TRẢ LỜI & ĐÁP ÁN CHUẨN (CÓ NÚT BẤM NỔI BẬT ĐỂ GIÁO VIÊN BẬT KHI HS PHÁT BIỂU XONG) */}
                <div className="pt-2">
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
                        <Lightbulb size={15} className="text-amber-500" />
                        <span>Gợi ý trả lời & Đáp án chuẩn SGK</span>
                      </span>
                      {!isHintOpen && (
                        <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                          Đang ẩn để học sinh suy nghĩ
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => toggleHint(item.id)}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer shadow-sm border ${
                        isHintOpen
                          ? 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200'
                          : 'bg-gradient-to-r from-amber-500 to-orange-500 text-white border-amber-600 hover:from-amber-600 hover:to-orange-600 shadow-amber-200 ring-2 ring-amber-300/50'
                      }`}
                    >
                      {isHintOpen ? <EyeOff size={15} /> : <Eye size={15} />}
                      <span>
                        {isHintOpen
                          ? 'Ẩn gợi ý'
                          : '💡 Bấm để hiện Gợi ý trả lời (sau khi HS phát biểu)'}
                      </span>
                    </button>
                  </div>

                  {/* Hidden state notice */}
                  {!isHintOpen ? (
                    <div
                      onClick={() => toggleHint(item.id)}
                      className="p-4 rounded-2xl border border-dashed border-amber-300 bg-amber-50/40 hover:bg-amber-50/70 transition-all cursor-pointer flex items-center justify-between gap-3 text-xs text-amber-900"
                    >
                      <div className="flex items-center gap-2">
                        <Lock size={16} className="text-amber-600 shrink-0" />
                        <span className="font-medium">
                          Gợi ý đang được khóa để học sinh tự suy nghĩ và phát biểu. Nhấn nút để mở gợi ý khi học sinh đã trình bày xong.
                        </span>
                      </div>
                      <span className="font-bold underline shrink-0 text-amber-700">
                        Mở gợi ý
                      </span>
                    </div>
                  ) : (
                    <div className="p-5 rounded-2xl bg-sky-50 border border-sky-200 text-slate-800 text-sm sm:text-base leading-relaxed animate-fadeIn space-y-2">
                      <div className="flex items-center justify-between text-xs font-bold text-sky-950 uppercase tracking-wider">
                        <span className="flex items-center gap-1.5">
                          <Unlock size={14} className="text-sky-600" />
                          Gợi ý câu trả lời chuẩn SGK:
                        </span>
                        <button
                          onClick={() => toggleHint(item.id)}
                          className="text-slate-500 hover:text-slate-800 text-xs font-medium cursor-pointer"
                        >
                          Thu gọn
                        </button>
                      </div>
                      <div className="text-slate-800 font-medium whitespace-pre-line leading-relaxed">
                        {item.hiddenAnswer}
                      </div>
                    </div>
                  )}
                </div>

                {/* 2. GIÁO VIÊN CHỐT KIẾN THỨC VÀ GHI BÀI (CÓ NÚT BẤM NỔI BẬT ĐỂ GIÁO VIÊN BẬT KHI DẠY TỚI ĐÓ) */}
                {item.teacherConclusion && (
                  <div className="pt-2 border-t border-slate-100">
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
                          <GraduationCap size={16} className="text-indigo-600" />
                          <span>Chốt kiến thức & Ghi bài (Nội dung ghi vở)</span>
                        </span>
                        {!isConclusionOpen && (
                          <span className="text-[11px] font-semibold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-200">
                            Đang ẩn để giáo viên mở khi dạy tới
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => toggleConclusion(item.id)}
                        className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-black transition-all cursor-pointer shadow-md border ${
                          isConclusionOpen
                            ? 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200'
                            : 'bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 text-white border-indigo-700 hover:from-indigo-700 hover:to-indigo-800 shadow-indigo-200 ring-2 ring-indigo-300/60 active:scale-95'
                        }`}
                      >
                        {isConclusionOpen ? <EyeOff size={15} /> : <Sparkles size={15} />}
                        <span>
                          {isConclusionOpen
                            ? 'Ẩn chốt kiến thức'
                            : '✨ Bấm để hiện Chốt kiến thức & Ghi bài (khi dạy tới)'}
                        </span>
                      </button>
                    </div>

                    {!isConclusionOpen ? (
                      <div
                        onClick={() => toggleConclusion(item.id)}
                        className="p-4 rounded-2xl border border-dashed border-indigo-300 bg-indigo-50/40 hover:bg-indigo-50/80 transition-all cursor-pointer flex items-center justify-between gap-3 text-xs text-indigo-900"
                      >
                        <div className="flex items-center gap-2.5">
                          <Lock size={16} className="text-indigo-600 shrink-0" />
                          <span className="font-medium">
                            Chốt kiến thức đang ẩn. Sau khi học sinh thảo luận và trả lời câu hỏi, giáo viên bấm nút trên để công bố chốt kiến thức và cho học sinh ghi vở.
                          </span>
                        </div>
                        <span className="font-bold underline shrink-0 text-indigo-700">
                          Mở chốt kiến thức
                        </span>
                      </div>
                    ) : (
                      <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-950 via-blue-950 to-indigo-900 text-white shadow-lg border border-indigo-700 relative overflow-hidden animate-fadeIn space-y-3">
                        <div className="absolute right-0 top-0 translate-x-6 -translate-y-6 w-36 h-36 bg-white/10 rounded-full blur-xl pointer-events-none" />

                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2 text-amber-300 font-black text-xs uppercase tracking-widest">
                            <Sparkles size={16} />
                            <span>Giáo viên chốt kiến thức & Ghi bảng (Nội dung ghi vở)</span>
                          </div>
                          <button
                            onClick={() => toggleConclusion(item.id)}
                            className="text-xs text-indigo-200 hover:text-white font-medium cursor-pointer"
                          >
                            Thu gọn
                          </button>
                        </div>

                        <div className="text-white text-base sm:text-lg font-bold leading-relaxed pt-1">
                          {item.teacherConclusion}
                        </div>

                        <div className="pt-3 border-t border-indigo-700/60 flex items-center justify-between text-xs text-indigo-200">
                          <span className="flex items-center gap-1.5">
                            <BookmarkCheck size={14} className="text-amber-400" />
                            Học sinh ghi nhớ và ghi nội dung trọng tâm này vào vở bài học.
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}

          {/* OVERALL LESSON CONCLUSION SUMMARY (TỔNG KẾT CHỐT KIẾN THỨC TIẾT HỌC) */}
          <div className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-indigo-800 space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-widest text-amber-300 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                <GraduationCap size={16} />
                <span>Tổng kết chốt kiến thức của tiết học (Ghi bảng)</span>
              </div>

              {/* Nút bấm mở tổng kết */}
              <button
                onClick={() => setShowSummary(!showSummary)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-bold transition-all cursor-pointer border ${
                  showSummary
                    ? 'bg-white/20 text-white border-white/30 hover:bg-white/30'
                    : 'bg-amber-400 hover:bg-amber-500 text-slate-950 border-amber-300 font-black shadow-md'
                }`}
              >
                {showSummary ? <ChevronUp size={15} /> : <Eye size={15} />}
                <span>{showSummary ? 'Thu gọn tổng kết' : '📋 Bấm mở Tổng kết chốt kiến thức tiết học'}</span>
              </button>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white">
              {periodTitle || 'Kiến thức cốt lõi cần nhớ sau phần Khám phá'}
            </h3>

            {!showSummary ? (
              <div
                onClick={() => setShowSummary(true)}
                className="p-4 rounded-2xl border border-dashed border-indigo-500/60 bg-white/5 hover:bg-white/10 transition-all cursor-pointer flex items-center justify-between gap-3 text-xs text-indigo-200"
              >
                <div className="flex items-center gap-2">
                  <Lock size={15} className="text-amber-400" />
                  <span>Tổng kết chốt kiến thức toàn tiết học đang ẩn. Giáo viên bấm nút mở sau khi hoàn thành các hoạt động khám phá.</span>
                </div>
                <span className="font-bold underline text-amber-300 shrink-0">Mở tổng kết</span>
              </div>
            ) : (
              <div className="space-y-3 pt-2 animate-fadeIn">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {items.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-xs space-y-1.5 hover:bg-white/15 transition-all"
                    >
                      <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
                        <CheckCircle2 size={14} />
                        <span>Mục {idx + 1}: {item.title}</span>
                      </div>
                      <p className="text-sm font-medium text-slate-100 leading-snug">
                        {item.teacherConclusion || item.task}
                      </p>
                    </div>
                  ))}
                </div>

                {focusContent && (
                  <div className="p-4 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 text-xs sm:text-sm text-indigo-100 mt-3">
                    📌 <strong>Ghi nhớ chung:</strong> {focusContent}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Fallback when data is a KhamPhaPhase object */}
      {!isArray && data && (
        <div className="bg-white rounded-3xl border border-blue-100 p-6 sm:p-8 shadow-sm space-y-6">
          <h3 className="text-xl font-bold text-slate-900">{data.title}</h3>

          {data.tasks && (
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Nhiệm vụ học sinh
              </h4>
              {data.tasks.map((task: string, idx: number) => (
                <div key={idx} className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-slate-800 text-sm">
                  {task}
                </div>
              ))}
            </div>
          )}

          {/* Hình ảnh / Video quan sát SGK */}
          <ItemMediaAttachment
            periodId={periodId}
            itemId="kham_pha_main"
            itemTitle={data.title}
            itemTask={data.tasks?.join(' ')}
          />

          {data.conclusion && (
            <div className="pt-2">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Chốt kiến thức & Ghi bài
                </div>
                <button
                  onClick={() => setShowSingleConclusion(!showSingleConclusion)}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 text-white cursor-pointer"
                >
                  {showSingleConclusion ? 'Ẩn chốt kiến thức' : '✨ Bấm để hiện Chốt kiến thức'}
                </button>
              </div>

              {showSingleConclusion && (
                <div className="p-5 rounded-2xl bg-indigo-900 text-white animate-fadeIn">
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-1">
                    Giáo viên chốt kiến thức
                  </div>
                  <p className="text-base font-semibold">{data.conclusion}</p>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Next step button */}
      {onNextPhase && (
        <div className="pt-4 border-t border-slate-200 flex justify-end">
          <button
            onClick={onNextPhase}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-sm bg-indigo-600 hover:bg-indigo-700 text-white shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <span>Chuyển sang Thảo luận nhóm</span>
            <ArrowRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
};
