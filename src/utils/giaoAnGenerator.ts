import { LessonPeriod, Lesson, KhamPhaItem } from '../types';

export interface GiaoAnData {
  schoolName: string;
  className: string;
  teacherName: string;
  teachingDate: string;
  subject: string;
  lessonTitle: string;
  periodTitle: string;
  periodNumber: number;
  sgkPages: string;
  timeAllocation: string;
  
  // I. Yêu cầu cần đạt
  specificCompetencies: string[]; // Năng lực công nghệ đặc thù
  generalCompetencies: string[];  // Năng lực chung
  qualities: string[];            // Phẩm chất

  // II. Đồ dùng dạy học
  teacherMaterials: string[];
  studentMaterials: string[];

  // III. Các hoạt động dạy học
  activities: {
    id: string;
    name: string;
    duration: string;
    objective: string;
    teacherActivities: string[];
    studentActivities: string[];
    product: string;
  }[];

  // IV. Điều chỉnh sau bài dạy
  postLessonNotes: string;
}

/**
 * Tự động tạo Giáo án chi tiết theo chuẩn Công văn 2345/BGDĐT-GDTH từ dữ liệu của tiết học
 */
export function generateDefaultGiaoAn(period: LessonPeriod, lesson: Lesson): GiaoAnData {
  const cleanPeriodTitle = period.title.replace(/^Tiết\s*\d+\s*:\s*/i, '');

  // 1. Phân loại năng lực và phẩm chất từ mục tiêu sư phạm của tiết
  const rawObjectives = period.pedagogicalObjectives || [];
  
  const specificCompetencies: string[] = [
    `Nhận thức công nghệ: ${period.focusContent}`,
    ...(rawObjectives.length > 0 ? rawObjectives : [
      `Nắm vững các kiến thức trọng tâm của bài: ${cleanPeriodTitle}.`,
      `Nhận biết và liên hệ được các ứng dụng thực tế trong đời sống hàng ngày.`
    ])
  ];

  const generalCompetencies: string[] = [
    'Năng lực tự chủ và tự học: Tích cực tham gia trả lời các câu hỏi gợi mở, quan sát hình ảnh SGK và rút ra nhận xét.',
    'Năng lực giao tiếp và hợp tác: Tự tin trao đổi ý kiến trong nhóm, lắng nghe và chia sẻ cùng các bạn.',
    'Năng lực giải quyết vấn đề và sáng tạo: Biết vận dụng kiến thức đã học để giải thích các hiện tượng kỹ thuật, công nghệ xung quanh.'
  ];

  const qualities: string[] = [
    'Chăm chỉ: Có tinh thần ham học hỏi, yêu thích khám phá khoa học kỹ thuật và công nghệ.',
    'Trách nhiệm: Có ý thức sử dụng các sản phẩm công nghệ an toàn, tiết kiệm và bảo vệ môi trường.',
    'Trung thực: Khách quan trong việc quan sát, thảo luận và đánh giá sản phẩm học tập.'
  ];

  // 2. Chuẩn bị đồ dùng dạy học
  const teacherMaterials: string[] = [
    'Kế hoạch bài dạy (Giáo án) theo chuẩn Công văn 2345.',
    'Ứng dụng tương tác "Trợ lý dạy học môn Công nghệ 5".',
    'Máy tính kết nối máy chiếu (hoặc Smart TV) để trình chiếu tranh ảnh SGK phóng to và video bài giảng.',
    'Phiếu học tập / Bảng nhóm thảo luận cho các nhóm học sinh.'
  ];

  const studentMaterials: string[] = [
    `SGK Công nghệ 5 (${period.sgkPages || lesson.sgkPages || 'Trang SGK'}).`,
    'Vở ghi bài, bút viết, thước kẻ.',
    period.thucHanh ? 'Dụng cụ và vật liệu thực hành theo dặn dò của tiết trước (kéo, keo dán, bìa các-tông, giấy màu...).' : 'Dụng cụ học tập thông thường.'
  ];

  // 3. Tiến trình các hoạt động dạy học
  const activities: GiaoAnData['activities'] = [];

  // Hoạt động 1: Khởi động
  const kd = period.khoiDong;
  activities.push({
    id: 'act_khoi_dong',
    name: 'Hoạt động 1: Khởi động (Kích hoạt tư duy và tạo hứng thú)',
    duration: '3 – 5 phút',
    objective: 'Gợi mở suy nghĩ, kết nối hiểu biết thực tế của học sinh với nội dung bài học mới.',
    teacherActivities: [
      `Giáo viên tổ chức cho học sinh khởi động với nội dung: "${kd?.title || 'Khởi động nhận biết'}".`,
      `Trình chiếu câu hỏi / tình huống dẫn nhập: "${kd?.question || 'Em hãy quan sát và phát biểu suy nghĩ của mình.'}"`,
      'Bật âm thanh hiệu ứng để tạo không khí lớp học sôi nổi, gọi 2-3 học sinh phát biểu.',
      `Giáo viên nhận xét, khen ngợi và dẫn dắt vào bài mới: "${kd?.leadIn || 'Chúng ta cùng bước vào bài học hôm nay!'}"`
    ],
    studentActivities: [
      'Lắng nghe câu hỏi hoặc quan sát hình ảnh khởi động trên màn chiếu.',
      'Suy nghĩ nhanh, xung phong trả lời theo cảm nhận và hiểu biết thực tế.',
      'Lắng nghe nhận xét của giáo viên và mở SGK chuẩn bị vào nội dung bài.'
    ],
    product: 'Câu trả lời nhanh của học sinh, tâm thế vui vẻ hào hứng sẵn sàng vào bài học mới.'
  });

  // Hoạt động 2: Khám phá
  const kpItems: KhamPhaItem[] = Array.isArray(period.khamPha) ? period.khamPha : [];
  const kpTeacherActs: string[] = [
    `Giáo viên hướng dẫn học sinh mở SGK ${period.sgkPages || ''}, nêu nhiệm vụ quan sát và tìm hiểu kiến thức mới.`
  ];
  const kpStudentActs: string[] = [
    'Mở SGK, quan sát kỹ các hình ảnh, đọc nội dung thông tin theo hướng dẫn.'
  ];

  if (kpItems.length > 0) {
    kpItems.forEach((item, idx) => {
      kpTeacherActs.push(
        `Nhiệm vụ ${idx + 1}: ${item.title}. Tổ chức cho học sinh trả lời các câu hỏi gợi ý: ${item.guidingQuestions?.slice(0, 2).join('; ') || item.task}.`
      );
      kpTeacherActs.push(
        `Giáo viên bấm nút chốt kiến thức: "${item.teacherConclusion || item.hiddenAnswer || ''}".`
      );
      kpStudentActs.push(
        `Thực hiện nhiệm vụ ${idx + 1}: Quan sát hình, làm việc cá nhân hoặc theo cặp để giải quyết câu hỏi của mục ${idx + 1}.`
      );
      kpStudentActs.push(
        'Đại diện học sinh trả lời, các bạn khác lắng nghe và bổ sung. Ghi nhận kiến thức trọng tâm vào vở.'
      );
    });
  } else {
    kpTeacherActs.push(`Tổ chức cho học sinh tìm hiểu nội dung: ${period.focusContent}.`);
    kpTeacherActs.push('Chốt lại các ý cốt lõi và hướng dẫn học sinh ghi nhớ.');
    kpStudentActs.push('Theo dõi bài giảng, trao đổi và ghi chép nội dung chính.');
  }

  activities.push({
    id: 'act_kham_pha',
    name: 'Hoạt động 2: Khám phá (Hình thành kiến thức mới)',
    duration: '12 – 15 phút',
    objective: `Học sinh tự khám phá, nắm vững kiến thức trọng tâm: ${period.focusContent}`,
    teacherActivities: kpTeacherActs,
    studentActivities: kpStudentActs,
    product: 'Ý kiến phát biểu của học sinh, phiếu học tập hoặc nội dung cốt lõi được ghi vào vở.'
  });

  // Hoạt động 3: Thảo luận
  const tl = period.thaoLuan;
  activities.push({
    id: 'act_thao_luan',
    name: 'Hoạt động 3: Thảo luận & Hợp tác nhóm',
    duration: '5 – 7 phút',
    objective: 'Rèn luyện kỹ năng làm việc nhóm, chia sẻ ý kiến và giải quyết tình huống kỹ thuật thực tế.',
    teacherActivities: [
      `Chia lớp thành các nhóm 4 học sinh, giao nhiệm vụ thảo luận: "${tl?.groupTask || tl?.topic || 'Thảo luận nội dung bài học'}".`,
      'Bật đồng hồ đếm ngược tương tác (3 – 5 phút) để học sinh nắm rõ thời gian.',
      'Quan sát các nhóm làm việc, đến hỗ trợ gợi ý cho các nhóm còn lúng túng.',
      'Hết thời gian, mời đại diện 2 nhóm báo cáo kết quả trước lớp; cho các nhóm khác nhận xét chéo.',
      'Giáo viên nhận xét tinh thần hợp tác và chốt lại câu trả lời chuẩn xác.'
    ],
    studentActivities: [
      'Các thành viên trong nhóm tập trung, bầu nhóm trưởng và thư ký.',
      'Cùng nhau suy nghĩ, thảo luận sôi nổi và thống nhất ghi câu trả lời vào bảng nhóm/phiếu bài tập.',
      'Đại diện nhóm đứng lên tự tin trình bày kết quả thảo luận.',
      'Nhóm khác lắng nghe, đặt câu hỏi phản biện hoặc bổ sung ý kiến.'
    ],
    product: 'Bảng nhóm ghi kết quả thảo luận của học sinh, phần trình bày tự tin trước lớp.'
  });

  // Hoạt động 4: Luyện tập (và Thực hành nếu có)
  const lt = period.luyenTap;
  const ltExercises = Array.isArray(lt) ? lt : lt?.exercises || [];
  activities.push({
    id: 'act_luyen_tap',
    name: period.thucHanh ? 'Hoạt động 4: Luyện tập & Thực hành trải nghiệm' : 'Hoạt động 4: Luyện tập củng cố',
    duration: '8 – 10 phút',
    objective: 'Củng cố kiến thức vừa học thông qua bài tập tương tác, ghi nhớ vững vàng nội dung bài.',
    teacherActivities: [
      `Hướng dẫn học sinh làm ${ltExercises.length > 0 ? ltExercises.length : 2} bài tập luyện tập trên màn hình tương tác.`,
      'Mời từng học sinh hoặc đại diện lên bảng kéo ghép / chọn đáp án đúng.',
      'Bật phản hồi âm thanh chấm điểm để khích lệ tinh thần học sinh.',
      ...(period.thucHanh ? [
        `Nhiệm vụ thực hành: "${period.thucHanh.title}". Nhắc nhở quy tắc an toàn và kiểm tra các tiêu chí sản phẩm.`
      ] : []),
      'Tổng kết mức độ hoàn thành bài tập của cả lớp.'
    ],
    studentActivities: [
      'Đọc kỹ yêu cầu từng bài tập, làm bài vào vở bài tập hoặc bảng con.',
      'Học sinh được gọi lên bảng tương tác trực tiếp với trò chơi / bài tập trắc nghiệm.',
      'Cả lớp cùng theo dõi và đối chiếu với kết quả của mình.',
      ...(period.thucHanh ? [
        'Tiến hành thao tác thực hành theo đúng quy trình hướng dẫn, đảm bảo trật tự và an toàn.'
      ] : [])
    ],
    product: 'Kết quả làm bài tập đúng của học sinh, phiếu đánh giá hoặc sản phẩm thực hành đạt yêu cầu.'
  });

  // Hoạt động 5: Vận dụng & Dặn dò
  const vd = period.vanDung;
  activities.push({
    id: 'act_van_dung',
    name: 'Hoạt động 5: Vận dụng & Đánh giá dặn dò',
    duration: '3 – 5 phút',
    objective: 'Biết vận dụng kiến thức bài học vào thực tế cuộc sống gia đình và xã hội.',
    teacherActivities: [
      `Nêu câu hỏi / tình huống vận dụng: "${vd?.task || 'Em hãy liên hệ bài học với thực tế gia đình mình.'}"`,
      'Yêu cầu 1-2 học sinh chia sẻ suy nghĩ và việc làm cụ thể của bản thân.',
      'Tóm tắt lại toàn bộ bài dạy, nhắc học sinh xem lại nội dung ghi nhớ trong SGK.',
      'Dặn dò học sinh chuẩn bị bài cho tiết học tiếp theo.'
    ],
    studentActivities: [
      'Suy nghĩ và liên hệ thực tế những việc mình có thể làm ở nhà.',
      'Lắng nghe giáo viên dặn dò, ghi nhớ nhiệm vụ về nhà.'
    ],
    product: 'Học sinh hiểu được ý nghĩa thực tiễn của bài học, ghi lại dặn dò cho tiết sau.'
  });

  return {
    schoolName: 'Trường Tiểu học ................................................',
    className: 'Lớp: 5.....',
    teacherName: 'Giáo viên: ................................................',
    teachingDate: new Date().toLocaleDateString('vi-VN'),
    subject: 'Môn: CÔNG NGHỆ 5',
    lessonTitle: lesson.title,
    periodTitle: cleanPeriodTitle,
    periodNumber: period.periodNumber,
    sgkPages: period.sgkPages || lesson.sgkPages || 'Trang SGK',
    timeAllocation: 'Thời lượng: 1 tiết (35 phút)',
    specificCompetencies,
    generalCompetencies,
    qualities,
    teacherMaterials,
    studentMaterials,
    activities,
    postLessonNotes: '................................................................................................................................................................................................................'
  };
}

