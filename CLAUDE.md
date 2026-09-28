# CLAUDE.md — kontekst projektu dla AI

## Co to jest

Statyczna aplikacja React 19 + TypeScript + Vite 7 + Tailwind 3.4: interaktywny
bestiariusz demonów i aniołów z gry NRP (narracyjne RPG). Publikacja:
GitHub Pages pod https://bestiariusz-nrp.github.io/ z repo
`bestiariusz-nrp/bestiariusz-nrp.github.io` (branch `main` = zbudowany `dist`).

## Komendy

- `npm install` — instalacja zależności
- `npm run dev` — podgląd lokalny (Vite, port 3000)
- `npm run build` — build produkcyjny do `dist/` (musi przejść `tsc -b`)
- `npm run deploy` — build + publikacja na GitHub Pages (wymaga uprawnień write do repo)

## Architektura

- `src/data/creatures.ts` — JEDYNE źródło treści: 23 wpisy (19 demonów, 4 anioły),
  pola: id, numeral (rzym.), name, player, klass, power, powerNote, conscious,
  origin ('demon'|'aniol'), image, lead, sections (wyglad/zachowanie/zdolnosc/slabosc/historia)
  albo description (anioły). Funkcje threatTier/threatLabel liczą tier z mocy.
- `src/components/bestiary/` — Sidebar (indeks+filtry+sort+szukajka), Entry (karta wpisu),
  Hero (strona tytułowa), Seal (pieczęć zagrożenia), Fmt (render `**pogrubień**`).
- `src/pages/Home.tsx` — układ, routing po hashu `#/wpis/<id>`, stan.
- `src/index.css` — paleta (zmienne CSS), tekstury pergaminu, fonty.
- `public/images/` — portrety 1024×1536 WebP, nazwa = `<id>.webp`.

## Zasady treści (kanon)

- Fakty pochodzą z dokumentu źródłowego autora świata — NIE wymyślaj parametrów
  (zasięgów, czasów, liczb), których nie ma w źródle.
- Styl: kronikarska powaga + suchy rytm zdania (hybryda „kronika + Sapkowski").
  Puenty sylleptyczne typu „Nie poluje — zbiera" są częścią głosu publikacji.
- `**...**` w tekstach = mechanizm / warunek / ograniczenie (max 1–3 na akapit).
- `lead` = jedno zdanie esencji wpisu, BEZ nowych faktów.
- Numeracja rzymska (numeral) jest ręczna — przy dodawaniu wpisu nadaj kolejny numer.
- Polskie znaki wszędzie. Fonty: Cinzel (nagłówki), EB Garamond (treść), IM Fell English (akcenty).

## Zasady techniczne

- Nowe obrazy: 1024×1536, zapisz jako WebP q82 do `public/images/<id>.webp`.
- Ścieżki obrazów ZAWSZE przez `${import.meta.env.BASE_URL}images/...` (nigdy `/images/...`).
- Po zmianach: `npm run build` musi przechodzić bez błędów przed deployem.
- Nie ruszaj `dist/` ręcznie — jest generowane.
