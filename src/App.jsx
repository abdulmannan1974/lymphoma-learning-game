import { useState, useEffect, useCallback, useRef } from 'react'
import { GAME_DATA, CATEGORY_COLORS, shuffleArray } from './data/gameData'

/* ═══════════════════════════════════════════════════════════════
   SVG CELL ILLUSTRATIONS
   ═══════════════════════════════════════════════════════════════ */

function DLBCLCells() {
  return (
    <svg viewBox="0 0 64 64" width="64" height="64">
      <circle cx="20" cy="22" r="14" fill="#63b3ed" opacity="0.3" />
      <circle cx="20" cy="22" r="10" fill="#4299e1" opacity="0.5" />
      <circle cx="18" cy="20" r="5" fill="#2b6cb0" />
      <circle cx="44" cy="38" r="12" fill="#63b3ed" opacity="0.3" />
      <circle cx="44" cy="38" r="8" fill="#4299e1" opacity="0.5" />
      <circle cx="42" cy="36" r="4" fill="#2b6cb0" />
    </svg>
  );
}

function BurkittCells() {
  return (
    <svg viewBox="0 0 64 64" width="64" height="64">
      <circle cx="16" cy="16" r="7" fill="#2d3748" />
      <circle cx="32" cy="12" r="6" fill="#2d3748" />
      <circle cx="48" cy="18" r="7" fill="#2d3748" />
      <circle cx="12" cy="36" r="6" fill="#2d3748" />
      <circle cx="52" cy="42" r="6" fill="#2d3748" />
      <circle cx="18" cy="52" r="7" fill="#2d3748" />
      <circle cx="44" cy="52" r="6" fill="#2d3748" />
      <circle cx="24" cy="28" r="9" fill="#f6ad55" opacity="0.7" />
      <circle cx="40" cy="32" r="8" fill="#f6ad55" opacity="0.7" />
      <circle cx="32" cy="44" r="9" fill="#f6ad55" opacity="0.7" />
    </svg>
  );
}

