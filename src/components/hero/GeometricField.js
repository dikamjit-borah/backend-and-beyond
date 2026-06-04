import React from "react";

/* right-anchored: for full-page hero background (mobile / left panel overlay)
   [top%, right%, size, isAccent, delay] */
const DOTS = [
  [12, 15, 4, false, 0],    [18, 42, 3, true, 1.2],  [8,  22, 5, false, 0.5],
  [25, 30, 3, true,  2.1],  [32, 48, 4, false, 0.8], [15, 10, 3, false, 3.0],
  [40, 20, 5, true,  1.5],  [22, 8,  3, false, 2.4], [48, 44, 3, true,  0.3],
  [55, 18, 4, false, 1.9],  [35, 6,  3, true,  3.5], [60, 38, 3, false, 1.1],
  [10, 5,  4, true,  2.8],  [45, 13, 5, false, 0.7], [70, 26, 3, true,  1.6],
  [28, 34, 3, false, 2.2],  [65, 50, 4, false, 3.2], [52, 9,  3, true,  0.9],
  [75, 20, 5, false, 2.6],  [38, 40, 3, true,  1.4], [20, 55, 3, false, 3.8],
  [80, 32, 4, true,  0.4],  [58, 16, 3, false, 2.0], [42, 46, 3, false, 1.7],
];

/* left-anchored: for the 40% right panel — evenly spread left→right
   [top%, left%, size, isAccent, delay] */
const PANEL_DOTS = [
  [8,  10, 4, false, 0],    [15, 72, 3, true,  1.2], [24, 38, 5, false, 0.5],
  [32, 85, 3, true,  2.1],  [18, 52, 4, false, 0.8], [45, 18, 3, false, 3.0],
  [38, 65, 5, true,  1.5],  [55, 28, 3, false, 2.4], [62, 80, 3, true,  0.3],
  [70, 12, 4, false, 1.9],  [48, 46, 3, true,  3.5], [78, 58, 3, false, 1.1],
  [12, 90, 4, true,  2.8],  [85, 32, 5, false, 0.7], [42, 7,  3, true,  1.6],
  [58, 50, 3, false, 2.2],  [25, 22, 4, false, 3.2], [72, 70, 3, true,  0.9],
  [88, 15, 5, false, 2.6],  [35, 88, 3, true,  1.4], [10, 55, 3, false, 3.8],
  [65, 40, 4, true,  0.4],  [50, 8,  3, false, 2.0], [80, 92, 3, false, 1.7],
];

