# Party Sziget - Ajándéküzlet Weboldal

Modern, reszponzív weboldal a Party Sziget ajándéküzlet számára Szeghalomban.

## 🎯 Funkciók

- **Reszponzív dizájn**: Mobil és asztali eszközökön tökéletesen működik
- **SEO optimalizált**: Keresőbarát meta tag-ek és strukturált adatok
- **Gyors betöltés**: Optimalizált CSS és JavaScript
- **Akadálymentes**: ARIA attribútumok és billentyűzet navigáció
- **Modern UI**: Tailwind CSS alapú, szép animációkkal

## 📁 Projekt Struktúra

```
Party_sziget/
├── index.html              # Főoldal
├── assets/
│   ├── css/
│   │   ├── tailwind.css    # Tailwind CSS (buildelt)
│   │   └── styles.css      # Egyedi stílusok
│   ├── js/
│   │   └── main.js         # JavaScript funkcionalitás
│   └── images/             # Képek (üres, placeholder)
├── robots.txt              # Keresőrobotok számára
├── sitemap.xml             # Oldaltérkép
├── .htaccess               # Szerver beállítások
├── package.json            # NPM konfiguráció
└── README.md               # Ez a fájl
```

## 🚀 Telepítés és Futtatás

### Előfeltételek
- Node.js (v14 vagy újabb)
- npm

### Telepítés
```bash
# Függőségek telepítése
npm install

# Tailwind CSS build (fejlesztéshez)
npm run watch

# Tailwind CSS build (production)
npm run build
```

### Futtatás
Egyszerűen nyisd meg az `index.html` fájlt egy böngészőben, vagy használj egy helyi szervert:

```bash
# Python szerver (ha telepítve van)
python -m http.server 8000

# Node.js szerver (ha telepítve van)
npx serve .
```

## 🎨 Technológiai Stack

- **HTML5**: Szemantikus markup
- **CSS3**: Tailwind CSS + egyedi stílusok
- **JavaScript**: Vanilla JS, moduláris struktúra
- **Icons**: Lucide Icons
- **Fonts**: Rendszer fontok (Comic Sans MS, stb.)

## 📱 Reszponzív Töréspontok

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 SEO Optimalizálás

- Meta tag-ek és Open Graph
- Canonical URL-ek
- Strukturált adatok (Schema.org)
- Robots.txt és sitemap.xml
- Gyors betöltési idők
- Akadálymentes dizájn

## 🎯 Teljesítmény

- **CSS**: Minifikált Tailwind CSS
- **JavaScript**: Optimalizált, moduláris kód
- **Képek**: Lazy loading
- **Fontok**: Rendszer fontok, nincs külső függőség

## 📞 Kapcsolat

**Party Sziget**  
📍 5520 Szeghalom, Tildy Z. 25.  
📞 +36 30 123 4567  
📧 info@partysziget.hu

## 📄 Licenc

MIT License - szabadon felhasználható és módosítható.

---

**Fejlesztve ❤️-vel a Party Sziget számára**
