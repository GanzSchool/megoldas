**Dolgozat értékelése – 3D8A1F07**
**Témakör**: ciklusok, eljárások, szelektor metódusok, függvények, refaktorálás
**Tanuló neve**: Magyar Dániel Kristóf (2007.10.24.)
**Maximális pontszám**: 80 pont
**Elért pontszám**: 75 pont
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
|                         | Refaktor 1      | ✅ 3     | ✅ 1    | ✅ 1   | **5** |
|                         | Refaktor 2      | ✅ 3     | ✅ 1    | ✅ 1   | **5** |
|                         | Refaktor 3      | ✅ 3     | ✅ 1    | ✅ 1   | **5** |
| **2. Kincsek**          | Alap            | ✅ 3     | ✅ 1    | ✅ 1   | **5** |
|                         | Refaktor 1      | ✅ 3     | ✅ 1    | ✅ 1   | **5** |
|                         | Refaktor 2      | ✅ 3     | ✅ 1    | ✅ 1   | **5** |
|                         | Refaktor 3      | ✅ 3     | ✅ 1    | ✅ 1   | **5** |
| **3. Űrhajósok**        | Alap            | ✅ 3     | ✅ 1    | ✅ 1   | **5** |
|                         | Refaktor 1      | ✅ 3     | ✅ 1    | ✅ 1   | **5** |
|                         | Refaktor 2      | ✅ 3     | ✅ 1    | ✅ 1   | **5** |
|                         | Refaktor 3      | ✅ 3     | ✅ 1    | ✅ 1   | **5** |
| **4. Gaming alkatrész** | Alap            | ✅ 3     | ✅ 1    | ✅ 1   | **5** |
|                         | Refaktor 1      | ✅ 3     | ✅ 1    | ✅ 1   | **5** |
|                         | Refaktor 2      | ⚠️ 1    | ⚠️ 1   | ⚠️ 1  | **3** |
|                         | Refaktor 3      | ⚠️ 1    | ⚠️ 1   | ⚠️ 1  | **3** |

---

### 🟡 Megjegyzések a feladatokhoz

* **1–3. feladat**: Minden megoldás működőképes, logikusan, szintaktikailag is helyes.
* **4. feladat**: A 3. és 4. refaktor `sort(c => c.price)` helytelen, mert nem adja meg két elem közti viszonyt. Helyes forma: `sort((a, b) => a.price - b.price)`. Így hibásan a legdrágábbat adja vissza, nem a legolcsóbbat.

---

### 🎓 **Végeredmény: 75 / 80 pont → Jeles (5)**

Nagyon szép munka! A feladatok többsége pontosan és tisztán lett megvalósítva. Egyedül a 4. feladat utolsó két refaktor verziójában volt logikai hiba a rendezésnél, de ez nem rontotta jelentősen az összteljesítményt. Gratulálok!
