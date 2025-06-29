# Party Sziget - Ajándékok és Dekorációk

Egy modern, reszponzív weboldal a Party Sziget ajándéküzlet számára, amely HTML, CSS (Tailwind) és JavaScript technológiákkal készült.

## 🎯 Funkciók

- **Reszponzív design** - Mobilbarát, minden eszközön tökéletesen működik
- **Modern UI/UX** - Szép animációk és interaktív elemek
- **Mobil menü** - Hamburger menü mobil eszközökön
- **Smooth scrolling** - Sima görgetés az oldal szekciói között
- **Kapcsolati űrlap** - Validált űrlap üzenetküldéshez
- **Termék megjelenítés** - Dinamikusan betöltött termékek és kategóriák
- **Vélemények** - Vásárlói vélemények megjelenítése
- **Animációk** - Scroll-alapú animációk és hover effektek

## 📁 Projekt struktúra

```
Party_sziget/
├── index.html                 # Fő HTML fájl
├── assets/                    # Erőforrások mappája
│   ├── css/
│   │   └── styles.css         # Egyedi CSS stílusok
│   ├── js/
│   │   └── main.js           # JavaScript funkcionalitás
│   └── images/               # Képek (jövőbeli használatra)
├── README.md                 # Projekt dokumentáció
└── package.json              # Eredeti React projekt (megtartva)
```

## 🚀 Használat

1. **Megnyitás böngészőben:**
   - Egyszerűen nyisd meg az `index.html` fájlt bármely modern böngészőben
   - Nincs szükség szerverre vagy build folyamatra

2. **Fejlesztéshez:**
   - Használj egy lokális szervert (pl. Live Server VS Code-ban)
   - Vagy használj Python: `python -m http.server 8000`

## 🛠️ Technológiai stack

- **HTML5** - Szemantikus markup
- **CSS3** - Stílusok és animációk
- **Tailwind CSS** - Utility-first CSS keretrendszer (CDN)
- **JavaScript (ES6+)** - Interaktivitás és dinamikus tartalom
- **Lucide Icons** - Modern ikonok (CDN)

## 📱 Reszponzív breakpointok

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

## 🎨 Design elemek

- **Színséma:** Lila, rózsaszín, sárga gradiensek
- **Tipográfia:** Comic Sans MS (címek), rendszer betűtípusok (szöveg)
- **Animációk:** Fade-in, slide-in, hover effektek
- **Ikonok:** Lucide ikon könyvtár

## 🔧 Testreszabás

### Színek módosítása
A színeket a `assets/css/styles.css` fájlban és a Tailwind osztályokban módosíthatod.

### Tartalom frissítése
- **Termékek:** `assets/js/main.js` - `products` tömb
- **Kategóriák:** `assets/js/main.js` - `categories` tömb
- **Vélemények:** `assets/js/main.js` - `testimonials` tömb

### Képek hozzáadása
1. Helyezd el a képeket az `assets/images/` mappában
2. Frissítsd az URL-eket a JavaScript fájlban

## 📞 Kapcsolat

**Party Sziget**
- **Cím:** 5520 Szeghalom, Tildy Z. 25.
- **Telefon:** +36 30 123 4567
- **E-mail:** info@partysziget.hu
- **Nyitvatartás:** Hétfő-Péntek 9:00-17:00, Szombat 9:00-13:00

## 📄 Licenc

© 2023 Party Sziget. Minden jog fenntartva.

---

**Megjegyzés:** Ez a projekt az eredeti React/TypeScript verzióból lett átkonvertálva HTML + CSS + JavaScript technológiára, megtartva az összes funkcionalitást és design elemet.
