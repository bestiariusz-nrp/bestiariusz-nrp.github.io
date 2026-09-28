import { creatures, type Creature } from '@/data/creatures'
import { Seal } from './Seal'
import { Fmt } from './Fmt'

interface EntryProps {
  creature: Creature
  onNavigate: (id: string) => void
}

function StatLine({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4 py-1.5">
        <span className="section-label shrink-0 text-[13px] text-[var(--oxblood)]">{label}</span>
        <span className="font-body text-right text-[16px] font-semibold text-[var(--ink)]">
          {value}
        </span>
      </div>
      <hr className="rule-tapered" />
    </div>
  )
}

function LoreSection({
  label,
  text,
  dropcap = false,
}: {
  label: string
  text: string
  dropcap?: boolean
}) {
  return (
    <section>
      <h3 className="section-label mb-1.5 text-[15px] text-[var(--oxblood)]">{label}</h3>
      <p className={dropcap ? 'lore-body dropcap' : 'lore-body'}>
        <Fmt text={text} />
      </p>
    </section>
  )
}

export function Entry({ creature, onNavigate }: EntryProps) {
  const idx = creatures.findIndex((c) => c.id === creature.id)
  const prev = idx > 0 ? creatures[idx - 1] : null
  const next = idx < creatures.length - 1 ? creatures[idx + 1] : null
  const isAngel = creature.origin === 'aniol'

  const status = isAngel
    ? 'Anioł — nie jest demonem'
    : creature.conscious
      ? 'Demon świadomy'
      : 'Demon'

  const powerText = creature.powerNote
    ? `${creature.power} (${creature.powerNote})`
    : String(creature.power)

  return (
    <article className="parchment mx-auto my-8 w-full max-w-5xl shadow-2xl sm:my-12">
      {/* Header band */}
      <header className="px-6 pt-8 sm:px-12 sm:pt-10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-fell text-sm italic tracking-wide text-[var(--oxblood)]">
              Wpis {creature.numeral}
            </p>
            <h2 className="font-display mt-1 text-4xl font-bold uppercase leading-tight text-[var(--ink)] sm:text-5xl">
              {creature.name}
            </h2>
            {creature.player && (
              <p className="font-fell mt-1 text-lg italic text-[#5c4630]">/ {creature.player}</p>
            )}
            {creature.lead && (
              <p className="font-body mt-3 max-w-xl text-[19px] italic leading-snug text-[#3d2c1a]">
                <span className="font-fell mr-1 not-italic text-[var(--gold)]">—</span>
                {creature.lead}
              </p>
            )}
          </div>
          <Seal creature={creature} />
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="font-display border border-[var(--oxblood)] px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-[var(--oxblood)]">
            {creature.klass}
          </span>
          <span
            className="font-display px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-[#f2e6cd]"
            style={{ backgroundColor: isAngel ? 'var(--angel-gold)' : 'var(--oxblood)' , color: isAngel ? '#241a06' : undefined }}
          >
            {isAngel ? 'Anioł' : 'Demon'}
          </span>
          {creature.conscious && (
            <span className="font-display border border-[var(--ember)] bg-[var(--ember)] px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-[#f2e6cd]">
              Świadomy
            </span>
          )}
        </div>
      </header>

      {/* Portrait + stat block */}
      <div className="mt-8 grid gap-8 px-6 sm:px-12 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
        <div>
          <img
            src={`${import.meta.env.BASE_URL}images/${creature.image}`}
            alt={`Portret: ${creature.name}`}
            loading="lazy"
            className="frame-engraved aspect-[2/3] w-full object-cover"
          />
          <p className="font-fell mt-4 text-center text-xs italic text-[#6b563c]">
            — rycina wg relacji ocalałych —
          </p>
        </div>

        <div className="flex flex-col justify-start">
          <h3 className="section-label mb-2 text-[15px] text-[var(--ink)]">Karta wpisu</h3>
          <StatLine label="Klasa" value={creature.klass} />
          <StatLine label="Moc" value={powerText} />
          <StatLine label="Twórca" value={creature.player ?? 'nieznany'} />
          <StatLine label="Status" value={status} />
          <p className="font-fell mt-6 text-sm italic leading-relaxed text-[#6b563c]">
            {isAngel
              ? 'Wpisany, choć z piekła nie pochodzi — walczył z nim.'
              : 'Piekło jest poza czasem: ten wpis obowiązuje we wszystkich edycjach.'}
          </p>
        </div>
      </div>

      {/* Lore sections */}
      <div className="mt-10 space-y-7 px-6 pb-10 sm:px-12">
        {creature.sections ? (
          <>
            <LoreSection label="Wygląd" text={creature.sections.wyglad} />
            <LoreSection label="Zachowanie" text={creature.sections.zachowanie} />
            <LoreSection label="Zdolność" text={creature.sections.zdolnosc} />
            <div className="weakness-box px-5 py-4">
              <h3 className="section-label mb-1.5 text-[15px] text-[var(--ember)]">Słabość</h3>
              <p className="lore-body">
                <Fmt text={creature.sections.slabosc} strongClassName="text-[var(--ember)]" />
              </p>
            </div>
            <LoreSection label="Historia" text={creature.sections.historia} dropcap />
          </>
        ) : (
          <section>
            <h3 className="section-label mb-1.5 text-[15px] text-[var(--oxblood)]">Opis</h3>
            <p className="lore-body dropcap">
              <Fmt text={creature.description ?? ''} />
            </p>
          </section>
        )}
      </div>

      {/* Prev / next footer navigation */}
      <footer className="border-t border-[rgba(44,30,18,0.25)] px-6 py-5 sm:px-12">
        <div className="flex items-center justify-between gap-4">
          {prev ? (
            <button
              type="button"
              onClick={() => onNavigate(prev.id)}
              className="font-display group text-left text-[12px] uppercase tracking-[0.1em] text-[var(--oxblood)] hover:text-[var(--ember)]"
            >
              <span className="block text-[10px] text-[#6b563c]">← Poprzedni wpis</span>
              {prev.numeral} · {prev.name}
            </button>
          ) : (
            <span />
          )}
          {next ? (
            <button
              type="button"
              onClick={() => onNavigate(next.id)}
              className="font-display group text-right text-[12px] uppercase tracking-[0.1em] text-[var(--oxblood)] hover:text-[var(--ember)]"
            >
              <span className="block text-[10px] text-[#6b563c]">Następny wpis →</span>
              {next.numeral} · {next.name}
            </button>
          ) : (
            <span />
          )}
        </div>
      </footer>
    </article>
  )
}
