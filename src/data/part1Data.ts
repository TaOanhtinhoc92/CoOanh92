import { Lesson } from '../types';

export const PART_1_LESSONS: Lesson[] = [
  {
    id: 'bai-1',
    number: 1,
    title: 'Vai trò của công nghệ',
    partId: 'part-1',
    partTitle: 'PHẦN MỘT: CÔNG NGHỆ VÀ ĐỜI SỐNG',
    totalPeriods: 3,
    sgkPages: 'Trang 6 – 8',
    periods: [
      {
        id: 'tiet-1',
        periodNumber: 1,
        lessonId: 'bai-1',
        periodInLesson: 1,
        totalPeriodsInLesson: 3,
        title: 'Tiết 1: Vai trò của sản phẩm công nghệ trong đời sống',
        focusContent: 'Tìm hiểu vai trò thiết thực của sản phẩm công nghệ trong đời sống con người (ăn ở, đi lại, giải trí, tăng năng suất, cải thiện môi trường).',
        sgkPages: 'Trang 6 – 7',
        khoiDong: {
          title: 'Khởi động: Nhận diện sản phẩm công nghệ',
          type: 'question',
          question: 'Em hãy quan sát cuộc trò chuyện trong SGK trang 6: "Nhờ có máy bay, con người có thể đến những nơi rất xa thật dễ dàng". Theo em, máy bay và các phương tiện hiện đại mang lại lợi ích gì lớn nhất cho con người?',
          options: [
            'A. Giúp con người di chuyển nhanh chóng, an toàn và thuận tiện',
            'B. Làm cho con người lười vận động hơn',
            'C. Chỉ dùng để đi ngắm cảnh từ trên cao',
            'D. Không có lợi ích gì đáng kể'
          ],
          correctAnswer: 0,
          explanation: 'Máy bay là một sản phẩm công nghệ tiêu biểu giúp con người rút ngắn thời gian di chuyển giữa các quốc gia và địa phương xa xôi.',
          leadIn: 'Trong đời sống hằng ngày, xung quanh chúng ta có rất nhiều sản phẩm công nghệ hữu ích. Hãy cùng khám phá xem chúng có vai trò cụ thể như thế nào!'
        },
        khamPha: [
          {
            id: 'kp-1-1',
            title: '1. Quan sát sản phẩm công nghệ (Hình 1 SGK tr. 6)',
            task: 'Quan sát các sản phẩm công nghệ trong Hình 1 SGK và cho biết chúng có vai trò như thế nào trong đời sống: a) Xe đạp; b) Tủ lạnh; c) Máy cày; d) Máy tính điện tử; e) Máy đóng nút chai; g) Hoa và cây cảnh.',
            context: 'Lưu ý: Trong Hình 1 có 6 hình, em hãy chú ý đối tượng nào là sản phẩm công nghệ do con người tạo ra và đối tượng nào là tự nhiên.',
            guidingQuestions: [
              '1. Em quan sát thấy những sản phẩm nào do con người chế tạo ra?',
              '2. Xe đạp và tủ lạnh giúp ích gì cho sinh hoạt gia đình và việc đi lại?',
              '3. Máy cày và máy đóng nút chai hỗ trợ người lao động như thế nào?',
              '4. "Hoa và cây cảnh" có phải là sản phẩm công nghệ không?'
            ],
            hiddenAnswer: 'Xe đạp dùng để đi lại rèn luyện sức khoẻ; Tủ lạnh bảo quản thực phẩm tươi ngon; Máy cày cày bừa đất nhanh hơn sức trâu bò; Máy tính dùng để học tập, làm việc, tính toán; Máy đóng nút chai tự động hoá sản xuất nước giải khát. Riêng "Hoa và cây cảnh" là sinh vật tự nhiên, không phải sản phẩm công nghệ.',
            teacherConclusion: 'Sản phẩm công nghệ là những sản phẩm do con người tạo ra nhờ ứng dụng khoa học kĩ thuật nhằm phục vụ cuộc sống.'
          },
          {
            id: 'kp-1-2',
            title: '2. Phân loại 3 nhóm vai trò của sản phẩm công nghệ (SGK tr. 7)',
            task: 'Đọc thông tin SGK tr. 7 và ghép các sản phẩm công nghệ phù hợp với 3 nhóm vai trò: (1) Đáp ứng nhu cầu ăn ở, đi lại, giải trí; (2) Giúp tăng năng suất lao động; (3) Giúp cải thiện môi trường.',
            context: 'Sản phẩm công nghệ có vai trò quan trọng trong nhiều lĩnh vực của đời sống con người.',
            guidingQuestions: [
              '1. Nồi cơm điện, ti vi, ô tô phục vụ nhóm nhu cầu nào của con người?',
              '2. Máy gặt đập liên hợp, cánh tay robot công nghiệp giúp ích gì cho sản xuất?',
              '3. Hệ thống xử lý nước thải, xe quét rác tự động, thùng rác thông minh có vai trò gì?'
            ],
            hiddenAnswer: 'Ba nhóm vai trò lớn: (1) Nhu cầu ăn ở, đi lại, giải trí (xe máy, tủ lạnh, tivi, nhà ở...); (2) Tăng năng suất lao động (máy dệt tự động, máy cày, máy vi tính...); (3) Cải thiện môi trường (máy lọc nước, hệ thống lọc bụi tĩnh điện, thiết bị năng lượng mặt trời...).',
            teacherConclusion: 'Sản phẩm công nghệ góp phần mang lại sự tiện nghi, đáp ứng nhu cầu đa dạng, nâng cao năng suất lao động và tạo ra môi trường sống trong lành, thuận tiện cho con người.'
          }
        ],
        thaoLuan: {
          title: 'Thảo luận nhóm: Kể tên sản phẩm công nghệ quanh em',
          groupTask: 'Mỗi nhóm 4 bạn, cùng kể thêm ít nhất 3 sản phẩm công nghệ được sử dụng tại lớp học hoặc gia đình em và xếp chúng vào đúng 3 nhóm vai trò.',
          durationMinutes: 3,
          guidingPrompts: [
            'Tại trường học: Máy chiếu, quạt điện, máy tính, bảng trượt...',
            'Tại gia đình: Máy giặt, máy hút bụi, điều hòa không khí...',
            'Mỗi sản phẩm ấy đã giúp ích gì cho việc học tập hoặc sinh hoạt?'
          ],
          suggestedHints: [
            'Máy chiếu / TV lớp học: Đáp ứng nhu cầu học tập trực quan và giải trí.',
            'Máy giặt: Tăng năng suất lao động gia đình, tiết kiệm thời gian cho cha mẹ.',
            'Máy lọc không khí: Giúp cải thiện môi trường sống trong phòng.'
          ],
          conclusion: 'Sản phẩm công nghệ hiện diện ở mọi ngõ ngách đời sống, mang lại sự tiện nghi và năng suất vượt trội.'
        },
        luyenTap: [
          {
            id: 'lt-1-1',
            type: 'mcq',
            question: 'Sản phẩm nào dưới đây KHÔNG PHẢI là sản phẩm công nghệ?',
            options: [
              'A. Chiếc xe đạp mini',
              'B. Cây hoa hồng trồng trong vườn',
              'C. Chiếc máy tính bỏ túi',
              'D. Nồi cơm điện tử'
            ],
            correctAnswer: 1,
            explanation: 'Cây hoa hồng là sinh vật tự nhiên do đất trời sinh trưởng, không phải do con người chế tạo qua quy trình công nghệ.',
            difficulty: 'basic'
          },
          {
            id: 'lt-1-2',
            type: 'categorize',
            instruction: 'Kéo thả các sản phẩm công nghệ sau vào nhóm vai trò tương ứng:',
            categories: [
              { id: 'cat-1', name: 'Ăn ở, đi lại, giải trí' },
              { id: 'cat-2', name: 'Tăng năng suất lao động' },
              { id: 'cat-3', name: 'Cải thiện môi trường' }
            ],
            items: [
              { id: 'item-1', text: 'Tủ lạnh bảo quản thức ăn', correctCategoryId: 'cat-1' },
              { id: 'item-2', text: 'Máy gặt đập liên hợp', correctCategoryId: 'cat-2' },
              { id: 'item-3', text: 'Hệ thống lọc nước thải', correctCategoryId: 'cat-3' },
              { id: 'item-4', text: 'Máy bay chở khách', correctCategoryId: 'cat-1' },
              { id: 'item-5', text: 'Máy đóng nút chai tự động', correctCategoryId: 'cat-2' },
              { id: 'item-6', text: 'Xe gom rác chạy điện', correctCategoryId: 'cat-3' }
            ],
            difficulty: 'intermediate'
          },
          {
            id: 'lt-1-3',
            type: 'true_false',
            statement: 'Sản phẩm công nghệ chỉ có vai trò phục vụ vui chơi giải trí, không giúp ích gì cho việc bảo vệ môi trường.',
            isCorrect: false,
            explanation: 'Nhận định này SAI. Nhiều sản phẩm công nghệ hiện đại được chế tạo chuyên để xử lý rác thải, lọc nước, lọc không khí, góp phần rất lớn bảo vệ môi trường.',
            difficulty: 'basic'
          }
        ],
        vanDung: {
          title: 'Em vận dụng: Giúp bạn lựa chọn thiết bị phù hợp',
          scenario: 'Gia đình bạn Nam ở nông thôn thu hoạch lúa mùa với diện tích 2 mẫu ruộng. Trước đây bố mẹ bạn phải dùng liềm gặt tay mất cả tuần lễ rất vất vả.',
          question: 'Em hãy gợi ý cho bạn Nam sản phẩm công nghệ nào giúp bố mẹ bạn giải phóng sức lao động và tăng năng suất gặt hái?',
          options: [
            {
              label: 'A',
              text: 'Sử dụng máy gặt đập liên hợp để thu hoạch lúa trong vài giờ',
              isOptimal: true,
              feedback: 'Rất chính xác! Máy gặt đập liên hợp vừa cắt lúa vừa tuốt hạt sạch sẽ, nâng cao năng suất gấp hàng chục lần.'
            },
            {
              label: 'B',
              text: 'Mua thêm nhiều liềm gặt và thuê thêm người làm thủ công',
              isOptimal: false,
              feedback: 'Vẫn tốn nhiều công sức và chi phí nhân công, chưa tận dụng được sức mạnh của công nghệ.'
            },
            {
              label: 'C',
              text: 'Để lúa chín khô trên đồng không cần gặt ngay',
              isOptimal: false,
              feedback: 'Lúa sẽ bị rơi rụng hoặc chim chuột phá hoại, gây thiệt hại mùa màng.'
            }
          ],
          teacherExplanation: 'Ứng dụng cơ giới hoá nông nghiệp là minh chứng rõ rệt cho vai trò tăng năng suất lao động của sản phẩm công nghệ.'
        },
        ghiNho: {
          mainTitle: 'VAI TRÒ CỦA SẢN PHẨM CÔNG NGHỆ',
          summaryQuote: 'Sản phẩm công nghệ góp phần mang lại sự tiện nghi, đáp ứng nhu cầu ăn ở, đi lại, giải trí; giúp nâng cao năng suất lao động và bảo vệ, cải thiện môi trường sống.',
          branches: [
            {
              label: 'Tiện nghi đời sống',
              color: 'emerald',
              items: ['Ăn, ở, mặc', 'Đi lại thuận tiện', 'Học tập & giải trí']
            },
            {
              label: 'Tăng năng suất',
              color: 'blue',
              items: ['Cơ giới hóa nông nghiệp', 'Tự động hóa công nghiệp', 'Rút ngắn thời gian làm việc']
            },
            {
              label: 'Cải thiện môi trường',
              color: 'amber',
              items: ['Xử lý nước thải, rác thải', 'Lọc sạch không khí', 'Sử dụng năng lượng sạch']
            }
          ],
          sgkNote: 'Ghi nhớ theo SGK Công nghệ 5 - Kết nối tri thức, trang 7.'
        },
        cungCo: [
          {
            id: 'cc-1',
            question: 'Sản phẩm công nghệ là gì?',
            options: [
              'A. Là những vật thể có sẵn trong tự nhiên',
              'B. Là sản phẩm do con người tạo ra nhờ ứng dụng khoa học kĩ thuật',
              'C. Là tất cả cây cối, thú rừng',
              'D. Chỉ là các trò chơi trên điện thoại'
            ],
            correctIndex: 1,
            explanation: 'Sản phẩm công nghệ do con người sáng tạo ra phục vụ nhu cầu cuộc sống.'
          },
          {
            id: 'cc-2',
            question: 'Thiết bị nào sau đây giúp cải thiện môi trường?',
            options: [
              'A. Xe máy cũ xả nhiều khói đen',
              'B. Máy lọc không khí trong phòng',
              'C. Bếp than tổ ong',
              'D. Loa kẹo kéo hát công suất lớn'
            ],
            correctIndex: 1,
            explanation: 'Máy lọc không khí loại bỏ bụi mịn và chất gây dị ứng, bảo vệ đường hô hấp.'
          },
          {
            id: 'cc-3',
            question: 'Khi con người dùng máy cày thay cho cày bừa bằng trâu bò, điều này thể hiện vai trò gì?',
            options: [
              'A. Tăng năng suất lao động và giảm bớt sức nặng nhọc',
              'B. Phục vụ nhu cầu giải trí',
              'C. Làm mất an toàn thông tin',
              'D. Gây tốn kém vô ích'
            ],
            correctIndex: 0,
            explanation: 'Máy móc giúp tăng năng suất vượt trội và giải phóng sức người.'
          },
          {
            id: 'cc-4',
            question: 'Vật dụng nào sau đây phục vụ nhu cầu đi lại của con người?',
            options: ['A. Tàu hỏa cao tốc', 'B. Nồi chiên không dầu', 'C. Máy giặt sấy', 'D. Kính hiển vi'],
            correctIndex: 0,
            explanation: 'Tàu hỏa cao tốc là phương tiện giao thông hiện đại phục vụ việc đi lại.'
          }
        ],
        teacherGuide: {
          objectives: [
            'Trình bày được vai trò của sản phẩm công nghệ trong đời sống con người.',
            'Phân biệt được sản phẩm công nghệ và vật thể tự nhiên.',
            'Kể tên và phân loại được các sản phẩm công nghệ theo 3 nhóm vai trò chính.'
          ],
          keyKnowledge: [
            'Sản phẩm công nghệ do con người tạo ra thông qua quy trình công nghệ.',
            '3 nhóm vai trò cốt lõi: Đáp ứng nhu cầu đời sống; Tăng năng suất lao động; Cải thiện môi trường.'
          ],
          estimatedMinutes: 35,
          methodologyTips: [
            'Cho học sinh chỉ ra ngay sự khác biệt giữa hoa thật (tự nhiên) và bình hoa sứ/hoa nhựa (công nghệ).',
            'Sử dụng các câu hỏi gợi mở từ trực quan đến khái quát.'
          ],
          equipmentNeeded: [
            'Tranh ảnh Hình 1 SGK tr. 6',
            'Phiếu học tập phân nhóm sản phẩm công nghệ'
          ],
          quickAnswers: [
            { question: 'Hoa và cây cảnh trong hình 1g có phải sản phẩm công nghệ không?', answer: 'Không, đó là vật thể sinh học tự nhiên.' },
            { question: '3 vai trò lớn nhất là gì?', answer: 'Tiện nghi sinh hoạt/đi lại; Tăng năng suất; Cải thiện môi trường.' }
          ]
        }
      },
      {
        id: 'tiet-2',
        periodNumber: 2,
        lessonId: 'bai-1',
        periodInLesson: 2,
        totalPeriodsInLesson: 3,
        title: 'Tiết 2: Mặt trái khi sử dụng công nghệ',
        focusContent: 'Nhận biết những tác động tiêu cực, mặt trái khi sử dụng công nghệ đối với môi trường và sức khỏe, đời sống con người.',
        sgkPages: 'Trang 7 – 8',
        khoiDong: {
          title: 'Khởi động: Đoán tình huống nhanh',
          type: 'quick_quiz',
          question: 'Em hãy nhìn bạn nhỏ trong tranh đang cầm máy tính bỏ túi để tính: "5234 x 10 = ?". Theo em bạn nhỏ này đang gặp phải vấn đề gì?',
          options: [
            'A. Bạn ấy tính toán rất thông minh và nhanh nhẹn',
            'B. Bạn ấy bị lệ thuộc vào máy móc, lười suy nghĩ các phép tính đơn giản',
            'C. Máy tính bị hỏng không bấm được',
            'D. Phép tính này quá khó không ai nhẩm được'
          ],
          correctAnswer: 1,
          explanation: 'Nhân với 10 chỉ cần thêm số 0 vào sau, nhưng vì thói quen ỷ lại máy móc nên bạn nhỏ không chịu suy nghĩ.',
          leadIn: 'Bên cạnh những lợi ích to lớn, công nghệ cũng có những mặt trái nếu con người sử dụng không đúng cách. Hãy cùng tìm hiểu ngay sau đây!'
        },
        khamPha: [
          {
            id: 'kp-2-1',
            title: '1. Tác động của sản xuất công nghệ đến môi trường (Hình 2 SGK tr. 7)',
            task: 'Quan sát sơ đồ quy trình sản xuất giấy trong Hình 2 SGK và cho biết: Công nghệ sản xuất giấy có thể ảnh hưởng như thế nào đến môi trường?',
            context: 'Sơ đồ gồm: Nguyên liệu tre, nứa, gỗ -> Cắt nhỏ và làm sạch -> Ngâm hoá chất -> Nghiền -> Xeo giấy -> Sấy giấy -> Cắt giấy theo khuôn -> Sản phẩm giấy hoàn thiện.',
            guidingQuestions: [
              '1. Giai đoạn "Ngâm hoá chất" và "Nghiền" sinh ra chất thải gì?',
              '2. Nếu "Nước thải chưa qua xử lí" xả trực tiếp ra sông ngòi thì điều gì sẽ xảy ra?',
              '3. Khai thác quá mức tre, nứa, gỗ để làm giấy có ảnh hưởng gì tới rừng?'
            ],
            hiddenAnswer: 'Quá trình sản xuất giấy sử dụng nhiều hoá chất và nước. Nếu nước thải chưa qua xử lí xả thẳng ra tự nhiên sẽ làm ô nhiễm nguồn nước nghiêm trọng, gây chết các loài thuỷ sinh và ảnh hưởng sức khoẻ người dân.',
            teacherConclusion: 'Nếu không có biện pháp kiểm soát và xử lý chất thải đúng quy chuẩn, các nhà máy công nghệ có thể gây ô nhiễm nguồn nước, không khí và hủy hoại môi trường sống.'
          },
          {
            id: 'kp-2-2',
            title: '2. Bốn mặt trái đối với con người khi dùng công nghệ (Hình 3 SGK tr. 8)',
            task: 'Quan sát 4 bức tranh trong Hình 3 SGK và ghép thẻ mô tả phù hợp: (1) Lệ thuộc vào sản phẩm công nghệ; (2) Hạn chế giao tiếp trực tiếp; (3) Mất an toàn thông tin; (4) Ảnh hưởng đến sức khoẻ.',
            context: 'Bốn bức tranh mô tả 4 tình huống tiêu biểu mà học sinh và người lớn rất dễ mắc phải trong đời sống.',
            guidingQuestions: [
              '1. Tranh a: Học sinh dùng máy tính tính phép nhân đơn giản -> Biểu hiện của điều gì?',
              '2. Tranh b: Cả gia đình cùng ngồi phòng khách nhưng mỗi người dán mắt vào một màn hình -> Gây ra hậu quả gì?',
              '3. Tranh c: Ngồi xem điện thoại quá gần mắt, nằm xem trong bóng tối -> Ảnh hưởng gì?',
              '4. Tranh d: Người đeo mặt nạ đánh cắp dữ liệu, thông tin cá nhân trên máy tính -> Đó là nguy cơ gì?'
            ],
            hiddenAnswer: 'Hình 3a: (1) Lệ thuộc vào sản phẩm công nghệ; Hình 3b: (2) Hạn chế giao tiếp trực tiếp; Hình 3c: (4) Ảnh hưởng đến sức khoẻ (cận thị, đau lưng); Hình 3d: (3) Mất an toàn thông tin (lộ dữ liệu bí mật).',
            teacherConclusion: 'Nếu sử dụng không đúng cách và không hợp lí, con người có thể bị lệ thuộc, giảm tư duy sáng tạo, hạn chế giao tiếp trực tiếp, ảnh hưởng sức khoẻ và mất an toàn thông tin.'
          }
        ],
        thaoLuan: {
          title: 'Thảo luận nhóm: Nhận diện thói quen xấu khi dùng công nghệ',
          groupTask: 'Thảo luận nhóm 4 bạn: Hãy kể thêm những thói quen dùng công nghệ gây ảnh hưởng xấu đến sức khoẻ hoặc học tập mà em từng thấy ở bản thân hoặc người xung quanh.',
          durationMinutes: 4,
          guidingPrompts: [
            'Vừa sạc pin vừa chơi điện thoại có nguy hiểm không?',
            'Thức khuya chơi game, lướt mạng xã hội dẫn đến điều gì vào sáng hôm sau?',
            'Cung cấp mật khẩu hoặc thông tin cá nhân cho người lạ trên mạng có rủi ro gì?'
          ],
          suggestedHints: [
            'Ngồi sai tư thế khi dùng máy tính gây cong vẹo cột sống.',
            'Dùng điện thoại liên tục nhiều giờ gây khô mỏi mắt, giảm thị lực.',
            'Vừa ăn cơm vừa xem tivi ảnh hưởng xấu đến tiêu hoá dạ dày.'
          ],
          conclusion: 'Nhận biết sớm các mặt trái giúp chúng ta có thói quen sử dụng công nghệ an toàn, điều độ và thông minh.'
        },
        luyenTap: [
          {
            id: 'lt-2-1',
            type: 'matching',
            instruction: 'Nối tình huống ở cột trái với mặt trái tương ứng ở cột phải:',
            leftItems: [
              { id: 'l1', text: 'Thức khuya lướt mạng, mắt mờ và đau cổ' },
              { id: 'l2', text: 'Đi ăn cùng bạn bè nhưng ai cũng cắm mặt vào màn hình' },
              { id: 'l3', text: 'Nhấp vào đường link lạ bị mất tài khoản cá nhân' },
              { id: 'l4', text: 'Không nhớ nổi số điện thoại người thân vì máy nhớ hộ' }
            ],
            rightItems: [
              { id: 'r1', text: 'Ảnh hưởng đến sức khoẻ' },
              { id: 'r2', text: 'Hạn chế giao tiếp trực tiếp' },
              { id: 'r3', text: 'Mất an toàn thông tin' },
              { id: 'r4', text: 'Lệ thuộc vào sản phẩm công nghệ' }
            ],
            correctPairs: [
              { leftId: 'l1', rightId: 'r1' },
              { leftId: 'l2', rightId: 'r2' },
              { leftId: 'l3', rightId: 'r3' },
              { leftId: 'l4', rightId: 'r4' }
            ],
            difficulty: 'intermediate'
          },
          {
            id: 'lt-2-2',
            type: 'true_false',
            statement: 'Nước thải công nghiệp từ các xưởng sản xuất có thể xả trực tiếp ra sông ngòi mà không cần xử lý vì thiên nhiên tự làm sạch được.',
            isCorrect: false,
            explanation: 'Nước thải công nghiệp chứa nhiều hoá chất độc hại, bắt buộc phải qua hệ thống xử lý đạt chuẩn trước khi xả ra môi trường.',
            difficulty: 'basic'
          },
          {
            id: 'lt-2-3',
            type: 'mcq',
            question: 'Để không bị lệ thuộc vào máy tính điện tử, học sinh lớp 5 nên làm gì?',
            options: [
              'A. Bỏ hoàn toàn không bao giờ dùng máy tính nữa',
              'B. Tích cực rèn luyện tính nhẩm, tư duy độc lập trước khi dùng máy kiểm tra lại',
              'C. Chỉ dùng máy tính khi kiểm tra trên lớp',
              'D. Nhờ người khác tính hộ tất cả các bài'
            ],
            correctAnswer: 1,
            explanation: 'Chủ động tính nhẩm và tư duy rèn luyện trí não, chỉ sử dụng công cụ hỗ trợ khi thực sự cần thiết.',
            difficulty: 'intermediate'
          }
        ],
        vanDung: {
          title: 'Em vận dụng: Xử lý tình huống an toàn thông tin',
          scenario: 'Khi đang chơi một trò chơi học tập trên máy tính bảng, màn hình bỗng hiện thông báo: "Bạn đã trúng thưởng một chiếc xe đạp điện! Hãy nhập ngay họ tên, số điện thoại, địa chỉ nhà và mật khẩu tài khoản của mẹ bạn để nhận quà."',
          question: 'Nếu là em trong tình huống này, em sẽ xử lý như thế nào?',
          options: [
            {
              label: 'A',
              text: 'Nhanh chóng điền đầy đủ thông tin để nhận xe đạp điện miễn phí',
              isOptimal: false,
              feedback: 'Rất nguy hiểm! Đây là chiêu trò lừa đảo đánh cắp thông tin cá nhân và tài khoản ngân hàng.'
            },
            {
              label: 'B',
              text: 'Tuyệt đối không nhập thông tin, đóng trang web lại và báo ngay cho bố mẹ biết',
              isOptimal: true,
              feedback: 'Rất thông minh và chuẩn xác! Đây là cách bảo vệ an toàn thông tin cho bản thân và gia đình.'
            },
            {
              label: 'C',
              text: 'Gửi đường link cho tất cả các bạn trong lớp cùng nhập nhận thưởng',
              isOptimal: false,
              feedback: 'Hành động này sẽ làm nhiều người khác cũng bị lừa đảo theo.'
            }
          ],
          teacherExplanation: 'Luôn cảnh giác trước các thông báo trúng thưởng ảo trên mạng internet để tránh mất an toàn thông tin.'
        },
        ghiNho: {
          mainTitle: 'MẶT TRÁI KHI SỬ DỤNG CÔNG NGHỆ',
          summaryQuote: 'Nếu sử dụng không đúng cách và không hợp lí, con người có thể bị lệ thuộc, giảm sáng tạo, hạn chế giao tiếp, ảnh hưởng sức khoẻ và mất an toàn thông tin; chất thải công nghệ chưa xử lí gây hại môi trường.',
          branches: [
            {
              label: 'Đối với con người',
              color: 'rose',
              items: ['Lệ thuộc vào máy móc', 'Giảm giao tiếp trực tiếp', 'Ảnh hưởng thị lực & sức khoẻ', 'Mất an toàn thông tin']
            },
            {
              label: 'Đối với tự nhiên',
              color: 'amber',
              items: ['Ô nhiễm nguồn nước thải', 'Khí thải công nghiệp', 'Khai thác tài nguyên quá mức']
            },
            {
              label: 'Biện pháp khắc phục',
              color: 'emerald',
              items: ['Dùng đúng lúc, đúng lượng', 'Bảo mật dữ liệu', 'Xử lý nước thải chuẩn quy định']
            }
          ],
          sgkNote: 'Ghi nhớ theo SGK Công nghệ 5, trang 8.'
        },
        cungCo: [
          {
            id: 'cc-2-1',
            question: 'Hậu quả nào xảy ra khi trẻ em xem điện thoại quá nhiều giờ liên tục?',
            options: [
              'A. Mắt bị cận thị, mệt mỏi, thiếu vận động',
              'B. Trí nhớ tăng vọt vượt bậc',
              'C. Chiều cao phát triển nhanh hơn bình thường',
              'D. Không có ảnh hưởng gì'
            ],
            correctIndex: 0,
            explanation: 'Xem màn hình lâu gây mỏi mắt, cong vẹo cột sống và giảm tương tác ngoài đời thật.'
          },
          {
            id: 'cc-2-2',
            question: 'Khi các thành viên trong gia đình cùng ngồi cạnh nhau nhưng ai cũng chỉ chú ý vào điện thoại của mình thì dẫn đến điều gì?',
            options: [
              'A. Gia đình gắn kết và hiểu nhau hơn',
              'B. Hạn chế sự chia sẻ, giao tiếp trực tiếp giữa các thành viên',
              'C. Tiết kiệm được thời gian nói chuyện',
              'D. Cả nhà đều thông thái hơn'
            ],
            correctIndex: 1,
            explanation: 'Công nghệ vô tình tạo ra khoảng cách nếu con người quên mất việc trò chuyện trực tiếp.'
          },
          {
            id: 'cc-2-3',
            question: 'Trong quy trình sản xuất giấy, khâu nào nếu không cẩn thận sẽ gây ô nhiễm nguồn nước nghiêm trọng?',
            options: [
              'A. Cắt giấy theo khuôn',
              'B. Đóng gói sản phẩm hoàn thiện',
              'C. Xả nước thải ngâm hoá chất chưa qua xử lý',
              'D. Sấy giấy bằng nhiệt'
            ],
            correctIndex: 2,
            explanation: 'Nước thải chứa hoá chất tẩy trắng và nghiền bột gỗ phải được xử lý sinh học/hóa lý trước khi thải.'
          }
        ],
        teacherGuide: {
          objectives: [
            'Chỉ ra được những tác động tiêu cực của chất thải công nghệ đến môi trường.',
            'Nêu được 4 mặt trái khi con người sử dụng công nghệ không đúng cách.',
            'Hình thành ý thức sử dụng công nghệ an toàn, điều độ và có văn hoá.'
          ],
          keyKnowledge: [
            'Hai bình diện mặt trái: Môi trường (khí thải, nước thải, rác thải) và Con người (sức khoẻ, lệ thuộc, giao tiếp, bảo mật).'
          ],
          estimatedMinutes: 35,
          methodologyTips: [
            'Cho học sinh tự liên hệ bản thân: Ai từng bị bố mẹ nhắc nhở vì xem điện thoại quá 1 tiếng?',
            'Dùng tranh ảnh tương phản để khắc sâu bài học.'
          ],
          equipmentNeeded: ['Tranh sơ đồ Hình 2 và 4 bức tranh Hình 3 SGK tr. 7 - 8'],
          quickAnswers: [
            { question: '4 mặt trái lớn là gì?', answer: 'Lệ thuộc; Hạn chế giao tiếp; Mất an toàn thông tin; Ảnh hưởng sức khỏe.' }
          ]
        }
      },
      {
        id: 'tiet-3',
        periodNumber: 3,
        lessonId: 'bai-1',
        periodInLesson: 3,
        totalPeriodsInLesson: 3,
        title: 'Tiết 3: Luyện tập, Vận dụng và Tranh biện về công nghệ',
        focusContent: 'Thực hành phân tích các thói quen sử dụng công nghệ trong gia đình; tham gia tranh biện chủ đề "Sử dụng công nghệ trong đời sống: Nên hay không nên".',
        sgkPages: 'Trang 8',
        khoiDong: {
          title: 'Khởi động: Thử tài phán đoán',
          type: 'true_false',
          question: 'Có ý kiến cho rằng: "Vì công nghệ có nhiều mặt trái nên tốt nhất con người không nên phát minh hay sử dụng công nghệ nữa." Ý kiến này Đúng hay Sai?',
          isCorrect: false,
          explanation: 'Ý kiến này SAI. Công nghệ mang lại lợi ích vô cùng to lớn. Điều quan trọng là con người phải biết làm chủ công nghệ, sử dụng văn minh, đúng mực và an toàn.',
          leadIn: 'Trong tiết học này, các em sẽ cùng nhau tranh luận, bày tỏ quan điểm và tổng kết toàn bộ kiến thức của Bài 1!'
        },
        khamPha: [
          {
            id: 'kp-3-1',
            title: '1. Phân tích thói quen sử dụng công nghệ trong gia đình',
            task: 'Dựa vào câu hỏi 1 mục Luyện tập (SGK tr. 8): Nêu những thói quen của người thân trong gia đình em khi sử dụng công nghệ gây ảnh hưởng đến sức khoẻ.',
            context: 'Hãy quan sát các hoạt động sinh hoạt buổi tối, ngày nghỉ của gia đình.',
            guidingQuestions: [
              '1. Bố mẹ hoặc anh chị em có thói quen vừa ăn cơm vừa xem điện thoại/ti vi không?',
              '2. Thói quen sử dụng điện thoại trong phòng tối trước khi đi ngủ ảnh hưởng gì đến giấc ngủ?',
              '3. Khi xem tivi hoặc ngồi máy tính, tư thế ngồi thế nào là sai?'
            ],
            hiddenAnswer: 'Các thói quen không tốt thường gặp: Nằm nghiêng xem điện thoại gây lác/mỏi mắt; bật âm lượng tai nghe quá lớn làm giảm thính lực; dùng máy tính gù lưng gây thoái hóa cột sống cổ; vừa sạc vừa dùng tiềm ẩn nguy cơ cháy nổ.',
            teacherConclusion: 'Cần chủ động nhắc nhở người thân điều chỉnh tư thế ngồi, khoảng cách mắt tới màn hình (ít nhất 40-50 cm) và giới hạn thời gian sử dụng thiết bị điện tử.'
          },
          {
            id: 'kp-3-2',
            title: '2. Chuẩn bị ý kiến tranh biện: "Sử dụng công nghệ: Nên hay không nên?"',
            task: 'Theo câu hỏi 2 mục Vận dụng (SGK tr. 8): Chuẩn bị bài trình bày về chủ đề "Sử dụng công nghệ trong đời sống: Nên hay không nên".',
            context: 'Chia lớp làm 2 đội: Đội "NÊN" (Ủng hộ lợi ích vượt trội) và Đội "CẦN CẨN TRỌNG" (Nhấn mạnh phòng tránh mặt trái).',
            guidingQuestions: [
              '1. Nếu không có công nghệ thì cuộc sống con người sẽ khó khăn như thế nào?',
              '2. Nhưng nếu lạm dụng công nghệ quá mức thì hậu quả ra sao?',
              '3. Kết luận cuối cùng: Chúng ta NÊN dùng công nghệ như thế nào?'
            ],
            hiddenAnswer: 'Kết luận toàn diện: Chắc chắn NÊN sử dụng công nghệ vì công nghệ thúc đẩy xã hội phát triển và nâng cao chất lượng cuộc sống. Tuy nhiên, chúng ta phải sử dụng một cách THÔNG MINH, HỢP LÍ, AN TOÀN, ĐIỀU ĐỘ, tránh biến mình thành "nô lệ" của màn hình ảo.',
            teacherConclusion: 'Công nghệ là công cụ phục vụ con người. Con người làm chủ công nghệ chứ không để công nghệ làm chủ bản thân.'
          }
        ],
        thaoLuan: {
          title: 'Thảo luận nhóm: Xây dựng bản "Quy tắc 5 KHÔNG khi dùng thiết bị điện tử"',
          groupTask: 'Mỗi nhóm thảo luận và đề xuất 5 điều KHÔNG NÊN LÀM khi sử dụng điện thoại/máy tính ở lứa tuổi học sinh lớp 5.',
          durationMinutes: 5,
          guidingPrompts: [
            '1. Về an toàn điện và pin?',
            '2. Về khoảng cách mắt và thời gian?',
            '3. Về bảo mật tài khoản cá nhân?',
            '4. Về thái độ khi giao tiếp với người thân?'
          ],
          suggestedHints: [
            '1. Không vừa sạc vừa sử dụng.',
            '2. Không dùng thiết bị quá 45 phút liên tục.',
            '3. Không để màn hình quá gần mắt hoặc trong bóng tối.',
            '4. Không chia sẻ mật khẩu/thông tin riêng cho người lạ.',
            '5. Không cắm mặt vào điện thoại khi người lớn đang nói chuyện.'
          ],
          conclusion: 'Bản quy tắc giúp học sinh tự giác rèn luyện nếp sống văn minh số ngay từ bậc tiểu học.'
        },
        luyenTap: [
          {
            id: 'lt-3-1',
            type: 'mcq',
            question: 'Khoảng cách an toàn tối thiểu từ mắt đến màn hình máy tính để bàn là bao nhiêu?',
            options: [
              'A. Khoảng 10 – 15 cm',
              'B. Khoảng 50 – 70 cm (ngang tầm mắt)',
              'C. Càng gần càng tốt để nhìn rõ chữ nhỏ',
              'D. Không cần giữ khoảng cách'
            ],
            correctAnswer: 1,
            explanation: 'Khoảng cách 50 - 70 cm giúp mắt không bị điều tiết quá mức, hạn chế mỏi mắt và cận thị.',
            difficulty: 'intermediate'
          },
          {
            id: 'lt-3-2',
            type: 'true_false',
            statement: 'Để bảo vệ mắt, sau mỗi 30 - 45 phút học tập với máy tính, chúng ta nên nhìn xa khoảng 6 mét trong vòng 20 giây.',
            isCorrect: true,
            explanation: 'Đây chính là quy tắc 20-20-20 trong y học để cho cơ mắt được thư giãn nghỉ ngơi.',
            difficulty: 'intermediate'
          }
        ],
        vanDung: {
          title: 'Em vận dụng: Đóng góp ý kiến gia đình',
          scenario: 'Vào bữa cơm tối, anh trai của Nam vừa ăn vừa bấm điện thoại chơi game, mẹ nhắc nhở thì anh bảo "Con tranh thủ làm nhiệm vụ trong game kẻo hết giờ".',
          question: 'Nếu là Nam, em sẽ nói gì với anh trai để anh hiểu và vui vẻ cất điện thoại?',
          options: [
            {
              label: 'A',
              text: '"Anh ơi, bữa cơm gia đình là lúc cả nhà sum họp nói chuyện. Vừa ăn vừa xem điện thoại hại dạ dày lắm, anh cất máy ăn cơm cùng bố mẹ nhé!"',
              isOptimal: true,
              feedback: 'Lời nói nhẹ nhàng, vừa chân thành tình cảm vừa có căn cứ khoa học bảo vệ sức khoẻ.'
            },
            {
              label: 'B',
              text: 'Giật lấy điện thoại của anh ném ra chỗ khác',
              isOptimal: false,
              feedback: 'Hành vi thô bạo dễ gây cãi vã, mất hòa khí gia đình.'
            },
            {
              label: 'C',
              text: 'Mượn điện thoại của bố ra chơi cùng anh cho vui',
              isOptimal: false,
              feedback: 'Làm như vậy cả hai anh em đều mắc lỗi và làm bố mẹ buồn lòng.'
            }
          ],
          teacherExplanation: 'Giao tiếp tình cảm, tôn trọng không khí gia đình là nét đẹp văn hoá cần duy trì trong kỷ nguyên số.'
        },
        ghiNho: {
          mainTitle: 'TỔNG KẾT BÀI 1: VAI TRÒ CỦA CÔNG NGHỆ',
          summaryQuote: 'Sử dụng công nghệ THÔNG MINH - ĐIỀU ĐỘ - AN TOÀN: Phát huy tối đa tiện ích, tăng năng suất, cải thiện môi trường; đồng thời chủ động phòng tránh các mặt trái về sức khỏe, bảo mật và giao tiếp.',
          branches: [
            {
              label: 'Lợi ích cốt lõi',
              color: 'emerald',
              items: ['Tiện nghi cuộc sống', 'Năng suất vượt trội', 'Bảo vệ môi trường']
            },
            {
              label: 'Mặt trái cần tránh',
              color: 'rose',
              items: ['Lệ thuộc, giảm tư duy', 'Hại mắt, cột sống', 'Nguy cơ lộ dữ liệu']
            },
            {
              label: 'Hành động của em',
              color: 'blue',
              items: ['Rèn luyện tư duy nhẩm', 'Bảo vệ thông tin cá nhân', 'Giữ gìn giao tiếp gia đình']
            }
          ],
          sgkNote: 'Tổng hợp toàn bộ nội dung trọng tâm Bài 1 - SGK Công nghệ 5.'
        },
        cungCo: [
          {
            id: 'cc-3-1',
            question: 'Ý nào sau đây tóm tắt đúng nhất thái độ của chúng ta đối với công nghệ?',
            options: [
              'A. Tẩy chay công nghệ vì nó có mặt trái',
              'B. Làm chủ công nghệ, khai thác mặt tích cực và phòng tránh mặt trái',
              'C. Phụ thuộc hoàn toàn vào máy móc để không phải suy nghĩ',
              'D. Chỉ người lớn mới được dùng sản phẩm công nghệ'
            ],
            correctIndex: 1,
            explanation: 'Con người thông minh là người biết dùng công nghệ để phục vụ đời sống một cách an toàn và văn minh.'
          },
          {
            id: 'cc-3-2',
            question: 'Hành động nào sau đây thể hiện việc bảo vệ an toàn thông tin cá nhân?',
            options: [
              'A. Chia sẻ mật khẩu tài khoản cho bất cứ ai hỏi trên mạng',
              'B. Đặt mật khẩu mạnh và không chia sẻ thông tin cá nhân cho người lạ',
              'C. Đăng địa chỉ nhà và số điện thoại lên tất cả các nhóm chơi game',
              'D. Nhấp vào các đường link lạ báo trúng thưởng tiền tỷ'
            ],
            correctIndex: 1,
            explanation: 'Bảo mật thông tin giúp phòng ngừa lừa đảo và đánh cắp dữ liệu.'
          }
        ],
        teacherGuide: {
          objectives: [
            'Hệ thống hóa toàn bộ kiến thức về vai trò và mặt trái của công nghệ.',
            'Tự tin trình bày quan điểm trong buổi tranh biện về sử dụng công nghệ.',
            'Xây dựng thói quen và kỹ năng số an toàn cho bản thân và gia đình.'
          ],
          keyKnowledge: [
            'Công nghệ là con dao hai lưỡi: Tốt hay xấu phụ thuộc vào cách con người sử dụng.'
          ],
          estimatedMinutes: 35,
          methodologyTips: [
            'Tổ chức hoạt động tranh biện sôi nổi giữa 2 dãy bàn để tạo hứng khởi.',
            'Tuyên dương các nhóm có ý tưởng quy tắc sử dụng công nghệ thực tế.'
          ],
          equipmentNeeded: ['Bảng phụ ghi quy tắc 5 KHÔNG', 'Micro lớp học nếu có'],
          quickAnswers: [
            { question: 'Sử dụng công nghệ nên hay không nên?', answer: 'Rất NÊN, nhưng phải sử dụng ĐÚNG CÁCH, HỢP LÝ và AN TOÀN.' }
          ]
        }
      }
    ]
  },
  {
    id: 'bai-2',
    number: 2,
    title: 'Nhà sáng chế',
    partId: 'part-1',
    partTitle: 'PHẦN MỘT: CÔNG NGHỆ VÀ ĐỜI SỐNG',
    totalPeriods: 4,
    sgkPages: 'Trang 9 – 13',
    periods: [
      {
        id: 'tiet-4',
        periodNumber: 4,
        lessonId: 'bai-2',
        periodInLesson: 1,
        totalPeriodsInLesson: 4,
        title: 'Tiết 1: Vai trò của sáng chế trong đời sống và sự phát triển công nghệ',
        focusContent: 'Hiểu khái niệm sáng chế; phân tích vai trò của sáng chế trong đời sống (Hình 1) và trong sự phát triển của công nghệ (Hình 2: từ than củi đến bút chì).',
        sgkPages: 'Trang 9 – 10',
        khoiDong: {
          title: 'Khởi động: Câu đố bóng đèn',
          type: 'question',
          question: 'Em hãy đọc cuộc đối thoại SGK tr. 9: "Bạn có biết bóng đèn điện là sáng chế của ai không?". Hãy cho biết nhà sáng chế vĩ đại nào gắn liền với chiếc bóng đèn sợi đốt?',
          options: [
            'A. Tô-mát Ê-đi-xơn (Thomas Edison)',
            'B. Giêm Oát (James Watt)',
            'C. A-lếch-xan-đơ Gra-ham Beo (Alexander Graham Bell)',
            'D. Các Ben (Karl Benz)'
          ],
          correctAnswer: 0,
          explanation: 'Tô-mát Ê-đi-xơn là nhà phát minh nổi tiếng đã hoàn thiện chiếc bóng đèn sợi đốt chiếu sáng nhân loại.',
          leadIn: 'Vậy "Sáng chế" là gì và sáng chế đóng vai trò kỳ diệu như thế nào trong sự tiến hóa của nhân loại? Hãy cùng khám phá ngay!'
        },
        khamPha: [
          {
            id: 'kp-4-1',
            title: '1. Khái niệm sáng chế & Vai trò trong đời sống (Hình 1 SGK tr. 9)',
            task: 'Đọc thuật ngữ trang 51 và quan sát Hình 1: Nêu vai trò của các sáng chế: a) Cách treo cuộn giấy vệ sinh đầu cuộn ở phía trên; b) Bóng đèn điện; c) Giấy viết; d) Guồng nước.',
            context: 'Thuật ngữ: Sáng chế là tạo ra một sản phẩm công nghệ mà trước đó chưa có.',
            guidingQuestions: [
              '1. Trước khi có bóng đèn điện, con người thắp sáng ban đêm bằng cách nào và gặp khó khăn gì?',
              '2. Trước khi có giấy viết, người xưa viết chữ lên đâu (mai rùa, thẻ tre, đá)? Giấy viết đã giúp gì?',
              '3. Guồng nước ở vùng cao giúp ích gì cho việc đồng áng?',
              '4. Sáng chế cuộn giấy vệ sinh đầu cuộn ở phía trên mang lại sự tiện lợi gì nhỏ mà tinh tế?'
            ],
            hiddenAnswer: 'Bóng đèn điện xua tan màn đêm, giúp con người làm việc và sinh hoạt an toàn vào ban đêm; Giấy viết giúp lưu trữ và truyền bá tri thức văn minh nhân loại; Guồng nước đưa nước từ suối sâu lên đồng ruộng tưới tiêu mà không cần tốn sức người; Cách treo giấy vệ sinh giúp dễ xé và giữ vệ sinh sạch sẽ.',
            teacherConclusion: 'Sáng chế là tạo ra sản phẩm công nghệ mới chưa từng có trước đó, giúp đời sống con người ngày càng tiện nghi, an toàn và văn minh hơn.'
          },
          {
            id: 'kp-4-2',
            title: '2. Vai trò của sáng chế trong sự phát triển công nghệ (Hình 2 SGK tr. 10)',
            task: 'Quan sát Hình 2 và cho biết sáng chế đã làm công nghệ thay đổi và phát triển như thế nào: Từ "Vẽ bằng than củi" chuyển sang "Vẽ bằng bút chì".',
            context: 'Sáng chế góp phần tạo ra sản phẩm mới, cải tiến sản phẩm cũ.',
            guidingQuestions: [
              '1. Vẽ bằng than củi có những nhược điểm gì (dễ gãy, lem bẩn tay, nét vẽ to thô)?',
              '2. Bút chì có vỏ gỗ bảo vệ ruột chì than mịn mang lại tiện ích gì vượt trội?',
              '3. Em rút ra kết luận gì về tác động của sáng chế đối với sản phẩm công nghệ?'
            ],
            hiddenAnswer: 'Từ than củi dễ gãy và lem bẩn, con người đã sáng chế ra bút chì có vỏ gỗ bao bọc, ruột mịn gọt nhọn, vẽ sạch sẽ, nét vẽ tinh tế. Sáng chế giúp cải tiến sản phẩm, thúc đẩy công nghệ phát triển lên tầm cao mới.',
            teacherConclusion: 'Sáng chế góp phần tạo ra sản phẩm mới, cải tiến sản phẩm, thúc đẩy sự phát triển của công nghệ, giúp đời sống con người tiện nghi và văn minh hơn.'
          }
        ],
        thaoLuan: {
          title: 'Thảo luận nhóm: Những sáng chế thay đổi thế giới',
          groupTask: 'Thảo luận nhóm 4 bạn: Hãy chia sẻ một sáng chế mà nhóm em thấy có ích nhất trong cuộc sống hằng ngày (ví dụ: chiếc quạt máy, chiếc kéo, chiếc xe đạp, chiếc kính cận...).',
          durationMinutes: 4,
          guidingPrompts: [
            'Sáng chế đó là gì?',
            'Trước khi có nó, cuộc sống con người thế nào?',
            'Nó đã thay đổi thói quen của chúng ta ra sao?'
          ],
          suggestedHints: [
            'Chiếc kính cận: Giúp hàng triệu người bị tật khúc xạ nhìn rõ thế giới xung quanh.',
            'Chiếc tủ lạnh: Giúp bảo quản thực phẩm tươi nhiều ngày thay vì phải ướp muối.',
            'Chiếc quạt điện: Mang lại làn gió mát lành trong những ngày hè oi bức.'
          ],
          conclusion: 'Mỗi sáng chế dù lớn hay nhỏ đều bắt nguồn từ mong muốn giải quyết một khó khăn có thật trong đời sống.'
        },
        luyenTap: [
          {
            id: 'lt-4-1',
            type: 'fill_blank',
            instruction: 'Điền từ còn thiếu vào chỗ trống theo đúng khái niệm SGK:',
            sentenceBefore: 'Sáng chế là tạo ra một ',
            sentenceAfter: ' mà trước đó chưa có.',
            correctWords: ['sản phẩm công nghệ', 'san pham cong nghe'],
            hint: 'Cụm gồm 4 chữ: s... p... c... n...',
            difficulty: 'basic'
          },
          {
            id: 'lt-4-2',
            type: 'true_false',
            statement: 'Chỉ những cỗ máy khổng lồ như tên lửa hay máy bay mới được gọi là sáng chế, còn những cải tiến nhỏ như bút chì hay cuộn giấy thì không phải.',
            isCorrect: false,
            explanation: 'Sai. Mọi giải pháp kỹ thuật mới, sản phẩm mới giải quyết vấn đề đời sống (như bút chì ruột than bọc gỗ, cuộn giấy vệ sinh) đều là những sáng chế giá trị được cấp bằng sáng chế.',
            difficulty: 'intermediate'
          }
        ],
        vanDung: {
          title: 'Em vận dụng: Đóng vai nhà sáng chế nhí',
          scenario: 'Mỗi mùa mưa bão, chiếc ô (dù) che mưa thường hay bị gió thổi lật ngược hoặc khi gập ô vào xe buýt thì nước mưa nhỏ giọt làm ướt sàn nhà.',
          question: 'Nếu là một nhà sáng chế nhí, em sẽ có ý tưởng cải tiến chiếc ô như thế nào?',
          options: [
            {
              label: 'A',
              text: 'Sáng chế chiếc ô mở ngược thông minh và có khay giữ giọt nước không rớt ra sàn',
              isOptimal: true,
              feedback: 'Ý tưởng xuất sắc! Đây chính là sản phẩm ô mở ngược hiện đại đã được sáng chế và ứng dụng rộng rãi.'
            },
            {
              label: 'B',
              text: 'Không dùng ô nữa mà mặc áo mưa kín mít cả người',
              isOptimal: false,
              feedback: 'Chưa giải quyết được vấn đề cải tiến sản phẩm ô che mưa.'
            },
            {
              label: 'C',
              text: 'Ở trong nhà không bao giờ ra đường khi trời mưa',
              isOptimal: false,
              feedback: 'Đây là giải pháp thụ động, không mang tính sáng chế công nghệ.'
            }
          ],
          teacherExplanation: 'Sáng chế luôn bắt đầu từ việc quan sát những bất tiện thường ngày và tìm cách khắc phục chúng.'
        },
        ghiNho: {
          mainTitle: 'VAI TRÒ CỦA SÁNG CHẾ',
          summaryQuote: 'Sáng chế là tạo ra sản phẩm công nghệ mới chưa từng có. Sáng chế giúp tạo ra sản phẩm mới, cải tiến sản phẩm, thúc đẩy công nghệ phát triển, giúp đời sống tiện nghi và văn minh hơn.',
          branches: [
            {
              label: 'Khái niệm',
              color: 'blue',
              items: ['Tạo sản phẩm công nghệ mới', 'Trước đó chưa từng có']
            },
            {
              label: 'Trong đời sống',
              color: 'emerald',
              items: ['Tiện nghi, thoải mái', 'Bảo vệ sức khỏe', 'Nâng cao chất lượng sống']
            },
            {
              label: 'Trong công nghệ',
              color: 'amber',
              items: ['Cải tiến sản phẩm cũ', 'Tạo ra sản phẩm mới', 'Thúc đẩy sự văn minh']
            }
          ],
          sgkNote: 'Ghi nhớ SGK Công nghệ 5, trang 10.'
        },
        cungCo: [
          {
            id: 'cc-4-1',
            question: 'Sáng chế là gì?',
            options: [
              'A. Bắt chước làm lại sản phẩm người khác đã làm',
              'B. Tạo ra một sản phẩm công nghệ mà trước đó chưa có',
              'C. Mua sắm nhiều đồ dùng công nghệ đắt tiền',
              'D. Vẽ tranh về các đồ vật cổ xưa'
            ],
            correctIndex: 1,
            explanation: 'Theo SGK tr. 51, sáng chế là tạo ra một sản phẩm công nghệ mà trước đó chưa có.'
          },
          {
            id: 'cc-4-2',
            question: 'Việc chuyển đổi từ vẽ bằng than củi sang vẽ bằng bút chì thể hiện vai trò gì của sáng chế?',
            options: [
              'A. Làm giảm năng suất vẽ tranh',
              'B. Cải tiến sản phẩm, giúp sản phẩm tiện dụng và sạch sẽ hơn',
              'C. Làm ô nhiễm môi trường nghiêm trọng',
              'D. Không có ý nghĩa gì'
            ],
            correctIndex: 1,
            explanation: 'Bút chì là sáng chế cải tiến than củi, giúp người vẽ không bị bẩn tay và nét vẽ đều đẹp.'
          }
        ],
        teacherGuide: {
          objectives: [
            'Nêu được khái niệm sáng chế.',
            'Nêu được vai trò của sáng chế trong đời sống và trong sự phát triển của công nghệ.'
          ],
          keyKnowledge: [
            'Sáng chế là nguồn động lực chính thúc đẩy lịch sử văn minh công nghệ của nhân loại.'
          ],
          estimatedMinutes: 35,
          methodologyTips: [
            'Cho học sinh xem vật thật: mẩu than và cây bút chì để tự tay cảm nhận sự khác biệt.',
            'Nhấn mạnh: Sáng chế không phải điều xa vời mà giải quyết các vấn đề thiết thực.'
          ],
          equipmentNeeded: ['Mẩu than củi, bút chì gỗ, tranh Hình 1 & 2 SGK tr. 9 - 10'],
          quickAnswers: [
            { question: 'Sáng chế là gì?', answer: 'Tạo ra một sản phẩm công nghệ mà trước đó chưa có.' }
          ]
        }
      },
      {
        id: 'tiet-5',
        periodNumber: 5,
        lessonId: 'bai-2',
        periodInLesson: 2,
        totalPeriodsInLesson: 4,
        title: 'Tiết 2: Một số nhà sáng chế tiêu biểu trong lịch sử',
        focusContent: 'Tìm hiểu thông tin và lịch sử sáng chế của 4 nhà sáng chế vĩ đại: Giêm Oát (động cơ hơi nước 1784), Tô-mát Ê-đi-xơn (bóng đèn sợi đốt 1879), Gra-ham Beo (điện thoại 1876), Các Ben (ô tô chạy xăng 1886) và máy tính ENIAC (1946).',
        sgkPages: 'Trang 10 – 13',
        khoiDong: {
          title: 'Khởi động: Nhận diện chân dung vĩ nhân',
          type: 'image_guess',
          question: 'Hãy nhìn chân dung 4 nhà sáng chế trong Hình 3 SGK tr. 10: Giêm Oát, Các Ben, A-lếch-xan-đơ Gra-ham Beo, Tô-mát Ê-đi-xơn. Nhà sáng chế nào gắn liền với động cơ hơi nước mở ra cuộc cách mạng công nghiệp thế kỷ XIX?',
          options: [
            'A. Giêm Oát (James Watt)',
            'B. Các Ben (Karl Benz)',
            'C. Tô-mát Ê-đi-xơn (Thomas Edison)',
            'D. Gra-ham Beo (Graham Bell)'
          ],
          correctAnswer: 0,
          explanation: 'Giêm Oát (1736 - 1819) là kĩ sư người Xcốt-len, người đã hoàn thiện và được cấp bằng sáng chế động cơ hơi nước năm 1784.',
          leadIn: 'Hãy cùng lật mở những trang sử vàng chói lọi của 4 nhà sáng chế vĩ đại đã làm thay đổi hoàn toàn thế giới!'
        },
        khamPha: [
          {
            id: 'kp-5-1',
            title: '1. Ghép nối nhà sáng chế và phát minh (Hình 3 SGK tr. 10)',
            task: 'Quan sát Hình 3 SGK, ghép tên nhà sáng chế với sáng chế của họ cho phù hợp: a) Giêm Oát; b) Các Ben; c) A-lếch-xan-đơ Gra-ham Beo; d) Tô-mát Ê-đi-xơn tương ứng với (1) Bóng đèn sợi đốt (1879); (2) Động cơ hơi nước (1784); (3) Điện thoại (1876); (4) Ô tô chạy xăng (1886).',
            context: 'Bốn phát minh then chốt định hình thế giới hiện đại.',
            guidingQuestions: [
              '1. Giêm Oát được cấp bằng sáng chế phát minh nào vào năm 1784?',
              '2. Gra-ham Beo đã tạo ra thiết bị liên lạc từ xa nào vào năm 1876?',
              '3. Sau rất nhiều lần thất bại, Tô-mát Ê-đi-xơn đã thành công với phát minh nào năm 1879?',
              '4. Chiếc ô tô chạy bằng động cơ xăng đầu tiên của Các Ben ra đời năm nào?'
            ],
            hiddenAnswer: 'a - 2: Giêm Oát với động cơ hơi nước (1784); b - 4: Các Ben với ô tô chạy xăng (1886); c - 3: Gra-ham Beo với điện thoại (1876); d - 1: Tô-mát Ê-đi-xơn với bóng đèn sợi đốt (1879).',
            teacherConclusion: 'Bốn nhà sáng chế tiêu biểu: Giêm Oát (động cơ hơi nước 1784), Gra-ham Beo (điện thoại 1876), Ê-đi-xơn (bóng đèn sợi đốt 1879), Các Ben (ô tô chạy xăng 1886).'
          },
          {
            id: 'kp-5-2',
            title: '2. Tiểu sử và ý nghĩa của từng sáng chế (SGK tr. 11 - 13)',
            task: 'Đọc thông tin chi tiết tr. 11 - 13 và hoàn thành bảng tóm tắt: Quê hương, năm sinh - mất, hoàn cảnh ra đời và vai trò lịch sử của từng phát minh.',
            context: 'Mở rộng: Chiếc máy tính điện tử ENIAC hoàn thành năm 1946 (Mỹ, nặng 30 tấn, 5.000 phép tính/giây).',
            guidingQuestions: [
              '1. Động cơ hơi nước của Giêm Oát có ưu điểm gì so với động cơ sơ khai?',
              '2. Bóng đèn của Ê-đi-xơn đã thay đổi cuộc sống ban đêm của con người như thế nào?',
              '3. Điện thoại của Gra-ham Beo và ô tô của Các Ben mang lại lợi ích gì cho việc liên lạc và di chuyển?'
            ],
            hiddenAnswer: 'Giêm Oát tiết kiệm nhiên liệu, tăng hiệu suất động cơ hơi nước -> mở ra cách mạng công nghiệp; Ê-đi-xơn thắp sáng đường phố, nhà máy, giúp con người sinh hoạt làm việc ban đêm; Gra-ham Beo giúp liên lạc từ khoảng cách xa; Các Ben giúp di chuyển nhanh chóng, mở đầu ngành công nghiệp ô tô; ENIAC mở đầu kỷ nguyên máy tính.',
            teacherConclusion: 'Mỗi sáng chế đều là bước ngoặt vĩ đại giúp nhân loại tiến lên những nền văn minh mới.'
          }
        ],
        thaoLuan: {
          title: 'Thảo luận nhóm: Nhà sáng chế em ngưỡng mộ nhất',
          groupTask: 'Nhóm 4 bạn: Chọn 1 trong 4 nhà sáng chế trên, thảo luận và cử đại diện nêu 2 điều mà nhóm em khâm phục nhất ở nhân vật đó.',
          durationMinutes: 4,
          guidingPrompts: [
            'Ê-đi-xơn từng thử nghiệm hàng nghìn sợi đốt khác nhau trước khi thành công.',
            'Giêm Oát kiên trì nghiên cứu mô hình động cơ sơ khai suốt nhiều năm.',
            'Các Ben đã kiên định với ý tưởng động cơ chạy bằng xăng.'
          ],
          suggestedHints: [
            'Khâm phục tinh thần kiên trì, không bao giờ bỏ cuộc trước thất bại.',
            'Khâm phục trí tuệ và tình yêu khoa học muốn cống hiến cho nhân loại.'
          ],
          conclusion: 'Thiên tài là 1% cảm hứng và 99% mồ hôi nước mắt.'
        },
        luyenTap: [
          {
            id: 'lt-5-1',
            type: 'matching',
            instruction: 'Nối đúng nhà sáng chế với năm được cấp bằng sáng chế:',
            leftItems: [
              { id: 'sc-1', text: 'Giêm Oát (Động cơ hơi nước)' },
              { id: 'sc-2', text: 'Gra-ham Beo (Điện thoại)' },
              { id: 'sc-3', text: 'Tô-mát Ê-đi-xơn (Bóng đèn sợi đốt)' },
              { id: 'sc-4', text: 'Các Ben (Ô tô chạy xăng)' }
            ],
            rightItems: [
              { id: 'yr-1', text: 'Năm 1784' },
              { id: 'yr-2', text: 'Năm 1876' },
              { id: 'yr-3', text: 'Năm 1879' },
              { id: 'yr-4', text: 'Năm 1886' }
            ],
            correctPairs: [
              { leftId: 'sc-1', rightId: 'yr-1' },
              { leftId: 'sc-2', rightId: 'yr-2' },
              { leftId: 'sc-3', rightId: 'yr-3' },
              { leftId: 'sc-4', rightId: 'yr-4' }
            ],
            difficulty: 'intermediate'
          },
          {
            id: 'lt-5-2',
            type: 'mcq',
            question: 'Chiếc máy tính điện tử đầu tiên trên thế giới mang tên gì, hoàn thành năm nào?',
            options: [
              'A. ENIAC, hoàn thành năm 1946',
              'B. APPLE I, hoàn thành năm 1976',
              'C. IBM PC, hoàn thành năm 1981',
              'D. WINDOWS, hoàn thành năm 1995'
            ],
            correctAnswer: 0,
            explanation: 'Máy tính ENIAC hoàn thành năm 1946 tại Hoa Kỳ, có thể thực hiện 5.000 phép cộng trong mỗi giây.',
            difficulty: 'basic'
          }
        ],
        vanDung: {
          title: 'Em vận dụng: Bài học từ sự kiên trì của Ê-đi-xơn',
          scenario: 'Khi làm một mô hình kĩ thuật trên lớp, Nam thử lắp ráp đến lần thứ ba mà xe vẫn chưa chạy được. Nam nản chí muốn bỏ cuộc.',
          question: 'Em hãy kể câu chuyện về Tô-mát Ê-đi-xơn để động viên bạn Nam tiếp tục cố gắng.',
          options: [
            {
              label: 'A',
              text: '"Nam ơi, Ê-đi-xơn đã thất bại hàng nghìn lần trước khi tìm ra sợi đốt bóng đèn. Mỗi lần chưa được là một lần mình biết thêm cách chưa đúng, cậu thử kiểm tra lại cực pin xem sao nhé!"',
              isOptimal: true,
              feedback: 'Lời động viên tuyệt vời, khích lệ bạn học tập tinh thần kiên trì của nhà sáng chế vĩ đại.'
            },
            {
              label: 'B',
              text: '"Khó quá thì vứt đi, để tớ làm hộ cậu lấy điểm"',
              isOptimal: false,
              feedback: 'Không giúp bạn rèn luyện được nghị lực vượt khó.'
            },
            {
              label: 'C',
              text: '"Bỏ đi Nam, cái này chỉ dành cho nhà khoa học thôi"',
              isOptimal: false,
              feedback: 'Gây nản lòng và từ bỏ sự cố gắng.'
            }
          ],
          teacherExplanation: 'Tinh thần không sợ thất bại là phẩm chất quan trọng nhất mà học sinh học được từ các nhà sáng chế.'
        },
        ghiNho: {
          mainTitle: '4 NHÀ SÁNG CHẾ TIÊU BIỂU TRONG LỊCH SỬ',
          summaryQuote: 'Giêm Oát với động cơ hơi nước (1784), Gra-ham Beo với điện thoại (1876), Tô-mát Ê-đi-xơn với bóng đèn sợi đốt (1879), Các Ben với ô tô (1886).',
          branches: [
            {
              label: 'Giêm Oát (1784)',
              color: 'blue',
              items: ['Động cơ hơi nước', 'Kĩ sư Xcốt-len', 'Cách mạng công nghiệp XIX']
            },
            {
              label: 'Gra-ham Beo (1876)',
              color: 'emerald',
              items: ['Chiếc điện thoại đầu tiên', 'Truyền tiếng nói qua dây', 'Liên lạc từ xa']
            },
            {
              label: 'Ê-đi-xơn (1879)',
              color: 'amber',
              items: ['Bóng đèn sợi đốt', 'Chiếu sáng ban đêm', 'Thắp sáng nhà máy, phố xá']
            },
            {
              label: 'Các Ben (1886)',
              color: 'rose',
              items: ['Ô tô chạy bằng xăng', 'Kĩ sư cơ khí Đức', 'Thuận tiện di chuyển']
            }
          ],
          sgkNote: 'Ghi nhớ SGK Công nghệ 5, trang 12.'
        },
        cungCo: [
          {
            id: 'cc-5-1',
            question: 'Năm 1876 đánh dấu sự ra đời của sáng chế vĩ đại nào?',
            options: [
              'A. Điện thoại của Gra-ham Beo',
              'B. Ô tô của Các Ben',
              'C. Động cơ hơi nước của Giêm Oát',
              'D. Máy bay của anh em nhà Rai'
            ],
            correctIndex: 0,
            explanation: 'Năm 1876, Alexander Graham Bell được cấp bằng sáng chế cho chiếc điện thoại.'
          },
          {
            id: 'cc-5-2',
            question: 'Sáng chế động cơ hơi nước của Giêm Oát năm 1784 đã tạo ra sự kiện lịch sử nào?',
            options: [
              'A. Mở ra cuộc cách mạng công nghiệp thế kỷ XIX',
              'B. Chấm dứt hoàn toàn việc dùng điện',
              'C. Khởi đầu ngành hàng không vũ trụ',
              'D. Chế tạo ra mạng internet'
            ],
            correctIndex: 0,
            explanation: 'Động cơ hơi nước mở ra thời đại máy hơi nước và cách mạng công nghiệp thế kỷ XIX.'
          }
        ],
        teacherGuide: {
          objectives: [
            'Tóm tắt được thông tin về 4 nhà sáng chế nổi bật: Giêm Oát, Ê-đi-xơn, Gra-ham Beo, Các Ben.',
            'Nêu được năm cấp bằng sáng chế và vai trò lịch sử của từng sản phẩm công nghệ tiêu biểu.',
            'Kể được thông tin về chiếc máy tính điện tử đầu tiên ENIAC.'
          ],
          keyKnowledge: [
            'Trục mốc thời gian: 1784 (Hơi nước) -> 1876 (Điện thoại) -> 1879 (Bóng đèn) -> 1886 (Ô tô) -> 1946 (ENIAC).'
          ],
          estimatedMinutes: 35,
          methodologyTips: [
            'Sử dụng trục thời gian trực quan để học sinh ghi nhớ theo thứ tự diễn tiến lịch sử.',
            'Tổ chức trò chơi "Ai là ai" ghép tranh chân dung và hiện vật.'
          ],
          equipmentNeeded: ['Tranh ảnh 4 nhà sáng chế và các phát minh tr. 10 - 13 SGK'],
          quickAnswers: [
            { question: 'Gra-ham Beo sáng chế cái gì, năm nào?', answer: 'Điện thoại, năm 1876.' },
            { question: 'Tô-mát Ê-đi-xơn sáng chế cái gì, năm nào?', answer: 'Bóng đèn sợi đốt, năm 1879.' }
          ]
        }
      },
      {
        id: 'tiet-6',
        periodNumber: 6,
        lessonId: 'bai-2',
        periodInLesson: 3,
        totalPeriodsInLesson: 4,
        title: 'Tiết 3: Trục thời gian & Sơ đồ tư duy về các sáng chế',
        focusContent: 'Thực hành điền trục thời gian lịch sử sáng chế (1784, 1876, 1879, 1886); lập sơ đồ tư duy mô tả chi tiết về một sáng chế tiêu biểu (Bóng đèn sợi đốt).',
        sgkPages: 'Trang 12',
        khoiDong: {
          title: 'Khởi động: Sắp xếp theo dòng lịch sử',
          type: 'quick_quiz',
          question: 'Phát minh nào ra đời sớm nhất trong 4 phát minh sau đây?',
          options: [
            'A. Động cơ hơi nước của Giêm Oát (1784)',
            'B. Điện thoại của Gra-ham Beo (1876)',
            'C. Bóng đèn sợi đốt của Ê-đi-xơn (1879)',
            'D. Ô tô chạy xăng của Các Ben (1886)'
          ],
          correctAnswer: 0,
          explanation: 'Năm 1784 là mốc sớm nhất ở thế kỷ XVIII, mở đầu cuộc cách mạng công nghiệp.',
          leadIn: 'Hôm nay chúng ta sẽ cùng nhau xâu chuỗi các sự kiện trên trục thời gian và lập sơ đồ tư duy khoa học!'
        },
        khamPha: [
          {
            id: 'kp-6-1',
            title: '1. Hoàn thiện trục thời gian sáng chế (SGK tr. 12)',
            task: 'Lựa chọn sáng chế trong các thông tin trên để điền vào ô trống tương ứng với thời gian cấp bằng sáng chế theo mẫu: 1784 -> ???; 1876 -> ???; 1879 -> ???; 1886 -> ???.',
            context: 'Rèn luyện kỹ năng đọc trục thời gian lịch sử công nghệ.',
            guidingQuestions: [
              '1. Mốc năm 1784 tương ứng với sáng chế nào?',
              '2. Mốc năm 1876 gắn liền với ai và sản phẩm gì?',
              '3. Năm 1879 thế giới đón nhận ánh sáng từ sản phẩm nào?',
              '4. Năm 1886 phương tiện di chuyển nào được cấp bằng sáng chế?'
            ],
            hiddenAnswer: '1784: Động cơ hơi nước (Giêm Oát); 1876: Chiếc điện thoại (Gra-ham Beo); 1879: Bóng đèn sợi đốt (Tô-mát Ê-đi-xơn); 1886: Chiếc ô tô (Các Ben).',
            teacherConclusion: 'Trục thời gian thể hiện các mốc son chói lọi của sự phát triển khoa học kỹ thuật nhân loại.'
          },
          {
            id: 'kp-6-2',
            title: '2. Lập sơ đồ tư duy về sáng chế bóng đèn sợi đốt (SGK tr. 12)',
            task: 'Quan sát sơ đồ gợi ý hình bóng đèn trang 12 và hoàn thành 5 nhánh: (1) Nhà sáng chế; (2) Năm sáng chế; (3) Vai trò; (4) Ưu điểm; (5) Nhược điểm.',
            context: 'Sơ đồ tư duy giúp ghi nhớ có hệ thống và so sánh đa chiều.',
            guidingQuestions: [
              '1. Nhà sáng chế và năm sáng chế là gì?',
              '2. Vai trò của bóng đèn đối với đời sống và sản xuất?',
              '3. Ưu điểm nổi bật của bóng đèn sợi đốt so với đèn dầu, nến?',
              '4. Nhược điểm của bóng đèn sợi đốt là gì (tỏa nhiều nhiệt, tốn điện, dễ vỡ)?'
            ],
            hiddenAnswer: 'Nhánh 1: Tô-mát Ê-đi-xơn; Nhánh 2: Năm 1879; Nhánh 3: Thắp sáng ban đêm, phục vụ làm việc sinh hoạt; Nhánh 4: Sáng rõ, liên tục, sạch sẽ không khói muội; Nhánh 5: Tỏa nhiệt nóng, tiêu thụ nhiều điện năng, độ bền dây tóc có hạn (sau này được thay bằng đèn huỳnh quang và đèn LED).',
            teacherConclusion: 'Mỗi sáng chế đều có ưu điểm vượt trội thời bấy giờ và chính những nhược điểm là động lực để thế hệ sau tiếp tục cải tiến.'
          }
        ],
        thaoLuan: {
          title: 'Thảo luận nhóm: So sánh bóng đèn sợi đốt và bóng đèn LED ngày nay',
          groupTask: 'Thảo luận nhóm đôi: So sánh bóng đèn sợi đốt của Ê-đi-xơn năm 1879 với chiếc đèn LED lớp học đang dùng về độ sáng, nhiệt độ tỏa ra và mức độ tiết kiệm điện.',
          durationMinutes: 4,
          guidingPrompts: [
            'Sờ vào bóng đèn sợi đốt đang bật thì thế nào?',
            'Đèn LED có bị nóng rát như vậy không?',
            'Đèn nào tiết kiệm điện hơn?'
          ],
          suggestedHints: [
            'Đèn sợi đốt: Biến phần lớn điện năng thành nhiệt năng gây nóng, dễ cháy đứt dây tóc.',
            'Đèn LED: Phát sáng lạnh, siêu tiết kiệm điện, tuổi thọ cực cao, bảo vệ môi trường.'
          ],
          conclusion: 'Khoa học công nghệ luôn không ngừng kế thừa và đổi mới.'
        },
        luyenTap: [
          {
            id: 'lt-6-1',
            type: 'order',
            instruction: 'Kéo thả các sáng chế sau theo đúng thứ tự thời gian từ xưa đến nay:',
            items: [
              { id: 'o-ben', text: 'Ô tô chạy bằng xăng (1886)' },
              { id: 'o-bell', text: 'Điện thoại viễn thông (1876)' },
              { id: 'o-watt', text: 'Động cơ hơi nước (1784)' },
              { id: 'o-edison', text: 'Bóng đèn điện sợi đốt (1879)' }
            ],
            correctOrder: ['o-watt', 'o-bell', 'o-edison', 'o-ben'],
            difficulty: 'intermediate'
          },
          {
            id: 'lt-6-2',
            type: 'true_false',
            statement: 'Bóng đèn sợi đốt của Ê-đi-xơn tỏa ra rất nhiều nhiệt năng và tiêu tốn nhiều điện năng hơn so với đèn LED hiện nay.',
            isCorrect: true,
            explanation: 'Chính xác! Đèn sợi đốt biến tới hơn 90% điện năng thành nhiệt, do đó ngày nay con người chuyển sang dùng đèn LED tiết kiệm điện.',
            difficulty: 'basic'
          }
        ],
        vanDung: {
          title: 'Em vận dụng: Thiết kế sơ đồ tư duy cho chiếc xe đạp hoặc điện thoại',
          scenario: 'Dựa vào mô hình sơ đồ tư duy đã học, em hãy chọn chiếc điện thoại hoặc chiếc xe đạp để lập sơ đồ tư duy gồm: Tên sáng chế, người sáng chế/thời gian, công dụng chính và điểm cải tiến ngày nay.',
          question: 'Em hãy chọn nhánh mô tả chính xác nhất về chiếc điện thoại:',
          options: [
            {
              label: 'A',
              text: 'Sáng chế: Điện thoại | Tác giả: Gra-ham Beo (1876) | Công dụng: Truyền âm thanh từ xa | Ngày nay: Điện thoại thông minh cảm ứng đa năng',
              isOptimal: true,
              feedback: 'Rất chuẩn xác và khoa học!'
            },
            {
              label: 'B',
              text: 'Sáng chế: Điện thoại | Tác giả: Các Ben (1886) | Công dụng: Đi lại chở hàng',
              isOptimal: false,
              feedback: 'Sai tác giả và công dụng (Các Ben sáng chế ô tô).'
            }
          ],
          teacherExplanation: 'Vẽ sơ đồ tư duy là phương pháp học tập thông minh giúp ghi nhớ kiến thức công nghệ sâu sắc.'
        },
        ghiNho: {
          mainTitle: 'TRỤC THỜI GIAN & SƠ ĐỒ TƯ DUY SÁNG CHẾ',
          summaryQuote: '1784 (Động cơ hơi nước) ➔ 1876 (Điện thoại) ➔ 1879 (Bóng đèn sợi đốt) ➔ 1886 (Ô tô). Sơ đồ tư duy gồm: Nhà sáng chế, Năm, Vai trò, Ưu điểm và Nhược điểm.',
          branches: [
            {
              label: 'Thứ tự thời gian',
              color: 'blue',
              items: ['1784: Giêm Oát', '1876: Gra-ham Beo', '1879: Tô-mát Ê-đi-xơn', '1886: Các Ben']
            },
            {
              label: 'Cấu trúc sơ đồ',
              color: 'emerald',
              items: ['Nhà sáng chế', 'Năm ra đời', 'Vai trò & Ưu điểm', 'Nhược điểm cần cải tiến']
            }
          ],
          sgkNote: 'Ghi nhớ nội dung thực hành SGK trang 12.'
        },
        cungCo: [
          {
            id: 'cc-6-1',
            question: 'Sắp xếp nào dưới đây đúng thứ tự năm cấp bằng sáng chế?',
            options: [
              'A. 1784 -> 1876 -> 1879 -> 1886',
              'B. 1876 -> 1784 -> 1886 -> 1879',
              'C. 1784 -> 1879 -> 1876 -> 1886',
              'D. 1886 -> 1879 -> 1876 -> 1784'
            ],
            correctIndex: 0,
            explanation: '1784 (Giêm Oát) -> 1876 (Gra-ham Beo) -> 1879 (Ê-đi-xơn) -> 1886 (Các Ben).'
          }
        ],
        teacherGuide: {
          objectives: [
            'Học sinh tự lập được trục thời gian 4 phát minh lớn.',
            'Vẽ hoặc trình bày được sơ đồ tư duy 5 nhánh về một sáng chế công nghệ.'
          ],
          keyKnowledge: [
            'Kỹ năng hệ thống hóa kiến thức bằng sơ đồ tư duy.'
          ],
          estimatedMinutes: 35,
          methodologyTips: [
            'Cho học sinh dùng phấn màu hoặc giấy A4 vẽ phác sơ đồ tư duy hình bóng đèn hoặc đám mây.'
          ],
          equipmentNeeded: ['Phiếu học tập sơ đồ tư duy trang 12 SGK'],
          quickAnswers: [
            { question: 'Bóng đèn sợi đốt cấp bằng năm nào?', answer: 'Năm 1879.' }
          ]
        }
      },
      {
        id: 'tiet-7',
        periodNumber: 7,
        lessonId: 'bai-2',
        periodInLesson: 4,
        totalPeriodsInLesson: 4,
        title: 'Tiết 4: Đức tính cần có của nhà sáng chế & Củng cố Bài 2',
        focusContent: 'Nhận biết các đức tính cốt lõi cần có của nhà sáng chế (ham học hỏi, tò mò khoa học, kiên trì, không ngại thất bại, đam mê, sáng tạo, nghị lực; loại trừ nóng vội); liên hệ rèn luyện bản thân.',
        sgkPages: 'Trang 13',
        khoiDong: {
          title: 'Khởi động: Lựa chọn thẻ đức tính',
          type: 'quick_quiz',
          question: 'Khi gặp một thí nghiệm khoa học thất bại liên tiếp 10 lần, người có đức tính của nhà sáng chế sẽ làm gì?',
          options: [
            'A. Nổi nóng, đập phá dụng cụ và bỏ luôn',
            'B. Kiên trì tìm hiểu nguyên nhân thất bại và tiếp tục thử nghiệm hướng mới',
            'C. Đổ lỗi cho bạn cùng nhóm',
            'D. Ngồi khóc và chờ người khác làm giúp'
          ],
          correctAnswer: 1,
          explanation: 'Kiên trì, nhẫn nại và không sợ thất bại là những phẩm chất hàng đầu của nhà sáng chế.',
          leadIn: 'Để trở thành một nhà sáng chế hoặc người sáng tạo công nghệ, chúng ta cần tôi luyện những đức tính gì? Hãy cùng khám phá!'
        },
        khamPha: [
          {
            id: 'kp-7-1',
            title: '1. Nhận diện các đức tính của nhà sáng chế (SGK tr. 13)',
            task: 'Lựa chọn những thẻ mô tả đức tính cần có để trở thành nhà sáng chế trong các thẻ: Kiên trì, Đam mê, Thông minh, Tò mò khoa học, Không ngại thất bại, Sáng tạo, Chịu khó quan sát, Nóng vội, Nghị lực, Chăm chỉ, Ham học hỏi.',
            context: 'Chú ý phát hiện thẻ mang tính tiêu cực cần loại bỏ.',
            guidingQuestions: [
              '1. Thẻ "Nóng vội" có phải đức tính tốt của nhà sáng chế không? Vì sao?',
              '2. Vì sao nhà sáng chế cần "Chịu khó quan sát" và "Tò mò khoa học"?',
              '3. Tinh thần "Không ngại thất bại" đã giúp ích gì cho các vĩ nhân?'
            ],
            hiddenAnswer: 'Các đức tính cần có: Ham tìm tòi, học hỏi; tò mò khoa học; chịu khó quan sát; có sự kiên trì, nhẫn nại; không ngại khó khăn, vất vả; không sợ thất bại; đam mê; sáng tạo; nghị lực; chăm chỉ; thông minh. Thẻ DUY NHẤT cần loại bỏ là: "NÓNG VỘI" (vì nghiên cứu sáng chế đòi hỏi thời gian dài và sự tỉ mỉ).',
            teacherConclusion: 'Nhà sáng chế thường có những đức tính như: ham tìm tòi, học hỏi, tò mò khoa học, chịu khó quan sát, có sự kiên trì, nhẫn nại, không ngại khó khăn, vất vả, không sợ thất bại.'
          },
          {
            id: 'kp-7-2',
            title: '2. Liên hệ rèn luyện ở học sinh tiểu học',
            task: 'Học sinh lớp 5 có thể rèn luyện các đức tính của nhà sáng chế qua những việc làm cụ thể nào hàng ngày?',
            context: 'Chia sẻ cùng người thân về những sáng chế và đức tính em có thể học tập.',
            guidingQuestions: [
              '1. Khi gặp bài toán khó hoặc bài thủ công phức tạp, em nên làm gì?',
              '2. Em có hay quan sát các đồ vật trong nhà xem chúng hoạt động thế nào không?',
              '3. Khi đồ chơi bị hỏng, em thử tự sửa chữa hay vứt đi ngay?'
            ],
            hiddenAnswer: 'Học sinh có thể rèn luyện: Chăm chỉ đọc sách khoa học; chịu khó quan sát thiên nhiên và đồ dùng; kiên trì làm bài tập khó không bỏ dở; dũng cảm nhận lỗi và sửa sai khi làm chưa đúng; tự tay chế tạo các đồ dùng học tập đơn giản.',
            teacherConclusion: 'Mỗi học sinh đều có thể ươm mầm ước mơ sáng chế từ chính tính chăm chỉ, tò mò và kiên trì trong học tập hôm nay.'
          }
        ],
        thaoLuan: {
          title: 'Thảo luận nhóm: Phỏng vấn "Nhà sáng chế tương lai"',
          groupTask: 'Đóng vai phóng viên nhí phỏng vấn bạn: "Trong các đức tính của nhà sáng chế, bạn thấy mình đã có đức tính nào và cần rèn luyện thêm đức tính nào nhất?".',
          durationMinutes: 4,
          guidingPrompts: [
            'Tự đánh giá tính kiên trì của bản thân?',
            'Mức độ tò mò, ham học hỏi những điều mới?',
            'Cách đối mặt khi gặp bài thi điểm chưa cao?'
          ],
          suggestedHints: [
            'Em đã có đức tính: Chăm chỉ, tò mò quan sát mọi vật.',
            'Em cần rèn luyện thêm: Tính kiên trì, bớt nóng vội khi gặp khó khăn.'
          ],
          conclusion: 'Biết điểm mạnh và điểm cần cải thiện là bước đầu tiên để hoàn thiện bản thân.'
        },
        luyenTap: [
          {
            id: 'lt-7-1',
            type: 'categorize',
            instruction: 'Phân loại các thẻ tính cách vào 2 nhóm phù hợp:',
            categories: [
              { id: 'c-good', name: 'Đức tính CẦN CÓ của nhà sáng chế' },
              { id: 'c-bad', name: 'Tính cách KHÔNG NÊN CÓ' }
            ],
            items: [
              { id: 'i-1', text: 'Kiên trì, nhẫn nại', correctCategoryId: 'c-good' },
              { id: 'i-2', text: 'Nóng vội, cả thèm chóng chán', correctCategoryId: 'c-bad' },
              { id: 'i-3', text: 'Tò mò khoa học', correctCategoryId: 'c-good' },
              { id: 'i-4', text: 'Sợ thất bại, giấu dốt', correctCategoryId: 'c-bad' },
              { id: 'i-5', text: 'Chịu khó quan sát', correctCategoryId: 'c-good' },
              { id: 'i-6', text: 'Ham học hỏi, đam mê', correctCategoryId: 'c-good' }
            ],
            difficulty: 'intermediate'
          },
          {
            id: 'lt-7-2',
            type: 'true_false',
            statement: 'Muốn trở thành nhà sáng chế, chỉ cần thông minh bẩm sinh là đủ, không cần phải kiên trì hay chịu khó vất vả.',
            isCorrect: false,
            explanation: 'Sai hoàn toàn. Bác học Ê-đi-xơn đã khẳng định thiên tài phần lớn đến từ mồ hôi, sự kiên trì lao động không mệt mỏi.',
            difficulty: 'basic'
          }
        ],
        vanDung: {
          title: 'Em vận dụng: Chia sẻ kế hoạch rèn luyện',
          scenario: 'Cuối tuần này, bố mẹ muốn cùng em tái chế những vỏ chai nhựa và hộp sữa đã dùng hết thành những chậu trồng cây nhỏ xinh.',
          question: 'Hành động nào thể hiện đức tính sáng tạo và chăm chỉ của em?',
          options: [
            {
              label: 'A',
              text: 'Cùng bố mẹ rửa sạch hộp, dùng kéo cắt tạo hình con thú ngộ nghĩnh, đục lỗ thoát nước và tô màu trang trí',
              isOptimal: true,
              feedback: 'Tuyệt vời! Đây vừa là hoạt động sáng tạo vừa góp phần bảo vệ môi trường.'
            },
            {
              label: 'B',
              text: 'Vứt hết vào thùng rác cho nhanh vì chai nhựa không có giá trị',
              isOptimal: false,
              feedback: 'Bỏ lỡ cơ hội rèn luyện đôi bàn tay khéo léo và óc sáng tạo.'
            }
          ],
          teacherExplanation: 'Sáng chế bắt đầu từ những việc làm khéo léo và ý thức tiết kiệm, bảo vệ môi trường.'
        },
        ghiNho: {
          mainTitle: 'ĐỨC TÍNH CẦN CÓ CỦA NHÀ SÁNG CHẾ',
          summaryQuote: 'Nhà sáng chế thường có những đức tính: ham tìm tòi, học hỏi, tò mò khoa học, chịu khó quan sát, có sự kiên trì, nhẫn nại, không ngại khó khăn, vất vả, không sợ thất bại.',
          branches: [
            {
              label: 'Trí tuệ & đam mê',
              color: 'blue',
              items: ['Tò mò khoa học', 'Ham tìm tòi học hỏi', 'Óc sáng tạo']
            },
            {
              label: 'Ý chí & nghị lực',
              color: 'emerald',
              items: ['Kiên trì, nhẫn nại', 'Chịu khó quan sát', 'Không sợ thất bại']
            },
            {
              label: 'Loại bỏ',
              color: 'rose',
              items: ['Nóng vội', 'Nản lòng thoái lui', 'Ngại khó, ngại khổ']
            }
          ],
          sgkNote: 'Ghi nhớ SGK Công nghệ 5, trang 13.'
        },
        cungCo: [
          {
            id: 'cc-7-1',
            question: 'Từ nào sau đây KHÔNG PHẢI là đức tính của nhà sáng chế?',
            options: ['A. Kiên trì', 'B. Nóng vội', 'C. Chịu khó quan sát', 'D. Ham học hỏi'],
            correctIndex: 1,
            explanation: 'Nóng vội là tính xấu cản trở sự kiên nhẫn trong nghiên cứu khoa học.'
          },
          {
            id: 'cc-7-2',
            question: 'Khi một sản phẩm chế tạo chưa thành công, nhà sáng chế sẽ làm gì?',
            options: [
              'A. Tìm nguyên nhân, rút kinh nghiệm và cải tiến tiếp',
              'B. Bỏ nghề sáng chế',
              'C. Giấu nhẹm đi không cho ai biết',
              'D. Trách móc người xung quanh'
            ],
            correctIndex: 0,
            explanation: 'Rút kinh nghiệm từ thất bại là con đường dẫn đến thành công.'
          }
        ],
        teacherGuide: {
          objectives: [
            'Học sinh nêu được các đức tính cần có của nhà sáng chế.',
            'Biết tự soi rọi và rèn luyện tính kiên trì, tỉ mỉ trong học tập và cuộc sống.'
          ],
          keyKnowledge: [
            'Đức tính nhà sáng chế: Kiên trì, tò mò khoa học, chịu khó quan sát, không ngại thất bại, đam mê.'
          ],
          estimatedMinutes: 35,
          methodologyTips: [
            'Tạo không khí cởi mở, khuyến khích học sinh tự hào về những sáng kiến nhỏ của mình.'
          ],
          equipmentNeeded: ['Thẻ chữ các đức tính tr. 13 SGK'],
          quickAnswers: [
            { question: 'Đức tính nào là chìa khóa vượt qua thất bại?', answer: 'Kiên trì, nhẫn nại và không sợ thất bại.' }
          ]
        }
      }
    ]
  },
  {
    id: 'bai-3',
    number: 3,
    title: 'Tìm hiểu thiết kế',
    partId: 'part-1',
    partTitle: 'PHẦN MỘT: CÔNG NGHỆ VÀ ĐỜI SỐNG',
    totalPeriods: 2,
    sgkPages: 'Trang 14 – 16',
    periods: [
      {
        id: 'tiet-8',
        periodNumber: 8,
        lessonId: 'bai-3',
        periodInLesson: 1,
        totalPeriodsInLesson: 2,
        title: 'Tiết 1: Thiết kế trong cuộc sống & Vòng đời sản phẩm',
        focusContent: 'Nhận thức được muốn tạo ra sản phẩm công nghệ cần phải thiết kế; thiết kế là hoạt động sáng tạo; 4 hoạt động chính để tạo ra sản phẩm (Thiết kế, Sản xuất, Vận hành sử dụng, Bảo dưỡng sửa chữa).',
        sgkPages: 'Trang 14 – 15',
        khoiDong: {
          title: 'Khởi động: Bản thiết kế ngôi nhà',
          type: 'question',
          question: 'Em hãy đọc đoạn hội thoại SGK tr. 14: Bạn nhỏ hỏi: "Bố đang làm gì thế ạ?". Bố trả lời: "Bố đang xem bản thiết kế ngôi nhà mới của gia đình mình". Theo em, trước khi xây một ngôi nhà, vì sao người ta bắt buộc phải vẽ bản thiết kế trước?',
          options: [
            'A. Để ngôi nhà xây lên đúng ý muốn, kiên cố, đẹp mắt và không bị sai sót lãng phí',
            'B. Chỉ để ngắm cho vui, khi xây thích làm thế nào thì làm',
            'C. Để khoe với hàng xóm',
            'D. Không cần thiết kế cũng xây được nhà đẹp'
          ],
          correctAnswer: 0,
          explanation: 'Bản thiết kế là kim chỉ nam giúp xác định chính xác kích thước, kết cấu, vật liệu trước khi bắt tay vào thi công xây dựng.',
          leadIn: 'Không chỉ ngôi nhà mà mọi sản phẩm công nghệ quanh ta đều phải bắt đầu từ bước thiết kế. Hãy cùng khám phá hoạt động thú vị này!'
        },
        khamPha: [
          {
            id: 'kp-8-1',
            title: '1. Bốn hoạt động tạo ra và sử dụng sản phẩm (Hình 1 SGK tr. 14)',
            task: 'Ghép thẻ tên hoạt động với hình mô tả hoạt động ở Hình 1 cho phù hợp: a) Bảo dưỡng, sửa chữa; b) Thiết kế; c) Vận hành, sử dụng; d) Sản xuất. Hoạt động nào được thực hiện đầu tiên để tạo ra sản phẩm công nghệ?',
            context: 'Hình 1 mô tả vòng đời của chiếc đồng hồ để bàn qua 4 giai đoạn.',
            guidingQuestions: [
              '1. Hình 1a: Thợ đeo kính lúp chỉnh bánh răng đồng hồ -> Là hoạt động gì?',
              '2. Hình 1b: Cả gia đình ngắm chiếc đồng hồ đang chạy 10:10 -> Là hoạt động gì?',
              '3. Hình 1c: Kĩ sư ngồi vẽ phác thảo chiếc đồng hồ trên bàn làm việc -> Là hoạt động gì?',
              '4. Hình 1d: Công nhân lắp ráp hàng loạt đồng hồ trong nhà máy -> Là hoạt động gì?',
              '5. Trong 4 hoạt động đó, hoạt động nào BẮT BUỘC phải làm đầu tiên?'
            ],
            hiddenAnswer: 'Hình 1c: Thiết kế (thực hiện ĐẦU TIÊN); Hình 1d: Sản xuất; Hình 1b: Vận hành, sử dụng; Hình 1a: Bảo dưỡng, sửa chữa. Hoạt động được thực hiện ĐẦU TIÊN là: THIẾT KẾ.',
            teacherConclusion: 'Muốn tạo ra sản phẩm công nghệ cần phải bắt đầu từ việc thiết kế sản phẩm. Thứ tự hợp lí: Thiết kế ➔ Sản xuất ➔ Vận hành, sử dụng ➔ Bảo dưỡng, sửa chữa.'
          },
          {
            id: 'kp-8-2',
            title: '2. Bản chất sáng tạo của thiết kế (Hình 2 SGK tr. 15)',
            task: 'Quan sát Hình 2 và nêu sự khác nhau về kiểu dáng, màu sắc của những chiếc đồng hồ: a) Đồng hồ báo thức chuông đôi; b) Đồng hồ treo tường quả lắc; c) Đồng hồ đeo tay dây da; d) Đồng hồ cát. Hoạt động nào tạo nên sự khác nhau đó?',
            context: 'Cùng là công cụ đo thời gian nhưng mỗi loại có hình dáng độc đáo riêng.',
            guidingQuestions: [
              '1. Vì sao có chiếc đồng hồ đeo ở cổ tay, có chiếc để bàn, có chiếc treo tường?',
              '2. Sự phong phú về mẫu mã đáp ứng nhu cầu gì của người tiêu dùng?',
              '3. Hoạt động nào đã tạo ra sự đa dạng muôn màu đó?'
            ],
            hiddenAnswer: 'Các chiếc đồng hồ khác nhau về hình dáng, chất liệu (kim loại, gỗ, da, kính, cát), màu sắc và cách sử dụng. Chính hoạt động THIẾT KẾ sáng tạo đã tạo nên sự khác nhau đó để đáp ứng nhu cầu, sở thích đa dạng của con người.',
            teacherConclusion: 'Thiết kế là quá trình sáng tạo để tạo ra sản phẩm đáp ứng tốt hơn nhu cầu của con người.'
          }
        ],
        thaoLuan: {
          title: 'Thảo luận nhóm: Nhận diện vai trò của thiết kế',
          groupTask: 'Nhóm 4 bạn: Hãy quan sát chiếc cặp sách của các thành viên trong nhóm và chỉ ra những chi tiết thiết kế thông minh (ví dụ: đệm lưng chống gù, ngăn đựng bình nước, dải phản quang an toàn...).',
          durationMinutes: 4,
          guidingPrompts: [
            'Chiếc cặp có bao nhiêu ngăn và mỗi ngăn dùng làm gì?',
            'Quai đeo có êm không, nhờ chi tiết thiết kế nào?',
            'Nếu không có nhà thiết kế tạo ra chiếc cặp thì học sinh đi học thế nào?'
          ],
          suggestedHints: [
            'Quai đeo có đệm mút giúp vai không bị đau khi mang sách vở nặng.',
            'Vải chống thấm nước giúp bảo vệ tập vở khi gặp trời mưa nhỏ.',
            'Khóa kéo trơn tru dễ đóng mở.'
          ],
          conclusion: 'Thiết kế tốt mang lại sự thoải mái, an toàn và tiện lợi cho người dùng.'
        },
        luyenTap: [
          {
            id: 'lt-8-1',
            type: 'order',
            instruction: 'Sắp xếp 4 hoạt động tạo ra và sử dụng sản phẩm công nghệ theo đúng thứ tự logic:',
            items: [
              { id: 'act-sx', text: 'Sản xuất sản phẩm' },
              { id: 'act-tk', text: 'Thiết kế sản phẩm' },
              { id: 'act-bd', text: 'Bảo dưỡng, sửa chữa' },
              { id: 'act-vh', text: 'Vận hành, sử dụng' }
            ],
            correctOrder: ['act-tk', 'act-sx', 'act-vh', 'act-bd'],
            difficulty: 'basic'
          },
          {
            id: 'lt-8-2',
            type: 'true_false',
            statement: 'Thiết kế chỉ đơn thuần là vẽ lại y nguyên những gì người khác đã làm, không cần bất kỳ sự sáng tạo nào.',
            isCorrect: false,
            explanation: 'Sai. Thiết kế là một quá trình sáng tạo không ngừng để tạo ra sản phẩm mới hoặc cải tiến sản phẩm đáp ứng tốt hơn nhu cầu con người.',
            difficulty: 'basic'
          }
        ],
        vanDung: {
          title: 'Em vận dụng: Đóng góp ý kiến thiết kế',
          scenario: 'Chiếc bàn học ở nhà của bạn Lan có mặt bàn phẳng nhưng lại thiếu chỗ để đặt thước kẻ và bút, khiến bút rất hay bị lăn rơi xuống đất gãy ngòi.',
          question: 'Em hãy gợi ý một chi tiết thiết kế đơn giản để khắc phục nhược điểm này.',
          options: [
            {
              label: 'A',
              text: 'Thiết kế thêm một rãnh lõm nhỏ nông ở mép trên mặt bàn hoặc gắn thêm khay cắm bút',
              isOptimal: true,
              feedback: 'Ý tưởng thiết kế rất thông minh và tiện dụng!'
            },
            {
              label: 'B',
              text: 'Dùng băng keo dán chặt tất cả bút vào mặt bàn',
              isOptimal: false,
              feedback: 'Bất tiện khi muốn lấy bút ra viết.'
            }
          ],
          teacherExplanation: 'Mọi cải tiến thiết kế đều xuất phát từ việc quan sát thực tế và tìm giải pháp tiện lợi.'
        },
        ghiNho: {
          mainTitle: 'THIẾT KẾ TRONG CUỘC SỐNG',
          summaryQuote: 'Muốn tạo ra sản phẩm công nghệ cần phải bắt đầu từ việc thiết kế. Thiết kế là quá trình sáng tạo để tạo ra sản phẩm đáp ứng tốt hơn nhu cầu của con người.',
          branches: [
            {
              label: 'Vòng đời sản phẩm',
              color: 'blue',
              items: ['1. Thiết kế (đầu tiên)', '2. Sản xuất', '3. Vận hành, sử dụng', '4. Bảo dưỡng, sửa chữa']
            },
            {
              label: 'Bản chất thiết kế',
              color: 'emerald',
              items: ['Quá trình sáng tạo', 'Kiểu dáng, màu sắc đa dạng', 'Thỏa mãn nhu cầu con người']
            }
          ],
          sgkNote: 'Ghi nhớ SGK Công nghệ 5, trang 15.'
        },
        cungCo: [
          {
            id: 'cc-8-1',
            question: 'Hoạt động nào được thực hiện ĐẦU TIÊN để tạo ra sản phẩm công nghệ?',
            options: ['A. Sản xuất', 'B. Thiết kế', 'C. Vận hành sử dụng', 'D. Bảo dưỡng sửa chữa'],
            correctIndex: 1,
            explanation: 'Thiết kế luôn là bước khởi đầu quyết định hình dạng, tính năng của sản phẩm.'
          },
          {
            id: 'cc-8-2',
            question: 'Thiết kế là quá trình gì?',
            options: [
              'A. Quá trình bắt chước mù quáng',
              'B. Quá trình sáng tạo để tạo ra sản phẩm đáp ứng tốt hơn nhu cầu của con người',
              'C. Quá trình phá hủy sản phẩm cũ',
              'D. Chỉ là việc bán hàng'
            ],
            correctIndex: 1,
            explanation: 'Định nghĩa chuẩn SGK trang 15: Thiết kế là quá trình sáng tạo.'
          }
        ],
        teacherGuide: {
          objectives: [
            'Nhận thức được: muốn tạo ra sản phẩm công nghệ cần phải thiết kế; thiết kế là quá trình sáng tạo.',
            'Nêu đúng thứ tự 4 hoạt động vòng đời sản phẩm.'
          ],
          keyKnowledge: [
            'Thiết kế là bước số 1; thiết kế mang tính sáng tạo tạo nên sự phong phú của sản phẩm.'
          ],
          estimatedMinutes: 35,
          methodologyTips: [
            'Cho học sinh xem nhiều mẫu đồng hồ hoặc hộp bút để thấy sự phong phú do thiết kế mang lại.'
          ],
          equipmentNeeded: ['Tranh Hình 1 & 2 SGK tr. 14 - 15'],
          quickAnswers: [
            { question: 'Bước nào làm đầu tiên?', answer: 'Thiết kế.' }
          ]
        }
      },
      {
        id: 'tiet-9',
        periodNumber: 9,
        lessonId: 'bai-3',
        periodInLesson: 2,
        totalPeriodsInLesson: 2,
        title: 'Tiết 2: Các công việc chính của thiết kế & Thực hành phác thảo',
        focusContent: 'Nắm vững 4 bước chính của thiết kế (Hình thành ý tưởng ➔ Vẽ phác thảo & chọn vật liệu dụng cụ ➔ Làm sản phẩm mẫu ➔ Đánh giá hoàn thiện); thực hành vẽ phác thảo ý tưởng một sản phẩm công nghệ đơn giản.',
        sgkPages: 'Trang 15 – 16',
        khoiDong: {
          title: 'Khởi động: Thử tài sắp xếp bước thiết kế',
          type: 'quick_quiz',
          question: 'Trước khi bắt tay vào dùng kéo cắt giấy làm sản phẩm mẫu, người thiết kế bắt buộc phải làm việc gì trước?',
          options: [
            'A. Đánh giá và bán sản phẩm',
            'B. Hình thành ý tưởng và vẽ phác thảo sản phẩm trên giấy',
            'C. Mời khách hàng đến dùng thử',
            'D. Đóng gói sản phẩm xuất khẩu'
          ],
          correctAnswer: 1,
          explanation: 'Phải có ý tưởng và bản vẽ phác thảo trước rồi mới biết cần vật liệu gì và cắt ghép như thế nào.',
          leadIn: 'Hãy cùng tìm hiểu trọn vẹn quy trình 4 bước thiết kế chuyên nghiệp trong bài học hôm nay!'
        },
        khamPha: [
          {
            id: 'kp-9-1',
            title: '1. Bốn bước chính của thiết kế (Hình 3 SGK tr. 15)',
            task: 'Quan sát Hình 3 SGK và sắp xếp các công việc chính của thiết kế theo thứ tự hợp lí: (1) Đánh giá và hoàn thiện sản phẩm; (2) Làm sản phẩm mẫu; (3) Vẽ phác thảo sản phẩm và lựa chọn vật liệu, dụng cụ; (4) Hình thành ý tưởng về sản phẩm.',
            context: 'Sơ đồ hình tròn khép kín biểu thị quy trình thiết kế chuyên nghiệp.',
            guidingQuestions: [
              '1. Muốn làm một sản phẩm, trước hết trong đầu em phải nảy sinh điều gì?',
              '2. Sau khi có ý tưởng, làm thế nào để người khác hiểu được hình dung của em?',
              '3. Sau khi vẽ bản vẽ và chuẩn bị vật liệu, bước tiếp theo là gì?',
              '4. Sau khi làm xong mẫu, bước cuối cùng là gì trước khi sản xuất hàng loạt?'
            ],
            hiddenAnswer: 'Thứ tự đúng gồm 4 bước: Bước 1: Hình thành ý tưởng về sản phẩm ➔ Bước 2: Vẽ phác thảo sản phẩm và lựa chọn vật liệu, dụng cụ ➔ Bước 3: Làm sản phẩm mẫu ➔ Bước 4: Đánh giá và hoàn thiện sản phẩm.',
            teacherConclusion: 'Để thiết kế một sản phẩm, em cần thực hiện 4 bước chính theo đúng trình tự khoa học.'
          },
          {
            id: 'kp-9-2',
            title: '2. Tìm hiểu bản vẽ phác thảo ý tưởng (Hình 4 SGK tr. 16)',
            task: 'Quan sát 3 bản vẽ phác thảo trong Hình 4 SGK: a) Hộp bút (đồ dùng học tập, vật liệu: vải); b) Chong chóng (đồ chơi trẻ em, vật liệu: giấy); c) Lọ hoa (đồ dùng sinh hoạt, vật liệu: que gỗ, dây lụa). Nhận xét cách trình bày một bản phác thảo ý tưởng.',
            context: 'Một bản vẽ phác thảo cần có hình vẽ minh họa và các thông tin cơ bản.',
            guidingQuestions: [
              '1. Mỗi bản vẽ phác thảo gồm có những mục thông tin nào?',
              '2. Tại sao cần ghi rõ "Tên sản phẩm", "Chức năng" và "Vật liệu"?',
              '3. Nét vẽ phác thảo có cần quá cầu kỳ như một bức tranh hoàn chỉnh không?'
            ],
            hiddenAnswer: 'Bản vẽ phác thảo gồm: Hình vẽ phác hình dáng sản phẩm + Bảng mô tả ngắn: Tên sản phẩm, Chức năng của sản phẩm, Vật liệu dự kiến sử dụng. Nét vẽ cần rõ ràng, thể hiện được cấu tạo chính.',
            teacherConclusion: 'Vẽ phác thảo là phương tiện trực quan giúp cụ thể hoá ý tưởng trong đầu thành hình ảnh thực tế trên giấy.'
          }
        ],
        thaoLuan: {
          title: 'Thảo luận & Thực hành phác thảo: Ý tưởng của em',
          groupTask: 'Làm việc cá nhân hoặc nhóm đôi: Chọn 1 trong 3 nhóm sản phẩm (Đồ dùng học tập / Đồ chơi trẻ em / Đồ sinh hoạt gia đình) và phác thảo nhanh ý tưởng vào vở hoặc phiếu học tập.',
          durationMinutes: 5,
          guidingPrompts: [
            'Em định thiết kế đồ vật gì?',
            'Nó có chức năng gì đặc biệt tiện lợi?',
            'Em sẽ dùng những vật liệu tái chế nào (giấy bìa, vỏ chai, que kem...)?'
          ],
          suggestedHints: [
            'Hộp đựng bút để bàn làm từ ống lon sữa bọc giấy màu.',
            'Chiếc kẹp sách đánh dấu trang hình chiếc lá ngộ nghĩnh.',
            'Mô hình máy bay đồ chơi làm từ que kem gỗ.'
          ],
          conclusion: 'Mọi phát minh vĩ đại đều bắt đầu từ một nét vẽ phác thảo đơn sơ trên trang giấy trắng.'
        },
        luyenTap: [
          {
            id: 'lt-9-1',
            type: 'order',
            instruction: 'Kéo thả 4 bước của quy trình thiết kế theo đúng trình tự chuẩn:',
            items: [
              { id: 'b-mau', text: 'Bước: Làm sản phẩm mẫu' },
              { id: 'b-y-tuong', text: 'Bước: Hình thành ý tưởng về sản phẩm' },
              { id: 'b-danh-gia', text: 'Bước: Đánh giá và hoàn thiện sản phẩm' },
              { id: 'b-phac-thao', text: 'Bước: Vẽ phác thảo sản phẩm và lựa chọn vật liệu, dụng cụ' }
            ],
            correctOrder: ['b-y-tuong', 'b-phac-thao', 'b-mau', 'b-danh-gia'],
            difficulty: 'intermediate'
          },
          {
            id: 'lt-9-2',
            type: 'mcq',
            question: 'Bản vẽ phác thảo sản phẩm gồm những nội dung chính nào?',
            options: [
              'A. Chỉ có hình vẽ không cần chữ',
              'B. Hình vẽ phác thảo kèm tên sản phẩm, chức năng và vật liệu dự kiến',
              'C. Bảng giá tiền bán sản phẩm',
              'D. Họ tên của tất cả người mua hàng'
            ],
            correctAnswer: 1,
            explanation: 'Bản vẽ phác thảo theo SGK trang 16 gồm hình vẽ kèm tên sản phẩm, chức năng và vật liệu.',
            difficulty: 'basic'
          }
        ],
        vanDung: {
          title: 'Em vận dụng: Đánh giá và cải tiến bản phác thảo',
          scenario: 'Khi phác thảo chiếc ống đựng bút, bạn Minh chỉ vẽ một chiếc ống tròn trơn. Bạn An góp ý: "Nếu chia thành 2 ngăn cao thấp thì ngăn thấp để gôm tẩy, ngăn cao để thước kẻ sẽ gọn hơn nhiều".',
          question: 'Lời góp ý của bạn An tương ứng với bước nào trong quy trình thiết kế?',
          options: [
            {
              label: 'A',
              text: 'Đánh giá và hoàn thiện ý tưởng thiết kế',
              isOptimal: true,
              feedback: 'Chính xác! Lắng nghe góp ý để hoàn thiện thiết kế trước khi làm mẫu giúp tiết kiệm công sức và vật liệu.'
            },
            {
              label: 'B',
              text: 'Bảo dưỡng sản phẩm sau khi dùng 1 năm',
              isOptimal: false,
              feedback: 'Sản phẩm chưa làm ra nên chưa thể bảo dưỡng.'
            }
          ],
          teacherExplanation: 'Hoàn thiện bản vẽ phác thảo kỹ lưỡng là bí quyết thành công của mọi kỹ sư thiết kế.'
        },
        ghiNho: {
          mainTitle: '4 BƯỚC CHÍNH CỦA THIẾT KẾ',
          summaryQuote: 'Để thiết kế một sản phẩm, cần thực hiện 4 bước: (1) Hình thành ý tưởng; (2) Vẽ phác thảo & chọn vật liệu, dụng cụ; (3) Làm sản phẩm mẫu; (4) Đánh giá và hoàn thiện sản phẩm.',
          branches: [
            {
              label: 'Bước 1 & 2',
              color: 'blue',
              items: ['1. Hình thành ý tưởng sản phẩm', '2. Vẽ phác thảo + Chọn vật liệu, dụng cụ']
            },
            {
              label: 'Bước 3 & 4',
              color: 'emerald',
              items: ['3. Làm sản phẩm mẫu thực tế', '4. Đánh giá & Hoàn thiện sản phẩm']
            }
          ],
          sgkNote: 'Ghi nhớ SGK Công nghệ 5, trang 15.'
        },
        cungCo: [
          {
            id: 'cc-9-1',
            question: 'Bước thứ 3 trong quy trình thiết kế là gì?',
            options: [
              'A. Hình thành ý tưởng',
              'B. Vẽ phác thảo',
              'C. Làm sản phẩm mẫu',
              'D. Đánh giá hoàn thiện'
            ],
            correctIndex: 2,
            explanation: 'Bước 3 là làm sản phẩm mẫu dựa trên bản vẽ phác thảo.'
          },
          {
            id: 'cc-9-2',
            question: 'Sau khi làm xong sản phẩm mẫu, ta cần làm gì tiếp theo?',
            options: [
              'A. Vứt bỏ sản phẩm mẫu đi',
              'B. Đánh giá sản phẩm theo tiêu chí và hoàn thiện',
              'C. Đem bán ngay lập tức',
              'D. Không cần kiểm tra'
            ],
            correctIndex: 1,
            explanation: 'Bước 4 là đánh giá sản phẩm mẫu và hoàn thiện những chỗ chưa đạt.'
          }
        ],
        teacherGuide: {
          objectives: [
            'Kể tên được 4 bước chính khi thiết kế một sản phẩm công nghệ.',
            'Vẽ phác thảo và nêu được ý tưởng thiết kế một sản phẩm đơn giản.'
          ],
          keyKnowledge: [
            '4 bước thiết kế: Ý tưởng ➔ Phác thảo & vật liệu ➔ Sản phẩm mẫu ➔ Đánh giá hoàn thiện.'
          ],
          estimatedMinutes: 35,
          methodologyTips: [
            'Chuẩn bị giấy A4 và bút chì cho từng bàn học sinh để các em trực tiếp phác thảo.'
          ],
          equipmentNeeded: ['Hình 3 và Hình 4 SGK tr. 15 - 16, giấy vẽ phác thảo'],
          quickAnswers: [
            { question: 'Có mấy bước chính của thiết kế?', answer: '4 bước chính.' }
          ]
        }
      }
    ]
  },
  {
    id: 'danh-gia-hk1-giua',
    number: 'Tiết 10',
    title: 'Kiểm tra, đánh giá định kì Giữa học kì 1',
    partId: 'part-1',
    partTitle: 'PHẦN MỘT: CÔNG NGHỆ VÀ ĐỜI SỐNG',
    totalPeriods: 1,
    sgkPages: 'Ôn tập Bài 1, Bài 2, Bài 3',
    isEvaluation: true,
    periods: [
      {
        id: 'tiet-10',
        periodNumber: 10,
        lessonId: 'danh-gia-hk1-giua',
        periodInLesson: 1,
        totalPeriodsInLesson: 1,
        title: 'Tiết 10: Ôn tập và Đánh giá định kì Giữa học kì 1',
        focusContent: 'Hệ thống hóa toàn bộ kiến thức và kỹ năng từ Bài 1 đến Bài 3; thực hiện bài kiểm tra đánh giá định kì năng lực công nghệ giữa HK1.',
        sgkPages: 'Trang 6 – 16',
        khoiDong: {
          title: 'Khởi động: Thử thách vòng quay tri thức',
          type: 'quick_quiz',
          question: 'Em đã sẵn sàng tham gia bài đánh giá định kì giữa học kì 1 để kiểm tra lại hành trình khám phá từ Bài 1 đến Bài 3 chưa?',
          options: [
            'A. Em đã sẵn sàng và rất tự tin!',
            'B. Em cần ôn tập thêm một chút',
            'C. Em thấy còn hơi bỡ ngỡ',
            'D. Em chưa chuẩn bị gì'
          ],
          correctAnswer: 0,
          explanation: 'Chúc các em làm bài thật tốt và đạt điểm số xuất sắc!',
          leadIn: 'Hãy cùng ôn tập nhanh các điểm chốt và bước vào bộ câu hỏi kiểm tra năng lực công nghệ!'
        },
        khamPha: [
          {
            id: 'kp-10-1',
            title: '1. Ôn tập bảng tổng kết 3 bài học',
            task: 'Nhắc lại các nội dung cốt lõi: (1) Bài 1: 3 vai trò và 4 mặt trái của công nghệ; (2) Bài 2: 4 nhà sáng chế (1784, 1876, 1879, 1886) và đức tính cần có; (3) Bài 3: 4 bước chính của quy trình thiết kế.',
            context: 'Củng cố nền tảng kiến thức trước khi làm bài thi trắc nghiệm và tình huống.',
            guidingQuestions: [
              '1. Em hãy kể tên 4 nhà sáng chế và phát minh tương ứng?',
              '2. Quy trình thiết kế gồm mấy bước, bước nào đầu tiên?',
              '3. Nêu 4 mặt trái khi sử dụng công nghệ không đúng cách?'
            ],
            hiddenAnswer: 'Nội dung cốt lõi: Vai trò và mặt trái công nghệ; 4 nhà sáng chế lịch sử và đức tính kiên trì, đam mê; Vòng đời sản phẩm và 4 bước thiết kế.',
            teacherConclusion: 'Học sinh nắm vững các khái niệm chuẩn xác từ SGK để vận dụng vào đời sống.'
          }
        ],
        thaoLuan: {
          title: 'Thảo luận: Giải đáp thắc mắc trước giờ kiểm tra',
          groupTask: 'Dành 3 phút cho các bạn hỏi - đáp nhanh về các nội dung khó hoặc dễ nhầm lẫn.',
          durationMinutes: 3,
          guidingPrompts: ['Phân biệt sáng chế và phát minh tự nhiên', 'Thứ tự các bước thiết kế'],
          suggestedHints: ['Xem lại trục thời gian 1784 - 1876 - 1879 - 1886.'],
          conclusion: 'Tất cả các em đã nắm chắc bài học.'
        },
        luyenTap: [
          {
            id: 'lt-10-1',
            type: 'mcq',
            question: 'Năm 1879, Tô-mát Ê-đi-xơn được cấp bằng sáng chế cho sản phẩm công nghệ nào?',
            options: [
              'A. Động cơ hơi nước',
              'B. Bóng đèn sợi đốt',
              'C. Chiếc điện thoại',
              'D. Ô tô chạy xăng'
            ],
            correctAnswer: 1,
            explanation: 'Năm 1879 gắn liền với bóng đèn sợi đốt của Edison.',
            difficulty: 'basic'
          },
          {
            id: 'lt-10-2',
            type: 'matching',
            instruction: 'Ghép đúng nội dung ôn tập giữa kì 1:',
            leftItems: [
              { id: 'l-step1', text: 'Bước 1 thiết kế' },
              { id: 'l-step2', text: 'Bước 2 thiết kế' },
              { id: 'l-step3', text: 'Bước 3 thiết kế' },
              { id: 'l-step4', text: 'Bước 4 thiết kế' }
            ],
            rightItems: [
              { id: 'r-step1', text: 'Hình thành ý tưởng về sản phẩm' },
              { id: 'r-step2', text: 'Vẽ phác thảo sản phẩm và lựa chọn vật liệu, dụng cụ' },
              { id: 'r-step3', text: 'Làm sản phẩm mẫu' },
              { id: 'r-step4', text: 'Đánh giá và hoàn thiện sản phẩm' }
            ],
            correctPairs: [
              { leftId: 'l-step1', rightId: 'r-step1' },
              { leftId: 'l-step2', rightId: 'r-step2' },
              { leftId: 'l-step3', rightId: 'r-step3' },
              { leftId: 'l-step4', rightId: 'r-step4' }
            ],
            difficulty: 'intermediate'
          }
        ],
        vanDung: {
          title: 'Em vận dụng: Phân tích tình huống tổng hợp',
          scenario: 'Một nhóm học sinh muốn tự làm một chiếc hộp đựng dụng cụ học tập từ bìa carton.',
          question: 'Các bạn cần tiến hành theo đúng trình tự nào dưới đây?',
          options: [
            {
              label: 'A',
              text: 'Nghĩ ý tưởng ➔ Vẽ phác thảo & chuẩn bị bìa, kéo, hồ ➔ Cắt dán làm hộp mẫu ➔ Kiểm tra hộp có chắc không và trang trí hoàn thiện',
              isOptimal: true,
              feedback: 'Hoàn toàn chính xác theo đúng 4 bước thiết kế chuẩn khoa học!'
            },
            {
              label: 'B',
              text: 'Cắt bừa bìa carton ➔ Xem được gì thì dùng ➔ Vẽ hình sau',
              isOptimal: false,
              feedback: 'Làm việc tùy tiện sẽ gây lãng phí bìa carton và sản phẩm không như ý.'
            }
          ],
          teacherExplanation: 'Tuân thủ quy trình thiết kế giúp làm ra sản phẩm bền đẹp và tiết kiệm.'
        },
        ghiNho: {
          mainTitle: 'TỔNG HỢP KIẾN THỨC GIỮA HỌC KÌ 1',
          summaryQuote: 'Nắm vững vai trò và mặt trái công nghệ; tôn vinh các nhà sáng chế vĩ đại; làm chủ 4 bước của quy trình thiết kế sản phẩm.',
          branches: [
            { label: 'Bài 1: Công nghệ', color: 'blue', items: ['3 vai trò lớn', '4 mặt trái cần tránh'] },
            { label: 'Bài 2: Nhà sáng chế', color: 'emerald', items: ['4 nhà sáng chế tiêu biểu', 'Đức tính kiên trì, đam mê'] },
            { label: 'Bài 3: Thiết kế', color: 'amber', items: ['Khái niệm sáng tạo', '4 bước thiết kế chuẩn'] }
          ],
          sgkNote: 'Khung ôn tập chuẩn Giữa học kì 1 môn Công nghệ lớp 5.'
        },
        cungCo: [
          {
            id: 'cc-10-1',
            question: 'Sáng chế nào mở ra thời đại cơ giới và cuộc cách mạng công nghiệp thế kỷ XIX?',
            options: [
              'A. Động cơ hơi nước (Giêm Oát, 1784)',
              'B. Bút chì than củi',
              'C. Xe đạp mini',
              'D. Máy tính bảng'
            ],
            correctIndex: 0,
            explanation: 'Động cơ hơi nước năm 1784 của James Watt.'
          },
          {
            id: 'cc-10-2',
            question: 'Hoạt động nào dưới đây thể hiện mặt trái "Lệ thuộc vào sản phẩm công nghệ"?',
            options: [
              'A. Phép tính đơn giản 5234 x 10 cũng phải bấm máy tính',
              'B. Tự nhẩm tính tiền khi đi chợ',
              'C. Đọc sách giấy truyền thống',
              'D. Tập thể dục buổi sáng'
            ],
            correctIndex: 0,
            explanation: 'Ý lại máy tính cho những phép tính nhân nhẩm đơn giản là biểu hiện của sự lệ thuộc.'
          }
        ],
        teacherGuide: {
          objectives: [
            'Đánh giá mức độ đạt chuẩn kiến thức kỹ năng của học sinh từ Bài 1 đến Bài 3.',
            'Phân loại học sinh theo 3 mức độ (Cơ bản, Thông hiểu, Vận dụng).'
          ],
          keyKnowledge: ['Nội dung trọng tâm 3 bài học đầu năm.'],
          estimatedMinutes: 35,
          methodologyTips: ['Tổ chức làm bài nghiêm túc, kết hợp phần trắc nghiệm và tự luận ngắn.'],
          equipmentNeeded: ['Đề kiểm tra in sẵn hoặc trình chiếu trên bảng tương tác'],
          quickAnswers: [{ question: 'Số lượng câu hỏi kiểm tra chuẩn?', answer: '10 - 15 câu trắc nghiệm và 1 bài tình huống.' }]
        }
      }
    ]
  }
];
