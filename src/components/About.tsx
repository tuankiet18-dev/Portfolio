import React from 'react';
import { GraduationCap, Cpu, Bot, Coffee } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const highlights = [
  {
    icon: GraduationCap,
    label: 'FPT University',
    value: 'GPA 8.9 / 10',
    color: 'text-amber-400',
    bg: 'bg-amber-400/10 border-amber-400/20',
  },
  {
    icon: Cpu,
    label: 'Core Focus',
    value: '.NET + AWS',
    color: 'text-[#f97316]',
    bg: 'bg-[#f97316]/10 border-[#f97316]/20',
  },
  {
    icon: Bot,
    label: 'AI-Augmented',
    value: 'Gemini · ChatGPT',
    color: 'text-violet-400',
    bg: 'bg-violet-400/10 border-violet-400/20',
  },
  {
    icon: Coffee,
    label: 'Based in',
    value: 'HCMC, Vietnam',
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10 border-emerald-400/20',
  },
];

// Code snippet data — Lovable style
const codeLines = [
  { tokens: [{ t: 'keyword', v: 'const ' }, { t: 'name', v: 'david' }, { t: 'punct', v: ' = {' }] },
  { tokens: [{ t: 'key', v: '  name' }, { t: 'punct', v: ': ' }, { t: 'str', v: "'Luong Tuan Kiet'" }, { t: 'punct', v: ',' }] },
  { tokens: [{ t: 'key', v: '  role' }, { t: 'punct', v: ': ' }, { t: 'str', v: "'Backend & Cloud Dev'" }, { t: 'punct', v: ',' }] },
  { tokens: [{ t: 'key', v: '  stack' }, { t: 'punct', v: ': [' }, { t: 'str', v: "'.NET'" }, { t: 'punct', v: ', ' }, { t: 'str', v: "'AWS'" }, { t: 'punct', v: ', ' }, { t: 'str', v: "'Docker'" }, { t: 'punct', v: ', ' }, { t: 'str', v: "'PostgreSQL'" }, { t: 'punct', v: '],' }] },
  { tokens: [{ t: 'key', v: '  location' }, { t: 'punct', v: ': ' }, { t: 'str', v: "'HCMC, Vietnam'" }, { t: 'punct', v: ',' }] },
  { tokens: [{ t: 'key', v: '  open_to_work' }, { t: 'punct', v: ': ' }, { t: 'bool', v: 'true' }] },
  { tokens: [{ t: 'punct', v: '};' }] },
];

function CodeToken({ t, v }: { t: string; v: string }) {
  const cls: Record<string, string> = {
    keyword: 'text-violet-400',
    name:    'text-[#fafafa]',
    key:     'code-key',
    str:     'code-str',
    bool:    'code-bool',
    punct:   'code-punct',
  };
  return <span className={cls[t] ?? ''}>{v}</span>;
}

export default function About() {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const bioRef    = useScrollReveal<HTMLDivElement>();
  const codeRef   = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const quoteRef  = useScrollReveal<HTMLElement>();
  const cardsRef  = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-14 reveal" ref={headerRef}>
          <span className="section-label">00 — About</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#fafafa]">
            Engineer with a cloud-first mindset
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Bio + code snippet */}
          <div className="md:col-span-3 space-y-5">
            <div className="reveal" ref={bioRef}>
              <p className="text-[#a1a1aa] text-base leading-relaxed">
                I am a{' '}
                <span className="text-[#fafafa] font-medium">final-year Software Engineering student</span>{' '}
                at FPT University{' '}
                <span className="font-mono text-[#f97316] text-sm">(GPA: 8.9/10)</span>{' '}
                with a strong foundation in Data Structures, Algorithms, and Event-Driven Architecture.
              </p>
              <p className="text-[#a1a1aa] text-base leading-relaxed mt-4">
                I specialize in the{' '}
                <span className="text-[#fafafa] font-medium">.NET ecosystem</span> and{' '}
                <span className="text-[#fafafa] font-medium">AWS cloud infrastructure</span>. I actively
                integrate AI tools like{' '}
                <span className="text-violet-300">Gemini</span> and{' '}
                <span className="text-violet-300">ChatGPT</span> into my daily workflow to prototype,
                debug, and optimize performance — shipping faster without compromising on architectural
                quality.
              </p>
              <p className="text-[#a1a1aa] text-base leading-relaxed mt-4">
                When I'm away from the keyboard, you can find me analyzing Real Madrid matches, hitting
                the gym for strength training, or exploring new coffee shops around Ho Chi Minh City.
              </p>
            </div>

            {/* Lovable-style code snippet */}
            <div className="reveal delay-2" ref={codeRef}>
              <div className="code-block mt-6">
                {/* Fake window dots */}
                <div className="flex gap-1.5 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3f3f46]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3f3f46]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3f3f46]" />
                </div>
                {codeLines.map((line, i) => (
                  <div key={i} className="leading-7">
                    {line.tokens.map((tok, j) => (
                      <CodeToken key={j} t={tok.t} v={tok.v} />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Quote */}
            <blockquote className="reveal delay-3 mt-4 border-l-2 border-[#f97316] pl-5 py-1" ref={quoteRef as React.RefObject<HTMLQuoteElement>}>
              <p className="font-mono text-sm text-[#52525b] italic">
                "Good architecture is invisible. Great architecture scales."
              </p>
            </blockquote>
          </div>

          {/* Highlight cards */}
          <div
            className="md:col-span-2 grid grid-cols-2 gap-4 reveal-stagger"
            ref={cardsRef}
          >
            {highlights.map(({ icon: Icon, label, value, color, bg }) => (
              <div
                key={label}
                className={`rounded-xl border p-4 ${bg} card-hover`}
              >
                <Icon size={18} className={`${color} mb-3`} />
                <p className="text-xs text-[#52525b] mb-0.5">{label}</p>
                <p className={`text-sm font-semibold ${color}`}>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
