import { LessonPeriod, Lesson, KhamPhaItem } from '../types';
import { getPeriodByNumber } from '../data/curriculumData';

export interface GiaoAnSubStep {
  stepKey: 'a' | 'b' | 'c' | 'd';
  title: string;
  teacherText: string[];
  studentText: string[];
}

export interface GiaoAnActivityItem {
  id: string;
  orderNumber: number;
  title: string;
  subSteps?: GiaoAnSubStep[];
  // Cho hoạt động 5 (Dặn dò, nhận xét)
  teacherActionDirect?: string[];
  studentActionDirect?: string[];
}

export interface GiaoAnData {
  headerTitle: string; // "KHUNG KẾ HOẠCH BÀI DẠY"
  dayOfWeek: string;   // "Thứ ....."
  teachingDate: string; // "ngày ..... tháng ..... năm 202..."
  subjectName: string; // "CÔNG NGHỆ (Lớp 5)"
  lessonTitle: string; // "TÊN BÀI: ..."
  periodNumber: number;
  periodTitle: string;
  sgkPages: string;

  // I. YÊU CẦU CẦN ĐẠT
  specificCompetencies: string[]; // 1. Năng lực đặc thù
  generalCompetencies: string[];  // 2. Năng lực chung
  qualities: string[];            // 3. Phẩm chất

  // II. ĐỒ DÙNG DẠY HỌC (Chỉ ghi dụng cụ đặc thù phục vụ tiết dạy)
  teacherSpecialAids: string[];
  studentSpecialAids: string[];

  // III. CÁC HOẠT ĐỘNG DẠY HỌC CHỦ YẾU
  activities: GiaoAnActivityItem[];

  // IV. ĐIỀU CHỈNH SAU BÀI DẠY (nếu có)
  postLessonNotes: string;
}

/**
 * Sinh danh sách đồ dùng đặc thù phục vụ bài học (TUYỆT ĐỐI KHÔNG ghi thước, bảng, phấn, SGK, SGV, PPT)
 */
