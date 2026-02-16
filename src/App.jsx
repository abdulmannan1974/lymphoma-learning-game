import { useState, useEffect, useCallback, useRef } from 'react'
import { GAME_DATA, CATEGORY_COLORS, shuffleArray } from './data/gameData'

/* ─── Theme Toggle Icon ─── */
function ThemeToggle({ theme, onToggle }) {
  return (
    <button onClick={onToggle} aria-label="Toggle theme" style={{
      background: 'var(--glass-bg)', border: '1px solid var(--border-subtle)',
      width: 38, height: 38, borderRadius: 12,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      cursor: 'pointer', fontSize: 17,
      transition: 'all 0.3s ease',
      color: 'var(--text-secondary)',
      backdropFilter: 'blur(12px)',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = 'var(--btn-secondary-border-hover)';
      e.currentTarget.style.transform = 'scale(1.08)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = 'var(--border-subtle)';
      e.currentTarget.style.transform = 'scale(1)';
    }}
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
}

/* ─── Confetti Effect ─── */
function Confetti({ active }) {
  if (!active) return null;
  const colors = ['#e53e3e', '#4299e1', '#48bb78', '#f6ad55', '#b794f4', '#fc8181', '#4fd1c5', '#f687b3', '#63b3ed', '#68d391'];
  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 100, overflow: 'hidden' }}>
      {Array.from({ length: 50 }).map((_, i) => (
        <div key={i} style={{
          position: 'absolute',
          left: `${Math.random() * 100}%`,
          top: `-${Math.random() * 10}%`,
          width: `${6 + Math.random() * 8}px`,
          height: `${6 + Math.random() * 8}px`,
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

/* ─── Decorative gradient line ─── */
function GradientDivider({ style = {} }) {
  return (
    <div style={{
      height: 2,
      background: 'var(--gradient-hero)',
      borderRadius: 1,
      opacity: 0.3,
      ...style,
    }} />
  );
}

/* ─── Navbar ─── */
function Navbar({ onBack, showBack, rightContent, theme, onThemeToggle }) {
  return (
    <nav style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '14px 24px',
      background: 'var(--bg-nav)',
      backdropFilter: 'var(--nav-blur)',
      WebkitBackdropFilter: 'var(--nav-blur)',
      borderBottom: '1px solid var(--border-subtle)',
      position: 'sticky', top: 0, zIndex: 50,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        {showBack && (
          <button onClick={onBack} style={{
            background: 'var(--glass-bg)', border: '1px solid var(--border-subtle)',
            color: 'var(--text-muted)',
            fontSize: 13, fontWeight: 500, cursor: 'pointer',
            padding: '6px 14px', borderRadius: 10,
            display: 'flex', alignItems: 'center', gap: 5,
            transition: 'all 0.25s ease',
            fontFamily: 'var(--font-sans)',
            backdropFilter: 'blur(12px)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.color = 'var(--text-primary)';
            e.currentTarget.style.borderColor = 'var(--btn-secondary-border-hover)';
            e.currentTarget.style.transform = 'translateX(-2px)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.color = 'var(--text-muted)';
            e.currentTarget.style.borderColor = 'var(--border-subtle)';
            e.currentTarget.style.transform = '';
          }}
          >
            <span style={{ fontSize: 15 }}>&larr;</span> Menu
          </button>
        )}
        <div>
          <BrandName />
          <div style={{ fontSize: 10, color: 'var(--text-muted)', fontWeight: 600, letterSpacing: 0.5, textTransform: 'uppercase' }}>Lymphoma Challenge</div>
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
    <div style={{ width: '100%', height: 3, background: 'var(--progress-track)', overflow: 'hidden' }}>
      <div style={{
        width: `${(current / total) * 100}%`,
        height: '100%',
        background: `linear-gradient(90deg, ${color}, ${color}dd, ${color}88)`,
        borderRadius: 2,
        transition: 'width 0.6s cubic-bezier(0.22,1,0.36,1)',
        boxShadow: `0 0 12px ${color}40`,
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
          width: 40, height: 40, borderRadius: '50%',
          border: `2.5px solid ${color}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 12, color,
          background: `${typeof color === 'string' && color.startsWith('#') ? color + '08' : 'transparent'}`,
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
        width: 64, height: 64, borderRadius: '50%',
        border: `3px solid ${color}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 18, color,
        background: `${typeof color === 'string' && color.startsWith('#') ? color + '0a' : 'transparent'}`,
        boxShadow: `0 0 24px ${typeof color === 'string' && color.startsWith('#') ? color + '15' : 'transparent'}`,
      }}>{total > 0 ? `${pct}%` : '—'}</div>
      <div>
        <div style={{ fontSize: 11, color: 'var(--text-muted)', letterSpacing: 1, textTransform: 'uppercase', fontWeight: 600 }}>{label}</div>
        <div style={{ fontSize: 20, fontWeight: 800, color: 'var(--text-score-val)' }}>{correct}/{total}</div>
      </div>
    </div>
  );
}

/* ─── Category Badge ─── */
function CategoryBadge({ category, size = 'sm' }) {
  const c = CATEGORY_COLORS[category] || { bg: '#4a5568', accent: '#a0aec0' };
  const pad = size === 'lg' ? '5px 14px' : '4px 11px';
  const fs = size === 'lg' ? 11 : 10;
  return (
    <span style={{
      display: 'inline-block', padding: pad, borderRadius: 20,
      background: `${c.accent}14`, color: c.accent, fontSize: fs,
      fontWeight: 700, letterSpacing: 0.6, textTransform: 'uppercase',
      border: `1px solid ${c.accent}28`,
      backdropFilter: 'blur(8px)',
    }}>{category}</span>
  );
}

/* ─── Difficulty Badge ─── */
function DifficultyBadge({ difficulty }) {
  const isAdv = difficulty === 'Advanced';
  const color = isAdv ? '#f6ad55' : '#68d391';
  return (
    <span style={{
      display: 'inline-block', padding: '4px 11px', borderRadius: 20,
      background: `${color}14`, color, fontSize: 10,
      fontWeight: 600, letterSpacing: 0.5,
      border: `1px solid ${color}25`,
    }}>{difficulty}</span>
  );
}

/* ─── Timer Ring ─── */
function TimerRing({ timeLeft }) {
  const color = timeLeft > 10 ? '#48bb78' : timeLeft > 5 ? '#ed8936' : '#fc8181';
  return (
    <div style={{
      width: 46, height: 46, borderRadius: '50%',
      border: `3px solid ${color}`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: 17, color,
      animation: timeLeft <= 5 ? 'timer-pulse 0.5s ease infinite' : 'none',
      transition: 'border-color 0.3s, color 0.3s',
      background: `${color}0a`,
      boxShadow: timeLeft <= 5 ? `0 0 20px ${color}25` : 'none',
    }}>{timeLeft}</div>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer style={{
      textAlign: 'center', padding: '36px 24px 24px',
      borderTop: '1px solid var(--border-subtle)',
      marginTop: 48,
    }}>
      <GradientDivider style={{ maxWidth: 120, margin: '0 auto 20px', opacity: 0.2 }} />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0, marginBottom: 6 }}>
        <BrandName size="md" />
      </div>
      <div style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: 400, margin: '0 auto' }}>
        <strong style={{ color: 'var(--text-footer-name)' }}>Dr Abdul Mannan</strong> &middot; FRCPath &middot; FCPS
      </div>
      <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4 }}>
        <a href="mailto:blooddoctor.co@gmail.com" style={{
          color: '#e53e3e', textDecoration: 'none', fontWeight: 500,
          transition: 'opacity 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
        onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          blooddoctor.co@gmail.com
        </a>
      </div>
      <div style={{ fontSize: 10, color: 'var(--text-dimmed)', marginTop: 10 }}>
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
    const q = shuffleArray(GAME_DATA.quickFireQuestions).slice(0, 15);
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
      if (quizScore.correct >= 10) {
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

  /* Stat card config for colourful stats */
  const statCards = [
    { num: '20', label: 'Clinical Cases', icon: '📋', gradient: 'var(--stat-gradient-1)', border: 'var(--stat-border-1)', numColor: 'var(--stat-num-1)', iconBg: 'var(--stat-icon-1)' },
    { num: '40+', label: 'Quiz Questions', icon: '🧠', gradient: 'var(--stat-gradient-2)', border: 'var(--stat-border-2)', numColor: 'var(--stat-num-2)', iconBg: 'var(--stat-icon-2)' },
    { num: '11', label: 'NHL Subtypes', icon: '🔬', gradient: 'var(--stat-gradient-3)', border: 'var(--stat-border-3)', numColor: 'var(--stat-num-3)', iconBg: 'var(--stat-icon-3)' },
  ];

  /* ─── MENU ─── */
  if (mode === 'menu') {
    return (
      <>
        <div className="app-bg" />
        <div className="app-bg-extra" />
        <div className="grid-overlay" />
        <div className="app-content">
          <Navbar showBack={false} theme={theme} onThemeToggle={toggleTheme} />

          <div style={{ maxWidth: 780, margin: '0 auto', padding: '44px 20px' }}>
            {/* Hero */}
            <div className="animate-fadeInUp" style={{ textAlign: 'center', marginBottom: 60 }}>
              <div style={{ marginBottom: 22 }}>
                <span style={{ fontSize: 'clamp(34px, 6vw, 52px)', fontWeight: 900, letterSpacing: -0.5 }}>
                  <span style={{ color: 'var(--text-primary)' }}>Blood</span>
                  <span style={{
                    color: '#e53e3e',
                    fontSize: 'clamp(30px, 5.5vw, 46px)',
                    verticalAlign: 'middle',
                    filter: 'drop-shadow(0 3px 12px rgba(229,62,62,0.35))',
                  }}>🩸</span>
                  <span style={{ color: 'var(--text-primary)' }}>Doctor</span>
                </span>
              </div>
              <h1 style={{
                fontSize: 'clamp(28px, 5vw, 42px)', fontWeight: 900, margin: '0 0 12px',
                background: 'var(--gradient-hero)',
                backgroundSize: '200% auto',
                animation: 'gradient-shift 6s ease infinite',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                letterSpacing: -1,
              }}>Aggressive Lymphoma Challenge</h1>
              <p style={{
                color: 'var(--text-secondary)', fontSize: 15, margin: '0 0 4px',
                maxWidth: 500, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.65,
              }}>
                FRCPath / FCPS Board Review &mdash; Interactive Case-Based Learning
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: 12, marginTop: 8, fontStyle: 'italic' }}>
                By Dr Abdul Mannan
              </p>
              <GradientDivider style={{ maxWidth: 200, margin: '24px auto 0' }} />
            </div>

            {/* Mode Cards */}
            <div style={{ display: 'grid', gap: 18, marginBottom: 28 }}>
              {/* Clinical Scenarios */}
              <button onClick={startScenarios} className="animate-fadeInUp stagger-2" style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--scenario-card-border-blue)',
                borderRadius: 20, padding: '30px 30px',
                cursor: 'pointer', textAlign: 'left',
                transition: 'all 0.4s cubic-bezier(0.22,1,0.36,1)',
                boxShadow: 'var(--card-shadow)',
                fontFamily: 'var(--font-sans)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px) scale(1.01)';
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
                    width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                    background: 'var(--scenario-icon-blue-bg)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 28,
                    border: '1px solid rgba(99,179,237,0.1)',
                  }}>🏥</div>
                  <div style={{ flex: 1 }}>
                    <h2 style={{ margin: '0 0 8px', fontSize: 20, fontWeight: 800, color: 'var(--text-primary)', letterSpacing: -0.3 }}>Clinical Scenarios</h2>
                    <p style={{ margin: '0 0 16px', color: 'var(--text-secondary)', fontSize: 13, lineHeight: 1.65 }}>
                      20 case-based vignettes with real clinical decisions. Diagnose, classify, and treat patients with aggressive B-cell lymphomas.
                    </p>
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                      {['DLBCL', 'Burkitt', 'MCL', 'PMBCL', 'DHL', 'PTLD', 'MGZL'].map(c => (
                        <CategoryBadge key={c} category={c} />
                      ))}
                    </div>
                  </div>
                  <div style={{
                    color: 'var(--text-dimmed)', fontSize: 22, flexShrink: 0, alignSelf: 'center',
                    transition: 'transform 0.3s, color 0.3s',
                  }}>&rarr;</div>
                </div>
              </button>

              {/* Quick-Fire Quiz */}
              <button onClick={startQuickFire} className="animate-fadeInUp stagger-3" style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--scenario-card-border-orange)',
                borderRadius: 20, padding: '30px 30px',
                cursor: 'pointer', textAlign: 'left',
                transition: 'all 0.4s cubic-bezier(0.22,1,0.36,1)',
                boxShadow: 'var(--card-shadow)',
                fontFamily: 'var(--font-sans)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px) scale(1.01)';
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
                    width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                    background: 'var(--scenario-icon-orange-bg)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 28,
                    border: '1px solid rgba(246,173,85,0.1)',
                  }}>⚡</div>
                  <div style={{ flex: 1 }}>
                    <h2 style={{ margin: '0 0 8px', fontSize: 20, fontWeight: 800, color: 'var(--text-primary)', letterSpacing: -0.3 }}>Quick-Fire Quiz</h2>
                    <p style={{ margin: '0 0 16px', color: 'var(--text-secondary)', fontSize: 13, lineHeight: 1.65 }}>
                      15 rapid-fire questions from a pool of 40+ with a 15-second timer. Test your recall on key facts, landmark trials, and classifications.
                    </p>
                    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                      <span style={{
                        color: '#f6ad55', fontSize: 12, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 5,
                        background: 'rgba(246,173,85,0.08)', padding: '4px 10px', borderRadius: 8,
                        border: '1px solid rgba(246,173,85,0.12)',
                      }}>
                        <span style={{ fontSize: 14 }}>⏱</span> 15s per question
                      </span>
                      <span style={{ color: 'var(--text-dimmed)' }}>&middot;</span>
                      <span style={{ color: 'var(--text-muted)', fontSize: 12, fontWeight: 500 }}>15 questions</span>
                    </div>
                  </div>
                  <div style={{
                    color: 'var(--text-dimmed)', fontSize: 22, flexShrink: 0, alignSelf: 'center',
                    transition: 'transform 0.3s, color 0.3s',
                  }}>&rarr;</div>
                </div>
              </button>
            </div>

            {/* Stats overview — colourful */}
            <div className="animate-fadeInUp stagger-4" style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14,
              marginBottom: 24,
            }}>
              {statCards.map((s, i) => (
                <div key={i} style={{
                  background: s.gradient,
                  border: `1px solid ${s.border}`,
                  borderRadius: 16, padding: '20px 16px',
                  textAlign: 'center',
                  backdropFilter: 'blur(12px)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={e => e.currentTarget.style.transform = ''}
                >
                  <div style={{
                    fontSize: 24, marginBottom: 8,
                    width: 44, height: 44, borderRadius: 12,
                    background: s.iconBg,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 10px',
                  }}>{s.icon}</div>
                  <div style={{
                    fontSize: 24, fontWeight: 800, color: s.numColor,
                    fontFamily: 'var(--font-mono)',
                  }}>{s.num}</div>
                  <div style={{
                    fontSize: 10, color: 'var(--text-muted)', fontWeight: 600,
                    letterSpacing: 0.6, textTransform: 'uppercase', marginTop: 4,
                  }}>{s.label}</div>
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
          <div className="app-bg-extra" />
          <div className="grid-overlay" />
          <div className="app-content">
            <Confetti active={showConfetti} />
            <Navbar showBack onBack={() => setMode('menu')} theme={theme} onThemeToggle={toggleTheme} />
            <div style={{ maxWidth: 680, margin: '0 auto', padding: '48px 20px' }}>
              <div className="animate-scaleIn" style={{ textAlign: 'center', marginBottom: 40 }}>
                <div style={{ fontSize: 72, marginBottom: 18 }}>{passed ? '🎉' : '📚'}</div>
                <h2 style={{
                  fontSize: 30, fontWeight: 900, margin: '0 0 8px',
                  background: passed
                    ? 'linear-gradient(135deg, #48bb78, #68d391)'
                    : 'linear-gradient(135deg, #f6ad55, #ed8936)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  letterSpacing: -0.5,
                }}>{passed ? 'Excellent Performance!' : 'Keep Studying!'}</h2>
                <GradientDivider style={{ maxWidth: 100, margin: '16px auto 24px' }} />
                <div style={{ display: 'inline-block' }}>
                  <ScoreDisplay correct={scenarioScore.correct} total={scenarioScore.total} label="Clinical Scenarios" />
                </div>
              </div>

              {/* History */}
              <div style={{ display: 'grid', gap: 10, marginBottom: 36 }}>
                {history.map((h, i) => (
                  <div key={i} className={`animate-fadeInUp stagger-${Math.min(i + 1, 8)}`} style={{
                    display: 'flex', alignItems: 'center', gap: 12,
                    padding: '14px 18px', borderRadius: 14,
                    background: h.correct ? 'var(--correct-history-bg)' : 'var(--incorrect-history-bg)',
                    border: `1px solid ${h.correct ? 'var(--correct-history-border)' : 'var(--incorrect-history-border)'}`,
                    backdropFilter: 'blur(8px)',
                    transition: 'transform 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateX(4px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = ''}
                  >
                    <span style={{ fontSize: 20, flexShrink: 0 }}>{h.correct ? '✅' : '❌'}</span>
                    <span style={{ flex: 1, fontSize: 13, color: 'var(--text-vignette)', fontWeight: 500 }}>{h.question}</span>
                    <CategoryBadge category={h.category} />
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
                <button onClick={startScenarios} style={{
                  padding: '13px 32px', borderRadius: 12, border: 'none', cursor: 'pointer',
                  background: 'var(--gradient-primary)', color: '#fff',
                  fontWeight: 700, fontSize: 14, fontFamily: 'var(--font-sans)',
                  boxShadow: '0 4px 20px rgba(229,62,62,0.3)',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={e => e.currentTarget.style.transform = ''}
                >Try Again</button>
                <button onClick={() => setMode('menu')} style={{
                  padding: '13px 32px', borderRadius: 12, border: '1px solid var(--btn-secondary-border)',
                  cursor: 'pointer', background: 'var(--glass-bg)', color: 'var(--text-secondary)',
                  fontWeight: 600, fontSize: 14, fontFamily: 'var(--font-sans)',
                  backdropFilter: 'blur(12px)',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--btn-secondary-border-hover)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--btn-secondary-border)';
                  e.currentTarget.style.transform = '';
                }}
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
        <div className="app-bg-extra" />
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

          <div style={{ maxWidth: 780, margin: '0 auto', padding: '24px 20px' }} ref={contentRef}>
            {/* Case header */}
            <div className="animate-fadeIn" style={{
              display: 'flex', gap: 8, alignItems: 'center', marginBottom: 18, flexWrap: 'wrap',
            }}>
              <span style={{
                color: 'var(--text-muted)', fontSize: 12, fontWeight: 700, fontFamily: 'var(--font-mono)',
                background: 'var(--glass-bg)', padding: '4px 10px', borderRadius: 8,
                border: '1px solid var(--border-subtle)',
              }}>
                CASE {scenarioIdx + 1}/{shuffledScenarios.length}
              </span>
              <CategoryBadge category={sc.category} size="lg" />
              <DifficultyBadge difficulty={sc.difficulty} />
            </div>

            {/* Vignette Card */}
            <div className="animate-fadeInUp" style={{
              background: 'var(--bg-card)',
              borderRadius: 20, padding: '28px 28px',
              border: `1px solid ${catColor.accent}18`,
              marginBottom: 22,
              boxShadow: `0 4px 36px ${catColor.glow}`,
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
            }}>
              <h3 style={{
                margin: '0 0 16px', fontSize: 21, fontWeight: 800,
                color: catColor.accent, letterSpacing: -0.3,
              }}>{sc.title}</h3>
              <p style={{
                margin: '0 0 20px', color: 'var(--text-vignette)', fontSize: 14, lineHeight: 1.8,
              }}>{sc.vignette}</p>
              <div style={{
                background: 'var(--question-bg)', borderRadius: 12,
                padding: '16px 20px',
                borderLeft: `4px solid ${catColor.accent}`,
                backdropFilter: 'blur(8px)',
              }}>
                <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.7 }}>
                  {sc.question}
                </p>
              </div>
            </div>

            {/* Options */}
            <div style={{ display: 'grid', gap: 10, marginBottom: 22 }}>
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
                      width: '100%', padding: '16px 20px', borderRadius: 14,
                      border: `1.5px solid ${border}`, background: bg,
                      cursor: selectedAnswer !== null ? 'default' : 'pointer',
                      textAlign: 'left', color: textColor, fontSize: 14, lineHeight: 1.65,
                      transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)',
                      fontWeight: selectedAnswer !== null && opt.correct ? 600 : 400,
                      opacity, fontFamily: 'var(--font-sans)',
                      backdropFilter: 'blur(8px)',
                    }}
                    onMouseEnter={e => {
                      if (selectedAnswer === null) {
                        e.currentTarget.style.borderColor = `${catColor.accent}45`;
                        e.currentTarget.style.transform = 'translateX(6px)';
                        e.currentTarget.style.boxShadow = `0 4px 20px ${catColor.glow}`;
                      }
                    }}
                    onMouseLeave={e => {
                      if (selectedAnswer === null) {
                        e.currentTarget.style.borderColor = 'var(--border-option)';
                        e.currentTarget.style.transform = '';
                        e.currentTarget.style.boxShadow = 'none';
                      }
                    }}
                  >
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      width: 30, height: 30, borderRadius: '50%', flexShrink: 0,
                      background: letterBg, color: letterColor,
                      fontSize: 12, fontWeight: 700, fontFamily: 'var(--font-mono)',
                      transition: 'all 0.3s',
                    }}>{letterContent}</span>
                    <span>{opt.text}</span>
                  </button>
                );
              })}
            </div>

            {/* Explanation */}
            {showExplanation && selectedAnswer !== null && (
              <div className="animate-fadeInUp" style={{
                borderRadius: 16, padding: '22px 26px', marginBottom: 18,
                background: sc.options[selectedAnswer].correct
                  ? 'var(--correct-panel-bg)'
                  : 'var(--incorrect-panel-bg)',
                border: `1px solid ${sc.options[selectedAnswer].correct
                  ? 'var(--correct-panel-border)'
                  : 'var(--incorrect-panel-border)'}`,
                backdropFilter: 'blur(12px)',
              }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12,
                }}>
                  <span style={{ fontSize: 20 }}>{sc.options[selectedAnswer].correct ? '✅' : '❌'}</span>
                  <span style={{
                    fontWeight: 800, fontSize: 15,
                    color: sc.options[selectedAnswer].correct ? 'var(--correct-text)' : 'var(--incorrect-text)',
                  }}>{sc.options[selectedAnswer].correct ? 'Correct!' : 'Incorrect'}</span>
                </div>
                <p style={{ margin: 0, color: 'var(--text-vignette)', fontSize: 13, lineHeight: 1.8 }}>
                  {sc.options[selectedAnswer].explanation}
                </p>
              </div>
            )}

            {/* Teaching Point */}
            {showExplanation && (
              <div className="animate-fadeInUp" style={{ marginBottom: 28 }}>
                <button onClick={() => setShowTeaching(!showTeaching)} style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  width: '100%', padding: '15px 20px',
                  borderRadius: showTeaching ? '14px 14px 0 0' : 14,
                  border: '1px solid var(--teaching-border)',
                  background: 'var(--teaching-bg)',
                  cursor: 'pointer', color: '#f6ad55',
                  fontWeight: 700, fontSize: 13,
                  fontFamily: 'var(--font-sans)',
                  transition: 'all 0.25s',
                  backdropFilter: 'blur(8px)',
                }}>
                  <span style={{ fontSize: 17 }}>💡</span>
                  <span>{showTeaching ? '▾' : '▸'} Teaching Point</span>
                </button>
                {showTeaching && (
                  <div className="animate-fadeIn" style={{
                    padding: '18px 22px',
                    background: 'var(--teaching-content-bg)',
                    border: '1px solid var(--teaching-content-border)',
                    borderTop: 'none',
                    borderRadius: '0 0 14px 14px',
                    backdropFilter: 'blur(8px)',
                  }}>
                    <p style={{ margin: 0, color: 'var(--text-teaching)', fontSize: 13, lineHeight: 1.8 }}>{sc.teachingPoint}</p>
                  </div>
                )}
              </div>
            )}

            {/* Next Button */}
            {showExplanation && (
              <div className="animate-fadeInUp" style={{ textAlign: 'center', marginBottom: 28 }}>
                <button onClick={nextScenario} style={{
                  padding: '14px 40px', borderRadius: 12, border: 'none', cursor: 'pointer',
                  background: `linear-gradient(135deg, ${catColor.accent}, ${catColor.bg})`,
                  color: '#fff', fontWeight: 700, fontSize: 14,
                  boxShadow: `0 4px 24px ${catColor.glow}`,
                  fontFamily: 'var(--font-sans)',
                  transition: 'all 0.3s',
                  letterSpacing: 0.2,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = `0 8px 32px ${catColor.glow}`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = '';
                  e.currentTarget.style.boxShadow = `0 4px 24px ${catColor.glow}`;
                }}
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
      const passed = quizScore.correct >= 10;
      return (
        <>
          <div className="app-bg" />
          <div className="app-bg-extra" />
          <div className="grid-overlay" />
          <div className="app-content">
            <Confetti active={showConfetti} />
            <Navbar showBack onBack={() => setMode('menu')} theme={theme} onThemeToggle={toggleTheme} />
            <div style={{ maxWidth: 600, margin: '0 auto', padding: '60px 20px', textAlign: 'center' }}>
              <div className="animate-scaleIn">
                <div style={{ fontSize: 72, marginBottom: 18 }}>{passed ? '🔥' : '⏱'}</div>
                <h2 style={{
                  fontSize: 30, fontWeight: 900, margin: '0 0 8px',
                  background: passed
                    ? 'linear-gradient(135deg, #f6ad55, #ed8936, #e53e3e)'
                    : 'linear-gradient(135deg, #f6ad55, #ed8936)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  letterSpacing: -0.5,
                }}>{passed ? 'Lightning Fast!' : 'Good Attempt!'}</h2>
                <GradientDivider style={{ maxWidth: 100, margin: '16px auto 24px' }} />
                <div style={{ display: 'inline-block' }}>
                  <ScoreDisplay correct={quizScore.correct} total={quizScore.total} label="Quick-Fire Quiz" />
                </div>
              </div>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 40 }}>
                <button onClick={startQuickFire} style={{
                  padding: '13px 32px', borderRadius: 12, border: 'none', cursor: 'pointer',
                  background: 'var(--gradient-orange)', color: '#1a202c',
                  fontWeight: 700, fontSize: 14, fontFamily: 'var(--font-sans)',
                  boxShadow: '0 4px 20px rgba(246,173,85,0.3)',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={e => e.currentTarget.style.transform = ''}
                >Try Again</button>
                <button onClick={() => setMode('menu')} style={{
                  padding: '13px 32px', borderRadius: 12, border: '1px solid var(--btn-secondary-border)',
                  cursor: 'pointer', background: 'var(--glass-bg)', color: 'var(--text-secondary)',
                  fontWeight: 600, fontSize: 14, fontFamily: 'var(--font-sans)',
                  backdropFilter: 'blur(12px)',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--btn-secondary-border-hover)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--btn-secondary-border)';
                  e.currentTarget.style.transform = '';
                }}
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
        <div className="app-bg-extra" />
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

          <div style={{ maxWidth: 660, margin: '0 auto', padding: '28px 20px' }}>
            <div className="animate-fadeIn" style={{ marginBottom: 22 }}>
              <span style={{
                color: 'var(--text-muted)', fontSize: 12, fontWeight: 700, fontFamily: 'var(--font-mono)',
                background: 'var(--glass-bg)', padding: '4px 10px', borderRadius: 8,
                border: '1px solid var(--border-subtle)',
              }}>
                QUESTION {quizIdx + 1}/{quizQuestions.length}
              </span>
            </div>

            <div className="animate-fadeInUp" style={{
              background: 'var(--bg-card)',
              borderRadius: 20, padding: '30px 28px 26px',
              border: '1px solid var(--border-card)',
              marginBottom: 26,
              boxShadow: 'var(--card-shadow)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
            }}>
              <h3 style={{ margin: '0 0 26px', fontSize: 17, fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.6 }}>
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
                        padding: '14px 20px', borderRadius: 12,
                        border: `1.5px solid ${border}`, background: bg,
                        cursor: quizAnswer !== null ? 'default' : 'pointer',
                        textAlign: 'left', color: textCol, fontSize: 14,
                        transition: 'all 0.3s cubic-bezier(0.22,1,0.36,1)',
                        fontWeight: fontW,
                        fontFamily: 'var(--font-sans)',
                        backdropFilter: 'blur(8px)',
                      }}
                      onMouseEnter={e => {
                        if (quizAnswer === null) {
                          e.currentTarget.style.borderColor = 'rgba(246,173,85,0.35)';
                          e.currentTarget.style.transform = 'translateX(6px)';
                          e.currentTarget.style.boxShadow = '0 4px 20px rgba(246,173,85,0.1)';
                        }
                      }}
                      onMouseLeave={e => {
                        if (quizAnswer === null) {
                          e.currentTarget.style.borderColor = 'var(--border-option)';
                          e.currentTarget.style.transform = '';
                          e.currentTarget.style.boxShadow = 'none';
                        }
                      }}
                    >{opt}</button>
                  );
                })}
              </div>

              {quizAnswer === '__timeout__' && (
                <div className="animate-fadeIn" style={{
                  marginTop: 20, padding: '14px 18px', borderRadius: 12,
                  background: 'var(--timeout-bg)',
                  border: '1px solid var(--timeout-border)',
                  backdropFilter: 'blur(8px)',
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
                  padding: '14px 40px', borderRadius: 12, border: 'none', cursor: 'pointer',
                  background: 'var(--gradient-orange)', color: '#1a202c',
                  fontWeight: 700, fontSize: 14, fontFamily: 'var(--font-sans)',
                  boxShadow: '0 4px 20px rgba(246,173,85,0.3)',
                  transition: 'all 0.3s',
                  letterSpacing: 0.2,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(246,173,85,0.35)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = '';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(246,173,85,0.3)';
                }}
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
