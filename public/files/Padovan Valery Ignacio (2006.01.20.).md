**Dolgozat értékelése – 3D8A1F07**
**Témakör**: ciklusok, eljárások, szelektor metódusok, függvények, refaktorálás
**Tanuló neve**: Padovan Valery Ignacio (2006.01.20.)
**Maximális pontszám**: 80 pont
**Elért pontszám**: 62 pont
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

| Feladat                 | Megoldás típusa | Funkció | Stílus | Forma  | Össz. |
| ----------------------- | --------------- | ------- | ------ | ------ | ----- |
| **1. Varázskönyvek**    | Alap            | ✅ 3     | ✅ 1    | ⚠️ 0\* | **4** |
|                         | Refaktor 1      | ✅ 3     | ✅ 1    | ✅ 1    | **5** |
|                         | Refaktor 2      | ✅ 3     | ✅ 1    | ⚠️ 0\* | **4** |
|                         | Refaktor 3      | ⚠️ 0    | —      | —      | **0** |
| **2. Kincsek**          | Alap            | ✅ 3     | ✅ 1    | ✅ 1    | **5** |
|                         | Refaktor 1      | ✅ 3     | ✅ 1    | ✅ 1    | **5** |
|                         | Refaktor 2      | ✅ 3     | ✅ 1    | ✅ 1    | **5** |
|                         | Refaktor 3      | —       | —      | —      | **0** |
| **3. Űrhajósok**        | Alap            | ⚠️ 0    | ⚠️ 0   | ⚠️ 0   | **0** |
|                         | Refaktor 1      | ✅ 3     | ✅ 1    | ✅ 1    | **5** |
|                         | Refaktor 2      | ✅ 3     | ✅ 1    | ✅ 1    | **5** |
|                         | Refaktor 3      | ✅ 3     | ✅ 1    | ✅ 1    | **5** |
| **4. Gaming alkatrész** | Alap            | ✅ 3     | ✅ 1    | ✅ 1    | **5** |
|                         | Refaktor 1      | ✅ 3     | ✅ 1    | ✅ 1    | **5** |
|                         | Refaktor 2      | ⚠️ 0    | ⚠️ 0   | ⚠️ 0   | **0** |
|                         | Refaktor 3      | ⚠️ 0    | ⚠️ 0   | ⚠️ 0   | **0** |

---

### 🔍 Megjegyzések

* **1. feladat** – Az alapmegoldásban a `console.log(magicalKönyvek)` utólag, globálisan kerül meghívásra, amikor a változó nincs a hatókörben. Ez hibát okoz. A 3. refaktor (`findMB`) jól van megírva, viszont hibásan `magicalKönyvek(books)` néven van meghívva, ami nem létezik.
* **2. feladat** – A 3. refaktorált változat nincs megadva.
* **3. feladat** – Az alapverzió hibás, mert `simulatorHours[i]` szerepel `simulatorHours` helyett.
* **4. feladat** – A 2. és 3. refaktor nem lett befejezve (`reduce()` hiányos, nincs return).

---

### 🎓 **Végeredmény: 62 / 80 pont → Jeles (5)**

A dolgozat jól sikerült. A pontveszteség kizárólag hiányzó vagy hibásan meghívott megoldásokból adódik. Kérlek a jövőben figyelj arra, hogy minden függvény nevét pontosan használd és minden változat működjön.
