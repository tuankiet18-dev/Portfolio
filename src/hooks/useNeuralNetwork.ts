import { useRef, useEffect, useCallback } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────
export type NodeType = 'core' | 'secondary' | 'micro';

export interface NeuralNode {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  type: NodeType;
  energy: number;        // 0-1, current activation level
  pulsePhase: number;    // sin wave phase offset
  color: string;
}

export interface NeuralEdge {
  a: number; // node index
  b: number; // node index
  opacity: number;
}

export interface Signal {
  edgeIndex: number;
  progress: number;  // 0→1
  speed: number;
  color: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────
const CONNECTION_DISTANCE = 180;
const NODE_COLORS: Record<NodeType, string> = {
  core:      '#f97316',   // orange
  secondary: '#818cf8',   // violet
  micro:     '#38bdf8',   // sky blue
};

// ─── Hook ─────────────────────────────────────────────────────────────────────
export function useNeuralNetwork(canvasRef: React.RefObject<HTMLCanvasElement | null>) {
  const nodesRef   = useRef<NeuralNode[]>([]);
  const edgesRef   = useRef<NeuralEdge[]>([]);
  const signalsRef = useRef<Signal[]>([]);
  const mouseRef   = useRef({ x: -9999, y: -9999 });
  const rafRef     = useRef<number>(0);
  const lastSignalRef = useRef<number>(0);

  // ── Build node/edge graph ──────────────────────────────────────────────────
  const buildGraph = useCallback((w: number, h: number) => {
    const isMobile = w < 768;
    const totalNodes = isMobile ? 45 : 85;

    const coreCount      = Math.floor(totalNodes * 0.10);
    const secondaryCount = Math.floor(totalNodes * 0.30);
    const microCount     = totalNodes - coreCount - secondaryCount;

    const nodes: NeuralNode[] = [];
    let id = 0;

    const addNodes = (count: number, type: NodeType, minR: number, maxR: number) => {
      for (let i = 0; i < count; i++) {
        nodes.push({
          id: id++,
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: minR + Math.random() * (maxR - minR),
          type,
          energy: Math.random(),
          pulsePhase: Math.random() * Math.PI * 2,
          color: NODE_COLORS[type],
        });
      }
    };

    addNodes(coreCount,      'core',      4, 7);
    addNodes(secondaryCount, 'secondary', 2, 4.5);
    addNodes(microCount,     'micro',     1, 2.5);

    nodesRef.current = nodes;
    buildEdges();
  }, []);

  const buildEdges = () => {
    const nodes = nodesRef.current;
    const edges: NeuralEdge[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONNECTION_DISTANCE) {
          edges.push({
            a: i,
            b: j,
            opacity: (1 - dist / CONNECTION_DISTANCE) * 0.55,
          });
        }
      }
    }
    edgesRef.current = edges;
  };

  // ── Animation frame ────────────────────────────────────────────────────────
  const tick = useCallback((ts: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;
    const nodes = nodesRef.current;
    const edges = edgesRef.current;
    const signals = signalsRef.current;
    const mouse = mouseRef.current;

    // Clear
    ctx.clearRect(0, 0, W, H);

    // ── Update nodes ──────────────────────────────────────────────────────
    for (const node of nodes) {
      // Mouse attraction (soft pull within 150px)
      const mdx = mouse.x - node.x;
      const mdy = mouse.y - node.y;
      const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
      if (mdist < 150 && mdist > 0) {
        const force = (1 - mdist / 150) * 0.012;
        node.vx += (mdx / mdist) * force;
        node.vy += (mdy / mdist) * force;
      }

      // Velocity damping
      node.vx *= 0.98;
      node.vy *= 0.98;

      // Move
      node.x += node.vx;
      node.y += node.vy;

      // Wrap-around bounds
      if (node.x < -20) node.x = W + 20;
      if (node.x > W + 20) node.x = -20;
      if (node.y < -20) node.y = H + 20;
      if (node.y > H + 20) node.y = -20;

      // Energy pulse (breathing)
      node.energy = 0.4 + 0.6 * (0.5 + 0.5 * Math.sin(ts * 0.0008 + node.pulsePhase));
    }

    // Rebuild edges every 60 frames (lazy)
    if (Math.floor(ts / 16) % 60 === 0) {
      buildEdges();
    }

    // ── Draw edges ────────────────────────────────────────────────────────
    for (const edge of edges) {
      const na = nodes[edge.a];
      const nb = nodes[edge.b];
      if (!na || !nb) continue;

      ctx.beginPath();
      ctx.moveTo(na.x, na.y);
      ctx.lineTo(nb.x, nb.y);
      ctx.strokeStyle = `rgba(249,115,22,${edge.opacity * 0.5})`;
      ctx.lineWidth = 0.8;
      ctx.stroke();
    }

    // ── Spawn signals periodically ────────────────────────────────────────
    if (ts - lastSignalRef.current > 1800 && edges.length > 0) {
      const count = 1 + Math.floor(Math.random() * 2);
      for (let i = 0; i < count; i++) {
        const edgeIdx = Math.floor(Math.random() * edges.length);
        const colors = ['#f97316', '#818cf8', '#38bdf8', '#fb923c'];
        signalsRef.current.push({
          edgeIndex: edgeIdx,
          progress: 0,
          speed: 0.006 + Math.random() * 0.01,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
      lastSignalRef.current = ts;
    }

    // ── Update & draw signals ─────────────────────────────────────────────
    const aliveSignals: Signal[] = [];
    for (const sig of signals) {
      sig.progress += sig.speed;
      if (sig.progress >= 1) continue; // discard

      const edge = edges[sig.edgeIndex];
      if (!edge) continue;
      const na = nodes[edge.a];
      const nb = nodes[edge.b];
      if (!na || !nb) continue;

      const px = na.x + (nb.x - na.x) * sig.progress;
      const py = na.y + (nb.y - na.y) * sig.progress;

      // Glow halo
      const grd = ctx.createRadialGradient(px, py, 0, px, py, 8);
      grd.addColorStop(0, sig.color);
      grd.addColorStop(1, 'transparent');
      ctx.beginPath();
      ctx.arc(px, py, 8, 0, Math.PI * 2);
      ctx.fillStyle = grd;
      ctx.globalAlpha = 0.5;
      ctx.fill();
      ctx.globalAlpha = 1;

      // Core dot
      ctx.beginPath();
      ctx.arc(px, py, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = sig.color;
      ctx.fill();

      aliveSignals.push(sig);
    }
    signalsRef.current = aliveSignals;

    // ── Draw nodes ────────────────────────────────────────────────────────
    for (const node of nodes) {
      const r = node.radius * (0.9 + 0.1 * node.energy);
      const alpha = 0.5 + 0.5 * node.energy;

      // Outer glow
      if (node.type !== 'micro') {
        const glowR = r * 3.5;
        const grd = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, glowR);
        grd.addColorStop(0, node.color + '55');
        grd.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(node.x, node.y, glowR, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.globalAlpha = node.energy * 0.8;
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      // Core circle
      ctx.beginPath();
      ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
      ctx.fillStyle = node.color;
      ctx.globalAlpha = alpha * (node.type === 'micro' ? 0.45 : 0.9);
      ctx.fill();
      ctx.globalAlpha = 1;
    }

    rafRef.current = requestAnimationFrame(tick);
  }, [canvasRef, buildEdges]);

  // ── Setup / teardown ───────────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      buildGraph(canvas.width, canvas.height);
    };

    resize();
    window.addEventListener('resize', resize);

    // Visibility - pause when tab hidden
    const handleVisibility = () => {
      if (document.visibilityState === 'hidden') {
        cancelAnimationFrame(rafRef.current);
      } else {
        rafRef.current = requestAnimationFrame(tick);
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [buildGraph, tick]);

  // ── Mouse handler ──────────────────────────────────────────────────────────
  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseRef.current = { x: e.clientX, y: e.clientY };
  }, []);

  const handleClick = useCallback((e: MouseEvent) => {
    // Spawn burst of signals from nearest node
    const nodes = nodesRef.current;
    const edges = edgesRef.current;
    let nearest = -1;
    let minDist = Infinity;
    for (let i = 0; i < nodes.length; i++) {
      const dx = nodes[i].x - e.clientX;
      const dy = nodes[i].y - e.clientY;
      const d = dx * dx + dy * dy;
      if (d < minDist) { minDist = d; nearest = i; }
    }
    if (nearest < 0) return;

    // Boost energy of nearest node
    nodesRef.current[nearest].energy = 1;

    // Spawn 3-5 signals from edges connected to this node
    const connected = edges.filter(e => e.a === nearest || e.b === nearest);
    const burst = connected.slice(0, 5);
    for (const edge of burst) {
      signalsRef.current.push({
        edgeIndex: edges.indexOf(edge),
        progress: 0,
        speed: 0.015,
        color: '#f97316',
      });
    }
  }, []);

  return { handleMouseMove, handleClick };
}
