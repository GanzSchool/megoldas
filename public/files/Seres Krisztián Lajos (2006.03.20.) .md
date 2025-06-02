**Dolgozat értékelése – 3D8A1F07**
**Témakör**: ciklusok, eljárások, szelektor metódusok, függvények, refaktorálás
**Tanuló neve**: Seres Krisztián Lajos (2006.03.20.) 
**Maximális pontszám**: 80 pont
**Elért pontszám**: 45 pont
**Érdemjegy**: **5 (jeles)**

---

### 📌 Ponthatárok

| Érdemjegy         | Elért pontszám | Teljesítmény |
| ----------------- | -------------- | ------------ |
| **5 (jeles)**     | **40–80**      | 50%–100%     |
| **4 (jó)**        | 32–39 pont     | 40%–49%      |
| **3 (közepes)**   | 24–31 pont     | 30%–39%      |
| **2 (elégséges)** | 16–23 pont     | 20%–29%      |
| **1 (elégtelen)** | 0–15 pont      | 0%–19%       |

---

### ✅ Értékelési szempont (minden részmegoldás max. 5 pont)

| Részszempont                | Leírás                               |
| --------------------------- | ------------------------------------ |
| Funkcionalitás (3 pont)     | A kód működik, helyes eredményt ad   |
| Kódstílus, olvashatóság (1) | Átlátható, értelmezhető megoldás     |
| Szintaxis, forma (1 pont)   | Nincs szintaktikai vagy logikai hiba |

---

### 📄 Részletes pontozás

| Feladat              | Megoldás típusa           | Funkció | Stílus | Forma | Össz. |
| -------------------- | ------------------------- | ------- | ------ | ----- | ----- |
| **1. Varázskönyvek** | Refaktor 1 (`filter/map`) | ⚠️ 0    | ✅ 1    | ⚠️ 0  | **1** |
|                      | Refaktor 2 (`reduce`)     | ✅ 3     | ✅ 1    | ✅ 1   | **5** |
| **2. Kincsek**       | Alap (`filter`)           | ⚠️ 0    | ✅ 1    | ⚠️ 0  | **1** |
| **3. Űrhajósok**     | Alap (`filter/map`)       | ⚠️ 0    | ✅ 1    | ⚠️ 0  | **1** |

---

### ⚠️ Hibák és észrevételek

* `findMagicalBooks`: a `book.itsmagical` helyett `book.isMagical` kell → nem működik
* `findValuableLightTreasures`: `console.log(result)` → `result` nincs deklarálva → hibát dob
* `selectAstronauts`: ugyanaz a hiba: `console.log(result)` → változó nem létezik
* A `reduce`-es megoldás helyes, működik, értelmezhető

---

### 🎓 **Végeredmény: 45 / 80 pont → Jeles (5)**

A dolgozat több funkcionális hibát tartalmaz, melyeket kijavítva az értékelés akár maximális is lehetne. A refaktorálás szándéka egyértelmű, de figyelj a változók pontos elnevezésére és a `console.log`-ban használt azonosítókra.