function getSpecificEquipment(period: LessonPeriod, lesson: Lesson): { teacher: string[]; student: string[] } {
  const num = period.periodNumber;
  const titleLower = (period.title + ' ' + lesson.title + ' ' + period.focusContent).toLowerCase();

  // 1. Tiết thực hành / mô hình kỹ thuật (Bài 4, 5, 8, 9...)
  if (period.thucHanh || titleLower.includes('thực hành') || titleLower.includes('chế tạo') || titleLower.includes('lắp ráp') || titleLower.includes('mô hình')) {
    if (titleLower.includes('gió') || titleLower.includes('máy phát điện')) {
      return {
        teacher: [
          'Mô hình máy phát điện gió mẫu hoàn chỉnh có gắn bóng đèn LED nhỏ.',
          'Quạt gió mini (hoặc máy sấy tóc) để tạo luồng gió thử nghiệm làm quay cánh quạt phát điện.',
          'Phiếu tiêu chí đánh giá sản phẩm thực hành mô hình máy phát điện gió.'
        ],
        student: [
          'Kéo thủ công, keo dán (hồ dán, băng dính hai mặt), compa.',
          'Bìa các-tông dày 2–3 mm, giấy thủ công màu.',
          'Que kem gỗ (hoặc thanh tre nhỏ), mô tơ mini 3V, dây dẫn điện, bóng đèn LED mini (chuẩn bị theo nhóm).'
        ]
      };
    }

    if (titleLower.includes('chong chóng') || titleLower.includes('đồ chơi')) {
      return {
        teacher: [
          'Mô hình chong chóng gió mẫu (loại 4 cánh) đã quay tốt.',
          'Phiếu hướng dẫn các bước gấp và gắn trục quay chong chóng.'
        ],
        student: [
          'Giấy màu thủ công hình vuông (kích thước 15 cm x 15 cm).',
          'Que cầm (que nhựa hoặc que tre tròn), đinh ghim mũ tròn (hoặc tăm tre và hạt cườm làm trục), kéo, keo dán.'
        ]
      };
    }

    if (titleLower.includes('thuyền') || titleLower.includes('xe') || titleLower.includes('máy bay')) {
      return {
        teacher: [
          'Mô hình phương tiện mẫu hoàn chỉnh, chậu nước thử nghiệm (nếu làm thuyền).',
          'Bảng quy trình kỹ thuật các bước lắp ráp chi tiết.'
        ],
        student: [
          'Vỏ hộp sữa giấy/bìa cứng, xốp mềm, nắp chai nhựa làm bánh xe/phao.',
          'Kéo, băng dính xốp, dây chun đàn hồi, que gỗ nhỏ.'
        ]
      };
    }

    return {
      teacher: [
        'Sản phẩm mẫu hoàn chỉnh để học sinh quan sát, đối chiếu.',
        'Bảng tiêu chí đánh giá sản phẩm kỹ thuật.'
      ],
      student: [
        'Bộ dụng cụ thủ công: kéo, thước đo góc, hồ dán, băng dính.',
        'Vật liệu tái chế: bìa cứng, giấy màu, que gỗ nhỏ theo dặn dò tiết trước.'
      ]
    };
  }

  // 2. Bài về Điện thoại (Bài 3)
  if (titleLower.includes('điện thoại')) {
    return {
      teacher: [
        'Điện thoại để bàn thật (hoặc mô hình điện thoại thông minh).',
        'Bộ thẻ tình huống gọi điện thoại (gọi cho người thân, gọi số khẩn cấp 111, 113, 114, 115).',
        'Biển báo quy tắc sử dụng điện thoại an toàn, văn minh (trong rạp chiếu phim, bệnh viện, khi đang sạc pin...).'
      ],
      student: [
        'Thẻ ghi nhớ các số điện thoại khẩn cấp (111, 113, 114, 115).',
        'Phiếu ghi nhanh tình huống giao tiếp qua điện thoại.'
      ]
    };
  }

  // 3. Bài về Tủ lạnh (Bài 4)
  if (titleLower.includes('tủ lạnh')) {
    return {
      teacher: [
        'Mô hình/tranh sơ đồ cấu tạo các ngăn tủ lạnh (ngăn đông đá, ngăn mát, ngăn rau củ, cánh cửa tủ).',
        'Bộ thẻ hình ảnh các loại thực phẩm: thịt cá tươi sống, rau củ quả, thức ăn chín, sữa chua, kem đá...',
        'Biển cảnh báo các thói quen dùng tủ lạnh sai cách (để thức ăn nóng vào tủ, mở cửa tủ quá lâu...).'
      ],
      student: [
        'Bộ thẻ chữ tên các loại thực phẩm để tham gia trò chơi "Sắp xếp thực phẩm đúng ngăn".',
        'Phiếu điều tra cách bảo quản thực phẩm trong gia đình em.'
      ]
    };
  }

  // 4. Bài về Sáng chế (Bài 2)
  if (titleLower.includes('sáng chế') || titleLower.includes('nhà sáng chế')) {
    return {
      teacher: [
        'Bộ tranh ảnh chân dung các nhà sáng chế lớn (Thomas Edison, Alexander Graham Bell, Karl Benz, GS. Trần Đại Nghĩa...).',
        'Tranh ảnh vật thể đối chứng: ngọn nến đối chứng với bóng đèn điện; ngựa kéo đối chứng với ô tô; thư tay đối chứng với điện thoại.',
        'Hộp quà bí mật chứa các đồ vật sáng chế quen thuộc.'
      ],
      student: [
        'Thẻ ghi tên nhà sáng chế và năm phát minh.',
        'Phiếu tìm hiểu về sáng chế công nghệ mà em yêu thích.'
      ]
    };
  }

  // 5. Bài về Vai trò của công nghệ (Bài 1, Tiết 1, 2, 3)
  if (titleLower.includes('vai trò') || titleLower.includes('công nghệ và đời sống')) {
    return {
      teacher: [
        'Vật thật hoặc mô hình trực quan: quạt bàn mini, đèn bàn học, máy tính cầm tay, ấm siêu tốc mini.',
        'Bộ tranh ảnh màu khổ lớn thể hiện vai trò công nghệ trong y tế (máy chụp X-quang), nông nghiệp (hệ thống tưới tự động), giao thông (tàu cao tốc).',
        'Phiếu học tập phân loại sản phẩm tự nhiên và sản phẩm công nghệ.'
      ],
      student: [
        'Tranh ảnh hoặc phiếu ghi tên 5 sản phẩm công nghệ đang sử dụng trong gia đình em.',
        'Thẻ chữ để tham gia trò chơi ghép nối sản phẩm công nghệ với công dụng.'
      ]
    };
  }

  // Mặc định cho các bài còn lại
  return {
    teacher: [
      `Mô hình/vật thật minh họa cho nội dung: ${period.focusContent}.`,
      'Bộ thẻ chữ/hình ảnh trực quan phục vụ trò chơi học tập và thảo luận nhóm.',
      'Phiếu học tập nhóm in sẵn câu hỏi định hướng.'
    ],
    student: [
      'Phiếu học tập nhóm / thẻ trả lời nhanh cá nhân.',
      'Tư liệu hoặc tranh ảnh liên quan đến bài học đã chuẩn bị theo dặn dò tiết trước.'
    ]
  };
}

/**
 * Tự động tạo Kế hoạch bài dạy chi tiết khớp 100% Khung chuẩn của người dùng
 */
