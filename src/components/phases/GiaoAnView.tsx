import React, { useState, useEffect } from 'react';
import { LessonPeriod, Lesson } from '../../types';
import {
  GiaoAnData,
  generateDefaultGiaoAn,
  exportGiaoAnToWord
} from '../../utils/giaoAnGenerator';
import {
  GraduationCap,
  Download,
  Edit3,
  Save,
  RotateCcw,
  Printer,
  Copy,
  Check,
  Plus,
  Trash2,
  Eye,
  Sparkles,
  BookOpen,
  Target,
  PackageCheck,
  CheckCircle,
  Lightbulb,
  FileText
} from 'lucide-react';

interface Props {
  period: LessonPeriod;
  lesson: Lesson;
}

export const GiaoAnView: React.FC<Props> = ({ period, lesson }) => {
  const storageKey = `giao_an_custom_${period.id}`;

  // Initial loading from localStorage or generating default
  const [giaoAn, setGiaoAn] = useState<GiaoAnData>(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Lỗi khi đọc giáo án từ bộ nhớ:', e);
    }
    return generateDefaultGiaoAn(period, lesson);
  });

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [saveSuccessNotice, setSaveSuccessNotice] = useState<boolean>(false);

  // Sync state when switching period
  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        setGiaoAn(JSON.parse(saved));
      } else {
        setGiaoAn(generateDefaultGiaoAn(period, lesson));
      }
    } catch {
      setGiaoAn(generateDefaultGiaoAn(period, lesson));
    }
    setIsEditing(false);
  }, [period.id, storageKey]);

  // Handle Save
  const handleSave = () => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(giaoAn));
      setIsEditing(false);
      setSaveSuccessNotice(true);
      setTimeout(() => setSaveSuccessNotice(false), 2500);
    } catch (e) {
      alert('Không thể lưu giáo án vào trình duyệt. Vui lòng thử lại!');
    }
  };

  // Reset to auto-generated default
  const handleResetToDefault = () => {
    if (window.confirm('Thầy/cô có chắc muốn đặt lại giáo án về bản tự động tạo chuẩn ban đầu của hệ thống không?')) {
      const defaultData = generateDefaultGiaoAn(period, lesson);
      setGiaoAn(defaultData);
      localStorage.removeItem(storageKey);
      setIsEditing(false);
      setSaveSuccessNotice(true);
      setTimeout(() => setSaveSuccessNotice(false), 2500);
    }
  };

  // Export to Word (.doc)
  const handleDownloadWord = () => {
    exportGiaoAnToWord(giaoAn);
  };

  // Print
  const handlePrint = () => {
    window.print();
  };

  // Copy text to clipboard
  const handleCopyText = () => {
    let text = `KẾ HOẠCH BÀI DẠY - ${giaoAn.subject.toUpperCase()}\n`;
    text += `BÀI: ${giaoAn.lessonTitle.toUpperCase()}\n`;
    text += `Tiết ${giaoAn.periodNumber}: ${giaoAn.periodTitle} (${giaoAn.sgkPages}) - ${giaoAn.timeAllocation}\n`;
    text += `Trường: ${giaoAn.schoolName} | Lớp: ${giaoAn.className} | GV: ${giaoAn.teacherName} | Ngày dạy: ${giaoAn.teachingDate}\n\n`;

    text += `I. YÊU CẦU CẦN ĐẠT:\n`;
    text += `1. Năng lực đặc thù:\n${giaoAn.specificCompetencies.map(c => `• ${c}`).join('\n')}\n`;
    text += `2. Năng lực chung:\n${giaoAn.generalCompetencies.map(c => `• ${c}`).join('\n')}\n`;
    text += `3. Phẩm chất:\n${giaoAn.qualities.map(c => `• ${c}`).join('\n')}\n\n`;

    text += `II. ĐỒ DÙNG DẠY HỌC:\n`;
    text += `1. Giáo viên:\n${giaoAn.teacherMaterials.map(m => `• ${m}`).join('\n')}\n`;
    text += `2. Học sinh:\n${giaoAn.studentMaterials.map(m => `• ${m}`).join('\n')}\n\n`;

    text += `III. CÁC HOẠT ĐỘNG DẠY HỌC CHỦ YẾU:\n`;
    giaoAn.activities.forEach((act) => {
      text += `\n--- ${act.name} (${act.duration}) ---\n`;
      text += `* Mục tiêu: ${act.objective}\n`;
      text += `* Hoạt động của GV:\n${act.teacherActivities.map(a => `  • ${a}`).join('\n')}\n`;
      text += `* Hoạt động của HS:\n${act.studentActivities.map(a => `  - ${a}`).join('\n')}\n`;
      if (act.product) text += `* Sản phẩm: ${act.product}\n`;
    });

    text += `\nIV. ĐIỀU CHỈNH SAU BÀI DẠY:\n${giaoAn.postLessonNotes || 'Không có'}\n`;

    navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  // Helper updater for arrays
  const updateArrayField = (
    fieldName: 'specificCompetencies' | 'generalCompetencies' | 'qualities' | 'teacherMaterials' | 'studentMaterials',
    index: number,
    value: string
  ) => {
    const arr = [...giaoAn[fieldName]];
    arr[index] = value;
    setGiaoAn({ ...giaoAn, [fieldName]: arr });
  };

  const addArrayItem = (
    fieldName: 'specificCompetencies' | 'generalCompetencies' | 'qualities' | 'teacherMaterials' | 'studentMaterials'
  ) => {
    setGiaoAn({ ...giaoAn, [fieldName]: [...giaoAn[fieldName], ''] });
  };

  const removeArrayItem = (
    fieldName: 'specificCompetencies' | 'generalCompetencies' | 'qualities' | 'teacherMaterials' | 'studentMaterials',
    index: number
  ) => {
    const arr = [...giaoAn[fieldName]];
    arr.splice(index, 1);
    setGiaoAn({ ...giaoAn, [fieldName]: arr });
  };

  return (
    <div className="space-y-6">
      {/* Header banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-lg relative overflow-hidden border border-slate-700">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-widest bg-amber-500/20 text-amber-300 w-fit px-3.5 py-1.5 rounded-full border border-amber-500/30">
            <GraduationCap size={16} />
            <span>Kế hoạch bài dạy (Giáo án Công văn 2345)</span>
          </div>

          <span className="text-xs font-medium text-emerald-300 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1.5">
            <Sparkles size={13} />
            <span>Hệ thống tự động biên soạn chuẩn CT GDPT 2018</span>
          </span>
        </div>

        <div className="space-y-1">
          <div className="text-sm font-semibold text-slate-300">
            {lesson.topic} • {lesson.title}
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            Tiết {period.periodNumber}: {giaoAn.periodTitle}
          </h2>
          <p className="text-xs text-slate-400">
            {giaoAn.sgkPages} • {giaoAn.timeAllocation}
          </p>
        </div>
      </div>

      {/* Control Action Toolbar */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          {/* Nút Tải Word */}
          <button
            onClick={handleDownloadWord}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow transition-all cursor-pointer"
            title="Tải về file Microsoft Word (.doc) để chỉnh sửa và in ấn"
          >
            <Download size={16} />
            <span>Tải về file Word (.doc)</span>
          </button>

          {/* Nút Chỉnh sửa / Xem trước */}
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-amber-500 hover:bg-amber-600 text-white shadow-sm transition-all cursor-pointer"
              title="Chỉnh sửa nội dung giáo án trực tiếp trên ứng dụng"
            >
              <Edit3 size={16} />
              <span>Chỉnh sửa giáo án</span>
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={handleSave}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-all cursor-pointer"
              >
                <Save size={16} />
                <span>Lưu thay đổi</span>
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="inline-flex items-center gap-2 px-3 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all cursor-pointer"
              >
                <Eye size={16} />
                <span>Xem bản in</span>
              </button>
            </div>
          )}

          {/* Nút Đặt lại chuẩn */}
          <button
            onClick={handleResetToDefault}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all cursor-pointer border border-slate-200"
            title="Tự động biên soạn lại từ đầu theo chuẩn của bài học"
          >
            <RotateCcw size={14} />
            <span>Tự tạo lại mặc định</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          {/* Nút In */}
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all cursor-pointer border border-slate-200"
            title="In trực tiếp hoặc Lưu dạng PDF"
          >
            <Printer size={15} />
            <span>In / PDF</span>
          </button>

          {/* Nút Sao chép */}
          <button
            onClick={handleCopyText}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all cursor-pointer border border-slate-200"
            title="Sao chép toàn bộ văn bản giáo án"
          >
            {isCopied ? <Check size={15} className="text-emerald-600" /> : <Copy size={15} />}
            <span>{isCopied ? 'Đã sao chép!' : 'Sao chép văn bản'}</span>
          </button>
        </div>
      </div>

      {/* Save success toast */}
      {saveSuccessNotice && (
        <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-300 text-xs font-bold text-emerald-900 flex items-center gap-2 animate-fadeIn">
          <CheckCircle size={16} className="text-emerald-600" />
          <span>Giáo án đã được lưu thành công vào trình duyệt của thầy/cô!</span>
        </div>
      )}

      {/* Main Lesson Plan Document Display */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8 print:p-0 print:border-none print:shadow-none font-sans">
        
        {/* Document Header (School, Class, Teacher, Date) */}
        <div className="border-b border-slate-200 pb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <div>
                <label className="text-[11px] font-bold text-slate-500 uppercase block mb-0.5">Tên trường:</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={giaoAn.schoolName}
                    onChange={(e) => setGiaoAn({ ...giaoAn, schoolName: e.target.value })}
                    className="w-full px-3 py-1.5 text-xs sm:text-sm font-bold bg-slate-50 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <p className="font-bold text-slate-800">{giaoAn.schoolName}</p>
                )}
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-500 uppercase block mb-0.5">Lớp giảng dạy:</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={giaoAn.className}
                    onChange={(e) => setGiaoAn({ ...giaoAn, className: e.target.value })}
                    className="w-full px-3 py-1.5 text-xs sm:text-sm font-bold bg-slate-50 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <p className="font-bold text-slate-800">{giaoAn.className}</p>
                )}
              </div>
            </div>

            <div className="space-y-2 sm:text-right">
              <div>
                <label className="text-[11px] font-bold text-slate-500 uppercase block mb-0.5">Giáo viên giảng dạy:</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={giaoAn.teacherName}
                    onChange={(e) => setGiaoAn({ ...giaoAn, teacherName: e.target.value })}
                    className="w-full px-3 py-1.5 text-xs sm:text-sm font-bold bg-slate-50 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500 sm:text-right"
                  />
                ) : (
                  <p className="font-bold text-slate-800">{giaoAn.teacherName}</p>
                )}
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-500 uppercase block mb-0.5">Ngày giảng dạy:</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={giaoAn.teachingDate}
                    onChange={(e) => setGiaoAn({ ...giaoAn, teachingDate: e.target.value })}
                    className="w-full px-3 py-1.5 text-xs sm:text-sm font-bold bg-slate-50 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500 sm:text-right"
                  />
                ) : (
                  <p className="font-medium text-slate-700 italic">Ngày dạy: {giaoAn.teachingDate}</p>
                )}
              </div>
            </div>
          </div>

          <div className="text-center mt-6 space-y-1">
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-tight">
              KẾ HOẠCH BÀI DẠY
            </h1>
            <p className="text-xs font-bold text-blue-700 uppercase tracking-wider">
              {giaoAn.subject}
            </p>
            <h2 className="text-base sm:text-lg font-black text-slate-800">
              BÀI: {giaoAn.lessonTitle.toUpperCase()}
            </h2>
            <p className="text-xs sm:text-sm font-semibold text-slate-600">
              Tiết {giaoAn.periodNumber}: {giaoAn.periodTitle} ({giaoAn.sgkPages}) • {giaoAn.timeAllocation}
            </p>
          </div>
        </div>

        {/* I. YÊU CẦU CẦN ĐẠT */}
        <div className="p-6 rounded-2xl bg-indigo-50/60 border border-indigo-200/80 space-y-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-black text-indigo-950 uppercase tracking-wider">
            <Target size={18} className="text-indigo-600" />
            <span>I. Yêu cầu cần đạt (Mục tiêu bài học theo chuẩn CT GDPT 2018)</span>
          </div>

          {/* 1. Năng lực đặc thù */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-indigo-900 uppercase">1. Năng lực đặc thù:</h4>
              {isEditing && (
                <button
                  type="button"
                  onClick={() => addArrayItem('specificCompetencies')}
                  className="text-[11px] font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 cursor-pointer"
                >
                  <Plus size={13} /> Thêm mục tiêu
                </button>
              )}
            </div>

            <div className="space-y-2">
              {giaoAn.specificCompetencies.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle size={16} className="text-indigo-600 shrink-0 mt-1" />
                  {isEditing ? (
                    <div className="flex items-center gap-1.5 flex-1">
                      <input
                        type="text"
                        value={item}
                        onChange={(e) => updateArrayField('specificCompetencies', idx, e.target.value)}
                        className="w-full px-3 py-1 text-xs bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                      />
                      <button
                        type="button"
                        onClick={() => removeArrayItem('specificCompetencies', idx)}
                        className="text-rose-500 hover:text-rose-700 p-1 cursor-pointer"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  ) : (
                    <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">{item}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 2. Năng lực chung */}
          <div className="space-y-2 pt-2 border-t border-indigo-100">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-indigo-900 uppercase">2. Năng lực chung:</h4>
              {isEditing && (
                <button
                  type="button"
                  onClick={() => addArrayItem('generalCompetencies')}
                  className="text-[11px] font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 cursor-pointer"
                >
                  <Plus size={13} /> Thêm năng lực
                </button>
              )}
            </div>

            <div className="space-y-2">
              {giaoAn.generalCompetencies.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle size={16} className="text-indigo-600 shrink-0 mt-1" />
                  {isEditing ? (
                    <div className="flex items-center gap-1.5 flex-1">
                      <input
                        type="text"
                        value={item}
                        onChange={(e) => updateArrayField('generalCompetencies', idx, e.target.value)}
                        className="w-full px-3 py-1 text-xs bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                      />
                      <button
                        type="button"
                        onClick={() => removeArrayItem('generalCompetencies', idx)}
                        className="text-rose-500 hover:text-rose-700 p-1 cursor-pointer"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  ) : (
                    <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">{item}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 3. Phẩm chất */}
          <div className="space-y-2 pt-2 border-t border-indigo-100">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-indigo-900 uppercase">3. Phẩm chất chủ yếu:</h4>
              {isEditing && (
                <button
                  type="button"
                  onClick={() => addArrayItem('qualities')}
                  className="text-[11px] font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 cursor-pointer"
                >
                  <Plus size={13} /> Thêm phẩm chất
                </button>
              )}
            </div>

            <div className="space-y-2">
              {giaoAn.qualities.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle size={16} className="text-indigo-600 shrink-0 mt-1" />
                  {isEditing ? (
                    <div className="flex items-center gap-1.5 flex-1">
                      <input
                        type="text"
                        value={item}
                        onChange={(e) => updateArrayField('qualities', idx, e.target.value)}
                        className="w-full px-3 py-1 text-xs bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                      />
                      <button
                        type="button"
                        onClick={() => removeArrayItem('qualities', idx)}
                        className="text-rose-500 hover:text-rose-700 p-1 cursor-pointer"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  ) : (
                    <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">{item}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* II. ĐỒ DÙNG DẠY HỌC */}
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider">
            <PackageCheck size={18} className="text-sky-600" />
            <span>II. Đồ dùng & Thiết bị dạy học</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Giáo viên */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900 uppercase">1. Giáo viên:</span>
                {isEditing && (
                  <button
                    type="button"
                    onClick={() => addArrayItem('teacherMaterials')}
                    className="text-[11px] font-bold text-sky-600 hover:text-sky-800 flex items-center gap-1 cursor-pointer"
                  >
                    <Plus size={13} /> Thêm
                  </button>
                )}
              </div>
              <div className="space-y-1.5">
                {giaoAn.teacherMaterials.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <span className="text-sky-600 font-bold">•</span>
                    {isEditing ? (
                      <div className="flex items-center gap-1 flex-1">
                        <input
                          type="text"
                          value={item}
                          onChange={(e) => updateArrayField('teacherMaterials', idx, e.target.value)}
                          className="w-full px-2 py-1 text-xs bg-slate-50 border border-slate-300 rounded"
                        />
                        <button
                          type="button"
                          onClick={() => removeArrayItem('teacherMaterials', idx)}
                          className="text-rose-500 p-0.5"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    ) : (
                      <span>{item}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Học sinh */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900 uppercase">2. Học sinh:</span>
                {isEditing && (
                  <button
                    type="button"
                    onClick={() => addArrayItem('studentMaterials')}
                    className="text-[11px] font-bold text-sky-600 hover:text-sky-800 flex items-center gap-1 cursor-pointer"
                  >
                    <Plus size={13} /> Thêm
                  </button>
                )}
              </div>
              <div className="space-y-1.5">
                {giaoAn.studentMaterials.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <span className="text-sky-600 font-bold">•</span>
                    {isEditing ? (
                      <div className="flex items-center gap-1 flex-1">
                        <input
                          type="text"
                          value={item}
                          onChange={(e) => updateArrayField('studentMaterials', idx, e.target.value)}
                          className="w-full px-2 py-1 text-xs bg-slate-50 border border-slate-300 rounded"
                        />
                        <button
                          type="button"
                          onClick={() => removeArrayItem('studentMaterials', idx)}
                          className="text-rose-500 p-0.5"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    ) : (
                      <span>{item}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* III. TIẾN TRÌNH CÁC HOẠT ĐỘNG DẠY HỌC CHỦ YẾU */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider">
            <BookOpen size={18} className="text-indigo-600" />
            <span>III. Các hoạt động dạy học chủ yếu (Bảng tiến trình sư phạm)</span>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-300">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-900 border-b border-slate-300 text-xs sm:text-sm font-extrabold">
                  <th className="p-3.5 w-1/2 border-r border-slate-300 text-center uppercase tracking-wide">
                    Hoạt động của Giáo viên
                  </th>
                  <th className="p-3.5 w-1/2 text-center uppercase tracking-wide">
                    Hoạt động của Học sinh
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {giaoAn.activities.map((act, actIdx) => (
                  <React.Fragment key={act.id || actIdx}>
                    {/* Activity Title Banner Row */}
                    <tr className="bg-blue-50/70 border-y border-blue-200">
                      <td colSpan={2} className="p-3.5">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                          <span className="font-black text-xs sm:text-sm text-blue-950">
                            {act.name} ({act.duration})
                          </span>
                          <span className="text-[11px] font-semibold text-slate-600 italic">
                            * Mục tiêu: {act.objective}
                          </span>
                        </div>
                      </td>
                    </tr>

                    {/* Teacher & Student Activities Content Row */}
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      {/* Cột Giáo viên */}
                      <td className="p-4 align-top border-r border-slate-200 space-y-2">
                        {act.teacherActivities.map((step, sIdx) => (
                          <div key={sIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-800 leading-relaxed">
                            <span className="text-blue-600 font-bold shrink-0">•</span>
                            {isEditing ? (
                              <textarea
                                value={step}
                                rows={2}
                                onChange={(e) => {
                                  const newActs = [...giaoAn.activities];
                                  newActs[actIdx].teacherActivities[sIdx] = e.target.value;
                                  setGiaoAn({ ...giaoAn, activities: newActs });
                                }}
                                className="w-full p-2 text-xs bg-white border border-slate-300 rounded focus:ring-2 focus:ring-blue-400"
                              />
                            ) : (
                              <span>{step}</span>
                            )}
                          </div>
                        ))}
                      </td>

                      {/* Cột Học sinh */}
                      <td className="p-4 align-top space-y-2">
                        {act.studentActivities.map((step, sIdx) => (
                          <div key={sIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-800 leading-relaxed">
                            <span className="text-emerald-600 font-bold shrink-0">-</span>
                            {isEditing ? (
                              <textarea
                                value={step}
                                rows={2}
                                onChange={(e) => {
                                  const newActs = [...giaoAn.activities];
                                  newActs[actIdx].studentActivities[sIdx] = e.target.value;
                                  setGiaoAn({ ...giaoAn, activities: newActs });
                                }}
                                className="w-full p-2 text-xs bg-white border border-slate-300 rounded focus:ring-2 focus:ring-emerald-400"
                              />
                            ) : (
                              <span>{step}</span>
                            )}
                          </div>
                        ))}

                        {/* Sản phẩm học tập */}
                        {act.product && (
                          <div className="pt-2 text-xs text-blue-900 bg-blue-50/60 p-2.5 rounded-lg border border-blue-100">
                            <strong>* Sản phẩm dự kiến:</strong> {act.product}
                          </div>
                        )}
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* IV. ĐIỀU CHỈNH SAU BÀI DẠY */}
        <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-2">
          <div className="text-xs sm:text-sm font-black text-amber-950 uppercase tracking-wider">
            IV. Điều chỉnh sau bài dạy
          </div>
          {isEditing ? (
            <textarea
              rows={3}
              value={giaoAn.postLessonNotes}
              onChange={(e) => setGiaoAn({ ...giaoAn, postLessonNotes: e.target.value })}
              placeholder="Ghi chú điều chỉnh sau giờ dạy thực tế trên lớp..."
              className="w-full p-3 text-xs sm:text-sm bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500"
            />
          ) : (
            <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
              {giaoAn.postLessonNotes || 'Ghi nhận thực tế sau tiết dạy (học sinh tiếp thu nhanh/chậm, cần bổ sung nội dung nào...).'}
            </p>
          )}
        </div>

        {/* Signatures */}
        <div className="pt-6 border-t border-slate-200">
          <div className="grid grid-cols-2 gap-4 text-center text-xs sm:text-sm">
            <div>
              <p className="font-bold text-slate-900">TỔ TRƯỞNG CHUYÊN MÔN</p>
              <p className="text-slate-500 italic text-[11px]">(Ký và ghi rõ họ tên)</p>
              <div className="h-16" />
            </div>

            <div>
              <p className="italic text-slate-500 text-[11px]">Ngày ...... tháng ...... năm 202...</p>
              <p className="font-bold text-slate-900">GIÁO VIÊN SOẠN BÀI</p>
              <p className="text-slate-500 italic text-[11px]">(Ký và ghi rõ họ tên)</p>
              <div className="h-16" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
