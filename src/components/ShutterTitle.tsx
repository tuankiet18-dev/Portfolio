import { motion, useReducedMotion } from "framer-motion";

interface ShutterTitleProps {
  text: string;
  className?: string;
}

export default function ShutterTitle({ text, className = "" }: ShutterTitleProps) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(/(\s+)/);
  let charCounter = 0;

  return (
    <span className={`inline ${className}`} aria-label={text}>
      {words.map((word, wordIdx) =>
        /^\s+$/.test(word) ? (
          <span key={`space-${wordIdx}`}>{word}</span>
        ) : (
          <span key={`word-${wordIdx}`} className="inline-block whitespace-nowrap">
            {word.split("").map((char) => {
              const idx = charCounter++;
              return (
                <span
                  key={`${char}-${idx}`}
                  className="relative inline-block overflow-hidden"
                  aria-hidden="true"
                >
                  {/* Main text unblurring & fading in */}
                  <motion.span
                    className="inline-block"
                    initial={!shouldReduceMotion ? { opacity: 0, filter: "blur(10px)" } : {}}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, delay: 0.04 * idx + 0.2 }}
                  >
                    {char}
                  </motion.span>

                  {/* Shutter slice 1: Top 35% */}
                  {!shouldReduceMotion && (
                    <motion.span
                      className="pointer-events-none absolute inset-0 inline-block text-current select-none"
                      initial={{ x: "-115%", opacity: 0 }}
                      animate={{ x: "115%", opacity: [0, 0.95, 0] }}
                      transition={{ duration: 0.7, delay: 0.04 * idx, ease: "easeInOut" }}
                      style={{ clipPath: "polygon(0 0, 100% 0, 100% 35%, 0 35%)" }}
                    >
                      {char}
                    </motion.span>
                  )}

                  {/* Shutter slice 2: Middle 30% */}
                  {!shouldReduceMotion && (
                    <motion.span
                      className="pointer-events-none absolute inset-0 inline-block text-current select-none"
                      initial={{ x: "115%", opacity: 0 }}
                      animate={{ x: "-115%", opacity: [0, 0.95, 0] }}
                      transition={{ duration: 0.7, delay: 0.04 * idx + 0.1, ease: "easeInOut" }}
                      style={{ clipPath: "polygon(0 35%, 100% 35%, 100% 65%, 0 65%)" }}
                    >
                      {char}
                    </motion.span>
                  )}

                  {/* Shutter slice 3: Bottom 35% */}
                  {!shouldReduceMotion && (
                    <motion.span
                      className="pointer-events-none absolute inset-0 inline-block text-current select-none"
                      initial={{ x: "-115%", opacity: 0 }}
                      animate={{ x: "115%", opacity: [0, 0.95, 0] }}
                      transition={{ duration: 0.7, delay: 0.04 * idx + 0.2, ease: "easeInOut" }}
                      style={{ clipPath: "polygon(0 65%, 100% 65%, 100% 100%, 0 100%)" }}
                    >
                      {char}
                    </motion.span>
                  )}
                </span>
              );
            })}
          </span>
        )
      )}
    </span>
  );
}
