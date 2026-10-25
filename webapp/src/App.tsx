import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Book, Play, ArrowLeft, Lightbulb, SplitSquareVertical, Zap, CheckCircle2, XCircle, Sparkles } from 'lucide-react';
import { chapters } from './data/chapters';
import { quizzes } from './data/quiz';
import './index.css';

const MarkdownViewer: React.FC<{ url: string; onBack: () => void }> = ({ url, onBack }) => {
  const [content, setContent] = useState<string>('Loading...');

  useEffect(() => {
    fetch(url)
      .then(res => res.text())
      .then(text => setContent(text))
      .catch(() => setContent('Error loading content.'));
  }, [url]);

  return (
    <div className="fade-in">
      <button className="back-btn" onClick={onBack}>
        <ArrowLeft size={20} /> Trở về
      </button>
      <div className="md-viewer glass-card">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

const DocumentsTab: React.FC<{
  selectedDoc: string | null;
  onSelectDoc: (url: string | null) => void;
}> = ({ selectedDoc, onSelectDoc }) => {
  if (selectedDoc) {
    return <MarkdownViewer url={selectedDoc} onBack={() => onSelectDoc(null)} />;
  }

  return (
    <div className="docs-grid fade-in">
      {chapters.map(chapter => (
        <div key={chapter.id} className="glass-card">
          <span className="doc-date">{chapter.date}</span>
          <h3 className="doc-title">{chapter.title}</h3>
          <p className="doc-summary">{chapter.summary}</p>
          <button className="btn-read" onClick={() => onSelectDoc(chapter.fileUrl)}>
            <Book size={18} /> Đọc chi tiết
          </button>
        </div>
      ))}
    </div>
  );
};

const playSuccessSound = () => {
  try {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const now = ctx.currentTime;
    
    // Giai điệu chuông tingsha ngũ cung êm dịu: C5 (523Hz), E5 (659Hz), G5 (784Hz)
    const notes = [523.25, 659.25, 783.99];
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + i * 0.07);
      
      gain.gain.setValueAtTime(0, now + i * 0.07);
      gain.gain.linearRampToValueAtTime(0.15, now + i * 0.07 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.07 + 0.45);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start(now + i * 0.07);
      osc.stop(now + i * 0.07 + 0.5);
    });
  } catch {
    // Không làm gián đoạn trải nghiệm nếu trình duyệt chặn âm thanh tự động
  }
};

const Confetti: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const parent = canvas.parentElement;
    canvas.width = parent?.clientWidth || window.innerWidth;
    canvas.height = parent?.clientHeight || window.innerHeight;

    const colors = ['#f59e0b', '#10b981', '#3b82f6', '#ec4899', '#8b5cf6', '#eab308', '#06b6d4'];
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      rotation: number;
      vRot: number;
      alpha: number;
    }> = [];

    const originX = canvas.width / 2;
    const originY = canvas.height * 0.35;

    for (let i = 0; i < 48; i++) {
      const angle = (Math.PI * 2 * i) / 48 + (Math.random() - 0.5) * 0.5;
      const speed = Math.random() * 6 + 3.5;
      particles.push({
        x: originX,
        y: originY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 3.5,
        size: Math.random() * 7 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        vRot: (Math.random() - 0.5) * 12,
        alpha: 1,
      });
    }

    let animationId: number;
    const start = performance.now();

    const render = (now: number) => {
      const elapsed = (now - start) / 1000;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let alive = false;
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.22; // gravity
        p.rotation += p.vRot;
        p.vx *= 0.98; // drag
        p.alpha = Math.max(0, 1 - elapsed / 1.4);

        if (p.alpha > 0) {
          alive = true;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.globalAlpha = p.alpha;
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
          ctx.restore();
        }
      }

      if (alive && elapsed < 1.5) {
        animationId = requestAnimationFrame(render);
      }
    };

    animationId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 50,
      }}
    />
  );
};

