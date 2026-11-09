import { useEffect, useRef } from 'react';

// Five-pointed star centred on (cx, cy)
const star = (cx, cy, R, r) =>
  Array.from({ length: 10 }, (_, i) => {
    const a = -Math.PI / 2 + (i * Math.PI) / 5;
    const rad = i % 2 === 0 ? R : r;
    return `${(cx + rad * Math.cos(a)).toFixed(2)},${(cy + rad * Math.sin(a)).toFixed(2)}`;
  }).join(' ');

export default function FlagBackground() {
  const svg = useRef(null);

  useEffect(() => {
    // Respect "reduce motion": freeze the wave.
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) svg.current?.pauseAnimations?.();
  }, []);

  return (
    <div className="flag-bg" aria-hidden="true">
      <svg ref={svg} viewBox="0 0 900 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <filter id="wave" x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence type="turbulence" baseFrequency="0.004 0.011" numOctaves="1" seed="3" result="n">
              <animate attributeName="baseFrequency" dur="16s" repeatCount="indefinite"
                values="0.004 0.011;0.006 0.015;0.004 0.011" />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="n" scale="40" xChannelSelector="R" yChannelSelector="G" />
          </filter>
          <linearGradient id="folds" x1="0" y1="0" x2="0.25" y2="0" spreadMethod="repeat">
            <stop offset="0" stopColor="#000" stopOpacity="0" />
            <stop offset="0.5" stopColor="#000" stopOpacity="0.22" />
            <stop offset="1" stopColor="#000" stopOpacity="0" />
            <animateTransform attributeName="gradientTransform" type="translate"
              from="0 0" to="0.25 0" dur="7s" repeatCount="indefinite" />
          </linearGradient>
          {/* crescent = big disc minus an offset disc, opening to the right */}
          <mask id="crescent" maskUnits="userSpaceOnUse" x="-200" y="-200" width="400" height="400">
            <circle r="140" fill="#fff" />
            <circle cx="32" r="112" fill="#000" />
          </mask>
        </defs>
        <g filter="url(#wave)">
          <rect x="-80" y="-80" width="530" height="760" fill="#006633" />
          <rect x="450" y="-80" width="530" height="760" fill="#FFFFFF" />
          <g transform="translate(450 300)">
            <circle r="140" fill="#D21034" mask="url(#crescent)" />
            <polygon points={star(58, 0, 62, 24)} fill="#D21034" />
          </g>
          <rect x="-80" y="-80" width="1060" height="760" fill="url(#folds)" />
        </g>
      </svg>
    </div>
  );
}
