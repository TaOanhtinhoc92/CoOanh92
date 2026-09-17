import React from 'react';
import { PedagogicalPhase } from '../../types';
import {
  Sparkles,
  Compass,
  Users,
  Dumbbell,
  Wrench,
  Target,
  BookmarkCheck,
  GraduationCap
} from 'lucide-react';

interface Props {
  activePhase: PedagogicalPhase;
  onSelectPhase: (phase: PedagogicalPhase) => void;
  hasPracticePhase: boolean;
}

export const PhaseNavBar: React.FC<Props> = ({
  activePhase,
  onSelectPhase,
  hasPracticePhase
}) => {
  const phases: { id: PedagogicalPhase; label: string; icon: React.ReactNode; color: string }[] = [
    {
      id: 'khoi_dong',
      label: 'Khởi động',
      icon: <Sparkles size={16} />,
      color: 'hover:text-amber-600'
    },
    {
      id: 'kham_pha',
      label: 'Khám phá',
      icon: <Compass size={16} />,
      color: 'hover:text-blue-600'
    },
    {
      id: 'thao_luan',
      label: 'Thảo luận',
      icon: <Users size={16} />,
      color: 'hover:text-emerald-600'
    },
    {
      id: 'luyen_tap',
      label: 'Luyện tập',
      icon: <Dumbbell size={16} />,
      color: 'hover:text-purple-600'
    },
    ...(hasPracticePhase
      ? [
          {
            id: 'thuc_hanh' as PedagogicalPhase,
            label: 'Thực hành',
            icon: <Wrench size={16} />,
            color: 'hover:text-cyan-600'
          }
        ]
      : []),
    {
      id: 'van_dung',
      label: 'Vận dụng',
      icon: <Target size={16} />,
      color: 'hover:text-orange-600'
    },
    {
      id: 'giao_an',
      label: 'Giáo án',
      icon: <GraduationCap size={16} />,
      color: 'hover:text-indigo-600'
    }
  ];

  return (
    <div className="bg-white border-b border-slate-200 sticky top-[73px] z-30 shadow-xs">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className="flex items-center gap-1.5 overflow-x-auto py-2.5 no-scrollbar">
          {phases.map((item, index) => {
            const isActive = activePhase === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectPhase(item.id)}
                className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-sky-600 text-white shadow-sm shadow-sky-600/20 scale-[1.02]'
                    : `text-slate-600 bg-slate-50 border border-slate-200/80 hover:bg-slate-100 ${item.color}`
                }`}
              >
                <span className="shrink-0">{item.icon}</span>
                <span>{item.label}</span>
                {item.id !== 'giao_an' && (
                  <span
                    className={`w-4 h-4 rounded-full text-[10px] font-bold flex items-center justify-center ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {index + 1}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
