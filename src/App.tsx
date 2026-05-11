import React, { useState } from 'react';
import { 
  BookOpen, 
  Target, 
  MessageSquare, 
  ShieldCheck, 
  Zap, 
  Users, 
  Settings, 
  Briefcase, 
  Database, 
  PieChart, 
  Cpu,
  ChevronRight,
  Info,
  Lightbulb,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedDept, setSelectedDept] = useState('Admin');

  const departments = [
    { name: 'Admin', icon: <Briefcase className="w-4 h-4" /> },
    { name: 'Tài chính', icon: <PieChart className="w-4 h-4" /> },
    { name: 'Nhân sự (HR)', icon: <Users className="w-4 h-4" /> },
    { name: 'IT Admin', icon: <Settings className="w-4 h-4" /> },
    { name: 'Marketing', icon: <Target className="w-4 h-4" /> },
    { name: 'QA & Chất lượng', icon: <ShieldCheck className="w-4 h-4" /> },
    { name: 'Vòng đời Dự án', icon: <Database className="w-4 h-4" /> }
  ];

  const dContent = {
    Delegation: {
      title: "Delegation (Ủy thác)",
      subtitle: "Chiến lược 'Cái gì'",
      desc: "Quyết định phần nào của quy trình nên giao cho AI và phần nào con người nên giữ lại.",
      philosophy: "Không phải là tự động hóa - đó là ĐÒN BẨY (Leverage).",
      points: ["Nhận thức vấn đề", "Nhận thức nền tảng", "Ủy thác nhiệm vụ"],
      color: "bg-blue-500"
    },
    Description: {
      title: "Description (Mô tả)",
      subtitle: "Kỹ năng giao tiếp 'Thế nào'",
      desc: "Kỷ luật về sự rõ ràng - truyền đạt mục tiêu để AI tạo ra kết quả hữu ích.",
      philosophy: "Câu lệnh tốt giống như một bản PRD chuyên nghiệp.",
      points: ["Sản phẩm (Product)", "Quy trình (Process)", "Hiệu suất (Performance)"],
      color: "bg-purple-500"
    },
    Discernment: {
      title: "Discernment (Sáng suốt)",
      subtitle: "Đánh giá phê phán",
      desc: "Đánh giá chính xác tính hữu ích và độ tin cậy của kết quả từ AI.",
      philosophy: "AI tối ưu cho sự trôi chảy, KHÔNG PHẢI độ chính xác.",
      points: ["Sản phẩm", "Quy trình", "Sự cộng tác"],
      color: "bg-amber-500"
    },
    Diligence: {
      title: "Diligence (Cần mẫn)",
      subtitle: "Trách nhiệm đạo đức",
      desc: "Chịu trách nhiệm về những gì chúng ta làm với AI và cách chúng ta thực hiện.",
      philosophy: "AI Fluency không phải là kiểm soát. Đó là sự phối hợp.",
      points: ["Sáng tạo", "Minh bạch", "Triển khai"],
      color: "bg-emerald-500"
    }
  };

  const tripleA = [
    {
      type: "Automation (Tự động hóa)",
      desc: "AI thực thi các tác vụ lặp lại, dựa trên quy tắc với sự can thiệp tối thiểu.",
      role: "Con người: Giám sát & Xác nhận.",
      complexity: "Thấp - Trung bình",
      example: "Tự động hóa thanh toán hóa đơn, sắp xếp email."
    },
    {
      type: "Assistance (Hỗ trợ)",
      desc: "AI đưa ra đề xuất cho các nhiệm vụ phức tạp; con người xem xét và quyết định.",
      role: "Con người: Xem xét & Phê duyệt.",
      complexity: "Trung bình - Cao",
      example: "Chẩn đoán y tế, phê duyệt khoản vay, soạn thảo nội dung."
    },
    {
      type: "Augmentation (Tăng cường)",
      desc: "AI mở rộng khả năng của con người để phân tích chiến lược và ra quyết định.",
      role: "Con người: Diễn giải & Tận dụng.",
      complexity: "Rất cao/Chiến lược",
      example: "Mô phỏng kịch bản tài chính, dự báo xu hướng thị trường."
    }
  ];

  // Mock data for department breakdown based on PDF content
  const deptData = {
    'Admin': [
      { stage: 'Văn phòng phẩm', auto: 'Tự động đặt hàng khi hết', assist: 'Gợi ý nhà cung cấp mới', aug: 'Dự báo nhu cầu theo năm' },
      { stage: 'Cơ sở vật chất', auto: 'Lịch dọn dẹp định kỳ', assist: 'Phân loại ưu tiên bảo trì', aug: 'Mô hình chi phí vận hành 3 năm' }
    ],
    'Tài chính': [
      { stage: 'AP & AR', auto: 'Khớp lệnh 3 chiều', assist: 'Gợi ý xử lý sai lệch', aug: 'Tối ưu hóa thời điểm thanh toán' },
      { stage: 'Dự báo', auto: 'Cập nhật bảng dữ liệu', assist: 'Gợi ý giải thích biến động', aug: 'Stress-test đa kịch bản' }
    ],
    'Nhân sự (HR)': [
      { stage: 'Tuyển dụng', auto: 'Đăng tin & sàng lọc hồ sơ', assist: 'Dự thảo JD & câu hỏi phỏng vấn', aug: 'Phân tích tỷ lệ giữ chân nhân viên' },
      { stage: 'Đào tạo', auto: 'Theo dõi hoàn thành khóa học', assist: 'Cá nhân hóa lộ trình học', aug: 'Dự báo khoảng cách kỹ năng tương lai' }
    ],
    'IT Admin': [
      { stage: 'Quyền truy cập', auto: 'Cấp quyền theo vai trò', assist: 'Gợi ý phê duyệt ngoại lệ', aug: 'Phân tích đồ thị rủi ro đặc quyền' },
      { stage: 'Bảo mật', auto: 'Chặn mã độc đã biết', assist: 'Phân loại cảnh báo ưu tiên', aug: 'Phát hiện tấn công dựa trên hành vi' }
    ],
    'Marketing': [
      { stage: 'Nội dung', auto: 'Đăng bài theo lịch', assist: 'Dự thảo bản thô từ outline', aug: 'Phân tích khoảng trống nội dung' },
      { stage: 'SEO/Ads', auto: 'Điều chỉnh giá thầu tự động', assist: 'Gợi ý từ khóa tiềm năng', aug: 'Mô hình hóa lợi nhuận đa kênh' }
    ],
    'QA & Chất lượng': [
      { stage: 'Chứng chỉ ISO', auto: 'Theo dõi thời hạn hiệu lực', assist: 'Dự thảo báo cáo đánh giá', aug: 'Bản đồ rủi ro đa khung quản lý' },
      { stage: 'Xử lý lỗi (CAPA)', auto: 'Gán số phiếu & nhắc hạn', assist: 'Gợi ý nguyên nhân gốc rễ', aug: 'Phân tích xu hướng lỗi hệ thống' }
    ],
    'Vòng đời Dự án': [
      { stage: 'Lập kế hoạch', auto: 'Gán nhãn ticket', assist: 'Dự thảo User Story', aug: 'Ước tính nỗ lực từ lịch sử' },
      { stage: 'Phát triển', auto: 'Linting & định dạng code', assist: 'Gợi ý logic hàm', aug: 'Phân tích nợ kỹ thuật toàn hệ thống' }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-12">
      {/* Header */}
      <header className="bg-indigo-700 text-white shadow-lg p-6 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-lg">
              <Cpu className="text-indigo-700 w-8 h-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Học Viện AI Fluency</h1>
              <p className="text-indigo-100 text-sm">Làm chủ sự thuần thục AI: 4Ds & 3As</p>
            </div>
          </div>
          <nav className="flex gap-2 bg-indigo-800/50 p-1 rounded-xl">
            <button 
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded-lg transition-all ${activeTab === 'overview' ? 'bg-white text-indigo-700 shadow-sm' : 'hover:bg-white/10'}`}
            >
              Tổng quan
            </button>
            <button 
              onClick={() => setActiveTab('4ds')}
              className={`px-4 py-2 rounded-lg transition-all ${activeTab === '4ds' ? 'bg-white text-indigo-700 shadow-sm' : 'hover:bg-white/10'}`}
            >
              Khung 4Ds
            </button>
            <button 
              onClick={() => setActiveTab('3as')}
              className={`px-4 py-2 rounded-lg transition-all ${activeTab === '3as' ? 'bg-white text-indigo-700 shadow-sm' : 'hover:bg-white/10'}`}
            >
              Chiến lược 3As
            </button>
            <button 
              onClick={() => setActiveTab('prompting')}
              className={`px-4 py-2 rounded-lg transition-all ${activeTab === 'prompting' ? 'bg-white text-indigo-700 shadow-sm' : 'hover:bg-white/10'}`}
            >
              Prompting
            </button>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto mt-8 px-6">
        
        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <h2 className="text-3xl font-bold mb-4 text-indigo-900">AI Fluency là gì?</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Sự thuần thục AI không chỉ là việc ghi nhớ các kỹ thuật. Đó là sự phát triển các kỹ năng, kiến thức, hiểu biết và giá trị lâu dài để cộng tác hiệu quả, an toàn và có đạo đức với trí tuệ nhân tạo.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {['Hiệu quả', 'Năng suất', 'Đạo đức', 'An toàn'].map(item => (
                  <div key={item} className="bg-indigo-50 border border-indigo-100 p-4 rounded-xl flex items-center gap-3">
                    <CheckCircle2 className="text-indigo-600 w-5 h-5" />
                    <span className="font-semibold text-indigo-900">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white rounded-2xl p-8 shadow-md">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Zap className="w-6 h-6" /> Tầm nhìn Tương lai
                </h3>
                <p className="text-indigo-100">
                  "Tương lai thuộc về những người suy nghĩ chiến lược về vị trí của AI, giao tiếp rõ ràng những gì họ cần, đánh giá phê phán những gì họ nhận được và chịu trách nhiệm cho kết quả."
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-slate-800">Nguyên tắc vàng</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 p-1 bg-amber-100 rounded text-amber-700 font-bold text-xs">01</div>
                    <p className="text-slate-600 font-medium">Sự thuần thục (Fluency) {'>'} Sự quen thuộc (Familiarity)</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 p-1 bg-amber-100 rounded text-amber-700 font-bold text-xs">02</div>
                    <p className="text-slate-600 font-medium">Trách nhiệm là không thể ủy thác (Non-delegable)</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 p-1 bg-amber-100 rounded text-amber-700 font-bold text-xs">03</div>
                    <p className="text-slate-600 font-medium">Coi Prompt như là bản Đặc tả sản phẩm (PRD)</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: 4Ds */}
        {activeTab === '4ds' && (
          <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(dContent).map(([key, content]) => (
                <div key={key} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                  <div className={`${content.color} p-4 text-white`}>
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-bold uppercase tracking-wider">{content.title}</h3>
                      <span className="text-xs bg-white/20 px-2 py-1 rounded-full">{content.subtitle}</span>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <p className="text-slate-700 font-medium">{content.desc}</p>
                    <div className="bg-slate-50 p-3 rounded-lg border-l-4 border-indigo-300">
                      <p className="text-xs text-slate-500 uppercase font-bold mb-1 italic">Triết lý cốt lõi</p>
                      <p className="text-slate-800 text-sm font-semibold">"{content.philosophy}"</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">3 Thành phần chính</p>
                      <div className="flex flex-wrap gap-2">
                        {content.points.map(p => (
                          <span key={p} className="bg-indigo-50 text-indigo-700 text-xs px-3 py-1.5 rounded-lg border border-indigo-100 font-bold">
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: 3As & APPLICATIONS */}
        {activeTab === '3as' && (
          <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
            {/* 3As Visualizer */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tripleA.map((a, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Zap className="w-16 h-16 text-indigo-900" />
                  </div>
                  <h3 className="text-xl font-bold text-indigo-700 mb-2">{a.type}</h3>
                  <p className="text-sm text-slate-600 mb-4">{a.desc}</p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                      <Users className="w-4 h-4" /> <span>{a.role}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                      <Settings className="w-4 h-4" /> <span>Phức tạp: {a.complexity}</span>
                    </div>
                    <div className="bg-indigo-50 p-3 rounded-xl">
                      <p className="text-xs font-bold text-indigo-800 mb-1">Ví dụ:</p>
                      <p className="text-xs text-indigo-700 leading-relaxed italic">{a.example}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Department Matrix */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="bg-slate-800 p-4 flex justify-between items-center">
                <h3 className="text-white font-bold flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-indigo-400" /> Ứng dụng thực tế theo phòng ban
                </h3>
              </div>
              <div className="flex overflow-x-auto bg-slate-100 p-2 gap-2 border-b border-slate-200">
                {departments.map(dept => (
                  <button
                    key={dept.name}
                    onClick={() => setSelectedDept(dept.name)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap transition-all ${selectedDept === dept.name ? 'bg-indigo-600 text-white shadow-md' : 'bg-white text-slate-600 hover:bg-slate-50'}`}
                  >
                    {dept.icon} {dept.name}
                  </button>
                ))}
              </div>
              <div className="p-0">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider font-bold">
                      <th className="p-4 border-b border-slate-200">Công việc</th>
                      <th className="p-4 border-b border-slate-200 border-l border-slate-100 bg-blue-50/30 text-blue-800">Automation</th>
                      <th className="p-4 border-b border-slate-200 border-l border-slate-100 bg-amber-50/30 text-amber-800">Assistance</th>
                      <th className="p-4 border-b border-slate-200 border-l border-slate-100 bg-emerald-50/30 text-emerald-800">Augmentation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {deptData[selectedDept].map((row, i) => (
                      <tr key={i} className="group hover:bg-slate-50/80 transition-colors">
                        <td className="p-4 border-b border-slate-100 font-bold text-slate-800 align-top">{row.stage}</td>
                        <td className="p-4 border-b border-slate-100 border-l border-slate-50 text-sm text-slate-600 bg-blue-50/10 group-hover:bg-blue-50/20">{row.auto}</td>
                        <td className="p-4 border-b border-slate-100 border-l border-slate-50 text-sm text-slate-600 bg-amber-50/10 group-hover:bg-amber-50/20">{row.assist}</td>
                        <td className="p-4 border-b border-slate-100 border-l border-slate-50 text-sm text-slate-600 bg-emerald-50/10 group-hover:bg-emerald-50/20">{row.aug}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: PROMPTING */}
        {activeTab === 'prompting' && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold mb-6 text-indigo-900 flex items-center gap-2">
                <MessageSquare className="w-7 h-7" /> Giải phẫu một Câu lệnh (Prompt Anatomy)
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { label: "Vai trò / Persona", example: "'Bạn là kiến trúc sư phần mềm cấp cao...'", color: "border-blue-500" },
                  { label: "Ngữ cảnh", example: "'Dữ liệu này thuộc dịch vụ thanh toán 10k giao dịch/giây...'", color: "border-purple-500" },
                  { label: "Nhiệm vụ (Task)", example: "'Xem xét hàm sau và tìm các race condition.'", color: "border-amber-500" },
                  { label: "Định dạng", example: "'Trả về dưới dạng danh sách đánh số. Mỗi mục dưới 30 từ.'", color: "border-emerald-500" },
                  { label: "Ràng buộc", example: "'Chỉ tập trung vào lỗi hiệu suất, không viết lại cấu trúc.'", color: "border-rose-500" },
                  { label: "Ví dụ (Few-shot)", example: "[Mẫu đầu vào - Mẫu đầu ra mong muốn]", color: "border-indigo-500" }
                ].map((item, idx) => (
                  <div key={idx} className={`p-4 border-l-4 rounded-r-xl bg-slate-50 ${item.color}`}>
                    <p className="text-xs font-bold uppercase text-slate-400 mb-1">{item.label}</p>
                    <p className="text-sm font-medium text-slate-700 italic">{item.example}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-900 text-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-indigo-400">
                  <Lightbulb className="w-6 h-6" /> Kỹ thuật Nâng cao
                </h3>
                <div className="space-y-4">
                  {[
                    { name: 'Chain-of-Thought', desc: 'Yêu cầu AI suy nghĩ từng bước trước khi trả lời.' },
                    { name: 'Tree of Thoughts', desc: 'Khám phá nhiều hướng lý luận song song.' },
                    { name: 'Negative Prompting', desc: 'Nêu rõ những gì AI KHÔNG ĐƯỢC làm.' },
                    { name: 'Meta-Prompting', desc: 'Yêu cầu AI giúp thiết kế hoặc cải thiện chính câu lệnh.' }
                  ].map(tech => (
                    <div key={tech.name} className="group border-b border-slate-700 pb-3 last:border-0">
                      <p className="font-bold text-indigo-300 group-hover:text-white transition-colors">{tech.name}</p>
                      <p className="text-xs text-slate-400">{tech.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold mb-6 text-slate-800 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-rose-500" /> Các lỗi thường gặp
                </h3>
                <div className="space-y-4">
                  {[
                    { error: 'Mơ hồ về nhiệm vụ', fix: 'Sử dụng động từ mạnh: tóm tắt, phân loại, so sánh.' },
                    { error: 'Thiếu ngữ cảnh', fix: 'Đưa mọi kiến thức nền tảng mà chuyên gia cần biết.' },
                    { error: 'Không hướng dẫn lý luận', fix: 'Thêm cụm từ: "Hãy suy nghĩ từng bước một".' },
                    { error: 'Quá tải câu lệnh', fix: 'Chia nhỏ thành các nhiệm vụ phụ (Decomposition).' }
                  ].map(item => (
                    <div key={item.error} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-rose-50 rounded-full flex items-center justify-center">
                        <AlertTriangle className="w-4 h-4 text-rose-500" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-800">{item.error}</p>
                        <p className="text-xs text-slate-500">Cách sửa: {item.fix}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

      </main>

      <footer className="max-w-6xl mx-auto mt-12 px-6 pt-8 border-t border-slate-200">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© 2024 Học Viện AI Fluency - Kiến thức dựa trên Framework Atagrow</p>
          <div className="flex gap-6">
            <span className="flex items-center gap-1 font-bold text-indigo-600"><Info className="w-4 h-4" /> Fluent {'>'} Familiar</span>
            <span className="flex items-center gap-1 font-bold text-emerald-600"><ShieldCheck className="w-4 h-4" /> Ethics by Design</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
