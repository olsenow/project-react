import React, { useEffect, useRef } from "react";

const COLORS = [
  "rgb(125 211 252)",
  "rgb(249 168 212)",
  "rgb(134 239 172)",
  "rgb(253 224 71)",
  "rgb(252 165 165)",
  "rgb(216 180 254)",
  "rgb(147 197 253)",
  "rgb(165 180 252)",
  "rgb(196 181 253)",
];

const pickColor = () => COLORS[(Math.random() * COLORS.length) | 0];

export default function BackgroundBoxesCanvas({
  cellW = 64,
  cellH = 32,
  sizeMultiplier = 3,
  skewXDeg = -48,
  skewYDeg = 14,
  scale = 0.675,
  lineColor = "rgb(51 65 85)", // slate-700
  background = "rgb(15 23 42)", // slate-900

  // trail tuning
  trailMax = 180,
  fadeSpeed = 0.035, // lower = longer trail
  spawnAlpha = 0.9,
}) {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);

  const stRef = useRef({
    dpr: 1,
    w: 0,
    h: 0,

    // skew plane size
    planeW: 0,
    planeH: 0,

    // transform matrices: plane -> canvas, and canvas -> plane (inverse)
    M: null,
    Minv: null,

    // trail items: { row, col, color, alpha }
    trail: [],
    lastKey: "",
  });

  const computeMatrices = () => {
    const st = stRef.current;
    const { w, h } = st;

    const planeW = w * sizeMultiplier;
    const planeH = h * sizeMultiplier;

    // Plane space (grid coords) -> Canvas space (screen coords)
    const M = new DOMMatrix()
      .translateSelf(w / 2, h / 2)
      .skewXSelf(skewXDeg)
      .skewYSelf(skewYDeg)
      .scaleSelf(scale)
      .translateSelf(-planeW / 2, -planeH / 2);

    st.planeW = planeW;
    st.planeH = planeH;
    st.M = M;
    st.Minv = M.inverse();
  };

  const draw = (ctx) => {
    const st = stRef.current;
    const { w, h, dpr, M, planeW, planeH, trail } = st;
    if (!w || !h || !M) return;

    // Clear + background in CANVAS coords (reset transform)
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, w * dpr, h * dpr);
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, w * dpr, h * dpr);

    // Apply plane->canvas transform (+ DPR)
    ctx.setTransform(
      M.a * dpr, M.b * dpr,
      M.c * dpr, M.d * dpr,
      M.e * dpr, M.f * dpr
    );

    // Draw grid lines in PLANE coords
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = 1;

    const cols = Math.ceil(planeW / cellW);
    const rows = Math.ceil(planeH / cellH);

    for (let c = 0; c <= cols; c++) {
      const x = c * cellW + 0.5;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, planeH);
      ctx.stroke();
    }

    for (let r = 0; r <= rows; r++) {
      const y = r * cellH + 0.5;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(planeW, y);
      ctx.stroke();
    }

    // Trail cells (also in PLANE coords)
    for (let i = trail.length - 1; i >= 0; i--) {
      const t = trail[i];

      ctx.globalAlpha = t.alpha;
      ctx.fillStyle = t.color;
      ctx.fillRect(t.col * cellW, t.row * cellH, cellW, cellH);

      t.alpha -= fadeSpeed;
      if (t.alpha <= 0) trail.splice(i, 1);
    }

    ctx.globalAlpha = 1;
  };

  const tick = () => {
    rafRef.current = 0;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    draw(ctx);

    // Keep animating while there is trail to fade
    if (stRef.current.trail.length > 0) {
      rafRef.current = requestAnimationFrame(tick);
    }
  };

  const ensureAnimating = () => {
    if (!rafRef.current) rafRef.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const st = stRef.current;

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1)); // cap DPR for stability/perf

      st.w = w;
      st.h = h;
      st.dpr = dpr;

      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);

      computeMatrices();
      ensureAnimating(); // redraw once after resize
    };

    const onPointerMove = (e) => {
      if (!st.Minv) return;

      const rect = canvas.getBoundingClientRect();
      const xCanvas = e.clientX - rect.left;
      const yCanvas = e.clientY - rect.top;

      // Convert CANVAS coords -> PLANE coords using inverse matrix
      const p = new DOMPoint(xCanvas, yCanvas).matrixTransform(st.Minv);

      // outside plane? do nothing
      if (p.x < 0 || p.y < 0 || p.x >= st.planeW || p.y >= st.planeH) return;

      const col = Math.floor(p.x / cellW);
      const row = Math.floor(p.y / cellH);

      // avoid spawning duplicates every pixel move
      const key = `${row},${col}`;
      if (key === st.lastKey) return;
      st.lastKey = key;

      st.trail.push({
        row,
        col,
        color: pickColor(),
        alpha: spawnAlpha,
      });

      if (st.trail.length > trailMax) {
        st.trail.splice(0, st.trail.length - trailMax);
      }

      ensureAnimating();
    };

    const onPointerLeave = () => {
      st.lastKey = "";
      // keep animating if trail exists (so it fades out)
      ensureAnimating();
    };

    window.addEventListener("resize", resize);
    canvas.addEventListener("pointermove", onPointerMove, { passive: true });
    canvas.addEventListener("pointerleave", onPointerLeave);

    resize();

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerleave", onPointerLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = 0;
    };
  }, [cellW, cellH, sizeMultiplier, skewXDeg, skewYDeg, scale, trailMax, fadeSpeed, spawnAlpha]);

  return (
    <div className="fixed inset-0 overflow-hidden" style={{ background }}>
      <canvas ref={canvasRef} style={{ display: "block" }} />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background,
          WebkitMaskImage:
            "radial-gradient(ellipse at center, transparent 20%, black 80%)",
          maskImage:
            "radial-gradient(ellipse at center, transparent 20%, black 80%)",
        }}
      />
    </div>
  );
}