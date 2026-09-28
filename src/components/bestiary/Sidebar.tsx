import { ANGELS_NOTE, creatures, threatLabel, type Creature } from '@/data/creatures'
import { Seal } from './Seal'
import { cn } from '@/lib/utils'

export type OriginFilter = 'wszystkie' | 'demony' | 'swiadome' | 'anioly'
export type SortMode = 'wpis' | 'moc' | 'az'

interface SidebarProps {
  filter: OriginFilter
  onFilterChange: (f: OriginFilter) => void
  sort: SortMode
  onSortChange: (s: SortMode) => void
  search: string
  selectedId: string | null
  onSelect: (id: string) => void
}

export function applyFilterSort(
  filter: OriginFilter,
  sort: SortMode,
  search: string
): Creature[] {
  let list = creatures.filter((c) => {
    if (filter === 'demony') return c.origin === 'demon'
    if (filter === 'swiadome') return c.conscious
    if (filter === 'anioly') return c.origin === 'aniol'
    return true
  })
  const q = search.trim().toLowerCase()
  if (q) {
    list = list.filter((c) =>
      [c.name, c.player ?? '', c.klass, c.lead ?? ''].join(' ').toLowerCase().includes(q)
    )
  }
  if (sort === 'moc') list = [...list].sort((a, b) => b.power - a.power)
  if (sort === 'az') list = [...list].sort((a, b) => a.name.localeCompare(b.name, 'pl'))
  return list
}

const FILTERS: { key: OriginFilter; label: string; test: (c: Creature) => boolean }[] = [
  { key: 'wszystkie', label: 'Wszystkie', test: () => true },
  { key: 'demony', label: 'Demony', test: (c) => c.origin === 'demon' },
  { key: 'swiadome', label: 'Świadome', test: (c) => c.conscious },
  { key: 'anioly', label: 'Anioły', test: (c) => c.origin === 'aniol' },
]

const SORTS: { key: SortMode; label: string }[] = [
  { key: 'wpis', label: 'Spis wg wpisu' },
  { key: 'moc', label: 'Moc malejąco' },
  { key: 'az', label: 'A–Z' },
]

export function Sidebar({
  filter,
  onFilterChange,
  sort,
  onSortChange,
  search,
  selectedId,
  onSelect,
}: SidebarProps) {
  const list = applyFilterSort(filter, sort, search)
  const searching = search.trim().length > 0

  return (
    <div className="flex h-full flex-col">
      {/* Filter chips */}
      <div className="flex flex-wrap gap-1.5 px-4 pt-4">
        {FILTERS.map(({ key, label, test }) => (
          <button
            key={key}
            type="button"
            data-active={filter === key}
            onClick={() => onFilterChange(key)}
            className={cn('chip', key === 'anioly' && 'chip-angel')}
          >
            {label} · {creatures.filter(test).length}
          </button>
        ))}
      </div>

      {/* Sort toggle */}
      <div className="flex gap-1 px-4 pb-3 pt-3">
        {SORTS.map(({ key, label }) => (
          <button
            key={key}
            type="button"
            onClick={() => onSortChange(key)}
            className={cn(
              'font-display flex-1 border px-1 py-1.5 text-[10px] uppercase tracking-[0.08em] transition-colors',
              sort === key
                ? 'border-[var(--gold)] bg-[rgba(169,130,47,0.12)] text-[var(--gold-2)]'
                : 'border-[var(--border)] text-[#8d7f66] hover:border-[var(--gold)] hover:text-[var(--gold-2)]'
            )}
          >
            {label}
          </button>
        ))}
      </div>

      <hr className="rule-tapered mx-4" />

      {/* Index list */}
      <nav className="scroll-slim flex-1 overflow-y-auto py-2" aria-label="Spis wpisów">
        {list.length === 0 && (
          <p className="font-fell px-5 py-8 text-sm italic text-[#8d7f66]">
            — żaden wpis nie odpowiada zapytaniu
          </p>
        )}
        {list.map((c, i) => {
          const showAngelHeader =
            !searching && c.origin === 'aniol' && (i === 0 || list[i - 1].origin !== 'aniol')
          return (
            <div key={c.id}>
              {showAngelHeader && (
                <div className="px-5 pb-1 pt-4">
                  <p className="font-display text-[11px] uppercase tracking-[0.2em] text-[var(--angel-gold)]">
                    Anioły
                  </p>
                  {!searching && sort === 'wpis' && (
                    <p className="font-fell mt-1 text-[11px] italic leading-snug text-[#8d7f66]">
                      {ANGELS_NOTE}
                    </p>
                  )}
                </div>
              )}
              <button
                type="button"
                onClick={() => onSelect(c.id)}
                className={cn(
                  'sidebar-row flex w-full items-center gap-3 px-4 py-2 text-left',
                  selectedId === c.id && 'bg-[rgba(107,30,45,0.28)]'
                )}
              >
                <img
                  src={`${import.meta.env.BASE_URL}images/${c.image}`}
                  alt=""
                  loading="lazy"
                  className="sigil-thumb h-10 w-10 shrink-0 rounded-sm object-cover"
                  style={{ border: '1px solid var(--gold)' }}
                />
                <span className="min-w-0 flex-1">
                  <span className="flex items-baseline gap-2">
                    <span className="font-fell shrink-0 text-xs text-[var(--gold)]">{c.numeral}</span>
                    <span className="font-display truncate text-sm text-[#e6d9bd]">{c.name}</span>
                  </span>
                  <span className="block truncate text-xs italic text-[#8d7f66]">
                    {c.player ? `/ ${c.player}` : c.klass}
                    {c.conscious && ' · świadomy'}
                  </span>
                </span>
                <Seal creature={c} size="sm" />
              </button>
            </div>
          )
        })}
      </nav>
    </div>
  )
}

export { threatLabel }