export function generateDefaultGiaoAn(period: LessonPeriod, lesson: Lesson): GiaoAnData {
  const cleanPeriodTitle = period.title.replace(/^Tiết\s*\d+\s*:\s*/i, '');
  const prevPeriodInfo = period.periodNumber > 1 ? getPeriodByNumber(period.periodNumber - 1) : null;

  // I. Yêu cầu cần đạt
  const specificCompetencies: string[] = [
    `Nhận thức công nghệ: Nắm vững kiến thức trọng tâm: ${period.focusContent}.`,
    ...(period.pedagogicalObjectives && period.pedagogicalObjectives.length > 0
      ? period.pedagogicalObjectives
      : [
          `Nhận biết và nêu được đặc điểm, vai trò thực tế của: ${cleanPeriodTitle}.`,
          `Biết cách sử dụng/vận hành an toàn, đúng quy trình và hiệu quả trong đời sống.`
        ])
  ];

  const generalCompetencies: string[] = [
    'Năng lực tự chủ và tự học: Chủ động quan sát hình ảnh, đọc thông tin SGK và tích cực tham gia các hoạt động học tập cá nhân.',
    'Năng lực giao tiếp và hợp tác: Tự tin trao đổi, thảo luận nhóm để hoàn thành nhiệm vụ và chia sẻ kết quả trước lớp.',
    'Năng lực giải quyết vấn đề và sáng tạo: Biết vận dụng kiến thức bài học để giải quyết các tình huống kỹ thuật quen thuộc trong đời sống.'
  ];

  const qualities: string[] = [
    'Chăm chỉ: Tích cực suy nghĩ, chăm chỉ thực hành và hoàn thành các bài tập, nhiệm vụ được giao.',
    'Trách nhiệm: Có ý thức giữ gìn, sử dụng các sản phẩm công nghệ an toàn, tiết kiệm và bảo vệ môi trường.',
    'Trung thực: Khách quan trong quan sát, đánh giá sản phẩm học tập của bản thân và bạn bè.'
  ];

  // II. Đồ dùng dạy học (Đặc thù)
  const specialAids = getSpecificEquipment(period, lesson);

  // III. Tiến trình 5 hoạt động
  const activities: GiaoAnActivityItem[] = [];

  // ==================== 1. MỞ ĐẦU (KHỞI ĐỘNG) ====================
  // Lồng kiến thức bài cũ vô trò chơi
  const prevTopicText = prevPeriodInfo
    ? `Tiết trước các em đã học bài: "${prevPeriodInfo.period.title.replace(/^Tiết\s*\d+\s*:\s*/i, '')}". Bạn nào nhắc lại được kiến thức trọng tâm của tiết trước?`
    : 'Trước khi vào bài mới, chúng ta cùng nhớ lại những sản phẩm công nghệ quen thuộc xung quanh mình.';

  const prevAnswerText = prevPeriodInfo
    ? `Thưa thầy/cô, ở tiết trước chúng em đã học về: ${prevPeriodInfo.period.focusContent}!`
    : 'Thưa thầy/cô, xung quanh chúng ta có rất nhiều sản phẩm công nghệ như quạt điện, tivi, đèn học, tủ lạnh... phục vụ cuộc sống con người!';

  const kd = period.khoiDong;
  const kdQuestion = kd?.question || `Quan sát hình ảnh khởi động và cho biết cảm nghĩ của em về ${cleanPeriodTitle}.`;
  const kdAnswer = kd?.explanation || (kd?.options && typeof kd?.correctAnswer === 'number' ? kd.options[kd.correctAnswer] : 'Học sinh nêu nhận xét chính xác theo tình huống gợi mở của bài.');

  activities.push({
    id: 'act_khoi_dong',
    orderNumber: 1,
    title: '1. Mở đầu (Khởi động): Trò chơi "Hộp quà bí mật - Kết nối tri thức"',
    subSteps: [
      {
        stepKey: 'a',
        title: 'a) Chuyển giao nhiệm vụ học tập:',
        teacherText: [
          'GV tổ chức trò chơi "Hộp quà bí mật" gồm 2 chặng: Chặng 1 ôn lại kiến thức bài trước, Chặng 2 mở chìa khóa bước vào bài học hôm nay.',
          'GV phổ biến luật chơi: "Thầy/cô có các câu hỏi bí mật. Em nào giơ tay nhanh nhất và trả lời đúng sẽ nhận được một phần thưởng khen ngợi từ cả lớp!"'
        ],
        studentText: [
          'HS lắng nghe luật chơi của thầy/cô, hào hứng và tập trung cao độ sẵn sàng tham gia trò chơi.'
        ]
      },
      {
        stepKey: 'b',
        title: 'b) Tổ chức cho học sinh thực hiện nhiệm vụ học tập:',
        teacherText: [
          `* Chặng 1 (Lồng nội dung bài cũ): GV hỏi: "${prevTopicText}"`,
          `* Chặng 2 (Khám phá câu hỏi bài mới): GV trình chiếu câu đố: "${kdQuestion}"`,
          'GV quan sát học sinh xung phong, mời học sinh trả lời.'
        ],
        studentText: [
          `* HS trả lời câu hỏi bài cũ: "${prevAnswerText}"`,
          `* HS trả lời câu hỏi khởi động: "${kdAnswer}"`
        ]
      },
      {
        stepKey: 'c',
        title: 'c) Tổ chức cho học sinh trình bày kết quả và thảo luận:',
        teacherText: [
          'GV mời 1-2 học sinh khác nhận xét câu trả lời của bạn: "Bạn trả lời đã đầy đủ và chính xác chưa? Có bạn nào có câu trả lời khác không?"'
        ],
        studentText: [
          'HS 1: "Thưa thầy/cô, bạn đã nhớ rất đúng kiến thức bài cũ và trả lời đúng câu đố khởi động rồi ạ!"',
          'Cả lớp vỗ tay tán thưởng câu trả lời xuất sắc của bạn.'
        ]
      },
      {
        stepKey: 'd',
        title: 'd) Nhận xét, đánh giá thực hiện nhiệm vụ học tập:',
        teacherText: [
          'GV nhận xét tinh thần tham gia sôi nổi của cả lớp, tuyên dương các bạn nhớ bài cũ tốt.',
          `GV dẫn dắt kết nối vào bài mới: "${kd?.leadIn || `Để hiểu rõ hơn và làm chủ kiến thức này, hôm nay chúng ta cùng học: ${lesson.title} - Tiết ${period.periodNumber}: ${cleanPeriodTitle}!`}"`,
          'GV ghi tựa bài lên bảng.'
        ],
        studentText: [
          'HS lắng nghe lời nhận xét của giáo viên, mở vở ghi đầu bài mới vào vở.'
        ]
      }
    ]
  });

  // ==================== 2. HÌNH THÀNH KIẾN THỨC MỚI (KHÁM PHÁ) ====================
  const kpItems: KhamPhaItem[] = Array.isArray(period.khamPha) ? period.khamPha : [];
  const kpTeacherQuestions: string[] = [];
  const kpStudentAnswers: string[] = [];

  if (kpItems.length > 0) {
    kpItems.forEach((item, idx) => {
      kpTeacherQuestions.push(
        `Mục ${idx + 1}: ${item.title}. GV đặt câu hỏi: "${item.task}. ${item.guidingQuestions?.[0] || 'Em hãy quan sát và rút ra nhận xét?'}"`
      );
      kpStudentAnswers.push(
        `Trả lời mục ${idx + 1}: "Thưa thầy/cô, ${item.teacherConclusion || item.hiddenAnswer || 'Chúng em quan sát và nhận thấy sản phẩm đáp ứng đúng yêu cầu của SGK.'}"`
      );
    });
  } else {
    kpTeacherQuestions.push(`GV yêu cầu: "Quan sát nội dung SGK và cho biết: ${period.focusContent} có đặc điểm và vai trò gì?"`);
    kpStudentAnswers.push(`HS trả lời: "Thưa thầy/cô, qua quan sát em thấy: ${period.focusContent} có vai trò rất quan trọng và thiết thực trong đời sống!"`);
  }

  const kpConclusions = kpItems.length > 0
    ? kpItems.map((it, i) => `${i + 1}. ${it.teacherConclusion || it.hiddenAnswer}`).join(' ')
    : period.focusContent;

  activities.push({
    id: 'act_kham_pha',
    orderNumber: 2,
    title: '2. Hình thành kiến thức mới (Khám phá): Khám phá kiến thức cốt lõi qua tranh ảnh và tình huống',
    subSteps: [
      {
        stepKey: 'a',
        title: 'a) Chuyển giao nhiệm vụ học tập:',
        teacherText: [
          `GV yêu cầu học sinh mở SGK trang ${period.sgkPages || lesson.sgkPages || ''}.`,
          'Nêu nhiệm vụ: "Các em hãy quan sát kỹ từng hình ảnh minh họa trong SGK, làm việc cá nhân kết hợp trao đổi cặp đôi để trả lời các câu hỏi khám phá sau đây."',
          ...kpTeacherQuestions.map(q => `• ${q}`)
        ],
        studentText: [
          'HS mở SGK, đọc thầm nhiệm vụ và quan sát kỹ các hình ảnh, sơ đồ theo hướng dẫn của giáo viên.',
          'Xác định rõ các câu hỏi cần tìm câu trả lời.'
        ]
      },
      {
        stepKey: 'b',
        title: 'b) Tổ chức cho học sinh thực hiện nhiệm vụ học tập:',
        teacherText: [
          'GV cho học sinh thời gian 5 phút suy nghĩ cá nhân và thảo luận cặp đôi với bạn cùng bàn.',
          'GV đi quanh lớp bao quát, gợi ý cho các nhóm học sinh còn lúng túng bằng các câu hỏi nhỏ dẫn dắt.'
        ],
        studentText: [
          'HS quan sát, trao đổi sôi nổi với bạn cùng bàn, thống nhất câu trả lời cho từng mục:',
          ...kpStudentAnswers.map(ans => `• ${ans}`)
        ]
      },
      {
        stepKey: 'c',
        title: 'c) Tổ chức cho học sinh trình bày kết quả và thảo luận:',
        teacherText: [
          'GV mời đại diện 2-3 cặp học sinh đứng dậy phát biểu câu trả lời cho từng nội dung.',
          'GV yêu cầu các bạn khác chú ý lắng nghe, đối chiếu với ý kiến của nhóm mình để nhận xét, bổ sung.'
        ],
        studentText: [
          'Đại diện HS tự tin đứng lên phát biểu câu trả lời chi tiết, rõ ràng.',
          'HS khác nhận xét: "Em đồng ý với câu trả lời của bạn / Nhóm em xin bổ sung thêm một chi tiết là..."'
        ]
      },
      {
        stepKey: 'd',
        title: 'd) Nhận xét, đánh giá thực hiện nhiệm vụ học tập:',
        teacherText: [
          'GV nhận xét phần trả lời và phản biện của học sinh, giải thích cặn kẽ những điểm học sinh còn thắc mắc.',
          `GV chốt kiến thức cốt lõi ghi bảng: "${kpConclusions}"`,
          'Yêu cầu 2 học sinh đọc lại nội dung chốt kiến thức.'
        ],
        studentText: [
          'HS lắng nghe giáo viên chốt kiến thức.',
          '2 HS đứng dậy đọc to, rõ ràng nội dung chốt kiến thức trên bảng.',
          'Cả lớp ghi nhận kiến thức trọng tâm vào vở ghi bài.'
        ]
      }
    ]
  });

  // ==================== 3. LUYỆN TẬP, THỰC HÀNH ====================
  const lt = period.luyenTap;
  const ltItems = Array.isArray(lt) ? lt : lt?.exercises || [];
  const isPractice = !!period.thucHanh;

  const ltTeacherTasks: string[] = [];
  const ltStudentAnswers: string[] = [];

  if (isPractice && period.thucHanh) {
    ltTeacherTasks.push(`GV giao nhiệm vụ thực hành: "${period.thucHanh.title}". Hướng dẫn học sinh quy trình thực hiện gồm các bước chuẩn kỹ thuật.`);
    ltTeacherTasks.push('GV nhắc nhở quy tắc an toàn: cẩn thận khi dùng kéo, giữ trật tự và dọn dẹp vệ sinh sau khi hoàn thành.');
    ltStudentAnswers.push('HS tiếp nhận quy trình, kiểm tra đầy đủ dụng cụ và vật liệu thực hành trên bàn nhóm.');
    ltStudentAnswers.push('Các nhóm phân công nhiệm vụ: bạn đo vẽ kích thước, bạn cắt, bạn lắp ráp liên kết các chi tiết.');
  } else if (ltItems.length > 0) {
    ltItems.slice(0, 2).forEach((ex: any, idx: number) => {
      ltTeacherTasks.push(`Bài tập ${idx + 1}: GV đặt câu hỏi: "${ex.question || ex.title || 'Làm bài tập luyện tập trong SGK'}"`);
      const ansText = ex.explanation || (ex.options && typeof ex.correctAnswer === 'number' ? ex.options[ex.correctAnswer] : 'Lựa chọn phương án chính xác.');
      ltStudentAnswers.push(`HS giải Bài tập ${idx + 1}: "Thưa thầy/cô, đáp án đúng là: ${ansText}"`);
    });
  } else {
    ltTeacherTasks.push(`GV yêu cầu: "Em hãy nêu ví dụ thực tế minh họa cho kiến thức: ${period.focusContent}."`);
    ltStudentAnswers.push(`HS trả lời: "Thưa thầy/cô, ví dụ thực tế là trong gia đình em luôn thực hiện đúng quy định để đảm bảo an toàn và bền đẹp."`);
  }

  activities.push({
    id: 'act_luyen_tap',
    orderNumber: 3,
    title: isPractice ? '3. Luyện tập, thực hành: Thực hành chế tạo / lắp ráp sản phẩm kỹ thuật' : '3. Luyện tập, thực hành: Củng cố và khắc sâu kiến thức qua bài tập tương tác',
    subSteps: [
      {
        stepKey: 'a',
        title: 'a) Chuyển giao nhiệm vụ học tập:',
        teacherText: [
          'GV nêu rõ yêu cầu bài tập / nhiệm vụ thực hành cho cả lớp.',
          ...ltTeacherTasks.map(t => `• ${t}`)
        ],
        studentText: [
          'HS đọc kỹ đề bài, xác định rõ yêu cầu cần làm và tiêu chí đánh giá thành công.'
        ]
      },
      {
        stepKey: 'b',
        title: 'b) Tổ chức cho học sinh thực hiện nhiệm vụ học tập:',
        teacherText: [
          isPractice
            ? 'GV cho học sinh thời gian 10-12 phút thực hành theo nhóm. GV đi từng bàn hỗ trợ, uốn nắn thao tác cầm kéo, dán keo của học sinh.'
            : 'GV cho học sinh làm việc cá nhân vào vở bài tập trong 5 phút. Mời 2 học sinh lên bảng làm.'
        ],
        studentText: [
          ...ltStudentAnswers.map(ans => `• ${ans}`),
          isPractice ? 'Các thành viên trong nhóm phối hợp nhịp nhàng, kiểm tra sản phẩm đạt độ chắc chắn và thẩm mỹ.' : 'HS dưới lớp hoàn thành bài tập vào vở, đối chiếu kết quả với bạn cùng bàn.'
        ]
      },
      {
        stepKey: 'c',
        title: 'c) Tổ chức cho học sinh trình bày kết quả và thảo luận:',
        teacherText: [
          isPractice
            ? 'GV mời đại diện các nhóm mang sản phẩm lên bàn trưng bày. Yêu cầu nhóm trưởng thuyết minh sản phẩm của nhóm mình.'
            : 'GV gọi học sinh nhận xét bài làm trên bảng. GV hỏi: "Vì sao em lại chọn đáp án này? Giải thích căn cứ khoa học của em?"'
        ],
        studentText: [
          isPractice
            ? 'Đại diện nhóm tự tin giới thiệu sản phẩm, giải thích cách nhóm đã khắc phục khó khăn khi lắp ráp.'
            : 'HS đứng dậy giải thích cặn kẽ: "Thưa thầy/cô, em chọn đáp án này vì căn cứ vào kiến thức mục Khám phá vừa học..."',
          'Các học sinh khác tham gia nhận xét, đặt câu hỏi cho bạn.'
        ]
      },
      {
        stepKey: 'd',
        title: 'd) Nhận xét, đánh giá thực hiện nhiệm vụ học tập:',
        teacherText: [
          'GV nhận xét cụ thể bài làm của từng học sinh / sản phẩm của từng nhóm.',
          'Tuyên dương những bạn làm đúng nhanh, sản phẩm đẹp; chỉ ra lỗi sai phổ biến để cả lớp cùng khắc phục.'
        ],
        studentText: [
          'HS lắng nghe nhận xét, sửa sai (nếu có) vào vở ghi.',
          'Học sinh tự đánh giá và đánh giá chéo kết quả học tập của nhau.'
        ]
      }
    ]
  });

  // ==================== 4. VẬN DỤNG, TRẢI NGHIỆM (NẾU CÓ) ====================
  const vd = period.vanDung;
  const vdQuestion = vd?.task || `Em hãy liên hệ thực tế: Bản thân và gia đình em đã áp dụng ${cleanPeriodTitle} như thế nào trong đời sống?`;
  const vdAnswer = vd?.realLifeApplication || 'Học sinh nêu những hành vi, thói quen đúng đắn, an toàn và tiết kiệm trong sinh hoạt gia đình hàng ngày.';

  activities.push({
    id: 'act_van_dung',
    orderNumber: 4,
    title: '4. Vận dụng, trải nghiệm: Liên hệ thực tiễn đời sống gia đình và xã hội',
    subSteps: [
      {
        stepKey: 'a',
        title: 'a) Chuyển giao nhiệm vụ học tập:',
        teacherText: [
          'GV đưa ra tình huống thực tế và đặt câu hỏi vận dụng:',
          `• GV hỏi: "${vdQuestion}"`,
          'GV khuyến khích học sinh liên hệ với những việc làm thực tế hàng ngày tại gia đình em.'
        ],
        studentText: [
          'HS lắng nghe tình huống, liên hệ với bản thân và thực tế tại gia đình.'
        ]
      },
      {
        stepKey: 'b',
        title: 'b) Tổ chức cho học sinh thực hiện nhiệm vụ học tập:',
        teacherText: [
          'GV cho học sinh 2 phút suy nghĩ cá nhân, sau đó trao đổi nhanh với bạn ngồi cạnh về ý tưởng của mình.'
        ],
        studentText: [
          `HS trao đổi và rút ra câu trả lời: "${vdAnswer}"`
        ]
      },
      {
        stepKey: 'c',
        title: 'c) Tổ chức cho học sinh trình bày kết quả và thảo luận:',
        teacherText: [
          'GV mời 2-3 học sinh xung phong chia sẻ ý kiến trước lớp: "Thầy/cô mời em chia sẻ những việc em đã hoặc sẽ làm ở nhà để vận dụng bài học hôm nay?"'
        ],
        studentText: [
          'HS 1 phát biểu: "Thưa thầy/cô, ở nhà em luôn nhắc nhở người thân sử dụng đúng cách, an toàn và tiết kiệm, không để xảy ra lãng phí hay sự cố."',
          'HS 2 phát biểu: "Thưa thầy/cô, sau bài học hôm nay em sẽ về nhà kiểm tra lại các thiết bị và thực hiện đúng hướng dẫn của thầy/cô."'
        ]
      },
      {
        stepKey: 'd',
        title: 'd) Nhận xét, đánh giá thực hiện nhiệm vụ học tập:',
        teacherText: [
          'GV khen ngợi những chia sẻ chân thành, thiết thực và có ý thức cao của học sinh.',
          'GV nhấn mạnh: "Môn Công nghệ gắn liền với cuộc sống hàng ngày, thầy/cô rất mong các em sẽ duy trì những thói quen tốt này và chia sẻ cho gia đình cùng thực hiện."'
        ],
        studentText: [
          'HS lắng nghe, ghi nhớ lời căn dặn của giáo viên để áp dụng vào cuộc sống.'
        ]
      }
    ]
  });

  // ==================== 5. HOẠT ĐỘNG NỐI TIẾP ====================
  const nextPeriodInfo = period.periodNumber < 35 ? getPeriodByNumber(period.periodNumber + 1) : null;
  const nextPrepText = nextPeriodInfo
    ? `Chuẩn bị cho Tiết ${nextPeriodInfo.period.periodNumber}: "${nextPeriodInfo.period.title.replace(/^Tiết\s*\d+\s*:\s*/i, '')}". ${getSpecificEquipment(nextPeriodInfo.period, nextPeriodInfo.lesson).student.join('; ')}`
    : 'Ôn tập lại toàn bộ kiến thức môn Công nghệ lớp 5 đã học.';

  activities.push({
    id: 'act_noi_tiep',
    orderNumber: 5,
    title: '5. Hoạt động nối tiếp: Dặn dò. Nhận xét tiết học.',
    teacherActionDirect: [
      '1. Nhận xét tiết học: GV đánh giá chung về tinh thần học tập của lớp. Biểu dương các cá nhân, nhóm hăng hái phát biểu và thực hành tốt; nhắc nhở những bạn còn chưa tập trung cần cố gắng hơn ở các tiết sau.',
      '2. Dặn dò học sinh về nhà:',
      `• Đọc lại bài học và phần Ghi nhớ trong SGK trang ${period.sgkPages || lesson.sgkPages || ''}.`,
      '• Thực hiện tốt các việc làm đã nêu ở phần Vận dụng trong gia đình.',
      `• ${nextPrepText}`
    ],
    studentActionDirect: [
      '1. HS lắng nghe nhận xét của giáo viên để tự rút kinh nghiệm cho bản thân trong các tiết học sau.',
      '2. HS ghi chép cẩn thận các nội dung dặn dò của thầy/cô vào vở dặn dò / sổ tay:',
      '• Ôn lại bài và ghi nhớ.',
      '• Chuẩn bị đầy đủ đồ dùng đặc thù theo yêu cầu cho tiết học sau.'
    ]
  });

  return {
    headerTitle: 'KHUNG KẾ HOẠCH BÀI DẠY',
    dayOfWeek: 'Thứ .....',
    teachingDate: 'ngày ..... tháng ..... năm 202...',
    subjectName: 'Môn: CÔNG NGHỆ (Lớp 5)',
    lessonTitle: `BÀI: ${lesson.title.toUpperCase()} - TIẾT ${period.periodNumber}: ${cleanPeriodTitle.toUpperCase()}`,
    periodNumber: period.periodNumber,
    periodTitle: cleanPeriodTitle,
    sgkPages: period.sgkPages || lesson.sgkPages || 'Trang SGK',
    specificCompetencies,
    generalCompetencies,
    qualities,
    teacherSpecialAids: specialAids.teacher,
    studentSpecialAids: specialAids.student,
    activities,
    postLessonNotes: '................................................................................................................................................................................................................................................................................................................................................................................................................'
  };
}

