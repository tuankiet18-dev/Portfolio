import { GitFork, ArrowRight, Server, Cloud } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden dot-grid"
    >
      {/* Orange radial spotlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% 0%, rgba(249,115,22,0.10) 0%, transparent 70%)',
        }}
      />
      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #0a0a0a)' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="animate-fade-in inline-flex items-center gap-2 bg-[#141414] border border-[#27272a] rounded-full px-4 py-1.5 mb-8">
          <span className="flex items-center gap-1.5 text-xs font-mono text-[#f97316]">
            <Server size={11} />
            Backend
          </span>
          <span className="w-px h-3 bg-[#27272a]" />
          <span className="flex items-center gap-1.5 text-xs font-mono text-violet-400">
            <Cloud size={11} />
            Cloud
          </span>
          <span className="w-px h-3 bg-[#27272a]" />
          <span className="text-xs font-mono text-[#52525b]">FPT University</span>
        </div>

        {/* Name */}
        <h1 className="animate-fade-in-up delay-100 text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-4">
          <span className="text-[#fafafa]">Luong Tuan Kiet</span>
          <br />
          <span className="gradient-text">(David)</span>
        </h1>

        {/* Title tag */}
        <div className="animate-fade-in-up delay-200 flex items-center justify-center gap-2 mb-6">
          <span className="font-mono text-lg text-[#f97316]">{'<'}</span>
          <p className="font-mono text-[#a1a1aa] text-base md:text-lg tracking-wide">
            Backend &amp; Cloud Developer
          </p>
          <span className="font-mono text-[#f97316]">{'/>'}</span>
        </div>

        {/* Tagline */}
        <p className="animate-fade-in-up delay-300 max-w-2xl mx-auto text-[#71717a] text-base md:text-lg leading-relaxed mb-10">
          Building{' '}
          <span className="text-[#fafafa] font-medium">scalable cloud-native architectures</span>
          , automating{' '}
          <span className="text-[#fafafa] font-medium">CI/CD workflows</span>, and leveraging{' '}
          <span className="text-[#f97316] font-medium">GenAI</span> to accelerate development.
        </p>

        {/* CTAs */}
        <div className="animate-fade-in-up delay-400 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://github.com/tuankiet18-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            id="hero-github-btn"
          >
            <GitFork size={16} />
            View GitHub
            <ArrowRight size={14} />
          </a>
          <a
            href="#contact"
            className="btn-secondary"
            id="hero-contact-btn"
          >
            Contact Me
          </a>
        </div>

        {/* Scroll hint */}
        <div className="animate-fade-in delay-600 mt-20 flex flex-col items-center gap-2 text-[#3f3f46]">
          <span className="text-xs font-mono">scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#3f3f46] to-transparent" />
        </div>
      </div>
    </section>
  );
}
