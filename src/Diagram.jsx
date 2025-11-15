import React from 'react'

// Simple, clean SVG diagram of the digestive tract
// Built from basic shapes so it renders crisply at any size
export default function Diagram() {
  return (
    <div className="w-full flex items-center justify-center">
      <svg
        viewBox="0 0 520 520"
        className="w-full max-w-2xl drop-shadow-sm"
        role="img"
        aria-label="Simplified diagram of the human digestive system"
      >
        <defs>
          <linearGradient id="tube" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fde68a" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
          <linearGradient id="organ" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#93c5fd" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>

        {/* Head outline */}
        <circle cx="260" cy="70" r="40" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="3" />

        {/* Esophagus */}
        <path d="M260 110 v70" stroke="url(#tube)" strokeWidth="22" strokeLinecap="round" />

        {/* Stomach */}
        <path d="M250 180 q80 10 80 60 q0 60 -70 60 q-20 0 -30 -10 q-10 -8 -10 -22 q0 -12 10 -22 q10 -10 20 -10 q15 0 25 10"
          fill="url(#organ)" opacity="0.9" stroke="#1d4ed8" strokeWidth="3"/>

        {/* Liver */}
        <path d="M220 165 q80 -20 140 5 q-20 35 -120 30 q-20 -1 -25 -8 q-8 -10 5 -27 z" fill="#a7f3d0" stroke="#10b981" strokeWidth="3"/>

        {/* Pancreas */}
        <ellipse cx="330" cy="255" rx="60" ry="18" fill="#fcd34d" stroke="#d97706" strokeWidth="3"/>

        {/* Small intestine (coils) */}
        <g fill="none" stroke="url(#tube)" strokeWidth="14">
          <path d="M200 280 q60 20 120 0 q-60 25 -120 25 q60 20 120 20" />
          <path d="M200 345 q60 20 120 0 q-60 25 -120 25 q60 20 120 20" />
          <path d="M200 410 q60 20 120 0 q-60 25 -120 25" />
        </g>

        {/* Large intestine (frame) */}
        <path d="M180 270 h-30 q-25 0 -25 25 v150 q0 25 25 25 h220 q25 0 25 -25 v-150 q0 -25 -25 -25 h-30" fill="none" stroke="#6b7280" strokeWidth="18" strokeLinecap="round" />

        {/* Rectum */}
        <path d="M260 460 v35" stroke="#6b7280" strokeWidth="18" strokeLinecap="round" />

        {/* Labels */}
        <g fontSize="12" fill="#374151" fontFamily="Inter, ui-sans-serif, system-ui, -apple-system">
          <text x="270" y="40">Mouth</text>
          <text x="270" y="140">Esophagus</text>
          <text x="345" y="225">Stomach</text>
          <text x="350" y="255">Pancreas</text>
          <text x="330" y="170">Liver</text>
          <text x="340" y="325">Small intestine</text>
          <text x="345" y="430">Large intestine</text>
          <text x="270" y="500">Rectum</text>
        </g>
      </svg>
    </div>
  )
}
