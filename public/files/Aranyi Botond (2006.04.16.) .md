**Dolgozat értékelése – 3D8A1F07**
**Témakör**: ciklusok, eljárások, szelektor metódusok, függvények, refaktorálás
**Tanuló neve**: Aranyi Botond (2006.04.16.) 
**Maximális pontszám**: 80 pont
**Elért pontszám**: 10 pont
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
| **1. Varázskönyvek**    | Alap            | ⚠️ 1    | ✅ 1    | ⚠️ 1  | **3** |
| **2. Kincsek**          | —               | —       | —      | —     | **0** |
| **3. Űrhajósok**        | Alap            | ⚠️ 1    | ✅ 1    | ⚠️ 1  | **3** |
| **4. Gaming alkatrész** | Alap            | ⚠️ 2    | ✅ 1    | ✅ 1   | **4** |

---

### 🟡 Megjegyzések a feladatokhoz

* **1. feladat**: A `return` utasítás a cikluson belül van, így az első találat után kilép a függvény, nem tér vissza az összes mágikus könyvvel. A `console.log(magicalkonyv)` nem működik, mivel ez nem globális változó, hanem a függvényen belül van.
* **2. feladat**: Hiányzik.
* **3. feladat**: A `simulatorHours` változó nincs definiálva; helyette `astronauts[i].simulatorHours` szükséges. Emellett a `result` változó nincs deklarálva (`let` vagy `const`). A `console.log(result)` nem a függvényen belüli eredményt írja ki.
* **4. feladat**: A feltétel működik, de nem a legolcsóbb elemet adja vissza, csak kilistázza a játékos elemek nevét, így a specifikus feladatot nem teljesíti.

---

### 🎓 **Végeredmény: 10 / 80 pont → Elégtelen (1)**

A megoldásokban sok a szintaktikai hiba, több feladat nem hozza a kívánt működést. Ajánlott ismét átvenni:

* a ciklusok helyes működését,
* a return és scope használatát,
* valamint a változók megfelelő deklarálását és elérését objektumokon belül.
