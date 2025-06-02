**Dolgozat értékelése – 3D8A1F07**
**Témakör**: ciklusok, eljárások, szelektor metódusok, függvények, refaktorálás
**Tanuló neve**: Kertész Csaba György (2007.02.02.)
**Maximális pontszám**: 80 pont
**Elért pontszám**: 34 pont
**Érdemjegy**: **4 (jó)**

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
|                         | Refaktor 1      | ⚠️ 0    | ⚠️ 0   | ⚠️ 0  | **0** |
|                         | Refaktor 2      | ✅ 3     | ✅ 1    | ✅ 1   | **5** |
| **2. Kincsek**          | Alap            | ⚠️ 1    | ⚠️ 1   | ⚠️ 1  | **3** |
| **3. Űrhajósok**        | Alap            | ✅ 3     | ✅ 1    | ✅ 1   | **5** |
|                         | Refaktor 1      | ✅ 3     | ✅ 1    | ✅ 1   | **5** |
|                         | Refaktor 2      | ⚠️ 1    | ⚠️ 1   | ⚠️ 1  | **3** |
| **4. Gaming alkatrész** | Alap            | ⚠️ 0    | ⚠️ 0   | ⚠️ 0  | **0** |

---

### 🟡 Megjegyzések a feladatokhoz

* **1. feladat**: Az `if` feltétel jó, az első ciklus működik. A második verzió (`forOfBooks`) hibás: `books.title` nem létezik, `book.title` kellene. A `filterBooks` refaktor helyes.
* **2. feladat**: A `push(treasure & treasure.weight, treasure.value)` hibás, logikátlan művelet. Itt egy objektumot vagy szöveget kellett volna betenni, nem bitműveletet.
* **3. feladat**: A két ciklusos megoldás jó. A `filter` verzióban a feltétel rossz: nem lehet `astronaut.age >= 25 && astronaut.simulatorHours >= 100` közvetlenül a `filter()` paraméterében így, mert ez logikai érték, nem függvény – hiányzik a lambda/funkció forma.
* **4. feladat**: A `components` tömb definiálva van, de nincs semmilyen szűrés, válogatás, vagy megjelenítés. A feladat gyakorlatilag hiányzik.

---

### 🎓 **Végeredmény: 34 / 80 pont → Jó (4)**

A dolgozatban több feladat részmegoldása jól sikerült, de a hibák (rossz property hivatkozás, hiányos vagy hibás logika) rontják az összképet. A stílus és a szintaxis sok helyen rendben van, de a funkcionalitásban erősíteni kell. A refaktorálás gyakorlása, valamint az összetettebb feltételek kezelése kiemelten javasolt.
