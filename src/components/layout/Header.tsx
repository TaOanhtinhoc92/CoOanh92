import React from 'react';
import { Lesson, LessonPeriod } from '../../types';
import {
  Layers,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Maximize2,
  Minimize2,
  CheckCircle2
} from 'lucide-react';

interface Props {
  currentLesson: Lesson;
  currentPeriod: LessonPeriod;
  isTeacherMode: boolean;
  onToggleTeacherMode: () => void;
  onOpenCurriculumTree: () => void;
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
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-xs">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-3 flex items-center justify-between gap-3">
        {/* Left: Brand & Tree button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenCurriculumTree}
            className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-sky-50 text-sky-900 border border-sky-200 hover:bg-sky-100 hover:border-sky-300 transition-all cursor-pointer shadow-2xs group"
            title="Mở toàn bộ 35 tiết chương trình"
          >
            <div className="w-8 h-8 rounded-xl bg-sky-600 text-white flex items-center justify-center font-black text-xs shadow-xs group-hover:scale-105 transition-transform">
              <Layers size={18} />
            </div>
            <div className="text-left hidden md:block">
              <div className="text-[11px] font-bold text-sky-700 uppercase tracking-wider">
                Mục lục 35 tiết
              </div>
              <div className="text-xs font-black text-slate-800">
                Tiết {currentPeriod.periodNumber}: {currentLesson.title.split(':')[0]}
              </div>
            </div>
          </button>

          {/* Current Period Title (Mobile/Tablet and Desktop indicator) */}
          <div className="hidden lg:block border-l border-slate-200 pl-3">
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">
              {currentLesson.topic}
            </div>
            <div className="text-sm font-black text-slate-900 truncate max-w-xs xl:max-w-md">
              Tiết {currentPeriod.periodNumber}: {currentPeriod.title}
            </div>
          </div>
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
