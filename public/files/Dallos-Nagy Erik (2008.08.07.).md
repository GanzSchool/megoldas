**Dolgozat értékelése – 3D8A1F07**
**Témakör**: ciklusok, eljárások, szelektor metódusok, függvények, refaktorálás
**Tanuló neve**: Dallos-Nagy Erik (2008.08.07.)
**Maximális pontszám**: 80 pont
**Elért pontszám**: 6 pont
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
| **1. Varázskönyvek**    | Alap            | ❌ 0     | ⚠️ 1   | ⚠️ 1  | **2** |
|                         | Refaktorok      | —       | —      | —     | —     |
| **2. Kincsek**          | Alap            | ❌ 0     | ❌ 0    | ❌ 0   | **0** |
|                         | Refaktorok      | —       | —      | —     | —     |
| **3. Űrhajósok**        | Alap            | ❌ 0     | ⚠️ 0   | ⚠️ 1  | **1** |
|                         | Refaktorok      | —       | —      | —     | —     |
| **4. Gaming alkatrész** | Alap            | ⚠️ 1    | ✅ 1    | ✅ 1   | **3** |
|                         | Refaktorok      | —       | —      | —     | —     |

---

### 🟡 Megjegyzések a feladatokhoz

* **1. feladat**: Ciklus sablon elindul, de a változó (`array`) nem létezik, így nem működik a megoldás.
* **2. feladat**: Nincs bejárás, a változók (`weight`, `value`) nem deklaráltak, nincs visszatérési logika.
* **3. feladat**: A feltétel megjelenik, de nem tömbbel dolgozik, és nincs sem ciklus, sem visszatérés.
* **4. feladat**: A megoldás szintaktikailag rendben van, de a feltétel hibás: nem a legolcsóbb `isGaming: true` elemet adja vissza, hanem csak azokat, amelyek **kevesebbe kerülnek mint 499 USD** – tehát nem a feladatmegfejtés logikája szerint működik, de legalább technikailag részben jó.

---

### 🎓 **Végeredmény: 6 / 80 pont → Elégtelen (1)**

A megoldások többsége nem működik vagy nem teljes. Kérlek, gyakorold újra a ciklus, feltétel, tömbkezelés és visszatérő függvények alapjait, hogy a következő dolgozat jobban sikerüljön.
