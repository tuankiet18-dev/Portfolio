interface SlicedTextProps {
  text: string;
  className?: string;
  delayOffset?: number;
}

export default function SlicedText({
  text,
  className = "",
  delayOffset = 0,
}: SlicedTextProps) {
  return (
    <span className={`inline-block font-display tracking-tight ${className}`}>
      {text.split("").map((char, i) => {
        if (char === " ") {
          return (
            <span key={i} className="inline-block w-[0.25em]">
              &nbsp;
            </span>
          );
        }

        const delay = `${delayOffset + i * 35}ms`;

        return (
          <span key={i} className="sliced-char-box">
            {/* Invisible ghost character for exact layout box */}
            <span className="sliced-char-base">{char}</span>

            {/* Slice 1: Top 35% */}
            <span
              className="sliced-layer sliced-layer-1"
              style={{ animationDelay: delay }}
              aria-hidden="true"
            >
              {char}
            </span>

            {/* Slice 2: Middle 30% */}
            <span
              className="sliced-layer sliced-layer-2"
              style={{ animationDelay: delay }}
              aria-hidden="true"
            >
              {char}
            </span>

            {/* Slice 3: Bottom 35% */}
            <span
              className="sliced-layer sliced-layer-3"
              style={{ animationDelay: delay }}
              aria-hidden="true"
            >
              {char}
            </span>
          </span>
        );
      })}
    </span>
  );
}
