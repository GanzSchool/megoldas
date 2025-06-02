**Dolgozat értékelése – 3D8A1F07**
**Témakör**: ciklusok, eljárások, szelektor metódusok, függvények, refaktorálás
**Tanuló neve**: —
**Maximális pontszám**: 80 pont
**Elért pontszám**: 49 pont
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

| Feladat              | Megoldás típusa                | Funkció | Stílus | Forma | Össz. |
| -------------------- | ------------------------------ | ------- | ------ | ----- | ----- |
| **1. Varázskönyvek** | `findmagicalbooks`             | ✅ 3     | ✅ 1    | ⚠️ 0  | **4** |
|                      | `findmagicalkonyvek`           | ✅ 3     | ✅ 1    | ✅ 1   | **5** |
|                      | `fingmagicalvarazskonyv`       | ⚠️ 0    | ⚠️ 0   | ⚠️ 0  | **0** |
| **2. Kincsek**       | `findvaluablelighttreasures`   | ⚠️ 0    | ⚠️ 0   | ⚠️ 0  | **0** |
|                      | `findvaluablelightkincs`       | ✅ 3     | ✅ 1    | ✅ 1   | **5** |
|                      | `findvaluablelightkincseslada` | ✅ 3     | ✅ 1    | ✅ 1   | **5** |
| **3. Űrhajósok**     | `selectAstronauts`             | ✅ 3     | ✅ 1    | ✅ 1   | **5** |
|                      | `selectasztronauta`            | ⚠️ 0    | ⚠️ 0   | ⚠️ 0  | **0** |
|                      | `selecturhajos`                | ✅ 3     | ✅ 1    | ⚠️ 0  | **4** |

---

### 📋 Részletes hibák

* **`book.ismagical`** és **`book.titles`**: kisbetű/nagybetű problémák – nem egyezik az adattal (helyes: `book.isMagical`, `book.title`)
* **`treasure.filter(...)`** → `treasures.filter(...)`: elírás – a tömb neve nem egyezik
* **`a.astronauts`** → `a.simulatorHours`: hibás változónév
* **`result` vs `restult`**: gépelési hiba → változóhiba

---

### 🎓 **Végeredmény: 49 / 80 pont → Jeles (5)**

A feladatmegoldások nagy része működőképes volt, de több helyen előfordult hibás változónév vagy elírás. A refaktorálási készség és a főbb algoritmusok ismerete azonban jól látszik. Gratulálok!
