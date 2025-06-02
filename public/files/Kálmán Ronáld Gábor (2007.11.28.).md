**Dolgozat értékelése – 3D8A1F07**
**Témakör**: ciklusok, eljárások, szelektor metódusok, függvények, refaktorálás
**Tanuló neve**: Kálmán Ronáld Gábor (2007.11.28.)
**Maximális pontszám**: 80 pont
**Elért pontszám**: 49 pont
**Érdemjegy**: **5 (jeles)**

---

### 📌 Ponthatárok

| Érdemjegy         | Elért pontszám | Teljesítmény |
| ----------------- | -------------- | ------------ |
| **5 (jeles)**     | 40–80 pont     | 50%–100%     |
| **4 (jó)**        | 32–39 pont     | 40%–49%      |
| **3 (közepes)**   | 24–31 pont     | 30%–39%      |
| **2 (elégséges)** | 16–23 pont     | 20%–29%      |
| **1 (elégtelen)** | 0–15 pont      | 0%–19%       |

---

### ✅ Értékelési szempontok (minden részmegoldás max. 5 pont)

| Részszempont                     | Leírás                                 |
| -------------------------------- | -------------------------------------- |
| Funkcionalitás (3 pont)          | A kód működik, helyes eredményt ad     |
| Kódstílus, olvashatóság (1 pont) | Átlátható, értelmezhető a megoldás     |
| Szintaxis, forma (1 pont)        | Nincs hiba, nyelvhelyes a megvalósítás |

---

### 📄 Részletes pontozás

| Feladat                 | Megoldás típusa | Funkció | Stílus | Forma | Össz. |
| ----------------------- | --------------- | ------- | ------ | ----- | ----- |
| **1. Varázskönyvek**    | Alap            | ✅ 3     | ✅ 1    | ✅ 1   | **5** |
|                         | Refaktor 1      | ❌ 0     | ❌ 0    | ⚠️ 1  | **1** |
|                         | Refaktor 2      | ✅ 3     | ⚠️ 0   | ✅ 1   | **4** |
|                         | Refaktor 3      | ✅ 3     | ⚠️ 0   | ✅ 1   | **4** |
| **2. Kincsek**          | Alap            | ✅ 3     | ✅ 1    | ✅ 1   | **5** |
|                         | Refaktor 1      | ✅ 3     | ✅ 1    | ✅ 1   | **5** |
|                         | Refaktor 2      | ✅ 3     | ✅ 1    | ✅ 1   | **5** |
|                         | Refaktor 3      | ✅ 3     | ✅ 1    | ✅ 1   | **5** |
| **3. Űrhajósok**        | Alap            | ✅ 3     | ✅ 1    | ✅ 1   | **5** |
|                         | Refaktor 1      | ⚠️ 0    | ✅ 1    | ✅ 1   | **2** |
|                         | Refaktor 2      | ✅ 3     | ❌ 0    | ✅ 1   | **4** |
|                         | Refaktor 3      | ✅ 3     | ❌ 0    | ✅ 1   | **4** |
| **4. Gaming alkatrész** | Alap            | ❌ 0     | ⚠️ 1   | ⚠️ 1  | **2** |
|                         | Refaktorok      | —       | —      | —     | —     |

---

### 🟡 Megjegyzések a feladatokhoz

* **1. feladat**: Második refaktor hibás (`if (book2 == true)`), nem a `isMagical` mezőt vizsgálja. A `filter()` használata helyes, de nem tér vissza csak a címekkel.
* **2. feladat**: Minden megoldás funkcionálisan helyes.
* **3. feladat**: Az első refaktorban `return` rossz helyen van, így csak egy elemet vizsgál – emiatt hibás működés. A második és harmadik működik, de nem csak neveket ad vissza.
* **4. feladat**: A logika hibás: a legkisebb értéket nem helyesen számolja ki (pl. a `legkisebb` változót újra deklarálja a ciklusban), és nem tér vissza a legolcsóbb **egy** játékos alkatrésszel.

---

### 🎓 **Végeredmény: 49 / 80 pont → Jeles (5)**

A dolgozat jól sikerült, a legtöbb feladat helyes, működőképes. Kisebb figyelmet igényel a refaktorálás logikájának precíz kivitelezése és az `if`, `return`, `filter`, `map` pontos alkalmazása. 