const GeometricField = ({ dark = false, panel = false }) => {
  const primary      = dark ? 'var(--cream)' : 'var(--ink)';
  const accentColor  = 'var(--accent)';
  const dotPrimaryOp = dark ? 0.32 : 0.22;
  const dotAccentOp  = dark ? 0.60 : 0.40;

  if (panel) {
    /* Panel mode — left-anchored, smaller shapes centered, no bleed-off-edge rings */
    return (
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
        style={{ zIndex: 0 }}
      >
        {/* Soft ink glow — top center of panel */}
        <div style={{
          position: 'absolute', top: '-10%', left: '10%',
          width: '80%', height: '60%',
          background: 'radial-gradient(ellipse at top, rgba(45,10,107,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        {/* Accent glow — lower center */}
        <div style={{
          position: 'absolute', top: '50%', left: '20%',
          width: '60%', height: '50%',
          background: 'radial-gradient(ellipse, rgba(232,93,0,0.07) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />

        {/* Large outer ring — centered */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          width: '340px', height: '340px',
          transform: 'translate(-50%, -50%)',
          border: `1px solid ${primary}`,
          borderRadius: '50%',
          opacity: 0.10,
          animation: 'geo-spin 55s linear infinite',
        }} />

        {/* Medium accent ring — centered */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          width: '200px', height: '200px',
          transform: 'translate(-50%, -50%)',
          border: `1.5px solid ${accentColor}`,
          borderRadius: '50%',
          opacity: 0.18,
          animation: 'geo-spin-rev 30s linear infinite',
        }} />

        {/* Inner ring */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          width: '90px', height: '90px',
          transform: 'translate(-50%, -50%)',
          border: `1px solid ${primary}`,
          borderRadius: '50%',
          opacity: 0.18,
          animation: 'geo-spin 18s linear infinite',
        }} />

        {/* Small accent ring */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          width: '44px', height: '44px',
          transform: 'translate(-50%, -50%)',
          border: `1.5px solid ${accentColor}`,
          borderRadius: '50%',
          opacity: 0.28,
          animation: 'geo-spin-rev 11s linear infinite',
        }} />

        {/* Triangle top-left area */}
        <div style={{
          position: 'absolute', top: '18%', left: '15%',
          width: 0, height: 0,
          borderLeft: '32px solid transparent',
          borderRight: '32px solid transparent',
          borderBottom: `55px solid ${primary}`,
          opacity: 0.12,
          animation: 'geo-drift-a 20s ease-in-out infinite',
        }} />

        {/* Triangle bottom-right area */}
        <div style={{
          position: 'absolute', top: '68%', left: '70%',
          width: 0, height: 0,
          borderLeft: '22px solid transparent',
          borderRight: '22px solid transparent',
          borderBottom: `38px solid ${accentColor}`,
          opacity: 0.20,
          animation: 'geo-drift-b 24s ease-in-out infinite',
        }} />

        {/* Rotating square — upper right of panel */}
        <div style={{
          position: 'absolute', top: '22%', left: '72%',
          width: '38px', height: '38px',
          border: `1.5px solid ${primary}`,
          opacity: 0.16,
          animation: 'geo-spin 26s linear infinite',
        }} />

        {/* Line 1 — upper area */}
        <div style={{
          position: 'absolute', top: '28%', left: '8%',
          width: '110px', height: '1.5px',
          background: primary,
          opacity: 0.12,
          transform: 'rotate(-15deg)',
          animation: 'geo-drift-c 22s ease-in-out infinite',
        }} />

        {/* Line 2 — accent, lower area */}
        <div style={{
          position: 'absolute', top: '72%', left: '55%',
          width: '85px', height: '1.5px',
          background: accentColor,
          opacity: 0.18,
          transform: 'rotate(20deg)',
          animation: 'geo-drift-b 28s ease-in-out infinite 2s',
        }} />

        {/* Line 3 — short, mid-left */}
        <div style={{
          position: 'absolute', top: '55%', left: '6%',
          width: '50px', height: '1px',
          background: primary,
          opacity: 0.14,
          transform: 'rotate(35deg)',
          animation: 'geo-drift-a 17s ease-in-out infinite 1s',
        }} />

        {/* Dot field — left-anchored, full spread */}
        {PANEL_DOTS.map(([top, left, size, isAccent, delay], i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              top: `${top}%`,
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              background: isAccent ? accentColor : primary,
              borderRadius: '50%',
              opacity: isAccent ? dotAccentOp : dotPrimaryOp,
              animation: `geo-pulse ${4 + (i % 3)}s ease-in-out infinite ${delay}s`,
            }}
          />
        ))}

        {/* Large accent dot — center-right of panel */}
        <div style={{
          position: 'absolute', top: '45%', left: '78%',
          width: '10px', height: '10px',
          background: accentColor,
          borderRadius: '50%',
          opacity: 0.50,
          animation: 'geo-pulse 3.5s ease-in-out infinite',
        }} />

        {/* Cross mark — upper left */}
        <div style={{ position: 'absolute', top: '38%', left: '14%', opacity: 0.16 }}>
          <div style={{ width: '18px', height: '1.5px', background: primary, position: 'absolute', top: '50%', left: 0, transform: 'translateY(-50%)' }} />
          <div style={{ width: '1.5px', height: '18px', background: primary, position: 'absolute', left: '50%', top: 0, transform: 'translateX(-50%)' }} />
        </div>

        {/* Cross mark — lower center, accent */}
        <div style={{ position: 'absolute', top: '78%', left: '42%', opacity: 0.22, animation: 'geo-drift-d 21s ease-in-out infinite' }}>
          <div style={{ width: '13px', height: '1.5px', background: accentColor, position: 'absolute', top: '50%', left: 0, transform: 'translateY(-50%)' }} />
          <div style={{ width: '1.5px', height: '13px', background: accentColor, position: 'absolute', left: '50%', top: 0, transform: 'translateX(-50%)' }} />
        </div>
      </div>
    );
  }

  /* Default mode — right-anchored for full-width backgrounds */
  const ringOp       = dark ? 0.20 : 0.12;
  const accentRingOp = dark ? 0.32 : 0.18;
  const innerRingOp  = dark ? 0.24 : 0.20;
  const smallRingOp  = dark ? 0.35 : 0.25;
  const tri1Op       = dark ? 0.22 : 0.14;
  const squareOp     = dark ? 0.26 : 0.18;
  const line1Op      = dark ? 0.22 : 0.14;
  const line2Op      = dark ? 0.28 : 0.20;
  const line3Op      = dark ? 0.24 : 0.16;
  const bigDotOp     = dark ? 0.65 : 0.50;
  const crossOp      = dark ? 0.28 : 0.18;
  const cross2Op     = dark ? 0.32 : 0.22;

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
      style={{ zIndex: 0 }}
    >
      <div style={{
        position: 'absolute', top: '-10%', right: '-5%',
        width: '55vw', height: '70vh',
        background: dark
          ? 'radial-gradient(ellipse at top right, rgba(250,248,244,0.05) 0%, transparent 65%)'
          : 'radial-gradient(ellipse at top right, rgba(45,10,107,0.07) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '30%', right: '5%',
        width: '30vw', height: '40vh',
        background: 'radial-gradient(ellipse, rgba(232,93,0,0.10) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />
      <div style={{ position: 'absolute', top: '-80px', right: '8%', width: '420px', height: '420px', border: `1.5px solid ${primary}`, borderRadius: '50%', opacity: ringOp, animation: 'geo-spin 50s linear infinite' }} />
      <div style={{ position: 'absolute', top: '60px', right: '18%', width: '220px', height: '220px', border: `1.5px solid ${accentColor}`, borderRadius: '50%', opacity: accentRingOp, animation: 'geo-spin-rev 28s linear infinite' }} />
      <div style={{ position: 'absolute', top: '120px', right: '30%', width: '100px', height: '100px', border: `1px solid ${primary}`, borderRadius: '50%', opacity: innerRingOp, animation: 'geo-spin 20s linear infinite' }} />
      <div style={{ position: 'absolute', top: '200px', right: '12%', width: '60px', height: '60px', border: `1.5px solid ${accentColor}`, borderRadius: '50%', opacity: smallRingOp, animation: 'geo-spin-rev 14s linear infinite' }} />
      <div style={{ position: 'absolute', top: '80px', right: '22%', width: 0, height: 0, borderLeft: '50px solid transparent', borderRight: '50px solid transparent', borderBottom: `86px solid ${primary}`, opacity: tri1Op, animation: 'geo-drift-a 18s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', top: '260px', right: '9%', width: 0, height: 0, borderLeft: '28px solid transparent', borderRight: '28px solid transparent', borderBottom: `48px solid ${accentColor}`, opacity: accentRingOp, animation: 'geo-drift-b 22s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', top: '180px', right: '38%', width: '52px', height: '52px', border: `1.5px solid ${primary}`, opacity: squareOp, animation: 'geo-spin 24s linear infinite' }} />
      <div style={{ position: 'absolute', top: '110px', right: '14%', width: '200px', height: '1.5px', background: primary, opacity: line1Op, animation: 'geo-drift-c 20s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', top: '320px', right: '28%', width: '120px', height: '1.5px', background: accentColor, opacity: line2Op, transform: 'rotate(-18deg)', animation: 'geo-drift-b 26s ease-in-out infinite 2s' }} />
      <div style={{ position: 'absolute', top: '240px', right: '45%', width: '70px', height: '1px', background: primary, opacity: line3Op, transform: 'rotate(30deg)', animation: 'geo-drift-a 16s ease-in-out infinite 1s' }} />
      {DOTS.slice(0, 12).map(([top, right, size, isAccent, delay], i) => (
        <div key={i} style={{ position: 'absolute', top: `${top}%`, right: `${right}%`, width: `${size}px`, height: `${size}px`, background: isAccent ? accentColor : primary, borderRadius: '50%', opacity: isAccent ? dotAccentOp : dotPrimaryOp, animation: `geo-pulse ${4 + (i % 3)}s ease-in-out infinite ${delay}s` }} />
      ))}
      <div style={{ position: 'absolute', top: '45%', right: '16%', width: '10px', height: '10px', background: accentColor, borderRadius: '50%', opacity: bigDotOp, animation: 'geo-pulse 3.5s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', top: '52%', right: '35%', opacity: crossOp }}>
        <div style={{ width: '20px', height: '1.5px', background: primary, position: 'absolute', top: '50%', left: 0, transform: 'translateY(-50%)' }} />
        <div style={{ width: '1.5px', height: '20px', background: primary, position: 'absolute', left: '50%', top: 0, transform: 'translateX(-50%)' }} />
      </div>
      <div style={{ position: 'absolute', top: '22%', right: '48%', opacity: cross2Op, animation: 'geo-drift-d 19s ease-in-out infinite' }}>
        <div style={{ width: '14px', height: '1.5px', background: accentColor, position: 'absolute', top: '50%', left: 0, transform: 'translateY(-50%)' }} />
        <div style={{ width: '1.5px', height: '14px', background: accentColor, position: 'absolute', left: '50%', top: 0, transform: 'translateX(-50%)' }} />
      </div>
    </div>
  );
};

export default GeometricField;
