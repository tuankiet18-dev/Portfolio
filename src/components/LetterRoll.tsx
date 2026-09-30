interface LetterRollProps {
  text: string;
  isActive?: boolean;
  className?: string;
}

export default function LetterRoll({
  text,
  isActive = false,
  className = "",
}: LetterRollProps) {
  return (
    <span
      className={`letter-roll ${isActive ? "is-active text-black font-semibold" : ""} ${className}`}
      aria-label={text}
    >
      {text.split("").map((char, index) => (
        <span key={index} className="letter-roll__char" aria-hidden="true">
          <span
            className="letter-roll__track"
            style={{ transitionDelay: `${index * 24}ms` }}
          >
            <span>{char === " " ? "\u00A0" : char}</span>
            <span>{char === " " ? "\u00A0" : char}</span>
          </span>
        </span>
      ))}
    </span>
  );
}
