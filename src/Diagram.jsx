import React, { useMemo, useRef, useState } from 'react'

// Interactive, illustrated digestive system diagram
// - Hover or focus on an organ to see details
// - More organic shapes and soft shading for a realistic look
export default function Diagram() {
  const containerRef = useRef(null)
  const [hovered, setHovered] = useState(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const organs = useMemo(
    () => ({
      mouth: {
        name: 'Mouth',
        info:
          'Mastication increases surface area; saliva (amylase, lingual lipase) begins chemical digestion; forms a bolus for swallowing.',
      },
      esophagus: {
        name: 'Esophagus',
        info:
          'Muscular tube using peristalsis to transport bolus; upper/lower sphincters prevent air entry and reflux.',
      },
      stomach: {
        name: 'Stomach',
        info:
          'Reservoir and mixer; acid (HCl) denatures proteins and activates pepsin; intrinsic factor secreted by parietal cells.',
      },
      liver: {
        name: 'Liver',
        info:
          'Produces bile for fat emulsification; central in metabolism, detox, and nutrient processing via portal circulation.',
      },
      pancreas: {
        name: 'Pancreas',
        info:
          'Exocrine enzymes (amylase, lipase, proteases) + bicarbonate to neutralize acid; endocrine islets regulate glucose.',
      },
      smallIntestine: {
        name: 'Small intestine',
        info:
          'Duodenum mixes chyme with bile and pancreatic juices; jejunum absorbs most nutrients; ileum reclaims B12 and bile salts.',
      },
      largeIntestine: {
        name: 'Large intestine',
        info:
          'Absorbs water/electrolytes; microbiota ferment fiber to short-chain fatty acids (fuel for colonocytes).',
      },
      rectum: {
        name: 'Rectum',
        info:
          'Storage and defecation reflex coordination; internal (involuntary) and external (voluntary) sphincters.',
      },
    }),
    []
  )

  const handleMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const showTooltip = hovered && organs[hovered]

  return (
    <div ref={containerRef} className="relative w-full flex items-center justify-center select-none">
      <svg
        viewBox="0 0 540 560"
        className="w-full max-w-3xl drop-shadow-sm"
        role="img"
        aria-label="Interactive diagram of the human digestive system"
        onMouseMove={handleMove}
      >
        <defs>
          {/* Skin/soft tissue shading */}
          <radialGradient id="skin" cx="50%" cy="15%" r="70%">
            <stop offset="0%" stopColor="#f3f4f6" />
            <stop offset="100%" stopColor="#e5e7eb" />
          </radialGradient>
          {/* Generic glossy organ gradient */}
          <linearGradient id="organGloss" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fecaca" />
            <stop offset="60%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#991b1b" />
          </linearGradient>
          {/* Liver green-brown */}
          <linearGradient id="liverGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#bbf7d0" />
            <stop offset="60%" stopColor="#16a34a" />
            <stop offset="100%" stopColor="#065f46" />
          </linearGradient>
          {/* Pancreas golden */}
          <linearGradient id="pancreasGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fde68a" />
            <stop offset="70%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#b45309" />
          </linearGradient>
          {/* Intestinal pink */}
          <linearGradient id="intestineGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fbcfe8" />
            <stop offset="100%" stopColor="#db2777" />
          </linearGradient>
          {/* Large intestine gray */}
          <linearGradient id="colonGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#d1d5db" />
            <stop offset="100%" stopColor="#6b7280" />
          </linearGradient>
          {/* Subtle inner shadow for depth */}
          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.15" />
          </filter>
        </defs>

        {/* Head/torso silhouette for context */}
        <g opacity="0.5">
          <path d="M270 40a40 40 0 1 1 0 80a40 40 0 0 1 0-80z" fill="url(#skin)" stroke="#9ca3af" strokeWidth="2" />
          <rect x="210" y="115" width="120" height="400" rx="60" fill="url(#skin)" stroke="#9ca3af" strokeWidth="2" />
        </g>

        {/* MOUTH */}
        <g
          role="button"
          aria-label="Mouth"
          tabIndex={0}
          onMouseEnter={() => setHovered('mouth')}
          onMouseLeave={() => setHovered(null)}
          onFocus={() => setHovered('mouth')}
          onBlur={() => setHovered(null)}
          className="cursor-pointer"
        >
          <path d="M240 72 q30 -12 60 0 q-10 18 -30 20 q-20 2 -30 -20 z" fill="#fca5a5" stroke="#b91c1c" strokeWidth="2" filter="url(#softShadow)" />
          <path d="M245 78 q25 -8 50 0" stroke="#7f1d1d" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* ESOPHAGUS */}
        <g
          role="button"
          aria-label="Esophagus"
          tabIndex={0}
          onMouseEnter={() => setHovered('esophagus')}
          onMouseLeave={() => setHovered(null)}
          onFocus={() => setHovered('esophagus')}
          onBlur={() => setHovered(null)}
          className="cursor-pointer"
        >
          <path d="M270 110 v80" stroke="#f59e0b" strokeWidth="16" strokeLinecap="round" />
          <path d="M270 110 v80" stroke="#78350f" strokeOpacity="0.25" strokeWidth="16" strokeLinecap="round" />
        </g>

        {/* LIVER */}
        <g
          role="button"
          aria-label="Liver"
          tabIndex={0}
          onMouseEnter={() => setHovered('liver')}
          onMouseLeave={() => setHovered(null)}
          onFocus={() => setHovered('liver')}
          onBlur={() => setHovered(null)}
          className="cursor-pointer"
        >
          <path
            d="M205 175 q80 -30 170 -5 q-10 45 -130 48 q-25 1 -35 -7 q-18 -14 -5 -36 z"
            fill="url(#liverGrad)"
            stroke={hovered === 'liver' ? '#064e3b' : '#065f46'}
            strokeWidth="3"
            filter="url(#softShadow)"
          />
        </g>

        {/* STOMACH */}
        <g
          role="button"
          aria-label="Stomach"
          tabIndex={0}
          onMouseEnter={() => setHovered('stomach')}
          onMouseLeave={() => setHovered(null)}
          onFocus={() => setHovered('stomach')}
          onBlur={() => setHovered(null)}
          className="cursor-pointer"
        >
          <path
            d="M255 185 q60 10 95 45 q15 15 10 45 q-5 35 -40 50 q-45 18 -80 -2 q-20 -12 -22 -28 q-2 -13 8 -25 q10 -12 26 -12 q15 0 28 11 q5 -25 -10 -44 q-12 -15 -15 -40 z"
            fill="url(#organGloss)"
            stroke={hovered === 'stomach' ? '#7f1d1d' : '#991b1b'}
            strokeWidth="3"
            filter="url(#softShadow)"
          />
          {/* Greater curvature sheen */}
          <path d="M320 215 q35 20 40 45" stroke="#fee2e2" strokeOpacity="0.7" strokeWidth="4" strokeLinecap="round" />
        </g>

        {/* PANCREAS */}
        <g
          role="button"
          aria-label="Pancreas"
          tabIndex={0}
          onMouseEnter={() => setHovered('pancreas')}
          onMouseLeave={() => setHovered(null)}
          onFocus={() => setHovered('pancreas')}
          onBlur={() => setHovered(null)}
          className="cursor-pointer"
        >
          <path
            d="M325 265 q70 -10 100 0 q-10 22 -50 28 q-45 7 -105 -5 q35 -12 55 -23 z"
            fill="url(#pancreasGrad)"
            stroke={hovered === 'pancreas' ? '#92400e' : '#b45309'}
            strokeWidth="3"
            filter="url(#softShadow)"
          />
        </g>

        {/* SMALL INTESTINE */}
        <g
          role="button"
          aria-label="Small intestine"
          tabIndex={0}
          onMouseEnter={() => setHovered('smallIntestine')}
          onMouseLeave={() => setHovered(null)}
          onFocus={() => setHovered('smallIntestine')}
          onBlur={() => setHovered(null)}
          className="cursor-pointer"
          fill="none"
          stroke="url(#intestineGrad)"
          strokeWidth="12"
          strokeLinecap="round"
        >
          <path d="M205 300 q70 25 140 0 q-70 28 -140 28 q70 22 140 22" />
          <path d="M205 360 q70 25 140 0 q-70 28 -140 28 q70 22 140 22" />
          <path d="M205 420 q70 25 140 0 q-70 28 -140 28" />
        </g>

        {/* LARGE INTESTINE (frame) */}
        <g
          role="button"
          aria-label="Large intestine"
          tabIndex={0}
          onMouseEnter={() => setHovered('largeIntestine')}
          onMouseLeave={() => setHovered(null)}
          onFocus={() => setHovered('largeIntestine')}
          onBlur={() => setHovered(null)}
          className="cursor-pointer"
          fill="none"
          stroke="url(#colonGrad)"
          strokeWidth={hovered === 'largeIntestine' ? 20 : 18}
          strokeLinecap="round"
        >
          <path d="M185 285 h-30 q-28 0 -28 28 v160 q0 28 28 28 h230 q28 0 28 -28 v-160 q0 -28 -28 -28 h-30" />
        </g>

        {/* RECTUM */}
        <g
          role="button"
          aria-label="Rectum"
          tabIndex={0}
          onMouseEnter={() => setHovered('rectum')}
          onMouseLeave={() => setHovered(null)}
          onFocus={() => setHovered('rectum')}
          onBlur={() => setHovered(null)}
          className="cursor-pointer"
        >
          <path d="M270 475 v45" stroke="#6b7280" strokeWidth={hovered === 'rectum' ? 20 : 18} strokeLinecap="round" />
        </g>

        {/* Labels (minimal, since details show on hover) */}
        <g fontSize="12" fill="#374151" fontFamily="Inter, ui-sans-serif, system-ui, -apple-system" opacity="0.85">
          <text x="290" y="52">Mouth</text>
          <text x="285" y="148">Esophagus</text>
          <text x="360" y="230">Stomach</text>
          <text x="365" y="270">Pancreas</text>
          <text x="360" y="180">Liver</text>
          <text x="350" y="330">Small intestine</text>
          <text x="355" y="445">Large intestine</text>
          <text x="285" y="535">Rectum</text>
        </g>
      </svg>

      {showTooltip && (
        <div
          role="dialog"
          aria-live="polite"
          className="pointer-events-none absolute z-20 max-w-xs rounded-xl bg-white/95 backdrop-blur border border-gray-200 shadow-lg p-3 text-sm text-gray-800"
          style={{ left: Math.min(Math.max(8, pos.x + 12), (containerRef.current?.clientWidth || 0) - 220), top: Math.min(Math.max(8, pos.y + 12), (containerRef.current?.clientHeight || 0) - 120) }}
        >
          <div className="font-semibold text-gray-900">{organs[hovered].name}</div>
          <div className="mt-1 text-gray-700 leading-snug">{organs[hovered].info}</div>
        </div>
      )}
    </div>
  )
}
