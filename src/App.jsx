import { useState, useEffect, useCallback, useRef } from 'react'
import { GAME_DATA, CATEGORY_COLORS, shuffleArray } from './data/gameData'

/* ─── Theme Toggle Icon ─── */
function ThemeToggle({ theme, onToggle }) {
  return (
    <button onClick={onToggle} aria-label="Toggle theme" style={{
      background: 'none', border: '1px solid var(--border-subtle)',
      width: 36, height: 36, borderRadius: 10,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      cursor: 'pointer', fontSize: 17,
      transition: 'all 0.3s ease',
      color: 'var(--text-secondary)',
    }}
    onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--btn-secondary-border-hover)'}
    onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border-subtle)'}
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
}

/* ─── Confetti Effect ─── */
function Confetti({ active }) {
  if (!active) return null;
  const colors = ['#e53e3e', '#4299e1', '#48bb78', '#f6ad55', '#b794f4', '#fc8181', '#4fd1c5'];
  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 100, overflow: 'hidden' }}>
      {Array.from({ length: 40 }).map((_, i) => (
        <div key={i} style={{
          position: 'absolute',
          left: `${Math.random() * 100}%`,
          top: `-${Math.random() * 10}%`,
          width: `${6 + Math.random() * 6}px`,
          height: `${6 + Math.random() * 6}px`,
          borderRadius: Math.random() > 0.5 ? '50%' : '2px',
          background: colors[Math.floor(Math.random() * colors.length)],
          animation: `confetti-fall ${2 + Math.random() * 3}s linear ${Math.random() * 2}s forwards`,
          opacity: 0.9,
        }} />
      ))}
    </div>
  );
}

/* ─── Brand Name (Blood🩸Doctor) ─── */
function BrandName({ size = 'sm' }) {
  const fs = size === 'lg' ? 16 : size === 'md' ? 14 : 13;
  const dropFs = size === 'lg' ? 15 : size === 'md' ? 13 : 12;
  return (
    <span style={{ fontWeight: 800, letterSpacing: -0.3, fontSize: fs }}>
      <span style={{ color: 'var(--text-primary)' }}>Blood</span>
      <span style={{ color: '#e53e3e', fontSize: dropFs, verticalAlign: 'middle' }}>🩸</span>
      <span style={{ color: 'var(--text-primary)' }}>Doctor</span>
    </span>
  );
}

/* ─── Navbar ─── */
function Navbar({ onBack, showBack, rightContent, theme, onThemeToggle }) {
  return (
    <nav style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '14px 24px',
      background: 'var(--bg-nav)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid var(--border-subtle)',
      position: 'sticky', top: 0, zIndex: 50,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        {showBack && (
          <button onClick={onBack} style={{
            background: 'none', border: 'none', color: 'var(--text-muted)',
            fontSize: 13, fontWeight: 500, cursor: 'pointer',
            padding: '5px 10px', borderRadius: 6,
            display: 'flex', alignItems: 'center', gap: 4,
            transition: 'color 0.2s',
            fontFamily: 'var(--font-sans)',
          }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--text-secondary)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
          >
            <span style={{ fontSize: 16 }}>&larr;</span> Menu
          </button>
        )}
        <div>
          <BrandName />
          <div style={{ fontSize: 10, color: 'var(--text-muted)', fontWeight: 500, letterSpacing: 0.3 }}>Lymphoma Challenge</div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        {rightContent && <div>{rightContent}</div>}
        <ThemeToggle theme={theme} onToggle={onThemeToggle} />
      </div>
    </nav>
  );
}

/* ─── Progress Bar ─── */
function ProgressBar({ current, total, color = '#e53e3e' }) {
  return (
    <div style={{ width: '100%', height: 3, background: 'var(--progress-track)', borderRadius: 2, overflow: 'hidden' }}>
      <div style={{
        width: `${(current / total) * 100}%`,
        height: '100%',
        background: `linear-gradient(90deg, ${color}, ${color}aa)`,
        borderRadius: 2,
        transition: 'width 0.6s cubic-bezier(0.22,1,0.36,1)',
      }} />
    </div>
  );
}

