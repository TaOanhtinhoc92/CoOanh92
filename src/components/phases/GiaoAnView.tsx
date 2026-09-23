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
  HelpCircle,
  FileText
} from 'lucide-react';

interface Props {
  period: LessonPeriod;
  lesson: Lesson;
}

export const GiaoAnView: React.FC<Props> = ({ period, lesson }) => {
  const storageKey = `khbd_chuan_2345_${period.id}`;

  const [giaoAn, setGiaoAn] = useState<GiaoAnData>(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Lỗi khi đọc KHBD từ bộ nhớ:', e);
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
    let text = `${giaoAn.headerTitle}\n`;
    text += `${giaoAn.dayOfWeek}, ${giaoAn.teachingDate}\n`;
    text += `${giaoAn.subjectName}\n`;
    text += `${giaoAn.lessonTitle}\n\n`;

    text += `I. YÊU CẦU CẦN ĐẠT\n`;
    text += `1. Năng lực đặc thù:\n${giaoAn.specificCompetencies.map(c => `• ${c}`).join('\n')}\n`;
    text += `2. Năng lực chung:\n${giaoAn.generalCompetencies.map(c => `• ${c}`).join('\n')}\n`;
    text += `3. Phẩm chất:\n${giaoAn.qualities.map(c => `• ${c}`).join('\n')}\n\n`;

    text += `II. ĐỒ DÙNG DẠY HỌC\n`;
    text += `(Chỉ ghi dụng cụ đặc thù phục vụ cho tiết dạy. Không ghi những ĐDDH hay dụng cụ sử dụng thường ngày như: thước, bảng, phấn, SGK, SGV, tài liệu, PPT...)\n`;
    text += `- Giáo viên:\n${giaoAn.teacherSpecialAids.map(m => `• ${m}`).join('\n')}\n`;
    text += `- Học sinh:\n${giaoAn.studentSpecialAids.map(m => `• ${m}`).join('\n')}\n\n`;

    text += `III. CÁC HOẠT ĐỘNG DẠY HỌC CHỦ YẾU\n`;
    giaoAn.activities.forEach((act) => {
      text += `\n=== ${act.title} ===\n`;
      if (act.subSteps && act.subSteps.length > 0) {
        act.subSteps.forEach((step) => {
          text += `\n${step.title}\n`;
          text += `[Hoạt động của giáo viên]:\n${step.teacherText.map(t => `  • ${t}`).join('\n')}\n`;
          text += `[Hoạt động của học sinh]:\n${step.studentText.map(s => `  - ${s}`).join('\n')}\n`;
        });
      } else {
        text += `[Hoạt động của giáo viên]:\n${(act.teacherActionDirect || []).map(t => `  • ${t}`).join('\n')}\n`;
        text += `[Hoạt động của học sinh]:\n${(act.studentActionDirect || []).map(s => `  - ${s}`).join('\n')}\n`;
      }
    });

    text += `\nIV. ĐIỀU CHỈNH SAU BÀI DẠY (nếu có)\n${giaoAn.postLessonNotes || 'Không có'}\n`;

    navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  // Array item updater
  const updateArrayItem = (
    field: 'specificCompetencies' | 'generalCompetencies' | 'qualities' | 'teacherSpecialAids' | 'studentSpecialAids',
    idx: number,
    value: string
  ) => {
    const list = [...giaoAn[field]];
    list[idx] = value;
    setGiaoAn({ ...giaoAn, [field]: list });
  };

  const addArrayItem = (
    field: 'specificCompetencies' | 'generalCompetencies' | 'qualities' | 'teacherSpecialAids' | 'studentSpecialAids'
  ) => {
    setGiaoAn({ ...giaoAn, [field]: [...giaoAn[field], ''] });
  };

  const removeArrayItem = (
    field: 'specificCompetencies' | 'generalCompetencies' | 'qualities' | 'teacherSpecialAids' | 'studentSpecialAids',
    idx: number
  ) => {
    const list = [...giaoAn[field]];
    list.splice(idx, 1);
    setGiaoAn({ ...giaoAn, [field]: list });
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-lg relative overflow-hidden border border-slate-700">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest bg-amber-500/20 text-amber-300 w-fit px-3.5 py-1.5 rounded-full border border-amber-500/30">
            <GraduationCap size={16} />
            <span>Khung Kế Hoạch Bài Dạy Chuẩn Mẫu</span>
          </div>

          <span className="text-xs font-medium text-emerald-300 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1.5">
            <Sparkles size={13} />
            <span>Làm rõ 4 thao tác a, b, c, d • Hỏi - Đáp cụ thể (Người khác có thể dạy thay)</span>
          </span>
        </div>

        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white uppercase">
            {giaoAn.lessonTitle}
          </h2>
          <p className="text-xs text-slate-300">
            {giaoAn.subjectName} • {giaoAn.sgkPages}
          </p>
        </div>
      </div>

      {/* Control Action Toolbar */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          {/* Nút Tải Word */}
          <button
            onClick={handleDownloadWord}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-black text-xs sm:text-sm bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow transition-all cursor-pointer"
            title="Tải về file Word (.doc) đúng chuẩn mẫu để nộp chuyên môn hoặc chỉnh sửa"
          >
            <Download size={16} />
            <span>Tải về file Word (.doc)</span>
          </button>

          {/* Nút Chỉnh sửa / Xem bản in */}
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-amber-500 hover:bg-amber-600 text-white shadow-sm transition-all cursor-pointer"
              title="Chỉnh sửa trực tiếp nội dung giáo án"
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
            title="Tự động biên soạn lại từ đầu theo chuẩn mẫu"
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

      {/* Save Toast */}
      {saveSuccessNotice && (
        <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-300 text-xs font-bold text-emerald-900 flex items-center gap-2 animate-fadeIn">
          <CheckCircle size={16} className="text-emerald-600" />
          <span>Kế hoạch bài dạy đã được lưu thành công vào máy của thầy/cô!</span>
        </div>
      )}

      {/* Standard Lesson Plan Document Layout */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-12 shadow-sm space-y-7 print:p-0 print:border-none print:shadow-none font-serif text-slate-900 leading-relaxed">
        
        {/* Header exact pattern */}
        <div className="text-center space-y-1.5 border-b border-slate-200 pb-5">
          <h1 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-slate-900">
            {giaoAn.headerTitle}
          </h1>

          <div className="text-sm italic text-slate-700 flex items-center justify-center gap-2">
            {isEditing ? (
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={giaoAn.dayOfWeek}
                  onChange={(e) => setGiaoAn({ ...giaoAn, dayOfWeek: e.target.value })}
                  placeholder="Thứ ....."
                  className="px-2 py-0.5 text-xs bg-slate-50 border border-slate-300 rounded font-sans"
                />
                <span>,</span>
                <input
                  type="text"
                  value={giaoAn.teachingDate}
                  onChange={(e) => setGiaoAn({ ...giaoAn, teachingDate: e.target.value })}
                  placeholder="ngày ..... tháng ..... năm 202..."
                  className="px-2 py-0.5 text-xs bg-slate-50 border border-slate-300 rounded font-sans"
                />
              </div>
            ) : (
              <span>{giaoAn.dayOfWeek}, {giaoAn.teachingDate}</span>
            )}
          </div>

          <div className="text-sm font-bold text-slate-800">
            {giaoAn.subjectName}
          </div>

          <div className="text-base sm:text-lg font-bold text-slate-950 uppercase pt-1">
            {giaoAn.lessonTitle}
          </div>
        </div>

        {/* I. YÊU CẦU CẦN ĐẠT */}
        <div className="space-y-3">
          <h2 className="text-base font-bold uppercase text-slate-900">
            I. YÊU CẦU CẦN ĐẠT
          </h2>

          {/* 1. Năng lực đặc thù */}
          <div className="space-y-1.5 pl-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-sm text-slate-900">1. Năng lực đặc thù:</h3>
              {isEditing && (
                <button
                  type="button"
                  onClick={() => addArrayItem('specificCompetencies')}
                  className="text-[11px] font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 font-sans cursor-pointer"
                >
                  <Plus size={13} /> Thêm
                </button>
              )}
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm text-slate-800">
              {giaoAn.specificCompetencies.map((item, idx) => (
                <li key={idx}>
                  {isEditing ? (
                    <div className="flex items-center gap-1.5 my-1">
                      <input
                        type="text"
                        value={item}
                        onChange={(e) => updateArrayItem('specificCompetencies', idx, e.target.value)}
                        className="w-full px-2 py-1 text-xs bg-slate-50 border border-slate-300 rounded font-sans"
                      />
                      <button
                        type="button"
                        onClick={() => removeArrayItem('specificCompetencies', idx)}
                        className="text-rose-500 p-0.5 cursor-pointer font-sans"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  ) : (
                    <span>{item}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* 2. Năng lực chung */}
          <div className="space-y-1.5 pl-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-sm text-slate-900">2. Năng lực chung:</h3>
              {isEditing && (
                <button
                  type="button"
                  onClick={() => addArrayItem('generalCompetencies')}
                  className="text-[11px] font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 font-sans cursor-pointer"
                >
                  <Plus size={13} /> Thêm
                </button>
              )}
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm text-slate-800">
              {giaoAn.generalCompetencies.map((item, idx) => (
                <li key={idx}>
                  {isEditing ? (
                    <div className="flex items-center gap-1.5 my-1">
                      <input
                        type="text"
                        value={item}
                        onChange={(e) => updateArrayItem('generalCompetencies', idx, e.target.value)}
                        className="w-full px-2 py-1 text-xs bg-slate-50 border border-slate-300 rounded font-sans"
                      />
                      <button
                        type="button"
                        onClick={() => removeArrayItem('generalCompetencies', idx)}
                        className="text-rose-500 p-0.5 cursor-pointer font-sans"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  ) : (
                    <span>{item}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Phẩm chất */}
          <div className="space-y-1.5 pl-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-sm text-slate-900">3. Phẩm chất:</h3>
              {isEditing && (
                <button
                  type="button"
                  onClick={() => addArrayItem('qualities')}
                  className="text-[11px] font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 font-sans cursor-pointer"
                >
                  <Plus size={13} /> Thêm
                </button>
              )}
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm text-slate-800">
              {giaoAn.qualities.map((item, idx) => (
                <li key={idx}>
                  {isEditing ? (
                    <div className="flex items-center gap-1.5 my-1">
                      <input
                        type="text"
                        value={item}
                        onChange={(e) => updateArrayItem('qualities', idx, e.target.value)}
                        className="w-full px-2 py-1 text-xs bg-slate-50 border border-slate-300 rounded font-sans"
                      />
                      <button
                        type="button"
                        onClick={() => removeArrayItem('qualities', idx)}
                        className="text-rose-500 p-0.5 cursor-pointer font-sans"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  ) : (
                    <span>{item}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* II. ĐỒ DÙNG DẠY HỌC */}
        <div className="space-y-2.5">
          <h2 className="text-base font-bold uppercase text-slate-900">
            II. ĐỒ DÙNG DẠY HỌC
          </h2>
          <p className="italic text-xs text-slate-600 bg-amber-50/80 p-2.5 rounded-lg border border-amber-200">
            (Chỉ ghi dụng cụ đặc thù phục vụ cho tiết dạy. Không ghi những ĐDDH hay dụng cụ sử dụng thường ngày như: thước, bảng, phấn, SGK, SGV, tài liệu, PPT...)
          </p>

          <div className="pl-2 space-y-2">
            <div>
              <div className="flex items-center justify-between font-bold text-sm text-slate-900">
                <span>- Giáo viên:</span>
                {isEditing && (
                  <button
                    type="button"
                    onClick={() => addArrayItem('teacherSpecialAids')}
                    className="text-[11px] font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 font-sans cursor-pointer"
                  >
                    <Plus size={13} /> Thêm
                  </button>
                )}
              </div>
              <ul className="list-disc pl-5 space-y-1 text-sm text-slate-800 mt-1">
                {giaoAn.teacherSpecialAids.map((item, idx) => (
                  <li key={idx}>
                    {isEditing ? (
                      <div className="flex items-center gap-1.5 my-1">
                        <input
                          type="text"
                          value={item}
                          onChange={(e) => updateArrayItem('teacherSpecialAids', idx, e.target.value)}
                          className="w-full px-2 py-1 text-xs bg-slate-50 border border-slate-300 rounded font-sans"
                        />
                        <button
                          type="button"
                          onClick={() => removeArrayItem('teacherSpecialAids', idx)}
                          className="text-rose-500 p-0.5 cursor-pointer font-sans"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    ) : (
                      <span>{item}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center justify-between font-bold text-sm text-slate-900">
                <span>- Học sinh:</span>
                {isEditing && (
                  <button
                    type="button"
                    onClick={() => addArrayItem('studentSpecialAids')}
                    className="text-[11px] font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 font-sans cursor-pointer"
                  >
                    <Plus size={13} /> Thêm
                  </button>
                )}
              </div>
              <ul className="list-disc pl-5 space-y-1 text-sm text-slate-800 mt-1">
                {giaoAn.studentSpecialAids.map((item, idx) => (
                  <li key={idx}>
                    {isEditing ? (
                      <div className="flex items-center gap-1.5 my-1">
                        <input
                          type="text"
                          value={item}
                          onChange={(e) => updateArrayItem('studentSpecialAids', idx, e.target.value)}
                          className="w-full px-2 py-1 text-xs bg-slate-50 border border-slate-300 rounded font-sans"
                        />
                        <button
                          type="button"
                          onClick={() => removeArrayItem('studentSpecialAids', idx)}
                          className="text-rose-500 p-0.5 cursor-pointer font-sans"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    ) : (
                      <span>{item}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* III. CÁC HOẠT ĐỘNG DẠY HỌC CHỦ YẾU */}
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <h2 className="text-base font-bold uppercase text-slate-900">
              III. CÁC HOẠT ĐỘNG DẠY HỌC CHỦ YẾU
            </h2>
            <span className="text-xs italic text-blue-700 font-sans">
              (Bảng 2 cột: Cột hoạt động của giáo viên và Cột hoạt động của học sinh)
            </span>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-400">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-900 border-b border-slate-400">
                  <th className="p-3 w-1/2 border-r border-slate-400 text-center font-bold uppercase">
                    Hoạt động của giáo viên
                  </th>
                  <th className="p-3 w-1/2 text-center font-bold uppercase">
                    Hoạt động của học sinh
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-300">
                {giaoAn.activities.map((act, actIdx) => (
                  <React.Fragment key={act.id || actIdx}>
                    {/* Activity Title Banner */}
                    <tr className="bg-slate-200/90 font-bold border-y border-slate-400">
                      <td colSpan={2} className="p-3 text-slate-950">
                        <div className="text-sm uppercase">{act.title}</div>
                      </td>
                    </tr>

                    {/* 4 Thao tác a, b, c, d */}
                    {act.subSteps && act.subSteps.length > 0 ? (
                      act.subSteps.map((step, sIdx) => (
                        <tr key={sIdx} className="hover:bg-slate-50/40">
                          {/* Cột Giáo viên */}
                          <td className="p-3 align-top border-r border-slate-300 space-y-1.5">
                            <div className="font-bold italic text-blue-900 text-xs sm:text-sm">
                              {step.title}
                            </div>
                            <div className="space-y-1.5 pl-1">
                              {step.teacherText.map((tText, tIdx) => (
                                <div key={tIdx} className="text-xs sm:text-sm text-slate-800">
                                  {isEditing ? (
                                    <textarea
                                      rows={2}
                                      value={tText}
                                      onChange={(e) => {
                                        const newActs = [...giaoAn.activities];
                                        if (newActs[actIdx].subSteps) {
                                          newActs[actIdx].subSteps![sIdx].teacherText[tIdx] = e.target.value;
                                          setGiaoAn({ ...giaoAn, activities: newActs });
                                        }
                                      }}
                                      className="w-full p-1.5 text-xs bg-white border border-slate-300 rounded font-sans"
                                    />
                                  ) : (
                                    <p className="leading-snug">{tText.startsWith('•') || tText.startsWith('*') ? tText : `• ${tText}`}</p>
                                  )}
                                </div>
                              ))}
                            </div>
                          </td>

                          {/* Cột Học sinh - CÂU TRẢ LỜI CỤ THỂ */}
                          <td className="p-3 align-top space-y-1.5">
                            <div className="font-bold italic text-emerald-900 text-xs sm:text-sm opacity-0 select-none">
                              {step.title}
                            </div>
                            <div className="space-y-1.5 pl-1">
                              {step.studentText.map((sText, sIdx2) => (
                                <div key={sIdx2} className="text-xs sm:text-sm text-slate-800">
                                  {isEditing ? (
                                    <textarea
                                      rows={2}
                                      value={sText}
                                      onChange={(e) => {
                                        const newActs = [...giaoAn.activities];
                                        if (newActs[actIdx].subSteps) {
                                          newActs[actIdx].subSteps![sIdx].studentText[sIdx2] = e.target.value;
                                          setGiaoAn({ ...giaoAn, activities: newActs });
                                        }
                                      }}
                                      className="w-full p-1.5 text-xs bg-white border border-slate-300 rounded font-sans"
                                    />
                                  ) : (
                                    <p className="leading-snug">{sText.startsWith('•') || sText.startsWith('-') || sText.startsWith('*') ? sText : `- ${sText}`}</p>
                                  )}
                                </div>
                              ))}
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      // Hoạt động 5: Nối tiếp (Dặn dò, nhận xét)
                      <tr className="hover:bg-slate-50/40">
                        <td className="p-3 align-top border-r border-slate-300 space-y-1.5">
                          <div className="space-y-1 pl-1">
                            {(act.teacherActionDirect || []).map((tText, tIdx) => (
                              <div key={tIdx} className="text-xs sm:text-sm text-slate-800">
                                {isEditing ? (
                                  <textarea
                                    rows={2}
                                    value={tText}
                                    onChange={(e) => {
                                      const newActs = [...giaoAn.activities];
                                      newActs[actIdx].teacherActionDirect![tIdx] = e.target.value;
                                      setGiaoAn({ ...giaoAn, activities: newActs });
                                    }}
                                    className="w-full p-1.5 text-xs bg-white border border-slate-300 rounded font-sans"
                                  />
                                ) : (
                                  <p className="leading-snug">{tText.startsWith('•') || tText.startsWith('1.') || tText.startsWith('2.') ? tText : `• ${tText}`}</p>
                                )}
                              </div>
                            ))}
                          </div>
                        </td>

                        <td className="p-3 align-top space-y-1.5">
                          <div className="space-y-1 pl-1">
                            {(act.studentActionDirect || []).map((sText, sIdx) => (
                              <div key={sIdx} className="text-xs sm:text-sm text-slate-800">
                                {isEditing ? (
                                  <textarea
                                    rows={2}
                                    value={sText}
                                    onChange={(e) => {
                                      const newActs = [...giaoAn.activities];
                                      newActs[actIdx].studentActionDirect![sIdx] = e.target.value;
                                      setGiaoAn({ ...giaoAn, activities: newActs });
                                    }}
                                    className="w-full p-1.5 text-xs bg-white border border-slate-300 rounded font-sans"
                                  />
                                ) : (
                                  <p className="leading-snug">{sText.startsWith('•') || sText.startsWith('-') || sText.startsWith('1.') || sText.startsWith('2.') ? sText : `- ${sText}`}</p>
                                )}
                              </div>
                            ))}
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* IV. ĐIỀU CHỈNH SAU BÀI DẠY (nếu có) */}
        <div className="space-y-2 pt-2 border-t border-slate-200">
          <h2 className="text-base font-bold uppercase text-slate-900">
            IV. ĐIỀU CHỈNH SAU BÀI DẠY (nếu có)
          </h2>
          {isEditing ? (
            <textarea
              rows={3}
              value={giaoAn.postLessonNotes}
              onChange={(e) => setGiaoAn({ ...giaoAn, postLessonNotes: e.target.value })}
              placeholder="Ghi nhận thực tế sau khi dạy..."
              className="w-full p-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg font-sans"
            />
          ) : (
            <p className="text-xs sm:text-sm italic text-slate-600 leading-relaxed pl-2">
              {giaoAn.postLessonNotes || '................................................................................................................................................................................................................................................................................................................................................................................................................'}
            </p>
          )}
        </div>

      </div>
    </div>
  );
};
