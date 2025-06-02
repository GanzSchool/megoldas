**Dolgozat értékelése – 3D8A1F07**
**Témakör**: ciklusok, eljárások, szelektor metódusok, függvények, refaktorálás
**Tanuló neve**: Kossa Péter (2007.09.17.) 
**Maximális pontszám**: 80 pont
**Elért pontszám**: 0 pont
**Érdemjegy**: **1 (elégtelen)**

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
| **1. Varázskönyvek**    | Alap            | ❌ 0     | ❌ 0    | ❌ 0   | **0** |
| **2. Kincsek**          | Alap            | ❌ 0     | ❌ 0    | ❌ 0   | **0** |
| **3. Űrhajósok**        | Alap            | ❌ 0     | ❌ 0    | ❌ 0   | **0** |
| **4. Gaming alkatrész** | —               | —       | —      | —     | —     |

---

### 🟡 Megjegyzések a feladatokhoz

* **1. feladat**: A cikluson belül hibásan hivatkozol a `books.isMagical` mezőre, ami nem létezik, mivel `books` egy tömb, nem objektum.
* **2. feladat**: Hasonló hiba: `treasures.weight` és `treasures.value` nem létezik – egyes tömbelemeket kell vizsgálni (`treasures[i].weight`).
* **3. feladat**: A `astronauts.age` és `astronauts.simulatorHours` szintén nem értelmezhető tömbként, ciklusban az aktuális elemet kell vizsgálni.
* **4. feladat**: Hiányzik.

---

### 🎓 **Végeredmény: 0 / 80 pont → Elégtelen (1)**

A benyújtott kódok nem működnek, mert alapvető hibák vannak a tömbök elemeinek elérésében. A `for` ciklusban mindig az aktuális elemre (`books[i]`, `treasures[i]`, `astronauts[i]`) kell hivatkozni, nem a teljes tömbre. Javasolt a ciklusok és tömbkezelés gyakorlása, valamint működő tesztelés előtt a kód újraellenőrzése.