/* ─── Score Display ─── */
function ScoreDisplay({ correct, total, label = 'Score', compact = false }) {
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
  const color = pct >= 80 ? '#48bb78' : pct >= 60 ? '#ed8936' : total === 0 ? 'var(--text-muted)' : '#fc8181';
  if (compact) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{
          width: 38, height: 38, borderRadius: '50%',
          border: `2.5px solid ${color}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 12, color,
        }}>{total > 0 ? `${pct}%` : '—'}</div>
        <div>
          <div style={{ fontSize: 10, color: 'var(--text-muted)', letterSpacing: 0.8, textTransform: 'uppercase', fontWeight: 600 }}>{label}</div>
          <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-score-val)' }}>{correct}/{total}</div>
        </div>
      </div>
    );
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
      <div style={{
        width: 56, height: 56, borderRadius: '50%',
        border: `3px solid ${color}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 16, color,
      }}>{total > 0 ? `${pct}%` : '—'}</div>
      <div>
        <div style={{ fontSize: 11, color: 'var(--text-muted)', letterSpacing: 1, textTransform: 'uppercase', fontWeight: 600 }}>{label}</div>
        <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--text-score-val)' }}>{correct}/{total}</div>
      </div>
    </div>
  );
}

/* ─── Category Badge ─── */
function CategoryBadge({ category, size = 'sm' }) {
  const c = CATEGORY_COLORS[category] || { bg: '#4a5568', accent: '#a0aec0' };
  const pad = size === 'lg' ? '5px 14px' : '3px 10px';
  const fs = size === 'lg' ? 12 : 10;
  return (
    <span style={{
      display: 'inline-block', padding: pad, borderRadius: 20,
      background: `${c.accent}10`, color: c.accent, fontSize: fs,
      fontWeight: 700, letterSpacing: 0.6, textTransform: 'uppercase',
      border: `1px solid ${c.accent}25`,
    }}>{category}</span>
  );
}

/* ─── Difficulty Badge ─── */
function DifficultyBadge({ difficulty }) {
  const isAdv = difficulty === 'Advanced';
  const color = isAdv ? '#f6ad55' : '#68d391';
  return (
    <span style={{
      display: 'inline-block', padding: '3px 10px', borderRadius: 20,
      background: `${color}10`, color, fontSize: 10,
      fontWeight: 600, letterSpacing: 0.5,
      border: `1px solid ${color}20`,
    }}>{difficulty}</span>
  );
}

/* ─── Timer Ring ─── */
function TimerRing({ timeLeft }) {
  const color = timeLeft > 10 ? '#48bb78' : timeLeft > 5 ? '#ed8936' : '#fc8181';
  return (
    <div style={{
      width: 44, height: 44, borderRadius: '50%',
      border: `3px solid ${color}`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: 17, color,
      animation: timeLeft <= 5 ? 'timer-pulse 0.5s ease infinite' : 'none',
      transition: 'border-color 0.3s, color 0.3s',
    }}>{timeLeft}</div>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer style={{
      textAlign: 'center', padding: '32px 24px 20px',
      borderTop: '1px solid var(--border-subtle)',
      marginTop: 40,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0, marginBottom: 6 }}>
        <BrandName size="md" />
      </div>
      <div style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: 400, margin: '0 auto' }}>
        <strong style={{ color: 'var(--text-footer-name)' }}>Dr Abdul Mannan</strong> &middot; FRCPath &middot; FCPS
      </div>
      <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4 }}>
        <a href="mailto:blooddoctor.co@gmail.com" style={{ color: '#e53e3e', textDecoration: 'none', fontWeight: 500 }}>
          blooddoctor.co@gmail.com
        </a>
      </div>
      <div style={{ fontSize: 10, color: 'var(--text-dimmed)', marginTop: 8 }}>
        For educational purposes only
      </div>
    </footer>
  );
}


/* ═══════════════════════════════════════════════════════════════
   MAIN GAME COMPONENT
   ═══════════════════════════════════════════════════════════════ */
