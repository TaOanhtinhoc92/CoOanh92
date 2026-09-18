import React, { useState, useRef, useEffect } from 'react';
import { Lesson, LessonPeriod } from '../../types';
import { ALL_LESSONS } from '../../data/curriculumData';
import {
  Layers,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Maximize2,
  Minimize2,
  CheckCircle2,
  Check,
  Search,
  X,
  ChevronDown,
  ExternalLink,
  BookOpen
} from 'lucide-react';

interface Props {
  currentLesson: Lesson;
  currentPeriod: LessonPeriod;
  isTeacherMode: boolean;
  onToggleTeacherMode: () => void;
  onOpenCurriculumTree: () => void;
  onSelectPeriod: (periodId: string) => void;
  completedPeriods?: string[];
  onPrevPeriod: () => void;
  onNextPeriod: () => void;
  hasPrev: boolean;
  hasNext: boolean;
  isCompleted: boolean;
  fontSizePercent: number;
  onIncreaseFontSize: () => void;
  onDecreaseFontSize: () => void;
  onResetFontSize: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
}

export const Header: React.FC<Props> = ({
  currentLesson,
  currentPeriod,
  isTeacherMode,
  onToggleTeacherMode,
  onOpenCurriculumTree,
  onSelectPeriod,
  completedPeriods = [],
  onPrevPeriod,
  onNextPeriod,
  hasPrev,
  hasNext,
  isCompleted,
  fontSizePercent,
  onIncreaseFontSize,
  onDecreaseFontSize,
  onResetFontSize,
  isFullscreen,
  onToggleFullscreen
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredPeriodNum, setHoveredPeriodNum] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Flatten all periods from lessons
  const allPeriodsList: { period: LessonPeriod; lesson: Lesson }[] = [];
  ALL_LESSONS.forEach((lesson) => {
    lesson.periods.forEach((p) => {
      allPeriodsList.push({ period: p, lesson });
    });
  });
  allPeriodsList.sort((a, b) => a.period.periodNumber - b.period.periodNumber);

  // Mouse hover handlers with smooth delay
  const handleMouseEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
    // 250ms buffer allows smooth mouse movement from button to dropdown
    closeTimerRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 250);
  };

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  // Filter periods by search
  const filteredPeriods = allPeriodsList.filter(({ period, lesson }) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase().trim();
    return (
      period.title.toLowerCase().includes(q) ||
      (period.focusContent || '').toLowerCase().includes(q) ||
      lesson.title.toLowerCase().includes(q) ||
      `tiết ${period.periodNumber}`.includes(q) ||
      `${period.periodNumber}` === q
    );
  });

  const activeHoveredItem = hoveredPeriodNum
    ? allPeriodsList.find((item) => item.period.periodNumber === hoveredPeriodNum)
    : null;

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-xs">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-3 flex items-center justify-between gap-3">
        {/* Left: Brand & Tree button with Hover Menu */}
        <div
          ref={dropdownRef}
          className="relative flex items-center gap-3"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button
            onClick={() => {
              setIsDropdownOpen((prev) => !prev);
            }}
            className={`flex items-center gap-2.5 px-3.5 py-2 rounded-2xl transition-all cursor-pointer shadow-2xs group border ${
              isDropdownOpen
                ? 'bg-sky-100 text-sky-950 border-sky-400 ring-2 ring-sky-300'
                : 'bg-sky-50 text-sky-900 border-sky-200 hover:bg-sky-100 hover:border-sky-300'
            }`}
            title="Rê chuột để mở nhanh mục lục 35 tiết"
          >
            <div className="w-8 h-8 rounded-xl bg-sky-600 text-white flex items-center justify-center font-black text-xs shadow-xs group-hover:scale-105 transition-transform">
              <Layers size={18} />
            </div>
            <div className="text-left hidden md:block">
              <div className="flex items-center gap-1">
                <span className="text-[11px] font-extrabold text-sky-700 uppercase tracking-wider">
                  Mục lục 35 tiết
                </span>
                <ChevronDown
                  size={13}
                  className={`text-sky-600 transition-transform duration-200 ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </div>
              <div className="text-xs font-black text-slate-800">
                Tiết {currentPeriod.periodNumber}: {currentLesson.title.split(':')[0]}
              </div>
            </div>
          </button>

          {/* Current Period Title (Desktop indicator) */}
          <div className="hidden lg:block border-l border-slate-200 pl-3">
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">
              {currentLesson.topic}
            </div>
            <div className="text-sm font-black text-slate-900 truncate max-w-xs xl:max-w-md">
              Tiết {currentPeriod.periodNumber}: {currentPeriod.title.replace(/^Tiết\s*\d+\s*:\s*/i, '')}
            </div>
          </div>

          {/* HOVER DROPDOWN: MỤC LỤC 35 TIẾT XỔ RA KHI RÊ CHUỘT */}
          {isDropdownOpen && (
            <div
              className="absolute left-0 top-full mt-2 w-[340px] sm:w-[480px] max-w-[94vw] bg-white rounded-3xl shadow-2xl border border-slate-200 z-50 overflow-hidden animate-fadeIn"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Dropdown Header */}
              <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-xl bg-sky-600 text-white flex items-center justify-center font-bold">
                    <Layers size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm font-black tracking-tight">
                      Mục Lục Nhanh 35 Tiết
                    </h4>
                    <p className="text-[11px] text-slate-300">
                      Rê chuột hoặc bấm vào tiết để chọn trực tiếp
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
                    Đã dạy {completedPeriods.length}/35
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsDropdownOpen(false);
                    }}
                    className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* Quick 35-period Number Selector Grid */}
              <div className="p-3.5 bg-slate-50 border-b border-slate-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wide">
                    Chọn nhanh theo số tiết:
                  </span>
                  <span className="text-[10px] text-sky-700 font-bold">
                    Phần 1 (1–21) • Phần 2 (22–35)
                  </span>
                </div>

                <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
                  {allPeriodsList.map(({ period }) => {
                    const isCurrent = period.periodNumber === currentPeriod.periodNumber;
                    const isDone = completedPeriods.includes(period.id);

                    return (
                      <button
                        key={period.id}
                        onMouseEnter={() => setHoveredPeriodNum(period.periodNumber)}
                        onClick={() => {
                          onSelectPeriod(period.id);
                          setIsDropdownOpen(false);
                        }}
                        className={`h-8 sm:h-9 rounded-xl text-xs font-black transition-all flex items-center justify-center relative cursor-pointer ${
                          isCurrent
                            ? 'bg-sky-600 text-white shadow-md ring-2 ring-sky-400 scale-105 z-10'
                            : isDone
                            ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200 border border-emerald-300'
                            : period.periodNumber <= 21
                            ? 'bg-white text-slate-700 hover:bg-sky-50 hover:text-sky-700 border border-slate-200'
                            : 'bg-amber-50/70 text-amber-900 hover:bg-amber-100 border border-amber-200'
                        }`}
                        title={`Tiết ${period.periodNumber}: ${period.title}`}
                      >
                        <span>{period.periodNumber}</span>
                        {isDone && !isCurrent && (
                          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[9px]">
                            ✓
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Hover Preview Box */}
                {activeHoveredItem && (
                  <div className="mt-2.5 px-3 py-1.5 rounded-xl bg-white border border-sky-200 text-xs text-slate-800 shadow-2xs flex items-center justify-between gap-2 animate-fadeIn">
                    <div className="truncate">
                      <span className="font-extrabold text-sky-700">
                        Tiết {activeHoveredItem.period.periodNumber}:
                      </span>{' '}
                      <span className="font-semibold text-slate-900">
                        {activeHoveredItem.period.title.replace(/^Tiết\s*\d+\s*:\s*/i, '')}
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-500 shrink-0 font-medium">
                      {activeHoveredItem.lesson.title}
                    </span>
                  </div>
                )}
              </div>

              {/* Search Bar */}
              <div className="p-2.5 bg-white border-b border-slate-200">
                <div className="relative">
                  <Search
                    size={14}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Tìm theo tên bài, số tiết (VD: 'tiết 5', 'quạt')..."
                    className="w-full pl-8 pr-7 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:bg-white focus:ring-2 focus:ring-sky-500 text-slate-800"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
                    >
                      <X size={12} />
                    </button>
                  )}
                </div>
              </div>

              {/* Detailed Scrollable List of Periods */}
              <div className="max-h-60 overflow-y-auto divide-y divide-slate-100">
                {filteredPeriods.length === 0 ? (
                  <div className="p-4 text-center text-xs text-slate-500">
                    Không tìm thấy tiết học nào phù hợp.
                  </div>
                ) : (
                  filteredPeriods.map(({ period, lesson }) => {
                    const isCurrent = period.id === currentPeriod.id;
                    const isDone = completedPeriods.includes(period.id);
                    const cleanTitle = period.title.replace(/^Tiết\s*\d+\s*:\s*/i, '');

                    return (
                      <div
                        key={period.id}
                        onClick={() => {
                          onSelectPeriod(period.id);
                          setIsDropdownOpen(false);
                        }}
                        className={`p-3 transition-colors flex items-center justify-between gap-3 cursor-pointer ${
                          isCurrent
                            ? 'bg-sky-50 text-sky-950 font-bold border-l-4 border-l-sky-600'
                            : 'hover:bg-slate-50 text-slate-800'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span
                            className={`w-7 h-7 rounded-lg text-xs font-black flex items-center justify-center shrink-0 ${
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
                            <div className="text-xs font-bold leading-tight truncate">
                              Tiết {period.periodNumber}: {cleanTitle}
                            </div>
                            <div className="text-[10px] text-slate-500 truncate mt-0.5">
                              {lesson.title}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 shrink-0">
                          {isDone && (
                            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 flex items-center gap-0.5">
                              <Check size={11} />
                              Đã dạy
                            </span>
                          )}
                          {isCurrent && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-600 text-white">
                              Đang mở
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Dropdown Footer: Button to open full modal */}
              <div className="p-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-500 hidden sm:inline">
                  Bấm một tiết bất kỳ để mở bài dạy
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsDropdownOpen(false);
                    onOpenCurriculumTree();
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl font-bold bg-sky-600 hover:bg-sky-700 text-white text-xs transition-colors cursor-pointer shadow-xs ml-auto"
                >
                  <ExternalLink size={13} />
                  <span>Xem cây chương trình chi tiết (Phóng to)</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Center: Period navigation */}
        <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-2xl border border-slate-200">
          <button
            onClick={onPrevPeriod}
            disabled={!hasPrev}
            className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-xl bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 disabled:opacity-30 disabled:pointer-events-none transition-all flex items-center gap-1 text-xs font-bold cursor-pointer"
            title="Tiết trước"
          >
            <ChevronLeft size={16} />
            <span className="hidden sm:inline">Tiết trước</span>
          </button>

          <div
            onClick={onOpenCurriculumTree}
            className="px-2.5 py-1 text-xs font-black text-slate-800 cursor-pointer hover:text-sky-600 flex items-center gap-1"
            title="Bấm để mở mục lục chi tiết"
          >
            <span>Tiết {currentPeriod.periodNumber}/35</span>
            {isCompleted && (
              <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
            )}
          </div>

          <button
            onClick={onNextPeriod}
            disabled={!hasNext}
            className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-xl bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 disabled:opacity-30 disabled:pointer-events-none transition-all flex items-center gap-1 text-xs font-bold cursor-pointer"
            title="Tiết tiếp theo"
          >
            <span className="hidden sm:inline">Tiết sau</span>
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Right: Controls (Font size controls, Teacher mode, Fullscreen) */}
        <div className="flex items-center gap-2">
          {/* Nút TĂNG - GIẢM KÍCH CỠ CHỮ (A- [100%] A+) */}
          <div className="flex items-center bg-slate-100 p-1 rounded-2xl border border-slate-200 shadow-2xs">
            <button
              onClick={onDecreaseFontSize}
              disabled={fontSizePercent <= 85}
              className="px-2 py-1 sm:px-2.5 sm:py-1 rounded-xl bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900 border border-slate-200 disabled:opacity-30 disabled:pointer-events-none transition-all text-xs font-black cursor-pointer flex items-center gap-0.5"
              title="Giảm kích cỡ chữ (A-)"
            >
              <span className="text-xs">A</span>
              <span className="text-[10px] font-bold">−</span>
            </button>

            <button
              onClick={onResetFontSize}
              className="px-2 sm:px-2.5 py-1 text-xs font-black text-slate-800 hover:text-indigo-600 transition-colors cursor-pointer"
              title="Cỡ chữ hiện tại. Bấm để đặt lại chuẩn 100%"
            >
              <span>{fontSizePercent}%</span>
            </button>

            <button
              onClick={onIncreaseFontSize}
              disabled={fontSizePercent >= 160}
              className="px-2 py-1 sm:px-2.5 sm:py-1 rounded-xl bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900 border border-slate-200 disabled:opacity-30 disabled:pointer-events-none transition-all text-xs font-black cursor-pointer flex items-center gap-0.5"
              title="Tăng kích cỡ chữ (A+)"
            >
              <span className="text-sm">A</span>
              <span className="text-[11px] font-bold">+</span>
            </button>
          </div>

          {/* Teacher Mode Toggle */}
          <button
            onClick={onToggleTeacherMode}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shadow-2xs border ${
              isTeacherMode
                ? 'bg-amber-500 text-white border-amber-600 shadow-amber-500/20'
                : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
            }`}
            title="Bật chế độ Giáo viên để xem đáp án, gợi ý và giáo án"
          >
            <GraduationCap size={16} />
            <span className="hidden sm:inline">
              {isTeacherMode ? 'Chế độ Giáo viên' : 'Chế độ Trình chiếu'}
            </span>
          </button>

          {/* Fullscreen Button */}
          <button
            onClick={onToggleFullscreen}
            className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200 transition-all cursor-pointer"
            title={isFullscreen ? 'Thu nhỏ cửa sổ' : 'Trình chiếu toàn màn hình'}
          >
            {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
          </button>
        </div>
      </div>
    </header>
  );
};
