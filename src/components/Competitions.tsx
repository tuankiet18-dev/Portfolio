import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Images, MapPin, Trophy, X } from "lucide-react";
import { COMPETITIONS, type Competition } from "../data/competitions";

interface CompetitionsProps {
  onViewProject?: () => void;
}

export default function Competitions({ onViewProject }: CompetitionsProps) {
  const [open, setOpen] = useState<{ competition: Competition; index: number } | null>(null);

  if (COMPETITIONS.length === 0) return null;

  return (
    <section id="competitions" className="certs competitions">
      <header className="certs__header">
        <h2>
          Competitions<br />&amp; Hackathons
        </h2>
        <p>Building under a deadline, pitching to judges, and learning from other teams.</p>
      </header>

      <ol className="competitions__list">
        {COMPETITIONS.map((competition) => {
          const cover = competition.photos[0];
          const hasPhotos = competition.photos.length > 0;
          const openPhotos = () => hasPhotos && setOpen({ competition, index: 0 });

          return (
            <li key={competition.id} className="competitions__row">
              <button
                type="button"
                className="competitions__thumb-btn"
                disabled={!hasPhotos}
                onClick={openPhotos}
                aria-label={hasPhotos ? `View photos from ${competition.name}` : competition.name}
              >
                {cover ? (
                  <img src={cover.src} alt="" loading="lazy" />
                ) : (
                  <Trophy size={20} />
                )}
                {competition.photos.length > 1 && (
                  <span className="competitions__photo-count">
                    <Images size={10} />
                    {competition.photos.length}
                  </span>
                )}
              </button>

              <div className="competitions__content">
                <div className="competitions__meta">
                  <span>{competition.date}</span>
                  {competition.location && (
                    <span className="inline-flex items-center gap-1">
                      <MapPin size={10} />
                      {competition.location}
                    </span>
                  )}
                  {competition.role && <span>{competition.role}</span>}
                </div>
                <div className="competitions__title-row">
                  <h3>{competition.name}</h3>
                  {competition.result && (
                    <span className="competitions__result">
                      <Trophy size={11} />
                      {competition.result}
                    </span>
                  )}
                </div>
                <p title={competition.summary}>{competition.summary}</p>
              </div>

              <div className="competitions__actions">
                {hasPhotos && (
                  <button type="button" className="work-list__link-pill github-pill" onClick={openPhotos}>
                    <Images size={12} />
                    <span>Photos</span>
                  </button>
                )}
                {competition.projectId && onViewProject && (
                  <button type="button" className="work-list__link-pill github-pill" onClick={onViewProject}>
                    <span>Project</span>
                    <ArrowUpRight size={11} />
                  </button>
                )}
              </div>
            </li>
          );
        })}
      </ol>

      {open && (
        <PhotoLightbox
          competition={open.competition}
          index={open.index}
          onIndexChange={(index) => setOpen({ ...open, index })}
          onClose={() => setOpen(null)}
        />
      )}
    </section>
  );
}

interface PhotoLightboxProps {
  competition: Competition;
  index: number;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}

function PhotoLightbox({ competition, index, onIndexChange, onClose }: PhotoLightboxProps) {
  const { photos } = competition;
  const photo = photos[index];
  const step = useCallback(
    (delta: number) => onIndexChange((index + delta + photos.length) % photos.length),
    [index, photos.length, onIndexChange],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") step(-1);
      else if (e.key === "ArrowRight") step(1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, step]);

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label={competition.name}>
      <div className="modal-dialog competitions__lightbox" onClick={(e) => e.stopPropagation()}>
        <div className="p-4 md:p-5 border-b border-white/10 flex items-center justify-between gap-4 bg-[#111111]">
          <div className="min-w-0">
            <span className="text-xs font-mono uppercase tracking-wider text-[#e05e1b]">
              {index + 1} / {photos.length}
            </span>
            <h3 className="text-base md:text-lg font-bold text-white mt-0.5 truncate">{competition.name}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 shrink-0 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close photos"
          >
            <X size={18} />
          </button>
        </div>

        <div className="relative flex-1 bg-[#0a0a0a] flex items-center justify-center min-h-[320px]">
          <img src={photo.src} alt={photo.alt} className="max-w-full max-h-[64vh] object-contain" />
          {photos.length > 1 && (
            <>
              <button
                type="button"
                className="competitions__nav left-3"
                onClick={() => step(-1)}
                aria-label="Previous photo"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                type="button"
                className="competitions__nav right-3"
                onClick={() => step(1)}
                aria-label="Next photo"
              >
                <ArrowRight size={18} />
              </button>
            </>
          )}
        </div>

        <div className="p-3 border-t border-white/10 bg-[#111111]">
          <p className="text-xs text-white/60 mb-2 px-1">{photo.alt}</p>
          {photos.length > 1 && (
            <div className="flex gap-2 overflow-x-auto">
              {photos.map((p, i) => (
                <button
                  key={p.src}
                  type="button"
                  onClick={() => onIndexChange(i)}
                  className={`competitions__thumb ${i === index ? "is-active" : ""}`}
                  aria-label={`Show photo ${i + 1}`}
                >
                  <img src={p.src} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
