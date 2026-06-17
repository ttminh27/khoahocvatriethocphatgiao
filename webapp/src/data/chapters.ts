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
  }
];
