**Dolgozat értékelése – 3D8A1F07**
**Témakör**: ciklusok, eljárások, szelektor metódusok, függvények, refaktorálás
**Tanuló neve**: Nguyen Tien Phong (2007.02.07.)
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

| Feladat                 | Megoldás típusa | Funkció | Stílus | Forma | Össz. |
| ----------------------- | --------------- | ------- | ------ | ----- | ----- |
| **1. Varázskönyvek**    | 1.              | ✅ 3     | ✅ 1    | ✅ 1   | **5** |
|                         | 2.              | ✅ 3     | ✅ 1    | ✅ 1   | **5** |
|                         | 3.              | ❌ 0     | ❌ 0    | ❌ 0   | **0** |
|                         | 4.              | ❌ 0     | ❌ 0    | ❌ 0   | **0** |
| **2. Kincsek**          | 1.              | ✅ 3     | ✅ 1    | ✅ 1   | **5** |
|                         | 2.              | ✅ 3     | ✅ 1    | ✅ 1   | **5** |
|                         | 3.              | ❌ 0     | ❌ 0    | ❌ 0   | **0** |
|                         | 4.              | ❌ 0     | ❌ 0    | ❌ 0   | **0** |
| **3. Űrhajósok**        | 1.              | ✅ 3     | ✅ 1    | ✅ 1   | **5** |
|                         | 2.              | ✅ 3     | ✅ 1    | ✅ 1   | **5** |
|                         | 3.              | ❌ 0     | ❌ 0    | ❌ 0   | **0** |
|                         | 4.              | ❌ 0     | ❌ 0    | ❌ 0   | **0** |
| **4. Gaming alkatrész** | 1.              | ⚠️ 1    | ✅ 1    | ⚠️ 0  | **2** |
|                         | 2.              | ⚠️ 1    | ✅ 1    | ⚠️ 0  | **2** |
|                         | 3.              | ❌ 0     | ❌ 0    | ❌ 0   | **0** |
|                         | 4.              | ❌ 0     | ❌ 0    | ❌ 0   | **0** |

---

### 🟨 Részletes hibák

* **Több helyen elírás van a `filter` metódusnál** → helytelenül `filler` szerepel → ezek a kódrészek nem működnek, hibát dobnak.
* Ugyanez igaz a `min()` függvényre is, ami **nem létezik tömbön** → `reduce()` kellett volna helyette.
* A `console.log` hívások némelyike **nem tartalmaz paramétert vagy nem hívja meg a függvényt** (pl. `console.log(findMagicalBooks3)` helyett `console.log(findMagicalBooks3(books))`).

---

### 🎓 **Végeredmény: 45 / 80 pont → Jeles (5)**

A dolgozat **minden feladattípusra tartalmaz legalább 2 működő megoldást**.
A további 8 megoldás **szintaktikai hiba miatt nem fut**, ezért nem kaptak pontot.
A `filter` és `reduce` helyes használatának pontosítása után a dolgozat akár hibátlan is lehetne.
