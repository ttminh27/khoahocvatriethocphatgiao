export interface QuizQuestion {
  id: string;
  text: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  hint: string;
}

export const quizzes: Record<string, QuizQuestion[]> = {
  "week1": [
    {
      id: "w1_1",
      text: "Bộ sách 'Khoa học và Triết học Phật giáo Tổng tập' bao gồm tổng cộng bao nhiêu tập?",
      options: ["2 tập", "3 tập", "4 tập", "5 tập"],
      correctAnswerIndex: 2,
      explanation: "Khóa học tập trung nghiên cứu bộ sách gồm 4 tập. Tập 1, 2 về Khoa học; Tập 3, 4 về Triết học.",
      hint: "Số tập là một số chẵn, nhỏ hơn 5."
    },
    {
      id: "w1_2",
      text: "Nội dung của Tập 1 và Tập 2 trong bộ sách chủ yếu nói về lĩnh vực nào?",
      options: ["Triết học Phật giáo", "Phật giáo Thực hành", "Khoa học Phật giáo", "Lịch sử Phật giáo"],
      correctAnswerIndex: 2,
      explanation: "Tập 1 và Tập 2 tập trung vào Khoa học Phật giáo, bao gồm thế giới vật chất và khoa học tâm thức.",
      hint: "Liên quan đến các yếu tố khách quan và tâm thức."
    },
    {
      id: "w1_3",
      text: "Tập 1 hoàn toàn thuộc về phạm trù khoa học, vậy nó KHÔNG chú trọng vào yếu tố nào?",
      options: ["Nhân minh học", "Pháp hành và đức tin tôn giáo", "Thực tại khách quan", "Bốn pháp ấn"],
      correctAnswerIndex: 1,
      explanation: "Tập 1 không chú trọng vào pháp hành và không đòi hỏi người học phải có đức tin tôn giáo hay phát tâm quy y.",
      hint: "Yếu tố liên quan đến việc thực hành tâm linh cá nhân."
    },
    {
      id: "w1_4",
      text: "Đức Đạt Lai Lạt Ma đã tích chiết nội dung lời Phật dạy và gom về 3 lĩnh vực nào?",
      options: ["Giới, Định, Tuệ", "Kinh, Luật, Luận", "Khoa học Phật giáo, Triết học Phật giáo, Phật giáo Thực hành", "Vật chất, Tâm thức, Tâm linh"],
      correctAnswerIndex: 2,
      explanation: "Ba lĩnh vực đó là Khoa học Phật giáo, Triết học Phật giáo và Phật giáo Thực hành (Pháp hành).",
      hint: "Bao gồm 2 lĩnh vực học thuật và 1 lĩnh vực thực hành."
    },
    {
      id: "w1_5",
      text: "Tiến trình tiếp cận đúng đắn 3 phạm trù Phật giáo được đề xuất là gì?",
      options: ["Thực hành -> Khoa học -> Triết học", "Khoa học -> Triết học -> Thực hành", "Triết học -> Thực hành -> Khoa học", "Thực hành -> Triết học -> Khoa học"],
      correctAnswerIndex: 1,
      explanation: "Cần hiểu rõ thực tại khách quan (khoa học) trước, sau đó nâng lên quan điểm (triết học), cuối cùng áp dụng vào đời sống (pháp hành).",
      hint: "Đi từ cái khách quan nhất đến cái áp dụng cá nhân."
    },
    {
      id: "w1_6",
      text: "Theo kinh nghiệm thực tế, hạnh phúc chân thật bắt nguồn từ đâu?",
      options: ["Tiền bạc và quyền lực", "Danh tiếng bên ngoài", "Tâm hồn an bình, khả năng làm chủ tâm thức", "Sức khỏe thể chất"],
      correctAnswerIndex: 2,
      explanation: "Hạnh phúc chân thật không phụ thuộc điều kiện vật chất mà bắt nguồn từ nội tâm an bình và khả năng kiểm soát cảm xúc.",
      hint: "Liên quan đến sự rèn luyện bên trong."
    },
    {
      id: "w1_7",
      text: "Mục đích thứ nhất của Đức Đạt Lai Lạt Ma khi biên soạn bộ sách này là gì?",
      options: ["Truyền bá tôn giáo", "Giúp hệ thống giáo dục hiện đại trở nên hoàn thiện hơn bằng khoa học tâm thức", "Xây dựng các tự viện", "Giải thích lịch sử loài người"],
      correctAnswerIndex: 1,
      explanation: "Ngài muốn bổ sung lĩnh vực khoa học tâm thức vào giáo dục hiện đại đang thiên về vật chất.",
      hint: "Liên quan đến nền tảng giáo dục."
    },
    {
      id: "w1_8",
      text: "Hệ thống giáo dục hiện đại ngày nay được cho là đang khuyết thiếu điều gì?",
      options: ["Khoa học kỹ thuật", "Khoa học tự nhiên", "Toán học và công nghệ", "Sự hiểu biết về tâm thức, nuôi dưỡng tâm thiện lành"],
      correctAnswerIndex: 3,
      explanation: "Giáo dục đang hướng ngoại và thiên về vật chất, thiếu vắng việc đào tạo cách đạt bình an nội tâm.",
      hint: "Yếu tố bên trong con người."
    },
    {
      id: "w1_9",
      text: "Nguyên lý tự nhiên (Pháp nhiên đạo lý) trong 4 nguyên lý dùng để tìm hiểu điều gì?",
      options: ["Sự phụ thuộc", "Bản chất tự nhiên vốn có của sự vật", "Chức năng của sự vật", "Cách chứng minh vấn đề"],
      correctAnswerIndex: 1,
      explanation: "Tìm hiểu bản chất tự nhiên vốn có. Ví dụ: bản chất của lửa là nóng.",
      hint: "Từ khóa: 'tự nhiên' = 'bản chất'."
    },
    {
      id: "w1_10",
      text: "Tìm hiểu về sự tương thuộc và các điều kiện để sự vật tồn tại thuộc nguyên lý nào?",
      options: ["Nguyên lý tự nhiên", "Nguyên lý chứng thành", "Nguyên lý phụ thuộc (Quán đãi đạo lý)", "Nguyên lý tác dụng"],
      correctAnswerIndex: 2,
      explanation: "Nguyên lý phụ thuộc tìm hiểu các điều kiện, nhân duyên để hình thành sự vật.",
      hint: "Liên quan đến sự nương tựa vào nhau."
    },
    {
      id: "w1_11",
      text: "Trong Tứ pháp y, 'Y pháp bất y nhân' có nghĩa là gì?",
      options: ["Dựa vào người có chức quyền", "Dựa vào giáo pháp không dựa vào người nói", "Dựa vào ngôn từ của người nói", "Dựa vào dòng tộc người thuyết pháp"],
      correctAnswerIndex: 1,
      explanation: "Dựa vào giáo lý chân chính chứ không phụ thuộc vào danh tiếng hay thân thế người nói.",
      hint: "'Bất y nhân' nghĩa là không dựa vào người."
    },
    {
      id: "w1_12",
      text: "Cấu trúc của Tập 1 (Thế giới vật chất) gồm bao nhiêu phần chính?",
      options: ["4 phần", "5 phần", "6 phần", "7 phần"],
      correctAnswerIndex: 2,
      explanation: "Tập 1 có 6 phần chính, từ giáo nghĩa tổng quan đến quá trình hình thành loài hữu tình.",
      hint: "Bằng một nửa số 12."
    },
    {
      id: "w1_13",
      text: "Tập 2 của bộ sách có chủ đề chính là gì?",
      options: ["Thế giới vật chất", "Triết lý Tánh Không", "Luân hồi và nghiệp", "Khoa học về Tâm thức"],
      correctAnswerIndex: 3,
      explanation: "Tập 2 tập trung trình bày Khoa học về Tâm thức.",
      hint: "Lĩnh vực bổ khuyết cho thế giới vật chất."
    },
    {
      id: "w1_14",
      text: "Nguyên lý tác dụng (Tác dụng đạo lý) nhằm mục đích gì?",
      options: ["Chứng minh một vấn đề", "Tìm hiểu chức năng, tác dụng của sự vật", "Chỉ ra sự phụ thuộc", "Giải thích bản chất gốc"],
      correctAnswerIndex: 1,
      explanation: "Nguyên lý này tìm hiểu chức năng và tác dụng của sự vật dựa trên bản chất của nó.",
      hint: "Tên nguyên lý đã nói lên ý nghĩa."
    },
    {
      id: "w1_15",
      text: "Sự thật khách quan (ví dụ chiếc điện thoại) ai cũng thừa nhận, nhưng giá trị của nó tùy thuộc vào điều gì?",
      options: ["Vật liệu tạo ra", "Nhà sản xuất", "Quan điểm triết học, cách nhìn và sự yêu thích của mỗi người", "Giá cả thị trường"],
      correctAnswerIndex: 2,
      explanation: "Giá trị tốt hay xấu phụ thuộc vào quan điểm và cách tiếp cận (triết học) của người dùng.",
      hint: "Liên quan đến thái độ và nhận thức của con người."
    },
    {
      id: "w1_16",
      text: "Nội dung bộ sách được trích xuất từ kho tàng nào?",
      options: ["Sách lịch sử Tây Tạng", "Tam tạng Kinh điển (Kinh tạng và Luận tạng)", "Các tác phẩm khoa học phương Tây", "Cổ tích Ấn Độ"],
      correctAnswerIndex: 1,
      explanation: "Được tích chiết từ Tam tạng Kinh điển Kangyur và Tengyur.",
      hint: "Kho tàng cốt lõi của giáo pháp."
    },
    {
      id: "w1_17",
      text: "Mục đích thứ hai của Đức Đạt Lai Lạt Ma khi ra mắt bộ sách là gì?",
      options: ["Nâng cao doanh số sách", "Cải tổ hệ thống tự viện", "Phát triển tâm lợi ích, lương thiện, tử tế và từ bi", "Chứng minh khoa học phương Tây sai"],
      correctAnswerIndex: 2,
      explanation: "Mục đích thứ hai là hướng đến phát triển các phẩm chất tốt đẹp như tình yêu thương và lòng từ bi cho nhân loại.",
      hint: "Những phẩm chất cao quý của trái tim."
    },
    {
      id: "w1_18",
      text: "Khóa học này dự kiến sẽ kéo dài trong khoảng thời gian bao lâu?",
      options: ["1 đến 2 tháng", "1 đến 2 năm", "3 đến 4 năm", "6 tháng"],
      correctAnswerIndex: 1,
      explanation: "Khóa học được thiết kế học lâu dài, kéo dài từ 1 đến 2 năm.",
      hint: "Tính bằng đơn vị năm."
    },
    {
      id: "w1_19",
      text: "Để học bộ sách này thành công, yếu tố nào được nhấn mạnh là cực kỳ quan trọng?",
      options: ["Phải thông minh xuất chúng", "Sự cam kết đồng hành nghiêm túc và nỗ lực", "Đọc thật nhiều sách bên ngoài", "Ghi chép đầy đủ"],
      correctAnswerIndex: 1,
      explanation: "Sự cam kết và nỗ lực từ buổi đầu đến khi kết thúc là rất quan trọng.",
      hint: "Sự kiên trì."
    },
    {
      id: "w1_20",
      text: "Nhân minh học (luận lý học) đóng vai trò gì trong giáo lý?",
      options: ["Phương pháp tư duy logic dùng để chứng minh/phủ định một cách khoa học", "Cách để thiền định tĩnh tâm", "Kỹ thuật tụng niệm", "Cách tập trung tư tưởng"],
      correctAnswerIndex: 0,
      explanation: "Nhân minh học là nền tảng luận lý giúp chứng minh sự thật tồn tại của các pháp một cách khoa học.",
      hint: "Liên quan đến logic và lý luận."
    }
  ],

  "week2": [
    {
      id: "w2_1",
      text: "Dạng năng lượng tiềm tàng, không thuộc sắc pháp cũng không thuộc tâm pháp được gọi là gì?",
      options: ["Tâm sở", "Bất tương ưng hành pháp", "Vô vi pháp", "Sắc pháp"],
      correctAnswerIndex: 1,
      explanation: "Bất tương ưng hành pháp là dạng năng lượng, nền tảng để khởi lên tâm thức.",
      hint: "Có từ 'Bất'."
    },
    {
      id: "w2_2",
      text: "Pháp được hình thành bởi nhân duyên (có nguyên nhân và điều kiện) được gọi là gì?",
      options: ["Vô vi pháp", "Hữu vi pháp", "Thắng nghĩa đế", "Chơn đế"],
      correctAnswerIndex: 1,
      explanation: "Hữu vi pháp là các pháp có sinh diệt, hình thành từ nhân duyên.",
      hint: "Có tạo tác (Hữu)."
    },
    {
      id: "w2_3",
      text: "Trong 5 nhóm pháp của A-tỳ-đạt-ma, Tâm sở có đặc tính gì?",
      options: ["Là tâm chính, tâm chủ", "Là dạng vật chất", "Tùy tùng, phụ thuộc vào tâm vương", "Là pháp thường hằng"],
      correctAnswerIndex: 2,
      explanation: "Tâm sở như người học trò, tùy thuộc và đi kèm với tâm vương.",
      hint: "Giống như người tùy tùng."
    },
    {
      id: "w2_4",
      text: "Theo 18 giới, '6 căn' bao gồm những gì?",
      options: ["Sắc, thanh, hương, vị, xúc, pháp", "Nhãn, nhĩ, tỷ, thiệt, thân, ý (6 giác quan)", "Tham, sân, si, mạn, nghi, ác kiến", "Quá khứ, hiện tại, vị lai"],
      correctAnswerIndex: 1,
      explanation: "6 căn là 6 giác quan: mắt, tai, mũi, lưỡi, thân, ý.",
      hint: "Là các công cụ tiếp nhận trên cơ thể."
    },
    {
      id: "w2_5",
      text: "Đối tượng (trần cảnh) tương ứng của Ý thức là gì?",
      options: ["Hình sắc", "Âm thanh", "Pháp", "Hương vị"],
      correctAnswerIndex: 2,
      explanation: "Pháp là đối tượng của ý thức, những thứ không thể thấy/nghe/chạm trực tiếp.",
      hint: "Nằm trong chữ 'Pháp'."
    },
    {
      id: "w2_6",
      text: "Thế tục đế (chân lý quy ước) là gì?",
      options: ["Sự thật tuyệt đối không thay đổi", "Sự tồn tại của các pháp ở dạng hiển lộ, trình hiện mà ta nhận thức được", "Pháp vô vi", "Cảnh giới Niết bàn"],
      correctAnswerIndex: 1,
      explanation: "Tục đế là những hiện tượng hiển lộ bên ngoài, quy ước của thế gian.",
      hint: "Liên quan đến cái hiển lộ bên ngoài."
    },
    {
      id: "w2_7",
      text: "Thắng nghĩa đế (Chơn đế) là gì?",
      options: ["Cảm nhận ban đầu về một người", "Sự thật tồn tại của các pháp đúng như nó đang là (chân lý tuyệt đối)", "Sự tương tác của 6 căn", "Khái niệm do con người đặt ra"],
      correctAnswerIndex: 1,
      explanation: "Chơn đế là sự thật tuyệt đối, bản chất chân thật của sự vật.",
      hint: "Sự thật tối hậu."
    },
    {
      id: "w2_8",
      text: "Đức Phật khuyên chúng ta nên có thái độ gì đối với lời dạy của Ngài?",
      options: ["Tin tưởng tuyệt đối ngay lập tức", "Dùng lý luận khảo sát để kiểm chứng trước khi tin", "Không cần tìm hiểu", "Chỉ dựa vào đức tin"],
      correctAnswerIndex: 1,
      explanation: "Đức Phật dạy cần khảo sát lời Ngài cặn kẽ chứ không nên tin mù quáng.",
      hint: "Phải suy ngẫm và kiểm chứng."
    },
    {
      id: "w2_9",
      text: "Trong Tứ y, 'Y nghĩa bất y ngữ' khuyến khích điều gì?",
      options: ["Dựa vào ngôn từ hay, tráng lệ", "Dựa vào nghĩa lý sâu sắc bên trong thay vì hình thức ngôn từ", "Dựa vào người nói có địa vị", "Bỏ qua mọi từ ngữ"],
      correctAnswerIndex: 1,
      explanation: "Nên tìm kiếm lợi ích và ý nghĩa chân thật hơn là chỉ nghe những từ ngữ êm tai nhưng sáo rỗng.",
      hint: "Ý nghĩa quan trọng hơn lời nói."
    },
    {
      id: "w2_10",
      text: "'Liễu nghĩa' được hiểu như thế nào?",
      options: ["Nghĩa dứt khoát, rốt ráo, không cần giải thích thêm", "Nghĩa tạm thời", "Nghĩa phương tiện", "Nghĩa bề mặt"],
      correctAnswerIndex: 0,
      explanation: "Liễu nghĩa là chân lý tuyệt đối, cứu cánh và không thể giải thích khác đi.",
      hint: "Sự thật cuối cùng."
    },
    {
      id: "w2_11",
      text: "Lời Phật dạy mang tính 'Bất liễu nghĩa' có đặc điểm gì?",
      options: ["Là chủ ý cuối cùng của Đức Phật", "Là chân lý tuyệt đối", "Là phương tiện tạm thời để dẫn dắt người nghe", "Hoàn toàn sai lệch"],
      correctAnswerIndex: 2,
      explanation: "Bất liễu nghĩa là các phương tiện Đức Phật dùng để dẫn dụ người chưa đủ căn cơ.",
      hint: "Mang tính phương tiện."
    },
    {
      id: "w2_12",
      text: "Theo trường phái Trung Quán, giáo lý nào được xem là 'Liễu nghĩa'?",
      options: ["Những giáo lý về luật nhân quả", "Những giáo lý về Tánh Không", "Giáo lý về các cảnh giới luân hồi", "Giáo lý về 6 trần"],
      correctAnswerIndex: 1,
      explanation: "Trung Quán luận cho rằng chỉ những gì nói về Tánh Không mới là liễu nghĩa.",
      hint: "Sự vắng bặt của tự tánh."
    },
    {
      id: "w2_13",
      text: "Trong Tứ y, 'Y trí bất y thức' khuyên chúng ta điều gì?",
      options: ["Nương vào cảm tính", "Dựa vào tri thức tổng quát", "Dựa vào trí tuệ thực chứng thay vì tri thức phân biệt", "Phân tích bằng logic thông thường là đủ"],
      correctAnswerIndex: 2,
      explanation: "Thức chỉ cho nhận thức cảm tính, bề mặt; Trí là sự thấu đạt sâu sắc, thực chứng.",
      hint: "Trí tuệ vượt lên trên tri thức."
    },
    {
      id: "w2_14",
      text: "Vô vi pháp bao gồm những pháp có đặc tính gì?",
      options: ["Luôn thay đổi", "Thường hằng, không sinh không diệt bởi nhân duyên", "Chịu chi phối của nghiệp", "Là dạng năng lượng thô"],
      correctAnswerIndex: 1,
      explanation: "Vô vi pháp là những pháp không bị tạo tác, tồn tại vĩnh hằng.",
      hint: "Không có sự tạo tác."
    },
    {
      id: "w2_15",
      text: "Nếu gặp một người và đánh giá họ qua cảm nhận ban đầu, điều này tương ứng với khái niệm nào?",
      options: ["Liễu nghĩa", "Bất liễu nghĩa (nghĩa tạm thời)", "Chơn đế", "Thánh ngôn lượng"],
      correctAnswerIndex: 1,
      explanation: "Cảm nhận bề ngoài ban đầu chỉ là quy ước tạm thời, chưa phải bản chất thật (Bất liễu nghĩa).",
      hint: "Cái bề ngoài, tạm thời."
    },
    {
      id: "w2_16",
      text: "Các đối tượng 'Sắc, thanh, hương, vị, xúc' muốn được nhận thức trực tiếp phải thông qua đâu?",
      options: ["6 Căn (các giác quan)", "Tâm sở", "Vô vi pháp", "Chơn đế"],
      correctAnswerIndex: 0,
      explanation: "Nhận thức (Thức) phải thông qua Giác quan (Căn) để cảm nhận Đối tượng (Trần).",
      hint: "Các cơ quan trên cơ thể."
    },
    {
      id: "w2_17",
      text: "Giáo pháp của Đức Phật được chia làm 2 cấp độ ý nghĩa chính là gì?",
      options: ["Chơn và Tục", "Hữu vi và Vô vi", "Liễu nghĩa và Bất liễu nghĩa", "Tâm vương và Tâm sở"],
      correctAnswerIndex: 2,
      explanation: "Trong Tứ y có nhắc đến sự phân chia lời dạy thành Liễu nghĩa (rốt ráo) và Bất liễu nghĩa (tạm thời).",
      hint: "Cấp độ về mặt ý nghĩa ngôn từ."
    },
    {
      id: "w2_18",
      text: "Các trường phái dưới Trung Quán định nghĩa 'Liễu nghĩa' như thế nào?",
      options: ["Dựa trên Tánh không", "Dựa trên ngôn từ đúng mà không cần giải thích thêm", "Dựa vào người thuyết pháp", "Dựa vào sự thần bí"],
      correctAnswerIndex: 1,
      explanation: "Họ đánh giá qua ngôn từ: nếu nghĩa ngôn từ đã rõ ràng không cần giải thích thêm thì là liễu nghĩa.",
      hint: "Căn cứ trực tiếp trên mặt chữ."
    },
    {
      id: "w2_19",
      text: "Tâm vương và Tâm sở có mối quan hệ như thế nào?",
      options: ["Bình đẳng như nhau", "Tâm sở là chủ, tâm vương là tớ", "Tâm vương là chủ, tâm sở tùy tùng đi theo", "Không liên quan đến nhau"],
      correctAnswerIndex: 2,
      explanation: "Tâm vương là tâm chính, còn tâm sở là các yếu tố tâm lý phụ thuộc sinh khởi theo.",
      hint: "Vương là Vua, Sở là thuộc hạ."
    },
    {
      id: "w2_20",
      text: "Việc sử dụng 4 cách giải thích nền tảng sự vật giúp ích gì cho người học?",
      options: ["Để tranh luận thắng người khác", "Tạo nhận thức toàn diện, đúng đắn về thực tại", "Chỉ để học thuộc lòng", "Để có nhiều từ vựng"],
      correctAnswerIndex: 1,
      explanation: "Giúp người học nhận diện chân lý, tránh rơi vào tà kiến và chấp trước.",
      hint: "Mục đích tối hậu của tri thức Phật giáo."
    }
  ],

  "week3": [
    {
      id: "w3_1",
      text: "Sở lượng được dùng để quán sát bản chất sự vật hiện tượng gồm mấy loại?",
      options: ["2 loại", "3 loại", "4 loại", "5 loại"],
      correctAnswerIndex: 1,
      explanation: "Gồm 3 loại: Hiện lượng, Tỷ lượng và Thánh ngôn lượng.",
      hint: "Số lượng các cách nhận thức chính."
    },
    {
      id: "w3_2",
      text: "Hiện lượng là phương pháp nhận thức như thế nào?",
      options: ["Suy luận từ dấu hiệu", "Dựa vào lời nói của bậc Thánh", "Nhận thức trực tiếp thông qua các giác quan", "Phân tích logic"],
      correctAnswerIndex: 2,
      explanation: "Hiện lượng là cái có thể thấy, nghe, ngửi, nếm, chạm trực tiếp một cách hiển nhiên.",
      hint: "Trực tiếp, hiện tiền."
    },
    {
      id: "w3_3",
      text: "Để nhận thức các đối tượng 'ẩn tế' (không thể thấy trực tiếp), ta dùng phương pháp nào?",
      options: ["Hiện lượng", "Tỷ lượng (suy luận)", "Thánh ngôn lượng", "Cảm giác"],
      correctAnswerIndex: 1,
      explanation: "Tỷ lượng là dùng suy luận logic để nhận thức những điều ẩn khuất.",
      hint: "Dựa vào logic, ví dụ thấy khói biết có lửa."
    },
    {
      id: "w3_4",
      text: "Nhận thức các đối tượng 'cực kỳ ẩn tế' (như nghiệp quả vi tế) cần dựa vào đâu?",
      options: ["Hiện lượng", "Tỷ lượng", "Thánh ngôn lượng", "Trực giác"],
      correctAnswerIndex: 2,
      explanation: "Phải dựa vào lời dạy đáng tin cậy của bậc giác ngộ (Thánh ngôn lượng).",
      hint: "Lời của bậc Thánh."
    },
    {
      id: "w3_5",
      text: "Trong Y pháp bất y nhân, thông điệp chính là gì?",
      options: ["Nên tin người thân quen", "Tin vào danh tiếng người thuyết giảng", "Quan trọng là giáo pháp, không quan trọng người nói là ai", "Chỉ nghe người nước mình"],
      correctAnswerIndex: 2,
      explanation: "Dù người nói xuất thân thế nào, điều quan trọng nhất là lời dạy đó có đúng đắn hay không.",
      hint: "Bất y nhân = không phụ thuộc người."
    },
    {
      id: "w3_6",
      text: "Biểu hiện bệnh lý bên ngoài như mụn, tàn nhang thuộc loại đối tượng nhận thức nào?",
      options: ["Đối tượng trực tiếp", "Đối tượng ít ẩn tế", "Đối tượng cực kỳ ẩn tế", "Đối tượng không thể nhận thức"],
      correctAnswerIndex: 0,
      explanation: "Vì có thể nhìn thấy ngay bằng mắt thường (hiện lượng).",
      hint: "Cái gì đập vào mắt ngay."
    },
    {
      id: "w3_7",
      text: "Căn bệnh bên trong cơ thể suy ra từ triệu chứng bên ngoài thuộc loại đối tượng nào?",
      options: ["Trực tiếp", "Cực kỳ ẩn tế", "Ít ẩn tế", "Hoang đường"],
      correctAnswerIndex: 2,
      explanation: "Không thấy trực tiếp nhưng có thể dùng tỷ lượng để suy luận ra.",
      hint: "Cần một chút suy luận."
    },
    {
      id: "w3_8",
      text: "Điều kiện để Thánh ngôn lượng (kinh điển) đáng tin cậy là gì?",
      options: ["Nội dung không bị lệch lạc, suy luận đúng đắn, không mâu thuẫn", "Được nhiều người truyền miệng", "Có ngôn từ hoa mỹ", "Được viết bằng tiếng Phạn"],
      correctAnswerIndex: 0,
      explanation: "Kinh điển chuẩn mực phải vượt qua kiểm chứng hiện lượng, tỷ lượng và không có mâu thuẫn.",
      hint: "Ba tiêu chí khắt khe về tính chân thật."
    },
    {
      id: "w3_9",
      text: "Nhìn thấy khói suy ra có lửa là ứng dụng của nguyên lý nào?",
      options: ["Nguyên lý tự nhiên", "Nguyên lý chức năng", "Nguyên lý chứng thành", "Nguyên lý phụ thuộc"],
      correctAnswerIndex: 2,
      explanation: "Sử dụng nhân (khói) để chứng minh quả (lửa) tồn tại.",
      hint: "Dùng để chứng minh một kết luận."
    },
    {
      id: "w3_10",
      text: "Dùng tính nóng của lửa để nấu thức ăn là ứng dụng nguyên lý nào?",
      options: ["Nguyên lý tác dụng (chức năng)", "Nguyên lý chứng thành", "Nguyên lý tự nhiên", "Nguyên lý phụ thuộc"],
      correctAnswerIndex: 0,
      explanation: "Sử dụng đặc tính tự nhiên để phát huy tác dụng phục vụ đời sống.",
      hint: "Chức năng, hữu dụng."
    },
    {
      id: "w3_11",
      text: "Sự liên quan (trong Nhiếp loại học) được chia làm mấy loại chính?",
      options: ["1", "2", "3", "4"],
      correctAnswerIndex: 1,
      explanation: "Liên quan cùng bản thể và Liên quan sinh khởi.",
      hint: "Có hai dạng liên kết cơ bản."
    },
    {
      id: "w3_12",
      text: "Mối quan hệ giữa 'Lửa' và 'Khói' là ví dụ của sự liên quan nào?",
      options: ["Liên quan cùng bản thể", "Liên quan sinh khởi", "Mâu thuẫn trực tiếp", "Mâu thuẫn loại trừ"],
      correctAnswerIndex: 1,
      explanation: "Khói sinh ra từ lửa, có tính phụ thuộc nhân quả.",
      hint: "Cái này tạo ra cái kia."
    },
    {
      id: "w3_13",
      text: "Thường và Vô thường là ví dụ của loại mâu thuẫn nào?",
      options: ["Mâu thuẫn không cùng tồn tại", "Mâu thuẫn trực tiếp", "Liên quan bản thể", "Mâu thuẫn gián tiếp"],
      correctAnswerIndex: 1,
      explanation: "Cái gì thường thì không vô thường, chúng triệt tiêu nhau trực tiếp.",
      hint: "Xung đột 100% về mặt định nghĩa."
    },
    {
      id: "w3_14",
      text: "Quạ và Cú là ví dụ của loại mâu thuẫn nào?",
      options: ["Mâu thuẫn trực tiếp", "Mâu thuẫn không cùng tồn tại và loại trừ lẫn nhau", "Liên quan sinh khởi", "Mâu thuẫn logic"],
      correctAnswerIndex: 1,
      explanation: "Chúng loại trừ nhau trong tự nhiên nhưng không phải là cặp phủ định định nghĩa trực tiếp.",
      hint: "Hai kẻ thù tự nhiên."
    },
    {
      id: "w3_15",
      text: "Môn Nhiếp Loại Học có nguồn gốc từ đâu?",
      options: ["Triết học phương Tây", "Nhân minh học / Lượng luận", "Tâm lý học hiện đại", "Kinh Vệ Đà"],
      correctAnswerIndex: 1,
      explanation: "Được rút ra từ Lượng luận (logic học Phật giáo).",
      hint: "Môn học về lý luận."
    },
    {
      id: "w3_16",
      text: "Mục đích thực tiễn của môn Nhiếp Loại Học là gì?",
      options: ["Tính toán siêu hạng", "Ghi nhớ hình ảnh", "Rèn luyện phản xạ tư duy nhanh, nhận định đúng sai lập tức", "Học cách bay lượn"],
      correctAnswerIndex: 2,
      explanation: "Giúp não bộ nhạy bén, sử dụng logic bác bỏ cái sai nhanh chóng.",
      hint: "Luyện não bộ phản ứng nhanh."
    },
    {
      id: "w3_17",
      text: "Trong ứng dụng luật nhân quả, muốn đạt quả vị Phật thì cần gieo nhân gì?",
      options: ["Chỉ cần cúng dường nhiều tiền", "Cầu xin thần linh", "Nhân phải tương xứng, loại trừ lỗi lầm, học rộng hiểu nhiều", "Chỉ cần ngủ nhiều"],
      correctAnswerIndex: 2,
      explanation: "Nhân chân chánh thì quả chân chánh, cần thực hành tu tập và trí tuệ tương xứng.",
      hint: "Nhân nào quả nấy."
    },
    {
      id: "w3_18",
      text: "Liên quan 'cùng bản thể' được chia thành mấy phương diện?",
      options: ["1", "2", "3", "4"],
      correctAnswerIndex: 1,
      explanation: "Gồm: tính bình đẳng với nhau và quan hệ bao quát (cái lớn bao cái nhỏ).",
      hint: "Hai khía cạnh của một bản thể."
    },
    {
      id: "w3_19",
      text: "Ví dụ khái niệm 'Người' bao quát 'Người Tạng' thuộc loại liên quan nào?",
      options: ["Liên quan sinh khởi", "Quan hệ bao quát (thuộc Liên quan cùng bản thể)", "Mâu thuẫn trực tiếp", "Mâu thuẫn loại trừ"],
      correctAnswerIndex: 1,
      explanation: "Tập hợp lớn chứa tập hợp nhỏ, có cùng bản thể.",
      hint: "Tập hợp con."
    },
    {
      id: "w3_20",
      text: "Ngày giờ sinh ở kiếp trước của một người thuộc loại đối tượng nào?",
      options: ["Hiện lượng", "Cực kỳ ẩn tế", "Trực tiếp", "Ít ẩn tế"],
      correctAnswerIndex: 1,
      explanation: "Không thể thấy, không thể suy luận thông thường, chỉ bậc toàn giác mới biết.",
      hint: "Vượt ngoài khả năng của người phàm."
    }
  ],
  "week4": [
      {
          "id": "w4_1",
          "text": "Trong khảo sát đối tượng nhận thức (sở tri), các đối tượng được chia thành mấy loại?",
          "options": [
              "2 loại",
              "3 loại",
              "4 loại",
              "5 loại"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Sở tri được chia thành ba loại: đối tượng nhận thức trực tiếp, đối tượng nhận thức qua suy luận, và đối tượng cực kỳ ẩn tế.",
          "hint": "Gồm trực tiếp, suy luận và cực kỳ ẩn tế."
      },
      {
          "id": "w4_2",
          "text": "Đối với các đối tượng cực kỳ ẩn tế, chúng ta cần nương tựa vào phương tiện nhận thức nào?",
          "options": [
              "Hiện lượng",
              "Tỷ lượng",
              "Thánh ngôn lượng",
              "Thế gian lượng"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Đối tượng cực kỳ ẩn tế không thể tiếp cận bằng giác quan hay suy luận thông thường, mà cần Thánh ngôn lượng – lời dạy chuẩn xác, đáng tin cậy.",
          "hint": "Lời nói của bậc giác ngộ đáng tin cậy."
      },
      {
          "id": "w4_3",
          "text": "Nguyên tắc 'Y nghĩa bất y ngữ' trong Tứ y khuyên hành giả điều gì?",
          "options": [
              "Chỉ học thuộc lòng từ ngữ",
              "Nương vào ý nghĩa chân thật, không chấp vào ngôn từ bề ngoài",
              "Chỉ tin người có danh tiếng",
              "Không cần đọc sách"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Y nghĩa bất y ngữ dạy chúng ta tập trung vào nghĩa lý cốt lõi, không để vẻ hào nhoáng hay sự vụng về của câu chữ đánh lừa.",
          "hint": "Ý nghĩa quan trọng hơn cách hành văn."
      },
      {
          "id": "w4_4",
          "text": "Thuật ngữ 'Nhiếp loại học' (Dura) trong Phật giáo Tây Tạng tương ứng với môn học nào?",
          "options": [
              "Thiền định học",
              "Logic học / Luận lý học",
              "Thiên văn học",
              "Lịch sử học"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Nhiếp loại học (Dura) là logic học Phật giáo, rút gọn từ các bộ Lượng luận đồ sộ để huấn luyện người học tranh biện và tư duy chuẩn xác.",
          "hint": "Môn học rèn luyện tư duy biện luận."
      },
      {
          "id": "w4_5",
          "text": "Trong tranh biện Nhiếp loại học, một 'Tam đoạn luận' chuẩn xác cần có 3 thành tố nào?",
          "options": [
              "Chủ đề, Lý do, Kết luận / Minh chứng",
              "Tiền đề, Giả thuyết, Dự đoán",
              "Kinh nghiệm, Cảm xúc, Lý trí",
              "Ý thức, Căn trần, Thức giác"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Một lập luận Phật giáo gồm Chủ thể khảo sát (pháp hữu sự), Thuộc tính cần chứng minh (kết luận) và Lý do minh chứng (nhân).",
          "hint": "Gồm pháp khảo sát, lý do thành lập và kết luận."
      },
      {
          "id": "w4_6",
          "text": "Trong bài tập tranh biện 'Âm thanh là vô thường, vì nó là pháp được tạo tác', 'pháp được tạo tác' đóng vai trò gì?",
          "options": [
              "Chủ thể (Tiền đề)",
              "Lý do (Nhân)",
              "Kết luận (Quả)",
              "Phản đề"
          ],
          "correctAnswerIndex": 1,
          "explanation": "'Vì nó là pháp được tạo tác' chính là lý do (nhân) dùng để chứng minh âm thanh là vô thường.",
          "hint": "Bộ phận đi sau từ 'vì'."
      },
      {
          "id": "w4_7",
          "text": "Nếu người trả lời trong tranh biện đồng ý hoàn toàn với lập luận của đối phương, họ sẽ dùng từ phản hồi nào?",
          "options": [
              "Lý do không thành lập",
              "Không biến mãn",
              "Đồng ý (Chấp nhận)",
              "Không biết"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Trong quy luật tranh biện, khi đồng thuận hoàn toàn với tiền đề và kết luận, người đáp sẽ nói 'Đồng ý' (Dod).",
          "hint": "Sự chấp thuận."
      },
      {
          "id": "w4_8",
          "text": "Nếu đối phương đưa ra lý do không đúng thực tế, người trả lời sẽ đáp lại thế nào?",
          "options": [
              "Đồng ý",
              "Lý do không thành lập (Nhân bất thành)",
              "Không biến mãn",
              "Im lặng"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Nếu lý do đưa ra không áp dụng được cho chủ thể hoặc sai sự thật, người đáp nói 'Lý do không thành lập'.",
          "hint": "Bác bỏ trực tiếp lý do."
      },
      {
          "id": "w4_9",
          "text": "Mục đích tối hậu của việc học tư duy Logic và Nhiếp loại học trong Phật giáo là gì?",
          "options": [
              "Để thắng trong các cuộc tranh cãi",
              "Rèn luyện trí tuệ sắc bén, loại trừ định kiến và thấy rõ thực tại",
              "Học để trở thành học giả nổi tiếng",
              "Học để nhớ nhiều từ vựng cổ"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Mục đích là rèn luyện phản xạ nhận thức chân thật, dùng trí tuệ phá tan màn sương mù vô minh và định kiến sai lầm.",
          "hint": "Hướng tới trí tuệ và sự giải thoát khỏi sai lầm."
      },
      {
          "id": "w4_10",
          "text": "Khi khảo sát một vấn đề, nếu dựa vào người nói nổi tiếng thay vì xem xét tính chân thực của lời dạy thì phạm vào điều nào trong Tứ y?",
          "options": [
              "Y pháp bất y nhân",
              "Y nhân bất y pháp (đi ngược lại Tứ y)",
              "Y trí bất y thức",
              "Y liễu nghĩa"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Đó là đi ngược lại 'Y pháp bất y nhân' (hãy dựa vào giáo pháp, chớ dựa vào con người).",
          "hint": "Tin vào uy quyền cá nhân thay vì chân lý."
      }
  ],
  "week5": [
      {
          "id": "w5_1",
          "text": "Mối quan hệ giữa 'Chủ thể nhận thức' và 'Đối tượng nhận thức' được định nghĩa như thế nào?",
          "options": [
              "Độc lập hoàn toàn, không liên can gì nhau",
              "Tương quan phụ thuộc, nhận thức chỉ phát sinh khi có sự tiếp xúc giữa chủ thể và đối tượng",
              "Đối tượng sinh ra trước hàng triệu năm và chi phối hoàn toàn tâm thức",
              "Tâm thức tự tạo ra ảo giác chứ không có đối tượng nào"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Chủ thể (tâm thức) và đối tượng (sở tri) luôn nương nhau mà hiển lộ và thành lập nhận thức.",
          "hint": "Tính tương thuộc hai chiều."
      },
      {
          "id": "w5_2",
          "text": "Theo Phật giáo, một pháp được gọi là 'tồn tại' khi thỏa mãn điều kiện cơ bản nào?",
          "options": [
              "Mắt người phàm phải nhìn thấy được",
              "Được nhận biết bởi một nhận thức đúng đắn (lượng tri)",
              "Được ghi chép lại trong sách khoa học cổ",
              "Phải có khối lượng và kích thước"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Tiêu chuẩn tồn tại trong Lượng luận: 'Sở tri' hay 'pháp hiện hữu' là những gì được nhận biết bởi lượng (nhận thức đúng đắn).",
          "hint": "Được chứng thực bởi nhận thức chân thực (lượng)."
      },
      {
          "id": "w5_3",
          "text": "Lông rùa, sừng thỏ là những ví dụ kinh điển tượng trưng cho điều gì?",
          "options": [
              "Pháp vô vi",
              "Pháp hoàn toàn không tồn tại (phi pháp, vô sở tri)",
              "Pháp cực kỳ ẩn tế",
              "Pháp vi tế của khoa học"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Lông rùa sừng thỏ là ví dụ về những thứ hoàn toàn không có thật, không thể được chứng thực bởi bất kỳ nhận thức chuẩn xác nào.",
          "hint": "Cái không hề có trong thực tế."
      },
      {
          "id": "w5_4",
          "text": "Theo định nghĩa trong triết học Phật giáo, 'Pháp hữu vi' là gì?",
          "options": [
              "Pháp thường hằng không biến đổi",
              "Pháp do nhân duyên hòa hợp sinh ra và có sinh diệt trong từng sát-na",
              "Pháp chỉ tồn tại trong suy nghĩ",
              "Hư không vô biên"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Hữu vi nghĩa là được tạo tác bởi các nguyên nhân và điều kiện (nhân duyên), luôn luôn biến đổi.",
          "hint": "Do nhân duyên tạo tác."
      },
      {
          "id": "w5_5",
          "text": "'Pháp vô vi' có đặc tính cốt lõi nào?",
          "options": [
              "Có sinh có diệt liên tục",
              "Không do nguyên nhân điều kiện sinh khởi, không biến đổi (thường hằng)",
              "Có màu sắc và mùi vị",
              "Cần tiêu thụ năng lượng để tồn tại"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Pháp vô vi là pháp không do nhân duyên tạo tác, không bị chi phối bởi quy luật sinh diệt sát-na.",
          "hint": "Bản chất không sinh diệt."
      },
      {
          "id": "w5_6",
          "text": "Khái niệm 'Nhị đế' bao gồm hai mức độ sự thật nào?",
          "options": [
              "Tục đế (Chân lý tương đối) và Chân đế (Chân lý tuyệt đối)",
              "Hiện lượng đế và Tỷ lượng đế",
              "Phàm phu đế và Bồ tát đế",
              "Nhân quả đế và Luân hồi đế"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Nhị đế gồm Thế tục đế (sự thật hiển hiện theo quy ước thế gian) và Thắng nghĩa đế (bản chất rốt ráo của vạn pháp).",
          "hint": "Tục đế và Chân đế."
      },
      {
          "id": "w5_7",
          "text": "Để kiểm chứng một sự thật, lời dạy nào của Đức Phật thường được nhắc tới?",
          "options": [
              "Hãy tin tuyệt đối vào thầy của mình",
              "Như người thợ vàng thử vàng bằng cách cắt, đốt, mài – hãy kiểm tra lời ta dạy trước khi tin",
              "Chỉ cần cầu nguyện chân thành là thấy được chân lý",
              "Đừng bao giờ nghi ngờ kinh điển"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Đức Phật ví người học đạo như thợ luyện vàng: phải dùng lý luận và kinh nghiệm kiểm chứng chứ không tin mù quáng vì lòng kính trọng.",
          "hint": "Hình ảnh người thợ thử vàng."
      },
      {
          "id": "w5_8",
          "text": "Ba tiêu chuẩn của một nhận thức chuẩn xác (Lượng) là gì?",
          "options": [
              "Mới mẻ, không lầm lẫn, và xác định rõ đối tượng",
              "Lâu đời, truyền thống, và được số đông công nhận",
              "Ngắn gọn, dễ nhớ, và hấp dẫn",
              "Bí truyền, huyền bí, và linh thiêng"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Lượng tri phải là nhận thức không sai lầm (bất vọng), mới mẻ và có năng lực diệt trừ nghi hoặc về đối tượng.",
          "hint": "Không sai lệch và sáng tỏ đối tượng."
      },
      {
          "id": "w5_9",
          "text": "Ý nghĩa của việc phân biệt giữa 'Hiện tượng' và 'Bản chất thực tại' là gì?",
          "options": [
              "Hiện tượng luôn trùng khớp 100% với bản chất thực tại",
              "Hiện tượng biểu hiện bên ngoài nhiều khi đánh lừa các giác quan, cần tư duy sâu để thấy bản chất",
              "Không có bản chất thực tại nào cả",
              "Không cần quan sát hiện tượng"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Vạn pháp hiển hiện dường như có tự tánh độc lập vững chắc, nhưng bản chất là duyên khởi và vô tự tính.",
          "hint": "Hiện tượng có thể đánh lừa mắt thấy tai nghe."
      },
      {
          "id": "w5_10",
          "text": "Khoa học và Phật giáo gặp nhau ở điểm căn bản nào trong phương pháp tiếp cận?",
          "options": [
              "Cùng dựa trên đức tin vào thần linh sáng thế",
              "Cùng coi trọng quan sát thực nghiệm, tư duy logic và kiểm chứng khách quan",
              "Cùng sử dụng kinh viện cổ xưa để định đoạt chân lý",
              "Cùng bắt buộc phải xuất gia tu tập"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Cả hai đều tôn trọng sự thật khách quan, dựa vào quan sát, quy nạp, suy luận và phản bác giả thuyết sai lầm.",
          "hint": "Tinh thần thực nghiệm và khảo sát lý tính."
      }
  ],
  "week6": [
      {
          "id": "w6_1",
          "text": "Tập 1 và Tập 2 của bộ sách Khoa học và Triết học Phật giáo Tổng tập gồm bao nhiêu chương?",
          "options": [
              "10 chương",
              "12 chương",
              "16 chương",
              "20 chương"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Hai tập đầu tiên gồm 12 chương, bao quát toàn bộ thế giới vật chất và các hiện tượng tâm thức.",
          "hint": "Một tá (12)."
      },
      {
          "id": "w6_2",
          "text": "Trong 12 chương, nội dung được quy nạp thành mấy chủ đề lớn?",
          "options": [
              "3 chủ đề",
              "4 chủ đề",
              "5 chủ đề",
              "7 chủ đề"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Toàn bộ hệ thống được chia thành 5 chủ đề chính để tiện cho việc khảo sát và nghiên cứu học tập.",
          "hint": "Năm chủ đề lớn."
      },
      {
          "id": "w6_3",
          "text": "Hệ thống '18 giới' được cấu thành từ 3 nhóm yếu tố nào?",
          "options": [
              "6 Căn, 6 Trần, 6 Thức",
              "3 Thời, 3 Cõi, 12 Nhân duyên",
              "4 Đại, 5 Uẩn, 9 Phạm trù",
              "6 Căn, 6 Biến hành, 6 Tùy phiền não"
          ],
          "correctAnswerIndex": 0,
          "explanation": "18 giới = 6 căn (giác quan) + 6 trần (đối tượng) + 6 thức (nhận thức tương ứng).",
          "hint": "6 Căn, 6 Trần, 6 Thức."
      },
      {
          "id": "w6_4",
          "text": "'12 xứ' trong Phật giáo bao gồm những yếu tố nào?",
          "options": [
              "12 nhân duyên",
              "6 nội xứ (6 căn) và 6 ngoại xứ (6 trần)",
              "12 tháng trong năm",
              "12 bộ kinh điển"
          ],
          "correctAnswerIndex": 1,
          "explanation": "12 xứ gồm 6 nội xứ (mắt, tai, mũi, lưỡi, thân, ý) và 6 ngoại xứ (sắc, thanh, hương, vị, xúc, pháp).",
          "hint": "6 căn + 6 trần."
      },
      {
          "id": "w6_5",
          "text": "Từ 'Xứ' (Ayatana) trong Phật học có nghĩa căn bản là gì?",
          "options": [
              "Nơi chốn cư ngụ của loài người",
              "Cửa ngõ, nguồn gốc phát sinh và gia tăng tâm thức",
              "Tên của một cõi trời",
              "Một phép tu luyện"
          ],
          "correctAnswerIndex": 1,
          "explanation": "'Xứ' mang ý nghĩa là cửa ngõ hay nơi phát khởi, nơi mà nhận thức của tâm và tâm sở nương vào đó để sinh khởi.",
          "hint": "Nơi phát sinh tâm thức."
      },
      {
          "id": "w6_6",
          "text": "Khái niệm 'Pháp thường hằng' trong phân loại đối tượng nhận thức có nghĩa là gì?",
          "options": [
              "Tồn tại mãi mãi không bao giờ chết của linh hồn",
              "Pháp không biến đổi trong dòng thời gian, không do nhân duyên sinh diệt",
              "Mặt trời và mặt trăng",
              "Một đồ vật bằng kim cương"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Thường hằng trong triết học Phật giáo chỉ các pháp không chịu sự sinh diệt từng sát-na như Hư không vô vi hay Tính không.",
          "hint": "Không sinh không diệt theo thời gian."
      },
      {
          "id": "w6_7",
          "text": "Sự khác biệt cốt lõi giữa 'Pháp khẳng định' (thành lập pháp) và 'Pháp phủ định' (già pháp) là gì?",
          "options": [
              "Pháp khẳng định là tốt, phủ định là xấu",
              "Pháp phủ định nhận thức đối tượng bằng cách bài trừ cái khác; pháp khẳng định trực tiếp hiển lộ mà không cần bài trừ",
              "Pháp khẳng định chỉ dành cho người tu",
              "Không có sự khác biệt"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Phủ định pháp (phủ định môn) nhận thức đối tượng thông qua sự loại trừ phần trực tiếp trái nghịch, trong khi khẳng định môn trực tiếp nắm bắt.",
          "hint": "Thông qua bài trừ đối tượng nghịch hay trực tiếp hiển lộ."
      },
      {
          "id": "w6_8",
          "text": "Ví dụ nào sau đây thuộc về 'Phủ định pháp' (phủ định môn)?",
          "options": [
              "Màu xanh",
              "Cái bàn gỗ",
              "Tính không (vắng mặt tự tánh)",
              "Âm thanh tiếng chuông"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Tính không (Śūnyatā) là một phi phiếm chỉ phủ định (ứng già), nhận biết qua việc phủ định hoàn toàn sự tồn tại của tự tánh độc lập.",
          "hint": "Sự vắng mặt của một yếu tố hư ngụy."
      },
      {
          "id": "w6_9",
          "text": "Tại sao việc hiểu 18 giới lại giúp phá trừ chấp ngã?",
          "options": [
              "Vì thấy toàn bộ con người chỉ là sự tương tác giữa căn, trần, thức mà không hề có một 'cái tôi' độc lập bất biến",
              "Vì 18 giới là con số thần bí",
              "Vì người học sẽ quên đi cơ thể mình",
              "Vì các vị thần bảo hộ 18 giới"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Phân tích 18 giới cho thấy thân tâm chỉ là các tập hợp nhân duyên vật chất và tinh thần chuyển biến, không có linh hồn cố định.",
          "hint": "Thấy rõ cơ chế hợp thành mà không có tự ngã."
      },
      {
          "id": "w6_10",
          "text": "Ý căn khác với 5 căn còn lại (mắt, tai, mũi, lưỡi, thân) ở điểm nào?",
          "options": [
              "Ý căn có màu sắc rực rỡ",
              "5 căn thuộc về sắc pháp (tịnh sắc căn), còn Ý căn thuộc về tâm thức (sát-na thức trước diệt đi làm căn)",
              "Ý căn nằm ở bàn chân",
              "Ý căn không có khả năng nhận thức"
          ],
          "correctAnswerIndex": 1,
          "explanation": "5 căn giác quan là cấu trúc vật chất vi tế (tịnh sắc), trong khi Ý căn chính là sát-na tâm thức vừa diệt đóng vai trò sở y cho ý thức sau.",
          "hint": "Ý căn thuộc về dòng tâm thức chứ không phải sắc thể thô."
      }
  ],
  "week7": [
      {
          "id": "w7_1",
          "text": "Theo định nghĩa của Kinh bộ và Câu-xá luận, 'Sắc pháp' (Rūpa) được định nghĩa là gì?",
          "options": [
              "Những gì có thể suy nghĩ được",
              "Những gì có tính biến ngại (bị ngăn ngại và biến hoại khi va chạm)",
              "Những gì mắt nhìn thấy được mà thôi",
              "Năng lượng vô hình"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Định nghĩa cốt lõi của sắc pháp trong luận điển là 'biến ngại' (biến đổi, hư hoại và cản trở, chiếm cứ không gian).",
          "hint": "Có tính ngăn ngại và dễ bị va chạm phá hoại."
      },
      {
          "id": "w7_2",
          "text": "Ba tính riêng (đặc tính riêng) của sắc pháp bao gồm những gì?",
          "options": [
              "Nóng, lạnh, ẩm",
              "Biến ngại, có phương phần (chiếm không gian đa chiều), và làm căn cứ cho sự xúc chạm",
              "Sinh, trụ, diệt",
              "Vô thường, khổ, vô ngã"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Sắc pháp có 3 đặc tính riêng: biến ngại, chia được theo phương hướng (phương phần), và làm đối tượng cản trở/xúc chạm.",
          "hint": "Chiếm không gian, ngăn ngại và có phương hướng."
      },
      {
          "id": "w7_3",
          "text": "Thuật ngữ 'Phương phần' (dig-bhāga) áp dụng cho sắc pháp nghĩa là gì?",
          "options": [
              "Có phương hướng và có thể phân chia thành các chiều không gian (đông, tây, nam, bắc, trên, dưới)",
              "Chỉ một vùng đất địa lý",
              "Một loại la bàn Phật giáo",
              "Phương tiện thiện xảo"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Bất kỳ vật thể vật chất nào cũng có kích thước và các phần theo các hướng, do đó có thể phân chia được.",
          "hint": "Có các phần theo phương hướng không gian."
      },
      {
          "id": "w7_4",
          "text": "Tâm thức có 'phương phần' (phần theo hướng không gian) giống như sắc pháp hay không?",
          "options": [
              "Có, tâm thức có chiều dài và chiều rộng",
              "Không, tâm thức không có hình tướng hay chiều không gian, chỉ có thời phần (sát-na trước - sau)",
              "Tâm thức hình vuông",
              "Tâm thức luôn nằm ở bán cầu não trái"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Tâm không có phương phần (không thể cắt góc đông tây của tâm thức), tâm chỉ có thời phần theo dòng chảy thời gian.",
          "hint": "Tâm thức vô hình tướng."
      },
      {
          "id": "w7_5",
          "text": "Ba tính chất chung của các pháp hữu vi (trong đó có sắc pháp) là gì?",
          "options": [
              "Thường, Lạc, Ngã",
              "Vô thường (sinh diệt từng sát-na), Duyên khởi (do nhân duyên), và Biến hoại",
              "Vàng, Bạc, Đồng",
              "Đất, Nước, Gió"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Tính chung của mọi pháp hữu vi là tính vô thường, do duyên tạo và chuyển biến không ngừng.",
          "hint": "Đặc tính vô thường duyên khởi."
      },
      {
          "id": "w7_6",
          "text": "Các thuật ngữ 'Sở tri' (Jñeya), 'Hiện hữu' (Sat), và 'Pháp' (Dharma) có quan hệ như thế nào trong Lượng luận?",
          "options": [
              "Hoàn toàn mâu thuẫn nhau",
              "Đồng nghĩa và bao quát lẫn nhau (cái này có thì cái kia có)",
              "Sở tri rộng hơn Pháp rất nhiều",
              "Chỉ có Pháp mới là Hiện hữu"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Trong Nhân minh học, Sở tri, Hiện hữu và Pháp là những danh từ đồng nghĩa chỉ bất cứ điều gì có thể nhận thức được bởi lượng tri.",
          "hint": "Đồng nghĩa và tương đương phạm vi."
      },
      {
          "id": "w7_7",
          "text": "Theo quan điểm Trung Quán tông, sắc pháp có tồn tại thực sự từ phía chính nó (tự tánh độc lập) hay không?",
          "options": [
              "Có tự tánh vững chắc độc lập",
              "Không, sắc pháp chỉ tồn tại dưới dạng danh ngôn giả lập dựa trên sự quy gán của tâm thức",
              "Chỉ có kim cương mới có tự tánh",
              "Chỉ có nguyên tử mới có tự tánh"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Trung Quán tông bác bỏ tự tánh của sắc pháp, khẳng định vật chất chỉ hiện hữu như sự thiết lập danh ngôn tương đãi.",
          "hint": "Duyên khởi tính không, giả danh thiết lập."
      },
      {
          "id": "w7_8",
          "text": "Sắc pháp được chia thành 2 nhóm lớn cơ bản nào đối với một con người?",
          "options": [
              "Sắc đẹp và Sắc xấu",
              "Nội sắc (các giác quan của cơ thể) và Ngoại sắc (đối tượng vật chất bên ngoài)",
              "Sắc sáng và Sắc tối",
              "Sắc hữu hình và Sắc thần bí"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Nội sắc là 5 căn tiếp nhận cảm giác trong thân thể; Ngoại sắc là trần cảnh bên ngoài thế giới.",
          "hint": "Bên trong thân thể và bên ngoài thế giới."
      },
      {
          "id": "w7_9",
          "text": "Ví dụ về 'biến ngại' của sắc pháp được thể hiện rõ nhất khi nào?",
          "options": [
              "Khi hai vật thể rắn va vào nhau và không thể cùng chiếm một vị trí không gian tại một thời điểm",
              "Khi chúng ta suy nghĩ về tương lai",
              "Khi ánh trăng chiếu trên mặt hồ",
              "Khi nhớ lại một giấc mơ"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Tính biến ngại thể hiện ở chỗ vật chất cản trở nhau, vật này ở đây thì vật khác không thể cùng chiếm chỗ đó được.",
          "hint": "Cản trở vị trí không gian."
      },
      {
          "id": "w7_10",
          "text": "Việc hiểu thấu đáo đặc tính của sắc pháp giúp hành giả đạt được điều gì trên lộ trình tâm linh?",
          "options": [
              "Khả năng đi xuyên tường",
              "Phá vỡ sự chấp thủ cứng nhắc vào thân thể và vật chất, nhận rõ tính chất duyên sinh vô thường",
              "Khả năng biến sỏi đá thành vàng",
              "Tránh được việc ăn uống"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Khi thấy sắc pháp cấu thành từ các yếu tố duyên hợp biến hoại, tâm sẽ giảm bớt ái nhiễm và bám chấp vào thân xác.",
          "hint": "Buông xả bám chấp vào thân tướng."
      }
  ],
  "week8": [
      {
          "id": "w8_1",
          "text": "Theo Đại thừa A-tỳ-đạt-ma Tập luận, sắc pháp được chia thành mấy nhóm lớn?",
          "options": [
              "2 nhóm",
              "3 nhóm",
              "4 nhóm",
              "6 nhóm"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Tập luận phân sắc pháp thành 4 nhóm: Đại chủng, Sở tạo sắc, Tịnh sắc căn và Sắc thuộc pháp xứ.",
          "hint": "Bốn nhóm sắc pháp."
      },
      {
          "id": "w8_2",
          "text": "Năm ngoại xứ (5 đối tượng giác quan bên ngoài) gồm những gì?",
          "options": [
              "Mắt, tai, mũi, lưỡi, thân",
              "Sắc, thanh, hương, vị, xúc",
              "Đất, nước, lửa, gió, không",
              "Buồn, vui, giận, hờn, sợ"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Năm ngoại xứ là 5 đối tượng: sắc (hình sắc màu sắc), thanh (âm thanh), hương (mùi), vị (vị nếm), xúc (cảm giác va chạm).",
          "hint": "Sắc, thanh, hương, vị, xúc."
      },
      {
          "id": "w8_3",
          "text": "Đối tượng nào sau đây là 'Sở duyên cảnh' trực tiếp của mắt (Nhãn thức)?",
          "options": [
              "Âm thanh tiếng chim hót",
              "Hình sắc và màu sắc (Sắc xứ)",
              "Vị ngọt của mật ong",
              "Hương hoa sen"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Mắt chỉ có thể nhận thức được đối tượng sắc cảnh (màu sắc và hình dạng).",
          "hint": "Đối tượng thị giác."
      },
      {
          "id": "w8_4",
          "text": "Âm thanh (Thanh xứ) được định nghĩa căn bản trong luận lý học là gì?",
          "options": [
              "Ý nghĩ thầm kín trong đầu",
              "Đối tượng được tiếp nhận và cảm thụ bởi Nhĩ thức (tai)",
              "Bức xạ điện từ",
              "Luồng gió thổi"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Thanh xứ là đối tượng chuyên biệt được thụ cảm bởi thính giác (nhĩ thức).",
          "hint": "Đối tượng của tai."
      },
      {
          "id": "w8_5",
          "text": "Tại sao một người bị mù mắt từ nhỏ không thể có được 'Nhãn thức' phân biệt màu sắc bình thường?",
          "options": [
              "Vì thiếu nhãn căn (tịnh sắc căn ở mắt bị tổn thương)",
              "Vì người đó thiếu ý thức",
              "Vì thế giới bên ngoài không có màu sắc",
              "Vì không có nghiệp"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Nhận thức chỉ phát sinh khi đủ 3 yếu tố: Cảnh (đối tượng), Căn (giác quan tiếp nhận) và Tác ý (sự chú ý). Thiếu tịnh sắc căn thì thức mắt không sinh.",
          "hint": "Thiếu giác quan tiếp nhận tương ứng."
      },
      {
          "id": "w8_6",
          "text": "Hương xứ (mùi) được phân chia cơ bản thành những loại nào?",
          "options": [
              "Hương tốt (thơm), Hương xấu (hôi), và Hương trung tính (không thơm không hôi)",
              "Chỉ có hương thơm nhân tạo",
              "Hương vị giác và thính giác",
              "Hương ánh sáng"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Các bộ luận thường phân chia mùi thành: hảo hương (mùi dễ chịu), ố hương (mùi khó chịu) và mùi bình đẳng (trung tính).",
          "hint": "Thơm, hôi và trung tính."
      },
      {
          "id": "w8_7",
          "text": "Vị xứ (vị nếm) theo truyền thống A-tỳ-đạt-ma gồm mấy vị chính?",
          "options": [
              "3 vị",
              "6 vị (ngọt, chua, đắng, cay, mặn, chát)",
              "10 vị",
              "12 vị"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Truyền thống Phật học liệt kê 6 vị cơ bản: ngọt, chua, mặn, đắng, cay và chát.",
          "hint": "6 vị ẩm thực cơ bản."
      },
      {
          "id": "w8_8",
          "text": "Tại sao trong tranh biện Phật giáo, người ta dùng câu hỏi 'Màu trắng có phải là sắc không?' để rèn luyện tư duy?",
          "options": [
              "Để phân biệt giữa khái niệm bao hàm (Sắc là giống loài rộng) và tiểu loại (màu trắng là hiển sắc cụ thể)",
              "Vì màu trắng là màu tâm linh",
              "Để kiểm tra thị lực",
              "Vì màu trắng không có hình tướng"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Đây là bài tập logic kinh điển để phân biệt tập hợp cha (sắc pháp) và tập hợp con (màu sắc cụ thể), rèn luyện sự chuẩn xác về logic bao hàm.",
          "hint": "Phân biệt tập hợp rộng và phần tử con."
      },
      {
          "id": "w8_9",
          "text": "Khi ta ngửi thấy mùi khói và suy luận rằng 'ở kia có lửa', nhận thức về lửa thuộc loại lượng nào?",
          "options": [
              "Hiện lượng trực tiếp",
              "Tỷ lượng (suy luận)",
              "Thánh ngôn lượng",
              "Sai lầm hoàn toàn"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Thấy khói mà biết có lửa là ví dụ kinh điển của Tỷ lượng (suy đoán dựa trên quan hệ nhân quả tất yếu).",
          "hint": "Nhận thức thông qua suy luận gián tiếp."
      },
      {
          "id": "w8_10",
          "text": "Xúc xứ khác với 4 ngoại xứ còn lại (sắc, thanh, hương, vị) ở điểm đặc biệt nào?",
          "options": [
              "Xúc xứ không có thật",
              "Xúc xứ bao gồm cả tứ đại chủng trực tiếp (đất, nước, lửa, gió) lẫn các trạng thái sở tạo (nặng, nhẹ, trơn, nhám...)",
              "Xúc xứ chỉ cảm nhận qua ý nghĩ",
              "Xúc xứ chỉ tồn tại trong nước"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Xúc xứ là đối tượng duy nhất chứa trực tiếp 4 đại chủng cùng 7 loại sở tạo xúc chạm như trơn nhám, nặng nhẹ, đói khát...",
          "hint": "Bao gồm cả tứ đại và sở tạo xúc."
      }
  ],
  "week9": [
      {
          "id": "w9_1",
          "text": "Trong Sắc xứ, Phật học phân chia thành hai nhóm hình thái chính nào?",
          "options": [
              "Hiển sắc (màu sắc) và Hình sắc (hình dáng kích thước)",
              "Sắc đẹp và Sắc xấu",
              "Sắc ban ngày và Sắc ban đêm",
              "Sắc tự nhiên và Sắc nhân tạo"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sắc xứ được chia thành Hiển sắc (varna-rūpa - màu sắc như xanh, vàng, đỏ, trắng) và Hình sắc (samsthāna-rūpa - hình dài, ngắn, vuông, tròn...).",
          "hint": "Màu sắc và hình dáng."
      },
      {
          "id": "w9_2",
          "text": "Hiển sắc căn bản gồm có 4 màu gốc nào?",
          "options": [
              "Xanh, Vàng, Đỏ, Trắng",
              "Đen, Nâu, Xám, Tím",
              "Cam, Hồng, Lục, Lam",
              "Vàng, Bạc, Đồng, Sắt"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Bốn màu gốc cơ bản trong A-tỳ-đạt-ma là Xanh, Vàng, Đỏ, Trắng. Các màu khác được coi là sắc pha trộn hoặc phụ thuộc.",
          "hint": "Xanh, Vàng, Đỏ, Trắng."
      },
      {
          "id": "w9_3",
          "text": "Thuật ngữ 'Cực quýnh sắc' (Parama-dūratva) trong phân loại sắc chỉ điều gì?",
          "options": [
              "Màu sắc cực kỳ chói lọi",
              "Sắc ở khoảng không gian cách biệt vô cùng xa xôi (như ánh sáng bầu trời xanh hay các vì sao xa)",
              "Sắc của loài hoa quý",
              "Sắc của vàng ròng"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Cực quýnh sắc là sắc thanh tịnh ở không gian cực xa, như khoảng không bao la trong vắt nhìn từ mặt đất.",
          "hint": "Sắc ở khoảng cách cực xa."
      },
      {
          "id": "w9_4",
          "text": "Khi so sánh với Khoa học quang học hiện đại, màu sắc mà mắt người cảm nhận tương ứng với yếu tố vật lý nào?",
          "options": [
              "Khối lượng của vật thể",
              "Các bước sóng điện từ khác nhau của ánh sáng khả kiến được não bộ phiên dịch",
              "Tốc độ của gió",
              "Nhiệt độ sôi của nước"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Vật lý hiện đại chỉ ra màu sắc tương ứng với các dải bước sóng ánh sáng (quang phổ) kích thích các tế bào que và nón trên võng mạc.",
          "hint": "Bước sóng quang phổ ánh sáng."
      },
      {
          "id": "w9_5",
          "text": "Theo A-tỳ-đạt-ma Câu-xá luận, Thanh xứ (âm thanh) được phân thành bao nhiêu loại?",
          "options": [
              "4 loại",
              "8 loại",
              "11 loại",
              "16 loại"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Câu-xá luận phân thanh xứ thành 8 loại dựa trên 3 tiêu chí: do hữu tình hay phi tình phát ra, có biểu thị ý nghĩa hay không, và âm thanh vừa lòng hay trái ý.",
          "hint": "Tám loại (2x2x2)."
      },
      {
          "id": "w9_6",
          "text": "Theo Đại thừa A-tỳ-đạt-ma Tập luận, Thanh xứ được chi tiết hóa thành bao nhiêu loại?",
          "options": [
              "8 loại",
              "11 loại",
              "15 loại",
              "20 loại"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Tập luận phân loại thanh xứ thành 11 loại, bổ sung thêm các sắc thái biểu đạt và phát khởi phức hợp.",
          "hint": "11 loại."
      },
      {
          "id": "w9_7",
          "text": "Tiếng suối chảy, tiếng sấm sét thuộc loại âm thanh nào?",
          "options": [
              "Âm thanh phát ra từ sinh vật hữu tình",
              "Âm thanh phát ra từ vật vô tình (phi chấp thọ đại chủng phát khởi)",
              "Âm thanh có ngôn ngữ rõ ràng",
              "Âm thanh do tưởng tượng"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Tiếng sấm sét hay tiếng suối reo do giới tự nhiên không có ý thức tạo ra nên gọi là phi chấp thọ đại chủng sinh thanh.",
          "hint": "Từ giới tự nhiên vô tri."
      },
      {
          "id": "w9_8",
          "text": "Lời nói giảng bài của một vị giáo sư thuộc loại âm thanh nào?",
          "options": [
              "Âm thanh do hữu tình tạo ra và có biểu thị ý nghĩa ngôn ngữ",
              "Âm thanh phi tình vô nghĩa",
              "Âm thanh không thể nghe được",
              "Âm thanh hư cấu"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Do thân tâm người sống (chấp thọ đại chủng) phát ra và truyền tải khái niệm ngôn ngữ (hữu biểu thanh).",
          "hint": "Từ con người có ý nghĩa truyền đạt."
      },
      {
          "id": "w9_9",
          "text": "Âm thanh có phải là pháp thường hằng không?",
          "options": [
              "Phải, âm thanh tồn tại vĩnh viễn trong vũ trụ",
              "Không, âm thanh là pháp vô thường, sinh diệt theo từng sát-na khi điều kiện cọ xát va chạm chấm dứt",
              "Chỉ có âm thanh sấm sét mới thường hằng",
              "Âm thanh của thần linh là thường hằng"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Tất cả các trường phái Phật giáo đều khẳng định âm thanh là vô thường vì nó do nhân duyên tạo tác mà sinh khởi rồi tan biến.",
          "hint": "Sinh diệt biến đổi theo duyên."
      },
      {
          "id": "w9_10",
          "text": "Sự đối chiếu giữa Phật học và Khoa học về thế giới quan nhằm mục đích gì?",
          "options": [
              "Chứng minh một bên thắng và một bên thua",
              "Làm sáng tỏ thực tại khách quan dưới nhiều góc nhìn tương trợ, củng cố sự hiểu biết chân xác về vạn vật",
              "Bác bỏ hoàn toàn giá trị của khoa học",
              "Thay thế tất cả các phòng thí nghiệm khoa học"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Đối thoại Phật học - Khoa học giúp nhân loại thấu hiểu sâu sắc hơn về thế giới vật chất và mối liên hệ giữa vật chất với tâm thức con người.",
          "hint": "Đối thoại bổ sung làm sáng tỏ chân lý."
      }
  ],
  "week10": [
      {
          "id": "w10_1",
          "text": "Xúc xứ là đối tượng nhận thức chuyên biệt của giác quan nào?",
          "options": [
              "Mắt",
              "Tai",
              "Thân (Thân căn)",
              "Mũi"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Xúc xứ (cảm giác đụng chạm) là đối tượng riêng biệt được tiếp nhận bởi cơ quan xúc giác của thân thể (thân thức).",
          "hint": "Xúc giác toàn thân thể."
      },
      {
          "id": "w10_2",
          "text": "Các yếu tố cấu thành Xúc xứ bao gồm hai phần cơ bản nào?",
          "options": [
              "Ý nghĩ và Cảm xúc",
              "Bốn đại chủng (năng đại) và các trạng thái sở tạo xúc (sở tạo sắc)",
              "Nóng và Lạnh duy nhất",
              "Sóng âm và Ánh sáng"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Xúc xứ gồm 4 nhân đại chủng (địa, thủy, hỏa, phong) và 7 hoặc 11 loại xúc sở tạo do tứ đại biến hóa sinh ra.",
          "hint": "Tứ đại chủng và các xúc do tứ đại tạo ra."
      },
      {
          "id": "w10_3",
          "text": "Ví dụ nào sau đây KHÔNG thuộc về các trạng thái xúc sở tạo?",
          "options": [
              "Trơn láng, Nhám thô",
              "Nặng, Nhẹ",
              "Màu đỏ rực rỡ",
              "Lạnh, Đói, Khát"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Màu đỏ thuộc Sắc xứ (thị giác của mắt), không thuộc Xúc xứ (xúc giác của thân).",
          "hint": "Đối tượng dành cho mắt nhìn."
      },
      {
          "id": "w10_4",
          "text": "'Nội sắc' (Nội sắc pháp) trong cơ thể con người gồm có những gì?",
          "options": [
              "Xương, thịt, máu, tủy",
              "Năm tịnh sắc căn (mắt, tai, mũi, lưỡi, thân căn)",
              "Ý thức và mạt-na thức",
              "Quần áo và trang sức"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Nội sắc là 5 tịnh sắc căn – cấu trúc vật chất vi tế bên trong các giác quan giúp khởi sinh nhận thức tương ứng.",
          "hint": "Năm giác quan vi tế tiếp nhận cảm giác."
      },
      {
          "id": "w10_5",
          "text": "Sự khác biệt giữa 'Phù trần căn' và 'Tịnh sắc căn' là gì?",
          "options": [
              "Phù trần căn là cơ quan mắt tai thô bên ngoài; Tịnh sắc căn là phần thần kinh cảm giác vi tế bên trong tiếp nhận thông tin",
              "Phù trần căn trong suốt, tịnh sắc căn đục ngầu",
              "Không có gì khác biệt",
              "Tịnh sắc căn chỉ có ở các loài chim"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Mắt thịt bề ngoài là phù trần căn; khả năng thần kinh thị giác vi tế nhạy cảm bên trong mới là nhãn tịnh sắc căn.",
          "hint": "Cơ quan thô bên ngoài đối lập với thần kinh cảm nhận tinh vi bên trong."
      },
      {
          "id": "w10_6",
          "text": "Khái niệm 'Sắc thuộc pháp xứ' (dharmāyatana-saṃgṛhīta-rūpa) chỉ điều gì?",
          "options": [
              "Những đồ vật được cúng dường trong chùa",
              "Những hiện tượng mang tính chất vật chất nhưng không thể cảm nhận bằng 5 giác quan thô mà chỉ nhận biết qua ý thức",
              "Sách kinh điển viết bằng chữ Phạn",
              "Tượng Phật bằng đồng"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Sắc thuộc pháp xứ là loại sắc pháp vi tế chỉ là đối tượng nhận biết của ý thức (nằm trong pháp xứ chứ không nằm trong 5 xứ đầu).",
          "hint": "Sắc vi tế chỉ nhận biết qua ý thức."
      },
      {
          "id": "w10_7",
          "text": "Cảm giác 'nặng' và 'nhẹ' của một vật thể thuộc về loại xúc nào?",
          "options": [
              "Đại chủng trực tiếp",
              "Sở tạo xúc (xúc do đại chủng biến tạo thành)",
              "Vị giác",
              "Thanh giác"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Nặng và nhẹ là các trạng thái cảm thụ thuộc sở tạo xúc do tỷ lệ kết hợp của các đại chủng tạo nên.",
          "hint": "Trạng thái do tứ đại tạo tác."
      },
      {
          "id": "w10_8",
          "text": "Theo sinh lý học hiện đại, các tế bào thần kinh xúc giác phân bố ở đâu nhiều nhất?",
          "options": [
              "Ở móng chân",
              "Dưới lớp da, đầu ngón tay, môi và lưỡi",
              "Trong xương đùi",
              "Trong tóc"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Các đầu mút dây thần kinh thụ cảm xúc giác (Merkel, Meissner, Pacinian...) tập trung dày đặc nhất ở đầu ngón tay và môi.",
          "hint": "Đầu ngón tay và da."
      },
      {
          "id": "w10_9",
          "text": "Khi tay chạm vào nước đá thấy lạnh buốt, cảm giác 'lạnh' là sự tương tác giữa yếu tố nào?",
          "options": [
              "Thân căn tiếp xúc với đối tượng xúc chạm (hỏa đại suy giảm / nhiệt độ thấp)",
              "Nhãn thức nhìn thấy tuyết",
              "Ý thức nhớ về mùa đông",
              "Tai nghe tiếng gió hú"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Đó là sự tiếp xúc giữa thân tịnh sắc căn và xúc xứ nhiệt độ thấp làm phát sinh thân thức cảm nhận lạnh.",
          "hint": "Thân căn và xúc xứ va chạm."
      },
      {
          "id": "w10_10",
          "text": "Tại sao Sắc thuộc pháp xứ vẫn được xếp vào phạm trù 'Sắc pháp' dù 5 giác quan không sờ thấy được?",
          "options": [
              "Vì nó bắt nguồn từ năng lực của sắc hoặc được tâm biến hiện mang hình thái vật chất",
              "Do người dịch dịch nhầm",
              "Vì nó có màu sắc huỳnh quang",
              "Vì nó nặng hàng tấn"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Nó vẫn mang tính chất biến hoại, phân chia hoặc là dư ảnh/năng lực phát khởi từ các đối tượng vật chất trước đó.",
          "hint": "Mang bản chất hoặc dư năng của vật chất."
      }
  ],
  "week11": [
      {
          "id": "w11_1",
          "text": "Theo Đại thừa A-tỳ-đạt-ma Tập luận, Sắc thuộc pháp xứ gồm có bao nhiêu loại?",
          "options": [
              "3 loại",
              "5 loại",
              "7 loại",
              "9 loại"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Gồm 5 loại: Cực lược sắc, Cực quýnh sắc, Thọ sở dẫn sắc, Biến kế sở khởi sắc, và Định tự tại sở sinh sắc.",
          "hint": "Năm loại sắc vi tế của ý thức."
      },
      {
          "id": "w11_2",
          "text": "Khái niệm 'Cực lược sắc' chỉ loại sắc nào?",
          "options": [
              "Sắc pháp bị trí tuệ phân tích chia nhỏ dần đến mức cực vi vô cùng nhỏ bé (nguyên tử/hạt hạ nguyên tử)",
              "Vật thể to lớn nhất vũ trụ",
              "Ánh sáng mặt trời lúc giữa trưa",
              "Sóng biển dâng trào"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Cực lược sắc là hạt vật chất nhỏ nhất sau khi dùng tâm trí phân tích chia cắt đến tận cùng giới hạn.",
          "hint": "Phân chia vật chất nhỏ đến cùng cực."
      },
      {
          "id": "w11_3",
          "text": "'Cực quýnh sắc' trong 5 loại sắc này chỉ điều gì?",
          "options": [
              "Khoảng không gian rỗng cực xa giữa các vật thể, được nhận biết qua sự phân tích của ý thức",
              "Màu đen bóng tối",
              "Tiếng sấm rền",
              "Mùi hương thơm ngát"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Cực quýnh sắc liên quan đến không gian khoảng cách cực đại giữa các phần tử sắc pháp.",
          "hint": "Không gian vô tận cực xa."
      },
      {
          "id": "w11_4",
          "text": "'Thọ sở dẫn sắc' (Vô biểu sắc) liên quan trực tiếp đến hành vi nào của người tu?",
          "options": [
              "Việc ăn chay",
              "Năng lực giữ giới (giới thể) phát sinh sau khi tiếp nhận giới pháp qua nghi thức",
              "Việc đi hành hương",
              "Khả năng thuộc nhiều bài kinh"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Thọ sở dẫn sắc (vô biểu sắc) là năng lực vô hình phòng hộ tội lỗi, hình thành khi hành giả phát tâm thọ giới.",
          "hint": "Giới thể vô biểu khi thọ giới."
      },
      {
          "id": "w11_5",
          "text": "'Biến kế sở khởi sắc' là loại sắc nào?",
          "options": [
              "Hình ảnh đồ vật, phong cảnh xuất hiện trong giấc mơ hoặc do tưởng tượng vẽ ra trong tâm trí",
              "Sỏi đá trên núi cao",
              "Cá bơi dưới nước",
              "Cây cối mùa xuân"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Biến kế sở khởi sắc là hình ảnh sắc tướng do tâm vọng tưởng hoặc giấc chiêm bao phóng chiếu ra.",
          "hint": "Hình tướng do tưởng tượng và mộng mị."
      },
      {
          "id": "w11_6",
          "text": "'Định tự tại sở sinh sắc' phát sinh từ đâu?",
          "options": [
              "Do máy móc công nghệ chế tạo",
              "Từ năng lực định tâm thiền định thanh tịnh của các bậc Thánh giả có thể biến hóa cảnh giới",
              "Từ việc uống trà thảo mộc",
              "Từ việc thức đêm lâu ngày"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Định tự tại sở sinh sắc là cảnh giới vật chất biến hiện từ năng lực đại định của hành giả chứng đắc thiền chỉ.",
          "hint": "Phát sinh từ năng lực định tâm thiền định."
      },
      {
          "id": "w11_7",
          "text": "Trường phái Duy Thức tông và các bộ phái Tiểu thừa có quan điểm khác nhau lớn nhất về điều gì đối với Cực vi (nguyên tử vi tế)?",
          "options": [
              "Tiểu thừa coi cực vi là có thật tối hậu; Duy thức chứng minh cực vi không thể là một thực thể độc lập tự tồn vì vẫn có thể phân chia",
              "Cả hai đều cho rằng cực vi có linh hồn",
              "Duy thức cho rằng cực vi to như quả bóng",
              "Tiểu thừa không chấp nhận nguyên tử"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Duy thức dùng luận bác bỏ cực vi độc lập không phương phần: nếu một cực vi tiếp xúc 6 cực vi 6 hướng thì nó phải có 6 mặt, do đó không phải là một hạt bất khả phân.",
          "hint": "Tranh luận về hạt vật chất nhỏ nhất bất khả phân."
      },
      {
          "id": "w11_8",
          "text": "Tại sao việc hiểu 'Vô biểu sắc' lại quan trọng đối với đạo đức học Phật giáo?",
          "options": [
              "Vì chứng minh rằng giới hạnh tạo ra một luồng năng lượng chuyển hóa nội tâm liên tục kể cả khi đang ngủ",
              "Để khoe khoang với người khác",
              "Vì nó giúp cơ thể phát sáng",
              "Để không phải sám hối lỗi lầm"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Giới thể vô biểu như một luồng năng lực thường trực bảo vệ dòng tâm thức và nuôi dưỡng thiện căn bền bỉ ngày đêm.",
          "hint": "Năng lượng giới thể bảo hộ liên tục."
      },
      {
          "id": "w11_9",
          "text": "Trong vật lý lượng tử hiện đại, các hạt ảo và trường năng lượng chân không có nét tương đồng thú vị với khái niệm nào trong các sắc trên?",
          "options": [
              "Cực lược sắc và Cực quýnh sắc",
              "Thọ sở dẫn sắc",
              "Tiếng sấm sét",
              "Mùi thơm của hoa"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Khoảng chân không chứa năng lượng và giới hạn chia cắt hạt cơ bản tương đồng với các khái niệm cực lược và cực quýnh.",
          "hint": "Giới hạn hạt vi mô và chân không lượng tử."
      },
      {
          "id": "w11_10",
          "text": "Khái niệm 'Nhân đại chủng' bắt đầu được đề cập ở chương này có vai trò gì?",
          "options": [
              "Là nền tảng vật chất gốc để tạo sinh ra tất cả các sắc pháp thứ sinh (sở tạo sắc)",
              "Chỉ là tên của một vị thần bảo hộ",
              "Một loại cây cổ thụ",
              "Một phương thuốc cổ truyền"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Nhân đại chủng chính là 4 đại gốc (đất, nước, lửa, gió) làm nguyên nhân sinh thành và duy trì mọi sắc pháp.",
          "hint": "Nguyên nhân gốc rễ sinh ra sắc chất."
      }
  ],
  "week12": [
      {
          "id": "w12_1",
          "text": "Bốn đại chủng (Tứ đại) cấu thành thế giới vật chất bao gồm những yếu tố nào?",
          "options": [
              "Đất, Nước, Lửa, Gió (Địa, Thủy, Hỏa, Phong)",
              "Vàng, Bạc, Đồng, Sắt",
              "Mặt trời, Mặt trăng, Sao, Trái đất",
              "Sinh, Lão, Bệnh, Tử"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Bốn đại chủng là Địa (đất), Thủy (nước), Hỏa (lửa) và Phong (gió).",
          "hint": "Địa, Thủy, Hỏa, Phong."
      },
      {
          "id": "w12_2",
          "text": "Đặc tính bản chất (tự tướng) của 'Địa đại' (Đất) là gì?",
          "options": [
              "Ướt và kết dính",
              "Nóng và sưởi ấm",
              "Cứng rắn và có tính nâng đỡ",
              "Di động và lay chuyển"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Bản tính của địa đại là tính cứng (kiên tính), công năng là làm chỗ nâng đỡ, duy trì hình dạng.",
          "hint": "Tính cứng rắn nâng đỡ."
      },
      {
          "id": "w12_3",
          "text": "Đặc tính bản chất và công năng của 'Thủy đại' (Nước) là gì?",
          "options": [
              "Tính ướt và năng lực ngưng tụ, kết dính các phần tử",
              "Tính khô khốc",
              "Tính bốc cháy",
              "Tính thổi tung"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Bản chất của thủy đại là ẩm ướt (thấp tính), công năng là kết dính, thu gom các hạt vật chất lại không cho rã rời.",
          "hint": "Ướt át và kết dính gom tụ."
      },
      {
          "id": "w12_4",
          "text": "Đặc tính bản chất và công năng của 'Hỏa đại' (Lửa) là gì?",
          "options": [
              "Làm đóng băng",
              "Tính nóng (nhiệt tính) và công năng làm chín, tiêu hóa, biến đổi",
              "Làm lỏng lẻo",
              "Làm tối tăm"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Hỏa đại có bản chất là nóng, công năng làm thành thục, biến đổi trạng thái chất thể và cung cấp năng lượng nhiệt.",
          "hint": "Nhiệt nóng và làm chín biến đổi."
      },
      {
          "id": "w12_5",
          "text": "Đặc tính bản chất và công năng của 'Phong đại' (Gió) là gì?",
          "options": [
              "Đứng yên một chỗ",
              "Tính lay động (khinh động tính) và công năng phát triển, làm chuyển dịch, đẩy đi",
              "Ngưng đọng mọi cử động",
              "Đốt cháy hoàn toàn"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Phong đại có tính di động lay chuyển, công năng thúc đẩy sự tăng trưởng và lưu thông dịch chuyển của vạn vật.",
          "hint": "Lay động và dịch chuyển tăng trưởng."
      },
      {
          "id": "w12_6",
          "text": "Ý nghĩa thuật ngữ 'Giới' (Dhātu) và 'Chủng' (Bhūta) trong Tứ đại chủng là gì?",
          "options": [
              "'Giới' là bản chất duy trì tự tướng; 'Chủng' là hạt mầm, nguồn gốc phát sinh và duy trì các sắc pháp khác",
              "Là ranh giới giữa các quốc gia",
              "Là thứ bậc đẳng cấp trong xã hội",
              "Là những loại cây cỏ trong rừng"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Giới là bản tính nền tảng không mất; Chủng là chủng loại sinh thành nuôi dưỡng sở tạo sắc.",
          "hint": "Bản tính nền tảng và hạt giống tạo sinh."
      },
      {
          "id": "w12_7",
          "text": "Trong một giọt nước lỏng, có mặt đầy đủ cả 4 đại chủng hay chỉ có duy nhất Thủy đại?",
          "options": [
              "Chỉ có duy nhất Thủy đại",
              "Luôn có đầy đủ cả 4 đại: thủy đại chiếm ưu thế lộ rõ tính ướt, nhưng vẫn có địa đại (giữ giọt nước), hỏa đại (nhiệt độ của nước), và phong đại (sự chuyển dịch các phân tử)",
              "Nước chỉ gồm hidro và oxi chứ không có tứ đại",
              "Không có đại nào cả"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Bất kỳ vật chất nào trong tự nhiên cũng hội tụ đủ tứ đại, tùy môi trường mà đại nào thịnh hiện rõ ra ngoài.",
          "hint": "Cả 4 đại cùng câu hữu tương hỗ."
      },
      {
          "id": "w12_8",
          "text": "Mối quan hệ giữa 'Tứ đại chủng' và 'Sở tạo sắc' được ví như mối quan hệ nào?",
          "options": [
              "Như người mẹ sinh ra và nâng đỡ đứa con",
              "Như hai người xa lạ trên đường",
              "Như kẻ thù không đội trời chung",
              "Như nước với lửa hoàn toàn triệt tiêu nhau"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Kinh điển ví tứ đại chủng là mẹ tạo sinh và nuôi dưỡng sở tạo sắc thông qua 5 công năng: sinh, y, lập, trì, dưỡng.",
          "hint": "Như mẹ sinh dưỡng đứa con."
      },
      {
          "id": "w12_9",
          "text": "Khi cơ thể con người bước vào giai đoạn hấp hối hoại diệt, sự tan rã của Tứ đại diễn ra tuần tự như thế nào?",
          "options": [
              "Địa tan vào Thủy -> Thủy tan vào Hỏa -> Hỏa tan vào Phong -> Phong tan vào Thức",
              "Phong tan trước tiên -> Địa -> Thủy -> Hỏa",
              "Tất cả cùng biến mất trong một giây",
              "Không có sự tan rã nào"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Tiến trình cận tử kinh điển: Địa đại tan rã (thân nặng nề), Thủy đại rã (khô khát), Hỏa đại rã (thân lạnh dần), Phong đại rã (ngưng thở).",
          "hint": "Địa -> Thủy -> Hỏa -> Phong."
      },
      {
          "id": "w12_10",
          "text": "Tứ đại trong Phật giáo tương ứng với 4 trạng thái vật chất nào trong vật lý học hiện đại?",
          "options": [
              "Rắn (Địa), Lỏng (Thủy), Nhiệt/Khí năng lượng (Hỏa), Khí/Chuyển động (Phong) và Plasma",
              "Chỉ là tưởng tượng thần thoại",
              "Proton, Neutron, Electron, Quark",
              "Quá khứ, Hiện tại, Vị lai, Hiện hữu"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Đặc tính kiên (rắn), thấp (lỏng), nhiệt (nhiệt năng/plasma), động (chuyển động phân tử chất khí) tương ứng tuyệt vời với vật lý học.",
          "hint": "Rắn, lỏng, nhiệt và khí."
      }
  ],
  "week13": [
      {
          "id": "w13_1",
          "text": "'Pháp bất tương ưng hành' (Citta-viprayukta-saṃskāra) được định nghĩa là gì?",
          "options": [
              "Những pháp vừa là sắc pháp vừa là tâm pháp",
              "Những hiện tượng biến đổi hữu vi nhưng không thuộc sắc chất hình thể cũng không thuộc tâm thức",
              "Những câu thần chú bí mật",
              "Những linh hồn vất vưởng"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Bất tương ưng hành là các pháp hữu vi sinh diệt nhưng không có tính chất va chạm của vật chất (phi sắc) và không có khả năng nhận biết đối tượng (phi tâm).",
          "hint": "Không phải sắc, không phải tâm, nhưng vẫn biến đổi hữu vi."
      },
      {
          "id": "w13_2",
          "text": "Theo tiếng Tạng, từ 'Năng lực tiềm tàng' dùng để diễn tả bản chất bất tương ưng hành là gì?",
          "options": [
              "Nus pa",
              "Karma",
              "Prāna",
              "Śūnyatā"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Thuật ngữ ནུས་པ (nus pa) chỉ năng lực tiềm tàng, tiềm năng phát tác của một sự vật hoặc hiện tượng.",
          "hint": "Bắt đầu bằng chữ 'Nus'."
      },
      {
          "id": "w13_3",
          "text": "Số lượng pháp bất tương ưng hành theo Câu-xá luận và Tập luận lần lượt là bao nhiêu?",
          "options": [
              "14 pháp và 23 pháp",
              "5 pháp và 10 pháp",
              "18 pháp và 36 pháp",
              "100 pháp và 200 pháp"
          ],
          "correctAnswerIndex": 0,
          "explanation": "A-tỳ-đạt-ma Câu-xá luận nêu 14 pháp; Đại thừa A-tỳ-đạt-ma Tập luận nêu 23 pháp.",
          "hint": "14 và 23."
      },
      {
          "id": "w13_4",
          "text": "Ví dụ kinh điển nào chứng minh năng lực tiềm tàng (nus pa) của bất tương ưng hành trong đời sống?",
          "options": [
              "Năng lực chữa bệnh tiềm tàng trong thảo dược ngay cả khi chưa được sắc uống",
              "Một tảng đá đứng yên",
              "Màu sắc của một bức tranh",
              "Tiếng đàn piano"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Khả năng trị liệu của thảo dược là một tiềm năng tồn tại khách quan, chỉ biểu lộ thành hiệu quả khi gặp nhân duyên người bệnh uống vào.",
          "hint": "Năng lực trị liệu tiềm ẩn của thuốc."
      },
      {
          "id": "w13_5",
          "text": "'Mạng căn' (Jīvitendriya - thọ mạng, sinh mạng) được các bộ luận xếp vào nhóm pháp nào?",
          "options": [
              "Sắc pháp",
              "Tâm sở pháp",
              "Pháp bất tương ưng hành",
              "Pháp vô vi"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Mạng căn duy trì hơi ấm và thức của sinh vật, là một năng lực kết nối thuộc về pháp bất tương ưng hành.",
          "hint": "Năng lực tiềm tàng duy trì sự sống."
      },
      {
          "id": "w13_6",
          "text": "Bốn giai đoạn chuyển biến cơ bản của vạn vật (Tứ tướng) là gì?",
          "options": [
              "Sinh, Trụ, Dị, Diệt",
              "Xuân, Hạ, Thu, Đông",
              "Tốt, Xấu, Đúng, Sai",
              "Có, Không, Còn, Mất"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Tứ tướng hữu vi gồm: Sinh (khởi sinh), Trụ (tạm an định), Dị (biến đổi/lão hóa), và Diệt (hoại diệt).",
          "hint": "Sinh, Trụ, Dị, Diệt."
      },
      {
          "id": "w13_7",
          "text": "Tại sao 'Thời gian' (kāla) trong triết học Phật giáo được xếp vào bất tương ưng hành?",
          "options": [
              "Vì thời gian là một chiếc đồng hồ đeo tay",
              "Vì thời gian không phải là một vật thể độc lập mà là khái niệm giả lập dựa trên sự chuyển biến liên tục của các pháp hữu vi",
              "Vì thời gian vĩnh cửu bất biến",
              "Vì thời gian có màu vàng"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Thời gian không tồn tại tự thân như một dòng sông thực thể; nó chỉ là danh ngôn thiết lập dựa trên chuỗi biến dịch sinh diệt của sự vật.",
          "hint": "Khái niệm thiết lập trên sự chuyển động biến đổi."
      },
      {
          "id": "w13_8",
          "text": "Tập khí (Vāsanā - thói quen tiềm tàng hay hạt giống nghiệp) đóng vai trò gì trong sự vận hành của tâm thức?",
          "options": [
              "Lưu giữ dấu ấn kinh nghiệm và khuynh hướng hành vi để thúc đẩy suy nghĩ và hành động tương lai",
              "Biến mất ngay sau khi hành vi kết thúc mà không để lại gì",
              "Làm đông đặc cơ thể",
              "Chỉ xuất hiện khi đọc sách"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Tập khí là năng lực huân tập tiềm ẩn, không thấy được nhưng chi phối sâu sắc thói quen, cảm xúc và quả báo sau này.",
          "hint": "Lưu giữ dấu ấn tiềm thức định hình tương lai."
      },
      {
          "id": "w13_9",
          "text": "Bất tương ưng hành đóng vai trò chiếc cầu nối thế nào giữa Sắc pháp và Tâm pháp?",
          "options": [
              "Không có mối liên quan nào",
              "Giúp giải thích cách mà ý chí tinh thần tương tác và thúc đẩy các quá trình cơ thể vật chất thông qua các cơ chế năng lực",
              "Hòa tan vật chất thành tâm linh",
              "Hủy diệt hoàn toàn thân thể"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Nó cung cấp khuôn khổ triết học để giải thích sự lưu chuyển nghiệp báo, mối tương quan giữa thân và tâm mà không rơi vào thuyết duy vật hay duy tâm cực đoan.",
          "hint": "Giải thích tương tác nghiệp và thân - tâm."
      },
      {
          "id": "w13_10",
          "text": "Nhận thức rõ bản chất bất tương ưng hành giúp hành giả tránh được cực đoan nào?",
          "options": [
              "Chấp thường (nghĩ mọi thứ là linh hồn bất tử) và Chấp đoạn (nghĩ chết là hết không để lại nghiệp lực gì)",
              "Tránh việc đi bộ nhanh",
              "Tránh đọc nhiều sách",
              "Tránh uống nước đun sôi"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Thấy được dòng chuyển biến tương tục của năng lực tiềm tàng giúp hành giả vững tin vào nhân quả mà không chấp vào cái ngã thường còn.",
          "hint": "Tránh hai cực đoan Thường kiến và Đoạn kiến."
      }
  ],
  "week14": [
      {
          "id": "w14_1",
          "text": "Định nghĩa cốt lõi của 'Nhân' (Hetu) trong mối quan hệ nhân quả là gì?",
          "options": [
              "Cái đi sau và hưởng thụ kết quả",
              "Cái sinh ra hoặc trợ duyên trực tiếp/gián tiếp làm phát sinh một quả",
              "Một vị thần phán quyết",
              "Sự may rủi ngẫu nhiên"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Nhân là yếu tố đóng vai trò sinh thành hoặc làm duyên tác tạo ra sự hiện hữu của một pháp khác (quả).",
          "hint": "Cái sinh ra hoặc tạo điều kiện cho quả."
      },
      {
          "id": "w14_2",
          "text": "Sự khác biệt giữa 'Nhân chính' (Cận nhân) và 'Nhân phụ' (Câu sinh duyên) là gì?",
          "options": [
              "Nhân chính tạo ra dòng tương tục biến chuyển trực tiếp thành quả; nhân phụ là các yếu tố hỗ trợ bên ngoài",
              "Nhân chính luôn vô hình, nhân phụ luôn hữu hình",
              "Nhân phụ quan trọng hơn nhân chính",
              "Không có sự khác nhau"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ví dụ: Hạt bắp là nhân chính (chuyển thể thành cây bắp); đất, nước, phân bón, ánh sáng là các nhân duyên phụ trợ.",
          "hint": "Hạt giống cốt lõi đối lập với đất, nước, ánh nắng hỗ trợ."
      },
      {
          "id": "w14_3",
          "text": "Ví dụ nào thể hiện mối quan hệ 'Nhân trực tiếp' và 'Nhân gián tiếp'?",
          "options": [
              "Sát-na thứ 1 là nhân trực tiếp của sát-na thứ 2, nhưng là nhân gián tiếp của sát-na thứ 3",
              "Con gà và quả trứng cùng sinh một lúc",
              "Lửa đốt cháy cây củi mà không có tro",
              "Mặt trời chiếu sáng mặt trời"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sát-na liền kề sinh ra kết quả kế tiếp là nhân trực tiếp; các sát-na cách quãng tạo tiền đề là nhân gián tiếp.",
          "hint": "Liền kề trực tiếp đối lập với cách quãng gián tiếp."
      },
      {
          "id": "w14_4",
          "text": "Một pháp có thể tự sinh ra chính nó (tự sinh) được không?",
          "options": [
              "Có thể, hoa sen tự sinh ra hoa sen",
              "Hoàn toàn không, vì nếu đã có rồi thì cần gì sinh nữa, nếu chưa có thì lấy gì làm nhân để tự sinh",
              "Chỉ có quả trứng tự sinh được",
              "Khoa học đã chứng minh vạn vật tự sinh"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Luận lý học Trung Quán bác bỏ tự sinh: Nhân và quả không thể là một thực thể đồng nhất tại cùng một thời điểm.",
          "hint": "Phản bác luận điểm tự sinh."
      },
      {
          "id": "w14_5",
          "text": "Theo A-tỳ-đạt-ma Câu-xá luận, 'Pháp vô vi' gồm có mấy loại?",
          "options": [
              "2 loại",
              "3 loại",
              "5 loại",
              "8 loại"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Câu-xá luận liệt kê 3 pháp vô vi: Hư không vô vi, Trạch diệt vô vi, và Phi trạch diệt vô vi.",
          "hint": "Ba pháp vô vi kinh điển."
      },
      {
          "id": "w14_6",
          "text": "'Hư không vô vi' (Ākāśa) được định nghĩa là gì?",
          "options": [
              "Bầu trời có mây xanh và chim bay",
              "Bản chất rỗng không, không cản ngại, cho phép các sắc pháp lưu hành và biến chuyển",
              "Khoảng tối khi mất điện",
              "Một lỗ hổng trên tường"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Hư không vô vi là tính chất không chướng ngại (vô chướng ngại tính), làm không gian cho sắc pháp tồn tại mà tự nó không sinh diệt.",
          "hint": "Tính chất rỗng không không chướng ngại."
      },
      {
          "id": "w14_7",
          "text": "'Trạch diệt vô vi' (Pratisaṃkhyā-nirodha) là trạng thái đoạn diệt đạt được nhờ điều gì?",
          "options": [
              "Nhờ uống thuốc an thần",
              "Nhờ năng lực trí tuệ phân tích (trạch trí) quán chiếu diệt trừ tận gốc phiền não",
              "Nhờ thời gian trôi qua tự nhiên quên lãng",
              "Nhờ trốn vào rừng sâu"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Trạch nghĩa là lựa chọn quán chiếu phân tích; Trạch diệt là Niết bàn đoạn diệt phiền não nhờ tuệ giác bát-nhã.",
          "hint": "Dùng năng lực trí tuệ đoạn diệt phiền não."
      },
      {
          "id": "w14_8",
          "text": "'Phi trạch diệt vô vi' (Apratisaṃkhyā-nirodha) là sự không sinh khởi của các pháp do nguyên nhân nào?",
          "options": [
              "Do dùng gươm chém đứt",
              "Do vĩnh viễn thiếu khuyết những điều kiện và nhân duyên để sinh khởi, chứ không phải nhờ công phu quán chiếu",
              "Do Phật dùng thần thông ngăn lại",
              "Do ngủ say không biết"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Phi trạch diệt là trạng thái một pháp không hiện khởi đơn thuần vì duyên chưa đủ hoặc thiếu vắng điều kiện phát sinh.",
          "hint": "Không sinh khởi vì thiếu duyên trợ trợ."
      },
      {
          "id": "w14_9",
          "text": "Tại sao thuyết nhân quả là nền tảng tối thượng của đạo đức Phật giáo?",
          "options": [
              "Vì dạy con người phải sợ hãi trừng phạt của thần linh",
              "Vì chứng minh mọi hành động gieo rắc thân, khẩu, ý tất yếu đưa đến kết quả tương ứng, giúp con người chủ động chịu trách nhiệm cuộc đời",
              "Vì đảm bảo ai cũng trở nên giàu có",
              "Vì giải thích bói toán tử vi"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Luật nhân quả xác lập trách nhiệm cá nhân: thiện sinh quả an lạc, ác chuốc quả khổ đau, hoàn toàn không do ai ban thưởng hay trừng phạt.",
          "hint": "Chủ động trách nhiệm nghiệp báo không do thần quyền."
      },
      {
          "id": "w14_10",
          "text": "Mười hai nhân duyên giải thích tiến trình luân hồi sinh tử bắt đầu từ mắt xích nào?",
          "options": [
              "Vô minh",
              "Lão tử",
              "Thọ",
              "Ái"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Tiến trình 12 nhân duyên khởi đi từ Vô minh (không thấy đúng thực tại) -> Hành -> Thức -> Danh sắc...",
          "hint": "Sự mù quáng si ám ban đầu."
      }
  ],
  "week15": [
      {
          "id": "w15_1",
          "text": "Khác với Câu-xá luận (3 pháp), Đại thừa A-tỳ-đạt-ma Tập luận phân chia Pháp vô vi thành bao nhiêu loại?",
          "options": [
              "4 loại",
              "6 loại",
              "8 loại",
              "12 loại"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Đại thừa Tập luận mở rộng pháp vô vi thành 8 loại, bao gồm cả Chân như thiện pháp, Chân như bất thiện pháp, Bất động diệt...",
          "hint": "Tám loại pháp vô vi."
      },
      {
          "id": "w15_2",
          "text": "Trong luận thuật về Sở lượng, ba yếu tố cấu thành việc định danh nhận thức một sự vật là gì?",
          "options": [
              "Danh (Tên gọi), Nghĩa (Ý nghĩa / Thực thể), và Ví dụ (Sự vật minh họa cụ thể)",
              "Quá khứ, Hiện tại, Vị lai",
              "Tiếng nói, Chữ viết, Giấy mực",
              "Người hỏi, Người đáp, Trọng tài"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Hệ thống luận lý phân tích nhận thức qua: Danh (ngôn từ quy ước), Nghĩa (đặc tính bản chất của đối tượng) và Ví dụ (sở y thực tế).",
          "hint": "Danh, Nghĩa, Ví dụ."
      },
      {
          "id": "w15_3",
          "text": "Trong ví dụ kinh điển 'Chiếc bình vàng', 'bụng phình, đáy tròn, có khả năng chứa nước' thuộc về yếu tố nào?",
          "options": [
              "Danh của chiếc bình",
              "Nghĩa (Đặc tính định nghĩa) của chiếc bình",
              "Ví dụ cụ thể",
              "Hình ảnh tưởng tượng"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Đó chính là 'Nghĩa' – định nghĩa bản chất chức năng của một cái bình (sở tác dụng tính).",
          "hint": "Đặc tính bản chất công năng."
      },
      {
          "id": "w15_4",
          "text": "'Từ ngữ được gán ghép theo quy ước xã hội để gọi tên sự vật' được định danh là gì?",
          "options": [
              "Nghĩa",
              "Danh",
              "Chất thể",
              "Tự tánh"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Danh là âm thanh hoặc ký tự quy ước được gán cho một ý nghĩa hay đối tượng để trao đổi giao tiếp.",
          "hint": "Tên gọi ngôn từ."
      },
      {
          "id": "w15_5",
          "text": "Thế nào là 'Định nghĩa riêng' (Biệt tướng) của một pháp?",
          "options": [
              "Đặc tính chỉ riêng pháp đó có, giúp phân biệt rõ ràng nó với tất cả các pháp khác",
              "Đặc tính mà tất cả mọi pháp đều có chung",
              "Một cái tên bí mật",
              "Ý kiến cá nhân của người nói"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Định nghĩa riêng (tự tướng/biệt tướng) là đặc trưng chuyên biệt chỉ thuộc về đối tượng đó (ví dụ tính nóng của lửa).",
          "hint": "Đặc tính khu biệt độc nhất của đối tượng."
      },
      {
          "id": "w15_6",
          "text": "Đặc tính nào sau đây là 'Định nghĩa chung' (Cộng tướng) của mọi pháp hữu vi?",
          "options": [
              "Tính vô thường sinh diệt",
              "Tính ngọt của đường",
              "Tính trong suốt của thủy tinh",
              "Tính bay lượn của loài chim"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Cộng tướng là đặc tính phổ quát mà tất cả các pháp trong nhóm đều chia sẻ (như tính vô thường, duyên sinh, vô ngã).",
          "hint": "Đặc tính phổ quát chung cho tất cả."
      },
      {
          "id": "w15_7",
          "text": "Nếu một người nghe từ 'Lửa' mà thấy trong miệng bị bỏng nóng thì điều đó chứng minh sai lầm gì?",
          "options": [
              "Nhầm lẫn giữa Danh (tên gọi quy ước) và Nghĩa (thực tại vật chất có tính nóng đốt cháy)",
              "Đó là người có siêu năng lực",
              "Từ ngữ có lửa thật",
              "Không có sai lầm nào"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Trần Na và Pháp Xứng nêu rõ: Danh không đồng nhất với Nghĩa; nếu tên gọi lửa là lửa thật thì người nói từ 'lửa' đã bị bỏng miệng.",
          "hint": "Đánh đồng khái niệm ngôn từ với thực thể vật chất."
      },
      {
          "id": "w15_8",
          "text": "'Chân như' (Tathatā) trong hệ thống 8 pháp vô vi của Tập luận có nghĩa là gì?",
          "options": [
              "Bản chất như thật rốt ráo của vạn pháp (thực tánh / tính không)",
              "Một vị bồ tát trên cung trời",
              "Một tượng đài cổ xưa",
              "Một phép biến hình"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Chân như là bản tánh bất biến, bình đẳng, không hư dối của mọi hiện tượng thực tại.",
          "hint": "Thực tánh như thật không biến đổi."
      },
      {
          "id": "w15_9",
          "text": "Tại sao việc phân định rõ Danh, Nghĩa và Ví dụ là chìa khóa để tránh ngụy biện?",
          "options": [
              "Vì giúp người học nhận ra khi nào đối phương đang chơi chữ, tráo đổi khái niệm hoặc dùng ví dụ khập khiễng",
              "Để viết thư pháp đẹp hơn",
              "Để học nhiều ngoại ngữ",
              "Để khỏi phải suy nghĩ"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Lập luận chính xác đòi hỏi xác định rõ nội hàm khái niệm (nghĩa), thuật ngữ (danh) và trường hợp áp dụng (ví dụ), tránh bẫy ngôn từ.",
          "hint": "Nhận diện bẫy ngôn từ và ngụy biện tráo đổi khái niệm."
      },
      {
          "id": "w15_10",
          "text": "Pháp vô vi có phải là đối tượng được nhận thức (sở tri) hay không?",
          "options": [
              "Phải, pháp vô vi hoàn toàn là một sở tri vì được nhận biết một cách đúng đắn bởi trí tuệ",
              "Không, pháp vô vi vượt ngoài nhận thức nên không ai biết được",
              "Chỉ có Phật mới biết còn Bồ tát không biết",
              "Chỉ là lời nói suông"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Bất cứ pháp nào hiện hữu (dù hữu vi hay vô vi) đều là sở tri (đối tượng nhận thức của lượng tri).",
          "hint": "Thuộc phạm trù sở tri được nhận thức bởi lượng tri."
      }
  ],
  "week16": [
      {
          "id": "w16_1",
          "text": "Chủ đề 'Một và Khác' (Ekatva và Nānātva) trong lý luận học Phật giáo đóng vai trò gì?",
          "options": [
              "Là công cụ sắc bén để phân tích cấu trúc vạn pháp, làm nền tảng soi sáng Vô thường và Tính không",
              "Chỉ là trò chơi đố chữ",
              "Một bài tập đếm số học tiểu học",
              "Một câu chuyện dân gian"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Khái niệm 'Một' và 'Khác' là trục lý luận cốt lõi mà ngài Long Thọ, Trần Na và Pháp Xứng sử dụng để phá tan ngã chấp và pháp chấp.",
          "hint": "Công cụ phân tích cấu trúc vạn pháp soi sáng tính không."
      },
      {
          "id": "w16_2",
          "text": "Theo định nghĩa của Lượng luận, hai pháp được gọi là 'Một' khi nào?",
          "options": [
              "Khi chúng hoàn toàn không thể phân chia và cùng một bản thể (đồng thể đồng nhất)",
              "Khi chúng có cùng màu sắc",
              "Khi chúng nằm gần nhau",
              "Khi ta thích cả hai"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Hai pháp là Một nếu chúng không thể tách rời về mặt bản thể thực hữu, loại trừ sự dị biệt.",
          "hint": "Cùng một bản thể đồng nhất bất khả phân."
      },
      {
          "id": "w16_3",
          "text": "Hai pháp được gọi là 'Khác' khi nào?",
          "options": [
              "Khi chúng có sự phân biệt, chia lìa hoặc không cùng tồn tại trong cùng một tự thể",
              "Khi một cái màu trắng một cái màu đỏ",
              "Khi một cái ở Việt Nam một cái ở Tây Tạng",
              "Khi chúng ta không thích một trong hai"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Khác nghĩa là có tướng trạng dị biệt, có thể tách rời hoặc phủ định lẫn nhau về mặt nhận thức.",
          "hint": "Có sự phân biệt và dị tính."
      },
      {
          "id": "w16_4",
          "text": "Trong bài học, ví dụ về 'Chiếc bình vàng' và 'Chất vàng tạo nên chiếc bình' thể hiện mối quan hệ Một hay Khác?",
          "options": [
              "Về phương diện bản thể vật chất thì là một (đồng chất thể), nhưng về phương diện khái niệm và chức năng nhận thức thì là khác",
              "Hoàn toàn là một trên mọi phương diện",
              "Hoàn toàn là hai vật thể xa lạ",
              "Không có mối liên hệ nào"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Bình vàng và vàng có cùng chất thể (bản thể là một), nhưng khái niệm 'bình' (chứa nước) khác khái niệm 'vàng' (kim loại quý).",
          "hint": "Một về bản thể nhưng khác về mặt khái niệm chức năng."
      },
      {
          "id": "w16_5",
          "text": "Quan hệ giữa 'Hạt giống' và 'Cây mầm' là quan hệ Một hay Khác trong dòng thời gian?",
          "options": [
              "Là Khác (dị thời dị thể): khi hạt giống diệt thì mầm cây mới sinh ra, nhân và quả không thể tồn tại đồng thời là Một",
              "Là Một, hạt giống chính là mầm cây",
              "Không cái nào có thật",
              "Là Một vì cùng màu xanh"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Hạt giống và mầm cây nối tiếp nhau trong chuỗi tương tục nhưng chúng là hai thực thể khác nhau ở hai thời điểm sát-na khác nhau.",
          "hint": "Nhân và quả khác nhau trong dòng thời gian."
      },
      {
          "id": "w16_6",
          "text": "Nếu cho rằng 'Hạt giống và Mầm cây là Một', sai lầm logic nào sẽ xảy ra?",
          "options": [
              "Lúc đang ăn hạt giống tức là đang ăn cả cây mầm, và nhân quả trở nên hỗn loạn không có sinh diệt",
              "Hạt giống sẽ nở ra hoa sen",
              "Không có sai lầm nào",
              "Cây sẽ mọc nhanh hơn"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Nếu nhân quả là Một thì hạt không cần diệt mà cây vẫn có, dẫn tới việc nhân và quả đồng thời tồn tại – điều hoàn toàn trái thực tế.",
          "hint": "Nhân quả đồng nhất làm sụp đổ luật sinh diệt sát-na."
      },
      {
          "id": "w16_7",
          "text": "Một người có 3 tên gọi: tên khai sinh, bút danh và biệt danh. Ba tên gọi này đối với người đó là Một hay Khác?",
          "options": [
              "Về người được chỉ định (thực thể) thì là Một người; về danh từ và bối cảnh sử dụng thì là Khác nhau",
              "Là ba con người khác nhau",
              "Không có ai tồn tại",
              "Chỉ có một tên là thật hai tên kia giả"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Một thực thể duy nhất có thể được quy gán nhiều danh xưng khác nhau tùy thuộc vào góc nhìn và mối quan hệ xã hội.",
          "hint": "Một chủ thể quy chiếu nhiều tên gọi quy ước."
      },
      {
          "id": "w16_8",
          "text": "Khái niệm 'Chất pháp' (Dravya-dharma) và 'Phản pháp' (Vyāvṛtti-dharma) liên quan thế nào đến Một và Khác?",
          "options": [
              "Chất pháp là thực thể vật chất cụ thể; Phản pháp là khía cạnh nhận thức thông qua sự bài trừ đối tượng trái nghịch",
              "Là hai phương thuốc Đông y",
              "Là hai loại pháp luật",
              "Không có mối liên quan"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Chất pháp chỉ sự vật cụ thể; Phản pháp (Apoha) là cơ chế tư duy của tâm thức nhận diện sự vật bằng cách loại trừ cái không phải nó.",
          "hint": "Thực thể cụ thể và cơ chế bài trừ của nhận thức."
      },
      {
          "id": "w16_9",
          "text": "Ứng dụng quan sát 'Một và Khác' vào việc quán sát 'Cái Tôi' (Ngã) và 'Năm Uẩn' (Thân tâm) mang lại kết quả tu tuệ gì?",
          "options": [
              "Nếu Cái Tôi là Một với 5 uẩn thì Tôi phải sinh diệt như 5 uẩn; nếu Tôi Khác 5 uẩn thì tìm ngoài thân tâm không thấy Tôi đâu -> Chứng ngộ Vô ngã",
              "Tìm thấy linh hồn bất tử nằm ở tim",
              "Thấy mình trở thành thần thánh",
              "Quên hết mọi ký ức"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Đây là pháp quán Thất tướng hoặc Ngũ tướng tìm ngã kinh điển của Trung Quán: 'Tôi' không thể là Một với thân tâm, cũng chẳng Khác thân tâm, nên 'Tôi' hoàn toàn là giả danh không tự tánh.",
          "hint": "Lý luận phá chấp ngã kinh điển của Trung Quán tông."
      },
      {
          "id": "w16_10",
          "text": "Sau 16 tuần học, bức tranh toàn diện về 'Khoa học Phật giáo Tập 1' mang lại cho người học bài học cốt lõi nào?",
          "options": [
              "Hiểu rõ thế giới vật chất và các hiện tượng tự nhiên bằng lăng kính duyên sinh, vô thường, logic chặt chẽ, tạo nền tảng vững chắc để tiến vào Khoa học Tâm thức",
              "Chỉ để thi cử lấy điểm",
              "Trở thành một triết gia tranh cãi bất bại",
              "Tách biệt hoàn toàn với đời sống thường nhật"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Tập 1 hoàn tất việc khảo sát thế giới hiện tượng vật chất theo tinh thần duyên khởi, chuẩn bị cơ sở tri thức vững vàng để bước tiếp vào Tập 2 nghiên cứu về Tâm thức.",
          "hint": "Thấu suốt thế giới hiện tượng chuẩn bị tiến vào Khoa học Tâm thức."
      }
  ]
};
