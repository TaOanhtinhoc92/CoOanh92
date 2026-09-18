import React, { useState, useEffect, useRef } from 'react';
import { ALL_LESSONS } from '../../data/curriculumData';
import { Lesson, LessonPeriod } from '../../types';
import {
  X,
  Search,
  CheckCircle2,
  ChevronRight,
  BookOpen,
  Layers,
  Check,
  RotateCcw,
  Sparkles,
  Award
} from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  currentPeriodId: string;
  onSelectPeriod: (periodId: string) => void;
  completedPeriods?: string[];
  completedPeriodIds?: string[];
  lessons?: Lesson[];
}

export const CurriculumTreeModal: React.FC<Props> = ({
  isOpen,
  onClose,
  currentPeriodId,
  onSelectPeriod,
  completedPeriods = [],
  completedPeriodIds = [],
  lessons
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterPart, setFilterPart] = useState<'all' | 'part1' | 'part2'>('all');
  const activePeriodRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Scroll to active period when modal opens
  useEffect(() => {
    if (isOpen && activePeriodRef.current) {
      setTimeout(() => {
        activePeriodRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 150);
    }
  }, [isOpen, currentPeriodId]);

  if (!isOpen) return null;

  // Support either completedPeriods or completedPeriodIds safely
  const completedList = completedPeriodIds.length > 0 ? completedPeriodIds : completedPeriods;

  const dataset = lessons && lessons.length > 0 ? lessons : ALL_LESSONS;

  const filteredLessons = dataset.filter((lesson) => {
    // Robust detection for Part 1 (Tiết 1 - 21) vs Part 2 (Tiết 22 - 35)
    const isPart1 =
      lesson.partId === 'part-1' ||
      lesson.partId === 'part1' ||
      lesson.part === 1 ||
      (lesson.partTitle && lesson.partTitle.toLowerCase().includes('phần một')) ||
      (lesson.periods && lesson.periods.some((p) => p.periodNumber <= 21));

    // Filter by part tab
    if (filterPart === 'part1' && !isPart1) return false;
    if (filterPart === 'part2' && isPart1) return false;

    // Filter by search query
    if (!searchQuery.trim()) return true;
    const query = searchQuery.trim().toLowerCase();

    const lessonTitleMatch = (lesson.title || '').toLowerCase().includes(query);
    const lessonTopicMatch = ((lesson.topic || '') + ' ' + (lesson.partTitle || '')).toLowerCase().includes(query);
    const lessonIdMatch = (lesson.id || '').toLowerCase().includes(query);
    const lessonNumMatch = `bài ${lesson.number}`.toLowerCase().includes(query);
    const periodMatch = (lesson.periods || []).some(
      (p) =>
        (p.title || '').toLowerCase().includes(query) ||
        (p.focusContent || '').toLowerCase().includes(query) ||
        `tiết ${p.periodNumber}`.toLowerCase().includes(query) ||
        `${p.periodNumber}` === query
    );

    return lessonTitleMatch || lessonTopicMatch || lessonIdMatch || lessonNumMatch || periodMatch;
  });

  const totalPeriodsCount = 35;
  const completedCount = completedList.length;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-4xl max-h-[92vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-sky-600 text-white flex items-center justify-center font-bold shadow-md">
              <Layers size={22} />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-black tracking-tight">
                Mục Lục Chương Trình & Phân Phối 35 Tiết
              </h3>
              <p className="text-xs text-slate-300">
                Sách giáo khoa Công nghệ lớp 5 • Chương trình chuẩn GDPT 2018
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 flex items-center justify-center transition-colors cursor-pointer"
            title="Đóng (Esc)"
          >
            <X size={20} />
          </button>
        </div>

        {/* Filter Bar & Search */}
        <div className="p-3.5 sm:p-4 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
            <button
              onClick={() => setFilterPart('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                filterPart === 'all'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              Tất cả (35 tiết)
            </button>
            <button
              onClick={() => setFilterPart('part1')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                filterPart === 'part1'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              Phần 1: Công nghệ & Đời sống (Tiết 1–21)
            </button>
            <button
              onClick={() => setFilterPart('part2')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                filterPart === 'part2'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              Phần 2: Thủ công kĩ thuật (Tiết 22–35)
            </button>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-64 shrink-0">
            <div className="relative w-full">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm bài học, số tiết..."
                className="w-full pl-9 pr-8 py-1.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-sky-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 cursor-pointer"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Progress status pill */}
        <div className="px-5 py-2.5 bg-sky-50/80 border-b border-sky-100 flex items-center justify-between text-xs text-sky-950 font-medium">
          <div className="flex items-center gap-2">
            <Award size={16} className="text-sky-600" />
            <span>
              Tiến độ hoàn thành giảng dạy:{' '}
              <strong className="font-extrabold text-sky-700">
                {completedCount}/{totalPeriodsCount} tiết
              </strong>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-bold text-sky-800">
              {Math.round((completedCount / totalPeriodsCount) * 100)}%
            </span>
            <div className="w-28 sm:w-40 bg-sky-200 rounded-full h-2 overflow-hidden">
              <div
                className="bg-sky-600 h-full transition-all duration-500 rounded-full"
                style={{ width: `${(completedCount / totalPeriodsCount) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Tree Content list */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 flex-1 max-h-[62vh]">
          {filteredLessons.length === 0 ? (
            <div className="p-8 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-300 space-y-2">
              <p className="text-sm font-bold text-slate-700">
                Không tìm thấy bài học hoặc tiết học phù hợp với từ khóa "{searchQuery}"
              </p>
              <p className="text-xs text-slate-500">
                Thầy/cô thử tìm theo số tiết (ví dụ: "tiết 1", "tiết 15") hoặc tên bài học.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setFilterPart('all');
                }}
                className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-sky-600 text-white hover:bg-sky-700 cursor-pointer"
              >
                <RotateCcw size={13} />
                <span>Xem lại toàn bộ 35 tiết</span>
              </button>
            </div>
          ) : (
            filteredLessons.map((lesson) => {
              return (
                <div
                  key={lesson.id}
                  className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-2xs hover:border-slate-300 transition-colors"
                >
                  {/* Lesson Header */}
                  <div className="p-4 bg-slate-50/90 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <div className="text-[11px] font-bold text-sky-700 uppercase tracking-wider">
                        {lesson.partTitle || lesson.topic || (lesson.partId === 'part-1' ? 'Phần 1: Công nghệ và Đời sống' : 'Phần 2: Thủ công Kĩ thuật')}
                      </div>
                      <h4 className="text-sm sm:text-base font-black text-slate-900 mt-0.5">
                        {lesson.title}
                      </h4>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-200/80 text-slate-700">
                        {lesson.totalPeriods} tiết
                        {lesson.pageRange || lesson.sgkPages ? ` (${lesson.pageRange || lesson.sgkPages})` : ''}
                      </span>
                    </div>
                  </div>

                  {/* Periods in lesson */}
                  <div className="divide-y divide-slate-100">
                    {lesson.periods.map((period) => {
                      const isCurrent = period.id === currentPeriodId;
                      const isDone = completedList.includes(period.id);
                      // Strip leading "Tiết X:" if period.title already has it to prevent "Tiết X: Tiết X:"
                      const cleanTitle = period.title.replace(/^Tiết\s*\d+\s*:\s*/i, '');

                      return (
                        <div
                          key={period.id}
                          ref={isCurrent ? activePeriodRef : undefined}
                          onClick={() => {
                            onSelectPeriod(period.id);
                            onClose();
                          }}
                          className={`p-3.5 sm:p-4 transition-all flex items-center justify-between gap-3 cursor-pointer ${
                            isCurrent
                              ? 'bg-sky-50/90 text-sky-950 font-bold border-l-4 border-l-sky-600 shadow-2xs'
                              : 'hover:bg-slate-50 text-slate-800'
                          }`}
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <span
                              className={`w-8 h-8 rounded-xl font-black text-xs flex items-center justify-center shrink-0 ${
                                isCurrent
                                  ? 'bg-sky-600 text-white shadow-xs'
                                  : isDone
                                  ? 'bg-emerald-100 text-emerald-800'
                                  : 'bg-slate-100 text-slate-700'
                              }`}
                            >
                              {period.periodNumber}
                            </span>
                            <div className="min-w-0">
                              <div className="text-xs sm:text-sm font-bold leading-snug truncate">
                                Tiết {period.periodNumber}: {cleanTitle}
                              </div>
                              <div className="text-[11px] text-slate-500 mt-0.5 truncate">
                                {period.focusContent || period.subTopic || lesson.title}
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 shrink-0">
                            {isDone && (
                              <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                                <Check size={12} />
                                <span className="hidden sm:inline">Đã dạy</span>
                              </span>
                            )}
                            {isCurrent && (
                              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-sky-600 text-white shadow-2xs">
                                Đang mở
                              </span>
                            )}
                            <ChevronRight size={16} className="text-slate-400" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Bấm vào một tiết bất kỳ để mở bài dạy trực tiếp</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl font-bold bg-slate-200 hover:bg-slate-300 text-slate-800 transition-colors cursor-pointer"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