function MCLCells() {
  return (
    <svg viewBox="0 0 64 64" width="64" height="64">
      <ellipse cx="18" cy="20" rx="6" ry="8" fill="#38b2ac" opacity="0.4" />
      <ellipse cx="18" cy="20" rx="4" ry="6" fill="#319795" />
      <path d="M 16 20 Q 18 18, 20 20" stroke="#2c7a7b" strokeWidth="1.5" fill="none" />
      <ellipse cx="42" cy="24" rx="5" ry="7" fill="#38b2ac" opacity="0.4" />
      <ellipse cx="42" cy="24" rx="3.5" ry="5" fill="#319795" />
      <path d="M 40 24 Q 42 22, 44 24" stroke="#2c7a7b" strokeWidth="1.5" fill="none" />
      <ellipse cx="28" cy="44" rx="6" ry="8" fill="#38b2ac" opacity="0.4" />
      <ellipse cx="28" cy="44" rx="4" ry="6" fill="#319795" />
      <path d="M 26 44 Q 28 42, 30 44" stroke="#2c7a7b" strokeWidth="1.5" fill="none" />
      <ellipse cx="48" cy="48" rx="5" ry="7" fill="#38b2ac" opacity="0.4" />
      <ellipse cx="48" cy="48" rx="3.5" ry="5" fill="#319795" />
      <path d="M 46 48 Q 48 46, 50 48" stroke="#2c7a7b" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function PMBCLCells() {
  return (
    <svg viewBox="0 0 64 64" width="64" height="64">
      <circle cx="18" cy="20" r="9" fill="#b794f4" opacity="0.4" />
      <circle cx="18" cy="20" r="6" fill="#9f7aea" />
      <rect x="10" y="18" width="16" height="2" fill="#fff" opacity="0.8" />
      <circle cx="44" cy="22" r="8" fill="#b794f4" opacity="0.4" />
      <circle cx="44" cy="22" r="5" fill="#9f7aea" />
      <rect x="37" y="20" width="14" height="2" fill="#fff" opacity="0.8" />
      <circle cx="28" cy="44" r="10" fill="#b794f4" opacity="0.4" />
      <circle cx="28" cy="44" r="7" fill="#9f7aea" />
      <rect x="19" y="42" width="18" height="2.5" fill="#fff" opacity="0.8" />
      <rect x="15" y="38" width="10" height="1.5" fill="#fff" opacity="0.6" />
    </svg>
  );
}

function CNSLymphomaCells() {
  return (
    <svg viewBox="0 0 64 64" width="64" height="64">
      <ellipse cx="32" cy="32" rx="28" ry="24" fill="#e2e8f0" opacity="0.3" />
      <ellipse cx="32" cy="32" rx="22" ry="18" fill="#cbd5e0" opacity="0.4" />
      <circle cx="32" cy="32" r="10" fill="#4299e1" opacity="0.6" />
      <circle cx="32" cy="32" r="14" fill="none" stroke="#fc8181" strokeWidth="2" opacity="0.7" />
      <circle cx="32" cy="32" r="17" fill="none" stroke="#f6ad55" strokeWidth="1.5" opacity="0.5" />
    </svg>
  );
}

function DHLCells() {
  return (
    <svg viewBox="0 0 64 64" width="64" height="64">
      <circle cx="20" cy="22" r="11" fill="#e53e3e" opacity="0.3" />
      <circle cx="20" cy="22" r="8" fill="#c53030" />
      <text x="14" y="26" fontSize="8" fontWeight="bold" fill="#fff">MYC</text>
      <circle cx="44" cy="24" r="10" fill="#805ad5" opacity="0.3" />
      <circle cx="44" cy="24" r="7" fill="#6b46c1" />
      <text x="36" y="27" fontSize="7" fontWeight="bold" fill="#fff">BCL2</text>
      <circle cx="30" cy="44" r="11" fill="#e53e3e" opacity="0.3" />
      <circle cx="30" cy="44" r="8" fill="#c53030" />
      <text x="24" y="48" fontSize="8" fontWeight="bold" fill="#fff">MYC</text>
      <circle cx="50" cy="48" r="9" fill="#805ad5" opacity="0.3" />
      <circle cx="50" cy="48" r="6" fill="#6b46c1" />
      <text x="43" y="51" fontSize="6" fontWeight="bold" fill="#fff">BCL2</text>
    </svg>
  );
}

function PTLDCells() {
  return (
    <svg viewBox="0 0 64 64" width="64" height="64">
      <circle cx="18" cy="20" r="10" fill="#48bb78" opacity="0.3" />
      <circle cx="18" cy="20" r="7" fill="#38a169" />
      <circle cx="16" cy="18" r="2" fill="#68d391" />
      <text x="13" y="24" fontSize="6" fontWeight="bold" fill="#fff">EBV</text>
      <circle cx="44" cy="22" r="9" fill="#48bb78" opacity="0.3" />
      <circle cx="44" cy="22" r="6" fill="#38a169" />
      <circle cx="42" cy="20" r="1.5" fill="#68d391" />
      <text x="39" y="25" fontSize="5" fontWeight="bold" fill="#fff">EBV</text>
      <circle cx="28" cy="44" r="11" fill="#48bb78" opacity="0.3" />
      <circle cx="28" cy="44" r="8" fill="#38a169" />
      <circle cx="26" cy="42" r="2.5" fill="#68d391" />
      <text x="22" y="48" fontSize="6" fontWeight="bold" fill="#fff">EBV</text>
    </svg>
  );
}

function HIVLymphomaCells() {
  return (
    <svg viewBox="0 0 64 64" width="64" height="64">
      <circle cx="20" cy="22" r="10" fill="#f687b3" opacity="0.3" />
      <circle cx="20" cy="22" r="7" fill="#ed64a6" />
      <circle cx="18" cy="20" r="2" fill="#d53f8c" />
      <circle cx="22" cy="24" r="1.5" fill="#d53f8c" />
      <circle cx="42" cy="26" r="9" fill="#f687b3" opacity="0.3" />
      <circle cx="42" cy="26" r="6" fill="#ed64a6" />
      <circle cx="40" cy="24" r="1.5" fill="#d53f8c" />
      <circle cx="44" cy="28" r="1" fill="#d53f8c" />
      <circle cx="30" cy="46" r="11" fill="#f687b3" opacity="0.3" />
      <circle cx="30" cy="46" r="8" fill="#ed64a6" />
      <circle cx="28" cy="44" r="2" fill="#d53f8c" />
      <circle cx="32" cy="48" r="1.5" fill="#d53f8c" />
    </svg>
  );
}

function MGZLCells() {
  return (
    <svg viewBox="0 0 64 64" width="64" height="64">
      <defs>
        <linearGradient id="greyZone1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#9f7aea" />
          <stop offset="50%" stopColor="#718096" />
          <stop offset="100%" stopColor="#4299e1" />
        </linearGradient>
        <linearGradient id="greyZone2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4299e1" />
          <stop offset="50%" stopColor="#718096" />
          <stop offset="100%" stopColor="#9f7aea" />
        </linearGradient>
      </defs>
      <circle cx="20" cy="22" r="10" fill="url(#greyZone1)" opacity="0.8" />
      <circle cx="44" cy="24" r="9" fill="url(#greyZone2)" opacity="0.8" />
      <circle cx="30" cy="44" r="11" fill="url(#greyZone1)" opacity="0.8" />
      <circle cx="50" cy="48" r="8" fill="url(#greyZone2)" opacity="0.8" />
    </svg>
  );
}

function THRLBCLCells() {
  return (
    <svg viewBox="0 0 64 64" width="64" height="64">
      <circle cx="12" cy="14" r="4" fill="#fc8181" opacity="0.5" />
      <circle cx="24" cy="12" r="3" fill="#fc8181" opacity="0.5" />
      <circle cx="18" cy="24" r="3.5" fill="#fc8181" opacity="0.5" />
      <circle cx="10" cy="32" r="3" fill="#fc8181" opacity="0.5" />
      <circle cx="40" cy="16" r="3.5" fill="#fc8181" opacity="0.5" />
      <circle cx="52" cy="20" r="3" fill="#fc8181" opacity="0.5" />
      <circle cx="46" cy="30" r="3" fill="#fc8181" opacity="0.5" />
      <circle cx="14" cy="48" r="3.5" fill="#fc8181" opacity="0.5" />
      <circle cx="26" cy="52" r="3" fill="#fc8181" opacity="0.5" />
      <circle cx="50" cy="50" r="3" fill="#fc8181" opacity="0.5" />
      <circle cx="30" cy="28" r="12" fill="#4299e1" opacity="0.4" />
      <circle cx="30" cy="28" r="9" fill="#3182ce" />
      <circle cx="28" cy="26" r="4" fill="#2c5282" />
    </svg>
  );
}

function RRDLBCLCells() {
  return (
    <svg viewBox="0 0 64 64" width="64" height="64">
      <circle cx="20" cy="22" r="11" fill="#4299e1" opacity="0.3" />
      <circle cx="20" cy="22" r="8" fill="#3182ce" />
      <path d="M 14 22 L 26 22 M 20 16 L 20 28" stroke="#e53e3e" strokeWidth="3" opacity="0.8" />
      <circle cx="44" cy="26" r="10" fill="#4299e1" opacity="0.3" />
      <circle cx="44" cy="26" r="7" fill="#3182ce" />
      <path d="M 38 26 L 50 26 M 44 20 L 44 32" stroke="#e53e3e" strokeWidth="2.5" opacity="0.8" />
      <circle cx="30" cy="46" r="12" fill="#4299e1" opacity="0.3" />
      <circle cx="30" cy="46" r="9" fill="#3182ce" />
      <path d="M 23 46 L 37 46 M 30 39 L 30 53" stroke="#e53e3e" strokeWidth="3" opacity="0.8" />
    </svg>
  );
}

const LYMPHOMA_SVG = {
  'DLBCL': DLBCLCells,
  'Burkitt': BurkittCells,
  'MCL': MCLCells,
  'PMBCL': PMBCLCells,
  'CNS Lymphoma': CNSLymphomaCells,
  'DHL': DHLCells,
  'PTLD': PTLDCells,
  'HIV Lymphoma': HIVLymphomaCells,
  'MGZL': MGZLCells,
  'T/HRLBCL': THRLBCLCells,
  'R/R DLBCL': RRDLBCLCells,
};

/* ═══════════════════════════════════════════════════════════════
   GAMIFICATION UTILITIES
   ═══════════════════════════════════════════════════════════════ */

const ACHIEVEMENTS = [
  { id: 'first_blood', name: 'First Blood', icon: '🩸', description: 'Answer first question correctly' },
  { id: 'perfect_round', name: 'Perfect Round', icon: '⭐', description: 'Get all quick-fire questions right' },
  { id: 'lymphoma_expert', name: 'Lymphoma Expert', icon: '🏆', description: 'Score 80%+ on scenarios' },
  { id: 'speed_demon', name: 'Speed Demon', icon: '⚡', description: 'Answer 5 quick-fire in <5 seconds each' },
  { id: 'scholar', name: 'Scholar', icon: '📚', description: 'Complete 50 total questions' },
  { id: 'master_diagnostician', name: 'Master Diagnostician', icon: '👑', description: 'Score 100% on scenarios' },
];

function getXP() {
  try {
    return parseInt(localStorage.getItem('lymphoma-xp') || '0', 10);
  } catch {
    return 0;
  }
}

function setXP(xp) {
  try {
    localStorage.setItem('lymphoma-xp', String(xp));
  } catch {}
}

function getAchievements() {
  try {
    return JSON.parse(localStorage.getItem('lymphoma-achievements') || '[]');
  } catch {
    return [];
  }
}

function setAchievements(achievements) {
  try {
    localStorage.setItem('lymphoma-achievements', JSON.stringify(achievements));
  } catch {}
}

function getLevel(xp) {
  return Math.floor(xp / 500) + 1;
}

function getXPForNextLevel(xp) {
  const level = getLevel(xp);
  return level * 500;
}

/* ─── Achievement Toast ─── */
function AchievementToast({ achievement, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="animate-slideInRight" style={{
      position: 'fixed',
      top: 100,
      right: 20,
      zIndex: 200,
      background: 'linear-gradient(135deg, #f6ad55, #ed8936)',
      borderRadius: 16,
      padding: '16px 20px',
      boxShadow: '0 8px 32px rgba(246,173,85,0.4)',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      minWidth: 280,
      border: '1px solid rgba(246,173,85,0.3)',
      backdropFilter: 'blur(12px)',
    }}>
      <div style={{ fontSize: 32 }}>{achievement.icon}</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 800, fontSize: 14, color: '#1a202c', marginBottom: 2 }}>Achievement Unlocked!</div>
        <div style={{ fontSize: 12, color: '#2d3748', fontWeight: 600 }}>{achievement.name}</div>
      </div>
      <button onClick={onClose} style={{
        background: 'rgba(26,32,44,0.1)',
        border: 'none',
        borderRadius: 8,
        width: 24,
        height: 24,
        cursor: 'pointer',
        fontSize: 12,
        color: '#1a202c',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 700,
      }}>×</button>
    </div>
  );
}

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

