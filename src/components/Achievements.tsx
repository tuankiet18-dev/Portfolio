import { Trophy, GraduationCap, Calendar, Star } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Achievements() {
  const headerRef  = useScrollReveal();
  const trophy1Ref = useScrollReveal<HTMLDivElement>({ threshold: 0.08 });
  const trophy2Ref = useScrollReveal<HTMLDivElement>({ threshold: 0.08 });

  return (
    <section id="achievements" className="py-28 px-6 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-14 reveal" ref={headerRef as React.RefObject<HTMLDivElement>}>
          <span className="section-label">03 — Background</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#fafafa]">
            Achievements &amp; Education
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Achievement */}
          <div
            ref={trophy1Ref}
            className="reveal rounded-2xl border border-amber-400/25 bg-gradient-to-br from-amber-400/10 to-amber-600/5 p-8 card-hover relative overflow-hidden"
          >
            {/* Background decoration */}
            <div
              className="absolute top-0 right-0 w-40 h-40 opacity-10 pointer-events-none"
              style={{ background: 'radial-gradient(circle, #f97316, transparent 70%)' }}
            />

            <div className="relative">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center">
                  <Trophy size={18} className="text-amber-400" />
                </div>
                <div>
                  <p className="text-xs font-mono text-amber-400/70 uppercase tracking-wider">
                    Programming Contest
                  </p>
                  <p className="text-sm text-amber-300 font-semibold">F-CODE TALENT 2024</p>
                </div>
              </div>

              <div className="mb-5">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-5xl font-extrabold text-amber-300">Top 15</span>
                  <span className="text-[#71717a] font-mono text-sm">/ 600+ participants</span>
                </div>
                <p className="text-[#a1a1aa] text-sm leading-relaxed mt-3">
                  Ranked in the{' '}
                  <span className="text-amber-300 font-medium">top 2.5%</span> of competitors,
                  demonstrating strong algorithmic problem-solving, data structures proficiency,
                  and performance-oriented coding under time constraints.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {['Data Structures', 'Algorithms', 'Competitive Programming'].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2.5 py-1 rounded-full border border-amber-400/25 bg-amber-400/10 text-amber-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div
            ref={trophy2Ref}
            className="reveal delay-2 rounded-2xl border border-[#27272a] bg-[#111111] p-8 card-hover gradient-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#f97316]/10 border border-[#f97316]/25 flex items-center justify-center">
                <GraduationCap size={18} className="text-[#f97316]" />
              </div>
              <div>
                <p className="text-xs font-mono text-[#f97316]/70 uppercase tracking-wider">
                  Degree
                </p>
                <p className="text-sm text-[#fafafa] font-semibold">Bachelor of Software Engineering</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-[#fafafa] text-lg font-bold">FPT University</p>
                <p className="text-[#52525b] text-sm">Ho Chi Minh City Campus · 2023 – 2027</p>
              </div>

              <div className="flex items-center gap-2 text-[#52525b] text-sm font-mono">
                <Calendar size={13} />
                <span>2023 — 2027</span>
              </div>

              <div className="flex items-center gap-2">
                <Star size={13} className="text-amber-400" />
                <span className="text-amber-300 font-mono text-sm font-semibold">GPA: 8.9 / 10</span>
              </div>

              <div className="border-t border-[#27272a] pt-4 mt-4">
                <p className="text-xs text-[#3f3f46] uppercase tracking-wider font-mono mb-3">
                  Core Coursework
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Data Structures',
                    'Algorithms',
                    'Cloud Computing',
                    'Software Architecture',
                    'Database Systems',
                    'DevOps',
                  ].map((course) => (
                    <span
                      key={course}
                      className="text-xs font-mono px-2.5 py-1 rounded-full border border-[#27272a] bg-[#0a0a0a] text-[#52525b]"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
