import { INTRO_TEXT } from '@/data/creatures'

/** Torn-paper SVG edge — used once, at the bottom of the hero. */
function TornEdge() {
  return (
    <svg
      className="pointer-events-none absolute bottom-0 left-0 h-10 w-full"
      viewBox="0 0 1200 40"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 40 L0 22 L38 26 L75 14 L120 24 L168 10 L210 22 L255 8 L300 20 L348 12 L390 26 L440 9 L485 21 L530 13 L575 25 L620 7 L665 19 L710 11 L760 24 L805 10 L850 22 L895 14 L940 26 L985 8 L1030 20 L1075 12 L1120 24 L1165 15 L1200 21 L1200 40 Z"
        fill="var(--shell)"
      />
    </svg>
  )
}

export function Hero({ onBrowse }: { onBrowse: () => void }) {
  return (
    <div className="relative flex min-h-full flex-col items-center justify-center overflow-hidden px-6 py-20 text-center">
      {/* Full-bleed darkened background */}
      <img
        src={`${import.meta.env.BASE_URL}images/tempestus.webp`}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        style={{ filter: 'brightness(0.32) saturate(0.85)' }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(18,16,12,0.15) 30%, rgba(18,16,12,0.88) 100%)',
        }}
      />

      <div className="relative z-10 max-w-3xl">
        <p className="font-fell text-sm italic tracking-wide text-[var(--gold-2)]">
          — archiwum ostatniej edycji —
        </p>
        <h1 className="font-display mt-4 text-5xl font-black uppercase leading-tight text-[#efe3c8] sm:text-7xl">
          Bestiariusz
        </h1>
        <p className="font-display mt-1 text-2xl font-semibold uppercase tracking-[0.35em] text-[var(--gold-2)] sm:text-3xl">
          Demony
        </p>

        <hr className="rule-tapered mx-auto my-8 w-64" />

        <p className="font-body mx-auto max-w-xl text-[17.5px] leading-[1.65] text-[#d9cbaa]">
          {INTRO_TEXT}
        </p>

        <p className="font-fell mt-8 text-sm italic text-[var(--gold-2)]">
          19 demonów · 3 świadome · 4 anioły
        </p>

        <button
          type="button"
          onClick={onBrowse}
          className="font-display mt-10 border border-[var(--gold)] bg-[rgba(107,30,45,0.55)] px-8 py-3 text-sm uppercase tracking-[0.2em] text-[#f2e6cd] transition-colors hover:bg-[var(--oxblood)]"
        >
          Otwórz spis wpisów
        </button>
      </div>

      <TornEdge />
    </div>
  )
}