/* ─── XP Bar in Navbar ─── */
function XPBar({ xp }) {
  const level = getLevel(xp);
  const nextLevelXP = getXPForNextLevel(xp);
  const currentLevelXP = (level - 1) * 500;
  const progress = ((xp - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100;

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: 'var(--glass-bg)',
      padding: '6px 12px',
      borderRadius: 12,
      border: '1px solid var(--border-subtle)',
      backdropFilter: 'blur(12px)',
    }}>
      <div style={{
        fontSize: 11,
        fontWeight: 700,
        color: 'var(--text-muted)',
        fontFamily: 'var(--font-mono)',
      }}>LVL {level}</div>
      <div style={{
        width: 80,
        height: 6,
        background: 'var(--progress-track)',
        borderRadius: 3,
        overflow: 'hidden',
      }}>
        <div style={{
          width: `${progress}%`,
          height: '100%',
          background: 'linear-gradient(90deg, #f6ad55, #ed8936)',
          borderRadius: 3,
          transition: 'width 0.5s ease',
        }} />
      </div>
      <div style={{
        fontSize: 10,
        fontWeight: 600,
        color: 'var(--text-muted)',
        fontFamily: 'var(--font-mono)',
      }}>{xp} XP</div>
    </div>
  );
}

/* ─── Navbar ─── */
function Navbar({ onBack, showBack, rightContent, theme, onThemeToggle, xp }) {
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
        {xp !== undefined && <XPBar xp={xp} />}
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
function ScoreDisplay({ correct, total, label = 'Score', compact = false, streak = 0 }) {
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
          <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-score-val)' }}>
            {correct}/{total}
            {streak > 0 && <span style={{ marginLeft: 6, fontSize: 12 }}>🔥{streak}</span>}
          </div>
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
        <div style={{ fontSize: 20, fontWeight: 800, color: 'var(--text-score-val)' }}>
          {correct}/{total}
          {streak > 0 && <span style={{ marginLeft: 8, fontSize: 16 }}>🔥{streak}</span>}
        </div>
      </div>
    </div>
  );
}

/* ─── Category Badge ─── */
function CategoryBadge({ category, size = 'sm', showSVG = false }) {
  const c = CATEGORY_COLORS[category] || { bg: '#4a5568', accent: '#a0aec0' };
  const pad = size === 'lg' ? '5px 14px' : '4px 11px';
  const fs = size === 'lg' ? 11 : 10;
  const SVGComponent = LYMPHOMA_SVG[category];

  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: showSVG && SVGComponent ? 8 : 0,
      padding: pad,
      borderRadius: 20,
      background: `${c.accent}14`,
      color: c.accent,
      fontSize: fs,
      fontWeight: 700,
      letterSpacing: 0.6,
      textTransform: 'uppercase',
      border: `1px solid ${c.accent}28`,
      backdropFilter: 'blur(8px)',
    }}>
      {showSVG && SVGComponent && (
        <span style={{ display: 'inline-flex', width: size === 'lg' ? 24 : 20, height: size === 'lg' ? 24 : 20 }}>
          <SVGComponent />
        </span>
      )}
      {category}
    </span>
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

