# Praca nad bestiariuszem z Claude — instrukcja dla Maćka

## Setup (raz)

1. Rozpakuj ZIP ze źródłem (albo `git clone` repo i przełącz się na branch `zrodlo`).
2. Zainstaluj Node.js LTS z https://nodejs.org/
3. W folderze projektu: `npm install`
4. Zainstaluj Claude Code: `npm install -g @anthropic-ai/claude-code`
   (albo pracuj w claude.ai z wgranymi plikami — ale Claude Code w terminalu jest wygodniejsze,
   bo sam edytuje pliki i uruchamia komendy)
5. W folderze projektu uruchom: `claude`

Claude przy starcie samo przeczyta **CLAUDE.md** — tam są wszystkie zasady projektu
(kanon, styl, komendy, jak dodawać demony). Nie musisz mu tego tłumaczyć za każdym razem.

## Codzienny workflow

1. `npm run dev` — strona działa lokalnie na http://localhost:3000 i sama się odświeża.
2. W drugim terminalu: `claude` — i piszesz po polsku, co chcesz zmienić.
3. Claude edytuje pliki — Ty patrzysz na efekt w przeglądarce na żywo.
4. Jak jest dobrze: `npm run deploy` — po 1–2 minutach zmiana jest na
   https://bestiariusz-nrp.github.io/

## Przykładowe prompty, które działają dobrze

- „Dodaj nowego demona: nazywa się X, klasa Y, moc Z, wygląda tak: …, zdolność: …, słabość: …, historia: …"
- „Popraw opis Kajzera — jest za suchy, daj mu więcej klimatu, ale bez nowych faktów"
- „Wygeneruj nowy obraz dla Magsena w tym samym stylu co reszta"
- „Zmień paletę strony na bardziej czerwoną"
- „Znajdź niespójności między wpisami demonów" (Claude przeczyta creatures.ts i zaraportuje)

## Zasady gry (żeby Claude nie narozrabiał)

- **Kanon jest Twój.** Claude ma nie dopisywać parametrów ani faktów, których nie podasz.
  W CLAUDE.md to jest zapisane, ale warto pilnować.
- **Najpierw obejrzyj, potem deploy.** Claude czasem zrobi coś ładnie brzmiącego, ale głupiego.
  `npm run dev` jest po to, żeby zobaczyć zmianę przed publikacją.
- **Małe zmiany > wielkie przemiany.** „Zmień jeden wpis" zawsze wyjdzie lepiej niż
  „przerób całą stronę".
- Jak Claude zepsuje build (`npm run build` rzuca błędem) — wklej mu ten błąd, sam naprawi.

## Jak cofnąć zmiany

Repo na GitHubie trzyma historię. Strona: zakładka „Commits" w repo
`bestiariusz-nrp/bestiariusz-nrp.github.io` — można wrócić do każdej wersji.
Lokalnie: trzymaj ZIP z czystą kopią jako punkt startowy.
