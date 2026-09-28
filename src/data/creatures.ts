export type Origin = 'demon' | 'aniol'

export interface DemonSections {
  wyglad: string
  zachowanie: string
  zdolnosc: string
  slabosc: string
  historia: string
}

export interface Creature {
  id: string
  numeral: string
  name: string
  player: string | null
  klass: string
  power: number
  powerNote: string | null
  conscious: boolean
  origin: Origin
  image: string
  lead?: string
  sections?: DemonSections
  description?: string
}

// Teksty v4 — hybryda: kronikarska powaga i puenty oryginalnego bestiariusza
// + suchy, konkretny rytm zdania w duchu Sapkowskiego (bez gagów co akapit).
// Fakty zgodne ze źródłem. **pogrubienie** = mechanizm / warunek / ograniczenie.
export const creatures: Creature[] = [
  {
    id: 'magsen',
    numeral: 'I',
    name: 'Magsen',
    player: 'Vector',
    klass: 'Klasa Dusz i Amunicji',
    power: 800,
    powerNote: null,
    conscious: false,
    origin: 'demon',
    image: 'magsen.webp',
    lead: 'Poluje na dusze magów. Reszty nie zauważa.',
    sections: {
      wyglad:
        'Piętnastometrowy robal z metalicznego obsydianu, wijący się jak wąż. Zamiast głowy ma stożek tysiąca luf skierowanych do przodu — najdłuższa w środku, im dalej od osi, tym krótsze. Po bokach dwie małe, czarne kwadratowe latarnie, które nie świecą, tylko **prześwietlają duszę**.',
      zachowanie:
        'Żywi się wyłącznie **duszami magów**. Mugol może przejść mu pod nosem, nawet nie drgnie. Śpi dekadami w legowiskach na Adamanteus; budzi go dopiero obecność potężnego czarodzieja. Wtedy rusza i nie zatrzymuje się, dopóki go nie pożre. Młode wymagają żywych dusz magów, więc gatunek sam sobie utrudnił przetrwanie.',
      zdolnosc:
        'Na środku stożka luf siedzi harpun — nie fizyczny, **duchowy**. Wyrywa duszę z ciała na odległość, bez walki. Ciało pada puste.',
      slabosc:
        'Dusza bez magii jest dla niego **prawie niewidzialna**, dlatego najlepiej radzili sobie z nim mugole. Legowiska odgradzano na dekady, żeby zdechł z głodu.',
      historia:
        'Prawie wybity po wielkiej wojnie z czarodziejami. Prawie. Kogo raz zobaczył, tego czuje na zawsze — dlatego nikt, kto przeżył spotkanie z Magsenem, nie przeżył go naprawdę.',
    },
  },
  {
    id: 'sanguiseges',
    numeral: 'II',
    name: 'Sanguiseges',
    player: 'Drago',
    klass: 'Klasa Dusz i Krwi',
    power: 200,
    powerNote: null,
    conscious: false,
    origin: 'demon',
    image: 'sanguiseges.webp',
    lead: 'Nie goni. Przychodzi po zapachu krwi.',
    sections: {
      wyglad:
        'Pijawka wielkości wilka na sześciu odnóżach z zakrzepłej krwi. Ciało bez oczu, śliskie, ciemnoczerwone; odnóża twarde jak kość, zakończone hakami. Nie musi widzieć. Czuje krew.',
      zachowanie:
        'Skacze wysoko i daleko, przemieszcza się szybciej niż koń. Nie ściga ofiar — czeka, aż ktoś **zacznie krwawić**, i przychodzi **po zapach**.',
      zdolnosc:
        'Kontroluje krew na bliski dystans: wyciąga ją z ran, zatrzymuje w żyłach, formuje w ostrza i nowe odnóża. Kto walczy z nim ranny, walczy własną krwią przeciw sobie. A krew jest nielojalna.',
      slabosc:
        'Zasięg. Poza kilkoma metrami to tylko duża pijawka — artyleria i **ogień z dystansu** załatwiają sprawę, jeśli nikt nie krwawi w pobliżu.',
      historia: 'Stworzony przez Drago, maga krwi.',
    },
  },
  {
    id: 'chaoter',
    numeral: 'III',
    name: 'Chaoter',
    player: null,
    klass: 'Klasa Chaosu',
    power: 500,
    powerNote: null,
    conscious: false,
    origin: 'demon',
    image: 'chaoter.webp',
    lead: 'Jedyny demon, którego nie przewidzi nawet Soflair.',
    sections: {
      wyglad:
        'Karaluch wielkości Mercedesa klasy G, nieustannie zmieniający kolor. Nie ma dwóch świadków, którzy opisaliby go tak samo. I obaj mają rację.',
      zachowanie:
        'Porusza się w sposób **całkowicie nieprzewidywalny** — dla ludzi, zwierząt, maszyn i innych demonów. Nie da się go prowadzić, wyprzedzić ani ostrzelać z wyprzedzeniem.',
      zdolnosc:
        'Samo spojrzenie na Chaotera rzuca na duszę **klątwę**: od tej chwili ofiara nigdy nie kontroluje w pełni własnych ruchów. Klątwa nie mija. Każdy, kto ją nosił, ostatecznie odebrał sobie życie — a samobójstwo z klątwą oznacza, że demon wysysa duszę. Tak kontruje Soflaira: **nie da się przewidzieć chaosu**.',
      slabosc:
        'Sam jest równie nieprzewidywalny dla siebie. Demony Chaosu wyginęły, wchodząc losowo w cudze eksplozje.',
      historia:
        'Popularne w czasach wielkiej wojny z Anima Vorax. Zanotowane w niewielu księgach, bo nikt, kto go zobaczył, nie dożył spisania relacji. Jego pancerz, jeśli ktoś go zdobędzie, zachowuje właściwość nieprzewidywalności — **nikt nie widzi tego, co nim okryte**.',
    },
  },
  {
    id: 'tempestus',
    numeral: 'IV',
    name: 'Tempestus',
    player: 'Drago',
    klass: 'Klasa Burzy',
    power: 2000,
    powerNote: null,
    conscious: false,
    origin: 'demon',
    image: 'tempestus.webp',
    lead: 'Nie wywołuje burzy. Jest burzą.',
    sections: {
      wyglad:
        'Latający węgorz elektryczny długości pociągu. Ciało z nieustannie wyładowującej się plazmy, otoczone własną chmurą burzową; tam, gdzie leci, **dzień zamienia się w noc**.',
      zachowanie:
        'Nie ma legowiska ani terytorium — jest pogodą. Krąży nad kontynentami, przyciągany przez skupiska metalu i ludzi.',
      zdolnosc:
        'Lata i strzela piorunami: **pojedynczymi w cele, seriami w miasta**, a gdy zawiśnie nad polem bitwy, burza nie ustaje, dopóki on nie odleci.',
      slabosc: 'Nieznana. Nikt jeszcze nie znalazł sposobu, żeby zabić burzę.',
      historia:
        'Stworzony przez Drago, gdy użył nieskończonego czaru burzy i skazał cały świat na zagładę. Tempestus jest tym czarem, który **dostał ciało**.',
    },
  },
  {
    id: 'selebrau',
    numeral: 'V',
    name: 'Selebrau',
    player: 'Ojmar',
    klass: 'Klasa Dusz i Światła Piekieł',
    power: 200,
    powerNote: null,
    conscious: false,
    origin: 'demon',
    image: 'selebrau.webp',
    lead: 'Nie gryzie. Oświetla.',
    sections: {
      wyglad:
        'Wielka latająca skolopendra; w miejscu żuchwy niesie **latarnię piekieł** — czarną, kanciastą, świecącą światłem, które nie rzuca cieni.',
      zachowanie: 'Poluje nocą, z powietrza. Nie gryzie — oświetla.',
      zdolnosc:
        'Światło latarni **pali duszę**, osłabiając ją z każdą chwilą, aż w końcu pochłania jej szczątki. Potrafi rzucić czar rozświetlający rzecz światłem piekieł na wieczność — odwrócenie się od tego światła oznacza **natychmiastową śmierć**.',
      slabosc:
        'Sama latarnia jest mała i krucha; zbita — Selebrau ślepnie i ginie z głodu. Kto ją zdobędzie w całości, ma w ręku **broń, która zabija spojrzeniem**.',
      historia: 'Stworzony przez Ojmara.',
    },
  },
  {
    id: 'obscuriter',
    numeral: 'VI',
    name: 'Obscuriter',
    player: 'Majkarto',
    klass: 'Klasa Dusz, Ciemności i Obrony',
    power: 100,
    powerNote: 'bez górnej granicy',
    conscious: false,
    origin: 'demon',
    image: 'obscuriter.webp',
    lead: 'Im więcej magów pożre, tym większy. Górnej granicy nie ma.',
    sections: {
      wyglad:
        'Kleszcz, na początku wielkości psa. Stale niewidzialny — zarówno w ciemności, jak i w świetle piekieł. Nienakarmiony pozostaje mały; nakarmiony rośnie i **nie przestaje**.',
      zachowanie:
        'Podkrada się. Wbija się w ofiarę i **wyłącza jej całą magię oraz wzrok**, po czym porywa ciało do najciemniejszego miejsca w okolicy.',
      zdolnosc:
        'Żerowanie: wysysa całą magię ofiary, rosnąc i zyskując siłę. Moc zaczyna się od 100 i rośnie z każdą pożartą duszą maga **bez żadnego limitu**. Niepowstrzymany osiąga wysokość kilku metrów i moc, której nikt nie zmierzył.',
      slabosc:
        'Trzeba go zabić, **zanim urośnie**. Widać go tylko w zwykłym świetle dziennym, nigdy w mroku ani w blasku piekieł.',
      historia: 'Stworzony przez Majkarto.',
    },
  },
  {
    id: 'magnar',
    numeral: 'VII',
    name: 'Magnar',
    player: 'Ziemniak',
    klass: 'Klasa Dusz i Komunikacji',
    power: 100,
    powerNote: null,
    conscious: false,
    origin: 'demon',
    image: 'magnar.webp',
    lead: 'Nie atakuje. Wystarczy, że jest.',
    sections: {
      wyglad:
        'Chodzący jeż wielkości samochodu. Kolce wibrują nieustannie, wydając dźwięk na granicy słyszalności.',
      zachowanie: 'Wchodzi do miast i sztabów. Nie atakuje — wystarczy, że jest.',
      zdolnosc:
        'Generuje zakłócenia, które uniemożliwiają **jakąkolwiek komunikację** w zasięgu: mowę, radio, telegraf, rozkazy, sygnały. Im dłużej ktoś w nim przebywa, tym silniejszy ból głowy, aż do śmierci.',
      slabosc:
        'Sam nie ma nic poza zakłóceniami — pluton, który ustali wcześniej **sygnały ręczne**, może go dobić bez słowa.',
      historia: 'Stworzony przez Ziemniaka.',
    },
  },
  {
    id: 'excrilio',
    numeral: 'VIII',
    name: 'Excrilio',
    player: 'Warteks',
    klass: 'Klasa Dusz i Tortur',
    power: 1000,
    powerNote: null,
    conscious: false,
    origin: 'demon',
    image: 'excrilio.webp',
    lead: 'Jego gaz nie zabija. To jest najgorsze.',
    sections: {
      wyglad:
        'Motyl o rozpiętości B-29, ze złoto-czarnymi skrzydłami. Piękny z daleka; z bliska nikt go nie oglądał dwa razy.',
      zachowanie: 'Lata nad polami bitew i miastami. Nie ląduje. Po co.',
      zdolnosc:
        'Zrzuca z nieba gaz, po którym ofiara **cierpi do końca życia** — nie umiera, cierpi. Gazu nie zatrzymuje nic: ani maska, ani ściany, ani schron.',
      slabosc:
        'Nie ma obrony przed gazem, jest tylko obrona **przed motylem**: to lotnictwo i artyleria przeciwlotnicza, dopóki jeszcze leci nad wrogiem, a nie nad tobą.',
      historia: 'Stworzony przez Warteksa.',
    },
  },
  {
    id: 'nigrua',
    numeral: 'IX',
    name: 'Nigrua',
    player: 'Rabbs',
    klass: 'Klasa Dusz i Księgi Magii',
    power: 400,
    powerNote: null,
    conscious: false,
    origin: 'demon',
    image: 'nigrua.webp',
    lead: 'Dopóki ona żyje, żaden demon nie jest martwy na pewno.',
    sections: {
      wyglad:
        'Czarna wdowa wielkości domu; na odwłoku wypisane demoniczne zaklęcie, które porusza się, gdy ona oddycha.',
      zachowanie: 'Buduje ogromne systemy sieci między miastami i portalami. Nie poluje — **zbiera**.',
      zdolnosc:
        '**Wskrzesza demony**. Wystarczy jakakolwiek cząstka zabitego demona — łuska, kropla, pył — a Nigrua odtwarza go w sieci w całości.',
      slabosc:
        'Sieć. Zniszczenie sieci wraz z wplecionymi w nią cząstkami odbiera jej materiał; **bez cząstki nie wskrzesi nikogo**.',
      historia: 'Stworzona przez Rabbsa.',
    },
  },
  {
    id: 'tortal',
    numeral: 'X',
    name: 'Tortal',
    player: 'Maks Spider',
    klass: 'Klasa Dusz i Czasu',
    power: 2000,
    powerNote: null,
    conscious: false,
    origin: 'demon',
    image: 'tortal.webp',
    lead: 'Strażnik, który cofa świat, byle brama piekieł została otwarta.',
    sections: {
      wyglad:
        'Wielki demoniczny żółw. Skorupa pokryta rytami, które są zegarami — każdy pokazuje inny rok.',
      zachowanie: 'Stoi obok bramy piekieł i nie odchodzi. Strzeże.',
      zdolnosc:
        'Włada czasem. Gdy tylko brama piekieł zostanie zamknięta, Tortal **cofa cały wszechświat do początku roku** — brama znowu stoi otwarta, a wszyscy, którzy ją zamykali, muszą zrobić to od nowa, jeśli w ogóle pamiętają.',
      slabosc:
        'Trzeba go zabić **w tym samym roku**, w którym zamyka się bramę — inaczej rok nie istnieje.',
      historia: 'Stworzony przez Maksa Spidera, maga czasu. Strażnik wrót.',
    },
  },
  {
    id: 'soflair',
    numeral: 'XI',
    name: 'Soflair',
    player: null,
    klass: 'Klasa Dźwięku, Analizy i Iluzji',
    power: 3000,
    powerNote: null,
    conscious: false,
    origin: 'demon',
    image: 'soflair.webp',
    lead: 'Najsilniejszy demon w zapisach. Uderza raz.',
    sections: {
      wyglad: 'Krewetka pistoletowa wielkości okrętu. Widziana rzadko, bo zwykle jest niewidzialna.',
      zachowanie: 'Nie atakuje pierwszy — najpierw analizuje. Potem uderza raz.',
      zdolnosc:
        'Uderzenie z prędkością **10 % prędkości światła**, z falą uderzeniową na kilka kilometrów. Analiza pozwala mu w zasadzie przewidywać przyszłość — zna twój ruch, zanim go wykonasz. Iluzja czyni go niewidzialnym i pozwala zmieniać wygląd całych pól bitew: armia idzie na wroga i wchodzi w morze.',
      slabosc:
        'Chaos. Jedyne, czego nie da się przeanalizować, to **Chaoter** — i wszystko, co z niego pochodzi.',
      historia: 'Najsilniejszy demon, jaki kiedykolwiek zapisano.',
    },
  },
  {
    id: 'kajzer',
    numeral: 'XII',
    name: 'Kajzer',
    player: null,
    klass: 'Klasa Strachu',
    power: 300,
    powerNote: null,
    conscious: true,
    origin: 'demon',
    image: 'kajzer.webp',
    lead: 'Nie musi cię dotknąć. Wystarczy, że krzyczy.',
    sections: {
      wyglad: 'Stonoga na pajęczych nogach, długa jak ulica. Paszcza otwiera się szerzej niż ciało.',
      zachowanie: 'Nie musi dotknąć ofiary. Podchodzi i drze mordę.',
      zdolnosc:
        'Krzyk Kajzera to **magia strachu w czystej postaci**: im bliżej, tym szybciej siada psychika. Z daleka drżenie rąk, bliżej panika, przy samym pysku — obłęd i ucieczka na oślep, prosto w nogi.',
      slabosc:
        'Odległość i hałas. Artyleria, która go **zagłuszy**, i dystans, którego nie zdąży pokonać.',
      historia: 'Gracz, który sam stał się demonem.',
    },
  },
  {
    id: 'biedronka',
    numeral: 'XIII',
    name: 'Biedronka',
    player: 'Architecta',
    klass: 'Klasa Miłości',
    power: 1000,
    powerNote: null,
    conscious: false,
    origin: 'demon',
    image: 'biedronka.webp',
    lead: 'Najpiękniejsza rzecz, jaką zobaczysz w życiu. I ostatnia.',
    sections: {
      wyglad:
        'Biedronka wielkości domu. Najpiękniejsza rzecz, jaką ofiara zobaczy w życiu — i ostatnia.',
      zachowanie: 'Pojawia się w miastach, na placach, wśród tłumu. Nie ucieka i nie goni. Nie musi.',
      zdolnosc:
        'Kto ją zobaczy, a ma **słabą psychikę**, zakochuje się natychmiast i odbiera sobie życie, żeby być z nią. Miasto po jej przejściu jest ciche.',
      slabosc:
        'Silna psychika — weterani, fanatycy, zakonnicy nie widzą w niej nic poza owadem. Wystarczy **nie patrzeć**.',
      historia: 'Stworzona przez Architectę.',
    },
  },
  {
    id: 'fabrica',
    numeral: 'XIV',
    name: 'Fabrica',
    player: null,
    klass: 'Klasa Produkcji',
    power: 2000,
    powerNote: null,
    conscious: false,
    origin: 'demon',
    image: 'fabrica.webp',
    lead: 'Nie walczy. Produkuje piekło.',
    sections: {
      wyglad:
        'Rak wielkości wielkiej fabryki — pancerz z żeliwa i sadzy, kominy zamiast czułków. Wszystko, na czym siedzi, czernieje.',
      zachowanie: 'Nie walczy. Siedzi w miejscu i produkuje.',
      zdolnosc:
        'Przyspiesza wytwarzanie **mgły piekieł** i liczbę demonów w każdej edycji, w której się pojawi. Nie bierze materiału znikąd — jego energia to czyste zło i zanieczyszczenie świata; **im brudniejszy świat, tym szybciej pracuje**.',
      slabosc: 'Czystość. Świat, który nie truje sam siebie, głodzi Fabricę.',
      historia:
        'Fabryka demonów; pojawia się w każdej edycji, w której świat jest dość brudny, by ją nakarmić.',
    },
  },
  {
    id: 'explodar',
    numeral: 'XV',
    name: 'Explodar',
    player: null,
    klass: 'Klasa Wybuchów',
    power: 2000,
    powerNote: null,
    conscious: false,
    origin: 'demon',
    image: 'explodar.webp',
    lead: 'Eksplozja to jego oddech.',
    sections: {
      wyglad: 'Świetlik wielkości krowy; brzuch świeci na pomarańczowo, coraz jaśniej, aż do wybuchu.',
      zachowanie: 'Leci nad celem i wybucha. Potem leci dalej.',
      zdolnosc:
        'Wybucha i **nie umiera** — eksplozja jest jego oddechem. Mały jak jest, każdy wybuch niesie siłę bomby atomowej, z której powstał.',
      slabosc:
        'Między wybuchami przez chwilę jest **tylko owadem**. Kto trafi w ciemność, trafia w niego.',
      historia:
        'Stworzony przez FreeTree, gdy ten swoją magią zaczął wysadzać bomby atomowe — Explodar jest tym, co zostało z pierwszej z nich.',
    },
  },
  {
    id: 'freetree',
    numeral: 'XVI',
    name: 'FreeTree',
    player: null,
    klass: 'Klasa Teleportacji',
    power: 1000,
    powerNote: null,
    conscious: true,
    origin: 'demon',
    image: 'freetree.webp',
    lead: 'Jego sylwetka nigdy nie jest cała. Jego strzał nie rani, tylko wysyła do piekła.',
    sections: {
      wyglad:
        'Zamiast oczu ma dwa teleporty. Komórki jego ciała teleportują się bez przerwy, więc **sylwetka nigdy nie jest cała** — kończyny znikają i wracają w innym miejscu, twarz przesuwa się po czaszce. Wygląda jak człowiek zdeformowany przez to, że nie potrafi stać w jednym miejscu nawet na poziomie ciała. Nosi karabin.',
      zachowanie:
        'Pojawia się tam, gdzie chce, i znika, zanim ktoś odpowie ogniem. Nie ma frontu, na którym by go nie było.',
      zdolnosc:
        'Karabin, którego strzał nie rani — **teleportuje trafionego prosto do środka piekła**. Bez rzutu, bez pancerza, bez powrotu. Z tego samego rdzenia piekło buduje swoje portalowe bronie.',
      slabosc: 'Nieznana.',
      historia:
        'Dawny władca Portarum, mag wybuchów, który sam stał się demonem; jego dawna postać umarła w chwili przemiany. Wcześniejszy FreeTree — demon wybuchów o mocy 350 — został zastąpiony tym.',
    },
  },
  {
    id: 'karinex',
    numeral: 'XVII',
    name: 'Karinex',
    player: 'PAT',
    klass: 'Klasa Biologii',
    power: 400,
    powerNote: null,
    conscious: false,
    origin: 'demon',
    image: 'karinex.webp',
    lead: 'Płynie pod twoim okrętem. Port, w którym wysiądzie jego pasażer, otworzy się na piekło.',
    sections: {
      wyglad:
        'Remora wielkości łodzi, blada, prawie przezroczysta. Grzbiet to żywa przyssawka zrastająca się z kadłubem jak blizna; w brzuchu komora z błony **na jednego pasażera**.',
      zachowanie:
        'Przyczepia się pod okręt i płynie z nim do jego portu. Kadłub gnije od spodu bez widocznej przyczyny; kto z załogi wpadnie do wody, nie wypływa — Karinex wysysa duszę, zanim zdąży zawołać.',
      zdolnosc: 'Przewozi maga w komorze. Port, w którym pasażer wysiada, **otwiera się na piekło**.',
      slabosc:
        'Jedyna metoda: **sprawdzić spód kadłuba** — nurek, suchy dok, przechylenie na plaży. Odczepiony i wyciągnięty na brzeg zdycha w dobę; bez nosiciela to tylko ryba.',
      historia:
        'Stworzony przez PAT, maga biologii, jako wierzchowiec do podróży wodą. Potrafi przewieźć przez morze demona, który sam wody nie przekroczy.',
    },
  },
  {
    id: 'maks_spider',
    numeral: 'XVIII',
    name: 'Maks Spider',
    player: null,
    klass: 'Klasa Dusz i Czasu',
    power: 2000,
    powerNote: null,
    conscious: true,
    origin: 'demon',
    image: 'maks_spider.webp',
    lead: 'Nie negocjuje. Zna wynik rozmowy.',
    sections: {
      wyglad:
        'Mag czasu, który stał się demonem. Nie ma jednej postaci — widać go w **kilku wiekach naraz**, nałożonych na siebie.',
      zachowanie: 'Używa czasu bezlitośnie. Nie negocjuje, bo zna wynik rozmowy.',
      zdolnosc:
        'Włada czasem tak, jak inni władają ogniem: **cofa, zatrzymuje, postarza**. W jednej z największych edycji zabił w ten sposób połowę świata.',
      slabosc: 'Nieznana.',
      historia: 'Gracz, który sam stał się demonem. Stworzył Tortala, strażnika wrót.',
    },
  },
  {
    id: 'bartosz',
    numeral: 'XIX',
    name: 'Bartosz',
    player: null,
    klass: 'Klasa Dowodzenia',
    power: 2500,
    powerNote: null,
    conscious: false,
    origin: 'demon',
    image: 'bartosz.webp',
    lead: 'Piekło pod nim przestaje być hordą. Staje się armią.',
    sections: {
      wyglad: 'Wielki dowódca Armii Piekieł. Widziany zawsze na czele, nigdy z bliska.',
      zachowanie: 'Nie walczy sam. Dowodzi.',
      zdolnosc:
        'Każdy demon w zasięgu jego rozkazu **walczy jak dwa** — piekło pod nim przestaje być hordą, a staje się armią.',
      slabosc: 'Nieznana.',
      historia: 'Demon dowodzenia z edycji Wojny Czasów; jak każdy demon — poza czasem.',
    },
  },
  {
    id: 'apricus',
    numeral: 'XX',
    name: 'Apricus',
    player: 'Traper',
    klass: 'Magia Słońca',
    power: 500,
    powerNote: null,
    conscious: false,
    origin: 'aniol',
    image: 'apricus.webp',
    lead: 'Anioł z piaskowca i słońca. Jeden z pierwszych.',
    description:
      'Feniks magii słońca, stworzony z piaskowca pustyń Solagri. Jeden z pierwszych aniołów — dzieło Trapera, maga słońca.',
  },
  {
    id: 'exarchon',
    numeral: 'XXI',
    name: 'Exarchon',
    player: 'Majkarto i Nagito',
    klass: 'Magia Słońca',
    power: 500,
    powerNote: null,
    conscious: false,
    origin: 'aniol',
    image: 'exarchon.webp',
    lead: 'Żywa twierdza z roślin Civitates.',
    description: 'Megalisk magii roślinnej, stworzony z **roślin Civitates i mięsa Zergów**.',
  },
  {
    id: 'liberta',
    numeral: 'XXII',
    name: 'Liberta',
    player: 'Jajo',
    klass: 'Anioł',
    power: 600,
    powerNote: null,
    conscious: false,
    origin: 'aniol',
    image: 'liberta.webp',
    lead: 'Nie patrzy. Nie musi.',
    description: 'Ślepa kobieta z mieczem i tarczą. **Zabójczyni Demona Eksplozji**.',
  },
  {
    id: 'aequilla',
    numeral: 'XXIII',
    name: 'Aequilla',
    player: 'Jajo',
    klass: 'Anioł',
    power: 400,
    powerNote: null,
    conscious: false,
    origin: 'aniol',
    image: 'aequilla.webp',
    lead: 'Jej strzała kończy wojny.',
    description: 'Ślepa kobieta z ogromnym anielskim łukiem. Zwyciężczyni Wojny Czasów?',
  },
]

export const INTRO_TEXT =
  'Piekło jest poza czasem: każdy demon, który kiedykolwiek powstał, istnieje we wszystkich edycjach. Moc = poziom magii × liczba klas magii. Imię po ukośniku to gracz, którego magia demona stworzyła. Demony świadome to dawni gracze, którzy sami stali się demonami — ich poprzednia postać umarła w chwili przemiany.'

export const ANGELS_NOTE =
  'Stworzone przez graczy w edycji Wojny Czasów. Nie są demonami i nie są z piekła; wpisane, bo walczyły z nim.'

export type ThreatTier = 'I' | 'II' | 'III' | 'IV' | 'V'

export function threatTier(c: Creature): ThreatTier {
  if (c.power <= 250) return 'I'
  if (c.power <= 500) return 'II'
  if (c.power <= 1000) return 'III'
  if (c.power <= 2500) return 'IV'
  return 'V'
}

export function threatLabel(c: Creature): string {
  if (c.id === 'obscuriter') return 'I → ∞'
  return threatTier(c)
}

export function tierIndex(c: Creature): number {
  return ['I', 'II', 'III', 'IV', 'V'].indexOf(threatTier(c))
}
