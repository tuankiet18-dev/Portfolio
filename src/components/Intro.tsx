import { useEffect, useRef, useState } from "react";

const bootLines = [
  { text: "Initializing runtime environment", delay: 0 },
  { text: "Mounting database connections", delay: 420 },
  { text: "Loading API gateway endpoints", delay: 840 },
  { text: "Configuring cloud services", delay: 1200 },
  { text: "Spinning up worker queues", delay: 1560 },
  { text: "All systems operational", delay: 1900, accent: true },
];

export default function Intro({ onDone }: { onDone: () => void }) {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [showName, setShowName] = useState(false);
  const [exit, setExit] = useState(false);
  const calledDone = useRef(false);

  useEffect(() => {
    // Check if intro was already shown this session
    if (sessionStorage.getItem("intro-done") === "1") {
      onDone();
      return;
    }

    bootLines.forEach((line, i) => {
      window.setTimeout(() => {
        setVisibleLines((prev) => [...prev, i]);
      }, line.delay);
    });

    // Show name after all lines
    window.setTimeout(() => setShowName(true), 2350);

    // Begin exit
    window.setTimeout(() => {
      setExit(true);
      window.setTimeout(() => {
        if (!calledDone.current) {
          calledDone.current = true;
          sessionStorage.setItem("intro-done", "1");
          onDone();
        }
      }, 700);
    }, 3400);
  }, [onDone]);

  return (
    <div className={`intro-overlay ${exit ? "intro-exit" : ""}`}>
      <div className="intro-shell">
        {/* Terminal log lines */}
        <div className="intro-log">
          {bootLines.map((line, i) => (
            <div
              key={i}
              className={`intro-log-line ${visibleLines.includes(i) ? "is-visible" : ""} ${line.accent ? "is-accent" : ""}`}
            >
              <span className="intro-log-prefix">{">"}</span>
              <span className="intro-log-text">{line.text}</span>
              {visibleLines.includes(i) && (
                <span className="intro-log-check">✓</span>
              )}
            </div>
          ))}
        </div>

        {/* Name reveal */}
        <div className={`intro-name-block ${showName ? "is-visible" : ""}`}>
          <div className="intro-name-label">Backend & Cloud Developer</div>
          <h1 className="intro-name">
            LUONG<br />TUAN KIET
          </h1>
        </div>
      </div>

      {/* Skip button */}
      <button
        className="intro-skip"
        onClick={() => {
          if (!calledDone.current) {
            calledDone.current = true;
            sessionStorage.setItem("intro-done", "1");
            setExit(true);
            window.setTimeout(onDone, 500);
          }
        }}
      >
        Skip
      </button>
    </div>
  );
}