/* ─── Trophy Display ─── */
function TrophyDisplay({ score }) {
  const pct = Math.round((score.correct / score.total) * 100);
  let trophy = '😊';
  let message = 'Keep practicing!';
  let color = '#cbd5e0';

  if (pct >= 90) {
    trophy = '🏆';
    message = 'Outstanding!';
    color = '#f6ad55';
  } else if (pct >= 70) {
    trophy = '🥈';
    message = 'Well done!';
    color = '#a0aec0';
  } else if (pct >= 50) {
    trophy = '🥉';
    message = 'Good effort!';
    color = '#d69e2e';
  }

  return (
    <div className="animate-bounceIn" style={{
      fontSize: 80,
      marginBottom: 16,
      filter: `drop-shadow(0 4px 20px ${color}40)`,
    }}>
      {trophy}
      <div style={{
        fontSize: 16,
        fontWeight: 700,
        color: 'var(--text-secondary)',
        marginTop: 8,
      }}>{message}</div>
    </div>
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

  // EMQ states
  const [emqSetIdx, setEmqSetIdx] = useState(0);
  const [emqStemIdx, setEmqStemIdx] = useState(0);
  const [emqAnswer, setEmqAnswer] = useState(null);
  const [emqScore, setEmqScore] = useState({ correct: 0, total: 0 });
  const [emqHistory, setEmqHistory] = useState([]);

  // Theme state
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('lymphoma-theme') || 'dark'; }
    catch { return 'dark'; }
  });

  // Gamification states
  const [xp, setXPState] = useState(getXP());
  const [unlockedAchievements, setUnlockedAchievements] = useState(getAchievements());
  const [achievementToast, setAchievementToast] = useState(null);
  const [streak, setStreak] = useState(0);
  const [earnedXP, setEarnedXP] = useState(0);
  const [speedAnswers, setSpeedAnswers] = useState([]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('lymphoma-theme', theme); } catch {}
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(t => t === 'dark' ? 'light' : 'dark');
  }, []);

  // XP and Achievement management
  const addXP = useCallback((amount) => {
    const newXP = xp + amount;
    setXPState(newXP);
    setXP(newXP);
    setEarnedXP(e => e + amount);
  }, [xp]);

  const unlockAchievement = useCallback((achievementId) => {
    if (unlockedAchievements.includes(achievementId)) return;

    const newUnlocked = [...unlockedAchievements, achievementId];
    setUnlockedAchievements(newUnlocked);
    setAchievements(newUnlocked);

    const achievement = ACHIEVEMENTS.find(a => a.id === achievementId);
    if (achievement) {
      setAchievementToast(achievement);
    }
  }, [unlockedAchievements]);

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
        setStreak(0);
      }
    }
    return () => clearInterval(interval);
  }, [timerActive, timeLeft, mode, quizAnswer]);

  // Scroll to top on navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [mode, scenarioIdx, quizIdx, emqSetIdx, emqStemIdx, gameComplete]);

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
    setStreak(0);
    setEarnedXP(0);
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
    setStreak(0);
    setEarnedXP(0);
    setSpeedAnswers([]);
    setMode('quickfire');
  }, []);

  const startEMQ = useCallback(() => {
    setEmqSetIdx(0);
    setEmqStemIdx(0);
    setEmqAnswer(null);
    setEmqScore({ correct: 0, total: 0 });
    setEmqHistory([]);
    setGameComplete(false);
    setShowConfetti(false);
    setStreak(0);
    setEarnedXP(0);
    setMode('emq');
  }, []);

  const handleScenarioAnswer = (idx) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(idx);
    setShowExplanation(true);
    const isCorrect = shuffledScenarios[scenarioIdx].options[idx].correct;
    setScenarioScore(s => ({ correct: s.correct + (isCorrect ? 1 : 0), total: s.total + 1 }));
    setHistory(h => [...h, { question: shuffledScenarios[scenarioIdx].title, correct: isCorrect, category: shuffledScenarios[scenarioIdx].category }]);

    // Gamification
    if (isCorrect) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      const xpGain = 100 + (newStreak > 1 ? 25 : 0);
      addXP(xpGain);

      // Check first blood
      if (scenarioScore.total === 0 && scenarioScore.correct === 0) {
        unlockAchievement('first_blood');
      }
    } else {
      setStreak(0);
    }
  };

  const nextScenario = () => {
    if (scenarioIdx + 1 >= shuffledScenarios.length) {
      setGameComplete(true);
      const pct = (scenarioScore.correct / shuffledScenarios.length) * 100;

      if (scenarioScore.correct >= Math.ceil(shuffledScenarios.length * 0.6)) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 5000);
      }

      // Check achievements
      if (pct >= 80) unlockAchievement('lymphoma_expert');
      if (pct === 100) unlockAchievement('master_diagnostician');

      // Scholar achievement
      const totalQuestions = scenarioScore.total + quizScore.total;
      if (totalQuestions >= 50) unlockAchievement('scholar');

      return;
    }
    setScenarioIdx(i => i + 1);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setShowTeaching(false);
  };

  const handleQuizAnswer = (opt) => {
    if (quizAnswer !== null) return;
    const answerTime = 15 - timeLeft;
    setTimerActive(false);
    setQuizAnswer(opt);
    const isCorrect = opt === quizQuestions[quizIdx].a;
    setQuizScore(s => ({ correct: s.correct + (isCorrect ? 1 : 0), total: s.total + 1 }));

    // Gamification
    if (isCorrect) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      const xpGain = 50 + (newStreak > 1 ? 25 : 0);
      addXP(xpGain);

      // Track speed
      setSpeedAnswers(prev => [...prev, answerTime]);

      // First blood
      if (quizScore.total === 0 && quizScore.correct === 0) {
        unlockAchievement('first_blood');
      }
    } else {
      setStreak(0);
    }
  };

  const nextQuiz = () => {
    if (quizIdx + 1 >= quizQuestions.length) {
      setGameComplete(true);

      if (quizScore.correct >= 10) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 5000);
      }

      // Check achievements
      if (quizScore.correct === quizQuestions.length) {
        unlockAchievement('perfect_round');
      }

      // Speed demon - check if 5+ answers were under 5 seconds
      const fastAnswers = speedAnswers.filter(t => t < 5);
      if (fastAnswers.length >= 5) {
        unlockAchievement('speed_demon');
      }

      // Scholar
      const totalQuestions = scenarioScore.total + quizScore.total;
      if (totalQuestions >= 50) unlockAchievement('scholar');

      return;
    }
    setQuizIdx(i => i + 1);
    setQuizAnswer(null);
    setTimeLeft(15);
    setTimerActive(true);
  };

  const handleEMQAnswer = (letter) => {
    if (emqAnswer !== null) return;
    setEmqAnswer(letter);
    const currentSet = GAME_DATA.emqSets[emqSetIdx];
    const currentStem = currentSet.stems[emqStemIdx];
    const isCorrect = letter === currentStem.correctAnswer;
    setEmqScore(s => ({ correct: s.correct + (isCorrect ? 1 : 0), total: s.total + 1 }));
    setEmqHistory(h => [...h, {
      set: currentSet.theme,
      stem: currentStem.stem.substring(0, 60) + '...',
      correct: isCorrect,
      selected: letter,
      correctAnswer: currentStem.correctAnswer,
    }]);

    if (isCorrect) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      addXP(75 + (newStreak > 1 ? 25 : 0));
      if (emqScore.total === 0 && emqScore.correct === 0) {
        unlockAchievement('first_blood');
      }
    } else {
      setStreak(0);
    }
  };

  const nextEMQStem = () => {
    const currentSet = GAME_DATA.emqSets[emqSetIdx];
    if (emqStemIdx + 1 < currentSet.stems.length) {
      setEmqStemIdx(i => i + 1);
      setEmqAnswer(null);
    } else if (emqSetIdx + 1 < GAME_DATA.emqSets.length) {
      setEmqSetIdx(i => i + 1);
      setEmqStemIdx(0);
      setEmqAnswer(null);
    } else {
      setGameComplete(true);
      const totalStems = GAME_DATA.emqSets.reduce((acc, s) => acc + s.stems.length, 0);
      if (emqScore.correct >= Math.ceil(totalStems * 0.6)) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 5000);
      }
      if (emqScore.correct === totalStems) {
        unlockAchievement('master_diagnostician');
      }
      if ((emqScore.correct / totalStems) * 100 >= 80) {
        unlockAchievement('lymphoma_expert');
      }
    }
  };

  /* ─── MENU ─── */
  if (mode === 'menu') {
    const unlockedCount = unlockedAchievements.length;

    return (
      <>
        <div className="app-bg" />
        <div className="app-bg-extra" />
        <div className="histology-bg" />
        <div className="grid-overlay" />
        <div className="app-content">
          {achievementToast && (
            <AchievementToast
              achievement={achievementToast}
              onClose={() => setAchievementToast(null)}
            />
          )}
          <Navbar showBack={false} theme={theme} onThemeToggle={toggleTheme} xp={xp} />

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
                      36 case-based vignettes with real clinical decisions. Diagnose, classify, and treat patients with aggressive B-cell lymphomas.
                    </p>
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                      {['DLBCL', 'Burkitt', 'MCL', 'PMBCL', 'DHL', 'PTLD', 'MGZL'].map(c => (
                        <CategoryBadge key={c} category={c} showSVG />
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
                      15 rapid-fire questions from a pool of 65+ with a 15-second timer. Test your recall on key facts, landmark trials, and classifications.
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

              {/* EMQ Mode */}
              <button onClick={startEMQ} className="animate-fadeInUp stagger-4" style={{
                background: 'var(--bg-card)',
                border: '1px solid rgba(72,187,120,0.25)',
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
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(72,187,120,0.15)';
                e.currentTarget.style.borderColor = 'rgba(72,187,120,0.5)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = '';
                e.currentTarget.style.boxShadow = 'var(--card-shadow)';
                e.currentTarget.style.borderColor = 'rgba(72,187,120,0.25)';
              }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20 }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                    background: 'rgba(72,187,120,0.12)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 28,
                    border: '1px solid rgba(72,187,120,0.1)',
                  }}>🔬</div>
                  <div style={{ flex: 1 }}>
                    <h2 style={{ margin: '0 0 8px', fontSize: 20, fontWeight: 800, color: 'var(--text-primary)', letterSpacing: -0.3 }}>
                      EMQ Challenge
                      <span style={{
                        marginLeft: 10, fontSize: 10, fontWeight: 700,
                        background: 'linear-gradient(135deg, #48bb78, #38a169)',
                        color: '#fff', padding: '2px 8px', borderRadius: 6,
                        verticalAlign: 'middle',
                      }}>NEW</span>
                    </h2>
                    <p style={{ margin: '0 0 16px', color: 'var(--text-secondary)', fontSize: 13, lineHeight: 1.65 }}>
                      Extended Matching Questions — match diagnostic patterns to lymphoma subtypes. 3 themed sets covering IHC, cytogenetics, and flow cytometry.
                    </p>
                    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                      <span style={{
                        color: '#48bb78', fontSize: 12, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 5,
                        background: 'rgba(72,187,120,0.08)', padding: '4px 10px', borderRadius: 8,
                        border: '1px solid rgba(72,187,120,0.12)',
                      }}>
                        <span style={{ fontSize: 14 }}>🧬</span> Pathology focused
                      </span>
                      <span style={{ color: 'var(--text-dimmed)' }}>&middot;</span>
                      <span style={{ color: 'var(--text-muted)', fontSize: 12, fontWeight: 500 }}>15 stems &middot; 3 sets</span>
                    </div>
                  </div>
                  <div style={{
                    color: 'var(--text-dimmed)', fontSize: 22, flexShrink: 0, alignSelf: 'center',
                    transition: 'transform 0.3s, color 0.3s',
                  }}>&rarr;</div>
                </div>
              </button>
            </div>

            {/* Stats overview */}
            <div className="animate-fadeInUp stagger-5" style={{
              display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14,
              marginBottom: 24,
            }}>
              <div style={{
                background: 'var(--stat-gradient-1)',
                border: '1px solid var(--stat-border-1)',
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
                  background: 'var(--stat-icon-1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 10px',
                }}>📋</div>
                <div style={{
                  fontSize: 24, fontWeight: 800, color: 'var(--stat-num-1)',
                  fontFamily: 'var(--font-mono)',
                }}>36</div>
                <div style={{
                  fontSize: 10, color: 'var(--text-muted)', fontWeight: 600,
                  letterSpacing: 0.6, textTransform: 'uppercase', marginTop: 4,
                }}>Clinical Cases</div>
              </div>

              <div style={{
                background: 'var(--stat-gradient-2)',
                border: '1px solid var(--stat-border-2)',
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
                  background: 'var(--stat-icon-2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 10px',
                }}>🧠</div>
                <div style={{
                  fontSize: 24, fontWeight: 800, color: 'var(--stat-num-2)',
                  fontFamily: 'var(--font-mono)',
                }}>65+</div>
                <div style={{
                  fontSize: 10, color: 'var(--text-muted)', fontWeight: 600,
                  letterSpacing: 0.6, textTransform: 'uppercase', marginTop: 4,
                }}>Quiz Questions</div>
              </div>

              <div style={{
                background: 'var(--stat-gradient-3)',
                border: '1px solid var(--stat-border-3)',
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
                  background: 'var(--stat-icon-3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 10px',
                }}>🔬</div>
                <div style={{
                  fontSize: 24, fontWeight: 800, color: 'var(--stat-num-3)',
                  fontFamily: 'var(--font-mono)',
                }}>11</div>
                <div style={{
                  fontSize: 10, color: 'var(--text-muted)', fontWeight: 600,
                  letterSpacing: 0.6, textTransform: 'uppercase', marginTop: 4,
                }}>NHL Subtypes</div>
              </div>

              <div style={{
                background: 'linear-gradient(135deg, rgba(246,173,85,0.08), rgba(237,137,54,0.08))',
                border: '1px solid rgba(246,173,85,0.2)',
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
                  background: 'rgba(246,173,85,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 10px',
                }}>🏆</div>
                <div style={{
                  fontSize: 24, fontWeight: 800, color: '#f6ad55',
                  fontFamily: 'var(--font-mono)',
                }}>{unlockedCount}/6</div>
                <div style={{
                  fontSize: 10, color: 'var(--text-muted)', fontWeight: 600,
                  letterSpacing: 0.6, textTransform: 'uppercase', marginTop: 4,
                }}>Achievements</div>
              </div>
            </div>

            {/* Achievements Gallery */}
            <div className="animate-fadeInUp stagger-6" style={{
              background: 'var(--bg-card)',
              borderRadius: 20,
              padding: '28px',
              border: '1px solid var(--border-card)',
              marginBottom: 24,
              backdropFilter: 'blur(16px)',
            }}>
              <h3 style={{
                margin: '0 0 20px',
                fontSize: 18,
                fontWeight: 800,
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
              }}>
                <span style={{ fontSize: 24 }}>🏆</span> Achievements
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: 12,
              }}>
                {ACHIEVEMENTS.map(achievement => {
                  const isUnlocked = unlockedAchievements.includes(achievement.id);
                  return (
                    <div key={achievement.id} style={{
                      background: isUnlocked
                        ? 'linear-gradient(135deg, rgba(246,173,85,0.15), rgba(237,137,54,0.15))'
                        : 'var(--bg-option)',
                      border: `1px solid ${isUnlocked ? 'rgba(246,173,85,0.3)' : 'var(--border-subtle)'}`,
                      borderRadius: 14,
                      padding: '16px',
                      textAlign: 'center',
                      opacity: isUnlocked ? 1 : 0.5,
                      filter: isUnlocked ? 'none' : 'grayscale(1)',
                      transition: 'all 0.3s ease',
                      boxShadow: isUnlocked ? '0 4px 20px rgba(246,173,85,0.2)' : 'none',
                    }}>
                      <div style={{ fontSize: 36, marginBottom: 8 }}>{achievement.icon}</div>
                      <div style={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: isUnlocked ? '#f6ad55' : 'var(--text-muted)',
                        marginBottom: 4,
                      }}>{achievement.name}</div>
                      <div style={{
                        fontSize: 9,
                        color: 'var(--text-dimmed)',
                        lineHeight: 1.4,
                      }}>{achievement.description}</div>
                    </div>
                  );
                })}
              </div>
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
      const pct = Math.round((scenarioScore.correct / scenarioScore.total) * 100);
      const levelGained = Math.floor(earnedXP / 500);

      return (
        <>
          <div className="app-bg" />
          <div className="app-bg-extra" />
          <div className="histology-bg" />
          <div className="grid-overlay" />
          <div className="app-content">
            {achievementToast && (
              <AchievementToast
                achievement={achievementToast}
                onClose={() => setAchievementToast(null)}
              />
            )}
            <Confetti active={showConfetti} />
            <Navbar showBack onBack={() => setMode('menu')} theme={theme} onThemeToggle={toggleTheme} xp={xp} />
            <div style={{ maxWidth: 680, margin: '0 auto', padding: '48px 20px' }}>
              <div className="animate-scaleIn" style={{ textAlign: 'center', marginBottom: 40 }}>
                <TrophyDisplay score={scenarioScore} />
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
                  <ScoreDisplay correct={scenarioScore.correct} total={scenarioScore.total} label="Clinical Scenarios" streak={streak} />
                </div>

                {/* XP Summary */}
                <div style={{
                  marginTop: 28,
                  background: 'var(--bg-card)',
                  borderRadius: 16,
                  padding: '20px',
                  border: '1px solid var(--border-card)',
                  backdropFilter: 'blur(12px)',
                  maxWidth: 400,
                  margin: '28px auto 0',
                }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-secondary)', marginBottom: 12 }}>
                    Session Summary
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>XP Earned:</span>
                    <span style={{ fontSize: 13, fontWeight: 700, color: '#f6ad55' }}>+{earnedXP} XP</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>Current Level:</span>
                    <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-primary)' }}>Level {getLevel(xp)}</span>
                  </div>
                  {levelGained > 0 && (
                    <div style={{
                      marginTop: 12,
                      padding: '8px 12px',
                      background: 'linear-gradient(135deg, rgba(246,173,85,0.15), rgba(237,137,54,0.15))',
                      border: '1px solid rgba(246,173,85,0.3)',
                      borderRadius: 10,
                      fontSize: 12,
                      fontWeight: 700,
                      color: '#f6ad55',
                    }}>
                      🎉 Level Up! +{levelGained} Level{levelGained > 1 ? 's' : ''}
                    </div>
                  )}
                  <div style={{
                    marginTop: 14,
                    height: 8,
                    background: 'var(--progress-track)',
                    borderRadius: 4,
                    overflow: 'hidden',
                  }}>
                    <div style={{
                      width: `${((xp % 500) / 500) * 100}%`,
                      height: '100%',
                      background: 'linear-gradient(90deg, #f6ad55, #ed8936)',
                      borderRadius: 4,
                      transition: 'width 0.5s ease',
                    }} />
                  </div>
                  <div style={{
                    marginTop: 6,
                    fontSize: 10,
                    color: 'var(--text-dimmed)',
                    textAlign: 'center',
                  }}>
                    {xp % 500}/{500} XP to next level
                  </div>
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
        <div className="histology-bg" />
        <div className="grid-overlay" />
        <div className="app-content">
          {achievementToast && (
            <AchievementToast
              achievement={achievementToast}
              onClose={() => setAchievementToast(null)}
            />
          )}
          <Navbar
            showBack
            onBack={() => setMode('menu')}
            rightContent={<ScoreDisplay correct={scenarioScore.correct} total={scenarioScore.total} compact streak={streak} />}
            theme={theme}
            onThemeToggle={toggleTheme}
            xp={xp}
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
              <CategoryBadge category={sc.category} size="lg" showSVG />
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
      const pct = Math.round((quizScore.correct / quizScore.total) * 100);
      const levelGained = Math.floor(earnedXP / 500);

      return (
        <>
          <div className="app-bg" />
          <div className="app-bg-extra" />
          <div className="histology-bg" />
          <div className="grid-overlay" />
          <div className="app-content">
            {achievementToast && (
              <AchievementToast
                achievement={achievementToast}
                onClose={() => setAchievementToast(null)}
              />
            )}
            <Confetti active={showConfetti} />
            <Navbar showBack onBack={() => setMode('menu')} theme={theme} onThemeToggle={toggleTheme} xp={xp} />
            <div style={{ maxWidth: 600, margin: '0 auto', padding: '60px 20px', textAlign: 'center' }}>
              <div className="animate-scaleIn">
                <TrophyDisplay score={quizScore} />
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
                  <ScoreDisplay correct={quizScore.correct} total={quizScore.total} label="Quick-Fire Quiz" streak={streak} />
                </div>

                {/* XP Summary */}
                <div style={{
                  marginTop: 28,
                  background: 'var(--bg-card)',
                  borderRadius: 16,
                  padding: '20px',
                  border: '1px solid var(--border-card)',
                  backdropFilter: 'blur(12px)',
                  maxWidth: 400,
                  margin: '28px auto 0',
                }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-secondary)', marginBottom: 12 }}>
                    Session Summary
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>XP Earned:</span>
                    <span style={{ fontSize: 13, fontWeight: 700, color: '#f6ad55' }}>+{earnedXP} XP</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>Current Level:</span>
                    <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-primary)' }}>Level {getLevel(xp)}</span>
                  </div>
                  {levelGained > 0 && (
                    <div style={{
                      marginTop: 12,
                      padding: '8px 12px',
                      background: 'linear-gradient(135deg, rgba(246,173,85,0.15), rgba(237,137,54,0.15))',
                      border: '1px solid rgba(246,173,85,0.3)',
                      borderRadius: 10,
                      fontSize: 12,
                      fontWeight: 700,
                      color: '#f6ad55',
                    }}>
                      🎉 Level Up! +{levelGained} Level{levelGained > 1 ? 's' : ''}
                    </div>
                  )}
                  <div style={{
                    marginTop: 14,
                    height: 8,
                    background: 'var(--progress-track)',
                    borderRadius: 4,
                    overflow: 'hidden',
                  }}>
                    <div style={{
                      width: `${((xp % 500) / 500) * 100}%`,
                      height: '100%',
                      background: 'linear-gradient(90deg, #f6ad55, #ed8936)',
                      borderRadius: 4,
                      transition: 'width 0.5s ease',
                    }} />
                  </div>
                  <div style={{
                    marginTop: 6,
                    fontSize: 10,
                    color: 'var(--text-dimmed)',
                    textAlign: 'center',
                  }}>
                    {xp % 500}/{500} XP to next level
                  </div>
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
        <div className="histology-bg" />
        <div className="grid-overlay" />
        <div className="app-content">
          {achievementToast && (
            <AchievementToast
              achievement={achievementToast}
              onClose={() => setAchievementToast(null)}
            />
          )}
          <Navbar
            showBack
            onBack={() => setMode('menu')}
            rightContent={
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                {quizAnswer === null && <TimerRing timeLeft={timeLeft} />}
                <ScoreDisplay correct={quizScore.correct} total={quizScore.total} compact streak={streak} />
              </div>
            }
            theme={theme}
            onThemeToggle={toggleTheme}
            xp={xp}
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

  /* ─── EMQ RESULTS ─── */
  if (mode === 'emq' && gameComplete) {
    const totalStems = GAME_DATA.emqSets.reduce((acc, s) => acc + s.stems.length, 0);
    const pct = Math.round((emqScore.correct / totalStems) * 100);
    const passed = emqScore.correct >= Math.ceil(totalStems * 0.6);

    return (
      <>
        <div className="app-bg" />
        <div className="app-bg-extra" />
        <div className="histology-bg" />
        <div className="grid-overlay" />
        <div className="app-content">
          {achievementToast && <AchievementToast achievement={achievementToast} onClose={() => setAchievementToast(null)} />}
          <Confetti active={showConfetti} />
          <Navbar showBack onBack={() => setMode('menu')} theme={theme} onThemeToggle={toggleTheme} xp={xp} />
          <div style={{ maxWidth: 680, margin: '0 auto', padding: '48px 20px' }}>
            <div className="animate-scaleIn" style={{ textAlign: 'center', marginBottom: 40 }}>
              <TrophyDisplay score={emqScore} />
              <h2 style={{
                fontSize: 30, fontWeight: 900, margin: '0 0 8px',
                background: passed ? 'linear-gradient(135deg, #48bb78, #68d391)' : 'linear-gradient(135deg, #f6ad55, #ed8936)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                letterSpacing: -0.5,
              }}>{passed ? 'Pathology Expert!' : 'Review Time!'}</h2>
              <GradientDivider style={{ maxWidth: 100, margin: '16px auto 24px' }} />
              <div style={{ display: 'inline-block' }}>
                <ScoreDisplay correct={emqScore.correct} total={totalStems} label="EMQ Stems" streak={streak} />
              </div>

              {/* XP Summary */}
              <div style={{
                marginTop: 28, background: 'var(--bg-card)', borderRadius: 16, padding: '20px',
                border: '1px solid var(--border-card)', backdropFilter: 'blur(12px)', maxWidth: 400, margin: '28px auto 0',
              }}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: 24 }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 20, fontWeight: 800, color: '#f6ad55' }}>+{earnedXP}</div>
                    <div style={{ fontSize: 10, color: 'var(--text-muted)', fontWeight: 600, marginTop: 2 }}>XP EARNED</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 20, fontWeight: 800, color: '#b794f4' }}>Lv {getLevel(xp)}</div>
                    <div style={{ fontSize: 10, color: 'var(--text-muted)', fontWeight: 600, marginTop: 2 }}>CURRENT LEVEL</div>
                  </div>
                </div>
              </div>
            </div>

            {/* EMQ Results by Set */}
            <div className="animate-fadeInUp stagger-2" style={{ marginBottom: 28 }}>
              {GAME_DATA.emqSets.map((set, setI) => (
                <div key={set.id} style={{
                  background: 'var(--bg-card)', borderRadius: 16, padding: '20px', marginBottom: 14,
                  border: '1px solid var(--border-card)', backdropFilter: 'blur(12px)',
                }}>
                  <h4 style={{ margin: '0 0 12px', fontSize: 14, fontWeight: 700, color: '#48bb78' }}>
                    🧬 Set {setI + 1}: {set.theme}
                  </h4>
                  {set.stems.map((stem, stemI) => {
                    const historyItem = emqHistory[setI * 5 + stemI];
                    if (!historyItem) return null;
                    return (
                      <div key={stemI} style={{
                        display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0',
                        borderTop: stemI > 0 ? '1px solid var(--border-subtle)' : 'none',
                      }}>
                        <span style={{ fontSize: 16 }}>{historyItem.correct ? '✅' : '❌'}</span>
                        <span style={{ fontSize: 12, color: 'var(--text-secondary)', flex: 1 }}>
                          {stem.stem.substring(0, 80)}...
                        </span>
                        {!historyItem.correct && (
                          <span style={{ fontSize: 11, color: '#48bb78', fontWeight: 700 }}>
                            Ans: {historyItem.correctAnswer}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            <div className="animate-fadeInUp stagger-3" style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
              <button onClick={startEMQ} style={{
                background: 'linear-gradient(135deg, #48bb78, #38a169)', color: '#fff',
                border: 'none', borderRadius: 14, padding: '16px 36px', fontWeight: 700,
                fontSize: 15, cursor: 'pointer', transition: 'all 0.3s ease',
                boxShadow: '0 4px 20px rgba(72,187,120,0.3)',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = ''}
              >🔬 Retry EMQs</button>
              <button onClick={() => setMode('menu')} style={{
                background: 'var(--glass-bg)', color: 'var(--text-primary)',
                border: '1px solid var(--border-subtle)', borderRadius: 14,
                padding: '16px 36px', fontWeight: 700, fontSize: 15,
                cursor: 'pointer', transition: 'all 0.3s ease',
                backdropFilter: 'blur(12px)',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--btn-secondary-border-hover)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border-subtle)'}
              >🏠 Menu</button>
            </div>
            <Footer />
          </div>
        </div>
      </>
    );
  }

  /* ─── EMQ PLAYING ─── */
  if (mode === 'emq') {
    const currentSet = GAME_DATA.emqSets[emqSetIdx];
    const currentStem = currentSet.stems[emqStemIdx];
    const totalStemsCompleted = GAME_DATA.emqSets.slice(0, emqSetIdx).reduce((acc, s) => acc + s.stems.length, 0) + emqStemIdx;
    const totalStems = GAME_DATA.emqSets.reduce((acc, s) => acc + s.stems.length, 0);

    return (
      <>
        <div className="app-bg" />
        <div className="app-bg-extra" />
        <div className="histology-bg" />
        <div className="grid-overlay" />
        <div className="app-content">
          {achievementToast && <AchievementToast achievement={achievementToast} onClose={() => setAchievementToast(null)} />}
          <Navbar showBack onBack={() => setMode('menu')} theme={theme} onThemeToggle={toggleTheme} xp={xp} />
          <div style={{ maxWidth: 780, margin: '0 auto', padding: '32px 20px' }}>
            {/* Progress */}
            <div className="animate-fadeInUp" style={{ marginBottom: 24 }}>
              <ProgressBar current={totalStemsCompleted + 1} total={totalStems} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{
                    background: 'rgba(72,187,120,0.12)', border: '1px solid rgba(72,187,120,0.2)',
                    borderRadius: 8, padding: '3px 10px', fontSize: 11, fontWeight: 700, color: '#48bb78',
                  }}>Set {emqSetIdx + 1}/{GAME_DATA.emqSets.length}</span>
                  <span style={{
                    background: 'var(--bg-option)', border: '1px solid var(--border-subtle)',
                    borderRadius: 8, padding: '3px 10px', fontSize: 11, fontWeight: 600, color: 'var(--text-secondary)',
                  }}>Stem {emqStemIdx + 1}/{currentSet.stems.length}</span>
                </div>
                {streak > 1 && (
                  <span style={{
                    background: 'linear-gradient(135deg, rgba(246,173,85,0.15), rgba(237,137,54,0.15))',
                    border: '1px solid rgba(246,173,85,0.3)',
                    borderRadius: 8, padding: '3px 10px', fontSize: 11, fontWeight: 700, color: '#f6ad55',
                  }}>🔥 {streak} streak</span>
                )}
              </div>
            </div>

            {/* Theme Header */}
            <div className="animate-fadeInUp stagger-1" style={{
              background: 'linear-gradient(135deg, rgba(72,187,120,0.08), rgba(56,161,105,0.08))',
              border: '1px solid rgba(72,187,120,0.2)',
              borderRadius: 16, padding: '20px 24px', marginBottom: 16,
              backdropFilter: 'blur(12px)',
            }}>
              <h3 style={{ margin: '0 0 6px', fontSize: 16, fontWeight: 800, color: '#48bb78' }}>
                🧬 {currentSet.theme}
              </h3>
              <p style={{ margin: 0, fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                {currentSet.instruction}
              </p>
            </div>

            {/* Option List (always visible) */}
            <div className="animate-fadeInUp stagger-2" style={{
              background: 'var(--bg-card)', borderRadius: 16, padding: '16px 20px', marginBottom: 16,
              border: '1px solid var(--border-card)', backdropFilter: 'blur(12px)',
            }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', marginBottom: 10, textTransform: 'uppercase', letterSpacing: 0.8 }}>
                Option List
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 4 }}>
                {currentSet.optionList.map((opt, i) => (
                  <div key={i} style={{
                    fontSize: 12, color: 'var(--text-secondary)', padding: '4px 0', lineHeight: 1.5, fontWeight: 500,
                  }}>{opt}</div>
                ))}
              </div>
            </div>

            {/* Current Stem */}
            <div className="animate-fadeInUp stagger-3" style={{
              background: 'var(--bg-card)', borderRadius: 20, padding: '28px',
              border: '1px solid var(--border-card)', marginBottom: 20,
              backdropFilter: 'blur(16px)',
            }}>
              <p style={{
                fontSize: 15, color: 'var(--text-primary)', lineHeight: 1.75, margin: 0, fontWeight: 500,
              }}>{currentStem.stem}</p>
            </div>

            {/* Answer Buttons (A through J) */}
            <div className="animate-fadeInUp stagger-4" style={{
              display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 10, marginBottom: 20,
            }}>
              {currentSet.optionList.map((opt, i) => {
                const letter = opt.charAt(0);
                const isSelected = emqAnswer === letter;
                const isCorrect = letter === currentStem.correctAnswer;
                const showResult = emqAnswer !== null;

                let bg = 'var(--bg-option)';
                let borderColor = 'var(--border-subtle)';
                let textColor = 'var(--text-primary)';

                if (showResult) {
                  if (isCorrect) {
                    bg = 'rgba(72,187,120,0.15)';
                    borderColor = '#48bb78';
                    textColor = '#48bb78';
                  } else if (isSelected && !isCorrect) {
                    bg = 'rgba(245,101,101,0.15)';
                    borderColor = '#f56565';
                    textColor = '#f56565';
                  }
                }

                return (
                  <button key={letter} onClick={() => handleEMQAnswer(letter)} disabled={emqAnswer !== null} style={{
                    background: bg, border: `2px solid ${borderColor}`,
                    borderRadius: 12, padding: '14px 8px', cursor: emqAnswer ? 'default' : 'pointer',
                    fontWeight: 800, fontSize: 18, color: textColor,
                    transition: 'all 0.3s ease', fontFamily: 'var(--font-sans)',
                    opacity: showResult && !isCorrect && !isSelected ? 0.4 : 1,
                  }}
                  onMouseEnter={e => { if (!emqAnswer) { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.borderColor = '#48bb78'; }}}
                  onMouseLeave={e => { if (!emqAnswer) { e.currentTarget.style.transform = ''; e.currentTarget.style.borderColor = 'var(--border-subtle)'; }}}
                  >{letter}</button>
                );
              })}
            </div>

            {/* Explanation */}
            {emqAnswer && (
              <div className="animate-fadeInUp" style={{
                background: emqAnswer === currentStem.correctAnswer
                  ? 'rgba(72,187,120,0.08)' : 'rgba(245,101,101,0.08)',
                border: `1px solid ${emqAnswer === currentStem.correctAnswer ? 'rgba(72,187,120,0.25)' : 'rgba(245,101,101,0.25)'}`,
                borderRadius: 16, padding: '20px 24px', marginBottom: 20,
              }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10,
                  fontSize: 14, fontWeight: 700,
                  color: emqAnswer === currentStem.correctAnswer ? '#48bb78' : '#f56565',
                }}>
                  {emqAnswer === currentStem.correctAnswer ? '✅ Correct!' : `❌ Incorrect — Answer: ${currentStem.correctAnswer}`}
                </div>
                <p style={{ margin: 0, fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  {currentStem.explanation}
                </p>
              </div>
            )}

            {/* Next Button */}
            {emqAnswer && (
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button onClick={nextEMQStem} style={{
                  background: 'linear-gradient(135deg, #48bb78, #38a169)',
                  color: '#fff', border: 'none', borderRadius: 14,
                  padding: '14px 44px', fontWeight: 700, fontSize: 15,
                  cursor: 'pointer', transition: 'all 0.3s ease',
                  boxShadow: '0 4px 20px rgba(72,187,120,0.3)',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={e => e.currentTarget.style.transform = ''}
                >
                  {emqStemIdx + 1 < currentSet.stems.length
                    ? 'Next Stem →'
                    : emqSetIdx + 1 < GAME_DATA.emqSets.length
                      ? 'Next Set →'
                      : 'View Results 🏆'}
                </button>
              </div>
            )}

            <Footer />
          </div>
        </div>
      </>
    );
  }

  return null;
}
