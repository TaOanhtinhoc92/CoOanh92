import React, { useState } from 'react';
import { Calendar, User, Lightbulb, CheckCircle2 } from 'lucide-react';

interface Milestone {
  year: number;
  inventor: string;
  invention: string;
  significance: string;
  country: string;
  color: string;
}

const MILESTONES: Milestone[] = [
  {
    year: 1784,
    inventor: 'Giêm Oát (James Watt)',
    invention: 'Máy hơi nước cải tiến',
    significance: 'Khởi đầu cuộc Cách mạng Công nghiệp, cung cấp nguồn động lực cơ giới cho tàu thuyền, tàu hỏa và nhà máy dệt.',
    country: 'Vương quốc Anh',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    year: 1876,
    inventor: 'A-lếch-xan-đơ Gra-ham Be (Graham Bell)',
    invention: 'Chiếc điện thoại đầu tiên',
    significance: 'Mở ra kỷ nguyên viễn thông, truyền giọng nói trực tiếp qua khoảng cách xa xôi.',
    country: 'Mỹ / Scotland',
    color: 'from-emerald-500 to-teal-600'
  },
  {
    year: 1879,
    inventor: 'Tô-mát Ê-đi-xơn (Thomas Edison)',
    invention: 'Bóng đèn sợi đốt thương mại',
    significance: 'Thắp sáng bóng đêm cho nhân loại, kéo dài thời gian sinh hoạt, lao động và học tập.',
    country: 'Mỹ',
    color: 'from-amber-500 to-orange-600'
  },
  {
    year: 1886,
    inventor: 'Các Ben (Karl Benz)',
    invention: 'Chiếc ô tô chạy bằng xăng đầu tiên',
    significance: 'Khởi sinh ngành công nghiệp ô tô hiện đại, thay đổi hoàn toàn cách con người di chuyển trên mặt đất.',
    country: 'Đức',
    color: 'from-rose-500 to-red-600'
  }
];

export const TimelineVisualizer: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = MILESTONES[activeIdx];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl my-6 border border-slate-700">
      <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
        <div>
          <span className="text-xs font-extrabold uppercase tracking-widest text-sky-400 bg-sky-950/80 px-3 py-1 rounded-full border border-sky-800">
            Trục thời gian tương tác (SGK tr. 9)
          </span>
          <h3 className="text-xl sm:text-2xl font-black mt-2 tracking-tight text-white">
            4 Mốc Lịch Sử Sáng Chế Vĩ Đại
          </h3>
        </div>
        <div className="text-xs text-slate-400">
          Nhấp vào từng năm để khám phá chi tiết
        </div>
      </div>

      {/* Horizontal timeline track */}
      <div className="relative mb-8 pt-4">
        <div className="absolute top-9 left-6 right-6 h-1 bg-slate-700 rounded-full hidden sm:block" />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 relative z-10">
          {MILESTONES.map((m, idx) => {
            const isActive = activeIdx === idx;
            return (
              <button
                key={m.year}
                onClick={() => setActiveIdx(idx)}
                className={`p-3 sm:p-4 rounded-2xl transition-all text-center flex flex-col items-center gap-2 cursor-pointer border ${
                  isActive
                    ? 'bg-white text-slate-900 border-white shadow-lg shadow-sky-500/20 scale-105 ring-4 ring-sky-400/40'
                    : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-700'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full font-black text-xs flex items-center justify-center shadow-md ${
                    isActive
                      ? 'bg-sky-600 text-white'
                      : 'bg-slate-700 text-slate-300'
                  }`}
                >
                  <Calendar size={18} />
                </div>
                <div className="font-black text-lg sm:text-xl tracking-tight">{m.year}</div>
                <div className="text-xs font-semibold truncate max-w-full opacity-90">
                  {m.inventor.split('(')[0]}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Detail Card */}
      <div className="bg-slate-800/90 rounded-2xl p-6 border border-slate-700 backdrop-blur-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-700">
          <div className="flex items-center gap-3">
            <div className={`p-3 rounded-2xl bg-gradient-to-r ${current.color} text-white shadow-md`}>
              <Lightbulb size={28} />
            </div>
            <div>
              <div className="text-xs font-bold text-sky-400 uppercase tracking-wider">
                Năm cấp bằng sáng chế: {current.year}
              </div>
              <h4 className="text-xl sm:text-2xl font-black text-white">{current.invention}</h4>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-300 bg-slate-900/60 px-3.5 py-1.5 rounded-xl border border-slate-700/80 self-start md:self-auto">
            <User size={16} className="text-sky-400" />
            <span>Quốc gia: <strong className="text-white">{current.country}</strong></span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-700/60">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">
              Nhà sáng chế
            </div>
            <div className="text-base font-bold text-white">{current.inventor}</div>
          </div>

          <div className="md:col-span-2 p-4 rounded-xl bg-slate-900/50 border border-slate-700/60">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">
              Ý nghĩa lịch sử đối với đời sống
            </div>
            <div className="text-sm text-slate-200 leading-relaxed">{current.significance}</div>
          </div>
        </div>

        <div className="mt-4 pt-3 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 size={14} className="text-emerald-400" />
            <span>Nguồn: SGK Công nghệ 5, trang 9 & 10</span>
          </div>
          <div>Mốc {activeIdx + 1}/4</div>
        </div>
      </div>
    </div>
  );
};