/**
 * Xuất file Word (.doc / HTML compatible) để mở và chỉnh sửa trực tiếp trong Microsoft Word
 */
export function exportGiaoAnToWord(data: GiaoAnData) {
  const content = `
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
  <meta charset='utf-8'>
  <title>Kế hoạch bài dạy - Tiết ${data.periodNumber}</title>
  <!--[if gte mso 9]>
  <xml>
    <w:WordDocument>
      <w:View>Print</w:View>
      <w:Zoom>100</w:Zoom>
      <w:DoNotOptimizeForBrowser/>
    </w:WordDocument>
  </xml>
  <![endif]-->
  <style>
    @page Section1 {
      size: 595.3pt 841.9pt; /* A4 */
      margin: 56.7pt 56.7pt 56.7pt 56.7pt; /* 20mm */
      mso-header-margin: 36.0pt;
      mso-footer-margin: 36.0pt;
      mso-paper-source: 0;
    }
    div.Section1 { page: Section1; }
    body {
      font-family: 'Times New Roman', Times, serif;
      font-size: 13pt;
      line-height: 1.25;
      color: #000000;
    }
    h1 {
      font-size: 15pt;
      font-weight: bold;
      text-align: center;
      text-transform: uppercase;
      margin-top: 10pt;
      margin-bottom: 4pt;
    }
    h2 {
      font-size: 13.5pt;
      font-weight: bold;
      text-align: center;
      margin-top: 2pt;
      margin-bottom: 12pt;
    }
    h3 {
      font-size: 13pt;
      font-weight: bold;
      margin-top: 12pt;
      margin-bottom: 4pt;
      color: #002060;
    }
    h4 {
      font-size: 13pt;
      font-weight: bold;
      font-style: italic;
      margin-top: 8pt;
      margin-bottom: 3pt;
    }
    p {
      margin-top: 2pt;
      margin-bottom: 3pt;
      text-align: justify;
    }
    .header-table {
      width: 100%;
      border-collapse: collapse;
      border: none;
      margin-bottom: 12pt;
    }
    .header-table td {
      border: none;
      padding: 2pt;
      vertical-align: top;
      font-size: 12pt;
    }
    table.content-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 8pt;
      margin-bottom: 12pt;
    }
    table.content-table th, table.content-table td {
      border: 1pt solid #000000;
      padding: 6pt 8pt;
      font-size: 12pt;
      vertical-align: top;
    }
    table.content-table th {
      background-color: #EDF2F8;
      font-weight: bold;
      text-align: center;
    }
    ul {
      margin-top: 2pt;
      margin-bottom: 4pt;
      padding-left: 20pt;
    }
    li {
      margin-bottom: 2pt;
      text-align: justify;
    }
    .text-center { text-align: center; }
    .text-right { text-align: right; }
    .bold { font-weight: bold; }
    .italic { font-style: italic; }
  </style>
</head>
<body>
<div class="Section1">

  <!-- Header Info -->
  <table class="header-table">
    <tr>
      <td style="width: 50%;">
        <b>${data.schoolName}</b><br>
        <b>${data.className}</b>
      </td>
      <td style="width: 50%; text-align: right;">
        <b>${data.teacherName}</b><br>
        <i>Ngày dạy: ${data.teachingDate}</i>
      </td>
    </tr>
  </table>

  <h1>KẾ HOẠCH BÀI DẠY</h1>
  <div class="text-center bold" style="font-size: 13pt;">${data.subject.toUpperCase()}</div>
  <h2>BÀI: ${data.lessonTitle.toUpperCase()}<br>
  <span style="font-size: 13pt; font-weight: normal;">Tiết ${data.periodNumber}: ${data.periodTitle} (${data.sgkPages}) - ${data.timeAllocation}</span></h2>

  <!-- I. YÊU CẦU CẦN ĐẠT -->
  <h3>I. YÊU CẦU CẦN ĐẠT</h3>
  <h4>1. Năng lực đặc thù:</h4>
  <ul>
    ${data.specificCompetencies.map(item => `<li>${item}</li>`).join('')}
  </ul>

  <h4>2. Năng lực chung:</h4>
  <ul>
    ${data.generalCompetencies.map(item => `<li>${item}</li>`).join('')}
  </ul>

  <h4>3. Phẩm chất:</h4>
  <ul>
    ${data.qualities.map(item => `<li>${item}</li>`).join('')}
  </ul>

  <!-- II. ĐỒ DÙNG DẠY HỌC -->
  <h3>II. ĐỒ DÙNG DẠY HỌC</h3>
  <p><b>1. Giáo viên:</b></p>
  <ul>
    ${data.teacherMaterials.map(item => `<li>${item}</li>`).join('')}
  </ul>
  <p><b>2. Học sinh:</b></p>
  <ul>
    ${data.studentMaterials.map(item => `<li>${item}</li>`).join('')}
  </ul>

  <!-- III. CÁC HOẠT ĐỘNG DẠY HỌC CHỦ YẾU -->
  <h3>III. CÁC HOẠT ĐỘNG DẠY HỌC CHỦ YẾU</h3>

  <table class="content-table">
    <thead>
      <tr>
        <th style="width: 50%;">Hoạt động của Giáo viên</th>
        <th style="width: 50%;">Hoạt động của Học sinh</th>
      </tr>
    </thead>
    <tbody>
      ${data.activities.map(act => `
        <tr style="background-color: #F8F9FA;">
          <td colspan="2" style="font-weight: bold; color: #002060;">
            ${act.name} (${act.duration})<br>
            <span style="font-weight: normal; font-style: italic; font-size: 11pt;">* Mục tiêu: ${act.objective}</span>
          </td>
        </tr>
        <tr>
          <td>
            ${act.teacherActivities.map(item => `<p>• ${item}</p>`).join('')}
          </td>
          <td>
            ${act.studentActivities.map(item => `<p>- ${item}</p>`).join('')}
            ${act.product ? `<p style="margin-top: 6pt; font-style: italic; color: #1E3A8A;"><b>* Sản phẩm:</b> ${act.product}</p>` : ''}
          </td>
        </tr>
      `).join('')}
    </tbody>
  </table>

  <!-- IV. ĐIỀU CHỈNH SAU BÀI DẠY -->
  <h3>IV. ĐIỀU CHỈNH SAU BÀI DẠY</h3>
  <p>${data.postLessonNotes || '................................................................................................................................................................................................................'}</p>

  <br><br>
  <table class="header-table" style="margin-top: 20pt;">
    <tr>
      <td style="width: 50%; text-align: center;">
        <b>TỔ TRƯỞNG CHUYÊN MÔN</b><br>
        <i>(Ký và ghi rõ họ tên)</i>
        <br><br><br><br>
      </td>
      <td style="width: 50%; text-align: center;">
        <i>Ngày ...... tháng ...... năm 202...</i><br>
        <b>GIÁO VIÊN SOẠN BÀI</b><br>
        <i>(Ký và ghi rõ họ tên)</i>
        <br><br><br><br>
      </td>
    </tr>
  </table>

</div>
</body>
</html>
  `;

  const blob = new Blob(['\ufeff' + content], { type: 'application/msword;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `GiaoAn_CongNghe5_Tiet_${data.periodNumber}_${data.periodTitle.replace(/[^a-zA-Z0-9_\u00C0-\u024F\u1EA0-\u1EF9]/g, '_')}.doc`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
