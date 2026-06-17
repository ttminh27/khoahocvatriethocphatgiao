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
  ]
};
