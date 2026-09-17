import { Lesson } from '../types';

export const PART_2_LESSONS: Lesson[] = [
  {
    id: 'bai-7',
    number: 7,
    title: 'Lắp ráp mô hình xe điện chạy bằng pin',
    partId: 'part-2',
    partTitle: 'PHẦN HAI: THỦ CÔNG KĨ THUẬT',
    totalPeriods: 4,
    sgkPages: 'Trang 32 – 37',
    periods: [
      {
        id: 'tiet-22',
        periodNumber: 22,
        lessonId: 'bai-7',
        periodInLesson: 1,
        totalPeriodsInLesson: 4,
        title: 'Tiết 1: Tìm hiểu sản phẩm mẫu & Lựa chọn chi tiết, dụng cụ',
        focusContent: 'Quan sát mô hình xe điện chạy pin (Hình 1 SGK tr. 32) gồm 4 bộ phận: Khung xe; Trục và bánh xe; Động cơ và hệ truyền động; Nguồn điện (giá 2 pin). Nhận diện và lựa chọn đúng 18 chi tiết, dụng cụ (tr. 33 - 34).',
        sgkPages: 'Trang 32 – 34',
        khoiDong: {
          title: 'Khởi động: Câu đố xe điện',
          type: 'question',
          question: 'Em hãy đọc câu đố trong SGK tr. 32: "Xe gì mà có động cơ / Muốn đi lại chẳng bao giờ cần xăng?".',
          options: [
            'A. Xe điện (chạy bằng pin hoặc ắc quy)',
            'B. Xe máy chạy xăng',
            'C. Xe ô tô tải chạy dầu diesel',
            'D. Xe ngựa kéo'
          ],
          correctAnswer: 0,
          explanation: 'Đó chính là xe điện - phương tiện giao thông xanh, sạch, không xả khói bụi bảo vệ môi trường.',
          leadIn: 'Các em có muốn tự tay lắp ráp một chiếc mô hình xe điện chạy băng băng bằng pin không? Hãy bắt đầu bài học ngay!'
        },
        khamPha: [
          {
            id: 'kp-22-1',
            title: '1. Tìm hiểu 4 bộ phận chính của mô hình xe điện (Hình 1 SGK tr. 32)',
            task: 'Quan sát Hình 1 SGK tr. 32 và chỉ ra 4 bộ phận chính: b) Khung xe; c) Trục và bánh xe; d) Động cơ và hệ truyền động; e) Nguồn điện (giá 2 pin tiểu). Nêu yêu cầu sản phẩm mẫu.',
            context: 'Mô hình xe điện gồm 4 khối chức năng liên kết chặt chẽ.',
            guidingQuestions: [
              '1. Khung xe có tác dụng gì (nền tảng nâng đỡ toàn bộ động cơ, pin và bánh xe)?',
              '2. Bộ phận nào biến điện năng thành chuyển động quay tròn?',
              '3. Đai truyền và bánh đai có nhiệm vụ gì?',
              '4. Đọc yêu cầu sản phẩm mẫu trong khung xanh trang 32?'
            ],
            hiddenAnswer: 'Bốn bộ phận chính: Khung xe, Trục và bánh xe, Động cơ và hệ truyền động, Nguồn điện. Yêu cầu sản phẩm: Đúng và đủ chi tiết; đúng hình dạng, gọn gàng; mối ghép chắc chắn; xe chạy được khi đóng công tắc.',
            teacherConclusion: 'Nắm vững 4 bộ phận chính và 4 yêu cầu sản phẩm là mục tiêu đầu tiên của kỹ sư lắp ráp nhí.'
          },
          {
            id: 'kp-22-2',
            title: '2. Nhận diện và kiểm đếm 18 chi tiết, vật liệu (Bảng SGK tr. 33 - 34)',
            task: 'Mở hộp bộ lắp ghép mô hình kĩ thuật, nhận diện hình dạng và kiểm tra đúng số lượng từng chi tiết theo bảng: 1 Tấm lớn; 2 Thanh chữ U dài; 4 Thanh thẳng 3 lỗ; 2 Trục thẳng dài; 4 Bánh xe; 1 Động cơ; 1 Bánh đai; 1 Đai truyền; 1 Puli; 1 Giá pin; 2 Pin AA 1.5V; 10 Đai ốc; 8 Vít ngắn; 2 Vít dài; 10 Vòng hãm; 1 Tua-vít; 1 Cờ-lê; 1 Băng dính 2 mặt.',
            context: 'Rèn luyện kỹ năng nhận diện chi tiết cơ khí và tính cẩn thận.',
            guidingQuestions: [
              '1. Chi tiết nào dùng để làm sàn đáy xe (Tấm lớn)?',
              '2. Tua-vít và cờ-lê dùng để làm gì trong quá trình vặn ốc?',
              '3. Vòng hãm có tác dụng gì khi lắp bánh xe vào trục?'
            ],
            hiddenAnswer: 'Học sinh nhận diện đầy đủ 18 chi tiết, phân loại ốc vít gọn gàng vào nắp hộp, kiểm tra đúng số lượng trước khi lắp ráp.',
            teacherConclusion: 'Kiểm đếm và xếp chi tiết ngăn nắp giúp quá trình lắp ráp không bị thiếu sót hay mất ốc vít.'
          }
        ],
        thaoLuan: {
          title: 'Thảo luận nhóm: Phân công kiểm đếm hộp đồ dùng',
          groupTask: 'Nhóm 4 bạn: Cùng mở bộ lắp ghép kỹ thuật, phân công 2 bạn kiểm tra các thanh kim loại, 2 bạn đếm ốc vít và dụng cụ tua-vít, cờ-lê.',
          durationMinutes: 4,
          guidingPrompts: ['Đếm đủ 10 đai ốc chưa?', 'Tua-vít và cờ-lê để ở vị trí an toàn'],
          suggestedHints: ['Để ốc vít vào một khay nhỏ tránh rơi xuống sàn lớp học.'],
          conclusion: 'Chuẩn bị chu đáo là một nửa thành công của tiết thực hành.'
        },
        luyenTap: [
          {
            id: 'lt-22-1',
            type: 'matching',
            instruction: 'Nối đúng tên chi tiết với số lượng cần chuẩn bị theo SGK tr. 33 - 34:',
            leftItems: [
              { id: 'ct-tam', text: 'Tấm lớn' },
              { id: 'ct-banh', text: 'Bánh xe' },
              { id: 'ct-u-dai', text: 'Thanh chữ U dài' },
              { id: 'ct-oc', text: 'Đai ốc' }
            ],
            rightItems: [
              { id: 'sl-1', text: '1 cái (làm sàn xe)' },
              { id: 'sl-4', text: '4 cái (gắn vào 2 trục)' },
              { id: 'sl-2', text: '2 thanh' },
              { id: 'sl-10', text: '10 chiếc' }
            ],
            correctPairs: [
              { leftId: 'ct-tam', rightId: 'sl-1' },
              { leftId: 'ct-banh', rightId: 'sl-4' },
              { leftId: 'ct-u-dai', rightId: 'sl-2' },
              { leftId: 'ct-oc', rightId: 'sl-10' }
            ],
            difficulty: 'basic'
          },
          {
            id: 'lt-22-2',
            type: 'true_false',
            statement: 'Nguồn điện cung cấp năng lượng cho xe chạy là giá chứa 2 pin tiểu 1.5V (tổng điện áp 3V).',
            isCorrect: true,
            explanation: 'Chính xác! 2 pin tiểu 1.5V mắc nối tiếp tạo nguồn điện 3V làm quay động cơ.',
            difficulty: 'basic'
          }
        ],
        vanDung: {
          title: 'Em vận dụng: Lợi ích môi trường của xe điện',
          scenario: 'Ngày nay ở các thành phố lớn, xe buýt điện và taxi điện xuất hiện ngày càng nhiều trên đường phố.',
          question: 'Tại sao xe điện lại được khuyến khích sử dụng thay cho xe chạy xăng dầu truyền thống?',
          options: [
            {
              label: 'A',
              text: 'Xe điện chạy êm ái, không xả khí thải độc hại CO2 ra môi trường, giảm ô nhiễm không khí',
              isOptimal: true,
              feedback: 'Rất chính xác! Xe điện là phương tiện giao thông xanh tương lai của nhân loại.'
            },
            {
              label: 'B',
              text: 'Vì xe điện không cần bánh xe',
              isOptimal: false,
              feedback: 'Xe điện vẫn cần bánh xe để di chuyển.'
            }
          ],
          teacherExplanation: 'Hiểu được ý nghĩa bảo vệ môi trường của năng lượng điện xanh.'
        },
        ghiNho: {
          mainTitle: 'BÀI 7 - TIẾT 1: CẤU TẠO MÔ HÌNH XE ĐIỆN',
          summaryQuote: 'Mô hình xe điện gồm 4 bộ phận chính: Khung xe; Trục và bánh xe; Động cơ và hệ truyền động; Nguồn điện. Cần chuẩn bị đủ 18 chi tiết và dụng cụ trong bộ lắp ghép.',
          branches: [
            { label: '4 bộ phận', color: 'blue', items: ['Khung xe (tấm lớn, thanh U)', 'Trục và 4 bánh xe', 'Động cơ & dây đai truyền', 'Giá chứa 2 pin tiểu'] },
            { label: 'Yêu cầu sản phẩm', color: 'emerald', items: ['Đúng, đủ chi tiết', 'Gọn gàng, chắc chắn', 'Xe chạy khi đóng công tắc'] }
          ],
          sgkNote: 'Ghi nhớ SGK Công nghệ 5, trang 32 - 34.'
        },
        cungCo: [
          {
            id: 'cc-22-1',
            question: 'Mô hình xe điện chạy bằng pin gồm mấy bộ phận chính?',
            options: ['A. 2 bộ phận', 'B. 3 bộ phận', 'C. 4 bộ phận', 'D. 10 bộ phận'],
            correctIndex: 2,
            explanation: 'Gồm 4 bộ phận: Khung xe, Trục & bánh xe, Động cơ & truyền động, Nguồn điện.'
          }
        ],
        teacherGuide: {
          objectives: ['Kể tên được các chi tiết của bộ lắp ghép mô hình xe điện chạy pin; lựa chọn đúng và đủ số lượng theo bảng.'],
          keyKnowledge: ['Cấu tạo 4 khối của mô hình xe điện và bảng 18 chi tiết.'],
          estimatedMinutes: 35,
          methodologyTips: ['Hướng dẫn học sinh cách cầm cờ-lê và tua-vít đúng kỹ thuật siết ốc.'],
          equipmentNeeded: ['Bộ lắp ghép kĩ thuật lớp 5, Hình 1 SGK tr. 32'],
          quickAnswers: [{ question: 'Cần bao nhiêu bánh xe?', answer: '4 bánh xe.' }]
        }
      },
      {
        id: 'tiet-23',
        periodNumber: 23,
        lessonId: 'bai-7',
        periodInLesson: 2,
        totalPeriodsInLesson: 4,
        title: 'Tiết 2: Thực hành Bước 1 (Lắp khung xe) & Bước 2 (Lắp động cơ, giá pin)',
        focusContent: 'Thực hành Bước 1: Dùng 2 thanh chữ U dài, 4 thanh thẳng 3 lỗ lắp vào tấm lớn (Hình 2 tr. 34); Bước 2: Lắp động cơ và giá pin vào khung xe (Hình 3 & 4 tr. 35); Lưu ý cực điện màu đỏ (dương) và màu đen (âm).',
        sgkPages: 'Trang 34 – 35',
        khoiDong: {
          title: 'Khởi động: Kỹ thuật siết ốc an toàn',
          type: 'quick_quiz',
          question: 'Khi lắp vít và đai ốc, ta dùng tay trái giữ cờ-lê kẹp vào đai ốc, tay phải cầm tua-vít vặn theo chiều nào để siết chặt?',
          options: [
            'A. Vặn theo chiều kim đồng hồ',
            'B. Vặn ngược chiều kim đồng hồ',
            'C. Lấy búa đập mạnh',
            'D. Chỉ cần dán keo'
          ],
          correctAnswer: 0,
          explanation: 'Quy tắc cơ khí cơ bản: Vặn theo chiều kim đồng hồ là siết vào (vào theo chiều kim, ra ngược chiều kim).',
          leadIn: 'Nắm chắc kỹ thuật siết ốc, chúng ta cùng bắt tay vào lắp khung xe và cụm động cơ!'
        },
        khamPha: [
          {
            id: 'kp-23-1',
            title: '1. Quy trình Bước 1: Lắp khung xe (Hình 2 SGK tr. 34)',
            task: 'Quan sát Hình 2: Dùng 2 thanh chữ U dài lắp dọc hai bên tấm lớn; dùng 4 thanh thẳng 3 lỗ lắp đứng ở 4 góc để làm giá đỡ trục xe. Bắt vít và đai ốc chắc chắn.',
            context: 'Khung xe phải vuông vức, phẳng phiu, các mối ghép không bị lỏng lẻo.',
            guidingQuestions: [
              '1. Lắp 2 thanh chữ U dài vào mép nào của tấm lớn?',
              '2. 4 thanh thẳng 3 lỗ được lắp ở vị trí nào để chuẩn bị xâu trục bánh xe?',
              '3. Dùng cờ-lê và tua-vít siết chặt các ốc vít như thế nào?'
            ],
            hiddenAnswer: 'Lắp 2 thanh chữ U dài vào hai mép dọc tấm lớn; 4 thanh thẳng 3 lỗ lắp đứng ở 4 góc hướng lên trên/xuống dưới theo Hình 2. Dùng cờ-lê giữ đai ốc, tua-vít vặn chặt vít.',
            teacherConclusion: 'Khung xe là xương sống của mô hình, cần lắp thật chắc chắn và cân đối.'
          },
          {
            id: 'kp-23-2',
            title: '2. Quy trình Bước 2: Lắp động cơ và giá pin vào khung (Hình 3 & 4 SGK tr. 35)',
            task: 'Quan sát Hình 3 và 4: Dùng tấm 2 lỗ và 2 vít dài cố định động cơ vào khung xe. Dùng băng dính 2 mặt dán cố định giá 2 pin. Nối 2 đầu dây điện của giá pin vào 2 cực của động cơ.',
            context: 'Lưu ý đặc biệt SGK tr. 35: Nối dây điện màu ĐỎ vào cực DƯƠNG, nối dây điện màu ĐEN vào cực ÂM của động cơ.',
            guidingQuestions: [
              '1. Động cơ được cố định vào khung xe bằng chi tiết nào?',
              '2. Dây điện màu đỏ của giá pin nối vào cực nào của động cơ?',
              '3. Dây điện màu đen nối vào cực nào?'
            ],
            hiddenAnswer: 'Động cơ được bắt chặt bằng tấm 2 lỗ và vít dài. Giá pin dán chắc chắn bằng băng dính 2 mặt. Lưu ý nối dây: DÂY ĐỎ ➔ CỰC DƯƠNG (+), DÂY ĐEN ➔ CỰC ÂM (-).',
            teacherConclusion: 'Nối đúng cực điện bảo đảm động cơ quay đúng chiều tiến về phía trước.'
          }
        ],
        thaoLuan: {
          title: 'Kiểm tra chéo giữa các bàn',
          groupTask: 'Các nhóm kiểm tra chéo: Lắc nhẹ khung xe xem mối ốc có bị lung lay không? Kiểm tra xem dây đỏ đã vào cực dương, dây đen vào cực âm chưa?',
          durationMinutes: 4,
          guidingPrompts: ['Mối ghép có chắc chắn không?', 'Động cơ có bị nghiêng lệch không?'],
          suggestedHints: ['Dùng tua-vít siết thêm 1 vòng nếu ốc còn lỏng.'],
          conclusion: 'Kiểm tra tỉ mỉ ở bước này giúp các bước sau vận hành trơn tru.'
        },
        luyenTap: [
          {
            id: 'lt-23-1',
            type: 'true_false',
            statement: 'Khi nối dây điện vào động cơ, ta nối dây màu đen vào cực dương và dây màu đỏ vào cực âm.',
            isCorrect: false,
            explanation: 'Sai! Quy định chuẩn kỹ thuật theo SGK tr. 35: Dây điện màu ĐỎ nối cực DƯƠNG (+), dây điện màu ĐEN nối cực ÂM (-).',
            difficulty: 'basic'
          },
          {
            id: 'lt-23-2',
            type: 'order',
            instruction: 'Sắp xếp đúng thao tác lắp khung xe ở Bước 1:',
            items: [
              { id: 'k2', text: 'Lắp 2 thanh chữ U dài vào tấm lớn bằng vít và đai ốc' },
              { id: 'k1', text: 'Đặt tấm lớn lên bàn phẳng' },
              { id: 'k3', text: 'Lắp 4 thanh thẳng 3 lỗ đứng ở 4 vị trí đỡ trục bánh xe' }
            ],
            correctOrder: ['k1', 'k2', 'k3'],
            difficulty: 'intermediate'
          }
        ],
        thucHanh: {
          title: 'Thực hành: Lắp khung xe và cụm động cơ pin',
          objective: 'Hoàn thành Bước 1 và Bước 2: Khung xe chắc chắn, động cơ và giá pin gắn đúng vị trí, nối dây đúng cực âm dương.',
          materials: [
            { name: 'Tấm lớn, thanh chữ U dài, thanh 3 lỗ', quantity: 'Theo bảng chi tiết' },
            { name: 'Động cơ điện và giá 2 pin tiểu', quantity: '1 bộ' },
            { name: 'Ốc vít, cờ-lê, tua-vít, băng dính 2 mặt', quantity: 'Đầy đủ' }
          ],
          steps: [
            {
              stepNumber: 1,
              title: 'Lắp khung xe',
              description: 'Lắp 2 thanh chữ U dài và 4 thanh thẳng 3 lỗ vào tấm lớn theo Hình 2 SGK.',
              details: ['Dùng tua-vít siết chặt các mối ghép.'],
              safetyTip: 'Không làm rơi ốc vít xuống đất.'
            },
            {
              stepNumber: 2,
              title: 'Lắp động cơ và giá pin',
              description: 'Cố định động cơ bằng tấm 2 lỗ. Dán giá pin bằng băng dính 2 mặt. Nối dây đỏ vào cực dương (+), dây đen vào cực âm (-).',
              details: ['Luồn dây điện gọn gàng theo sườn xe.']
            }
          ],
          evaluationCriteria: [
            { name: 'Khung xe', description: 'Phẳng phiu, các thanh ghép vuông góc chắc chắn.' },
            { name: 'Cụm động cơ', description: 'Động cơ không bị rung lắc, nối đúng dây đỏ cực (+), dây đen cực (-).' }
          ]
        },
        vanDung: {
          title: 'Em vận dụng: Đảo chiều quay động cơ',
          scenario: 'Khi học sinh thử nghiệm, nếu vô tình nối ngược dây đỏ vào cực âm và dây đen vào cực dương của động cơ thì điều gì sẽ xảy ra?',
          question: 'Em hãy dự đoán hiện tượng:',
          options: [
            {
              label: 'A',
              text: 'Động cơ sẽ quay ngược chiều, làm cho xe chạy lùi thay vì chạy tiến',
              isOptimal: true,
              feedback: 'Rất chính xác! Động cơ điện một chiều sẽ đảo chiều quay khi đảo cực nguồn điện.'
            },
            {
              label: 'B',
              text: 'Động cơ bị nổ tung ngay lập tức',
              isOptimal: false,
              feedback: 'Động cơ pin 3V an toàn, chỉ quay ngược chiều chứ không cháy nổ.'
            }
          ],
          teacherExplanation: 'Đó là lý do ta phải nối đúng dây đỏ vào cực dương để xe tiến về phía trước.'
        },
        ghiNho: {
          mainTitle: 'BÀI 7 - TIẾT 2: LẮP KHUNG VÀ ĐỘNG CƠ',
          summaryQuote: 'Bước 1: Lắp khung xe chắc chắn. Bước 2: Cố định động cơ và giá pin. Ghi nhớ quy tắc: Dây ĐỎ ➔ Cực DƯƠNG (+), Dây ĐEN ➔ Cực ÂM (-).',
          branches: [
            { label: 'Bước 1: Khung xe', color: 'blue', items: ['Tấm lớn + 2 thanh U dài', '4 thanh thẳng 3 lỗ', 'Siết chặt vít đai ốc'] },
            { label: 'Bước 2: Động cơ & Pin', color: 'emerald', items: ['Tấm 2 lỗ kẹp động cơ', 'Băng dính 2 mặt dán giá pin', 'Dây đỏ (+) / Dây đen (-)'] }
          ],
          sgkNote: 'Ghi nhớ SGK Công nghệ 5, trang 34 - 35.'
        },
        cungCo: [
          {
            id: 'cc-23-1',
            question: 'Dây điện màu đỏ của giá pin được nối vào cực nào của động cơ?',
            options: ['A. Cực dương (+)', 'B. Cực âm (-)', 'C. Nối vào vỏ nhựa', 'D. Nối vào bánh xe'],
            correctIndex: 0,
            explanation: 'Dây đỏ nối vào cực dương của động cơ.'
          }
        ],
        teacherGuide: {
          objectives: ['Học sinh lắp được khung xe vững chắc; gắn được động cơ và giá pin đúng cực âm dương.'],
          keyKnowledge: ['Kỹ năng lắp ghép cơ khí và nối mạch điện một chiều cơ bản.'],
          estimatedMinutes: 35,
          methodologyTips: ['Theo sát từng bàn để kiểm tra mối nối dây điện đỏ/đen của học sinh.'],
          equipmentNeeded: ['Hình 2, 3, 4 SGK tr. 34 - 35, cờ-lê, tua-vít'],
          quickAnswers: [{ question: 'Dây đen nối vào cực nào?', answer: 'Cực âm (-).' }]
        }
      },
      {
        id: 'tiet-24',
        periodNumber: 24,
        lessonId: 'bai-7',
        periodInLesson: 3,
        totalPeriodsInLesson: 4,
        title: 'Tiết 3: Thực hành Bước 3 (Lắp hệ truyền động, bánh xe) & Bước 4 (Chạy thử)',
        focusContent: 'Thực hành Bước 3: Lắp hệ truyền động vào trục và bánh xe (bánh đai, puli, đai truyền cao su, vòng hãm như Hình 5 tr. 36); Bước 4: Lắp 2 pin AA đúng cực, đóng công tắc chạy thử mô hình và tinh chỉnh (Hình 6).',
        sgkPages: 'Trang 36',
        khoiDong: {
          title: 'Khởi động: Truyền lực chuyển động',
          type: 'question',
          question: 'Trục động cơ quay tròn với tốc độ rất nhanh, làm cách nào để truyền lực quay đó sang trục bánh xe giúp chiếc xe lăn bánh trên sàn?',
          options: [
            'A. Nhờ hệ truyền động gồm puli, đai truyền (dây curoa) và bánh đai',
            'B. Thổi hơi gió vào xe',
            'C. Cột dây dù kéo xe đi',
            'D. Xe tự bay trên không khí'
          ],
          correctAnswer: 0,
          explanation: 'Dây đai truyền mắc giữa puli ở động cơ và bánh đai ở trục xe sẽ truyền chuyển động quay làm xe di chuyển.',
          leadIn: 'Hôm nay chúng ta sẽ hoàn thiện khâu kỳ diệu nhất: Lắp bánh xe, lồng dây đai truyền và cho xe lăn bánh!'
        },
        khamPha: [
          {
            id: 'kp-24-1',
            title: '1. Quy trình Bước 3: Lắp hệ truyền động và bánh xe (Hình 5 SGK tr. 36)',
            task: 'Quan sát Hình 5: Xâu trục thẳng dài qua các thanh 3 lỗ; gắn bánh xe, bánh đai và các vòng hãm; lồng đai truyền nối giữa puli động cơ và bánh đai của trục bánh xe.',
            context: 'Độ căng của dây đai truyền phải vừa phải: không quá chùng kẻo trượt, không quá căng kẻo kẹt trục.',
            guidingQuestions: [
              '1. Bánh đai được gắn ở trục bánh trước hay trục bánh sau (trục bánh sau ngay dưới động cơ)?',
              '2. Dây đai truyền được móc vào đâu?',
              '3. Vòng hãm được dùng như thế nào để bánh xe không bị tuột khỏi trục mà vẫn quay trơn?'
            ],
            hiddenAnswer: 'Gắn puli vào đầu trục động cơ; xâu trục bánh sau qua khung xe, lắp bánh đai thẳng hàng với puli; lồng đai truyền cao su; lắp 4 bánh xe vào 2 đầu trục và cố định bằng vòng hãm vừa vặn (để hở 1 khoảng nhỏ cho bánh quay tự do).',
            teacherConclusion: 'Hệ truyền động đai cần được lắp thẳng hàng để dây đai không bị tuột khi động cơ quay nhanh.'
          },
          {
            id: 'kp-24-2',
            title: '2. Quy trình Bước 4: Kiểm tra và vận hành chạy thử (Hình 6 SGK tr. 36)',
            task: 'Quan sát Hình 6: Kiểm tra lại toàn bộ mối ghép; mở nắp giá pin, lắp 2 pin tiểu 1.5V (chú ý lắp đúng cực âm dương có lò xo); đóng công tắc để xe chạy thử nghiệm trên sàn; điều chỉnh nếu xe bị lệch hoặc kẹt bánh.',
            context: 'Lưu ý tr. 36: Khi lắp pin phải mở công tắc (ở vị trí TẮT) và lắp đúng cực pin.',
            guidingQuestions: [
              '1. Cực âm của viên pin (đáy bằng) tiếp xúc với chi tiết nào trong giá pin (lò xo)?',
              '2. Nếu bật công tắc mà xe không chạy thì kiểm tra những chỗ nào (hết pin, lỏng dây điện, kẹt bánh xe)?',
              '3. Nếu xe chạy vòng tròn lệch sang một bên thì cần chỉnh cái gì (chỉnh thẳng trục bánh trước)?'
            ],
            hiddenAnswer: 'Lắp đáy bằng của pin vào lò xo (cực âm), đầu nhô vào cực dương. Bật công tắc kiểm tra. Nếu kẹt bánh xe: nới lỏng vòng hãm. Nếu đai truyền trượt: kiểm tra độ căng của đai. Nếu xe lệch: nắn thẳng 2 trục bánh xe song song.',
            teacherConclusion: 'Kiểm tra và tinh chỉnh là khâu không thể thiếu để biến mô hình thành cỗ xe chạy êm và nhanh.'
          }
        ],
        thaoLuan: {
          title: 'Đua thử nghiệm trên đường đua lớp học',
          groupTask: 'Các nhóm đặt xe tại vạch xuất phát, cùng bật công tắc xem xe nào chạy nhanh, thẳng đường và ổn định nhất. Cùng phát hiện và giúp bạn sửa lỗi nếu xe bạn bị kẹt.',
          durationMinutes: 5,
          guidingPrompts: ['Bánh xe có chạm vào khung xe không?', 'Đai truyền có bị tuột khỏi bánh đai không?'],
          suggestedHints: ['Bôi một chút sáp nến vào trục quay giúp bánh xe quay trơn hơn.'],
          conclusion: 'Tiếng reo hò khi những cỗ xe điện lao vun vút mang lại niềm vui sáng tạo vô bờ!'
        },
        luyenTap: [
          {
            id: 'lt-24-1',
            type: 'true_false',
            statement: 'Khi lắp pin tiểu vào giá pin, đầu bằng (cực âm) của viên pin phải được ấn vào phần có lò xo kim loại.',
            isCorrect: true,
            explanation: 'Quy ước chuẩn mọi khay pin: Lò xo luôn tiếp xúc với cực âm (đáy bằng) của viên pin.',
            difficulty: 'basic'
          },
          {
            id: 'lt-24-2',
            type: 'order',
            instruction: 'Sắp xếp các thao tác kiểm tra vận hành xe điện:',
            items: [
              { id: 't2', text: 'Lắp 2 viên pin AA 1.5V đúng cực vào giá pin' },
              { id: 't1', text: 'Kiểm tra độ trơn tru của các bánh xe và độ căng dây đai' },
              { id: 't3', text: 'Đóng công tắc điện để xe chạy thử trên sàn' },
              { id: 't4', text: 'Tinh chỉnh mối nối hoặc trục xe nếu có hiện tượng kẹt bánh' }
            ],
            correctOrder: ['t1', 't2', 't3', 't4'],
            difficulty: 'intermediate'
          }
        ],
        thucHanh: {
          title: 'Lắp hệ truyền động, bánh xe và chạy thử mô hình',
          objective: 'Hoàn thiện chiếc xe điện chạy bằng pin chạy bon bon trên sàn lớp học khi đóng công tắc.',
          materials: [
            { name: '2 trục xe, 4 bánh xe, vòng hãm', quantity: 'Đầy đủ' },
            { name: 'Puli, bánh đai, đai truyền cao su', quantity: 'Đầy đủ' },
            { name: '2 pin tiểu AA 1.5V mới', quantity: '2 viên' }
          ],
          steps: [
            {
              stepNumber: 3,
              title: 'Lắp hệ truyền động và bánh xe',
              description: 'Xâu trục bánh sau qua khung, lắp bánh đai và puli động cơ, móc đai truyền. Lắp 4 bánh xe và cố định bằng vòng hãm.',
              details: ['Dùng tay quay thử xem bánh xe và động cơ có kéo theo nhau không.']
            },
            {
              stepNumber: 4,
              title: 'Kiểm tra và chạy thử',
              description: 'Lắp 2 pin đúng cực âm dương. Đặt xe xuống sàn phẳng và bật công tắc.',
              details: ['Quan sát xe chạy tiến thẳng về phía trước.']
            }
          ],
          evaluationCriteria: [
            { name: 'Truyền động', description: 'Đai truyền không bị tuột, puli và bánh đai quay êm.' },
            { name: 'Vận hành', description: 'Đóng công tắc là xe chạy ngay, chạy thẳng và ổn định.' }
          ]
        },
        vanDung: {
          title: 'Em vận dụng: Chẩn đoán lỗi kỹ thuật xe điện',
          scenario: 'Khi bạn đóng công tắc, động cơ vẫn kêu "ro ro" quay tít nhưng chiếc xe vẫn đứng yên không chạy.',
          question: 'Em hãy chẩn đoán xem chiếc xe đang gặp phải lỗi gì?',
          options: [
            {
              label: 'A',
              text: 'Dây đai truyền bị tuột ra ngoài hoặc bị chùng nên không truyền được lực quay từ động cơ xuống trục bánh xe',
              isOptimal: true,
              feedback: 'Chẩn đoán rất chính xác! Chỉ cần móc lại đai truyền vào rãnh puli và bánh đai là xe chạy ngay.'
            },
            {
              label: 'B',
              text: 'Hỏng cả cỗ xe phải vứt đi',
              isOptimal: false,
              feedback: 'Không đúng, đây chỉ là lỗi tuột dây đai truyền rất đơn giản.'
            }
          ],
          teacherExplanation: 'Biết tìm nguyên nhân và khắc phục lỗi là kỹ năng thực hành công nghệ tuyệt vời.'
        },
        ghiNho: {
          mainTitle: 'BÀI 7 - TIẾT 3: TRUYỀN ĐỘNG & CHẠY THỬ',
          summaryQuote: 'Bước 3: Lắp hệ truyền động đai thẳng hàng, gắn 4 bánh xe vừa vặn. Bước 4: Lắp pin đúng cực, đóng công tắc cho xe chạy thử và tinh chỉnh.',
          branches: [
            { label: 'Hệ truyền động', color: 'blue', items: ['Puli trên trục động cơ', 'Bánh đai trên trục sau', 'Đai truyền cao su nối giữa'] },
            { label: 'Chạy thử', color: 'emerald', items: ['Pin 1.5V đúng cực lò xo', 'Đóng công tắc kiểm tra', 'Tinh chỉnh bánh không kẹt'] }
          ],
          sgkNote: 'Ghi nhớ SGK Công nghệ 5, trang 36.'
        },
        cungCo: [
          {
            id: 'cc-24-1',
            question: 'Dây đai truyền có nhiệm vụ gì trên mô hình xe điện?',
            options: [
              'A. Truyền chuyển động quay từ trục động cơ sang trục bánh xe',
              'B. Trang trí cho xe đẹp hơn',
              'C. Buộc giữ viên pin',
              'D. Làm cản trở xe chạy'
            ],
            correctIndex: 0,
            explanation: 'Dây đai truyền lực quay từ động cơ đến bánh đai của trục bánh xe.'
          }
        ],
        teacherGuide: {
          objectives: ['Học sinh lắp được hệ truyền động đai; lắp pin đúng cực và vận hành xe điện chạy thành công.'],
          keyKnowledge: ['Cơ cấu truyền động đai và nguyên lý vận hành xe điện mini.'],
          estimatedMinutes: 35,
          methodologyTips: ['Dành khu vực sàn lớp học sạch sẽ làm đường đua chạy thử cho học sinh.'],
          equipmentNeeded: ['Pin AA 1.5V, đường chạy thử, Hình 5 & 6 SGK tr. 36'],
          quickAnswers: [{ question: 'Lắp pin: đầu nào vào lò xo?', answer: 'Cực âm (đáy bằng).' }]
        }
      },
      {
        id: 'tiet-25',
        periodNumber: 25,
        lessonId: 'bai-7',
        periodInLesson: 4,
        totalPeriodsInLesson: 4,
        title: 'Tiết 4: Giới thiệu, đánh giá & Sáng tạo cải tiến mô hình',
        focusContent: 'Trưng bày sản phẩm; đánh giá theo 4 tiêu chí chuẩn SGK tr. 37 (Đúng và đủ chi tiết; Đúng hình dạng gọn gàng; Mối ghép chắc chắn; Xe chạy được khi đóng công tắc); thiết kế và lắp thêm chi tiết sáng tạo (Hình 8 tr. 37).',
        sgkPages: 'Trang 37',
        khoiDong: {
          title: 'Khởi động: Diễu hành xe điện tí hon',
          type: 'quick_quiz',
          question: 'Các đội xe hãy cùng bật đèn pin, khởi động động cơ và chuẩn bị bước vào cuộc thi bình chọn "Xe điện thông minh xuất sắc nhất"!',
          options: [
            'A. Xe của nhóm em sẵn sàng lăn bánh!',
            'B. Xe cần kiểm tra lại đai truyền một chút',
            'C. Cả lớp cùng thi tài sôi nổi',
            'D. Tất cả các ý kiến trên'
          ],
          correctAnswer: 3,
          explanation: 'Không khí hào hứng của ngày hội công nghệ!',
          leadIn: 'Hãy cùng đối chiếu với 4 tiêu chí trong phiếu đánh giá để xếp loại sản phẩm!'
        },
        khamPha: [
          {
            id: 'kp-25-1',
            title: '1. Đánh giá sản phẩm theo 4 tiêu chí SGK tr. 37',
            task: 'Đọc phiếu đánh giá sản phẩm gồm 4 tiêu chí: (1) Đúng và đủ chi tiết; (2) Đúng hình dạng, gọn gàng; (3) Mối ghép chắc chắn; (4) Xe chạy được khi đóng công tắc. Đánh giá theo 3 mức (Tốt, Đạt, Cần cố gắng).',
            context: 'Đánh giá năng lực kỹ thuật và mức độ hoàn thiện sản phẩm.',
            guidingQuestions: [
              '1. Xe có lắp đủ 4 bánh xe, động cơ, giá pin và đai truyền không?',
              '2. Dây điện có được buộc gọn gàng hay để lùng bùng chạm sàn?',
              '3. Khi đóng công tắc xe có chạy êm trên sàn không?'
            ],
            hiddenAnswer: 'Các nhóm tự đánh giá và chấm chéo cho nhau theo 4 tiêu chí. Nhóm xuất sắc đạt 4 mặt cười xanh: đủ chi tiết, khung xe vuông vắn, dây gọn, xe chạy nhanh và thẳng hướng.',
            teacherConclusion: 'Bộ tiêu chí giúp các em rèn luyện tính cẩn thận, tác phong kỹ thuật công nghiệp chuẩn mực.'
          },
          {
            id: 'kp-25-2',
            title: '2. Ý tưởng sáng tạo cải tiến mô hình (Hình 8 SGK tr. 37)',
            task: 'Quan sát Hình 8: Các bạn học sinh đang lắp thêm các chi tiết vào mô hình xe điện: Lắp thêm đèn pha, lắp thêm thùng xe chở hàng, lắp thêm ghế ngồi cho người lái, lắp cản trước thể thao.',
            context: 'Phát huy tính sáng tạo không giới hạn từ bộ mô hình kỹ thuật.',
            guidingQuestions: [
              '1. Em có thể dùng thêm những thanh nào để làm mui xe hoặc thùng xe chở hàng?',
              '2. Có thể gắn thêm cờ hiệu hoặc biển số xe độc đáo không?'
            ],
            hiddenAnswer: 'Ý tưởng sáng tạo: Dùng thanh chữ U và tấm ba lỗ dựng khung thùng xe chở hàng; dán thêm đèn LED nhỏ phía trước làm đèn pha; dùng giấy bìa cắt dán cánh gió thể thao phía sau...',
            teacherConclusion: 'Sáng tạo cải tiến giúp biến sản phẩm theo mẫu thành sản phẩm độc bản mang phong cách riêng của em.'
          }
        ],
        thaoLuan: {
          title: 'Thuyết trình sản phẩm xe điện nhóm',
          groupTask: 'Đại diện mỗi nhóm đặt xe lên bục, giới thiệu: Tên xe, các chi tiết sáng tạo thêm và biểu diễn cho xe chạy 1 mét trước cả lớp.',
          durationMinutes: 5,
          guidingPrompts: ['Giới thiệu tên xe?', 'Chia sẻ kỷ niệm khi khắc phục sự cố tuột đai truyền?'],
          suggestedHints: ['"Nhóm em đặt tên là Xe Tốc Độ Xanh, chúng em đã lắp thêm thùng chở hàng bằng bìa màu!"'],
          conclusion: 'Kỹ năng thuyết trình tự tin làm nổi bật giá trị sản phẩm kỹ thuật.'
        },
        luyenTap: [
          {
            id: 'lt-25-1',
            type: 'mcq',
            question: 'Tiêu chí nào thể hiện rõ nhất xe điện hoạt động tốt về mặt điện cơ khí?',
            options: [
              'A. Xe có màu sơn sặc sỡ',
              'B. Xe chạy được trơn tru khi đóng công tắc',
              'C. Xe làm bằng vật liệu đắt tiền nhất',
              'D. Xe nặng nhất lớp'
            ],
            correctAnswer: 1,
            explanation: 'Mục đích chính của mô hình là xe phải tự vận hành chạy được khi cấp nguồn điện.',
            difficulty: 'basic'
          },
          {
            id: 'lt-25-2',
            type: 'true_false',
            statement: 'Sau khi hoàn thành mô hình mẫu, học sinh có thể lắp thêm các chi tiết theo ý tưởng sáng tạo của mình.',
            isCorrect: true,
            explanation: 'Đúng theo khuyến khích sáng tạo SGK trang 37.',
            difficulty: 'basic'
          }
        ],
        vanDung: {
          title: 'Em vận dụng: Chăm sóc và bảo quản đồ dùng kĩ thuật',
          scenario: 'Sau khi kết thúc bài học, các bạn cần thu dọn bộ lắp ghép kĩ thuật.',
          question: 'Quy trình tháo dỡ và cất giữ nào sau đây là ĐÚNG QUY ĐỊNH và BẢO VỆ PIN?',
          options: [
            {
              label: 'A',
              text: 'Tháo pin ra khỏi giá pin để tránh pin bị chảy nước làm rỉ sét lò xo, tháo rời ốc vít và phân loại chi tiết gọn gàng vào từng ngăn hộp',
              isOptimal: true,
              feedback: 'Rất mẫu mực! Tháo pin khi không sử dụng là nguyên tắc sống còn bảo vệ thiết bị điện tử.'
            },
            {
              label: 'B',
              text: 'Cứ để nguyên pin trong xe rồi vứt bừa vào đáy cặp',
              isOptimal: false,
              feedback: 'Pin để lâu sẽ bị chảy axit làm hỏng giá pin và dây điện.'
            }
          ],
          teacherExplanation: 'Ý thức giữ gìn dụng cụ lao động là phẩm chất cốt lõi của người làm kỹ thuật.'
        },
        ghiNho: {
          mainTitle: 'TỔNG KẾT BÀI 7: LẮP RÁP XE ĐIỆN CHẠY PIN',
          summaryQuote: 'Đánh giá theo 4 tiêu chí: (1) Đúng đủ chi tiết; (2) Đúng hình dạng gọn gàng; (3) Mối ghép chắc chắn; (4) Xe chạy được khi đóng công tắc. Luôn tháo pin ra khỏi giá pin sau khi chơi xong.',
          branches: [
            { label: '4 tiêu chí đánh giá', color: 'blue', items: ['Đúng & đủ chi tiết', 'Hình dạng gọn gàng', 'Mối ghép chắc chắn', 'Xe chạy khi đóng công tắc'] },
            { label: 'Bảo quản thiết bị', color: 'emerald', items: ['Tháo rời pin cất riêng', 'Xếp chi tiết theo ngăn', 'Đếm đủ ốc vít, dụng cụ'] }
          ],
          sgkNote: 'Ghi nhớ SGK Công nghệ 5, trang 37.'
        },
        cungCo: [
          {
            id: 'cc-25-1',
            question: 'Hành động nào bắt buộc phải làm đối với giá pin sau khi ngừng sử dụng mô hình xe điện?',
            options: [
              'A. Tháo các viên pin ra khỏi giá cất nơi khô ráo',
              'B. Để nguyên pin trong máy mãi mãi',
              'C. Ngâm giá pin vào chậu nước',
              'D. Đốt pin dưới ngọn lửa'
            ],
            correctIndex: 0,
            explanation: 'Tháo pin ra để chống rò rỉ hóa chất làm rỉ sét các tiếp điểm kim loại.'
          }
        ],
        teacherGuide: {
          objectives: ['Đánh giá sản phẩm theo phiếu tiêu chí; biết sáng tạo thêm chi tiết và có thói quen bảo quản thiết bị an toàn.'],
          keyKnowledge: ['4 tiêu chí đánh giá và quy tắc tháo pin bảo quản.'],
          estimatedMinutes: 35,
          methodologyTips: ['Tổ chức trao giải thưởng "Cúp Bàn Tay Vàng Kỹ Thuật" cho các nhóm.'],
          equipmentNeeded: ['Phiếu đánh giá sản phẩm SGK tr. 37, hộp đựng chi tiết'],
          quickAnswers: [{ question: 'Có mấy tiêu chí đánh giá?', answer: '4 tiêu chí.' }]
        }
      }
    ]
  },
  {
    id: 'danh-gia-hk2-giua',
    number: 'Tiết 26',
    title: 'Kiểm tra, đánh giá định kì Giữa học kì 2',
    partId: 'part-2',
    partTitle: 'PHẦN HAI: THỦ CÔNG KĨ THUẬT',
    totalPeriods: 1,
    sgkPages: 'Ôn tập Bài 6 & Bài 7',
    isEvaluation: true,
    periods: [
      {
        id: 'tiet-26',
        periodNumber: 26,
        lessonId: 'danh-gia-hk2-giua',
        periodInLesson: 1,
        totalPeriodsInLesson: 1,
        title: 'Tiết 26: Ôn tập và Đánh giá định kì Giữa học kì 2',
        focusContent: 'Kiểm tra, đánh giá định kì kiến thức và kỹ năng thực hành: Sử dụng tủ lạnh đúng cách, an toàn (Bài 6) và Lắp ráp, vận hành mô hình xe điện chạy pin (Bài 7).',
        sgkPages: 'Trang 26 – 37',
        khoiDong: {
          title: 'Khởi động: Khởi động đường đua tri thức GK2',
          type: 'quick_quiz',
          question: 'Em đã sẵn sàng tham gia bài kiểm tra định kì giữa học kì 2 để thể hiện sự am hiểu về tủ lạnh gia đình và kỹ năng lắp ráp xe điện chưa?',
          options: [
            'A. Em đã sẵn sàng và rất tự tin!',
            'B. Em muốn xem lại quy tắc tủ lạnh',
            'C. Em muốn ôn lại cách nối dây pin',
            'D. Cả lớp cùng quyết tâm đạt điểm cao'
          ],
          correctAnswer: 3,
          explanation: 'Chúc các em hoàn thành xuất sắc bài kiểm tra giữa kì 2!',
          leadIn: 'Cùng làm bài kiểm tra trắc nghiệm và tình huống thực tiễn!'
        },
        khamPha: [
          {
            id: 'kp-26-1',
            title: 'Hệ thống hóa kiến thức trọng tâm Bài 6 & Bài 7',
            task: 'Ôn lại 2 bài: (1) Bài 6: 2 khoang tủ lạnh, 4 lưu ý sắp xếp thực phẩm, biểu hiện bất thường & cách khử mùi; (2) Bài 7: 4 bộ phận xe điện, 4 bước lắp ráp, quy tắc nối dây đỏ/đen, 4 tiêu chí đánh giá.',
            context: 'Hai mảng kiến thức: Thiết bị điện gia đình và Lắp ráp mô hình kĩ thuật.',
            guidingQuestions: [
              '1. Thịt cá bảo quản ở khoang làm lạnh được bao lâu, khoang cấp đông bao lâu?',
              '2. Dây đỏ của giá pin nối vào cực nào của động cơ?',
              '3. Khi tủ lạnh bị chảy nước lênh láng ra sàn, việc đầu tiên cần làm là gì?'
            ],
            hiddenAnswer: 'Bài 6: Làm lạnh 1-7°C (3-5 ngày), cấp đông <0°C (vài tuần-vài tháng); báo người lớn khi có sự cố; khử mùi bằng chanh, bã cà phê. Bài 7: Dây đỏ nối cực dương (+), dây đen cực âm (-); 4 bước lắp ráp theo trình tự; 4 tiêu chí đánh giá.',
            teacherConclusion: 'Nắm chắc lý thuyết gắn liền với kỹ năng thực hành đời sống.'
          }
        ],
        thaoLuan: {
          title: 'Giải đáp nhanh các tình huống thực tế',
          groupTask: 'Các nhóm thảo luận nhanh 2 câu hỏi tình huống trước khi làm bài thi cá nhân.',
          durationMinutes: 4,
          guidingPrompts: ['Bảo quản thức ăn chín', 'Khắc phục xe điện bị kẹt bánh'],
          suggestedHints: ['Bọc kín thức ăn; kiểm tra độ hở giữa vòng hãm và bánh xe.'],
          conclusion: 'Học sinh nắm vững phương pháp giải quyết vấn đề.'
        },
        luyenTap: [
          {
            id: 'lt-26-1',
            type: 'mcq',
            question: 'Khi sử dụng tủ lạnh, hành động nào sau đây là ĐÚNG QUY TẮC?',
            options: [
              'A. Để bát canh đang sôi sùng sục vào tủ',
              'B. Bọc kín thực phẩm hoặc để trong hộp có nắp đậy',
              'C. Nhồi nhét chật kín không còn khe hở',
              'D. Không bao giờ lau chùi vệ sinh tủ'
            ],
            correctAnswer: 1,
            explanation: 'Bọc kín thực phẩm giúp không bị khô, không lẫn mùi và ngăn ngừa vi khuẩn.',
            difficulty: 'basic'
          },
          {
            id: 'lt-26-2',
            type: 'matching',
            instruction: 'Nối đúng bộ phận xe điện với chức năng:',
            leftItems: [
              { id: 'b7-p', text: 'Giá 2 pin tiểu 1.5V' },
              { id: 'b7-m', text: 'Động cơ điện' },
              { id: 'b7-d', text: 'Đai truyền cao su' },
              { id: 'b7-k', text: 'Khung xe bằng tấm lớn' }
            ],
            rightItems: [
              { id: 'f7-p', text: 'Cung cấp nguồn điện 3V' },
              { id: 'f7-m', text: 'Biến điện năng thành chuyển động quay' },
              { id: 'f7-d', text: 'Truyền lực quay sang trục bánh xe' },
              { id: 'f7-k', text: 'Nâng đỡ toàn bộ các chi tiết trên xe' }
            ],
            correctPairs: [
              { leftId: 'b7-p', rightId: 'f7-p' },
              { leftId: 'b7-m', rightId: 'f7-m' },
              { leftId: 'b7-d', rightId: 'f7-d' },
              { leftId: 'b7-k', rightId: 'f7-k' }
            ],
            difficulty: 'intermediate'
          }
        ],
        vanDung: {
          title: 'Em vận dụng: Đóng vai kỹ sư nhí xử lý sự cố',
          scenario: 'Chiếc xe điện của nhóm sau khi bật công tắc thì bánh xe sau chỉ quay giật giật rồi dừng lại.',
          question: 'Em hãy nêu các bước kiểm tra theo thứ tự hợp lý nhất:',
          options: [
            {
              label: 'A',
              text: '1. Kiểm tra pin còn điện không ➔ 2. Kiểm tra dây điện đỏ/đen có bị tuột mối nối không ➔ 3. Kiểm tra bánh xe có bị ép chặt vào khung gây kẹt không',
              isOptimal: true,
              feedback: 'Trình tự kiểm tra rất logic và đúng bài bản kỹ thuật!'
            },
            {
              label: 'B',
              text: 'Lấy búa đập vào động cơ',
              isOptimal: false,
              feedback: 'Hành vi phá hoại thiết bị.'
            }
          ],
          teacherExplanation: 'Kiểm tra nguồn ➔ mạch điện ➔ cơ khí là quy trình chẩn đoán lỗi tiêu chuẩn.'
        },
        ghiNho: {
          mainTitle: 'TỔNG HỢP KIẾN THỨC GIỮA HỌC KÌ 2',
          summaryQuote: 'Làm chủ cách dùng tủ lạnh: 2 khoang, 4 lưu ý, khử mùi tự nhiên. Thành thạo lắp ráp mô hình xe điện chạy pin: 4 bộ phận, 4 bước lắp, an toàn điện một chiều.',
          branches: [
            { label: 'Bài 6: Tủ lạnh', color: 'blue', items: ['Khoang cấp đông (<0°C)', 'Khoang làm lạnh (1-7°C)', 'Khử mùi chanh, bã cà phê'] },
            { label: 'Bài 7: Xe điện', color: 'emerald', items: ['4 bộ phận chính', 'Dây đỏ (+), dây đen (-)', 'Hệ truyền động đai'] }
          ],
          sgkNote: 'Khung ôn tập chuẩn Giữa học kì 2.'
        },
        cungCo: [
          {
            id: 'cc-26-1',
            question: 'Khi lắp ráp mô hình xe điện, thứ tự thực hiện đúng là:',
            options: [
              'A. Lắp khung xe ➔ Lắp động cơ, giá pin ➔ Lắp truyền động, bánh xe ➔ Kiểm tra chạy thử',
              'B. Lắp bánh xe trước ➔ Lắp khung xe sau cùng',
              'C. Lắp pin trước rồi mới dựng khung',
              'D. Tùy thích muốn làm bước nào trước cũng được'
            ],
            correctIndex: 0,
            explanation: 'Đúng theo trình tự 4 bước kỹ thuật chuẩn SGK tr. 34 - 36.'
          }
        ],
        teacherGuide: {
          objectives: ['Đánh giá định kì kiến thức Bài 6 và Bài 7; phân loại học sinh theo chuẩn đầu ra.'],
          keyKnowledge: ['Kiến thức tủ lạnh gia đình và lắp ráp mô hình xe điện.'],
          estimatedMinutes: 35,
          methodologyTips: ['Kết hợp câu hỏi trắc nghiệm và thao tác thực hành kiểm tra xe điện.'],
          equipmentNeeded: ['Đề kiểm tra giữa HK2, mô hình xe điện mẫu'],
          quickAnswers: [{ question: 'Số lượng bài ôn tập?', answer: 'Bài 6 và Bài 7.' }]
        }
      }
    ]
  }
];
