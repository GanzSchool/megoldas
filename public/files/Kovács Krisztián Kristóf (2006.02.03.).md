**Dolgozat értékelése – 3D8A1F07**
**Témakör**: ciklusok, eljárások, szelektor metódusok, függvények, refaktorálás
**Tanuló neve**: Kovács Krisztián Kristóf (2006.02.03.)
**Maximális pontszám**: 80 pont
**Elért pontszám**: 31 pont
**Érdemjegy**: **3 (közepes)**

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

| Feladat                 | Megoldás típusa      | Funkció | Stílus | Forma | Össz. |
| ----------------------- | -------------------- | ------- | ------ | ----- | ----- |
| **1. Varázskönyvek**    | `for` ciklus (1)     | ❌ 0     | ✅ 1    | ❌ 0   | **1** |
|                         | `for of` ciklus      | ❌ 0     | ✅ 1    | ❌ 0   | **1** |
|                         | `filter/map`         | ✅ 3     | ✅ 1    | ✅ 1   | **5** |
| **2. Kincsek**          | `filter/map` (1)     | ❌ 0     | ✅ 1    | ❌ 0   | **1** |
|                         | `for of` ciklus      | ✅ 3     | ✅ 1    | ❌ 0   | **4** |
|                         | `filter/map` (ismét) | ❌ 0     | ✅ 1    | ❌ 0   | **1** |
| **3. Űrhajósok**        | `filter/map`         | ✅ 3     | ✅ 1    | ✅ 1   | **5** |
|                         | `for` ciklus         | ✅ 3     | ✅ 1    | ❌ 0   | **4** |
| **4. Gaming alkatrész** | `filter + reduce`    | ✅ 3     | ✅ 1    | ❌ 0   | **4** |
|                         | kommentált verzió    | ❌ 0     | ❌ 0    | ❌ 0   | **0** |

---

### 🟢 Megjegyzések a feladatokhoz

* **1. feladat**: Több `findmagicbook` nevű függvény is szerepel, ami hibát okoz. Az első és második megoldás szintaktikai hibás (hibás változónév: `i` helyett `index`, ill. `books.isMagical` helyett `book.isMagical`). Egyedül a `filter/map` megoldás jó.
* **2. feladat**: Az első `filter`-es megoldás nem ad vissza értéket (hiányzik a `return`), így hibás. A `for of` megoldás működőképes. A `console.log` hibásan hivatkozik nem létező változóra az első megoldásnál.
* **3. feladat**: A `filter`-es megoldás korrekt. A `for` ciklusos megoldás működik, de felesleges változót (`element`) hoz létre, és csak az `simulatorHours` értéket vizsgálja, az `age`-t nem, tehát nem teljesen helyes.
* **4. feladat**: A `filter + reduce` logika helyes, de nincs `return`, így nem ad vissza eredményt. A `console.log` helytelenül hivatkozik a függvényre, nem a visszatérési értékre. A második megoldás (kommentelt blokk) hiányos, nincs lezárva és nem működőképes.

---

### 🎓 **Végeredmény: 31 / 80 pont → Közepes (3)**

Az értékelés alapján a megoldások részben működőképesek, de sok hibát tartalmaznak. Többször hiányzik a `return`, hibás a változónév, vagy a `console.log` nem a megfelelő változóra hivatkozik. A `filter/map` megoldások között van, ami jó, de a többi gyakran nem működik. A ciklusos megoldásoknál gyakoriak a figyelmetlenségből adódó hibák. A függvények definiálása és visszatérési értéke nem mindenhol megfelelő.

Dolgozatod alapján látni, hogy ismered az alapokat, de figyelmesebben kellene dolgozni. Tesztelés során érdemes mindig megnézni, mit ír ki a `console.log`. Fontos, hogy ne hagyj el `return` utasításokat, és a változók nevét pontosan használd.
