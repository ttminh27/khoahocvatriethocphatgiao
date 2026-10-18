export interface Chapter {
  id: string;
  title: string;
  date: string;
  summary: string;
  fileUrl: string;
}

export const chapters: Chapter[] = [
  {
    id: "week1",
    title: "Tuần 1: Tổng quan Khoa học & Triết học Phật giáo",
    date: "16.05.2026",
    summary: "Nhấn mạnh tầm quan trọng của sự cam kết kiên trì khi theo đuổi khóa học. Giới thiệu 3 phạm trù Phật giáo, vai trò của Khoa học Tâm thức và cấu trúc của 4 tập sách.",
    fileUrl: "/docs/week1.md"
  },
  {
    id: "week2",
    title: "Tuần 2: Nền tảng Hiện tượng Sự vật & Tứ Pháp Y",
    date: "23.05.2026",
    summary: "Tìm hiểu 4 cách giải thích hiện tượng sự vật (Bất tương ưng hành, 18 giới, Hữu/Vô vi, Chơn/Tục đế). Tầm quan trọng của khảo sát lý luận và phân tích sâu về Tứ y.",
    fileUrl: "/docs/week2.md"
  },
  {
    id: "week3",
    title: "Tuần 3: Ba loại Sở lượng & Bốn Nguyên lý Khảo sát",
    date: "06.06.2026",
    summary: "Phương pháp nhận thức qua Hiện lượng, Tỷ lượng và Thánh ngôn lượng. Ứng dụng Bốn nguyên lý khảo sát và chánh lý về sự Mâu thuẫn, Liên quan trong Nhiếp loại học.",
    fileUrl: "/docs/week3.md"
  },
  {
    id: "week4",
    title: "Tuần 4: Logic trong Nhiếp Loại Học",
    date: "13.06.2026",
    summary: "Khảo sát đối tượng nhận thức (trực tiếp, suy luận, cực kỳ ẩn tế) và Tứ y. Giới thiệu Nhiếp loại học, phương pháp tranh biện, quy tắc nhân - quả - minh chứng và cách rèn luyện tư duy logic.",
    fileUrl: "/docs/week4.md"
  },
  {
    id: "week5",
    title: "Tuần 5: Đối Tượng Được Nhận Thức & Tiêu Chuẩn Tồn Tại",
    date: "21.06.2026",
    summary: "Mối quan hệ giữa Chủ thể và Đối tượng nhận thức. Tầm quan trọng của tư duy kiểm chứng thực tế, phân biệt pháp hữu vi - vô vi, nhị đế và 3 tiêu chuẩn xác lập sự tồn tại của một pháp.",
    fileUrl: "/docs/week5.md"
  },
  {
    id: "week6",
    title: "Tuần 6: Hệ Thống Phân Loại Đối Tượng Nhận Thức",
    date: "28.06.2026",
    summary: "Tổng quan 12 chương và 5 chủ đề chính. Khảo sát chi tiết 18 giới, 12 xứ, sự đối chiếu giữa pháp thường hằng và vô thường, cùng nguyên lý khẳng định và phủ định trong nhận thức.",
    fileUrl: "/docs/week6.md"
  },
  {
    id: "week7",
    title: "Tuần 7: Sắc Pháp & Ba Tính Riêng - Ba Tính Chung",
    date: "11.07.2026",
    summary: "Hệ thống thuật ngữ đối tượng nhận thức (sở tri, tồn tại, pháp). Định nghĩa sắc pháp theo Kinh bộ và Trung quán, phân tích 3 đặc tính riêng (biến ngại, phương phần, căn cứ xúc chạm) và 3 đặc tính chung.",
    fileUrl: "/docs/week7.md"
  },
  {
    id: "week8",
    title: "Tuần 8: Năm Ngoại Xứ (Sắc, Thanh, Hương, Vị, Xúc)",
    date: "18.07.2026",
    summary: "Bốn nhóm sắc pháp theo Đại thừa A-tỳ-đạt-ma Tập luận. Phân tích năm ngoại xứ, ý nghĩa thuật ngữ 'xứ' như nơi sinh khởi tâm thức, và các bài tập thực hành tranh biện lý luận.",
    fileUrl: "/docs/week8.md"
  },
  {
    id: "week9",
    title: "Tuần 9: Chi Tiết Sắc Xứ, Thanh Xứ & Đối Chiếu Khoa Học",
    date: "25.07.2026",
    summary: "Phân loại hiển sắc, hình sắc và cực quýnh sắc; so sánh quan niệm Phật học với vật lý học hiện đại về ánh sáng và màu sắc. Phân loại thanh xứ theo Câu-xá luận (8 loại) và Tập luận (11 loại).",
    fileUrl: "/docs/week9.md"
  },
  {
    id: "week10",
    title: "Tuần 10: Xúc Xứ, Năm Căn & Sắc Thuộc Pháp Xứ",
    date: "01.08.2026",
    summary: "Khảo sát xúc xứ cấu thành từ đại chủng và đại chủng sở tạo. Phân biệt nội sắc (5 tịnh sắc căn), ngoại sắc và giới thiệu sắc thuộc pháp xứ (đối tượng vật chất đặc biệt chỉ nhận biết qua ý thức).",
    fileUrl: "/docs/week10.md"
  },
  {
    id: "week11",
    title: "Tuần 11: Năm Loại Sắc Thuộc Pháp Xứ & Đại Chủng",
    date: "08.08.2026",
    summary: "Phân tích 5 loại sắc thuộc pháp xứ (Cực lược, Cực quýnh, Thọ sở dẫn, Biến kế sở khởi, Định tự tại sở sinh sắc) và sự khác biệt về quan điểm giữa Duy thức tông và Tiểu thừa.",
    fileUrl: "/docs/week11.md"
  },
  {
    id: "week12",
    title: "Tuần 12: Bốn Đại Chủng (Đất, Nước, Lửa, Gió)",
    date: "22.08.2026",
    summary: "Bản chất, ý nghĩa thuật ngữ 'giới' và 'chủng' của tứ đại (địa, thủy, hỏa, phong). Cơ chế vi tế cấu tạo nên thế giới vật chất và sự phối hợp giữa nhân đại chủng và sở tạo sắc.",
    fileUrl: "/docs/week12.md"
  },
  {
    id: "week13",
    title: "Tuần 13: Pháp Bất Tương Ưng Hành (Năng Lực Tiềm Tàng)",
    date: "29.08.2026",
    summary: "Khái niệm và vai trò của bất tương ưng hành như những dạng năng lực tiềm tàng (nus pa) kết nối vật chất và tâm thức. Phân tích năng lực của thuốc, thói quen và các tướng sinh, trụ, dị, diệt.",
    fileUrl: "/docs/week13.md"
  },
  {
    id: "week14",
    title: "Tuần 14: Quy Luật Nhân Quả & Mở Đầu Pháp Vô Vi",
    date: "05.09.2026",
    summary: "Ôn lại bất tương ưng hành, phân tích sâu các loại nhân duyên (nhân chính, phụ, trực tiếp, gián tiếp) và học thuyết nhân quả. Giới thiệu khái niệm pháp vô vi và 3 loại vô vi theo Câu-xá luận.",
    fileUrl: "/docs/week14.md"
  },
  {
    id: "week15",
    title: "Tuần 15: Phân Loại Pháp Vô Vi & Sở Lượng (Danh - Nghĩa)",
    date: "12.09.2026",
    summary: "Phân loại pháp vô vi theo Câu-xá (3 loại) và Tập luận (8 loại). Khảo sát những luận thuật về sở lượng: phân biệt Danh, Nghĩa, Ví dụ, định nghĩa chung và định nghĩa riêng trong nhận thức.",
    fileUrl: "/docs/week15.md"
  },
  {
    id: "week16",
    title: "Tuần 16: Một và Khác trong Lý Luận Học",
    date: "26.09.2026",
    summary: "Ý nghĩa thâm sâu của 'Một' và 'Khác' đối với việc thấu hiểu vô thường và tính không. Đối chiếu quan điểm Phật giáo và các bộ phái, phân tích các ví dụ bình vàng, chất thể và mầm hạt.",
    fileUrl: "/docs/week16.md"
  }
];
