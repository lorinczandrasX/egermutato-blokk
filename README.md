# Görgetés Animáció Blokk

Egy egyszerű, de nagyszerű Gutenberg blokk, ami egy animált, lefelé görgetésre ösztönző egeret ad az oldaladhoz, számos testreszabási lehetőséggel. Ez a projekt egyben egy teljes értékű példa a modern, build folyamatra épülő WordPress blokkfejlesztésre.

---

## Főbb Jellemzők

* SVG-alapú, CSS-sel animált egér ikon, ami finoman jelzi a görgetés lehetőségét.
* Valós idejű előnézet a Gutenberg szerkesztőben (WYSIWYG).
* Beépített színválasztó az ikon színének testreszabásához.
* Igazítási lehetőségek (balra, középre, jobbra).
* Okos Elhalványulás: Az ikon automatikusan és finoman elhalványul, amint a felhasználó elkezd lefelé görgetni az oldalon.
* Biztonságos és Modern: A legújabb fejlesztési gyakorlatokat követi, védelmet nyújtva a gyakori sebezhetőségek (XSS, CSRF) ellen.

---

## Követelmények

* **WordPress:** 6.0 vagy újabb
* **PHP:** 7.4 vagy újabb
* **Node.js és npm** (kizárólag a fejlesztéshez)

---

## Telepítés

### 1. Standard telepítés (ZIP fájlból)

1.  Töltsd le a legfrissebb `gorges-animacio-blokk.zip` fájlt a repository "Releases" oldaláról.
2.  A WordPress vezérlőpultodon navigálj a **Bővítmények > Új hozzáadása** menüponthoz.
3.  Kattints a **Bővítmény feltöltése** gombra.
4.  Válaszd ki a letöltött `.zip` fájlt, telepítsd, majd aktiváld a bővítményt.

### 2. Fejlesztői telepítés (Forráskódból)

1.  Klónozd a repository-t a WordPress weboldalad `wp-content/plugins` mappájába:
    ```bash
    git clone [https://github.com/a-te-felhasznaloneved/gorges-animacio-blokk.git](https://github.com/a-te-felhasznaloneved/gorges-animacio-blokk.git)
    ```
2.  Navigálj a klónozott könyvtárba:
    ```bash
    cd gorges-animacio-blokk
    ```
3.  Telepítsd a fejlesztői függőségeket:
    ```bash
    npm install
    ```
4.  Fordítsd le a forrásfájlokat a `build` mappába:
    ```bash
    npm run build
    ```
5.  A WordPress vezérlőpultján, a **Bővítmények** menüpont alatt aktiváld a plugint.

---

## Használat

1.  Navigálj egy bejegyzés vagy oldal szerkesztőfelületére.
2.  Kattints a `+` ikonra új blokk hozzáadásához.
3.  Keresd meg a **"Görgetés Animáció (Egér)"** nevű blokkot, és illeszd be az oldaladra.

---

## Testreszabás

A blokk beállításait a szerkesztőfelületen érheted el:

* **Szín:** A blokk kijelölése után a jobb oldali sáv **Blokk** fülén található a színválasztó paletta.
* **Igazítás:** Az igazítást (balra, középre, jobbra) a blokk felett megjelenő eszköztáron állíthatod be.

---

## Fejlesztés

A projekt forráskódja a `src` mappában található. A fejlesztés során az `npm start` parancsot használd, amely figyeli a fájlok változását és automatikusan újrafordítja őket mentéskor.

---

## Licenc

Ez a bővítmény a GPL-2.0-or-later licenc alatt érhető el.
