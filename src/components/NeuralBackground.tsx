import { useRef, useEffect } from 'react';
import { useNeuralNetwork } from '../hooks/useNeuralNetwork';

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { handleMouseMove, handleClick } = useNeuralNetwork(canvasRef);

  useEffect(() => {
    const onMove  = (e: MouseEvent) => handleMouseMove(e);
    const onClick = (e: MouseEvent) => handleClick(e);

    window.addEventListener('mousemove', onMove,  { passive: true });
    window.addEventListener('click',    onClick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('click',    onClick);
    };
  }, [handleMouseMove, handleClick]);

  return (
    <>
      {/* Neural canvas - fixed, full-screen, behind everything */}
      <canvas
        ref={canvasRef}
        id="neural-canvas"
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
          pointerEvents: 'none',
          opacity: 0.98,
          filter: 'saturate(1.25) contrast(1.08)',
        }}
      />

      {/* Radial vignette - lighter so neural network is more prominent */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1,
          pointerEvents: 'none',
          background:
            'radial-gradient(ellipse 92% 92% at 50% 50%, transparent 42%, rgba(10,10,10,0.38) 100%)',
        }}
      />

      {/* Top fade */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '80px',
          zIndex: 1,
          pointerEvents: 'none',
          background: 'linear-gradient(to bottom, rgba(10,10,10,0.72), transparent)',
        }}
      />

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          height: '80px',
          zIndex: 1,
          pointerEvents: 'none',
          background: 'linear-gradient(to top, rgba(10,10,10,0.72), transparent)',
        }}
      />
    </>
  );
}
