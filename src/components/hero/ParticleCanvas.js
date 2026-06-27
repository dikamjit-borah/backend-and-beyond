import React, { useRef, useEffect } from 'react';

const CONNECT_DIST = 120;

const ParticleCanvas = ({ color = '#2D0A6B' }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const canvas  = canvasRef.current;
    if (!canvas) return;
    const section = canvas.closest('section') || canvas.parentElement;
    const ctx     = canvas.getContext('2d');

    let W = 0, H = 0, dpr = 1;
    let particles = [];
    let inited    = false;
    let rafId     = null;
    const cursor  = { x: -9999, y: -9999 };
    const trail   = [];

    // Parse #rrggbb → "r,g,b"
    const ri = parseInt(color.slice(1, 3), 16);
    const gi = parseInt(color.slice(3, 5), 16);
    const bi = parseInt(color.slice(5, 7), 16);
    const rgb = `${ri},${gi},${bi}`;

    const resize = () => {
      dpr = window.devicePixelRatio || 1;
      W   = section.offsetWidth;
      H   = section.offsetHeight;
      if (!W || !H) return;
      canvas.width  = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      canvas.style.width  = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const init = () => {
      const n = window.innerWidth < 768 ? 28 : 50;
      particles = Array.from({ length: n }, () => ({
        x:  Math.random() * W,
        y:  Math.random() * H,
        vx: (Math.random() - 0.5) * 0.55,
        vy: (Math.random() - 0.5) * 0.55,
        r:  Math.random() * 1.2 + 0.6,
        o:  Math.random() * 0.28 + 0.40,
      }));
      inited = true;
    };

    const tick = () => {
      if (!W || !H) { rafId = requestAnimationFrame(tick); return; }
      if (!inited) init();

      ctx.clearRect(0, 0, W, H);

      // Wrap particles at all four edges
      for (const p of particles) {
        p.x = (p.x + p.vx + W) % W;
        p.y = (p.y + p.vy + H) % H;
      }

      // Particle–particle connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx   = particles[i].x - particles[j].x;
          const dy   = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_DIST) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${rgb},${(1 - dist / CONNECT_DIST) * 0.22})`;
            ctx.lineWidth   = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }

        // Cursor as virtual particle — not drawn, just connected
        const cx   = particles[i].x - cursor.x;
        const cy   = particles[i].y - cursor.y;
        const cdist = Math.sqrt(cx * cx + cy * cy);
        if (cdist < CONNECT_DIST) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(${rgb},${(1 - cdist / CONNECT_DIST) * 0.33})`;
          ctx.lineWidth   = 0.6;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(cursor.x, cursor.y);
          ctx.stroke();
        }
      }

      // Phosphor trail — last 30 cursor positions, opacity ramps up
      for (let i = 0; i < trail.length; i++) {
        ctx.beginPath();
        ctx.arc(trail[i].x, trail[i].y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb},${(i / trail.length) * 0.5})`;
        ctx.fill();
      }

      // Draw particles on top
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb},${p.o})`;
        ctx.fill();
      }

      rafId = requestAnimationFrame(tick);
    };

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      cursor.x = e.clientX - rect.left;
      cursor.y = e.clientY - rect.top;
      trail.push({ x: cursor.x, y: cursor.y });
      if (trail.length > 30) trail.shift();
    };

    // ResizeObserver on the section element (not the canvas)
    const ro = new ResizeObserver(resize);
    ro.observe(section);
    resize();
    rafId = requestAnimationFrame(tick);
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [color]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, display: 'block', pointerEvents: 'none' }}
    />
  );
};

export default ParticleCanvas;
