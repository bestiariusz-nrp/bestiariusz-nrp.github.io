# Bestiariusz — Demony | instrukcja dla developera

Cześć! To jest pełny kod źródłowy strony **https://bestiariusz-nrp.github.io/**.
Strona to aplikacja React + TypeScript + Vite + Tailwind CSS. Nie musisz znać Reacta,
żeby zmieniać teksty i obrazy — najważniejsze rzeczy są w dwóch miejscach.

## 1. Instalacja (jednorazowo, ~10 minut)

1. Zainstaluj **Node.js LTS** ze strony https://nodejs.org/ (wersja LTS, instalator Windows, dalej → dalej → koniec).
2. Rozpakuj ten ZIP, gdzie chcesz (np. `Dokumenty\bestiariusz`).
3. Otwórz terminal w tym folderze (w Eksploratorze: Shift + prawy przycisk myszy na folderze → „Otwórz w Terminalu").
4. Wpisz:

```
npm install
```

(pobierze biblioteki, raz, kilka minut)

## 2. Podgląd na żywo

```
npm run dev
```

Otwórz w przeglądarce adres, który się pokaże (zwykle http://localhost:3000).
Strona sama się przeładowuje po każdej zmianie w plikach — edytujesz, zapisujesz, patrzysz.
Zatrzymanie serwera: `Ctrl + C` w terminalu.

## 3. Gdzie co zmieniać

| Co chcesz zmienić | Gdzie |
|---|---|
| **Teksty demonów** (opisy, klasy, moce, leady) | `src/data/creatures.ts` |
| **Obrazy** | `public/images/` (podmień plik, zachowaj nazwę, najlepiej format `.webp`) |
| Kolory, fonty, tekstury | `src/index.css` (na górze są zmienne z paletą) |
| Tekst na stronie tytułowej | stała `INTRO_TEXT` na dole `src/data/creatures.ts` |

### Jak edytować wpis demona (przykład)

W `src/data/creatures.ts` każdy demon to blok:

```ts
{
  id: 'magsen',            // adres: #/wpis/magsen
  numeral: 'I',            // numer rzymski wpisu
  name: 'Magsen',
  player: 'Vector',        // twórca (albo null)
  klass: 'Klasa Dusz i Amunicji',
  power: 800,
  powerNote: null,         // np. 'bez górnej granicy'
  conscious: false,        // true = demon świadomy (były gracz)
  origin: 'demon',         // 'demon' albo 'aniol'
  image: 'magsen.webp',
  lead: 'Poluje na dusze magów. Reszty nie zauważa.',
  sections: {
    wyglad: '...',
    zachowanie: '...',
    zdolnosc: '...',
    slabosc: '...',
    historia: '...',
  },
},
```

W tekstach możesz używać `**pogrubienia**` — wyrenderuje się jako wyróżnienie mechaniki.
Nowy demon? Skopiuj blok, zmień dane, dodaj obraz do `public/images/`. Numeracja rzymska jest ręczna.

## 4. Publikacja zmian na stronie

Wymaga dostępu do repozytorium na GitHubie (zaproszenie przyjmij na swoim koncie GitHub).

```
npm run deploy
```

To zbuduje stronę i wyśle ją na https://bestiariusz-nrp.github.io/ (zmiana widoczna po 1–2 minutach).
Przy pierwszym użyciu przeglądarka poprosi o zalogowanie się na Twoje konto GitHub.

## 5. Jak coś zepsujesz

Spokojnie — na GitHubie jest historia wszystkich wersji. Najgorsze, co możesz zrobić,
to zepsuć swoją lokalną kopię; wtedy pobierz ZIP jeszcze raz albo sklonuj repo od nowa:

```
git clone https://github.com/bestiariusz-nrp/bestiariusz-nrp.github.io.git
```

(uwaga: repo na GitHubie trzyma zbudowaną wersję strony; kod źródłowy masz w tym ZIPie)

Powodzenia! 🎲
