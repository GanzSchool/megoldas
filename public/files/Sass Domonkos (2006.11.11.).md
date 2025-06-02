**Dolgozat értékelése – 3D8A1F07**
**Témakör**: ciklusok, eljárások, szelektor metódusok, függvények, refaktorálás
**Tanuló neve**: Sass Domonkos (2006.11.11.)
**Maximális pontszám**: 80 pont
**Elért pontszám**: 38 pont
**Érdemjegy**: **4 (jó)**

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

| Feladat                 | Megoldás típusa | Funkció | Stílus | Forma | Össz. |
| ----------------------- | --------------- | ------- | ------ | ----- | ----- |
| **1. Varázskönyvek**    | Alap            | ✅ 3     | ✅ 1    | ✅ 1   | **5** |
|                         | Refaktor        | ✅ 3     | ✅ 1    | ✅ 1   | **5** |
| **2. Kincsek**          | Alap            | ✅ 3     | ✅ 1    | ✅ 1   | **5** |
|                         | Refaktor        | ❌ 0     | ❌ 0    | ❌ 0   | **0** |
| **3. Űrhajósok**        | Alap            | ✅ 3     | ✅ 1    | ✅ 1   | **5** |
|                         | Refaktor        | ❌ 0     | ❌ 0    | ❌ 0   | **0** |
| **4. Gaming alkatrész** | Alap            | ❌ 0     | ❌ 0    | ❌ 0   | **0** |
|                         | Refaktor        | ✅ 3     | ✅ 1    | ✅ 1   | **5** |

---

### 🟨 Hibák összefoglalása

* **2. feladat refaktor**:

  * `treasures[i]` van használva `for...of` ciklusban, ahol `i` nincs definiálva.
  * `magicalBooks` tömb kerül visszaadásra, ami nem létezik ebben a kontextusban.
* **3. feladat refaktor**:

  * Ugyanaz a hiba: `astronauts[i]` egy `for...of` ciklusban – itt `astronaut` kellene.
  * `valasztas` tömb nincs deklarálva a refaktorban.
* **4. feladat alapmegoldás**:

  * A `return` utasítás a `for` ciklus első körében lefut, így csak egy elemet vizsgál meg.
  * A `if` feltételben felesleges pontosvessző miatt a blokk nem működik jól.

---

### 🎓 **Végeredmény: 38 / 80 pont → Jó (4)**

A megoldások részben helyesek, de több súlyos szintaktikai hiba és rosszul megírt ciklus miatt a refaktorálások egy része hibás. Figyelj oda, hogy a változókat helyesen használd a ciklusokon belül, és mindig deklaráld, amit használni szeretnél (`let`, `const`). 