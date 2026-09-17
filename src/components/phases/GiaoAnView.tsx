import React from 'react';
import { LessonPeriod, Lesson } from '../../types';
import { BookOpen, GraduationCap, CheckCircle, Lightbulb, PackageCheck, Target } from 'lucide-react';

interface Props {
  period: LessonPeriod;
  lesson: Lesson;
}

export const GiaoAnView: React.FC<Props> = ({ period, lesson }) => {
  return (
    <div className="space-y-6">
      {/* Header banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-lg relative overflow-hidden border border-slate-700">
        <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-widest bg-amber-500/20 text-amber-300 w-fit px-3 py-1 rounded-full border border-amber-500/30 mb-3">
          <GraduationCap size={14} />
          <span>Kế hoạch bài dạy (Giáo án sư phạm)</span>
        </div>
        <div className="space-y-1">
          <div className="text-sm font-semibold text-slate-300">
            {lesson.topic} • {lesson.title}
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            Tiết {period.periodNumber}: {period.title}
          </h2>
        </div>
      </div>

      {/* Main Container */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
        {/* Objectives / Yêu cầu cần đạt */}
        <div className="p-6 rounded-2xl bg-indigo-50/70 border border-indigo-200 space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold text-indigo-900 uppercase tracking-wider">
            <Target size={18} className="text-indigo-600" />
            I. Yêu cầu cần đạt (Mục tiêu bài học theo chuẩn CT GDPT 2018)
          </div>
          <div className="space-y-2.5">
            {period.pedagogicalObjectives.map((obj, idx) => (
              <div key={idx} className="flex items-start gap-3 text-slate-800 text-sm md:text-base leading-relaxed">
                <CheckCircle size={18} className="text-indigo-600 shrink-0 mt-1" />
                <span>{obj}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Preparation / Thiết bị dạy học */}
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
            <PackageCheck size={18} className="text-sky-600" />
            II. Đồ dùng & Thiết bị dạy học
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700">
            <div className="p-4 rounded-xl bg-white border border-slate-200">
              <strong className="text-slate-900 block mb-1">1. Giáo viên:</strong>
              Máy chiếu, ứng dụng tương tác "Trợ lý dạy học Công nghệ 5", tranh ảnh SGK phóng to, phiếu học tập thảo luận nhóm.
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200">
              <strong className="text-slate-900 block mb-1">2. Học sinh:</strong>
              SGK Công nghệ 5, vở ghi chép, bút viết; đối với tiết thực hành cần chuẩn bị đầy đủ kéo, keo dán, bìa các-tông theo dặn dò.
            </div>
          </div>
        </div>

        {/* Lesson Flow Breakdown */}
        <div className="space-y-3">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">
            III. Tiến trình tổ chức hoạt động dạy học trên lớp (35 phút)
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
              <div className="text-xs font-bold text-amber-800 uppercase mb-1">1. Khởi động (3-5 phút)</div>
              <div className="text-xs text-slate-700 leading-relaxed font-medium">
                {period.khoiDong.title} - Kích hoạt tư duy và tạo hứng thú ban đầu.
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200">
              <div className="text-xs font-bold text-blue-800 uppercase mb-1">2. Khám phá (10-12 phút)</div>
              <div className="text-xs text-slate-700 leading-relaxed font-medium">
                {period.khamPha.title} - Quan sát tranh, giải quyết câu hỏi SGK.
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
              <div className="text-xs font-bold text-emerald-800 uppercase mb-1">3. Thảo luận (5-7 phút)</div>
              <div className="text-xs text-slate-700 leading-relaxed font-medium">
                Thảo luận nhóm 4: {period.thaoLuan.topic}.
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200">
              <div className="text-xs font-bold text-purple-800 uppercase mb-1">4. Luyện tập (8-10 phút)</div>
              <div className="text-xs text-slate-700 leading-relaxed font-medium">
                Thực hiện {period.luyenTap.exercises.length} bài tập tương tác củng cố.
              </div>
            </div>

            {period.thucHanh && (
              <div className="p-4 rounded-2xl bg-cyan-50/70 border border-cyan-200">
                <div className="text-xs font-bold text-cyan-800 uppercase mb-1">5. Thực hành</div>
                <div className="text-xs text-slate-700 leading-relaxed font-medium">
                  {period.thucHanh.title} - Chế tạo và đánh giá sản phẩm.
                </div>
              </div>
            )}

            <div className="p-4 rounded-2xl bg-orange-50/70 border border-orange-200">
              <div className="text-xs font-bold text-orange-800 uppercase mb-1">6. Vận dụng & Củng cố (3-5 phút)</div>
              <div className="text-xs text-slate-700 leading-relaxed font-medium">
                Liên hệ thực tế đời sống & chốt ghi nhớ SGK.
              </div>
            </div>
          </div>
        </div>

        {/* Teacher's Master Tips & Notes */}
        <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200 flex items-start gap-3">
          <Lightbulb className="text-amber-600 shrink-0 mt-0.5" size={20} />
          <div className="text-xs sm:text-sm text-slate-800 leading-relaxed">
            <strong>Lưu ý nghiệp vụ sư phạm:</strong> Khuyến khích học sinh phát biểu tự tin, liên hệ nhiều với đồ dùng thực tế có trong gia đình và trường lớp; khen ngợi tinh thần hợp tác nhóm và ý thức an toàn công nghệ.
          </div>
        </div>
      </div>
    </div>
  );
};
