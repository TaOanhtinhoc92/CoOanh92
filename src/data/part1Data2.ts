import { Lesson } from '../types';

export const PART_1_LESSONS_PART2: Lesson[] = [
  {
    id: 'bai-4',
    number: 4,
    title: 'Thiết kế sản phẩm',
    partId: 'part-1',
    partTitle: 'PHẦN MỘT: CÔNG NGHỆ VÀ ĐỜI SỐNG',
    totalPeriods: 4,
    sgkPages: 'Trang 17 – 18',
    periods: [
      {
        id: 'tiet-11',
        periodNumber: 11,
        lessonId: 'bai-4',
        periodInLesson: 1,
        totalPeriodsInLesson: 4,
        title: 'Tiết 1: Hình thành ý tưởng về sản phẩm',
        focusContent: 'Học xong câu đố đồng hồ, tìm hiểu các kiểu dáng đồng hồ trong Hình 1 SGK (trang 17); lựa chọn loại đồng hồ yêu thích và hình thành ý tưởng thiết kế chiếc đồng hồ đồ chơi.',
        sgkPages: 'Trang 17',
        khoiDong: {
          title: 'Khởi động: Giải câu đố dân gian về đồng hồ',
          type: 'question',
          question: 'Em hãy đọc câu đố trong SGK tr. 17: "Có kim mà chẳng biết khâu / Suốt ngày chạy mãi lâu lâu mới dừng / Không tay, không mắt thế nhưng / Chỉ ra chính xác đúng từng phút giây." Là cái gì?',
          options: [
            'A. Chiếc đồng hồ',
            'B. Chiếc máy khâu',
            'C. Chiếc la bàn',
            'D. Chiếc nhiệt kế'
          ],
          correctAnswer: 0,
          explanation: 'Đó chính là chiếc đồng hồ - vật dụng quen thuộc giúp con người quản lý thời gian.',
          leadIn: 'Trong bài học này, các em sẽ tự tay đóng vai kỹ sư thiết kế một chiếc đồng hồ đeo tay đồ chơi độc đáo!'
        },
        khamPha: [
          {
            id: 'kp-11-1',
            title: '1. Khám phá các loại đồng hồ trong cuộc sống (Hình 1 SGK tr. 17)',
            task: 'Quan sát Hình 1 SGK và gọi tên các loại đồng hồ: a) Đồng hồ báo thức để bàn; b) Đồng hồ gỗ để bàn; c) Đồng hồ quả lắc treo tường; d) Đồng hồ bỏ túi; e) Đồng hồ cát; g) Đồng hồ treo tường hình vuông; h) Đồng hồ điện tử số; i) Đồng hồ báo thức chuông đôi; k) Đồng hồ đeo tay kim số.',
            context: 'Có rất nhiều loại đồng hồ với kiểu dáng, chức năng và cách hiển thị giờ khác nhau.',
            guidingQuestions: [
              '1. Loại đồng hồ nào thuận tiện mang theo trên cổ tay mọi lúc mọi nơi?',
              '2. Đồng hồ cát hoạt động dựa trên nguyên lý gì?',
              '3. Đồng hồ điện tử số và đồng hồ kim khác nhau ở điểm nào?'
            ],
            hiddenAnswer: 'Hình 1 gồm nhiều loại đồng hồ: để bàn, treo tường, bỏ túi, đồng hồ cát, đồng hồ điện tử và đồng hồ đeo tay. Mỗi loại có ưu điểm riêng: đồng hồ đeo tay tiện lợi khi di chuyển; đồng hồ cát dùng đo khoảng thời gian ngắn; đồng hồ điện tử dễ đọc số.',
            teacherConclusion: 'Hình thành ý tưởng thiết kế bắt đầu từ việc lựa chọn loại sản phẩm phù hợp với nhu cầu sử dụng thực tế.'
          },
          {
            id: 'kp-11-2',
            title: '2. Nêu ý tưởng thiết kế đồng hồ đồ chơi',
            task: 'Em hãy lựa chọn loại đồng hồ mình yêu thích và nêu ý tưởng: Thiết kế đồng hồ gì? Dùng cho ai? Có hình dáng màu sắc thế nào?',
            context: 'SGK định hướng thiết kế mô hình: Đồng hồ đeo tay đồ chơi làm bằng giấy bìa.',
            guidingQuestions: [
              '1. Em chọn thiết kế đồng hồ để bàn hay đồng hồ đeo tay?',
              '2. Mặt đồng hồ hình tròn, hình vuông hay hình mặt thú?',
              '3. Đồng hồ sẽ có mấy kim (kim giờ, kim phút)?'
            ],
            hiddenAnswer: 'Ý tưởng thiết kế: Làm chiếc đồng hồ đeo tay đồ chơi bằng giấy bìa màu, mặt số hình tròn có đủ 12 chữ số, có kim ngắn (kim giờ) và kim dài (kim phút), có quai đeo vừa cổ tay và núm vặn điều chỉnh giờ.',
            teacherConclusion: 'Ý tưởng rõ ràng về hình dáng, kích thước và công dụng là nền tảng vững chắc để vẽ bản phác thảo.'
          }
        ],
        thaoLuan: {
          title: 'Thảo luận nhóm: Chia sẻ ý tưởng đồng hồ sáng tạo',
          groupTask: 'Nhóm 4 bạn: Từng bạn mô tả ý tưởng chiếc đồng hồ mơ ước của mình (màu sắc, họa tiết trang trí, hình dáng mặt số). Cả nhóm góp ý để ý tưởng độc đáo hơn.',
          durationMinutes: 4,
          guidingPrompts: ['Mặt đồng hồ vẽ hình gì?', 'Quai đeo có hoa văn gì?', 'Cách cố định quai đeo vào cổ tay?'],
          suggestedHints: ['Có thể trang trí mặt đồng hồ hình mặt cười, bông hoa hoặc siêu nhân.'],
          conclusion: 'Sự sáng tạo của các em làm cho sản phẩm trở nên sinh động và đậm dấu ấn cá nhân.'
        },
        luyenTap: [
          {
            id: 'lt-11-1',
            type: 'image_select',
            question: 'Trong các loại đồng hồ ở Hình 1 SGK tr. 17, đồng hồ nào dùng để đeo ở cổ tay?',
            options: [
              { id: 'opt-1', label: 'Đồng hồ quả lắc treo tường', iconName: 'Clock', isCorrect: false, reason: 'Treo trên tường nhà' },
              { id: 'opt-2', label: 'Đồng hồ đeo tay dây da (Hình 1k)', iconName: 'Watch', isCorrect: true, reason: 'Có quai đeo vừa vặn vào cổ tay' },
              { id: 'opt-3', label: 'Đồng hồ cát (Hình 1e)', iconName: 'Hourglass', isCorrect: false, reason: 'Để trên bàn' }
            ],
            difficulty: 'basic'
          },
          {
            id: 'lt-11-2',
            type: 'true_false',
            statement: 'Để thiết kế đồng hồ đồ chơi bằng bìa, bước đầu tiên là phải lấy kéo cắt ngay không cần suy nghĩ ý tưởng.',
            isCorrect: false,
            explanation: 'Sai. Bước đầu tiên luôn là "Hình thành ý tưởng về sản phẩm" rồi mới đến vẽ phác thảo và chuẩn bị vật liệu.',
            difficulty: 'basic'
          }
        ],
        vanDung: {
          title: 'Em vận dụng: Đặt tên cho chiếc đồng hồ',
          scenario: 'Bạn Mai muốn thiết kế một chiếc đồng hồ đeo tay đồ chơi để nhắc nhở mình thức dậy đúng giờ tập thể dục mỗi sáng.',
          question: 'Em hãy chọn một cái tên và khẩu hiệu phù hợp cho chiếc đồng hồ của Mai:',
          options: [
            {
              label: 'A',
              text: 'Tên: "Đồng hồ Chim Sớm" - Khẩu hiệu: "Dậy sớm khỏe mạnh, đón ngày vui tươi!"',
              isOptimal: true,
              feedback: 'Tên gọi rất ý nghĩa và truyền cảm hứng dậy sớm học tập, rèn luyện thân thể.'
            },
            {
              label: 'B',
              text: 'Tên: "Đồng hồ Ngủ Nướng" - Khẩu hiệu: "Cứ ngủ tiếp đi"',
              isOptimal: false,
              feedback: 'Khẩu hiệu này trái với mục tiêu dậy sớm tập thể dục.'
            }
          ],
          teacherExplanation: 'Đặt tên cho sản phẩm giúp ta có thêm động lực hoàn thành và sử dụng sản phẩm hữu ích.'
        },
        ghiNho: {
          mainTitle: 'BÀI 4 - TIẾT 1: HÌNH THÀNH Ý TƯỞNG',
          summaryQuote: 'Bước 1 của quy trình thiết kế là Hình thành ý tưởng: Xác định rõ sản phẩm cần làm, kiểu dáng, màu sắc, chức năng và đối tượng sử dụng.',
          branches: [
            { label: 'Sản phẩm chọn', color: 'blue', items: ['Đồng hồ đeo tay đồ chơi', 'Chất liệu giấy bìa'] },
            { label: 'Ý tưởng cấu tạo', color: 'emerald', items: ['Mặt số tròn 12 số', 'Bộ kim giờ/phút', 'Quai đeo & núm vặn'] }
          ],
          sgkNote: 'Ghi nhớ SGK Công nghệ 5, trang 17.'
        },
        cungCo: [
          {
            id: 'cc-11-1',
            question: 'Sản phẩm nào được chọn để thiết kế mẫu trong bài học này?',
            options: ['A. Chiếc ô tô tải', 'B. Chiếc đồng hồ đeo tay đồ chơi', 'C. Chiếc quạt giấy', 'D. Ngôi nhà gỗ'],
            correctIndex: 1,
            explanation: 'SGK hướng dẫn thiết kế chiếc đồng hồ đeo tay đồ chơi bằng bìa.'
          }
        ],
        teacherGuide: {
          objectives: ['Nêu được ý tưởng thiết kế một chiếc đồng hồ đeo tay đồ chơi bằng giấy bìa.'],
          keyKnowledge: ['Khái niệm và cách hình thành ý tưởng sản phẩm thủ công.'],
          estimatedMinutes: 35,
          methodologyTips: ['Tổ chức giải câu đố đầu giờ tạo không khí hào hứng.'],
          equipmentNeeded: ['Tranh ảnh các loại đồng hồ Hình 1 SGK tr. 17'],
          quickAnswers: [{ question: 'Sản phẩm mẫu là gì?', answer: 'Đồng hồ đeo tay bằng giấy bìa.' }]
        }
      },
      {
        id: 'tiet-12',
        periodNumber: 12,
        lessonId: 'bai-4',
        periodInLesson: 2,
        totalPeriodsInLesson: 4,
        title: 'Tiết 2: Vẽ phác thảo sản phẩm & Lựa chọn vật liệu, dụng cụ',
        focusContent: 'Nắm vững bản vẽ phác thảo đồng hồ đeo tay (Hình 2 tr. 18) gồm 4 bộ phận: mặt số, quai đeo, núm vặn, bộ kim; lựa chọn đúng vật liệu (giấy bìa) và dụng cụ (kéo, hồ dán, màu vẽ).',
        sgkPages: 'Trang 18',
        khoiDong: {
          title: 'Khởi động: Chuẩn bị đồ nghề thiết kế',
          type: 'quick_quiz',
          question: 'Để làm chiếc đồng hồ đeo tay đồ chơi theo SGK tr. 18, chúng ta cần chuẩn bị những dụng cụ và vật liệu nào?',
          options: [
            'A. Búa đinh, cưa sắt, xi măng',
            'B. Giấy bìa, kéo thủ công, hồ dán, màu vẽ',
            'C. Máy hàn điện, que hàn, thép',
            'D. Kim chỉ may quần áo'
          ],
          correctAnswer: 1,
          explanation: 'Vật liệu chính là giấy bìa, dụng cụ gồm kéo cắt giấy, hồ dán và bút màu vẽ.',
          leadIn: 'Hãy cùng tìm hiểu bản vẽ phác thảo mẫu và tự tay vẽ bản phác thảo đồng hồ của mình!'
        },
        khamPha: [
          {
            id: 'kp-12-1',
            title: '1. Phân tích bản vẽ phác thảo sản phẩm (Hình 2 SGK tr. 18)',
            task: 'Quan sát Hình 2 SGK tr. 18 và cho biết bản vẽ phác thảo đồng hồ đeo tay gồm những bộ phận nào và có những yêu cầu gì?',
            context: 'Bản vẽ phác thảo thể hiện chi tiết từng bộ phận tách rời và mô hình hoàn thiện.',
            guidingQuestions: [
              '1. Chiếc đồng hồ gồm 4 chi tiết chính nào?',
              '2. Yêu cầu sản phẩm được ghi trong bản vẽ là gì?',
              '3. Vật liệu và dụng cụ được quy định cụ thể ra sao?'
            ],
            hiddenAnswer: 'Gồm 4 chi tiết: (1) Mặt số; (2) Quai đeo; (3) Núm vặn; (4) Bộ kim đồng hồ. Yêu cầu sản phẩm: Đúng hình dạng, chắc chắn, thẩm mĩ. Vật liệu: Giấy bìa. Dụng cụ: Kéo, hồ dán, màu vẽ.',
            teacherConclusion: 'Bản vẽ phác thảo thể hiện rõ cấu tạo từng chi tiết, kích thước tương đối và yêu cầu kỹ thuật cần đạt.'
          },
          {
            id: 'kp-12-2',
            title: '2. Thực hành vẽ phác thảo vào vở',
            task: 'Em hãy tự tay vẽ phác thảo 4 bộ phận của chiếc đồng hồ đeo tay mà em dự định làm vào giấy hoặc vở bài tập.',
            context: 'Rèn luyện kỹ năng vẽ kỹ thuật cơ bản của học sinh tiểu học.',
            guidingQuestions: [
              '1. Vẽ mặt số hình tròn hoặc vuông có đường kính khoảng 4 - 5 cm.',
              '2. Vẽ dải quai đeo có chiều dài vừa với cổ tay (khoảng 15 - 18 cm).',
              '3. Vẽ bộ kim: kim ngắn chỉ giờ to hơn, kim dài chỉ phút thon dài hơn.'
            ],
            hiddenAnswer: 'Học sinh hoàn thành bản vẽ phác thảo gồm đầy đủ 4 chi tiết và ghi chú tên gọi rõ ràng.',
            teacherConclusion: 'Vẽ phác thảo giúp chúng ta ước lượng chính xác kích thước trước khi cắt giấy, tránh bị hỏng vật liệu.'
          }
        ],
        thaoLuan: {
          title: 'Thảo luận nhóm: Góp ý bản vẽ phác thảo cho bạn',
          groupTask: 'Đổi chéo bản vẽ phác thảo cho bạn bên cạnh. Kiểm tra xem bạn đã vẽ đủ 4 bộ phận chưa và kích thước bộ kim có cân đối với mặt số không.',
          durationMinutes: 4,
          guidingPrompts: ['Mặt số có ghi đủ từ số 1 đến 12 không?', 'Quai đeo có quá ngắn hay quá dài?'],
          suggestedHints: ['Kim giờ phải ngắn hơn kim phút để dễ phân biệt.'],
          conclusion: 'Góp ý chân thành giúp bản vẽ hoàn thiện hơn trước khi tiến hành cắt dán.'
        },
        luyenTap: [
          {
            id: 'lt-12-1',
            type: 'matching',
            instruction: 'Nối đúng tên chi tiết đồng hồ với đặc điểm tương ứng:',
            leftItems: [
              { id: 'c-mat', text: 'Mặt số đồng hồ' },
              { id: 'c-kim', text: 'Bộ kim đồng hồ' },
              { id: 'c-quai', text: 'Quai đeo đồng hồ' },
              { id: 'c-num', text: 'Núm vặn' }
            ],
            rightItems: [
              { id: 'd-mat', text: 'Hình tròn, ghi các chữ số từ 1 đến 12' },
              { id: 'd-kim', text: 'Gồm kim ngắn chỉ giờ và kim dài chỉ phút' },
              { id: 'd-quai', text: 'Dải bìa dài dùng để quấn vừa cổ tay' },
              { id: 'd-num', text: 'Chi tiết nhỏ gắn ở cạnh mặt số để chỉnh giờ' }
            ],
            correctPairs: [
              { leftId: 'c-mat', rightId: 'd-mat' },
              { leftId: 'c-kim', rightId: 'd-kim' },
              { leftId: 'c-quai', rightId: 'd-quai' },
              { leftId: 'c-num', rightId: 'd-num' }
            ],
            difficulty: 'basic'
          }
        ],
        vanDung: {
          title: 'Em vận dụng: Lựa chọn vật liệu an toàn và thẩm mĩ',
          scenario: 'Bạn Nam có 3 loại bìa: bìa carton cũ dày cộp rất cứng khó cắt, bìa màu thủ công mỏng vừa phải phẳng đẹp, và tờ giấy báo cũ mềm nhũn.',
          question: 'Nam nên chọn loại giấy nào để làm mặt số và quai đeo đồng hồ đồ chơi?',
          options: [
            {
              label: 'A',
              text: 'Chọn bìa màu thủ công vì độ cứng vừa phải, dễ cắt dán và có màu sắc đẹp mắt',
              isOptimal: true,
              feedback: 'Lựa chọn chuẩn xác! Bìa màu vừa giữ được hình dáng vừa dễ thao tác kéo dán an toàn.'
            },
            {
              label: 'B',
              text: 'Chọn giấy báo cũ mềm nhũn',
              isOptimal: false,
              feedback: 'Giấy báo quá mềm sẽ làm đồng hồ bị rũ xuống, không chắc chắn.'
            }
          ],
          teacherExplanation: 'Lựa chọn vật liệu phù hợp là yếu tố quyết định độ bền và vẻ đẹp của sản phẩm.'
        },
        ghiNho: {
          mainTitle: 'BÀI 4 - TIẾT 2: BẢN VẼ PHÁC THẢO & VẬT LIỆU',
          summaryQuote: 'Bản vẽ phác thảo đồng hồ đeo tay gồm 4 chi tiết: Mặt số, Quai đeo, Núm vặn, Bộ kim. Vật liệu chính là giấy bìa màu, dụng cụ gồm kéo, hồ dán, màu vẽ.',
          branches: [
            { label: '4 chi tiết', color: 'blue', items: ['Mặt số (1 - 12)', 'Quai đeo cổ tay', 'Núm vặn cạnh sườn', 'Bộ kim giờ & phút'] },
            { label: 'Vật liệu & dụng cụ', color: 'emerald', items: ['Giấy bìa màu / carton mỏng', 'Kéo thủ công an toàn', 'Hồ dán hoặc băng keo', 'Bút màu vẽ trang trí'] }
          ],
          sgkNote: 'Ghi nhớ SGK Công nghệ 5, trang 18.'
        },
        cungCo: [
          {
            id: 'cc-12-1',
            question: 'Chi tiết nào trên chiếc đồng hồ giúp cố định vào cổ tay?',
            options: ['A. Quai đeo', 'B. Mặt số', 'C. Kim phút', 'D. Núm vặn'],
            correctIndex: 0,
            explanation: 'Quai đeo dùng để quấn quanh cổ tay và cài chặt.'
          }
        ],
        teacherGuide: {
          objectives: ['Học sinh vẽ phác thảo được 4 bộ phận của chiếc đồng hồ đồ chơi và chuẩn bị đầy đủ dụng cụ, vật liệu.'],
          keyKnowledge: ['Cấu tạo đồng hồ đeo tay thủ công và kỹ năng phác thảo.'],
          estimatedMinutes: 35,
          methodologyTips: ['Nhắc nhở học sinh an toàn khi sử dụng kéo sắc nhọn.'],
          equipmentNeeded: ['Mẫu bản vẽ phác thảo Hình 2 tr. 18 SGK, giấy bìa, kéo, hồ dán'],
          quickAnswers: [{ question: 'Bản phác thảo gồm mấy chi tiết chính?', answer: '4 chi tiết chính.' }]
        }
      },
      {
        id: 'tiet-13',
        periodNumber: 13,
        lessonId: 'bai-4',
        periodInLesson: 3,
        totalPeriodsInLesson: 4,
        title: 'Tiết 3: Làm sản phẩm mẫu đồng hồ đồ chơi',
        focusContent: 'Thực hành chế tạo sản phẩm mẫu theo 4 bước chuẩn SGK tr. 18: Bước 1 (Làm mặt số) ➔ Bước 2 (Làm quai đeo và núm vặn) ➔ Bước 3 (Làm bộ kim) ➔ Bước 4 (Gắn các bộ phận để hoàn thiện).',
        sgkPages: 'Trang 18',
        khoiDong: {
          title: 'Khởi động: Sẵn sàng thực hành',
          type: 'quick_quiz',
          question: 'Trước khi bắt đầu cắt dán, em cần kiểm tra điều gì trên bàn học của mình?',
          options: [
            'A. Đầy đủ vật liệu (giấy bìa), dụng cụ (kéo, hồ dán, bút màu) và dọn bàn gọn gàng',
            'B. Mở thật nhiều đồ chơi khác ra bàn',
            'C. Vứt rác bừa bãi ra sàn nhà',
            'D. Không cần chuẩn bị gì'
          ],
          correctAnswer: 0,
          explanation: 'Chuẩn bị đầy đủ và giữ gìn vệ sinh là tác phong làm việc khoa học của nhà thiết kế nhí.',
          leadIn: 'Giờ thực hành đã đến! Hãy cùng làm theo 4 bước chuẩn để biến bản vẽ thành hiện thực!'
        },
        khamPha: [
          {
            id: 'kp-13-1',
            title: 'Quy trình 4 bước làm sản phẩm mẫu (Mục 3 SGK tr. 18)',
            task: 'Nghiên cứu kỹ 4 bước thực hiện: Bước 1: Làm mặt số; Bước 2: Làm quai đeo và núm vặn; Bước 3: Làm bộ kim đồng hồ; Bước 4: Gắn các bộ phận để hoàn thiện đồng hồ đồ chơi.',
            context: 'Mỗi bước cần sự khéo léo, cẩn thận và an toàn.',
            guidingQuestions: [
              '1. Bước 1: Vẽ và cắt mặt số thế nào cho tròn và viết số 1-12 đều nhau?',
              '2. Bước 2: Cắt quai đeo có chiều rộng bao nhiêu là vừa vặn (khoảng 1.5 - 2 cm)?',
              '3. Bước 3: Làm thế nào để bộ kim có thể xoay được (dùng đinh ghim cánh phượng hoặc tăm tre mềm)?',
              '4. Bước 4: Dùng hồ dán gắn kết các chi tiết theo thứ tự nào?'
            ],
            hiddenAnswer: 'Quy trình 4 bước: (1) Cắt mặt số tròn, vẽ vạch và viết số 1-12; (2) Cắt dải bìa làm quai đeo và một mẩu bìa nhỏ gấp làm núm vặn; (3) Cắt kim giờ ngắn, kim phút dài; (4) Gắn kim vào tâm mặt số, dán mặt số lên quai đeo, dán núm vặn vào cạnh bên.',
            teacherConclusion: 'Thực hiện tuần tự từng bước giúp sản phẩm đúng hình dạng, bền chắc và đẹp mắt.'
          }
        ],
        thaoLuan: {
          title: 'Hỗ trợ thực hành nhóm đôi',
          groupTask: 'Các cặp đôi hỗ trợ nhau: Một bạn giữ bìa để bạn kia dùng kéo cắt thẳng đường viền; chia sẻ hồ dán và dọn dẹp các mẩu giấy vụn vào sọt rác.',
          durationMinutes: 10,
          guidingPrompts: ['Cắt cẩn thận theo nét vẽ phác thảo', 'Bôi lượng hồ vừa đủ để không bị lem ướt giấy'],
          suggestedHints: ['Dùng nắp chai nước khoáng đặt lên bìa để vẽ đường tròn mặt số thật chuẩn.'],
          conclusion: 'Tinh thần hợp tác giúp các bạn làm việc nhanh hơn và gắn bó tình bạn.'
        },
        luyenTap: [
          {
            id: 'lt-13-1',
            type: 'order',
            instruction: 'Sắp xếp đúng trình tự 4 bước chế tạo đồng hồ đồ chơi:',
            items: [
              { id: 'b3', text: 'Bước: Làm bộ kim đồng hồ' },
              { id: 'b1', text: 'Bước: Làm mặt số' },
              { id: 'b4', text: 'Bước: Gắn các bộ phận để hoàn thiện đồng hồ đồ chơi' },
              { id: 'b2', text: 'Bước: Làm quai đeo và núm vặn' }
            ],
            correctOrder: ['b1', 'b2', 'b3', 'b4'],
            difficulty: 'basic'
          }
        ],
        thucHanh: {
          title: 'Chế tạo mô hình: Đồng hồ đeo tay bằng bìa',
          objective: 'Tự tay cắt dán và hoàn thành được 01 chiếc đồng hồ đeo tay đồ chơi đúng hình dạng, chắc chắn và thẩm mĩ theo hướng dẫn SGK.',
          materials: [
            { name: 'Giấy bìa màu thủ công', quantity: '2 - 3 tờ A4' },
            { name: 'Kéo cắt giấy học sinh', quantity: '1 chiếc' },
            { name: 'Hồ dán hoặc băng dính 2 mặt', quantity: '1 lọ / cuộn' },
            { name: 'Bút màu vẽ, bút dạ', quantity: '1 hộp' },
            { name: 'Chốt ghim cánh phượng mini (để kim xoay)', quantity: '1 chiếc' }
          ],
          steps: [
            {
              stepNumber: 1,
              title: 'Làm mặt số',
              description: 'Vẽ hình tròn đường kính 4.5 cm lên giấy bìa cứng, cắt rời. Dùng bút dạ đánh dấu tâm, chia đều 12 điểm và viết các số từ 1 đến 12.',
              details: ['Viết số 12 ở trên cùng, số 6 ở dưới cùng, số 3 bên phải, số 9 bên trái để chia đều.'],
              safetyTip: 'Dùng kéo cẩn thận, không hướng mũi kéo vào bạn bên cạnh.'
            },
            {
              stepNumber: 2,
              title: 'Làm quai đeo và núm vặn',
              description: 'Cắt dải bìa dài 18 cm, rộng 2 cm. Cắt một mẩu bìa nhỏ hình chữ nhật gấp làm núm vặn.',
              details: ['Có thể vẽ thêm các lỗ cài hoặc gắn miếng dán nhám ở hai đầu quai.']
            },
            {
              stepNumber: 3,
              title: 'Làm bộ kim đồng hồ',
              description: 'Cắt kim ngắn (kim giờ, dài 1.5 cm) màu đỏ và kim dài (kim phút, dài 2 cm) màu xanh.',
              details: ['Dùng đầu tăm chọc lỗ nhỏ ở đuôi mỗi kim để xâu qua tâm mặt số.']
            },
            {
              stepNumber: 4,
              title: 'Gắn các bộ phận hoàn thiện',
              description: 'Xâu ghim qua bộ kim và tâm mặt số. Dán mặt số vào chính giữa quai đeo. Dán núm vặn vào cạnh phải mặt số.',
              details: ['Thử xoay kim giờ, kim phút và ướm thử lên cổ tay.']
            }
          ],
          evaluationCriteria: [
            { name: 'Đúng hình dạng', description: 'Đủ 4 bộ phận: mặt số, quai đeo, núm vặn, bộ kim.' },
            { name: 'Chắc chắn', description: 'Các mối dán keo dính chặt, không bị bung rách khi đeo.' },
            { name: 'Thẩm mĩ', description: 'Màu sắc hài hòa, nét cắt mịn màng, chữ số rõ ràng đẹp mắt.' }
          ]
        },
        vanDung: {
          title: 'Em vận dụng: Đeo thử và xem giờ',
          scenario: 'Sau khi hoàn thành sản phẩm, bạn quay kim ngắn chỉ số 7, kim dài chỉ số 12.',
          question: 'Chiếc đồng hồ của em lúc này đang chỉ mấy giờ và đó là thời điểm em làm gì trong ngày?',
          options: [
            {
              label: 'A',
              text: 'Đang chỉ 7 giờ đúng - Thời điểm em bắt đầu vào tiết học đầu tiên ở trường',
              isOptimal: true,
              feedback: 'Rất chính xác! Đồng hồ đồ chơi vừa làm xong có thể dùng để học xem giờ trong môn Toán.'
            },
            {
              label: 'B',
              text: 'Đang chỉ 12 giờ 35 phút',
              isOptimal: false,
              feedback: 'Kim ngắn ở số 7 và kim dài ở số 12 là 7 giờ đúng.'
            }
          ],
          teacherExplanation: 'Sản phẩm thủ công tự làm có thể tích hợp dùng cho các tiết học Toán xem giờ rất bổ ích.'
        },
        ghiNho: {
          mainTitle: 'BÀI 4 - TIẾT 3: THỰC HÀNH LÀM MẪU',
          summaryQuote: 'Thực hiện đúng 4 bước chế tạo: Làm mặt số ➔ Làm quai đeo và núm vặn ➔ Làm bộ kim ➔ Gắn các bộ phận để hoàn thiện sản phẩm.',
          branches: [
            { label: 'Bước 1 & 2', color: 'blue', items: ['Cắt mặt số tròn 12 số', 'Cắt quai đeo & gấp núm vặn'] },
            { label: 'Bước 3 & 4', color: 'emerald', items: ['Cắt bộ kim giờ/phút', 'Gắn kết các chi tiết & kiểm tra'] }
          ],
          sgkNote: 'Ghi nhớ quy trình thực hành SGK tr. 18.'
        },
        cungCo: [
          {
            id: 'cc-13-1',
            question: 'Khi làm bộ kim đồng hồ, kim chỉ giờ có đặc điểm gì so với kim chỉ phút?',
            options: [
              'A. Kim giờ ngắn hơn kim phút',
              'B. Kim giờ dài hơn kim phút',
              'C. Kim giờ to gấp 10 lần mặt số',
              'D. Hai kim bắt buộc phải dài bằng nhau'
            ],
            correctIndex: 0,
            explanation: 'Quy ước kim giờ luôn ngắn hơn kim phút để dễ quan sát.'
          }
        ],
        teacherGuide: {
          objectives: ['Học sinh tự tay thực hiện được 4 bước làm sản phẩm mẫu đồng hồ đồ chơi.'],
          keyKnowledge: ['Kỹ năng cắt dán thủ công chuẩn xác, an toàn và thẩm mĩ.'],
          estimatedMinutes: 35,
          methodologyTips: ['Giáo viên làm mẫu từng thao tác trên bục giảng trước khi cho cả lớp làm.'],
          equipmentNeeded: ['Kéo, hồ dán, giấy bìa, ghim cánh phượng mini'],
          quickAnswers: [{ question: 'Làm bộ phận nào đầu tiên?', answer: 'Làm mặt số.' }]
        }
      },
      {
        id: 'tiet-14',
        periodNumber: 14,
        lessonId: 'bai-4',
        periodInLesson: 4,
        totalPeriodsInLesson: 4,
        title: 'Tiết 4: Đánh giá, hoàn thiện sản phẩm & Vận dụng sáng tạo',
        focusContent: 'Trưng bày sản phẩm; đánh giá sản phẩm theo Phiếu đánh giá SGK tr. 18 (Đúng hình dạng, Chắc chắn, Thẩm mĩ với 3 mức cảm xúc: Cười / Bình thường / Buồn); hoàn thiện sản phẩm và mở rộng thiết kế sản phẩm khác.',
        sgkPages: 'Trang 18',
        khoiDong: {
          title: 'Khởi động: Ngày hội triển lãm đồng hồ nhí',
          type: 'quick_quiz',
          question: 'Các nhà thiết kế nhí hãy cùng giơ cao chiếc đồng hồ trên tay để bước vào phiên đánh giá sản phẩm nhé! Em cảm thấy sản phẩm của mình thế nào?',
          options: [
            'A. Rất đẹp, chắc chắn và em rất tự hào!',
            'B. Khá ổn nhưng em muốn trang trí thêm cho đẹp hơn',
            'C. Cần dán lại cho chắc chắn hơn',
            'D. Tất cả các ý kiến trên'
          ],
          correctAnswer: 3,
          explanation: 'Mỗi sản phẩm đều mang công sức lao động đáng quý của các em!',
          leadIn: 'Hãy cùng nhau đóng vai ban giám khảo đánh giá sản phẩm theo đúng phiếu tiêu chí SGK!'
        },
        khamPha: [
          {
            id: 'kp-14-1',
            title: 'Tìm hiểu Phiếu đánh giá sản phẩm (Mục 4 SGK tr. 18)',
            task: 'Đọc phiếu đánh giá sản phẩm trong SGK tr. 18 gồm 3 tiêu chí: (1) Đúng hình dạng; (2) Chắc chắn; (3) Thẩm mĩ với 3 mức đánh giá (Mặt cười: Tốt; Mặt bình thường: Đạt; Mặt buồn: Cần cố gắng).',
            context: 'Đánh giá khách quan theo các tiêu chí khoa học đã xây dựng ở Bước 2.',
            guidingQuestions: [
              '1. Thế nào là đạt tiêu chí "Đúng hình dạng"?',
              '2. Làm thế nào để kiểm tra tiêu chí "Chắc chắn"?',
              '3. Tiêu chí "Thẩm mĩ" dựa trên những yếu tố nào (đường cắt mịn, màu phối đẹp, chữ số rõ ràng)?'
            ],
            hiddenAnswer: 'Đúng hình dạng: Có đủ mặt số, quai đeo, núm vặn, kim giờ, kim phút. Chắc chắn: Đeo vào cổ tay không bị tuột, các mối dán phẳng phiu dính chặt. Thẩm mĩ: Màu sắc hài hòa, trình bày sạch sẽ, sáng tạo.',
            teacherConclusion: 'Đánh giá sản phẩm là khâu then chốt giúp nhận ra ưu điểm và những điểm cần cải tiến để sản phẩm hoàn hảo hơn.'
          }
        ],
        thaoLuan: {
          title: 'Triển lãm & Đánh giá đồng đẳng',
          groupTask: 'Mỗi bàn xếp sản phẩm lên góc trưng bày. Cả nhóm cùng dùng các sticker biểu tượng cảm xúc (😊, 😐, 🙁) để bình chọn cho các bạn.',
          durationMinutes: 5,
          guidingPrompts: ['Bình chọn công tâm, động viên bạn bè', 'Nêu góp ý cụ thể để bạn sửa chỗ chưa chắc'],
          suggestedHints: ['Nếu quai đeo hơi lỏng, có thể bấm thêm một lỗ cài mới.'],
          conclusion: 'Học hỏi từ sản phẩm của bạn là cách tiến bộ nhanh nhất.'
        },
        luyenTap: [
          {
            id: 'lt-14-1',
            type: 'true_false',
            statement: 'Khi đánh giá sản phẩm thủ công, nếu sản phẩm chưa đạt tiêu chí chắc chắn thì ta có thể dùng thêm keo hoặc băng dính để hoàn thiện lại.',
            isCorrect: true,
            explanation: 'Chính xác! Bước 4 chính là "Đánh giá VÀ HOÀN THIỆN sản phẩm".',
            difficulty: 'basic'
          },
          {
            id: 'lt-14-2',
            type: 'mcq',
            question: '3 tiêu chí chính trong Phiếu đánh giá sản phẩm đồng hồ đeo tay (SGK tr. 18) là gì?',
            options: [
              'A. Giá đắt, nhiều đá quý, thương hiệu nổi tiếng',
              'B. Đúng hình dạng, Chắc chắn, Thẩm mĩ',
              'C. Nặng nề, kích thước to lớn, màu tối',
              'D. Chỉ cần làm xong nhanh nhất'
            ],
            correctAnswer: 1,
            explanation: '3 tiêu chí chuẩn SGK trang 18: Đúng hình dạng, Chắc chắn, Thẩm mĩ.',
            difficulty: 'basic'
          }
        ],
        vanDung: {
          title: 'Em vận dụng: Thiết kế sản phẩm thủ công kĩ thuật khác',
          scenario: 'SGK tr. 18 gợi ý: "Em hãy thiết kế một sản phẩm thủ công kĩ thuật khác mà em thích theo các bước thiết kế sản phẩm đã học".',
          question: 'Em hãy lập kế hoạch 4 bước để thiết kế chiếc "Ống đựng bút để bàn hình chú thỏ con":',
          options: [
            {
              label: 'A',
              text: 'Bước 1: Ý tưởng ống bút thỏ ➔ Bước 2: Vẽ phác thảo & chuẩn bị lõi giấy vệ sinh, bìa màu, kéo, hồ ➔ Bước 3: Dán tai thỏ, bọc giấy màu vào lõi giấy ➔ Bước 4: Kiểm tra đựng được thước bút và đánh giá',
              isOptimal: true,
              feedback: 'Kế hoạch mẫu mực, đúng chuẩn 4 bước thiết kế sản phẩm công nghệ!'
            },
            {
              label: 'B',
              text: 'Lấy tiền ra cửa hàng mua luôn chiếc ống bút nhựa',
              isOptimal: false,
              feedback: 'Không rèn luyện được kỹ năng tự thiết kế sản phẩm thủ công.'
            }
          ],
          teacherExplanation: 'Áp dụng quy trình thiết kế vào nhiều sản phẩm tái chế hữu ích trong cuộc sống hàng ngày.'
        },
        ghiNho: {
          mainTitle: 'TỔNG KẾT BÀI 4: THIẾT KẾ SẢN PHẨM',
          summaryQuote: 'Thực hiện trọn vẹn 4 bước thiết kế sản phẩm: (1) Hình thành ý tưởng ➔ (2) Vẽ phác thảo & chọn vật liệu ➔ (3) Làm sản phẩm mẫu ➔ (4) Đánh giá và hoàn thiện theo 3 tiêu chí: Đúng hình dạng, Chắc chắn, Thẩm mĩ.',
          branches: [
            { label: '3 tiêu chí đánh giá', color: 'blue', items: ['Đúng hình dạng', 'Chắc chắn', 'Thẩm mĩ'] },
            { label: '3 mức xếp loại', color: 'emerald', items: ['😊 Mặt cười (Tốt)', '😐 Bình thường (Đạt)', '🙁 Cần cố gắng'] }
          ],
          sgkNote: 'Ghi nhớ SGK Công nghệ 5, trang 18.'
        },
        cungCo: [
          {
            id: 'cc-14-1',
            question: 'Mục đích chính của việc đánh giá sản phẩm là gì?',
            options: [
              'A. Để chê bai lẫn nhau',
              'B. Để nhận biết điểm đạt và hoàn thiện sản phẩm tốt hơn',
              'C. Để vứt sản phẩm đi',
              'D. Không có tác dụng gì'
            ],
            correctIndex: 1,
            explanation: 'Đánh giá giúp người thiết kế biết điểm mạnh và điểm cần cải tiến.'
          }
        ],
        teacherGuide: {
          objectives: ['Đánh giá được sản phẩm theo các tiêu chí đã định; có ý thức hoàn thiện sản phẩm và vận dụng thiết kế các đồ dùng khác.'],
          keyKnowledge: ['Bộ tiêu chí đánh giá sản phẩm thủ công kĩ thuật.'],
          estimatedMinutes: 35,
          methodologyTips: ['Tạo không khí ngày hội triển lãm, khen ngợi sự sáng tạo của học sinh.'],
          equipmentNeeded: ['Phiếu đánh giá sản phẩm in sẵn, bàn trưng bày triển lãm'],
          quickAnswers: [{ question: '3 tiêu chí đánh giá là gì?', answer: 'Đúng hình dạng, Chắc chắn, Thẩm mĩ.' }]
        }
      }
    ]
  },
  {
    id: 'bai-5',
    number: 5,
    title: 'Sử dụng điện thoại',
    partId: 'part-1',
    partTitle: 'PHẦN MỘT: CÔNG NGHỆ VÀ ĐỜI SỐNG',
    totalPeriods: 4,
    sgkPages: 'Trang 19 – 25',
    periods: [
      {
        id: 'tiet-15',
        periodNumber: 15,
        lessonId: 'bai-5',
        periodInLesson: 1,
        totalPeriodsInLesson: 4,
        title: 'Tiết 1: Tác dụng của điện thoại & Các bộ phận cơ bản',
        focusContent: 'Trình bày tác dụng của điện thoại (liên lạc, giải trí, định vị, tra cứu...); nhận biết các bộ phận cơ bản của điện thoại cố định và điện thoại di động (Hình 3 SGK tr. 20); lịch sử từ năm 1876 đến nay (Hình 2).',
        sgkPages: 'Trang 19 – 20',
        khoiDong: {
          title: 'Khởi động: Cuộc gọi yêu thương',
          type: 'question',
          question: 'Em hãy đọc cuộc trò chuyện qua điện thoại SGK tr. 19: Bạn nhỏ gọi: "Con chào bố ạ! Bố có khoẻ không ạ? Con nhớ bố lắm!". Bố trả lời: "Bố khoẻ con ạ...". Theo em, điện thoại giúp ích gì lớn nhất cho những người ở xa nhau?',
          options: [
            'A. Giúp con người trò chuyện, liên lạc và nhìn thấy nhau dù cách xa ngàn dặm',
            'B. Chỉ để chơi trò chơi điện tử',
            'C. Để chụp ảnh tự sướng rồi thôi',
            'D. Không có ích lợi gì'
          ],
          correctAnswer: 0,
          explanation: 'Điện thoại là phương tiện liên lạc viễn thông kỳ diệu kết nối yêu thương giữa mọi người.',
          leadIn: 'Hôm nay chúng ta sẽ cùng khám phá những tính năng và bộ phận cơ bản của chiếc điện thoại thân thuộc!'
        },
        khamPha: [
          {
            id: 'kp-15-1',
            title: '1. Tác dụng của điện thoại trong đời sống (Hình 1 & 2 SGK tr. 19 - 20)',
            task: 'Quan sát Hình 1 và 2 SGK: Nêu các tác dụng của điện thoại (tranh 1a: gọi điện hỏi thăm; tranh 1b: tra cứu học tập; tranh 1c: nghe nhạc giải trí). Kể tên 2 loại điện thoại phổ biến và mốc lịch sử năm 1876.',
            context: 'Từ chiếc điện thoại đầu tiên năm 1876 của Graham Bell đến điện thoại thông minh ngày nay.',
            guidingQuestions: [
              '1. Điện thoại dùng để làm gì trong sinh hoạt gia đình?',
              '2. Điện thoại thông minh hiện đại còn hỗ trợ thêm những tiện ích gì?',
              '3. Phân biệt "Điện thoại cố định" (để bàn) và "Điện thoại di động" (mang theo người)?'
            ],
            hiddenAnswer: 'Điện thoại dùng để liên lạc bằng âm thanh hoặc hình ảnh; điện thoại di động hiện đại còn hỗ trợ nghe nhạc, xem phim, định vị GPS, chụp ảnh, tra cứu internet... Có 2 loại: điện thoại để bàn (cố định) và điện thoại mang theo người (di động). Chiếc điện thoại đầu tiên ra đời năm 1876.',
            teacherConclusion: 'Điện thoại dùng để liên lạc và cung cấp nhiều tiện ích phục vụ công việc, học tập và đời sống.'
          },
          {
            id: 'kp-15-2',
            title: '2. Các bộ phận cơ bản của điện thoại (Hình 3 SGK tr. 20)',
            task: 'Gọi tên các bộ phận trên điện thoại cố định (Hình 3a) và điện thoại di động (Hình 3b): (1) Ống nghe và nói; (2) Bàn phím số / Màn hình cảm ứng; (3) Loa; (4) Camera; (5) Cổng sạc nguồn / phím bấm.',
            context: 'So sánh cấu tạo giữa điện thoại cố định truyền thống và điện thoại thông minh hiện đại.',
            guidingQuestions: [
              '1. Điện thoại cố định gồm 2 bộ phận cơ bản nào?',
              '2. Điện thoại di động có những bộ phận hiện đại nào (loa, micro, phím nguồn, màn hình cảm ứng, camera, cổng cắm nguồn, đèn pin)?'
            ],
            hiddenAnswer: 'Điện thoại cố định thường gồm: ống nghe và nói, thân máy và bàn phím bấm số. Điện thoại di động thường có: loa, micro, màn hình cảm ứng, các phím bấm (nguồn, âm lượng), camera trước/sau, cổng cắm nguồn, đèn pin...',
            teacherConclusion: 'Nắm rõ vị trí các bộ phận giúp chúng ta sử dụng và bảo quản thiết bị điện thoại đúng cách.'
          }
        ],
        thaoLuan: {
          title: 'Thảo luận nhóm: So sánh điện thoại cố định và điện thoại di động',
          groupTask: 'Nhóm 4 bạn: Thảo luận điểm giống và khác nhau giữa điện thoại cố định và điện thoại di động. Theo em loại nào tiện lợi hơn trong cuộc sống hiện đại?',
          durationMinutes: 4,
          guidingPrompts: ['Về khả năng di chuyển?', 'Về các tính năng hỗ trợ?'],
          suggestedHints: ['Điện thoại cố định gắn liền với đường dây ở một vị trí cố định.', 'Điện thoại di động có thể mang theo bất cứ nơi đâu nhờ sóng vô tuyến và pin tích điện.'],
          conclusion: 'Điện thoại di động ngày càng phổ biến nhờ sự nhỏ gọn và đa năng.'
        },
        luyenTap: [
          {
            id: 'lt-15-1',
            type: 'categorize',
            instruction: 'Xếp các bộ phận sau vào đúng loại điện thoại tương ứng:',
            categories: [
              { id: 'dt-cd', name: 'Điện thoại cố định' },
              { id: 'dt-dd', name: 'Điện thoại di động thông minh' }
            ],
            items: [
              { id: 'bp-1', text: 'Ống nghe và nói có dây nối thân máy', correctCategoryId: 'dt-cd' },
              { id: 'bp-2', text: 'Màn hình cảm ứng đa điểm', correctCategoryId: 'dt-dd' },
              { id: 'bp-3', text: 'Camera chụp ảnh mặt sau', correctCategoryId: 'dt-dd' },
              { id: 'bp-4', text: 'Đèn pin chiếu sáng tích hợp', correctCategoryId: 'dt-dd' }
            ],
            difficulty: 'basic'
          },
          {
            id: 'lt-15-2',
            type: 'true_false',
            statement: 'Chiếc điện thoại đầu tiên trên thế giới ra đời vào năm 1876 do Alexander Graham Bell sáng chế.',
            isCorrect: true,
            explanation: 'Đúng theo lịch sử công nghệ và SGK trang 20.',
            difficulty: 'basic'
          }
        ],
        vanDung: {
          title: 'Em vận dụng: Nhận biết tính năng điện thoại',
          scenario: 'Khi bố mẹ đi công tác xa, em muốn vừa nói chuyện vừa nhìn thấy khuôn mặt cười của bố mẹ.',
          question: 'Em sẽ đề nghị bố mẹ sử dụng tính năng nào của điện thoại di động?',
          options: [
            {
              label: 'A',
              text: 'Thực hiện cuộc gọi video (Video call) qua mạng internet',
              isOptimal: true,
              feedback: 'Chính xác! Cuộc gọi video dùng camera và màn hình giúp truyền hình ảnh trực tiếp rất sinh động.'
            },
            {
              label: 'B',
              text: 'Gửi một bức thư giấy qua đường bưu điện mất 5 ngày',
              isOptimal: false,
              feedback: 'Không thể trò chuyện trực tiếp ngay lập tức.'
            }
          ],
          teacherExplanation: 'Tính năng gọi video là bước tiến tuyệt vời của điện thoại di động thông minh.'
        },
        ghiNho: {
          mainTitle: 'BÀI 5 - TIẾT 1: TÁC DỤNG & CẤU TẠO ĐIỆN THOẠI',
          summaryQuote: 'Điện thoại dùng để liên lạc, giải trí, định vị, tra cứu. Điện thoại cố định gồm ống nghe nói và bàn phím. Điện thoại di động gồm loa, micro, màn hình cảm ứng, camera, phím nguồn...',
          branches: [
            { label: 'Tác dụng', color: 'blue', items: ['Liên lạc thoại & video', 'Học tập & tra cứu', 'Giải trí & định vị'] },
            { label: 'Cấu tạo chính', color: 'emerald', items: ['Loa & micro', 'Màn hình & bàn phím', 'Camera & cổng sạc'] }
          ],
          sgkNote: 'Ghi nhớ SGK Công nghệ 5, trang 20.'
        },
        cungCo: [
          {
            id: 'cc-15-1',
            question: 'Chiếc điện thoại đầu tiên trên thế giới được cấp bằng sáng chế vào năm nào?',
            options: ['A. Năm 1784', 'B. Năm 1876', 'C. Năm 1946', 'D. Năm 2000'],
            correctIndex: 1,
            explanation: 'Năm 1876 do Alexander Graham Bell sáng chế.'
          }
        ],
        teacherGuide: {
          objectives: ['Trình bày được tác dụng của điện thoại; nhận biết các bộ phận cơ bản của điện thoại cố định và di động.'],
          keyKnowledge: ['Lịch sử 1876 và cấu tạo điện thoại.'],
          estimatedMinutes: 35,
          methodologyTips: ['Mang điện thoại bàn mẫu hoặc mô hình điện thoại đến lớp cho học sinh quan sát trực quan.'],
          equipmentNeeded: ['Tranh ảnh Hình 1, 2, 3 SGK tr. 19 - 20'],
          quickAnswers: [{ question: 'Điện thoại đầu tiên ra đời năm nào?', answer: 'Năm 1876.' }]
        }
      },
      {
        id: 'tiet-16',
        periodNumber: 16,
        lessonId: 'bai-5',
        periodInLesson: 2,
        totalPeriodsInLesson: 4,
        title: 'Tiết 2: Biểu tượng trạng thái & Các bước thực hiện cuộc gọi',
        focusContent: 'Nhận biết các biểu tượng trạng thái và chức năng (Hình 3 SGK tr. 21: pin yếu, chế độ máy bay, sạc pin, sóng wifi, mức sóng điện thoại, bàn phím, danh bạ...); thực hiện đúng 4 bước gọi điện thoại.',
        sgkPages: 'Trang 21 – 23',
        khoiDong: {
          title: 'Khởi động: Đoán biểu tượng trên màn hình',
          type: 'quick_quiz',
          question: 'Khi nhìn lên góc trên màn hình điện thoại thấy biểu tượng "Cột sóng có dấu gạch chéo" hoặc "Hình chiếc máy bay", điện thoại có thực hiện được cuộc gọi bình thường không?',
          options: [
            'A. Không thể gọi được vì đang ở chế độ máy bay hoặc mất sóng',
            'B. Vẫn gọi bình thường không ảnh hưởng gì',
            'C. Điện thoại bị nổ ngay lập tức',
            'D. Chỉ gọi được cho người nước ngoài'
          ],
          correctAnswer: 0,
          explanation: 'Chế độ máy bay ngắt toàn bộ kết nối vô tuyến nên không thể thực hiện cuộc gọi viễn thông thông thường.',
          leadIn: 'Hiểu rõ các biểu tượng trạng thái sẽ giúp các em làm chủ chiếc điện thoại dễ dàng và an toàn!'
        },
        khamPha: [
          {
            id: 'kp-16-1',
            title: '1. Biểu tượng thể hiện trạng thái và chức năng (Mục 3a SGK tr. 21)',
            task: 'Ghép thẻ biểu tượng ở cột A với mô tả phù hợp ở cột B (SGK tr. 21): 1) Pin màu đỏ vạch ngắn; 2) Hình máy bay; 3) Ống nghe màu xanh hướng lên; 4) Cuốn sổ danh bạ; 5) Máy ảnh; 6) Ống nghe kèm đồng hồ; 7) Cột sóng wifi; 8) Cột sóng điện thoại; 9) Ống nghe màu đỏ chúc xuống.',
            context: 'Bảng đối chiếu biểu tượng quốc tế trên mọi dòng điện thoại thông minh.',
            guidingQuestions: [
              '1. Biểu tượng nào báo hiệu pin sắp hết cần cắm sạc?',
              '2. Nút bấm nào để bắt đầu cuộc gọi và nút nào để cúp máy kết thúc?',
              '3. Biểu tượng sóng wifi và cột sóng mạng di động khác nhau thế nào?'
            ],
            hiddenAnswer: '1 - c: Pin yếu; 2 - a: Chế độ máy bay; 3 - k: Thực hiện cuộc gọi; 4 - d: Danh bạ; 5 - b: Máy ảnh; 6 - e: Cuộc gọi gần đây; 7 - i: Mức sóng wifi; 8 - e: Mức sóng điện thoại; 9 - g: Kết thúc cuộc gọi.',
            teacherConclusion: 'Mỗi biểu tượng trên điện thoại đều mang ý nghĩa trạng thái hoặc chức năng cụ thể.'
          },
          {
            id: 'kp-16-2',
            title: '2. Bốn bước thực hiện một cuộc gọi (Hình 5 SGK tr. 22 - 23)',
            task: 'Sắp xếp thứ tự các hình minh họa trong Hình 5 để thể hiện các bước thực hiện một cuộc gọi bằng điện thoại: Bước 1: Mở ứng dụng Điện thoại; Bước 2: Chọn người cần gọi (bằng bàn phím số, danh bạ, gần đây, yêu thích); Bước 3: Nhấn biểu tượng Gọi (nút xanh); Bước 4: Nhấn biểu tượng Kết thúc cuộc gọi (nút đỏ).',
            context: 'Quy trình chuẩn khi sử dụng điện thoại thông minh.',
            guidingQuestions: [
              '1. Biểu tượng ứng dụng Điện thoại thường có hình gì?',
              '2. Có mấy cách để chọn người cần gọi (nhập số, tìm danh bạ, chọn cuộc gọi gần đây, mục yêu thích)?',
              '3. Sau khi nói chuyện xong, ta phải làm gì để không bị trừ tiền cước oan?'
            ],
            hiddenAnswer: 'Quy trình 4 bước: (1) Mở ứng dụng Điện thoại ➔ (2) Chọn người cần gọi ➔ (3) Nhấn nút Gọi màu xanh ➔ (4) Nhấn nút Kết thúc màu đỏ sau khi nói chuyện xong.',
            teacherConclusion: 'Luôn nhớ nhấn nút Kết thúc cuộc gọi màu đỏ sau khi hoàn thành cuộc trò chuyện để tiết kiệm cước phí và pin.'
          }
        ],
        thaoLuan: {
          title: 'Thực hành thao tác mô phỏng gọi điện thoại',
          groupTask: 'Thực hành theo cặp: Một bạn đóng vai người gọi, chỉ tay vào từng bước trên màn hình mô phỏng; bạn kia kiểm tra xem bạn đã bấm đúng nút xanh để gọi và nút đỏ để ngắt máy chưa.',
          durationMinutes: 4,
          guidingPrompts: ['Bấm số từ bàn phím', 'Tìm kiếm tên mẹ trong danh bạ'],
          suggestedHints: ['Nếu người thân đã lưu danh bạ thì tìm theo tên sẽ nhanh và không sợ nhầm số.'],
          conclusion: 'Thao tác chuẩn xác giúp liên lạc nhanh chóng và an toàn.'
        },
        luyenTap: [
          {
            id: 'lt-16-1',
            type: 'matching',
            instruction: 'Ghép đúng biểu tượng với ý nghĩa chức năng:',
            leftItems: [
              { id: 'ic-call', text: 'Ống nghe màu xanh lá' },
              { id: 'ic-end', text: 'Ống nghe màu đỏ quay xuống' },
              { id: 'ic-plane', text: 'Hình chiếc máy bay' },
              { id: 'ic-contact', text: 'Hình cuốn sổ danh bạ' }
            ],
            rightItems: [
              { id: 'fn-call', text: 'Nhấn để bắt đầu cuộc gọi' },
              { id: 'fn-end', text: 'Nhấn để kết thúc cuộc gọi' },
              { id: 'fn-plane', text: 'Chế độ ngắt kết nối sóng trên máy bay' },
              { id: 'fn-contact', text: 'Lưu trữ danh sách số điện thoại người thân' }
            ],
            correctPairs: [
              { leftId: 'ic-call', rightId: 'fn-call' },
              { leftId: 'ic-end', rightId: 'fn-end' },
              { leftId: 'ic-plane', rightId: 'fn-plane' },
              { leftId: 'ic-contact', rightId: 'fn-contact' }
            ],
            difficulty: 'basic'
          },
          {
            id: 'lt-16-2',
            type: 'order',
            instruction: 'Sắp xếp 4 bước thực hiện cuộc gọi theo đúng trình tự:',
            items: [
              { id: 's3', text: 'Nhấn vào biểu tượng Gọi (nút xanh)' },
              { id: 's1', text: 'Mở ứng dụng Điện thoại' },
              { id: 's4', text: 'Khi gọi xong, nhấn vào biểu tượng Kết thúc cuộc gọi (nút đỏ)' },
              { id: 's2', text: 'Chọn người cần gọi (bàn phím số / danh bạ / cuộc gọi gần đây)' }
            ],
            correctOrder: ['s1', 's2', 's3', 's4'],
            difficulty: 'basic'
          }
        ],
        vanDung: {
          title: 'Em vận dụng: Xử lý tình huống không gọi được',
          scenario: 'Mẹ nhờ bạn An gọi điện cho bà ngoại. An bấm nút gọi nhưng máy báo "Không có dịch vụ" và trên màn hình hiện biểu tượng chiếc máy bay.',
          question: 'An cần làm gì để có thể gọi được cho bà?',
          options: [
            {
              label: 'A',
              text: 'Vào phần cài đặt tắt Chế độ máy bay để điện thoại bắt lại sóng di động rồi thực hiện lại cuộc gọi',
              isOptimal: true,
              feedback: 'Rất thông minh! Tắt chế độ máy bay điện thoại sẽ thu được sóng mạng di động để gọi.'
            },
            {
              label: 'B',
              text: 'Đập mạnh điện thoại vào bàn cho sóng hiện lên',
              isOptimal: false,
              feedback: 'Hành động này sẽ làm vỡ màn hình và hỏng máy.'
            }
          ],
          teacherExplanation: 'Hiểu các biểu tượng trạng thái giúp ta tự khắc phục sự cố kết nối đơn giản.'
        },
        ghiNho: {
          mainTitle: 'BÀI 5 - TIẾT 2: BIỂU TƯỢNG & CÁC BƯỚC GỌI',
          summaryQuote: '4 bước gọi điện: (1) Mở ứng dụng ➔ (2) Chọn số cần gọi ➔ (3) Nhấn nút Gọi xanh ➔ (4) Nhấn Kết thúc nút đỏ. Nhận biết các biểu tượng: Pin yếu, Sóng điện thoại, Wifi, Chế độ máy bay.',
          branches: [
            { label: '4 bước gọi', color: 'blue', items: ['1. Mở ứng dụng', '2. Chọn người gọi', '3. Nhấn Gọi (xanh)', '4. Nhấn Kết thúc (đỏ)'] },
            { label: 'Biểu tượng chính', color: 'emerald', items: ['Xanh: Bắt đầu gọi', 'Đỏ: Ngắt cuộc gọi', 'Máy bay: Tắt sóng', 'Cột sóng: Mức độ tín hiệu'] }
          ],
          sgkNote: 'Ghi nhớ SGK Công nghệ 5, trang 21 - 23.'
        },
        cungCo: [
          {
            id: 'cc-16-1',
            question: 'Khi cuộc gọi kết thúc, em cần nhấn vào nút nào?',
            options: [
              'A. Biểu tượng ống nghe màu đỏ',
              'B. Biểu tượng ống nghe màu xanh',
              'C. Biểu tượng máy ảnh',
              'D. Biểu tượng wifi'
            ],
            correctIndex: 0,
            explanation: 'Nút đỏ dùng để dập máy kết thúc cuộc gọi.'
          }
        ],
        teacherGuide: {
          objectives: ['Nhận biết được các biểu tượng trạng thái và chức năng; thực hiện đúng 4 bước gọi điện.'],
          keyKnowledge: ['4 bước gọi và bảng biểu tượng trạng thái.'],
          estimatedMinutes: 35,
          methodologyTips: ['Dùng giao diện mô phỏng điện thoại trực quan trên màn hình cảm ứng để cả lớp cùng tương tác.'],
          equipmentNeeded: ['Hình 3, 4, 5 SGK tr. 21 - 22'],
          quickAnswers: [{ question: 'Nút bắt đầu cuộc gọi màu gì?', answer: 'Màu xanh lá cây.' }]
        }
      },
      {
        id: 'tiet-17',
        periodNumber: 17,
        lessonId: 'bai-5',
        periodInLesson: 3,
        totalPeriodsInLesson: 4,
        title: 'Tiết 3: Số điện thoại khẩn cấp & Lưu ý an toàn, tiết kiệm',
        focusContent: 'Ghi nhớ các số điện thoại khẩn cấp quốc gia: 111 (Bảo vệ trẻ em), 112 (Tìm kiếm cứu nạn), 113 (Công an), 114 (Cứu hoả), 115 (Cấp cứu y tế); các nguyên tắc sử dụng điện thoại an toàn và tiết kiệm (Hình 6 SGK tr. 23).',
        sgkPages: 'Trang 22 – 24',
        khoiDong: {
          title: 'Khởi động: Chuông báo khẩn cấp',
          type: 'question',
          question: 'Nếu trong khu phố em bất ngờ xảy ra một vụ cháy lớn, em cần gọi ngay đến số điện thoại khẩn cấp nào để các chú lính cứu hỏa đến ứng cứu kịp thời?',
          options: [
            'A. Số 114 (Cứu hoả)',
            'B. Số 113 (Công an)',
            'C. Số 115 (Cấp cứu y tế)',
            'D. Số 111 (Bảo vệ trẻ em)'
          ],
          correctAnswer: 0,
          explanation: 'Số 114 là tổng đài cứu hỏa phòng cháy chữa cháy quốc gia.',
          leadIn: 'Những số điện thoại cứu tinh có thể cứu sống con người trong gang tấc! Hãy cùng ghi nhớ thật chính xác!'
        },
        khamPha: [
          {
            id: 'kp-17-1',
            title: '1. Năm số điện thoại khẩn cấp quốc gia (Mục 3c SGK tr. 22)',
            task: 'Đọc thông tin SGK tr. 22 và ghi nhớ chức năng của 5 số khẩn cấp: 111, 112, 113, 114, 115. Tại sao cần ghi nhớ số điện thoại của người thân và số khẩn cấp? Khi nào mới được gọi đến các số này?',
            context: 'Lưu ý: Các cuộc gọi đến số khẩn cấp hoàn toàn MIỄN PHÍ nhưng chỉ được gọi khi THỰC SỰ CẦN THIẾT, nghiêm cấm trêu đùa!',
            guidingQuestions: [
              '1. Số 111 là tổng đài gì (Tổng đài điện thoại Quốc gia bảo vệ trẻ em)?',
              '2. Khi bị lũ lụt, sạt lở đất hoặc chìm tàu cần tìm kiếm cứu nạn, gọi số nào (112)?',
              '3. Gặp kẻ gian, trộm cắp, gây rối an ninh trật tự, gọi số nào (113)?',
              '4. Hỏa hoạn cháy nhà, gọi số nào (114)?',
              '5. Người bị tai nạn ngất xỉu cần cấp cứu bệnh viện, gọi số nào (115)?'
            ],
            hiddenAnswer: '111: Tổng đài Quốc gia bảo vệ trẻ em; 112: Tìm kiếm, cứu nạn; 113: Cảnh sát / Công an; 114: Cứu hỏa; 115: Cấp cứu y tế. Cần ghi nhớ số người thân và số khẩn cấp để kịp thời liên lạc khi gặp hiểm nguy. Chỉ gọi khi thực sự khẩn cấp.',
            teacherConclusion: 'Thuộc lòng 5 số điện thoại khẩn cấp là kỹ năng sinh tồn thiết yếu của mọi công dân.'
          },
          {
            id: 'kp-17-2',
            title: '2. Lưu ý khi sử dụng điện thoại: An toàn và Tiết kiệm (Hình 6 SGK tr. 23)',
            task: 'Quan sát 6 hình ảnh trong Hình 6 SGK và chỉ ra những hành vi KHÔNG AN TOÀN, KHÔNG TIẾT KIỆM: Tranh a: Vừa cắm sạc vừa gọi điện; Tranh b: Để điện thoại đầu giường cạnh gối khi ngủ; Tranh c: Buôn chuyện điện thoại quá lâu khiến người khác phải đợi; Tranh d: Cung cấp thông tin tài khoản cho người lạ; Tranh e: Vừa đi qua đường vừa cắm mặt vào điện thoại; Tranh g: Đọc các tin nhắn rác lừa đảo.',
            context: 'Nguyên tắc an toàn điện và sử dụng văn minh.',
            guidingQuestions: [
              '1. Vì sao tuyệt đối không được vừa dùng điện thoại vừa sạc pin?',
              '2. Nói chuyện điện thoại hàng giờ có những tác hại gì (tốn cước, nóng máy, làm phiền người khác)?',
              '3. Vì sao phải bảo mật thông tin tài khoản cá nhân?'
            ],
            hiddenAnswer: 'Các hành vi nguy hiểm cần tránh: Vừa sạc vừa dùng (nguy cơ cháy nổ pin); cắm mặt vào máy khi sang đường (nguy cơ tai nạn giao thông); nói chuyện dông dài không cần thiết (lãng phí tiền cước và thời gian); tiết lộ mã số bảo mật cho người lạ (bị đánh cắp tài khoản).',
            teacherConclusion: 'Bốn nguyên tắc vàng: Không dùng khi đang sạc pin; Chỉ sử dụng khi cần thiết; Sử dụng với thời gian vừa phải; Đảm bảo an toàn, bảo mật thông tin.'
          }
        ],
        thaoLuan: {
          title: 'Thảo luận nhóm: Sổ tay số điện thoại gia đình',
          groupTask: 'Mỗi học sinh viết ra giấy nháp: Số điện thoại của Bố, Mẹ hoặc người giám hộ của mình. Kiểm tra xem em đã thuộc lòng các con số đó chưa.',
          durationMinutes: 4,
          guidingPrompts: ['Nếu em bị lạc ở trung tâm thương mại thì em sẽ nhớ số của ai để nhờ bảo vệ gọi giúp?'],
          suggestedHints: ['Học thuộc số điện thoại của ít nhất 2 người thân trong gia đình.'],
          conclusion: 'Ghi nhớ số điện thoại người thân giúp em luôn được an toàn trong mọi tình huống khẩn cấp.'
        },
        luyenTap: [
          {
            id: 'lt-17-1',
            type: 'matching',
            instruction: 'Nối đúng số điện thoại khẩn cấp với cơ quan phụ trách:',
            leftItems: [
              { id: 'tel-111', text: 'Số 111' },
              { id: 'tel-113', text: 'Số 113' },
              { id: 'tel-114', text: 'Số 114' },
              { id: 'tel-115', text: 'Số 115' },
              { id: 'tel-112', text: 'Số 112' }
            ],
            rightItems: [
              { id: 'org-child', text: 'Tổng đài điện thoại Quốc gia bảo vệ trẻ em' },
              { id: 'org-police', text: 'Cảnh sát / Công an' },
              { id: 'org-fire', text: 'Cứu hoả (Phòng cháy chữa cháy)' },
              { id: 'org-med', text: 'Cấp cứu y tế' },
              { id: 'org-rescue', text: 'Tìm kiếm, cứu nạn' }
            ],
            correctPairs: [
              { leftId: 'tel-111', rightId: 'org-child' },
              { leftId: 'tel-113', rightId: 'org-police' },
              { leftId: 'tel-114', rightId: 'org-fire' },
              { leftId: 'tel-115', rightId: 'org-med' },
              { leftId: 'tel-112', rightId: 'org-rescue' }
            ],
            difficulty: 'basic'
          },
          {
            id: 'lt-17-2',
            type: 'true_false',
            statement: 'Chúng ta có thể bấm gọi thử các số 113, 114, 115 để trêu đùa giải trí khi rảnh rỗi.',
            isCorrect: false,
            explanation: 'Tuyệt đối KHÔNG ĐƯỢC trêu đùa các đường dây khẩn cấp. Hành vi này vi phạm pháp luật và có thể làm tắc nghẽn cuộc gọi của người đang gặp nạn thực sự.',
            difficulty: 'basic'
          }
        ],
        vanDung: {
          title: 'Em vận dụng: Phản xạ xử lý tình huống khẩn cấp',
          scenario: 'Trên đường đi học về, em và các bạn phát hiện một người đi xe máy bị té ngã bất tỉnh bên đường, chảy nhiều máu.',
          question: 'Em hãy gọi ngay số điện thoại nào và thông báo những thông tin gì?',
          options: [
            {
              label: 'A',
              text: 'Gọi số 115 (Cấp cứu), nói rõ địa chỉ chính xác nơi người bị nạn đang nằm và tình trạng bất tỉnh',
              isOptimal: true,
              feedback: 'Rất chuẩn xác! Cung cấp địa chỉ rõ ràng và ngắn gọn giúp xe cứu thương đến nhanh nhất.'
            },
            {
              label: 'B',
              text: 'Gọi số 114 báo có cháy lớn',
              isOptimal: false,
              feedback: 'Sai đơn vị cứu hộ.'
            }
          ],
          teacherExplanation: 'Bình tĩnh gọi đúng số và báo rõ địa điểm là phẩm chất cứu người đáng biểu dương.'
        },
        ghiNho: {
          mainTitle: 'BÀI 5 - TIẾT 3: SỐ KHẨN CẤP & AN TOÀN',
          summaryQuote: 'Ghi nhớ 5 số khẩn cấp: 111 (Bảo vệ trẻ em), 112 (Cứu nạn), 113 (Công an), 114 (Cứu hoả), 115 (Cấp cứu). 4 lưu ý: Không dùng khi đang sạc pin; Dùng khi cần thiết; Thời gian vừa phải; Bảo mật thông tin.',
          branches: [
            { label: '5 số khẩn cấp', color: 'rose', items: ['111: Bảo vệ trẻ em', '112: Tìm kiếm cứu nạn', '113: Công an phản ứng nhanh', '114: Cứu hỏa', '115: Cấp cứu y tế'] },
            { label: '4 lưu ý an toàn', color: 'amber', items: ['Không vừa sạc vừa dùng', 'Chỉ dùng khi cần thiết', 'Thời gian vừa phải', 'Bảo mật thông tin riêng'] }
          ],
          sgkNote: 'Ghi nhớ SGK Công nghệ 5, trang 22 - 24.'
        },
        cungCo: [
          {
            id: 'cc-17-1',
            question: 'Tổng đài điện thoại Quốc gia bảo vệ trẻ em có số là bao nhiêu?',
            options: ['A. 111', 'B. 112', 'C. 113', 'D. 114'],
            correctIndex: 0,
            explanation: 'Số 111 là tổng đài quốc gia bảo vệ trẻ em Việt Nam.'
          },
          {
            id: 'cc-17-2',
            question: 'Hành vi nào sau đây tiềm ẩn nguy cơ cháy nổ nguy hiểm chết người?',
            options: [
              'A. Vừa cắm sạc pin vừa chơi game hoặc nghe gọi điện thoại',
              'B. Lau màn hình bằng khăn mềm khô',
              'C. Để điện thoại ở nơi thoáng mát',
              'D. Tắt máy khi vào phòng thi'
            ],
            correctIndex: 0,
            explanation: 'Vừa sạc vừa dùng khiến pin quá nhiệt, rất dễ phát nổ gây thương tích nghiêm trọng.'
          }
        ],
        teacherGuide: {
          objectives: ['Ghi nhớ và sử dụng đúng các số điện thoại khẩn cấp; tuân thủ các nguyên tắc an toàn, tiết kiệm.'],
          keyKnowledge: ['5 số khẩn cấp 111 - 115 và 4 quy tắc an toàn.'],
          estimatedMinutes: 35,
          methodologyTips: ['Tổ chức trò chơi phản xạ nhanh: Cô giáo hô tên tình huống, học sinh đồng thanh hô số điện thoại.'],
          equipmentNeeded: ['Thẻ số 111, 112, 113, 114, 115'],
          quickAnswers: [{ question: 'Cấp cứu y tế gọi số nào?', answer: '115.' }, { question: 'Cứu hỏa gọi số nào?', answer: '114.' }]
        }
      },
      {
        id: 'tiet-18',
        periodNumber: 18,
        lessonId: 'bai-5',
        periodInLesson: 4,
        totalPeriodsInLesson: 4,
        title: 'Tiết 4: Quy tắc giao tiếp lịch sự & Đóng vai xử lí tình huống',
        focusContent: 'Nắm vững quy tắc giao tiếp qua điện thoại (chào hỏi, xưng danh, nêu mục đích, thái độ lịch sự, giọng nói từ tốn, không ngắt cuộc gọi bất ngờ); đóng vai xử lí 3 tình huống thực tế trong SGK tr. 25.',
        sgkPages: 'Trang 24 – 25',
        khoiDong: {
          title: 'Khởi động: Lựa chọn cách nói chuyện lịch sự',
          type: 'quick_quiz',
          question: 'Khi nhấc máy gọi cho bác của bạn An, cách nói nào sau đây là văn minh, lịch sự?',
          options: [
            'A. "Alo! An có nhà không bác?"',
            'B. "Cháu chào bác ạ! Cháu là Nam, bạn cùng lớp với An. Bác cho cháu xin phép được nói chuyện với bạn An ạ!"',
            'C. "An đâu, bảo nó nghe máy ngay!"',
            'D. Im lặng không nói gì'
          ],
          correctAnswer: 1,
          explanation: 'Cách B có lời chào hỏi kính trọng người lớn, xưng danh rõ ràng và xin phép lịch sự (Hình 7 SGK tr. 24).',
          leadIn: 'Giao tiếp qua điện thoại thể hiện nét đẹp văn hóa và sự giáo dục của mỗi người. Cùng học cách giao tiếp chuẩn mực nhé!'
        },
        khamPha: [
          {
            id: 'kp-18-1',
            title: '1. Quy tắc giao tiếp khi sử dụng điện thoại (SGK tr. 24 - 25)',
            task: 'Đọc mục 2 ghi nhớ tr. 25 và phân tích 4 quy tắc giao tiếp: (1) Chào hỏi, xưng danh và nêu mục đích cuộc gọi; (2) Thể hiện thái độ thân thiện và lịch sự; (3) Giọng nói từ tốn, vừa phải; (4) Không bất ngờ kết thúc cuộc gọi.',
            context: 'Quan sát Hình 7 (cách bắt đầu cuộc gọi) và Hình 8 (cách trả lời điện thoại khi người cần tìm đi vắng).',
            guidingQuestions: [
              '1. Khi bắt đầu cuộc gọi cần nói gì đầu tiên?',
              '2. Giọng nói trong điện thoại to quá hoặc lí nhí quá có tốt không?',
              '3. Khi người cần gặp đi vắng, em nên ứng xử thế nào cho khéo léo?'
            ],
            hiddenAnswer: 'Quy tắc chuẩn: Lời đầu tiên phải chào hỏi lễ phép, giới thiệu mình là ai và xin phép gặp người cần nói chuyện. Nói chuyện với âm lượng vừa phải, rõ ràng. Khi kết thúc cuộc gọi cần có lời chào tạm biệt, không được đột ngột cúp máy.',
            teacherConclusion: 'Giao tiếp văn minh qua điện thoại là: Chào hỏi ➔ Xưng danh ➔ Nêu mục đích ➔ Thái độ lịch sự, giọng từ tốn ➔ Chào tạm biệt trước khi tắt máy.'
          },
          {
            id: 'kp-18-2',
            title: '2. Đóng vai xử lí 3 tình huống thực tế (Mục Vận dụng SGK tr. 25)',
            task: 'Đóng vai và xử lí 3 tình huống SGK tr. 25: (1) Khi em ở nhà một mình và có cuộc gọi đến điện thoại cố định từ một người lạ; (2) Khi gọi điện thoại cho một người nhưng người khác nghe máy; (3) Gọi điện thoại cho bạn để trao đổi về nội dung bài học.',
            context: 'Rèn luyện kỹ năng ứng biến an toàn và có văn hóa.',
            guidingQuestions: [
              '1. Tình huống 1: Người lạ hỏi "Bố mẹ cháu có nhà không?", em có nên khai thật là ở nhà một mình không?',
              '2. Tình huống 2: Người nghe máy là người lớn tuổi, em xử lý ra sao?',
              '3. Tình huống 3: Gọi cho bạn trao đổi bài học cần đi thẳng vào nội dung thế nào?'
            ],
            hiddenAnswer: 'Tình huống 1: Lễ phép nói "Dạ bố mẹ cháu đang bận một chút, bác vui lòng để lại lời nhắn hoặc gọi lại sau ạ", tuyệt đối KHÔNG nói mình đang ở nhà một mình kẻo kẻ xấu lợi dụng. Tình huống 2: Chào hỏi người lớn lễ phép và xin phép được nói chuyện với bạn. Tình huống 3: Chào bạn, nói rõ câu hỏi bài tập cần thảo luận, ngắn gọn súc tích.',
            teacherConclusion: 'Luôn giữ phép lịch sự và đề cao cảnh giác bảo vệ an toàn cho bản thân khi tiếp xúc với người lạ qua điện thoại.'
          }
        ],
        thaoLuan: {
          title: 'Đóng vai tiểu phẩm theo cặp',
          groupTask: 'Hai bạn lên trước lớp đóng vai tình huống: Bạn Nam gọi điện cho bạn Mai hỏi về bài tập thủ công nhưng mẹ bạn Mai nghe máy.',
          durationMinutes: 5,
          guidingPrompts: ['Lời chào mẹ bạn Mai', 'Xin phép gặp Mai', 'Lời cảm ơn mẹ bạn Mai'],
          suggestedHints: ['"Dạ cháu chào cô ạ, cháu là Nam bạn của Mai, cô cho cháu xin phép gặp bạn Mai để hỏi bài tập ạ!"'],
          conclusion: 'Tiểu phẩm sinh động giúp cả lớp ghi nhớ quy tắc giao tiếp tự nhiên và chuẩn mực.'
        },
        luyenTap: [
          {
            id: 'lt-18-1',
            type: 'true_false',
            statement: 'Khi đang nói chuyện dở mà cảm thấy không thích nghe nữa, ta có thể tự ý dập máy ngay mà không cần nói lời chào tạm biệt.',
            isCorrect: false,
            explanation: 'Bất ngờ cúp máy là hành vi rất bất lịch sự, thiếu tôn trọng người đang trò chuyện cùng mình.',
            difficulty: 'basic'
          },
          {
            id: 'lt-18-2',
            type: 'mcq',
            question: 'Khi em ở nhà một mình, có người lạ gọi điện hỏi "Bố mẹ cháu có ở nhà không?", câu trả lời nào AN TOÀN NHẤT?',
            options: [
              'A. "Dạ bố mẹ cháu đi vắng hết rồi, chỉ có một mình cháu ở nhà thôi ạ!"',
              'B. "Dạ bố mẹ cháu đang bận dưới bếp một chút, bác vui lòng để lại số điện thoại để bố mẹ cháu gọi lại sau ạ!"',
              'C. "Cháu đang sợ lắm bác đến đón cháu đi!"',
              'D. Kể hết địa chỉ nhà cho người lạ nghe'
            ],
            correctAnswer: 1,
            explanation: 'Câu B vừa lịch sự vừa không để lộ việc mình đang ở nhà một mình, bảo vệ an toàn tuyệt đối.',
            difficulty: 'intermediate'
          }
        ],
        vanDung: {
          title: 'Em vận dụng: Chia sẻ cùng người thân',
          scenario: 'Cuối tuần này, em hãy cùng bố mẹ thực hành một cuộc gọi điện thoại giả định hoặc gọi điện thăm hỏi ông bà ở quê.',
          question: 'Em sẽ chuẩn bị lời chúc nào gửi đến ông bà qua điện thoại?',
          options: [
            {
              label: 'A',
              text: '"Cháu chào ông bà ạ! Cháu gọi điện thăm sức khỏe ông bà. Tuần này cháu được nhiều điểm 10, cháu chúc ông bà luôn mạnh khỏe, vui vẻ ạ!"',
              isOptimal: true,
              feedback: 'Lời thăm hỏi ấm áp, hiếu thảo và đầy đủ quy tắc giao tiếp lịch sự!'
            },
            {
              label: 'B',
              text: '"Alo, gửi tiền cho cháu mua đồ chơi đi!"',
              isOptimal: false,
              feedback: 'Thiếu lễ phép và chưa có sự kính trọng bề trên.'
            }
          ],
          teacherExplanation: 'Điện thoại là chiếc cầu nối tình cảm thiêng liêng khi chúng ta biết dùng bằng cả tấm lòng hiếu thảo.'
        },
        ghiNho: {
          mainTitle: 'TỔNG KẾT BÀI 5: SỬ DỤNG ĐIỆN THOẠI',
          summaryQuote: 'Sử dụng điện thoại AN TOÀN - TIẾT KIỆM - VĂN MINH. Thuộc 5 số khẩn cấp (111-115). Luôn chào hỏi, xưng danh, nói năng từ tốn và chào tạm biệt trước khi kết thúc cuộc gọi.',
          branches: [
            { label: 'Quy tắc giao tiếp', color: 'blue', items: ['Chào hỏi, xưng danh', 'Thái độ lịch sự, từ tốn', 'Không cúp máy bất ngờ'] },
            { label: 'An toàn bản thân', color: 'emerald', items: ['Không nói ở nhà một mình', 'Không lộ mật khẩu, thông tin', 'Không vừa sạc vừa dùng'] }
          ],
          sgkNote: 'Ghi nhớ SGK Công nghệ 5, trang 25.'
        },
        cungCo: [
          {
            id: 'cc-18-1',
            question: 'Khi trả lời điện thoại mà người cần tìm đi vắng, câu nói nào là đúng mực?',
            options: [
              'A. "Đi vắng rồi, gọi lại sau nhé!" (cúp máy)',
              'B. "Dạ, anh Dũng đi vắng rồi. Anh tên là gì ạ? Em sẽ báo anh Dũng gọi lại cho anh khi anh ấy về ạ."',
              'C. "Tôi không biết, đừng gọi nữa!"',
              'D. Không nói năng gì'
            ],
            correctIndex: 1,
            explanation: 'Cách B thể hiện sự lễ phép, ghi nhận thông tin giúp người thân (Hình 8 SGK tr. 24).'
          }
        ],
        teacherGuide: {
          objectives: ['Học sinh nắm vững quy tắc giao tiếp lịch sự; đóng vai xử lí thành thạo 3 tình huống SGK.'],
          keyKnowledge: ['Văn hóa giao tiếp qua điện thoại và an toàn số cho học sinh tiểu học.'],
          estimatedMinutes: 35,
          methodologyTips: ['Khuyến khích học sinh đóng vai chân thực, sửa ngay cách xưng hô chưa phù hợp.'],
          equipmentNeeded: ['2 mô hình điện thoại đồ chơi'],
          quickAnswers: [{ question: 'Bốn quy tắc giao tiếp cốt lõi là gì?', answer: 'Chào hỏi, xưng danh, thái độ lịch sự từ tốn, không ngắt cuộc gọi bất ngờ.' }]
        }
      }
    ]
  },
  {
    id: 'danh-gia-hk1-cuoi',
    number: 'Tiết 19',
    title: 'Ôn tập và Đánh giá Cuối học kì 1',
    partId: 'part-1',
    partTitle: 'PHẦN MỘT: CÔNG NGHỆ VÀ ĐỜI SỐNG',
    totalPeriods: 1,
    sgkPages: 'Ôn tập toàn diện Bài 1 đến Bài 5',
    isEvaluation: true,
    periods: [
      {
        id: 'tiet-19',
        periodNumber: 19,
        lessonId: 'danh-gia-hk1-cuoi',
        periodInLesson: 1,
        totalPeriodsInLesson: 1,
        title: 'Tiết 19: Ôn tập và Đánh giá Cuối học kì 1',
        focusContent: 'Hệ thống hóa toàn bộ kiến thức Phần một (Bài 1: Vai trò công nghệ; Bài 2: Nhà sáng chế; Bài 3: Tìm hiểu thiết kế; Bài 4: Thiết kế sản phẩm; Bài 5: Sử dụng điện thoại); thực hiện bài kiểm tra cuối kì 1.',
        sgkPages: 'Trang 6 – 25',
        khoiDong: {
          title: 'Khởi động: Thử thách chinh phục đỉnh cao HK1',
          type: 'quick_quiz',
          question: 'Em đã cùng bạn bè hoàn thành 5 bài học lớn của học kì 1. Em thấy mình tự tin nhất ở bài học nào?',
          options: [
            'A. Bài 1: Vai trò của công nghệ',
            'B. Bài 2: Nhà sáng chế vĩ đại',
            'C. Bài 3 & 4: Quy trình thiết kế sản phẩm',
            'D. Bài 5: Sử dụng điện thoại an toàn, văn minh'
          ],
          correctAnswer: 3,
          explanation: 'Tất cả các bài học đều rất thực tế và bổ ích cho cuộc sống!',
          leadIn: 'Hãy cùng tổng duyệt lại kho tàng kiến thức trước khi làm bài kiểm tra cuối học kì 1!'
        },
        khamPha: [
          {
            id: 'kp-19-1',
            title: 'Hệ thống hóa 5 bài học cốt lõi học kì 1',
            task: 'Tóm lược 5 bài học: (1) Vai trò & Mặt trái công nghệ; (2) 4 nhà sáng chế (1784, 1876, 1879, 1886); (3) 4 bước thiết kế; (4) 3 tiêu chí đánh giá sản phẩm; (5) 5 số khẩn cấp & 4 quy tắc gọi điện.',
            context: 'Bảng tổng hợp toàn diện giúp học sinh tự tin đạt điểm tối đa.',
            guidingQuestions: [
              '1. Nhà sáng chế Tô-mát Ê-đi-xơn được cấp bằng sáng chế bóng đèn năm nào?',
              '2. Quy trình thiết kế gồm 4 bước theo thứ tự nào?',
              '3. Kể tên 5 số điện thoại khẩn cấp quốc gia?'
            ],
            hiddenAnswer: 'Ê-đi-xơn: Bóng đèn sợi đốt năm 1879; 4 bước thiết kế: Ý tưởng ➔ Phác thảo & vật liệu ➔ Làm mẫu ➔ Đánh giá hoàn thiện; 5 số khẩn cấp: 111, 112, 113, 114, 115.',
            teacherConclusion: 'Học kì 1 đã trang bị cho các em nền tảng tư duy công nghệ và kỹ năng thiết kế sáng tạo vững chắc.'
          }
        ],
        thaoLuan: {
          title: 'Ôn tập vòng tròn câu hỏi nhanh',
          groupTask: 'Chia lớp làm 4 đội thi đua trả lời nhanh các câu hỏi trắc nghiệm ôn tập cuối học kì 1.',
          durationMinutes: 5,
          guidingPrompts: ['Bấm chuông giành quyền trả lời', 'Giải thích vì sao chọn đáp án đó'],
          suggestedHints: ['Bình tĩnh đọc kỹ câu hỏi trước khi chọn.'],
          conclusion: 'Tinh thần học tập sôi nổi sẵn sàng cho bài kiểm tra.'
        },
        luyenTap: [
          {
            id: 'lt-19-1',
            type: 'mcq',
            question: 'Khi phát hiện đám cháy xảy ra trong khu dân cư, số điện thoại khẩn cấp cần gọi ngay là:',
            options: ['A. 111', 'B. 113', 'C. 114', 'D. 115'],
            correctAnswer: 2,
            explanation: 'Số 114 là tổng đài cứu hỏa phòng cháy chữa cháy.',
            difficulty: 'basic'
          },
          {
            id: 'lt-19-2',
            type: 'matching',
            instruction: 'Nối đúng nội dung với bài học tương ứng:',
            leftItems: [
              { id: 'm-1', text: 'Giêm Oát (1784)' },
              { id: 'm-2', text: 'Thiết kế sản phẩm mẫu' },
              { id: 'm-3', text: 'Tổng đài bảo vệ trẻ em 111' },
              { id: 'm-4', text: 'Nước thải công nghiệp ô nhiễm' }
            ],
            rightItems: [
              { id: 'a-1', text: 'Bài 2: Nhà sáng chế' },
              { id: 'a-2', text: 'Bài 3 & 4: Thiết kế sản phẩm' },
              { id: 'a-3', text: 'Bài 5: Sử dụng điện thoại' },
              { id: 'a-4', text: 'Bài 1: Mặt trái của công nghệ' }
            ],
            correctPairs: [
              { leftId: 'm-1', rightId: 'a-1' },
              { leftId: 'm-2', rightId: 'a-2' },
              { leftId: 'm-3', rightId: 'a-3' },
              { leftId: 'm-4', rightId: 'a-4' }
            ],
            difficulty: 'intermediate'
          }
        ],
        vanDung: {
          title: 'Em vận dụng: Viết lời cam kết công dân số nhí',
          scenario: 'Cuối học kì 1, trường phát động phong trào "Học sinh tiểu học sử dụng công nghệ an toàn, văn minh và tiết kiệm".',
          question: 'Em hãy chọn hành động thiết thực nhất em cam kết thực hiện:',
          options: [
            {
              label: 'A',
              text: 'Không chơi điện thoại quá 30 phút/ngày, không vừa sạc vừa dùng, luôn chào hỏi lễ phép khi nghe gọi điện thoại và chăm chỉ rèn luyện tư duy sáng tạo',
              isOptimal: true,
              feedback: 'Tuyệt vời! Lời cam kết đầy trách nhiệm của một học sinh gương mẫu.'
            },
            {
              label: 'B',
              text: 'Cứ hứa cho xong rồi về nhà vẫn chơi game thâu đêm',
              isOptimal: false,
              feedback: 'Hành động không trung thực.'
            }
          ],
          teacherExplanation: 'Biến kiến thức đã học thành hành động thực tế là mục tiêu cao nhất của môn Công nghệ.'
        },
        ghiNho: {
          mainTitle: 'TỔNG KẾT TOÀN DIỆN HỌC KÌ 1',
          summaryQuote: 'Hoàn thành xuất sắc 5 bài học Phần một: Hiểu vai trò công nghệ; Tôn vinh các nhà sáng chế; Làm chủ quy trình thiết kế 4 bước; Sử dụng điện thoại an toàn và văn minh.',
          branches: [
            { label: 'Bài 1 & 2', color: 'blue', items: ['Vai trò & Mặt trái công nghệ', '4 nhà sáng chế & Trục thời gian'] },
            { label: 'Bài 3 & 4', color: 'emerald', items: ['Quy trình thiết kế 4 bước', 'Đồng hồ đeo tay & 3 tiêu chí đánh giá'] },
            { label: 'Bài 5', color: 'amber', items: ['5 số khẩn cấp 111-115', '4 quy tắc giao tiếp lịch sự'] }
          ],
          sgkNote: 'Bảng tổng kết chuẩn đánh giá Cuối học kì 1.'
        },
        cungCo: [
          {
            id: 'cc-19-1',
            question: 'Chiếc ô tô chạy bằng xăng đầu tiên của Các Ben ra đời năm nào?',
            options: ['A. Năm 1784', 'B. Năm 1876', 'C. Năm 1879', 'D. Năm 1886'],
            correctIndex: 3,
            explanation: 'Năm 1886 tại Đức do kĩ sư Các Ben chế tạo.'
          }
        ],
        teacherGuide: {
          objectives: ['Đánh giá tổng kết học kì 1 môn Công nghệ 5; xếp loại năng lực học tập của học sinh.'],
          keyKnowledge: ['Toàn bộ kiến thức Phần một (Bài 1 - 5).'],
          estimatedMinutes: 35,
          methodologyTips: ['Tổ chức kiểm tra nghiêm túc, biểu dương học sinh có tiến bộ vượt bậc.'],
          equipmentNeeded: ['Đề kiểm tra cuối kì 1'],
          quickAnswers: [{ question: 'Tổng số bài học kiểm tra?', answer: '5 bài học chính.' }]
        }
      }
    ]
  },
  {
    id: 'bai-6',
    number: 6,
    title: 'Sử dụng tủ lạnh',
    partId: 'part-1',
    partTitle: 'PHẦN MỘT: CÔNG NGHỆ VÀ ĐỜI SỐNG',
    totalPeriods: 2,
    sgkPages: 'Trang 26 – 30',
    periods: [
      {
        id: 'tiet-20',
        periodNumber: 20,
        lessonId: 'bai-6',
        periodInLesson: 1,
        totalPeriodsInLesson: 2,
        title: 'Tiết 1: Tác dụng của tủ lạnh & Vị trí, vai trò các khoang',
        focusContent: 'Trình bày tác dụng của tủ lạnh trong gia đình (bảo quản ở nhiệt độ thấp kéo dài thời gian: làm lạnh 1-7°C trong 3-5 ngày, đông lạnh <0°C trong vài tuần đến vài tháng); nhận biết vị trí và vai trò 2 khoang chính: Khoang cấp đông và Khoang làm lạnh (Hình 1 SGK tr. 27).',
        sgkPages: 'Trang 26 – 27',
        khoiDong: {
          title: 'Khởi động: Giúp mẹ cất đồ ăn',
          type: 'question',
          question: 'Em hãy đọc cuộc đối thoại SGK tr. 26: Mẹ bảo: "Con cất đồ vào tủ lạnh giúp mẹ". Bạn nhỏ băn khoăn: "Mình nên sắp xếp vào ngăn nào được nhỉ?". Theo em, vì sao chúng ta không thể nhét tất cả thịt tươi sống và rau củ chung vào một chỗ trong tủ lạnh?',
          options: [
            'A. Vì mỗi loại thực phẩm cần nhiệt độ bảo quản khác nhau để tươi ngon và không lây nhiễm vi khuẩn',
            'B. Thích nhét vào đâu cũng như nhau',
            'C. Để cho đầy tủ lạnh',
            'D. Không có lý do gì'
          ],
          correctAnswer: 0,
          explanation: 'Tủ lạnh được chia thành nhiều khoang có nhiệt độ khác nhau chuyên biệt cho từng loại thực phẩm.',
          leadIn: 'Hôm nay chúng ta sẽ cùng khám phá bí mật bên trong chiếc tủ lạnh để trở thành những người nội trợ thông thái!'
        },
        khamPha: [
          {
            id: 'kp-20-1',
            title: '1. Tác dụng của tủ lạnh (Mục 1 SGK tr. 26)',
            task: 'Đọc thông tin SGK tr. 26: Tủ lạnh có tác dụng gì? So sánh thời gian và nhiệt độ bảo quản thịt cá giữa: Phương pháp làm lạnh (1°C đến 7°C) và Phương pháp đông lạnh (dưới 0°C).',
            context: 'Nhiệt độ thấp ức chế sự phát triển của vi khuẩn gây ôi thiu thực phẩm.',
            guidingQuestions: [
              '1. Tủ lạnh là thiết bị điện có chức năng chính là gì?',
              '2. Ở nhiệt độ làm lạnh (1°C - 7°C), thịt cá giữ được bao lâu (3 - 5 ngày)?',
              '3. Ở nhiệt độ đông lạnh (dưới 0°C), thực phẩm giữ được bao lâu (vài tuần đến vài tháng)?'
            ],
            hiddenAnswer: 'Tủ lạnh là thiết bị điện phổ biến có chức năng bảo quản thực phẩm ở nhiệt độ thấp, giúp kéo dài thời gian sử dụng. Phương pháp làm lạnh (1°C - 7°C) bảo quản 3 - 5 ngày; phương pháp đông lạnh (<0°C) bảo quản từ vài tuần đến vài tháng.',
            teacherConclusion: 'Tủ lạnh giúp bảo quản thực phẩm tươi ngon, giữ nguyên chất dinh dưỡng và hạn chế vi khuẩn phát triển.'
          },
          {
            id: 'kp-20-2',
            title: '2. Vị trí và vai trò các khoang trong tủ lạnh (Hình 1 SGK tr. 27)',
            task: 'Quan sát Hình 1 SGK tr. 27: Ghép thẻ mô tả tên khoang (A: Khoang cấp đông; B: Khoang làm lạnh) và vai trò (a: Để bảo quản lạnh thực phẩm; b: Để làm đá và bảo quản đông lạnh thực phẩm) với vị trí 1 và 2 trong hình.',
            context: 'Sơ đồ mặt cắt chiếc tủ lạnh gia đình 2 cánh thông dụng.',
            guidingQuestions: [
              '1. Vị trí số 1 (ngăn phía trên có khay đá và hộp kem) là khoang gì?',
              '2. Vị trí số 2 (ngăn phía dưới rộng rãi có khay rau quả, cánh cửa để chai nước) là khoang gì?',
              '3. Nhiệt độ ở khoang nào thấp hơn (khoang nào đóng băng được nước)?'
            ],
            hiddenAnswer: 'Vị trí 1: Khoang cấp đông (Thẻ A - b: dùng để làm đá và bảo quản đông lạnh thực phẩm thịt, cá, hải sản lâu ngày). Vị trí 2: Khoang làm lạnh (Thẻ B - a: dùng để bảo quản lạnh rau củ quả, trứng, sữa, nước ngọt, thức ăn nấu chín).',
            teacherConclusion: 'Tủ lạnh thường gồm 2 khoang chính: Khoang làm lạnh và Khoang cấp đông. Trong mỗi khoang lại có các ngăn chuyên dụng.'
          }
        ],
        thaoLuan: {
          title: 'Thảo luận nhóm: Khám phá các ngăn trong khoang làm lạnh',
          groupTask: 'Nhóm 4 bạn: Kể tên các ngăn nhỏ trong khoang làm lạnh nhà em (ngăn đựng rau quả có nắp đậy, khay để trứng ở cánh tủ, kệ để chai lọ...). Vì sao ngăn rau củ lại có nắp kín?',
          durationMinutes: 4,
          guidingPrompts: ['Ngăn rau quả cần giữ độ ẩm để rau không bị khô héo.', 'Khay trứng giúp trứng cố định không bị lăn vỡ.'],
          suggestedHints: ['Nắp đậy ngăn rau giúp giữ ẩm, tránh hơi lạnh trực tiếp làm rau bị úng hoặc khô quắt.'],
          conclusion: 'Thiết kế thông minh của từng ngăn tủ phục vụ tối ưu cho từng loại đồ ăn.'
        },
        luyenTap: [
          {
            id: 'lt-20-1',
            type: 'matching',
            instruction: 'Nối đúng tên khoang với đặc điểm nhiệt độ và công dụng:',
            leftItems: [
              { id: 'k-dong', text: 'Khoang cấp đông' },
              { id: 'k-lanh', text: 'Khoang làm lạnh' }
            ],
            rightItems: [
              { id: 'd-dong', text: 'Nhiệt độ dưới 0°C, dùng làm đá và trữ thịt cá vài tuần đến vài tháng' },
              { id: 'd-lanh', text: 'Nhiệt độ từ 1°C đến 7°C, dùng giữ rau củ quả tươi, sữa, nước uống trong 3 - 5 ngày' }
            ],
            correctPairs: [
              { leftId: 'k-dong', rightId: 'd-dong' },
              { leftId: 'k-lanh', rightId: 'd-lanh' }
            ],
            difficulty: 'basic'
          },
          {
            id: 'lt-20-2',
            type: 'true_false',
            statement: 'Khoang làm lạnh có nhiệt độ dưới 0°C nên nước để trong khoang làm lạnh sẽ tự đóng thành đá cứng.',
            isCorrect: false,
            explanation: 'Sai. Khoang làm lạnh duy trì từ 1°C đến 7°C nên nước không đóng băng được. Muốn làm đá phải để vào khoang cấp đông (nhiệt độ dưới 0°C).',
            difficulty: 'basic'
          }
        ],
        vanDung: {
          title: 'Em vận dụng: Phân loại thực phẩm vào tủ lạnh',
          scenario: 'Mẹ đi siêu thị về mua: 1 khay thịt bò tươi dự kiến ăn trong 2 tuần tới, 1 bó rau xà lách, 1 vỉ trứng gà và 1 hộp kem socola.',
          question: 'Em hãy giúp mẹ cất các món đồ trên vào đúng khoang phù hợp nhất:',
          options: [
            {
              label: 'A',
              text: 'Khoang cấp đông: Thịt bò & Hộp kem. Khoang làm lạnh: Rau xà lách & Vỉ trứng gà',
              isOptimal: true,
              feedback: 'Hoàn toàn chính xác! Thịt để lâu và kem cần nhiệt độ đông đá; rau và trứng cần nhiệt độ làm lạnh để không bị đông cứng hỏng.'
            },
            {
              label: 'B',
              text: 'Nhét tất cả rau xà lách lên khoang cấp đông làm đá',
              isOptimal: false,
              feedback: 'Rau để khoang cấp đông sẽ bị đóng băng, khi rã đông sẽ nát nhũn không ăn được.'
            }
          ],
          teacherExplanation: 'Sắp xếp đúng khoang giúp giữ trọn vẹn dinh dưỡng và hương vị thực phẩm.'
        },
        ghiNho: {
          mainTitle: 'BÀI 6 - TIẾT 1: TÁC DỤNG & CÁC KHOANG TỦ LẠNH',
          summaryQuote: 'Tủ lạnh bảo quản thực phẩm ở nhiệt độ thấp. Gồm 2 khoang chính: Khoang cấp đông (<0°C, làm đá, trữ đông lâu ngày) và Khoang làm lạnh (1-7°C, bảo quản rau quả, thức ăn 3-5 ngày).',
          branches: [
            { label: 'Khoang cấp đông', color: 'blue', items: ['Nhiệt độ dưới 0°C', 'Làm đá lạnh', 'Bảo quản thịt cá nhiều tuần'] },
            { label: 'Khoang làm lạnh', color: 'emerald', items: ['Nhiệt độ 1°C đến 7°C', 'Bảo quản rau củ quả', 'Đựng trứng, sữa, đồ uống'] }
          ],
          sgkNote: 'Ghi nhớ SGK Công nghệ 5, trang 26 - 27.'
        },
        cungCo: [
          {
            id: 'cc-20-1',
            question: 'Khoang cấp đông của tủ lạnh thường có nhiệt độ là bao nhiêu?',
            options: ['A. Dưới 0°C', 'B. Từ 1°C đến 7°C', 'C. Khoảng 25°C', 'D. Trên 100°C'],
            correctIndex: 0,
            explanation: 'Nhiệt độ dưới 0°C để đóng băng nước và bảo quản đông lạnh.'
          }
        ],
        teacherGuide: {
          objectives: ['Trình bày được tác dụng của tủ lạnh; nhận biết vị trí và vai trò của 2 khoang chính.'],
          keyKnowledge: ['2 khoang tủ lạnh: Cấp đông (<0°C) và Làm lạnh (1 - 7°C).'],
          estimatedMinutes: 35,
          methodologyTips: ['Sử dụng mô hình cắt lớp tủ lạnh để học sinh tự kéo thả các loại thức ăn vào đúng ngăn.'],
          equipmentNeeded: ['Tranh sơ đồ Hình 1 SGK tr. 27'],
          quickAnswers: [{ question: 'Bảo quản rau quả ở khoang nào?', answer: 'Khoang làm lạnh.' }]
        }
      },
      {
        id: 'tiet-21',
        periodNumber: 21,
        lessonId: 'bai-6',
        periodInLesson: 2,
        totalPeriodsInLesson: 2,
        title: 'Tiết 2: Sắp xếp bảo quản thực phẩm, Biểu hiện bất thường & Khử mùi',
        focusContent: 'Thực hiện sắp xếp thực phẩm đúng cách (Hình 2 & 3 SGK tr. 28); nhận biết 4 biểu hiện bất thường của tủ lạnh (Hình 4 tr. 29); nắm vững các biện pháp khử mùi tự nhiên (chanh, vỏ cam quýt, bã cà phê tr. 30).',
        sgkPages: 'Trang 28 – 30',
        khoiDong: {
          title: 'Khởi động: Thám tử tủ lạnh',
          type: 'quick_quiz',
          question: 'Khi mở tủ lạnh ra thấy một bát canh nóng hổi vừa nấu xong đang bốc khói nghi ngút được cho ngay vào tủ, hành động này Đúng hay Sai?',
          options: [
            'A. Đúng vì làm thế canh nhanh nguội hơn',
            'B. Sai vì để đồ nóng vào tủ sẽ làm nhiệt độ trong tủ tăng lên, hại máy nén và làm hỏng các thực phẩm bên cạnh',
            'C. Càng nóng càng tốt',
            'D. Không ảnh hưởng gì'
          ],
          correctAnswer: 1,
          explanation: 'Quy tắc vàng SGK tr. 29: Tuyệt đối KHÔNG để thực phẩm nóng vào bên trong tủ lạnh!',
          leadIn: 'Hãy cùng khám phá 4 quy tắc sắp xếp thực phẩm đúng cách và bí kíp giữ tủ lạnh luôn thơm mát!'
        },
        khamPha: [
          {
            id: 'kp-21-1',
            title: '1. Quy tắc sắp xếp, bảo quản thực phẩm (Hình 2 & 3 SGK tr. 28 - 29)',
            task: 'Quan sát Hình 3 SGK: Chỉ ra những hình ảnh thể hiện sắp xếp KHÔNG ĐÚNG CÁCH (tranh a: nhét quá nhiều đồ chật ních; tranh b: cá tươi không bọc màng để cạnh đồ ăn chín; tranh c: sắp xếp ngăn nắp có hộp đậy kín; tranh d: để bát canh nóng bốc khói). Đọc 4 lưu ý SGK tr. 29.',
            context: 'Thực hành kỹ năng an toàn vệ sinh thực phẩm gia đình.',
            guidingQuestions: [
              '1. Hình 3a và 3b sai ở những điểm nào?',
              '2. Vì sao thực phẩm cần được đựng trong hộp có nắp đậy hoặc bọc màng bọc?',
              '3. Nếu nhồi nhét quá nhiều thực phẩm chật kín tủ thì hơi lạnh có lưu thông được không?'
            ],
            hiddenAnswer: 'Hình không đúng: 3a (chứa quá nhiều đồ cản trở hơi lạnh); 3b (thực phẩm sống không bọc kín gây nhiễm khuẩn chéo); 3d (cho đồ ăn nóng vào tủ). Bốn lưu ý đúng: (1) Dùng đúng khoang cấp đông/làm lạnh; (2) Không để thực phẩm nóng vào trong tủ; (3) Không chứa quá nhiều thực phẩm; (4) Sử dụng màng bọc hoặc hộp đựng đậy kín.',
            teacherConclusion: 'Sắp xếp ngăn nắp, bọc kín thực phẩm và không để đồ nóng giúp tủ lạnh hoạt động bền bỉ và giữ vệ sinh an toàn.'
          },
          {
            id: 'kp-21-2',
            title: '2. Biểu hiện bất thường & Cách khử mùi tủ lạnh (Hình 4 tr. 29 & tr. 30)',
            task: 'Quan sát 4 tình huống Hình 4 SGK: a) Tủ đóng tuyết dày đặc; b) Tủ bốc mùi hôi nồng nặc; c) Tủ phát ra tiếng ồn kêu to bất thường; d) Nước rò rỉ chảy lênh láng ra sàn nhà. Cần xử lý thế nào? Nêu các cách khử mùi tự nhiên trang 30.',
            context: 'Nhận biết sự cố kỹ thuật và mẹo vặt gia đình.',
            guidingQuestions: [
              '1. Khi phát hiện các biểu hiện bất thường trên, học sinh lớp 5 nên làm gì đầu tiên?',
              '2. Em có thể dùng những vật liệu thiên nhiên nào để khử mùi hôi cho tủ lạnh (chanh tươi, vỏ cam quýt, bã cà phê)?'
            ],
            hiddenAnswer: 'Khi phát hiện tủ lạnh có dấu hiệu bất thường (đóng tuyết dày, kêu to, chảy nước, rò điện), cần THÔNG BÁO NGAY CHO NGƯỜI LỚN để xử lý, không tự ý cậy phá. Để khử mùi hôi: Đặt vài lát chanh quả, vỏ cam quýt hoặc một chén nhỏ bã cà phê vào các ngăn; vệ sinh tủ lạnh thường xuyên.',
            teacherConclusion: 'Báo ngay cho người lớn khi có sự cố bất thường và khử mùi tự nhiên định kỳ bằng chanh, vỏ cam hoặc bã cà phê.'
          }
        ],
        thaoLuan: {
          title: 'Thảo luận nhóm: Phân loại thực phẩm sống và chín',
          groupTask: 'Nhóm 4 bạn: Thảo luận vì sao không được để thịt cá tươi sống tiếp xúc trực tiếp hoặc đặt bên cạnh thức ăn đã nấu chín?',
          durationMinutes: 4,
          guidingPrompts: ['Vi khuẩn ở thịt sống có lây lan sang đĩa thức ăn chín không?', 'Hậu quả khi ăn phải đồ bị nhiễm khuẩn?'],
          suggestedHints: ['Thịt cá sống chứa nhiều vi khuẩn tự nhiên, nếu không bọc kín sẽ lây nhiễm chéo sang thức ăn chín gây đau bụng, ngộ độc thực phẩm.'],
          conclusion: 'Luôn bảo quản riêng biệt thực phẩm sống và thức ăn chín trong các hộp đậy kín.'
        },
        luyenTap: [
          {
            id: 'lt-21-1',
            type: 'true_false',
            statement: 'Khi thấy tủ lạnh bị rò rỉ nước ra sàn nhà và kêu to bất thường, học sinh lớp 5 nên lấy tua-vít tự tháo mặt sau tủ lạnh ra để sửa.',
            isCorrect: false,
            explanation: 'Rất nguy hiểm vì có nguy cơ bị điện giật hoặc rò rỉ khí gas. Học sinh phải THÔNG BÁO NGAY CHO NGƯỜI LỚN trong nhà để xử lý.',
            difficulty: 'basic'
          },
          {
            id: 'lt-21-2',
            type: 'categorize',
            instruction: 'Phân loại các hành động sau vào 2 nhóm:',
            categories: [
              { id: 'hd-dung', name: 'NÊN LÀM khi dùng tủ lạnh' },
              { id: 'hd-sai', name: 'KHÔNG NÊN LÀM' }
            ],
            items: [
              { id: 'act-1', text: 'Bọc kín thức ăn hoặc đậy nắp hộp cẩn thận', correctCategoryId: 'hd-dung' },
              { id: 'act-2', text: 'Cho bát canh sôi sùng sục vào tủ ngay', correctCategoryId: 'hd-sai' },
              { id: 'act-3', text: 'Đặt vỏ cam quýt, bã cà phê để khử mùi', correctCategoryId: 'hd-dung' },
              { id: 'act-4', text: 'Nhồi nhét chật ních bít kín các lỗ thổi hơi lạnh', correctCategoryId: 'hd-sai' }
            ],
            difficulty: 'basic'
          }
        ],
        vanDung: {
          title: 'Em vận dụng: Giúp bố mẹ làm sạch tủ lạnh',
          scenario: 'Cuối tuần, mẹ dự định tổng vệ sinh chiếc tủ lạnh của gia đình.',
          question: 'Em có thể giúp mẹ những việc làm vừa sức nào dưới đây?',
          options: [
            {
              label: 'A',
              text: 'Rút phích cắm điện, lấy hết thực phẩm ra ngoài, lau khô các ngăn bằng khăn mềm sạch và đặt đĩa bã cà phê hoặc quả chanh cắt lát vào tủ',
              isOptimal: true,
              feedback: 'Tuyệt vời! Đây là những việc làm vừa sức, an toàn và giúp tủ lạnh luôn sạch thơm mát.'
            },
            {
              label: 'B',
              text: 'Dùng dao nhọn cạy mạnh vào dàn lạnh để phá lớp tuyết đóng băng',
              isOptimal: false,
              feedback: 'Rất nguy hiểm! Dùng dao nhọn có thể làm thủng dàn lạnh gây xì khí gas độc hại và hỏng tủ.'
            }
          ],
          teacherExplanation: 'Vệ sinh định kỳ bằng khăn mềm và khử mùi tự nhiên giúp tăng tuổi thọ thiết bị và bảo vệ sức khỏe gia đình.'
        },
        ghiNho: {
          mainTitle: 'TỔNG KẾT BÀI 6: SỬ DỤNG TỦ LẠNH',
          summaryQuote: '4 lưu ý sắp xếp: Dùng đúng khoang; Không để đồ nóng; Không chứa quá nhiều; Dùng hộp đậy kín. Báo người lớn khi có bất thường. Khử mùi bằng chanh, vỏ cam quýt, bã cà phê.',
          branches: [
            { label: '4 quy tắc vàng', color: 'blue', items: ['Đúng khoang cấp đông/làm lạnh', 'Để nguội trước khi cho vào', 'Không nhồi nhét quá đầy', 'Đậy kín hộp, bọc thực phẩm'] },
            { label: 'Khử mùi tự nhiên', color: 'emerald', items: ['Quả chanh cắt lát', 'Vỏ cam, vỏ quýt', 'Bã cà phê rang'] },
            { label: 'Khi có bất thường', color: 'rose', items: ['Tuyết dày, kêu to, chảy nước', 'Báo ngay cho người lớn'] }
          ],
          sgkNote: 'Ghi nhớ SGK Công nghệ 5, trang 28 - 30.'
        },
        cungCo: [
          {
            id: 'cc-21-1',
            question: 'Vật liệu tự nhiên nào sau đây có tác dụng hút và khử mùi hôi trong tủ lạnh?',
            options: [
              'A. Quả chanh, vỏ cam quýt, bã cà phê',
              'B. Chai nước hoa xịt phòng có hóa chất nồng nặc',
              'C. Miếng xà phòng thơm',
              'D. Tro bếp'
            ],
            correctIndex: 0,
            explanation: 'Chanh, vỏ cam quýt và bã cà phê có tinh dầu tự nhiên khử mùi rất an toàn cho thực phẩm.'
          }
        ],
        teacherGuide: {
          objectives: ['Học sinh nắm vững cách sắp xếp thực phẩm khoa học; nhận biết dấu hiệu bất thường và biết cách khử mùi tủ lạnh.'],
          keyKnowledge: ['4 nguyên tắc sắp xếp và mẹo khử mùi dân gian an toàn.'],
          estimatedMinutes: 35,
          methodologyTips: ['Mang vài quả chanh hoặc túi bã cà phê khô vào lớp cho học sinh ngửi thử mùi thơm tự nhiên.'],
          equipmentNeeded: ['Hình 2, 3, 4 SGK tr. 28 - 30, quả chanh thật'],
          quickAnswers: [{ question: 'Có được để đồ ăn nóng vào tủ không?', answer: 'Tuyệt đối không.' }]
        }
      }
    ]
  }
];
