import React, { useState } from 'react';
import { ALL_LESSONS } from '../../data/curriculumData';
import { Lesson, LessonPeriod } from '../../types';
import { X, Search, CheckCircle2, ChevronRight, BookOpen, Layers, Check } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  currentPeriodId: string;
  onSelectPeriod: (periodId: string) => void;
  completedPeriods: string[];
}

export const CurriculumTreeModal: React.FC<Props> = ({
  isOpen,
  onClose,
  currentPeriodId,
  onSelectPeriod,
  completedPeriods
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterPart, setFilterPart] = useState<'all' | 'part1' | 'part2'>('all');

  if (!isOpen) return null;

  const filteredLessons = ALL_LESSONS.filter((lesson) => {
    const isPart1 = lesson.partId === 'part1' || lesson.partTitle.includes('Phần một') || lesson.part === 1;
    // Filter by part
    if (filterPart === 'part1' && !isPart1) return false;
    if (filterPart === 'part2' && isPart1) return false;

    // Filter by search query
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    const matchLesson =
      lesson.title.toLowerCase().includes(query) ||
      (lesson.topic || lesson.partTitle).toLowerCase().includes(query) ||
      lesson.id.toLowerCase().includes(query);
    const matchPeriod = lesson.periods.some(
      (p) =>
        p.title.toLowerCase().includes(query) ||
        `tiết ${p.periodNumber}`.includes(query)
    );
    return matchLesson || matchPeriod;
  });

  const totalPeriodsCount = 35;
  const completedCount = completedPeriods.length;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-slate-200">
        {/* Header */}
        <div className="p-6 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-sky-600 text-white flex items-center justify-center font-bold shadow-md">
              <Layers size={22} />
            </div>
            <div>
              <h3 className="text-xl font-black tracking-tight">
                Cây Chương trình & Phân phối 35 Tiết
              </h3>
              <p className="text-xs text-slate-300">
                Sách giáo khoa & Phân phối chương trình Công nghệ lớp 5
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Filter Bar & Progress */}
        <div className="p-4 sm:p-5 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => setFilterPart('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filterPart === 'all'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              Tất cả (35 tiết)
            </button>
            <button
              onClick={() => setFilterPart('part1')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filterPart === 'part1'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              Phần 1 (Tiết 1-21)
            </button>
            <button
              onClick={() => setFilterPart('part2')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filterPart === 'part2'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              Phần 2 (Tiết 22-35)
            </button>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <div className="relative w-full sm:w-64">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm bài học, số tiết..."
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-sky-500"
              />
            </div>
          </div>
        </div>

        {/* Progress status pill */}
        <div className="px-6 py-2 bg-sky-50/70 border-b border-sky-100 flex items-center justify-between text-xs text-sky-900 font-medium">
          <span>
            Tiến độ hoàn thành giảng dạy:{' '}
            <strong>
              {completedCount}/{totalPeriodsCount} tiết
            </strong>
          </span>
          <div className="w-32 sm:w-48 bg-sky-200 rounded-full h-2 overflow-hidden">
            <div
              className="bg-sky-600 h-full transition-all duration-500 rounded-full"
              style={{ width: `${(completedCount / totalPeriodsCount) * 100}%` }}
            />
          </div>
        </div>

        {/* Tree Content list */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 max-h-[60vh]">
          {filteredLessons.map((lesson) => {
            return (
              <div
                key={lesson.id}
                className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-2xs"
              >
                {/* Lesson Header */}
                <div className="p-4 bg-slate-50/90 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="text-xs font-bold text-sky-700 uppercase tracking-wider">
                      {lesson.topic || lesson.partTitle}
                    </div>
                    <h4 className="text-base font-bold text-slate-900 mt-0.5">
                      {lesson.title}
                    </h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-200/80 text-slate-700">
                      {lesson.totalPeriods} tiết ({lesson.pageRange || lesson.sgkPages})
                    </span>
                  </div>
                </div>

                {/* Periods in lesson */}
                <div className="divide-y divide-slate-100">
                  {lesson.periods.map((period) => {
                    const isCurrent = period.id === currentPeriodId;
                    const isDone = completedPeriods.includes(period.id);

                    return (
                      <div
                        key={period.id}
                        onClick={() => {
                          onSelectPeriod(period.id);
                          onClose();
                        }}
                        className={`p-4 transition-all flex items-center justify-between gap-4 cursor-pointer ${
                          isCurrent
                            ? 'bg-sky-50 text-sky-950 font-bold border-l-4 border-l-sky-600'
                            : 'hover:bg-slate-50 text-slate-800'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`w-8 h-8 rounded-xl font-bold text-xs flex items-center justify-center shrink-0 ${
                              isCurrent
                                ? 'bg-sky-600 text-white shadow-xs'
                                : isDone
                                ? 'bg-emerald-100 text-emerald-800'
                                : 'bg-slate-100 text-slate-700'
                            }`}
                          >
                            {period.periodNumber}
                          </span>
                          <div>
                            <div className="text-sm font-semibold leading-snug">
                              Tiết {period.periodNumber}: {period.title}
                            </div>
                            <div className="text-xs text-slate-500 mt-0.5">
                              {period.subTopic || period.focusContent || lesson.title}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          {isDone && (
                            <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
                              <Check size={13} />
                              Đã dạy
                            </span>
                          )}
                          {isCurrent && (
                            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-sky-600 text-white">
                              Đang mở
                            </span>
                          )}
                          <ChevronRight size={18} className="text-slate-400" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
