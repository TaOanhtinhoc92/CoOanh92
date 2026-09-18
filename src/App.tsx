import React, { useState, useEffect } from 'react';
import {
  getAllLessons,
  getAllPeriods,
  getPeriodById,
  getCurriculumStats
} from './data/curriculumData';
import { PedagogicalPhase } from './types';
import { Header } from './components/layout/Header';
import { PhaseNavBar } from './components/layout/PhaseNavBar';
import { CurriculumTreeModal } from './components/layout/CurriculumTreeModal';
import { KhoiDongView } from './components/phases/KhoiDongView';
import { KhamPhaView } from './components/phases/KhamPhaView';
import { ThaoLuanView } from './components/phases/ThaoLuanView';
import { LuyenTapView } from './components/phases/LuyenTapView';
import { ThucHanhView } from './components/phases/ThucHanhView';
import { VanDungView } from './components/phases/VanDungView';
import { GiaoAnView } from './components/phases/GiaoAnView';
import { PhaseMediaGallery } from './components/activities/PhaseMediaGallery';
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Layers,
  GraduationCap,
  BookOpen,
  CheckCircle2,
  Award
} from 'lucide-react';

export default function App() {
  const allLessons = getAllLessons();
  const allPeriods = getAllPeriods();

  // Local storage keys
  const CURRENT_PERIOD_KEY = 'tro_ly_cong_nghe_5_current_period';
  const COMPLETED_PERIODS_KEY = 'tro_ly_cong_nghe_5_completed';
  const TEACHER_MODE_KEY = 'tro_ly_cong_nghe_5_teacher_mode';
  const FONT_SIZE_PERCENT_KEY = 'tro_ly_cong_nghe_5_font_size_percent';

  // State
  const [currentPeriodId, setCurrentPeriodId] = useState<string>(() => {
    return localStorage.getItem(CURRENT_PERIOD_KEY) || 'tiet-1';
  });

  const [activePhase, setActivePhase] = useState<PedagogicalPhase>('khoi_dong');
  const [isTeacherMode, setIsTeacherMode] = useState<boolean>(() => {
    return localStorage.getItem(TEACHER_MODE_KEY) === 'true';
  });

  const [completedPeriods, setCompletedPeriods] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(COMPLETED_PERIODS_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Font size percentage state (85% to 160%)
  const [fontSizePercent, setFontSizePercent] = useState<number>(() => {
    try {
      const saved = localStorage.getItem(FONT_SIZE_PERCENT_KEY);
      return saved ? parseInt(saved, 10) : 100;
    } catch {
      return 100;
    }
  });

  const [isCurriculumOpen, setIsCurriculumOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Sync state to local storage
  useEffect(() => {
    localStorage.setItem(CURRENT_PERIOD_KEY, currentPeriodId);
  }, [currentPeriodId]);

  useEffect(() => {
    localStorage.setItem(TEACHER_MODE_KEY, String(isTeacherMode));
  }, [isTeacherMode]);

  useEffect(() => {
    localStorage.setItem(COMPLETED_PERIODS_KEY, JSON.stringify(completedPeriods));
  }, [completedPeriods]);

  useEffect(() => {
    localStorage.setItem(FONT_SIZE_PERCENT_KEY, String(fontSizePercent));
    document.documentElement.style.fontSize = `${fontSizePercent}%`;
  }, [fontSizePercent]);

  // Handle Fullscreen change
  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  };

  // Font size actions
  const handleIncreaseFontSize = () => {
    setFontSizePercent((prev) => Math.min(prev + 15, 160));
  };

  const handleDecreaseFontSize = () => {
    setFontSizePercent((prev) => Math.max(prev - 15, 85));
  };

  const handleResetFontSize = () => {
    setFontSizePercent(100);
  };

  // Current period and lesson resolution
  const resolved = getPeriodById(currentPeriodId);
  const currentPeriod = resolved ? resolved.period : allPeriods[0];
  const currentLesson = resolved ? resolved.lesson : allLessons[0];

  const currentIndex = allPeriods.findIndex((p) => p.id === currentPeriod.id);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < allPeriods.length - 1;

  // Period navigation
  const handlePrevPeriod = () => {
    if (hasPrev) {
      const prevPeriod = allPeriods[currentIndex - 1];
      setCurrentPeriodId(prevPeriod.id);
      setActivePhase('khoi_dong');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNextPeriod = () => {
    if (hasNext) {
      const nextPeriod = allPeriods[currentIndex + 1];
      setCurrentPeriodId(nextPeriod.id);
      setActivePhase('khoi_dong');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectPeriod = (periodId: string) => {
    setCurrentPeriodId(periodId);
    setActivePhase('khoi_dong');
    setIsCurriculumOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleComplete = () => {
    setCompletedPeriods((prev) => {
      if (prev.includes(currentPeriod.id)) {
        return prev.filter((id) => id !== currentPeriod.id);
      } else {
        return [...prev, currentPeriod.id];
      }
    });
  };

  // Flow through pedagogical phases in order
  const phaseOrder: PedagogicalPhase[] = [
    'khoi_dong',
    'kham_pha',
    'thao_luan',
    'luyen_tap',
    ...(currentPeriod.thucHanh ? ['thuc_hanh' as PedagogicalPhase] : []),
    'van_dung'
  ];

  const currentPhaseIndex = phaseOrder.indexOf(activePhase);

  const handleNextPhase = () => {
    if (currentPhaseIndex >= 0 && currentPhaseIndex < phaseOrder.length - 1) {
      setActivePhase(phaseOrder[currentPhaseIndex + 1]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If at end of phases (Vận dụng), mark current period completed and advance
      if (!completedPeriods.includes(currentPeriod.id)) {
        setCompletedPeriods((prev) => [...prev, currentPeriod.id]);
      }
      if (hasNext) {
        handleNextPeriod();
      }
    }
  };

  const handlePrevPhase = () => {
    if (currentPhaseIndex > 0) {
      setActivePhase(phaseOrder[currentPhaseIndex - 1]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Phase friendly title label
  const getPhaseLabel = (phase: PedagogicalPhase): string => {
    switch (phase) {
      case 'khoi_dong':
        return 'Khởi động';
      case 'kham_pha':
        return 'Khám phá kiến thức mới';
      case 'thao_luan':
        return 'Thảo luận nhóm';
      case 'luyen_tap':
        return 'Luyện tập';
      case 'thuc_hanh':
        return 'Thực hành & Trải nghiệm';
      case 'van_dung':
        return 'Vận dụng';
      case 'giao_an':
        return 'Kế hoạch bài dạy (Giáo án)';
      default:
        return 'Bài học';
    }
  };

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in an input
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (e.key === 'ArrowRight' && e.altKey) {
        handleNextPeriod();
      } else if (e.key === 'ArrowLeft' && e.altKey) {
        handlePrevPeriod();
      } else if (e.key === 'm' || e.key === 'M') {
        setIsTeacherMode((prev) => !prev);
      } else if (e.key === 't' || e.key === 'T') {
        setIsCurriculumOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, hasNext, hasPrev]);

  const isCurrentPeriodCompleted = completedPeriods.includes(currentPeriod.id);
  const stats = getCurriculumStats();

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-900 font-sans">
      {/* Top Header */}
      <Header
        currentLesson={currentLesson}
        currentPeriod={currentPeriod}
        isTeacherMode={isTeacherMode}
        onToggleTeacherMode={() => setIsTeacherMode(!isTeacherMode)}
        onOpenCurriculumTree={() => setIsCurriculumOpen(true)}
        onSelectPeriod={handleSelectPeriod}
        completedPeriods={completedPeriods}
        onPrevPeriod={handlePrevPeriod}
        onNextPeriod={handleNextPeriod}
        hasPrev={hasPrev}
        hasNext={hasNext}
        isCompleted={isCurrentPeriodCompleted}
        fontSizePercent={fontSizePercent}
        onIncreaseFontSize={handleIncreaseFontSize}
        onDecreaseFontSize={handleDecreaseFontSize}
        onResetFontSize={handleResetFontSize}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
      />

      {/* 7-Step Pedagogical Navigation Bar */}
      <PhaseNavBar
        activePhase={activePhase}
        onSelectPhase={(phase) => {
          setActivePhase(phase);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        hasPracticePhase={!!currentPeriod.thucHanh}
      />

      {/* Main Lesson Stage */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
        {/* Context Breadcrumb & Status Pill */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm">
            <span className="font-black text-sky-700 uppercase tracking-wider bg-sky-50 px-2.5 py-1 rounded-lg border border-sky-200">
              {currentLesson.partTitle || (currentLesson.partId === 'part1' ? 'Phần 1: Công nghệ và Đời sống' : 'Phần 2: Thủ công Kĩ thuật')}
            </span>
            <span className="text-slate-400">/</span>
            <span className="font-bold text-slate-700 truncate">
              {currentLesson.title}
            </span>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            {isTeacherMode && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-amber-100 text-amber-900 border border-amber-300 shadow-2xs">
                <GraduationCap size={14} />
                Chế độ Giáo viên đang bật
              </span>
            )}
            <button
              onClick={handleToggleComplete}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer border ${
                isCurrentPeriodCompleted
                  ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                  : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200'
              }`}
            >
              <CheckCircle2 size={14} className={isCurrentPeriodCompleted ? 'text-emerald-600' : 'text-slate-400'} />
              <span>{isCurrentPeriodCompleted ? 'Đã hoàn thành tiết này' : 'Chưa hoàn thành'}</span>
            </button>
          </div>
        </div>

        {/* Phase Component Rendering */}
        <section className="transition-all duration-300">
          {activePhase === 'khoi_dong' && (
            <KhoiDongView
              data={currentPeriod.khoiDong}
              onNextPhase={handleNextPhase}
            />
          )}

          {activePhase === 'kham_pha' && (
            <KhamPhaView
              data={currentPeriod.khamPha}
              periodId={currentPeriod.id}
              periodTitle={currentPeriod.title}
              focusContent={currentPeriod.focusContent}
              isTeacherMode={isTeacherMode}
              onNextPhase={handleNextPhase}
            />
          )}

          {activePhase === 'thao_luan' && (
            <ThaoLuanView
              data={currentPeriod.thaoLuan}
              isTeacherMode={isTeacherMode}
              onNextPhase={handleNextPhase}
            />
          )}

          {activePhase === 'luyen_tap' && (
            <LuyenTapView
              data={currentPeriod.luyenTap}
              isTeacherMode={isTeacherMode}
              hasNextPracticePhase={!!currentPeriod.thucHanh}
              onNextPhase={handleNextPhase}
            />
          )}

          {activePhase === 'thuc_hanh' && currentPeriod.thucHanh && (
            <ThucHanhView
              data={currentPeriod.thucHanh}
              onNextPhase={handleNextPhase}
            />
          )}

          {activePhase === 'van_dung' && (
            <VanDungView
              data={currentPeriod.vanDung}
              isTeacherMode={isTeacherMode}
              hasNextPeriod={hasNext}
              onNextPhase={handleNextPhase}
            />
          )}

          {activePhase === 'giao_an' && (
            <GiaoAnView
              period={currentPeriod}
              lesson={currentLesson}
            />
          )}
        </section>

        {/* Phương tiện, hình ảnh, video, link bổ sung cho từng phần học */}
        <PhaseMediaGallery
          periodId={currentPeriod.id}
          phaseId={activePhase}
          phaseLabel={getPhaseLabel(activePhase)}
        />

        {/* Bottom Navigation Toolbar */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs flex items-center justify-between flex-wrap gap-4">
          <button
            onClick={handlePrevPhase}
            disabled={currentPhaseIndex <= 0}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-slate-100 text-slate-700 hover:bg-slate-200 disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer"
          >
            <ChevronLeft size={18} />
            <span>Giai đoạn trước</span>
          </button>

          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <span>
              Bước{' '}
              <strong className="text-slate-900 font-bold">
                {currentPhaseIndex + 1}/{phaseOrder.length}
              </strong>
            </span>
            <span>•</span>
            <span className="text-sky-700 font-bold">
              Tiết {currentPeriod.periodNumber}/35
            </span>
          </div>

          <button
            onClick={handleNextPhase}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-sky-600 hover:bg-sky-700 text-white transition-all cursor-pointer shadow-sm ml-auto"
          >
            <span>
              {currentPhaseIndex < phaseOrder.length - 1
                ? 'Giai đoạn tiếp theo'
                : 'Tiết học tiếp theo'}
            </span>
            <ChevronRight size={18} />
          </button>
        </div>
      </main>

      {/* Curriculum Tree Drawer / Modal */}
      <CurriculumTreeModal
        isOpen={isCurriculumOpen}
        onClose={() => setIsCurriculumOpen(false)}
        lessons={allLessons}
        currentPeriodId={currentPeriod.id}
        completedPeriodIds={completedPeriods}
        onSelectPeriod={handleSelectPeriod}
      />
    </div>
  );
}
