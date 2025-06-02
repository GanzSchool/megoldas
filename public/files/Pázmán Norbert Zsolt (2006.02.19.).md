**Dolgozat értékelése – 3D8A1F07**
**Témakör**: ciklusok, eljárások, szelektor metódusok, függvények, refaktorálás
**Tanuló neve**: Pázmán Norbert Zsolt (2006.02.19.) 
**Maximális pontszám**: 80 pont
**Elért pontszám**: 7 pont
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
| **1. Varázskönyvek**    | Alap            | ⚠️ 2    | ⚠️ 0   | ⚠️ 0  | **2** |
|                         | Refaktor 1      | ❌ 0     | ❌ 0    | ❌ 0   | **0** |
| **2. Kincsek**          | Alap            | ❌ 0     | ❌ 0    | ❌ 0   | **0** |
| **3. Űrhajósok**        | Alap            | ❌ 0     | ❌ 0    | ❌ 0   | **0** |
| **4. Gaming alkatrész** | Alap            | ⚠️ 3    | ⚠️ 1   | ❌ 1   | **5** |

---

### 🟨 Megjegyzések

* A **1. feladatban** az `book.tilte` hibás tulajdonnév (`title` lenne), emiatt nem működik a kód teljesen helyesen.
* A **refaktorált verzió** (`puch`, `tilte`) hibás szintaxisokat tartalmaz.
* A **2. és 3. feladat** nem működőképes: hibás tömb- és változónevek (`array`, `t`, `result`, `lenght`, stb.), valamint logikai struktúrák.
* A **4. feladat** tartalmaz néhány működő elemet (pl. alapötlet jó), de súlyos hibák (pl. `lenght` helyett `length`, `c=components` → `c=components[i]`) miatt a logika hibás.

---

### 🎓 **Végeredmény: 7 / 80 pont → Elégtelen (1)**

A beadott megoldás súlyos szintaktikai hibákat, hibás változóneveket és hiányos logikát tartalmaz. Javasolt a kód alapos újraellenőrzése, fokozott figyelem a változónevekre és a tömbök helyes kezelésére. Érdemes minden feladatot egyenként újra felépíteni, egyszerű, működő példákkal indulva.
