import { Lesson } from '../types';

export const PART_2_LESSONS_PART2: Lesson[] = [
  {
    id: 'bai-8',
    number: 8,
    title: 'Mô hình máy phát điện gió',
    partId: 'part-2',
    partTitle: 'PHẦN HAI: THỦ CÔNG KĨ THUẬT',
    totalPeriods: 4,
    sgkPages: 'Trang 38 – 43',
    periods: [
      {
        id: 'tiet-27',
        periodNumber: 27,
        lessonId: 'bai-8',
        periodInLesson: 1,
        totalPeriodsInLesson: 4,
        title: 'Tiết 1: Năng lượng gió & Tìm hiểu sản phẩm mẫu',
        focusContent: 'Tìm hiểu tác dụng của năng lượng gió (Hình 1 SGK tr. 38: gió thổi làm quay cánh quạt tạo ra dòng điện); phân biệt quạt điện và máy phát điện gió; nhận biết 3 bộ phận chính của mô hình (Hình 3 tr. 39).',
        sgkPages: 'Trang 38 – 39',
        khoiDong: {
          title: 'Khởi động: Cánh quạt tạo ra điện',
          type: 'question',
          question: 'Em hãy đọc câu hỏi SGK tr. 38: "Chiếc quạt điện ở nhà dùng điện để tạo ra gió thổi mát. Vậy chiếc quạt gió khổng lồ trên cánh đồng điện gió dùng gió để làm gì?".',
          options: [
            'A. Dùng sức gió thổi làm quay cánh quạt để phát ra dòng điện',
            'B. Thổi mát cho mây trời',
            'C. Để đuổi chim chóc',
            'D. Không có tác dụng gì'
          ],
          correctAnswer: 0,
          explanation: 'Chính xác! Máy phát điện gió biến đổi năng lượng của gió thành năng lượng điện phục vụ con người.',
          leadIn: 'Hôm nay chúng ta sẽ cùng khám phá mô hình máy phát điện gió - nguồn năng lượng tái tạo vô tận và sạch của tương lai!'
        },
        khamPha: [
          {
            id: 'kp-27-1',
            title: '1. Tác dụng của gió & So sánh với quạt điện (Hình 1 & 2 SGK tr. 38 - 39)',
            task: 'Quan sát Hình 1 và 2: Gió làm quay cánh quạt của máy phát điện gió tạo ra dòng điện. So sánh sự khác nhau cơ bản giữa: Quạt điện dân dụng và Máy phát điện gió.',
            context: 'Chuyển hóa năng lượng trong kỹ thuật công nghệ.',
            guidingQuestions: [
              '1. Gió tự nhiên có nguồn năng lượng gì?',
              '2. Quạt điện ở nhà nhận năng lượng gì và tạo ra cái gì (nhận điện năng ➔ tạo ra động năng của gió)?',
              '3. Máy phát điện gió nhận năng lượng gì và tạo ra cái gì (nhận năng lượng gió ➔ tạo ra điện năng)?'
            ],
            hiddenAnswer: 'Gió là nguồn năng lượng tái tạo sạch. Điểm khác biệt cốt lõi: Quạt điện TIÊU THỤ ĐIỆN ĐỂ TẠO RA GIÓ; còn máy phát điện gió DÙNG SỨC GIÓ ĐỂ PHÁT RA ĐIỆN NĂNG.',
            teacherConclusion: 'Máy phát điện gió là thiết bị biến đổi cơ năng của gió thành điện năng sạch thân thiện với môi trường.'
          },
          {
            id: 'kp-27-2',
            title: '2. Cấu tạo 3 bộ phận chính của mô hình máy phát điện gió (Hình 3 SGK tr. 39)',
            task: 'Quan sát mô hình mẫu Hình 3 SGK tr. 39 và gọi tên 3 bộ phận chính: a) Máy phát điện cánh quạt và dây dẫn điện; b) Đèn LED; c) Khung giá đỡ. Đọc 6 yêu cầu sản phẩm mẫu.',
            context: 'Mô hình thể hiện trọn vẹn nguyên lý phát điện gió.',
            guidingQuestions: [
              '1. Bộ phận nào đón gió và trực tiếp phát ra điện?',
              '2. Bộ phận nào dùng để báo hiệu có điện phát ra (đèn LED)?',
              '3. Khung giá đỡ có nhiệm vụ gì?'
            ],
            hiddenAnswer: 'Gồm 3 bộ phận: (1) Máy phát điện cánh quạt và dây dẫn điện; (2) Đèn LED báo hiệu; (3) Khung giá đỡ đứng vững trên mặt bàn. Yêu cầu: Đúng đủ bộ phận, chắc chắn, dây gọn, đèn phát sáng khi cánh quạt quay, độ sáng tỉ lệ với tốc độ gió.',
            teacherConclusion: '3 bộ phận phối hợp nhịp nhàng tạo thành mô hình trạm phát điện gió hoàn chỉnh.'
          }
        ],
        thaoLuan: {
          title: 'Thảo luận nhóm: Vì sao năng lượng gió là năng lượng xanh?',
          groupTask: 'Nhóm 4 bạn: Thảo luận vì sao phát điện bằng gió lại không gây ô nhiễm không khí như các nhà máy nhiệt điện đốt than đá?',
          durationMinutes: 4,
          guidingPrompts: ['Gió có bao giờ cạn kiệt không?', 'Quạt gió quay có xả khói bụi hay khí độc không?'],
          suggestedHints: ['Gió là năng lượng tái tạo tự nhiên, không đốt nhiên liệu nên không sinh ra khí thải gây hiệu ứng nhà kính.'],
          conclusion: 'Năng lượng gió là xu thế phát triển bền vững của Việt Nam và toàn cầu.'
        },
        luyenTap: [
          {
            id: 'lt-27-1',
            type: 'matching',
            instruction: 'Nối đúng thiết bị với nguyên lý chuyển hóa năng lượng tương ứng:',
            leftItems: [
              { id: 'dev-fan', text: 'Chiếc quạt điện ở nhà' },
              { id: 'dev-wind', text: 'Máy phát điện gió' }
            ],
            rightItems: [
              { id: 'eng-fan', text: 'Tiêu thụ năng lượng điện để tạo ra luồng gió làm mát' },
              { id: 'eng-wind', text: 'Sử dụng năng lượng gió làm quay cánh quạt để phát ra năng lượng điện' }
            ],
            correctPairs: [
              { leftId: 'dev-fan', rightId: 'eng-fan' },
              { leftId: 'dev-wind', rightId: 'eng-wind' }
            ],
            difficulty: 'basic'
          },
          {
            id: 'lt-27-2',
            type: 'mcq',
            question: 'Mô hình máy phát điện gió trong SGK gồm mấy bộ phận chính?',
            options: ['A. 2 bộ phận', 'B. 3 bộ phận', 'C. 5 bộ phận', 'D. 10 bộ phận'],
            correctAnswer: 1,
            explanation: 'Gồm 3 bộ phận: Máy phát điện cánh quạt & dây dẫn; Đèn LED; Khung giá đỡ.',
            difficulty: 'basic'
          }
        ],
        vanDung: {
          title: 'Em vận dụng: Khám phá cánh đồng điện gió Việt Nam',
          scenario: 'Ở Việt Nam, các cánh đồng điện gió khổng lồ thường được xây dựng ở những vùng ven biển như Ninh Thuận, Bình Thuận, Bạc Liêu...',
          question: 'Tại sao các kỹ sư lại chọn những nơi này để lắp đặt tuabin gió?',
          options: [
            {
              label: 'A',
              text: 'Vì vùng ven biển có lượng gió thổi quanh năm mạnh và ổn định, giúp máy phát điện hoạt động hiệu quả nhất',
              isOptimal: true,
              feedback: 'Rất am hiểu thực tế! Gió biển dồi dào là nguồn tài nguyên vô giá để phát điện sạch.'
            },
            {
              label: 'B',
              text: 'Vì ở đó không có người ở',
              isOptimal: false,
              feedback: 'Lý do chính là điều kiện tốc độ gió mạnh và ổn định.'
            }
          ],
          teacherExplanation: 'Tận dụng địa hình ven biển giúp nước ta phát triển mạnh mẽ năng lượng tái tạo.'
        },
        ghiNho: {
          mainTitle: 'BÀI 8 - TIẾT 1: NĂNG LƯỢNG GIÓ & MÁY PHÁT ĐIỆN',
          summaryQuote: 'Gió làm quay cánh quạt của máy phát điện gió tạo ra dòng điện. Mô hình gồm 3 bộ phận: Máy phát điện cánh quạt & dây dẫn, Đèn LED, Khung giá đỡ.',
          branches: [
            { label: 'Nguyên lý', color: 'blue', items: ['Năng lượng gió ➔ Năng lượng điện', 'Ngược lại với quạt điện gia đình'] },
            { label: '3 bộ phận mô hình', color: 'emerald', items: ['Máy phát điện cánh quạt', 'Bóng đèn LED báo hiệu', 'Khung giá đỡ đứng vững'] }
          ],
          sgkNote: 'Ghi nhớ SGK Công nghệ 5, trang 38 - 39.'
        },
        cungCo: [
          {
            id: 'cc-27-1',
            question: 'Bộ phận nào trên mô hình máy phát điện gió có nhiệm vụ báo hiệu dòng điện được tạo ra?',
            options: ['A. Đèn LED', 'B. Khung giá đỡ', 'C. Cờ-lê', 'D. Tấm lớn'],
            correctIndex: 0,
            explanation: 'Đèn LED sẽ phát sáng khi có dòng điện phát ra từ máy phát điện.'
          }
        ],
        teacherGuide: {
          objectives: ['Hiểu được nguyên lý biến đổi năng lượng gió thành điện năng; nhận biết 3 bộ phận của mô hình.'],
          keyKnowledge: ['Năng lượng gió và cấu tạo mô hình máy phát điện gió.'],
          estimatedMinutes: 35,
          methodologyTips: ['Dùng video ngắn quay cánh đồng điện gió Bạc Liêu tạo hứng khởi cho tiết học.'],
          equipmentNeeded: ['Hình 1, 2, 3 SGK tr. 38 - 39, mô hình mẫu'],
          quickAnswers: [{ question: 'Có mấy bộ phận chính?', answer: '3 bộ phận chính.' }]
        }
      },
      {
        id: 'tiet-28',
        periodNumber: 28,
        lessonId: 'bai-8',
        periodInLesson: 2,
        totalPeriodsInLesson: 4,
        title: 'Tiết 2: Lựa chọn chi tiết, dụng cụ & Thực hành Bước 1, Bước 2',
        focusContent: 'Nhận diện, lựa chọn đủ 14 chi tiết và dụng cụ (SGK tr. 40 - 41); thực hành Bước 1: Lắp khung giá đỡ (Hình 4 tr. 41); Bước 2: Lắp đèn LED với dây dẫn điện (Hình 5 tr. 42); Nắm vững quy tắc chân dài LED (cực dương) nối dây đỏ, chân ngắn (cực âm) nối dây đen.',
        sgkPages: 'Trang 40 – 42',
        khoiDong: {
          title: 'Khởi động: Nhận diện chân đèn LED',
          type: 'quick_quiz',
          question: 'Em quan sát bóng đèn LED siêu sáng có 2 chân kim loại: 1 chân dài và 1 chân ngắn. Theo kiến thức kỹ thuật, chân dài là cực gì và chân ngắn là cực gì?',
          options: [
            'A. Chân dài là Cực DƯƠNG (+), Chân ngắn là Cực ÂM (-)',
            'B. Chân dài là Cực Âm, Chân ngắn là Cực Dương',
            'C. Cả hai chân đều là cực âm',
            'D. Hai chân như nhau không phân biệt'
          ],
          correctAnswer: 0,
          explanation: 'Quy ước kỹ thuật điện tử quốc tế và SGK tr. 42: Chân DÀI luôn là CỰC DƯƠNG (+), Chân NGẮN luôn là CỰC ÂM (-).',
          leadIn: 'Hãy ghi nhớ quy ước này để nối dây chính xác trong tiết thực hành hôm nay!'
        },
        khamPha: [
          {
            id: 'kp-28-1',
            title: '1. Kiểm đếm 14 chi tiết và dụng cụ (Bảng SGK tr. 40 - 41)',
            task: 'Kiểm đếm đúng số lượng chi tiết trong hộp đồ dùng: 1 Tấm lớn; 2 Thanh chữ U dài; 2 Thanh chữ U ngắn; 2 Thanh chữ L dài; 2 Thanh thẳng 3 lỗ; 1 Máy phát điện cánh quạt; 1 Đèn LED; 12 Đai ốc; 12 Vít ngắn; 1 Tua-vít; 1 Cờ-lê; 1 Băng dính 2 mặt; 1 Băng dính điện; 1 Kéo.',
            context: 'Chuẩn bị vật tư đầy đủ trước khi lắp ráp.',
            guidingQuestions: [
              '1. Băng dính điện màu đen có tác dụng gì (quấn cách điện chống chạm chập)?',
              '2. Khung giá đỡ được dựng từ những thanh kim loại nào?'
            ],
            hiddenAnswer: 'Học sinh kiểm đếm đủ 14 loại chi tiết và dụng cụ, sắp xếp gọn gàng theo nắp hộp để tiện thao tác.',
            teacherConclusion: 'Chuẩn bị đầy đủ chi tiết là khâu quan trọng đảm bảo tiết thực hành diễn ra suôn sẻ.'
          },
          {
            id: 'kp-28-2',
            title: '2. Quy trình Bước 1: Lắp khung giá đỡ (Hình 4 SGK tr. 41)',
            task: 'Quan sát Hình 4: Dùng tấm lớn làm đế; lắp 2 thanh chữ U dài đứng thẳng; dùng thanh chữ U ngắn và thanh chữ L dài giằng chéo cố định; bắt vít và đai ốc chắc chắn.',
            context: 'Khung đỡ phải đứng thẳng đứng, vững chãi, không bị xiêu vẹo khi đón gió.',
            guidingQuestions: [
              '1. Làm sao để khung trụ đứng vững trên tấm lớn?',
              '2. Dùng cờ-lê và tua-vít siết chặt các điểm bắt ốc như thế nào?'
            ],
            hiddenAnswer: 'Lắp 2 thanh chữ U dài vuông góc với tấm lớn; gia cố bằng 2 thanh chữ L dài và thanh chữ U ngắn làm giá đỡ trên đỉnh. Siết chặt ốc vít.',
            teacherConclusion: 'Khung giá đỡ vững chắc sẽ nâng đỡ toàn bộ cụm máy phát điện khi cánh quạt quay với tốc độ cao.'
          },
          {
            id: 'kp-28-3',
            title: '3. Quy trình Bước 2: Lắp đèn LED với dây dẫn điện (Hình 5 SGK tr. 42)',
            task: 'Quan sát Hình 5: Nối đầu dây điện màu ĐỎ vào chân DÀI (cực dương) của đèn LED; nối đầu dây điện màu ĐEN vào chân NGẮN (cực âm) của đèn LED. Dùng băng dính điện quấn cách điện từng chân riêng biệt.',
            context: 'Lưu ý đặc biệt SGK tr. 42: Đèn LED chỉ dẫn điện và phát sáng theo MỘT CHIỀU DUY NHẤT. Nếu nối ngược cực, đèn LED sẽ KHÔNG BAO GIỜ SÁNG!',
            guidingQuestions: [
              '1. Dây đỏ nối chân nào của LED?',
              '2. Dây đen nối chân nào?',
              '3. Vì sao phải dùng băng dính điện quấn riêng từng chân (tránh để 2 chân kim loại chạm vào nhau gây đoản mạch chập điện)?'
            ],
            hiddenAnswer: 'Dây ĐỎ ➔ Chân DÀI (+); Dây ĐEN ➔ Chân NGẮN (-). Dùng băng dính điện bọc kín riêng từng mối nối để 2 chân không chập vào nhau.',
            teacherConclusion: 'Nối đúng cực và bọc băng dính điện cách điện bảo đảm đèn LED phát sáng an toàn.'
          }
        ],
        thaoLuan: {
          title: 'Thảo luận nhóm: Kiểm tra mối nối đèn LED',
          groupTask: 'Các cặp bạn cùng bàn kiểm tra chéo: Soi kỹ chân đèn LED xem dây đỏ đã xoắn vào chân dài, dây đen xoắn vào chân ngắn chưa? Băng dính điện đã bọc kín mối đồng chưa?',
          durationMinutes: 4,
          guidingPrompts: ['Hai chân đèn có bị chạm vào nhau không?', 'Mối xoắn có chắc không?'],
          suggestedHints: ['Xoắn dây đồng thật chặt quanh chân LED trước khi dán băng dính điện.'],
          conclusion: 'Sự cẩn thận của các em đảm bảo mạch điện hoạt động hoàn hảo.'
        },
        luyenTap: [
          {
            id: 'lt-28-1',
            type: 'true_false',
            statement: 'Nếu nối dây đỏ vào chân ngắn và dây đen vào chân dài của đèn LED thì đèn vẫn phát sáng bình thường khi cánh quạt quay.',
            isCorrect: false,
            explanation: 'Sai! Đèn LED là linh kiện bán dẫn chỉ cho dòng điện chạy qua theo một chiều. Nối ngược cực đèn sẽ không sáng.',
            difficulty: 'basic'
          },
          {
            id: 'lt-28-2',
            type: 'order',
            instruction: 'Sắp xếp đúng thao tác nối đèn LED với dây dẫn điện:',
            items: [
              { id: 'led-2', text: 'Xoắn đầu dây ĐỎ vào chân DÀI, xoắn đầu dây ĐEN vào chân NGẮN của đèn LED' },
              { id: 'led-1', text: 'Phân biệt chân dài (dương) và chân ngắn (âm) của đèn LED' },
              { id: 'led-3', text: 'Dùng băng dính điện quấn bọc kín từng mối nối riêng biệt' }
            ],
            correctOrder: ['led-1', 'led-2', 'led-3'],
            difficulty: 'intermediate'
          }
        ],
        thucHanh: {
          title: 'Thực hành: Dựng khung giá đỡ và đấu nối đèn LED',
          objective: 'Lắp xong khung giá đỡ đứng vững và nối hoàn thiện cụm đèn LED bọc cách điện.',
          materials: [
            { name: 'Khung kim loại, ốc vít, tua-vít, cờ-lê', quantity: 'Đủ 12 bộ vít' },
            { name: 'Đèn LED siêu sáng', quantity: '1 chiếc' },
            { name: 'Dây dẫn điện đỏ/đen từ máy phát', quantity: '1 cặp' },
            { name: 'Băng dính điện cách điện màu đen', quantity: '1 cuộn nhỏ' }
          ],
          steps: [
            {
              stepNumber: 1,
              title: 'Lắp khung giá đỡ',
              description: 'Bắt 2 thanh U dài vào tấm lớn, gia cố bằng thanh U ngắn và thanh chữ L theo Hình 4 SGK.',
              details: ['Siết ốc chắc tay để khung không bị rung.']
            },
            {
              stepNumber: 2,
              title: 'Nối đèn LED',
              description: 'Nối dây đỏ vào chân dài (+), dây đen vào chân ngắn (-). Quấn băng dính điện bọc riêng 2 chân.',
              details: ['Không để 2 lõi đồng chạm nhau.']
            }
          ],
          evaluationCriteria: [
            { name: 'Khung đỡ', description: 'Đứng vững, thẳng đứng vuông góc với tấm lớn.' },
            { name: 'Đấu nối LED', description: 'Nối đúng cực âm dương, bọc cách điện gọn gàng.' }
          ]
        },
        vanDung: {
          title: 'Em vận dụng: Vì sao phải bọc cách điện?',
          scenario: 'Một bạn nối xong dây LED nhưng lười không dán băng dính điện, để 2 chân kim loại trần chạm vào nhau.',
          question: 'Khi quạt gió quay tít tạo ra điện, hiện tượng gì sẽ xảy ra với chiếc đèn LED?',
          options: [
            {
              label: 'A',
              text: 'Dòng điện bị ngắn mạch (chạm chập) đi tắt qua chỗ tiếp xúc nên đèn LED KHÔNG THỂ PHÁT SÁNG',
              isOptimal: true,
              feedback: 'Chính xác! Hiện tượng ngắn mạch làm dòng điện không đi qua bóng đèn LED.'
            },
            {
              label: 'B',
              text: 'Đèn LED sẽ nổ bùm',
              isOptimal: false,
              feedback: 'Nguồn điện gió mô hình nhỏ không gây nổ nhưng đèn sẽ không sáng.'
            }
          ],
          teacherExplanation: 'Luôn bọc cách điện cẩn thận là nguyên tắc an toàn số 1 trong ngành điện.'
        },
        ghiNho: {
          mainTitle: 'BÀI 8 - TIẾT 2: KHUNG ĐỠ & ĐẤU NỐI ĐÈN LED',
          summaryQuote: 'Bước 1: Lắp khung giá đỡ chắc chắn. Bước 2: Nối dây ĐỎ vào chân DÀI (+), dây ĐEN vào chân NGẮN (-) của đèn LED và bọc băng dính điện riêng từng chân.',
          branches: [
            { label: 'Khung giá đỡ', color: 'blue', items: ['Tấm lớn làm đế', 'Thanh U dài làm cột', 'Thanh giằng chữ L, U ngắn'] },
            { label: 'Quy tắc đèn LED', color: 'emerald', items: ['Dây ĐỎ ➔ Chân DÀI (+)', 'Dây ĐEN ➔ Chân NGẮN (-)', 'Quấn băng dính điện cách điện'] }
          ],
          sgkNote: 'Ghi nhớ SGK Công nghệ 5, trang 40 - 42.'
        },
        cungCo: [
          {
            id: 'cc-28-1',
            question: 'Khi đấu nối đèn LED, dây điện màu đỏ được nối vào chân nào?',
            options: ['A. Chân dài (cực dương)', 'B. Chân ngắn (cực âm)', 'C. Nối vào bóng thủy tinh', 'D. Cắt bỏ chân đèn'],
            correctIndex: 0,
            explanation: 'Dây đỏ nối vào chân dài (cực dương của đèn LED).'
          }
        ],
        teacherGuide: {
          objectives: ['Học sinh lắp được khung giá đỡ vững chắc; đấu nối đèn LED đúng cực và bọc cách điện an toàn.'],
          keyKnowledge: ['Cấu tạo cực tính đèn LED và kỹ thuật bọc băng dính điện.'],
          estimatedMinutes: 35,
          methodologyTips: ['Dùng hình vẽ phóng to chân đèn LED trên màn hình để học sinh dễ nhận biết.'],
          equipmentNeeded: ['Đèn LED, băng dính điện, kéo, bộ vít khung'],
          quickAnswers: [{ question: 'Chân ngắn là cực gì?', answer: 'Cực âm (-).' }]
        }
      },
      {
        id: 'tiet-29',
        periodNumber: 29,
        lessonId: 'bai-8',
        periodInLesson: 3,
        totalPeriodsInLesson: 4,
        title: 'Tiết 3: Thực hành Bước 3 (Gắn máy phát điện, đèn LED) & Bước 4 (Kiểm tra)',
        focusContent: 'Thực hành Bước 3: Gắn máy phát điện cánh quạt và đèn LED vào khung giá đỡ bằng băng dính 2 mặt hoặc thanh kẹp (Hình 6 SGK tr. 42); Bước 4: Kiểm tra hoạt động theo bảng tr. 43 (3 mức gió: Không có gió, Ít gió, Gió mạnh ➔ Trạng thái đèn LED).',
        sgkPages: 'Trang 42 – 43',
        khoiDong: {
          title: 'Khởi động: Sức gió bao nhiêu thì đèn sáng?',
          type: 'question',
          question: 'Theo em, khi gió thổi càng mạnh làm cánh quạt quay càng nhanh thì lượng điện tạo ra sẽ nhiều hơn hay ít hơn và đèn LED sẽ sáng như thế nào?',
          options: [
            'A. Gió càng mạnh ➔ cánh quạt quay càng nhanh ➔ điện phát ra càng nhiều ➔ đèn LED sáng càng rõ',
            'B. Gió càng mạnh đèn càng tắt ngấm',
            'C. Độ sáng không đổi',
            'D. Cánh quạt không quay được khi có gió'
          ],
          correctAnswer: 0,
          explanation: 'Tốc độ quay của cánh quạt tỉ lệ thuận với điện năng sinh ra, gió càng mạnh đèn LED sáng càng chói lọi.',
          leadIn: 'Hãy cùng lắp máy phát điện lên đỉnh cột và đón gió thực nghiệm nhé!'
        },
        khamPha: [
          {
            id: 'kp-29-1',
            title: '1. Quy trình Bước 3: Gắn máy phát điện và đèn LED vào khung (Hình 6 SGK tr. 42)',
            task: 'Quan sát Hình 6: Dùng băng dính 2 mặt và thanh kẹp cố định thân máy phát điện lên đỉnh khung giá đỡ (hướng cánh quạt ra phía trước). Gắn đèn LED vào vị trí dễ quan sát trên khung; luồn dây dẫn điện gọn gàng.',
            context: 'Máy phát điện gắn chắc chắn trên đỉnh cột để khi quạt quay nhanh không bị rung giật rơi xuống.',
            guidingQuestions: [
              '1. Máy phát điện được gắn ở đâu (đỉnh khung giá đỡ)?',
              '2. Cánh quạt quay có bị vướng vào khung kim loại không?',
              '3. Dây dẫn điện được cố định như thế nào để nhìn gọn gàng và thẩm mĩ?'
            ],
            hiddenAnswer: 'Gắn máy phát điện lên đỉnh khung, kiểm tra cánh quạt quay tự do không chạm vào khung. Gắn đèn LED vào thân cột, dùng mẩu băng dính cố định dây điện ép sát sườn khung.',
            teacherConclusion: 'Lắp ráp cân đối và luồn dây điện gọn gàng bảo đảm tính thẩm mỹ và an toàn vận hành.'
          },
          {
            id: 'kp-29-2',
            title: '2. Quy trình Bước 4: Kiểm tra hoạt động với 3 mức gió (Bảng SGK tr. 43)',
            task: 'Tiến hành thử nghiệm tạo luồng gió (thổi miệng hoặc dùng quạt máy nhỏ) với 3 mức gió và ghi lại kết quả vào bảng: Mức 1 (Không có gió) ➔ Trạng thái đèn LED; Mức 2 (Ít gió) ➔ Trạng thái đèn LED; Mức 3 (Gió mạnh) ➔ Trạng thái đèn LED.',
            context: 'Thực nghiệm khoa học chứng minh mối quan hệ giữa năng lượng gió và điện năng.',
            guidingQuestions: [
              '1. Khi không có gió (cánh quạt đứng yên), đèn LED thế nào?',
              '2. Khi thổi nhẹ (ít gió, cánh quạt quay chậm), đèn LED thế nào?',
              '3. Khi gió thổi mạnh (cánh quạt quay vù vù), đèn LED thế nào?'
            ],
            hiddenAnswer: 'Kết quả bảng SGK tr. 43: (1) Không có gió ➔ Đèn LED TẮT; (2) Ít gió ➔ Đèn LED SÁNG MỜ; (3) Gió mạnh ➔ Đèn LED SÁNG RÕ (sáng chói).',
            teacherConclusion: 'Thực nghiệm hoàn toàn khẳng định: Cánh quạt quay biến đổi năng lượng gió thành điện năng làm sáng đèn LED.'
          }
        ],
        thaoLuan: {
          title: 'Thực nghiệm nhóm: Thử thách gió mạnh',
          groupTask: 'Nhóm 4 bạn: Dùng bìa carton quạt gió hoặc dùng quạt bàn ở các số 1, 2, 3 thổi vào cánh quạt mô hình. Cả nhóm cùng quan sát và ghi nhận độ sáng của bóng đèn LED.',
          durationMinutes: 5,
          guidingPrompts: ['Cánh quạt quay theo chiều nào?', 'Bóng đèn LED có nhấp nháy hay sáng liên tục?'],
          suggestedHints: ['Đặt cánh quạt vuông góc với hướng gió thổi tới để đón gió tối đa.'],
          conclusion: 'Hiện tượng đèn phát sáng rực rỡ khi có gió chứng minh thành công của mô hình.'
        },
        luyenTap: [
          {
            id: 'lt-29-1',
            type: 'matching',
            instruction: 'Nối đúng tốc độ gió với trạng thái của đèn LED theo bảng SGK tr. 43:',
            leftItems: [
              { id: 'w-none', text: 'Không có gió (quạt đứng yên)' },
              { id: 'w-low', text: 'Ít gió (cánh quạt quay chậm)' },
              { id: 'w-high', text: 'Gió mạnh (cánh quạt quay nhanh)' }
            ],
            rightItems: [
              { id: 'led-off', text: 'Đèn LED tắt' },
              { id: 'led-dim', text: 'Đèn LED sáng mờ' },
              { id: 'led-bright', text: 'Đèn LED sáng rõ' }
            ],
            correctPairs: [
              { leftId: 'w-none', rightId: 'led-off' },
              { leftId: 'w-low', rightId: 'led-dim' },
              { leftId: 'w-high', rightId: 'led-bright' }
            ],
            difficulty: 'basic'
          },
          {
            id: 'lt-29-2',
            type: 'true_false',
            statement: 'Để cánh quạt quay mạnh nhất, ta nên để cánh quạt quay nghiêng lệch góc 90 độ so với hướng gió thổi.',
            isCorrect: false,
            explanation: 'Sai! Phải quay mặt trước cánh quạt hướng thẳng chính diện vào luồng gió để đón trọn sức đẩy của gió.',
            difficulty: 'intermediate'
          }
        ],
        thucHanh: {
          title: 'Gắn máy phát điện, đèn LED và thực nghiệm phát điện',
          objective: 'Hoàn thiện mô hình máy phát điện gió và kiểm chứng đèn LED sáng rõ khi có luồng gió mạnh thổi tới.',
          materials: [
            { name: 'Cụm máy phát cánh quạt & LED đã nối dây', quantity: '1 bộ' },
            { name: 'Khung giá đỡ đã hoàn thành ở tiết trước', quantity: '1 chiếc' },
            { name: 'Bìa quạt tay hoặc quạt điện nhỏ tạo gió', quantity: '1 chiếc' }
          ],
          steps: [
            {
              stepNumber: 3,
              title: 'Gắn máy phát và LED vào khung',
              description: 'Dán máy phát lên đỉnh khung, gắn LED vào thân cột, luồn dây điện gọn gàng.',
              details: ['Dùng tay quay thử cánh quạt xem có bị va quẹt khung không.']
            },
            {
              stepNumber: 4,
              title: 'Kiểm tra hoạt động phát điện',
              description: 'Quạt gió từ nhẹ đến mạnh vào cánh quạt và quan sát độ sáng đèn LED.',
              details: ['Điền kết quả thực nghiệm vào phiếu quan sát.']
            }
          ],
          evaluationCriteria: [
            { name: 'Độ chắc chắn', description: 'Máy phát không bị rung lắc, cánh quạt quay mượt mà.' },
            { name: 'Hiệu quả phát điện', description: 'Đèn sáng mờ khi ít gió, sáng rõ khi gió mạnh.' }
          ]
        },
        vanDung: {
          title: 'Em vận dụng: Khi nào cánh quạt quay mà đèn không sáng?',
          scenario: 'Một nhóm dùng quạt thổi gió rất mạnh, cánh quạt quay vù vù nhưng chiếc đèn LED vẫn tối om.',
          question: 'Em hãy chỉ ra nguyên nhân có khả năng cao nhất dẫn đến hiện tượng này:',
          options: [
            {
              label: 'A',
              text: 'Nối ngược chân cực âm dương của đèn LED (dây đỏ vào chân ngắn, dây đen vào chân dài) hoặc mối nối dây bị lỏng',
              isOptimal: true,
              feedback: 'Chẩn đoán rất chuyên nghiệp! Đèn LED nối ngược cực sẽ không bao giờ sáng dù điện áp có cao.'
            },
            {
              label: 'B',
              text: 'Gió quá mạnh làm bay hết điện tích',
              isOptimal: false,
              feedback: 'Không có hiện tượng gió thổi bay điện tích.'
            }
          ],
          teacherExplanation: 'Chỉ cần đảo lại 2 đầu dây nối vào đèn LED là đèn sẽ bừng sáng ngay.'
        },
        ghiNho: {
          mainTitle: 'BÀI 8 - TIẾT 3: GẮN MÁY PHÁT & KIỂM TRA',
          summaryQuote: 'Bước 3: Gắn máy phát lên đỉnh cột, gắn đèn LED và luồn dây gọn gàng. Bước 4: Kiểm tra với 3 mức gió: Không gió ➔ Tắt; Ít gió ➔ Sáng mờ; Gió mạnh ➔ Sáng rõ.',
          branches: [
            { label: 'Gắn hoàn thiện', color: 'blue', items: ['Máy phát trên đỉnh cột', 'Cánh quạt quay tự do', 'Đèn LED trên thân giá đỡ'] },
            { label: '3 mức gió & Đèn LED', color: 'emerald', items: ['Không gió: Đèn tắt', 'Ít gió: Sáng mờ', 'Gió mạnh: Sáng rõ'] }
          ],
          sgkNote: 'Ghi nhớ SGK Công nghệ 5, trang 42 - 43.'
        },
        cungCo: [
          {
            id: 'cc-29-1',
            question: 'Khi gió thổi mạnh vào cánh quạt thì đèn LED có hiện tượng gì?',
            options: ['A. Đèn LED sáng rõ', 'B. Đèn LED bị tắt', 'C. Đèn LED nổ tung', 'D. Đèn LED chuyển màu đen'],
            correctIndex: 0,
            explanation: 'Gió mạnh cánh quạt quay nhanh phát ra điện áp đủ lớn làm đèn LED sáng rõ.'
          }
        ],
        teacherGuide: {
          objectives: ['Học sinh gắn được máy phát và đèn LED vào khung; tiến hành kiểm tra và ghi nhận được hoạt động với 3 mức gió.'],
          keyKnowledge: ['Quan hệ giữa tốc độ gió và độ sáng đèn LED.'],
          estimatedMinutes: 35,
          methodologyTips: ['Chuẩn bị sẵn 1 chiếc quạt máy mini cắm điện để tạo luồng gió ổn định cho cả lớp thử nghiệm.'],
          equipmentNeeded: ['Mô hình hoàn thiện, quạt gió tạo luồng khí, bảng ghi kết quả SGK tr. 43'],
          quickAnswers: [{ question: 'Gió mạnh đèn thế nào?', answer: 'Đèn LED sáng rõ.' }]
        }
      },
      {
        id: 'tiet-30',
        periodNumber: 30,
        lessonId: 'bai-8',
        periodInLesson: 4,
        totalPeriodsInLesson: 4,
        title: 'Tiết 4: Trưng bày, đánh giá sản phẩm & Sáng tạo cải tiến mô hình',
        focusContent: 'Trưng bày mô hình trạm phát điện gió; đánh giá theo 6 tiêu chí chuẩn SGK tr. 43 (Đúng đủ bộ phận, Đúng hình dạng, Mối ghép chắc chắn, Dây dẫn gọn gàng, Đèn LED phát sáng khi cánh quạt quay, Độ sáng thay đổi theo tốc độ gió); sáng tạo cải tiến mô hình.',
        sgkPages: 'Trang 43',
        khoiDong: {
          title: 'Khởi động: Triển lãm phong điện học đường',
          type: 'quick_quiz',
          question: 'Chào mừng các em đến với triển lãm năng lượng sạch lớp 5! Cùng chiêm ngưỡng những trạm phong điện mini đang quay tít trên bàn học!',
          options: [
            'A. Mô hình của chúng em đã sẵn sàng đón gió tỏa sáng!',
            'B. Mô hình cần chỉnh lại dây dẫn cho gọn hơn',
            'C. Cùng thi đua đánh giá công tâm',
            'D. Tất cả các ý kiến trên'
          ],
          correctAnswer: 3,
          explanation: 'Một không gian học tập khoa học và đầy hứng khởi!',
          leadIn: 'Cùng mở phiếu đánh giá 6 tiêu chí để tìm ra mô hình phong điện hoàn hảo nhất!'
        },
        khamPha: [
          {
            id: 'kp-30-1',
            title: '1. Đánh giá sản phẩm theo 6 tiêu chí SGK tr. 43',
            task: 'Đọc phiếu đánh giá sản phẩm gồm 6 tiêu chí: (1) Đúng và đủ bộ phận; (2) Đúng hình dạng; (3) Mối ghép chắc chắn; (4) Dây dẫn điện gọn gàng; (5) Đèn LED phát sáng khi cánh quạt quay; (6) Độ sáng của đèn LED thay đổi khi tốc độ gió thay đổi. Đánh giá theo 3 mức (Tốt, Đạt, Cần cố gắng).',
            context: 'Đánh giá toàn diện cả cấu trúc cơ khí, mạch điện và khả năng vận hành.',
            guidingQuestions: [
              '1. Mô hình có đủ 3 bộ phận không?',
              '2. Khung có đứng thẳng, ốc vít có được siết chặt không?',
              '3. Tiêu chí số 5 và số 6 phản ánh điều gì về nguyên lý năng lượng gió?'
            ],
            hiddenAnswer: 'Các nhóm tự đánh giá và đánh giá chéo. Sản phẩm đạt loại Tốt khi đạt trọn vẹn cả 6 tiêu chí: khung đứng vững, dây gọn gàng, đón gió nhẹ đèn sáng mờ, đón gió mạnh đèn sáng rực rỡ.',
            teacherConclusion: '6 tiêu chí đánh giá thể hiện đầy đủ chất lượng của một sản phẩm công nghệ năng lượng tái tạo.'
          },
          {
            id: 'kp-30-2',
            title: '2. Ý tưởng sáng tạo cải tiến mô hình máy phát điện gió',
            task: 'SGK khuyến khích: "Em hãy cùng các bạn thiết kế và lắp thêm các chi tiết theo ý tưởng sáng tạo của mình". Gợi ý: Lắp thêm đuôi định hướng gió; làm cánh quạt to hơn; lắp thêm còi chip báo hiệu; làm mô hình cối xay gió trang trí.',
            context: 'Mở rộng tư duy kỹ thuật ứng dụng.',
            guidingQuestions: [
              '1. Cối xay gió Hà Lan thường có đuôi cánh én để làm gì (để tự động xoay theo hướng gió)?',
              '2. Em có thể trang trí thêm gì cho mô hình (ngôi nhà nhỏ, hàng rào, cây xanh)?'
            ],
            hiddenAnswer: 'Ý tưởng sáng tạo: Gắn thêm cánh đuôi én bằng bìa nhựa để tuabin tự xoay hướng đón gió; gắn thêm mô hình ngôi nhà nhỏ có đèn thắp sáng bên trong; thiết kế 3 cánh quạt cong khí động học...',
            teacherConclusion: 'Sáng tạo biến khoa học kỹ thuật thành những tác phẩm nghệ thuật hữu ích cho cuộc sống.'
          }
        ],
        thaoLuan: {
          title: 'Thuyết trình ý tưởng năng lượng tương lai',
          groupTask: 'Mỗi nhóm cử một đại diện lên thuyết trình: Nhóm đã làm thế nào để khắc phục lỗi khi đèn không sáng? Nếu được xây dựng một nhà máy điện gió thật ở quê hương, em muốn đặt ở đâu?',
          durationMinutes: 5,
          guidingPrompts: ['Kinh nghiệm đấu nối dây LED', 'Ước mơ phát triển năng lượng xanh cho quê hương'],
          suggestedHints: ['"Nhóm em muốn lắp các tuabin gió trên đồi cao hoặc ngoài bờ biển để mang điện sáng cho bà con!"'],
          conclusion: 'Nuôi dưỡng tình yêu khoa học và ý thức bảo vệ môi trường cho thế hệ tương lai.'
        },
        luyenTap: [
          {
            id: 'lt-30-1',
            type: 'mcq',
            question: 'Trong 6 tiêu chí đánh giá mô hình máy phát điện gió (SGK tr. 43), tiêu chí nào chứng minh mô hình phát ra dòng điện mạnh yếu theo sức gió?',
            options: [
              'A. Độ sáng của đèn LED thay đổi khi tốc độ gió thay đổi',
              'B. Mối ghép chắc chắn',
              'C. Đúng và đủ bộ phận',
              'D. Khung giá đỡ sơn màu đẹp'
            ],
            correctAnswer: 0,
            explanation: 'Tiêu chí số 6: Độ sáng đèn LED thay đổi theo tốc độ gió chứng minh sự chuyển hóa cơ năng thành điện năng.',
            difficulty: 'basic'
          },
          {
            id: 'lt-30-2',
            type: 'true_false',
            statement: 'Sau khi sử dụng xong mô hình, ta nên tháo rời cất cẩn thận, không bẻ gãy cánh quạt và bảo quản đèn LED trong hộp.',
            isCorrect: true,
            explanation: 'Đúng theo quy tắc bảo quản đồ dùng học tập kỹ thuật.',
            difficulty: 'basic'
          }
        ],
        vanDung: {
          title: 'Em vận dụng: Tuyên truyền năng lượng tái tạo',
          scenario: 'Trường em tổ chức cuộc thi vẽ tranh "Hành tinh xanh không khói bụi".',
          question: 'Em sẽ chọn hình ảnh nào làm trọng tâm cho bức tranh của mình?',
          options: [
            {
              label: 'A',
              text: 'Những cánh quạt gió trắng muốt quay đều bên bờ biển xanh ngát, cung cấp điện thắp sáng các trường học và bệnh viện',
              isOptimal: true,
              feedback: 'Bức tranh mang thông điệp tươi sáng, đậm chất công nghệ xanh tương lai!'
            },
            {
              label: 'B',
              text: 'Ống khói nhà máy nhiệt điện xả khói đen mịt mù',
              isOptimal: false,
              feedback: 'Hình ảnh này thể hiện ô nhiễm không khí cần khắc phục.'
            }
          ],
          teacherExplanation: 'Lan tỏa thông điệp năng lượng tái tạo đến toàn xã hội.'
        },
        ghiNho: {
          mainTitle: 'TỔNG KẾT BÀI 8: MÁY PHÁT ĐIỆN GIÓ',
          summaryQuote: 'Đánh giá theo 6 tiêu chí: Đúng đủ bộ phận, Đúng hình dạng, Chắc chắn, Dây gọn, Đèn sáng khi quạt quay, Độ sáng tỉ lệ với tốc độ gió. Năng lượng gió là năng lượng tái tạo sạch.',
          branches: [
            { label: '6 tiêu chí', color: 'blue', items: ['Đúng đủ bộ phận', 'Đúng hình dạng', 'Mối ghép chắc chắn', 'Dây điện gọn gàng', 'Đèn LED sáng khi quay', 'Độ sáng đổi theo gió'] },
            { label: 'Ý nghĩa xã hội', color: 'emerald', items: ['Năng lượng sạch tái tạo', 'Không ô nhiễm môi trường', 'Phát triển bền vững'] }
          ],
          sgkNote: 'Ghi nhớ SGK Công nghệ 5, trang 43.'
        },
        cungCo: [
          {
            id: 'cc-30-1',
            question: 'Phiếu đánh giá sản phẩm mô hình máy phát điện gió có tất cả bao nhiêu tiêu chí?',
            options: ['A. 3 tiêu chí', 'B. 4 tiêu chí', 'C. 6 tiêu chí', 'D. 10 tiêu chí'],
            correctIndex: 2,
            explanation: 'Gồm 6 tiêu chí chuẩn SGK trang 43.'
          }
        ],
        teacherGuide: {
          objectives: ['Đánh giá mô hình theo 6 tiêu chí; tự tin thuyết trình sản phẩm và nuôi dưỡng ý tưởng sáng tạo năng lượng sạch.'],
          keyKnowledge: ['6 tiêu chí đánh giá mô hình máy phát điện gió.'],
          estimatedMinutes: 35,
          methodologyTips: ['Tổ chức góc triển lãm "Thành phố Năng Lượng Xanh" trong lớp.'],
          equipmentNeeded: ['Phiếu đánh giá 6 tiêu chí SGK tr. 43, bàn trưng bày'],
          quickAnswers: [{ question: 'Có mấy tiêu chí đánh giá?', answer: '6 tiêu chí.' }]
        }
      }
    ]
  },
  {
    id: 'bai-9',
    number: 9,
    title: 'Mô hình điện mặt trời',
    partId: 'part-2',
    partTitle: 'PHẦN HAI: THỦ CÔNG KĨ THUẬT',
    totalPeriods: 4,
    sgkPages: 'Trang 44 – 49',
    periods: [
      {
        id: 'tiet-31',
        periodNumber: 31,
        lessonId: 'bai-9',
        periodInLesson: 1,
        totalPeriodsInLesson: 4,
        title: 'Tiết 1: Năng lượng mặt trời & Tìm hiểu sản phẩm mẫu',
        focusContent: 'Tìm hiểu tác dụng của ánh sáng mặt trời (Hình 1 SGK tr. 44: tấm pin mặt trời hấp thụ năng lượng ánh sáng biến đổi thành năng lượng điện); nhận biết 3 bộ phận chính của mô hình (Hình 3 tr. 45: Tấm pin mặt trời & dây dẫn, Đèn LED, Khung giá đỡ).',
        sgkPages: 'Trang 44 – 45',
        khoiDong: {
          title: 'Khởi động: Điện từ ánh nắng vàng',
          type: 'question',
          question: 'Em hãy đọc câu chuyện tr. 44 SGK: Trên mái nhà của bạn Nam có lắp các tấm màu xanh thẫm đón nắng. Bố Nam bảo: "Những tấm pin này hứng ánh nắng để phát ra điện thắp sáng đèn và nấu cơm đấy con!". Thiết bị đó tên là gì?',
          options: [
            'A. Tấm pin mặt trời (pin quang điện)',
            'B. Tấm tôn lợp mái nhà',
            'C. Tấm gương soi mặt',
            'D. Tấm kính chắn bụi'
          ],
          correctAnswer: 0,
          explanation: 'Đó chính là tấm pin mặt trời - thiết bị kỳ diệu biến ánh nắng thành dòng điện sạch.',
          leadIn: 'Hôm nay chúng ta sẽ cùng khám phá mô hình điện mặt trời và tự tay lắp ráp một trạm thu điện từ ánh sáng!'
        },
        khamPha: [
          {
            id: 'kp-31-1',
            title: '1. Tác dụng của ánh sáng mặt trời & Pin mặt trời (Hình 1 & 2 SGK tr. 44 - 45)',
            task: 'Quan sát Hình 1 và 2: Ánh sáng mặt trời chiếu vào tấm pin mặt trời tạo ra dòng điện thắp sáng đèn đường, chạy máy bay không người lái, chạy ô tô điện, thắp sáng nhà ở. Nêu ưu điểm của điện mặt trời.',
            context: 'Mặt trời là nguồn năng lượng khổng lồ vô tận chiếu sáng trái đất hàng triệu năm qua.',
            guidingQuestions: [
              '1. Tấm pin mặt trời hấp thụ năng lượng gì và biến đổi thành năng lượng gì?',
              '2. Em đã thấy pin mặt trời được ứng dụng ở đâu (đèn đường, bình nước nóng, máy tính bỏ túi, mái nhà)?',
              '3. Năng lượng mặt trời có gây cạn kiệt hay sinh ra khí độc không?'
            ],
            hiddenAnswer: 'Tấm pin mặt trời hấp thụ năng lượng ánh sáng mặt trời và biến đổi trực tiếp thành năng lượng điện. Điện mặt trời là nguồn năng lượng sạch, vô tận, không gây ô nhiễm môi trường, được ứng dụng rộng rãi trong đời sống.',
            teacherConclusion: 'Pin mặt trời là phát minh vĩ đại giúp nhân loại khai thác nguồn năng lượng ánh sáng vô tận từ vũ trụ.'
          },
          {
            id: 'kp-31-2',
            title: '2. Cấu tạo 3 bộ phận chính của mô hình điện mặt trời (Hình 3 SGK tr. 45)',
            task: 'Quan sát mô hình mẫu Hình 3 SGK tr. 45: Chỉ ra 3 bộ phận chính: a) Tấm pin mặt trời và dây dẫn điện; b) Đèn LED; c) Khung giá đỡ. Đọc 6 yêu cầu sản phẩm mẫu.',
            context: 'Khung giá đỡ có độ nghiêng để tấm pin đón ánh sáng tốt nhất.',
            guidingQuestions: [
              '1. Bộ phận nào trực tiếp nhận ánh sáng để phát ra điện?',
              '2. Vì sao tấm pin mặt trời lại được đặt nghiêng trên khung giá đỡ mà không đặt nằm phẳng?',
              '3. Đèn LED đóng vai trò gì trong mô hình?'
            ],
            hiddenAnswer: 'Gồm 3 bộ phận: (1) Tấm pin mặt trời và dây dẫn điện; (2) Đèn LED; (3) Khung giá đỡ có góc nghiêng đón nắng. Đèn LED dùng để phát sáng báo hiệu dòng điện. Yêu cầu: Đúng đủ bộ phận, chắc chắn, dây gọn, đèn phát sáng khi nhận ánh sáng, độ sáng thay đổi theo cường độ ánh sáng.',
            teacherConclusion: 'Góc nghiêng của khung giá đỡ giúp tấm pin đón được nhiều ánh sáng nhất trong ngày.'
          }
        ],
        thaoLuan: {
          title: 'Thảo luận nhóm: Ứng dụng điện mặt trời ở trường học và gia đình',
          groupTask: 'Nhóm 4 bạn: Kể tên những đồ dùng xung quanh em có sử dụng pin mặt trời (chiếc máy tính cầm tay Casio của chị, đèn sân vườn tự sáng ban đêm...).',
          durationMinutes: 4,
          guidingPrompts: ['Máy tính bỏ túi có ô màu đen ở trên góc để làm gì?', 'Đèn sân vườn ban ngày nạp điện ban đêm sáng?'],
          suggestedHints: ['Chiếc máy tính bỏ túi dùng pin mặt trời mini không cần thay pin vẫn dùng được nhiều năm.'],
          conclusion: 'Điện mặt trời ngày càng hiện diện gần gũi trong các vật dụng hàng ngày.'
        },
        luyenTap: [
          {
            id: 'lt-31-1',
            type: 'true_false',
            statement: 'Tấm pin mặt trời hấp thụ năng lượng âm thanh tiếng ồn để biến thành năng lượng điện.',
            isCorrect: false,
            explanation: 'Sai! Tấm pin mặt trời hấp thụ NĂNG LƯỢNG ÁNH SÁNG mặt trời để biến thành điện năng.',
            difficulty: 'basic'
          },
          {
            id: 'lt-31-2',
            type: 'mcq',
            question: 'Mô hình điện mặt trời trong SGK gồm mấy bộ phận chính?',
            options: ['A. 2 bộ phận', 'B. 3 bộ phận', 'C. 4 bộ phận', 'D. 8 bộ phận'],
            correctAnswer: 1,
            explanation: 'Gồm 3 bộ phận: Tấm pin mặt trời & dây dẫn; Đèn LED; Khung giá đỡ.',
            difficulty: 'basic'
          }
        ],
        vanDung: {
          title: 'Em vận dụng: Vì sao đèn đường pin mặt trời tự sáng ban đêm?',
          scenario: 'Ở nhiều đoạn đường làng quê nông thôn mới, người ta lắp các cột đèn đường gắn tấm pin mặt trời.',
          question: 'Nguyên lý hoạt động của những chiếc đèn này trong một ngày đêm diễn ra như thế nào?',
          options: [
            {
              label: 'A',
              text: 'Ban ngày tấm pin hấp thụ ánh nắng nạp điện vào bình ắc quy; ban đêm trời tối bộ cảm ứng tự động bật đèn LED sáng thắp sáng đường làng',
              isOptimal: true,
              feedback: 'Rất chính xác! Hệ thống hoạt động hoàn toàn tự động, tiết kiệm điện năng cho đất nước.'
            },
            {
              label: 'B',
              text: 'Ban đêm mặt trời vẫn chiếu sáng nên đèn tự sáng',
              isOptimal: false,
              feedback: 'Ban đêm không có ánh mặt trời, điện được lấy từ bình tích điện đã nạp vào ban ngày.'
            }
          ],
          teacherExplanation: 'Sự kết hợp giữa pin mặt trời và bình tích điện tạo ra giải pháp chiếu sáng độc lập tuyệt vời.'
        },
        ghiNho: {
          mainTitle: 'BÀI 9 - TIẾT 1: NĂNG LƯỢNG ĐIỆN MẶT TRỜI',
          summaryQuote: 'Tấm pin mặt trời hấp thụ năng lượng ánh sáng biến thành năng lượng điện. Mô hình gồm 3 bộ phận: Tấm pin & dây dẫn, Đèn LED, Khung giá đỡ có độ nghiêng.',
          branches: [
            { label: 'Nguyên lý', color: 'blue', items: ['Ánh sáng mặt trời ➔ Năng lượng điện', 'Năng lượng tái tạo xanh vô tận'] },
            { label: '3 bộ phận', color: 'emerald', items: ['Tấm pin mặt trời quang điện', 'Đèn LED siêu sáng', 'Khung giá đỡ nghiêng đón nắng'] }
          ],
          sgkNote: 'Ghi nhớ SGK Công nghệ 5, trang 44 - 45.'
        },
        cungCo: [
          {
            id: 'cc-31-1',
            question: 'Nguồn năng lượng nào được tấm pin mặt trời sử dụng để tạo ra điện?',
            options: ['A. Năng lượng ánh sáng', 'B. Năng lượng gió bão', 'C. Năng lượng than đá', 'D. Năng lượng sóng biển'],
            correctIndex: 0,
            explanation: 'Tấm pin mặt trời hấp thụ năng lượng ánh sáng để tạo ra điện.'
          }
        ],
        teacherGuide: {
          objectives: ['Nêu được tác dụng của pin mặt trời; nhận biết 3 bộ phận chính của mô hình điện mặt trời.'],
          keyKnowledge: ['Chuyển hóa quang năng thành điện năng và cấu tạo mô hình.'],
          estimatedMinutes: 35,
          methodologyTips: ['Cho học sinh xem một tấm pin mặt trời mini thật dưới ánh đèn học để thấy đèn LED sáng.'],
          equipmentNeeded: ['Hình 1, 2, 3 SGK tr. 44 - 45, tấm pin mặt trời mini mẫu'],
          quickAnswers: [{ question: 'Có mấy bộ phận chính?', answer: '3 bộ phận chính.' }]
        }
      },
      {
        id: 'tiet-32',
        periodNumber: 32,
        lessonId: 'bai-9',
        periodInLesson: 2,
        totalPeriodsInLesson: 4,
        title: 'Tiết 2: Lựa chọn chi tiết & Thực hành Bước 1 (Lắp khung) & Bước 2 (Nối LED)',
        focusContent: 'Nhận diện, đếm đủ 13 chi tiết và dụng cụ (SGK tr. 46 - 47); thực hành Bước 1: Lắp khung giá đỡ có góc nghiêng (Hình 4 tr. 47); Bước 2: Lắp đèn LED với dây dẫn điện (dây đỏ vào chân dài, dây đen vào chân ngắn, bọc băng dính điện như Hình 5 tr. 48).',
        sgkPages: 'Trang 46 – 48',
        khoiDong: {
          title: 'Khởi động: Đo góc nghiêng đón nắng',
          type: 'quick_quiz',
          question: 'Vì sao khung giá đỡ của tấm pin mặt trời lại được thiết kế nghiêng dốc một góc khoảng 30 - 45 độ so với mặt sàn nằm ngang?',
          options: [
            'A. Để tấm pin hướng thẳng về phía mặt trời đón được nhiều tia nắng nhất và dễ trôi nước mưa, bụi bẩn',
            'B. Để trượt cầu trượt đồ chơi',
            'C. Lắp nghiêng cho đỡ tốn ốc vít',
            'D. Do bị lắp lỗi'
          ],
          correctAnswer: 0,
          explanation: 'Góc nghiêng tối ưu giúp bề mặt pin vuông góc với tia nắng mặt trời và tự rửa sạch bụi khi trời mưa.',
          leadIn: 'Hãy cùng thực hành lắp ráp bộ khung giá đỡ nghiêng chuẩn kỹ thuật!'
        },
        khamPha: [
          {
            id: 'kp-32-1',
            title: '1. Kiểm đếm 13 chi tiết và dụng cụ (Bảng SGK tr. 46 - 47)',
            task: 'Kiểm đếm các chi tiết theo bảng: 1 Tấm lớn; 4 Thanh chữ U dài; 1 Thanh chữ U ngắn; 4 Thanh chữ L dài; 1 Tấm pin mặt trời kèm dây dẫn; 1 Đèn LED; 9 Đai ốc; 9 Vít ngắn; 1 Tua-vít; 1 Cờ-lê; 1 Băng dính 2 mặt; 1 Băng dính điện; 1 Kéo.',
            context: 'Đảm bảo đủ vật tư cơ khí và linh kiện điện tử trước khi lắp.',
            guidingQuestions: [
              '1. Bảng chi tiết mô hình điện mặt trời có bao nhiêu đai ốc (9 đai ốc)?',
              '2. Dụng cụ tháo lắp gồm những gì?'
            ],
            hiddenAnswer: 'Kiểm tra đủ 13 loại chi tiết, sắp xếp ngăn nắp, kiểm tra tấm pin mặt trời còn nguyên vẹn không bị nứt vỡ.',
            teacherConclusion: 'Chuẩn bị chu đáo đảm bảo an toàn và tiến độ thực hành.'
          },
          {
            id: 'kp-32-2',
            title: '2. Quy trình Bước 1: Lắp khung giá đỡ nghiêng (Hình 4 SGK tr. 47)',
            task: 'Quan sát Hình 4: Dùng tấm lớn làm đế; lắp 2 thanh chữ U dài đứng thấp và 2 thanh chữ U dài đứng cao (hoặc giằng thanh chữ L) tạo thành mặt phẳng nghiêng đỡ tấm pin; siết chặt ốc vít.',
            context: 'Tạo mặt phẳng dốc vững chãi để đặt tấm pin.',
            guidingQuestions: [
              '1. Các thanh chữ U và chữ L được kết hợp thế nào để tạo thành mặt nghiêng?',
              '2. Khung có bị lung lay khi ấn nhẹ tay lên không?'
            ],
            hiddenAnswer: 'Lắp các thanh kim loại vào tấm lớn tạo thành khung giá đỡ có mặt trên dốc nghiêng khoảng 30 - 45 độ. Dùng cờ-lê và tua-vít siết chặt các điểm bắt ốc.',
            teacherConclusion: 'Khung giá đỡ nghiêng vững chãi là giá đỡ cho tấm pin đón nắng hiệu quả.'
          },
          {
            id: 'kp-32-3',
            title: '3. Quy trình Bước 2: Lắp đèn LED với dây dẫn điện (Hình 5 SGK tr. 48)',
            task: 'Quan sát Hình 5: Nối đầu dây ĐỎ vào chân DÀI (cực dương) của đèn LED; nối đầu dây ĐEN vào chân NGẮN (cực âm) của đèn LED. Dùng băng dính điện quấn cách điện riêng biệt từng chân.',
            context: 'Lặp lại kỹ thuật chuẩn để học sinh ghi nhớ sâu sắc.',
            guidingQuestions: [
              '1. Dây đỏ nối vào chân nào?',
              '2. Dây đen nối vào chân nào?',
              '3. Nhắc lại vì sao phải bọc băng dính điện riêng từng chân?'
            ],
            hiddenAnswer: 'DÂY ĐỎ ➔ CHÂN DÀI (+); DÂY ĐEN ➔ CHÂN NGẮN (-). Quấn băng dính điện riêng biệt chống chập mạch.',
            teacherConclusion: 'Nối đúng cực tính đèn LED là chìa khóa để mô hình phát sáng thành công.'
          }
        ],
        thaoLuan: {
          title: 'Thảo luận nhóm: Kiểm tra độ nghiêng của khung giá đỡ',
          groupTask: 'Các cặp bạn cùng bàn kiểm tra: Khung giá đỡ có bị vặn vẹo không? Đặt tấm pin thử lên xem mặt nghiêng có phẳng phiu và đón ánh sáng tốt không?',
          durationMinutes: 4,
          guidingPrompts: ['Mặt nghiêng có chắc không?', 'Mối nối đèn LED đã bọc kín chưa?'],
          suggestedHints: ['Nếu khung bị vênh, nới lỏng nhẹ ốc vít, nắn phẳng rồi siết chặt lại.'],
          conclusion: 'Căn chỉnh cẩn thận giúp sản phẩm vừa chắc chắn vừa thẩm mĩ.'
        },
        luyenTap: [
          {
            id: 'lt-32-1',
            type: 'matching',
            instruction: 'Nối đúng chi tiết với quy ước đấu nối điện:',
            leftItems: [
              { id: 'wir-red', text: 'Đầu dây điện màu ĐỎ từ tấm pin' },
              { id: 'wir-blk', text: 'Đầu dây điện màu ĐEN từ tấm pin' },
              { id: 'wir-tape', text: 'Băng dính điện màu đen' }
            ],
            rightItems: [
              { id: 'pin-long', text: 'Nối vào chân DÀI (cực dương +) của đèn LED' },
              { id: 'pin-short', text: 'Nối vào chân NGẮN (cực âm -) của đèn LED' },
              { id: 'pin-iso', text: 'Quấn bọc kín từng chân kim loại chống chập điện' }
            ],
            correctPairs: [
              { leftId: 'wir-red', rightId: 'pin-long' },
              { leftId: 'wir-blk', rightId: 'pin-short' },
              { leftId: 'wir-tape', rightId: 'pin-iso' }
            ],
            difficulty: 'basic'
          },
          {
            id: 'lt-32-2',
            type: 'true_false',
            statement: 'Để lắp khung giá đỡ mô hình điện mặt trời, ta cần 9 đai ốc và 9 vít ngắn.',
            isCorrect: true,
            explanation: 'Đúng theo bảng chi tiết SGK trang 46 - 47.',
            difficulty: 'basic'
          }
        ],
        thucHanh: {
          title: 'Lắp khung giá đỡ nghiêng và đấu nối đèn LED',
          objective: 'Hoàn thành Bước 1 (khung nghiêng chắc chắn) và Bước 2 (đèn LED nối đúng cực, bọc cách điện).',
          materials: [
            { name: 'Tấm lớn, thanh U dài, thanh L dài, ốc vít', quantity: 'Đầy đủ' },
            { name: 'Đèn LED siêu sáng, băng dính điện', quantity: '1 bộ' },
            { name: 'Dây dẫn điện từ tấm pin mặt trời', quantity: '1 cặp đỏ/đen' }
          ],
          steps: [
            {
              stepNumber: 1,
              title: 'Lắp khung giá đỡ',
              description: 'Lắp các thanh kim loại tạo mặt phẳng nghiêng 30 - 45 độ trên tấm lớn theo Hình 4 SGK.',
              details: ['Siết ốc chắc chắn.']
            },
            {
              stepNumber: 2,
              title: 'Đấu nối đèn LED',
              description: 'Nối dây đỏ chân dài (+), dây đen chân ngắn (-). Bọc kín băng dính điện.',
              details: ['Kiểm tra 2 chân không chạm nhau.']
            }
          ],
          evaluationCriteria: [
            { name: 'Khung đỡ', description: 'Tạo mặt nghiêng phẳng, các mối ốc siết chặt.' },
            { name: 'Mối nối LED', description: 'Đúng cực âm dương, bọc cách điện an toàn.' }
          ]
        },
        vanDung: {
          title: 'Em vận dụng: Lựa chọn hướng lắp đặt pin mặt trời',
          scenario: 'Ở Việt Nam (bán cầu Bắc), các kỹ sư khuyên khi lắp pin mặt trời trên mái nhà nên quay mặt pin về hướng nào để đón được nhiều ánh nắng nhất trong ngày?',
          question: 'Em hãy chọn hướng đón nắng tối ưu nhất:',
          options: [
            {
              label: 'A',
              text: 'Hướng Nam (hoặc hơi chếch Đông Nam/Tây Nam) vì mặt trời luôn chiếu từ hướng Nam vào nước ta',
              isOptimal: true,
              feedback: 'Kiến thức địa lý và công nghệ rất chuẩn xác! Hướng Nam đón ánh nắng trọn vẹn nhất trong năm ở Việt Nam.'
            },
            {
              label: 'B',
              text: 'Hướng Bắc hoàn toàn bị che khuất',
              isOptimal: false,
              feedback: 'Hướng Bắc nhận được rất ít ánh sáng mặt trời.'
            }
          ],
          teacherExplanation: 'Hiểu biết góc nghiêng và hướng lắp giúp tối ưu hóa sản lượng điện mặt trời.'
        },
        ghiNho: {
          mainTitle: 'BÀI 9 - TIẾT 2: KHUNG NGHIÊNG & ĐẤU NỐI LED',
          summaryQuote: 'Bước 1: Lắp khung giá đỡ có mặt nghiêng vững chắc. Bước 2: Nối dây ĐỎ vào chân DÀI (+), dây ĐEN vào chân NGẮN (-) của đèn LED và bọc băng dính điện riêng từng chân.',
          branches: [
            { label: 'Khung nghiêng', color: 'blue', items: ['Đế tấm lớn phẳng', 'Mặt nghiêng 30 - 45 độ', 'Siết chặt 9 bộ ốc vít'] },
            { label: 'Đấu nối LED', color: 'emerald', items: ['Đỏ ➔ Chân dài (+)', 'Đen ➔ Chân ngắn (-)', 'Băng dính điện cách điện'] }
          ],
          sgkNote: 'Ghi nhớ SGK Công nghệ 5, trang 46 - 48.'
        },
        cungCo: [
          {
            id: 'cc-32-1',
            question: 'Khi nối dây dẫn từ tấm pin mặt trời vào đèn LED, chân ngắn của đèn LED được nối với dây màu gì?',
            options: ['A. Dây màu đen (cực âm -)', 'B. Dây màu đỏ (cực dương +)', 'C. Dây màu vàng', 'D. Không cần nối dây đen'],
            correctIndex: 0,
            explanation: 'Dây đen nối vào chân ngắn (cực âm) của đèn LED.'
          }
        ],
        teacherGuide: {
          objectives: ['Học sinh lắp được khung nghiêng đón nắng; đấu nối đèn LED đúng cực và bọc băng dính điện cách điện an toàn.'],
          keyKnowledge: ['Kỹ thuật tạo khung mặt nghiêng và đấu nối linh kiện quang bán dẫn.'],
          estimatedMinutes: 35,
          methodologyTips: ['Hướng dẫn học sinh chỉnh góc nghiêng của khung giá đỡ bằng thước đo góc.'],
          equipmentNeeded: ['Hình 4 & 5 SGK tr. 47 - 48, bộ vít, băng dính điện'],
          quickAnswers: [{ question: 'Dây đỏ nối chân nào?', answer: 'Chân dài (cực dương).' }]
        }
      },
      {
        id: 'tiet-33',
        periodNumber: 33,
        lessonId: 'bai-9',
        periodInLesson: 3,
        totalPeriodsInLesson: 4,
        title: 'Tiết 3: Thực hành Bước 3 (Gắn pin, LED) & Bước 4 (Kiểm tra hoạt động)',
        focusContent: 'Thực hành Bước 3: Gắn tấm pin mặt trời lên mặt nghiêng khung giá đỡ bằng băng dính 2 mặt, gắn đèn LED và luồn dây gọn gàng (Hình 6 tr. 48); Bước 4: Kiểm tra hoạt động theo bảng tr. 49 (3 điều kiện: Không có ánh sáng, Ít ánh sáng, Nhiều ánh sáng ➔ Trạng thái đèn LED).',
        sgkPages: 'Trang 48 – 49',
        khoiDong: {
          title: 'Khởi động: Thử nghiệm nguồn sáng',
          type: 'question',
          question: 'Nếu trong lớp học trời râm mát không có nắng gắt, chúng ta có thể dùng dụng cụ nào chiếu vào tấm pin mặt trời để thử nghiệm đèn LED phát sáng?',
          options: [
            'A. Đèn pin siêu sáng hoặc đèn bàn học chiếu thẳng vào tấm pin',
            'B. Dùng quạt gió thổi vào tấm pin',
            'C. Dùng nước tưới lên tấm pin',
            'D. Dùng đá lạnh đặt lên tấm pin'
          ],
          correctAnswer: 0,
          explanation: 'Chính xác! Đèn pin hoặc đèn bàn phát ra chùm ánh sáng mạnh giúp tấm pin quang điện hấp thụ và tạo ra dòng điện ngay trong lớp học.',
          leadIn: 'Hãy cùng gắn tấm pin lên giá đỡ và thực hiện cuộc thử nghiệm thú vị này!'
        },
        khamPha: [
          {
            id: 'kp-33-1',
            title: '1. Quy trình Bước 3: Gắn tấm pin mặt trời và đèn LED vào khung (Hình 6 SGK tr. 48)',
            task: 'Quan sát Hình 6: Dùng băng dính 2 mặt dán chặt tấm pin mặt trời lên mặt phẳng nghiêng của khung giá đỡ. Dán đèn LED vào vị trí dễ quan sát trên tấm lớn; luồn dây dẫn điện dọc theo thanh khung gọn gàng.',
            context: 'Tấm pin phải được dán phẳng phiu, mặt đón quang hướng lên trên, không để keo dán dính vào bề mặt quang điện.',
            guidingQuestions: [
              '1. Tấm pin được gắn vào vị trí nào của khung (mặt phẳng nghiêng)?',
              '2. Đèn LED được gắn ở đâu để dễ quan sát?',
              '3. Dây dẫn điện được cố định thế nào để không bị vướng víu?'
            ],
            hiddenAnswer: 'Dán tấm pin lên mặt nghiêng của khung bằng băng dính 2 mặt. Gắn đèn LED lên tấm lớn ở vị trí dễ nhìn. Cố định dây dẫn điện ép sát sườn khung.',
            teacherConclusion: 'Lắp ráp gọn gàng giúp mô hình chắc chắn và tạo điều kiện kiểm tra chính xác.'
          },
          {
            id: 'kp-33-2',
            title: '2. Quy trình Bước 4: Kiểm tra hoạt động với 3 điều kiện ánh sáng (Bảng SGK tr. 49)',
            task: 'Tiến hành thực nghiệm trong 3 điều kiện và ghi lại vào bảng SGK tr. 49: Điều kiện 1: Không có ánh sáng (dùng mảnh vải đen che kín tấm pin); Điều kiện 2: Ít ánh sáng (để trong bóng râm hoặc chiếu đèn pin từ xa); Điều kiện 3: Nhiều ánh sáng (mang ra ngoài sân có nắng gắt hoặc chiếu đèn pin sát bề mặt tấm pin).',
            context: 'Thực nghiệm khoa học xác minh mối quan hệ giữa cường độ ánh sáng và điện năng sinh ra.',
            guidingQuestions: [
              '1. Khi lấy tay che kín hoàn toàn tấm pin (không có ánh sáng), đèn LED thế nào?',
              '2. Khi ánh sáng chiếu yếu (ít ánh sáng), đèn LED thế nào?',
              '3. Khi chiếu đèn pin sáng mạnh hoặc mang ra trời nắng, đèn LED thế nào?'
            ],
            hiddenAnswer: 'Kết quả bảng SGK tr. 49: (1) Không có ánh sáng ➔ Đèn LED TẮT; (2) Ít ánh sáng ➔ Đèn LED SÁNG MỜ; (3) Nhiều ánh sáng ➔ Đèn LED SÁNG RÕ.',
            teacherConclusion: 'Cường độ ánh sáng càng mạnh thì tấm pin tạo ra dòng điện càng lớn làm đèn LED sáng càng rõ.'
          }
        ],
        thaoLuan: {
          title: 'Thực nghiệm nhóm: Dùng các nguồn sáng khác nhau',
          groupTask: 'Nhóm 4 bạn: Lần lượt thử nghiệm che tay lên tấm pin, dùng đèn pin điện thoại chiếu vào, rồi mang mô hình ra gần cửa sổ đón ánh sáng tự nhiên. Quan sát sự biến đổi độ sáng của đèn LED.',
          durationMinutes: 5,
          guidingPrompts: ['Khi lấy tay che nửa tấm pin thì độ sáng thay đổi thế nào?', 'Khi chiếu đèn gần và xa?'],
          suggestedHints: ['Càng đưa đèn pin lại gần, ánh sáng càng mạnh, đèn LED càng sáng rực rỡ.'],
          conclusion: 'Học sinh trực tiếp trải nghiệm sự chuyển hóa năng lượng kỳ diệu của ánh sáng.'
        },
        luyenTap: [
          {
            id: 'lt-33-1',
            type: 'matching',
            instruction: 'Nối đúng điều kiện ánh sáng với trạng thái của đèn LED theo bảng SGK tr. 49:',
            leftItems: [
              { id: 'l-none', text: 'Không có ánh sáng (che kín tấm pin)' },
              { id: 'l-low', text: 'Ít ánh sáng (ánh sáng yếu)' },
              { id: 'l-high', text: 'Nhiều ánh sáng (nắng gắt hoặc đèn pin chiếu sát)' }
            ],
            rightItems: [
              { id: 'led-off9', text: 'Đèn LED tắt' },
              { id: 'led-dim9', text: 'Đèn LED sáng mờ' },
              { id: 'led-bright9', text: 'Đèn LED sáng rõ' }
            ],
            correctPairs: [
              { leftId: 'l-none', rightId: 'led-off9' },
              { leftId: 'l-low', rightId: 'led-dim9' },
              { leftId: 'l-high', rightId: 'led-bright9' }
            ],
            difficulty: 'basic'
          },
          {
            id: 'lt-33-2',
            type: 'true_false',
            statement: 'Khi trời tối hoàn toàn, tấm pin mặt trời không nhận được ánh sáng nên đèn LED sẽ tắt.',
            isCorrect: true,
            explanation: 'Chính xác! Pin quang điện chỉ sinh ra dòng điện khi có ánh sáng chiếu vào bề mặt.',
            difficulty: 'basic'
          }
        ],
        thucHanh: {
          title: 'Gắn tấm pin, hoàn thiện mô hình và kiểm tra độ sáng',
          objective: 'Hoàn thiện trọn vẹn mô hình điện mặt trời; đèn LED sáng rõ khi chiếu nhiều ánh sáng.',
          materials: [
            { name: 'Tấm pin mặt trời đã nối dây đèn LED', quantity: '1 bộ' },
            { name: 'Khung giá đỡ nghiêng đã hoàn thành', quantity: '1 chiếc' },
            { name: 'Đèn pin chiếu sáng hoặc ánh nắng tự nhiên', quantity: '1 nguồn sáng' },
            { name: 'Băng dính 2 mặt', quantity: '1 cuộn' }
          ],
          steps: [
            {
              stepNumber: 3,
              title: 'Gắn tấm pin và đèn LED',
              description: 'Dán tấm pin lên mặt nghiêng khung giá đỡ. Dán đèn LED lên đế tấm lớn. Luồn dây điện gọn gàng.',
              details: ['Dán chắc chắn bằng băng dính 2 mặt.']
            },
            {
              stepNumber: 4,
              title: 'Kiểm tra hoạt động',
              description: 'Chiếu ánh sáng với 3 điều kiện: Không ánh sáng, Ít ánh sáng, Nhiều ánh sáng.',
              details: ['Quan sát và ghi kết quả vào bảng tr. 49.']
            }
          ],
          evaluationCriteria: [
            { name: 'Độ chắc chắn & Thẩm mĩ', description: 'Tấm pin dán ngay ngắn, dây điện gọn gàng.' },
            { name: 'Hiệu quả vận hành', description: 'Đèn LED sáng rõ khi chiếu nguồn sáng mạnh.' }
          ]
        },
        vanDung: {
          title: 'Em vận dụng: Ứng dụng pin mặt trời trên vệ tinh không gian',
          scenario: 'Các vệ tinh nhân tạo và trạm vũ trụ quốc tế bay lơ lửng ngoài vũ trụ hàng chục năm không thể cắm dây điện từ mặt đất lên.',
          question: 'Chúng lấy năng lượng điện từ đâu để duy trì hoạt động?',
          options: [
            {
              label: 'A',
              text: 'Nhờ các cánh pin mặt trời khổng lồ xòe ra đón ánh sáng mặt trời liên tục trong không gian vũ trụ',
              isOptimal: true,
              feedback: 'Rất uyên bác! Pin mặt trời là nguồn sống số một của tất cả các con tàu vũ trụ và trạm không gian.'
            },
            {
              label: 'B',
              text: 'Dùng pin con thỏ chở từ trái đất lên thay hàng ngày',
              isOptimal: false,
              feedback: 'Không thể thay pin thường xuyên ngoài vũ trụ xa xôi.'
            }
          ],
          teacherExplanation: 'Điện mặt trời là công nghệ tối quan trọng mở đường cho loài người khám phá không gian.'
        },
        ghiNho: {
          mainTitle: 'BÀI 9 - TIẾT 3: GẮN PIN & KIỂM TRA ĐỘ SÁNG',
          summaryQuote: 'Bước 3: Gắn tấm pin lên mặt nghiêng, gắn đèn LED và luồn dây gọn gàng. Bước 4: Kiểm tra 3 điều kiện ánh sáng: Không ánh sáng ➔ Đèn tắt; Ít ánh sáng ➔ Sáng mờ; Nhiều ánh sáng ➔ Sáng rõ.',
          branches: [
            { label: 'Gắn mô hình', color: 'blue', items: ['Tấm pin trên mặt nghiêng', 'Đèn LED trên tấm lớn', 'Dây điện luồn gọn gàng'] },
            { label: '3 điều kiện ánh sáng', color: 'emerald', items: ['Không ánh sáng: Đèn tắt', 'Ít ánh sáng: Sáng mờ', 'Nhiều ánh sáng: Sáng rõ'] }
          ],
          sgkNote: 'Ghi nhớ SGK Công nghệ 5, trang 48 - 49.'
        },
        cungCo: [
          {
            id: 'cc-33-1',
            question: 'Khi chiếu nhiều ánh sáng vào tấm pin mặt trời thì đèn LED sẽ ở trạng thái nào?',
            options: ['A. Đèn LED sáng rõ', 'B. Đèn LED tắt', 'C. Đèn LED bốc khói', 'D. Đèn LED không phản ứng'],
            correctIndex: 0,
            explanation: 'Nhiều ánh sáng tạo ra điện thế cao làm đèn LED sáng rõ.'
          }
        ],
        teacherGuide: {
          objectives: ['Học sinh gắn được tấm pin và đèn LED lên khung; kiểm tra được hoạt động phát điện ở 3 mức ánh sáng.'],
          keyKnowledge: ['Quan hệ giữa cường độ ánh sáng và dòng điện sinh ra từ pin mặt trời.'],
          estimatedMinutes: 35,
          methodologyTips: ['Nếu trời mưa, chuẩn bị đèn pin siêu sáng hoặc đèn bàn học để học sinh thử nghiệm trong lớp.'],
          equipmentNeeded: ['Đèn pin, mô hình hoàn chỉnh, bảng ghi kết quả SGK tr. 49'],
          quickAnswers: [{ question: 'Không có ánh sáng thì đèn thế nào?', answer: 'Đèn LED tắt.' }]
        }
      },
      {
        id: 'tiet-34',
        periodNumber: 34,
        lessonId: 'bai-9',
        periodInLesson: 4,
        totalPeriodsInLesson: 4,
        title: 'Tiết 4: Trưng bày, đánh giá sản phẩm & Sáng tạo cải tiến mô hình',
        focusContent: 'Trưng bày mô hình trạm điện mặt trời; đánh giá theo 6 tiêu chí chuẩn SGK tr. 49 (Đúng đủ bộ phận, Đúng hình dạng, Mối ghép chắc chắn, Dây dẫn gọn gàng, Đèn LED phát sáng khi tấm pin nhận ánh sáng, Độ sáng thay đổi theo cường độ ánh sáng); sáng tạo cải tiến mô hình.',
        sgkPages: 'Trang 49',
        khoiDong: {
          title: 'Khởi động: Ngày hội Nắng Xanh',
          type: 'quick_quiz',
          question: 'Các nhà khoa học nhí hãy cùng đặt mô hình trạm điện mặt trời ra khu vực đón sáng và chuẩn bị bước vào phiên đánh giá sản phẩm!',
          options: [
            'A. Sản phẩm của chúng em đã hoàn thiện và sáng rực rỡ!',
            'B. Chúng em muốn chỉnh lại dây dẫn cho đẹp hơn',
            'C. Cả lớp cùng tham gia bình chọn công tâm',
            'D. Tất cả các ý kiến trên'
          ],
          correctAnswer: 3,
          explanation: 'Không khí ngày hội sáng tạo công nghệ thật rộn ràng!',
          leadIn: 'Cùng mở phiếu đánh giá 6 tiêu chí để xếp loại sản phẩm xuất sắc!'
        },
        khamPha: [
          {
            id: 'kp-34-1',
            title: '1. Đánh giá sản phẩm theo 6 tiêu chí SGK tr. 49',
            task: 'Đọc phiếu đánh giá sản phẩm gồm 6 tiêu chí: (1) Đúng và đủ bộ phận; (2) Đúng hình dạng; (3) Mối ghép chắc chắn; (4) Dây dẫn điện gọn gàng; (5) Đèn LED phát sáng khi tấm pin nhận ánh sáng; (6) Độ sáng của đèn LED thay đổi khi cường độ ánh sáng thay đổi. Đánh giá theo 3 mức (Tốt, Đạt, Cần cố gắng).',
            context: 'Đánh giá khách quan chất lượng sản phẩm công nghệ.',
            guidingQuestions: [
              '1. Mô hình có đúng đủ 3 bộ phận không?',
              '2. Dây điện có được bọc cách điện và luồn gọn gàng không?',
              '3. Khi thay đổi khoảng cách nguồn sáng, độ sáng đèn LED có thay đổi tương ứng không?'
            ],
            hiddenAnswer: 'Đánh giá theo 6 tiêu chí chuẩn SGK tr. 49. Các nhóm tự đánh giá và chấm chéo cho nhau. Nhóm đạt Tốt có khung nghiêng chuẩn, tấm pin gắn chắc, đèn LED sáng rõ khi chiếu sáng.',
            teacherConclusion: 'Đánh giá theo tiêu chuẩn giúp các em rèn luyện tư duy khoa học và trách nhiệm với sản phẩm mình tạo ra.'
          },
          {
            id: 'kp-34-2',
            title: '2. Ý tưởng sáng tạo cải tiến mô hình điện mặt trời',
            task: 'SGK khuyến khích: "Em hãy cùng các bạn thiết kế và lắp thêm các chi tiết theo ý tưởng sáng tạo của mình". Gợi ý: Gắn thêm động cơ cánh quạt nhỏ quay bằng điện mặt trời; làm mô hình đèn hải đăng năng lượng mặt trời; lắp thêm công tắc đóng ngắt mạch...',
            context: 'Phát triển năng lực sáng tạo không giới hạn.',
            guidingQuestions: [
              '1. Nếu thay đèn LED bằng một chiếc động cơ nhỏ có gắn cánh quạt thì khi có ánh nắng điều gì sẽ xảy ra?',
              '2. Em có thể trang trí mô hình thành ngôi nhà thông minh như thế nào?'
            ],
            hiddenAnswer: 'Ý tưởng sáng tạo: Thay đèn LED bằng mô hình quạt mini chạy năng lượng mặt trời; gắn công tắc bật tắt; trang trí mô hình ngôi nhà xanh có mái nhà lợp pin mặt trời...',
            teacherConclusion: 'Mỗi ý tưởng sáng tạo của các em đều là hạt mầm cho những phát minh kỹ thuật trong tương lai.'
          }
        ],
        thaoLuan: {
          title: 'Thuyết trình dự án: Mái nhà năng lượng xanh',
          groupTask: 'Đại diện mỗi nhóm thuyết trình trước lớp về mô hình điện mặt trời của nhóm, chia sẻ những bài học kinh nghiệm khi thực hành và cách bảo quản tấm pin.',
          durationMinutes: 5,
          guidingPrompts: ['Giới thiệu cấu tạo mô hình', 'Chia sẻ ý tưởng ứng dụng pin mặt trời trong cuộc sống'],
          suggestedHints: ['"Nhóm em mong muốn sau này mái trường của chúng ta sẽ được phủ kín pin mặt trời để tự cấp điện thắp sáng!"'],
          conclusion: 'Bài thuyết trình tự tin thể hiện sự trưởng thành vượt bậc của học sinh.'
        },
        luyenTap: [
          {
            id: 'lt-34-1',
            type: 'mcq',
            question: 'Khi bảo quản tấm pin mặt trời của bộ lắp ghép kĩ thuật, hành động nào sau đây là ĐÚNG?',
            options: [
              'A. Lau nhẹ bề mặt pin bằng khăn mềm khô, cất cẩn thận vào hộp xốp tránh va đập mạnh làm vỡ mặt kính quang điện',
              'B. Dùng vật nhọn kim loại cào mạnh lên mặt pin',
              'C. Ngâm tấm pin vào chậu xà phòng rửa bát',
              'D. Bẻ cong tấm pin'
            ],
            correctAnswer: 0,
            explanation: 'Mặt pin làm bằng tinh thể bán dẫn và kính nhạy cảm, cần lau khăn mềm và tránh va đập nứt vỡ.',
            difficulty: 'basic'
          },
          {
            id: 'lt-34-2',
            type: 'true_false',
            statement: 'Cả mô hình máy phát điện gió (Bài 8) và mô hình điện mặt trời (Bài 9) đều có phiếu đánh giá gồm đúng 6 tiêu chí trong SGK.',
            isCorrect: true,
            explanation: 'Chính xác! Cả 2 bài học đều có bộ 6 tiêu chí tương đồng về kết cấu cơ khí, mạch điện và chuyển hóa năng lượng.',
            difficulty: 'basic'
          }
        ],
        vanDung: {
          title: 'Em vận dụng: Hành động tiết kiệm điện trong sinh hoạt',
          scenario: 'Sau khi học xong 2 bài học về năng lượng tái tạo (gió và mặt trời), em hiểu được để tạo ra dòng điện sạch đòi hỏi rất nhiều công sức và trí tuệ.',
          question: 'Ở lớp và ở nhà, em sẽ thực hiện những hành động tiết kiệm điện nào?',
          options: [
            {
              label: 'A',
              text: 'Tắt đèn, tắt quạt khi ra khỏi phòng; mở cửa sổ tận dụng ánh sáng và gió tự nhiên; không mở tủ lạnh quá lâu',
              isOptimal: true,
              feedback: 'Tuyệt vời! Tiết kiệm điện chính là hành động bảo vệ môi trường thiết thực nhất.'
            },
            {
              label: 'B',
              text: 'Bật hết đèn và quạt suốt ngày đêm kể cả khi đi vắng',
              isOptimal: false,
              feedback: 'Hành vi lãng phí điện năng.'
            }
          ],
          teacherExplanation: 'Biến nhận thức thành thói quen sống xanh mỗi ngày.'
        },
        ghiNho: {
          mainTitle: 'TỔNG KẾT BÀI 9: MÔ HÌNH ĐIỆN MẶT TRỜI',
          summaryQuote: 'Đánh giá theo 6 tiêu chí: Đúng đủ bộ phận, Đúng hình dạng, Chắc chắn, Dây gọn, Đèn sáng khi nhận ánh sáng, Độ sáng tỉ lệ với cường độ ánh sáng. Sử dụng năng lượng sạch và tiết kiệm điện.',
          branches: [
            { label: '6 tiêu chí', color: 'blue', items: ['Đúng đủ bộ phận', 'Đúng hình dạng', 'Mối ghép chắc chắn', 'Dây điện gọn gàng', 'Đèn LED sáng khi đón sáng', 'Độ sáng đổi theo ánh sáng'] },
            { label: 'Thói quen sống xanh', color: 'emerald', items: ['Tắt điện khi ra khỏi phòng', 'Tận dụng ánh sáng tự nhiên', 'Bảo quản tốt đồ dùng kĩ thuật'] }
          ],
          sgkNote: 'Ghi nhớ SGK Công nghệ 5, trang 49.'
        },
        cungCo: [
          {
            id: 'cc-34-1',
            question: 'Khi cường độ ánh sáng chiếu vào tấm pin mặt trời giảm đi (từ sáng mạnh sang sáng yếu) thì độ sáng của đèn LED sẽ:',
            options: ['A. Sáng mờ dần đi', 'B. Sáng chói hơn gấp đôi', 'C. Không thay đổi gì', 'D. Nổ bóng đèn'],
            correctIndex: 0,
            explanation: 'Ánh sáng giảm ➔ điện áp giảm ➔ đèn LED sáng mờ đi tương ứng.'
          }
        ],
        teacherGuide: {
          objectives: ['Học sinh đánh giá sản phẩm theo 6 tiêu chí; tự tin thuyết trình và hình thành thói quen tiết kiệm điện.'],
          keyKnowledge: ['6 tiêu chí đánh giá mô hình điện mặt trời.'],
          estimatedMinutes: 35,
          methodologyTips: ['Tổ chức bình chọn giải thưởng "Kỹ sư Năng lượng Mặt trời Xuất sắc".'],
          equipmentNeeded: ['Phiếu đánh giá 6 tiêu chí SGK tr. 49, bàn trưng bày'],
          quickAnswers: [{ question: 'Bảo quản tấm pin thế nào?', answer: 'Lau khăn mềm, cất hộp tránh va đập.' }]
        }
      }
    ]
  },
  {
    id: 'danh-gia-hk2-cuoi',
    number: 'Tiết 35',
    title: 'Ôn tập và Đánh giá Cuối học kì 2',
    partId: 'part-2',
    partTitle: 'PHẦN HAI: THỦ CÔNG KĨ THUẬT',
    totalPeriods: 1,
    sgkPages: 'Ôn tập toàn diện cả năm học (Bài 1 đến Bài 9)',
    isEvaluation: true,
    periods: [
      {
        id: 'tiet-35',
        periodNumber: 35,
        lessonId: 'danh-gia-hk2-cuoi',
        periodInLesson: 1,
        totalPeriodsInLesson: 1,
        title: 'Tiết 35: Ôn tập và Đánh giá Cuối học kì 2 (Tổng kết năm học)',
        focusContent: 'Hệ thống hóa toàn bộ chương trình môn Công nghệ lớp 5: Phần một (Công nghệ và đời sống: Bài 1 đến 6) và Phần hai (Thủ công kĩ thuật: Bài 7, 8, 9); thực hiện bài kiểm tra đánh giá cuối năm học; vinh danh các nhà sáng chế nhí.',
        sgkPages: 'Toàn bộ SGK Công nghệ 5',
        khoiDong: {
          title: 'Khởi động: Nhìn lại chặng đường 35 tiết học',
          type: 'quick_quiz',
          question: 'Trải qua 35 tiết học lý thú của môn Công nghệ 5, em đã chế tạo được những sản phẩm kỳ diệu nào?',
          options: [
            'A. Chiếc đồng hồ đồ chơi (Bài 4), Xe điện chạy pin (Bài 7), Máy phát điện gió (Bài 8) và Mô hình điện mặt trời (Bài 9)',
            'B. Máy bay phản lực thật chở 300 người',
            'C. Tàu ngầm hạt nhân',
            'D. Chưa làm được sản phẩm nào'
          ],
          correctAnswer: 0,
          explanation: 'Đó là 4 sản phẩm thủ công kỹ thuật mẫu mực mà các em đã tự tay chế tạo thành công!',
          leadIn: 'Hãy cùng nhìn lại bức tranh toàn cảnh môn học và tự tin bước vào bài kiểm tra tổng kết năm học!'
        },
        khamPha: [
          {
            id: 'kp-35-1',
            title: 'Hệ thống hóa 9 bài học Công nghệ 5',
            task: 'Tổng kết 2 phần lớn: PHẦN 1 (Công nghệ & đời sống: Vai trò công nghệ; Nhà sáng chế; Tìm hiểu thiết kế; Thiết kế đồng hồ; Sử dụng điện thoại an toàn; Sử dụng tủ lạnh) & PHẦN 2 (Thủ công kĩ thuật: Xe điện pin; Máy phát điện gió; Điện mặt trời).',
            context: 'Hệ thống kiến thức liền mạch, logic và thực tiễn.',
            guidingQuestions: [
              '1. Bốn nhà sáng chế và các năm cấp bằng sáng chế là những ai?',
              '2. Năm số điện thoại khẩn cấp quốc gia là gì?',
              '3. Ba mô hình lắp ghép kỹ thuật ở học kì 2 hoạt động bằng những nguồn năng lượng nào?'
            ],
            hiddenAnswer: '4 nhà sáng chế: Giêm Oát (1784), Béc-lin-nơ (1876), Ê-đi-xơn (1879), Các Ben (1886). 5 số khẩn cấp: 111, 112, 113, 114, 115. 3 mô hình kỹ thuật: Xe điện (pin hóa học), Điện gió (năng lượng gió), Điện mặt trời (năng lượng ánh sáng).',
            teacherConclusion: 'Toàn bộ chương trình Công nghệ 5 đã trang bị cho các em kiến thức khoa học, kỹ năng kỹ thuật và phẩm chất công dân số chuẩn mực.'
          }
        ],
        thaoLuan: {
          title: 'Vòng tròn chia sẻ cảm nghĩ cuối năm',
          groupTask: 'Mỗi học sinh phát biểu 1 câu ngắn gọn về điều em thấy bổ ích nhất sau khi học xong môn Công nghệ lớp 5.',
          durationMinutes: 5,
          guidingPrompts: ['Kỹ năng thực hành nào em thích nhất?', 'Thói quen sử dụng công nghệ nào em đã thay đổi tốt hơn?'],
          suggestedHints: ['"Em biết cách sử dụng điện thoại lịch sự và biết tự lắp ráp xe điện chạy pin!"'],
          conclusion: 'Niềm vui và sự tự tin thể hiện rõ trên gương mặt mỗi học sinh.'
        },
        luyenTap: [
          {
            id: 'lt-35-1',
            type: 'matching',
            instruction: 'Nối đúng mô hình kỹ thuật ở học kì 2 với nguồn năng lượng sử dụng:',
            leftItems: [
              { id: 'm-car', text: 'Mô hình xe điện chạy bằng pin (Bài 7)' },
              { id: 'm-wind', text: 'Mô hình máy phát điện gió (Bài 8)' },
              { id: 'm-solar', text: 'Mô hình điện mặt trời (Bài 9)' }
            ],
            rightItems: [
              { id: 'e-chem', text: 'Nguồn điện từ 2 pin tiểu AA 1.5V' },
              { id: 'e-wind', text: 'Năng lượng cơ học của luồng gió thổi làm quay cánh quạt' },
              { id: 'e-solar', text: 'Năng lượng ánh sáng được tấm pin quang điện hấp thụ' }
            ],
            correctPairs: [
              { leftId: 'm-car', rightId: 'e-chem' },
              { leftId: 'm-wind', rightId: 'e-wind' },
              { leftId: 'm-solar', rightId: 'e-solar' }
            ],
            difficulty: 'intermediate'
          },
          {
            id: 'lt-35-2',
            type: 'mcq',
            question: 'Khi nối dây dẫn điện từ nguồn vào bóng đèn LED, nguyên tắc bắt buộc để đèn phát sáng là:',
            options: [
              'A. Dây dương (+) nối chân dài, dây âm (-) nối chân ngắn của đèn LED',
              'B. Nối thế nào cũng được không cần phân biệt',
              'C. Cắt cụt cả hai chân đèn LED',
              'D. Nối dây âm vào chân dài'
            ],
            correctAnswer: 0,
            explanation: 'Đèn LED chỉ cho dòng điện đi từ cực dương (chân dài) sang cực âm (chân ngắn).',
            difficulty: 'basic'
          }
        ],
        vanDung: {
          title: 'Em vận dụng: Hành trang bước vào lớp 6',
          scenario: 'Lên cấp 2 lớp 6, các em sẽ tiếp tục học môn Công nghệ với những dự án lớn hơn như: Nhà ở thông minh, Nông nghiệp công nghệ cao, Trang phục thời trang...',
          question: 'Những phẩm chất nào em đã rèn luyện được trong năm học lớp 5 sẽ giúp em học tốt môn Công nghệ ở các lớp trên?',
          options: [
            {
              label: 'A',
              text: 'Tính cẩn thận, kiên trì, tác phong làm việc an toàn, khả năng làm việc nhóm và tinh thần say mê sáng tạo',
              isOptimal: true,
              feedback: 'Chính xác! Đó là những phẩm chất cốt lõi của người làm khoa học công nghệ.'
            },
            {
              label: 'B',
              text: 'Làm việc cẩu thả, đốt cháy giai đoạn',
              isOptimal: false,
              feedback: 'Thói quen xấu cần loại bỏ.'
            }
          ],
          teacherExplanation: 'Tác phong cẩn trọng, kỷ luật kỹ thuật sẽ nâng cánh cho mọi ước mơ của các em.'
        },
        ghiNho: {
          mainTitle: 'TỔNG KẾT TOÀN DIỆN MÔN CÔNG NGHỆ LỚP 5',
          summaryQuote: 'Chúc mừng các em đã hoàn thành xuất sắc 35 tiết học môn Công nghệ 5: Làm chủ công nghệ và đời sống, khéo léo thủ công kỹ thuật, sáng tạo năng lượng xanh!',
          branches: [
            { label: 'Phần 1: Công nghệ & Đời sống', color: 'blue', items: ['Vai trò công nghệ & 4 nhà sáng chế', 'Quy trình thiết kế 4 bước', 'Sử dụng điện thoại & tủ lạnh'] },
            { label: 'Phần 2: Thủ công kĩ thuật', color: 'emerald', items: ['Mô hình xe điện chạy pin', 'Mô hình máy phát điện gió', 'Mô hình điện mặt trời'] }
          ],
          sgkNote: 'Bảng tổng kết đánh giá cuối năm học môn Công nghệ 5.'
        },
        cungCo: [
          {
            id: 'cc-35-1',
            question: 'Chương trình môn Công nghệ lớp 5 gồm có tất cả bao nhiêu bài học chính thức?',
            options: ['A. 5 bài', 'B. 7 bài', 'C. 9 bài', 'D. 12 bài'],
            correctIndex: 2,
            explanation: 'Gồm 9 bài học chính thức phân phối trong 35 tiết của cả năm học.'
          }
        ],
        teacherGuide: {
          objectives: ['Đánh giá tổng kết năm học môn Công nghệ lớp 5; khen thưởng và xếp loại học sinh theo thông tư quy định.'],
          keyKnowledge: ['Toàn bộ kiến thức 9 bài học trong SGK Công nghệ 5.'],
          estimatedMinutes: 35,
          methodologyTips: ['Tổ chức lễ vinh danh "Kỹ Sư Nhí Tài Năng Công Nghệ 5" trao giấy khen cho các em.'],
          equipmentNeeded: ['Đề kiểm tra cuối năm học, giấy khen, góc trưng bày sản phẩm cả năm'],
          quickAnswers: [{ question: 'Tổng số tiết cả năm học?', answer: '35 tiết.' }]
        }
      }
    ]
  }
];
