import { useRef, useEffect } from 'react';

interface SectionDividerProps {
  color?: string;
}

export default function SectionDivider({ color = '#f97316' }: SectionDividerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef    = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width  = canvas.offsetWidth;
    canvas.height = 2;

    // Particles sliding along the line
    const particles: { x: number; speed: number; alpha: number; color: string }[] = [];
    const colors = [color, '#818cf8', '#38bdf8'];
    for (let i = 0; i < 6; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        speed: 0.8 + Math.random() * 1.5,
        alpha: 0.5 + Math.random() * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let ts = 0;
    const animate = () => {
      ts++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Base line
      const grad = ctx.createLinearGradient(0, 0, canvas.width, 0);
      grad.addColorStop(0,   'transparent');
      grad.addColorStop(0.2, 'rgba(249,115,22,0.12)');
      grad.addColorStop(0.5, 'rgba(249,115,22,0.25)');
      grad.addColorStop(0.8, 'rgba(129,140,248,0.12)');
      grad.addColorStop(1,   'transparent');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, 1);

      // Moving particles
      for (const p of particles) {
        p.x += p.speed;
        if (p.x > canvas.width + 10) p.x = -10;

        const pg = ctx.createRadialGradient(p.x, 0.5, 0, p.x, 0.5, 12);
        pg.addColorStop(0, p.color);
        pg.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(p.x, 0.5, 12, 0, Math.PI * 2);
        ctx.fillStyle = pg;
        ctx.globalAlpha = p.alpha * (0.7 + 0.3 * Math.sin(ts * 0.05));
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [color]);

  return (
    <div
      className="relative px-6 py-0"
      style={{ height: '2px', margin: '0 auto', maxWidth: '1152px' }}
    >
      <canvas
        ref={canvasRef}
        style={{ width: '100%', height: '2px', display: 'block' }}
        aria-hidden="true"
      />
    </div>
  );
}
