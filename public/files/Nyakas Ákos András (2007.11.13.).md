**Dolgozat értékelése – 3D8A1F07**
**Témakör**: ciklusok, eljárások, szelektor metódusok, függvények, refaktorálás
**Tanuló neve**: Nyakas Ákos András (2007.11.13.)
**Maximális pontszám**: 80 pont
**Elért pontszám**: 73 pont
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

* **1–3. feladat**: Minden megoldás működőképes, kódstílus egységes, névhasználat következetes.
* **4. feladat**: A 3. és 4. refaktor nem megfelelő – a `sort(component => component.price)` szintaktikailag hibás, mivel nem hasonlít össze két elemet. Helyesen: `sort((a, b) => a.price - b.price)`. Így ezek hibás eredményt adnak (nem a legolcsóbbat).

---

### 🎓 **Végeredmény: 73 / 80 pont → Jeles (5)**

Nagyon jó dolgozat! Látszik, hogy érted a ciklusokat, szűrést és tömbkezelést. A rendezés metódusát még érdemes pontosítani, de a feladatokat jól oldottad meg, következetes szerkezetben. Gratulálok az eredményhez!
