import { useEffect, useMemo, useRef, useState } from 'react'
import { creatures } from '@/data/creatures'
import { Entry } from '@/components/bestiary/Entry'
import { Hero } from '@/components/bestiary/Hero'
import { Sidebar, type OriginFilter, type SortMode } from '@/components/bestiary/Sidebar'
import { cn } from '@/lib/utils'

/** Parse `#/wpis/<id>` — returns the creature id, or null for hero / unknown ids. */
function parseHash(): string | null {
  const m = window.location.hash.match(/^#\/wpis\/([a-z0-9_]+)$/)
  if (!m) return null
  return creatures.some((c) => c.id === m[1]) ? m[1] : null
}

export default function Home() {
  const [selectedId, setSelectedId] = useState<string | null>(() => parseHash())
  const [filter, setFilter] = useState<OriginFilter>('wszystkie')
  const [sort, setSort] = useState<SortMode>('wpis')
  const [search, setSearch] = useState('')
  const [drawerOpen, setDrawerOpen] = useState(false)
  const searchRef = useRef<HTMLInputElement>(null)
  const mainRef = useRef<HTMLDivElement>(null)

  const selected = useMemo(
    () => creatures.find((c) => c.id === selectedId) ?? null,
    [selectedId]
  )

  // "/" focuses search; Escape closes drawer / clears selection
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === '/' && document.activeElement !== searchRef.current) {
        e.preventDefault()
        searchRef.current?.focus()
      }
      if (e.key === 'Escape') {
        if (drawerOpen) setDrawerOpen(false)
        else if (document.activeElement === searchRef.current) searchRef.current?.blur()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [drawerOpen])

  // Deep linking: hashchange (back/forward buttons, pasted URLs) drives selection
  useEffect(() => {
    const onHashChange = () => {
      setSelectedId(parseHash())
      mainRef.current?.scrollTo({ top: 0 })
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const handleSelect = (id: string) => {
    const hash = `#/wpis/${id}`
    if (window.location.hash !== hash) {
      window.history.pushState(null, '', hash)
    }
    setSelectedId(id)
    setDrawerOpen(false)
    mainRef.current?.scrollTo({ top: 0 })
  }

  const handleHome = () => {
    if (window.location.hash !== '' && window.location.hash !== '#/') {
      window.history.pushState(null, '', '#/')
    }
    setSelectedId(null)
  }

  const handleBrowse = () => {
    if (window.matchMedia('(max-width: 1023px)').matches) {
      setDrawerOpen(true)
    } else {
      handleSelect(creatures[0].id)
    }
  }

  const sidebar = (
    <Sidebar
      filter={filter}
      onFilterChange={setFilter}
      sort={sort}
      onSortChange={setSort}
      search={search}
      selectedId={selectedId}
      onSelect={handleSelect}
    />
  )

  return (
    <div className="shell-noise flex h-screen flex-col overflow-hidden bg-[var(--shell)]">
      {/* Header bar */}
      <header className="flex h-14 shrink-0 items-center gap-3 border-b border-[var(--border)] bg-[var(--shell-2)] px-4">
        <button
          type="button"
          onClick={() => setDrawerOpen(true)}
          className="flex h-9 w-9 items-center justify-center border border-[var(--border)] text-[var(--gold-2)] hover:border-[var(--gold)] lg:hidden"
          aria-label="Otwórz spis wpisów"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path d="M2 4h14M2 9h14M2 14h14" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>

        <button
          type="button"
          onClick={handleHome}
          className="font-display text-lg font-bold uppercase tracking-[0.25em] text-[#e6d9bd] hover:text-[var(--gold-2)]"
        >
          Bestiariusz
        </button>
        <span className="font-fell hidden text-sm italic text-[var(--gold)] sm:inline">
          — demony
        </span>

        <div className="ml-auto flex items-center gap-2">
          <div className="relative">
            <input
              ref={searchRef}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Szukaj: imię, twórca, klasa…"
              className="font-body w-48 border border-[var(--border)] bg-[var(--shell)] px-3 py-1.5 pr-8 text-sm text-[#e6d9bd] placeholder:text-[#6f6350] focus:border-[var(--gold)] focus:outline-none sm:w-64"
            />
            <kbd className="font-fell pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 border border-[var(--border)] px-1.5 text-[11px] text-[#8d7f66]">
              /
            </kbd>
          </div>
        </div>
      </header>

      <div className="flex min-h-0 flex-1">
        {/* Desktop sidebar */}
        <aside className="hidden w-[300px] shrink-0 border-r border-[var(--border)] bg-[var(--shell-2)] lg:block">
          {sidebar}
        </aside>

        {/* Mobile drawer */}
        <div
          className={cn(
            'fixed inset-0 z-40 lg:hidden',
            drawerOpen ? 'pointer-events-auto' : 'pointer-events-none'
          )}
        >
          <div
            className={cn(
              'absolute inset-0 bg-black/70 transition-opacity duration-300',
              drawerOpen ? 'opacity-100' : 'opacity-0'
            )}
            onClick={() => setDrawerOpen(false)}
          />
          <aside
            className={cn(
              'absolute left-0 top-0 h-full w-[300px] max-w-[85vw] border-r border-[var(--border)] bg-[var(--shell-2)] shadow-2xl transition-transform duration-300',
              drawerOpen ? 'translate-x-0' : '-translate-x-full'
            )}
          >
            <div className="flex h-12 items-center justify-between border-b border-[var(--border)] px-4">
              <span className="font-display text-xs uppercase tracking-[0.2em] text-[var(--gold-2)]">
                Spis wpisów
              </span>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                className="flex h-8 w-8 items-center justify-center border border-[var(--border)] text-[var(--gold-2)] hover:border-[var(--gold)]"
                aria-label="Zamknij spis"
              >
                ✕
              </button>
            </div>
            <div className="h-[calc(100%-3rem)]">{sidebar}</div>
          </aside>
        </div>

        {/* Entry pane */}
        <main ref={mainRef} className="scroll-slim min-w-0 flex-1 overflow-y-auto">
          {selected ? (
            <div className="px-4 pb-16 sm:px-8">
              <Entry key={selected.id} creature={selected} onNavigate={handleSelect} />
              <p className="font-fell mt-2 text-center text-sm italic text-[#8d7f66]">
                — spisano na marginesie ostatniej edycji
              </p>
            </div>
          ) : (
            <div className="flex min-h-full flex-col">
              <div className="flex-1">
                <Hero onBrowse={handleBrowse} />
              </div>
              <p className="font-fell bg-[var(--shell)] py-4 text-center text-sm italic text-[#8d7f66]">
                — spisano na marginesie ostatniej edycji
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