const QuizEngine: React.FC<{ quizId: string; onBack: () => void }> = ({ quizId, onBack }) => {
  const questions = quizzes[quizId];
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [pointsEarned, setPointsEarned] = useState<number | null>(null);
  
  // Lifelines
  const [used5050, setUsed5050] = useState(false);
  const [usedHint, setUsedHint] = useState(false);
  const [hiddenOptions, setHiddenOptions] = useState<number[]>([]);

  if (!questions || questions.length === 0) {
    return <div>Quiz không tồn tại!</div>;
  }

  const question = questions[currentIdx];

  const handleOptionClick = (index: number) => {
    if (answered) return; // Prevent multiple clicks
    setSelectedOption(index);
    setAnswered(true);

    const isCorrect = index === question.correctAnswerIndex;
    if (isCorrect) {
      // Base score 10, streak bonus 10% (1 point) per streak count
      const points = 10 + Math.floor(10 * 0.1 * streak);
      setScore(s => s + points);
      setStreak(s => s + 1);
      setPointsEarned(points);
      setShowConfetti(true);
      playSuccessSound();
    } else {
      setStreak(0);
      setPointsEarned(null);
      setShowConfetti(false);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx(currentIdx + 1);
      setSelectedOption(null);
      setAnswered(false);
      setHiddenOptions([]);
      setShowHint(false);
      setShowConfetti(false);
      setPointsEarned(null);
    } else {
      setIsFinished(true);
    }
  };

  const handle5050 = () => {
    if (used5050) return;
    setUsed5050(true);
    const incorrectIndices = question.options
      .map((_, i) => i)
      .filter(i => i !== question.correctAnswerIndex);
    // Hide 2 incorrect options
    const toHide = incorrectIndices.sort(() => 0.5 - Math.random()).slice(0, 2);
    setHiddenOptions(toHide);
  };

  const handleHint = () => {
    if (usedHint || answered) return;
    setUsedHint(true);
    setShowHint(true);
  };

  if (isFinished) {
    return (
      <div className="glass-card quiz-result fade-in">
        <h2>Hoàn thành!</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Điểm của bạn: <strong>{score}</strong></p>
        <p style={{ color: 'var(--text-secondary)' }}>Bạn đã trả lời hết {questions.length} câu hỏi.</p>
        <button className="btn-primary" onClick={onBack}>Trở về danh sách</button>
      </div>
    );
  }

  return (
    <div className="fade-in">
      <button className="back-btn" onClick={onBack}>
        <ArrowLeft size={20} /> Thoát Quiz
      </button>

      <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', overflow: 'hidden' }}>
        {showConfetti && <Confetti />}

        {pointsEarned !== null && (
          <div className="score-float-badge">
            <Sparkles size={16} fill="#fde047" stroke="#fde047" />
            +{pointsEarned} điểm!
            {streak > 1 && <span> • Chuỗi x{streak}</span>}
          </div>
        )}

        <div className="game-header">
          <div className="score-board">Điểm: {score}</div>
          <div className={`streak-board ${pointsEarned !== null ? 'streak-glow' : ''}`}>
            <Zap size={20} fill="var(--warning)" /> Chuỗi: x{streak} (+{streak * 10}%)
          </div>
        </div>

        <div className="lifelines">
          <button className="lifeline-btn" onClick={handle5050} disabled={used5050}>
            <SplitSquareVertical size={16} /> 50:50
          </button>
          <button className="lifeline-btn" onClick={handleHint} disabled={usedHint}>
            <Lightbulb size={16} /> Gợi ý
          </button>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
          Câu {currentIdx + 1} / {questions.length}
        </div>

        <h2 className="question-text">{question.text}</h2>

        <div className="options-grid">
          {question.options.map((opt, idx) => {
            if (hiddenOptions.includes(idx)) {
              return <div key={idx} style={{ visibility: 'hidden' }}></div>;
            }

            let btnClass = "option-btn";
            if (selectedOption !== null) {
              if (idx === question.correctAnswerIndex) btnClass += " correct";
              else if (idx === selectedOption) btnClass += " incorrect";
            }

            return (
              <button 
                key={idx} 
                className={btnClass}
                onClick={() => handleOptionClick(idx)}
                disabled={answered}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', width: '100%', gap: '0.5rem' }}>
                  <span>{opt}</span>
                  {selectedOption !== null && idx === question.correctAnswerIndex && (
                    <CheckCircle2 size={18} className="check-icon-pop" style={{ flexShrink: 0, marginTop: '2px', color: 'var(--success)' }} />
                  )}
                  {selectedOption !== null && idx === selectedOption && idx !== question.correctAnswerIndex && (
                    <XCircle size={18} style={{ flexShrink: 0, marginTop: '2px', color: 'var(--danger)' }} />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {showHint && !answered && (
          <div className="hint-box glass-card fade-in" style={{ marginTop: '1.5rem', borderLeft: '4px solid var(--warning)' }}>
            <Lightbulb size={16} style={{ verticalAlign: 'text-bottom', color: 'var(--warning)', marginRight: '0.5rem' }} />
            <strong style={{ color: 'var(--warning)' }}>Gợi ý:</strong> {question.hint}
          </div>
        )}

        {answered && (
          <div 
            className="explanation-box fade-in" 
            style={{ 
              marginTop: '1.5rem', 
              padding: '1.25rem', 
              background: selectedOption === question.correctAnswerIndex ? 'rgba(21, 128, 61, 0.08)' : 'rgba(185, 28, 28, 0.06)', 
              borderRadius: '0.85rem', 
              border: `1.5px solid ${selectedOption === question.correctAnswerIndex ? 'var(--success)' : 'var(--danger)'}` 
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              {selectedOption === question.correctAnswerIndex ? (
                <>
                  <CheckCircle2 size={22} color="var(--success)" />
                  <h3 style={{ color: 'var(--success)', margin: 0, fontSize: '1.1rem' }}>
                    Chính xác! Tuyệt vời!
                  </h3>
                </>
              ) : (
                <>
                  <XCircle size={22} color="var(--danger)" />
                  <h3 style={{ color: 'var(--danger)', margin: 0, fontSize: '1.1rem' }}>
                    Chưa chính xác!
                  </h3>
                </>
              )}
            </div>
            <p style={{ marginBottom: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              <strong style={{ color: 'var(--text-primary)' }}>Giải thích:</strong> {question.explanation}
            </p>
            <button className="btn-primary" onClick={handleNext} style={{ width: '100%', marginTop: 0 }}>
              {currentIdx + 1 < questions.length ? 'Tiếp tục câu hỏi' : 'Xem kết quả'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const GameTab: React.FC<{
  activeQuiz: string | null;
  onSelectQuiz: (id: string | null) => void;
}> = ({ activeQuiz, onSelectQuiz }) => {
  if (activeQuiz) {
    return <QuizEngine quizId={activeQuiz} onBack={() => onSelectQuiz(null)} />;
  }

  return (
    <div className="quiz-list fade-in">
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Chọn Bài Trắc Nghiệm</h2>
      {chapters.map(chapter => (
        <div key={chapter.id} className="quiz-item glass-card">
          <div>
            <h3>{chapter.title}</h3>
            <p style={{ color: 'var(--text-secondary)' }}>{quizzes[chapter.id]?.length || 0} câu hỏi</p>
          </div>
          <button className="btn-read" onClick={() => onSelectQuiz(chapter.id)}>
            <Play size={18} /> Bắt đầu
          </button>
        </div>
      ))}
    </div>
  );
};

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'docs' | 'game'>('docs');
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);
  const [activeQuiz, setActiveQuiz] = useState<string | null>(null);

  const isDetailView = (activeTab === 'docs' && selectedDoc !== null) || (activeTab === 'game' && activeQuiz !== null);

  return (
    <div className={`app-container ${isDetailView ? 'in-detail-view' : ''}`}>
      <header className="app-header">
        <h1 className="app-title">KHOA HỌC VÀ TRIẾT HỌC PHẬT GIÁO</h1>
        <p className="app-subtitle">
          <span>Giảng Sư: Yangten Rinpoche</span>
          <span className="subtitle-divider">•</span>
          <span>Việt dịch: Ni Sư Nhật Hạnh</span>
        </p>
      </header>

      <div className="tabs">
        <button 
          className={`tab-btn ${activeTab === 'docs' ? 'active' : ''}`}
          onClick={() => setActiveTab('docs')}
        >
          <Book size={16} />
          <span>Tài Liệu</span>
        </button>
        <button 
          className={`tab-btn ${activeTab === 'game' ? 'active' : ''}`}
          onClick={() => setActiveTab('game')}
        >
          <Play size={16} />
          <span className="tab-text-short">Trắc Nghiệm</span>
          <span className="tab-text-full">Trắc Nghiệm Cùng Ghi Nhớ Bài Học</span>
        </button>
      </div>

      <main className="app-main">
        {activeTab === 'docs' ? (
          <DocumentsTab selectedDoc={selectedDoc} onSelectDoc={setSelectedDoc} />
        ) : (
          <GameTab activeQuiz={activeQuiz} onSelectQuiz={setActiveQuiz} />
        )}
      </main>
    </div>
  );
};

export default App;