export default function App() {
  const [mode, setMode] = useState('menu');
  const [scenarioIdx, setScenarioIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [scenarioScore, setScenarioScore] = useState({ correct: 0, total: 0 });
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [quizIdx, setQuizIdx] = useState(0);
  const [quizAnswer, setQuizAnswer] = useState(null);
  const [quizScore, setQuizScore] = useState({ correct: 0, total: 0 });
  const [shuffledScenarios, setShuffledScenarios] = useState([]);
  const [showTeaching, setShowTeaching] = useState(false);
  const [timeLeft, setTimeLeft] = useState(null);
  const [timerActive, setTimerActive] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);
  const [history, setHistory] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const contentRef = useRef(null);

  // Theme state
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('lymphoma-theme') || 'dark'; }
    catch { return 'dark'; }
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('lymphoma-theme', theme); } catch {}
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(t => t === 'dark' ? 'light' : 'dark');
  }, []);

  // Timer
  useEffect(() => {
    let interval;
    if (timerActive && timeLeft > 0) {
      interval = setInterval(() => setTimeLeft(t => t - 1), 1000);
    } else if (timeLeft === 0 && timerActive) {
      setTimerActive(false);
      if (mode === 'quickfire' && quizAnswer === null) {
        setQuizAnswer('__timeout__');
        setQuizScore(s => ({ ...s, total: s.total + 1 }));
      }
    }
    return () => clearInterval(interval);
  }, [timerActive, timeLeft, mode, quizAnswer]);

  // Scroll to top on navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [mode, scenarioIdx, quizIdx, gameComplete]);

  const startScenarios = useCallback(() => {
    const s = shuffleArray(GAME_DATA.clinicalScenarios);
    setShuffledScenarios(s);
    setScenarioIdx(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setShowTeaching(false);
    setScenarioScore({ correct: 0, total: 0 });
    setGameComplete(false);
    setHistory([]);
    setShowConfetti(false);
    setMode('scenario');
  }, []);

  const startQuickFire = useCallback(() => {
    const q = shuffleArray(GAME_DATA.quickFireQuestions).slice(0, 10);
    setQuizQuestions(q);
    setQuizIdx(0);
    setQuizAnswer(null);
    setQuizScore({ correct: 0, total: 0 });
    setGameComplete(false);
    setShowConfetti(false);
    setTimeLeft(15);
    setTimerActive(true);
    setMode('quickfire');
  }, []);

  const handleScenarioAnswer = (idx) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(idx);
    setShowExplanation(true);
    const isCorrect = shuffledScenarios[scenarioIdx].options[idx].correct;
    setScenarioScore(s => ({ correct: s.correct + (isCorrect ? 1 : 0), total: s.total + 1 }));
    setHistory(h => [...h, { question: shuffledScenarios[scenarioIdx].title, correct: isCorrect, category: shuffledScenarios[scenarioIdx].category }]);
  };

  const nextScenario = () => {
    if (scenarioIdx + 1 >= shuffledScenarios.length) {
      setGameComplete(true);
      if (scenarioScore.correct >= Math.ceil(shuffledScenarios.length * 0.6)) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 5000);
      }
      return;
    }
    setScenarioIdx(i => i + 1);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setShowTeaching(false);
  };

  const handleQuizAnswer = (opt) => {
    if (quizAnswer !== null) return;
    setTimerActive(false);
    setQuizAnswer(opt);
    const isCorrect = opt === quizQuestions[quizIdx].a;
    setQuizScore(s => ({ correct: s.correct + (isCorrect ? 1 : 0), total: s.total + 1 }));
  };

  const nextQuiz = () => {
    if (quizIdx + 1 >= quizQuestions.length) {
      setGameComplete(true);
      if (quizScore.correct >= 7) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 5000);
      }
      return;
    }
    setQuizIdx(i => i + 1);
    setQuizAnswer(null);
    setTimeLeft(15);
    setTimerActive(true);
  };

  /* ─── MENU ─── */
  if (mode === 'menu') {
    return (
      <>
        <div className="app-bg" />
        <div className="grid-overlay" />
        <div className="app-content">
          <Navbar showBack={false} theme={theme} onThemeToggle={toggleTheme} />

          <div style={{ maxWidth: 780, margin: '0 auto', padding: '40px 20px' }}>
            {/* Hero */}
            <div className="animate-fadeInUp" style={{ textAlign: 'center', marginBottom: 56 }}>
              <div style={{ marginBottom: 20 }}>
                <span style={{ fontSize: 'clamp(32px, 6vw, 48px)', fontWeight: 900, letterSpacing: -0.5 }}>
                  <span style={{ color: 'var(--text-primary)' }}>Blood</span>
                  <span style={{ color: '#e53e3e', fontSize: 'clamp(30px, 5.5vw, 44px)', verticalAlign: 'middle', filter: 'drop-shadow(0 2px 8px rgba(229,62,62,0.3))' }}>🩸</span>
                  <span style={{ color: 'var(--text-primary)' }}>Doctor</span>
                </span>
              </div>
              <h1 style={{
                fontSize: 'clamp(28px, 5vw, 40px)', fontWeight: 900, margin: '0 0 10px',
                background: 'linear-gradient(135deg, #fc8181 0%, #f6ad55 40%, #68d391 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                letterSpacing: -1,
              }}>Aggressive Lymphoma Challenge</h1>
              <p style={{
                color: 'var(--text-secondary)', fontSize: 15, margin: '0 0 4px',
                maxWidth: 480, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.6,
              }}>
                FRCPath / FCPS Board Review &mdash; Interactive Case-Based Learning
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: 12, marginTop: 6, fontStyle: 'italic' }}>
                By Dr Abdul Mannan
              </p>
            </div>

            {/* Mode Cards */}
            <div style={{ display: 'grid', gap: 16, marginBottom: 24 }}>
              {/* Clinical Scenarios */}
              <button onClick={startScenarios} className="animate-fadeInUp stagger-2" style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--scenario-card-border-blue)',
                borderRadius: 16, padding: '28px 28px',
                cursor: 'pointer', textAlign: 'left',
                transition: 'all 0.35s cubic-bezier(0.22,1,0.36,1)',
                boxShadow: 'var(--card-shadow)',
                fontFamily: 'var(--font-sans)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = 'var(--card-shadow-hover-blue)';
                e.currentTarget.style.borderColor = 'var(--scenario-card-border-blue-hover)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = '';
                e.currentTarget.style.boxShadow = 'var(--card-shadow)';
                e.currentTarget.style.borderColor = 'var(--scenario-card-border-blue)';
              }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20 }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: 14, flexShrink: 0,
                    background: 'var(--scenario-icon-blue-bg)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 26,
                  }}>🏥</div>
                  <div style={{ flex: 1 }}>
                    <h2 style={{ margin: '0 0 6px', fontSize: 19, fontWeight: 700, color: 'var(--text-primary)', letterSpacing: -0.3 }}>Clinical Scenarios</h2>
                    <p style={{ margin: '0 0 14px', color: 'var(--text-secondary)', fontSize: 13, lineHeight: 1.6 }}>
                      8 case-based vignettes with real clinical decisions. Diagnose, classify, and treat patients with aggressive B-cell lymphomas.
                    </p>
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                      {['DLBCL', 'Burkitt', 'MCL', 'PMBCL', 'DHL', 'PTLD'].map(c => (
                        <CategoryBadge key={c} category={c} />
                      ))}
                    </div>
                  </div>
                  <div style={{ color: 'var(--text-dimmed)', fontSize: 20, flexShrink: 0, alignSelf: 'center' }}>&rarr;</div>
                </div>
              </button>

              {/* Quick-Fire Quiz */}
              <button onClick={startQuickFire} className="animate-fadeInUp stagger-3" style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--scenario-card-border-orange)',
                borderRadius: 16, padding: '28px 28px',
                cursor: 'pointer', textAlign: 'left',
                transition: 'all 0.35s cubic-bezier(0.22,1,0.36,1)',
                boxShadow: 'var(--card-shadow)',
                fontFamily: 'var(--font-sans)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = 'var(--card-shadow-hover-orange)';
                e.currentTarget.style.borderColor = 'var(--scenario-card-border-orange-hover)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = '';
                e.currentTarget.style.boxShadow = 'var(--card-shadow)';
                e.currentTarget.style.borderColor = 'var(--scenario-card-border-orange)';
              }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20 }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: 14, flexShrink: 0,
                    background: 'var(--scenario-icon-orange-bg)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 26,
                  }}>⚡</div>
                  <div style={{ flex: 1 }}>
                    <h2 style={{ margin: '0 0 6px', fontSize: 19, fontWeight: 700, color: 'var(--text-primary)', letterSpacing: -0.3 }}>Quick-Fire Quiz</h2>
                    <p style={{ margin: '0 0 14px', color: 'var(--text-secondary)', fontSize: 13, lineHeight: 1.6 }}>
                      10 rapid-fire questions with a 15-second timer. Test your recall on key facts, landmark trials, and classifications.
                    </p>
                    <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                      <span style={{ color: '#f6ad55', fontSize: 12, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
                        <span style={{ fontSize: 14 }}>⏱</span> 15s per question
                      </span>
                      <span style={{ color: 'var(--text-dimmed)' }}>&middot;</span>
                      <span style={{ color: 'var(--text-muted)', fontSize: 12, fontWeight: 500 }}>10 questions</span>
                    </div>
                  </div>
                  <div style={{ color: 'var(--text-dimmed)', fontSize: 20, flexShrink: 0, alignSelf: 'center' }}>&rarr;</div>
                </div>
              </button>
            </div>

            {/* Stats overview */}
            <div className="animate-fadeInUp stagger-4" style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12,
              marginBottom: 20,
            }}>
              {[
                { num: '8', label: 'Clinical Cases', icon: '📋' },
                { num: '15', label: 'Quiz Questions', icon: '🧠' },
                { num: '8', label: 'NHL Subtypes', icon: '🔬' },
              ].map((s, i) => (
                <div key={i} style={{
                  background: 'var(--stat-card-bg)',
                  border: '1px solid var(--stat-card-border)',
                  borderRadius: 12, padding: '16px 14px',
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: 22, marginBottom: 6 }}>{s.icon}</div>
                  <div style={{ fontSize: 22, fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>{s.num}</div>
                  <div style={{ fontSize: 10, color: 'var(--text-muted)', fontWeight: 600, letterSpacing: 0.5, textTransform: 'uppercase', marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>

            <Footer />
          </div>
        </div>
      </>
    );
  }

  /* ─── SCENARIO MODE ─── */
  if (mode === 'scenario') {
    if (gameComplete) {
      const passed = scenarioScore.correct >= Math.ceil(shuffledScenarios.length * 0.6);
      return (
        <>
          <div className="app-bg" />
          <div className="grid-overlay" />
          <div className="app-content">
            <Confetti active={showConfetti} />
            <Navbar showBack onBack={() => setMode('menu')} theme={theme} onThemeToggle={toggleTheme} />
            <div style={{ maxWidth: 680, margin: '0 auto', padding: '40px 20px' }}>
              <div className="animate-scaleIn" style={{ textAlign: 'center', marginBottom: 36 }}>
                <div style={{ fontSize: 64, marginBottom: 16 }}>{passed ? '🎉' : '📚'}</div>
                <h2 style={{
                  fontSize: 28, fontWeight: 800, margin: '0 0 20px',
                  color: passed ? 'var(--correct-text)' : '#f6ad55', letterSpacing: -0.5,
                }}>{passed ? 'Excellent Performance!' : 'Keep Studying!'}</h2>
                <div style={{ display: 'inline-block' }}>
                  <ScoreDisplay correct={scenarioScore.correct} total={scenarioScore.total} label="Clinical Scenarios" />
                </div>
              </div>

              {/* History */}
              <div style={{ display: 'grid', gap: 8, marginBottom: 32 }}>
                {history.map((h, i) => (
                  <div key={i} className={`animate-fadeInUp stagger-${Math.min(i + 1, 8)}`} style={{
                    display: 'flex', alignItems: 'center', gap: 12,
                    padding: '12px 16px', borderRadius: 12,
                    background: h.correct ? 'var(--correct-history-bg)' : 'var(--incorrect-history-bg)',
                    border: `1px solid ${h.correct ? 'var(--correct-history-border)' : 'var(--incorrect-history-border)'}`,
                  }}>
                    <span style={{ fontSize: 18, flexShrink: 0 }}>{h.correct ? '✅' : '❌'}</span>
                    <span style={{ flex: 1, fontSize: 13, color: 'var(--text-vignette)', fontWeight: 500 }}>{h.question}</span>
                    <CategoryBadge category={h.category} />
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
                <button onClick={startScenarios} style={{
                  padding: '12px 28px', borderRadius: 10, border: 'none', cursor: 'pointer',
                  background: 'linear-gradient(135deg, #e53e3e, #c53030)', color: '#fff',
                  fontWeight: 700, fontSize: 14, fontFamily: 'var(--font-sans)',
                  boxShadow: '0 2px 16px rgba(229,62,62,0.25)',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-1px)'}
                onMouseLeave={e => e.currentTarget.style.transform = ''}
                >Try Again</button>
                <button onClick={() => setMode('menu')} style={{
                  padding: '12px 28px', borderRadius: 10, border: '1px solid var(--btn-secondary-border)',
                  cursor: 'pointer', background: 'transparent', color: 'var(--text-secondary)',
                  fontWeight: 600, fontSize: 14, fontFamily: 'var(--font-sans)',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--btn-secondary-border-hover)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--btn-secondary-border)'}
                >Back to Menu</button>
              </div>
              <Footer />
            </div>
          </div>
        </>
      );
    }

    const sc = shuffledScenarios[scenarioIdx];
    const catColor = CATEGORY_COLORS[sc.category] || { accent: '#a0aec0', glow: 'rgba(160,174,192,0.1)' };

    return (
      <>
        <div className="app-bg" />
        <div className="grid-overlay" />
        <div className="app-content">
          <Navbar
            showBack
            onBack={() => setMode('menu')}
            rightContent={<ScoreDisplay correct={scenarioScore.correct} total={scenarioScore.total} compact />}
            theme={theme}
            onThemeToggle={toggleTheme}
          />
          <ProgressBar current={scenarioIdx + 1} total={shuffledScenarios.length} color={catColor.accent} />

          <div style={{ maxWidth: 780, margin: '0 auto', padding: '20px 20px' }} ref={contentRef}>
            {/* Case header */}
            <div className="animate-fadeIn" style={{
              display: 'flex', gap: 8, alignItems: 'center', marginBottom: 16, flexWrap: 'wrap',
            }}>
              <span style={{ color: 'var(--text-muted)', fontSize: 12, fontWeight: 600, fontFamily: 'var(--font-mono)' }}>
                CASE {scenarioIdx + 1}/{shuffledScenarios.length}
              </span>
              <CategoryBadge category={sc.category} size="lg" />
              <DifficultyBadge difficulty={sc.difficulty} />
            </div>

            {/* Vignette Card */}
            <div className="animate-fadeInUp" style={{
              background: 'var(--bg-card)',
              borderRadius: 16, padding: '24px 26px',
              border: `1px solid ${catColor.accent}15`,
              marginBottom: 20,
              boxShadow: `0 4px 30px ${catColor.glow}`,
            }}>
              <h3 style={{
                margin: '0 0 14px', fontSize: 20, fontWeight: 700,
                color: catColor.accent, letterSpacing: -0.3,
              }}>{sc.title}</h3>
              <p style={{
                margin: '0 0 18px', color: 'var(--text-vignette)', fontSize: 14, lineHeight: 1.75,
              }}>{sc.vignette}</p>
              <div style={{
                background: 'var(--question-bg)', borderRadius: 10,
                padding: '14px 18px', borderLeft: `3px solid ${catColor.accent}`,
              }}>
                <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.65 }}>
                  {sc.question}
                </p>
              </div>
            </div>

            {/* Options */}
            <div style={{ display: 'grid', gap: 10, marginBottom: 20 }}>
              {sc.options.map((opt, idx) => {
                let bg = 'var(--bg-option)';
                let border = 'var(--border-option)';
                let textColor = 'var(--text-primary)';
                let letterBg = 'var(--letter-bg)';
                let letterColor = 'var(--letter-color)';
                let opacity = 1;
                let letterContent = String.fromCharCode(65 + idx);

                if (selectedAnswer !== null) {
                  if (opt.correct) {
                    bg = 'var(--correct-bg)';
                    border = 'var(--correct-border)';
                    textColor = 'var(--correct-text)';
                    letterBg = 'var(--correct-letter-bg)';
                    letterColor = '#fff';
                    letterContent = '✓';
                  } else if (idx === selectedAnswer && !opt.correct) {
                    bg = 'var(--incorrect-bg)';
                    border = 'var(--incorrect-border)';
                    textColor = 'var(--incorrect-text)';
                    letterBg = 'var(--incorrect-letter-bg)';
                    letterColor = '#fff';
                    letterContent = '✗';
                  } else {
                    opacity = 'var(--dimmed-opacity)';
                  }
                }

                return (
                  <button key={idx} onClick={() => handleScenarioAnswer(idx)}
                    disabled={selectedAnswer !== null}
                    className={`animate-fadeInUp stagger-${idx + 1}`}
                    style={{
                      display: 'flex', alignItems: 'flex-start', gap: 14,
                      width: '100%', padding: '16px 18px', borderRadius: 12,
                      border: `1.5px solid ${border}`, background: bg,
                      cursor: selectedAnswer !== null ? 'default' : 'pointer',
                      textAlign: 'left', color: textColor, fontSize: 14, lineHeight: 1.6,
                      transition: 'all 0.25s ease',
                      fontWeight: selectedAnswer !== null && opt.correct ? 600 : 400,
                      opacity, fontFamily: 'var(--font-sans)',
                    }}
                    onMouseEnter={e => {
                      if (selectedAnswer === null) {
                        e.currentTarget.style.borderColor = `${catColor.accent}40`;
                        e.currentTarget.style.transform = 'translateX(4px)';
                      }
                    }}
                    onMouseLeave={e => {
                      if (selectedAnswer === null) {
                        e.currentTarget.style.borderColor = 'var(--border-option)';
                        e.currentTarget.style.transform = '';
                      }
                    }}
                  >
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                      background: letterBg, color: letterColor,
                      fontSize: 12, fontWeight: 700, fontFamily: 'var(--font-mono)',
                      transition: 'all 0.25s',
                    }}>{letterContent}</span>
                    <span>{opt.text}</span>
                  </button>
                );
              })}
            </div>

            {/* Explanation */}
            {showExplanation && selectedAnswer !== null && (
              <div className="animate-fadeInUp" style={{
                borderRadius: 14, padding: '20px 24px', marginBottom: 16,
                background: sc.options[selectedAnswer].correct
                  ? 'var(--correct-panel-bg)'
                  : 'var(--incorrect-panel-bg)',
                border: `1px solid ${sc.options[selectedAnswer].correct
                  ? 'var(--correct-panel-border)'
                  : 'var(--incorrect-panel-border)'}`,
              }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10,
                }}>
                  <span style={{ fontSize: 18 }}>{sc.options[selectedAnswer].correct ? '✅' : '❌'}</span>
                  <span style={{
                    fontWeight: 700, fontSize: 14,
                    color: sc.options[selectedAnswer].correct ? 'var(--correct-text)' : 'var(--incorrect-text)',
                  }}>{sc.options[selectedAnswer].correct ? 'Correct!' : 'Incorrect'}</span>
                </div>
                <p style={{ margin: 0, color: 'var(--text-vignette)', fontSize: 13, lineHeight: 1.75 }}>
                  {sc.options[selectedAnswer].explanation}
                </p>
              </div>
            )}

            {/* Teaching Point */}
            {showExplanation && (
              <div className="animate-fadeInUp" style={{ marginBottom: 24 }}>
                <button onClick={() => setShowTeaching(!showTeaching)} style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  width: '100%', padding: '14px 18px',
                  borderRadius: showTeaching ? '12px 12px 0 0' : 12,
                  border: '1px solid var(--teaching-border)',
                  background: 'var(--teaching-bg)',
                  cursor: 'pointer', color: '#f6ad55',
                  fontWeight: 600, fontSize: 13,
                  fontFamily: 'var(--font-sans)',
                  transition: 'all 0.2s',
                }}>
                  <span style={{ fontSize: 16 }}>💡</span>
                  <span>{showTeaching ? '▾' : '▸'} Teaching Point</span>
                </button>
                {showTeaching && (
                  <div className="animate-fadeIn" style={{
                    padding: '16px 20px',
                    background: 'var(--teaching-content-bg)',
                    border: '1px solid var(--teaching-content-border)',
                    borderTop: 'none',
                    borderRadius: '0 0 12px 12px',
                  }}>
                    <p style={{ margin: 0, color: 'var(--text-teaching)', fontSize: 13, lineHeight: 1.75 }}>{sc.teachingPoint}</p>
                  </div>
                )}
              </div>
            )}

            {/* Next Button */}
            {showExplanation && (
              <div className="animate-fadeInUp" style={{ textAlign: 'center', marginBottom: 24 }}>
                <button onClick={nextScenario} style={{
                  padding: '13px 36px', borderRadius: 10, border: 'none', cursor: 'pointer',
                  background: `linear-gradient(135deg, ${catColor.accent}, ${catColor.bg})`,
                  color: '#fff', fontWeight: 700, fontSize: 14,
                  boxShadow: `0 4px 20px ${catColor.glow}`,
                  fontFamily: 'var(--font-sans)',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-1px)'}
                onMouseLeave={e => e.currentTarget.style.transform = ''}
                >
                  {scenarioIdx + 1 >= shuffledScenarios.length ? 'View Results' : 'Next Case →'}
                </button>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }

  /* ─── QUICK-FIRE MODE ─── */
  if (mode === 'quickfire') {
    if (gameComplete) {
      const passed = quizScore.correct >= 7;
      return (
        <>
          <div className="app-bg" />
          <div className="grid-overlay" />
          <div className="app-content">
            <Confetti active={showConfetti} />
            <Navbar showBack onBack={() => setMode('menu')} theme={theme} onThemeToggle={toggleTheme} />
            <div style={{ maxWidth: 600, margin: '0 auto', padding: '60px 20px', textAlign: 'center' }}>
              <div className="animate-scaleIn">
                <div style={{ fontSize: 64, marginBottom: 16 }}>{passed ? '🔥' : '⏱'}</div>
                <h2 style={{
                  fontSize: 28, fontWeight: 800, margin: '0 0 20px',
                  color: passed ? 'var(--correct-text)' : '#f6ad55', letterSpacing: -0.5,
                }}>{passed ? 'Lightning Fast!' : 'Good Attempt!'}</h2>
                <div style={{ display: 'inline-block' }}>
                  <ScoreDisplay correct={quizScore.correct} total={quizScore.total} label="Quick-Fire Quiz" />
                </div>
              </div>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 36 }}>
                <button onClick={startQuickFire} style={{
                  padding: '12px 28px', borderRadius: 10, border: 'none', cursor: 'pointer',
                  background: 'linear-gradient(135deg, #f6ad55, #ed8936)', color: '#1a202c',
                  fontWeight: 700, fontSize: 14, fontFamily: 'var(--font-sans)',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-1px)'}
                onMouseLeave={e => e.currentTarget.style.transform = ''}
                >Try Again</button>
                <button onClick={() => setMode('menu')} style={{
                  padding: '12px 28px', borderRadius: 10, border: '1px solid var(--btn-secondary-border)',
                  cursor: 'pointer', background: 'transparent', color: 'var(--text-secondary)',
                  fontWeight: 600, fontSize: 14, fontFamily: 'var(--font-sans)',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--btn-secondary-border-hover)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--btn-secondary-border)'}
                >Back to Menu</button>
              </div>
              <Footer />
            </div>
          </div>
        </>
      );
    }

    const qq = quizQuestions[quizIdx];

    return (
      <>
        <div className="app-bg" />
        <div className="grid-overlay" />
        <div className="app-content">
          <Navbar
            showBack
            onBack={() => setMode('menu')}
            rightContent={
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                {quizAnswer === null && <TimerRing timeLeft={timeLeft} />}
                <ScoreDisplay correct={quizScore.correct} total={quizScore.total} compact />
              </div>
            }
            theme={theme}
            onThemeToggle={toggleTheme}
          />
          <ProgressBar current={quizIdx + 1} total={quizQuestions.length} color="#f6ad55" />

          <div style={{ maxWidth: 660, margin: '0 auto', padding: '24px 20px' }}>
            <div className="animate-fadeIn" style={{ marginBottom: 20 }}>
              <span style={{ color: 'var(--text-muted)', fontSize: 12, fontWeight: 600, fontFamily: 'var(--font-mono)' }}>
                QUESTION {quizIdx + 1}/{quizQuestions.length}
              </span>
            </div>

            <div className="animate-fadeInUp" style={{
              background: 'var(--bg-card)',
              borderRadius: 16, padding: '28px 26px 24px',
              border: '1px solid var(--border-card)',
              marginBottom: 24,
              boxShadow: 'var(--card-shadow)',
            }}>
              <h3 style={{ margin: '0 0 24px', fontSize: 17, fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.55 }}>
                {qq.q}
              </h3>

              <div style={{ display: 'grid', gap: 10 }}>
                {qq.options.map((opt, i) => {
                  let bg = 'var(--bg-option)';
                  let border = 'var(--border-option)';
                  let textCol = 'var(--text-primary)';
                  let fontW = 400;

                  if (quizAnswer !== null) {
                    if (opt === qq.a) {
                      bg = 'var(--correct-bg)';
                      border = 'var(--correct-border)';
                      textCol = 'var(--correct-text)';
                      fontW = 600;
                    } else if (opt === quizAnswer && opt !== qq.a) {
                      bg = 'var(--incorrect-bg)';
                      border = 'var(--incorrect-border)';
                      textCol = 'var(--incorrect-text)';
                    } else {
                      textCol = 'var(--text-dimmed)';
                    }
                  }

                  return (
                    <button key={i} onClick={() => handleQuizAnswer(opt)}
                      disabled={quizAnswer !== null}
                      className={`animate-fadeInUp stagger-${i + 1}`}
                      style={{
                        padding: '13px 18px', borderRadius: 10,
                        border: `1.5px solid ${border}`, background: bg,
                        cursor: quizAnswer !== null ? 'default' : 'pointer',
                        textAlign: 'left', color: textCol, fontSize: 14,
                        transition: 'all 0.25s', fontWeight: fontW,
                        fontFamily: 'var(--font-sans)',
                      }}
                      onMouseEnter={e => {
                        if (quizAnswer === null) {
                          e.currentTarget.style.borderColor = 'rgba(246,173,85,0.3)';
                          e.currentTarget.style.transform = 'translateX(4px)';
                        }
                      }}
                      onMouseLeave={e => {
                        if (quizAnswer === null) {
                          e.currentTarget.style.borderColor = 'var(--border-option)';
                          e.currentTarget.style.transform = '';
                        }
                      }}
                    >{opt}</button>
                  );
                })}
              </div>

              {quizAnswer === '__timeout__' && (
                <div className="animate-fadeIn" style={{
                  marginTop: 18, padding: '12px 16px', borderRadius: 10,
                  background: 'var(--timeout-bg)',
                  border: '1px solid var(--timeout-border)',
                }}>
                  <p style={{ margin: 0, color: 'var(--incorrect-text)', fontWeight: 600, fontSize: 13 }}>
                    ⏱ Time's up! The answer is: <span style={{ color: 'var(--correct-text)' }}>{qq.a}</span>
                  </p>
                </div>
              )}
            </div>

            {quizAnswer !== null && (
              <div className="animate-fadeInUp" style={{ textAlign: 'center' }}>
                <button onClick={nextQuiz} style={{
                  padding: '13px 36px', borderRadius: 10, border: 'none', cursor: 'pointer',
                  background: 'linear-gradient(135deg, #f6ad55, #ed8936)', color: '#1a202c',
                  fontWeight: 700, fontSize: 14, fontFamily: 'var(--font-sans)',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-1px)'}
                onMouseLeave={e => e.currentTarget.style.transform = ''}
                >
                  {quizIdx + 1 >= quizQuestions.length ? 'View Results' : 'Next →'}
                </button>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }

  return null;
}
