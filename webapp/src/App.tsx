import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Book, Play, ArrowLeft, Lightbulb, SplitSquareVertical, Zap } from 'lucide-react';
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

const DocumentsTab: React.FC = () => {
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);

  if (selectedDoc) {
    return <MarkdownViewer url={selectedDoc} onBack={() => setSelectedDoc(null)} />;
  }

  return (
    <div className="docs-grid fade-in">
      {chapters.map(chapter => (
        <div key={chapter.id} className="glass-card">
          <span className="doc-date">{chapter.date}</span>
          <h3 className="doc-title">{chapter.title}</h3>
          <p className="doc-summary">{chapter.summary}</p>
          <button className="btn-read" onClick={() => setSelectedDoc(chapter.fileUrl)}>
            <Book size={18} /> Đọc chi tiết
          </button>
        </div>
      ))}
    </div>
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
    } else {
      setStreak(0);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx(currentIdx + 1);
      setSelectedOption(null);
      setAnswered(false);
      setHiddenOptions([]);
      setShowHint(false);
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

      <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="game-header">
          <div className="score-board">Điểm: {score}</div>
          <div className="streak-board"><Zap size={20} fill="var(--warning)" /> Chuỗi: x{streak} (+{streak * 10}%)</div>
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
                {opt}
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
          <div className="explanation-box fade-in" style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(0,0,0,0.2)', borderRadius: '1rem', border: `1px solid ${selectedOption === question.correctAnswerIndex ? 'var(--success)' : 'var(--danger)'}` }}>
            <h3 style={{ color: selectedOption === question.correctAnswerIndex ? 'var(--success)' : 'var(--danger)', marginBottom: '0.5rem' }}>
              {selectedOption === question.correctAnswerIndex ? 'Chính xác!' : 'Chưa chính xác!'}
            </h3>
            <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
              <strong>Giải thích:</strong> {question.explanation}
            </p>
            <button className="btn-primary" onClick={handleNext} style={{ width: '100%', marginTop: 0 }}>
              Tiếp tục
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const GameTab: React.FC = () => {
  const [activeQuiz, setActiveQuiz] = useState<string | null>(null);

  if (activeQuiz) {
    return <QuizEngine quizId={activeQuiz} onBack={() => setActiveQuiz(null)} />;
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
          <button className="btn-read" onClick={() => setActiveQuiz(chapter.id)}>
            <Play size={18} /> Bắt đầu
          </button>
        </div>
      ))}
    </div>
  );
};

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'docs' | 'game'>('docs');

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">KHOA HỌC VÀ TRIẾT HỌC PHẬT GIÁO</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Giảng Sư: Yangten Rinpoche<br/>Việt dịch: Ni Sư Nhật Hạnh</p>
      </header>

      <div className="tabs">
        <button 
          className={`tab-btn ${activeTab === 'docs' ? 'active' : ''}`}
          onClick={() => setActiveTab('docs')}
        >
          <Book size={18} style={{ display: 'inline', verticalAlign: 'text-bottom', marginRight: '5px' }} />
          Tài Liệu
        </button>
        <button 
          className={`tab-btn ${activeTab === 'game' ? 'active' : ''}`}
          onClick={() => setActiveTab('game')}
        >
          <Play size={18} style={{ display: 'inline', verticalAlign: 'text-bottom', marginRight: '5px' }} />
          Trắc Nghiệm Cùng Ghi Nhớ Bài Học
        </button>
      </div>

      <main className="app-main">
        {activeTab === 'docs' ? <DocumentsTab /> : <GameTab />}
      </main>
    </div>
  );
};

export default App;
