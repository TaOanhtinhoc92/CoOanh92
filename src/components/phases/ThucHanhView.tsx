import React, { useState } from 'react';
import { ThucHanhPhase } from '../../types';
import { Wrench, AlertTriangle, CheckSquare, Square, Award, ArrowRight, ShieldAlert } from 'lucide-react';

interface Props {
  data: ThucHanhPhase;
  onNextPhase?: () => void;
}

export const ThucHanhView: React.FC<Props> = ({ data, onNextPhase }) => {
  const [checkedMaterials, setCheckedMaterials] = useState<{ [idx: number]: boolean }>({});

  const toggleMaterial = (idx: number) => {
    setCheckedMaterials((prev) => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  return (
    <div className="space-y-6">
      {/* Header banner */}
      <div className="bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-700 rounded-3xl p-6 sm:p-8 text-white shadow-lg relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-44 h-44 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-widest bg-black/20 text-cyan-100 w-fit px-3 py-1 rounded-full backdrop-blur-xs mb-3">
          <Wrench size={14} />
          <span>Giai đoạn 5: Thực hành & Chế tạo mô hình</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight">{data.title}</h2>
      </div>

      {/* Main Container */}
      <div className="bg-white rounded-3xl border border-cyan-100 p-6 sm:p-8 shadow-sm space-y-6">
        {/* Materials & Tools checklist */}
        {data.materials && data.materials.length > 0 && (
          <div className="p-6 rounded-2xl bg-cyan-50/60 border border-cyan-200">
            <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
              <h4 className="text-xs font-bold text-cyan-900 uppercase tracking-wider flex items-center gap-2">
                <Wrench size={16} />
                Dụng cụ & Vật liệu cần chuẩn bị (SGK)
              </h4>
              <span className="text-xs text-cyan-700 font-medium italic">
                * Nhấp để đánh dấu vật liệu đã chuẩn bị
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {data.materials.map((mat, idx) => {
                const isChecked = !!checkedMaterials[idx];
                return (
                  <div
                    key={idx}
                    onClick={() => toggleMaterial(idx)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center gap-3 ${
                      isChecked
                        ? 'bg-emerald-50 border-emerald-300 text-emerald-900 font-bold'
                        : 'bg-white border-cyan-200 text-slate-800 hover:border-cyan-400'
                    }`}
                  >
                    {isChecked ? (
                      <CheckSquare size={18} className="text-emerald-600 shrink-0" />
                    ) : (
                      <Square size={18} className="text-slate-400 shrink-0" />
                    )}
                    <span className="text-sm leading-snug">{mat}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Construction Steps */}
        {data.steps && data.steps.length > 0 && (
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 px-1">
              Quy trình thực hiện theo các bước
            </h4>
            <div className="space-y-4">
              {data.steps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4 hover:bg-white hover:border-cyan-300 transition-all shadow-xs"
                >
                  <div className="w-10 h-10 rounded-2xl bg-cyan-600 text-white font-black text-base flex items-center justify-center shrink-0 shadow-xs">
                    {idx + 1}
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs font-bold text-cyan-700 uppercase tracking-wider">
                      Bước {idx + 1}
                    </div>
                    <div className="text-slate-900 text-base font-semibold leading-relaxed">
                      {step}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Evaluation Rubrics & Safety Notes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Rubrics */}
          {data.rubric && data.rubric.length > 0 && (
            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-900 uppercase tracking-wider">
                <Award size={18} className="text-amber-600" />
                Tiêu chí đánh giá sản phẩm (SGK)
              </div>
              <ul className="space-y-2">
                {data.rubric.map((crit, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-800">
                    <span className="w-5 h-5 rounded-full bg-amber-200 text-amber-900 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>{crit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Safety note */}
          {data.safetyNote && (
            <div className="p-5 rounded-2xl bg-rose-50/70 border border-rose-200 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-rose-900 uppercase tracking-wider">
                <ShieldAlert size={18} className="text-rose-600" />
                Lưu ý an toàn lao động trong giờ học
              </div>
              <p className="text-sm text-slate-800 leading-relaxed font-medium">
                {data.safetyNote}
              </p>
            </div>
          )}
        </div>

        {/* Next step button */}
        {onNextPhase && (
          <div className="pt-4 border-t border-slate-100 flex justify-end">
            <button
              onClick={onNextPhase}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm bg-cyan-700 hover:bg-cyan-800 text-white shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <span>Chuyển sang Vận dụng thực tế</span>
              <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
