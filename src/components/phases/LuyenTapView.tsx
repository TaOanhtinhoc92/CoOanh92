import React from 'react';
import { LuyenTapItem, LuyenTapPhase } from '../../types';
import { Dumbbell, ArrowRight } from 'lucide-react';
import { MatchingActivity } from '../activities/MatchingActivity';
import { OrderActivity } from '../activities/OrderActivity';
import { CategorizeActivity } from '../activities/CategorizeActivity';
import { TrueFalseActivity } from '../activities/TrueFalseActivity';
import { McqActivity } from '../activities/McqActivity';
import { ImageSelectActivity } from '../activities/ImageSelectActivity';

interface Props {
  data: LuyenTapItem[] | LuyenTapPhase | any;
  isTeacherMode: boolean;
  hasNextPracticePhase?: boolean;
  onNextPhase?: () => void;
}

export const LuyenTapView: React.FC<Props> = ({
  data,
  isTeacherMode,
  hasNextPracticePhase,
  onNextPhase
}) => {
  const exercises: LuyenTapItem[] = Array.isArray(data)
    ? data
    : data?.exercises || [];

  const title = !Array.isArray(data) && data?.title ? data.title : 'Bài tập luyện tập tương tác (SGK)';

  return (
    <div className="space-y-6">
      {/* Header banner */}
      <div className="bg-gradient-to-r from-purple-600 via-violet-600 to-purple-700 rounded-3xl p-6 sm:p-8 text-white shadow-lg relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-44 h-44 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-widest bg-black/20 text-purple-100 w-fit px-3 py-1 rounded-full backdrop-blur-xs mb-3">
          <Dumbbell size={14} />
          <span>Giai đoạn 4: Luyện tập củng cố kiến thức</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">{title}</h2>
          <div className="text-xs bg-white/20 text-white font-bold px-3 py-1.5 rounded-full border border-white/30 self-start sm:self-auto">
            {exercises.length} dạng bài tập tương tác
          </div>
        </div>
      </div>

      {/* Exercises list */}
      <div className="space-y-6">
        {exercises.map((exercise, index) => {
          switch (exercise.type) {
            case 'matching':
              return (
                <MatchingActivity
                  key={exercise.id || index}
                  exercise={exercise}
                  isTeacherMode={isTeacherMode}
                />
              );
            case 'order':
              return (
                <OrderActivity
                  key={exercise.id || index}
                  exercise={exercise}
                  isTeacherMode={isTeacherMode}
                />
              );
            case 'categorize':
              return (
                <CategorizeActivity
                  key={exercise.id || index}
                  exercise={exercise}
                  isTeacherMode={isTeacherMode}
                />
              );
            case 'true_false':
              return (
                <TrueFalseActivity
                  key={exercise.id || index}
                  exercise={exercise}
                  isTeacherMode={isTeacherMode}
                />
              );
            case 'mcq':
              return (
                <McqActivity
                  key={exercise.id || index}
                  exercise={exercise}
                  isTeacherMode={isTeacherMode}
                />
              );
            case 'image_select':
              return (
                <ImageSelectActivity
                  key={exercise.id || index}
                  exercise={exercise}
                  isTeacherMode={isTeacherMode}
                />
              );
            default:
              return null;
          }
        })}
      </div>

      {/* Next step button */}
      {onNextPhase && (
        <div className="pt-4 border-t border-slate-200 flex justify-end">
          <button
            onClick={onNextPhase}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm bg-purple-600 hover:bg-purple-700 text-white shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <span>
              {hasNextPracticePhase ? 'Chuyển sang Thực hành chế tạo' : 'Chuyển sang Vận dụng'}
            </span>
            <ArrowRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
};
