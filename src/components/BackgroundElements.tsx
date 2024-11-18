import React from 'react';

const symbols = [
  'Σ', 'Δ', 'Ω', 'π', '∞', '∫', '√', '∀', '∃', '∇',
  '⌘', '⌅', '⌬', '⌭', '⌮', '⍜', '⍩', '⍫', '⍰', '⎈',
  '᚛', '᚜', 'ᚐ', 'ᚑ', 'ᚒ', 'ᚓ', 'ᚔ', 'ᚕ', 'ᚖ', 'ᚗ'
];

const formulas = [
  'E = mc²',
  'eiπ + 1 = 0',
  '∮ E·dl = -dΦB/dt',
  '∇ × F = 0',
  'Ψ(r,t) = Ψ(r)e^(-iEt/ℏ)'
];

const imageUrls = [
  'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=300&h=300', // ancient temple
  'https://images.unsplash.com/photo-1604007315290-7d25ea48e5aa?auto=format&fit=crop&q=80&w=300&h=300', // mystical forest
  'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=300&h=300', // stars
  'https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&q=80&w=300&h=300'  // nebula
];

export default function BackgroundElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Background Image Collage */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-2 gap-4 w-full h-full p-8">
          {imageUrls.map((url, i) => (
            <div
              key={`image-${i}`}
              className="relative overflow-hidden rounded-lg"
              style={{
                animation: `float ${Math.random() * 10 + 20}s infinite`,
                animationDelay: `-${Math.random() * 10}s`
              }}
            >
              <img
                src={url}
                alt=""
                className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute rounded-full animate-glow-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              background: `radial-gradient(circle at center, 
                rgba(168, 85, 247, 0.2) 0%,
                rgba(168, 85, 247, 0.1) 30%,
                rgba(168, 85, 247, 0) 70%)`,
              animation: `float ${Math.random() * 15 + 10}s infinite`,
              animationDelay: `-${Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Ancient Symbols */}
      {symbols.map((symbol, i) => (
        <div
          key={`symbol-${i}`}
          className="absolute animate-float opacity-20 text-purple-500/30 font-serif"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 2 + 1}rem`,
            animation: `float ${Math.random() * 10 + 10}s infinite`,
            animationDelay: `-${Math.random() * 10}s`
          }}
        >
          {symbol}
        </div>
      ))}

      {/* Mathematical Formulas */}
      {formulas.map((formula, i) => (
        <div
          key={`formula-${i}`}
          className="absolute animate-glow opacity-10 text-yellow-500/20 font-mono whitespace-nowrap"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 360}deg)`,
            animation: `glow ${Math.random() * 8 + 4}s infinite`,
            animationDelay: `-${Math.random() * 5}s`
          }}
        >
          {formula}
        </div>
      ))}

      {/* Energy Lines */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(168, 85, 247, 0)" />
            <stop offset="50%" stopColor="rgba(168, 85, 247, 0.2)" />
            <stop offset="100%" stopColor="rgba(168, 85, 247, 0)" />
          </linearGradient>
        </defs>
        {[...Array(15)].map((_, i) => {
          const x1 = Math.random() * 100;
          const y1 = Math.random() * 100;
          const x2 = x1 + (Math.random() * 30 - 15);
          const y2 = y1 + (Math.random() * 30 - 15);
          
          return (
            <line
              key={`line-${i}`}
              x1={`${x1}%`}
              y1={`${y1}%`}
              x2={`${x2}%`}
              y2={`${y2}%`}
              className="animate-glow"
              stroke="url(#line-gradient)"
              strokeWidth="1"
              style={{
                animation: `runeGlow ${Math.random() * 8 + 4}s infinite`,
                animationDelay: `-${Math.random() * 5}s`
              }}
            />
          );
        })}
      </svg>

      {/* Mystical Circles */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <radialGradient id="circle-gradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgb(168, 85, 247)" stopOpacity="0.1" />
            <stop offset="100%" stopColor="rgb(168, 85, 247)" stopOpacity="0" />
          </radialGradient>
        </defs>
        {[...Array(5)].map((_, i) => (
          <circle
            key={`circle-${i}`}
            className="animate-pulse origin-center"
            cx={`${Math.random() * 100}%`}
            cy={`${Math.random() * 100}%`}
            r={Math.random() * 100 + 50}
            fill="url(#circle-gradient)"
            style={{
              animation: `pulse ${Math.random() * 10 + 5}s infinite`,
              animationDelay: `-${Math.random() * 5}s`
            }}
          />
        ))}
      </svg>
    </div>
  );
}