/**
 * Xuất file Microsoft Word (.doc) theo đúng chuẩn mẫu KHUNG KẾ HOẠCH BÀI DẠY
 */
export function exportGiaoAnToWord(data: GiaoAnData) {
  const content = `
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
  <meta charset='utf-8'>
  <title>KHBD_CongNghe5_Tiet_${data.periodNumber}</title>
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
      font-size: 14pt;
      font-weight: bold;
      text-align: center;
      text-transform: uppercase;
      margin-top: 6pt;
      margin-bottom: 2pt;
    }
    .date-header {
      font-size: 13pt;
      font-style: italic;
      text-align: center;
      margin-bottom: 4pt;
    }
    .subject-header {
      font-size: 13pt;
      font-weight: bold;
      text-align: center;
      margin-bottom: 2pt;
    }
    .lesson-header {
      font-size: 13pt;
      font-weight: bold;
      text-align: center;
      margin-bottom: 12pt;
    }
    h2 {
      font-size: 13pt;
      font-weight: bold;
      margin-top: 10pt;
      margin-bottom: 3pt;
      color: #000000;
      text-transform: uppercase;
    }
    h3 {
      font-size: 13pt;
      font-weight: bold;
      margin-top: 6pt;
      margin-bottom: 2pt;
    }
    p {
      margin-top: 2pt;
      margin-bottom: 3pt;
      text-align: justify;
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
      background-color: #F2F2F2;
      font-weight: bold;
      text-align: center;
    }
    .act-title-row {
      background-color: #EBF1F5;
      font-weight: bold;
    }
    .substep-title {
      font-weight: bold;
      font-style: italic;
      color: #002060;
      margin-top: 4pt;
      margin-bottom: 2pt;
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
    .italic { font-style: italic; }
    .bold { font-weight: bold; }
  </style>
</head>
<body>
<div class="Section1">

  <!-- Header standard -->
  <h1>${data.headerTitle}</h1>
  <div class="date-header">${data.dayOfWeek}, ${data.teachingDate}</div>
  <div class="subject-header">${data.subjectName}</div>
  <div class="lesson-header">${data.lessonTitle}</div>

  <!-- I. YÊU CẦU CẦN ĐẠT -->
  <h2>I. YÊU CẦU CẦN ĐẠT</h2>
  <p><b>1. Năng lực đặc thù:</b></p>
  <ul>
    ${data.specificCompetencies.map(item => `<li>${item}</li>`).join('')}
  </ul>

  <p><b>2. Năng lực chung:</b></p>
  <ul>
    ${data.generalCompetencies.map(item => `<li>${item}</li>`).join('')}
  </ul>

  <p><b>3. Phẩm chất:</b></p>
  <ul>
    ${data.qualities.map(item => `<li>${item}</li>`).join('')}
  </ul>

  <!-- II. ĐỒ DÙNG DẠY HỌC -->
  <h2>II. ĐỒ DÙNG DẠY HỌC</h2>
  <p class="italic" style="color: #444444; font-size: 11pt;">(Chỉ ghi dụng cụ đặc thù phục vụ cho tiết dạy. Không ghi những ĐDDH hay dụng cụ sử dụng thường ngày như: thước, bảng, phấn, SGK, SGV, tài liệu, PPT...)</p>
  <p><b>- Giáo viên:</b></p>
  <ul>
    ${data.teacherSpecialAids.map(item => `<li>${item}</li>`).join('')}
  </ul>
  <p><b>- Học sinh:</b></p>
  <ul>
    ${data.studentSpecialAids.map(item => `<li>${item}</li>`).join('')}
  </ul>

  <!-- III. CÁC HOẠT ĐỘNG DẠY HỌC CHỦ YẾU -->
  <h2>III. CÁC HOẠT ĐỘNG DẠY HỌC CHỦ YẾU</h2>

  <table class="content-table">
    <thead>
      <tr>
        <th style="width: 50%;">Hoạt động của giáo viên</th>
        <th style="width: 50%;">Hoạt động của học sinh</th>
      </tr>
    </thead>
    <tbody>
      ${data.activities.map(act => {
        if (act.subSteps && act.subSteps.length > 0) {
          return `
            <tr class="act-title-row">
              <td colspan="2">
                <b>${act.title}</b>
              </td>
            </tr>
            ${act.subSteps.map(step => `
              <tr>
                <td>
                  <div class="substep-title">${step.title}</div>
                  ${step.teacherText.map(t => `<p>${t.startsWith('•') ? t : '• ' + t}</p>`).join('')}
                </td>
                <td>
                  <div class="substep-title">&nbsp;</div>
                  ${step.studentText.map(s => `<p>${s.startsWith('•') || s.startsWith('-') || s.startsWith('*') ? s : '- ' + s}</p>`).join('')}
                </td>
              </tr>
            `).join('')}
          `;
        } else {
          // Hoạt động 5
          return `
            <tr class="act-title-row">
              <td colspan="2">
                <b>${act.title}</b>
              </td>
            </tr>
            <tr>
              <td>
                ${(act.teacherActionDirect || []).map(t => `<p>${t.startsWith('•') ? t : '• ' + t}</p>`).join('')}
              </td>
              <td>
                ${(act.studentActionDirect || []).map(s => `<p>${s.startsWith('•') || s.startsWith('-') || s.startsWith('*') ? s : '- ' + s}</p>`).join('')}
              </td>
            </tr>
          `;
        }
      }).join('')}
    </tbody>
  </table>

  <!-- IV. ĐIỀU CHỈNH SAU BÀI DẠY -->
  <h2>IV. ĐIỀU CHỈNH SAU BÀI DẠY (nếu có)</h2>
  <p>${data.postLessonNotes || '................................................................................................................................................................................................................................................................................................................................................................................................................'}</p>

</div>
</body>
</html>
  `;

  const blob = new Blob(['\ufeff' + content], { type: 'application/msword;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `KHBD_CongNghe5_Tiet_${data.periodNumber}_${data.periodTitle.replace(/[^a-zA-Z0-9_\u00C0-\u024F\u1EA0-\u1EF9]/g, '_')}.doc`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
