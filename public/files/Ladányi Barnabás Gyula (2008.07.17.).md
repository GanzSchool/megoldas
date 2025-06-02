**Dolgozat értékelése – 3D8A1F07**
**Témakör**: ciklusok, eljárások, szelektor metódusok, függvények, refaktorálás
**Tanuló neve**: —
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

| Feladat                 | Megoldás típusa           | Funkció | Stílus | Forma | Össz. |
| ----------------------- | ------------------------- | ------- | ------ | ----- | ----- |
| **1. Varázskönyvek**    | foreach                   | ⚠️ 0    | ⚠️ 0   | ⚠️ 0  | **0** |
|                         | filter                    | ✅ 3     | ✅ 1    | ✅ 1   | **5** |
|                         | short filter              | ✅ 3     | ✅ 1    | ✅ 1   | **5** |
| **2. Gaming alkatrész** | előkészítés (min keresés) | ✅ 3     | ⚠️ 0   | ✅ 1   | **4** |
|                         | first() függvény          | ⚠️ 0    | ⚠️ 0   | ⚠️ 0  | **0** |
|                         | foreach                   | ✅ 3     | ✅ 1    | ✅ 1   | **5** |
|                         | filter                    | ✅ 3     | ✅ 1    | ✅ 1   | **5** |
|                         | short filter              | ⚠️ 0    | ⚠️ 0   | ⚠️ 0  | **0** |

---

### ⚠️ Hibák és észrevételek

* `foreach` a varázskönyveknél hibás: az `=` operátor miatt minden elem hozzáadódik, ez **logikai hiba**.
* A `first()` nevű függvény nem működik: `isGaming` és `price` változók nincsenek definiálva.
* A `shortfilter` függvény (`components`) esetén szintaxis hiba van: `thing =>` hiányzik a paraméter definiálása előtt.
* A `let cheapestgaming = 10**1000000` extrém érték technikailag működik, de nem gyakorlati, ez nem okozott levonást, csak stílusból nem kapott teljes pontot.

---

### 🎓 **Végeredmény: 45 / 80 pont → Jeles (5)**

A dolgozat teljesíti az ötöshöz szükséges feltételeket. Néhány szintaktikai és logikai hiba javításával magasabb pontszám is elérhető lett volna. Gratulálok az eredményhez!
